import { Injectable } from '@angular/core';
import { Event } from './event';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private db: AngularFirestore) { }

  createEvent(eventRoomId: string, eventUserId: string, eventName: string, eventDesc: string) {
    const eventId = this.db.createId();
    const event = new Event(eventId, eventRoomId, eventUserId, eventName, eventDesc);
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

}
