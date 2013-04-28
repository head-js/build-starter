define(function (require) {
  var prefix = require('prefix');

  var PostController = function ($scope, $http, $timeout) {
    $scope.partial = prefix.partials + '/post.html';

    $scope.title = 'post';
    $scope.settings = {
      hasTop: true,
      hasBottom: true,
      hasPie: false,
      hasBack: true
    };

    $scope.backUrl = '#/board/Dev';

    $scope.loading = true;
    $timeout(function () {
      $http.get(prefix.api + 'post.json').success(function(data) {
        $scope.post = data;
        $scope.loading = false;
      });
    }, 500);
  };

  PostController.$inject = ['$scope', '$http', '$timeout'];

  return PostController;
});