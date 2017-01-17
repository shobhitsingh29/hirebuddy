hbuddy.factory('CommonServices',function(){
    
    var userDetails = { 
        success: true, 
        user: { 
            name: "Sameer Gupta",
            designation: "Manager",
            role : "systemAdmin"
        },
         isLogged: true
    },
    
    checkAccess = function (accessFor) {
        var accessArray=self[userDetails.user.role];
        if(accessArray.indexOf(accessFor) + 1){
            return true;
        }
    },
    systemAdmin = [
        "sessions",
        "candidates",
        "recruiters",
        "interviewers"
    ],
        

     recruiterAdmin = [
        "candidates",
        "sessions",
        "recruiters"
    ],

    recruiter = [
        "candidates",
        "sessions",
        "interviewers"
    ]   
    return{
        userDetails: userDetails,
        checkAccess: checkAccess
    }

});