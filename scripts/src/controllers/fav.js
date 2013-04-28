define(function (require) {
  var prefix = require('prefix');

  var FavController = function ($scope, $http, $timeout) {
    $scope.partial = prefix.partials + '/fav.html';

    $scope.title = 'fav';
    $scope.settings = {
      hasTop: true,
      hasBottom: false,
      hasPie: false,
      hasBack: false
    };

    $scope.loading = true;
    $timeout(function () {
      $http.get(prefix.api + 'fav.json').success(function(data) {
        $scope.boards = data;
        $scope.loading = false;
      });
    }, 500);
  };

  FavController.$inject = ['$scope', '$http', '$timeout'];

  return FavController;
});