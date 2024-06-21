import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  private router = inject(Router);

  onLogOff(){
    localStorage.removeItem('ticketUser');
    this.router.navigateByUrl('/login');
  }
}
