import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Following } from '../following';
import { FollowingService } from '../following.service';

@Component({
  selector: 'app-user-follow-index',
  templateUrl: './user-follow-index.component.html',
  styleUrls: ['./user-follow-index.component.css']
})
export class UserFollowIndexComponent implements OnInit {

  follows: Observable<Following[]>;

  constructor(private route: ActivatedRoute,
    private followingService: FollowingService
  ) {
    const userId = this.route.snapshot.paramMap.get('id');
    this.follows = this.followingService.getFollowingsWithFollowerId(userId);
  }

  ngOnInit() {
  }

}
