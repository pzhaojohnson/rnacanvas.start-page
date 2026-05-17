import type { App } from './App';

import * as styles from './NewAndOpenButtons.module.css';

export class NewAndOpenButtons {
  readonly #targetApp;

  readonly domNode = document.createElement('div');

  readonly #newButton;

  readonly #openButton;

  constructor(targetApp: App) {
    this.#targetApp = targetApp;

    this.domNode.classList.add(styles['new-and-open-buttons']);

    this.#newButton = new NewButton(targetApp);

    this.#openButton = new OpenButton(targetApp);

    [
      this.#newButton,
      this.#openButton,
    ].forEach(button => this.domNode.append(button.domNode));
  }
}

class NewButton {
  readonly #targetApp;

  /**
   * Wrapped button.
   */
  readonly #button;

  constructor(targetApp: App) {
    this.#targetApp = targetApp;

    this.#button = new Button('Create a New Drawing', () => {
      let newForm = targetApp.forms['new'];

      newForm.reposition ? newForm.reposition() : {};

      targetApp.openForm(newForm);
    });
  }

  get domNode() {
    return this.#button.domNode;
  }
}

class OpenButton {
  readonly #targetApp;

  /**
   * Wrapped button.
   */
  readonly #button;

  constructor(targetApp: App) {
    this.#targetApp = targetApp;

    this.#button = new Button('Open a Saved Drawing', () => {
      let openForm = targetApp.forms['open'];

      openForm.reposition ? openForm.reposition() : {};

      // position the Open form on the right side of the app
      // (might otherwise be on the left side)
      openForm.domNode.style.right = '50px';
      openForm.domNode.style.left = '';

      openForm.domNode.style.top = '50px';
      openForm.domNode.style.bottom = '';

      targetApp.openForm(openForm);
    });
  }

  get domNode() {
    return this.#button.domNode;
  }
}

class Button {
  readonly domNode = document.createElement('p');

  constructor(textContent: string, onClick: () => void) {
    this.domNode.classList.add(styles['button']);

    this.domNode.textContent = textContent;

    this.domNode.onclick = onClick;
  }
}
