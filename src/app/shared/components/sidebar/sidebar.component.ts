import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isOpen = false;

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }
}
