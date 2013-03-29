define(function (require) {
  var Backbone = require('backbone');

  var PostView = Backbone.View.extend({
    el: '#brd-post',

    events: {
    },

    initialize: function () {

    },

    render: function (postId, callback) {
      console.log(postId);

      if (callback) {
        callback();
      }
    }
  });

  return PostView;
});