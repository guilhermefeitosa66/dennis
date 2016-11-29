var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":35,"id":203,"methods":[{"el":13,"sc":2,"sl":11},{"el":17,"sc":2,"sl":15},{"el":21,"sc":2,"sl":19},{"el":25,"sc":2,"sl":23},{"el":29,"sc":2,"sl":27},{"el":33,"sc":2,"sl":31}],"name":"JavaBean","sl":3}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_11":{"methods":[{"sl":11},{"sl":15},{"sl":19},{"sl":23},{"sl":27},{"sl":31}],"name":"group","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":20},{"sl":24},{"sl":28},{"sl":32}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [11], [11], [], [], [11], [11], [], [], [11], [11], [], [], [11], [11], [], [], [11], [11], [], [], [11], [11], [], [], []]
