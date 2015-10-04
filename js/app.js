//declare app module (REM: module = namespace)
var app = angular.module('app', ['ngRoute']); //ngRoute DI'ed into module -> $routeProvider

//config callback used to init routes, assign controllers, etc
//passing in routeProvider so we can use it to assign routes
app.config(function($routeProvider){
	console.log("configuring app...");
	
	//when inbox, inject view into ng-view, set controller and alias
	$routeProvider
      .when('/inbox', {
         templateUrl: 'views/inbox.html',
         controller: 'InboxCtrl',
         controllerAs: 'inbox'
      })
      .when('/inbox/email/:id', {
		 //notice :id, means object with id passed in url (so view is dynamic)
         templateUrl: 'views/email.html',
         controller: 'EmailCtrl',
         controllerAs: 'email'
      })
      .otherwise({
         redirectTo: '/inbox'
      });
	
});

//used to show debugging info on Routing Events in $rootScope
app.run(function($rootScope) {
   $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
      console.log(event, current, previous, rejection)
   })
});


function TestCtrl($scope) { //angular looks for function with ng-controller name "TestCtrl"
	$scope.title = "Write a title here...";
}
