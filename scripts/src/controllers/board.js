define(function (require) {
  var prefix = require('prefix');

  var BoardController = function ($scope, $http, $timeout) {
    $scope.partial = prefix.partials + '/board.html';

    $scope.$on('board.render', function (event, args) {
      window.YYM.rollLeft();
      $timeout(function () {
        $http.get(prefix.api + 'board.json').success(function(data) {
          $scope.posts = data;
          $scope.$emit('loading.success');
        });
      }, 500);
    });
  };

  BoardController.$inject = ['$scope', '$http', '$timeout'];

  return BoardController;
});