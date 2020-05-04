# visibility-state-listener
Cross-browser **document visibility state** detection library. Detects if user has switched to another window/tab or not.

![NPM](https://img.shields.io/npm/l/visibility-state-listener)
[![npm version](https://badge.fury.io/js/visibility-state-listener.svg)](https://badge.fury.io/js/visibility-state-listener)
![npm bundle size](https://img.shields.io/bundlephobia/min/visibility-state-listener)
![npm](https://img.shields.io/npm/dy/visibility-state-listener)

## Install
```sh
npm i visibility-state-listener
```

## Import
There are different types of distributions depending on your use case. Essentially, the package can be imported via require:

```js
const kit = require('visibility-state-listener')
```

or via script tag:

```html
<script src="https://unpkg.com/visibility-state-listener@1/dist/visibility-state-listener.iife.js" crossorigin type="text/javascript"></script>
```

but there are lots of other options. See distribution report below.

## Use
```js
const createVisibilityStateListener = require('./createVisibilityStateListener')
// if you injected the library with script tag use: window.createVisibilityStateListener
const listener = createVisibilityStateListener()
listener.start()
listener.emitter.on('update', function(newState) {
  const isWindowVisible = newState == 'visible'
})
```

It registers appropriate listener functions to the document. If you want to remove them call `.pause()`:
```js
// no event will be emitted after calling pause
listener.pause()
```

---

## Distributions Report
This is an auto-generated report that shows the type, name and size of the bundles available to use individually.

[comment]: # (DISTRIBUTIONS_REPORT_START)
```js
[
  "visibility-state-listener.amd.js (1.65 KB)",
  "visibility-state-listener.amd.polyfilled.js (9.39 KB)",
  "visibility-state-listener.cjs.js (1.64 KB)",
  "visibility-state-listener.cjs.polyfilled.js (9.39 KB)",
  "visibility-state-listener.es.js (1.57 KB)",
  "visibility-state-listener.es.polyfilled.js (9.32 KB)",
  "visibility-state-listener.iife.js (1.66 KB)",
  "visibility-state-listener.iife.polyfilled.js (9.41 KB)",
  "visibility-state-listener.umd.js (1.88 KB)",
  "visibility-state-listener.umd.polyfilled.js (9.62 KB)"
]
```
[comment]: # (DISTRIBUTIONS_REPORT_END)

## Babel Polyfills Report
This is an auto-generated report that shows the pollyfils added by core-js to the **pollyfilled** distributions based on the targets configuration described below.

[comment]: # (BABEL_POLYFILLS_REPORT_START)
```js
// polyfills:
[
  "es.symbol",
  "es.symbol.description",
  "es.symbol.iterator",
  "es.array.iterator",
  "es.object.get-prototype-of",
  "es.object.set-prototype-of",
  "es.object.to-string",
  "es.reflect.construct",
  "es.regexp.to-string",
  "es.string.iterator",
  "web.dom-collections.iterator",
  "es.array.filter"
]
// based on the targets:
{
  "android": "4.4.3",
  "chrome": "49",
  "edge": "17",
  "firefox": "52",
  "ie": "9",
  "ios": "9.3",
  "opera": "66",
  "safari": "11.1",
  "samsung": "4"
}
```
[comment]: # (BABEL_POLYFILLS_REPORT_END)

Thanks for watching 🐬

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1RFO7)
