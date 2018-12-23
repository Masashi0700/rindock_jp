import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;

export class Post {

  postId: string;
  postReplyId: string;
  postImgName: string;
  postImgUrl: string;
  postUId: string;
  postContent: string;
  postRoomId: string;
  postNumOfLikes: number;
  postNumOfReplys: number;
  postDate: Timestamp;

  constructor(uid: string, content: string) {
    this.postId = '';
    this.postReplyId = '';
    this.postImgName = '';
    this.postImgUrl = '';
    this.postUId = uid;
    this.postContent = content;
    this.postRoomId = '';
    this.postNumOfLikes = 0;
    this.postNumOfReplys = 0;
    this.postDate = Timestamp.now();
  }

  reset() {
    this.postId = '';
    this.postReplyId = '';
    this.postImgName = '';
    this.postImgUrl = '';
    this.postUId = '';
    this.postContent = '';
    this.postRoomId = '';
    this.postNumOfLikes = 0;
    this.postNumOfReplys = 0;
    this.postDate = Timestamp.now();
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
