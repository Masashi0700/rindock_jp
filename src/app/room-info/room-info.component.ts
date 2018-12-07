import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, combineLatest } from 'rxjs';
import { catchError, map, tap, mergeMap, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs'
import { User } from '../user';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.css']
})
export class RoomInfoComponent implements OnInit {

  room: Observable<Room>;
  roomOwner: Observable<User>;

  constructor(private route: ActivatedRoute,
    private roomService: RoomService,
    private location: Location,
    private userService: UserService) {
    this.room = this.roomService.getRoom(this.route.snapshot.paramMap.get('id'));
    this.roomOwner = this.room.pipe(
      switchMap(room => this.userService.getUserWithId(room.roomOwnerId))
    );
  }

  ngOnInit() {
  }

}
