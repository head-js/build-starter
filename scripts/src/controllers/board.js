define(function (require) {
  var prefix = require('prefix');

  var BoardController = function ($scope, $http) {
    $http.get(prefix.api + 'board.json').success(function(data) {
      $scope.posts = data;
    });

    $scope.partial = prefix.partials + '/board.html';
  };

  BoardController.$inject = ['$scope', '$http'];

  return BoardController;
});