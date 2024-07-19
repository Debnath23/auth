import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Application' },
  { path: 'sign-in', component: LoginComponent, title: 'Sign In' },
  { path: 'sign-up', component: SignupComponent, title: 'Sign Up' },
  { path: 'contact-us', component: ContactUsComponent, title: 'Contact Us' },
  { path: 'about-us', component: AboutUsComponent, title: 'About Us' },
  { path: 'careers', component: CareersComponent, title: 'Careers' },
];
