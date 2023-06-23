import { FormacionAcademica } from "../models/formacionAcademica.interface";


export const FORMACION_ACADEMICA: FormacionAcademica[] = [
    {
        id: 3,
        titulo:'Técnico Superior en Desarrollo de Aplicaciones Web',
        centro: 'IES Fernando Wirtz',
        fecha: 'Septiembre/2019 - Diciembre/2022',
        descripcion: 'Módulos: Desarrollo web en entorno cliente, Desarrollo web en entorno servidor, Despliegue de aplicaciones web, Diseño de interfaces web, Diseño web, Empresa e iniciativa emprendedora, FCT',
        imagen: '/assets/images/wirtz.jpg'
    },
    {
        id: 2,
        titulo:'Técnico en servicios de restaurante y bar',
        centro: 'IES Paseo das Pontes',
        fecha: 'Septiembre/2001 - Junio/2003',
        descripcion: 'Módulos: Ofertas gastronómicas y sistemas de aprovisionamiento, Técnicas elementales de cocina, Servicios en bar-cafetería, Servicios en restaurante, Seguridad e higiene en la manipulación de alimentos, Formación y orientación laboral, Empresa e iniciativa emprendedora, Inglés técnico para grado medio, Proyecto de servicio de restaurante y bar, Formación en centros de trabajo',
        imagen: '/assets/images/paseodaspontes.JPG'
    },
    {
        id: 1,
        titulo:'Educación Secundaria Obligatoria',
        centro: 'IES Salvador de Madariaga',
        fecha: 'Septiembre/1996 - Junio/2000',
        descripcion: 'Conocimientos globales básicos',
        imagen: '/assets/images/salvadordemadariaga.JPG'
    }
]