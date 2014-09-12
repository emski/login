(function() {
  var Service;

  Service = (function() {
    function Service($resource) {
      var activity, self;
      activity = $resource('http://login-url');
      self = {};
      self.login = function(user) {
        var promise;
        return promise = activity.save(user).$promise;
      };
      return self;
    }

    return Service;

  })();

  angular.module('app').service('loginService', ['$resource', Service]);

}).call(this);
