import { Component } from '@angular/core';

@Component({
  selector: 'app-datablinding',
  templateUrl: './datablinding.component.html',
  styleUrls: ['./datablinding.component.css']
})
export class DatablindingComponent {
  age:number=20;
  name:string='abc';
  isIndian:boolean=true;

  isInvalid:boolean=true;

  phone:string= "+91 "

create(){
  alert("created succesfully")
}
typing(){
  alert("typing")
}


num1:number=0;
num2:number=0;
result:number=0;


sum(){
  this.result=this.num1+this.num2
}



}