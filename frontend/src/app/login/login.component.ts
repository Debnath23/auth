import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserInterface } from '../user.interface';
import { AuthService } from '../auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import axios from 'axios';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
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

  onSubmit(): void {
    // this.http
    //   .post<{ user: UserInterface }>(
    //     '/sign-in',
    //     {
    //       user: this.form.getRawValue(),
    //     }
    //   )
    //   .subscribe((response) => {
    //     console.log('response', response);
    //     localStorage.setItem('token', response.user.token);
    //     this.authService.currentUserSig.set(response.user);
    //     this.router.navigateByUrl('/');
    //   });

    axios
      .post<{ user: UserInterface }>('/sign-in')
      .then(() => this.router.navigateByUrl('/'))
      .catch((error) => {
        console.log(error);
      });
  }
}
