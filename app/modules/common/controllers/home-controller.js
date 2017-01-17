hbuddy.controller('HomeCtrl',['$state','$scope',function($state,$scope){
		$scope.$state = $state;
		$scope.navBurger = false;
		$scope.toggleNavBurger = function(evt){
			evt.stopImmediatePropagation();
			console.log("inside toggleNavBurger");
            $scope.navBurger = !($scope.navBurger);
        }
        $scope.hideNavBurger = function(){
        	if($scope.navBurger){
        		$scope.navBurger = false;
        	}
        }
}]);