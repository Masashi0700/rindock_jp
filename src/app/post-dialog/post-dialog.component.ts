import { Component, OnInit, ViewChild, Inject, OnChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SessionService } from '../core/service/session.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { Post } from '../post';
import { PostService } from '../post.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

  currentUser: Observable<User>;
  room: Observable<Room>;

  replyUser: Observable<User>;
  replyRoom: Observable<Room>;

  @ViewChild('fileInput')
  fileInput;

  ownPost: Post;

  file: File | null = null;

  imgSrc: string;

  replyPost: Post;
  roomId: string;
  replyId: string;

  userImgUrl: string;
  replyUserImgUrl: string;
  defaultAvatar = '/assets/Default_avatar.png';


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
    this.ownPost.postRoomId = this.roomId;
    if (!!this.file) {
      this.ownPost.postImgName = this.file.name;
    }
    if(this.replyId){
      this.postService.createReply(this.ownPost, this.file, this.replyId);
    }else{
      this.postService.createPost(this.ownPost, this.file);
    }
  }

  constructor(public dialogRef: MatDialogRef<PostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private postService: PostService,
    private session: SessionService,
    private userService: UserService,
    private roomService: RoomService) {
    this.currentUser = this.userService.getUserWithId(this.session.currentUserId);
    this.roomId = this.data.roomId;
    this.replyPost = this.data.post;
    this.replyId = this.data.replyId;
    this.room = this.roomService.getRoom(this.roomId);
    if(this.replyId){
      this.replyUser = this.userService.getUserWithId(this.replyPost.postUId);
      this.replyRoom = this.roomService.getRoom(this.replyPost.postRoomId);
      this.replyUser.subscribe(user => {
        this.replyUserImgUrl = user.imgUrl;
      });
    }

    this.currentUser.subscribe(user => {
      this.userImgUrl = user.imgUrl;
    });



  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
