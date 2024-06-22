import { IPhysical } from '../models/IPhysical.interface';

export class Physical implements IPhysical {
  jumping: number;
  stamina: number;
  strength: number;
  aggression: number;

  constructor(config: IPhysical) {
    this.jumping = config.jumping;
    this.stamina = config.stamina;
    this.strength = config.strength;
    this.aggression = config.aggression;
  }
}
