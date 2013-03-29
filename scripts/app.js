define(function(require) {
  var Settings = require('src/settings')
  window.Yanxi = new Settings({ appRoot: "/notset/" });

  var YYM = require('yym');
  window.YYM.resize(true);

  $(window).on('orientationchange', function() {
    window.YYM.resize(true);
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

  var mainView = require('src/views/main');
  new mainView();
});