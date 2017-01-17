
hbuddy.controller('SessionCtrl', ['$scope', 'ServiceCall', function($scope, ServiceCall) {

        var sessionResponseData;
        var makeAjax = function (value) {

            /**
             * request object for get ajax call to populate data on to table
             * @type {{requestType: string, serviceUrl: string}}
             */
            var requestObj = {
                requestType: 'GET',
                serviceUrl: hbuddy.config.jsonUrl.sessions + value + ".json"
            };

            /**
             * service call is a ajax call to get data
             */
            ServiceCall.handleRequestData(requestObj).then(function (response) {

                //to put data onto session for table data
                $scope.session = response.data;

                sessionResponseData = response.data;

                //for counter display with each sub-tab
                countNoOfSessions(value);

            });
        };


        /**
         * calculates length to display data of count to sub tabs
         * @param value
         */
        var countNoOfSessions = function (value) {
            //calculates length to display data of count to sub tabs
            var length= sessionResponseData.sessionsData.length;

            if (value === "active") {
                $scope.activeEntries = length;
            }
            else if (value === "inactive") {
                $scope.inactiveEntries = length;
            }
            else if (value === "expired") {
                $scope.expiredEntries = length;
            }
            else {
                $scope.scheduledEntries = length;
            }
        };
        /**
         * sets the sub nav value
         * @param val
         */
        $scope.setFilter = function (val) {
            $scope.navValue = val;
            makeAjax(val);

        };
        /**
         * gets the sub nav value
         * @returns {nav value}
         */
        $scope.getFilter = function () {
            return $scope.navValue;

        };


        //Contains the filter options
        /**
         *
         * @type {{stores: *[]}}
         */
        $scope.filterOptions = {
            stores: [
                {id: 1, recruitedBy: 'All'},
                {id: 2, recruitedBy: 'Richa'},
                {id: 3, recruitedBy: 'Harnoor'},
                {id: 4, recruitedBy: 'Rajat'},
                {id: 5, recruitedBy: 'apoorv'},
                {id: 6, recruitedBy: 'palavika'}
            ]
        };


        //Mapped to the model to filter
        /**
         *
         * @type {{store: *}}
         */
        $scope.filterItem = {
            store: $scope.filterOptions.stores[0]
        };

        //Custom filter -
        /**
         *
         * @param data
         * @returns {boolean}
         */
        $scope.customFilter = function (data) {

            if ($scope.filterItem.store.recruitedBy === "All") {
                return true;
            }
            else if (data.recruitedBy === $scope.filterItem.store.recruitedBy) {

                return true;

            } else {
                return false;
            }
        };
    }]);

    