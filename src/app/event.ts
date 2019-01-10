import * as moment from 'moment';
import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;

export class Event {

  eventId: string;
  eventRoomId: string;
  eventUserId: string;
  eventName: string;
  eventDesc: string;
  eventStartDate: Date;
  eventEndDate: Date;
  eventAccepted: boolean;
  eventLive: boolean;
  eventDone: boolean;
  eventNumOfLikes: number;

  constructor(eventId: string, eventRoomId: string, eventUserId: string, eventName: string, eventDesc: string, startDate: moment.Moment, endDate: moment.Moment) {
    this.eventId = eventId;
    this.eventRoomId = eventRoomId;
    this.eventUserId = eventUserId;
    this.eventName = eventName;
    this.eventDesc = eventDesc;
    this.eventStartDate = startDate.toDate();
    this.eventEndDate = endDate.toDate();
    this.eventAccepted = false;
    this.eventLive = false;
    this.eventDone = false;
    this.eventNumOfLikes = 0;
  }

  reset() {
    this.eventId = '';
    this.eventRoomId = '';
    this.eventUserId = '';
    this.eventName = '';
    this.eventDesc = '';
    this.eventStartDate = moment().toDate();
    this.eventEndDate = moment().toDate();
    this.eventAccepted = false;
    this.eventLive = false;
    this.eventDone = false;
    this.eventNumOfLikes = 0;
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
