// the "ActionBar" contains:
// 1. action-bar-top
// 2. action-bar-bottom
// 3. pie-menu
define(function (require) {
  var prefix = require('prefix');

  var SETTINGS = {
    'fav': {
      hasTop: true,
      hasBottom: false,
      hasPie: true,
      hasBack: false
    },
    'board': {
      hasTop: true,
      hasBottom: false,
      hasPie: true,
      hasBack: false
    },
    'post': {
      hasTop: true,
      hasBottom: true,
      hasPie: false,
      hasBack: true
    }
  };

  var ActionBarController = function ($scope) {
    $scope.title = "fav";
    $scope.settings = SETTINGS['fav'];

    $scope.partial = prefix.partials + '/actionbar.html';

    $scope.togglePieMenu = function ($event) {
      var $menu = $($event.currentTarget).prev();
      $menu.toggleClass('pie-menu-show');
    };

    $scope.$on('actionbar.title', function (event, args) {
      $scope.title = args.title;
    });

    $scope.$on('actionbar.settings', function (event, args) {
      $scope.settings = SETTINGS[args.type];
    });
  };

  ActionBarController.$inject = ['$scope'];

  return ActionBarController;
});