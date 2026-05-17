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
    this.#link.domNode.href = 'mailto:contact@rnacanvas.app';

    this.#link.domNode.textContent = 'contact@rnacanvas.app';
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
  readonly domNode = document.createElement('a');

  constructor() {
    this.domNode.classList.add(styles['link']);
  }

  get href() {
    return this.domNode.href;
  }

  set href(href) {
    this.domNode.href = href;
  }

  get target() {
    return this.domNode.target;
  }

  set target(target) {
    this.domNode.target = target;
  }

  get rel() {
    return this.domNode.rel;
  }

  set rel(rel) {
    this.domNode.rel = rel;
  }

  get textContent() {
    return this.domNode.textContent;
  }

  set textContent(textContent) {
    this.domNode.textContent = textContent;
  }
}
