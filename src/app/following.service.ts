import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Following } from './following';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FollowingService {

  constructor(private db: AngularFirestore) { }

  changeFollowing(followerId: string, followeeId: string) {
    const following = new Following(followerId, followeeId);
    const followingRef = this.db.collection('followings').doc(followerId + followeeId);

    followingRef.update(following.deserialize())
      .then(() => followingRef.delete())
      .catch(() => followingRef.set(following.deserialize()));
  }

  getFollowingsWithFollowerId(followerId: string): Observable<Following[]> {
    return this.db.collection<Following>('followings', ref => ref.where('followerId', '==', followerId))
      .valueChanges();
  }

  getFollowingsWithFolloweeId(followeeId: string): Observable<Following[]> {
    return this.db.collection<Following>('followings', ref => ref.where('followeeId', '==', followeeId))
      .valueChanges();
  }

  checkFollowing(followerId: string, followeeId: string): Observable<boolean> {
    const followingRef = this.db.collection('followings').doc(followerId + followeeId);
    return followingRef.snapshotChanges().pipe(map(action => action.payload.exists));
  }

}
