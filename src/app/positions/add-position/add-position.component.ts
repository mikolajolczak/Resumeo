import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle,faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-position',
  imports: [HeaderComponent, FontAwesomeModule, RouterLink, FormsModule],
  templateUrl: './add-position.component.html',
  styleUrl: './add-position.component.css'
})
export class AddPositionComponent {
  position:{name:string, number_of_candidates:number, date:string, description:string, competence: string, keywords: string}={
    name: '',
    number_of_candidates: 1,
    date: '',
    description: '',
    competence: '',
    keywords: ''}
faPlusCircle=faPlusCircle;
faRankingStar=faRankingStar;

constructor(private http: HttpClient, private router: Router) { }

savePosition() {
  this.http.post('http://localhost:8080/api/positions', this.position).subscribe({
    next: () => {
      console.log('Dodano pozycję:', this.position);
      this.router.navigate(['/positions']);
    },
    error: (err) => {
      console.error('Błąd podczas dodawania pozycji', err);
    }
  });
}

}
