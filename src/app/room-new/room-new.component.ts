import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { SessionService } from '../core/service/session.service';

@Component({
  selector: 'app-room-new',
  templateUrl: './room-new.component.html',
  styleUrls: ['./room-new.component.css']
})
export class RoomNewComponent implements OnInit {

  public room: Room;

  roomNewFormGroup = new FormGroup({
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
    publicFormControl: new FormControl(true, [
      Validators.required
    ]),
    descFormControl: new FormControl('', [
      Validators.maxLength(1000)
    ])
  });

  constructor(private roomService: RoomService,
    private session: SessionService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.formToRoom();
    this.room.roomOwnerId = this.session.currentUserId;
    this.roomService.createRoom(this.room);
    this.room.reset();
  }

  formToRoom() {
    this.room = new Room('', this.nameFormControl.value, this.breakFormControl.value,
      this.chatFormControl.value, this.publicFormControl.value,
      this.descFormControl.value);
  }

  get nameFormControl() {
    return this.roomNewFormGroup.get('nameFormControl');
  }

  get breakFormControl() {
    return this.roomNewFormGroup.get('breakFormControl');
  }

  get chatFormControl() {
    return this.roomNewFormGroup.get('chatFormControl');
  }

  get publicFormControl() {
    return this.roomNewFormGroup.get('publicFormControl');
  }

  get descFormControl() {
    return this.roomNewFormGroup.get('descFormControl');
  }

}
