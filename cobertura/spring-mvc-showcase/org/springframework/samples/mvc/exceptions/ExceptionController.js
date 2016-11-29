var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":26,"id":262,"methods":[{"el":14,"sc":2,"sl":11},{"el":19,"sc":2,"sl":16},{"el":24,"sc":2,"sl":21}],"name":"ExceptionController","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_30":{"methods":[{"sl":16}],"name":"globalExceptionHandler","pass":true,"statements":[{"sl":18}]},"test_47":{"methods":[{"sl":11},{"sl":21}],"name":"controllerExceptionHandler","pass":true,"statements":[{"sl":13},{"sl":23}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [47], [], [47], [], [], [30], [], [30], [], [], [47], [], [47], [], [], []]
