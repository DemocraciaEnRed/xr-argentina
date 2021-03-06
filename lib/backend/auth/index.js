/**
 * Module dependencies.
 */

var config = require('lib/config')
var routes = require('./routes')
var strategy = require('./strategy')

/**
 * Expose Auth Module
 */

module.exports = Auth

/**
 * Auth Module defining routes and
 */

function Auth (app) {
  /**
   * Instantiates PassportJS midlewares
   */

  strategy(app)

  /**
   * Attach routes to parent application
   */

  app.use(routes)

  /**
   * Register Facebook
   */

  if (config.facebookSignin) require('./auth-facebook')(app)

  if (config.discourseSignin) require('./auth-discourse')(app)
}
