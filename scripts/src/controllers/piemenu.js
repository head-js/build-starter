define(function (require) {
  var $      = require('jquery'),
      prefix = require('prefix');

  var PieMenuController = function ($scope) {
    $scope.partial = prefix.partials + '/piemenu.html';

    $scope.togglePieMenu = function ($event) {
      var $menu = $($event.currentTarget).prev();
      $menu.toggleClass('pie-menu-show');
    };
  };

  PieMenuController.$inject = ['$scope'];

  return PieMenuController;
});