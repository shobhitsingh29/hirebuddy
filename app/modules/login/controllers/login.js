hbuddy.controller('LoginCtrl', ['$scope', '$http', '$state',
    'ServiceCall', 'UserDetails', 'hbuddyConstants', 'StoreInSession',
    function($scope, $http, $state, ServiceCall, UserDetails,
        hbuddyConstants, StoreInSession) {
        $scope.rememberMe = false;
        $scope.loginSuccess = true;
        $scope.showPassword = false;
        $scope.login = function() {
            var loginReqObj,
                storeToken,
                serviceResponse,
                loggedUserDetails;
            loginReqObj = {
                requestType: 'GET',
                serviceUrl: hbuddy.config.services.ldapServerUrl,
                requestData: {
                    username: $scope.username,
                    password: $scope.password
                }
            };

            serviceResponse = ServiceCall.handleRequestData(loginReqObj);
            serviceResponse.then(function(response) {
                $scope.loginSuccess = response.data.success;
                if ($scope.loginSuccess === true) {
                    loggedUserDetails = UserDetails.LoggedUser(response);
                    loggedUserDetails.isLogged;
                    loggedUserDetails.storeToken();
                    loggedUserDetails.storeName();
                    loggedUserDetails.storeRole();
                    StoreInSession.setToken(hbuddyConstants.token, UserDetails.fetchDetails.storeToken1);
                    // if ($scope.rememberMe === true) {
                    //     RememberMe.setRememberMe(storeToken);
                    // }
                    $state.go('dashboard');
                } else {
                    $state.go('login');
                }
            });
        };
    }
]);
