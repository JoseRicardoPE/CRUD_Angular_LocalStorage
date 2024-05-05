import { Component, ElementRef, ViewChild } from '@angular/core';
import { Student } from './model/student/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('modalNewStudent') modal!: ElementRef;

  studentObj: Student = new Student();

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

  saveStudent() {
    debugger;
    const isLocalPresent = localStorage.getItem('angularCrud');
    
    if (isLocalPresent !== null) {
      const oldArr = JSON.parse(isLocalPresent);
      oldArr.push(this.studentObj);
      localStorage.setItem('angular17crud', JSON.stringify(oldArr));
    } else {
      const newArr = [];
      newArr.push(this.studentObj);
      localStorage.setItem('angular17crud', JSON.stringify(newArr));
    }
  }
}