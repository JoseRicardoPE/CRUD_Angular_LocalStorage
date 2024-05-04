import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('modalNewStudent') modal!: ElementRef;

  openModal() {
    const modal = document.getElementById('modalNewStudent');
    if (modal !== null) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    if (this.modal !== null) {
      this.modal.nativeElement.style.display = 'none';
    }
  }
}
