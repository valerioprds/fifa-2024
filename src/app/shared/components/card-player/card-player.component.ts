import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from '../../../modules/core/models/IPlayer.interface';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.scss',
})
export class CardPlayerComponent {
  @Input() player: IPlayer | undefined;
}
