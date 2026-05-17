import type { App } from './App';

import * as styles from './CitationsRequest.module.css';

export class CitationsRequest {
  readonly #targetApp;

  readonly domNode = document.createElement('p');

  readonly #citeLink;

  constructor(targetApp: App) {
    this.#targetApp = targetApp;

    this.domNode.classList.add(styles['citations-request']);

    this.#citeLink = new CiteLink(targetApp);

    let Citing = this.#citeLink.domNode;

    this.domNode.append(Citing, ' RNAcanvas is the best way to show support!');
  }
}

class CiteLink {
  readonly #targetApp;

  readonly domNode = document.createElement('span');

  readonly #text = document.createElement('span');

  readonly #arrow = new LinkArrow();

  constructor(targetApp: App) {
    this.#targetApp = targetApp;

    this.domNode.classList.add(styles['cite-link']);

    this.#text.classList.add(styles['cite-link-text']);

    this.#text.textContent = 'Citing';

    this.domNode.append(this.#text, this.#arrow.domNode);

    // open the About form
    this.domNode.addEventListener('click', () => targetApp.openForm(targetApp.forms['about']));
  }
}

class LinkArrow {
  readonly domNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  constructor() {
    this.domNode.classList.add(styles['link-arrow']);

    this.domNode.setAttribute('viewBox', '0 0 14 12');

    this.domNode.innerHTML = `
      <path
        d="M 8.75 0.75 L 13.25 0.75 L 13.25 5.75"
        stroke="blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
        fill="none"
      ></path>
      <line
        x1="6.75" y1="7.25" x2="13.25" y2="0.75"
        stroke="blue" stroke-width="1.5" stroke-linecap="round"
      ></line>
    `;
  }
}
