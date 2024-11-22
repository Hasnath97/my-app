import { Component } from '@angular/core';
import { PinService } from '../pin.service';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent {
pins:any=[];
constructor(private _pinService:PinService){
  _pinService.Pin().subscribe(
    (data:any)=>{
      this.pins=data;
    },
    (err:any)=>{
      alert("Internal Server error")
    }
  )
}
}
