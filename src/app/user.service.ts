import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

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

}
