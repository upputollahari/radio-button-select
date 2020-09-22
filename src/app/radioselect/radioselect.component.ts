import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatCalendarCellClassFunction } from "@angular/material/datepicker";

@Component({
  selector: "app-radioselect",
  templateUrl: "./radioselect.component.html",
  styleUrls: ["./radioselect.component.css"]
})
export class RadioselectComponent implements OnInit {
  isSubmitted = false;
  isSelected:boolean=true;
  myFilter = (d: Date | null): boolean => {
      const day = (d || new Date()).getDay();
      // Prevent Saturday and Sunday from being selected.
      return day !== 0 && day !== 6;
    }
  constructor(public fb: FormBuilder) {}

  selectionForm = this.fb.group({
    gameSelection: ["", [Validators.required]],
    startDate: ["", Validators.required],
    endDate: ["", Validators.required],
    selectGame: ["", Validators.required],
    selectOutcome: ["", Validators.required],
    gameID: ["", Validators.required]
  });

  // Date
  startDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.myForm.get("startDate").setValue(convertDate, {
      onlyself: true
    });
  }
  endDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.myForm.get("endDate").setValue(convertDate, {
      onlyself: true
    });
  }
  // Getter method to access form control
  get myForm() {
    return this.selectionForm;
  }
  ngOnInit() {}
 toggle(){
    this.isSelected = !this.isSelected;
  }

  onSubmit() {
    console.log(this.selectionForm.value);
  }
}
