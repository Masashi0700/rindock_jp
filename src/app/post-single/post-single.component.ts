import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { User } from '../user';
import { Room } from '../room';
import { UserService } from '../user.service';
import { RoomService } from '../room.service';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})
export class PostSingleComponent implements OnInit {
  @Input() post: Post;

  public internalPost: Post;
  user: Observable<User>;
  room: Observable<Room>;

  userImgUrl: string;
  defaultAvatar = '/assets/Default_avatar.png';

  constructor(private userService: UserService,
    private roomService: RoomService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.post) {
      this.internalPost = changes.post.currentValue;
      this.user = this.userService.getUserWithId(this.internalPost.postUId);
      this.room = this.roomService.getRoom(this.internalPost.postRoomId);

      this.user.subscribe(user => {
        this.userImgUrl = user.imgUrl;
      });
    }
  }

  onPostClicked() {
    const dialogRef = this.dialog.open(PostDetailComponent, {
      width: '500px',
      data: {
        post: this.internalPost,
        user: this.user,
        room: this.room
      }
    });
  }

}
