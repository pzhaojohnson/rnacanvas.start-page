import * as styles from './Title.module.css';

export class Title {
  readonly domNode = document.createElement('div');

  readonly #contentContainer = document.createElement('div');

  readonly #text = new TitleText();

  readonly #underline = new Underline();

  constructor() {
    this.domNode.classList.add(styles['title']);

    this.#contentContainer.classList.add(styles['content-container']);

    this.domNode.append(this.#contentContainer);

    this.#contentContainer.append(this.#text.domNode);

    this.domNode.append(this.#underline.domNode);
  }
}

class TitleText {
  readonly domNode = document.createElement('p');

  readonly #RNA = document.createElement('span');

  readonly #canvas = document.createElement('span');

  readonly #twoPoint0 = document.createElement('span');

  constructor() {
    this.#RNA.classList.add(styles['RNA']);
    this.#RNA.textContent = 'RNA';

    this.#canvas.classList.add(styles['canvas']);
    this.#canvas.textContent = 'canvas';

    this.#twoPoint0.classList.add(styles['two-point0']);
    this.#twoPoint0.textContent = '2.0';

    let RNA = this.#RNA;
    let canvas = this.#canvas;
    let twoPoint0 = this.#twoPoint0;

    this.domNode.append(RNA, canvas, ' ', twoPoint0);
  }
}

class Underline {
  readonly domNode = document.createElement('div');

  constructor() {
    this.domNode.classList.add(styles['underline']);
  }
}
