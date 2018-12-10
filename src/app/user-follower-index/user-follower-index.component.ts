import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Following } from '../following';
import { FollowingService } from '../following.service';

@Component({
  selector: 'app-user-follower-index',
  templateUrl: './user-follower-index.component.html',
  styleUrls: ['./user-follower-index.component.css']
})
export class UserFollowerIndexComponent implements OnInit {

  followers: Observable<Following[]>;

  constructor(private route: ActivatedRoute,
    private followingService: FollowingService
  ) {
    const userId = this.route.snapshot.paramMap.get('id');
    this.followers = this.followingService.getFollowingsWithFolloweeId(userId);
  }

  ngOnInit() {
  }

}
