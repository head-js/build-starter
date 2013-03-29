seajs.config({
  plugins: ['text'],

  base: './scripts',

  paths: {},

  alias: {
    'jquery': {
      src: 'vendor/jquery.min',
      exports: '$'
    },
    'underscore': {
      src: 'vendor/lodash.min',
      exports: '_'
    },
    'backbone': {
      src: 'vendor/backbone.min',
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'dust': {
      src: 'vendor/dust.full.linkedin.js',
      exports: 'dust'
    },
    'hammer': {
      src: 'vendor/jquery.hammer.min',
      deps: ['jquery'],
      exports: 'Hammer'
    },
    'yym': {
      src: 'vendor/yym',
      deps: ['jquery'],
      exports: 'YYM'
    }
  },

  preload: [
    'vendor/jquery.min',
    'vendor/jquery.hammer.min',
  ]
});