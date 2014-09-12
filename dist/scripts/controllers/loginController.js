(function() {
  var Controller;

  Controller = (function() {
    function Controller($scope, $timeout, $location, loginService) {
      var resetError, setError;
      $scope.isError = false;
      $scope.errorMessage = '';
      $scope.user = {
        id: '',
        password: ''
      };
      $scope.login = function() {
        resetError();
        return $timeout(function() {
          if (!($scope.user.id.replace(' ', ''))) {
            setError('User field is required');
            return;
          }
          if (!($scope.user.password.replace(' ', ''))) {
            setError('Password field is required');
            return;
          }
          return loginService.login($scope.user).then(function(response) {
            return location.url('/success');
          }, function(error) {
            if (error.status === 401) {
              return setError('Invalid user/password');
            } else {
              return setError('Error occurred while trying to log in');
            }
          });
        }, 500);
      };
      setError = function(message) {
        $scope.errorMessage = message;
        return $scope.isError = true;
      };
      resetError = function() {
        $scope.errorMessage = '';
        return $scope.isError = false;
      };
    }

    return Controller;

  })();

  angular.module('app').controller('loginController', ['$scope', '$timeout', '$location', 'loginService', Controller]);

}).call(this);
