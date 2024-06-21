import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginObj = {
    emailId: '',
    password: '',
  };
  private masterService = inject(MasterService);
  private router = inject(Router);

  ngOnInit(): void {}

  onLogin() {
    this.masterService.login(this.loginObj).subscribe((res: any) => {
      if (res.result) {
        localStorage.setItem('ticketUser', JSON.stringify(res.data));
        this.router.navigateByUrl('/dashboard');
      } else {
        alert(res.message);
      }
    });
  }
}
