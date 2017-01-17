hbuddy.factory('RememberMe',['hbuddyConstants',function(hbuddyConstants) {
    return {
        setRememberMe: function(token) {
                var expiryDate = new Date();
                expiryDate.setTime(expiryDate.getTime() + hbuddyConstants.randomExpiryDate);
                var expires = "expires=" + expiryDate.toUTCString();
                document.cookie = "token=" + token + ";" + expires;
            }
         };
}]);