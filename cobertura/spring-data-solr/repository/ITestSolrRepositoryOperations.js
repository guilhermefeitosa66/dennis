var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":1135,"id":12380,"methods":[{"el":85,"sc":2,"sl":80},{"el":90,"sc":2,"sl":87},{"el":96,"sc":2,"sl":92},{"el":101,"sc":2,"sl":98},{"el":106,"sc":2,"sl":103},{"el":111,"sc":2,"sl":108},{"el":116,"sc":2,"sl":113},{"el":122,"sc":2,"sl":118},{"el":129,"sc":2,"sl":124},{"el":136,"sc":2,"sl":131},{"el":142,"sc":2,"sl":138},{"el":153,"sc":2,"sl":144},{"el":166,"sc":2,"sl":155},{"el":173,"sc":2,"sl":168},{"el":179,"sc":2,"sl":175},{"el":185,"sc":2,"sl":181},{"el":191,"sc":2,"sl":187},{"el":207,"sc":2,"sl":193},{"el":214,"sc":2,"sl":209},{"el":220,"sc":2,"sl":216},{"el":236,"sc":2,"sl":222},{"el":243,"sc":2,"sl":238},{"el":249,"sc":2,"sl":245},{"el":256,"sc":2,"sl":251},{"el":263,"sc":2,"sl":258},{"el":269,"sc":2,"sl":265},{"el":275,"sc":2,"sl":271},{"el":282,"sc":2,"sl":277},{"el":288,"sc":2,"sl":284},{"el":303,"sc":2,"sl":290},{"el":318,"sc":2,"sl":305},{"el":333,"sc":2,"sl":320},{"el":353,"sc":2,"sl":335},{"el":373,"sc":2,"sl":355},{"el":394,"sc":2,"sl":375},{"el":415,"sc":2,"sl":396},{"el":435,"sc":2,"sl":417},{"el":456,"sc":2,"sl":437},{"el":465,"sc":2,"sl":458},{"el":480,"sc":2,"sl":467},{"el":488,"sc":2,"sl":482},{"el":499,"sc":2,"sl":490},{"el":510,"sc":2,"sl":501},{"el":521,"sc":2,"sl":512},{"el":539,"sc":2,"sl":523},{"el":549,"sc":2,"sl":541},{"el":559,"sc":2,"sl":551},{"el":571,"sc":2,"sl":561},{"el":583,"sc":2,"sl":573},{"el":595,"sc":2,"sl":585},{"el":619,"sc":2,"sl":600},{"el":643,"sc":2,"sl":624},{"el":675,"sc":2,"sl":648},{"el":711,"sc":2,"sl":680},{"el":737,"sc":2,"sl":716},{"el":746,"sc":2,"sl":739},{"el":752,"sc":2,"sl":748},{"el":762,"sc":2,"sl":754},{"el":771,"sc":2,"sl":764},{"el":780,"sc":2,"sl":773},{"el":786,"sc":2,"sl":782},{"el":803,"sc":2,"sl":788},{"el":814,"sc":2,"sl":805},{"el":830,"sc":2,"sl":816},{"el":848,"sc":2,"sl":832},{"el":866,"sc":2,"sl":850},{"el":892,"sc":2,"sl":868},{"el":912,"sc":2,"sl":894},{"el":922,"sc":2,"sl":917},{"el":934,"sc":2,"sl":927},{"el":946,"sc":2,"sl":939},{"el":958,"sc":2,"sl":951},{"el":970,"sc":2,"sl":963},{"el":980,"sc":2,"sl":975},{"el":994,"sc":2,"sl":985},{"el":1008,"sc":2,"sl":999},{"el":1021,"sc":2,"sl":1013},{"el":1033,"sc":2,"sl":1026},{"el":1045,"sc":2,"sl":1038},{"el":1057,"sc":2,"sl":1050},{"el":1092,"sc":2,"sl":1062},{"el":1107,"sc":2,"sl":1097},{"el":1117,"sc":2,"sl":1109},{"el":1121,"sc":2,"sl":1119},{"el":1134,"sc":2,"sl":1123}],"name":"ITestSolrRepositoryOperations","sl":71}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]