define(function(require) {
  var $ = require('jquery');

  var Settings = require('src/settings')
  window.Yanxi = new Settings({ appRoot: "/notset/" });

  // https://github.com/tnajdek/angular-requirejs-seed
  // https://github.com/jhiemer/angularjs-requirejs-testacular
  var angular = require('angular'),
      app     = require('app'),
      routes  = require('routes');

  $(document).ready(function () {
    var $html = $('html');
    angular.bootstrap($html, [app.name]);
    $html.addClass('ng-app');

    var YYM = require('yym');
    window.YYM.resize(true);

    $(window).on('orientationchange', function() {
      window.YYM.resize(true);
    });
  });
});