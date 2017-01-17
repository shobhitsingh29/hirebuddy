hbuddy.directive('popUp',['ngDialog',"$http",'$q',function(ngDialog,$http,$q){
    return{
        restrict: 'A',
        scope:{
            url:'@',
            data:'='
        },
        link: function(scope,element){


            element.on('click',function(){

                ngDialog.open({
                    template: scope.url,
                    closeByDocument: false,
                    resolve: {
                        dep: function depFactory() {

                            if (scope.data) {
                                return $q.when(scope.data);
                            }
                            else {
                                return $q.reject();
                            }
                        }

                    },

                    data:scope.data
                 });


            });
        }

    };
}]);


