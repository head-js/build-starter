define(function (require) {
  var $      = require('jquery'),
      _      = require('underscore'),
      prefix = require('prefix');

  var BoardController = function ($scope, $http, $routeParams) {
    $scope.partial = prefix.partials + '/board.html';

    $scope.layout = {
      bar: {
        hasTop: true
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
      $http.get(prefix.api + 'report').success(function (data) {
        $scope._posts = data;
        callback();
      });
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

    function _prepareContent (content) {
      return content.replace(/\n/g, "<br/>");
    }

    function _setRead (post) {
      post.flag = 1;
      var data = JSON.stringify({ "ids": [post.id] });
      $http.put(prefix.api + "report/read", data).success(function (message) {
        console.log(message);
      });
    }

    // function _filterByTags (posts, tags) {
    //   return _.filter(posts, function (p) {
    //     return _.intersection(p.tags, tags).length > 0;
    //   });
    // }

    // $scope.togglePanel = function () {
    //   if ($scope.layout.panel.active) {
    //     var tags = $scope.tags;
    //     var checkedTags = _.chain(tags)
    //                        .filter(function (t) { return t.checked; })
    //                        .map(function (t) { return t.name; })
    //                        .value();

    //     $scope.posts = _filterByTags($scope._posts, checkedTags);

    //     $scope.layout.panel.active = false;
    //   } else {
    //     $scope.layout.panel.active = true;
    //   }
    // };

    $scope.readContent = function (post) {
      $scope.loading = true;
      $http.get(prefix.api + "report/content/" + post.id).success(function (data) {
        _setRead(post);

        data.content = _prepareContent(data.content);
        $scope.post = data;
        $scope.slide = 1;
        $scope.loading = false;
      });
    };

    $scope.back = function () {
      $scope.slide = 0;
    };
  };

  BoardController.$inject = ['$scope', '$http', '$routeParams'];

  return BoardController;
});