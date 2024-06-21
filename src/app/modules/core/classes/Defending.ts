import { IDefending } from '../models/IDefending.interface';

export class Defending implements IDefending {
  interceptions: number;
  headingAcc: number;
  defAware: number;
  standTackle: number;
  slideTackle: number;

  constructor(config: IDefending) {
    this.interceptions = config.interceptions;
    this.headingAcc = config.headingAcc;
    this.defAware = config.defAware;
    this.standTackle = config.standTackle;
    this.slideTackle = config.slideTackle;
  }
}
