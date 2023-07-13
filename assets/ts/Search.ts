/* eslint-disable prettier/prettier */
export class Search {
  constructor(private element: HTMLElement, private input: HTMLElement) {
    this.Event();
  }

  Event(): void {
    this.input.addEventListener("input", (event) => {
      console.clear()
      const projects = this.element.querySelectorAll(".project") as NodeListOf<Element>;

      const value = (event.target as HTMLInputElement).value;

      if (value.length) {
        this.Verify(projects, value);
      } else {
        this.AllVisible(projects);
      }
    })
  }

  Verify(projects: NodeListOf<Element>, value: string): void {
    for (let a = 0; a < projects.length; a++) {
      const title = projects[a].querySelectorAll(".title")

      if (title[0].innerHTML.includes(value)) {

        this.Visible(projects[a] as HTMLElement);

      } else {
        this.Invisible(projects[a] as HTMLElement)
      }

    }
  }

  Invisible(ele: HTMLElement) {
    ele.style.display = "none"
  }

  Visible(ele: HTMLElement) {
    ele.style.display = "block"
  }

  AllVisible(ele: NodeListOf<Element>) {
    for (let i = 0; i < ele.length; i++) {
      (ele[i] as HTMLElement).style.display = "block"
    }
  }

  AllInvisible(ele: NodeListOf<Element>) {
    for (let i = 0; i < ele.length; i++) {
      (ele[i] as HTMLElement).style.display = "none"
    }
  }
}
