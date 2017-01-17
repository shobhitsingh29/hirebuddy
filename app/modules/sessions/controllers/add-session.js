/**
 * Created by ssi238 on 4/3/2016.
 */
 hbuddy.controller('AddSessionCtrl',['$scope','$http','$state','ngDialog','ServiceCall',function($scope,$http,$state,ngDialog,ServiceCall){

     /**
	  *
	  * @param form
      */
 	$scope.addSession = function(form){
 		var reqObj = {
 			requestType: 'POST',
 			serviceUrl: hbuddy.config.serviceUrl.sessions,
 			requestData: {
 				isActive: true,
 				candidateName: $scope.candidateName,
 				email: $scope.email,
 				phone: $scope.phone,
 				recruitedBy: $scope.recruitedBy,
 				status : "Pending",
 				appliedFor: $scope.careerStage,
 				sendDate: $scope.sendDate,
				years: $scope.years,
 				action: {
 					edit:"edit"
 				}
 			}

 		};


 		ServiceCall.handleRequestData(reqObj).then(function(response){
 			$state.reload();
 			ngDialog.close();
 		});
 	}


 }]);