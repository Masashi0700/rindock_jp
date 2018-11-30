import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.css']
})
export class RoomInfoComponent implements OnInit {

  name: string;
  breakTime: string;
  desc: string;

  constructor(private route: ActivatedRoute,
    private roomService: RoomService,
    private location: Location) {
      this.getRoomData();
    }

  ngOnInit() {
  }

  getRoomData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.roomService.getRoom(id)
      .subscribe(room => {
        this.name = room.name;
        this.breakTime = room.breakTime;
        this.desc = room.desc;
      });
  }

}