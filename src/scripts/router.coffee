angular.module('app').config [
	'$routeProvider'
	($routeProvider) ->
		$routeProvider
		.when('/',
			templateUrl: 'views/login.html'
			controller: null
			reloadOnSearch: false
		)
		.when('/success',
			templateUrl: 'views/success.html'
			controller: null
			reloadOnSearch: false
		).otherwise(redirectTo: '/')
]