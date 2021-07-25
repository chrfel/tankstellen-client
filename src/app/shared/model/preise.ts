import {Tankstelle} from './tankstelle';

export interface Preise {
  preiseId: string;
  time: string;
  benzin: number;
  diesel: number;
  tankstelle: Tankstelle;
}
