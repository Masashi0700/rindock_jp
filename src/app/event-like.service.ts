import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EventLike } from './event-like';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventLikeService {

  constructor(private db: AngularFirestore) { }

  changeEventLike(userId: string, eventId: string) {
    const eventLike = new EventLike(userId, eventId);
    const eventLikeRef = this.db.collection('eventlikes').doc(userId + eventId);
    eventLikeRef.update(eventLike.deserialize())
      .then(() => eventLikeRef.delete())
      .catch(() => eventLikeRef.set(eventLike.deserialize()));
  }

  getEventLikesWithEventId(eventId: string): Observable<EventLike[]> {
    return this.db.collection<EventLike>('eventlikes', ref => ref.where('eventId', '==', eventId))
      .valueChanges();
  }

  getEventLikesWithUserId(userId: string): Observable<EventLike[]> {
    return this.db.collection<EventLike>('eventlikes', ref => ref.where('userId', '==', userId))
      .valueChanges();
  }

  checkEventLikeWithUserIdAndEventId(userId: string, eventId: string): Observable<boolean> {
    const eventLikeRef = this.db.collection('eventlikes').doc(userId + eventId);
    return eventLikeRef.snapshotChanges().pipe(map(action => action.payload.exists));
  }

}
