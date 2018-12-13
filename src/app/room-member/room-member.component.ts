import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../member';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-room-member',
  templateUrl: './room-member.component.html',
  styleUrls: ['./room-member.component.css']
})
export class RoomMemberComponent implements OnInit {

  @Input() member: Member;
  public internalMember: Member;

  user: Observable<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.member) {
      this.internalMember = this.member;
      this.user = this.userService.getUserWithId(this.internalMember.userId);
    }
  }

}
