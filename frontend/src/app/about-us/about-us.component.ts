import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
