import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';

@Component({
  selector: 'app-reply-button',
  templateUrl: './reply-button.component.html',
  styleUrls: ['./reply-button.component.css']
})
export class ReplyButtonComponent implements OnInit {
  @Input() post: Post;
  @Input() postId: string;
  @Input() roomId: string;
  public internalPost: Post;
  public internalPostId: string;
  public internalRoomId: string;

  constructor(private postService: PostService,
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.postId) {
      this.internalPostId = this.postId;
    }
    if(changes.roomId){
      this.internalRoomId = this.roomId;
    }
    if(changes.post){
      this.internalPost = this.post;
    }
  }

  onClickedReply() {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '500px',
      data: {
        roomId: this.internalRoomId,
        replyId: this.internalPostId,
        post: this.internalPost
      }
    });
  }

}
