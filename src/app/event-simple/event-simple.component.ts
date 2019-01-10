import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../event';
import { EventService } from '../event.service';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-event-simple',
  templateUrl: './event-simple.component.html',
  styleUrls: ['./event-simple.component.css']
})
export class EventSimpleComponent implements OnInit {

  @Input() event: Event;
  public internalEvent: Event;

  room: Observable<Room>;
  user: Observable<User>;

  roomAvatar: string;
  roomImg = "/assets/room_icon.png";

  constructor(private eventService: EventService,
    private roomService: RoomService,
    private userService: UserService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.event) {
      this.internalEvent = this.event;
      this.room = this.roomService.getRoom(this.internalEvent.eventRoomId);
      this.user = this.userService.getUserWithId(this.internalEvent.eventUserId);
      this.room.subscribe(room => this.roomAvatar = room.roomImgUrl);
    }
  }

  onEventClicked() {

  }

  onAcceptClicked() {

  }

  onPendClicked() {

  }

  onLiveClicked() {

  }

}
