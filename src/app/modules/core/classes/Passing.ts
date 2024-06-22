import { IPassing } from '../models/IPassing.interface';

export class Passing implements IPassing {
  vision: number;
  crossing: number;
  fkAcc: number;
  longPass: number;
  shortPass: number;
  curve: number;

  constructor(config: IPassing) {
    this.vision = config.vision;
    this.crossing = config.crossing;
    this.fkAcc = config.fkAcc;
    this.longPass = config.longPass;
    this.shortPass = config.shortPass;
    this.curve = config.curve;
  }
}
