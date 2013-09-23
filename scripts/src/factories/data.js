define(function (require) {
  var prefix = require('prefix');

  function errorHandler (d) {
    return function (data, status, headers, config) {
      console.log(data, status);
      d.reject('error');
    };
  }

  var DataFactory = function ($http, $q) {
    function fetch (endpoint) {
      var d = $q.defer();

      if (endpoint.slice(-1) !== '/') {
        endpoint += '/';
      }

      console.log('fetching: ' + endpoint);
      $http.get(prefix.api + endpoint)
        .error(errorHandler(d))
        .success(function (data) {
          d.resolve(data);
        });

      return d.promise;
    }

    function deleteJSON (endpoint, jform) {
      var d = $q.defer();

      var options = {
        data: JSON.stringify(jform),
        headers: {'Content-Type': 'application/json'}
      };

      $http.delete(prefix.api + endpoint, options)
        .error(errorHandler(d))
        .success(function (res) {
          if ('error_code' in res) {
            d.reject(res.msg);
          } else {
            d.resolve(res.msg);
          }
        });

      return d.promise;
    }


    return {
      fetch: fetch,
      deleteJSON: deleteJSON
    };
  };

  DataFactory.$inject = [ '$http', '$q' ];

  return DataFactory;
});