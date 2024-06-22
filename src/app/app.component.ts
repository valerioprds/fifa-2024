import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  selectedLanguage = 'es';

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    this.selectedLanguage = 'en';
    this.translateService.use(this.selectedLanguage);
  }

  onLanguageChange() {
    this.translateService.use(this.selectedLanguage);
  }
}
