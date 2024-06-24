import { IDribbling } from '../models/IDribbling.interface';

export class Dribbling implements IDribbling {
  agility: number;
  balance: number;
  reactions: number;
  ballControl: number;
  dribbling: number;
  composure: number;

  constructor(config: IDribbling) {
    this.ValidateDribblingConfig(config);
    this.agility = config.agility;
    this.balance = config.balance;
    this.reactions = config.reactions;
    this.ballControl = config.ballControl;
    this.dribbling = config.dribbling;
    this.composure = config.composure;
  }

  private ValidateDribblingConfig(config: IDribbling): void {
    const attributes = [
      'agility',
      'balance',
      'reactions',
      'ballControl',
      'dribbling',
      'composure',
    ];

    for (const attribute of attributes) {
      if (
        typeof config[attribute as keyof IDribbling] !== 'number' ||
        config[attribute as keyof IDribbling] < 0
      ) {
        throw new Error(`Invalid value for ${attribute}`);
      }
    }
  }
}
