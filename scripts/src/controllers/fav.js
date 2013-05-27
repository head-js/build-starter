define(function (require) {
  var _      = require('underscore'),
      prefix = require('prefix');

  var FavController = function ($scope, $http, $timeout) {
    $scope.partial = prefix.partials + '/fav.html';

    $scope.title = 'fav';
    $scope.settings = {
      hasTop: true,
      hasBottom: false,
      hasPie: false,
      hasBack: false
    };
    $scope.current = {
      action_bar_dropdown: false,
      action_bar_popup: false
    };

    $scope.loading = true;
    $timeout(function () {
      $http.get(prefix.api + 'fav.json').success(function(data) {
        $scope.boards = data;

        var tags = [];
        _.each(data, function (d) {
          if (d.tags) {
            tags = tags.concat(d.tags);
          }
        });
        $scope.tags = _.map(_.uniq(tags), function (tag) {
          return { name: tag };
        });

        $scope.loading = false;
      });
    }, 500);

    $scope.toggleDropDown = function () {
      $scope.current.action_bar_dropdown = !$scope.current.action_bar_dropdown;
    };

    $scope.togglePopup = function (isOpen) {
      $scope.current.action_popup = isOpen;
    };
  };

  FavController.$inject = ['$scope', '$http', '$timeout'];

  return FavController;
});