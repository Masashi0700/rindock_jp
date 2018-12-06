import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-user-post-index',
  templateUrl: './user-post-index.component.html',
  styleUrls: ['./user-post-index.component.css']
})
export class UserPostIndexComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(private route: ActivatedRoute,
    private postService: PostService) {
    const userId = this.route.snapshot.paramMap.get('id');
    this.posts = this.postService.getPostsObservableWithUserId(userId);
  }

  ngOnInit() {
  }

}
