class Service
	constructor: ($resource) ->

		activity = $resource 'http://login-url'

		self = {}
		self.login = (user)->
			promise = activity.save(user).$promise

		return self

angular.module('app').service 'loginService', ['$resource', Service]