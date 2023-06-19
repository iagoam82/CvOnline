import { Component, OnInit } from '@angular/core';
import { Persona } from './persona/models/persona.interface';
import { PersonaService } from './persona/services/persona.service';
import { IdiomaService } from './idioma/services/idioma.service';
import { Idioma } from './idioma/models/idioma.interface';
import { TecnologiaService } from './tecnologia/services/tecnologia.service';
import { Tecnologia } from './tecnologia/models/tecnologia.interface';
import { CaracteristicaService } from './caracteristica/services/caracteristica.service';
import { Caracteristica } from './caracteristica/models/caracteristica.interface';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss'],
})
export class SobreMiComponent implements OnInit {

  displayedColumns: string[] = ['imagen', 'nivel'];
  displayedColumnsCaracteristicas: string[] = ['imagen','nombre', 'nivel'];
  listaPersonas: Persona[]=[];
  listaIdiomas: Idioma[]=[];
  listaTecnologias: Tecnologia[]=[];
  listaCaracteristicas: Caracteristica[]=[];

  sesion: boolean = false;
  constructor(
    private personaService: PersonaService,
    private idiomaService: IdiomaService,
    private tecnologiaService: TecnologiaService,
    private caracteristicaService: CaracteristicaService,
  ){}

  ngOnInit(): void {
    this.listaPersonas = this.personaService.obtenerPersonas();
    this.listaIdiomas = this.idiomaService.obtenerIdiomas();
    this.listaTecnologias = this.tecnologiaService.obtenerTecnologias();
    this.listaCaracteristicas = this.caracteristicaService.obtenerCaracteristicas();

  

    if(!sessionStorage.getItem('token')){
      alert('Esta página está en desarrollo, se puede visualizar el contenido y '+
      'la información pero faltan los trabajos de diseño para que la visualización sea atractiva'+
      'Por favor, clicka en el botón de aceptar para continuar');

    



      sessionStorage.setItem('token','abc123')
    }
  }
  
}

