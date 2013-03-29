define(function (require) {
  var Backbone = require('backbone'),
      dust = require('dust');

  var FavView = Backbone.View.extend({
    el: '#brd-fav',

    events: {
      'tap li': 'gotoBoard'
    },

    initialize: function () {
      this.render();
    },

    render: function () {
      var data = [
        { boardname: 'delvdelvport', boardnameZh: '燕曦发展' },
        { boardname: 'BBS_Dev', boardnameZh: '技术组工作版面' },
        { boardname: 'Chelsea', boardnameZh: '切尔西' },
        { boardname: 'ContactAdmin', boardnameZh: '广告合作管理' },
        { boardname: 'FBMmm', boardnameZh: '腐败生活' },
        { boardname: 'HHJJ', boardnameZh: '向右看就是兰色的梦' },
        { boardname: 'Hilario', boardnameZh: '一襟晚照' },
        { boardname: 'kkfuzi', boardnameZh: '空空的天空' },
        { boardname: 'momojon', boardnameZh: '悠游居' },
        { boardname: 'Money', boardnameZh: '航海日志' },
        { boardname: 'NoahCat', boardnameZh: '理财天地' },
        { boardname: 'shidiwen', boardnameZh: '重光轩' },
        { boardname: 'SysOp', boardnameZh: '燕曦系统讨论区' },
        { boardname: 'tuliptears', boardnameZh: '一季红橙' }
      ];

      var tpl = require('text!templates/fav.dust');
      var compiled = dust.compile(tpl, 'tpl_fav');
      dust.loadSource(compiled);

      var self = this;
      dust.render('tpl_fav', { boards: data }, function (err, out) {
        self.$el.html(out);
      });
    },

    gotoBoard: function (e) {
      console.log(e);
      var message = {
        boardId: 0,
        callback: function () {
          window.YYM.rollLeft();
        }
      };
      window.Yanxi.dispatcher.trigger('board.render', message);
    }
  });

  return FavView;
});