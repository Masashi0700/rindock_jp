import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { User } from '../user';
import { Room } from '../room';
import { UserService } from '../user.service';
import { RoomService } from '../room.service';
import { PostService } from '../post.service';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-post-reply',
  templateUrl: './post-reply.component.html',
  styleUrls: ['./post-reply.component.css']
})
export class PostReplyComponent implements OnInit {

  @Input() post: Post;

  public internalPost: Post;
  user: Observable<User>;
  room: Observable<Room>;
  replyPosts: Observable<Post[]>;

  constructor(private userService: UserService,
    private roomService: RoomService,
    private postService: PostService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.post) {
      this.internalPost = changes.post.currentValue;
      this.user = this.userService.getUserWithId(this.internalPost.postUId);
      this.room = this.roomService.getRoom(this.internalPost.postRoomId);
      this.replyPosts = this.postService.getReplyWithPostId(this.internalPost.postId);
    }
  }

}
