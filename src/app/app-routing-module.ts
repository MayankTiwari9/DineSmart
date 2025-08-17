import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';

const routes: Routes = [
  {
    path: 'landing-page',
    component: LandingPage,
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
