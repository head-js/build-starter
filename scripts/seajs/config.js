seajs.config({
  plugins: ['text'],

  base: './scripts',

  paths: {},

  alias: {
    'prefix': 'prefix',
    'jquery': {
      src: 'vendor/jquery.min',
      exports: '$'
    },
    'angular': {
      src: 'vendor/angular.min',
      exports: 'angular'
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
    'angular-hammer': {
      src: 'vendor/angular-hammer',
      deps: ['angular', 'vendor/hammer.min'],
      exports: 'ngHammer'
    },
    'yym': {
      src: 'vendor/yym',
      deps: ['jquery'],
      exports: 'YYM'
    }
  },

  preload: []
});