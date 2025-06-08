import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faPlusCircle, faFilePen, faXmark, faGears, faDownload} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-applicant-details',
  standalone: true,
  imports: [HeaderComponent, FontAwesomeModule, RouterLink],
  templateUrl: './applicant-details.component.html',
  styleUrl: './applicant-details.component.css'
})
export class ApplicantDetailsComponent implements OnInit {
  faGears = faGears;
  faPlusCircle = faPlusCircle;
  faDownload = faDownload;

  candidate: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any[]>('http://localhost:8080/api/candidates').subscribe({
      next: (list) => {
        this.candidate = list.find(c => c.id === id);
      },
      error: err => {
        console.error('Błąd pobierania danych kandydata', err);
      }
    });
  }
}
