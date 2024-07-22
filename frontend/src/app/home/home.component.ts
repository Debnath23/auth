import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../user.interface';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NavBarComponent, FooterComponent,  CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  authService = inject(AuthService); 
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<{user: UserInterface}>('https://localhost:4200/current-user')
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
