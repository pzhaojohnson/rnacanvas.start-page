/**
 * @type { import('jest').Config }
 */
const config = {
  "moduleNameMapper": {
    "\\.css$": "<rootDir>/__mocks__/styleMock.js",
    "\\.svg$": "<rootDir>/__mocks__/fileMock.js",
  },
  "transformIgnorePatterns": [
    "node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)",
  ],
};

module.exports = config;
