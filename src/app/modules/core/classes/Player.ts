import { EPosition } from '../enums/EPosition.enum';
import { IAttributes } from '../models/IAttributes.interface';
import { IPlayer } from '../models/IPlayer.interface';
import { Person } from './Person';

export class Player extends Person implements IPlayer {
  id: `${string}-${string}-${string}-${string}-${string}`;
  position: EPosition;
  club: string;
  number: number;
  imgUrl: string;
  videosUrl: string[];
  attributes: IAttributes;

  constructor(config: IPlayer) {
    super(config);
    this.ValidatePlayerConfig(config);
    this.id = config.id;
    this.position = config.position;
    this.club = config.club;
    this.number = config.number;
    this.imgUrl = config.imgUrl;
    this.videosUrl = config.videosUrl;
    this.attributes = config.attributes;
  }

  private ValidatePlayerConfig(config: IPlayer): void {
    const idPattern = /^[\w-]{8,}-[\w-]{4,}-[\w-]{4,}-[\w-]{4,}-[\w-]{12,}$/;
    if (!idPattern.test(config.id)) {
      throw new Error('Invalid id format');
    }

    if (!Object.values(EPosition).includes(config.position)) {
      throw new Error('Invalid position');
    }

    if (!config.club || typeof config.club !== 'string' || config.club.trim() === '') {
      throw new Error('Invalid club');
    }

    if (!Number.isInteger(config.number) || config.number <= 0) {
      throw new Error('Invalid number');
    }

    if (!config.imgUrl || typeof config.imgUrl !== 'string' || !this.isValidUrl(config.imgUrl)) {
      throw new Error('Invalid imgUrl');
    }

    if (!Array.isArray(config.videosUrl) || config.videosUrl.some(url => !this.isValidUrl(url))) {
      throw new Error('Invalid videosUrl');
    }

    if (!config.attributes || typeof config.attributes !== 'object') {
      throw new Error('Invalid attributes');
    }
  }

  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  }
}
