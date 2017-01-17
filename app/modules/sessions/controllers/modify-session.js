
/**
 * Created by ssi238 on 4/12/2016.
 */
/**
 * Created by ssi238 on 4/3/2016.
 */
hbuddy.controller('ModifySessionCtrl',['$scope','$http','$state','ServiceCall','ngDialog',function($scope,$http,$state,ServiceCall,ngDialog){

    $scope.modifySession = function(form){
        var reqObj = {
            requestType: 'POST',
                serviceUrl: hbuddy.config.serviceUrl.sessions,
            requestData: {
                isScheduled: true,
                candidateName: $scope.candidateDetails.candidateName,
                email: $scope.ngDialogData.email,
                phone: $scope.ngDialogData.phone,
                recruitedBy: $scope.ngDialogData.recruitedBy,
                status : "Pending",
                appliedFor: $scope.ngDialogData.appliedFor,
                years: $scope.ngDialogData.years,
                sendDate: $scope.ngDialogData.sendDate,
                action: {
                    edit:"edit"
                },
                id: $scope.ngDialogData.id

            }


        };

        ServiceCall.handleRequestData(reqObj).then(function(response){
            $state.reload();
            ngDialog.close();
        });
    }


}]);