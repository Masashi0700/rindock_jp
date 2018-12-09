import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';
import { SessionService } from '../core/service/session.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';

@Component({
  selector: 'app-room-chat',
  templateUrl: './room-chat.component.html',
  styleUrls: ['./room-chat.component.css']
})
export class RoomChatComponent implements OnInit {

  chat: Observable<Comment[]>;
  roomId: string;

  constructor(private route: ActivatedRoute,
    private commentService: CommentService,
    public dialog: MatDialog) {
    this.roomId = this.route.snapshot.paramMap.get('id')
    this.chat = this.commentService.getChat(this.roomId);
  }

  ngOnInit() {
  }


  onClickedComment() {
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      width: '500px',
      data: {
        roomId: this.roomId,
      }
    });
  }
}
