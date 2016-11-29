var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":39,"id":486,"methods":[{"el":25,"sc":2,"sl":23},{"el":29,"sc":2,"sl":27},{"el":33,"sc":2,"sl":31},{"el":37,"sc":2,"sl":35}],"name":"JavaBean","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_51":{"methods":[{"sl":23},{"sl":27},{"sl":31},{"sl":35}],"name":"validateErrors","pass":true,"statements":[{"sl":24},{"sl":28},{"sl":32},{"sl":36}]},"test_59":{"methods":[{"sl":23},{"sl":27},{"sl":31},{"sl":35}],"name":"validateSuccess","pass":true,"statements":[{"sl":24},{"sl":28},{"sl":32},{"sl":36}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [59, 51], [59, 51], [], [], [59, 51], [59, 51], [], [], [59, 51], [59, 51], [], [], [59, 51], [59, 51], [], [], []]
