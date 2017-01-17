
/**
 * Created by ssi238 on 4/3/2016.
 */
hbuddy.controller('ModifyRecruiterCtrl',['$scope','$http','$state','ServiceCall','ngDialog',function($scope,$http,$state,ServiceCall,ngDialog){

    $scope.addSession = function(form){
        var reqObj = {
            requestType: 'DELETE',
            serviceUrl: 'http://localhost:3000/recruiterData',
            requestData: {

                id: $scope.ngDialogData.id
            }

        };

        ServiceCall.handleRequestData(reqObj).then(function(response){
            $state.reload();
            ngDialog.close();
        })
    }


}]);