import * as moment from 'moment';

export class Post {

  postId: string;
  imgName: string;
  imgUrl: string;
  uid: string;
  content: string;
  roomId: string;
  date: number;

  constructor(uid: string, content: string) {
    this.postId = '';
    this.imgName = '';
    this.imgUrl = '';
    this.uid = uid;
    this.content = content;
    this.roomId = '';
    this.date = +moment();
  }

  reset() {
    this.postId = '';
    this.imgName = '';
    this.imgUrl = '';
    this.uid = '';
    this.content = '';
    this.roomId = '';
    this.date = 0;
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
