import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FollowingService } from '../following.service';
import { Following } from '../following';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SessionService } from '../core/service/session.service';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.css']
})
export class FollowButtonComponent implements OnInit {

  @Input() followeeId: string;
  public internalFolloweeId: string;

  follow: Observable<boolean>;


  constructor(private followingService: FollowingService,
    private session: SessionService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.followeeId) {
      this.internalFolloweeId = this.followeeId;
      this.follow = this.followingService.checkFollowing(this.session.currentUserId, this.internalFolloweeId);
    }
  }

  onClickedFollow() {
    this.followingService.changeFollowing(this.session.currentUserId, this.internalFolloweeId);
  }

}
