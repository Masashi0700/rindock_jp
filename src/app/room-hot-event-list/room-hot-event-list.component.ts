import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-room-hot-event-list',
  templateUrl: './room-hot-event-list.component.html',
  styleUrls: ['./room-hot-event-list.component.css']
})
export class RoomHotEventListComponent implements OnInit {

  events: Observable<Event[]>;

  constructor(private eventService: EventService) {
    this.events = this.eventService.getHotEvents(12);
  }

  ngOnInit() {
  }

}
