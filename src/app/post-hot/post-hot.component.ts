import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-hot',
  templateUrl: './post-hot.component.html',
  styleUrls: ['./post-hot.component.css']
})
export class PostHotComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(private postService: PostService) {
    this.posts = this.postService.getHotPosts(10, 'new');
  }

  ngOnInit() {
  }

}
