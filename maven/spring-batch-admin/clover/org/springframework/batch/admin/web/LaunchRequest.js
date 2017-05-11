var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":2159,"methods":[{"el":28,"sc":2,"sl":26},{"el":32,"sc":2,"sl":30},{"el":36,"sc":2,"sl":34},{"el":40,"sc":2,"sl":38}],"name":"LaunchRequest","sl":21}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_46":{"methods":[{"sl":26},{"sl":30}],"name":"testLaunchSunnyDay","pass":true,"statements":[{"sl":27},{"sl":31}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [46], [46], [], [], [46], [46], [], [], [], [], [], [], [], [], [], [], []]
