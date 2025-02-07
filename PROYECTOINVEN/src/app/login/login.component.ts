import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isRegistering = false; 

  showRegisterForm() {
    this.isRegistering = true; 
  }

  showLoginForm() {
    this.isRegistering = false; 
  }
}
