import { Component } from '@angular/core';
import { SocialService } from '../social.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
  socials:any=[];
  constructor(private _socialService:SocialService){
    _socialService.getSocial().subscribe(
      (data:any)=>{
        this.socials=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }
  

  
  
  
}
