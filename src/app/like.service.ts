import { Injectable } from '@angular/core';
import { Like } from './like';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private db: AngularFirestore) { }

  changeLike(userId: string, postId: string) {
    const like = new Like(userId, postId);
    const likeRef = this.db.collection('likes').doc(userId + postId);

    likeRef.update(like.deserialize())
      .then(() => likeRef.delete())
      .catch(() => likeRef.set(like.deserialize()));
  }

  getLikesWithPostId(postId: string): Observable<Like[]> {
    return this.db.collection<Like>('likes', ref => ref.where('likePostId', '==', postId))
      .valueChanges();
  }

  getLikesWithUserId(userId: string): Observable<Like[]> {
    return this.db.collection<Like>('likes', ref => ref.where('likeUserId', '==', userId))
      .valueChanges();
  }

  checkLikeWithUserIdAndPostId(userId: string, postId: string): Observable<boolean> {
    const likeRef = this.db.collection('likes').doc(userId + postId);
    return likeRef.snapshotChanges().pipe(map(action => action.payload.exists));
  }

}
