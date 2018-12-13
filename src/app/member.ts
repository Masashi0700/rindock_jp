export class Member {

  userId: string;
  roomId: string;
  listType: string;// List type is 'whitelist' or 'blacklist' or 'waiting'

  constructor(userId: string, roomId: string, listType: string) {
    this.userId = userId;
    this.roomId = roomId;
    this.listType = listType;
  }

  reset() {
    this.userId = '';
    this.roomId = '';
    this.listType = '';
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
