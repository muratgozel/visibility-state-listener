# visibility-state-listener
Cross-browser document visibility state detection library. Detects if user has switched to another window/tab or not.

## Install
Through npm:
```sh
npm i visibility-state-listener
```
Through CDN:
```html
<script type="text/javascript" src="https://unpkg.com/visibility-state-listener@1/dist/umd/index.js"></script>
```

## Usage
```js
const createVisibilityStateListener = require('./createVisibilityStateListener')
// if you injected the library with script tag use: window.createVisibilityStateListener
const listener = createVisibilityStateListener()
listener.start()
listener.emitter.on('update', function() {
  const isWindowVisible = listener.getState() == 'visible'
})
```

It registers appropriate listener functions to the document. If you want to remove them call `.pause()`:
```js
// no event will be emitted after calling pause
listener.pause()
```