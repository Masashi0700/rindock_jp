import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../comment';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-room-comment',
  templateUrl: './room-comment.component.html',
  styleUrls: ['./room-comment.component.css']
})
export class RoomCommentComponent implements OnInit {

  @Input() comment: Comment;
  public internalComment: Comment;
  user: Observable<User>

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.comment) {
      this.internalComment = this.comment;
      this.user = this.userService.getUserWithId(this.internalComment.uid);
    }
  }

}
