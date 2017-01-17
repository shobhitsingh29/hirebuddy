hbuddy.factory('StoreInSession', function() {
    return {
        setToken: function(key, value) {
            sessionStorage.setItem(key, value);
        },
        getToken: function(key) {
            return sessionStorage.getItem(key);
        }
    };
});