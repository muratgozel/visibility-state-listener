const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('rollup-plugin-babel')
const {terser} = require('rollup-plugin-terser')

const suffix = process.env.USE_POLYFILLS == 'on' ? '.polyfilled' : ''

module.exports = {
  external: [
    'event-emitter-object'
  ],
  input: 'src/index.js',
  output: [
    {
      format: 'amd',
      file: 'dist/visibility-state-listener.amd' + suffix + '.js'
    },
    {
      format: 'cjs',
      file: 'dist/visibility-state-listener.cjs' + suffix + '.js'
    },
    {
      format: 'es',
      file: 'dist/visibility-state-listener.es' + suffix + '.js'
    },
    {
      format: 'iife',
      file: 'dist/visibility-state-listener.iife' + suffix + '.js',
      name: 'VisibilityStateListener',
      globals: {
        'event-emitter-object': 'EventEmitterObject'
      }
    },
    {
      format: 'umd',
      file: 'dist/visibility-state-listener.umd' + suffix + '.js',
      name: 'VisibilityStateListener',
      globals: {
        'event-emitter-object': 'EventEmitterObject'
      }
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    terser({sourcemap: false})
  ]
}
