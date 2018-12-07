import { Component, OnInit, Input, OnChanges, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { User } from '../user';
import { Room } from '../room';
import { UserService } from '../user.service';
import { RoomService } from '../room.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;
  user: Observable<User>;
  room: Observable<Room>;

  constructor(public dialogRef: MatDialogRef<PostDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private roomService: RoomService) {
    this.post = this.data.post;
    this.user = this.userService.getUserWithId(this.post.postUId);
    this.room = this.roomService.getRoom(this.post.postRoomId);
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
