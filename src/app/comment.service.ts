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
    this.db
      .collection('rooms')
      .doc(roomId)
      .collection('chat')
      .doc(this.id)
      .set(comment.deserialize());
  }

  getChat(roomId: string): Observable<Comment[]> {
    return this.db.collection('rooms')
      .doc(roomId)
      .collection<Comment>('chat')
      .valueChanges();
  }

}
