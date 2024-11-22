import { Component } from '@angular/core';
import { WheatherService } from '../wheather.service';

@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent {
weathers:any=[];
  constructor(private _wheatherService:WheatherService){
    
    _wheatherService.getWheather().subscribe(
      (data:any)=>{
        this.weathers[0]=data;
        console.log(this.weathers)
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }  

}
