var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":59,"id":150,"methods":[{"el":38,"sc":5,"sl":35},{"el":42,"sc":5,"sl":40},{"el":46,"sc":5,"sl":44},{"el":57,"sc":5,"sl":48}],"name":"Region","sl":19}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_33":{"methods":[{"sl":40},{"sl":44},{"sl":48}],"name":"test","pass":true,"statements":[{"sl":41},{"sl":45},{"sl":49},{"sl":50},{"sl":51}]},"test_72":{"methods":[{"sl":35},{"sl":44},{"sl":48}],"name":"invalidLocationConstraint","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":45},{"sl":49},{"sl":50},{"sl":55}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [72], [72], [72], [], [], [33], [33], [], [], [33, 72], [33, 72], [], [], [33, 72], [33, 72], [33, 72], [33], [], [], [], [72], [], [], [], []]
