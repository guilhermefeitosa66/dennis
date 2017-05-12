var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":3941,"methods":[{"el":33,"sc":2,"sl":27},{"el":40,"sc":2,"sl":35}],"name":"RegExpTests","sl":23}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_189":{"methods":[{"sl":27}],"name":"testPropertiesPattern","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":31},{"sl":32}]},"test_62":{"methods":[{"sl":35}],"name":"testMultiPropertiesPattern","pass":true,"statements":[{"sl":37},{"sl":38},{"sl":39}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [189], [], [189], [189], [189], [189], [], [], [62], [], [62], [62], [62], [], [], []]
