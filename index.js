/*!
 * Exports
 */

module.exports = emitter

/**
 * Initialize `emitter`.
 *
 * @return {Function.<Object>}
 */

function emitter() {
  const events = {}

  /**
   * Add `event`.
   *
   * @param {String} event
   * @param {Function} callback
   * @return {void}
   */

  function on(event, callback) {
    if (!events[event]) events[event] = []
    events[event].push(callback)
  }

  /**
   * Trigger `event` and pass `...data`.
   *
   * @param {String} event
   * @param {Mixed} ...data
   * @return {void}
   */

  function emit(event, ...data) {
    const callbacks = events[event]
    callbacks.forEach((callback) => {
      callback.apply(callback, data)
    })
  }

  emit._events = events
  emit.on = on
  emit.emit = emit

  return emit
}
