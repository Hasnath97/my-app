import { Component } from '@angular/core';

@Component({
  selector: 'app-emplyee',
  templateUrl: './emplyee.component.html',
  styleUrls: ['./emplyee.component.css']
})
export class EmplyeeComponent {
empName:string="";
role:string="";
emplyees:any=[];

add(){
  let emplyee={
    name:this.empName,
    role:this.role,
    
  }
  this.emplyees.push(emplyee)
}
}
