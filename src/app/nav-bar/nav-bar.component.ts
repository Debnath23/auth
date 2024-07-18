import { RouterLink, RouterOutlet } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
import {
  IgxButtonModule,
  IgxIconModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
  IgxToggleModule,
} from 'igniteui-angular';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../user.interface';
import { inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    IgxButtonModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxToggleModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
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

