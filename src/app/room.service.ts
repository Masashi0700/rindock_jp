import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  id: string;

  constructor(private db: AngularFirestore) {

  }

  createRoom(room: Room) {
    this.id = this.db.createId();
    room.id = this.id;
    console.warn(room);
    this.db
      .collection('rooms').doc(room.id)
      .set(room.deserialize());
  }

  getRoomList(): Observable<Room[]> {
    return this.db.collection<Room>('rooms').valueChanges();
  }

  getRoom(id: string): Observable<Room> {
    return this.db.collection('rooms').doc<Room>(id).valueChanges();
  }

}
