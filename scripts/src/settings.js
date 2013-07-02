define(function (require) {
  var _        = require('underscore'),
      Backbone = require('backbone');

  var Settings = function(opts) {
    if (!opts) opts = {};

    this.apiRoot = opts.apiRoot + 'publicapi/';

    // global event dispatcher
    this.dispatcher = _.extend({}, Backbone.Events);

    return this;
  };

  return Settings;
});
