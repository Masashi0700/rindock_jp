import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from '../core/service/session.service';
import { Following } from '../following';
import { FollowingService } from '../following.service';

@Component({
  selector: 'app-post-timeline',
  templateUrl: './post-timeline.component.html',
  styleUrls: ['./post-timeline.component.css']
})
export class PostTimelineComponent implements OnInit {

  followees: Observable<Following[]>;

  constructor(private session: SessionService,
    private followingService: FollowingService) {
    const userId = this.session.currentUserId;
    this.followees = this.followingService.getFollowingsWithFollowerId(userId);
  }

  ngOnInit() {
  }

}
