export class EventLike {

  userId: string;
  eventId: string;

  constructor(userId: string, eventId: string) {
    this.userId = userId;
    this.eventId = eventId;
  }

  reset() {
    this.userId = '';
    this.eventId = '';
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
