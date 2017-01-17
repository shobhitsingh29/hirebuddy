hbuddy.controller('InterviewerCtrl',['$scope','$filter','ServiceCall',
	function($scope,$filter,ServiceCall){
		$scope.setFilter = function(val){
			$scope.navValue = val;
		}

		$scope.getFilter = function(){
			return $scope.navValue;
		}

		$scope.setActiveEntries = function(){
			$scope.activeEntries = $filter('filter')
			($scope.interviewer.interviewerData, {isActive: true});
		};

		$scope.setArchiveEntries = function(){
			$scope.archiveEntries = $filter('filter')
			($scope.interviewer.interviewerData, {isArchive: true});
		};
		$scope.interviewerSelect = function(val){
			var s = $filter('filter')
			($scope.interviewer.interviewerData, {oracleid: val});
				$scope.interviewee=s[0];
			console.log($scope.interviewee);

		};

		var obj = {
			requestType: 'GET',
			serviceUrl: hbuddy.config.jsonUrl.interviewers
		}

		ServiceCall.handleRequestData(obj).then(function(response){
			$scope.interviewer =  response.data;
			$scope.setActiveEntries();
			$scope.setArchiveEntries();
		});

		$scope.revokeAccess = function(index){
			$scope.interviewer.interviewerData[index].isActive = false;
			$scope.interviewer.interviewerData[index].isArchive = true;
			$scope.interviewer.interviewerData[index].link = "Grant Access";
			$scope.setActiveEntries();
			$scope.setArchiveEntries();

	};
	$scope.grantAccess = function(index){
		$scope.interviewer.interviewerData[index].isActive = true;
		$scope.interviewer.interviewerData[index].isArchive = false;
		$scope.interviewer.interviewerData[index].link = "Revoke Access";
		$scope.setActiveEntries();
		$scope.setArchiveEntries();	

	};
}]);
