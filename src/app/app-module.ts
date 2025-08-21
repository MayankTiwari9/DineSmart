import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { LandingPage } from './components/landing-page/landing-page';
import { FormsModule } from '@angular/forms';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [App, Header, LandingPage, Footer],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
