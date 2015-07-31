/*!
 * Dependencies
 */

const test = require('tape')
const noop = require('no-op')
const cemitter = require('./')

/*!
 * Tests
 */

test('cemitter()', (t) => {
  t.test('.on(event, callback)', (assert) => {
    const emitter = cemitter()
    emitter.on('test', noop)
    emitter.on('test', noop)
    emitter.on('test', noop)
    assert.equal(emitter._events.test.length, 3)
    assert.end()
  })

  t.test('cemitter(event, ...data)', (assert) => {
    const emitter = cemitter()

    emitter.on('test', (x, y, z) => {
      assert.equal(x, 'foo')
      assert.deepEqual(y, ['foo'])
      assert.deepEqual(z, { foo: 'bar' })
    })

    emitter('test', 'foo', ['foo'], { foo: 'bar' })
    assert.end()
  })
})
