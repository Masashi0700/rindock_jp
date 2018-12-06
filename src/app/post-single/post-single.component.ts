import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { User } from '../user';
import { Room } from '../room';
import { UserService } from '../user.service';
import { RoomService } from '../room.service';

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

  constructor(private userService: UserService,
    private roomService: RoomService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: any){
    if(changes.post){
      this.internalPost = changes.post.currentValue;
      this.user = this.userService.getUserWithId(this.internalPost.postUId);
      this.room = this.roomService.getRoom(this.internalPost.postRoomId);
    }
  }

}
