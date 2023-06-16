import { Caracteristica } from "../../caracteristica/models/caracteristica.interface";
import { Idioma } from "../../idioma/models/idioma.interface";
import { Tecnologia } from "../../tecnologia/models/tecnologia.interface";

export interface Persona{
    foto: string;
    nombre: string;
    profesion: string;
    descripcion: string;
    idiomas: Idioma[];
    tecnologias: Tecnologia[];
    personalidad: Caracteristica[];
}