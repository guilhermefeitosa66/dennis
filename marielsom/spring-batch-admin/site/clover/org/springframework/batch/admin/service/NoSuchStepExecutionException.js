var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":31,"id":1125,"methods":[{"el":25,"sc":2,"sl":23},{"el":29,"sc":2,"sl":27}],"name":"NoSuchStepExecutionException","sl":21}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_34":{"methods":[{"sl":27}],"name":"testGetSingleBatchStepExecutionThatDoesNotExist","pass":true,"statements":[{"sl":28}]},"test_64":{"methods":[{"sl":27}],"name":"testGetProgressForStepExecutionNotExists","pass":true,"statements":[{"sl":28}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [34, 64], [34, 64], [], [], []]
