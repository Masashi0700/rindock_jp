import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  id: string;

  constructor(private db: AngularFirestore) { }

  postComment(comment: Comment, roomId: string) {
    this.id = this.db.createId();
    comment.commentId = this.id;
    comment.roomId = roomId;
    this.db
      .collection('comments')
      .doc(this.id)
      .set(comment.deserialize());
  }

  getChat(roomId: string): Observable<Comment[]> {
    return this.db.collection<Comment>('comments', ref => ref.where('roomId', '==', roomId))
      .valueChanges();
  }

}
