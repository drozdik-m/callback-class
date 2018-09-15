exports.__esModule = true;
var assert_testing_1 = require("assert-testing");
var callback_1 = require("../src/callback");
function TestCallback() {
    var testing = new assert_testing_1.Testing("Callback");
    testing.StartTestingLog();
    var testCallback1 = new callback_1.Callback();
    var testInt = 0;
    var testFunction = function () { testInt++; };
    var testFunctionDouble = function () { testInt += 2; };
    //Simple test
    testCallback1.Add(testFunction);
    testing.Assert(testCallback1.Empty() === false);
    testing.Assert(testCallback1.Size() === 1);
    testCallback1.Execute();
    testing.Assert(testInt === 1);
    testCallback1.Execute();
    testing.Assert(testInt === 2);
    testCallback1.Add(testFunction);
    testCallback1.Add(testFunction);
    testCallback1.Execute();
    testing.Assert(testInt === 5);
    testCallback1.Clear();
    testing.Assert(testCallback1.Empty());
    testing.Assert(testCallback1.Size() === 0);
    testInt = 0;
    testCallback1.Add(testFunction);
    testCallback1.Add(testFunction);
    testCallback1.Execute();
    testing.Assert(testInt === 2);
    testCallback1.Add(testFunction);
    testCallback1.Execute();
    testing.Assert(testInt === 5);
    testInt = 0;
    testCallback1.Clear();
    testing.Assert(testCallback1.Empty());
    testing.Assert(testCallback1.Size() === 0);
    //Stress test (??? :D)
    for (var i = 0; i < 1000; i++)
        testCallback1.Add(testFunctionDouble);
    for (var i = 0; i < 1000; i++)
        testCallback1.Execute();
    testing.Assert(testInt === 2000000);
    testInt = 0;
    testCallback1.Clear();
    testing.Assert(testCallback1.Empty());
    testing.Assert(testCallback1.Size() === 0);
    //Execute with arguments test
    var testCallback2 = new callback_1.Callback();
    testInt = 0;
    var functionWithParameters = function (addThisNumber, addEvenThisNumber) {
        if (addThisNumber === void 0) { addThisNumber = 0; }
        if (addEvenThisNumber === void 0) { addEvenThisNumber = 0; }
        testInt += addThisNumber;
        testInt += addEvenThisNumber;
    };
    testCallback2.Add(functionWithParameters);
    testCallback2.Execute();
    testing.Assert(testInt === 0);
    testCallback2.Execute(1, 2);
    testing.Assert(testInt === 3);
    //Execute with even more arguments test
    var testCallback3 = new callback_1.Callback();
    var testString = "";
    testInt = 0;
    var functionWithParameters2 = function (addThisString1, addThisString2, addThisString3, addThisString4) {
        testString += addThisString1 + addThisString2 + addThisString3 + addThisString4;
        testInt++;
    };
    testCallback3.Add(functionWithParameters2);
    testCallback3.Execute("1", "2", "3", "4");
    testCallback3.Execute("5", "6", "7", "8");
    testCallback3.Execute("9", "0", "0", "0");
    testing.Assert(testString === "123456789000");
    testing.Assert(testInt === 3);
    testing.EndTestingLog();
}
TestCallback();
