import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle,faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

constructor(private router: Router) { }

savePosition() {
    console.log('Position saved:', this.position);
    this.router.navigate(['/positions']);
  }

}
