import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SessionService } from '../core/service/session.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-room-post',
  templateUrl: './room-post.component.html',
  styleUrls: ['./room-post.component.css']
})
export class RoomPostComponent implements OnInit {
  @ViewChild('fileInput')
  fileInput;

  file: File | null = null;

  imgSrc: string;

  postCommentFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(500)
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
    var post = new Post(this.session.currentUserId, this.postCommentFormControl.value);
    post.roomId = this.route.snapshot.paramMap.get('id');
    if (!!this.file) {
      post.imgName = this.file.name;
    }
    this.postService.createPost(post, this.file);
    console.warn(post);
    post.reset();
  }

  constructor(private route: ActivatedRoute,
    private postService: PostService,
    private session: SessionService) { }

  ngOnInit() {
  }

}
