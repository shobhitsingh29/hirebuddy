QUnit.test(function(assert){
//Common js testing
var testObj = {
        idNodeName: "SECTION",
        classNodeName: "DIV"
    },
    ajaxTestObj,
    ajaxTestCallBack,
    result,
    testDataUrl,
    testSuccessCallBack,
    getDataTest,
    templateData,
    templateDataObj,
    mockJsonData,
    mockJsonDataObj,
    nameArray = [],
    testMockJsonSuccessCallback;

/**
 * [ajaxTestCallBack call back function for ajax call to get the json data]
 * @param {object} object is passed which is having mock json data
 * @return {void}
 */
ajaxTestCallBack = function (response){
    ajaxTest(response);
}

ajaxTestObj = {
    url: HBuddy.config.services.recruiterInterviewerData,
    callBack: ajaxTestCallBack 
}
HBuddy.util.ajaxCall(ajaxTestObj);

var ajaxTest = function(response){
    QUnit.test("ajax test", function(assert){
    assert.equal(response.interviewerData[0].interviewerName, "Plavika Singh", "ajax call working");
});
}

/**
 * [testMockJsonSuccessCallback pushes the name of all the employer's name in the nameArray  and calls the getData method]
 * @param {object} object is passed which is having mock json data and the template is present
 * @return {void}
 */

testMockJsonSuccessCallback = function(response) {
    mockJsonData = response;
    var len = mockJsonData.data.length;
    for (var i = 0; i < len; i++) {
        nameArray.push(mockJsonData.data[i].name);
    }
    HBuddy.util.fetchDataAndTemplate(testDataUrl);
}


/**
 * [testSuccessCallBack is the call back function of mock json ajax call]
 * @param {object} object is passed which is having mock json data and the template is present
 * @return {void}
 */

testSuccessCallBack = function(response) {
    getDataTest(response);
}

testDataUrl = {
    templateUrl: HBuddy.config.templateUrl.adminInterviewer,
    dataUrl: HBuddy.config.services.adminInterviewerData,
    containerId: "table-container",
    callBack: testSuccessCallBack
}
mockJsonDataObj = {
    url: HBuddy.config.services.adminInterviewerData,
    callBack: testMockJsonSuccessCallback
}

HBuddy.util.ajaxCall(mockJsonDataObj);



//to test for id
QUnit.test("get by id", function(assert) {
    result = HBuddy.util.getDomElement("#test-id").nodeName;
    assert.equal(result, testObj.idNodeName, "node name as expected");
});
//to test for class
QUnit.test("get by class", function(assert) {
    result = HBuddy.util.getDomElement(".test-class")[0].nodeName;
    assert.equal(result, testObj.classNodeName, "node name as expected");
});
//to test for tag name
QUnit.test("get by tag name", function(assert) {
    result = HBuddy.util.getDomElement("article")[0].innerHTML;
    assert.equal(result, "test", "correct node fetched");
});

//to test for fetch Data and Template
getDataTest = function(response) {
    var i,
        elementValue = "",
        arrayElementValue = "",
        counter = response.response.data.length;
    for (i = 0; i < counter; i++) {
        elementValue = response.response.data[i].name;
        arrayElementValue = nameArray[i];
        QUnit.test("fetchDataAndTemplate Testing", function(assert) {
            assert.equal(elementValue, arrayElementValue, "correct mock json received");
        });
    }

}
})
QUnit.test("Attach event", function(assert) {
    expect(2);
    var testClickFunction;
     testClickFunction = function(clickedEle,event)
    {
     assert.equal(clickedEle, "click", "correct event happend!");   
     assert.equal(clickedEle, HBuddy.util.getDomElement(".test-click")[0], "correct event happend!");   
    }
    HBuddy.util.attachEvent("click",HBuddy.util.getDomElement("#test-id"),".test-click",testClickFunction);
   
    
});
