export class Like {

  likeUserId: string;
  likePostId: string;

  constructor(likeUserId: string, likePostId: string) {
    this.likeUserId = likeUserId;
    this.likePostId = likePostId;
  }

  reset() {
    this.likeUserId = '';
    this.likePostId = '';
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
