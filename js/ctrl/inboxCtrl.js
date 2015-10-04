//initialize the InboxCtrl controller and it's vars
app.controller('InboxCtrl', function ($scope) {

   //bind vars, functions to the controller instance, not $scope	
   var vm = this;
	
   // initialize the title property to an array for the view to use
   vm.title = "This is a title";
   
   vm.click = function() {
       console.log("Value: " + this.title);
   }            
   
   return vm;
});