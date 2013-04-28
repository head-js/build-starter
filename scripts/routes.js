define(function(require) {
  var angular = require('angular'),
      app     = require('app'),
      prefix  = require('prefix');

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/fav', {
      templateUrl: prefix.partials + '/fav.html',
      controller: 'yanxi.ctrl.Fav'
    });

    $routeProvider.when('/board/:id', {
      templateUrl: prefix.partials + '/board.html',
      controller: 'yanxi.ctrl.Board'
    });

    $routeProvider.when('/post/:id', {
      templateUrl: prefix.partials + '/post.html',
      controller: 'yanxi.ctrl.Post'
    });

    $routeProvider.otherwise({redirectTo: '/fav'});
  }]);

  return app;
});