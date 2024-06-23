import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss',
})
export class DetailsPageComponent {
  constructor(private route: ActivatedRoute) {}

  isVideosPage(): boolean {
    return this.route.firstChild?.snapshot?.routeConfig?.path === 'videos';
  }
}
