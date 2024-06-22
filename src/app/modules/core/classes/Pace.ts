import { IPace } from '../models/IPace.interface';

export class Pace implements IPace {
  acceleration: number;
  sprintSpeed: number;

  constructor(config: IPace) {
    this.acceleration = config.acceleration;
    this.sprintSpeed = config.sprintSpeed;
  }
}
