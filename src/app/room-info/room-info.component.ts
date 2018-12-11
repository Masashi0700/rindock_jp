import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { Room } from '../room';
import { UserService } from '../user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RoomEditDialogComponent } from '../room-edit-dialog/room-edit-dialog.component';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.css']
})
export class RoomInfoComponent implements OnInit {

  @Input() room: Room;
  public internalRoom: Room;

  roomOwner: Observable<User>;
  defaultRoomImg = '/assets/room_icon.png';

  constructor(private userService: UserService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.room && this.room) {
      this.internalRoom = this.room;
      this.roomOwner = this.userService.getUserWithId(this.internalRoom.roomOwnerId);
    }
  }

  onEditRoomClicked() {
    const dialogRef = this.dialog.open(RoomEditDialogComponent, {
      width: '500px',
      data: {
        roomId: this.internalRoom.roomId
      }
    });
  }

}
