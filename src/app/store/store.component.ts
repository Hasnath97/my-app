import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  name:string="";
  price:number=0;
  rating:number=0;
  delivery:string="";
  stores: any = [
    { name: 'pen', price: 10, rating: 3, delivery: true },
    { name: 'phone', price: 10000, rating: 2, delivery: false },
    { name: 'shirt', price: 400, rating: 4, delivery: true },
    { name: 'cap', price: 200, rating: 5, delivery: false },
    { name: 'mobile case', price: 300, rating: 2, delivery:  true },
    { name: 'remote', price: 400, rating: 2.5, delivery:  false },
    
  ];
  delete(i:number){
    this.stores.splice(i,1);
  }
  pricehl(){
    this.stores.sort((a:any,b:any)=>b.price-a.price);
  }
  pricelh(){
    this.stores.sort((a:any,b:any)=>a.price-b.price);
  }
  ratinghl(){
    this.stores.sort((a:any,b:any)=>b.rating-a.rating);
  }
  ratinglh(){
    this.stores.sort((a:any,b:any)=>a.rating-b.rating);
  }
  term:string='';
  search(){
    this.stores=this.stores.filter((store:any)=>store.name.includes(this.term));
  }
  free(){
    this.stores=this.stores.filter((store:any)=>store.delivery==true);
  }
  discount(){
    this.stores=this.stores.map((store:any)=>{
      store.price=store.price*0.5;
      return store;
    });
  }
  charges(){
    this.stores=this.stores.map((store:any)=>{
      store.price = store.price+30;
      return store;
    })
  }
  total(){
    let total=this.stores.reduce((sum:any,store:any)=>sum+store.price,0);
    alert(total)
  }
  items(){
    let cart=this.stores.length;
    alert(cart);
  }
  add(){
    let store={
      name:this.name,
      price:this.price,
      rating:this.rating,
      delivery:this.delivery
    }
    this.stores.unshift(store)
  }
}
