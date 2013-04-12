define(function (require) {
  var angular     = require('angular');
      controllers = angular.module('yanxi.controllers', []);

  var MainController = require('./main');
  controllers.controller('yanxi.ctrl.Main', MainController);

  var ActionBarController = require('./actionbar');
  controllers.controller('yanxi.ctrl.ActionBar', ActionBarController);

  var PieMenuController = require('./piemenu');
  controllers.controller('yanxi.ctrl.PieMenu', PieMenuController);

  var FavController = require('./fav');
  controllers.controller('yanxi.ctrl.Fav', FavController);

  var BoardController = require('./board');
  controllers.controller('yanxi.ctrl.Board', BoardController);

  return controllers;
});