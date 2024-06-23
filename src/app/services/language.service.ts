import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private selectedLanguage: string;

  constructor(private translateService: TranslateService) {
    // Intenta obtener el idioma guardado del almacenamiento local
    const storedLang = localStorage.getItem('selectedLanguage');
    // Usa el idioma guardado o el predeterminado ('es') si no hay ninguno
    this.selectedLanguage = storedLang ? storedLang : 'es';
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  setLanguage(language: string) {
    this.selectedLanguage = language;
    // Guarda el idioma seleccionado en el almacenamiento local
    localStorage.setItem('selectedLanguage', language);
    this.translateService.use(language);
    console.log(this.selectedLanguage + ' from setLanguage');
  }
}
