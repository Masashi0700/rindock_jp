import { Component, OnInit, ViewChild, Inject, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-edit-dialog',
  templateUrl: './room-edit-dialog.component.html',
  styleUrls: ['./room-edit-dialog.component.css']
})
export class RoomEditDialogComponent implements OnInit {


  room: Room;

  @ViewChild('fileInput')
  fileInput;
  file: File | null = null;
  imgSrc: string;

  roomEditFormGroup = new FormGroup({
    nameFormControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(30)
    ]),
    breakFormControl: new FormControl("10", [
      Validators.required
    ]),
    chatFormControl: new FormControl('break', [
      Validators.required
    ]),
    descFormControl: new FormControl('', [
      Validators.maxLength(500)
    ])
  });

  constructor(public dialogRef: MatDialogRef<RoomEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private roomService: RoomService) {
    const roomId = this.data.roomId;
    this.roomService.getRoom(roomId).subscribe(room => this.room = room);
  }

  ngOnInit() {
  }

  onSubmit() {
    const editedRoom = new Room(this.room.roomId,
      this.nameFormControl.value,
      this.breakFormControl.value,
      this.chatFormControl.value,
      this.room.roomPublic,
      this.descFormControl.value
    );
    editedRoom.roomOwnerId = this.room.roomOwnerId;
    if (!!this.file) {
      editedRoom.roomImgName = this.file.name;
    } else {
      editedRoom.roomImgName = this.room.roomImgName;
      editedRoom.roomImgUrl = this.room.roomImgUrl;
    }
    this.roomService.updateRoom(editedRoom, this.file);
  }

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

  get nameFormControl() {
    return this.roomEditFormGroup.get('nameFormControl');
  }

  get breakFormControl() {
    return this.roomEditFormGroup.get('breakFormControl');
  }

  get chatFormControl() {
    return this.roomEditFormGroup.get('chatFormControl');
  }

  get descFormControl() {
    return this.roomEditFormGroup.get('descFormControl');
  }

}
