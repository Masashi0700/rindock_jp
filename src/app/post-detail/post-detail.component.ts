import { Component, OnInit, Input, OnChanges, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { User } from '../user';
import { Room } from '../room';
import { UserService } from '../user.service';
import { RoomService } from '../room.service';
import { PostService } from '../post.service';
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

  replies: Observable<Post[]>;

  constructor(public dialogRef: MatDialogRef<PostDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private roomService: RoomService,
    private postService: PostService) {
    this.post = this.data.post;
    this.user = this.userService.getUserWithId(this.post.postUId);
    this.room = this.roomService.getRoom(this.post.postRoomId);
    this.replies = this.postService.getReplyWithPostId(this.post.postId);
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
