export class User {

  uid: string;
  name: string;
  desc: string;
  isPublic: boolean;

  constructor(uid: string, name: string){
    this.uid = uid;
    this.name = name;
    this.desc = '';
    this.isPublic = true;
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
