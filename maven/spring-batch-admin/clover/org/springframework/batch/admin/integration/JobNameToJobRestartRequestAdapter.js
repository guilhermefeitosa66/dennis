var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":121,"id":90,"methods":[{"el":52,"sc":2,"sl":50},{"el":56,"sc":2,"sl":54},{"el":65,"sc":2,"sl":58},{"el":119,"sc":2,"sl":72}],"name":"JobNameToJobRestartRequestAdapter","sl":44}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_18":{"methods":[{"sl":50},{"sl":54}],"name":"testWebappRootConfiguration","pass":true,"statements":[{"sl":51},{"sl":55}]},"test_19":{"methods":[{"sl":50},{"sl":54}],"name":"testBootstrapConfiguration","pass":false,"statements":[{"sl":51},{"sl":55}]},"test_204":{"methods":[{"sl":50},{"sl":54}],"name":"testServletConfiguration","pass":false,"statements":[{"sl":51},{"sl":55}]},"test_224":{"methods":[{"sl":58},{"sl":72}],"name":"testSimpleJobNotFailed","pass":false,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":82},{"sl":87},{"sl":89},{"sl":90},{"sl":92},{"sl":95},{"sl":97},{"sl":104},{"sl":108},{"sl":109},{"sl":113},{"sl":114}]},"test_3":{"methods":[{"sl":58},{"sl":72}],"name":"testSimpleJob","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":82},{"sl":87},{"sl":89},{"sl":90},{"sl":92},{"sl":95},{"sl":97},{"sl":99},{"sl":100},{"sl":104},{"sl":105},{"sl":113},{"sl":117}]},"test_8":{"methods":[{"sl":58},{"sl":72}],"name":"testFailedRestart","pass":false,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":82},{"sl":83}]},"test_80":{"methods":[{"sl":58},{"sl":72}],"name":"testLaunchAndRestart","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":82},{"sl":87},{"sl":89},{"sl":90},{"sl":92},{"sl":95},{"sl":97},{"sl":99},{"sl":100},{"sl":104},{"sl":105},{"sl":113},{"sl":117}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [19, 204, 18], [19, 204, 18], [], [], [19, 204, 18], [19, 204, 18], [], [], [80, 8, 3, 224], [], [], [80, 8, 3, 224], [80, 8, 3, 224], [80, 8, 3, 224], [80, 3], [], [], [], [], [], [], [], [80, 8, 3, 224], [], [], [80, 8, 3, 224], [80, 8, 3, 224], [80, 8, 3, 224], [], [], [80, 8, 3, 224], [], [80, 8, 3, 224], [8], [], [], [], [80, 3, 224], [], [80, 3, 224], [80, 3, 224], [], [80, 3, 224], [], [], [80, 3, 224], [], [80, 3, 224], [], [80, 3], [80, 3], [], [], [], [80, 3, 224], [80, 3], [], [], [224], [224], [], [], [], [80, 3, 224], [224], [], [], [80, 3], [], [], [], []]
