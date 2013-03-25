(function ($) {
  var viewport = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  var els = {
    viewport: "#viewport",
    scrollable: "#scrollable",
    screen: ".screen",
    board: ".board"
  };

  var $viewport = $(els.viewport);
  var $scrollable = $(els.scrollable);
  var $screens = (function (elements) {
    var s = [];
    for (var i = 0; i < elements.length; i++) {
      s.push($(elements[i]));
    }
    return s;
  }($(els.screen)));
  var pos = {
    start: 0,
    end: $screens.length - 1,
    current: 0
  };

  var _resize = function (isOrientationChange) {
    if (isOrientationChange) {
      viewport.width = window.innerWidth;
      viewport.height = window.innerHeight;
      $viewport.width(viewport.width).height(viewport.height);
      // todo
      // $scrollable.css("left", -1 * pos.current * viewport.width + "px");
    }
    $(els.screen).width(viewport.width);
    $(els.board).width(viewport.width).height(viewport.height);
  };

  var _roll = function () {
    var $currentScreen = $screens[pos.current];
    $scrollable.animate(
      { left: $scrollable.offset().left - $currentScreen.offset().left + "px" },
      { duration: 'fast', queue: false }
    );
  }

  var _rollLeft = function () {
    if (pos.current + 1 > pos.end) {
      return;
    } else {
      pos.current += 1;
      _roll();
    }
  };

  var _rollRight = function () {
    if (pos.current - 1 < pos.start) {
      return;
    } else {
      pos.current -= 1;
      _roll();
    }
  };

  var YYM = new (function () {
    return {
      resize: _resize,
      rollLeft: _rollLeft,
      rollRight: _rollRight,

      t: function () {
        return [
          viewport.width,
          viewport.height,
          pos.current,
          $screens[pos.current].offset().left
        ];
      },

      version: function () {
        var version = "ver 0.0.0";
        console.log(version);
      }
    };
  })();

  window.YYM = YYM;
})(window.jQuery);