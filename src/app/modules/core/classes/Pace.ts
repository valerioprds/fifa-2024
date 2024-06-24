import { IPace } from '../models/IPace.interface';

export class Pace implements IPace {
  acceleration: number;
  sprintSpeed: number;

  constructor(config: IPace) {
    this.ValidatePaceConfig(config);
    this.acceleration = config.acceleration;
    this.sprintSpeed = config.sprintSpeed;
  }

  private ValidatePaceConfig(config: IPace): void {
    const attributes = ['acceleration', 'sprintSpeed'];

    for (const attribute of attributes) {
      if (typeof config[attribute as keyof IPace] !== 'number' || config[attribute as keyof IPace] < 0) {
        throw new Error(`Invalid value for ${attribute}`);
      }
    }
  }
}
