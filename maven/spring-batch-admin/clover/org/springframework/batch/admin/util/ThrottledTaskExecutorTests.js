var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":173,"id":3950,"methods":[{"el":46,"sc":4,"sl":44},{"el":49,"sc":2,"sl":41},{"el":56,"sc":4,"sl":54},{"el":59,"sc":2,"sl":51},{"el":65,"sc":4,"sl":64},{"el":68,"sc":2,"sl":61},{"el":73,"sc":2,"sl":70},{"el":78,"sc":2,"sl":75},{"el":86,"sc":4,"sl":84},{"el":90,"sc":2,"sl":80},{"el":104,"sc":4,"sl":99},{"el":114,"sc":6,"sl":112},{"el":116,"sc":4,"sl":110},{"el":129,"sc":2,"sl":92},{"el":149,"sc":4,"sl":144},{"el":158,"sc":5,"sl":156},{"el":171,"sc":2,"sl":131}],"name":"ThrottledTaskExecutorTests","sl":35}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_104":{"methods":[{"sl":51},{"sl":54}],"name":"testPollLongTimeUnit","pass":true,"statements":[{"sl":53},{"sl":55},{"sl":58}]},"test_160":{"methods":[{"sl":80},{"sl":84}],"name":"testAsyncTake","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":85},{"sl":88},{"sl":89}]},"test_199":{"methods":[{"sl":41},{"sl":44}],"name":"testPoll","pass":true,"statements":[{"sl":43},{"sl":45},{"sl":48}]},"test_2":{"methods":[{"sl":131},{"sl":144}],"name":"testBufferedExecuteRejected","pass":true,"statements":[{"sl":134},{"sl":135},{"sl":136},{"sl":137},{"sl":138},{"sl":140},{"sl":141},{"sl":143},{"sl":145},{"sl":146},{"sl":148},{"sl":151},{"sl":152},{"sl":154},{"sl":155},{"sl":167},{"sl":168},{"sl":169}]},"test_201":{"methods":[{"sl":92},{"sl":99},{"sl":110},{"sl":112}],"name":"testBufferedExecute","pass":true,"statements":[{"sl":95},{"sl":96},{"sl":98},{"sl":100},{"sl":101},{"sl":103},{"sl":106},{"sl":107},{"sl":109},{"sl":111},{"sl":113},{"sl":119},{"sl":121},{"sl":122},{"sl":123},{"sl":126},{"sl":127}]},"test_228":{"methods":[{"sl":75}],"name":"testSubmitNullCallable","pass":true,"statements":[{"sl":77}]},"test_35":{"methods":[{"sl":70}],"name":"testSubmitNullRunnable","pass":true,"statements":[{"sl":72}]},"test_72":{"methods":[{"sl":61},{"sl":64}],"name":"testSubmitRunnable","pass":true,"statements":[{"sl":63},{"sl":67}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [199], [], [199], [199], [199], [], [], [199], [], [], [104], [], [104], [104], [104], [], [], [104], [], [], [72], [], [72], [72], [], [], [72], [], [], [35], [], [35], [], [], [228], [], [228], [], [], [160], [], [160], [160], [160], [160], [], [], [160], [160], [], [], [201], [], [], [201], [201], [], [201], [201], [201], [201], [], [201], [], [], [201], [201], [], [201], [201], [201], [201], [201], [], [], [], [], [], [201], [], [201], [201], [201], [], [], [201], [201], [], [], [], [2], [], [], [2], [2], [2], [2], [2], [], [2], [2], [], [2], [2], [2], [2], [], [2], [], [], [2], [2], [], [2], [2], [], [], [], [], [], [], [], [], [], [], [], [2], [2], [2], [], [], [], []]
