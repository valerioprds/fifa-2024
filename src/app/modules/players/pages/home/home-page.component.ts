import { Component, inject } from '@angular/core';
import { IPlayer } from '../../../core/models/IPlayer.interface';
import { PlayerService } from '../../../../services/player.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  players: IPlayer[] = [];
  playerService = inject(PlayerService);

  ngOnInit(): void {
    this.players = this.playerService.getPlayers();
    console.log(this.players)
  }
}
