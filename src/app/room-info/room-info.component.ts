import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.css']
})
export class RoomInfoComponent implements OnInit {

  room: Observable<Room>;

  constructor(private route: ActivatedRoute,
    private roomService: RoomService,
    private location: Location) {
    this.room = this.roomService.getRoom(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

}
