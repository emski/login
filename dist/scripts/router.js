(function() {
  angular.module('app').config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: 'views/login.html',
        controller: null,
        reloadOnSearch: false
      }).when('/success', {
        templateUrl: 'views/success.html',
        controller: null,
        reloadOnSearch: false
      }).otherwise({
        redirectTo: '/'
      });
    }
  ]);

}).call(this);
