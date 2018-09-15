declare module "assert-testing";
import { Testing } from "assert-testing";
import { Callback } from "../src/callback";


function TestCallback()
{
    let testing = new Testing("Callback");
    testing.StartTestingLog();
    
    let testCallback1 = new Callback();
    let testInt: number = 0;
    let testFunction: Function = function () { testInt++; };
    let testFunctionDouble: Function = function () { testInt += 2; };

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
    for (let i = 0; i < 1000; i++)
        testCallback1.Add(testFunctionDouble);
    for (let i = 0; i < 1000; i++)
        testCallback1.Execute();
    testing.Assert(testInt === 2000000);
    testInt = 0;
    testCallback1.Clear();
    testing.Assert(testCallback1.Empty());
    testing.Assert(testCallback1.Size() === 0);

    //Execute with arguments test
    let testCallback2 = new Callback();
    testInt = 0;
    let functionWithParameters = function (addThisNumber: number = 0, addEvenThisNumber: number = 0)
    {
        testInt += addThisNumber;
        testInt += addEvenThisNumber;
    };
    testCallback2.Add(functionWithParameters);
    testCallback2.Execute();
    testing.Assert(testInt === 0);
    testCallback2.Execute(1, 2);
    testing.Assert(testInt === 3);

    //Execute with even more arguments test
    let testCallback3 = new Callback();
    let testString = "";
    testInt = 0;
    let functionWithParameters2 = function (addThisString1: string, addThisString2: string, addThisString3: string, addThisString4: string)
    {
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



