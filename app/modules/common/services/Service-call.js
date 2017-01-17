hbuddy.factory('ServiceCall', ['$http', function($http) {
    return {
        handleRequestData: function(reqObject) {
            return $http({
                method: reqObject.requestType || 'GET',
                url: reqObject.serviceUrl,
                data: reqObject.requestData || null,
                headers: function() {
                    if (reqObject.requestType === 'POST') {
                        return {
                            'Content-Type': 'application/json'
                        };
                    }
                        else if (reqObject.requestType === 'delete') {
                        return {

                            'Content-Type': 'application/json'
                        };
                    }
                     else {
                        return null;
                    }
                },
                config: {
                    method: reqObject.method || null,
                    url: reqObject.url || null,
                    params: reqObject.params || null,
                    data: reqObject.data || null,
                    headers: reqObject.headers || null,
                    responseType: reqObject.responseType || null,
                    xsrfHeaderName: reqObject.xsrfHeaderName || null,
                    xsrfCookieName: reqObject.xsrfCookieName || null,
                    transformRequest: reqObject.transformRequest || null,
                    transformResponse: reqObject.transformResponse || null,
                    paramSerializer: reqObject.paramSerializer || null,
                    cache: reqObject.cache || null,
                    timeout: reqObject.timeout || null,
                    withCredentials: reqObject.withCredentials || null,
                },
             
            });
        }
    };
}]);