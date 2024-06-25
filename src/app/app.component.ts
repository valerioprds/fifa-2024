import { Component, OnInit, isDevMode } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
// import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    if (isDevMode()) {
      console.log('DEVELOPMENT MODE');
    } else {
      console.log('PRODUCTION MODE');
    }
  }
}