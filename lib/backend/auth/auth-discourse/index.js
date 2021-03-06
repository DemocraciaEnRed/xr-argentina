/**
 * Module dependencies.
 */

var routes = require('./routes')
var strategy = require('./strategy')

/**
 * Expose AuthDiscourse Module
 */

module.exports = AuthDiscourse

/**
 * AuthDiscourse Module
 */

function AuthDiscourse (app) {
  /**
   * Instantiates PassportJS midlewares
   */

  strategy(app)

  /**
   * Attach routes to parent application
   */

  app.use(routes)
}
