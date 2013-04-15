define(function (require) {
  var prefix = require('prefix');

  var LoadingController = function ($scope) {
    $scope.partial = prefix.partials + '/loading.html';
  };

  LoadingController.$inject = ['$scope'];

  return LoadingController;
});