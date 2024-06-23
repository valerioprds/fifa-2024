import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    console.log('AppComponent initialized');
    const initialLanguage = this.languageService.getLanguage();
    this.languageService.setLanguage(initialLanguage);
    console.log(initialLanguage);
  }
}
