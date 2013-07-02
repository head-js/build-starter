define(function (require) {
  var angular     = require('angular'),
      controllers = require('src/controllers/__init__');

  var hmTouchevents = require('angular-hammer');

  var APP = angular.module('yanxi', ['yanxi.controllers', 'hmTouchevents']);

  // http://stackoverflow.com/q/12111936/707580
  // http://better-inter.net/enabling-cors-in-angular-js/
  APP.config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
  ]);

  return APP;
});