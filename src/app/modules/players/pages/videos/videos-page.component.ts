import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrl: './videos-page.component.scss',
})
export class VideosPageComponent implements OnInit {
  playerId: string | null = null;
  videoUrls: SafeResourceUrl[] | null = null;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.playerId = id;
      const navigation = this.router.getCurrentNavigation();
      const state = navigation?.extras.state as { videos: string[] };
      console.log('Received state:', state);
      if (state?.videos) {
        console.log('Videos in state:', state.videos)
        this.videoUrls = state.videos.map((url) =>
          this.sanitizer.bypassSecurityTrustResourceUrl(url)
        );
      } else {
        console.log('No videos in state');
      }
    } else {
      // manejar el caso donde id es null o inválido
    }
    console.log(this.videoUrls, 'videos page');
  }
}
