import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import CryptoJS from 'crypto-js';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss'],
})
export class VideosPageComponent implements OnInit {
  videoUrls: SafeResourceUrl[] = [];
  private bytes: any;
  private decryptedValue: any;

  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    // Asegurarse de que la clave y el valor cifrado estén disponibles.
    this.bytes = CryptoJS.AES.decrypt(
      environment.videoUrlEncrypted,
      environment.secretKey
    );
    this.decryptedValue = this.bytes.toString(CryptoJS.enc.Utf8);
    console.log('Decrypted Value:', this.decryptedValue);

    this.route.queryParams.subscribe((params) => {
      if (params['videos']) {
        const videos = JSON.parse(decodeURIComponent(params['videos']));
        // Asegurarse de que la descifrado esté listo antes de procesar los vídeos
        this.videoUrls = videos.map((url: string) => this.getSafeVideoUrl(url));
        console.log('Videos:', this.videoUrls);
      }
    });
  }

  getSafeVideoUrl(url: string): SafeResourceUrl {
    const videoId = this.extractVideoId(url);
    console.log('Video ID:', videoId); // Asegúrate de que videoId es correcto
    console.log('Decrypted Base URL:', this.decryptedValue); // Confirma que decryptedValue es el esperado
    const embedUrl = `${this.decryptedValue}${videoId}`;
    console.log('embedUrl:', embedUrl); // Verificar el URL completo

    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  private extractVideoId(url: string): string {
    const regex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/|youtube.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : '';
  }
}
