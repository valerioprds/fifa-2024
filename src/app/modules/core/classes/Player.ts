import { EPosition } from '../enums/EPosition.enum';
import { IAttributes } from '../models/IAttributes.interface';
import { IPlayer } from '../models/IPlayer.interface';
import { Person } from './Person';

export class Player extends Person implements IPlayer {
  id: `${string}-${string}-${string}-${string}-${string}`;
  position: EPosition;
  club: string;
  number: number;
  attributes: IAttributes;

  constructor(config: IPlayer) {
    super(config);
    this.id = config.id;
    this.position = config.position;
    this.club = config.club;
    this.number = config.number;
    this.attributes = config.attributes;
  }
}
