"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;


function _default(api) {

  api.describe({
    key: 'ending',
    config: {
      schema(joi) {
        return joi.object()
          .description('umi-plugin-ending');
      },
    },
  });

  if (api.env === 'production' && api.userConfig.ending) {
    api.modifyHTML(($, { route }) => {
      const $h = $('script#h3ad-5cript');
      $h.prev('script').remove();
      $h.removeAttr('id');
      return $;
    });
  }
}
