var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":18,"id":0,"methods":[{"el":10,"sc":2,"sl":7},{"el":14,"sc":2,"sl":12},{"el":16,"sc":2,"sl":16}],"name":"AjaxUtils","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_29":{"methods":[{"sl":7}],"name":"readString","pass":true,"statements":[{"sl":8},{"sl":9}]},"test_52":{"methods":[{"sl":7}],"name":"submitError","pass":true,"statements":[{"sl":8},{"sl":9}]},"test_71":{"methods":[{"sl":7}],"name":"submitSuccessAjax","pass":true,"statements":[{"sl":8},{"sl":9}]},"test_74":{"methods":[{"sl":7}],"name":"submitSuccess","pass":true,"statements":[{"sl":8},{"sl":9}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [74, 29, 52, 71], [74, 29, 52, 71], [74, 29, 52, 71], [], [], [], [], [], [], [], [], []]
