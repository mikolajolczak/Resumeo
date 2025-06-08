import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIdCard, faFileArrowUp, faDisplay, faSquareCheck, faPlusCircle, faGears, faStar, faStarHalfStroke, faXmark, faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import {RouterLink} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-analizer',
  imports: [FontAwesomeModule, RouterLink, HeaderComponent],
  templateUrl: './analizer.component.html',
  styleUrl: './analizer.component.css'
})
export class AnalizerComponent implements OnInit {
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

  constructor(private http: HttpClient) {}

  ngOnInit() {
  this.http.get<{id: string, name: string, score: number, date: string, appointment: string}[]>(
    'http://localhost:8080/api/candidates'
  ).subscribe({
    next: (data) => this.candidates = data,
    error: (err) => console.error('Błąd pobierania kandydatów', err)
  });
}

  candidates: {id: string, name: string, score: number, date: string, appointment: string}[] = [];
  deleteCandidate(candidate: {id: string}) {
  const url = `http://localhost:8080/api/candidates/${candidate.id}`;
  this.http.delete(url).subscribe({
    next: () => {
      this.candidates = this.candidates.filter(c => c.id !== candidate.id);
    },
    error: err => {
      console.error('Nie udało się usunąć kandydata:', err);
    }
  });
}
}
