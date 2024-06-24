import { Injectable } from '@angular/core';
import { Player } from '../modules/core/classes/Player';
import { playersData } from '../../assets/data/PlayersData';
import { IPlayer } from '../modules/core/models/IPlayer.interface';
import { Attributes } from '../modules/core/classes/Attributes';

type PlayerId = `${string}-${string}-${string}-${string}-${string}`;

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private players: Player[] = [];

  constructor() {
    this.initializePlayers()
  }

  private initializePlayers():void {
    playersData.forEach((playerConfig: IPlayer) => {
      this.players.push(new Player(playerConfig));
    });
  }

  public getPlayers():Player[] {
    return this.players;
  }

  public getPlayerById(id: PlayerId):Player | undefined {
    return this.players.find((player: Player) => player.id === id);
  }

  public getPlayerAverages(id: PlayerId): Record<string, number> | null {
    const player = this.getPlayerById(id);
    if (player) {
      const attributes = new Attributes(player.attributes)
      return attributes.getAverages();
    }
    return null;
  }
}
