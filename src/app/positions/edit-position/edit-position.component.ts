import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle, faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-position',
  imports: [HeaderComponent, FontAwesomeModule, FormsModule, NgIf],
  templateUrl: './edit-position.component.html',
  styleUrl: './edit-position.component.css'
})
export class EditPositionComponent {
  faPlusCircle=faPlusCircle;
  faRankingStar=faRankingStar;
  constructor(private router: Router) {}
  position: any;
  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    console.log('Navigation:', navigation);
    this.position = navigation?.extras.state?.['position'];
    console.log('Received position:', this.position);
  }

  savePosition(){
    console.log('Position saved:', this.position);
  }
}
