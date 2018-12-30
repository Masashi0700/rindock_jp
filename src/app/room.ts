import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;

export class Room {

  roomId: string;
  roomName: string;
  roomImgName: string;
  roomImgUrl: string;
  roomBreakTime: string;
  roomChat: string;
  roomPublic: boolean;
  roomDesc: string;
  roomOwnerId: string;
  roomNumOfPost: number;
  roomNumOfSubs: number;
  roomDate: Timestamp;
  roomEventId: string;

  constructor(roomId: string, roomName: string, breakTime: string, chat: string, isRoomPublic: boolean, roomDesc: string) {
    this.roomId = roomId;
    this.roomName = roomName;
    this.roomImgName = '';
    this.roomImgUrl = '';
    this.roomBreakTime = breakTime;
    this.roomChat = chat;
    this.roomPublic = isRoomPublic;
    this.roomDesc = roomDesc;
    this.roomOwnerId = '';
    this.roomNumOfPost = 0;
    this.roomNumOfSubs = 0;
    this.roomDate = Timestamp.now();
    this.roomEventId = '';
  }

  reset() {
    this.roomId = '';
    this.roomName = '';
    this.roomImgName = '';
    this.roomImgUrl = '';
    this.roomBreakTime = '';
    this.roomChat = '';
    this.roomPublic = true;
    this.roomDesc = '';
    this.roomOwnerId = '';
    this.roomNumOfPost = 0;
    this.roomNumOfSubs = 0;
    this.roomEventId = '';
    this.roomDate = Timestamp.now();
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
