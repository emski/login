(function() {
  require({
    shim: {
      "libs/angular": {
        "deps": []
      },
      "libs/angular-animate.min": {
        "deps": ["libs/angular"]
      },
      "libs/angular-route.min": {
        "deps": ["libs/angular"]
      },
      "libs/angular-resource.min": {
        "deps": ["libs/angular"]
      },
      "app": {
        "deps": ["libs/angular-animate.min", "libs/angular-route.min", "libs/angular-resource.min"]
      },
      "controllers/loginController": {
        "deps": ["app"]
      },
      "router": {
        "deps": ["app"]
      },
      "services/loginService": {
        "deps": ["app"]
      }
    }
  }, ["require", "controllers/loginController", "router", "services/loginService"], function(require) {
    return require(['bootstrap']);
  });

}).call(this);
