import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  room: Observable<Room>;
  roomId: string;
  constructor(private route: ActivatedRoute,
    private roomService: RoomService,
    private location: Location) {
    this.roomId = this.route.snapshot.paramMap.get('id')
    this.room = this.roomService.getRoom(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

}
