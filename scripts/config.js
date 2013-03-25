requirejs.config({
  paths: {
    // base dependencies
    'jquery': 'vendor/jquery.min',
    'lodash': 'vendor/lodash.min',
    'backbone': 'vendor/backbone.min',

    // http://shuaishuai.github.com/yingyuan
    'yym': 'vendor/yym',

    // templating
    'dust': 'vendor/dust.full.linkedin',
    'text': 'vendor/text'

    // jQuery plugins
  },

  shim: {
    'backbone': {
      deps: ['lodash', 'jquery'],
      exports: 'Backbone'
    },
    'yym': {
      deps: ['jquery'],
      exports: 'YYM'
    },
    'dust': {
      exports: 'dust'
    }
  }
});

// main app logic
requirejs([
  'jquery',
  'lodash',
  'backbone',
  'yym',
  'src/init',
  'src/routes'
], function ($, _, Backbone, YYM, Settings, Router) {
  window.YingYuan = new Settings({ appRoot: "/yingyuan/" });

  $(function () {
    /*
    var prefix = window.YYMDemo.root,
        router = new Router({ prefix: prefix }),
        path = window.location.pathname.toLowerCase();

    // allow refreshing the page w/out getting kicked back to the home screen
    path = (path + '/') !== prefix ? path : prefix;
    Backbone.history.start({ pushState: true });
    Backbone.history.navigate(path, { trigger: true });
    */

    window.YYM.resize(true);
    $(window).on('orientationchange', function() {
      window.YYM.resize(true);
    });

    $(".board").click(function(e) {
      console.log('board', e.target);
    });

    $("#left").click(function() {
      window.YYM.rollLeft();
    });

    $("#right").click(function() {
      window.YYM.rollRight();
    });

    $("#scale").click(function() {
      alert(YYM.t());
    });
  });
});
