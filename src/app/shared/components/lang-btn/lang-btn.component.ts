import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-btn',
  templateUrl: './lang-btn.component.html',
  styleUrl: './lang-btn.component.scss'
})
export class LangBtnComponent {
  selectedLanguage = 'en';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(this.selectedLanguage);
  }

  onLanguageChange() {
    this.translateService.use(this.selectedLanguage);
  }
}
