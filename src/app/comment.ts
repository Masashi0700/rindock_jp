import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;

export class Comment {

  commentId: string;
  uid: string;
  roomId: string;
  content: string;
  date: Timestamp;

  constructor(uid: string, content: string) {
    this.uid = uid;
    this.roomId = '';
    this.content = content;
    this.date = Timestamp.now();
  }

  reset() {
    this.commentId = '';
    this.uid = '';
    this.roomId = '';
    this.content = '';
    this.date = Timestamp.now();
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
