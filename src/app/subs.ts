export class Subs {
  subsUserId: string;
  subsRoomId: string;

  constructor(subsUserId: string, subsRoomId: string) {
    this.subsUserId = subsUserId;
    this.subsRoomId = subsRoomId;
  }

  reset() {
    this.subsUserId = '';
    this.subsRoomId = '';
  }

  deserialize() {
    return Object.assign({}, this);
  }
}
