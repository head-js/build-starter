define(function (require) {
  var Backbone = require('backbone');

  var BoardView = Backbone.View.extend({
    el: '#brd-board',

    events: {
    },

    initialize: function () {
      window.Yanxi.dispatcher.on('board.render', _.bind(this.render, this));
    },

    render: function (message) {
      console.log(message.boardId);

      var data = [
        { owner: 'ls', title: 'Re: 16pf的积分方式', posttime: '2012.01.03 12:48' },
        { owner: 'delvdelvport', title: 'Re: 蛇叔复活了', posttime: '2012.01.03 12:48' },
        { owner: 'FBMgg', title: 'Re: 今日冷笑话', posttime: '2012.01.03 12:48' },
        { owner: 'ls', title: 'Re: 16pf的积分方式', posttime: '2012.01.03 12:48' },
        { owner: 'ls', title: 'Re: 16pf的积分方式', posttime: '2012.01.03 12:48' },
        { owner: 'ls', title: 'Forest', posttime: '2012.01.03 12:48' },
        { owner: 'ls', title: 'Forest 2', posttime: '2012.01.03 12:48' },
        { owner: 'ls', title: 'Forest 3', posttime: '2012.01.03 12:48' },
        { owner: 'ls', title: 'Forest 4', posttime: '2012.01.03 12:48' }
      ];

      var html = _.map(data, function (d) {
        var isRead = Math.random() > 0.5 ? "<i></i>" : "<i>+</i>";
        return "<li>" + isRead + "<span class='id-width'>" + d.owner +
               "</span><small>" + d.title + "</small></li>";
      })

      this.$el.html('<ul>' + html.join('') + '</ul>');

      if (message.callback) {
        message.callback();
      }
    }
  });

  return BoardView;
});