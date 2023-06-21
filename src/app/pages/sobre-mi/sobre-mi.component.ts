import { Component, OnInit } from '@angular/core';
import { Persona } from './persona/models/persona.interface';
import { PersonaService } from './persona/services/persona.service';
import { IdiomaService } from './idioma/services/idioma.service';
import { Idioma } from './idioma/models/idioma.interface';
import { TecnologiaService } from './tecnologia/services/tecnologia.service';
import { Tecnologia } from './tecnologia/models/tecnologia.interface';
import { CaracteristicaService } from './caracteristica/services/caracteristica.service';
import { Caracteristica } from './caracteristica/models/caracteristica.interface';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss'],
})
export class SobreMiComponent implements OnInit {

  displayedColumns: string[] = ['imagen', 'nivel'];
  displayedColumnsCaracteristicas: string[] = ['imagen', 'nombre', 'nivel'];
  listaPersonas: Persona[] = [];
  listaIdiomas: Idioma[] = [];
  listaTecnologias: Tecnologia[] = [];
  listaCaracteristicas: Caracteristica[] = [];

  public colSize1=2;
  public colSize2=3;
  public isMobile: boolean = false;

  sesion: boolean = false;
  constructor(
    private personaService: PersonaService,
    private idiomaService: IdiomaService,
    private tecnologiaService: TecnologiaService,
    private caracteristicaService: CaracteristicaService,
    breackpointObserver: BreakpointObserver//Para responsive
  ){ 
 //Si detecta que es movil, cambia el tamaño de las columnas
  breackpointObserver.observe([
    Breakpoints.Handset
  ]).subscribe(result=>{
    this.isMobile=result.matches;
      if(this.isMobile){
        this.colSize1=1;
        this.colSize2=1;
      }
      else{
        this.colSize1=2;
        this.colSize2=3;
      }
  });
  }
  ngOnInit(): void {
    this.listaPersonas = this.personaService.obtenerPersonas();
    this.listaIdiomas = this.idiomaService.obtenerIdiomas();
    this.listaTecnologias = this.tecnologiaService.obtenerTecnologias();
    this.listaCaracteristicas = this.caracteristicaService.obtenerCaracteristicas();

    if (!sessionStorage.getItem('token')) {
      alert('Esta página está en desarrollo, se puede visualizar el contenido y ' +
        'la información pero faltan los trabajos de diseño para que la visualización sea atractiva\n' +
        'Para visualizarla en un teléfono móvil, de momento se debe poner el teléfono en horizontal\n' +
        ' Por favor, clicka en el botón de aceptar para continuar');
      sessionStorage.setItem('token', 'abc123')
    }
  }
}

