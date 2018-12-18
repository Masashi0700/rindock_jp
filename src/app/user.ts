export class User {

  uid: string;
  name: string;
  desc: string;
  imgName: string;
  imgUrl: string;
  numOfLikes: number;
  numOfFollows: number;
  numOfFollowers: number;
  isPublic: boolean;

  constructor(uid: string, name: string) {
    this.uid = uid;
    this.name = name;
    this.desc = '';
    this.imgName = '';
    this.imgUrl = '';
    this.numOfLikes = 0;
    this.numOfFollows = 0;
    this.numOfFollowers = 0;
    this.isPublic = true;
  }

  reset() {
    this.uid = '';
    this.name = '';
    this.desc = '';
    this.imgName = '';
    this.imgUrl = '';
    this.numOfLikes = 0;
    this.numOfFollows = 0;
    this.numOfFollowers = 0;
    this.isPublic = true;
  }

  test() {
    console.warn("hi");
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
