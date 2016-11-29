var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":65,"id":389,"methods":[{"el":18,"sc":2,"sl":15},{"el":23,"sc":2,"sl":20},{"el":28,"sc":2,"sl":25},{"el":33,"sc":2,"sl":30},{"el":38,"sc":2,"sl":35},{"el":43,"sc":2,"sl":40},{"el":48,"sc":2,"sl":45},{"el":53,"sc":2,"sl":50},{"el":58,"sc":2,"sl":55},{"el":63,"sc":2,"sl":60}],"name":"MappingController","sl":13}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_10":{"methods":[{"sl":15}],"name":"byPath","pass":true,"statements":[{"sl":17}]},"test_28":{"methods":[{"sl":40}],"name":"byHeader","pass":true,"statements":[{"sl":42}]},"test_3":{"methods":[{"sl":35}],"name":"byNotParameter","pass":true,"statements":[{"sl":37}]},"test_32":{"methods":[{"sl":20}],"name":"byPathPattern","pass":true,"statements":[{"sl":22}]},"test_38":{"methods":[{"sl":60}],"name":"byProducesXmlExtension","pass":true,"statements":[{"sl":62}]},"test_56":{"methods":[{"sl":55}],"name":"byProducesAcceptJson","pass":true,"statements":[{"sl":57}]},"test_66":{"methods":[{"sl":45}],"name":"byHeaderNegation","pass":true,"statements":[{"sl":47}]},"test_67":{"methods":[{"sl":30}],"name":"byParameter","pass":true,"statements":[{"sl":32}]},"test_73":{"methods":[{"sl":55}],"name":"byProducesJsonExtension","pass":true,"statements":[{"sl":57}]},"test_79":{"methods":[{"sl":60}],"name":"byProducesAcceptXml","pass":true,"statements":[{"sl":62}]},"test_8":{"methods":[{"sl":50}],"name":"byConsumes","pass":true,"statements":[{"sl":52}]},"test_80":{"methods":[{"sl":25}],"name":"byMethod","pass":true,"statements":[{"sl":27}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [10], [], [10], [], [], [32], [], [32], [], [], [80], [], [80], [], [], [67], [], [67], [], [], [3], [], [3], [], [], [28], [], [28], [], [], [66], [], [66], [], [], [8], [], [8], [], [], [73, 56], [], [73, 56], [], [], [38, 79], [], [38, 79], [], [], []]