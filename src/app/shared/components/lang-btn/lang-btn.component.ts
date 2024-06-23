import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-lang-btn',
  templateUrl: './lang-btn.component.html',
  styleUrl: './lang-btn.component.scss',
})
export class LangBtnComponent{
  constructor(private languageService: LanguageService) {}

  changeLanguage(language: string) {
    this.languageService.setLanguage(language);
  }
}
