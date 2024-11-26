import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dummy-dailog',
  templateUrl: './dummy-dailog.component.html',
  styleUrls: ['./dummy-dailog.component.css']
})
export class DummyDailogComponent {
  constructor(public dialogRef: MatDialogRef<DummyDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) { }

  ngOnInit():void
{}
onNoClick():void{
  this.dialogRef.close();
}
onAddClick():void {
  this.dialogRef.close(123);
}
}
