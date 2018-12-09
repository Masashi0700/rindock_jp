import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';
import { SessionService } from '../core/service/session.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.css']
})
export class CommentDialogComponent implements OnInit {

  chatFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(500)
  ]);

  roomId: string;

  constructor(private session: SessionService,
    public dialogRef: MatDialogRef<CommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commentService: CommentService) {
    this.roomId = this.data.roomId;
  }

  onSubmit() {
    const newComment = new Comment(this.session.currentUserId, this.chatFormControl.value);
    this.commentService.postComment(newComment, this.roomId);
    this.chatFormControl.reset();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
