import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
data;
colorID:any="#808080";
  constructor() { }

  ngOnInit() {
  }
submit(form){
console.log(form.value)
}
}