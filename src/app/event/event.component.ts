import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  name:string="";
  names:string[]=[];
  register(){
    this.names.push(this.name);
  }
}
