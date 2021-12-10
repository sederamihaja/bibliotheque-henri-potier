export const EventEmitter = {
  _events: {},
  emit: function (event, data) {
    if (!this._events[event]) return;
    this._events[event].forEach((callback) => callback(data));
  },
  subscribe: function (event, callback) {
    if (!this._events[event]) this._events[event] = [];
    this._events[event].push(callback);
  },
};
