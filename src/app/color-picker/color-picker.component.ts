import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  color1="#0000ff";
  color2="#add8e6";
  linear="linear-gradient(to right, #0000ff, #add8e6)";
data=[
  {"ID":"123","value":"#808080"},
  {"ID":"1234","value":"#591717"},
  {"ID":"12345","value":"#9f1414"},
];
colorID:any="#808080";
  constructor() { }

  ngOnInit() {
  console.log("color1 is "+this.color1 +" "+ "color2 is "+this.color2);
  // this.changeGradient();
  }
submit(form){
console.log(form.value)
}
submit2(dt) {
    console.log(dt);
  }
  changeGradient() { 
     this.linear = 
                "linear-gradient(to right, "  
                    + this.color1 + ", "  
                    + this.color2 + ")"; 
  console.log(this.linear);
            // css.textContent = body.style.background + ";"; 
        }

  
}