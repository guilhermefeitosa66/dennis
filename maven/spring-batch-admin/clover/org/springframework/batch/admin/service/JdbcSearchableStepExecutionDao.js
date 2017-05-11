var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":217,"id":857,"methods":[{"el":73,"sc":2,"sl":71},{"el":90,"sc":4,"sl":87},{"el":95,"sc":2,"sl":78},{"el":102,"sc":4,"sl":100},{"el":115,"sc":2,"sl":97},{"el":158,"sc":2,"sl":117},{"el":166,"sc":2,"sl":160},{"el":191,"sc":2,"sl":173}],"name":"JdbcSearchableStepExecutionDao","sl":51},{"el":215,"id":929,"methods":[{"el":213,"sc":3,"sl":195}],"name":"JdbcSearchableStepExecutionDao.StepExecutionRowMapper","sl":193}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_117":{"methods":[{"sl":97},{"sl":100}],"name":"testFindStepNamesWithMatch","pass":true,"statements":[{"sl":99},{"sl":101},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":109},{"sl":113}]},"test_138":{"methods":[{"sl":160}],"name":"testCountStepExecutionsByPattern","pass":true,"statements":[{"sl":161},{"sl":162}]},"test_16":{"methods":[{"sl":117},{"sl":173},{"sl":195}],"name":"testFindStepExecutionsByNameWithMoreJobs","pass":true,"statements":[{"sl":119},{"sl":121},{"sl":126},{"sl":129},{"sl":134},{"sl":137},{"sl":139},{"sl":140},{"sl":145},{"sl":146},{"sl":148},{"sl":156},{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":185},{"sl":186},{"sl":196},{"sl":197},{"sl":198},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":206},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":212}]},"test_161":{"methods":[{"sl":97},{"sl":100}],"name":"testFindStepNames","pass":true,"statements":[{"sl":99},{"sl":101},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":113}]},"test_170":{"methods":[{"sl":160}],"name":"testCountStepExecutionsByPatternWithMoreJobs","pass":true,"statements":[{"sl":161},{"sl":162}]},"test_18":{"methods":[{"sl":71},{"sl":78}],"name":"testWebappRootConfiguration","pass":true,"statements":[{"sl":72},{"sl":81},{"sl":83},{"sl":84},{"sl":86},{"sl":93}]},"test_181":{"methods":[{"sl":117},{"sl":173},{"sl":195}],"name":"testFindStepExecutionsByPattern","pass":true,"statements":[{"sl":119},{"sl":121},{"sl":126},{"sl":129},{"sl":130},{"sl":131},{"sl":137},{"sl":139},{"sl":140},{"sl":145},{"sl":146},{"sl":148},{"sl":156},{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":185},{"sl":186},{"sl":196},{"sl":197},{"sl":198},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":206},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":212}]},"test_19":{"methods":[{"sl":71},{"sl":78}],"name":"testBootstrapConfiguration","pass":false,"statements":[{"sl":72},{"sl":81},{"sl":83},{"sl":84},{"sl":86},{"sl":93}]},"test_204":{"methods":[{"sl":71},{"sl":78}],"name":"testServletConfiguration","pass":false,"statements":[{"sl":72},{"sl":81},{"sl":83},{"sl":84},{"sl":86},{"sl":93}]},"test_216":{"methods":[{"sl":160}],"name":"testCountStepExecutionsByNameWithMoreJobs","pass":true,"statements":[{"sl":161},{"sl":165}]},"test_232":{"methods":[{"sl":97},{"sl":100}],"name":"testFindStepNamesWithMoreJobs","pass":true,"statements":[{"sl":99},{"sl":101},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":113}]},"test_31":{"methods":[{"sl":117},{"sl":173},{"sl":195}],"name":"testFindStepExecutionsByName","pass":true,"statements":[{"sl":119},{"sl":121},{"sl":126},{"sl":129},{"sl":134},{"sl":137},{"sl":139},{"sl":140},{"sl":145},{"sl":146},{"sl":148},{"sl":156},{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":185},{"sl":186},{"sl":196},{"sl":197},{"sl":198},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":206},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":212}]},"test_49":{"methods":[{"sl":160}],"name":"testCountStepExecutionsByName","pass":true,"statements":[{"sl":161},{"sl":165}]},"test_50":{"methods":[{"sl":117},{"sl":173}],"name":"testFindStepExecutionsPastEnd","pass":true,"statements":[{"sl":119},{"sl":121},{"sl":126},{"sl":129},{"sl":134},{"sl":137},{"sl":139},{"sl":140},{"sl":145},{"sl":146},{"sl":152},{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":185},{"sl":186}]},"test_55":{"methods":[{"sl":71},{"sl":78}],"name":"testMBeanExporters","pass":true,"statements":[{"sl":72},{"sl":81},{"sl":83},{"sl":84},{"sl":86},{"sl":93}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [55, 204, 19, 18], [55, 204, 19, 18], [], [], [], [], [], [55, 204, 19, 18], [], [], [55, 204, 19, 18], [], [55, 204, 19, 18], [55, 204, 19, 18], [], [55, 204, 19, 18], [], [], [], [], [], [], [55, 204, 19, 18], [], [], [], [117, 232, 161], [], [117, 232, 161], [117, 232, 161], [117, 232, 161], [], [], [], [117, 232, 161], [117, 232, 161], [117, 232, 161], [117, 232, 161], [117], [], [], [], [117, 232, 161], [], [], [], [181, 31, 16, 50], [], [181, 31, 16, 50], [], [181, 31, 16, 50], [], [], [], [], [181, 31, 16, 50], [], [], [181, 31, 16, 50], [181], [181], [], [], [31, 16, 50], [], [], [181, 31, 16, 50], [], [181, 31, 16, 50], [181, 31, 16, 50], [], [], [], [], [181, 31, 16, 50], [181, 31, 16, 50], [], [181, 31, 16], [], [], [], [50], [], [], [], [181, 31, 16], [], [], [], [49, 138, 216, 170], [49, 138, 216, 170], [138, 170], [], [], [49, 216], [], [], [], [], [], [], [], [181, 31, 16, 50], [181, 31, 16, 50], [181, 31, 16, 50], [181, 31, 16, 50], [181, 31, 16, 50], [181, 31, 16, 50], [181, 31, 16, 50], [181, 31, 16, 50], [181, 31, 16, 50], [181, 31, 16, 50], [], [], [181, 31, 16, 50], [181, 31, 16, 50], [], [], [], [], [], [], [], [], [181, 31, 16], [181, 31, 16], [181, 31, 16], [181, 31, 16], [181, 31, 16], [181, 31, 16], [181, 31, 16], [181, 31, 16], [181, 31, 16], [181, 31, 16], [181, 31, 16], [181, 31, 16], [181, 31, 16], [181, 31, 16], [181, 31, 16], [181, 31, 16], [181, 31, 16], [181, 31, 16], [], [], [], [], []]
