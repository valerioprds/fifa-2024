import { IShooting } from '../models/IShooting.interface';

export class Shooting implements IShooting {
  attPosition: number;
  finishing: number;
  shotPower: number;
  longShots: number;
  volleys: number;
  penalties: number;

  constructor(config: IShooting) {
    this.attPosition = config.attPosition;
    this.finishing = config.finishing;
    this.shotPower = config.shotPower;
    this.longShots = config.longShots;
    this.volleys = config.volleys;
    this.penalties = config.penalties;
  }
}
