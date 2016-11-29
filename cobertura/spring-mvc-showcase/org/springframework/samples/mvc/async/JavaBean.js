var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":30,"id":63,"methods":[{"el":12,"sc":2,"sl":9},{"el":16,"sc":2,"sl":14},{"el":20,"sc":2,"sl":18},{"el":24,"sc":2,"sl":22},{"el":28,"sc":2,"sl":26}],"name":"JavaBean","sl":3}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_45":{"methods":[{"sl":9}],"name":"view","pass":true,"statements":[{"sl":10},{"sl":11}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [45], [45], [45], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
