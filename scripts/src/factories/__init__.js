define(function (require) {
  var angular     = require('angular');
      factories = angular.module('yanxi.factories', []);

  var DataFactory = require('./data');
  factories.factory('dataFactory', DataFactory);

  return factories;
});