import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrl: './back-btn.component.scss'
})
export class BackBtnComponent {
  private location = inject(Location)

  goBack() {
    this.location.back()
  }

}
