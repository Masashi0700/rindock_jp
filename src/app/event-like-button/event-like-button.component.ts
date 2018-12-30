import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { EventLike } from '../event-like';
import { EventLikeService } from '../event-like.service';
import { SessionService } from '../core/service/session.service';

@Component({
  selector: 'app-event-like-button',
  templateUrl: './event-like-button.component.html',
  styleUrls: ['./event-like-button.component.css']
})
export class EventLikeButtonComponent implements OnInit {

  @Input() eventId: string;
  public internalEventId: string;
  eventLiked: Observable<boolean>;

  constructor(private eventLikeService: EventLikeService,
    private session: SessionService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.eventId) {
      this.internalEventId = this.eventId;
      this.eventLiked = this.eventLikeService
        .checkEventLikeWithUserIdAndEventId(this.session.currentUserId, this.internalEventId);
    }
  }

  onClickedEventLike() {
    this.eventLikeService.changeEventLike(this.session.currentUserId, this.internalEventId);
  }

}
