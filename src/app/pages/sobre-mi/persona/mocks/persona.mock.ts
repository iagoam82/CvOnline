import { CARACTERISTICAS } from "../../caracteristica/mocks/caracteristica.mock";
import { IDIOMAS } from "../../idioma/mocks/idioma.mock";
import { Persona } from "../models/persona.interface";
import { TECNOLOGIAS } from "../../tecnologia/mocks/tecnologia.mock";

export const PERSONAS: Persona [] =[
    {
        foto: 'assets/images/fotoiago.png',
        nombre: 'Iago Alonso',
        profesion: 'Desarrollador web',
        descripcion: 'Soy un desarrollador de software con 5 años de experiencia en el desarrollo de aplicaciones web y móviles. Me gusta trabajar en equipo y aprender nuevas tecnologías.',
        idiomas: IDIOMAS,
        tecnologias: TECNOLOGIAS,
        personalidad: CARACTERISTICAS
    }
]