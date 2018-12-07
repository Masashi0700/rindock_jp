import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../event';
import { Room } from '../room';
import { EventService } from '../event.service';

@Component({
  selector: 'app-room-event-index',
  templateUrl: './room-event-index.component.html',
  styleUrls: ['./room-event-index.component.css']
})
export class RoomEventIndexComponent implements OnInit {

  @Input() room: Room;
  public internalRoom: Room;

  events: Observable<Event[]>;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.room && this.room) {
      this.internalRoom = this.room;
      this.events = this.eventService.getEventsWithRoomId(this.internalRoom.roomId);
    }
  }

}
