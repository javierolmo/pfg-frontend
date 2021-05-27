import { Instrumento } from './instrumento';
import {Tonality} from './tonality';

export interface Specs {
    movementTitle: string;
    movementNumber: string;
    measures: number;
    instrumentos: Instrumento[];
    authors: string[];
    compas: string;
    tonalidad: Tonality;
}
