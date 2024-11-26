import { Component } from '@angular/core';
import { DummyDisplayComponent } from './dummy-display/dummy-display.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { DummyDailogComponent } from './dummy-dailog/dummy-dailog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private _bottomSheet: MatBottomSheet,private _dialog:MatDialog) {}

  openBottomSheet(): void {
    this._bottomSheet.open(DummyDisplayComponent);
  }
  openDialog(): void {
    const dialogRef = this._dialog.open(DummyDailogComponent, {
      width:"500px",
      height:"300px",



      data: {name: "abnc", phone:8500123844 },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("the dailog was closed",result);
      
    })
  }
}