import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../user.interface';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NavBarComponent, FooterComponent,  CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  features = [
    {
      id: 1,
      img: 'https://sentientgeeks.com/images/home/Communication.svg',
      title: 'Seamless Communication',
      content: 'We are professional experts in IT services & we speak your language. Our seamless communications will ensure you receive all critical updates at intervals.',
    },
    {
      id: 2,
      img: 'https://sentientgeeks.com/images/home/about-you.svg',
      title: 'It is all about you',
      content: 'Our services are focused entirely on your needs & goals. Our team of experts will work exclusively with you to turn your vision into reality.',
    },
    {
      id: 3,
      img: 'https://sentientgeeks.com/images/home/our-guarantee.svg',
      title: 'Our word is our guarantee',
      content: 'If our team commits to a task, be assured it will be delivered at the given time. We know the importance of your business & thereby, we do not fail.',
    },
    {
      id: 4,
      img: 'https://sentientgeeks.com/images/home/Repeat-business.svg',
      title: '95% Repeat business',
      content: 'We believe in a positive bond of amity & long term relationships. We are committed to helping your business get out of difficulties & create a robust online platform.',
    },
    {
      id: 5,
      img: 'https://sentientgeeks.com/images/home/what-we-do.svg',
      title: 'We love what we do',
      content: 'We love technologies. It is our passion & we are proactive at helping our clients & solving their IT requirements so that you can focus on your business.',
    },
    {
      id: 6,
      img: 'https://sentientgeeks.com/images/home/our-standard.svg',
      title: 'Excellence is our standard',
      content: 'Our mission is to stay focused & drive in latest technological innovations. We make sure to invest in our people & our infrastructure.',
    },
  ]

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
