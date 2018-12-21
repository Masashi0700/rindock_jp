export class Room {

  roomId: string;
  roomName: string;
  roomImgName: string;
  roomImgUrl: string;
  roomBreakTime: string;
  roomChat: string;
  roomPublic: boolean;
  roomPassword: string;
  roomDesc: string;
  roomOwnerId: string;

  constructor(roomId: string, roomName: string, breakTime: string, chat: string, isRoomPublic: boolean, roomPassword: string, roomDesc: string) {
    this.roomId = roomId;
    this.roomName = roomName;
    this.roomImgName = '';
    this.roomImgUrl = '';
    this.roomBreakTime = breakTime;
    this.roomChat = chat;
    this.roomPublic = isRoomPublic;
    this.roomPassword = roomPassword;
    this.roomDesc = roomDesc;
    this.roomOwnerId = '';
  }

  reset() {
    this.roomId = '';
    this.roomName = '';
    this.roomImgName = '';
    this.roomImgUrl = '';
    this.roomBreakTime = '';
    this.roomChat = '';
    this.roomPublic = true;
    this.roomPassword = '';
    this.roomDesc = '';
    this.roomOwnerId = '';
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
