
hbuddy.config(['$stateProvider','$urlRouterProvider','$httpProvider'
 ,function($stateProvider,$urlRouterProvider,$httpProvider){

        $httpProvider.interceptors.push('HBuddyInterceptor');


$urlRouterProvider.otherwise('/login');

$stateProvider
.state('login',{
    url:"/login",
    views: {
        header : {
            templateUrl: '/modules/common/partials/_header.html'
        },
        login : {
            templateUrl: '/modules/login/views/login.html'
        },
        footer : {
            templateUrl: '/modules/common/partials/_footer.html'
        }
    }
})
.state('dashboard',{
    url:"/dashboard",
    views:{
        header : {
            templateUrl: '/modules/common/partials/_header.html'
        },
        nav : {
            templateUrl: '/modules/common/partials/_navigation.html'
        },
        footer : {
            templateUrl: '/modules/common/partials/_footer.html'
        },
        content:{
            templateUrl:hbuddy.config.templateUrl.sessions,
            controller: function($state,$rootScope,CommonServices){
                $rootScope.$on('$stateChangeStart',
                    function(event, toState, toParams, fromState, fromParams){

                        if((toState.name==='login') && (fromState.name==='dashboard') )
                        {
                            if(CommonServices.userDetails.isLogged){
                                event.preventDefault();
                            }
                        }

                    });
            },
            resolve: {
                checkLogin : function(LoginCheck){
                     return LoginCheck.check()
                }
            }
        }
    }
})
.state('dashboard.candidate', {
    url: '/candidate',
    views: {
      content : {
        templateUrl:hbuddy.config.templateUrl.candidates,
         resolve: {
                checkLogin : function(LoginCheck){
                     return LoginCheck.check()
                }
            }
    }
}
})
.state('dashboard.interviewer', {
    url: '/interviewer',
    views:{

     'content' : {
        templateUrl:hbuddy.config.templateUrl.interviewers,
         resolve: {
                checkLogin : function(LoginCheck){
                     return LoginCheck.check()
                }
            }
    }
}
})
.state('dashboard.recruiter', {
    url: '/recruiter',
    views: {
        'content' : {
            templateUrl:hbuddy.config.templateUrl.recruiters,
             resolve: {
                checkLogin : function(LoginCheck){
                     return LoginCheck.check()
                }
            }
        }
    }
})
.state('404',{
    url: '/404',
    views: {
        content : {
            templateUrl: '/modules/common/404.html'
        }
    }
})

}]);