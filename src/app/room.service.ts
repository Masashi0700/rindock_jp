import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
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
    room.roomId = this.id;
    this.db
      .collection('rooms').doc(room.roomId)
      .set(room.deserialize());
  }

  updateRoom(room: Room, file: File) {
    const roomRef = this.db.collection('rooms').doc(room.roomId);
    if (!!file) {
      const imgRef = firebase.storage().ref().child('rooms').child(room.roomId).child(room.roomImgName);
      var uploadTask = imgRef.put(file);
      uploadTask.then(() => {
        imgRef.getDownloadURL().then(url => {
          room.roomImgUrl = url;
          roomRef.set(room.deserialize());
          console.warn("Updated with img" + room);
          room.reset();
        }).catch(err => {
          console.warn(err);
          room.reset();
        });
      }).catch(err => {
        console.warn(err);
        room.reset();
      });
    } else {
      roomRef.set(room.deserialize());
      console.warn("Updated without img" + room);
      room.reset();
    }
  }

  getRoomList(): Observable<Room[]> {
    return this.db.collection<Room>('rooms').valueChanges();
  }

  getRoom(id: string): Observable<Room> {
    return this.db.collection('rooms').doc<Room>(id).valueChanges();
  }

}
