import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../event';
import { EventService } from '../event.service';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  @Input() event: Event;
  public internalEvent: Event;

  room: Observable<Room>;
  user: Observable<User>;

  constructor(private userService: UserService,
    private roomService: RoomService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.event) {
      this.internalEvent = this.event;
      this.room = this.roomService.getRoom(this.internalEvent.eventRoomId);
      this.user = this.userService.getUserWithId(this.internalEvent.eventUserId);
    }
  }

}
