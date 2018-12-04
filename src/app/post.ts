import * as moment from 'moment';

export class Post {

  postId: string;
  postImgName: string;
  postImgUrl: string;
  postUId: string;
  postContent: string;
  postRoomId: string;
  postDate: number;

  constructor(uid: string, content: string) {
    this.postId = '';
    this.postImgName = '';
    this.postImgUrl = '';
    this.postUId = uid;
    this.postContent = content;
    this.postRoomId = '';
    this.postDate = +moment();
  }

  reset() {
    this.postId = '';
    this.postImgName = '';
    this.postImgUrl = '';
    this.postUId = '';
    this.postContent = '';
    this.postRoomId = '';
    this.postDate = 0;
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
