import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;

export class User {

  uid: string;
  name: string;
  desc: string;
  imgName: string;
  imgUrl: string;
  isPublic: boolean;
  numOfPost: number;
  numOfFollow: number;
  numOfFollower: number;
  date: Timestamp;

  constructor(uid: string, name: string) {
    this.uid = uid;
    this.name = name;
    this.desc = '';
    this.imgName = '';
    this.imgUrl = '';
    this.isPublic = true;
    this.numOfPost = 0;
    this.numOfFollow = 0;
    this.numOfFollower = 0;
    this.date = Timestamp.now();
  }

  reset() {
    this.uid = '';
    this.name = '';
    this.desc = '';
    this.imgName = '';
    this.imgUrl = '';
    this.isPublic = true;
    this.numOfPost = 0;
    this.numOfFollow = 0;
    this.numOfFollower = 0;
    this.date = Timestamp.now();
  }

  test() {
    console.warn("hi");
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
