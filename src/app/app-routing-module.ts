import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { Auth } from './components/auth/auth';

const routes: Routes = [
  {
    path: 'landing-page',
    component: LandingPage,
  },
  {
    path: 'auth',
    component: Auth,
  },
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
