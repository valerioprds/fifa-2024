import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrl: './videos-page.component.scss',
})
export class VideosPageComponent {
  videoIds: string[] = [
    'dQw4w9WgXcQ', // Example video IDs
    '9bZkp7q19f0',
    'tVj0ZTS4WF4',
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  getVideoUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }
}
