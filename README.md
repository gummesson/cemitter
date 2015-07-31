# cemitter

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

Super tiny, closure-based event emitter.

## Installation

```
npm install cemitter
```

## Usage

``` javascript
const cemitter = require('cemitter')
const emitter = cemitter()

emitter.on('test', (data) => {
  console.log(data) // => { foo: "bar" }
})

emitter('test', { foo: 'bar' })
```

## API

### emitter = cemitter()

Initialize an emitter.

### emitter.on(event, callback([...data]))

Register an event with the given callback.

### emitter(event[, ...data])

Trigger an event and execute the corresponding callback with the given data.
Aliased to `emitter.on`.

## License

[MIT][license-url]

[npm-img]: https://img.shields.io/npm/v/cemitter.svg?style=flat-square
[npm-url]: https://npmjs.com/package/cemitter
[license-img]: http://img.shields.io/npm/l/cemitter.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/cemitter.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/cemitter
