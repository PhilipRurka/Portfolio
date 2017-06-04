'use strict';
//******************************
//********** ANGULAR **********
//******************************
var app = angular.module('portfolio', ['ui.router', 'ngResource'
]);


//******************************
//********** CONFIG **********
//******************************
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  '$compileProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider,
    $compileProvider) {

    $compileProvider.debugInfoEnabled(false);

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('landing', {
        url: '/',
      })
  }
]);


//*************************
//********** RUN **********
//*************************

// TODO: Understand what this does.
// app.run(['$rootScope', function($rootScope) {

// }]);

app.run(
['$rootScope',
function($rootScope) {
  'use strict';

//******************************
//********** WATCHERS **********
//******************************

  $rootScope.$on('$stateChangeSuccess', function(event, toState) {
    
  });
}]);


//*******************************
//********** FUNCTIONS **********
//*******************************
