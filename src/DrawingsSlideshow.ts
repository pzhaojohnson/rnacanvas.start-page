import * as styles from './DrawingsSlideshow.module.css';

import drawing1 from './drawing1.svg';
import drawing2 from './drawing2.svg';
import drawing3 from './drawing3.svg';
import drawing4 from './drawing4.svg';
import drawing5 from './drawing5.svg';
import drawing6 from './drawing6.svg';
import drawing7 from './drawing7.svg';
import drawing8 from './drawing8.svg';

export class DrawingsSlideshow {
  readonly domNode = document.createElement('div');

  #currentDrawing?: Drawing;

  #currentTimeout?: ReturnType<typeof setTimeout>;

  #wasOpen = false;

  readonly #documentBodyObserver;

  constructor() {
    this.domNode.classList.add(styles['drawings-slideshow']);

    // stop the slideshow when the Start page is closed and start the slideshow when the Start page is opened
    this.#documentBodyObserver = new MutationObserver(() => {
      let isOpen = document.body.contains(this.domNode);

      if (isOpen && !this.#wasOpen) {
        this.#start();
      } else if (!isOpen && this.#wasOpen) {
        this.#stop();
      }

      this.#wasOpen = isOpen;
    });

    // watch for the Start page being opened or closed
    this.#documentBodyObserver.observe(document.body, { childList: true, subtree: true });
  }

  /**
   * Start the slideshow.
   */
  #start(): void {
    // stop explicitly (to lower the chances of multiple timeouts running at once)
    this.#stop();

    this.#next();

    // timing is hard-coded to match fade-in-and-out animation of drawings
    this.#currentTimeout = setTimeout(() => this.#start(), 4000);
  }

  /**
   * Shows another drawing randomly (that isn't the drawing currently being shown).
   */
  #next(): void {
    let drawingsNotBeingShown = drawings.filter(drawing => drawing != this.#currentDrawing);

    let i = Math.floor(Math.random() * drawingsNotBeingShown.length);

    let nextDrawing = drawings[i];

    this.#currentDrawing?.domNode.remove();

    this.domNode.append(nextDrawing.domNode);

    this.#currentDrawing = nextDrawing;
  }

  /**
   * Stop the slideshow.
   */
  #stop(): void {
    if (this.#currentTimeout != undefined) {
      clearTimeout(this.#currentTimeout);

      this.#currentTimeout = undefined;
    }
  }
}

class Drawing {
  readonly domNode = document.createElement('div');

  constructor(xml: string) {
    this.domNode.classList.add(styles['drawing']);

    this.domNode.innerHTML = xml;
  }
}

const drawings = [
  drawing1,
  drawing2,
  drawing3,
  drawing4,
  drawing5,
  drawing6,
  drawing7,
  drawing8,
].map(xml => new Drawing(xml));
