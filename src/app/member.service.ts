import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private db: AngularFirestore) { }

  setMember(userId: string, roomId: string, listType: string) {
    const member = new Member(userId, roomId, listType);
    const memberRef = this.db.collection('members').doc(userId + roomId + listType);
    memberRef.set(member.deserialize());
  }

  unMember(userId: string, roomId: string, listType: string) {
    const member = new Member(userId, roomId, listType);
    const memberRef = this.db.collection('members').doc(userId + roomId + listType);
    memberRef.update(member.deserialize())
      .then(() => memberRef.delete())
      .catch(() => console.warn("The user is not member"));
  }

  checkMember(userId: string, roomId: string, listType: string): Observable<boolean> {
    const memberRef = this.db.collection('members').doc(userId + roomId + listType);
    return memberRef.snapshotChanges().pipe(map(action => action.payload.exists));
  }

  getMemberListWithRoomIdAndListType(roomId: string, listType: string): Observable<Member[]> {
    return this.db.collection<Member>('members', ref => ref.where('roomId', '==', roomId).where('listType', '==', listType))
      .valueChanges();
  }

}
