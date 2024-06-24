import { IPhysical } from '../models/IPhysical.interface';

export class Physical implements IPhysical {
  jumping: number;
  stamina: number;
  strength: number;
  aggression: number;

  constructor(config: IPhysical) {
    this.ValidatePhysicalConfig(config);
    this.jumping = config.jumping;
    this.stamina = config.stamina;
    this.strength = config.strength;
    this.aggression = config.aggression;
  }

  private ValidatePhysicalConfig(config: IPhysical): void {
    const attributes = ['jumping', 'stamina', 'strength', 'aggression'];

    for (const attribute of attributes) {
      if (
        typeof config[attribute as keyof IPhysical] !== 'number' ||
        config[attribute as keyof IPhysical] < 0
      ) {
        throw new Error(`Invalid value for ${attribute}`);
      }
    }
  }
}
