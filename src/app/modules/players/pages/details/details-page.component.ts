import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  averages: { [key: string]: number } | null = null;
  videos: string[] = [];

  private route = inject(ActivatedRoute);
  private playerService = inject(PlayerService);
  private router = inject(Router);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const heroId: PlayerId = id as PlayerId;
      this.player = this.playerService.getPlayerById(heroId) as IPlayer;
      this.averages = this.playerService.getPlayerAverages(heroId);
      this.videos = this.player.videosUrl || []; // Assuming videosUrl is an array of video links
      console.log(id, this.player, this.videos);
    } else {
      // manejar el caso donde id es null
    }
  }

  isVideosPage(): boolean {
    return this.route.firstChild?.snapshot?.routeConfig?.path === 'videos';
  }

  goToVideosPage(): void {
    console.log('Navigating with videos:', this.videos);
    this.router.navigate(['videos'], {
      relativeTo: this.route,
      state: { videos: this.videos }
    });
  }


  /* Esto es importante porque videos es una ruta hija de la ruta actual (details/:id). Sin relativeTo,
   Angular intentaría navegar a la ruta 'videos' desde la raíz de la aplicación,
   lo cual no es lo que queremos. */
}
