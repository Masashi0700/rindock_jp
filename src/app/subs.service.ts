import { Injectable } from '@angular/core';
import { Subs } from './subs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubsService {

  constructor(private db: AngularFirestore) { }

  changeSubs(userId: string, roomId: string) {
    const subs = new Subs(userId, roomId);
    const subsRef = this.db.collection('subs').doc(userId + roomId);

    subsRef.update(subs.deserialize())
      .then(() => subsRef.delete())
      .catch(() => subsRef.set(subs.deserialize()));
  }

  getSubsWithUserId(userId: string): Observable<Subs[]> {
    return this.db.collection<Subs>('subs', ref => ref.where('subsUserId', '==', userId))
      .valueChanges();
  }

  getSubsWithRoomId(roomId: string): Observable<Subs[]> {
    return this.db.collection<Subs>('subs', ref => ref.where('subsRoomId', '==', roomId))
      .valueChanges();
  }

  checkSubs(userId: string, roomId): Observable<boolean> {
    const likeRef = this.db.collection('subs').doc(userId + roomId);
    return likeRef.snapshotChanges().pipe(map(action => action.payload.exists));
  }

}
