var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":722,"id":3267,"methods":[{"el":60,"sc":2,"sl":60},{"el":74,"sc":2,"sl":67},{"el":88,"sc":2,"sl":81},{"el":100,"sc":2,"sl":95},{"el":114,"sc":2,"sl":108},{"el":125,"sc":2,"sl":122},{"el":140,"sc":2,"sl":134},{"el":159,"sc":2,"sl":148},{"el":173,"sc":2,"sl":165},{"el":188,"sc":2,"sl":181},{"el":201,"sc":2,"sl":196},{"el":210,"sc":2,"sl":208},{"el":221,"sc":2,"sl":218},{"el":232,"sc":2,"sl":229},{"el":245,"sc":2,"sl":240},{"el":254,"sc":2,"sl":252},{"el":263,"sc":2,"sl":261},{"el":272,"sc":2,"sl":270},{"el":281,"sc":2,"sl":279},{"el":290,"sc":2,"sl":288},{"el":299,"sc":2,"sl":297},{"el":310,"sc":2,"sl":307},{"el":319,"sc":2,"sl":317},{"el":330,"sc":2,"sl":327},{"el":337,"sc":2,"sl":335},{"el":344,"sc":2,"sl":342},{"el":351,"sc":2,"sl":349},{"el":355,"sc":2,"sl":353},{"el":362,"sc":2,"sl":360},{"el":369,"sc":2,"sl":367},{"el":383,"sc":2,"sl":371},{"el":546,"sc":2,"sl":544}],"name":"FacetOptions","sl":38},{"el":46,"id":3267,"methods":[],"name":"FacetOptions.FacetSort","sl":44},{"el":391,"id":3372,"methods":[{"el":389,"sc":3,"sl":387}],"name":"FacetOptions.FacetParameter","sl":385},{"el":538,"id":3374,"methods":[{"el":399,"sc":3,"sl":397},{"el":407,"sc":3,"sl":404},{"el":414,"sc":3,"sl":412},{"el":422,"sc":3,"sl":419},{"el":429,"sc":3,"sl":427},{"el":437,"sc":3,"sl":434},{"el":444,"sc":3,"sl":442},{"el":452,"sc":3,"sl":449},{"el":459,"sc":3,"sl":457},{"el":467,"sc":3,"sl":464},{"el":474,"sc":3,"sl":472},{"el":483,"sc":3,"sl":480},{"el":490,"sc":3,"sl":488},{"el":499,"sc":3,"sl":496},{"el":506,"sc":3,"sl":504},{"el":516,"sc":3,"sl":514},{"el":525,"sc":3,"sl":518},{"el":536,"sc":3,"sl":533}],"name":"FacetOptions.FieldWithFacetParameters","sl":393},{"el":690,"id":3425,"methods":[{"el":577,"sc":3,"sl":566},{"el":592,"sc":3,"sl":588},{"el":602,"sc":3,"sl":600},{"el":616,"sc":3,"sl":612},{"el":626,"sc":3,"sl":624},{"el":639,"sc":3,"sl":635},{"el":650,"sc":3,"sl":648},{"el":660,"sc":3,"sl":652},{"el":670,"sc":3,"sl":668},{"el":680,"sc":3,"sl":678},{"el":688,"sc":3,"sl":686}],"name":"FacetOptions.FieldWithRangeParameters","sl":557},{"el":705,"id":3462,"methods":[{"el":703,"sc":3,"sl":701}],"name":"FacetOptions.FieldWithDateRangeParameters","sl":698},{"el":720,"id":3464,"methods":[{"el":718,"sc":3,"sl":716}],"name":"FacetOptions.FieldWithNumericRangeParameters","sl":713}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
