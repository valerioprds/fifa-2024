import { IDefending } from '../models/IDefending.interface';

export class Defending implements IDefending {
  interceptions: number;
  headingAcc: number;
  defAware: number;
  standTackle: number;
  slideTackle: number;

  constructor(config: IDefending) {
    this.ValidateDefendingConfig(config);
    this.interceptions = config.interceptions;
    this.headingAcc = config.headingAcc;
    this.defAware = config.defAware;
    this.standTackle = config.standTackle;
    this.slideTackle = config.slideTackle;
  }

  private ValidateDefendingConfig(config: IDefending): void {
    const attributes = [
      'interceptions',
      'headingAcc',
      'defAware',
      'standTackle',
      'slideTackle',
    ];

    for (const attribute of attributes) {
      if (
        typeof config[attribute as keyof IDefending] !== 'number' ||
        config[attribute as keyof IDefending] < 0
      ) {
        throw new Error(`Invalid value for ${attribute}`);
      }
    }
  }
}
