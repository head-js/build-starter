define(function (require) {
  var angular     = require('angular');
      controllers = angular.module('yanxi.controllers', []);

  var ActionBarController = require('./actionbar');
  controllers.controller('yanxi.ctrl.ActionBar', ActionBarController);

  var FavController = require('./fav');
  controllers.controller('yanxi.ctrl.Fav', FavController);

  var BoardController = require('./board');
  controllers.controller('yanxi.ctrl.Board', BoardController);

  var PostController = require('./post');
  controllers.controller('yanxi.ctrl.Post', PostController);

  return controllers;
});