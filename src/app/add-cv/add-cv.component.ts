import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {HeaderComponent} from "../header/header.component";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import { faIdCard, faFileArrowUp, faDisplay, faSquareCheck, faPlusCircle, faGears, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-add-cv',
  imports: [FaIconComponent, HeaderComponent, RouterLink],
  templateUrl: './add-cv.component.html',
  styleUrl: './add-cv.component.css'
})
export class AddCvComponent {
  faPlusCircle = faPlusCircle;
  faGears = faGears;
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
}
