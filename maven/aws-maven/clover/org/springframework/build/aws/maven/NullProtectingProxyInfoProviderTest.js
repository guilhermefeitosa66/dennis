var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":56,"id":679,"methods":[{"el":37,"sc":5,"sl":34},{"el":42,"sc":5,"sl":39},{"el":48,"sc":5,"sl":44},{"el":54,"sc":5,"sl":50}],"name":"NullProtectingProxyInfoProviderTest","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":50}],"name":"getProxyInfoNonMatchingProtocol","pass":true,"statements":[{"sl":52},{"sl":53}]},"test_3":{"methods":[{"sl":34}],"name":"getProxyInfoNullProtocol","pass":true,"statements":[{"sl":36}]},"test_31":{"methods":[{"sl":39}],"name":"getProxyInfoNullProxy","pass":true,"statements":[{"sl":41}]},"test_52":{"methods":[{"sl":44}],"name":"getProxyInfoMatchingProtocol","pass":true,"statements":[{"sl":46},{"sl":47}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [3], [], [3], [], [], [31], [], [31], [], [], [52], [], [52], [52], [], [], [1], [], [1], [1], [], [], []]
