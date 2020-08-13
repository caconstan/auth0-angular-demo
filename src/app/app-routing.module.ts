import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from './page2/page2.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'page2', component: Page2Component },
  { path: 'profile',  component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
