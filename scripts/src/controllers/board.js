define(function (require) {
  var prefix = require('prefix');

  var BoardController = function ($scope, $http, $timeout, $routeParams) {
    $scope.partial = prefix.partials + '/board.html';

    $scope.title = $routeParams.id;
    $scope.settings = {
      hasTop: true,
      hasBottom: false,
      hasPie: false,
      hasBack: false
    };

    $scope.loading = true;
    $timeout(function () {
      $http.get(prefix.api + 'board.json').success(function(data) {
        $scope.posts = data;
        $scope.loading = false;
      });
    }, 500);
  };

  BoardController.$inject = ['$scope', '$http', '$timeout', '$routeParams'];

  return BoardController;
});