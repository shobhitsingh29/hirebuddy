
hbuddy.factory('HBuddyInterceptor',['$q','$location','$injector','LoginCheck',function($q, $location,$injector,LoginCheck) {

	var interceptor = {
	
		'request': function(config) { // Successful request method

			LoginCheck.check().then(function(response){
				
			},function(response){
					
					if(!response){
						$location.path('/login');	
					}
			})
			return config; // or $q.when(config);
		},

		'response': function(response) { // successful response

			return response; // or $q.when(config);
		},
		
		'requestError': function(rejection) {
			//an error happened on the request
			return rejection; 
		},

		'responseError': function(response) {

			if(response.status ===401 || response.status === 403)
			{
				$state.go("/login");
			}
			return response;

			if(response.status ===404)
			{
				$state.go("/404");
			}
			if(response.status ===500)
			{
				console.log("Your request could not be completed because there was a problem with the service.")
			}
			if(response.status ===503)
			{
				console.log("There's a problem with the service right now. Please try again later..")
			} 

		} 	
	};
	return interceptor;
}]);