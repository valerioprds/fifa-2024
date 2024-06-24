import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss'
})
export class SheetComponent {
  @Input() averages: { [key: string]: number } | null = null

  get averagesKeys(): string[] {
    return this.averages ? Object.keys(this.averages) : [];
  }
}
