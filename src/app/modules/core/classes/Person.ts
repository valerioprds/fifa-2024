import { IPerson } from '../models/IPerson.interface';

export class Person implements IPerson {
  name: string;
  age: number;
  nationality: string;
  height: number;
  weight: number;

  constructor(config: IPerson) {
    this.ValidatePersonConfig(config);
    this.name = config.name;
    this.age = config.age;
    this.nationality = config.nationality;
    this.height = config.height;
    this.weight = config.weight;
  }

  private ValidatePersonConfig(config: IPerson): void {
    if (!config.name || typeof config.name !== 'string' || config.name.trim().length === 0) {
      throw new Error('Invalid name provided');
    }

    if (!config.age || typeof config.age !== 'number' || config.age < 0) {
      throw new Error('Invalid age provided');
    }

    if (!config.nationality || typeof config.nationality !== 'string' || config.nationality.trim().length === 0) {
      throw new Error('Invalid nationality provided');
    }

    if (!config.height || typeof config.height !== 'number' || config.height <= 0) {
      throw new Error('Invalid height provided');
    }

    if (!config.weight || typeof config.weight !== 'number' || config.weight <= 0) {
      throw new Error('Invalid weight provided');
    }
  }
}
