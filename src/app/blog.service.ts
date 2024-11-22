import { Injectable } from '@angular/core';
import { BlogComponent } from './blog/blog.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _httpClient:HttpClient) { }
    getBlog():Observable<any>{
      return this._httpClient.get("https://dummyapi.online/api/blogposts");
    }
}
