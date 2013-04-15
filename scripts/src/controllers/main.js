define(function (require) {
  var MainController = function ($scope) {
    $scope.current = {
      loading: false
    };

    $scope.gotoBoard = function (board) {
      console.log(board);
      $scope.$broadcast('actionbar.title', { title: board.boardname });
      $scope.$broadcast('actionbar.settings', { type: 'board' });
      $scope.$broadcast('board.render', {});
      $scope.current.loading = true;
    };

    $scope.gotoPost = function (post) {
      console.log(post);
      $scope.$broadcast('actionbar.settings', { type: 'post' });
      $scope.$broadcast('post.render', { postId: post.id });
      $scope.current.loading = true;
    };

    $scope.$on('loading.success', function () {
      $scope.current.loading = false;
    });
  };

  MainController.$inject = ['$scope'];

  return MainController;
});