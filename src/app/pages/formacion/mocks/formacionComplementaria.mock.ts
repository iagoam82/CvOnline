import { FormacionComplementaria } from "../models/formacionComplementaria.interface";

export const FORMACION_COMPLEMENTARIA: FormacionComplementaria[] = [
    {
        id: 1,
        titulo:'Bootstrap 4 Maquetación responsive',
        centro:'OpenWebinars',
        fecha:'Noviembre/2022',
        horas: 6,
        descripcion:'Diseño responsive, contenedores, grid, filas, columnas, gutter, elementos de texto, imágenes, elementos media, elementos incrustados',
        imagen:'/assets/images/openwebinars.JPG'
    },
    {
        id: 3,
        titulo:'Angular 15 Básico',
        centro:'OpenBootcamp',
        fecha:'Junio/2023',
        horas: 20,
        descripcion:'Componentes, directivas, servicios, enrutado, formularios, peticiones http, pipes, observables, rxjs, etc.',
        imagen:'/assets/images/openbootcamp.JPG'
    },
    {
        id: 2,
        titulo:'Cloud computing',
        centro:'AMTEGA',
        fecha:'Febrero/2023',
        horas: 6,
        descripcion:'Conceptos básicos acerca de la computación en la nube,ventajas e inconvenientes principales plataformas de computación en la nube y sus servicios.',
        imagen:'/assets/images/amtega.JPG'
    },

]