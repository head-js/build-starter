define(function (require) {
  var angular     = require('angular');
      services = angular.module('yanxi.services', []);

  var MessageService = require('./message');
  services.service('messageService', MessageService);

  return services;
});