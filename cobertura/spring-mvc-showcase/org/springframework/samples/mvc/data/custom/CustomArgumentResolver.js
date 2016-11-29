var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":22,"id":237,"methods":[{"el":14,"sc":2,"sl":12},{"el":20,"sc":2,"sl":16}],"name":"CustomArgumentResolver","sl":10}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_11":{"methods":[{"sl":12}],"name":"group","pass":true,"statements":[{"sl":13}]},"test_6":{"methods":[{"sl":12},{"sl":16}],"name":"param","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [11, 6], [11, 6], [], [], [6], [], [6], [6], [], [], []]
