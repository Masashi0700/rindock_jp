import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SessionService } from '../core/service/session.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

  currentUser: Observable<User>;
  room: Observable<Room>;

  @ViewChild('fileInput')
  fileInput;

  ownPost: Post;

  file: File | null = null;

  imgSrc: string;

  postCommentFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(1000)
  ]);

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
    if (this.file) {
      const reader = new FileReader();
      reader.onload = e => this.imgSrc = reader.result as string;
      reader.readAsDataURL(this.file);
    }
  }

  onSubmit() {
    this.ownPost = new Post(this.session.currentUserId, this.postCommentFormControl.value);
    this.ownPost.postRoomId = this.route.snapshot.paramMap.get('id');
    if (!!this.file) {
      this.ownPost.postImgName = this.file.name;
    }
    this.postService.createPost(this.ownPost, this.file);
  }

  constructor(private postService: PostService,
    private session: SessionService,
    private route: ActivatedRoute,
    private userService: UserService,
    private roomService: RoomService) {
    this.currentUser = this.userService.getUserWithId(this.session.currentUserId);
    this.room = this.roomService.getRoom(this.route.snapshot.paramMap.get('id'));

  }

  ngOnInit() {
  }

}
