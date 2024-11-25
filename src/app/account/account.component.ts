import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  account:any=[];

  term:string='';
  constructor(private _accountService:AccountService){

    _accountService.getAccount().subscribe(
      (data:any)=>{
        this.account=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  filter(){
    this._accountService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.account=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  column:string="";
  order:string="";

  sort(){
    this._accountService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.account=data;
        console.log("yes")

      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  limit:number=0;
  page:number=0;
  pagination(){
    this._accountService.getPagedAccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        this.account=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  delete(id:string){
    this._accountService.deleteAccount(id).subscribe(
      (data:any)=>{
        alert("Deleted Succesfully !!!");
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }
}
