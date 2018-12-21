import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Room } from '../room';
import { SessionService } from '../core/service/session.service';
import { EventService } from '../event.service';
import * as moment from 'moment';


@Component({
  selector: 'app-room-event-new',
  templateUrl: './room-event-new.component.html',
  styleUrls: ['./room-event-new.component.css']
})
export class RoomEventNewComponent implements OnInit {

  @Input() room: Room;
  public internalRoom: Room;

  isDateValid = false;

  times = [0, 1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23];

  eventNewFormGroup = new FormGroup({
    nameFormControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(30)
    ]),
    descFormControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(1000)
    ]),
    startDateFormControl: new FormControl(moment(), [
      Validators.required
    ]),
    startTimeFormControl: new FormControl(0, [
      Validators.required
    ]),
    endDateFormControl: new FormControl(moment(), [
      Validators.required
    ]),
    endTimeFormControl: new FormControl(0, [
      Validators.required
    ])
  });

  constructor(private session: SessionService,
    private eventService: EventService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.room) {
      this.internalRoom = this.room;
    }
  }

  onSubmit() {
    const startDate = moment(this.startDateFormControl.value);
    startDate.set({
      'hour': this.startTimeFormControl.value,
      'minute': 0,
      'second': 0,
      'millisecond': 0
    });
    const endDate = moment(this.endDateFormControl.value);
    endDate.set({
      'hour': this.endTimeFormControl.value,
      'minute': 0,
      'second': 0,
      'millisecond': 0
    });
    this.eventService.createEvent(this.internalRoom.roomId,
      this.session.currentUserId,
      this.nameFormControl.value,
      this.descFormControl.value,
      startDate,
      endDate);
  }

  checkValidDate() {
    const startDate = moment(this.startDateFormControl.value);
    startDate.set({ 'hour': this.startTimeFormControl.value });
    const endDate = moment(this.endDateFormControl.value);
    endDate.set({ 'hour': this.endTimeFormControl.value });
    const currentDate = moment();
    if (startDate.diff(currentDate) > 0 && endDate.diff(startDate) > 0) {
      this.isDateValid = true;
    } else {
      this.isDateValid = false;
    }
  }

  get nameFormControl() {
    return this.eventNewFormGroup.get('nameFormControl');
  }

  get descFormControl() {
    return this.eventNewFormGroup.get('descFormControl');
  }

  get startDateFormControl() {
    return this.eventNewFormGroup.get('startDateFormControl');
  }

  get startTimeFormControl() {
    return this.eventNewFormGroup.get('startTimeFormControl');
  }

  get endDateFormControl() {
    return this.eventNewFormGroup.get('endDateFormControl');
  }

  get endTimeFormControl() {
    return this.eventNewFormGroup.get('endTimeFormControl');
  }

}
