import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-simple',
  templateUrl: './event-simple.component.html',
  styleUrls: ['./event-simple.component.css']
})
export class EventSimpleComponent implements OnInit {

  @Input() event: Event;
  public internalEvent: Event;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any){
    if(changes.event){
      this.internalEvent = this.event;
    }
  }

}
