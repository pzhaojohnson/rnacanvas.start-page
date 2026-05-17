/**
 * The form interface used by the Start page.
 */
export interface Form {
  /**
   * The DOM node corresponding to the form.
   */
  readonly domNode: HTMLElement;

  /**
   * Undoes any dragging done to the form.
   */
  readonly reposition?: () => void;
}
