hbuddy.controller('PopUpCtrl',['$scope','ngDialog',
function($scope,ngDialog){
// $scope.url = "/modules/sessions/views/add-session.html";
var globalID=0;
globalID += 1;
this.latest = 'ngdialog' + globalID;
}]);