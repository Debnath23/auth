// import { RouterLink, RouterOutlet } from '@angular/router';
// import { Component, ViewChild } from '@angular/core';
// import { IgxNavigationDrawerComponent } from 'igniteui-angular';
// import {
//   IgxButtonModule,
//   IgxIconModule,
//   IgxNavigationDrawerModule,
//   IgxRippleModule,
//   IgxToggleModule,
// } from 'igniteui-angular';

// @Component({
//   selector: 'app-nav-bar',
//   standalone: true,
//   imports: [
//     RouterLink,
//     RouterOutlet,
//     IgxButtonModule,
//     IgxIconModule,
//     IgxNavigationDrawerModule,
//     IgxRippleModule,
//     IgxToggleModule,
//   ],
//   templateUrl: './nav-bar.component.html',
//   styleUrl: './nav-bar.component.css',
// })
// export class NavBarComponent {
//   @ViewChild(IgxNavigationDrawerComponent, { static: true })
//   public drawer: IgxNavigationDrawerComponent;

//   public navItems = [
//     { name: 'account_circle', text: 'Avatar' },
//     { name: 'error', text: 'Badge' },
//     { name: 'group_work', text: 'Button Group' },
//   ];

//   public selected = 'Avatar';

//   public navigate(item) {
//     this.selected = item.text;
//     this.drawer.close();
//   }
// }


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

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
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
export class NavBarComponent {
  @ViewChild(IgxNavigationDrawerComponent, { static: true })
  public drawer!: IgxNavigationDrawerComponent;

  public navItems = [
    { name: 'account_circle', text: 'Avatar' },
    { name: 'error', text: 'Badge' },
    { name: 'group_work', text: 'Button Group' },
  ];

  public selected = 'Avatar';

  public navigate(item: { name: string; text: string }) {
    this.selected = item.text;
    this.drawer.close();
  }
}
