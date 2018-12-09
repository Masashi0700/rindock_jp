import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post';
import { PostService } from '../post.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';

@Component({
  selector: 'app-room-post-index',
  templateUrl: './room-post-index.component.html',
  styleUrls: ['./room-post-index.component.css']
})
export class RoomPostIndexComponent implements OnInit {

  posts: Observable<Post[]>;

  roomId: string;

  constructor(private route: ActivatedRoute,
    private postService: PostService,
    public dialog: MatDialog) {
    this.roomId = this.route.snapshot.paramMap.get('id');
    this.posts = this.postService.getPostsObservableWithRoomId(this.roomId);
  }

  ngOnInit() {
  }

  onClickedPostButton() {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '500px',
      data: {
        roomId: this.roomId,
        replyId: '',
      }
    });
  }


}
