import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
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
import { request } from 'http';
import axios from 'axios';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

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
    RouterLinkActive,
    SidebarModule,
    ButtonModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  sidebarVisible2: boolean = false;

  authService = inject(AuthService); 
  http = inject(HttpClient);

  showSidebar(): void {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    if (sidebar) {
      sidebar.style.display = 'flex';
    }
  }
  hideSidebar():void {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    if(sidebar){
      sidebar.style.display = 'none';
    }
  }

  ngOnInit(): void {
    // this.http.get<{user: UserInterface}>('https://api.realworld.io/api/user')
    // .subscribe({
    //   next: (response) => {
    //     console.log('response', response);
    //     this.authService.currentUserSig.set(response.user);
    //   }, error: () => {
    //     this.authService.currentUserSig.set(null);
    //   }})
    const res = axios.post<{user: UserInterface}>('/current-user');
    console.log(res);
    
  }

  logout(){
    console.log("logout");
    localStorage.setItem('token', '');
    this.authService.currentUserSig.set(null);
  }
}

