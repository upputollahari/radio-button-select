import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCommonModule, MatNativeDateModule} from '@angular/material/core';

import {MatRadioModule} from '@angular/material/radio';
import { RadioselectComponent } from './radioselect/radioselect.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ColorPickerComponent } from './color-picker/color-picker.component';

import { ExampleDialogComponent } from './example/example-dialog/example-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ExampleComponent } from './example/example.component';
import { CommonModule } from '@angular/common';
import { TableexportComponent } from './tableexport/tableexport.component';

import {AccordionModule} from 'primeng/accordion';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
     FormsModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    AccordionModule,
    
     ],
  declarations: [ AppComponent, HelloComponent, RadioselectComponent, ColorPickerComponent, ExampleDialogComponent,  ExampleComponent, TableexportComponent],
  entryComponents: [ExampleDialogComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
