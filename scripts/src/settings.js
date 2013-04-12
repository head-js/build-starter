define(function (require) {
  var _        = require('underscore'),
      Backbone = require('backbone');

  var Settings = function(opts) {
    if (!opts) opts = {};

    this.root = opts.appRoot;
    this.apiRoot = opts.appRoot + 'api/';

    // global event dispatcher
    this.dispatcher = _.extend({}, Backbone.Events);

    // have the templates been loaded already?
    this.isReady = false;

    return this;
  };

  return Settings;
});
