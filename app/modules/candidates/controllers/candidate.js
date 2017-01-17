
	hbuddy.controller('Candidate',['$scope','ServiceCall',function($scope,ServiceCall){
		var obj = {
			requestType: 'GET',
			serviceUrl: hbuddy.config.jsonUrl.candidates
		}
		ServiceCall.handleRequestData(obj).then(function(response){
			$scope.candidate =  response.data;
		});
	}]);