define(function (require) {
  var prefix = require('prefix');

  var ActionBarController = function ($scope) {
    $scope.partial = prefix.partials + '/actionbar.html';
  };

  ActionBarController.$inject = ['$scope'];

  return ActionBarController;
});