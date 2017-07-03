var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":35,"id":3255,"methods":[{"el":23,"sc":2,"sl":21},{"el":27,"sc":2,"sl":25},{"el":34,"sc":2,"sl":29}],"name":"StagingWriter","sl":15}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_111":{"methods":[{"sl":29}],"name":"testLaunchFromFileDrop","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32}]},"test_12":{"methods":[{"sl":29}],"name":"testLaunchFromSimpleRequestString","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32}]},"test_127":{"methods":[{"sl":29}],"name":"testSmallLaunch","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32}]},"test_149":{"methods":[{"sl":29}],"name":"testLaunchFromSimpleRequestString","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32}]},"test_200":{"methods":[{"sl":21},{"sl":25}],"name":"testRegisterFromSimpleRequestString","pass":true,"statements":[{"sl":22},{"sl":26}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [200], [200], [], [], [200], [200], [], [], [127, 149, 12, 111], [127, 149, 12, 111], [127, 149, 12, 111], [127, 149, 12, 111], [], [], []]
