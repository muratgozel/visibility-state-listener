const assert = require('assert')
const createVisibilityStateListener = require('../source')

const listener = createVisibilityStateListener()
assert.strictEqual(listener.getError(), 'INVALID_GLOBALS')
