import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl,  FormGroup,  Validators } from "@angular/forms";
import { MatCalendarCellClassFunction } from "@angular/material/datepicker";
import { DateValidator } from "../date-validator";

@Component({
  selector: "app-radioselect",
  templateUrl: "./radioselect.component.html",
  styleUrls: ["./radioselect.component.css"]
})
export class RadioselectComponent implements OnInit {
  selectionForm:FormGroup;
  isSubmitted = false;
  isSelected:boolean=true;
  maxDate = new Date();
  // startDate = new FormControl(new Date());
  // endDate = new FormControl(new Date());
  

  // myFilter = (d: Date | null): boolean => {
  //     const day = (d || new Date()).getDay();
  //     // Prevent Saturday and Sunday from being selected.
  //     return day !== 0 && day !== 6;
  //   }
  constructor(public fb: FormBuilder) {
  }

  

  // Date
  // StartDate(e) {
  //   var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
  //   this.myForm.get("startDate").setValue(convertDate, {
  //     onlyself: true
  //   });
  // }
  // (dateChange)="StartDate($event)"
  // EndDate(e) {
  //   var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
  //   this.myForm.get("endDate").setValue(convertDate, {
  //     onlyself: true
  //   });
  // }
  // Getter method to access form control
  get myForm() {
    return this.selectionForm;
  }
  ngOnInit() {
    this.selectionForm = this.fb.group({
    gameSelection: ["", [Validators.required]],
    startDate: ["", [Validators.required]],
    endDate: ["", Validators.required],
    selectGame: ["", Validators.required],
    selectOutcome: ["", Validators.required],
    gameID: ["", Validators.required]
  },{validator: this.checkDates});
  }
 toggle(){
    this.isSelected = !this.isSelected;
    if(this.isSelected==false){
      this.selectionForm.get('startDate').setValue("");
      this.selectionForm.get('endDate').setValue("");
      this.selectionForm.get('selectGame').setValue("");
      this.selectionForm.get('selectOutcome').setValue("");


    }
  }
checkDates(group: FormGroup) {
  if(group.controls.endDate.value < group.controls.startDate.value) {
    return { notValid:true }
  }
  return null;
}
  onSubmit() {
    console.log(this.selectionForm.value);
  }
}
