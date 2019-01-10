import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../event';
import { EventService } from '../event.service';
import { Room } from '../room';

@Component({
  selector: 'app-room-event-live',
  templateUrl: './room-event-live.component.html',
  styleUrls: ['./room-event-live.component.css']
})
export class RoomEventLiveComponent implements OnInit {

  @Input() room: Room;
  internalRoom: Room;

  eventLive: Observable<Event>;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.room) {
      this.internalRoom = this.room;
      if (this.internalRoom.roomEventId) {
        this.eventLive = this.eventService.getEventWithEventId(this.internalRoom.roomEventId);
      }
    }
  }

}
