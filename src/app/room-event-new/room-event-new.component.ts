import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Room } from '../room';
import { SessionService } from '../core/service/session.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-room-event-new',
  templateUrl: './room-event-new.component.html',
  styleUrls: ['./room-event-new.component.css']
})
export class RoomEventNewComponent implements OnInit {

  @Input() room: Room;
  public internalRoom: Room;

  eventNewFormGroup = new FormGroup({
    nameFormControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(30)
    ]),
    descFormControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(1000)
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
    this.eventService.createEvent(this.internalRoom.roomId,
      this.session.currentUserId,
      this.nameFormControl.value,
      this.descFormControl.value);
  }

  get nameFormControl() {
    return this.eventNewFormGroup.get('nameFormControl');
  }

  get descFormControl() {
    return this.eventNewFormGroup.get('descFormControl');
  }

}
