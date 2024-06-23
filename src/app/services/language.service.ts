import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private selectedLanguage: string = 'es';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  setLanguage(language: string) {
    this.selectedLanguage = language;
    this.translateService.use(language);
    console.log(this.selectedLanguage + ' from setLanguage');
  }

  getLanguage(): string {
    console.log(this.selectedLanguage + ' from getLanguage');
    return this.selectedLanguage;
  }
}
