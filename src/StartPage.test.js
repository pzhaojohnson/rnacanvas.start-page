/**
 * @jest-environment jsdom
 */

import { StartPage } from './StartPage';

import { AppMock } from './AppMock';

beforeAll(() => {
  globalThis.MutationObserver = class {
    disconnect = () => {};
    observe = () => {};
  }
});

describe('`class StartPage`', () => {
  it('renders', () => {
    var targetApp = new AppMock();

    var startPage = new StartPage(targetApp);

    var n = document.body.childNodes.length;

    expect(() => document.body.append(startPage.domNode)).not.toThrow();

    expect(document.body.childNodes.length).toBe(n + 1);
  });
});
