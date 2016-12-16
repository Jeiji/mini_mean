var app = angular.module('app' , [ 'ngRoute' , 'ngMessages'] );
app.config(function ($routeProvider) {
  $routeProvider
  .when( '/' , {
    templateUrl : 'home.html',
    controller : 'idxCtrl'
  })
  .when( '/customers' , {
    templateUrl : 'customers.html',
    controller : 'cstmrCtrl'
  })
  .when( '/products' , {
    templateUrl : 'products.html',
    controller : 'prdctCtrl'
  })
  .when( '/orders' , {
    templateUrl : 'orders.html',
    controller : 'ordrCtrl'
  })
  .when( '/dashboard' , {
    templateUrl : 'dashboard.html',
    controller : 'dshbrdCtrl'
  })
  .otherwise({
    redirectTo : '/'
  });
});
