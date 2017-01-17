hbuddy.controller('RecruiterCtrl',['$scope','$filter','ServiceCall',function($scope,$filter,ServiceCall){
	$scope.setFilter = function(val){
			$scope.navValue = val;
            makeAjax(val);
	};

    var recruiterResponseData,

 countNoOfSessions = function (value) {
            //calculates length to display data of count to sub tabs
            if (value === "active") {
                $scope.activeEntries = recruiterResponseData.recruiterData.length;
            }
            else if (value === "inactive") {
                $scope.inactiveEntries = recruiterResponseData.recruiterData.length;
            }
        };

	 makeAjax = function(value){
        var obj = {
            requestType: 'GET',
            serviceUrl: hbuddy.config.jsonUrl.recruiters + value + ".json"
        }

        ServiceCall.handleRequestData(obj).then(function(response){
            $scope.recruiter =  response.data;
             recruiterResponseData = response.data;
             countNoOfSessions(value);
        });

         
    };
	
	$scope.getFilter = function(){
		return $scope.navValue;
	}

}]);

