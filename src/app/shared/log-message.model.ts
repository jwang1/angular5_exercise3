export class LogMessage {
  constructor(public id: number, public message: string) {}

  toString() {
    return 'id: ' + this.id + '; msg: ' + this.message;
  }
}
