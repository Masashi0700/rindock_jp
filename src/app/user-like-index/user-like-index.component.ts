import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Like } from '../like';
import { LikeService } from '../like.service';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-like-index',
  templateUrl: './user-like-index.component.html',
  styleUrls: ['./user-like-index.component.css']
})
export class UserLikeIndexComponent implements OnInit {

  likes: Observable<Like[]>;

  constructor(private route: ActivatedRoute,
    private likeService: LikeService,
    private postService: PostService) {
    const userId = this.route.snapshot.paramMap.get('id');
    this.likes = this.likeService.getLikesWithUserId(userId);
  }

  ngOnInit() {
  }

}
