var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":326,"id":1633,"methods":[{"el":94,"sc":2,"sl":77},{"el":121,"sc":2,"sl":103},{"el":145,"sc":2,"sl":129},{"el":163,"sc":2,"sl":153},{"el":187,"sc":2,"sl":171},{"el":218,"sc":2,"sl":194},{"el":240,"sc":2,"sl":220},{"el":259,"sc":2,"sl":247},{"el":316,"sc":2,"sl":266},{"el":325,"sc":2,"sl":321}],"name":"BatchJobExecutionsController","sl":64}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":321}],"name":"testStopAllJobExecutions","pass":true,"statements":[{"sl":324}]},"test_112":{"methods":[{"sl":171},{"sl":194},{"sl":220}],"name":"testGetSingleBatchJobExecution","pass":true,"statements":[{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":177},{"sl":178},{"sl":186},{"sl":198},{"sl":200},{"sl":201},{"sl":207},{"sl":208},{"sl":210},{"sl":211},{"sl":217},{"sl":223},{"sl":226},{"sl":230},{"sl":231},{"sl":239}]},"test_123":{"methods":[{"sl":247}],"name":"testStopJobExecution","pass":true,"statements":[{"sl":250},{"sl":251}]},"test_14":{"methods":[{"sl":266}],"name":"testRestartJobExecutionWithInvalidJobParameters","pass":true,"statements":[{"sl":270},{"sl":271},{"sl":272},{"sl":278},{"sl":283},{"sl":284},{"sl":286},{"sl":287},{"sl":288},{"sl":294},{"sl":295},{"sl":298}]},"test_152":{"methods":[{"sl":247}],"name":"testStopJobExecutionNotRunning","pass":true,"statements":[{"sl":250},{"sl":251},{"sl":254}]},"test_163":{"methods":[{"sl":247}],"name":"testStopJobExecutionNotExists","pass":true,"statements":[{"sl":250},{"sl":251},{"sl":257}]},"test_185":{"methods":[{"sl":77},{"sl":171},{"sl":220}],"name":"testGetBatchJobExecutions","pass":true,"statements":[{"sl":81},{"sl":83},{"sl":84},{"sl":86},{"sl":88},{"sl":91},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":177},{"sl":178},{"sl":186},{"sl":223},{"sl":226},{"sl":230},{"sl":231},{"sl":239}]},"test_208":{"methods":[{"sl":266}],"name":"testRestartJobExecutionWithJobNotAvailable","pass":true,"statements":[{"sl":270},{"sl":271},{"sl":272},{"sl":275}]},"test_212":{"methods":[{"sl":266}],"name":"testRestartNonExistingJobExecution","pass":true,"statements":[{"sl":270},{"sl":271},{"sl":272},{"sl":275}]},"test_223":{"methods":[{"sl":77},{"sl":171},{"sl":220}],"name":"testGetBatchJobExecutionsPaginated","pass":true,"statements":[{"sl":81},{"sl":83},{"sl":84},{"sl":86},{"sl":88},{"sl":91},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":177},{"sl":178},{"sl":186},{"sl":223},{"sl":226},{"sl":230},{"sl":231},{"sl":239}]},"test_237":{"methods":[{"sl":266}],"name":"testRestartAlreadyCompleteJobExecution","pass":true,"statements":[{"sl":270},{"sl":271},{"sl":272},{"sl":278},{"sl":283},{"sl":284},{"sl":286},{"sl":287},{"sl":288},{"sl":294},{"sl":295},{"sl":303},{"sl":305},{"sl":306}]},"test_241":{"methods":[{"sl":194}],"name":"testGetNonExistingBatchJobExecution","pass":true,"statements":[{"sl":198},{"sl":200},{"sl":201},{"sl":204}]},"test_59":{"methods":[{"sl":103}],"name":"testGetJobExecutionsByName","pass":true,"statements":[{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":114}]},"test_78":{"methods":[{"sl":266}],"name":"testRestartNonRestartableJob","pass":true,"statements":[{"sl":270},{"sl":271},{"sl":272},{"sl":278},{"sl":283},{"sl":284},{"sl":286},{"sl":287},{"sl":288},{"sl":294},{"sl":295},{"sl":303},{"sl":305},{"sl":310},{"sl":311}]},"test_81":{"methods":[{"sl":266}],"name":"testRestartAlreadyRunningJobExecution","pass":true,"statements":[{"sl":270},{"sl":271},{"sl":272},{"sl":278},{"sl":279}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [185, 223], [], [], [], [185, 223], [], [185, 223], [185, 223], [], [185, 223], [], [185, 223], [], [], [185, 223], [], [], [], [], [], [], [], [], [], [], [], [59], [], [], [], [], [59], [59], [59], [59], [], [], [59], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [112, 185, 223], [112, 185, 223], [112, 185, 223], [112, 185, 223], [112, 185, 223], [], [112, 185, 223], [112, 185, 223], [], [], [], [], [], [], [], [112, 185, 223], [], [], [], [], [], [], [], [112, 241], [], [], [], [112, 241], [], [112, 241], [112, 241], [], [], [241], [], [], [112], [112], [], [112], [112], [], [], [], [], [], [112], [], [], [112, 185, 223], [], [], [112, 185, 223], [], [], [112, 185, 223], [], [], [], [112, 185, 223], [112, 185, 223], [], [], [], [], [], [], [], [112, 185, 223], [], [], [], [], [], [], [], [152, 123, 163], [], [], [152, 123, 163], [152, 123, 163], [], [], [152], [], [], [163], [], [], [], [], [], [], [], [], [208, 212, 237, 78, 14, 81], [], [], [], [208, 212, 237, 78, 14, 81], [208, 212, 237, 78, 14, 81], [208, 212, 237, 78, 14, 81], [], [], [208, 212], [], [], [237, 78, 14, 81], [81], [], [], [], [237, 78, 14], [237, 78, 14], [], [237, 78, 14], [237, 78, 14], [237, 78, 14], [], [], [], [], [], [237, 78, 14], [237, 78, 14], [], [], [14], [], [], [], [], [237, 78], [], [237, 78], [237], [], [], [], [78], [78], [], [], [], [], [], [], [], [], [], [1], [], [], [1], [], []]
