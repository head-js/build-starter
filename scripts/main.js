define(function(require) {
  var $ = require('jquery');

  var Settings = require('src/settings')
  window.YYM = new Settings({ apiRoot: "http://asimov.eu01.aws.af.cm/" });

  // https://github.com/tnajdek/angular-requirejs-seed
  // https://github.com/jhiemer/angularjs-requirejs-testacular
  var angular = require('angular'),
      app     = require('app'),
      routes  = require('routes');

  $(document).ready(function () {
    var $html = $('html');
    angular.bootstrap($html, [app.name]);
    $html.addClass('ng-app');
  });
});