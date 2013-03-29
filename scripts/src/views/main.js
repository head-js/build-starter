define(function (require) {
  var Backbone = require('backbone'),

      ActionBarView = require('src/views/actionbar'),
      BoardView = require('src/views/board'),
      FavView = require('src/views/fav'),
      PostView = require('src/views/post');

  require('hammer');

  var MainView = Backbone.View.extend({
    el: '#scrollable',

    events: {
      'tap #toggle-pie-menu': 'togglePieMenu'
    },

    initialize: function () {
      this.actionbarView = new ActionBarView();
      this.boardView = new BoardView();
      this.favView = new FavView();
      this.postView = new PostView();

      this.$el.hammer();
    },

    togglePieMenu: function (e) {
      var $menu = $(e.currentTarget).prev();
      $menu.toggleClass('pie-menu-show');
    }
  });

  return MainView;
});