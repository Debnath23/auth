import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../user.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  authService = inject(AuthService);
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<{user: UserInterface}>('https://api.realworld.io/api/user')
    .subscribe({
      next: (response) => {
        console.log('response', response);
        this.authService.currentUserSig.set(response.user);
      }, error: () => {
        this.authService.currentUserSig.set(null);
      }})
  }

  logout(){
    console.log("logout");
    localStorage.setItem('token', '');
    this.authService.currentUserSig.set(null);
  }
}
