import { IPassing } from '../models/IPassing.interface';

export class Passing implements IPassing {
  vision: number;
  crossing: number;
  fkAcc: number;
  longPass: number;
  shortPass: number;
  curve: number;

  constructor(config: IPassing) {
    this.ValidatePassingConfig(config);
    this.vision = config.vision;
    this.crossing = config.crossing;
    this.fkAcc = config.fkAcc;
    this.longPass = config.longPass;
    this.shortPass = config.shortPass;
    this.curve = config.curve;
  }

  private ValidatePassingConfig(config: IPassing): void {
    const attributes = [
      'vision',
      'crossing',
      'fkAcc',
      'longPass',
      'shortPass',
      'curve',
    ];

    for (const attribute of attributes) {
      if (
        typeof config[attribute as keyof IPassing] !== 'number' ||
        config[attribute as keyof IPassing] < 0
      ) {
        throw new Error(`Invalid value for ${attribute}`);
      }
    }
  }
}
