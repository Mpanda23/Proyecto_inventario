import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  
  businessName: string = '';
  businessAddress: string = '';
  phoneNumber: string = '';
  firstName: string = '';
  lastName: string = '';
  emailRegister: string = '';
  cellPhone: string = '';
  registerPassword: string = ''; 

  showUserDetails: boolean = false;

 
  nextStep() {
    this.showUserDetails = true;
  }

  
  onSubmit() {
    
    console.log({
      businessName: this.businessName,
      businessAddress: this.businessAddress,
      phoneNumber: this.phoneNumber,
      firstName: this.firstName,
      lastName: this.lastName,
      emailRegister: this.emailRegister,
      cellPhone: this.cellPhone,
      registerPassword: this.registerPassword
    });
  }
}
