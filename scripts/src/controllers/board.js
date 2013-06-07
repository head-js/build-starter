define(function (require) {
  var $      = require('jquery'),
      prefix = require('prefix');

  var BoardController = function ($scope, $http, $timeout, $routeParams) {
    $scope.partial = prefix.partials + '/board.html';

    $scope.title = $routeParams.id;
    $scope.settings = {
      hasTop: true,
      hasBottom: false,
      hasPie: false,
      hasBack: false
    };
    $scope.current = {
      action_bar_dropdown: false
    };

    $scope.loading = true;
    $timeout(function () {
      $http.get(prefix.api + 'board.json').success(function(data) {
        $scope.posts = data;
        $scope.loading = false;
      });
    }, 500);

    $scope.toggleDropDown = function () {
      $scope.current.action_bar_dropdown = !$scope.current.action_bar_dropdown;
    };

    $scope.read = function ($event) {
      var $a = $($event.currentTarget);
      // console.log($event.currentTarget);

      // var leftOriginal = parseInt($a.css('left'), 10);
      // if (isNaN(leftOriginal)) {
      //   leftOriginal = 0;
      // }
      if ($event.gesture.deltaX > 42) {
        return;
      }
      $a.css('left', $event.gesture.deltaX + 'px');
    }
  };

  BoardController.$inject = ['$scope', '$http', '$timeout', '$routeParams'];

  return BoardController;
});