import { Injectable } from '@angular/core';
import { Event } from './event';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private db: AngularFirestore) { }

  createEvent(eventRoomId: string, eventUserId: string, eventName: string, eventDesc: string, eventStartDate: moment.Moment, eventEndDate: moment.Moment) {
    const eventId = this.db.createId();
    const event = new Event(eventId, eventRoomId, eventUserId, eventName, eventDesc, eventStartDate, eventEndDate);
    this.db
      .collection('events').doc(eventId)
      .set(event.deserialize());
  }

  getEventWithEventId(eventId: string): Observable<Event> {
    return this.db.collection('events').doc<Event>(eventId).valueChanges();
  }

  getEventsWithRoomId(roomId: string): Observable<Event[]> {
    return this.db.collection<Event>('events', ref => ref.where('eventRoomId', '==', roomId)).valueChanges();
  }

  getEventsWithUserId(userId: string): Observable<Event[]> {
    return this.db.collection<Event>('events', ref => ref.where('eventUserId', '==', userId)).valueChanges();
  }

  getHotEvents(amount: number): Observable<Event[]> {
    return this.db.collection<Event>('events', ref =>
      ref.where('eventLive', '==', true)
        .where('eventDone', '==', false)
        .orderBy('eventNumOfLikes', 'desc')
        .limit(amount))
      .valueChanges();
  }

}
