var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":38,"id":3013,"methods":[{"el":36,"sc":2,"sl":31}],"name":"ExampleTasklet","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_140":{"methods":[{"sl":31}],"name":"testFakeRestart","pass":true,"statements":[{"sl":32},{"sl":35}]},"test_205":{"methods":[{"sl":31}],"name":"testAbandonedWhenCheckJobDuringLaunchFails","pass":true,"statements":[{"sl":32},{"sl":35}]},"test_214":{"methods":[{"sl":31}],"name":"testLaunchWithJobRunningButFails","pass":true,"statements":[{"sl":32},{"sl":35}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [205, 140, 214], [205, 140, 214], [], [], [205, 140, 214], [], [], []]
