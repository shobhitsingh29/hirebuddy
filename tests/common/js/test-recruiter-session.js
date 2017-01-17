//Common js testing
QUnit.module( "recruiter session js testing" );

var result,
    optionSelected = "ALL",
    optionSelected1 = "sameer",
    optionSelected2 = "ankita",
    optionSelected3 = "saurabh";


QUnit.test("populate data", function (assert) {

    result = HBuddy.recruiterSession.__test__.dropDownOptionSelect();


assert.equal(result, optionSelected, "result 'ALL'  as expected");
 assert.equal(result, optionSelected1, "result 'sameer'  as expected");

assert.equal(result, optionSelected2, "result 'ankita'  as expected");

assert.equal(result, optionSelected3, "result 'saurabh'  as expected");

    });
