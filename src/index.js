const {create: createEventEmitter} = require('event-emitter-object')

function createVisibilityStateListener(opts={}) {
  function findPrefix(d) {
    const availablePrefixes = ['webkit', 'ms','o','moz','khtml']
    const matches = availablePrefixes.filter(p => p + 'Hidden' in d)
    return matches && matches.length > 0 ? matches[0] : ''
  }

  const emitter = createEventEmitter()
  const win = opts.window || (typeof window == 'undefined' ? undefined : window)
  const doc = opts.document || (typeof document == 'undefined' ? undefined : document)
  const state = {
    error: null,
    started: false,
    value: 'visible',
    prefix: '',
    visibilityProp: '',
    hiddenProp: ''
  }

  if (typeof win == 'undefined' || typeof doc == 'undefined') {
    state.error = 'INVALID_GLOBALS'
  }

  if (!state.error) {
    state.prefix = findPrefix(doc)
    state.hiddenProp = state.prefix + (state.prefix.length > 0 ? 'H' : 'h') + 'idden'
    state.visibilityProp = state.prefix + (state.prefix.length > 0 ? 'V' : 'v') + 'isibilityState'
  }

  const strategy =
    !doc                    ? '' :
    state.hiddenProp in doc       ? 'modern' :
    doc.addEventListener    ? 'focus-blur' :
                              'focus-blur-ie'

  function onChange() {
    const newState = doc[state.visibilityProp]
    if (newState != state.value) {
      state.value = newState
      emitter.emit('update', [newState])
    }
  }

  function onFocus() {
    const newState = 'visible'
    if (newState != state.value) {
      state.value = newState
      emitter.emit('update', [newState])
    }
  }

  function onBlur() {
    const newState = 'hidden'
    if (newState != state.value) {
      state.value = newState
      emitter.emit('update', [newState])
    }
  }

  function start() {
    if (state.error) {
      return false;
    }

    if (state.started === true) {
      return true;
    }

    if (strategy == 'modern') {
      doc.addEventListener(state.prefix + 'visibilitychange', onChange, 0)
    }
    else if (strategy == 'focus-blur') {
      win.addEventListener('focus', onFocus, true)
      win.addEventListener('blur', onBlur, true)
    }
    else if (strategy == 'focus-blur-ie') {
      doc.attachEvent('onfocusin', onFocus)
      doc.attachEvent('onfocusout', onBlur)
    }
    else {}

    state.started = true

    return true;
  }

  function pause() {
    if (state.error) {
      return false;
    }

    if (state.started === false) {
      return true;
    }

    if (strategy == 'modern') {
      doc.removeEventListener(state.prefix + 'visibilitychange', onChange, 1)
    }
    else if (strategy == 'focus-blur') {
      win.removeEventListener('focus', onFocus, true)
      win.removeEventListener('blur', onBlur, true)
    }
    else if (strategy == 'focus-blur-ie') {
      doc.detachEvent('onfocusin', onFocus)
      doc.detachEvent('onfocusout', onBlur)
    }
    else {}

    state.started = false

    return true;
  }

  return {
    on: emitter.on,
    start: start,
    pause: pause,
    hasError: function() {
      return typeof state.error == 'string' && state.error.length > 0
    },
    getError: function() {
      return state.error
    },
    getState: function() {
      return state.value
    }
  }
}

module.exports = createVisibilityStateListener()
