import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-timeline-following',
  templateUrl: './post-timeline-following.component.html',
  styleUrls: ['./post-timeline-following.component.css']
})
export class PostTimelineFollowingComponent implements OnInit {

  @Input() followeeId: string;
  public internalFolloweeId: string;

  posts: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.followeeId) {
      this.internalFolloweeId = this.followeeId;
      this.posts = this.postService.getPostsObservableWithUserId(this.internalFolloweeId);
    }
  }

}
