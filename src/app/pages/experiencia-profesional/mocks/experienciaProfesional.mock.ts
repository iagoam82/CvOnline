import { ExperienciaProfesional } from '../models/experienciaProfesional.interface';

export const EXPERIENCIA_PROFESIONAL: ExperienciaProfesional[] = [
    {
        id: 1,
        puesto: 'Camarero',
        empresa: 'Varias empresas',
        fecha: 'Enero/2004 - Marzo/2013',
        descripcion: 'Real club de golf de A Coruña'+
        'Club financiero atlántico'+
        'Casa Paula, Hotel AC'+
        'Hotel Tryp María Pita',
        foto: 'assets/images/camarero.JPG'
    },
    {
        id: 2,
        puesto: 'Co-propietario',
        empresa: 'Recoveco café',
        fecha: 'Octubre 2013 - Febrero 2019',
        descripcion: 'Control de stocks, negociación con proveedores,'+
        'desempeño integral de todas las labores de la cafetería,'+
        'creación y fidelización de cartera de clientes',
        foto: 'assets/images/recoveco.JPG'
    },
    {
        id: 3,
        puesto: 'Varios puestos',
        empresa: 'Varias empresas',
        fecha: 'Octubre 2019 - Diciembre 2022',
        descripcion: 'Compagino los estudios del ciclo,'+
        'con diferentes puestos temporales en diferentes categorías.',
        foto: 'assets/images/varios.JPG'
    },
    {
        id: 4,
        puesto: 'Desarrollador web',
        empresa: 'Indra',
        fecha: 'Octubre 2022 - Diciembre 2022',
        descripcion: 'Prácticas del ciclo superior.'+
        'He profundizado en Java, afianzando lo conocimientos previos'+
        'y adquiriendo nuevos conceptos',
        foto: 'assets/images/indra.JPG'
    }
    
]