define(function (require) {
  var $      = require('jquery'),
      _      = require('underscore'),
      prefix = require('prefix');

  var BoardController = function ($scope, $http, $timeout, $routeParams) {
    $scope.partial = prefix.partials + '/board.html';

    $scope.layout = {
      actionbar: {
        hasTop: true
      },
      panel: {
        active: false
      }
    };

    // first render
    $scope.title = $routeParams.id;
    $scope.loading = true;
    _updatePosts(function () {
      $scope.posts = $scope._posts;
      $scope.tags = _aggregateTags($scope.posts);
      $scope.slide = 0;
      $scope.loading = false;
    });

    function _updatePosts (callback) {
      $timeout(function () {
        $http.get(prefix.api + 'board.json').success(function(data) {
          $scope._posts = data;
          callback();
        });
      }, 500);
    }

    function _aggregateTags (posts) {
      var tags = [];
      _.each(posts, function (p) {
        if (p.tags) {
          tags = tags.concat(p.tags);
        }
      });

      return _.map(_.uniq(tags), function (tag) {
        return { name: tag, checked: true };
      });
    }

    function _filterByTags (posts, tags) {
      return _.filter(posts, function (p) {
        return _.intersection(p.tags, tags).length > 0;
      });
    }

    $scope.togglePanel = function () {
      if ($scope.layout.panel.active) {
        var tags = $scope.tags;
        var checkedTags = _.chain(tags)
                           .filter(function (t) { return t.checked; })
                           .map(function (t) { return t.name; })
                           .value();

        $scope.posts = _filterByTags($scope._posts, checkedTags);

        $scope.layout.panel.active = false;
      } else {
        $scope.layout.panel.active = true;
      }
    };

    $scope.readContent = function (postId) {
      $scope.loading = true;
      $timeout(function () {
        $http.get(prefix.api + 'post.json').success(function(data) {
          console.log(data);
          $scope.post = data;
          $scope.slide = 1;
          $scope.loading = false;
        });
      }, 500);
    };

    $scope.back = function () {
      $scope.slide = 0;
    };
  };

  BoardController.$inject = ['$scope', '$http', '$timeout', '$routeParams'];

  return BoardController;
});