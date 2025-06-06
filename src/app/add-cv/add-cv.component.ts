import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {HeaderComponent} from "../header/header.component";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import { faPlusCircle, faGears, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-add-cv',
  imports: [FaIconComponent, HeaderComponent, RouterLink, NgForOf],
  templateUrl: './add-cv.component.html',
  styleUrl: './add-cv.component.css'
})
export class AddCvComponent {

  constructor(private sanitizer: DomSanitizer) {}

  faPlusCircle = faPlusCircle;
  faGears = faGears;
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;

  isDragging = false;

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

  handleFiles(files: FileList) {
    this.pdfPreviews = []; 
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type !== 'application/pdf') {
        console.warn('Odrzucono plik (nie PDF):', file.name);
        continue;
      }

      const blobUrl = URL.createObjectURL(file);
      const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl);
      this.pdfPreviews.push({ url: safeUrl, name: file.name });
    }
  }

  sendFiles() {
    console.log('Wysyłanie plików:', this.pdfPreviews);
  }

}
