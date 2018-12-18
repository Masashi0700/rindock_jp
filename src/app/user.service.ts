import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  createUserWithIdAndName(uid: string, name: string) {
    this.db
      .collection('users').doc(uid)
      .set(new User(uid, name).deserialize());
  }

  getUserWithId(uid: string): Observable<User> {
    return this.db.collection('users').doc<User>(uid).valueChanges();
  }

  updateUserWithUserAndFile(user: User, file: File) {
    const userRef = this.db.collection('users').doc(user.uid);
    if (!!file) {
      const imgRef = firebase.storage().ref().child('users').child(user.uid).child(user.imgName);
      var uploadTask = imgRef.put(file);
      uploadTask.then(() => {
        imgRef.getDownloadURL().then(url => {
          user.imgUrl = url;
          userRef.set(user.deserialize());
          console.warn("Updated with img" + user);
          user.reset();
        }).catch(err => {
          console.warn(err);
          user.reset();
        });
      }).catch(err => {
        console.warn(err);
        user.reset();
      });
    } else {
      userRef.set(user.deserialize());
      console.warn("Updated without img" + user);
      user.reset();
    }
  }

  addLike(userId: string) {
    const userRef = this.db.collection('users').doc(user.uid);
    this
  }

}
