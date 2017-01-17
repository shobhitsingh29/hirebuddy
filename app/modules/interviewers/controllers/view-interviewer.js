/**
 * Created by ssi238 on 4/14/2016.
 */
/**
 * Created by ssi238 on 4/3/2016.
 */
hbuddy.controller('ViewInterviewerCtrl',['$scope','$http','$state','ngDialog','ServiceCall',function($scope,$http,$state,ngDialog,ServiceCall){

    $scope.addInterviewer = function(form){
        var reqObj = {
            requestType: 'POST',
            serviceUrl: 'http://localhost:3000/interviewerData',
            requestData: {
                isActive: true,
                name: $scope.ngDialogData.name,
                details:{
                    email: $scope.ngDialogData.details.email,
                    levelOfCert: $scope.ngDialogData.details.levelOfCert,
                    certifiedBy: $scope.ngDialogData.details.certifiedBy,
                    cDate: $scope.ngDialogData.details.cDate,
                    lastInterview: $scope.ngDialogData.details.lastInterview,
                    interviewTaken:  $scope.ngDialogData.details.interviewTaken

                },
                oracleid: $scope.ngDialogData.oracleid,
                title: $scope.ngDialogData.title,
                link: "Revoke Access",
                id: $scope.ngDialogData.id

            }
        };


            ServiceCall.handleRequestData(reqObj).then(function(response){
            $state.reload();
            ngDialog.close();
        })
    }


}]);