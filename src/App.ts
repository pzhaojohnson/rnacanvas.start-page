import type { Form } from './Form';

/**
 * The app interface used by the Start page.
 */
export interface App {
  readonly forms: {
    /**
     * The New form.
     */
    'new': Form,

    /**
     * The Open form.
     */
    'open': Form,

    /**
     * The About form.
     */
    'about': Form;
  }

  openForm(form: Form): void;
}
