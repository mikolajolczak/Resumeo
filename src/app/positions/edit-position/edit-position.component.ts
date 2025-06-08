import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle, faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-position',
  standalone: true,
  imports: [HeaderComponent, FontAwesomeModule, FormsModule],
  templateUrl: './edit-position.component.html',
  styleUrl: './edit-position.component.css'
})
export class EditPositionComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faRankingStar = faRankingStar;

  position: any = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/positions']);
      return;
    }

    this.http.get<any[]>('http://localhost:8080/api/positions').subscribe({
      next: (data) => {
        this.position = data.find(p => p.id === id);
        if (!this.position) {
          this.router.navigate(['/positions']);
        }
      },
      error: () => this.router.navigate(['/positions'])
    });
  }

  savePosition() {
    this.http.put(
      `http://localhost:8080/api/positions/${this.position.id}`,
      this.position
    ).subscribe({
      next: () => this.router.navigate(['/positions']),
      error: (err) => console.error('Błąd przy zapisie pozycji:', err)
    });
  }
}
