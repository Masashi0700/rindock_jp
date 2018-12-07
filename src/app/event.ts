import * as moment from 'moment';

export class Event {

  eventId: string;
  eventRoomId: string;
  eventUserId: string;
  eventName: string;
  eventDesc: string;
  eventDate: number

  constructor(eventId: string, eventRoomId: string, eventUserId: string, eventName: string, eventDesc: string) {
    this.eventId = eventId;
    this.eventRoomId = eventRoomId;
    this.eventUserId = eventUserId;
    this.eventName = eventName;
    this.eventDesc = eventDesc;
    this.eventDate = +moment();
  }

  reset() {
    this.eventId = '';
    this.eventRoomId = '';
    this.eventUserId = '';
    this.eventName = '';
    this.eventDesc = '';
    this.eventDate = 0;
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
