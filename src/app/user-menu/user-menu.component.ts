import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { SessionService } from '../core/service/session.service';
import { Tutor } from '../tutor';
import { TutorService } from '../tutor.service';
import { Mute } from '../mute';
import { MuteService } from '../mute.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  @Input() userId: string;
  @Input() roomId: string;

  internalUserId: string;
  internalRoomId: string;

  constructor(private session: SessionService,
    private memberService: MemberService,
    private tutorService: TutorService,
    private muteService: MuteService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (this.userId && this.roomId) {
      this.internalUserId = this.userId;
      this.internalRoomId = this.roomId;
    }
  }

  onClickedTutor() {
    this.tutorService.setTutor(this.internalUserId, this.internalRoomId);
  }

  onClickedBlackList() {
    this.memberService.setMember(this.internalUserId, this.internalRoomId, 'blacklist');
  }

  onClickedMute() {
    this.muteService.setMute(this.session.currentUserId, this.internalUserId);
  }

}
