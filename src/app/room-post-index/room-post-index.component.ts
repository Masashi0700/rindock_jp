import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-room-post-index',
  templateUrl: './room-post-index.component.html',
  styleUrls: ['./room-post-index.component.css']
})
export class RoomPostIndexComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(private route: ActivatedRoute,
    private postService: PostService) {
    const roomId = this.route.snapshot.paramMap.get('id');
    this.posts = this.postService.getPostsObservableWithRoomId(roomId);
  }

  ngOnInit() {
  }
}
