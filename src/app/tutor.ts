export class Tutor {

  userId: string;
  roomId: string;

  constructor(userId: string, roomId: string) {
    this.userId = userId;
    this.roomId = roomId;
  }

  reset() {
    this.userId = '';
    this.roomId = '';
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
