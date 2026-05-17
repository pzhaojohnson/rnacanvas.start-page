import * as styles from './Description.module.css';

export class Description {
  readonly domNode = document.createElement('p');

  constructor() {
    this.domNode.classList.add(styles['description']);

    this.domNode.textContent = 'Flexible nucleic acid structure drawing...';
  }
}
