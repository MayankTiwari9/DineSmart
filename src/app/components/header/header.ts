import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  public isSignIn: boolean;

  constructor(){
    this.isSignIn = false;
  }

  ngOnInit(){

  }

  signIn(){
    console.log('Sing In Button Clicked !!');
    this.isSignIn = true;
  }

  signOut(){
    console.log('Sing Out Button Clicked !!');
    this.isSignIn = false; 
  }
}
