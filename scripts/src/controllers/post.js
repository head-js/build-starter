define(function (require) {
  var _ = require('underscore');

  var prefix = require('prefix');

  var PostController = function ($scope, $http, $routeParams, $timeout, fData) {
    // initialize
    $scope.partial = prefix.partials + '/post.html';

    // FIXME: better loading effect/message
    $scope.loading = false;

    $scope.layout = {
      messagebar: {
        top: true
      }
    };

    var options = {
      CACHE_SIZE: 10, // 15 is too much, even translate3D will get stuck
      ROUTINE_INTERVAL: 1000 * 10,
    };

    var _current_post = 0,
        _since_id = 0;

    // FIXME: Message, what is the angular best practice
    var Msg = {
      info: function (text) {
        $scope.message = text;
        $timeout(function () {
          $scope.message = "";
        }, 1500);
      },
      loading: {
        begin: function (text) {
          $scope.message = text;
        },
        end: function () {
          $scope.message = "";
        }
      }
    };

    function adapter(data) {
      var adapted_data = _.map(data, function (d) {
        d.content = d.content.replace(/\n/g, "<br/>");

        d.excerpt = d.content.substring(0, 140);
        d.is_excerpt_ = true;

        d.zindex_ = 100000 - d.id;
        d.pos_ = 'right';
        d.visible_ = true;
        d.read_ = false;
        return d;
      });

      adapted_data[0].pos_ = 'center';

      return adapted_data;
    }

    function toggleVisible() {
      // for (var i = $scope.posts.length - 1; i >= 0; i--) {
      //   $scope.posts[i].visible_ = Math.abs(i - _current_post) <= 1;
      // }
    }

    function nextPost() {
      var total_posts = $scope.posts.length;
      // the last card is allowed to swiped left
      //   to greet the user with the eyes of Ozil
      if (_current_post < total_posts) {
        var cp = $scope.posts[_current_post];
        if (!cp.read_) {
          read(cp.id);
        }
        cp.pos_ = 'left';
        cp.is_excerpt_ = true;

        _current_post += 1;
        if (_current_post < total_posts) {
          toggleVisible();
          $scope.posts[_current_post].pos_ = 'center';
        }
      }
    }

    function prevPost() {
      var total_posts = $scope.posts.length;
      if (_current_post > 0) {
        if (_current_post < total_posts) {
          var cp = $scope.posts[_current_post];
          cp.pos_ = 'right';
          cp.is_excerpt_ = true;
        }

        _current_post -= 1;
        toggleVisible();
        $scope.posts[_current_post].pos_ = 'center';
      }
    }

    var ep_posts_fetch = 'reports/',
        ep_post_read = 'report/read/';

    function read(id, rating) {
      var jform = { id: id };
      if (rating && rating !== "") {
        jform.rating = parseInt(rating, 10);
      }

      console.log('read: ' + id);
      fData.deleteJSON(ep_post_read, jform).then(function (res) {
        for (var i = $scope.posts.length - 1; i >= 0; i--) {
          if ($scope.posts[i].id === id) {
            $scope.posts[i].read_ = true;
            break;
          }
        }
      });
    }

    function routine() {
      if ($scope.posts.length <= options.CACHE_SIZE) {
        Msg.loading.begin('fetching new cards');
        fData.fetch("reports/" + _since_id).then(function (data) {
          if (data.length > 0) {
            _since_id = data.slice(-1)[0].id;
            var adapted_data = adapter(data);

            if ($scope.posts.length === 0) {
              adapted_data[0].pos_ = 'center';
              adapted_data[0].visible_ = true;

              if (adapted_data[1]) {
                adapted_data[1].visible_ = true;
              }

              $scope.posts = adapted_data;
            } else {
              $scope.posts = $scope.posts.concat(adapted_data);
            }

            Msg.loading.end();
          } else {
            Msg.info('no new cards');
          }
        }, function (reason) { console.log(reason); });
      } else {
        console.log('clearing left cards');

        var count = $scope.posts.length,
            p;
        for (var i = 0; i < count; i++) {
          p = $scope.posts[i];
          // cards read but not left will not be cleared
          if (p.pos_ === 'left' && p.read_) {
            $scope.posts.splice(i, 1);
            _current_post -= 1;
            count -= 1;
          }
        }
      }

      $timeout(routine, options.ROUTINE_INTERVAL);
    }

    $scope.posts = [];
    $scope.cached_posts = [];
    routine();

    // interactions
    $scope.dragend = function (e) {
      var gesture = e.gesture;

      if (gesture.direction === 'left') {
        nextPost();
      } else if (gesture.direction === 'right') {
        prevPost();
      } else if (gesture.direction === 'up' || gesture.direction === 'down'){
        if (gesture.deltaX < -15) {
          nextPost();
        } else if (gesture.deltaX > 15) {
          prevPost();
        }
      } else {
        throw 'NotImplementedException';
      }
    };

    $scope.toggleExcerpt = function (post) {
      post.is_excerpt_ = !post.is_excerpt_;
    };
  };

  PostController.$inject = ['$scope', '$http', '$routeParams', '$timeout',
                            'dataFactory'];

  return PostController;
});