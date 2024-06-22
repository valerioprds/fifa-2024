import { IPerson } from '../models/IPerson.interface';

export class Person implements IPerson {
  name: string;
  age: number;
  nationality: string;
  height: number;
  weight: number;

  constructor(config: IPerson) {
    this.name = config.name;
    this.age = config.age;
    this.nationality = config.nationality;
    this.height = config.height;
    this.weight = config.weight;
  }
}
