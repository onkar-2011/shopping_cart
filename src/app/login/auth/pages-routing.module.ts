import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'login' , pathMatch:'full' },
  { path: 'forget-passwored', component: ForgotPasswordComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
