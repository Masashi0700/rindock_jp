import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { Tutor } from '../tutor';
import { TutorService } from '../tutor.service';

@Component({
  selector: 'app-room-member-list',
  templateUrl: './room-member-list.component.html',
  styleUrls: ['./room-member-list.component.css']
})
export class RoomMemberListComponent implements OnInit {

  @Input() roomId: string;
  public internalRoomId: string;

  whiteList: Observable<Member[]>;
  blackList: Observable<Member[]>;
  waiting: Observable<Member[]>;
  tutorList: Observable<Tutor[]>;

  constructor(private memberService: MemberService,
    private tutorService: TutorService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.roomId) {
      this.internalRoomId = this.roomId;
      this.whiteList = this.memberService.getMemberListWithRoomIdAndListType(this.internalRoomId, 'whitelist');
      this.blackList = this.memberService.getMemberListWithRoomIdAndListType(this.internalRoomId, 'blacklist');
      this.waiting = this.memberService.getMemberListWithRoomIdAndListType(this.internalRoomId, 'waiting');
      this.tutorList = this.tutorService.getTutorListWithRoomId(this.internalRoomId);
    }
  }

}
