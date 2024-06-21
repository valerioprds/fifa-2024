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
    this.pace = config.pace;
    this.shooting = config.shooting;
    this.passing = config.passing;
    this.dribbling = config.dribbling;
    this.defending = config.defending;
    this.physical = config.physical;
  }
}
