import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faPlusCircle, faFilePen, faXmark, faGears, faDownload} from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-applicant-details',
  imports: [HeaderComponent, FontAwesomeModule, RouterLink],
  templateUrl: './applicant-details.component.html',
  styleUrl: './applicant-details.component.css'
})
export class ApplicantDetailsComponent {
  faGears=faGears;
  faPlusCircle = faPlusCircle;
  faDownload=faDownload;

}
