import { FormacionAcademica } from "../models/formacionAcademica.interface";


export const FORMACION_ACADEMICA: FormacionAcademica[] = [
    {
        id: 3,
        titulo:'Técnico Superior en Desarrollo de Aplicaciones Web',
        centro: 'IES Fernando Wirtz',
        fecha: 'Septiembre/2019 - Diciembre/2022',
        descripcion: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        imagen: '/assets/images/wirtz.jpg'
    },
    {
        id: 2,
        titulo:'Técnico en servicios de restaurante y bar',
        centro: 'IES Paseo das Pontes',
        fecha: 'Septiembre/2001 - Junio/2003',
        descripcion: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        imagen: '/assets/images/paseodaspontes.JPG'
    },
    {
        id: 1,
        titulo:'Educación Secundaria Obligatoria',
        centro: 'IES Salvador de Madariaga',
        fecha: 'Septiembre/1996 - Junio/2000',
        descripcion: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        imagen: '/assets/images/salvadordemadariaga.JPG'
    }
]