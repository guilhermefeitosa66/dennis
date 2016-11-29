var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":33,"id":379,"methods":[{"el":14,"sc":2,"sl":12},{"el":18,"sc":2,"sl":16},{"el":22,"sc":2,"sl":20},{"el":26,"sc":2,"sl":24},{"el":31,"sc":2,"sl":28}],"name":"JavaBean","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_38":{"methods":[{"sl":12},{"sl":20},{"sl":28}],"name":"byProducesXmlExtension","pass":true,"statements":[{"sl":13},{"sl":21},{"sl":30}]},"test_56":{"methods":[{"sl":12},{"sl":20},{"sl":28}],"name":"byProducesAcceptJson","pass":true,"statements":[{"sl":13},{"sl":21},{"sl":30}]},"test_73":{"methods":[{"sl":12},{"sl":20},{"sl":28}],"name":"byProducesJsonExtension","pass":true,"statements":[{"sl":13},{"sl":21},{"sl":30}]},"test_79":{"methods":[{"sl":12},{"sl":20},{"sl":28}],"name":"byProducesAcceptXml","pass":true,"statements":[{"sl":13},{"sl":21},{"sl":30}]},"test_8":{"methods":[{"sl":16},{"sl":24},{"sl":28}],"name":"byConsumes","pass":true,"statements":[{"sl":17},{"sl":25},{"sl":30}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [73, 56, 38, 79], [73, 56, 38, 79], [], [], [8], [8], [], [], [73, 56, 38, 79], [73, 56, 38, 79], [], [], [8], [8], [], [], [8, 73, 56, 38, 79], [], [8, 73, 56, 38, 79], [], [], []]
