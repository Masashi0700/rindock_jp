import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Following } from '../following';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-follower-to',
  templateUrl: './user-follower-to.component.html',
  styleUrls: ['./user-follower-to.component.css']
})
export class UserFollowerToComponent implements OnInit {

  @Input() follower: Following;
  public internalFollower: Following;
  user$: Observable<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.follower) {
      this.internalFollower = this.follower;
      this.user$ = this.userService.getUserWithId(this.internalFollower.followerId);
    }
  }

}
