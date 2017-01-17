hbuddy.factory('UserDetails', function() {
    var token, name, role;
    return {
        LoggedUser: function(response) {
            return {
                isLogged: true,
                storeToken: function() {
                    token = response.data.user.token;
                },
                storeName: function() {
                    name = response.data.user.name;
                },
                storeRole: function() {
                    role = response.data.user.role;
                }
            }
        },
        fetchDetails: function() {
            return {
                isLogged1: true,
                storeToken1: token,
                storeName1: name,
                storerole1: role
            }
        }
    };
});
