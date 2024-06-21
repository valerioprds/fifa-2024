import { IDefending } from './IDefending.interface';
import { IDribbling } from './IDribbling.interface';
import { IPace } from './IPace.interface';
import { IPassing } from './IPassing.interface';
import { IPhysical } from './IPhysical.interface';
import { IShooting } from './IShooting.interface';

export interface IAttributes {
  pace: IPace;
  shooting: IShooting;
  passing: IPassing;
  dribbling: IDribbling;
  defending: IDefending;
  physical: IPhysical;
}
