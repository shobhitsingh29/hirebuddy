hbuddy.controller('HeaderCtrl', ['$scope', 'UserDetails',
    'StoreInSession',
    function($scope, UserDetails, StoreInSession) {
        var fetchedUserDetails = UserDetails.fetchDetails();
        
        $scope.logged = fetchedUserDetails.isLogged1;
        $scope.user = fetchedUserDetails.storeName1;
        $scope.logout = function() {
            $scope.logged = false;
            sessionStorage.clear();
        }
        
    }
]);
