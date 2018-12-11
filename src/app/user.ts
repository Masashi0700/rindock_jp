export class User {

  uid: string;
  name: string;
  desc: string;
  imgName: string;
  imgUrl: string;
  isPublic: boolean;

  constructor(uid: string, name: string) {
    this.uid = uid;
    this.name = name;
    this.desc = '';
    this.imgName = '';
    this.imgUrl = '';
    this.isPublic = true;
  }

  reset() {
    this.uid = '';
    this.name = '';
    this.desc = '';
    this.imgName = '';
    this.imgUrl = '';
    this.isPublic = true;
  }

  test(){
    console.warn("hi");
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
