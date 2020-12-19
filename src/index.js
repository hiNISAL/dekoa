const route = require('./route')

module.exports = {
  bind: route.bind,
  Controller: route.resource,
  Middleware: require('./middleware'),
  /* Standard HTTP Methods */
  Get: route.get,
  Post: route.post,
  Put: route.put,
  Del: route.del,
  Delete: route.del,
  Head: route.head,
  Options: route.options,
  Trace: route.trace,
  Patch: route.patch
}
