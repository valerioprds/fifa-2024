import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-lang-btn',
  templateUrl: './lang-btn.component.html',
  styleUrl: './lang-btn.component.scss',
})
export class LangBtnComponent implements OnInit{
  selectedLanguage!: string;

  constructor(private languageService: LanguageService) {
    this.selectedLanguage = this.languageService.getLanguage();
  }

  ngOnInit(): void {
    this.selectedLanguage = this.languageService.getLanguage();
  }

  onLanguageChange(language: string) {
    this.languageService.setLanguage(language);
    this.selectedLanguage = language;
  }
}
