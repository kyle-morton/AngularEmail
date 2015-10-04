//now we can use <inbox></index> inside our html!
//when app runs, angular will replace the <inbox> with 
//the below directive!
app.directive('inbox', function () {
   return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: "js/directives/views/inbox.tmpl.html",
      controllerAs: 'inbox',
      controller: function (InboxFactory) {
		 //controller acts as pass-thru to the 
		 //backing factory
         this.messages = [];
         this.goToMessage = function (id) {
            InboxFactory.goToMessage(id);
         };
         this.deleteMessage = function (id, index) {
            InboxFactory.deleteMessage(id, index);
         };
         InboxFactory.getMessages()
            .then( angular.bind( this, function then() {
			   //then() used as success for a JS promise
			   //got messages so bind the factory messages
			   //to the ctlr array
               this.messages = InboxFactory.messages;
            })	);
      },
      link: function (scope, element, attrs, ctrl) {
         /*
         by convention we do not $ prefix arguments to the link function
         this is to be explicit that they have a fixed order
         */
      }
   }
});