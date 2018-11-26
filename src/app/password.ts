export class Password {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }

  reset(): void {
    this.email = '';
    this.password = '';
  }

}
