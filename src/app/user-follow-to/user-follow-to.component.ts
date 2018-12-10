import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Following } from '../following';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-follow-to',
  templateUrl: './user-follow-to.component.html',
  styleUrls: ['./user-follow-to.component.css']
})
export class UserFollowToComponent implements OnInit {

  @Input() follow: Following;
  public internalFollow: Following;
  user$: Observable<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.follow) {
      this.internalFollow = this.follow;
      this.user$ = this.userService.getUserWithId(this.internalFollow.followeeId);
    }
  }

}
