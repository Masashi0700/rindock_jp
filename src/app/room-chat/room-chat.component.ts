import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';
import { SessionService } from '../core/service/session.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-room-chat',
  templateUrl: './room-chat.component.html',
  styleUrls: ['./room-chat.component.css']
})
export class RoomChatComponent implements OnInit {

  comment: Comment;
  chat: Comment[];

  chatFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(500)
  ]);

  constructor(private route: ActivatedRoute,
    private commentService: CommentService,
    private session: SessionService) {
    this.commentService.getChat(this.route.snapshot.paramMap.get('id'))
      .subscribe(chat => this.chat = chat);
  }

  ngOnInit() {
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.createComment();
    this.commentService.postComment(this.comment, id);
    this.chatFormControl.reset();
  }

  createComment() {
    this.comment = new Comment(this.session.currentUserId, this.chatFormControl.value);
  }

}
