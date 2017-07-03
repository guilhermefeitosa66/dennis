var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":80,"id":2123,"methods":[{"el":45,"sc":2,"sl":34},{"el":49,"sc":2,"sl":47},{"el":53,"sc":2,"sl":51},{"el":57,"sc":2,"sl":55},{"el":61,"sc":2,"sl":59},{"el":71,"sc":2,"sl":63},{"el":75,"sc":2,"sl":73},{"el":79,"sc":2,"sl":77}],"name":"JobInstanceInfo","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_166":{"methods":[{"sl":34}],"name":"testJobSunnyDay","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":38},{"sl":39},{"sl":40},{"sl":44}]},"test_222":{"methods":[{"sl":34},{"sl":47},{"sl":51},{"sl":63}],"name":"testGetJobInstanceByJobName","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":38},{"sl":39},{"sl":40},{"sl":44},{"sl":48},{"sl":52},{"sl":64},{"sl":66},{"sl":67},{"sl":70}]},"test_41":{"methods":[{"sl":34},{"sl":47},{"sl":51},{"sl":63}],"name":"testGetJobInstanceByInstanceId","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":38},{"sl":39},{"sl":40},{"sl":44},{"sl":48},{"sl":52},{"sl":64},{"sl":66},{"sl":67},{"sl":70}]},"test_46":{"methods":[{"sl":34}],"name":"testLaunchSunnyDay","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":38},{"sl":39},{"sl":40},{"sl":44}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [166, 222, 41, 46], [166, 222, 41, 46], [166, 222, 41, 46], [], [166, 222, 41, 46], [166, 222, 41, 46], [166, 222, 41, 46], [], [], [], [166, 222, 41, 46], [], [], [222, 41], [222, 41], [], [], [222, 41], [222, 41], [], [], [], [], [], [], [], [], [], [], [222, 41], [222, 41], [], [222, 41], [222, 41], [], [], [222, 41], [], [], [], [], [], [], [], [], [], []]
