import { CARACTERISTICAS } from "../../caracteristica/mocks/caracteristica.mock";
import { IDIOMAS } from "../../idioma/mocks/idioma.mock";
import { Persona } from "../models/persona.interface";
import { TECNOLOGIAS } from "../../tecnologia/mocks/tecnologia.mock";

export const PERSONAS: Persona [] =[
    {
        foto: 'assets/images/fotoiago.png',
        nombre: 'Iago Alonso',
        profesion: 'Desarrollador web',
        descripcion: 'Soy una persona organizada y responsable, con ganas de seguir'+
        'aprendiendo y desarrollándome. Me adapto con facilidad a los cambios,'+
        'buscando la mejora y el crecimiento tanto personal, como profesionalmente'+
        'Tras casi 20 años trabajando en hostelería he reorientado mi futuro'+
        'profesional hacia la informática. Actualmente busco un empleo que me permita seguir'+
        'adquiriendo conocimientos con el fin de crecer dentro de la empresa según sus necesidades.',
        idiomas: IDIOMAS,
        tecnologias: TECNOLOGIAS,
        personalidad: CARACTERISTICAS
    }
]