import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIdCard, faFileArrowUp, faDisplay, faSquareCheck, faPlusCircle, faGears, faStar, faStarHalfStroke, faXmark, faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { NgFor } from '@angular/common';
import {RouterLink} from '@angular/router';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-analizer',
  imports: [FontAwesomeModule, NgFor, RouterLink, HeaderComponent],
  templateUrl: './analizer.component.html',
  styleUrl: './analizer.component.css'
})
export class AnalizerComponent {
  faIdCard = faIdCard;
  faLinkedinIn = faLinkedinIn;
  faFacebookF = faFacebookF;
  faXTwitter = faXTwitter;
  faFileArrowUp = faFileArrowUp;
  faDisplay = faDisplay;
  faSquareCheck = faSquareCheck;
  faPlusCircle = faPlusCircle;
  faGears = faGears;
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  faXmark=faXmark
  faFilePen=faFilePen;

  candidates: {name:string, score:number, date:string, appointment: string}[]=[
    {name: 'John Doe', score: 85, date: '2023-10-01', appointment: 'junior developer'},
    {name: 'Jane Smith', score: 90, date: '2023-10-02', appointment: 'senior developer'},
    {name: 'Alice Johnson', score: 78, date: '2023-10-03', appointment: 'project manager'},
  ]
  deleteCandidate(candidate: {name:string, score:number, date:string, appointment: string}) {
    const index = this.candidates.indexOf(candidate);
    if (index > -1) {
      this.candidates.splice(index, 1);
    }
  }
}
