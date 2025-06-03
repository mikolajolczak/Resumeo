import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faIdCard = faIdCard;
  faLinkedinIn = faLinkedinIn;
  faFacebookF = faFacebookF;
  faXTwitter = faXTwitter;
}

