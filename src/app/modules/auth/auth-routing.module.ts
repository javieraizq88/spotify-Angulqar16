import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './page/auth-page/auth-page.component';

const routes: Routes = [
  {
    path: "login",
    component: AuthPageComponent
  },
  {
    path: "**", // para error 404 redirecciona a /auth/login
    redirectTo: "/auth/login"
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
