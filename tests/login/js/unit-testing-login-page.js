QUnit.test("Testing initializeForm ", function( assert ) {
    assert.equal(HBuddy.hireBuddyLogin.__test__.testingInitializeForm(), "Success" ,"Function executed !" );
});

QUnit.test("Testing toggleRememberMe ", function( assert ) {
    var events={
        target:{
            checked:true
        }
    };
    assert.equal(HBuddy.hireBuddyLogin.__test__.testingToggleRememberMe(events),"Browser cache on !" ,"remember me turned on !" );
    events={
        target:{
            checked:false
        }
    };
    assert.equal(HBuddy.hireBuddyLogin.__test__.testingToggleRememberMe(events),"Browser cache off !" ,"remember me turned off !" );
});

QUnit.test("Testing processForm ", function( assert ) {
    
    var events={
        preventDefault: function(){}
    };
    
    assert.equal(HBuddy.hireBuddyLogin.__test__.testingProcessForm(events), "Success" ,"Function executed !" );
});

// QUnit.test("Testing validateResponse ", function( assert ) {
    
//     data= {
//         success: true,
//         user:{
//             name: "Sameer Gupta",
//             designation: "Manager",
//             role:"System Admin"
//         }
        
//     }
//     assert.equal(HBuddy.hireBuddyLogin.__test__.testingValidateResponse(data), "Success" ,"Function executed !" );
// });


