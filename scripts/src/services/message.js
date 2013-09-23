define(function (require) {
  var MessageService = function ($rootScope, $timeout) {
    this.info = function (text) {
      $rootScope.message = text;
    };

    return this;
  };

  MessageService.$inject = [ '$rootScope', '$timeout' ];

  return MessageService;
});