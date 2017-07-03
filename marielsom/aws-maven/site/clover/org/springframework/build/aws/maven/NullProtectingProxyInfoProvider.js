var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":38,"id":142,"methods":[{"el":28,"sc":5,"sl":26},{"el":37,"sc":5,"sl":30}],"name":"NullProtectingProxyInfoProvider","sl":22}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":30}],"name":"getProxyInfoNonMatchingProtocol","pass":true,"statements":[{"sl":32},{"sl":35}]},"test_3":{"methods":[{"sl":30}],"name":"getProxyInfoNullProtocol","pass":true,"statements":[{"sl":32},{"sl":33}]},"test_31":{"methods":[{"sl":26},{"sl":30}],"name":"getProxyInfoNullProxy","pass":true,"statements":[{"sl":27},{"sl":32},{"sl":33}]},"test_46":{"methods":[{"sl":26}],"name":"connectRepositoryProxyInfo","pass":true,"statements":[{"sl":27}]},"test_52":{"methods":[{"sl":30}],"name":"getProxyInfoMatchingProtocol","pass":true,"statements":[{"sl":32},{"sl":33}]},"test_60":{"methods":[{"sl":26}],"name":"connectRepositoryAuthenticationProxyInfo","pass":true,"statements":[{"sl":27}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [46, 31, 60], [46, 31, 60], [], [], [1, 31, 52, 3], [], [1, 31, 52, 3], [31, 52, 3], [], [1], [], [], []]
