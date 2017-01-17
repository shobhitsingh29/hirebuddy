 /*!
    * addPopUpTest.js 
    * This file contains the test cases for Validation function which validate the form's data 
      (only one input field which captures the Oracle ID of User).
    * 
    * @project   HIRE BUDDY
    * @date      2016-02-23 
    * @author    SUNITA KUMARI, SapientNitro <skumari24@sapient.com>
    * @licensor  SAPIENTNITRO
    * @site      HIRE BUDDY
    *
*/

 //------------------------Qunit Testcases for success scenario----------------------------------//
 QUnit.test('Test Oracle ID (Success scenario)', function(assert) {
     
    assert.equal(HBuddy.addPopUp.__test__.validationform(123456), 1, 'Correct Oracle ID with 6-digits'); 
   assert.equal(HBuddy.addPopUp.__test__.validationform(1234567), 1, 'Correct Oracle ID with 7-digits'); 
    assert.equal(HBuddy.addPopUp.__test__.validationform(12345678), 1, 'Correct Oracle ID with 8-digits');  
});

 //------------------------Qunit Testcases for failure scenario----------------------------------//
QUnit.test('Test Oracle ID (Failure scenario)', function(assert) {    
    assert.equal(HBuddy.addPopUp.__test__.validationform(''), 3, 'Incorrect result for null value'); 
    assert.equal(HBuddy.addPopUp.__test__.validationform('char'),2, 'Incorrect Oracle ID with characters');
    assert.equal(HBuddy.addPopUp.__test__.validationform('char'+123),2, 'Incorrect Oracle ID with characters and digits');
    assert.equal(HBuddy.addPopUp.__test__.validationform(12345),2, 'Incorrect Oracle ID with 5 digits');
    assert.equal(HBuddy.addPopUp.__test__.validationform(123456789),2, 'Incorrect Oracle ID with 5 digits');
    
});
       