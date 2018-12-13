import { Injectable } from '@angular/core';
import { Tutor } from './tutor';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  constructor(private db: AngularFirestore) { }

  setTutor(userId: string, roomId: string) {
    const tutor = new Tutor(userId, roomId);
    const tutorRef = this.db.collection('tutors').doc(userId + roomId);
    tutorRef.set(tutor.deserialize());
  }

  unTutor(userId: string, roomId: string) {
    const tutor = new Tutor(userId, roomId);
    const tutorRef = this.db.collection('tutors').doc(userId + roomId);
    tutorRef.update(tutor.deserialize())
      .then(() => tutorRef.delete())
      .catch(() => console.warn("The user is not tutor"));
  }

  checkTutor(userId: string, roomId: string): Observable<boolean> {
    const tutorRef = this.db.collection('tutors').doc(userId + roomId);
    return tutorRef.snapshotChanges().pipe(map(action => action.payload.exists));
  }

  getTutorListWithRoomId(roomId: string): Observable<Tutor[]> {
    return this.db.collection<Tutor>('tutors', ref => ref.where('roomId', '==', roomId))
      .valueChanges();
  }

  getTutorListWithUserId(userId: string): Observable<Tutor[]> {
    return this.db.collection<Tutor>('tutors', ref => ref.where('userId', '==', userId))
      .valueChanges();
  }

}
