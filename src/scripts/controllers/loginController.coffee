class Controller
	
	constructor: ($scope, $timeout, $location, loginService) ->
		$scope.isError = false
		$scope.errorMessage = ''
		$scope.user =
			id: ''
			password: ''

		$scope.login = ()->
			resetError()

			$timeout ()->
				if !($scope.user.id.replace ' ','')
					setError 'User field is required'
					return

				if !($scope.user.password.replace ' ','')
					setError 'Password field is required'
					return

				loginService.login($scope.user).then (response)->
					location.url '/success'
				, (error)->
					if error.status is 401
						setError 'Invalid user/password' 
					else
						setError 'Error occurred while trying to log in'
			, 500
		
		setError = (message)->
			$scope.errorMessage = message
			$scope.isError = true
		
		resetError = ->
			$scope.errorMessage = ''
			$scope.isError = false



angular.module('app').controller 'loginController', ['$scope', '$timeout', '$location', 'loginService', Controller]
