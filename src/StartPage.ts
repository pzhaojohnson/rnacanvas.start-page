import type { App } from './App';

import * as styles from './StartPage.module.css';

import { Title } from './Title';

import { Description } from './Description';

import { NewAndOpenButtons } from './NewAndOpenButtons';

import { LearnMoreLinks } from './LearnMoreLinks';

import { CitationsRequest } from './CitationsRequest';

import { DrawingsSlideshow } from './DrawingsSlideshow';

export class StartPage {
  readonly #targetApp;

  readonly domNode = document.createElement('div');

  readonly #contentContainer = document.createElement('div');

  /**
   * For everything except for the drawings slideshow essentially.
   */
  readonly #upperContentContainer = document.createElement('div');

  readonly #title = new Title();

  readonly #description = new Description();

  readonly #newAndOpenButtons;

  readonly #learnMoreLinks = new LearnMoreLinks();

  readonly #citationsRequest;

  readonly #drawingsSlideshow = new DrawingsSlideshow();

  constructor(targetApp: App) {
    this.#targetApp = targetApp;

    this.domNode.classList.add(styles['start-page']);

    this.#contentContainer.classList.add(styles['content-container']);

    this.domNode.append(this.#contentContainer);

    this.#upperContentContainer.classList.add(styles['upper-content-container']);

    this.domNode.append(this.#upperContentContainer);

    this.#newAndOpenButtons = new NewAndOpenButtons(targetApp);

    this.#citationsRequest = new CitationsRequest(targetApp);

    [
      this.#title,
      this.#description,
      this.#newAndOpenButtons,
      this.#learnMoreLinks,
      this.#citationsRequest,
    ].forEach(ele => this.#upperContentContainer.append(ele.domNode));

    this.#contentContainer.append(this.#drawingsSlideshow.domNode);
  }
}
