define(function (require) {
  var prefix = require('prefix');

  var PostController = function ($scope, $http, $timeout) {
    $scope.partial = prefix.partials + '/post.html';

    $scope.$on('post.render', function (event, args) {
      window.YYM.rollLeft();
      $timeout(function () {
        $http.get(prefix.api + 'post.json').success(function(data) {
          $scope.post = data;
          $scope.$emit('loading.success');
        });
      }, 500);
    });
  };

  PostController.$inject = ['$scope', '$http', '$timeout'];

  return PostController;
});