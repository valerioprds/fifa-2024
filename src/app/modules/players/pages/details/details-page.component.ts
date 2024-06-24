import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPlayer } from '../../../core/models/IPlayer.interface';
import { PlayerService } from '../../../../services/player.service';

type PlayerId = `${string}-${string}-${string}-${string}-${string}`;

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss',
})
export class DetailsPageComponent implements OnInit {
  player: IPlayer = {} as IPlayer;
  averages: { [key: string]: number } | null = null
  
  private route = inject(ActivatedRoute);
  private playerService = inject(PlayerService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const heroId: PlayerId = id as PlayerId;
      this.player = this.playerService.getPlayerById(heroId) as IPlayer;
      this.averages = this.playerService.getPlayerAverages(heroId);
      console.log(this.averages)
    } else {
      // manejar el caso donde id es null
    }
  }

  isVideosPage(): boolean {
    return this.route.firstChild?.snapshot?.routeConfig?.path === 'videos';
  }
}
