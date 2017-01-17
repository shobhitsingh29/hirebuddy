hbuddy.factory('LoginCheck',['$q','StoreInSession',
	function($q,StoreInSession) {
		return {
			check: function(){
				var token = StoreInSession.getToken("token");
				if(token) return  $q.when(token);
				
				else return $q.reject();
				
			}
		}
}]);