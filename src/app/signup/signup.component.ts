import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserInterface } from '../user.interface';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

export const forbiddenNameValidator = (control: AbstractControl) : ValidationErrors | null => {
  const usernames = ['foo'];
  return usernames.includes(control.value) ? {forbiddenName: 'This username is not allowed.'} : null;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    username: ['', {validators: [Validators.required, Validators.minLength(3), forbiddenNameValidator]}],
    email: ['', {validators: [Validators.required, Validators.email]}],
    password: ['', {validators: [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')]}],
  });

  onSubmit(): void {
    this.http.post<{user: UserInterface}>('https://api.realworld.io/api/users', {
      user: this.form.getRawValue()
    })
    .subscribe((response) => {
      console.log('response', response);
      localStorage.setItem('token', response.user.token);
      this.authService.currentUserSig.set(response.user);
      this.router.navigateByUrl('/');
    })
  }
}
