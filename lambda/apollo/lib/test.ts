export class Test {
  private message: string;
  constructor(m: string) {
    this.message = m;
  }

  async getMessage() {
    console.log(`${this.constructor.name}:${this.getMessage.name}:call`);
    return this.message
  }
}