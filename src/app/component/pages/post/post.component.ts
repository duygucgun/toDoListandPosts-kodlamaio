
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService} from '../../../services/posts.service'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
posts:Post[]=[]
  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(data=>{
      this.posts=data
    })
  }

}
