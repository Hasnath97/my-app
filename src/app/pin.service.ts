import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PinService {
  
  [x: string]: any;
  Pi() {
    throw new Error('Method not implemented.');
  }
  Pin():Observable<any> {
    return this._httpClient.get("https://picsum.photos/v2/list?page=1&limit=100");
  }
  Pins() {
    throw new Error('Method not implemented.');
  }

  constructor( private _httpClient:HttpClient) { }
}
