import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserInterface } from '../user.interface';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BaseService } from '../base-service.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})

export class SignupComponent {
  constructor(private baseServe:BaseService) {}
  fb = inject(FormBuilder);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    username: [
      '',
      {
        validators: [
          Validators.required,
          Validators.minLength(3),
        ],
      },
    ],
    email: ['', { validators: [Validators.required, Validators.email] }],
    password: [
      '',
      {
        validators: [
          Validators.required,
          // Validators.pattern(
          //   '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$'
          // ),
        ],
      },
    ],
  });

  signUp(userData: UserInterface) {
    this.baseServe.registerUser(userData.username, userData.email, userData.password);
    this.router.navigateByUrl('/');
  }
  onSubmit() {
    if (this.form.valid) {
      const userData = this.form.getRawValue() as UserInterface;
      this.signUp(userData);
    }
  }

}
