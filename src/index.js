const EventEmitter = require('event-emitter-object')

function createVisibilityStateListener(opts = {}) {
  const emitter = new EventEmitter({})
  const availablePrefixes = ['webkit', 'ms','o','moz','khtml']

  const state = {
    error: null,
    started: false,
    value: 'visible'
  }

  const win = opts.window || (typeof window == 'undefined' ? undefined : window)
  const doc = opts.document || (typeof document == 'undefined' ? undefined : document)
  if (typeof win == 'undefined' || typeof doc == 'undefined') {
    state.error = 'INVALID_GLOBALS'
  }

  let matches = []
  if (typeof doc != 'undefined') {
    matches = availablePrefixes.filter(p => p + 'Hidden' in doc)
  }
  const prefix = matches && matches.length > 0 ? matches[0] : ''
  const hiddenProp = prefix + (prefix.length > 0 ? 'H' : 'h') + 'idden'
  const visibilityProp = prefix + (prefix.length > 0 ? 'V' : 'v') + 'isibilityState'
  let strategy = null
  if (typeof doc != 'undefined') {
    strategy = hiddenProp in doc ?
      'modern' : doc.addEventListener ?
      'focus-blur' :
      'focus-blur-ie'
  }

  function onChange() {
    const newState = doc[visibilityProp]
    if (newState != state.value) {
      state.value = newState
      emitter.emit('update', newState)
    }
  }

  function onFocus() {
    const newState = 'visible'
    if (newState != state.value) {
      state.value = newState
      emitter.emit('update', newState)
    }
  }

  function onBlur() {
    const newState = 'hidden'
    if (newState != state.value) {
      state.value = newState
      emitter.emit('update', newState)
    }
  }

  function start() {
    if (typeof win == 'undefined' || typeof doc == 'undefined') return;
    if (state.started === true) return;

    if (strategy == 'modern') {
      doc.addEventListener(prefix + 'visibilitychange', onChange, 0)
    }
    else if (strategy == 'focus-blur') {
      win.addEventListener('focus', onFocus, true)
      win.addEventListener('blur', onBlur, true)
    }
    else if (strategy == 'focus-blur-ie') {
      doc.attachEvent('onfocusin', onFocus)
      doc.attachEvent('onfocusout', onBlur)
    }
    else {
      // no valid strategy found
    }

    state.started = true
  }

  function pause() {
    if (typeof win == 'undefined' || typeof doc == 'undefined') return;
    if (state.started === false) return;

    if (strategy == 'modern') {
      doc.removeEventListener(prefix + 'visibilitychange', onChange, 1)
    }
    else if (strategy == 'focus-blur') {
      win.removeEventListener('focus', onFocus, true)
      win.removeEventListener('blur', onBlur, true)
    }
    else if (strategy == 'focus-blur-ie') {
      doc.detachEvent('onfocusin', onFocus)
      doc.detachEvent('onfocusout', onBlur)
    }
    else {
      // no valid strategy found
    }

    state.started = false
  }

  return {
    emitter: emitter,
    start: start,
    pause: pause,
    getError: function() {
      return state.error
    },
    getState: function() {
      return state.value
    }
  }
}

module.exports = createVisibilityStateListener
