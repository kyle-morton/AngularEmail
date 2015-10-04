//create factory, uses $http for ajax calls
app.factory('InboxFactory', function InboxFactory ($q, $http, $location) {
	
   'use strict';    //tells browser to run in strict mode (no undeclared vars)
      
   //rem: exports used to explicitely state the scope
   //pass back a seperate object that contains the useful
   //methods and data!
   var exports = {};
   
   exports.message = [];
   
   //open the selected message
   exports.goToMessage = function(id) {
      if ( angular.isNumber(id) ) {
        console.log('inbox/email/' + id)
        $location.path('inbox/email/' + id)
      }
   }
   
   //delete selected message
   exports.deleteMessage = function (id, index) {
         this.messages.splice(index, 1);
   }

   exports.getMessages = function () {
         var deferred = $q.defer();
         $http.get('json/emails.json')
            .success(function (data) { //on success ajax call
               exports.messages = data;
               console.log("DATA RETURNED: " + JSON.stringify(data));
               deferred.resolve(data);
            })
            .error(function (data) {
               deferred.reject(data);
            });
         return deferred.promise;
      };

   return exports;
});