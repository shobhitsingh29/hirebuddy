/**
 * Created by ssi238 on 4/15/2016.
 */
hbuddy.directive('datePicker',['ngDialog',"$http",'$q',function(ngDialog,$http,$q){
    return{
        restrict: 'A',
        scope:{
            date:'=',
            data:'='
        },
        link: function(scope,element){


            element.on('click',function(){

                ngDialog.open({
                    template: scope.url,
                    closeByDocument: false,
                    controller: function Ctrl(dep) {

                    },
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


