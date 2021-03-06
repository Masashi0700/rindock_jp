export class Session {
  login: boolean;
  uid: string;

  constructor() {
    this.login = false;
    this.uid = '';
  }

  reset(): Session {
    this.login = false;
    this.uid = '';
    return this;
  }

  getLogIn(): boolean {
    return this.login;
  }

  getUserId(): string{
    return this.uid;
  }

}
