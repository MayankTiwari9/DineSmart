import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public isSignIn: boolean;

  constructor(private router: Router) {
    this.isSignIn = false;
  }

  ngOnInit() {}

  signIn() {
    this.router.navigateByUrl('auth');
  }

  signOut() {
    this.isSignIn = false;
  }
}
