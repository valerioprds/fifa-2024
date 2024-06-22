import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

  loading = false;

  constructor(private router: Router) {}

  goHome() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2000); // 2 seconds delay
  }
}
