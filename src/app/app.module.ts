import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import {MatRadioModule} from '@angular/material/radio';
import { RadioselectComponent } from './radioselect/radioselect.component';
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
     ],
  declarations: [ AppComponent, HelloComponent, RadioselectComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
