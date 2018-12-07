import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Subs } from '../subs';
import { SubsService } from '../subs.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SessionService } from '../core/service/session.service';

@Component({
  selector: 'app-sub-button',
  templateUrl: './sub-button.component.html',
  styleUrls: ['./sub-button.component.css']
})
export class SubButtonComponent implements OnInit {

  @Input() roomId: string;
  public internalRoomId: string;

  subs: Observable<boolean>;


  constructor(private subsService: SubsService,
    private session: SessionService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.roomId) {
      this.internalRoomId = this.roomId;
      this.subs = this.subsService.checkSubs(this.session.currentUserId, this.internalRoomId);
    }
  }

  onClickedSubs() {
    this.subsService.changeSubs(this.session.currentUserId, this.internalRoomId);
  }

}
