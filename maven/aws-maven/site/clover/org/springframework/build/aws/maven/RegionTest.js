var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":46,"id":689,"methods":[{"el":35,"sc":5,"sl":25},{"el":40,"sc":5,"sl":37},{"el":44,"sc":5,"sl":42}],"name":"RegionTest","sl":23}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_33":{"methods":[{"sl":25},{"sl":42}],"name":"test","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":29},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":43}]},"test_72":{"methods":[{"sl":37}],"name":"invalidLocationConstraint","pass":true,"statements":[{"sl":39}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [33], [], [33], [33], [33], [33], [33], [33], [33], [33], [], [], [72], [], [72], [], [], [33], [33], [], [], []]
