import { Component, NgModule } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {HeaderComponent} from "../header/header.component";
import {NgForOf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import { faPlusCircle, faGears, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-cv',
  imports: [FaIconComponent, HeaderComponent, RouterLink, NgForOf, FormsModule],
  templateUrl: './add-cv.component.html',
  styleUrl: './add-cv.component.css'
})
export class AddCvComponent {

  constructor(private sanitizer: DomSanitizer, private http: HttpClient, private router: Router) {}

  faPlusCircle = faPlusCircle;
  faGears = faGears;
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;

  isDragging = false;
  positions: { id: string, name: string }[] = [];
  selectedPositionName: string | null = null;

    ngOnInit(): void {
    this.http.get<{ id: string, name: string }[]>('http://localhost:8080/api/positions')
      .subscribe({
        next: (data) => this.positions = data,
        error: (err) => console.error('Błąd ładowania stanowisk:', err)
      });
  }

onDragOver(event: DragEvent) {
  event.preventDefault();
  this.isDragging = true;
}

onDragLeave(event: DragEvent) {
  event.preventDefault();
  this.isDragging = false;
}

onDrop(event: DragEvent) {
  event.preventDefault();
  this.isDragging = false;
  const files = event.dataTransfer?.files;
  if (files && files.length > 0) {
    this.handleFiles(files);
  }
}

onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  const files = input.files;
  if (files && files.length > 0) {
    this.handleFiles(files);
  }
}

 pdfPreviews: { url: SafeResourceUrl, name: string }[] = [];
 private uploadedFiles: File[] = [];

handleFiles(files: FileList) {
  this.pdfPreviews = [];
  this.uploadedFiles = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.type !== 'application/pdf') {
      console.warn('Odrzucono plik (nie PDF):', file.name);
      continue;
    }

    const blobUrl = URL.createObjectURL(file);
    const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl);
    this.pdfPreviews.push({ url: safeUrl, name: file.name });
    this.uploadedFiles.push(file);
  }
}

sendFiles() {
  const url = 'http://localhost:8080/api/candidates/upload';

  let filesUploaded = 0;

  this.uploadedFiles.forEach(file => {
    const formData = new FormData();
    formData.append('file', file, file.name);

    if (this.selectedPositionName) {
      formData.append('positionName', this.selectedPositionName);
    }

    this.http.post(url, formData, { responseType: 'text' }).subscribe({
      next: (response) => {
        console.log('Plik wysłany:', file.name, response);
        filesUploaded++;
        if (filesUploaded === this.uploadedFiles.length) {
          this.router.navigate(['/analizer']);
        }
      },
      error: (error: HttpErrorResponse) => {
        console.error('Błąd przy wysyłaniu pliku:', file.name, error.message);
      }
    });
  });
}

}
