import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../tag';
import { User } from '../user';
import { Post } from '../post';
import { Room } from '../room';
import { UserService } from '../user.service';
import { PostService } from '../post.service';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-search-tag-to',
  templateUrl: './search-tag-to.component.html',
  styleUrls: ['./search-tag-to.component.css']
})
export class SearchTagToComponent implements OnInit {

  @Input() tag: Tag;
  public internalTag: Tag;

  isPost = false;
  isUser = false;
  isRoom = false;

  post: Observable<Post>;
  user: Observable<User>;
  room: Observable<Room>;

  constructor(private userService: UserService,
    private postService: PostService,
    private roomService: RoomService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.tag) {
      this.internalTag = this.tag;
      if (this.internalTag.subjectType == 'post') {
        this.isPost = true;
        this.isUser = false;
        this.isRoom = false;
        this.post = this.postService.getAPostWithPostId(this.internalTag.subjectId);
      } else if (this.internalTag.subjectType == 'room') {
        this.isRoom = true;
        this.isPost = false;
        this.isUser = false;
        this.room = this.roomService.getRoom(this.internalTag.subjectId);
      } else {
        this.isUser = true;
        this.isPost = false;
        this.isRoom = false;
        this.user = this.userService.getUserWithId(this.internalTag.subjectId);
      }

    }
  }

}
