// the "ActionBar" contains:
// 1. action-bar-top
// 2. action-bar-bottom
// 3. pie-menu
define(function (require) {
  var prefix = require('prefix');

  var ActionBarController = function ($scope) {
    $scope.partial = prefix.partials + '/actionbar.html';

    $scope.togglePieMenu = function ($event) {
      var $menu = $($event.currentTarget).prev();
      $menu.toggleClass('pie-menu-show');
    };

    $scope.back = function () {
      window.YYM.rollRight();
    };
  };

  ActionBarController.$inject = ['$scope'];

  return ActionBarController;
});