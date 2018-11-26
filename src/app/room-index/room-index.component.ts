import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { ROOMS } from '../mock-room';

@Component({
  selector: 'app-room-index',
  templateUrl: './room-index.component.html',
  styleUrls: ['./room-index.component.css']
})
export class RoomIndexComponent implements OnInit {

  //roomList = ROOMS;
  roomList: Room[];

  constructor(private roomService: RoomService) {
  }

  ngOnInit() {
    this.onSubmit();
  }

  onSubmit(){
    this.roomService.getRoomList().subscribe(roomList => this.roomList = roomList);
  }

}
