import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { Subs } from '../subs';

@Component({
  selector: 'app-room-bar-list',
  templateUrl: './room-bar-list.component.html',
  styleUrls: ['./room-bar-list.component.css']
})
export class RoomBarListComponent implements OnInit {

  @Input() subs: Subs[];
  internalSubs: Subs[];
  internalRooms: Room[];

  constructor(private roomService: RoomService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.subs) {
      this.internalSubs = this.subs;
    }
  }

}
