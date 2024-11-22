import { Component } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent {
schools:any=[];
constructor(private _schoolService:SchoolService){
  _schoolService.getSchool().subscribe(
    (data:any)=>{
      this.schools=data;
    },
    (err:any)=>{
      alert("Internal server error")
    }
  )
}
}
