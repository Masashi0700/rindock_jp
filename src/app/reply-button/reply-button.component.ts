import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-reply-button',
  templateUrl: './reply-button.component.html',
  styleUrls: ['./reply-button.component.css']
})
export class ReplyButtonComponent implements OnInit {

  @Input() postId: string;
  public internalPostId;
  numOfReplys: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.postId) {
      this.internalPostId = this.postId;
      this.postService.getReplyWithPostId(this.internalPostId)
        .subscribe(posts => this.numOfReplys = posts.length);
    }
  }

  onClickedReply() {
    console.warn("clicked reply button");
  }

}
