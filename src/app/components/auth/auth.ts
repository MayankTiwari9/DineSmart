import { Component } from '@angular/core';
import { Account } from '../../shared/services/account/account';

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
  public isToastMessage: boolean;
  public toastMessage: string;
  public toastStatus: string;

  constructor(private accountService: Account) {
    this.isSigningIn = true;
    this.userEmail = '';
    this.userPassword = '';
    this.userConfirmPassword = '';
    this.showErrorMsg = false;
    this.errorMsg = '';
    this.isToastMessage = false;
    this.toastMessage = '';
    this.toastStatus = '';
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

      this.loginUser(userData);

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
      };

      this.createUser(userData);

      this.showErrorMsg = false;
      this.errorMsg = '';
    }
  }

  isGmailEmailConstructor(email: string) {
    const gmailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@gmail\\.com$');
    return gmailRegex.test(email);
  }

  createUser(body: any) {
    this.accountService.createUser(body).subscribe({
      next: (response) => {
        console.log(response);
        this.toastMessage = 'User Created Successfully !';
        this.toastStatus = 'success';
        this.isToastMessage = true;

        setTimeout(() => {
          this.toastMessage = '';
          this.toastStatus = '';
          this.isToastMessage = false;
        }, 3000);
      },
      error: (error) => {
        this.toastMessage = error.error.message;
        this.toastStatus = 'error';
        this.isToastMessage = true;
        console.log(error);

        setTimeout(() => {
          this.toastMessage = '';
          this.toastStatus = '';
          this.isToastMessage = false;
        }, 3000);
      },
    });
  }

  loginUser(body: any) {
    this.accountService.loginUser(body).subscribe({
      next: (response) => {
        console.log(response);

        this.toastMessage = 'User Created Successfully !';
        this.toastStatus = 'success';
        this.isToastMessage = true;

        setTimeout(() => {
          this.toastMessage = '';
          this.toastStatus = '';
          this.isToastMessage = false;
        }, 3000);
      },
      error: (error) => {
        this.toastMessage = error.error.message;
        this.toastStatus = 'error';
        this.isToastMessage = true;
        console.log(error);

        setTimeout(() => {
          this.toastMessage = '';
          this.toastStatus = '';
          this.isToastMessage = false;
        }, 3000);
      },
    });
  }

  hideToast() {
    this.toastMessage = '';
    this.toastStatus = '';
    this.isToastMessage = false;
  }
}
