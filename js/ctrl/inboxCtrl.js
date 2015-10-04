//initialize the InboxCtrl controller and it's vars
//Notice we inject the InboxFactory so we can reference in controller
app.controller('InboxCtrl', function InboxCtrl ($scope, InboxFactory) {
    
    'use strict'; //js executed in strict mode

   //bind vars, functions to the controller instance, not $scope	
   var vm = this;
	
   // initialize the title property to an array for the view to use
   vm.title = "My Inbox";
   
   vm.click = function() {
       console.log("Value: " + this.title);
   }        
   
   // //Hook up the factory to get the JSON messages
   // //Use factory like static class, getMessages() returns promise!
    // InboxFactory.getMessages()
    //   .success(function(jsonData, statusCode) {
    //      console.log('The request was successful!', statusCode, jsonData);
    //      // Now add the Email messages to the controller's scope
    //      vm.emails = jsonData;
   // });
   
   return vm;
});