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

  roomList: Observable<Room[]>;

  constructor(private roomService: RoomService) {
    this.roomList = this.roomService.getRoomList();

  }

  ngOnInit() {

  }

  onSubmit() {
    this.roomList = this.roomService.getRoomList();
  }

}
