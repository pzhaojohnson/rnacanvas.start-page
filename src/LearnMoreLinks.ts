import * as styles from './LearnMoreLinks.module.css';

export class LearnMoreLinks {
  readonly domNode = document.createElement('p');

  readonly #contactEmailLink = new ContactEmailLink();

  readonly #gitHubPagesLink = new GitHubPagesLink();

  constructor() {
    this.domNode.classList.add(styles['learn-more-links']);

    let contactAtRNAcanvasDotApp = this.#contactEmailLink.domNode;

    let gitHubPage = this.#gitHubPagesLink.domNode;

    this.domNode.append('Want to learn more? Email ', contactAtRNAcanvasDotApp, ' or visit the ', gitHubPage, '.');
  }
}

class ContactEmailLink {
  /**
   * Wrapped link.
   */
  readonly #link = new Link();

  constructor() {
    this.#link.href = 'mailto:contact@rnacanvas.app';

    this.#link.textContent = 'contact@rnacanvas.app';

    this.#link.domNode.style.userSelect = 'text';
    this.#link.domNode.style.webkitUserSelect = 'text';
  }

  get domNode() {
    return this.#link.domNode;
  }
}

class GitHubPagesLink {
  /**
   * Wrapped link.
   */
  readonly #link = new Link();

  constructor() {
    this.#link.href = 'https://pzhaojohnson.github.io/rnacanvas.code/';

    this.#link.target = '_blank';
    this.#link.rel = 'noreferrer noopener';

    this.#link.textContent = 'GitHub page';
  }

  get domNode() {
    return this.#link.domNode;
  }
}

class Link {
  readonly domNode = document.createElement('span');

  /**
   * Wrapped anchor element.
   *
   * Wrapping the anchor element prevents the link from stealing focus from the rest of the app
   * and intefering with key bindings (e.g., the paste key binding for pasting structures to create new drawings).
   */
  readonly #a = document.createElement('a');

  constructor() {
    this.domNode.classList.add(styles['link']);

    this.domNode.addEventListener('click', () => this.#a.click());
  }

  get href() {
    return this.#a.href;
  }

  set href(href) {
    this.#a.href = href;
  }

  get target() {
    return this.#a.target;
  }

  set target(target) {
    this.#a.target = target;
  }

  get rel() {
    return this.#a.rel;
  }

  set rel(rel) {
    this.#a.rel = rel;
  }

  get textContent() {
    return this.domNode.textContent;
  }

  set textContent(textContent) {
    this.domNode.textContent = textContent;
  }
}
