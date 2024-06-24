import { IAttributes } from '../models/IAttributes.interface';
import { IDefending } from '../models/IDefending.interface';
import { IDribbling } from '../models/IDribbling.interface';
import { IPace } from '../models/IPace.interface';
import { IPassing } from '../models/IPassing.interface';
import { IPhysical } from '../models/IPhysical.interface';
import { IShooting } from '../models/IShooting.interface';

export class Attributes implements IAttributes {
  pace: IPace;
  shooting: IShooting;
  passing: IPassing;
  dribbling: IDribbling;
  defending: IDefending;
  physical: IPhysical;

  constructor(config: IAttributes) {
    this.ValidateAttributesConfig(config);
    this.pace = config.pace;
    this.shooting = config.shooting;
    this.passing = config.passing;
    this.dribbling = config.dribbling;
    this.defending = config.defending;
    this.physical = config.physical;
  }

  private ValidateAttributesConfig(config: IAttributes): void {
    const attributeNames = [
      'pace',
      'shooting',
      'passing',
      'dribbling',
      'defending',
      'physical',
    ];

    for (const attributeName of attributeNames) {
      const attribute = config[attributeName as keyof IAttributes];
      if (typeof attribute !== 'object' || attribute === null) {
        throw new Error(`Invalid ${attributeName} attribute`);
      }

      for (const [key, value] of Object.entries(attribute)) {
        if (typeof value !== 'number' || value < 0) {
          throw new Error(`Invalid value for ${attributeName}.${key}`);
        }
      }
    }
  }

  private calculateAverageAttributes(attribute: object) {
    const values = Object.values(attribute);
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
  }

  public getAverages(): Record<string, number> {
    const paceStat = this.calculateAverageAttributes(this.pace);
    const shootingStat = this.calculateAverageAttributes(this.shooting);
    const passingStat = this.calculateAverageAttributes(this.passing);
    const dribblingStats = this.calculateAverageAttributes(this.dribbling);
    const defendingStats = this.calculateAverageAttributes(this.defending);
    const physicalStats = this.calculateAverageAttributes(this.physical);

    return {
      Pace: parseFloat(paceStat.toFixed(2)),
      Shooting: parseFloat(shootingStat.toFixed(2)),
      Passing: parseFloat(passingStat.toFixed(2)),
      Dribbling: parseFloat(dribblingStats.toFixed(2)),
      Defending: parseFloat(defendingStats.toFixed(2)),
      Physical: parseFloat(physicalStats.toFixed(2)),
    };
  }
}
