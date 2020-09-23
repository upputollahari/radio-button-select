import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
data=[
  {"ID":"123","value":"#808080"},
  {"ID":"1234","value":"#591717"},
  {"ID":"12345","value":"#9f1414"},
];
colorID:any="#808080";
  constructor() { }

  ngOnInit() {
  }
submit(form){
console.log(form.value)
}
submit2(dt) {
    console.log(dt);
  }
}