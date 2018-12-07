export class Following {

  followerId: string;
  followeeId: string;

  constructor(followerId: string, followeeId: string) {
    this.followerId = followerId;
    this.followeeId = followeeId;
  }

  reset() {
    this.followerId = '';
    this.followeeId = '';
  }

  deserialize() {
    return Object.assign({}, this);
  }


}
