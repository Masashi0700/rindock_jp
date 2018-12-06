import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Like } from '../like';
import { LikeService } from '../like.service';
import { SessionService } from '../core/service/session.service';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {

  @Input() postId: string;
  public internalPostId: string;

  liked: Observable<boolean>;
  numOfLikes: number;

  constructor(private likeService: LikeService,
    private session: SessionService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.postId) {
      this.internalPostId = this.postId;
      this.liked = this.likeService.checkLikeWithUserIdAndPostId(this.session.currentUserId, this.internalPostId);
      this.likeService
        .getLikesWithPostId(this.internalPostId)
        .subscribe(posts => this.numOfLikes = posts.length);
    }
  }

  onClickedLike() {
    this.likeService.changeLike(this.session.currentUserId, this.internalPostId);
  }

}
