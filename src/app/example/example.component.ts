import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  // animal: string;
languageName: string;
languageCode:string;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '250px',
      data: { languageName: this.languageName,languageCode:this.languageCode}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.name = result;
      if(result!=null){
this.languageName=result.languageName;
      this.languageCode=result.languageCode;
      console.log(result);
      }  
    
      // this.name2=
    });
  }
}