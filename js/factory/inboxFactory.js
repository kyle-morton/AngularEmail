//create factory, uses $http for ajax calls
app.factory('InboxFactory', function InboxFactory ($http) {
	
   //rem: exports used to explicitely state the scope
   //pass back a seperate object that contains the useful
   //methods and data!
   var exports = {};

   exports.getMessages = function () {
	   //makes ajax call using $http object
      return $http.get('json/emails.json')
         .success(function(data) {
           console.log("Data Returned: " + JSON.stringify(data));
         })
         .error(function (data) {
            console.log('There was an error!', data);
         });
   };

   return exports;
});