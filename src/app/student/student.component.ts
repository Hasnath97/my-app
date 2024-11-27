import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  public marksForm:FormGroup=new FormGroup({
    name:new FormControl(),
    class:new FormControl(),
    fatherName:new FormControl(),
    email:new FormControl(),
    dob:new FormControl(),
    address:new FormGroup({
      addressLine:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pin:new FormControl(),
    }),
    type:new FormControl(),
    marks:new FormArray([])
  })
  get marksFormArray(){
    return this.marksForm.get('marks') as FormArray;
  }
  addMarks(){
    this.marksFormArray.push(
      new FormGroup({
        class:new FormControl(),
        
      })
    )
  }
}
