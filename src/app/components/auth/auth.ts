import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  public isSigningIn: boolean;
  public userEmail: string;
  public userPassword: string;
  public userConfirmPassword: string;
  public showErrorMsg: boolean;
  public errorMsg: string;

  constructor() {
    this.isSigningIn = true;
    this.userEmail = '';
    this.userPassword = '';
    this.userConfirmPassword = '';
    this.showErrorMsg = false;
    this.errorMsg = '';
  }

  toggleSingIn() {
    this.isSigningIn = !this.isSigningIn;
    this.userEmail = '';
    this.userPassword = '';
    this.userConfirmPassword = '';
    this.showErrorMsg = false;
    this.errorMsg = '';
  }

  submit(type: string) {
    if (type === 'login') {
      if (
        (this.userEmail.trim() === '' && this.userPassword.trim() === '') ||
        (this.userEmail.trim() !== '' && this.userPassword.trim() === '') ||
        (this.userEmail.trim() === '' && this.userPassword.trim() !== '')
      ) {
        this.showErrorMsg = true;
        this.errorMsg = 'Email or Password can not be empty !';
        return;
      }

      const isValidEmail = this.isGmailEmailConstructor(this.userEmail);

      if (!isValidEmail) {
        this.showErrorMsg = true;
        this.errorMsg = 'Please enter a valid email address !';
        return;
      }

      if (this.userPassword.length < 6 || this.userPassword.length > 25) {
        this.showErrorMsg = true;
        this.errorMsg = 'Password should be between 6 to 25 characters !';
        return;
      }

      const userData = {
        email: this.userEmail,
        password: this.userPassword,
      };

      this.showErrorMsg = false;
      this.errorMsg = '';
    }

    if (type === 'singup') {
      if (
        this.userEmail.trim() === '' ||
        this.userPassword.trim() === '' ||
        this.userConfirmPassword.trim() === ''
      ) {
        this.showErrorMsg = true;
        this.errorMsg = 'Email, Password or Confirm Password can not be empty !';
        return;
      }

      const isValidEmail = this.isGmailEmailConstructor(this.userEmail);

      if (!isValidEmail) {
        this.showErrorMsg = true;
        this.errorMsg = 'Please enter a valid email address !';
        return;
      }

      if (this.userPassword.trim().length < 6 || this.userPassword.trim().length > 25) {
        this.showErrorMsg = true;
        this.errorMsg = 'Password should be between 6 to 25 characters !';
        return;
      }

      if (this.userPassword.trim() !== this.userConfirmPassword.trim()) {
        this.showErrorMsg = true;
        this.errorMsg = 'Password and Confirm Password does not match !';
        return;
      }

      const userData = {
        email: this.userEmail,
        password: this.userPassword,
        confirmPassword: this.userConfirmPassword,
      };

      this.showErrorMsg = false;
      this.errorMsg = '';
    }
  }

  isGmailEmailConstructor(email: string) {
    const gmailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@gmail\\.com$');
    return gmailRegex.test(email);
  }
}
