import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Student } from './model/student/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  @ViewChild('modalNewStudent') modal!: ElementRef;
  studentObj: Student = new Student();
  studentList: Student[] = [];
  
  ngOnInit(): void {
    const localData = localStorage.getItem('angularCrud');
    if (localData !== null) {
      this.studentList = JSON.parse(localData);
    }
  }

  openModal() {
    const modal = document.getElementById('modalNewStudent');
    if (modal !== null) {
      modal.style.display = 'block';
    }
  }
  
  closeModal() {
    this.studentObj = new Student();
    if (this.modal !== null) {
      this.modal.nativeElement.style.display = 'none';
    }
  }

  editStudent(item: Student) {
    this.studentObj = item;
    this.openModal();
  }

  saveStudent() {
    debugger;
    const isLocalPresent = localStorage.getItem('angularCrud');

    if (isLocalPresent !== null) {
      const oldArr = JSON.parse(isLocalPresent);
      this.studentObj.id = oldArr.length + 1;
      oldArr.push(this.studentObj);
      this.studentList = oldArr;
      localStorage.setItem('angularCrud', JSON.stringify(oldArr));
    } else {
      const newArr = [];
      newArr.push(this.studentObj);
      this.studentObj.id = 1;
      this.studentList = newArr;
      localStorage.setItem('angularCrud', JSON.stringify(newArr));
    }
    this.closeModal();
  }
}