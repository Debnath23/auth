import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'A Todo Application' },
  { path: 'login', component: LoginComponent, title: 'login' },
  { path: 'signup', component: SignupComponent, title: 'signup' },
];
