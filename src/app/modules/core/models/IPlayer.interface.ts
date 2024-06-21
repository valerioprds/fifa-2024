import { EPosition } from '../enums/EPosition.enum';
import { IAttributes } from './IAttributes.interface';
import { IPerson } from './IPerson.interface';

export interface IPlayer extends IPerson {
  id: `${string}-${string}-${string}-${string}-${string}`;
  position: EPosition;
  club: string;
  number: number;
  attributes: IAttributes;
}
