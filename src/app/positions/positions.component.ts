import { Component, OnInit } from '@angular/core';
import { faFacebookF, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faDisplay, faFileArrowUp, faGears, faIdCard, faPlusCircle, faSquareCheck,
  faRankingStar, faXmark, faFilePen, faBook
} from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from '../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-positions',
  standalone: true,
  imports: [HeaderComponent, FontAwesomeModule, RouterLink, NgFor],
  templateUrl: './positions.component.html',
  styleUrl: './positions.component.css'
})
export class PositionsComponent implements OnInit {
  faIdCard = faIdCard;
  faLinkedinIn = faLinkedinIn;
  faFacebookF = faFacebookF;
  faXTwitter = faXTwitter;
  faFileArrowUp = faFileArrowUp;
  faDisplay = faDisplay;
  faSquareCheck = faSquareCheck;
  faPlusCircle = faPlusCircle;
  faGears = faGears;
  faRankingStar = faRankingStar;
  faXmark = faXmark;
  faFilePen = faFilePen;
  faBook = faBook;

  positions: { id: string, name: string, number_of_candidates: number, date: string }[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchPositions();
  }

  fetchPositions() {
    this.http.get<{ id: string, name: string, number_of_candidates: number, date: string }[]>(
      'http://localhost:8080/api/positions'
    ).subscribe({
      next: (data) => this.positions = data,
      error: (err) => console.error('Błąd pobierania stanowisk', err)
    });
  }

  removePosition(position: { id: string }) {
    this.http.delete(`http://localhost:8080/api/positions/${position.id}`).subscribe({
      next: () => {
        this.positions = this.positions.filter(p => p.id !== position.id);
      },
      error: (err) => console.error('Błąd usuwania stanowiska', err)
    });
  }

  goToEditPosition(position: { id: string; name: string; number_of_candidates: number; date: string }) {
    this.router.navigate(['/edit-position', position.id]);
  }
}
