# Installation

With `npm`:

```
npm install @rnacanvas/start-page
```

# Usage

All exports of this package can be accessed as named imports.

```javascript
// an example import
import { StartPage } from '@rnacanvas/start-page';
```

## `class StartPage`

The Start page component.

```javascript
var targetApp = new RNAcanvas();

var startPage = new StartPage(targetApp);

// the DOM node corresponding to the Start page
startPage.domNode;

startPage.domNode.style.position = 'absolute';

// the Start page is intended to occupy the entire screen area of the app
startPage.domNode.style.top = '0px';
startPage.domNode.style.right = '0px';
startPage.domNode.style.bottom = '0px';
startPage.domNode.style.left = '0px';

// open the Start page
document.body.append(startPage.domNode);
```
