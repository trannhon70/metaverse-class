export class KeyPressListener {
  private keySafe: boolean = true;
  private keyCode: string;
  private callback: () => void;
  private time: number | null | NodeJS.Timeout = null;

  constructor(keyCode: string, callback: () => void) {
    this.keyCode = keyCode;
    this.callback = callback;

    this.keydownFunction = this.keydownFunction.bind(this);
    this.keyupFunction = this.keyupFunction.bind(this);

    document.addEventListener("keydown", this.keydownFunction);
    document.addEventListener("keyup", this.keyupFunction);
  }

  private keydownFunction(event: KeyboardEvent): void {
    // if (this.time) clearInterval(this.time);
    if (event.code === this.keyCode) {
      if (this.keySafe) {
        this.keySafe = false;
        this.callback();
        this.time = setInterval(() => {
          this.callback();
        }, 200);
      }
    } else {
      if (this.time) clearInterval(this.time);
    }
  }

  private keyupFunction(event: KeyboardEvent): void {
    if (event.code === this.keyCode) {
      if (this.time) clearInterval(this.time);
      this.keySafe = true;
    }
  }

  public unbind(): void {
    if (this.time) clearInterval(this.time);

    document.removeEventListener("keydown", this.keydownFunction);
    document.removeEventListener("keyup", this.keyupFunction);
  }
}
