define(function (require) {
  var MainController = function ($scope) {
    $scope.current = {
      abTitle: 'favorite'
    };

    $scope.gotoBoard = function (boardName) {
      console.log(boardName);
      this.current.abTitle = boardName;
      // FIXME:
      window.YYM.rollLeft();
    };
  };

  MainController.$inject = ['$scope'];

  return MainController;
});