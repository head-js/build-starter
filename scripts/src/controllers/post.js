define(function (require) {
  var _ = require('underscore');

  var prefix = require('prefix');

  var PostController = function ($scope, $http, $routeParams, $timeout, dataFactory) {
    // initialize
    $scope.partial = prefix.partials + '/post.html';

    $scope.layout = {
      messagebar: {
        top: true
      }
    };

    var options = {
      CACHE_SIZE: 15,
      ROUTINE_INTERVAL: 1000 * 30, // 30 sec
    };

    var _current_post = 0,
        _total_posts = 0;

    // FIXME: should be message
    $scope.loading = true;
    function routine() {
      var since_id = 0;
      dataFactory.fetch("reports/" + since_id).then(function (data) {
        $scope.posts = adapter(data);
        _total_posts += $scope.posts.length;
        $scope.loading = false;

        // $timeout(routine, options.ROUTINE_INTERVAL);
      });
    }

    routine();

    function adapter(data) {
      var adapted_data = _.map(data, function (d) {
        d.zindex_ = 100000 - d.id;
        d.pos_ = 'right';
        return d;
      });

      adapted_data[0].pos_ = 'center';

      return adapted_data;
    }

    function nextPost() {
      var current = _current_post;
      var next = _current_post + 1;

      if (next < _total_posts) {
        $scope.posts[current].pos_ = 'left';
        $scope.posts[next].pos_ = 'center';
        _current_post = next;
      }
    }

    function prevPost() {
      var current = _current_post;
      var prev = _current_post - 1;

      if (prev > -1) {
        $scope.posts[current].pos_ = 'right';
        $scope.posts[prev].pos_ = 'center';
        _current_post = prev;
      }
    }

    $scope.dragend = function (e) {
      var gesture = e.gesture;

      if (gesture.direction === 'left') {
        nextPost();
      } else if (gesture.direction === 'right') {
        prevPost();
      } else if (gesture.direction === 'up' || gesture.direction === 'down'){
        if (gesture.deltaX < -10) {
          nextPost();
        } else if (gesture.deltaX > 10) {
          prevPost();
        }
      } else {
        throw 'NotImplementedException';
      }
    };
  };

  PostController.$inject = ['$scope', '$http', '$routeParams', '$timeout',
                            'dataFactory'];

  return PostController;
});