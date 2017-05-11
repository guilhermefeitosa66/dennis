var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":39,"id":110,"methods":[{"el":28,"sc":5,"sl":26},{"el":33,"sc":5,"sl":30},{"el":38,"sc":5,"sl":35}],"name":"AuthenticationInfoAWSCredentials","sl":22}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_73":{"methods":[{"sl":30}],"name":"getAWSAccessKeyId","pass":true,"statements":[{"sl":32}]},"test_87":{"methods":[{"sl":26},{"sl":30}],"name":"regionConnections","pass":false,"statements":[{"sl":27},{"sl":32}]},"test_9":{"methods":[{"sl":35}],"name":"getAWSSecretKey","pass":true,"statements":[{"sl":37}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [87], [87], [], [], [87, 73], [], [87, 73], [], [], [9], [], [9], [], []]
