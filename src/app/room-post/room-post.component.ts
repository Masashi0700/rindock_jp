import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-room-post',
  templateUrl: './room-post.component.html',
  styleUrls: ['./room-post.component.css']
})
export class RoomPostComponent implements OnInit {
  @ViewChild('fileInput')
  fileInput;

  file: File | null = null;

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }

  constructor() { }

  ngOnInit() {
  }

}
