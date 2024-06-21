import { IDribbling } from '../models/IDribbling.interface';

export class Dribbling implements IDribbling {
  agility: number;
  balance: number;
  reactions: number;
  ballControl: number;
  dribbling: number;
  composure: number;

  constructor(config: IDribbling) {
    this.agility = config.agility;
    this.balance = config.balance;
    this.reactions = config.reactions;
    this.ballControl = config.ballControl;
    this.dribbling = config.dribbling;
    this.composure = config.composure;
  }
}
