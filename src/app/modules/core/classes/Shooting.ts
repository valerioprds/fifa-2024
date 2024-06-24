import { IShooting } from '../models/IShooting.interface';

export class Shooting implements IShooting {
  attPosition: number;
  finishing: number;
  shotPower: number;
  longShots: number;
  volleys: number;
  penalties: number;

  constructor(config: IShooting) {
    this.ValidateShootingConfig(config);
    this.attPosition = config.attPosition;
    this.finishing = config.finishing;
    this.shotPower = config.shotPower;
    this.longShots = config.longShots;
    this.volleys = config.volleys;
    this.penalties = config.penalties;
  }

  private ValidateShootingConfig(config: IShooting): void {
    const attributes = [
      'attPosition',
      'finishing',
      'shotPower',
      'longShots',
      'volleys',
      'penalties',
    ];

    for (const attribute of attributes) {
      if (
        typeof config[attribute as keyof IShooting] !== 'number' ||
        config[attribute as keyof IShooting] < 0
      ) {
        throw new Error(`Invalid value for ${attribute}`);
      }
    }
  }
}
