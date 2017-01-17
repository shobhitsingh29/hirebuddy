var hbuddy = angular.module("HBuddyApp", ['ngDialog','ui.router','720kb.datepicker']);
hbuddy.run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on("$stateChangeError", function() {
        $state.go('login');
    });
}]);


