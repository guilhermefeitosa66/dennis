var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":343,"id":10094,"methods":[{"el":67,"sc":2,"sl":63},{"el":73,"sc":2,"sl":69},{"el":88,"sc":2,"sl":78},{"el":99,"sc":2,"sl":90},{"el":110,"sc":2,"sl":101},{"el":121,"sc":2,"sl":112},{"el":133,"sc":2,"sl":123},{"el":151,"sc":2,"sl":135},{"el":179,"sc":2,"sl":156},{"el":199,"sc":2,"sl":184},{"el":219,"sc":2,"sl":204},{"el":227,"sc":2,"sl":221}],"name":"ITestMappingSolrConverter","sl":56},{"el":237,"id":10184,"methods":[],"name":"ITestMappingSolrConverter.BeanWithPoint","sl":229},{"el":248,"id":10184,"methods":[],"name":"ITestMappingSolrConverter.BeanWithJodaDateTime","sl":239},{"el":259,"id":10184,"methods":[],"name":"ITestMappingSolrConverter.BeanWithJodaLocalDateTime","sl":250},{"el":270,"id":10184,"methods":[],"name":"ITestMappingSolrConverter.BeanWithList","sl":261},{"el":277,"id":10184,"methods":[],"name":"ITestMappingSolrConverter.BeanBaseClass","sl":272},{"el":284,"id":10184,"methods":[],"name":"ITestMappingSolrConverter.BeanWithBaseClass","sl":279},{"el":288,"id":10184,"methods":[],"name":"ITestMappingSolrConverter.LiteralNumberEnum","sl":286},{"el":298,"id":10184,"methods":[],"name":"ITestMappingSolrConverter.BeanWithEnum","sl":290},{"el":315,"id":10184,"methods":[{"el":313,"sc":3,"sl":310}],"name":"ITestMappingSolrConverter.BeanWithScore","sl":300},{"el":328,"id":10187,"methods":[{"el":326,"sc":3,"sl":323}],"name":"ITestMappingSolrConverter.BeanWithDynamicMap","sl":317},{"el":341,"id":10190,"methods":[{"el":339,"sc":3,"sl":336}],"name":"ITestMappingSolrConverter.BeanWithDynamicMapList","sl":330}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]