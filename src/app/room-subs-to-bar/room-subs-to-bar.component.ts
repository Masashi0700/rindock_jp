import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { Subs } from '../subs';

@Component({
  selector: 'app-room-subs-to-bar',
  templateUrl: './room-subs-to-bar.component.html',
  styleUrls: ['./room-subs-to-bar.component.css']
})
export class RoomSubsToBarComponent implements OnInit {

  @Input() subs: Subs;
  internalSubs: Subs;

  room: Observable<Room>;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.subs) {
      this.internalSubs = this.subs;
      this.room = this.roomService.getRoom(this.internalSubs.subsRoomId);
    }
  }

}
