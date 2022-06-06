import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post'
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private HttpClient:HttpClient) { }
  getPosts():Observable<Post[]>{
    return this.HttpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
    
  }
}
