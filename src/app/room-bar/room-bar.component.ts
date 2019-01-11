import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-room-bar',
  templateUrl: './room-bar.component.html',
  styleUrls: ['./room-bar.component.css']
})
export class RoomBarComponent implements OnInit {

  @Input() room: Room;
  internalRoom: Room;

  roomImg = "/assets/room_icon.png";

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if(changes.room){
      this.internalRoom = this.room;
    }
  }

}
