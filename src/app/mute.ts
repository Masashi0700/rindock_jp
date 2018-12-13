export class Mute {

  muterId: string;
  muteeId: string;

  constructor(muterId: string, muteeId: string) {
    this.muterId = muterId;
    this.muteeId = muteeId;
  }

  reset() {
    this.muterId = '';
    this.muteeId = '';
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
