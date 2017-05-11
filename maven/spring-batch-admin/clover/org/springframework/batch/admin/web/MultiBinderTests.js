var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":80,"id":4525,"methods":[{"el":51,"sc":2,"sl":45},{"el":60,"sc":4,"sl":57},{"el":66,"sc":2,"sl":53},{"el":78,"sc":2,"sl":68}],"name":"MultiBinderTests","sl":30},{"el":43,"id":4525,"methods":[{"el":37,"sc":3,"sl":35},{"el":41,"sc":3,"sl":39}],"name":"MultiBinderTests.TestBean","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_153":{"methods":[{"sl":35},{"sl":39},{"sl":68}],"name":"testPrefixBinding","pass":true,"statements":[{"sl":36},{"sl":40},{"sl":70},{"sl":71},{"sl":72},{"sl":74},{"sl":75},{"sl":76},{"sl":77}]},"test_190":{"methods":[{"sl":35},{"sl":39},{"sl":53},{"sl":57}],"name":"testModifiedBinding","pass":true,"statements":[{"sl":36},{"sl":40},{"sl":55},{"sl":56},{"sl":59},{"sl":63},{"sl":64},{"sl":65}]},"test_211":{"methods":[{"sl":35},{"sl":39},{"sl":45}],"name":"testVanillaBinding","pass":true,"statements":[{"sl":36},{"sl":40},{"sl":47},{"sl":48},{"sl":49},{"sl":50}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [153, 190, 211], [153, 190, 211], [], [], [153, 190, 211], [153, 190, 211], [], [], [], [], [211], [], [211], [211], [211], [211], [], [], [190], [], [190], [190], [190], [], [190], [], [], [], [190], [190], [190], [], [], [153], [], [153], [153], [153], [], [153], [153], [153], [153], [], [], []]
