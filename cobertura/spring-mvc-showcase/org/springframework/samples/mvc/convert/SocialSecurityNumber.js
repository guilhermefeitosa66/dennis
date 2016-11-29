var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":197,"methods":[{"el":9,"sc":2,"sl":7},{"el":14,"sc":2,"sl":11},{"el":18,"sc":2,"sl":16}],"name":"SocialSecurityNumber","sl":3}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_48":{"methods":[{"sl":7},{"sl":16}],"name":"valueOf","pass":true,"statements":[{"sl":8},{"sl":17}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [48], [48], [], [], [], [], [], [], [], [48], [48], [], [], []]
