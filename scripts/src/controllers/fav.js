define(function (require) {
  var prefix = require('prefix');

  var FavController = function ($scope, $http) {
    $http.get(prefix.api + 'fav.json').success(function(data) {
      $scope.boards = data;
    });

    $scope.partial = prefix.partials + '/fav.html';
  };

  FavController.$inject = ['$scope', '$http'];

  return FavController;
});