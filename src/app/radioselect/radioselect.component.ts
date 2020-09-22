import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

@Component({
  selector: 'app-radioselect',
  templateUrl: './radioselect.component.html',
  styleUrls: ['./radioselect.component.css']
})
export class RadioselectComponent implements OnInit {
isSubmitted = false;
myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  constructor(public fb: FormBuilder) { }

 selectionForm = this.fb.group({
    gender: ['male', [Validators.required]]
  });

   // Getter method to access form control
  get myForm() {
    return this.selectionForm.get('gender');
  }
  ngOnInit() {
  }
 onSubmit() {
 
  }  

}