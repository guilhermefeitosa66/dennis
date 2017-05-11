var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":173,"id":2186,"methods":[{"el":72,"sc":2,"sl":66},{"el":88,"sc":2,"sl":81},{"el":96,"sc":2,"sl":90},{"el":104,"sc":2,"sl":98},{"el":112,"sc":2,"sl":106},{"el":118,"sc":2,"sl":114},{"el":124,"sc":2,"sl":120},{"el":132,"sc":2,"sl":126},{"el":140,"sc":2,"sl":134},{"el":148,"sc":2,"sl":142},{"el":156,"sc":2,"sl":150},{"el":164,"sc":2,"sl":158},{"el":172,"sc":2,"sl":166}],"name":"RestControllerAdvice","sl":50}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_14":{"methods":[{"sl":114},{"sl":166}],"name":"testRestartJobExecutionWithInvalidJobParameters","pass":true,"statements":[{"sl":115},{"sl":117},{"sl":170},{"sl":171}]},"test_152":{"methods":[{"sl":98},{"sl":114}],"name":"testStopJobExecutionNotRunning","pass":true,"statements":[{"sl":102},{"sl":103},{"sl":115},{"sl":117}]},"test_163":{"methods":[{"sl":90},{"sl":114}],"name":"testStopJobExecutionNotExists","pass":true,"statements":[{"sl":94},{"sl":95},{"sl":115},{"sl":117}]},"test_184":{"methods":[{"sl":90},{"sl":114}],"name":"testGetProgressForJobExecutionNotExists","pass":true,"statements":[{"sl":94},{"sl":95},{"sl":115},{"sl":117}]},"test_207":{"methods":[{"sl":90},{"sl":114}],"name":"testGetBatchStepExecutionsNotExists","pass":true,"statements":[{"sl":94},{"sl":95},{"sl":115},{"sl":117}]},"test_208":{"methods":[{"sl":90},{"sl":114}],"name":"testRestartJobExecutionWithJobNotAvailable","pass":true,"statements":[{"sl":94},{"sl":95},{"sl":115},{"sl":117}]},"test_212":{"methods":[{"sl":90},{"sl":114}],"name":"testRestartNonExistingJobExecution","pass":true,"statements":[{"sl":94},{"sl":95},{"sl":115},{"sl":117}]},"test_237":{"methods":[{"sl":114},{"sl":142}],"name":"testRestartAlreadyCompleteJobExecution","pass":true,"statements":[{"sl":115},{"sl":117},{"sl":146},{"sl":147}]},"test_238":{"methods":[{"sl":114},{"sl":158}],"name":"testGetJobInstanceByInvalidInstanceId","pass":true,"statements":[{"sl":115},{"sl":117},{"sl":162},{"sl":163}]},"test_241":{"methods":[{"sl":90},{"sl":114}],"name":"testGetNonExistingBatchJobExecution","pass":true,"statements":[{"sl":94},{"sl":95},{"sl":115},{"sl":117}]},"test_34":{"methods":[{"sl":106},{"sl":114}],"name":"testGetSingleBatchStepExecutionThatDoesNotExist","pass":true,"statements":[{"sl":110},{"sl":111},{"sl":115},{"sl":117}]},"test_42":{"methods":[{"sl":90},{"sl":114}],"name":"testGetSingleBatchStepExecutionForNonExistingJobExecution","pass":true,"statements":[{"sl":94},{"sl":95},{"sl":115},{"sl":117}]},"test_64":{"methods":[{"sl":106},{"sl":114}],"name":"testGetProgressForStepExecutionNotExists","pass":true,"statements":[{"sl":110},{"sl":111},{"sl":115},{"sl":117}]},"test_78":{"methods":[{"sl":114},{"sl":134}],"name":"testRestartNonRestartableJob","pass":true,"statements":[{"sl":115},{"sl":117},{"sl":138},{"sl":139}]},"test_81":{"methods":[{"sl":114},{"sl":126}],"name":"testRestartAlreadyRunningJobExecution","pass":true,"statements":[{"sl":115},{"sl":117},{"sl":130},{"sl":131}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [42, 208, 212, 207, 241, 184, 163], [], [], [], [42, 208, 212, 207, 241, 184, 163], [42, 208, 212, 207, 241, 184, 163], [], [], [152], [], [], [], [152], [152], [], [], [34, 64], [], [], [], [34, 64], [34, 64], [], [], [152, 42, 34, 64, 208, 212, 237, 78, 207, 14, 238, 241, 184, 163, 81], [152, 42, 34, 64, 208, 212, 237, 78, 207, 14, 238, 241, 184, 163, 81], [], [152, 42, 34, 64, 208, 212, 237, 78, 207, 14, 238, 241, 184, 163, 81], [], [], [], [], [], [], [], [], [81], [], [], [], [81], [81], [], [], [78], [], [], [], [78], [78], [], [], [237], [], [], [], [237], [237], [], [], [], [], [], [], [], [], [], [], [238], [], [], [], [238], [238], [], [], [14], [], [], [], [14], [14], [], []]