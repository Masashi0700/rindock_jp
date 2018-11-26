export class Room {

  id: string;
  name: string;
  breakTime: string;
  chat: string;
  isPublic: boolean;
  password: string;
  desc: string;

  constructor(id: string, name: string, breakTime: string, chat: string, isPublic: boolean, password: string, desc: string) {
    this.id = id;
    this.name = name;
    this.breakTime = breakTime;
    this.chat = chat;
    this.isPublic = isPublic;
    this.password = password;
    this.desc = desc;
  }

  reset() {
    this.id = '';
    this.name = '';
    this.breakTime = '';
    this.chat = '';
    this.isPublic = true;
    this.password = '';
    this.desc = '';
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
