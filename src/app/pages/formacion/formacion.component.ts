import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.scss']
})
export class FormacionComponent implements OnInit {

 
      titulo1: string='Técnico Superior en Desarrollo de Aplicaciones Web';
      centro1: string='IES Fernando Wirtz';
      fecha1: string='Septiembre/2019 - Diciembre/2022';
      descripcion1: string='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';
      imagen1: string='/assets/images/wirtz.jpg';
   
      titulo2: string='Técnico en servicios de restaurante y bar';
      centro2: string='IES Paseo das Pontes';
      fecha2: string='Septiembre/2001 - Junio/2003';
      descripcion2: string='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';
      imagen2: string='/assets/images/wirtz.jpg';

  constructor(private router:Router){}

  ngOnInit(): void {}
}
