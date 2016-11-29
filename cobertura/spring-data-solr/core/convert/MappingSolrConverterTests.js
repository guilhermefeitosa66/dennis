var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":1304,"id":10298,"methods":[{"el":64,"sc":2,"sl":58},{"el":85,"sc":2,"sl":66},{"el":96,"sc":2,"sl":87},{"el":108,"sc":2,"sl":98},{"el":119,"sc":2,"sl":110},{"el":134,"sc":2,"sl":121},{"el":149,"sc":2,"sl":136},{"el":160,"sc":2,"sl":151},{"el":170,"sc":2,"sl":162},{"el":186,"sc":2,"sl":172},{"el":202,"sc":2,"sl":188},{"el":218,"sc":2,"sl":204},{"el":227,"sc":2,"sl":220},{"el":236,"sc":2,"sl":229},{"el":245,"sc":2,"sl":238},{"el":254,"sc":2,"sl":247},{"el":263,"sc":2,"sl":256},{"el":272,"sc":2,"sl":265},{"el":282,"sc":2,"sl":274},{"el":292,"sc":2,"sl":284},{"el":305,"sc":2,"sl":294},{"el":320,"sc":2,"sl":307},{"el":327,"sc":2,"sl":322},{"el":334,"sc":2,"sl":329},{"el":347,"sc":2,"sl":336},{"el":360,"sc":2,"sl":349},{"el":378,"sc":2,"sl":362},{"el":387,"sc":2,"sl":380},{"el":404,"sc":2,"sl":389},{"el":414,"sc":2,"sl":406},{"el":428,"sc":2,"sl":416},{"el":446,"sc":2,"sl":430},{"el":458,"sc":2,"sl":448},{"el":467,"sc":2,"sl":460},{"el":479,"sc":2,"sl":469},{"el":491,"sc":2,"sl":481},{"el":500,"sc":2,"sl":493},{"el":510,"sc":2,"sl":502},{"el":520,"sc":2,"sl":512},{"el":529,"sc":2,"sl":522},{"el":539,"sc":2,"sl":531},{"el":549,"sc":2,"sl":541},{"el":562,"sc":2,"sl":551},{"el":569,"sc":2,"sl":564},{"el":582,"sc":2,"sl":571},{"el":589,"sc":2,"sl":584},{"el":605,"sc":2,"sl":591},{"el":621,"sc":2,"sl":607},{"el":637,"sc":2,"sl":623},{"el":653,"sc":2,"sl":639},{"el":675,"sc":2,"sl":658},{"el":699,"sc":2,"sl":680},{"el":723,"sc":2,"sl":704},{"el":745,"sc":2,"sl":728},{"el":769,"sc":2,"sl":750},{"el":793,"sc":2,"sl":774},{"el":809,"sc":2,"sl":798},{"el":820,"sc":2,"sl":814},{"el":837,"sc":2,"sl":825},{"el":848,"sc":2,"sl":842},{"el":864,"sc":2,"sl":850},{"el":883,"sc":2,"sl":869},{"el":902,"sc":2,"sl":888},{"el":921,"sc":2,"sl":907},{"el":932,"sc":2,"sl":923},{"el":944,"sc":2,"sl":934},{"el":954,"sc":2,"sl":946},{"el":964,"sc":2,"sl":956},{"el":974,"sc":2,"sl":966},{"el":985,"sc":2,"sl":976},{"el":996,"sc":2,"sl":987},{"el":1007,"sc":2,"sl":998},{"el":1019,"sc":2,"sl":1009},{"el":1033,"sc":2,"sl":1021},{"el":1047,"sc":2,"sl":1038},{"el":1066,"sc":2,"sl":1052},{"el":1093,"sc":2,"sl":1071},{"el":1110,"sc":2,"sl":1098}],"name":"MappingSolrConverterTests","sl":53},{"el":1116,"id":10868,"methods":[],"name":"MappingSolrConverterTests.BeanWithoutAnnotatedFields","sl":1112},{"el":1124,"id":10868,"methods":[],"name":"MappingSolrConverterTests.BeanWithCustomTypes","sl":1118},{"el":1134,"id":10868,"methods":[],"name":"MappingSolrConverterTests.BeanWithSimpleTypes","sl":1126},{"el":1140,"id":10868,"methods":[],"name":"MappingSolrConverterTests.BeanWithNamedFields","sl":1136},{"el":1158,"id":10868,"methods":[{"el":1151,"sc":3,"sl":1148},{"el":1156,"sc":3,"sl":1153}],"name":"MappingSolrConverterTests.BeanWithFieldAnnotationOnSetter","sl":1142},{"el":1172,"id":10872,"methods":[],"name":"MappingSolrConverterTests.BeanWithDefaultTypes","sl":1160},{"el":1178,"id":10872,"methods":[],"name":"MappingSolrConverterTests.BeanWithCatchAllField","sl":1174},{"el":1192,"id":10872,"methods":[{"el":1190,"sc":3,"sl":1186}],"name":"MappingSolrConverterTests.BeanWithConstructor","sl":1180},{"el":1197,"id":10876,"methods":[],"name":"MappingSolrConverterTests.BeanWithWildcardsOnTypesThatRequireConversion","sl":1194},{"el":1225,"id":10876,"methods":[],"name":"MappingSolrConverterTests.BeanWithWildcards","sl":1199},{"el":1241,"id":10876,"methods":[],"name":"MappingSolrConverterTests.BeanWithDynamicMapsWildcards","sl":1227},{"el":1247,"id":10876,"methods":[],"name":"MappingSolrConverterTests.BeanWithFieldsExcludedFromIndexing","sl":1243},{"el":1253,"id":10876,"methods":[],"name":"MappingSolrConverterTests.BeanBase","sl":1249},{"el":1259,"id":10876,"methods":[],"name":"MappingSolrConverterTests.BeanWithInteritance","sl":1255},{"el":1268,"id":10876,"methods":[],"name":"MappingSolrConverterTests.BeanWithDifferentMaps","sl":1261},{"el":1280,"id":10876,"methods":[],"name":"MappingSolrConverterTests.BeanWithOverlappingWildcards","sl":1270},{"el":1290,"id":10876,"methods":[{"el":1288,"sc":3,"sl":1286}],"name":"MappingSolrConverterTests.BeanWithArrayConstructor","sl":1282},{"el":1302,"id":10878,"methods":[],"name":"MappingSolrConverterTests.BeanWithBoost","sl":1293}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
