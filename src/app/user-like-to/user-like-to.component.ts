import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Like } from '../like';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-user-like-to',
  templateUrl: './user-like-to.component.html',
  styleUrls: ['./user-like-to.component.css']
})
export class UserLikeToComponent implements OnInit {

  @Input() like: Like;
  public internalLike: Like;
  post$: Observable<Post>;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.like) {
      this.internalLike = this.like;
      this.post$ = this.postService.getAPostWithPostId(this.internalLike.likePostId);
    }
  }

}
