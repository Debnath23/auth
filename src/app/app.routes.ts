import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Application' },
  { path: 'sign-in', component: LoginComponent, title: 'SignIn' },
  { path: 'sign-up', component: SignupComponent, title: 'SignUp' },
];
