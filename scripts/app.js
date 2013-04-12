define(function (require) {
    var angular     = require('angular'),
        controllers = require('src/controllers/__init__');

    var hmTouchevents = require('angular-hammer');

    return angular.module('yanxi', ['yanxi.controllers', 'hmTouchevents']);
});