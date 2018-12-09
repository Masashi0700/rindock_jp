import * as moment from 'moment';

export class Comment {

  commentId: string;
  uid: string;
  roomId: string;
  content: string;
  date: number;

  constructor(uid: string, content: string) {
    this.uid = uid;
    this.roomId = '';
    this.content = content;
    this.date = +moment();
  }

  reset() {
    this.commentId = '';
    this.uid = '';
    this.roomId = '';
    this.content = '';
    this.date = 0;
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
