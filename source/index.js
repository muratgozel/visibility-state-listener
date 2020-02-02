const EventEmitter = require('event-emitter-object')

function createVisibilityStateListener(opts = {}) {
  const emitter = new EventEmitter({})
  const availablePrefixes = ['webkit', 'ms','o','moz','khtml']

  const state = {
    started: false,
    value: 'visible'
  }

  const win = opts.hasOwnProperty('window') ? opts.window : window
  const doc = opts.hasOwnProperty('document') ? opts.document : document

  const matches = availablePrefixes.filter(p => p + 'Hidden' in doc)
  const prefix = matches && matches.length > 0 ? matches[0] : ''
  const hiddenProp = prefix + (prefix.length > 0 ? 'H' : 'h') + 'idden'
  const visibilityProp = prefix + (prefix.length > 0 ? 'V' : 'v') + 'isibilityState'

  const strategy = hiddenProp in doc ? 
    'modern' : doc.addEventListener ? 
    'focus-blur' : 
    'focus-blur-ie'

  function onChange() {
    const newState = doc[visibilityProp]
    if (newState != state.value) {
      state.value = newState
      emitter.emit('update')
    }
  }

  function onFocus() {
    const newState = 'visible'
    if (newState != state.value) {
      state.value = newState
      emitter.emit('update')
    }
  }

  function onBlur() {
    const newState = 'hidden'
    if (newState != state.value) {
      state.value = newState
      emitter.emit('update')
    }
  }

  function start() {
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
    getState: function() {
      return state.value
    }
  }
}

module.exports = createVisibilityStateListener