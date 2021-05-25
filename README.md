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
<script src="https://unpkg.com/visibility-state-listener@2/dist/visibility-state-listener.iife.js" crossorigin type="text/javascript"></script>
```

but there are lots of other options. See distribution report below.

## Use
```js
const listener = require('./createVisibilityStateListener')
// if you injected the library with script tag use: window.VisibilityStateListener global

// register listener function
listener.on('update', function(newState) {
  const isWindowVisible = newState == 'visible'
})

// start to listen for visibility changes
listener.start()
```

It registers appropriate listener functions according to the browser. If you want to remove them call `.pause()`:
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
  "visibility-state-listener.amd.js (1.88 KB)",
  "visibility-state-listener.amd.polyfilled.js (10.25 KB)",
  "visibility-state-listener.cjs.js (1.87 KB)",
  "visibility-state-listener.cjs.polyfilled.js (10.27 KB)",
  "visibility-state-listener.es.js (1.78 KB)",
  "visibility-state-listener.es.polyfilled.js (10.18 KB)",
  "visibility-state-listener.iife.js (1.89 KB)",
  "visibility-state-listener.iife.polyfilled.js (10.26 KB)",
  "visibility-state-listener.umd.js (2.14 KB)",
  "visibility-state-listener.umd.polyfilled.js (10.51 KB)"
]
```
[comment]: # (DISTRIBUTIONS_REPORT_END)

## Babel Polyfills Report
This is an auto-generated report that shows the pollyfils added by core-js to the **pollyfilled** distributions based on the targets configuration described below.

[comment]: # (BABEL_POLYFILLS_REPORT_START)
```js
// polyfills:
[]
// based on the targets:
{
  "android": "4.4.3",
  "chrome": "49",
  "edge": "18",
  "firefox": "78",
  "ie": "9",
  "ios": "6",
  "opera": "73",
  "safari": "5.1",
  "samsung": "4"
}
```
[comment]: # (BABEL_POLYFILLS_REPORT_END)

Thanks for watching 🐬

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1RFO7)
