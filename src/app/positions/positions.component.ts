import { Component } from '@angular/core';
import { faFacebookF, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDisplay, faFileArrowUp, faGears, faIdCard, faPlusCircle, faSquareCheck,faRankingStar, faXmark, faFilePen, faBook} from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from '../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-positions',
  imports: [HeaderComponent, FontAwesomeModule, RouterLink, NgFor],
  standalone: true,
  templateUrl: './positions.component.html',
  styleUrl: './positions.component.css'
})
export class PositionsComponent {
  faIdCard = faIdCard;
  faLinkedinIn = faLinkedinIn;
  faFacebookF = faFacebookF;
  faXTwitter = faXTwitter;
  faFileArrowUp = faFileArrowUp;
  faDisplay = faDisplay;
  faSquareCheck = faSquareCheck;
  faPlusCircle = faPlusCircle
  faGears = faGears;
  faRankingStar = faRankingStar;
  faXmark=faXmark;
  faFilePen=faFilePen;
  faBook=faBook;
    positions: {name:string, number_of_candidates:number, date:string}[]=[
    {name: 'Junior developer', number_of_candidates: 1, date: '2023-10-01'},
    {name: 'Developer', number_of_candidates: 2, date: '2023-10-02'},
    {name: 'Senior developer', number_of_candidates: 3, date: '2023-10-03'},
  ]
}
