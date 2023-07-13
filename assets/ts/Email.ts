/* eslint-disable prettier/prettier */
export class Email {
  constructor(private tag: HTMLElement) {
    this.Event();
  }

  private Event() {
    this.tag.addEventListener("click", () => {
      navigator.clipboard.writeText("anderson22khg@gmail.com").then(() => {
        alert("Email Copiado!");
      });
    })
  }
}
