(() => {
  const $reinterpret_view = new DataView(new ArrayBuffer(8));
  function $i64_reinterpret_f64(a) {
    $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
    return $reinterpret_view.getFloat64(0, false);
  }
  function _M0TPC28internal7strconv9FloatInfo(param0, param1, param2) {
    this.mantissa_bits = param0;
    this.exponent_bits = param1;
    this.bias = param2;
  }
  class $PanicError extends Error {}
  function $panic() {
    throw new $PanicError();
  }
  function _M0TPB13StringBuilder(param0) {
    this.val = param0;
  }
  function $compare_int(a, b) {
    return (a >= b) - (a <= b);
  }
  function _M0TPC16string10StringView(param0, param1, param2) {
    this.str = param0;
    this.start = param1;
    this.end = param2;
  }
  const _M0FPB19int__to__string__js = (x, radix) => {
    return x.toString(radix);
  };
  function _M0TPB4IterGcE(param0, param1) {
    this.f = param0;
    this.size_hint = param1;
  }
  function $bound_check(arr, index) {
    if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
  }
  function $makebytes(a, b) {
    const arr = new Uint8Array(a);
    if (b !== 0) {
      arr.fill(b);
    }
    return arr;
  }
  function $make_array_len_and_init(a, b) {
    const arr = new Array(a);
    arr.fill(b);
    return arr;
  }
  const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
  function _M0TPB8MutLocalGiE(param0) {
    this.val = param0;
  }
  function _M0TPB9ArrayViewGkE(param0, param1, param2) {
    this.buf = param0;
    this.start = param1;
    this.end = param2;
  }
  function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE2Ok.prototype.$tag = 1;
  function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
    this._0 = param0;
  }
  _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 0;
  function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGuRPB7FailureE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGuRPB7FailureE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGuRPB7FailureE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGuRPB7FailureE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGdRPB7FailureE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGdRPB7FailureE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGdRPB7FailureE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGdRPB7FailureE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGiRPB7FailureE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGiRPB7FailureE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGiRPB7FailureE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGiRPB7FailureE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGlRPB7FailureE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGlRPB7FailureE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGlRPB7FailureE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGlRPB7FailureE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok.prototype.$tag = 1;
  function _M0TPC28internal7strconv6Number(param0, param1, param2, param3) {
    this.exponent = param0;
    this.mantissa = param1;
    this.negative = param2;
    this.many_digits = param3;
  }
  function _M0DTPC16result6ResultGdRPC15error5ErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGdRPC15error5ErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok.prototype.$tag = 1;
  function $i64_clz(a) {
    a = BigInt.asUintN(64, a);
    if (a === 0n) return 64;
    const hi = Number(a >> 32n);
    if (hi !== 0) {
      return Math.clz32(hi);
    }
    return 32 + Math.clz32(Number(a & 0xffffffffn));
  }
  function _M0DTPC16result6ResultGlRPC15error5ErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGlRPC15error5ErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGlRPC15error5ErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGlRPC15error5ErrorE2Ok.prototype.$tag = 1;
  function _M0DTPC16result6ResultGiRPC15error5ErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGiRPC15error5ErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGiRPC15error5ErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGiRPC15error5ErrorE2Ok.prototype.$tag = 1;
  function _M0TPC28internal7strconv7Decimal(param0, param1, param2, param3, param4) {
    this.digits = param0;
    this.digits_num = param1;
    this.decimal_point = param2;
    this.negative = param3;
    this.truncated = param4;
  }
  function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err.prototype.$tag = 0;
  function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(param0) {
    this._0 = param0;
  }
  _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok.prototype.$tag = 1;
  function $f64_convert_i64_u(a) {
    return Number(a);
  }
  function _M0DTPC16option6OptionGdE4None() {}
  _M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
  const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
  function _M0DTPC16option6OptionGdE4Some(param0) {
    this._0 = param0;
  }
  _M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite18CsvValidationError(param0, param1, param2) {
    this.row = param0;
    this.column = param1;
    this.message = param2;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite20CsvDuplicateKeyError(param0, param1, param2) {
    this.first_row = param0;
    this.duplicate_row = param1;
    this.key = param2;
  }
  function _M0TPB8MutLocalGbE(param0) {
    this.val = param0;
  }
  function _M0TPB8MutLocalGdE(param0) {
    this.val = param0;
  }
  function _M0TPB8MutLocalGOdE(param0) {
    this.val = param0;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite13ColumnProfile(param0, param1, param2, param3, param4, param5, param6, param7, param8) {
    this.name = param0;
    this.total = param1;
    this.empty = param2;
    this.non_empty = param3;
    this.unique = param4;
    this.inferred = param5;
    this.min = param6;
    this.max = param7;
    this.average = param8;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite21CsvInferredColumnRule(param0, param1, param2, param3, param4, param5, param6) {
    this.name = param0;
    this.kind = param1;
    this.required = param2;
    this.total = param3;
    this.empty = param4;
    this.unique = param5;
    this.examples = param6;
  }
  function _M0TPB8MutLocalGRPB5ArrayGsEE(param0) {
    this.val = param0;
  }
  function _M0TPB8MutLocalGRP28clhhhhhh17moon_2dcsv_2dlite10ParseStateE(param0) {
    this.val = param0;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite8CsvTable(param0, param1) {
    this.headers = param0;
    this.rows = param1;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite10CsvDialect(param0, param1, param2) {
    this.delimiter = param0;
    this.newline = param1;
    this.skip_empty_lines = param2;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite19CsvDialectCandidate(param0, param1, param2, param3, param4, param5, param6) {
    this.name = param0;
    this.delimiter = param1;
    this.rows = param2;
    this.columns = param3;
    this.consistent_rows = param4;
    this.empty_cells = param5;
    this.score = param6;
  }
  function _M0TPB8MutLocalGRP28clhhhhhh17moon_2dcsv_2dlite19CsvDialectCandidateE(param0) {
    this.val = param0;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite21CsvQualityGateOptions(param0, param1, param2, param3, param4, param5, param6) {
    this.min_score = param0;
    this.max_score_drop = param1;
    this.max_quality_issues = param2;
    this.allow_new_columns = param3;
    this.allow_removed_columns = param4;
    this.allow_type_changes = param5;
    this.allow_missing_increase = param6;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite20CsvAuditQualityIssue(param0, param1, param2, param3) {
    this.severity = param0;
    this.row = param1;
    this.column = param2;
    this.message = param3;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvParseError(param0, param1, param2) {
    this.message = param0;
    this.line = param1;
    this.column = param2;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite14CsvParseReport(param0, param1) {
    this.rows = param0;
    this.issues = param1;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite19CsvTableParseReport(param0, param1) {
    this.table = param0;
    this.issues = param1;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite14CsvAuditReport(param0, param1, param2, param3, param4, param5, param6) {
    this.dialect = param0;
    this.table = param1;
    this.parse_issues = param2;
    this.quality_issues = param3;
    this.inferred_schema = param4;
    this.missing_summary = param5;
    this.profiles = param6;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvAuditScore(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
    this.score = param0;
    this.grade = param1;
    this.risk = param2;
    this.structure_score = param3;
    this.completeness_score = param4;
    this.consistency_score = param5;
    this.uniqueness_score = param6;
    this.issue_penalty = param7;
    this.missing_cells = param8;
    this.total_cells = param9;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssue(param0, param1, param2, param3) {
    this.severity = param0;
    this.category = param1;
    this.column = param2;
    this.message = param3;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite14CsvDriftReport(param0, param1, param2, param3, param4, param5, param6, param7) {
    this.baseline = param0;
    this.candidate = param1;
    this.baseline_score = param2;
    this.candidate_score = param3;
    this.score_delta = param4;
    this.row_delta = param5;
    this.column_delta = param6;
    this.issues = param7;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite19CsvQualityGateIssue(param0, param1, param2, param3) {
    this.severity = param0;
    this.rule = param1;
    this.column = param2;
    this.message = param3;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite20CsvQualityGateReport(param0, param1, param2, param3) {
    this.passed = param0;
    this.options = param1;
    this.drift = param2;
    this.issues = param3;
  }
  function _M0TPB8MutLocalGsE(param0) {
    this.val = param0;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvColumnRule(param0, param1, param2) {
    this.name = param0;
    this.kind = param1;
    this.required = param2;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite21CsvContractNumberRule(param0, param1) {
    this.column = param0;
    this.value = param1;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite28CsvContractAllowedValuesRule(param0, param1, param2) {
    this.column = param0;
    this.allowed = param1;
    this.required = param2;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRule(param0) {
    this.columns = param0;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite18CsvQualityContract(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11) {
    this.name = param0;
    this.min_score = param1;
    this.max_parse_issues = param2;
    this.max_quality_issues = param3;
    this.min_rows = param4;
    this.max_rows = param5;
    this.required_columns = param6;
    this.column_rules = param7;
    this.min_number_rules = param8;
    this.max_number_rules = param9;
    this.allowed_values_rules = param10;
    this.unique_key_rules = param11;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite16CsvContractIssue(param0, param1, param2, param3, param4) {
    this.severity = param0;
    this.rule = param1;
    this.row = param2;
    this.column = param3;
    this.message = param4;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite17CsvContractReport(param0, param1, param2, param3, param4) {
    this.passed = param0;
    this.contract = param1;
    this.audit = param2;
    this.score = param3;
    this.issues = param4;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite22CsvAuditRecommendation(param0, param1) {
    this.severity = param0;
    this.message = param1;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite15CsvDataPassport(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17) {
    this.name = param0;
    this.fingerprint = param1;
    this.dialect = param2;
    this.rows = param3;
    this.columns = param4;
    this.cells = param5;
    this.missing_cells = param6;
    this.parse_issues = param7;
    this.quality_issues = param8;
    this.required_columns = param9;
    this.optional_columns = param10;
    this.numeric_columns = param11;
    this.boolean_columns = param12;
    this.text_columns = param13;
    this.unique_columns = param14;
    this.score = param15;
    this.schema = param16;
    this.recommendations = param17;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvChartPoint(param0, param1, param2) {
    this.label = param0;
    this.value = param1;
    this.count = param2;
  }
  function _M0TP28clhhhhhh17moon_2dcsv_2dlite12CsvChartSpec(param0, param1, param2, param3, param4, param5, param6, param7) {
    this.kind = param0;
    this.title = param1;
    this.label_column = param2;
    this.value_column = param3;
    this.measure = param4;
    this.points = param5;
    this.skipped_rows = param6;
    this.warnings = param7;
  }
  const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
  const _M0MPB4Iter4nextN6constrS8926GcE = 0;
  const _M0MPB4Iter4nextN6constrS8927GcE = 0;
  const _M0MPB4Iter3newN6constrS8934GcE = 0;
  const _M0FPC16double14not__a__number = $i64_reinterpret_f64(9221120237041090561n);
  const _M0FPC16double8infinity = $i64_reinterpret_f64(9218868437227405312n);
  const _M0FPC16double13neg__infinity = $i64_reinterpret_f64(18442240474082181120n);
  const _M0FPC28internal7strconv14base__err__str = "invalid base";
  const _M0FPC28internal7strconv15range__err__str = "value out of range";
  const _M0FPC28internal7strconv16syntax__err__str = "invalid syntax";
  const _M0FPC28internal7strconv17min__19digit__int = 1000000000000000000n;
  const _M0FPC28internal7strconv17parse__scientificN8exp__numS241 = 0n;
  const _M0FPC28internal7strconv13parse__numberN11exp__numberS222 = 0n;
  const _M0FPC28internal7strconv20parse__int64_2einnerN7_2abindS622 = "";
  const _M0FPC28internal7strconv12double__info = new _M0TPC28internal7strconv9FloatInfo(52, 11, -1023);
  const _M0FPC28internal7strconv25min__exponent__fast__path = 18446744073709551594n;
  const _M0FPC28internal7strconv25max__exponent__fast__path = 22n;
  const _M0FPC28internal7strconv36max__exponent__disguised__fast__path = 37n;
  const _M0FPC28internal7strconv25max__mantissa__fast__path = 9007199254740992n;
  const _M0FPC28internal7strconv6powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS967 = { _0: 0, _1: "" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS968 = { _0: 1, _1: "5" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS969 = { _0: 1, _1: "25" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS970 = { _0: 1, _1: "125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS971 = { _0: 2, _1: "625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS972 = { _0: 2, _1: "3125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS973 = { _0: 2, _1: "15625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS974 = { _0: 3, _1: "78125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS975 = { _0: 3, _1: "390625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS976 = { _0: 3, _1: "1953125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS977 = { _0: 4, _1: "9765625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS978 = { _0: 4, _1: "48828125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS979 = { _0: 4, _1: "244140625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS980 = { _0: 4, _1: "1220703125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS981 = { _0: 5, _1: "6103515625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS982 = { _0: 5, _1: "30517578125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS983 = { _0: 5, _1: "152587890625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS984 = { _0: 6, _1: "762939453125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS985 = { _0: 6, _1: "3814697265625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS986 = { _0: 6, _1: "19073486328125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS987 = { _0: 7, _1: "95367431640625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS988 = { _0: 7, _1: "476837158203125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS989 = { _0: 7, _1: "2384185791015625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS990 = { _0: 7, _1: "11920928955078125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS991 = { _0: 8, _1: "59604644775390625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS992 = { _0: 8, _1: "298023223876953125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS993 = { _0: 8, _1: "1490116119384765625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS994 = { _0: 9, _1: "7450580596923828125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS995 = { _0: 9, _1: "37252902984619140625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS996 = { _0: 9, _1: "186264514923095703125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS997 = { _0: 10, _1: "931322574615478515625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS998 = { _0: 10, _1: "4656612873077392578125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS999 = { _0: 10, _1: "23283064365386962890625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1000 = { _0: 10, _1: "116415321826934814453125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1001 = { _0: 11, _1: "582076609134674072265625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1002 = { _0: 11, _1: "2910383045673370361328125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1003 = { _0: 11, _1: "14551915228366851806640625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1004 = { _0: 12, _1: "72759576141834259033203125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1005 = { _0: 12, _1: "363797880709171295166015625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1006 = { _0: 12, _1: "1818989403545856475830078125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1007 = { _0: 13, _1: "9094947017729282379150390625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1008 = { _0: 13, _1: "45474735088646411895751953125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1009 = { _0: 13, _1: "227373675443232059478759765625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1010 = { _0: 13, _1: "1136868377216160297393798828125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1011 = { _0: 14, _1: "5684341886080801486968994140625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1012 = { _0: 14, _1: "28421709430404007434844970703125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1013 = { _0: 14, _1: "142108547152020037174224853515625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1014 = { _0: 15, _1: "710542735760100185871124267578125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1015 = { _0: 15, _1: "3552713678800500929355621337890625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1016 = { _0: 15, _1: "17763568394002504646778106689453125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1017 = { _0: 16, _1: "88817841970012523233890533447265625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1018 = { _0: 16, _1: "444089209850062616169452667236328125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1019 = { _0: 16, _1: "2220446049250313080847263336181640625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1020 = { _0: 16, _1: "11102230246251565404236316680908203125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1021 = { _0: 17, _1: "55511151231257827021181583404541015625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1022 = { _0: 17, _1: "277555756156289135105907917022705078125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023 = { _0: 17, _1: "1387778780781445675529539585113525390625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024 = { _0: 18, _1: "6938893903907228377647697925567626953125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025 = { _0: 18, _1: "34694469519536141888238489627838134765625" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026 = { _0: 18, _1: "173472347597680709441192448139190673828125" };
  const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027 = { _0: 19, _1: "867361737988403547205962240695953369140625" };
  const _M0FPC28internal7strconv19left__shift__cheats = [_M0FPC28internal7strconv19left__shift__cheatsN5tupleS967, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS968, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS969, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS970, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS971, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS972, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS973, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS974, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS975, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS976, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS977, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS978, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS979, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS980, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS981, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS982, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS983, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS984, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS985, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS986, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS987, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS988, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS989, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS990, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS991, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS992, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS993, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS994, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS995, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS996, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS997, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS998, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS999, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1000, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1001, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1002, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1003, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1004, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1005, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1006, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1007, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1008, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1009, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1010, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1011, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1012, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1013, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1014, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1015, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1016, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1017, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1018, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1019, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1020, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1021, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1022, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027];
  const _M0FPC28internal7strconv10int__pow10 = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
  const _M0FPC28internal7strconv5table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const _M0FPC28internal7strconv12checked__mulN6constrS1108 = 0n;
  const _M0FPB18brute__force__findN6constrS8937 = 0;
  const _M0FPB28boyer__moore__horspool__findN6constrS8936 = 0;
  function _M0FPC15abort5abortGRPC16string10StringViewE(msg) {
    return $panic();
  }
  function _M0FPC15abort5abortGuE(msg) {
    $panic();
  }
  function _M0FPC15abort5abortGOiE(msg) {
    return $panic();
  }
  function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
    _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  }
  function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
    _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  }
  function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
    _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  }
  function _M0MPC13int3Int16unsafe__to__char(self) {
    return self;
  }
  function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
    return new _M0TPB13StringBuilder("");
  }
  function _M0MPB13StringBuilder10to__string(self) {
    return self.val;
  }
  function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
    self.val = `${self.val}${String.fromCodePoint(ch)}`;
  }
  function _M0MPC16uint166UInt1622is__leading__surrogate(self) {
    return _M0IP016_24default__implPB7Compare6op__geGkE(self, 55296) && _M0IP016_24default__implPB7Compare6op__leGkE(self, 56319);
  }
  function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
    return _M0IP016_24default__implPB7Compare6op__geGkE(self, 56320) && _M0IP016_24default__implPB7Compare6op__leGkE(self, 57343);
  }
  function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
    return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
  }
  function _M0MPC16uint166UInt1616unsafe__to__char(self) {
    return self;
  }
  function _M0MPC16string6String16unsafe__char__at(self, index) {
    const c1 = self.charCodeAt(index);
    if (_M0MPC16uint166UInt1622is__leading__surrogate(c1)) {
      const c2 = self.charCodeAt(index + 1 | 0);
      return _M0FPB32code__point__of__surrogate__pair(c1, c2);
    } else {
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    }
  }
  function _M0MPC16string10StringView6length(self) {
    return self.end - self.start | 0;
  }
  function _M0MPC16string10StringView11unsafe__get(self, index) {
    return self.str.charCodeAt(self.start + index | 0);
  }
  function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
    self.val = `${self.val}${str}`;
  }
  function _M0MPC16uint646UInt648to__byte(self) {
    return (Number(BigInt.asIntN(32, self)) | 0) & 255;
  }
  function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
    return self === that;
  }
  function _M0IPC16uint166UInt16PB2Eq10not__equal(self, that) {
    return self !== that;
  }
  function _M0IPC16uint166UInt16PB7Compare7compare(self, that) {
    return $compare_int(self, that);
  }
  function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
    return !(x === y);
  }
  function _M0IP016_24default__implPB2Eq10not__equalGRP28clhhhhhh17moon_2dcsv_2dlite13CsvColumnTypeE(x, y) {
    return !_M0IP28clhhhhhh17moon_2dcsv_2dlite13CsvColumnTypePB2Eq5equal(x, y);
  }
  function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
    return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
  }
  function _M0IP016_24default__implPB7Compare6op__leGkE(x, y) {
    return _M0IPC16uint166UInt16PB7Compare7compare(x, y) <= 0;
  }
  function _M0IP016_24default__implPB7Compare6op__geGkE(x, y) {
    return _M0IPC16uint166UInt16PB7Compare7compare(x, y) >= 0;
  }
  function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
    show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  }
  function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
    show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  }
  function _M0MPC16string6String11sub_2einner(self, start, end) {
    const len = self.length;
    let end$2;
    if (end === undefined) {
      end$2 = len;
    } else {
      const _Some = end;
      const _end = _Some;
      end$2 = _end < 0 ? len + _end | 0 : _end;
    }
    const start$2 = start < 0 ? len + start | 0 : start;
    if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
      if (start$2 < len) {
        if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start$2))) {
        } else {
          $panic();
        }
      }
      if (end$2 < len) {
        if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
        } else {
          $panic();
        }
      }
      return new _M0TPC16string10StringView(self, start$2, end$2);
    } else {
      return $panic();
    }
  }
  function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
    _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
  }
  function _M0MPC16string10StringView4data(self) {
    return self.str;
  }
  function _M0MPC16string10StringView13start__offset(self) {
    return self.start;
  }
  function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
    logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
  }
  function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
    logger.method_table.method_0(logger.self, _M0IPC16string6StringPB4Show10to__string(self));
  }
  function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
    logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
  }
  function _M0MPB4Iter4nextGcE(self) {
    const _func = self.f;
    const result = _func();
    const _bind = self.size_hint;
    if (result === -1) {
      self.size_hint = _M0MPB4Iter4nextN6constrS8927GcE;
    } else {
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _n = _Some;
        self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS8926GcE;
      }
    }
    return result;
  }
  function _M0MPC13int3Int18to__string_2einner(self, radix) {
    return _M0FPB19int__to__string__js(self, radix);
  }
  function _M0MPB4Iter3newGcE(f, size_hint) {
    let size_hint$2;
    if (size_hint === undefined) {
      size_hint$2 = undefined;
    } else {
      const _Some = size_hint;
      const _n = _Some;
      size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS8934GcE;
    }
    return new _M0TPB4IterGcE(f, size_hint$2);
  }
  function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
    let end_offset$2;
    if (end_offset === undefined) {
      end_offset$2 = _M0MPC16string10StringView6length(self);
    } else {
      const _Some = end_offset;
      end_offset$2 = _Some;
    }
    return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= _M0MPC16string10StringView6length(self)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGRPC16string10StringViewE("Invalid index for View");
  }
  function _M0MPC15array5Array5makeiGkE(length, f) {
    if (length <= 0) {
      return [];
    } else {
      const array = new Array(length);
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < length) {
          array[i] = f(i);
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return array;
    }
  }
  function _M0IPC14byte4BytePB7Default7default() {
    return 0;
  }
  function _M0MPC16string10StringView9to__owned(self) {
    return self.str.substring(self.start, self.end);
  }
  function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
    const len = _M0MPC16string10StringView6length(self);
    if (len === _M0MPC16string10StringView6length(other)) {
      if (self.str === other.str && self.start === other.start) {
        return true;
      }
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < len) {
          if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + i | 0), other.str.charCodeAt(other.start + i | 0))) {
          } else {
            return false;
          }
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return true;
    } else {
      return false;
    }
  }
  function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
    let end_offset$2;
    if (end_offset === undefined) {
      end_offset$2 = self.length;
    } else {
      const _Some = end_offset;
      end_offset$2 = _Some;
    }
    return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? new _M0TPC16string10StringView(self, start_offset, end_offset$2) : _M0FPC15abort5abortGRPC16string10StringViewE("Invalid index for View");
  }
  function _M0MPC16string6String4view(self, start_offset$46$opt, end_offset) {
    let start_offset;
    if (start_offset$46$opt === undefined) {
      start_offset = 0;
    } else {
      const _Some = start_offset$46$opt;
      start_offset = _Some;
    }
    return _M0MPC16string6String12view_2einner(self, start_offset, end_offset);
  }
  function _M0MPC16string6String24char__length__ge_2einner(self, len, start_offset, end_offset) {
    let end_offset$2;
    if (end_offset === undefined) {
      end_offset$2 = self.length;
    } else {
      const _Some = end_offset;
      end_offset$2 = _Some;
    }
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const index = _tmp;
      const count = _tmp$2;
      if (index < end_offset$2 && count < len) {
        const c1 = self.charCodeAt(index);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index + 1 | 0) < end_offset$2) {
          const c2 = self.charCodeAt(index + 1 | 0);
          if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
            _tmp = index + 2 | 0;
            _tmp$2 = count + 1 | 0;
            continue;
          } else {
            _M0FPC15abort5abortGuE("invalid surrogate pair");
          }
        }
        _tmp = index + 1 | 0;
        _tmp$2 = count + 1 | 0;
        continue;
      } else {
        return count >= len;
      }
    }
  }
  function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
    let _tmp = end_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset - 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c)) {
          _tmp = utf16_offset - 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset - 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
      }
    }
  }
  function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
    if (start_offset >= 0 && start_offset <= end_offset) {
      let _tmp = start_offset;
      let _tmp$2 = 0;
      while (true) {
        const utf16_offset = _tmp;
        const char_count = _tmp$2;
        if (utf16_offset < end_offset && char_count < n) {
          const c = self.charCodeAt(utf16_offset);
          if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
            _tmp = utf16_offset + 2 | 0;
            _tmp$2 = char_count + 1 | 0;
            continue;
          } else {
            _tmp = utf16_offset + 1 | 0;
            _tmp$2 = char_count + 1 | 0;
            continue;
          }
        } else {
          return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
        }
      }
    } else {
      return _M0FPC15abort5abortGOiE("Invalid start index");
    }
  }
  function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
    let end_offset$2;
    if (end_offset === undefined) {
      end_offset$2 = self.length;
    } else {
      const _Some = end_offset;
      end_offset$2 = _Some;
    }
    return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
  }
  function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
    self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
  }
  function _M0MPB13StringBuilder5reset(self) {
    self.val = "";
  }
  function _M0FPB28boyer__moore__horspool__find(haystack, needle) {
    const haystack_len = _M0MPC16string10StringView6length(haystack);
    const needle_len = _M0MPC16string10StringView6length(needle);
    if (needle_len > 0) {
      if (haystack_len >= needle_len) {
        const skip_table = $make_array_len_and_init(256, needle_len);
        const _bind = needle_len - 1 | 0;
        let _tmp = 0;
        while (true) {
          const i = _tmp;
          if (i < _bind) {
            const _tmp$2 = _M0MPC16string10StringView11unsafe__get(needle, i) & 255;
            $bound_check(skip_table, _tmp$2);
            skip_table[_tmp$2] = (needle_len - 1 | 0) - i | 0;
            _tmp = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        let _tmp$2 = 0;
        while (true) {
          const i = _tmp$2;
          if (i <= (haystack_len - needle_len | 0)) {
            const _bind$2 = needle_len - 1 | 0;
            let _tmp$3 = 0;
            while (true) {
              const j = _tmp$3;
              if (j <= _bind$2) {
                if (_M0IPC16uint166UInt16PB2Eq10not__equal(_M0MPC16string10StringView11unsafe__get(haystack, i + j | 0), _M0MPC16string10StringView11unsafe__get(needle, j))) {
                  break;
                }
                _tmp$3 = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
            const _tmp$4 = _M0MPC16string10StringView11unsafe__get(haystack, (i + needle_len | 0) - 1 | 0) & 255;
            $bound_check(skip_table, _tmp$4);
            _tmp$2 = i + skip_table[_tmp$4] | 0;
            continue;
          } else {
            break;
          }
        }
        return undefined;
      } else {
        return undefined;
      }
    } else {
      return _M0FPB28boyer__moore__horspool__findN6constrS8936;
    }
  }
  function _M0FPB18brute__force__find(haystack, needle) {
    const haystack_len = _M0MPC16string10StringView6length(haystack);
    const needle_len = _M0MPC16string10StringView6length(needle);
    if (needle_len > 0) {
      if (haystack_len >= needle_len) {
        const needle_first = _M0MPC16string10StringView11unsafe__get(needle, 0);
        const forward_len = haystack_len - needle_len | 0;
        let _tmp = 0;
        while (true) {
          const i = _tmp;
          if (i <= forward_len) {
            if (_M0IPC16uint166UInt16PB2Eq10not__equal(_M0MPC16string10StringView11unsafe__get(haystack, i), needle_first)) {
              _tmp = i + 1 | 0;
              continue;
            }
            let _tmp$2 = 1;
            while (true) {
              const j = _tmp$2;
              if (j < needle_len) {
                if (_M0IPC16uint166UInt16PB2Eq10not__equal(_M0MPC16string10StringView11unsafe__get(haystack, i + j | 0), _M0MPC16string10StringView11unsafe__get(needle, j))) {
                  break;
                }
                _tmp$2 = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
            _tmp = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return undefined;
      } else {
        return undefined;
      }
    } else {
      return _M0FPB18brute__force__findN6constrS8937;
    }
  }
  function _M0MPC16string10StringView4find(self, str) {
    return _M0MPC16string10StringView6length(str) <= 4 ? _M0FPB18brute__force__find(self, str) : _M0FPB28boyer__moore__horspool__find(self, str);
  }
  function _M0IPC16string6StringPB4Show10to__string(self) {
    return self;
  }
  function _M0MPC16string10StringView8find__by(self, pred) {
    const _bind = self.str;
    const _bind$2 = self.start;
    const _bind$3 = self.end;
    let _tmp = _bind$2;
    let _tmp$2 = 0;
    while (true) {
      const _string_index = _tmp;
      const i = _tmp$2;
      if (_string_index < _bind$3) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$4 = _bind.charCodeAt(_string_index);
          if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
            const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
            if (_bind$5 >= 56320 && _bind$5 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
            break _L;
          }
        }
        const _next_char_index = i + 1 | 0;
        if (pred(_decoded_char)) {
          return i;
        }
        _tmp = _decoded_next_string_index;
        _tmp$2 = _next_char_index;
        continue;
      } else {
        break;
      }
    }
    return undefined;
  }
  function _M0MPC16string6String8find__by(self, pred) {
    return _M0MPC16string10StringView8find__by(new _M0TPC16string10StringView(self, 0, self.length), pred);
  }
  function _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(capacity) {
    return [];
  }
  function _M0MPC15array5Array11new_2einnerGcE(capacity) {
    return [];
  }
  function _M0MPC15array5Array11new_2einnerGRPB5ArrayGsEE(capacity) {
    return [];
  }
  function _M0MPC15array5Array11new_2einnerGdE(capacity) {
    return [];
  }
  function _M0MPC15array5Array11new_2einnerGiE(capacity) {
    return [];
  }
  function _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(self, value) {
    _M0MPB7JSArray4push(self, value);
  }
  function _M0MPC15array5Array4pushGcE(self, value) {
    _M0MPB7JSArray4push(self, value);
  }
  function _M0MPC15array5Array4pushGRPB5ArrayGsEE(self, value) {
    _M0MPB7JSArray4push(self, value);
  }
  function _M0MPC15array5Array4pushGdE(self, value) {
    _M0MPB7JSArray4push(self, value);
  }
  function _M0MPC15array5Array4pushGiE(self, value) {
    _M0MPB7JSArray4push(self, value);
  }
  function _M0MPC16string10StringView20contains__code__unit(self, code) {
    const _bind = _M0MPC16string10StringView6length(self);
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < _bind) {
        if (_M0IPC16uint166UInt16PB2Eq5equal(_M0MPC16string10StringView11unsafe__get(self, i), code)) {
          return true;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return false;
  }
  function _M0MPC16string10StringView8contains(self, str) {
    const _bind = _M0MPC16string10StringView6length(str);
    switch (_bind) {
      case 0: {
        return true;
      }
      case 1: {
        return _M0MPC16string10StringView20contains__code__unit(self, _M0MPC16string10StringView11unsafe__get(str, 0));
      }
      default: {
        const _bind$2 = _M0MPC16string10StringView4find(self, str);
        return !(_bind$2 === undefined);
      }
    }
  }
  function _M0MPC16string6String8contains(self, str) {
    return _M0MPC16string10StringView8contains(new _M0TPC16string10StringView(self, 0, self.length), str);
  }
  function _M0MPC16string10StringView9is__empty(self) {
    return _M0MPC16string10StringView6length(self) === 0;
  }
  function _M0MPC16string6String9is__empty(self) {
    return self === "";
  }
  function _M0MPC16string6String4iter(self) {
    const len = self.length;
    const index = new _M0TPB8MutLocalGiE(0);
    return _M0MPB4Iter3newGcE(() => {
      if (index.val < len) {
        const c1 = self.charCodeAt(index.val);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < len) {
          const c2 = self.charCodeAt(index.val + 1 | 0);
          if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
            const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
            index.val = index.val + 2 | 0;
            return c;
          }
        }
        index.val = index.val + 1 | 0;
        return _M0MPC16uint166UInt1616unsafe__to__char(c1);
      } else {
        return -1;
      }
    }, undefined);
  }
  function _M0MPC14char4Char20is__ascii__uppercase(self) {
    return self >= 65 && self <= 90;
  }
  function _M0MPC16string6String9to__lower(self) {
    const _bind = _M0MPC16string6String8find__by(self, (x) => _M0MPC14char4Char20is__ascii__uppercase(x));
    if (_bind === undefined) {
      return self;
    } else {
      const _Some = _bind;
      const _idx = _Some;
      const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
      const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
      _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(head), _M0MPC16string10StringView13start__offset(head), _M0MPC16string10StringView6length(head));
      const _bind$2 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
      const _bind$3 = _bind$2.str;
      const _bind$4 = _bind$2.start;
      const _bind$5 = _bind$2.end;
      let _tmp = _bind$4;
      while (true) {
        const _string_index = _tmp;
        if (_string_index < _bind$5) {
          let _decoded_next_string_index;
          let _decoded_char;
          _L: {
            const _bind$6 = _bind$3.charCodeAt(_string_index);
            if (_bind$6 >= 55296 && _bind$6 <= 56319 && (_string_index + 1 | 0) < _bind$5) {
              const _bind$7 = _bind$3.charCodeAt(_string_index + 1 | 0);
              if (_bind$7 >= 56320 && _bind$7 <= 57343) {
                _decoded_next_string_index = _string_index + 2 | 0;
                _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$6 - 55296 | 0, 1024) | 0) + _bind$7 | 0) - 56320 | 0) + 65536 | 0);
                break _L;
              } else {
                _decoded_next_string_index = _string_index + 1 | 0;
                _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
                break _L;
              }
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
              break _L;
            }
          }
          if (_M0MPC14char4Char20is__ascii__uppercase(_decoded_char)) {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char + 32 | 0);
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
          }
          _tmp = _decoded_next_string_index;
          continue;
        } else {
          break;
        }
      }
      return _M0MPB13StringBuilder10to__string(buf);
    }
  }
  function _M0MPC16string6String11code__units(self) {
    const _bind = _M0MPC15array5Array5makeiGkE(self.length, (i) => self.charCodeAt(i));
    return new _M0TPB9ArrayViewGkE(_bind, 0, _bind.length);
  }
  function _M0IPC13int3IntPB4Show10to__string(self) {
    return _M0MPC13int3Int18to__string_2einner(self, 10);
  }
  function _M0MPC15array13ReadOnlyArray2atGmE(self, index) {
    $bound_check(self, index);
    return self[index];
  }
  function _M0MPC15array13ReadOnlyArray2atGiE(self, index) {
    $bound_check(self, index);
    return self[index];
  }
  function _M0MPC15array13ReadOnlyArray2atGdE(self, index) {
    $bound_check(self, index);
    return self[index];
  }
  function _M0MPC15array13ReadOnlyArray6lengthGiE(self) {
    return self.length;
  }
  function _M0MPC16option6Option10unwrap__orGdE(self, default_) {
    if (self.$tag === 0) {
      return default_;
    } else {
      const _Some = self;
      return _Some._0;
    }
  }
  function _M0IPC14byte4BytePB2Eq5equal(self, that) {
    return self === that;
  }
  function _M0MPC16string6String20unsafe__charcode__at(self, idx) {
    return self.charCodeAt(idx);
  }
  function _M0MPC14byte4Byte9to__int64(self) {
    return BigInt.asUintN(64, BigInt(self));
  }
  function _M0IPC16double6DoublePB4Show10to__string(self) {
    return String(self);
  }
  function _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(self, index) {
    const len = self.length;
    if (index >= 0 && index < len) {
      $bound_check(self, index);
      return self[index];
    } else {
      return $panic();
    }
  }
  function _M0MPC15array5Array2atGRPB5ArrayGsEE(self, index) {
    const len = self.length;
    if (index >= 0 && index < len) {
      $bound_check(self, index);
      return self[index];
    } else {
      return $panic();
    }
  }
  function _M0MPC15array5Array2atGcE(self, index) {
    const len = self.length;
    if (index >= 0 && index < len) {
      $bound_check(self, index);
      return self[index];
    } else {
      return $panic();
    }
  }
  function _M0MPC15array5Array2atGdE(self, index) {
    const len = self.length;
    if (index >= 0 && index < len) {
      $bound_check(self, index);
      return self[index];
    } else {
      return $panic();
    }
  }
  function _M0MPC15array5Array2atGiE(self, index) {
    const len = self.length;
    if (index >= 0 && index < len) {
      $bound_check(self, index);
      return self[index];
    } else {
      return $panic();
    }
  }
  function _M0MPC15array5Array3setGdE(self, index, value) {
    const len = self.length;
    if (index >= 0 && index < len) {
      $bound_check(self, index);
      self[index] = value;
      return;
    } else {
      $panic();
      return;
    }
  }
  function _M0MPC15array5Array3setGiE(self, index, value) {
    const len = self.length;
    if (index >= 0 && index < len) {
      $bound_check(self, index);
      self[index] = value;
      return;
    } else {
      $panic();
      return;
    }
  }
  function _M0FPC28internal7strconv9base__errGUiRPC16string10StringViewbEE() {
    return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv14base__err__str));
  }
  function _M0FPC28internal7strconv25check__and__consume__base(view, base) {
    if (base === 0) {
      _L: {
        let rest;
        _L$2: {
          let rest$2;
          _L$3: {
            let rest$3;
            _L$4: {
              if ((view.end - view.start | 0) >= 2) {
                const _x = view.str.charCodeAt(view.start);
                if (_x === 48) {
                  const _x$2 = view.str.charCodeAt(view.start + 1 | 0);
                  switch (_x$2) {
                    case 120: {
                      const _x$3 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      rest$3 = _x$3;
                      break _L$4;
                    }
                    case 88: {
                      const _x$4 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      rest$3 = _x$4;
                      break _L$4;
                    }
                    case 111: {
                      const _x$5 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      rest$2 = _x$5;
                      break _L$3;
                    }
                    case 79: {
                      const _x$6 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      rest$2 = _x$6;
                      break _L$3;
                    }
                    case 98: {
                      const _x$7 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      rest = _x$7;
                      break _L$2;
                    }
                    case 66: {
                      const _x$8 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      rest = _x$8;
                      break _L$2;
                    }
                    default: {
                      break _L;
                    }
                  }
                } else {
                  break _L;
                }
              } else {
                break _L;
              }
            }
            return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 16, _1: rest$3, _2: true });
          }
          return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 8, _1: rest$2, _2: true });
        }
        return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 2, _1: rest, _2: true });
      }
      return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 10, _1: view, _2: false });
    } else {
      _L: {
        let rest;
        _L$2: {
          let rest$2;
          _L$3: {
            let rest$3;
            _L$4: {
              if ((view.end - view.start | 0) >= 2) {
                const _x = view.str.charCodeAt(view.start);
                if (_x === 48) {
                  const _x$2 = view.str.charCodeAt(view.start + 1 | 0);
                  switch (_x$2) {
                    case 120: {
                      const _x$3 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      if (base === 16) {
                        rest$3 = _x$3;
                        break _L$4;
                      } else {
                        break _L;
                      }
                    }
                    case 88: {
                      const _x$4 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      if (base === 16) {
                        rest$3 = _x$4;
                        break _L$4;
                      } else {
                        break _L;
                      }
                    }
                    case 111: {
                      const _x$5 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      if (base === 8) {
                        rest$2 = _x$5;
                        break _L$3;
                      } else {
                        break _L;
                      }
                    }
                    case 79: {
                      const _x$6 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      if (base === 8) {
                        rest$2 = _x$6;
                        break _L$3;
                      } else {
                        break _L;
                      }
                    }
                    case 98: {
                      const _x$7 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      if (base === 2) {
                        rest = _x$7;
                        break _L$2;
                      } else {
                        break _L;
                      }
                    }
                    case 66: {
                      const _x$8 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                      if (base === 2) {
                        rest = _x$8;
                        break _L$2;
                      } else {
                        break _L;
                      }
                    }
                    default: {
                      break _L;
                    }
                  }
                } else {
                  break _L;
                }
              } else {
                break _L;
              }
            }
            return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 16, _1: rest$3, _2: true });
          }
          return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 8, _1: rest$2, _2: true });
        }
        return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 2, _1: rest, _2: true });
      }
      return base >= 2 && base <= 36 ? new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: base, _1: view, _2: false }) : _M0FPC28internal7strconv9base__errGUiRPC16string10StringViewbEE();
    }
  }
  function _M0FPC28internal7strconv10range__errGuE() {
    return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv15range__err__str));
  }
  function _M0FPC28internal7strconv11syntax__errGdE() {
    return new _M0DTPC16result6ResultGdRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
  }
  function _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE() {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
  }
  function _M0FPC28internal7strconv11syntax__errGiE() {
    return new _M0DTPC16result6ResultGiRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
  }
  function _M0FPC28internal7strconv11syntax__errGuE() {
    return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
  }
  function _M0FPC28internal7strconv11syntax__errGlE() {
    return new _M0DTPC16result6ResultGlRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
  }
  function _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(self, init, f) {
    let _tmp = self;
    let _tmp$2 = init;
    let _tmp$3 = 0;
    while (true) {
      const str = _tmp;
      const ret = _tmp$2;
      const len = _tmp$3;
      _L: {
        if ((str.end - str.start | 0) >= 1) {
          const _x = str.str.charCodeAt(str.start);
          if (_x >= 48 && _x <= 57) {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            _tmp = _x$2;
            _tmp$2 = f(_x - 48 | 0, ret);
            _tmp$3 = len + 1 | 0;
            continue;
          } else {
            if (_x === 95) {
              const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
              _tmp = _x$2;
              continue;
            } else {
              break _L;
            }
          }
        } else {
          break _L;
        }
      }
      return { _0: str, _1: ret, _2: len };
    }
  }
  function _M0FPC28internal7strconv13parse__digits(s, x) {
    return _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s, x, (digit, acc) => BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0))));
  }
  function _M0FPC28internal7strconv20try__parse__19digits(s, x) {
    let x$2 = x;
    let len = 0;
    let _tmp = s;
    while (true) {
      const s$2 = _tmp;
      let s$3;
      _L: {
        if ((s$2.end - s$2.start | 0) >= 1) {
          const _x = s$2.str.charCodeAt(s$2.start);
          if (_x >= 48 && _x <= 57) {
            const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
            if (BigInt.asUintN(64, x$2) < BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
              len = len + 1 | 0;
              x$2 = BigInt.asUintN(64, BigInt.asUintN(64, x$2 * 10n) + BigInt.asUintN(64, BigInt((_x - 48 | 0) >>> 0)));
              _tmp = _x$2;
              continue;
            } else {
              s$3 = s$2;
              break _L;
            }
          } else {
            if (_x === 95) {
              const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
              _tmp = _x$2;
              continue;
            } else {
              s$3 = s$2;
              break _L;
            }
          }
        } else {
          s$3 = s$2;
          break _L;
        }
      }
      return { _0: s$3, _1: x$2, _2: len };
    }
  }
  function _M0FPC28internal7strconv17parse__scientific(s) {
    let s$2 = s;
    let neg_exp = false;
    let rest;
    let ch;
    _L: {
      _L$2: {
        const _bind = s$2;
        if ((_bind.end - _bind.start | 0) >= 1) {
          const _x = _bind.str.charCodeAt(_bind.start);
          switch (_x) {
            case 43: {
              const _x$2 = new _M0TPC16string10StringView(_bind.str, _bind.start + 1 | 0, _bind.end);
              rest = _x$2;
              ch = _x;
              break _L$2;
            }
            case 45: {
              const _x$3 = new _M0TPC16string10StringView(_bind.str, _bind.start + 1 | 0, _bind.end);
              rest = _x$3;
              ch = _x;
              break _L$2;
            }
          }
        }
        break _L;
      }
      neg_exp = ch === 45;
      s$2 = rest;
    }
    _L$2: {
      const _bind = s$2;
      if ((_bind.end - _bind.start | 0) >= 1) {
        const _x = _bind.str.charCodeAt(_bind.start);
        if (_x >= 48 && _x <= 57) {
          const _bind$2 = _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s$2, _M0FPC28internal7strconv17parse__scientificN8exp__numS241, (digit, exp_num) => BigInt.asIntN(64, exp_num) < BigInt.asIntN(64, 65536n) ? BigInt.asUintN(64, BigInt.asUintN(64, 10n * exp_num) + BigInt.asUintN(64, BigInt(digit))) : exp_num);
          const _s = _bind$2._0;
          const _exp_num = _bind$2._1;
          return neg_exp ? { _0: _s, _1: BigInt.asUintN(64, -_exp_num) } : { _0: _s, _1: _exp_num };
        } else {
          break _L$2;
        }
      } else {
        break _L$2;
      }
    }
    return undefined;
  }
  function _M0FPC28internal7strconv13parse__number(s) {
    let s$2;
    let negative;
    _L: {
      let rest;
      _L$2: {
        if ((s.end - s.start | 0) >= 1) {
          const _x = s.str.charCodeAt(s.start);
          switch (_x) {
            case 45: {
              const _x$2 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
              s$2 = _x$2;
              negative = true;
              break _L;
            }
            case 43: {
              const _x$3 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
              rest = _x$3;
              break _L$2;
            }
            default: {
              rest = s;
              break _L$2;
            }
          }
        } else {
          rest = s;
          break _L$2;
        }
      }
      s$2 = rest;
      negative = false;
      break _L;
    }
    if (_M0MPC16string10StringView9is__empty(s$2)) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
    }
    const _bind = _M0FPC28internal7strconv13parse__digits(s$2, 0n);
    const _s = _bind._0;
    const _mantissa = _bind._1;
    const _consumed = _bind._2;
    let mantissa = _mantissa;
    let s$3 = _s;
    let n_digits = _consumed;
    let n_after_dot = 0;
    let exponent = 0n;
    const _bind$2 = s$3;
    if ((_bind$2.end - _bind$2.start | 0) >= 1) {
      const _x = _bind$2.str.charCodeAt(_bind$2.start);
      if (_x === 46) {
        const _x$2 = new _M0TPC16string10StringView(_bind$2.str, _bind$2.start + 1 | 0, _bind$2.end);
        s$3 = _x$2;
        const _bind$3 = _M0FPC28internal7strconv13parse__digits(s$3, mantissa);
        const _new_s = _bind$3._0;
        const _new_mantissa = _bind$3._1;
        const _consumed_digit = _bind$3._2;
        s$3 = _new_s;
        mantissa = _new_mantissa;
        n_after_dot = _consumed_digit;
        exponent = BigInt.asUintN(64, -BigInt.asUintN(64, BigInt(n_after_dot)));
      }
    }
    n_digits = n_digits + n_after_dot | 0;
    if (n_digits === 0) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
    }
    let rest;
    _L$2: {
      _L$3: {
        const _bind$3 = s$3;
        if ((_bind$3.end - _bind$3.start | 0) >= 1) {
          const _x = _bind$3.str.charCodeAt(_bind$3.start);
          switch (_x) {
            case 101: {
              const _x$2 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
              rest = _x$2;
              break _L$3;
            }
            case 69: {
              const _x$3 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
              rest = _x$3;
              break _L$3;
            }
          }
        }
        break _L$2;
      }
      const _bind$3 = _M0FPC28internal7strconv17parse__scientific(rest);
      let _bind$4;
      if (_bind$3 === undefined) {
        return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
      } else {
        const _Some = _bind$3;
        _bind$4 = _Some;
      }
      const _new_s = _bind$4._0;
      const _exp_number = _bind$4._1;
      s$3 = _new_s;
      exponent = BigInt.asUintN(64, exponent + _exp_number);
    }
    const _bind$3 = s$3;
    if ((_bind$3.end - _bind$3.start | 0) === 0) {
      if (n_digits <= 19) {
        return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa, negative, false));
      }
      n_digits = n_digits - 19 | 0;
      let many_digits = false;
      let _tmp = s;
      while (true) {
        const s$4 = _tmp;
        _L$3: {
          let rest$2;
          let ch;
          _L$4: {
            if ((s$4.end - s$4.start | 0) >= 1) {
              const _x = s$4.str.charCodeAt(s$4.start);
              switch (_x) {
                case 48: {
                  const _x$2 = new _M0TPC16string10StringView(s$4.str, s$4.start + 1 | 0, s$4.end);
                  rest$2 = _x$2;
                  ch = _x;
                  break _L$4;
                }
                case 46: {
                  const _x$3 = new _M0TPC16string10StringView(s$4.str, s$4.start + 1 | 0, s$4.end);
                  rest$2 = _x$3;
                  ch = _x;
                  break _L$4;
                }
                default: {
                  break _L$3;
                }
              }
            } else {
              break _L$3;
            }
          }
          const _tmp$2 = n_digits;
          if (2 === 0) {
            $panic();
          }
          n_digits = _tmp$2 - ((ch - 46 | 0) / 2 | 0) | 0;
          _tmp = rest$2;
          continue;
        }
        break;
      }
      let mantissa$2 = mantissa;
      if (n_digits > 0) {
        many_digits = true;
        mantissa$2 = 0n;
        const _bind$4 = _M0FPC28internal7strconv20try__parse__19digits(s, mantissa$2);
        const _s$2 = _bind$4._0;
        const _new_mantissa = _bind$4._1;
        const _consumed_digit = _bind$4._2;
        mantissa$2 = _new_mantissa;
        let _tmp$2;
        if (BigInt.asUintN(64, mantissa$2) >= BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
          _tmp$2 = _consumed_digit;
        } else {
          if (_M0MPC16string6String24char__length__ge_2einner(_s$2.str, 1, _s$2.start, _s$2.end)) {
            const _tmp$3 = _s$2.str;
            const _bind$5 = _M0MPC16string6String29offset__of__nth__char_2einner(_s$2.str, 1, _s$2.start, _s$2.end);
            let _tmp$4;
            if (_bind$5 === undefined) {
              _tmp$4 = _s$2.end;
            } else {
              const _Some = _bind$5;
              _tmp$4 = _Some;
            }
            const _x = new _M0TPC16string10StringView(_tmp$3, _tmp$4, _s$2.end);
            const _bind$6 = _M0FPC28internal7strconv20try__parse__19digits(_x, mantissa$2);
            const _new_mantissa$2 = _bind$6._1;
            const _consumed_digit$2 = _bind$6._2;
            mantissa$2 = _new_mantissa$2;
            _tmp$2 = _consumed_digit$2;
          } else {
            return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
          }
        }
        exponent = BigInt.asUintN(64, BigInt(_tmp$2));
        exponent = BigInt.asUintN(64, exponent + _M0FPC28internal7strconv13parse__numberN11exp__numberS222);
      }
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa$2, negative, many_digits));
    } else {
      return _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE();
    }
  }
  function _M0FPC28internal7strconv15parse__inf__nan(rest) {
    let pos;
    let rest$2;
    _L: {
      let rest$3;
      _L$2: {
        if ((rest.end - rest.start | 0) >= 1) {
          const _x = rest.str.charCodeAt(rest.start);
          switch (_x) {
            case 45: {
              const _x$2 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
              pos = false;
              rest$2 = _x$2;
              break _L;
            }
            case 43: {
              const _x$3 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
              rest$3 = _x$3;
              break _L$2;
            }
            default: {
              rest$3 = rest;
              break _L$2;
            }
          }
        } else {
          rest$3 = rest;
          break _L$2;
        }
      }
      pos = true;
      rest$2 = rest$3;
      break _L;
    }
    const _data = _M0MPC16string10StringView4data(rest$2);
    const _start = _M0MPC16string10StringView13start__offset(rest$2);
    const _end = _start + _M0MPC16string10StringView6length(rest$2) | 0;
    let _cursor = _start;
    let accept_state = -1;
    let match_end = -1;
    _L$2: {
      _L$3: {
        if ((_cursor + 2 | 0) < _end) {
          _L$4: {
            _L$5: {
              const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
              _cursor = _cursor + 1 | 0;
              if (next_char < 79) {
                if (next_char < 74) {
                  if (next_char < 73) {
                    break _L$2;
                  } else {
                    break _L$4;
                  }
                } else {
                  if (next_char > 77) {
                    break _L$5;
                  } else {
                    break _L$2;
                  }
                }
              } else {
                if (next_char > 104) {
                  if (next_char < 110) {
                    if (next_char < 106) {
                      break _L$4;
                    } else {
                      break _L$2;
                    }
                  } else {
                    if (next_char > 110) {
                      break _L$2;
                    } else {
                      break _L$5;
                    }
                  }
                } else {
                  break _L$2;
                }
              }
            }
            _L$6: {
              const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
              _cursor = _cursor + 1 | 0;
              if (next_char < 66) {
                if (next_char < 65) {
                  break _L$2;
                } else {
                  break _L$6;
                }
              } else {
                if (next_char > 96) {
                  if (next_char < 98) {
                    break _L$6;
                  } else {
                    break _L$2;
                  }
                } else {
                  break _L$2;
                }
              }
            }
            _L$7: {
              const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
              _cursor = _cursor + 1 | 0;
              if (next_char < 79) {
                if (next_char < 78) {
                  break _L$2;
                } else {
                  break _L$7;
                }
              } else {
                if (next_char > 109) {
                  if (next_char < 111) {
                    break _L$7;
                  } else {
                    break _L$2;
                  }
                } else {
                  break _L$2;
                }
              }
            }
            if (_cursor < _end) {
              break _L$2;
            } else {
              accept_state = 0;
              match_end = _cursor;
              break _L$2;
            }
          }
          _L$5: {
            const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
            _cursor = _cursor + 1 | 0;
            if (next_char < 79) {
              if (next_char < 78) {
                break _L$2;
              } else {
                break _L$5;
              }
            } else {
              if (next_char > 109) {
                if (next_char < 111) {
                  break _L$5;
                } else {
                  break _L$2;
                }
              } else {
                break _L$2;
              }
            }
          }
          _L$6: {
            const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
            _cursor = _cursor + 1 | 0;
            if (next_char < 71) {
              if (next_char < 70) {
                break _L$2;
              } else {
                break _L$6;
              }
            } else {
              if (next_char > 101) {
                if (next_char < 103) {
                  break _L$6;
                } else {
                  break _L$2;
                }
              } else {
                break _L$2;
              }
            }
          }
          if (_cursor < _end) {
            _L$7: {
              const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
              _cursor = _cursor + 1 | 0;
              if (next_char < 74) {
                if (next_char < 73) {
                  break _L$2;
                } else {
                  break _L$7;
                }
              } else {
                if (next_char > 104) {
                  if (next_char < 106) {
                    break _L$7;
                  } else {
                    break _L$2;
                  }
                } else {
                  break _L$2;
                }
              }
            }
            if ((_cursor + 3 | 0) < _end) {
              _L$8: {
                const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                _cursor = _cursor + 1 | 0;
                if (next_char < 79) {
                  if (next_char < 78) {
                    break _L$2;
                  } else {
                    break _L$8;
                  }
                } else {
                  if (next_char > 109) {
                    if (next_char < 111) {
                      break _L$8;
                    } else {
                      break _L$2;
                    }
                  } else {
                    break _L$2;
                  }
                }
              }
              _L$9: {
                const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                _cursor = _cursor + 1 | 0;
                if (next_char < 74) {
                  if (next_char < 73) {
                    break _L$2;
                  } else {
                    break _L$9;
                  }
                } else {
                  if (next_char > 104) {
                    if (next_char < 106) {
                      break _L$9;
                    } else {
                      break _L$2;
                    }
                  } else {
                    break _L$2;
                  }
                }
              }
              _L$10: {
                const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                _cursor = _cursor + 1 | 0;
                if (next_char < 85) {
                  if (next_char < 84) {
                    break _L$2;
                  } else {
                    break _L$10;
                  }
                } else {
                  if (next_char > 115) {
                    if (next_char < 117) {
                      break _L$10;
                    } else {
                      break _L$2;
                    }
                  } else {
                    break _L$2;
                  }
                }
              }
              _L$11: {
                const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                _cursor = _cursor + 1 | 0;
                if (next_char < 90) {
                  if (next_char < 89) {
                    break _L$2;
                  } else {
                    break _L$11;
                  }
                } else {
                  if (next_char > 120) {
                    if (next_char < 122) {
                      break _L$11;
                    } else {
                      break _L$2;
                    }
                  } else {
                    break _L$2;
                  }
                }
              }
              if (_cursor < _end) {
                break _L$2;
              } else {
                break _L$3;
              }
            } else {
              break _L$2;
            }
          } else {
            break _L$3;
          }
        } else {
          break _L$2;
        }
      }
      accept_state = 1;
      match_end = _cursor;
      break _L$2;
    }
    switch (accept_state) {
      case 0: {
        return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double14not__a__number);
      }
      case 1: {
        return pos ? new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double8infinity) : new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double13neg__infinity);
      }
      default: {
        return _M0FPC28internal7strconv11syntax__errGdE();
      }
    }
  }
  function _M0FPC28internal7strconv12checked__mul(a, b) {
    if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
      return _M0FPC28internal7strconv12checked__mulN6constrS1108;
    }
    if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
      return b;
    }
    if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
      return a;
    }
    if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
      return undefined;
    }
    if (b === 0n) {
      $panic();
    }
    const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
    if (BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient)) {
      return undefined;
    }
    return BigInt.asUintN(64, a * b);
  }
  function _M0FPC28internal7strconv19overflow__threshold(base, neg) {
    if (!neg) {
      if (base === 10) {
        return 922337203685477581n;
      } else {
        if (base === 16) {
          return 576460752303423488n;
        } else {
          const _tmp = BigInt.asUintN(64, BigInt(base));
          if (_tmp === 0n) {
            $panic();
          }
          return BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asIntN(64, 9223372036854775807n) / BigInt.asIntN(64, _tmp)) + 1n);
        }
      }
    } else {
      if (base === 10) {
        return 17524406870024074036n;
      } else {
        if (base === 16) {
          return 17870283321406128128n;
        } else {
          const _tmp = BigInt.asUintN(64, BigInt(base));
          if (_tmp === 0n) {
            $panic();
          }
          return BigInt.asUintN(64, BigInt.asIntN(64, 9223372036854775808n) / BigInt.asIntN(64, _tmp));
        }
      }
    }
  }
  function _M0FPC28internal7strconv20parse__int64_2einner(str, base) {
    if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(str, new _M0TPC16string10StringView(_M0FPC28internal7strconv20parse__int64_2einnerN7_2abindS622, 0, _M0FPC28internal7strconv20parse__int64_2einnerN7_2abindS622.length))) {
      let neg;
      let rest;
      _L: {
        let rest$2;
        _L$2: {
          const _bind = _M0MPC16string10StringView12view_2einner(str, 0, undefined);
          if ((_bind.end - _bind.start | 0) >= 1) {
            const _x = _bind.str.charCodeAt(_bind.start);
            switch (_x) {
              case 43: {
                const _x$2 = new _M0TPC16string10StringView(_bind.str, _bind.start + 1 | 0, _bind.end);
                neg = false;
                rest = _x$2;
                break _L;
              }
              case 45: {
                const _x$3 = new _M0TPC16string10StringView(_bind.str, _bind.start + 1 | 0, _bind.end);
                neg = true;
                rest = _x$3;
                break _L;
              }
              default: {
                rest$2 = _bind;
                break _L$2;
              }
            }
          } else {
            rest$2 = _bind;
            break _L$2;
          }
        }
        neg = false;
        rest = rest$2;
        break _L;
      }
      const _bind = _M0FPC28internal7strconv25check__and__consume__base(rest, base);
      let _bind$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _bind$2 = _ok._0;
      } else {
        return _bind;
      }
      const _num_base = _bind$2._0;
      const _rest = _bind$2._1;
      const _allow_underscore = _bind$2._2;
      const overflow_threshold = _M0FPC28internal7strconv19overflow__threshold(_num_base, neg);
      let has_digit;
      if ((_rest.end - _rest.start | 0) >= 1) {
        const _x = _rest.str.charCodeAt(_rest.start);
        if (_x >= 48 && _x <= 57) {
          has_digit = true;
        } else {
          if (_x >= 97 && _x <= 122) {
            has_digit = true;
          } else {
            if (_x >= 65 && _x <= 90) {
              has_digit = true;
            } else {
              if ((_rest.end - _rest.start | 0) >= 2) {
                if (_x === 95) {
                  const _x$2 = _rest.str.charCodeAt(_rest.start + 1 | 0);
                  has_digit = _x$2 >= 48 && _x$2 <= 57 ? true : _x$2 >= 97 && _x$2 <= 122 ? true : _x$2 >= 65 && _x$2 <= 90;
                } else {
                  has_digit = false;
                }
              } else {
                has_digit = false;
              }
            }
          }
        }
      } else {
        has_digit = false;
      }
      if (has_digit) {
        let _tmp;
        let _tmp$2 = _rest;
        let _tmp$3 = 0n;
        let _tmp$4 = _allow_underscore;
        while (true) {
          const rest$2 = _tmp$2;
          const acc = _tmp$3;
          const allow_underscore = _tmp$4;
          let acc$2;
          let rest$3;
          let c;
          _L$2: {
            _L$3: {
              if ((rest$2.end - rest$2.start | 0) === 1) {
                const _x = rest$2.str.charCodeAt(rest$2.start);
                if (_x === 95) {
                  const _bind$3 = _M0FPC28internal7strconv11syntax__errGuE();
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _ok._0;
                  } else {
                    return _bind$3;
                  }
                } else {
                  const _c = _M0MPC16string6String16unsafe__char__at(rest$2.str, _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 0, rest$2.start, rest$2.end));
                  const _tmp$5 = rest$2.str;
                  const _bind$3 = _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 1, rest$2.start, rest$2.end);
                  let _tmp$6;
                  if (_bind$3 === undefined) {
                    _tmp$6 = rest$2.end;
                  } else {
                    const _Some = _bind$3;
                    _tmp$6 = _Some;
                  }
                  const _x$2 = new _M0TPC16string10StringView(_tmp$5, _tmp$6, rest$2.end);
                  acc$2 = acc;
                  rest$3 = _x$2;
                  c = _c;
                  break _L$3;
                }
              } else {
                if ((rest$2.end - rest$2.start | 0) >= 1) {
                  const _x = rest$2.str.charCodeAt(rest$2.start);
                  if (_x === 95) {
                    if (allow_underscore === false) {
                      const _bind$3 = _M0FPC28internal7strconv11syntax__errGuE();
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _ok._0;
                      } else {
                        return _bind$3;
                      }
                    } else {
                      const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
                      _tmp$2 = _x$2;
                      _tmp$4 = false;
                      continue;
                    }
                  } else {
                    const _c = _M0MPC16string6String16unsafe__char__at(rest$2.str, _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 0, rest$2.start, rest$2.end));
                    const _tmp$5 = rest$2.str;
                    const _bind$3 = _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 1, rest$2.start, rest$2.end);
                    let _tmp$6;
                    if (_bind$3 === undefined) {
                      _tmp$6 = rest$2.end;
                    } else {
                      const _Some = _bind$3;
                      _tmp$6 = _Some;
                    }
                    const _x$2 = new _M0TPC16string10StringView(_tmp$5, _tmp$6, rest$2.end);
                    acc$2 = acc;
                    rest$3 = _x$2;
                    c = _c;
                    break _L$3;
                  }
                } else {
                  _tmp = acc;
                  break;
                }
              }
              break _L$2;
            }
            const c$2 = c;
            let d;
            if (c$2 >= 48 && c$2 <= 57) {
              d = c$2 - 48 | 0;
            } else {
              if (c$2 >= 97 && c$2 <= 122) {
                d = c$2 + -87 | 0;
              } else {
                if (c$2 >= 65 && c$2 <= 90) {
                  d = c$2 + -55 | 0;
                } else {
                  const _bind$3 = _M0FPC28internal7strconv11syntax__errGiE();
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    d = _ok._0;
                  } else {
                    return _bind$3;
                  }
                }
              }
            }
            if (d < _num_base) {
              if (neg) {
                if (BigInt.asIntN(64, acc$2) >= BigInt.asIntN(64, overflow_threshold)) {
                  const next_acc = BigInt.asUintN(64, BigInt.asUintN(64, acc$2 * BigInt.asUintN(64, BigInt(_num_base))) - BigInt.asUintN(64, BigInt(d)));
                  if (BigInt.asIntN(64, next_acc) <= BigInt.asIntN(64, acc$2)) {
                    _tmp$2 = rest$3;
                    _tmp$3 = next_acc;
                    _tmp$4 = true;
                    continue;
                  } else {
                    const _bind$3 = _M0FPC28internal7strconv10range__errGuE();
                    if (_bind$3.$tag === 1) {
                      const _ok = _bind$3;
                      _ok._0;
                    } else {
                      return _bind$3;
                    }
                  }
                } else {
                  const _bind$3 = _M0FPC28internal7strconv10range__errGuE();
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _ok._0;
                  } else {
                    return _bind$3;
                  }
                }
              } else {
                if (BigInt.asIntN(64, acc$2) < BigInt.asIntN(64, overflow_threshold)) {
                  const next_acc = BigInt.asUintN(64, BigInt.asUintN(64, acc$2 * BigInt.asUintN(64, BigInt(_num_base))) + BigInt.asUintN(64, BigInt(d)));
                  if (BigInt.asIntN(64, next_acc) >= BigInt.asIntN(64, acc$2)) {
                    _tmp$2 = rest$3;
                    _tmp$3 = next_acc;
                    _tmp$4 = true;
                    continue;
                  } else {
                    const _bind$3 = _M0FPC28internal7strconv10range__errGuE();
                    if (_bind$3.$tag === 1) {
                      const _ok = _bind$3;
                      _ok._0;
                    } else {
                      return _bind$3;
                    }
                  }
                } else {
                  const _bind$3 = _M0FPC28internal7strconv10range__errGuE();
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _ok._0;
                  } else {
                    return _bind$3;
                  }
                }
              }
            } else {
              const _bind$3 = _M0FPC28internal7strconv11syntax__errGuE();
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
            }
          }
          continue;
        }
        return new _M0DTPC16result6ResultGlRPC15error5ErrorE2Ok(_tmp);
      } else {
        return _M0FPC28internal7strconv11syntax__errGlE();
      }
    } else {
      return _M0FPC28internal7strconv11syntax__errGlE();
    }
  }
  function _M0FPC28internal7strconv18parse__int_2einner(str, base) {
    const _bind = _M0FPC28internal7strconv20parse__int64_2einner(str, base);
    let n;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      n = _ok._0;
    } else {
      return _bind;
    }
    if (BigInt.asIntN(64, n) < BigInt.asIntN(64, 18446744071562067968n) || BigInt.asIntN(64, n) > BigInt.asIntN(64, 2147483647n)) {
      const _bind$2 = _M0FPC28internal7strconv10range__errGuE();
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
    }
    return new _M0DTPC16result6ResultGiRPC15error5ErrorE2Ok(Number(BigInt.asIntN(32, n)) | 0);
  }
  function _M0FPC28internal7strconv17check__underscore(str) {
    let rest;
    if ((str.end - str.start | 0) >= 1) {
      const _x = str.str.charCodeAt(str.start);
      switch (_x) {
        case 43: {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$2;
          break;
        }
        case 45: {
          const _x$3 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$3;
          break;
        }
        default: {
          rest = str;
        }
      }
    } else {
      rest = str;
    }
    let rest$2;
    let allow_underscore;
    let hex;
    _L: {
      const _data = _M0MPC16string10StringView4data(rest);
      const _start = _M0MPC16string10StringView13start__offset(rest);
      const _end = _start + _M0MPC16string10StringView6length(rest) | 0;
      let _cursor = _start;
      let accept_state = -1;
      let match_end = -1;
      _L$2: {
        if ((_cursor + 1 | 0) < _end) {
          if (_M0MPC16string6String20unsafe__charcode__at(_data, _cursor) === 48) {
            _cursor = _cursor + 1 | 0;
            _L$3: {
              _L$4: {
                _L$5: {
                  const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                  _cursor = _cursor + 1 | 0;
                  if (next_char < 89) {
                    if (next_char < 79) {
                      if (next_char === 66) {
                        break _L$3;
                      } else {
                        break _L$2;
                      }
                    } else {
                      if (next_char > 79) {
                        if (next_char < 88) {
                          break _L$2;
                        } else {
                          break _L$5;
                        }
                      } else {
                        break _L$4;
                      }
                    }
                  } else {
                    if (next_char > 97) {
                      if (next_char < 112) {
                        if (next_char < 99) {
                          break _L$3;
                        } else {
                          if (next_char > 110) {
                            break _L$4;
                          } else {
                            break _L$2;
                          }
                        }
                      } else {
                        if (next_char > 119) {
                          if (next_char < 121) {
                            break _L$5;
                          } else {
                            break _L$2;
                          }
                        } else {
                          break _L$2;
                        }
                      }
                    } else {
                      break _L$2;
                    }
                  }
                }
                accept_state = 2;
                match_end = _cursor;
                break _L$2;
              }
              accept_state = 1;
              match_end = _cursor;
              break _L$2;
            }
            accept_state = 0;
            match_end = _cursor;
            break _L$2;
          } else {
            break _L$2;
          }
        } else {
          break _L$2;
        }
      }
      switch (accept_state) {
        case 2: {
          const rest$3 = _M0MPC16string6String4view(_data, match_end, _end);
          rest$2 = rest$3;
          allow_underscore = true;
          hex = true;
          break _L;
        }
        case 1: {
          const rest$4 = _M0MPC16string6String4view(_data, match_end, _end);
          rest$2 = rest$4;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 0: {
          const rest$5 = _M0MPC16string6String4view(_data, match_end, _end);
          rest$2 = rest$5;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        default: {
          rest$2 = rest;
          allow_underscore = false;
          hex = false;
          break _L;
        }
      }
    }
    let _tmp = rest$2;
    let _tmp$2 = allow_underscore;
    let _tmp$3 = false;
    while (true) {
      const rest$3 = _tmp;
      const allow_underscore$2 = _tmp$2;
      const follow_underscore = _tmp$3;
      let rest$4;
      _L$2: {
        _L$3: {
          let rest$5;
          _L$4: {
            _L$5: {
              let rest$6;
              _L$6: {
                let rest$7;
                _L$7: {
                  if ((rest$3.end - rest$3.start | 0) === 0) {
                    return true;
                  } else {
                    if ((rest$3.end - rest$3.start | 0) === 1) {
                      const _x = rest$3.str.charCodeAt(rest$3.start);
                      if (_x === 95) {
                        return false;
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                          rest$7 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                            if (hex) {
                              rest$6 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$5 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                              if (hex) {
                                rest$6 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$5 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                                  rest$5 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                                    rest$5 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                                      rest$5 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _tmp$4 = rest$3.str;
                                      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(rest$3.str, 1, rest$3.start, rest$3.end);
                                      let _tmp$5;
                                      if (_bind === undefined) {
                                        _tmp$5 = rest$3.end;
                                      } else {
                                        const _Some = _bind;
                                        _tmp$5 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(_tmp$4, _tmp$5, rest$3.end);
                                      rest$4 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      const _x = rest$3.str.charCodeAt(rest$3.start);
                      if (_x === 95) {
                        if (allow_underscore$2 === false) {
                          return false;
                        } else {
                          const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                          _tmp = _x$2;
                          _tmp$2 = false;
                          _tmp$3 = true;
                          continue;
                        }
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                          rest$7 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                            if (hex) {
                              rest$6 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$5 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                              if (hex) {
                                rest$6 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$5 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                                  rest$5 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                                    rest$5 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                                      rest$5 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _tmp$4 = rest$3.str;
                                      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(rest$3.str, 1, rest$3.start, rest$3.end);
                                      let _tmp$5;
                                      if (_bind === undefined) {
                                        _tmp$5 = rest$3.end;
                                      } else {
                                        const _Some = _bind;
                                        _tmp$5 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(_tmp$4, _tmp$5, rest$3.end);
                                      rest$4 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                _tmp = rest$7;
                _tmp$2 = true;
                _tmp$3 = false;
                continue;
              }
              _tmp = rest$6;
              _tmp$2 = true;
              _tmp$3 = false;
              continue;
            }
            return false;
          }
          _tmp = rest$5;
          _tmp$2 = false;
          _tmp$3 = false;
          continue;
        }
        return false;
      }
      _tmp = rest$4;
      _tmp$2 = false;
      _tmp$3 = false;
      continue;
    }
  }
  function _M0MPC28internal7strconv7Decimal9new__priv() {
    return new _M0TPC28internal7strconv7Decimal($makebytes(800, _M0IPC14byte4BytePB7Default7default()), 0, 0, false, false);
  }
  function _M0MPC28internal7strconv7Decimal4trim(self) {
    while (true) {
      let _tmp;
      if (self.digits_num > 0) {
        const _tmp$2 = self.digits;
        const _tmp$3 = self.digits_num - 1 | 0;
        $bound_check(_tmp$2, _tmp$3);
        _tmp = _M0IPC14byte4BytePB2Eq5equal(_tmp$2[_tmp$3], 0);
      } else {
        _tmp = false;
      }
      if (_tmp) {
        self.digits_num = self.digits_num - 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (self.digits_num === 0) {
      self.decimal_point = 0;
      return;
    } else {
      return;
    }
  }
  function _M0FPC28internal7strconv26parse__decimal__from__view(str) {
    const d = _M0MPC28internal7strconv7Decimal9new__priv();
    let has_dp = false;
    let has_digits = false;
    let rest;
    _L: {
      _L$2: {
        if ((str.end - str.start | 0) >= 1) {
          const _x = str.str.charCodeAt(str.start);
          switch (_x) {
            case 45: {
              const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
              d.negative = true;
              rest = _x$2;
              break;
            }
            case 43: {
              rest = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
              break;
            }
            default: {
              break _L$2;
            }
          }
        } else {
          break _L$2;
        }
        break _L;
      }
      rest = str;
    }
    let rest$2;
    let _tmp = rest;
    while (true) {
      const rest$3 = _tmp;
      let rest$4;
      _L$2: {
        _L$3: {
          if ((rest$3.end - rest$3.start | 0) >= 1) {
            const _x = rest$3.str.charCodeAt(rest$3.start);
            if (_x === 95) {
              const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
              _tmp = _x$2;
              continue;
            } else {
              if (_x === 46) {
                const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                if (!has_dp) {
                  has_dp = true;
                  d.decimal_point = d.digits_num;
                  _tmp = _x$2;
                  continue;
                } else {
                  const _bind = _M0FPC28internal7strconv11syntax__errGuE();
                  if (_bind.$tag === 1) {
                    const _ok = _bind;
                    _ok._0;
                  } else {
                    return _bind;
                  }
                }
              } else {
                if (_x >= 48 && _x <= 57) {
                  const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                  has_digits = true;
                  if (_x === 48 && d.digits_num === 0) {
                    d.decimal_point = d.decimal_point - 1 | 0;
                    _tmp = _x$2;
                    continue;
                  }
                  if (d.digits_num < d.digits.length) {
                    const _tmp$2 = d.digits;
                    const _tmp$3 = d.digits_num;
                    $bound_check(_tmp$2, _tmp$3);
                    _tmp$2[_tmp$3] = (_x - 48 | 0) & 255;
                    d.digits_num = d.digits_num + 1 | 0;
                  } else {
                    if (_x !== 48) {
                      d.truncated = true;
                    }
                  }
                  _tmp = _x$2;
                  continue;
                } else {
                  rest$4 = rest$3;
                  break _L$3;
                }
              }
            }
          } else {
            rest$4 = rest$3;
            break _L$3;
          }
          break _L$2;
        }
        rest$2 = rest$4;
        break;
      }
      continue;
    }
    if (has_digits) {
      if (!has_dp) {
        d.decimal_point = d.digits_num;
      }
      let rest$3;
      let rest$4;
      _L$2: {
        _L$3: {
          if ((rest$2.end - rest$2.start | 0) >= 1) {
            const _x = rest$2.str.charCodeAt(rest$2.start);
            switch (_x) {
              case 101: {
                const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
                rest$4 = _x$2;
                break _L$3;
              }
              case 69: {
                const _x$3 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
                rest$4 = _x$3;
                break _L$3;
              }
              default: {
                rest$3 = rest$2;
              }
            }
          } else {
            rest$3 = rest$2;
          }
          break _L$2;
        }
        let exp_sign = 1;
        let rest$5;
        if ((rest$4.end - rest$4.start | 0) >= 1) {
          const _x = rest$4.str.charCodeAt(rest$4.start);
          switch (_x) {
            case 43: {
              rest$5 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
              break;
            }
            case 45: {
              const _x$2 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
              exp_sign = -1;
              rest$5 = _x$2;
              break;
            }
            default: {
              rest$5 = rest$4;
            }
          }
        } else {
          rest$5 = rest$4;
        }
        _L$4: {
          _L$5: {
            if ((rest$5.end - rest$5.start | 0) >= 1) {
              const _x = rest$5.str.charCodeAt(rest$5.start);
              if (_x >= 48 && _x <= 57) {
                const exp_limit = exp_sign > 0 ? (d.decimal_point < 311 ? 311 - d.decimal_point | 0 : 0) : d.decimal_point > -331 ? d.decimal_point + 331 | 0 : 0;
                let exp = 0;
                let rest$6;
                let _tmp$2 = rest$5;
                while (true) {
                  const rest$7 = _tmp$2;
                  let rest$8;
                  _L$6: {
                    if ((rest$7.end - rest$7.start | 0) >= 1) {
                      const _x$2 = rest$7.str.charCodeAt(rest$7.start);
                      if (_x$2 === 95) {
                        const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                        _tmp$2 = _x$3;
                        continue;
                      } else {
                        if (_x$2 >= 48 && _x$2 <= 57) {
                          const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                          if (exp < exp_limit) {
                            exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                            if (exp > exp_limit) {
                              exp = exp_limit;
                            }
                          }
                          _tmp$2 = _x$3;
                          continue;
                        } else {
                          rest$8 = rest$7;
                          break _L$6;
                        }
                      }
                    } else {
                      rest$8 = rest$7;
                      break _L$6;
                    }
                  }
                  rest$6 = rest$8;
                  break;
                }
                d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
                rest$3 = rest$6;
              } else {
                break _L$5;
              }
            } else {
              break _L$5;
            }
            break _L$4;
          }
          const _bind = _M0FPC28internal7strconv11syntax__errGlE();
          if (_bind.$tag === 1) {
            const _ok = _bind;
            rest$3 = _ok._0;
          } else {
            return _bind;
          }
        }
      }
      if ((rest$3.end - rest$3.start | 0) === 0) {
        _M0MPC28internal7strconv7Decimal4trim(d);
        return new _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(d);
      } else {
        return _M0FPC28internal7strconv11syntax__errGlE();
      }
    } else {
      return _M0FPC28internal7strconv11syntax__errGlE();
    }
  }
  function _M0FPC28internal7strconv20parse__decimal__priv(str) {
    return _M0FPC28internal7strconv26parse__decimal__from__view(str);
  }
  function _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, negative) {
    const biased_exp = exponent - _M0FPC28internal7strconv12double__info.bias | 0;
    let bits = BigInt.asUintN(64, mantissa & BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) - 1n));
    const exp_bits = BigInt.asUintN(64, BigInt(biased_exp & ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)));
    bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, exp_bits << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)));
    if (negative) {
      bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) << BigInt(_M0FPC28internal7strconv12double__info.exponent_bits & 63)));
    }
    return bits;
  }
  function _M0MPC28internal7strconv7Decimal17should__round__up(self, d) {
    if (d < 0 || d >= self.digits_num) {
      return false;
    }
    let _tmp;
    const _tmp$2 = self.digits;
    $bound_check(_tmp$2, d);
    if (_tmp$2[d] === 5) {
      _tmp = (d + 1 | 0) === self.digits_num;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      if (self.truncated) {
        return true;
      }
      let _tmp$3;
      if (d > 0) {
        const _tmp$4 = self.digits;
        const _tmp$5 = d - 1 | 0;
        $bound_check(_tmp$4, _tmp$5);
        if (2 === 0) {
          $panic();
        }
        _tmp$3 = (_tmp$4[_tmp$5] % 2 | 0) !== 0;
      } else {
        _tmp$3 = false;
      }
      return _tmp$3;
    }
    const _tmp$3 = self.digits;
    $bound_check(_tmp$3, d);
    return _tmp$3[d] >= 5;
  }
  function _M0MPC28internal7strconv7Decimal16rounded__integer(self) {
    if (self.decimal_point > 20) {
      return 18446744073709551615n;
    }
    let _tmp = 0n;
    let _tmp$2 = 0;
    while (true) {
      const n = _tmp;
      const i = _tmp$2;
      if (i < self.decimal_point && i < self.digits_num) {
        const _tmp$3 = BigInt.asUintN(64, n * 10n);
        const _tmp$4 = self.digits;
        $bound_check(_tmp$4, i);
        _tmp = BigInt.asUintN(64, _tmp$3 + _M0MPC14byte4Byte9to__int64(_tmp$4[i]));
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        let n$2;
        let _tmp$3 = n;
        let _tmp$4 = i;
        while (true) {
          const n$3 = _tmp$3;
          const i$2 = _tmp$4;
          if (i$2 < self.decimal_point) {
            _tmp$3 = BigInt.asUintN(64, n$3 * 10n);
            _tmp$4 = i$2 + 1 | 0;
            continue;
          } else {
            n$2 = n$3;
            break;
          }
        }
        return _M0MPC28internal7strconv7Decimal17should__round__up(self, self.decimal_point) ? BigInt.asUintN(64, n$2 + 1n) : n$2;
      }
    }
  }
  function _M0MPC28internal7strconv7Decimal11new__digits(self, s) {
    const new_digits = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv19left__shift__cheats, s)._0;
    const cheat_num = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv19left__shift__cheats, s)._1;
    const _bind = _M0MPC16string6String11code__units(cheat_num);
    const _bind$2 = _bind.end - _bind.start | 0;
    let less;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        const code_unit = _bind.buf[_bind.start + i | 0];
        if (i >= self.digits_num) {
          less = true;
          break;
        }
        const d = code_unit - 48 | 0;
        const _tmp$2 = self.digits;
        $bound_check(_tmp$2, i);
        if (_tmp$2[i] !== d) {
          const _tmp$3 = self.digits;
          $bound_check(_tmp$3, i);
          less = _tmp$3[i] < d;
          break;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        less = false;
        break;
      }
    }
    return less ? new_digits - 1 | 0 : new_digits;
  }
  function _M0MPC28internal7strconv7Decimal11left__shift(self, s) {
    const new_digits = _M0MPC28internal7strconv7Decimal11new__digits(self, s);
    let read_index = self.digits_num;
    let write_index = self.digits_num + new_digits | 0;
    let acc = 0n;
    read_index = read_index - 1 | 0;
    while (true) {
      if (read_index >= 0) {
        const _tmp = self.digits;
        const _tmp$2 = read_index;
        $bound_check(_tmp, _tmp$2);
        const d = _M0MPC14byte4Byte9to__int64(_tmp[_tmp$2]);
        acc = BigInt.asUintN(64, acc + BigInt.asUintN(64, d << BigInt(s & 63)));
        if (10n === 0n) {
          $panic();
        }
        const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
        const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, quo * 10n)))) | 0;
        write_index = write_index - 1 | 0;
        if (write_index < self.digits.length) {
          const _tmp$3 = self.digits;
          const _tmp$4 = write_index;
          $bound_check(_tmp$3, _tmp$4);
          _tmp$3[_tmp$4] = rem & 255;
        } else {
          if (rem !== 0) {
            self.truncated = true;
          }
        }
        acc = quo;
        read_index = read_index - 1 | 0;
        continue;
      } else {
        break;
      }
    }
    while (true) {
      if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, 0n)) {
        if (10n === 0n) {
          $panic();
        }
        const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
        const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, 10n * quo)))) | 0;
        write_index = write_index - 1 | 0;
        if (write_index < self.digits.length) {
          const _tmp = self.digits;
          const _tmp$2 = write_index;
          $bound_check(_tmp, _tmp$2);
          _tmp[_tmp$2] = rem & 255;
        } else {
          if (rem !== 0) {
            self.truncated = true;
          }
        }
        acc = quo;
        continue;
      } else {
        break;
      }
    }
    self.digits_num = self.digits_num + new_digits | 0;
    if (self.digits_num > self.digits.length) {
      self.digits_num = self.digits.length;
    }
    self.decimal_point = self.decimal_point + new_digits | 0;
    _M0MPC28internal7strconv7Decimal4trim(self);
  }
  function _M0MPC28internal7strconv7Decimal12right__shift(self, s) {
    let read_index = 0;
    let write_index = 0;
    let acc = 0n;
    while (true) {
      if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
        if (read_index >= self.digits_num) {
          while (true) {
            if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
              acc = BigInt.asUintN(64, acc * 10n);
              read_index = read_index + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          break;
        }
        const _tmp = self.digits;
        const _tmp$2 = read_index;
        $bound_check(_tmp, _tmp$2);
        const d = _tmp[_tmp$2];
        acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + _M0MPC14byte4Byte9to__int64(d));
        read_index = read_index + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
    const mask = BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(s & 63)) - 1n);
    while (true) {
      if (read_index < self.digits_num) {
        const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        $bound_check(_tmp, _tmp$2);
        _tmp[_tmp$2] = _M0MPC16uint646UInt648to__byte(out);
        write_index = write_index + 1 | 0;
        acc = BigInt.asUintN(64, acc & mask);
        const _tmp$3 = self.digits;
        const _tmp$4 = read_index;
        $bound_check(_tmp$3, _tmp$4);
        const d = _tmp$3[_tmp$4];
        acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + _M0MPC14byte4Byte9to__int64(d));
        read_index = read_index + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    while (true) {
      if (BigInt.asUintN(64, acc) > BigInt.asUintN(64, 0n)) {
        const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
        if (write_index < self.digits.length) {
          const _tmp = self.digits;
          const _tmp$2 = write_index;
          $bound_check(_tmp, _tmp$2);
          _tmp[_tmp$2] = _M0MPC16uint646UInt648to__byte(out);
          write_index = write_index + 1 | 0;
        } else {
          if (BigInt.asUintN(64, out) > BigInt.asUintN(64, 0n)) {
            self.truncated = true;
          }
        }
        acc = BigInt.asUintN(64, acc & mask);
        acc = BigInt.asUintN(64, acc * 10n);
        continue;
      } else {
        break;
      }
    }
    self.digits_num = write_index;
    _M0MPC28internal7strconv7Decimal4trim(self);
  }
  function _M0MPC28internal7strconv7Decimal11shift__priv(self, s) {
    if (self.digits_num === 0) {
      return undefined;
    }
    let s$2 = s;
    if (s$2 > 0) {
      while (true) {
        if (s$2 > 59) {
          _M0MPC28internal7strconv7Decimal11left__shift(self, 59);
          s$2 = s$2 - 59 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC28internal7strconv7Decimal11left__shift(self, s$2);
    }
    if (s$2 < 0) {
      while (true) {
        if (s$2 < -59) {
          _M0MPC28internal7strconv7Decimal12right__shift(self, 59);
          s$2 = s$2 + 59 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC28internal7strconv7Decimal12right__shift(self, -s$2 | 0);
      return;
    } else {
      return;
    }
  }
  function _M0MPC28internal7strconv7Decimal16to__double__priv(self) {
    let exponent = 0;
    let mantissa = 0n;
    if (self.digits_num === 0 || self.decimal_point < -330) {
      mantissa = 0n;
      exponent = _M0FPC28internal7strconv12double__info.bias;
      const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
      return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
    }
    if (self.decimal_point > 310) {
      const _bind = _M0FPC28internal7strconv10range__errGuE();
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
      }
    }
    while (true) {
      if (self.decimal_point > 0) {
        let n = 0;
        if (self.decimal_point >= _M0MPC15array13ReadOnlyArray6lengthGiE(_M0FPC28internal7strconv6powtab)) {
          n = 60;
        } else {
          n = _M0MPC15array13ReadOnlyArray2atGiE(_M0FPC28internal7strconv6powtab, self.decimal_point);
        }
        _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
        exponent = exponent + n | 0;
        continue;
      } else {
        break;
      }
    }
    while (true) {
      let _tmp;
      if (self.decimal_point < 0) {
        _tmp = true;
      } else {
        let _tmp$2;
        if (self.decimal_point === 0) {
          const _tmp$3 = self.digits;
          $bound_check(_tmp$3, 0);
          _tmp$2 = _tmp$3[0] < 5;
        } else {
          _tmp$2 = false;
        }
        _tmp = _tmp$2;
      }
      if (_tmp) {
        let n = 0;
        if ((-self.decimal_point | 0) >= _M0MPC15array13ReadOnlyArray6lengthGiE(_M0FPC28internal7strconv6powtab)) {
          n = 60;
        } else {
          n = _M0MPC15array13ReadOnlyArray2atGiE(_M0FPC28internal7strconv6powtab, -self.decimal_point | 0);
        }
        _M0MPC28internal7strconv7Decimal11shift__priv(self, n);
        exponent = exponent - n | 0;
        continue;
      } else {
        break;
      }
    }
    exponent = exponent - 1 | 0;
    if (exponent < (_M0FPC28internal7strconv12double__info.bias + 1 | 0)) {
      const n = (_M0FPC28internal7strconv12double__info.bias + 1 | 0) - exponent | 0;
      _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
      exponent = exponent + n | 0;
    }
    if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
      const _bind = _M0FPC28internal7strconv10range__errGuE();
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
      }
    }
    _M0MPC28internal7strconv7Decimal11shift__priv(self, _M0FPC28internal7strconv12double__info.mantissa_bits + 1 | 0);
    mantissa = _M0MPC28internal7strconv7Decimal16rounded__integer(self);
    if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, BigInt.asUintN(64, 2n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) {
      mantissa = BigInt.asUintN(64, BigInt.asIntN(64, mantissa) >> BigInt(1 & 63));
      exponent = exponent + 1 | 0;
      if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
        const _bind = _M0FPC28internal7strconv10range__errGuE();
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _ok._0;
        } else {
          return _bind;
        }
      }
    }
    if (BigInt.asUintN(64, BigInt.asUintN(64, mantissa & BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) === BigInt.asUintN(64, 0n)) {
      exponent = _M0FPC28internal7strconv12double__info.bias;
    }
    const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
    return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
  }
  function _M0FPC28internal7strconv17pow10__fast__path(exponent) {
    return _M0MPC15array13ReadOnlyArray2atGdE(_M0FPC28internal7strconv5table, exponent & 31);
  }
  function _M0MPC28internal7strconv6Number14is__fast__path(self) {
    return BigInt.asIntN(64, _M0FPC28internal7strconv25min__exponent__fast__path) <= BigInt.asIntN(64, self.exponent) && (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv36max__exponent__disguised__fast__path) && (BigInt.asUintN(64, self.mantissa) <= BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path) && !self.many_digits));
  }
  function _M0MPC28internal7strconv6Number15try__fast__path(self) {
    if (_M0MPC28internal7strconv6Number14is__fast__path(self)) {
      let value;
      if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv25max__exponent__fast__path)) {
        const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
        value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC28internal7strconv17pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
      } else {
        const shift = BigInt.asUintN(64, self.exponent - _M0FPC28internal7strconv25max__exponent__fast__path);
        const _bind = _M0FPC28internal7strconv12checked__mul(self.mantissa, _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv10int__pow10, Number(BigInt.asIntN(32, shift)) | 0));
        let mantissa;
        if (_bind === undefined) {
          return _M0DTPC16option6OptionGdE4None__;
        } else {
          const _Some = _bind;
          mantissa = _Some;
        }
        if (BigInt.asUintN(64, mantissa) > BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path)) {
          return _M0DTPC16option6OptionGdE4None__;
        }
        value = $f64_convert_i64_u(BigInt.asUintN(64, mantissa)) * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, _M0FPC28internal7strconv25max__exponent__fast__path)) | 0);
      }
      if (self.negative) {
        value = -value;
      }
      return new _M0DTPC16option6OptionGdE4Some(value);
    } else {
      return _M0DTPC16option6OptionGdE4None__;
    }
  }
  function _M0FPC28internal7strconv13parse__double(str) {
    if (_M0MPC16string10StringView6length(str) > 0) {
      if (_M0FPC28internal7strconv17check__underscore(str)) {
        const _bind = _M0FPC28internal7strconv13parse__number(str);
        let _bind$2;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _bind$2 = _ok._0;
        } else {
          return _bind;
        }
        if (_bind$2 === undefined) {
          return _M0FPC28internal7strconv15parse__inf__nan(str);
        } else {
          const _Some = _bind$2;
          const _num = _Some;
          const _bind$3 = _M0MPC28internal7strconv6Number15try__fast__path(_num);
          if (_bind$3.$tag === 1) {
            const _Some$2 = _bind$3;
            const _value = _Some$2._0;
            return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_value);
          } else {
            const _bind$4 = _M0FPC28internal7strconv20parse__decimal__priv(str);
            let _tmp;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _tmp = _ok._0;
            } else {
              return _bind$4;
            }
            return _M0MPC28internal7strconv7Decimal16to__double__priv(_tmp);
          }
        }
      } else {
        return _M0FPC28internal7strconv11syntax__errGdE();
      }
    } else {
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  }
  function _M0IP28clhhhhhh17moon_2dcsv_2dlite13CsvColumnTypePB2Eq5equal(_x_1535, _x_1536) {
    switch (_x_1535) {
      case 0: {
        if (_x_1536 === 0) {
          return true;
        } else {
          return false;
        }
      }
      case 1: {
        if (_x_1536 === 1) {
          return true;
        } else {
          return false;
        }
      }
      case 2: {
        if (_x_1536 === 2) {
          return true;
        } else {
          return false;
        }
      }
      default: {
        if (_x_1536 === 3) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite21schema__column__index(headers, column) {
    const _bind = 0;
    const _bind$2 = headers.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(headers, i) === column) {
          return i;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return undefined;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27validate__required__columns(table, columns) {
    const errors = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const _bind = columns.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const column = columns[_];
        const _bind$2 = _M0FP28clhhhhhh17moon_2dcsv_2dlite21schema__column__index(table.headers, column);
        if (_bind$2 === undefined) {
          _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(errors, new _M0TP28clhhhhhh17moon_2dcsv_2dlite18CsvValidationError(1, column, "missing required column"));
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return errors;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite16schema__cell__at(row, index) {
    return index >= 0 && index < row.length ? _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(row, index) : "";
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite21schema__parse__double(value) {
    let _try_err;
    _L: {
      const _bind = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(value, 0, value.length));
      let _bind$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _bind$2 = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L;
      }
      const number = _bind$2;
      return new _M0DTPC16option6OptionGdE4Some(number);
    }
    return _M0DTPC16option6OptionGdE4None__;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite21validate__min__number(table, column, minimum) {
    let index;
    _L: {
      const _bind = _M0FP28clhhhhhh17moon_2dcsv_2dlite21schema__column__index(table.headers, column);
      if (_bind === undefined) {
        return [new _M0TP28clhhhhhh17moon_2dcsv_2dlite18CsvValidationError(1, column, "missing column")];
      } else {
        const _Some = _bind;
        const _index = _Some;
        index = _index;
        break _L;
      }
    }
    const errors = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const _bind = 0;
    const _bind$2 = table.rows.length;
    let _tmp = _bind;
    while (true) {
      const row_index = _tmp;
      if (row_index < _bind$2) {
        const value = _M0FP28clhhhhhh17moon_2dcsv_2dlite16schema__cell__at(_M0MPC15array5Array2atGRPB5ArrayGsEE(table.rows, row_index), index);
        if (!_M0MPC16string6String9is__empty(value)) {
          let number;
          _L$2: {
            _L$3: {
              const _bind$3 = _M0FP28clhhhhhh17moon_2dcsv_2dlite21schema__parse__double(value);
              if (_bind$3.$tag === 1) {
                const _Some = _bind$3;
                const _number = _Some._0;
                number = _number;
                break _L$3;
              } else {
                const _tmp$2 = row_index + 2 | 0;
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(21);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "expected number, got ");
                _M0MPB13StringBuilder13write__objectGsE(_string_builder, value);
                _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(errors, new _M0TP28clhhhhhh17moon_2dcsv_2dlite18CsvValidationError(_tmp$2, column, _M0MPB13StringBuilder10to__string(_string_builder)));
              }
              break _L$2;
            }
            if (number < minimum) {
              const _tmp$2 = row_index + 2 | 0;
              const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(25);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "expected number >= ");
              _M0MPB13StringBuilder13write__objectGdE(_string_builder, minimum);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", got ");
              _M0MPB13StringBuilder13write__objectGsE(_string_builder, value);
              _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(errors, new _M0TP28clhhhhhh17moon_2dcsv_2dlite18CsvValidationError(_tmp$2, column, _M0MPB13StringBuilder10to__string(_string_builder)));
            }
          }
        }
        _tmp = row_index + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return errors;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite21validate__max__number(table, column, maximum) {
    let index;
    _L: {
      const _bind = _M0FP28clhhhhhh17moon_2dcsv_2dlite21schema__column__index(table.headers, column);
      if (_bind === undefined) {
        return [new _M0TP28clhhhhhh17moon_2dcsv_2dlite18CsvValidationError(1, column, "missing column")];
      } else {
        const _Some = _bind;
        const _index = _Some;
        index = _index;
        break _L;
      }
    }
    const errors = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const _bind = 0;
    const _bind$2 = table.rows.length;
    let _tmp = _bind;
    while (true) {
      const row_index = _tmp;
      if (row_index < _bind$2) {
        const value = _M0FP28clhhhhhh17moon_2dcsv_2dlite16schema__cell__at(_M0MPC15array5Array2atGRPB5ArrayGsEE(table.rows, row_index), index);
        if (!_M0MPC16string6String9is__empty(value)) {
          let number;
          _L$2: {
            _L$3: {
              const _bind$3 = _M0FP28clhhhhhh17moon_2dcsv_2dlite21schema__parse__double(value);
              if (_bind$3.$tag === 1) {
                const _Some = _bind$3;
                const _number = _Some._0;
                number = _number;
                break _L$3;
              } else {
                const _tmp$2 = row_index + 2 | 0;
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(21);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "expected number, got ");
                _M0MPB13StringBuilder13write__objectGsE(_string_builder, value);
                _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(errors, new _M0TP28clhhhhhh17moon_2dcsv_2dlite18CsvValidationError(_tmp$2, column, _M0MPB13StringBuilder10to__string(_string_builder)));
              }
              break _L$2;
            }
            if (number > maximum) {
              const _tmp$2 = row_index + 2 | 0;
              const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(25);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "expected number <= ");
              _M0MPB13StringBuilder13write__objectGdE(_string_builder, maximum);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", got ");
              _M0MPB13StringBuilder13write__objectGsE(_string_builder, value);
              _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(errors, new _M0TP28clhhhhhh17moon_2dcsv_2dlite18CsvValidationError(_tmp$2, column, _M0MPB13StringBuilder10to__string(_string_builder)));
            }
          }
        }
        _tmp = row_index + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return errors;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite16schema__contains(values, value) {
    const _bind = values.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const item = values[_];
        if (item === value) {
          return true;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return false;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite25validate__allowed__values(table, column, allowed, required) {
    let index;
    _L: {
      const _bind = _M0FP28clhhhhhh17moon_2dcsv_2dlite21schema__column__index(table.headers, column);
      if (_bind === undefined) {
        return [new _M0TP28clhhhhhh17moon_2dcsv_2dlite18CsvValidationError(1, column, "missing column")];
      } else {
        const _Some = _bind;
        const _index = _Some;
        index = _index;
        break _L;
      }
    }
    const errors = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const _bind = 0;
    const _bind$2 = table.rows.length;
    let _tmp = _bind;
    while (true) {
      const row_index = _tmp;
      if (row_index < _bind$2) {
        const value = _M0FP28clhhhhhh17moon_2dcsv_2dlite16schema__cell__at(_M0MPC15array5Array2atGRPB5ArrayGsEE(table.rows, row_index), index);
        if (_M0MPC16string6String9is__empty(value)) {
          if (required) {
            _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(errors, new _M0TP28clhhhhhh17moon_2dcsv_2dlite18CsvValidationError(row_index + 2 | 0, column, "required value is empty"));
          }
        } else {
          if (!_M0FP28clhhhhhh17moon_2dcsv_2dlite16schema__contains(allowed, value)) {
            const _tmp$2 = row_index + 2 | 0;
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(17);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "unexpected value ");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, value);
            _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(errors, new _M0TP28clhhhhhh17moon_2dcsv_2dlite18CsvValidationError(_tmp$2, column, _M0MPB13StringBuilder10to__string(_string_builder)));
          }
        }
        _tmp = row_index + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return errors;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite17schema__index__of(values, value) {
    const _bind = 0;
    const _bind$2 = values.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(values, i) === value) {
          return i;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return undefined;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite11schema__key(row, indices) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const _bind = 0;
    const _bind$2 = indices.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 124);
        }
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite16schema__cell__at(row, _M0MPC15array5Array2atGiE(indices, i)));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite21validate__unique__key(table, columns) {
    const indices = _M0MPC15array5Array11new_2einnerGiE(0);
    const _bind = columns.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const column = columns[_];
        let index;
        _L: {
          _L$2: {
            const _bind$2 = _M0FP28clhhhhhh17moon_2dcsv_2dlite21schema__column__index(table.headers, column);
            if (_bind$2 === undefined) {
            } else {
              const _Some = _bind$2;
              const _index = _Some;
              index = _index;
              break _L$2;
            }
            break _L;
          }
          _M0MPC15array5Array4pushGiE(indices, index);
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (indices.length !== columns.length) {
      return [];
    }
    const keys = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const first_rows = _M0MPC15array5Array11new_2einnerGiE(0);
    const errors = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const _bind$2 = 0;
    const _bind$3 = table.rows.length;
    let _tmp$2 = _bind$2;
    while (true) {
      const row_index = _tmp$2;
      if (row_index < _bind$3) {
        const key = _M0FP28clhhhhhh17moon_2dcsv_2dlite11schema__key(_M0MPC15array5Array2atGRPB5ArrayGsEE(table.rows, row_index), indices);
        let existing;
        _L: {
          _L$2: {
            const _bind$4 = _M0FP28clhhhhhh17moon_2dcsv_2dlite17schema__index__of(keys, key);
            if (_bind$4 === undefined) {
              _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(keys, key);
              _M0MPC15array5Array4pushGiE(first_rows, row_index + 2 | 0);
            } else {
              const _Some = _bind$4;
              const _existing = _Some;
              existing = _existing;
              break _L$2;
            }
            break _L;
          }
          _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(errors, new _M0TP28clhhhhhh17moon_2dcsv_2dlite20CsvDuplicateKeyError(_M0MPC15array5Array2atGiE(first_rows, existing), row_index + 2 | 0, key));
        }
        _tmp$2 = row_index + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return errors;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite15is__bool__value(value) {
    const _bind = _M0MPC16string6String9to__lower(value);
    switch (_bind) {
      case "true": {
        return true;
      }
      case "false": {
        return true;
      }
      case "1": {
        return true;
      }
      case "0": {
        return true;
      }
      case "yes": {
        return true;
      }
      case "no": {
        return true;
      }
      case "on": {
        return true;
      }
      case "off": {
        return true;
      }
      default: {
        return false;
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite14is__int__value(value) {
    let _try_err;
    _L: {
      const _bind = _M0FPC28internal7strconv20parse__int64_2einner(new _M0TPC16string10StringView(value, 0, value.length), 0);
      let _bind$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _bind$2 = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L;
      }
      return true;
    }
    return false;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite21parse__double__option(value) {
    let _try_err;
    _L: {
      const _bind = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(value, 0, value.length));
      let _bind$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _bind$2 = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L;
      }
      const number = _bind$2;
      return new _M0DTPC16option6OptionGdE4Some(number);
    }
    return _M0DTPC16option6OptionGdE4None__;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite16values__contains(values, value) {
    const _bind = values.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const item = values[_];
        if (item === value) {
          return true;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return false;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite14profile__table(table) {
    const profiles = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const _bind = 0;
    const _bind$2 = table.headers.length;
    let _tmp = _bind;
    while (true) {
      const column = _tmp;
      if (column < _bind$2) {
        const values = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
        const empty = new _M0TPB8MutLocalGiE(0);
        const non_empty = new _M0TPB8MutLocalGiE(0);
        const all_int = new _M0TPB8MutLocalGbE(true);
        const all_float = new _M0TPB8MutLocalGbE(true);
        const all_bool = new _M0TPB8MutLocalGbE(true);
        const numeric_count = new _M0TPB8MutLocalGiE(0);
        const sum = new _M0TPB8MutLocalGdE(0);
        const min = new _M0TPB8MutLocalGOdE(_M0DTPC16option6OptionGdE4None__);
        const max = new _M0TPB8MutLocalGOdE(_M0DTPC16option6OptionGdE4None__);
        const _bind$3 = table.rows;
        const _bind$4 = _bind$3.length;
        let _tmp$2 = 0;
        while (true) {
          const _ = _tmp$2;
          if (_ < _bind$4) {
            const row = _bind$3[_];
            const value = column < row.length ? _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(row, column) : "";
            if (_M0MPC16string6String9is__empty(value)) {
              empty.val = empty.val + 1 | 0;
            } else {
              non_empty.val = non_empty.val + 1 | 0;
              if (!_M0FP28clhhhhhh17moon_2dcsv_2dlite16values__contains(values, value)) {
                _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(values, value);
              }
              const is_int = _M0FP28clhhhhhh17moon_2dcsv_2dlite14is__int__value(value);
              const parsed = _M0FP28clhhhhhh17moon_2dcsv_2dlite21parse__double__option(value);
              let is_float;
              if (parsed.$tag === 1) {
                is_float = true;
              } else {
                is_float = false;
              }
              const is_bool = _M0FP28clhhhhhh17moon_2dcsv_2dlite15is__bool__value(value);
              if (!is_int) {
                all_int.val = false;
              }
              if (!is_float) {
                all_float.val = false;
              }
              if (!is_bool) {
                all_bool.val = false;
              }
              let number;
              _L: {
                _L$2: {
                  if (parsed.$tag === 1) {
                    const _Some = parsed;
                    const _number = _Some._0;
                    number = _number;
                    break _L$2;
                  }
                  break _L;
                }
                numeric_count.val = numeric_count.val + 1 | 0;
                sum.val = sum.val + number;
                let _tmp$3;
                let current;
                _L$3: {
                  _L$4: {
                    const _bind$5 = min.val;
                    if (_bind$5.$tag === 1) {
                      const _Some = _bind$5;
                      const _current = _Some._0;
                      current = _current;
                      break _L$4;
                    } else {
                      _tmp$3 = number;
                    }
                    break _L$3;
                  }
                  _tmp$3 = number < current ? number : current;
                }
                min.val = new _M0DTPC16option6OptionGdE4Some(_tmp$3);
                let _tmp$4;
                let current$2;
                _L$4: {
                  _L$5: {
                    const _bind$5 = max.val;
                    if (_bind$5.$tag === 1) {
                      const _Some = _bind$5;
                      const _current = _Some._0;
                      current$2 = _current;
                      break _L$5;
                    } else {
                      _tmp$4 = number;
                    }
                    break _L$4;
                  }
                  _tmp$4 = number > current$2 ? number : current$2;
                }
                max.val = new _M0DTPC16option6OptionGdE4Some(_tmp$4);
              }
            }
            _tmp$2 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const inferred = non_empty.val === 0 ? 0 : all_bool.val ? 3 : all_int.val ? 1 : all_float.val ? 2 : 4;
        const average = numeric_count.val > 0 ? new _M0DTPC16option6OptionGdE4Some(sum.val / (numeric_count.val + 0)) : _M0DTPC16option6OptionGdE4None__;
        _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(profiles, new _M0TP28clhhhhhh17moon_2dcsv_2dlite13ColumnProfile(_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(table.headers, column), table.rows.length, empty.val, non_empty.val, values.length, inferred, min.val, max.val, average));
        _tmp = column + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return profiles;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite23schema__infer__cell__at(row, index) {
    return index >= 0 && index < row.length ? _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(row, index) : "";
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite23schema__infer__contains(values, value) {
    const _bind = values.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const item = values[_];
        if (item === value) {
          return true;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return false;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27schema__infer__examples__at(table, index, limit) {
    const examples = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    if (limit <= 0) {
      return examples;
    }
    const _bind = table.rows;
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const row = _bind[_];
        const value = _M0FP28clhhhhhh17moon_2dcsv_2dlite23schema__infer__cell__at(row, index);
        if (!_M0MPC16string6String9is__empty(value) && !_M0FP28clhhhhhh17moon_2dcsv_2dlite23schema__infer__contains(examples, value)) {
          _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(examples, value);
          if (examples.length >= limit) {
            return examples;
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return examples;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite19schema__infer__kind(kind) {
    switch (kind) {
      case 0: {
        return 0;
      }
      case 1: {
        return 1;
      }
      case 2: {
        return 2;
      }
      case 3: {
        return 3;
      }
      default: {
        return 0;
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite13infer__schema(table) {
    const profiles = _M0FP28clhhhhhh17moon_2dcsv_2dlite14profile__table(table);
    const rules = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const _bind = 0;
    const _bind$2 = profiles.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        const profile = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(profiles, i);
        _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(rules, new _M0TP28clhhhhhh17moon_2dcsv_2dlite21CsvInferredColumnRule(profile.name, _M0FP28clhhhhhh17moon_2dcsv_2dlite19schema__infer__kind(profile.inferred), profile.total > 0 && profile.empty === 0, profile.total, profile.empty, profile.unique, _M0FP28clhhhhhh17moon_2dcsv_2dlite27schema__infer__examples__at(table, i, 3)));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return rules;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite13column__index(headers, column) {
    const _bind = 0;
    const _bind$2 = headers.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(headers, i) === column) {
          return i;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return undefined;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite18column__type__name(kind) {
    switch (kind) {
      case 0: {
        return "text";
      }
      case 1: {
        return "integer";
      }
      case 2: {
        return "float";
      }
      default: {
        return "boolean";
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite21matches__column__type(value, kind) {
    switch (kind) {
      case 0: {
        return true;
      }
      case 1: {
        return _M0FP28clhhhhhh17moon_2dcsv_2dlite14is__int__value(value);
      }
      case 2: {
        const _bind = _M0FP28clhhhhhh17moon_2dcsv_2dlite21parse__double__option(value);
        if (_bind.$tag === 1) {
          return true;
        } else {
          return false;
        }
      }
      default: {
        return _M0FP28clhhhhhh17moon_2dcsv_2dlite15is__bool__value(value);
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite15validate__table(table, rules) {
    const errors = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const _bind = rules.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const rule = rules[_];
        let index;
        _L: {
          _L$2: {
            const _bind$2 = _M0FP28clhhhhhh17moon_2dcsv_2dlite13column__index(table.headers, rule.name);
            if (_bind$2 === undefined) {
              _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(errors, new _M0TP28clhhhhhh17moon_2dcsv_2dlite18CsvValidationError(1, rule.name, "missing column"));
            } else {
              const _Some = _bind$2;
              const _index = _Some;
              index = _index;
              break _L$2;
            }
            break _L;
          }
          const _bind$2 = 0;
          const _bind$3 = table.rows.length;
          let _tmp$2 = _bind$2;
          while (true) {
            const row_index = _tmp$2;
            if (row_index < _bind$3) {
              const value = index < _M0MPC15array5Array2atGRPB5ArrayGsEE(table.rows, row_index).length ? _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(_M0MPC15array5Array2atGRPB5ArrayGsEE(table.rows, row_index), index) : "";
              if (rule.required && _M0MPC16string6String9is__empty(value)) {
                _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(errors, new _M0TP28clhhhhhh17moon_2dcsv_2dlite18CsvValidationError(row_index + 2 | 0, rule.name, "required value is empty"));
              } else {
                if (!_M0MPC16string6String9is__empty(value) && !_M0FP28clhhhhhh17moon_2dcsv_2dlite21matches__column__type(value, rule.kind)) {
                  const _tmp$3 = row_index + 2 | 0;
                  const _tmp$4 = rule.name;
                  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(9);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "expected ");
                  _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP28clhhhhhh17moon_2dcsv_2dlite18column__type__name(rule.kind));
                  _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(errors, new _M0TP28clhhhhhh17moon_2dcsv_2dlite18CsvValidationError(_tmp$3, _tmp$4, _M0MPB13StringBuilder10to__string(_string_builder)));
                }
              }
              _tmp$2 = row_index + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return errors;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite20parse__with__dialect(input, dialect) {
    if (_M0MPC16string6String9is__empty(input)) {
      return [];
    }
    const rows = _M0MPC15array5Array11new_2einnerGRPB5ArrayGsEE(0);
    const row = new _M0TPB8MutLocalGRPB5ArrayGsEE(_M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0));
    const field = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const state = new _M0TPB8MutLocalGRP28clhhhhhh17moon_2dcsv_2dlite10ParseStateE(0);
    const skip_lf = new _M0TPB8MutLocalGbE(false);
    const ended_with_row = new _M0TPB8MutLocalGbE(false);
    const _it = _M0MPC16string6String4iter(input);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (skip_lf.val && ch === 10) {
        skip_lf.val = false;
        continue;
      }
      skip_lf.val = false;
      ended_with_row.val = false;
      const _bind = state.val;
      switch (_bind) {
        case 0: {
          if (ch === 34) {
            state.val = 2;
          } else {
            if (ch === dialect.delimiter) {
              _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(row.val, _M0MPB13StringBuilder10to__string(field));
              _M0MPB13StringBuilder5reset(field);
            } else {
              if (ch === 10) {
                const value = _M0MPB13StringBuilder10to__string(field);
                if (!(dialect.skip_empty_lines && (row.val.length === 0 && _M0MPC16string6String9is__empty(value)))) {
                  _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(row.val, value);
                  _M0MPC15array5Array4pushGRPB5ArrayGsEE(rows, row.val);
                }
                _M0MPB13StringBuilder5reset(field);
                row.val = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
                ended_with_row.val = true;
              } else {
                if (ch === 13) {
                  const value = _M0MPB13StringBuilder10to__string(field);
                  if (!(dialect.skip_empty_lines && (row.val.length === 0 && _M0MPC16string6String9is__empty(value)))) {
                    _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(row.val, value);
                    _M0MPC15array5Array4pushGRPB5ArrayGsEE(rows, row.val);
                  }
                  _M0MPB13StringBuilder5reset(field);
                  row.val = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
                  skip_lf.val = true;
                  ended_with_row.val = true;
                } else {
                  _M0IPB13StringBuilderPB6Logger11write__char(field, ch);
                  state.val = 1;
                }
              }
            }
          }
          break;
        }
        case 1: {
          if (ch === dialect.delimiter) {
            _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(row.val, _M0MPB13StringBuilder10to__string(field));
            _M0MPB13StringBuilder5reset(field);
            state.val = 0;
          } else {
            if (ch === 10) {
              const value = _M0MPB13StringBuilder10to__string(field);
              if (!(dialect.skip_empty_lines && (row.val.length === 0 && _M0MPC16string6String9is__empty(value)))) {
                _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(row.val, value);
                _M0MPC15array5Array4pushGRPB5ArrayGsEE(rows, row.val);
              }
              _M0MPB13StringBuilder5reset(field);
              row.val = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
              state.val = 0;
              ended_with_row.val = true;
            } else {
              if (ch === 13) {
                const value = _M0MPB13StringBuilder10to__string(field);
                if (!(dialect.skip_empty_lines && (row.val.length === 0 && _M0MPC16string6String9is__empty(value)))) {
                  _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(row.val, value);
                  _M0MPC15array5Array4pushGRPB5ArrayGsEE(rows, row.val);
                }
                _M0MPB13StringBuilder5reset(field);
                row.val = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
                state.val = 0;
                skip_lf.val = true;
                ended_with_row.val = true;
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(field, ch);
              }
            }
          }
          break;
        }
        case 2: {
          if (ch === 34) {
            state.val = 3;
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(field, ch);
          }
          break;
        }
        default: {
          if (ch === 34) {
            _M0IPB13StringBuilderPB6Logger11write__char(field, 34);
            state.val = 2;
          } else {
            if (ch === dialect.delimiter) {
              _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(row.val, _M0MPB13StringBuilder10to__string(field));
              _M0MPB13StringBuilder5reset(field);
              state.val = 0;
            } else {
              if (ch === 10) {
                const value = _M0MPB13StringBuilder10to__string(field);
                if (!(dialect.skip_empty_lines && (row.val.length === 0 && _M0MPC16string6String9is__empty(value)))) {
                  _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(row.val, value);
                  _M0MPC15array5Array4pushGRPB5ArrayGsEE(rows, row.val);
                }
                _M0MPB13StringBuilder5reset(field);
                row.val = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
                state.val = 0;
                ended_with_row.val = true;
              } else {
                if (ch === 13) {
                  const value = _M0MPB13StringBuilder10to__string(field);
                  if (!(dialect.skip_empty_lines && (row.val.length === 0 && _M0MPC16string6String9is__empty(value)))) {
                    _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(row.val, value);
                    _M0MPC15array5Array4pushGRPB5ArrayGsEE(rows, row.val);
                  }
                  _M0MPB13StringBuilder5reset(field);
                  row.val = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
                  state.val = 0;
                  skip_lf.val = true;
                  ended_with_row.val = true;
                } else {
                  _M0IPB13StringBuilderPB6Logger11write__char(field, ch);
                  state.val = 1;
                }
              }
            }
          }
        }
      }
      continue;
    }
    if (!ended_with_row.val) {
      const value = _M0MPB13StringBuilder10to__string(field);
      if (!(dialect.skip_empty_lines && (row.val.length === 0 && _M0MPC16string6String9is__empty(value)))) {
        _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(row.val, value);
        _M0MPC15array5Array4pushGRPB5ArrayGsEE(rows, row.val);
      }
    }
    return rows;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27parse__table__with__dialect(input, dialect) {
    const rows = _M0FP28clhhhhhh17moon_2dcsv_2dlite20parse__with__dialect(input, dialect);
    if (rows.length === 0) {
      return new _M0TP28clhhhhhh17moon_2dcsv_2dlite8CsvTable([], []);
    }
    const body = _M0MPC15array5Array11new_2einnerGRPB5ArrayGsEE(0);
    const _bind = 1;
    const _bind$2 = rows.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        _M0MPC15array5Array4pushGRPB5ArrayGsEE(body, _M0MPC15array5Array2atGRPB5ArrayGsEE(rows, i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0TP28clhhhhhh17moon_2dcsv_2dlite8CsvTable(_M0MPC15array5Array2atGRPB5ArrayGsEE(rows, 0), body);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite16default__dialect() {
    return new _M0TP28clhhhhhh17moon_2dcsv_2dlite10CsvDialect(44, "\n", false);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite19dialect__preference(delimiter) {
    return delimiter === 44 ? 0 : delimiter === 9 ? 1 : delimiter === 59 ? 2 : delimiter === 124 ? 3 : 9;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26dialect__candidate__better(candidate, current) {
    if (candidate.score !== current.score) {
      return candidate.score > current.score;
    }
    if (candidate.columns !== current.columns) {
      return candidate.columns > current.columns;
    }
    if (candidate.consistent_rows !== current.consistent_rows) {
      return candidate.consistent_rows > current.consistent_rows;
    }
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite19dialect__preference(candidate.delimiter) < _M0FP28clhhhhhh17moon_2dcsv_2dlite19dialect__preference(current.delimiter);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite23dialect__sniff__newline(input) {
    const previous_cr = new _M0TPB8MutLocalGbE(false);
    const _it = _M0MPC16string6String4iter(input);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (previous_cr.val && ch === 10) {
        return "\r\n";
      }
      previous_cr.val = ch === 13;
      if (ch === 10) {
        return "\n";
      }
      continue;
    }
    return "\n";
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26dialect__count__delimiters(input, delimiter) {
    const count = new _M0TPB8MutLocalGiE(0);
    const in_quotes = new _M0TPB8MutLocalGbE(false);
    const after_quote = new _M0TPB8MutLocalGbE(false);
    const _it = _M0MPC16string6String4iter(input);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (ch === 34) {
        if (in_quotes.val) {
          if (after_quote.val) {
            after_quote.val = false;
          } else {
            after_quote.val = true;
          }
        } else {
          in_quotes.val = true;
          after_quote.val = false;
        }
      } else {
        if (after_quote.val) {
          in_quotes.val = false;
          after_quote.val = false;
        }
        if (!in_quotes.val && ch === delimiter) {
          count.val = count.val + 1 | 0;
        }
      }
      continue;
    }
    return count.val;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite24dialect__width__variance(rows, expected) {
    const variance = new _M0TPB8MutLocalGiE(0);
    const _bind = rows.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const row = rows[_];
        const width = row.length;
        if (width > expected) {
          variance.val = variance.val + (width - expected | 0) | 0;
        } else {
          variance.val = variance.val + (expected - width | 0) | 0;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return variance.val;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite25dialect__score__candidate(input, name, delimiter) {
    const dialect = new _M0TP28clhhhhhh17moon_2dcsv_2dlite10CsvDialect(delimiter, _M0FP28clhhhhhh17moon_2dcsv_2dlite23dialect__sniff__newline(input), true);
    const rows = _M0FP28clhhhhhh17moon_2dcsv_2dlite20parse__with__dialect(input, dialect);
    const columns = rows.length === 0 ? 0 : _M0MPC15array5Array2atGRPB5ArrayGsEE(rows, 0).length;
    const consistent_rows = new _M0TPB8MutLocalGiE(0);
    const empty_cells = new _M0TPB8MutLocalGiE(0);
    const delimiter_count = _M0FP28clhhhhhh17moon_2dcsv_2dlite26dialect__count__delimiters(input, delimiter);
    const _bind = rows.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const row = rows[_];
        if (row.length === columns) {
          consistent_rows.val = consistent_rows.val + 1 | 0;
        }
        const _bind$2 = row.length;
        let _tmp$2 = 0;
        while (true) {
          const _$2 = _tmp$2;
          if (_$2 < _bind$2) {
            const cell = row[_$2];
            if (_M0MPC16string6String9is__empty(cell)) {
              empty_cells.val = empty_cells.val + 1 | 0;
            }
            _tmp$2 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const width_bonus = columns > 1 ? Math.imul(columns, 20) | 0 : 0;
    const consistency_bonus = Math.imul(consistent_rows.val, 100) | 0;
    const row_bonus = Math.imul(rows.length, 5) | 0;
    const delimiter_bonus = Math.imul(delimiter_count, 50) | 0;
    const single_column_penalty = columns <= 1 && delimiter_count === 0 ? 200 : 0;
    const penalty = (Math.imul(empty_cells.val, 2) | 0) + (Math.imul(_M0FP28clhhhhhh17moon_2dcsv_2dlite24dialect__width__variance(rows, columns), 25) | 0) | 0;
    const score = ((((consistency_bonus + width_bonus | 0) + row_bonus | 0) + delimiter_bonus | 0) - penalty | 0) - single_column_penalty | 0;
    return new _M0TP28clhhhhhh17moon_2dcsv_2dlite19CsvDialectCandidate(name, delimiter, rows.length, columns, consistent_rows.val, empty_cells.val, score);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite22sniff__dialect__report(input) {
    return [_M0FP28clhhhhhh17moon_2dcsv_2dlite25dialect__score__candidate(input, "comma", 44), _M0FP28clhhhhhh17moon_2dcsv_2dlite25dialect__score__candidate(input, "tab", 9), _M0FP28clhhhhhh17moon_2dcsv_2dlite25dialect__score__candidate(input, "semicolon", 59), _M0FP28clhhhhhh17moon_2dcsv_2dlite25dialect__score__candidate(input, "pipe", 124)];
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite14sniff__dialect(input) {
    const report = _M0FP28clhhhhhh17moon_2dcsv_2dlite22sniff__dialect__report(input);
    if (report.length === 0) {
      return _M0FP28clhhhhhh17moon_2dcsv_2dlite16default__dialect();
    }
    const best = new _M0TPB8MutLocalGRP28clhhhhhh17moon_2dcsv_2dlite19CsvDialectCandidateE(_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(report, 0));
    const _bind = report.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const candidate = report[_];
        if (_M0FP28clhhhhhh17moon_2dcsv_2dlite26dialect__candidate__better(candidate, best.val)) {
          best.val = candidate;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0TP28clhhhhhh17moon_2dcsv_2dlite10CsvDialect(best.val.delimiter, _M0FP28clhhhhhh17moon_2dcsv_2dlite23dialect__sniff__newline(input), false);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite18parse__table__auto(input) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite27parse__table__with__dialect(input, _M0FP28clhhhhhh17moon_2dcsv_2dlite14sniff__dialect(input));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite31quality__gate__default__options() {
    return new _M0TP28clhhhhhh17moon_2dcsv_2dlite21CsvQualityGateOptions(80, 10, 5, true, false, false, false);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite16audit__index__of(values, value) {
    const _bind = 0;
    const _bind$2 = values.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(values, i) === value) {
          return i;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return undefined;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite15audit__cell__at(row, index) {
    return index >= 0 && index < row.length ? _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(row, index) : "";
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite15audit__row__key(row, width) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const limit = row.length > width ? row.length : width;
    const _bind = 0;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < limit) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 31);
        }
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite15audit__cell__at(row, i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite38audit__collect__duplicate__row__issues(issues, table) {
    const keys = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const first_rows = _M0MPC15array5Array11new_2einnerGiE(0);
    const _bind = 0;
    const _bind$2 = table.rows.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        _L: {
          const key = _M0FP28clhhhhhh17moon_2dcsv_2dlite15audit__row__key(_M0MPC15array5Array2atGRPB5ArrayGsEE(table.rows, i), table.headers.length);
          if (_M0MPC16string6String9is__empty(key)) {
            break _L;
          }
          let existing;
          _L$2: {
            _L$3: {
              const _bind$3 = _M0FP28clhhhhhh17moon_2dcsv_2dlite16audit__index__of(keys, key);
              if (_bind$3 === undefined) {
                _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(keys, key);
                _M0MPC15array5Array4pushGiE(first_rows, i + 2 | 0);
              } else {
                const _Some = _bind$3;
                const _existing = _Some;
                existing = _existing;
                break _L$3;
              }
              break _L$2;
            }
            const _tmp$2 = i + 2 | 0;
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(59);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Row ");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, i + 2 | 0);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " duplicates row ");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0MPC15array5Array2atGiE(first_rows, existing));
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "; deduplicate if rows should be unique.");
            _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite20CsvAuditQualityIssue("info", _tmp$2, "*", _M0MPB13StringBuilder10to__string(_string_builder)));
          }
          break _L;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite20audit__column__label(headers, index) {
    if (index >= 0 && (index < headers.length && !_M0MPC16string6String9is__empty(_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(headers, index)))) {
      return _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(headers, index);
    } else {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "#");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, index + 1 | 0);
      return _M0MPB13StringBuilder10to__string(_string_builder);
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite37audit__collect__empty__column__issues(issues, table) {
    if (table.rows.length === 0) {
      return undefined;
    }
    const _bind = 0;
    const _bind$2 = table.headers.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        const empty = new _M0TPB8MutLocalGbE(true);
        const _bind$3 = table.rows;
        const _bind$4 = _bind$3.length;
        let _tmp$2 = 0;
        while (true) {
          const _ = _tmp$2;
          if (_ < _bind$4) {
            const row = _bind$3[_];
            if (!_M0MPC16string6String9is__empty(_M0FP28clhhhhhh17moon_2dcsv_2dlite15audit__cell__at(row, i))) {
              empty.val = false;
              break;
            }
            _tmp$2 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (empty.val) {
          const column = _M0FP28clhhhhhh17moon_2dcsv_2dlite20audit__column__label(table.headers, i);
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(74);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Column `");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, column);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "` is empty in every row; consider dropping it or filling defaults.");
          _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite20CsvAuditQualityIssue("warning", 1, column, _M0MPB13StringBuilder10to__string(_string_builder)));
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite17audit__row__empty(row, width) {
    const limit = row.length > width ? row.length : width;
    const _bind = 0;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < limit) {
        if (!_M0MPC16string6String9is__empty(_M0FP28clhhhhhh17moon_2dcsv_2dlite15audit__cell__at(row, i))) {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite34audit__collect__empty__row__issues(issues, table) {
    const width = table.headers.length;
    const _bind = 0;
    const _bind$2 = table.rows.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (_M0FP28clhhhhhh17moon_2dcsv_2dlite17audit__row__empty(_M0MPC15array5Array2atGRPB5ArrayGsEE(table.rows, i), width)) {
          const _tmp$2 = i + 2 | 0;
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(61);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Row ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, i + 2 | 0);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " is empty; consider dropping empty rows before profiling.");
          _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite20CsvAuditQualityIssue("warning", _tmp$2, "*", _M0MPB13StringBuilder10to__string(_string_builder)));
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite23audit__is__ascii__space(ch) {
    return ch === 32 || (ch === 9 || (ch === 10 || ch === 13));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite18audit__trim__ascii(value) {
    const chars = _M0MPC15array5Array11new_2einnerGcE(0);
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      _M0MPC15array5Array4pushGcE(chars, ch);
      continue;
    }
    const start = new _M0TPB8MutLocalGiE(0);
    const finish = new _M0TPB8MutLocalGiE(chars.length);
    while (true) {
      if (start.val < finish.val && _M0FP28clhhhhhh17moon_2dcsv_2dlite23audit__is__ascii__space(_M0MPC15array5Array2atGcE(chars, start.val))) {
        start.val = start.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    while (true) {
      if (finish.val > start.val && _M0FP28clhhhhhh17moon_2dcsv_2dlite23audit__is__ascii__space(_M0MPC15array5Array2atGcE(chars, finish.val - 1 | 0))) {
        finish.val = finish.val - 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const _bind = start.val;
    const _bind$2 = finish.val;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        _M0IPB13StringBuilderPB6Logger11write__char(out, _M0MPC15array5Array2atGcE(chars, i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite30audit__collect__header__issues(issues, table) {
    const _bind = 0;
    const _bind$2 = table.headers.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        const header = _M0FP28clhhhhhh17moon_2dcsv_2dlite18audit__trim__ascii(_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(table.headers, i));
        if (_M0MPC16string6String9is__empty(header)) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "#");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, i + 1 | 0);
          const _tmp$2 = _M0MPB13StringBuilder10to__string(_string_builder);
          const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(76);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "Header column #");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, i + 1 | 0);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " is empty; give it a stable name before validation or export.");
          _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite20CsvAuditQualityIssue("warning", 1, _tmp$2, _M0MPB13StringBuilder10to__string(_string_builder$2)));
        } else {
          const _bind$3 = 0;
          let _tmp$2 = _bind$3;
          while (true) {
            const j = _tmp$2;
            if (j < i) {
              if (_M0FP28clhhhhhh17moon_2dcsv_2dlite18audit__trim__ascii(_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(table.headers, j)) === header) {
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(82);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Header `");
                _M0MPB13StringBuilder13write__objectGsE(_string_builder, header);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "` is duplicated; rename columns before joining, selecting, or JSON export.");
                _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite20CsvAuditQualityIssue("warning", 1, header, _M0MPB13StringBuilder10to__string(_string_builder)));
                break;
              }
              _tmp$2 = j + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite22audit__quality__issues(table) {
    const issues = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite30audit__collect__header__issues(issues, table);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite34audit__collect__empty__row__issues(issues, table);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite37audit__collect__empty__column__issues(issues, table);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite38audit__collect__duplicate__row__issues(issues, table);
    return issues;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite32parse__unclosed__quote__position(input) {
    const in_quotes = new _M0TPB8MutLocalGbE(false);
    const after_quote = new _M0TPB8MutLocalGbE(false);
    const line = new _M0TPB8MutLocalGiE(1);
    const column = new _M0TPB8MutLocalGiE(1);
    const quote_line = new _M0TPB8MutLocalGiE(1);
    const quote_column = new _M0TPB8MutLocalGiE(1);
    const _it = _M0MPC16string6String4iter(input);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (ch === 34) {
        if (in_quotes.val) {
          if (after_quote.val) {
            after_quote.val = false;
          } else {
            after_quote.val = true;
          }
        } else {
          in_quotes.val = true;
          after_quote.val = false;
          quote_line.val = line.val;
          quote_column.val = column.val;
        }
      } else {
        if (after_quote.val) {
          in_quotes.val = false;
          after_quote.val = false;
        }
      }
      if (ch === 10) {
        line.val = line.val + 1 | 0;
        column.val = 1;
      } else {
        column.val = column.val + 1 | 0;
      }
      continue;
    }
    return in_quotes.val && !after_quote.val ? { _0: quote_line.val, _1: quote_column.val } : undefined;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite20parse__width__issues(rows) {
    const issues = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    if (rows.length === 0) {
      return issues;
    }
    const expected = _M0MPC15array5Array2atGRPB5ArrayGsEE(rows, 0).length;
    const _bind = 1;
    const _bind$2 = rows.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        const actual = _M0MPC15array5Array2atGRPB5ArrayGsEE(rows, i).length;
        if (actual !== expected) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(22);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "expected ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, expected);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " fields, got ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, actual);
          _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvParseError(_M0MPB13StringBuilder10to__string(_string_builder), i + 1 | 0, 1));
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return issues;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite29parse__checked__with__dialect(input, dialect) {
    const rows = _M0FP28clhhhhhh17moon_2dcsv_2dlite20parse__with__dialect(input, dialect);
    const issues = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    let line;
    let column;
    _L: {
      _L$2: {
        const _bind = _M0FP28clhhhhhh17moon_2dcsv_2dlite32parse__unclosed__quote__position(input);
        if (_bind === undefined) {
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _line = _x._0;
          const _column = _x._1;
          line = _line;
          column = _column;
          break _L$2;
        }
        break _L;
      }
      _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvParseError("unclosed quoted field", line, column));
    }
    const width_issues = _M0FP28clhhhhhh17moon_2dcsv_2dlite20parse__width__issues(rows);
    const _bind = width_issues.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const issue = width_issues[_];
        _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, issue);
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0TP28clhhhhhh17moon_2dcsv_2dlite14CsvParseReport(rows, issues);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite36parse__table__checked__with__dialect(input, dialect) {
    const report = _M0FP28clhhhhhh17moon_2dcsv_2dlite29parse__checked__with__dialect(input, dialect);
    let table;
    if (report.rows.length === 0) {
      table = new _M0TP28clhhhhhh17moon_2dcsv_2dlite8CsvTable([], []);
    } else {
      const rows = _M0MPC15array5Array11new_2einnerGRPB5ArrayGsEE(0);
      const _bind = 1;
      const _bind$2 = report.rows.length;
      let _tmp = _bind;
      while (true) {
        const i = _tmp;
        if (i < _bind$2) {
          _M0MPC15array5Array4pushGRPB5ArrayGsEE(rows, _M0MPC15array5Array2atGRPB5ArrayGsEE(report.rows, i));
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      table = new _M0TP28clhhhhhh17moon_2dcsv_2dlite8CsvTable(_M0MPC15array5Array2atGRPB5ArrayGsEE(report.rows, 0), rows);
    }
    return new _M0TP28clhhhhhh17moon_2dcsv_2dlite19CsvTableParseReport(table, report.issues);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite18cleaning__cell__at(row, index) {
    return index >= 0 && index < row.length ? _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(row, index) : "";
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite23table__missing__summary(table) {
    const rows = _M0MPC15array5Array11new_2einnerGRPB5ArrayGsEE(0);
    const _bind = 0;
    const _bind$2 = table.headers.length;
    let _tmp = _bind;
    while (true) {
      const index = _tmp;
      if (index < _bind$2) {
        const missing = new _M0TPB8MutLocalGiE(0);
        const present = new _M0TPB8MutLocalGiE(0);
        const _bind$3 = table.rows;
        const _bind$4 = _bind$3.length;
        let _tmp$2 = 0;
        while (true) {
          const _ = _tmp$2;
          if (_ < _bind$4) {
            const row = _bind$3[_];
            if (_M0MPC16string6String9is__empty(_M0FP28clhhhhhh17moon_2dcsv_2dlite18cleaning__cell__at(row, index))) {
              missing.val = missing.val + 1 | 0;
            } else {
              present.val = present.val + 1 | 0;
            }
            _tmp$2 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _M0MPC15array5Array4pushGRPB5ArrayGsEE(rows, [_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(table.headers, index), _M0MPC13int3Int18to__string_2einner(missing.val, 10), _M0MPC13int3Int18to__string_2einner(present.val, 10)]);
        _tmp = index + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0TP28clhhhhhh17moon_2dcsv_2dlite8CsvTable(["column", "missing", "present"], rows);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite25audit__csv__with__dialect(input, dialect) {
    const parsed = _M0FP28clhhhhhh17moon_2dcsv_2dlite36parse__table__checked__with__dialect(input, dialect);
    const table = parsed.table;
    return new _M0TP28clhhhhhh17moon_2dcsv_2dlite14CsvAuditReport(dialect, table, parsed.issues, _M0FP28clhhhhhh17moon_2dcsv_2dlite22audit__quality__issues(table), _M0FP28clhhhhhh17moon_2dcsv_2dlite13infer__schema(table), _M0FP28clhhhhhh17moon_2dcsv_2dlite23table__missing__summary(table), _M0FP28clhhhhhh17moon_2dcsv_2dlite14profile__table(table));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite10audit__csv(input) {
    const dialect = _M0FP28clhhhhhh17moon_2dcsv_2dlite14sniff__dialect(input);
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite25audit__csv__with__dialect(input, dialect);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite19audit__clamp__score(score) {
    return score < 0 ? 0 : score > 100 ? 100 : score;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__consistency__penalty(issues) {
    const penalty = new _M0TPB8MutLocalGiE(0);
    const _bind = issues.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const issue = issues[_];
        if (issue.row === 1 && _M0IP016_24default__implPB2Eq10not__equalGsE(issue.column, "*")) {
          penalty.val = penalty.val + 12 | 0;
        } else {
          if (issue.severity === "error") {
            penalty.val = penalty.val + 20 | 0;
          } else {
            if (issue.severity === "warning") {
              penalty.val = penalty.val + 8 | 0;
            }
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return penalty.val;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite28audit__duplicate__row__count(issues) {
    const count = new _M0TPB8MutLocalGiE(0);
    const _bind = issues.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const issue = issues[_];
        if (issue.severity === "info" && issue.column === "*") {
          count.val = count.val + 1 | 0;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return count.val;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite24audit__grade__for__score(score) {
    return score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite21audit__issue__penalty(report) {
    const penalty = new _M0TPB8MutLocalGiE(Math.imul(report.parse_issues.length, 20) | 0);
    const _bind = report.quality_issues;
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const issue = _bind[_];
        if (issue.severity === "error") {
          penalty.val = penalty.val + 20 | 0;
        } else {
          if (issue.severity === "warning") {
            penalty.val = penalty.val + 7 | 0;
          } else {
            penalty.val = penalty.val + 2 | 0;
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return penalty.val;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite21audit__missing__cells(profiles) {
    const total = new _M0TPB8MutLocalGiE(0);
    const _bind = profiles.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const profile = profiles[_];
        total.val = total.val + profile.empty | 0;
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return total.val;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite23audit__risk__for__score(score) {
    return score >= 85 ? "low" : score >= 70 ? "medium" : "high";
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite19audit__total__cells(profiles) {
    const total = new _M0TPB8MutLocalGiE(0);
    const _bind = profiles.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const profile = profiles[_];
        total.val = total.val + profile.total | 0;
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return total.val;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite21audit__quality__score(report) {
    const structure_score = _M0FP28clhhhhhh17moon_2dcsv_2dlite19audit__clamp__score(100 - (Math.imul(report.parse_issues.length, 35) | 0) | 0);
    const missing_cells = _M0FP28clhhhhhh17moon_2dcsv_2dlite21audit__missing__cells(report.profiles);
    const total_cells = _M0FP28clhhhhhh17moon_2dcsv_2dlite19audit__total__cells(report.profiles);
    let completeness_score;
    if (total_cells === 0) {
      completeness_score = 100;
    } else {
      if (total_cells === 0) {
        $panic();
      }
      completeness_score = _M0FP28clhhhhhh17moon_2dcsv_2dlite19audit__clamp__score(100 - ((Math.imul(missing_cells, 100) | 0) / total_cells | 0) | 0);
    }
    const consistency_score = _M0FP28clhhhhhh17moon_2dcsv_2dlite19audit__clamp__score(100 - _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__consistency__penalty(report.quality_issues) | 0);
    const uniqueness_score = _M0FP28clhhhhhh17moon_2dcsv_2dlite19audit__clamp__score(100 - (Math.imul(_M0FP28clhhhhhh17moon_2dcsv_2dlite28audit__duplicate__row__count(report.quality_issues), 12) | 0) | 0);
    const issue_penalty = _M0FP28clhhhhhh17moon_2dcsv_2dlite21audit__issue__penalty(report);
    if (100 === 0) {
      $panic();
    }
    const weighted = ((((Math.imul(structure_score, 35) | 0) + (Math.imul(completeness_score, 25) | 0) | 0) + (Math.imul(consistency_score, 25) | 0) | 0) + (Math.imul(uniqueness_score, 15) | 0) | 0) / 100 | 0;
    if (5 === 0) {
      $panic();
    }
    const score = _M0FP28clhhhhhh17moon_2dcsv_2dlite19audit__clamp__score(weighted - (issue_penalty / 5 | 0) | 0);
    return new _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvAuditScore(score, _M0FP28clhhhhhh17moon_2dcsv_2dlite24audit__grade__for__score(score), _M0FP28clhhhhhh17moon_2dcsv_2dlite23audit__risk__for__score(score), structure_score, completeness_score, consistency_score, uniqueness_score, issue_penalty, missing_cells, total_cells);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite25drift__column__type__name(kind) {
    switch (kind) {
      case 0: {
        return "text";
      }
      case 1: {
        return "integer";
      }
      case 2: {
        return "float";
      }
      default: {
        return "boolean";
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite17drift__find__rule(rules, column) {
    const _bind = rules.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const rule = rules[_];
        const label = _M0MPC16string6String9is__empty(rule.name) ? "#empty" : rule.name;
        if (label === column) {
          return rule;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return undefined;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite38drift__collect__common__column__issues(issues, baseline, candidate, column) {
    let base_rule;
    let next_rule;
    _L: {
      const _bind = _M0FP28clhhhhhh17moon_2dcsv_2dlite17drift__find__rule(baseline.inferred_schema, column);
      const _bind$2 = _M0FP28clhhhhhh17moon_2dcsv_2dlite17drift__find__rule(candidate.inferred_schema, column);
      if (_bind === undefined) {
        return;
      } else {
        const _Some = _bind;
        const _base_rule = _Some;
        if (_bind$2 === undefined) {
          return;
        } else {
          const _Some$2 = _bind$2;
          const _next_rule = _Some$2;
          base_rule = _base_rule;
          next_rule = _next_rule;
          break _L;
        }
      }
    }
    if (_M0IP016_24default__implPB2Eq10not__equalGRP28clhhhhhh17moon_2dcsv_2dlite13CsvColumnTypeE(base_rule.kind, next_rule.kind)) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(33);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Column `");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, column);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "` type changed from ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP28clhhhhhh17moon_2dcsv_2dlite25drift__column__type__name(base_rule.kind));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " to ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP28clhhhhhh17moon_2dcsv_2dlite25drift__column__type__name(next_rule.kind));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".");
      _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssue("warning", "type", column, _M0MPB13StringBuilder10to__string(_string_builder)));
    }
    if (next_rule.empty > base_rule.empty) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(45);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Column `");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, column);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "` missing values increased from ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, base_rule.empty);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " to ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, next_rule.empty);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".");
      _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssue("warning", "missing", column, _M0MPB13StringBuilder10to__string(_string_builder)));
      return;
    } else {
      if (base_rule.empty > 0 && next_rule.empty === 0) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(39);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Column `");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, column);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "` no longer has missing values.");
        _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssue("info", "missing", column, _M0MPB13StringBuilder10to__string(_string_builder)));
        return;
      } else {
        return;
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite15drift__contains(values, value) {
    const _bind = values.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const item = values[_];
        if (item === value) {
          return true;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return false;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite22drift__unique__headers(headers) {
    const values = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const _bind = headers.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const header = headers[_];
        const label = _M0MPC16string6String9is__empty(header) ? "#empty" : header;
        if (!_M0FP28clhhhhhh17moon_2dcsv_2dlite15drift__contains(values, label)) {
          _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(values, label);
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return values;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite30drift__collect__column__issues(issues, baseline, candidate) {
    const baseline_headers = _M0FP28clhhhhhh17moon_2dcsv_2dlite22drift__unique__headers(baseline.table.headers);
    const candidate_headers = _M0FP28clhhhhhh17moon_2dcsv_2dlite22drift__unique__headers(candidate.table.headers);
    const _bind = baseline_headers.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const column = baseline_headers[_];
        if (!_M0FP28clhhhhhh17moon_2dcsv_2dlite15drift__contains(candidate_headers, column)) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(46);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Column `");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, column);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "` was removed from the candidate data.");
          _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssue("error", "schema", column, _M0MPB13StringBuilder10to__string(_string_builder)));
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$2 = candidate_headers.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$2) {
        const column = candidate_headers[_];
        if (!_M0FP28clhhhhhh17moon_2dcsv_2dlite15drift__contains(baseline_headers, column)) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(42);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Column `");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, column);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "` was added in the candidate data.");
          _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssue("info", "schema", column, _M0MPB13StringBuilder10to__string(_string_builder)));
        }
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$3 = baseline_headers.length;
    let _tmp$3 = 0;
    while (true) {
      const _ = _tmp$3;
      if (_ < _bind$3) {
        const column = baseline_headers[_];
        if (_M0FP28clhhhhhh17moon_2dcsv_2dlite15drift__contains(candidate_headers, column)) {
          _M0FP28clhhhhhh17moon_2dcsv_2dlite38drift__collect__common__column__issues(issues, baseline, candidate, column);
        }
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite29drift__collect__score__issues(issues, baseline_score, candidate_score) {
    const delta = candidate_score.score - baseline_score.score | 0;
    if (delta <= -25) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(46);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Quality score dropped by ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, 0 - delta | 0);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " point(s), from ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, baseline_score.score);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " to ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, candidate_score.score);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".");
      _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssue("error", "score", "*", _M0MPB13StringBuilder10to__string(_string_builder)));
      return;
    } else {
      if (delta <= -8) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(46);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Quality score dropped by ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, 0 - delta | 0);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " point(s), from ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, baseline_score.score);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " to ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, candidate_score.score);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".");
        _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssue("warning", "score", "*", _M0MPB13StringBuilder10to__string(_string_builder)));
        return;
      } else {
        if (delta >= 8) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(47);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Quality score improved by ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, delta);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " point(s), from ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, baseline_score.score);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " to ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, candidate_score.score);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".");
          _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssue("info", "score", "*", _M0MPB13StringBuilder10to__string(_string_builder)));
          return;
        } else {
          return;
        }
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite10drift__abs(value) {
    return value < 0 ? 0 - value | 0 : value;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27drift__percent__change__abs(delta, baseline) {
    if (baseline === 0) {
      return delta === 0 ? 0 : 100;
    } else {
      if (baseline === 0) {
        $panic();
      }
      return (Math.imul(_M0FP28clhhhhhh17moon_2dcsv_2dlite10drift__abs(delta), 100) | 0) / baseline | 0;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite18drift__signed__int(value) {
    if (value > 0) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "+");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, value);
      return _M0MPB13StringBuilder10to__string(_string_builder);
    } else {
      return _M0MPC13int3Int18to__string_2einner(value, 10);
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite29drift__collect__shape__issues(issues, baseline, candidate) {
    const row_delta = candidate.table.rows.length - baseline.table.rows.length | 0;
    if (row_delta !== 0) {
      const severity = _M0FP28clhhhhhh17moon_2dcsv_2dlite27drift__percent__change__abs(row_delta, baseline.table.rows.length) >= 50 ? "warning" : "info";
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(31);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Row count changed from ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, baseline.table.rows.length);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " to ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, candidate.table.rows.length);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " (");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP28clhhhhhh17moon_2dcsv_2dlite18drift__signed__int(row_delta));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ").");
      _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssue(severity, "shape", "*", _M0MPB13StringBuilder10to__string(_string_builder)));
    }
    const column_delta = candidate.table.headers.length - baseline.table.headers.length | 0;
    if (column_delta !== 0) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(34);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Column count changed from ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, baseline.table.headers.length);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " to ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, candidate.table.headers.length);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " (");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP28clhhhhhh17moon_2dcsv_2dlite18drift__signed__int(column_delta));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ").");
      _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssue("warning", "shape", "*", _M0MPB13StringBuilder10to__string(_string_builder)));
      return;
    } else {
      return;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite12audit__drift(baseline_input, candidate_input) {
    const baseline = _M0FP28clhhhhhh17moon_2dcsv_2dlite10audit__csv(baseline_input);
    const candidate = _M0FP28clhhhhhh17moon_2dcsv_2dlite10audit__csv(candidate_input);
    const baseline_score = _M0FP28clhhhhhh17moon_2dcsv_2dlite21audit__quality__score(baseline);
    const candidate_score = _M0FP28clhhhhhh17moon_2dcsv_2dlite21audit__quality__score(candidate);
    const issues = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite29drift__collect__score__issues(issues, baseline_score, candidate_score);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite29drift__collect__shape__issues(issues, baseline, candidate);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite30drift__collect__column__issues(issues, baseline, candidate);
    return new _M0TP28clhhhhhh17moon_2dcsv_2dlite14CsvDriftReport(baseline, candidate, baseline_score, candidate_score, candidate_score.score - baseline_score.score | 0, candidate.table.rows.length - baseline.table.rows.length | 0, candidate.table.headers.length - baseline.table.headers.length | 0, issues);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite32gate__collect__candidate__issues(issues, drift, options) {
    if (drift.candidate.parse_issues.length > 0) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(72);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Candidate CSV has ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, drift.candidate.parse_issues.length);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " parse issue(s); fix structural issues before release.");
      _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite19CsvQualityGateIssue("error", "parse_issues", "*", _M0MPB13StringBuilder10to__string(_string_builder)));
    }
    if (drift.candidate.quality_issues.length > options.max_quality_issues) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(68);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Candidate CSV has ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, drift.candidate.quality_issues.length);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " quality issue(s), exceeding the allowed maximum ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, options.max_quality_issues);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".");
      _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite19CsvQualityGateIssue("error", "max_quality_issues", "*", _M0MPB13StringBuilder10to__string(_string_builder)));
      return;
    } else {
      return;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite23gate__push__from__drift(issues, severity, rule, issue) {
    _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite19CsvQualityGateIssue(severity, rule, issue.column, issue.message));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite28gate__collect__drift__issues(issues, drift, options) {
    const _bind = drift.issues;
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const issue = _bind[_];
        if (issue.category === "schema") {
          let _tmp$2;
          const _tmp$3 = issue.message;
          const _bind$3 = "was removed";
          if (_M0MPC16string6String8contains(_tmp$3, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
            _tmp$2 = !options.allow_removed_columns;
          } else {
            _tmp$2 = false;
          }
          if (_tmp$2) {
            _M0FP28clhhhhhh17moon_2dcsv_2dlite23gate__push__from__drift(issues, "error", "no_removed_columns", issue);
          } else {
            let _tmp$4;
            const _tmp$5 = issue.message;
            const _bind$4 = "was added";
            if (_M0MPC16string6String8contains(_tmp$5, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
              _tmp$4 = !options.allow_new_columns;
            } else {
              _tmp$4 = false;
            }
            if (_tmp$4) {
              _M0FP28clhhhhhh17moon_2dcsv_2dlite23gate__push__from__drift(issues, "error", "no_new_columns", issue);
            }
          }
        } else {
          if (issue.category === "type" && !options.allow_type_changes) {
            _M0FP28clhhhhhh17moon_2dcsv_2dlite23gate__push__from__drift(issues, "error", "no_type_changes", issue);
          } else {
            let _tmp$2;
            if (issue.category === "missing") {
              let _tmp$3;
              const _tmp$4 = issue.message;
              const _bind$3 = "increased";
              if (_M0MPC16string6String8contains(_tmp$4, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
                _tmp$3 = !options.allow_missing_increase;
              } else {
                _tmp$3 = false;
              }
              _tmp$2 = _tmp$3;
            } else {
              _tmp$2 = false;
            }
            if (_tmp$2) {
              _M0FP28clhhhhhh17moon_2dcsv_2dlite23gate__push__from__drift(issues, "error", "no_missing_increase", issue);
            }
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite28gate__collect__score__issues(issues, drift, options) {
    if (drift.candidate_score.score < options.min_score) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(56);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Candidate quality score ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, drift.candidate_score.score);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " is below the required minimum ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, options.min_score);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".");
      _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite19CsvQualityGateIssue("error", "min_score", "*", _M0MPB13StringBuilder10to__string(_string_builder)));
    }
    if (drift.score_delta < (0 - options.max_score_drop | 0)) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(77);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Candidate quality score dropped by ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, 0 - drift.score_delta | 0);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " point(s), exceeding the allowed drop of ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, options.max_score_drop);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".");
      _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite19CsvQualityGateIssue("error", "max_score_drop", "*", _M0MPB13StringBuilder10to__string(_string_builder)));
      return;
    } else {
      return;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite12gate__passed(issues) {
    const _bind = issues.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const issue = issues[_];
        if (issue.severity === "error") {
          return false;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite20audit__quality__gate(baseline_input, candidate_input, options) {
    const drift = _M0FP28clhhhhhh17moon_2dcsv_2dlite12audit__drift(baseline_input, candidate_input);
    const issues = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite28gate__collect__score__issues(issues, drift, options);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite32gate__collect__candidate__issues(issues, drift, options);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite28gate__collect__drift__issues(issues, drift, options);
    return new _M0TP28clhhhhhh17moon_2dcsv_2dlite20CsvQualityGateReport(_M0FP28clhhhhhh17moon_2dcsv_2dlite12gate__passed(issues), options, drift, issues);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite29audit__quality__gate__default(baseline_input, candidate_input) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite20audit__quality__gate(baseline_input, candidate_input, _M0FP28clhhhhhh17moon_2dcsv_2dlite31quality__gate__default__options());
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite16gate__bool__text(value) {
    return value ? "yes" : "no";
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite17gate__signed__int(value) {
    if (value > 0) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "+");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, value);
      return _M0MPB13StringBuilder10to__string(_string_builder);
    } else {
      return _M0MPC13int3Int18to__string_2einner(value, 10);
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27gate__write__markdown__cell(out, value) {
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          return;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (ch === 124) {
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\\|");
      } else {
        if (ch === 10 || ch === 13) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 32);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(out, ch);
        }
      }
      continue;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite38audit__quality__gate__report__markdown(report) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "# CSV Quality Gate Report\n\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "## Summary\n\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "- Status: ");
    _M0IPB13StringBuilderPB6Logger13write__string(out, report.passed ? "pass" : "fail");
    _M0IPB13StringBuilderPB6Logger11write__char(out, 10);
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(22);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "- Baseline score: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, report.drift.baseline_score.score);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " (");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, report.drift.baseline_score.grade);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ")\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(23);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "- Candidate score: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, report.drift.candidate_score.score);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " (");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, report.drift.candidate_score.grade);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ")\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(16);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "- Score delta: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, _M0FP28clhhhhhh17moon_2dcsv_2dlite17gate__signed__int(report.drift.score_delta));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
    const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(16);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "- Gate issues: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, report.issues.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\n## Policy\n\n");
    const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(28);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "- Minimum candidate score: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, report.options.min_score);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$5));
    const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(31);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "- Maximum allowed score drop: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$6, report.options.max_score_drop);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$6));
    const _string_builder$7 = _M0MPB13StringBuilder21StringBuilder_2einner(37);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, "- Maximum candidate quality issues: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$7, report.options.max_quality_issues);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$7));
    const _string_builder$8 = _M0MPB13StringBuilder21StringBuilder_2einner(22);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$8, "- Allow new columns: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$8, _M0FP28clhhhhhh17moon_2dcsv_2dlite16gate__bool__text(report.options.allow_new_columns));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$8, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$8));
    const _string_builder$9 = _M0MPB13StringBuilder21StringBuilder_2einner(26);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$9, "- Allow removed columns: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$9, _M0FP28clhhhhhh17moon_2dcsv_2dlite16gate__bool__text(report.options.allow_removed_columns));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$9, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$9));
    const _string_builder$10 = _M0MPB13StringBuilder21StringBuilder_2einner(23);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$10, "- Allow type changes: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$10, _M0FP28clhhhhhh17moon_2dcsv_2dlite16gate__bool__text(report.options.allow_type_changes));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$10, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$10));
    const _string_builder$11 = _M0MPB13StringBuilder21StringBuilder_2einner(34);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$11, "- Allow missing-value increases: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$11, _M0FP28clhhhhhh17moon_2dcsv_2dlite16gate__bool__text(report.options.allow_missing_increase));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$11, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$11));
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\n## Gate Issues\n\n");
    if (report.issues.length === 0) {
      _M0IPB13StringBuilderPB6Logger13write__string(out, "No quality gate violations.\n");
    } else {
      _M0IPB13StringBuilderPB6Logger13write__string(out, "| severity | rule | column | message |\n");
      _M0IPB13StringBuilderPB6Logger13write__string(out, "| --- | --- | --- | --- |\n");
      const _bind = report.issues;
      const _bind$2 = _bind.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$2) {
          const issue = _bind[_];
          _M0IPB13StringBuilderPB6Logger13write__string(out, "| ");
          _M0FP28clhhhhhh17moon_2dcsv_2dlite27gate__write__markdown__cell(out, issue.severity);
          _M0IPB13StringBuilderPB6Logger13write__string(out, " | ");
          _M0FP28clhhhhhh17moon_2dcsv_2dlite27gate__write__markdown__cell(out, issue.rule);
          _M0IPB13StringBuilderPB6Logger13write__string(out, " | ");
          _M0FP28clhhhhhh17moon_2dcsv_2dlite27gate__write__markdown__cell(out, issue.column);
          _M0IPB13StringBuilderPB6Logger13write__string(out, " | ");
          _M0FP28clhhhhhh17moon_2dcsv_2dlite27gate__write__markdown__cell(out, issue.message);
          _M0IPB13StringBuilderPB6Logger13write__string(out, " |\n");
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite30audit__quality__gate__markdown(baseline_input, candidate_input) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite38audit__quality__gate__report__markdown(_M0FP28clhhhhhh17moon_2dcsv_2dlite29audit__quality__gate__default(baseline_input, candidate_input));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite25gate__write__json__string(out, value) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 34);
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (ch === 34) {
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\\\"");
      } else {
        if (ch === 92) {
          _M0IPB13StringBuilderPB6Logger13write__string(out, "\\\\");
        } else {
          if (ch === 10) {
            _M0IPB13StringBuilderPB6Logger13write__string(out, "\\n");
          } else {
            if (ch === 13) {
              _M0IPB13StringBuilderPB6Logger13write__string(out, "\\r");
            } else {
              if (ch === 9) {
                _M0IPB13StringBuilderPB6Logger13write__string(out, "\\t");
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(out, ch);
              }
            }
          }
        }
      }
      continue;
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 34);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite25gate__write__issues__json(out, issues) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = issues.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        const issue = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(issues, i);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\"severity\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite25gate__write__json__string(out, issue.severity);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"rule\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite25gate__write__json__string(out, issue.rule);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"column\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite25gate__write__json__string(out, issue.column);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"message\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite25gate__write__json__string(out, issue.message);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite23gate__write__json__bool(out, value) {
    _M0IPB13StringBuilderPB6Logger13write__string(out, value ? "true" : "false");
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26gate__write__options__json(out, options) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(12);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"min_score\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, options.min_score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(18);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"max_score_drop\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, options.max_score_drop);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(22);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",\"max_quality_issues\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, options.max_quality_issues);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"allow_new_columns\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite23gate__write__json__bool(out, options.allow_new_columns);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"allow_removed_columns\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite23gate__write__json__bool(out, options.allow_removed_columns);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"allow_type_changes\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite23gate__write__json__bool(out, options.allow_type_changes);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"allow_missing_increase\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite23gate__write__json__bool(out, options.allow_missing_increase);
    _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite34audit__quality__gate__report__json(report) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\"passed\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite23gate__write__json__bool(out, report.passed);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"summary\":{");
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(17);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"baseline_score\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, report.drift.baseline_score.score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(19);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"candidate_score\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, report.drift.candidate_score.score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(15);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",\"score_delta\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, report.drift.score_delta);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
    const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(17);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, ",\"baseline_rows\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, report.drift.baseline.table.rows.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
    const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(18);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, ",\"candidate_rows\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, report.drift.candidate.table.rows.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$5));
    const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(13);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, ",\"row_delta\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$6, report.drift.row_delta);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$6));
    const _string_builder$7 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, ",\"baseline_columns\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$7, report.drift.baseline.table.headers.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$7));
    const _string_builder$8 = _M0MPB13StringBuilder21StringBuilder_2einner(21);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$8, ",\"candidate_columns\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$8, report.drift.candidate.table.headers.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$8));
    const _string_builder$9 = _M0MPB13StringBuilder21StringBuilder_2einner(16);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$9, ",\"column_delta\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$9, report.drift.column_delta);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$9));
    const _string_builder$10 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$10, ",\"gate_issue_count\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$10, report.issues.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$10));
    _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"options\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26gate__write__options__json(out, report.options);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"issues\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite25gate__write__issues__json(out, report.issues);
    const _string_builder$11 = _M0MPB13StringBuilder21StringBuilder_2einner(21);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$11, ",\"drift_issue_count\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$11, report.drift.issues.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$11));
    _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__quality__gate__json(baseline_input, candidate_input) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite34audit__quality__gate__report__json(_M0FP28clhhhhhh17moon_2dcsv_2dlite29audit__quality__gate__default(baseline_input, candidate_input));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26contract__is__ascii__space(ch) {
    return ch === 32 || (ch === 9 || (ch === 10 || ch === 13));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__trim__ascii(value) {
    const chars = _M0MPC15array5Array11new_2einnerGcE(0);
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      _M0MPC15array5Array4pushGcE(chars, ch);
      continue;
    }
    const start = new _M0TPB8MutLocalGiE(0);
    const finish = new _M0TPB8MutLocalGiE(chars.length);
    while (true) {
      if (start.val < finish.val && _M0FP28clhhhhhh17moon_2dcsv_2dlite26contract__is__ascii__space(_M0MPC15array5Array2atGcE(chars, start.val))) {
        start.val = start.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    while (true) {
      if (finish.val > start.val && _M0FP28clhhhhhh17moon_2dcsv_2dlite26contract__is__ascii__space(_M0MPC15array5Array2atGcE(chars, finish.val - 1 | 0))) {
        finish.val = finish.val - 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const _bind = start.val;
    const _bind$2 = finish.val;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        _M0IPB13StringBuilderPB6Logger11write__char(out, _M0MPC15array5Array2atGcE(chars, i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite19contract__normalize(value) {
    return _M0MPC16string6String9to__lower(_M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__trim__ascii(value));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite29contract__parse__column__type(value) {
    _L: {
      _L$2: {
        _L$3: {
          _L$4: {
            const _bind = _M0FP28clhhhhhh17moon_2dcsv_2dlite19contract__normalize(value);
            switch (_bind) {
              case "text": {
                break _L$4;
              }
              case "string": {
                break _L$4;
              }
              case "integer": {
                break _L$3;
              }
              case "int": {
                break _L$3;
              }
              case "float": {
                break _L$2;
              }
              case "double": {
                break _L$2;
              }
              case "number": {
                break _L$2;
              }
              case "boolean": {
                break _L;
              }
              case "bool": {
                break _L;
              }
              default: {
                return undefined;
              }
            }
          }
          return 0;
        }
        return 1;
      }
      return 2;
    }
    return 3;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite23contract__parse__double(value) {
    let _try_err;
    _L: {
      const _bind = _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__trim__ascii(value);
      const _bind$2 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(_bind, 0, _bind.length));
      let _bind$3;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _bind$3 = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err = _err._0;
        break _L;
      }
      const parsed = _bind$3;
      return new _M0DTPC16option6OptionGdE4Some(parsed);
    }
    return _M0DTPC16option6OptionGdE4None__;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite20contract__parse__int(value, fallback) {
    let _try_err;
    _L: {
      const _bind = _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__trim__ascii(value);
      const _bind$2 = _M0FPC28internal7strconv18parse__int_2einner(new _M0TPC16string10StringView(_bind, 0, _bind.length), 0);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        return _ok._0;
      } else {
        const _err = _bind$2;
        _try_err = _err._0;
        break _L;
      }
    }
    return fallback;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite22contract__push__unique(values, value) {
    const trimmed = _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__trim__ascii(value);
    if (_M0MPC16string6String9is__empty(trimmed) || trimmed === "*") {
      return undefined;
    }
    const _bind = values.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const item = values[_];
        if (item === trimmed) {
          return undefined;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(values, trimmed);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__split__pipe(value) {
    const result = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const field = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (ch === 124) {
        _M0FP28clhhhhhh17moon_2dcsv_2dlite22contract__push__unique(result, _M0MPB13StringBuilder10to__string(field));
        _M0MPB13StringBuilder5reset(field);
      } else {
        _M0IPB13StringBuilderPB6Logger11write__char(field, ch);
      }
      continue;
    }
    _M0FP28clhhhhhh17moon_2dcsv_2dlite22contract__push__unique(result, _M0MPB13StringBuilder10to__string(field));
    return result;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite23contract__push__columns(columns, column, value) {
    if (!_M0MPC16string6String9is__empty(column) && _M0IP016_24default__implPB2Eq10not__equalGsE(column, "*")) {
      _M0FP28clhhhhhh17moon_2dcsv_2dlite22contract__push__unique(columns, column);
    }
    const _bind = _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__split__pipe(value);
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const item = _bind[_];
        _M0FP28clhhhhhh17moon_2dcsv_2dlite22contract__push__unique(columns, item);
        _tmp = _ + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite16contract__truthy(value) {
    const _bind = _M0FP28clhhhhhh17moon_2dcsv_2dlite19contract__normalize(value);
    switch (_bind) {
      case "required": {
        return true;
      }
      case "true": {
        return true;
      }
      case "yes": {
        return true;
      }
      case "y": {
        return true;
      }
      case "1": {
        return true;
      }
      default: {
        return false;
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite18contract__cell__at(row, index) {
    return index >= 0 && index < row.length ? _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(row, index) : "";
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite23contract__column__index(headers, column) {
    const _bind = 0;
    const _bind$2 = headers.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (_M0FP28clhhhhhh17moon_2dcsv_2dlite19contract__normalize(_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(headers, i)) === _M0FP28clhhhhhh17moon_2dcsv_2dlite19contract__normalize(column)) {
          return i;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return undefined;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite23quality__contract__cell(table, row, column) {
    let index;
    _L: {
      const _bind = _M0FP28clhhhhhh17moon_2dcsv_2dlite23contract__column__index(table.headers, column);
      if (_bind === undefined) {
        return "";
      } else {
        const _Some = _bind;
        const _index = _Some;
        index = _index;
        break _L;
      }
    }
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite18contract__cell__at(row, index);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite28quality__contract__from__csv(input) {
    const table = _M0FP28clhhhhhh17moon_2dcsv_2dlite18parse__table__auto(input);
    const name = new _M0TPB8MutLocalGsE("csv-contract");
    const min_score = new _M0TPB8MutLocalGiE(0);
    const max_parse_issues = new _M0TPB8MutLocalGiE(0);
    const max_quality_issues = new _M0TPB8MutLocalGiE(999999);
    const min_rows = new _M0TPB8MutLocalGiE(-1);
    const max_rows = new _M0TPB8MutLocalGiE(-1);
    const required_columns = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const column_rules = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const min_number_rules = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const max_number_rules = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const allowed_values_rules = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const unique_key_rules = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const _bind = table.rows;
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const row = _bind[_];
        const rule = _M0FP28clhhhhhh17moon_2dcsv_2dlite19contract__normalize(_M0FP28clhhhhhh17moon_2dcsv_2dlite23quality__contract__cell(table, row, "rule"));
        const column = _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__trim__ascii(_M0FP28clhhhhhh17moon_2dcsv_2dlite23quality__contract__cell(table, row, "column"));
        const value = _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__trim__ascii(_M0FP28clhhhhhh17moon_2dcsv_2dlite23quality__contract__cell(table, row, "value"));
        const extra = _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__trim__ascii(_M0FP28clhhhhhh17moon_2dcsv_2dlite23quality__contract__cell(table, row, "extra"));
        _L: {
          _L$2: {
            _L$3: {
              _L$4: {
                _L$5: {
                  _L$6: {
                    _L$7: {
                      _L$8: {
                        _L$9: {
                          _L$10: {
                            _L$11: {
                              _L$12: {
                                _L$13: {
                                  _L$14: {
                                    _L$15: {
                                      _L$16: {
                                        _L$17: {
                                          _L$18: {
                                            _L$19: {
                                              _L$20: {
                                                _L$21: {
                                                  _L$22: {
                                                    switch (rule) {
                                                      case "name": {
                                                        break _L$22;
                                                      }
                                                      case "title": {
                                                        break _L$22;
                                                      }
                                                      case "min_score": {
                                                        break _L$20;
                                                      }
                                                      case "min-score": {
                                                        break _L$20;
                                                      }
                                                      case "max_parse_issues": {
                                                        break _L$18;
                                                      }
                                                      case "max-parse-issues": {
                                                        break _L$18;
                                                      }
                                                      case "max_quality_issues": {
                                                        break _L$16;
                                                      }
                                                      case "max-quality-issues": {
                                                        break _L$16;
                                                      }
                                                      case "min_rows": {
                                                        break _L$14;
                                                      }
                                                      case "min-rows": {
                                                        break _L$14;
                                                      }
                                                      case "max_rows": {
                                                        break _L$12;
                                                      }
                                                      case "max-rows": {
                                                        break _L$12;
                                                      }
                                                      case "required": {
                                                        break _L$10;
                                                      }
                                                      case "required_column": {
                                                        break _L$10;
                                                      }
                                                      case "required-column": {
                                                        break _L$10;
                                                      }
                                                      case "type": {
                                                        let kind;
                                                        _L$23: {
                                                          _L$24: {
                                                            const _bind$3 = _M0FP28clhhhhhh17moon_2dcsv_2dlite29contract__parse__column__type(value);
                                                            if (_bind$3 === undefined) {
                                                            } else {
                                                              const _Some = _bind$3;
                                                              const _kind = _Some;
                                                              kind = _kind;
                                                              break _L$24;
                                                            }
                                                            break _L$23;
                                                          }
                                                          if (!_M0MPC16string6String9is__empty(column) && _M0IP016_24default__implPB2Eq10not__equalGsE(column, "*")) {
                                                            _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(column_rules, new _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvColumnRule(column, kind, _M0FP28clhhhhhh17moon_2dcsv_2dlite16contract__truthy(extra)));
                                                          }
                                                        }
                                                        break;
                                                      }
                                                      case "min": {
                                                        break _L$8;
                                                      }
                                                      case "minimum": {
                                                        break _L$8;
                                                      }
                                                      case "max": {
                                                        break _L$6;
                                                      }
                                                      case "maximum": {
                                                        break _L$6;
                                                      }
                                                      case "allowed": {
                                                        break _L$4;
                                                      }
                                                      case "enum": {
                                                        break _L$4;
                                                      }
                                                      case "unique": {
                                                        break _L$2;
                                                      }
                                                      case "unique_key": {
                                                        break _L$2;
                                                      }
                                                      case "unique-key": {
                                                        break _L$2;
                                                      }
                                                    }
                                                    break _L$21;
                                                  }
                                                  if (!_M0MPC16string6String9is__empty(value)) {
                                                    name.val = value;
                                                  } else {
                                                    if (!_M0MPC16string6String9is__empty(column) && _M0IP016_24default__implPB2Eq10not__equalGsE(column, "*")) {
                                                      name.val = column;
                                                    }
                                                  }
                                                }
                                                break _L$19;
                                              }
                                              min_score.val = _M0FP28clhhhhhh17moon_2dcsv_2dlite20contract__parse__int(value, min_score.val);
                                            }
                                            break _L$17;
                                          }
                                          max_parse_issues.val = _M0FP28clhhhhhh17moon_2dcsv_2dlite20contract__parse__int(value, max_parse_issues.val);
                                        }
                                        break _L$15;
                                      }
                                      max_quality_issues.val = _M0FP28clhhhhhh17moon_2dcsv_2dlite20contract__parse__int(value, max_quality_issues.val);
                                    }
                                    break _L$13;
                                  }
                                  min_rows.val = _M0FP28clhhhhhh17moon_2dcsv_2dlite20contract__parse__int(value, min_rows.val);
                                }
                                break _L$11;
                              }
                              max_rows.val = _M0FP28clhhhhhh17moon_2dcsv_2dlite20contract__parse__int(value, max_rows.val);
                            }
                            break _L$9;
                          }
                          _M0FP28clhhhhhh17moon_2dcsv_2dlite23contract__push__columns(required_columns, column, value);
                        }
                        break _L$7;
                      }
                      let number;
                      _L$9: {
                        _L$10: {
                          const _bind$3 = _M0FP28clhhhhhh17moon_2dcsv_2dlite23contract__parse__double(value);
                          if (_bind$3.$tag === 1) {
                            const _Some = _bind$3;
                            const _number = _Some._0;
                            number = _number;
                            break _L$10;
                          }
                          break _L$9;
                        }
                        if (!_M0MPC16string6String9is__empty(column) && _M0IP016_24default__implPB2Eq10not__equalGsE(column, "*")) {
                          _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(min_number_rules, new _M0TP28clhhhhhh17moon_2dcsv_2dlite21CsvContractNumberRule(column, number));
                        }
                      }
                    }
                    break _L$5;
                  }
                  let number;
                  _L$7: {
                    _L$8: {
                      const _bind$3 = _M0FP28clhhhhhh17moon_2dcsv_2dlite23contract__parse__double(value);
                      if (_bind$3.$tag === 1) {
                        const _Some = _bind$3;
                        const _number = _Some._0;
                        number = _number;
                        break _L$8;
                      }
                      break _L$7;
                    }
                    if (!_M0MPC16string6String9is__empty(column) && _M0IP016_24default__implPB2Eq10not__equalGsE(column, "*")) {
                      _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(max_number_rules, new _M0TP28clhhhhhh17moon_2dcsv_2dlite21CsvContractNumberRule(column, number));
                    }
                  }
                }
                break _L$3;
              }
              if (!_M0MPC16string6String9is__empty(column) && _M0IP016_24default__implPB2Eq10not__equalGsE(column, "*")) {
                _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(allowed_values_rules, new _M0TP28clhhhhhh17moon_2dcsv_2dlite28CsvContractAllowedValuesRule(column, _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__split__pipe(value), _M0FP28clhhhhhh17moon_2dcsv_2dlite16contract__truthy(extra)));
              }
            }
            break _L;
          }
          const columns = !_M0MPC16string6String9is__empty(value) ? _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__split__pipe(value) : _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__split__pipe(column);
          if (columns.length > 0) {
            _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(unique_key_rules, new _M0TP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRule(columns));
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0TP28clhhhhhh17moon_2dcsv_2dlite18CsvQualityContract(name.val, min_score.val, max_parse_issues.val, max_quality_issues.val, min_rows.val, max_rows.val, required_columns, column_rules, min_number_rules, max_number_rules, allowed_values_rules, unique_key_rules);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite28contract__column__type__name(kind) {
    switch (kind) {
      case 0: {
        return "text";
      }
      case 1: {
        return "integer";
      }
      case 2: {
        return "float";
      }
      default: {
        return "boolean";
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite32contract__name__looks__like__key(name) {
    const normalized = _M0FP28clhhhhhh17moon_2dcsv_2dlite19contract__normalize(name);
    if (normalized === "id") {
      return true;
    } else {
      let _tmp;
      if (normalized === "key") {
        _tmp = true;
      } else {
        let _tmp$2;
        const _bind = "_id";
        if (_M0MPC16string6String8contains(normalized, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
          _tmp$2 = true;
        } else {
          let _tmp$3;
          const _bind$2 = "-id";
          if (_M0MPC16string6String8contains(normalized, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
            _tmp$3 = true;
          } else {
            let _tmp$4;
            const _bind$3 = "id_";
            if (_M0MPC16string6String8contains(normalized, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
              _tmp$4 = true;
            } else {
              const _bind$4 = "id-";
              _tmp$4 = _M0MPC16string6String8contains(normalized, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
            }
            _tmp$3 = _tmp$4;
          }
          _tmp$2 = _tmp$3;
        }
        _tmp = _tmp$2;
      }
      return _tmp;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27contract__write__csv__field(out, value) {
    const needs_quotes = new _M0TPB8MutLocalGbE(false);
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (ch === 44 || (ch === 34 || (ch === 10 || ch === 13))) {
        needs_quotes.val = true;
      }
      continue;
    }
    if (needs_quotes.val) {
      _M0IPB13StringBuilderPB6Logger11write__char(out, 34);
      const _it$2 = _M0MPC16string6String4iter(value);
      while (true) {
        let ch;
        _L: {
          const _bind = _M0MPB4Iter4nextGcE(_it$2);
          if (_bind === -1) {
            break;
          } else {
            const _Some = _bind;
            const _ch = _Some;
            ch = _ch;
            break _L;
          }
        }
        if (ch === 34) {
          _M0IPB13StringBuilderPB6Logger13write__string(out, "\"\"");
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(out, ch);
        }
        continue;
      }
      _M0IPB13StringBuilderPB6Logger11write__char(out, 34);
      return;
    } else {
      _M0IPB13StringBuilderPB6Logger13write__string(out, value);
      return;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite32quality__contract__infer__report(audit, name) {
    const score = _M0FP28clhhhhhh17moon_2dcsv_2dlite21audit__quality__score(audit);
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "rule,column,value,extra\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "name,*,");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27contract__write__csv__field(out, name);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\n");
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(14);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "min_score,*,");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, score.score);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(21);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "max_parse_issues,*,");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, audit.parse_issues.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(23);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "max_quality_issues,*,");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, audit.quality_issues.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
    const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(13);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "min_rows,*,");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, audit.table.rows.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, ",\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
    const _bind = audit.inferred_schema;
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const rule = _bind[_];
        _M0IPB13StringBuilderPB6Logger13write__string(out, "required,");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite27contract__write__csv__field(out, rule.name);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",,\n");
        _M0IPB13StringBuilderPB6Logger13write__string(out, "type,");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite27contract__write__csv__field(out, rule.name);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite28contract__column__type__name(rule.kind));
        _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        _M0IPB13StringBuilderPB6Logger13write__string(out, rule.required ? "required" : "optional");
        _M0IPB13StringBuilderPB6Logger11write__char(out, 10);
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$3 = audit.profiles;
    const _bind$4 = _bind$3.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$4) {
        const profile = _bind$3[_];
        if (profile.total > 0 && (profile.unique === profile.total && _M0FP28clhhhhhh17moon_2dcsv_2dlite32contract__name__looks__like__key(profile.name))) {
          _M0IPB13StringBuilderPB6Logger13write__string(out, "unique,");
          _M0FP28clhhhhhh17moon_2dcsv_2dlite27contract__write__csv__field(out, profile.name);
          _M0IPB13StringBuilderPB6Logger13write__string(out, ",,\n");
        }
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite29quality__contract__infer__csv(input) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite32quality__contract__infer__report(_M0FP28clhhhhhh17moon_2dcsv_2dlite10audit__csv(input), "inferred-contract");
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__push__issue(issues, severity, rule, row, column, message) {
    _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(issues, new _M0TP28clhhhhhh17moon_2dcsv_2dlite16CsvContractIssue(severity, rule, row, column, message));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite32contract__collect__audit__issues(issues, audit, score, contract) {
    if (score.score < contract.min_score) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(41);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "quality score ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, score.score);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " is below contract minimum ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, contract.min_score);
      _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__push__issue(issues, "error", "min_score", 0, "*", _M0MPB13StringBuilder10to__string(_string_builder));
    }
    if (audit.parse_issues.length > contract.max_parse_issues) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(44);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "parse issue count ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, audit.parse_issues.length);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " exceeds contract maximum ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, contract.max_parse_issues);
      _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__push__issue(issues, "error", "max_parse_issues", 0, "*", _M0MPB13StringBuilder10to__string(_string_builder));
    }
    if (audit.quality_issues.length > contract.max_quality_issues) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(46);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "quality issue count ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, audit.quality_issues.length);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " exceeds contract maximum ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, contract.max_quality_issues);
      _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__push__issue(issues, "error", "max_quality_issues", 0, "*", _M0MPB13StringBuilder10to__string(_string_builder));
    }
    if (contract.min_rows >= 0 && audit.table.rows.length < contract.min_rows) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(37);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "row count ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, audit.table.rows.length);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " is below contract minimum ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, contract.min_rows);
      _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__push__issue(issues, "error", "min_rows", 0, "*", _M0MPB13StringBuilder10to__string(_string_builder));
    }
    if (contract.max_rows >= 0 && audit.table.rows.length > contract.max_rows) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(36);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "row count ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, audit.table.rows.length);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " exceeds contract maximum ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, contract.max_rows);
      _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__push__issue(issues, "error", "max_rows", 0, "*", _M0MPB13StringBuilder10to__string(_string_builder));
      return;
    } else {
      return;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite34contract__push__validation__errors(issues, rule, errors) {
    const _bind = errors.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const error = errors[_];
        _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__push__issue(issues, "error", rule, error.row, error.column, error.message);
        _tmp = _ + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite33contract__collect__schema__issues(issues, table, contract) {
    _M0FP28clhhhhhh17moon_2dcsv_2dlite34contract__push__validation__errors(issues, "required", _M0FP28clhhhhhh17moon_2dcsv_2dlite27validate__required__columns(table, contract.required_columns));
    _M0FP28clhhhhhh17moon_2dcsv_2dlite34contract__push__validation__errors(issues, "type", _M0FP28clhhhhhh17moon_2dcsv_2dlite15validate__table(table, contract.column_rules));
    const _bind = contract.min_number_rules;
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const rule = _bind[_];
        _M0FP28clhhhhhh17moon_2dcsv_2dlite34contract__push__validation__errors(issues, "min", _M0FP28clhhhhhh17moon_2dcsv_2dlite21validate__min__number(table, rule.column, rule.value));
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$3 = contract.max_number_rules;
    const _bind$4 = _bind$3.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$4) {
        const rule = _bind$3[_];
        _M0FP28clhhhhhh17moon_2dcsv_2dlite34contract__push__validation__errors(issues, "max", _M0FP28clhhhhhh17moon_2dcsv_2dlite21validate__max__number(table, rule.column, rule.value));
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$5 = contract.allowed_values_rules;
    const _bind$6 = _bind$5.length;
    let _tmp$3 = 0;
    while (true) {
      const _ = _tmp$3;
      if (_ < _bind$6) {
        const rule = _bind$5[_];
        _M0FP28clhhhhhh17moon_2dcsv_2dlite34contract__push__validation__errors(issues, "allowed", _M0FP28clhhhhhh17moon_2dcsv_2dlite25validate__allowed__values(table, rule.column, rule.allowed, rule.required));
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite14contract__join(values, separator) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const _bind = 0;
    const _bind$2 = values.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger13write__string(out, separator);
        }
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(values, i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite33contract__collect__unique__issues(issues, table, contract) {
    const _bind = contract.unique_key_rules;
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const rule = _bind[_];
        const _bind$3 = _M0FP28clhhhhhh17moon_2dcsv_2dlite21validate__unique__key(table, rule.columns);
        const _bind$4 = _bind$3.length;
        let _tmp$2 = 0;
        while (true) {
          const _$2 = _tmp$2;
          if (_$2 < _bind$4) {
            const duplicate = _bind$3[_$2];
            const _tmp$3 = duplicate.duplicate_row;
            const _tmp$4 = _M0FP28clhhhhhh17moon_2dcsv_2dlite14contract__join(rule.columns, "+");
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(22);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "row ");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, duplicate.duplicate_row);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " duplicates row ");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, duplicate.first_row);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": ");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, duplicate.key);
            _M0FP28clhhhhhh17moon_2dcsv_2dlite21contract__push__issue(issues, "error", "unique", _tmp$3, _tmp$4, _M0MPB13StringBuilder10to__string(_string_builder));
            _tmp$2 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite16contract__passed(issues) {
    const _bind = issues.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const issue = issues[_];
        if (issue.severity === "error") {
          return false;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite32audit__quality__contract__report(audit, contract) {
    const score = _M0FP28clhhhhhh17moon_2dcsv_2dlite21audit__quality__score(audit);
    const issues = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite32contract__collect__audit__issues(issues, audit, score, contract);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite33contract__collect__schema__issues(issues, audit.table, contract);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite33contract__collect__unique__issues(issues, audit.table, contract);
    return new _M0TP28clhhhhhh17moon_2dcsv_2dlite17CsvContractReport(_M0FP28clhhhhhh17moon_2dcsv_2dlite16contract__passed(issues), contract, audit, score, issues);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite24audit__quality__contract(input, contract) {
    const audit = _M0FP28clhhhhhh17moon_2dcsv_2dlite10audit__csv(input);
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite32audit__quality__contract__report(audit, contract);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite31contract__write__markdown__cell(out, value) {
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          return;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (ch === 124) {
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\\|");
      } else {
        if (ch === 10 || ch === 13) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 32);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(out, ch);
        }
      }
      continue;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite42audit__quality__contract__report__markdown(report) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "# CSV Quality Contract Report\n\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "## Summary\n\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "- Contract: ");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite31contract__write__markdown__cell(out, report.contract.name);
    _M0IPB13StringBuilderPB6Logger11write__char(out, 10);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "- Status: ");
    _M0IPB13StringBuilderPB6Logger13write__string(out, report.passed ? "pass" : "fail");
    _M0IPB13StringBuilderPB6Logger11write__char(out, 10);
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(21);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "- Quality score: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, report.score.score);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " (");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, report.score.grade);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ")\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(21);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "- Rows: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, report.audit.table.rows.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\n- Columns: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, report.audit.table.headers.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "- Contract issues: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, report.issues.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\n## Contract Policy\n\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "| policy | value |\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "| --- | ---: |\n");
    const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(17);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "| min_score | ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, report.contract.min_score);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, " |\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
    const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(24);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "| max_parse_issues | ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, report.contract.max_parse_issues);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, " |\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$5));
    const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(26);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "| max_quality_issues | ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$6, report.contract.max_quality_issues);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, " |\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$6));
    if (report.contract.min_rows >= 0) {
      const _string_builder$7 = _M0MPB13StringBuilder21StringBuilder_2einner(16);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, "| min_rows | ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$7, report.contract.min_rows);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, " |\n");
      _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$7));
    }
    if (report.contract.max_rows >= 0) {
      const _string_builder$7 = _M0MPB13StringBuilder21StringBuilder_2einner(16);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, "| max_rows | ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$7, report.contract.max_rows);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, " |\n");
      _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$7));
    }
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\n## Contract Issues\n\n");
    if (report.issues.length === 0) {
      _M0IPB13StringBuilderPB6Logger13write__string(out, "No contract violations.\n");
    } else {
      _M0IPB13StringBuilderPB6Logger13write__string(out, "| severity | rule | row | column | message |\n");
      _M0IPB13StringBuilderPB6Logger13write__string(out, "| --- | --- | ---: | --- | --- |\n");
      const _bind = report.issues;
      const _bind$2 = _bind.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$2) {
          const issue = _bind[_];
          _M0IPB13StringBuilderPB6Logger13write__string(out, "| ");
          _M0FP28clhhhhhh17moon_2dcsv_2dlite31contract__write__markdown__cell(out, issue.severity);
          _M0IPB13StringBuilderPB6Logger13write__string(out, " | ");
          _M0FP28clhhhhhh17moon_2dcsv_2dlite31contract__write__markdown__cell(out, issue.rule);
          const _string_builder$7 = _M0MPB13StringBuilder21StringBuilder_2einner(6);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, " | ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder$7, issue.row);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, " | ");
          _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$7));
          _M0FP28clhhhhhh17moon_2dcsv_2dlite31contract__write__markdown__cell(out, issue.column);
          _M0IPB13StringBuilderPB6Logger13write__string(out, " | ");
          _M0FP28clhhhhhh17moon_2dcsv_2dlite31contract__write__markdown__cell(out, issue.message);
          _M0IPB13StringBuilderPB6Logger13write__string(out, " |\n");
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite34audit__quality__contract__markdown(input, contract_csv) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite42audit__quality__contract__report__markdown(_M0FP28clhhhhhh17moon_2dcsv_2dlite24audit__quality__contract(input, _M0FP28clhhhhhh17moon_2dcsv_2dlite28quality__contract__from__csv(contract_csv)));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27contract__write__json__bool(out, value) {
    _M0IPB13StringBuilderPB6Logger13write__string(out, value ? "true" : "false");
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite29contract__write__json__string(out, value) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 34);
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (ch === 34) {
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\\\"");
      } else {
        if (ch === 92) {
          _M0IPB13StringBuilderPB6Logger13write__string(out, "\\\\");
        } else {
          if (ch === 10) {
            _M0IPB13StringBuilderPB6Logger13write__string(out, "\\n");
          } else {
            if (ch === 13) {
              _M0IPB13StringBuilderPB6Logger13write__string(out, "\\r");
            } else {
              if (ch === 9) {
                _M0IPB13StringBuilderPB6Logger13write__string(out, "\\t");
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(out, ch);
              }
            }
          }
        }
      }
      continue;
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 34);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite36contract__write__column__rules__json(out, rules) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = rules.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        const rule = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(rules, i);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\"column\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite29contract__write__json__string(out, rule.name);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"type\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite29contract__write__json__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite28contract__column__type__name(rule.kind));
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"required\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite27contract__write__json__bool(out, rule.required);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite36contract__write__string__array__json(out, values) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = values.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        _M0FP28clhhhhhh17moon_2dcsv_2dlite29contract__write__json__string(out, _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(values, i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite36contract__write__unique__rules__json(out, rules) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = rules.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        _M0IPB13StringBuilderPB6Logger13write__string(out, "{\"columns\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite36contract__write__string__array__json(out, _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(rules, i).columns);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite31contract__write__contract__json(out, contract) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\"name\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite29contract__write__json__string(out, contract.name);
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(13);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"min_score\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, contract.min_score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"max_parse_issues\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, contract.max_parse_issues);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(22);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",\"max_quality_issues\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, contract.max_quality_issues);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
    const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(12);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, ",\"min_rows\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, contract.min_rows);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
    const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(12);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, ",\"max_rows\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, contract.max_rows);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$5));
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"required_columns\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite36contract__write__string__array__json(out, contract.required_columns);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"column_rules\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite36contract__write__column__rules__json(out, contract.column_rules);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"unique_key_rules\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite36contract__write__unique__rules__json(out, contract.unique_key_rules);
    _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite29contract__write__issues__json(out, issues) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = issues.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        const issue = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(issues, i);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\"severity\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite29contract__write__json__string(out, issue.severity);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"rule\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite29contract__write__json__string(out, issue.rule);
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"row\":");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, issue.row);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"column\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite29contract__write__json__string(out, issue.column);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"message\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite29contract__write__json__string(out, issue.message);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite38audit__quality__contract__report__json(report) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\"passed\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27contract__write__json__bool(out, report.passed);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"contract\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite31contract__write__contract__json(out, report.contract);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"summary\":{");
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(8);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"score\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, report.score.score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"grade\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite29contract__write__json__string(out, report.score.grade);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"risk\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite29contract__write__json__string(out, report.score.risk);
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(8);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"rows\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, report.audit.table.rows.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(11);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",\"columns\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, report.audit.table.headers.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
    const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(16);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, ",\"parse_issues\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, report.audit.parse_issues.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
    const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(18);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, ",\"quality_issues\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, report.audit.quality_issues.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$5));
    const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(19);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, ",\"contract_issues\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$6, report.issues.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$6));
    _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"issues\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite29contract__write__issues__json(out, report.issues);
    _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite30audit__quality__contract__json(input, contract_csv) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite38audit__quality__contract__report__json(_M0FP28clhhhhhh17moon_2dcsv_2dlite24audit__quality__contract(input, _M0FP28clhhhhhh17moon_2dcsv_2dlite28quality__contract__from__csv(contract_csv)));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite20inferred__type__name(kind) {
    switch (kind) {
      case 0: {
        return "empty";
      }
      case 1: {
        return "integer";
      }
      case 2: {
        return "float";
      }
      case 3: {
        return "boolean";
      }
      default: {
        return "text";
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite22html__export__cell__at(row, index) {
    return index >= 0 && index < row.length ? _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(row, index) : "";
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite28html__export__write__escaped(out, value) {
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          return;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (ch === 38) {
        _M0IPB13StringBuilderPB6Logger13write__string(out, "&amp;");
      } else {
        if (ch === 60) {
          _M0IPB13StringBuilderPB6Logger13write__string(out, "&lt;");
        } else {
          if (ch === 62) {
            _M0IPB13StringBuilderPB6Logger13write__string(out, "&gt;");
          } else {
            if (ch === 34) {
              _M0IPB13StringBuilderPB6Logger13write__string(out, "&quot;");
            } else {
              if (ch === 39) {
                _M0IPB13StringBuilderPB6Logger13write__string(out, "&#39;");
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(out, ch);
              }
            }
          }
        }
      }
      continue;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite15table__to__html(table) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "<table>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <thead>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "    <tr>");
    const _bind = table.headers;
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const header = _bind[_];
        _M0IPB13StringBuilderPB6Logger13write__string(out, "<th>");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite28html__export__write__escaped(out, header);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "</th>");
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</tr>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  </thead>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <tbody>\n");
    const _bind$3 = table.rows;
    const _bind$4 = _bind$3.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$4) {
        const row = _bind$3[_];
        _M0IPB13StringBuilderPB6Logger13write__string(out, "    <tr>");
        const _bind$5 = 0;
        const _bind$6 = table.headers.length;
        let _tmp$3 = _bind$5;
        while (true) {
          const i = _tmp$3;
          if (i < _bind$6) {
            _M0IPB13StringBuilderPB6Logger13write__string(out, "<td>");
            _M0FP28clhhhhhh17moon_2dcsv_2dlite28html__export__write__escaped(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite22html__export__cell__at(row, i));
            _M0IPB13StringBuilderPB6Logger13write__string(out, "</td>");
            _tmp$3 = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _M0IPB13StringBuilderPB6Logger13write__string(out, "</tr>\n");
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  </tbody>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</table>");
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite28drift__write__markdown__cell(out, value) {
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          return;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (ch === 124) {
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\\|");
      } else {
        if (ch === 10 || ch === 13) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 32);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(out, ch);
        }
      }
      continue;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite30audit__drift__report__markdown(report) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "# CSV Drift Report\n\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "## Summary\n\n");
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(22);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "- Baseline score: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, report.baseline_score.score);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " (");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, report.baseline_score.grade);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ")\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(23);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "- Candidate score: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, report.candidate_score.score);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " (");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, report.candidate_score.grade);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ")\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(16);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "- Score delta: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, _M0FP28clhhhhhh17moon_2dcsv_2dlite18drift__signed__int(report.score_delta));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
    const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(14);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "- Row delta: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, _M0FP28clhhhhhh17moon_2dcsv_2dlite18drift__signed__int(report.row_delta));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
    const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(17);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "- Column delta: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$5, _M0FP28clhhhhhh17moon_2dcsv_2dlite18drift__signed__int(report.column_delta));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$5));
    const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(17);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "- Drift issues: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$6, report.issues.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$6));
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\n## Drift Issues\n\n");
    if (report.issues.length === 0) {
      _M0IPB13StringBuilderPB6Logger13write__string(out, "No schema or quality drift detected.\n");
    } else {
      _M0IPB13StringBuilderPB6Logger13write__string(out, "| severity | category | column | message |\n");
      _M0IPB13StringBuilderPB6Logger13write__string(out, "| --- | --- | --- | --- |\n");
      const _bind = report.issues;
      const _bind$2 = _bind.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$2) {
          const issue = _bind[_];
          _M0IPB13StringBuilderPB6Logger13write__string(out, "| ");
          _M0FP28clhhhhhh17moon_2dcsv_2dlite28drift__write__markdown__cell(out, issue.severity);
          _M0IPB13StringBuilderPB6Logger13write__string(out, " | ");
          _M0FP28clhhhhhh17moon_2dcsv_2dlite28drift__write__markdown__cell(out, issue.category);
          _M0IPB13StringBuilderPB6Logger13write__string(out, " | ");
          _M0FP28clhhhhhh17moon_2dcsv_2dlite28drift__write__markdown__cell(out, issue.column);
          _M0IPB13StringBuilderPB6Logger13write__string(out, " | ");
          _M0FP28clhhhhhh17moon_2dcsv_2dlite28drift__write__markdown__cell(out, issue.message);
          _M0IPB13StringBuilderPB6Logger13write__string(out, " |\n");
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite22audit__drift__markdown(baseline_input, candidate_input) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite30audit__drift__report__markdown(_M0FP28clhhhhhh17moon_2dcsv_2dlite12audit__drift(baseline_input, candidate_input));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26drift__write__json__string(out, value) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 34);
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (ch === 34) {
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\\\"");
      } else {
        if (ch === 92) {
          _M0IPB13StringBuilderPB6Logger13write__string(out, "\\\\");
        } else {
          if (ch === 10) {
            _M0IPB13StringBuilderPB6Logger13write__string(out, "\\n");
          } else {
            if (ch === 13) {
              _M0IPB13StringBuilderPB6Logger13write__string(out, "\\r");
            } else {
              if (ch === 9) {
                _M0IPB13StringBuilderPB6Logger13write__string(out, "\\t");
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(out, ch);
              }
            }
          }
        }
      }
      continue;
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 34);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26drift__write__issues__json(out, issues) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = issues.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        const issue = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(issues, i);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\"severity\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26drift__write__json__string(out, issue.severity);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"category\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26drift__write__json__string(out, issue.category);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"column\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26drift__write__json__string(out, issue.column);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"message\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26drift__write__json__string(out, issue.message);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__drift__report__json(report) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\"summary\":{");
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(17);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"baseline_score\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, report.baseline_score.score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(19);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"candidate_score\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, report.candidate_score.score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(15);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",\"score_delta\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, report.score_delta);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
    const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(17);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, ",\"baseline_rows\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, report.baseline.table.rows.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
    const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(18);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, ",\"candidate_rows\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, report.candidate.table.rows.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$5));
    const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(13);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, ",\"row_delta\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$6, report.row_delta);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$6));
    const _string_builder$7 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, ",\"baseline_columns\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$7, report.baseline.table.headers.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$7));
    const _string_builder$8 = _M0MPB13StringBuilder21StringBuilder_2einner(21);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$8, ",\"candidate_columns\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$8, report.candidate.table.headers.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$8));
    const _string_builder$9 = _M0MPB13StringBuilder21StringBuilder_2einner(16);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$9, ",\"column_delta\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$9, report.column_delta);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$9));
    const _string_builder$10 = _M0MPB13StringBuilder21StringBuilder_2einner(15);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$10, ",\"issue_count\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$10, report.issues.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$10));
    _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"issues\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26drift__write__issues__json(out, report.issues);
    _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite18audit__drift__json(baseline_input, candidate_input) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__drift__report__json(_M0FP28clhhhhhh17moon_2dcsv_2dlite12audit__drift(baseline_input, candidate_input));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite13dialect__name(dialect) {
    return dialect.delimiter === 44 ? "comma" : dialect.delimiter === 9 ? "tab" : dialect.delimiter === 59 ? "semicolon" : dialect.delimiter === 124 ? "pipe" : "custom";
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite22audit__recommendations(report) {
    const recommendations = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    if (report.parse_issues.length > 0) {
      _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(recommendations, new _M0TP28clhhhhhh17moon_2dcsv_2dlite22CsvAuditRecommendation("error", "Fix structural parse issues before trusting schema or profile output."));
    }
    const _bind = report.quality_issues;
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const issue = _bind[_];
        _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(recommendations, new _M0TP28clhhhhhh17moon_2dcsv_2dlite22CsvAuditRecommendation(issue.severity, issue.message));
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (_M0IP016_24default__implPB2Eq10not__equalGsE(_M0FP28clhhhhhh17moon_2dcsv_2dlite13dialect__name(report.dialect), "comma")) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(89);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Detected ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP28clhhhhhh17moon_2dcsv_2dlite13dialect__name(report.dialect));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " dialect; use parse_table_auto or the detected dialect when parsing this source.");
      _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(recommendations, new _M0TP28clhhhhhh17moon_2dcsv_2dlite22CsvAuditRecommendation("info", _M0MPB13StringBuilder10to__string(_string_builder)));
    }
    const _bind$3 = report.inferred_schema;
    const _bind$4 = _bind$3.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$4) {
        const rule = _bind$3[_];
        if (rule.empty > 0) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(92);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Column `");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, rule.name);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "` has ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, rule.empty);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " missing value(s); keep it optional or fill defaults before strict validation.");
          _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(recommendations, new _M0TP28clhhhhhh17moon_2dcsv_2dlite22CsvAuditRecommendation("warning", _M0MPB13StringBuilder10to__string(_string_builder)));
        }
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$5 = report.profiles;
    const _bind$6 = _bind$5.length;
    let _tmp$3 = 0;
    while (true) {
      const _ = _tmp$3;
      if (_ < _bind$6) {
        const profile = _bind$5[_];
        _L: {
          _L$2: {
            const _bind$7 = profile.inferred;
            switch (_bind$7) {
              case 1: {
                break _L$2;
              }
              case 2: {
                break _L$2;
              }
            }
            break _L;
          }
          if (profile.non_empty > 0) {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(76);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Column `");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, profile.name);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "` looks numeric and can be used for aggregation or range validation.");
            _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(recommendations, new _M0TP28clhhhhhh17moon_2dcsv_2dlite22CsvAuditRecommendation("info", _M0MPB13StringBuilder10to__string(_string_builder)));
          }
        }
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (recommendations.length === 0) {
      _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(recommendations, new _M0TP28clhhhhhh17moon_2dcsv_2dlite22CsvAuditRecommendation("info", "No immediate data-quality issues were found in this sample."));
    }
    return recommendations;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26passport__boolean__columns(schema) {
    const count = new _M0TPB8MutLocalGiE(0);
    const _bind = schema.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const rule = schema[_];
        const _bind$2 = rule.kind;
        if (_bind$2 === 3) {
          count.val = count.val + 1 | 0;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return count.val;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite18passport__cell__at(row, index) {
    return index >= 0 && index < row.length ? _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(row, index) : "";
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite14passport__roll(seed, value) {
    if (1000003 === 0) {
      $panic();
    }
    return (((Math.imul(seed, 131) | 0) + value | 0) + 17 | 0) % 1000003 | 0;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite24passport__string__length(value) {
    const count = new _M0TPB8MutLocalGiE(0);
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      const _bind = _M0MPB4Iter4nextGcE(_it);
      if (_bind === -1) {
        break;
      } else {
        count.val = count.val + 1 | 0;
        continue;
      }
    }
    return count.val;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite29passport__roll__string__shape(seed, value, salt) {
    const next = new _M0TPB8MutLocalGiE(_M0FP28clhhhhhh17moon_2dcsv_2dlite14passport__roll(seed, _M0FP28clhhhhhh17moon_2dcsv_2dlite24passport__string__length(value) + salt | 0));
    if (_M0MPC16string6String9is__empty(value)) {
      next.val = _M0FP28clhhhhhh17moon_2dcsv_2dlite14passport__roll(next.val, 1);
    } else {
      next.val = _M0FP28clhhhhhh17moon_2dcsv_2dlite14passport__roll(next.val, 7);
    }
    return next.val;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite21passport__fingerprint(table) {
    const checksum = new _M0TPB8MutLocalGiE(17);
    checksum.val = _M0FP28clhhhhhh17moon_2dcsv_2dlite14passport__roll(checksum.val, table.headers.length);
    checksum.val = _M0FP28clhhhhhh17moon_2dcsv_2dlite14passport__roll(checksum.val, table.rows.length);
    const _bind = 0;
    const _bind$2 = table.headers.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        checksum.val = _M0FP28clhhhhhh17moon_2dcsv_2dlite29passport__roll__string__shape(checksum.val, _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(table.headers, i), i + 1 | 0);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$3 = 0;
    const _bind$4 = table.rows.length;
    let _tmp$2 = _bind$3;
    while (true) {
      const row_index = _tmp$2;
      if (row_index < _bind$4) {
        const row = _M0MPC15array5Array2atGRPB5ArrayGsEE(table.rows, row_index);
        checksum.val = _M0FP28clhhhhhh17moon_2dcsv_2dlite14passport__roll(checksum.val, (row.length + row_index | 0) + 1 | 0);
        const _bind$5 = 0;
        const _bind$6 = table.headers.length;
        let _tmp$3 = _bind$5;
        while (true) {
          const column_index = _tmp$3;
          if (column_index < _bind$6) {
            checksum.val = _M0FP28clhhhhhh17moon_2dcsv_2dlite29passport__roll__string__shape(checksum.val, _M0FP28clhhhhhh17moon_2dcsv_2dlite18passport__cell__at(row, column_index), Math.imul(row_index + 1 | 0, column_index + 1 | 0) | 0);
            _tmp$3 = column_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$2 = row_index + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "csvp-");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, table.rows.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "x");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, table.headers.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "-");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, checksum.val);
    return _M0MPB13StringBuilder10to__string(_string_builder);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26passport__numeric__columns(schema) {
    const count = new _M0TPB8MutLocalGiE(0);
    const _bind = schema.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const rule = schema[_];
        _L: {
          _L$2: {
            const _bind$2 = rule.kind;
            switch (_bind$2) {
              case 1: {
                break _L$2;
              }
              case 2: {
                break _L$2;
              }
            }
            break _L;
          }
          count.val = count.val + 1 | 0;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return count.val;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27passport__required__columns(schema) {
    const count = new _M0TPB8MutLocalGiE(0);
    const _bind = schema.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const rule = schema[_];
        if (rule.required) {
          count.val = count.val + 1 | 0;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return count.val;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27passport__optional__columns(schema) {
    return schema.length - _M0FP28clhhhhhh17moon_2dcsv_2dlite27passport__required__columns(schema) | 0;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite23passport__text__columns(schema) {
    const count = new _M0TPB8MutLocalGiE(0);
    const _bind = schema.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const rule = schema[_];
        const _bind$2 = rule.kind;
        if (_bind$2 === 0) {
          count.val = count.val + 1 | 0;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return count.val;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite25passport__unique__columns(schema) {
    const count = new _M0TPB8MutLocalGiE(0);
    const _bind = schema.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const rule = schema[_];
        if (rule.total > 0 && rule.unique === rule.total) {
          count.val = count.val + 1 | 0;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return count.val;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite32csv__data__passport__from__audit(audit, name) {
    const score = _M0FP28clhhhhhh17moon_2dcsv_2dlite21audit__quality__score(audit);
    const schema = audit.inferred_schema;
    return new _M0TP28clhhhhhh17moon_2dcsv_2dlite15CsvDataPassport(name, _M0FP28clhhhhhh17moon_2dcsv_2dlite21passport__fingerprint(audit.table), _M0FP28clhhhhhh17moon_2dcsv_2dlite13dialect__name(audit.dialect), audit.table.rows.length, audit.table.headers.length, Math.imul(audit.table.rows.length, audit.table.headers.length) | 0, score.missing_cells, audit.parse_issues.length, audit.quality_issues.length, _M0FP28clhhhhhh17moon_2dcsv_2dlite27passport__required__columns(schema), _M0FP28clhhhhhh17moon_2dcsv_2dlite27passport__optional__columns(schema), _M0FP28clhhhhhh17moon_2dcsv_2dlite26passport__numeric__columns(schema), _M0FP28clhhhhhh17moon_2dcsv_2dlite26passport__boolean__columns(schema), _M0FP28clhhhhhh17moon_2dcsv_2dlite23passport__text__columns(schema), _M0FP28clhhhhhh17moon_2dcsv_2dlite25passport__unique__columns(schema), score, schema, _M0FP28clhhhhhh17moon_2dcsv_2dlite22audit__recommendations(audit));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite19csv__data__passport(input, name) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite32csv__data__passport__from__audit(_M0FP28clhhhhhh17moon_2dcsv_2dlite10audit__csv(input), name);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite31passport__write__markdown__cell(out, value) {
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          return;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (ch === 124) {
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\\|");
      } else {
        if (ch === 10 || ch === 13) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 32);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(out, ch);
        }
      }
      continue;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite28passport__column__type__name(kind) {
    switch (kind) {
      case 0: {
        return "text";
      }
      case 1: {
        return "integer";
      }
      case 2: {
        return "float";
      }
      default: {
        return "boolean";
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite14passport__join(values, separator) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const _bind = 0;
    const _bind$2 = values.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger13write__string(out, separator);
        }
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(values, i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite33passport__write__schema__markdown(out, schema) {
    _M0IPB13StringBuilderPB6Logger13write__string(out, "| column | type | required | empty | unique | examples |\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "| --- | --- | --- | ---: | ---: | --- |\n");
    const _bind = schema.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const rule = schema[_];
        _M0IPB13StringBuilderPB6Logger13write__string(out, "| ");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite31passport__write__markdown__cell(out, rule.name);
        _M0IPB13StringBuilderPB6Logger13write__string(out, " | ");
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite28passport__column__type__name(rule.kind));
        _M0IPB13StringBuilderPB6Logger13write__string(out, " | ");
        _M0IPB13StringBuilderPB6Logger13write__string(out, rule.required ? "yes" : "no");
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(10);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " | ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, rule.empty);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "/");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, rule.total);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " | ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, rule.unique);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " | ");
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
        _M0FP28clhhhhhh17moon_2dcsv_2dlite31passport__write__markdown__cell(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite14passport__join(rule.examples, ", "));
        _M0IPB13StringBuilderPB6Logger13write__string(out, " |\n");
        _tmp = _ + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite37csv__data__passport__report__markdown(passport) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "# CSV Data Passport\n\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "## Identity\n\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "- Name: ");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite31passport__write__markdown__cell(out, passport.name);
    _M0IPB13StringBuilderPB6Logger11write__char(out, 10);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "- Fingerprint: `");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite31passport__write__markdown__cell(out, passport.fingerprint);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "`\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "- Dialect: ");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite31passport__write__markdown__cell(out, passport.dialect);
    _M0IPB13StringBuilderPB6Logger11write__char(out, 10);
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(9);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "- Rows: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, passport.rows);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(12);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "- Columns: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, passport.columns);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(10);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "- Cells: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, passport.cells);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\n## Quality\n\n");
    const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(17);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "- Score: **");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, passport.score.score);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "** (");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, passport.score.grade);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, ")\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
    const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(9);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "- Risk: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$5, passport.score.risk);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$5));
    const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(19);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "- Missing cells: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$6, passport.missing_cells);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "/");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$6, passport.cells);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$6));
    const _string_builder$7 = _M0MPB13StringBuilder21StringBuilder_2einner(17);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, "- Parse issues: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$7, passport.parse_issues);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$7));
    const _string_builder$8 = _M0MPB13StringBuilder21StringBuilder_2einner(25);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$8, "- Table quality issues: ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$8, passport.quality_issues);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$8, "\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$8));
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\n## Schema Summary\n\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "| metric | value |\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "| --- | ---: |\n");
    const _string_builder$9 = _M0MPB13StringBuilder21StringBuilder_2einner(24);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$9, "| required columns | ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$9, passport.required_columns);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$9, " |\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$9));
    const _string_builder$10 = _M0MPB13StringBuilder21StringBuilder_2einner(24);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$10, "| optional columns | ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$10, passport.optional_columns);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$10, " |\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$10));
    const _string_builder$11 = _M0MPB13StringBuilder21StringBuilder_2einner(23);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$11, "| numeric columns | ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$11, passport.numeric_columns);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$11, " |\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$11));
    const _string_builder$12 = _M0MPB13StringBuilder21StringBuilder_2einner(23);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$12, "| boolean columns | ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$12, passport.boolean_columns);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$12, " |\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$12));
    const _string_builder$13 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$13, "| text columns | ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$13, passport.text_columns);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$13, " |\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$13));
    const _string_builder$14 = _M0MPB13StringBuilder21StringBuilder_2einner(28);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$14, "| fully unique columns | ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$14, passport.unique_columns);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$14, " |\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$14));
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\n## Columns\n\n");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite33passport__write__schema__markdown(out, passport.schema);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\n## Recommendations\n\n");
    const _bind = passport.recommendations;
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const item = _bind[_];
        _M0IPB13StringBuilderPB6Logger13write__string(out, "- **");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite31passport__write__markdown__cell(out, item.severity);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "**: ");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite31passport__write__markdown__cell(out, item.message);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 10);
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite29csv__data__passport__markdown(input, name) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite37csv__data__passport__report__markdown(_M0FP28clhhhhhh17moon_2dcsv_2dlite19csv__data__passport(input, name));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite29passport__write__json__string(out, value) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 34);
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (ch === 34) {
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\\\"");
      } else {
        if (ch === 92) {
          _M0IPB13StringBuilderPB6Logger13write__string(out, "\\\\");
        } else {
          if (ch === 10) {
            _M0IPB13StringBuilderPB6Logger13write__string(out, "\\n");
          } else {
            if (ch === 13) {
              _M0IPB13StringBuilderPB6Logger13write__string(out, "\\r");
            } else {
              if (ch === 9) {
                _M0IPB13StringBuilderPB6Logger13write__string(out, "\\t");
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(out, ch);
              }
            }
          }
        }
      }
      continue;
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 34);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite38passport__write__recommendations__json(out, recommendations) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = recommendations.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        const item = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(recommendations, i);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\"severity\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite29passport__write__json__string(out, item.severity);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"message\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite29passport__write__json__string(out, item.message);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27passport__write__json__bool(out, value) {
    _M0IPB13StringBuilderPB6Logger13write__string(out, value ? "true" : "false");
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite36passport__write__string__array__json(out, values) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = values.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        _M0FP28clhhhhhh17moon_2dcsv_2dlite29passport__write__json__string(out, _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(values, i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite29passport__write__schema__json(out, schema) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = schema.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        const rule = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(schema, i);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\"column\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite29passport__write__json__string(out, rule.name);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"type\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite29passport__write__json__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite28passport__column__type__name(rule.kind));
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"required\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite27passport__write__json__bool(out, rule.required);
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(9);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"total\":");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, rule.total);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(9);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"empty\":");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, rule.empty);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
        const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(10);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",\"unique\":");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, rule.unique);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"examples\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite36passport__write__string__array__json(out, rule.examples);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite28passport__write__score__json(out, score) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(8);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"score\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, score.score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"grade\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite29passport__write__json__string(out, score.grade);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"risk\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite29passport__write__json__string(out, score.risk);
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(19);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"structure_score\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, score.structure_score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(22);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",\"completeness_score\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, score.completeness_score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
    const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(21);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, ",\"consistency_score\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, score.consistency_score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
    const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, ",\"uniqueness_score\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, score.uniqueness_score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$5));
    const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(17);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, ",\"issue_penalty\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$6, score.issue_penalty);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$6));
    const _string_builder$7 = _M0MPB13StringBuilder21StringBuilder_2einner(17);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, ",\"missing_cells\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$7, score.missing_cells);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$7));
    const _string_builder$8 = _M0MPB13StringBuilder21StringBuilder_2einner(15);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$8, ",\"total_cells\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$8, score.total_cells);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$8));
    _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite33csv__data__passport__report__json(passport) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\"name\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite29passport__write__json__string(out, passport.name);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"fingerprint\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite29passport__write__json__string(out, passport.fingerprint);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"dialect\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite29passport__write__json__string(out, passport.dialect);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"summary\":{");
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"rows\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, passport.rows);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(11);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"columns\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, passport.columns);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(9);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",\"cells\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, passport.cells);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
    const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(17);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, ",\"missing_cells\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, passport.missing_cells);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
    const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(16);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, ",\"parse_issues\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, passport.parse_issues);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$5));
    const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(18);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, ",\"quality_issues\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$6, passport.quality_issues);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$6));
    _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"score\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite28passport__write__score__json(out, passport.score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"schema_summary\":{");
    const _string_builder$7 = _M0MPB13StringBuilder21StringBuilder_2einner(19);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, "\"required_columns\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$7, passport.required_columns);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$7));
    const _string_builder$8 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$8, ",\"optional_columns\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$8, passport.optional_columns);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$8));
    const _string_builder$9 = _M0MPB13StringBuilder21StringBuilder_2einner(19);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$9, ",\"numeric_columns\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$9, passport.numeric_columns);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$9));
    const _string_builder$10 = _M0MPB13StringBuilder21StringBuilder_2einner(19);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$10, ",\"boolean_columns\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$10, passport.boolean_columns);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$10));
    const _string_builder$11 = _M0MPB13StringBuilder21StringBuilder_2einner(16);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$11, ",\"text_columns\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$11, passport.text_columns);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$11));
    const _string_builder$12 = _M0MPB13StringBuilder21StringBuilder_2einner(18);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$12, ",\"unique_columns\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$12, passport.unique_columns);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$12));
    _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"schema\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite29passport__write__schema__json(out, passport.schema);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"recommendations\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite38passport__write__recommendations__json(out, passport.recommendations);
    _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite25csv__data__passport__json(input, name) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite33csv__data__passport__report__json(_M0FP28clhhhhhh17moon_2dcsv_2dlite19csv__data__passport(input, name));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite15chart__cell__at(row, index) {
    return index >= 0 && index < row.length ? _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(row, index) : "";
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite20chart__column__index(headers, column) {
    const _bind = 0;
    const _bind$2 = headers.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(headers, i) === column) {
          return i;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return undefined;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite16chart__index__of(values, value) {
    const _bind = 0;
    const _bind$2 = values.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(values, i) === value) {
          return i;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return undefined;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite22chart__normalize__kind(kind) {
    const _bind = _M0MPC16string6String9to__lower(kind);
    switch (_bind) {
      case "line": {
        return "line";
      }
      case "pie": {
        return "pie";
      }
      case "donut": {
        return "pie";
      }
      default: {
        return "bar";
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27chart__points__from__arrays(points, labels, values, counts, limit) {
    const max_count = labels.length < limit ? labels.length : limit;
    const _bind = 0;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < max_count) {
        _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(points, new _M0TP28clhhhhhh17moon_2dcsv_2dlite13CsvChartPoint(_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(labels, i), _M0MPC15array5Array2atGdE(values, i), _M0MPC15array5Array2atGiE(counts, i)));
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite23chart__is__ascii__space(ch) {
    return ch === 32 || (ch === 9 || (ch === 10 || ch === 13));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite18chart__trim__ascii(value) {
    const chars = _M0MPC15array5Array11new_2einnerGcE(0);
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      _M0MPC15array5Array4pushGcE(chars, ch);
      continue;
    }
    const start = new _M0TPB8MutLocalGiE(0);
    const finish = new _M0TPB8MutLocalGiE(chars.length);
    while (true) {
      if (start.val < finish.val && _M0FP28clhhhhhh17moon_2dcsv_2dlite23chart__is__ascii__space(_M0MPC15array5Array2atGcE(chars, start.val))) {
        start.val = start.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    while (true) {
      if (finish.val > start.val && _M0FP28clhhhhhh17moon_2dcsv_2dlite23chart__is__ascii__space(_M0MPC15array5Array2atGcE(chars, finish.val - 1 | 0))) {
        finish.val = finish.val - 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const _bind = start.val;
    const _bind$2 = finish.val;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        _M0IPB13StringBuilderPB6Logger11write__char(out, _M0MPC15array5Array2atGcE(chars, i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite18chart__count__spec(table, kind, label_column) {
    const normalized = _M0FP28clhhhhhh17moon_2dcsv_2dlite22chart__normalize__kind(kind);
    const warnings = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const points = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    let label_index;
    _L: {
      const _bind = _M0FP28clhhhhhh17moon_2dcsv_2dlite20chart__column__index(table.headers, label_column);
      if (_bind === undefined) {
        _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(warnings, "No chartable columns were found.");
        return new _M0TP28clhhhhhh17moon_2dcsv_2dlite12CsvChartSpec(normalized, "chart preview", label_column, "count", "count", points, table.rows.length, warnings);
      } else {
        const _Some = _bind;
        const _label_index = _Some;
        label_index = _label_index;
        break _L;
      }
    }
    const labels = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const values = _M0MPC15array5Array11new_2einnerGdE(0);
    const counts = _M0MPC15array5Array11new_2einnerGiE(0);
    const _bind = table.rows;
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const row = _bind[_];
        const raw_label = _M0FP28clhhhhhh17moon_2dcsv_2dlite15chart__cell__at(row, label_index);
        const label = _M0MPC16string6String9is__empty(_M0FP28clhhhhhh17moon_2dcsv_2dlite18chart__trim__ascii(raw_label)) ? "(blank)" : raw_label;
        let index;
        _L$2: {
          _L$3: {
            const _bind$3 = _M0FP28clhhhhhh17moon_2dcsv_2dlite16chart__index__of(labels, label);
            if (_bind$3 === undefined) {
              _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(labels, label);
              _M0MPC15array5Array4pushGdE(values, 1);
              _M0MPC15array5Array4pushGiE(counts, 1);
            } else {
              const _Some = _bind$3;
              const _index = _Some;
              index = _index;
              break _L$3;
            }
            break _L$2;
          }
          const _array_5 = values;
          const _index_6 = index;
          _M0MPC15array5Array3setGdE(_array_5, _index_6, _M0MPC15array5Array2atGdE(_array_5, _index_6) + 1);
          const _array_7 = counts;
          const _index_8 = index;
          _M0MPC15array5Array3setGiE(_array_7, _index_8, _M0MPC15array5Array2atGiE(_array_7, _index_8) + 1 | 0);
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(warnings, "No numeric column was found; generated a category-count chart.");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27chart__points__from__arrays(points, labels, values, counts, 24);
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(9);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "count by ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, label_column);
    return new _M0TP28clhhhhhh17moon_2dcsv_2dlite12CsvChartSpec(normalized, _M0MPB13StringBuilder10to__string(_string_builder), label_column, "count", "count", points, 0, warnings);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__pick__label__column(table) {
    if (table.headers.length === 0) {
      return "row";
    }
    const profiles = _M0FP28clhhhhhh17moon_2dcsv_2dlite14profile__table(table);
    const _bind = profiles.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const profile = profiles[_];
        _L: {
          _L$2: {
            const _bind$2 = profile.inferred;
            switch (_bind$2) {
              case 4: {
                break _L$2;
              }
              case 3: {
                break _L$2;
              }
            }
            break _L;
          }
          if (profile.non_empty > 0 && profile.unique < profile.non_empty) {
            return profile.name;
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$2 = profiles.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$2) {
        const profile = profiles[_];
        _L: {
          _L$2: {
            const _bind$3 = profile.inferred;
            switch (_bind$3) {
              case 4: {
                break _L$2;
              }
              case 3: {
                break _L$2;
              }
            }
            break _L;
          }
          return profile.name;
        }
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(table.headers, 0);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__pick__value__column(table) {
    const profiles = _M0FP28clhhhhhh17moon_2dcsv_2dlite14profile__table(table);
    const _bind = profiles.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const profile = profiles[_];
        _L: {
          _L$2: {
            const _bind$2 = profile.inferred;
            switch (_bind$2) {
              case 1: {
                break _L$2;
              }
              case 2: {
                break _L$2;
              }
            }
            break _L;
          }
          if (profile.non_empty > 0) {
            return profile.name;
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return undefined;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite20chart__parse__double(value) {
    let _try_err;
    _L: {
      const _bind = _M0FP28clhhhhhh17moon_2dcsv_2dlite18chart__trim__ascii(value);
      const _bind$2 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(_bind, 0, _bind.length));
      let _bind$3;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _bind$3 = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err = _err._0;
        break _L;
      }
      const number = _bind$3;
      return new _M0DTPC16option6OptionGdE4Some(number);
    }
    return _M0DTPC16option6OptionGdE4None__;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite18chart__table__spec(table, kind, label_column, value_column) {
    const normalized = _M0FP28clhhhhhh17moon_2dcsv_2dlite22chart__normalize__kind(kind);
    const warnings = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const points = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    let label_index;
    let value_index;
    _L: {
      const _bind = _M0FP28clhhhhhh17moon_2dcsv_2dlite20chart__column__index(table.headers, label_column);
      const _bind$2 = _M0FP28clhhhhhh17moon_2dcsv_2dlite20chart__column__index(table.headers, value_column);
      if (_bind === undefined) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(30);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Label column `");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, label_column);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "` was not found.");
        _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(warnings, _M0MPB13StringBuilder10to__string(_string_builder));
        return new _M0TP28clhhhhhh17moon_2dcsv_2dlite12CsvChartSpec(normalized, "chart preview", label_column, value_column, "sum", points, table.rows.length, warnings);
      } else {
        const _Some = _bind;
        const _label_index = _Some;
        if (_bind$2 === undefined) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(30);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Value column `");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, value_column);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "` was not found.");
          _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(warnings, _M0MPB13StringBuilder10to__string(_string_builder));
          return new _M0TP28clhhhhhh17moon_2dcsv_2dlite12CsvChartSpec(normalized, "chart preview", label_column, value_column, "sum", points, table.rows.length, warnings);
        } else {
          const _Some$2 = _bind$2;
          const _value_index = _Some$2;
          label_index = _label_index;
          value_index = _value_index;
          break _L;
        }
      }
    }
    const labels = _M0MPC15array5Array11new_2einnerGRP28clhhhhhh17moon_2dcsv_2dlite13CsvDriftIssueE(0);
    const values = _M0MPC15array5Array11new_2einnerGdE(0);
    const counts = _M0MPC15array5Array11new_2einnerGiE(0);
    const skipped_rows = new _M0TPB8MutLocalGiE(0);
    const _bind = table.rows;
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const row = _bind[_];
        const raw_label = _M0FP28clhhhhhh17moon_2dcsv_2dlite15chart__cell__at(row, label_index);
        const label = _M0MPC16string6String9is__empty(_M0FP28clhhhhhh17moon_2dcsv_2dlite18chart__trim__ascii(raw_label)) ? "(blank)" : raw_label;
        let value;
        _L$2: {
          _L$3: {
            const _bind$3 = _M0FP28clhhhhhh17moon_2dcsv_2dlite20chart__parse__double(_M0FP28clhhhhhh17moon_2dcsv_2dlite15chart__cell__at(row, value_index));
            if (_bind$3.$tag === 1) {
              const _Some = _bind$3;
              const _value = _Some._0;
              value = _value;
              break _L$3;
            } else {
              skipped_rows.val = skipped_rows.val + 1 | 0;
            }
            break _L$2;
          }
          let index;
          _L$4: {
            _L$5: {
              const _bind$3 = _M0FP28clhhhhhh17moon_2dcsv_2dlite16chart__index__of(labels, label);
              if (_bind$3 === undefined) {
                _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(labels, label);
                _M0MPC15array5Array4pushGdE(values, value);
                _M0MPC15array5Array4pushGiE(counts, 1);
              } else {
                const _Some = _bind$3;
                const _index = _Some;
                index = _index;
                break _L$5;
              }
              break _L$4;
            }
            const _array_1 = values;
            const _index_2 = index;
            _M0MPC15array5Array3setGdE(_array_1, _index_2, _M0MPC15array5Array2atGdE(_array_1, _index_2) + value);
            const _array_3 = counts;
            const _index_4 = index;
            _M0MPC15array5Array3setGiE(_array_3, _index_4, _M0MPC15array5Array2atGiE(_array_3, _index_4) + 1 | 0);
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (skipped_rows.val > 0) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(57);
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, skipped_rows.val);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " row(s) were skipped because `");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, value_column);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "` was empty or non-numeric.");
      _M0MPC15array5Array4pushGRP28clhhhhhh17moon_2dcsv_2dlite24CsvContractUniqueKeyRuleE(warnings, _M0MPB13StringBuilder10to__string(_string_builder));
    }
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27chart__points__from__arrays(points, labels, values, counts, 24);
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(11);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "sum of ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, value_column);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " by ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, label_column);
    return new _M0TP28clhhhhhh17moon_2dcsv_2dlite12CsvChartSpec(normalized, _M0MPB13StringBuilder10to__string(_string_builder), label_column, value_column, "sum", points, skipped_rows.val, warnings);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite17chart__auto__spec(table, kind) {
    const normalized = _M0FP28clhhhhhh17moon_2dcsv_2dlite22chart__normalize__kind(kind);
    const label_column = _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__pick__label__column(table);
    let value_column;
    _L: {
      const _bind = _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__pick__value__column(table);
      if (_bind === undefined) {
        return _M0FP28clhhhhhh17moon_2dcsv_2dlite18chart__count__spec(table, normalized, label_column);
      } else {
        const _Some = _bind;
        const _value_column = _Some;
        value_column = _value_column;
        break _L;
      }
    }
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite18chart__table__spec(table, normalized, label_column, value_column);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite22chart__csv__spec__kind(input, kind) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite17chart__auto__spec(_M0FP28clhhhhhh17moon_2dcsv_2dlite18parse__table__auto(input), kind);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27chart__write__json__escaped(out, value) {
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          return;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (ch === 34) {
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\\\"");
      } else {
        if (ch === 92) {
          _M0IPB13StringBuilderPB6Logger13write__string(out, "\\\\");
        } else {
          if (ch === 10) {
            _M0IPB13StringBuilderPB6Logger13write__string(out, "\\n");
          } else {
            if (ch === 13) {
              _M0IPB13StringBuilderPB6Logger13write__string(out, "\\r");
            } else {
              if (ch === 9) {
                _M0IPB13StringBuilderPB6Logger13write__string(out, "\\t");
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(out, ch);
              }
            }
          }
        }
      }
      continue;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__json__string(out, value) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 34);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27chart__write__json__escaped(out, value);
    _M0IPB13StringBuilderPB6Logger11write__char(out, 34);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__points__json(out, points) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = points.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        const point = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(points, i);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\"label\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__json__string(out, point.label);
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(9);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"value\":");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder, point.value);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(9);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"count\":");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, point.count);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
        _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite33chart__write__string__array__json(out, values) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = values.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__json__string(out, _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(values, i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite17chart__spec__json(spec) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\"kind\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__json__string(out, spec.kind);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"title\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__json__string(out, spec.title);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"label_column\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__json__string(out, spec.label_column);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"value_column\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__json__string(out, spec.value_column);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"measure\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__json__string(out, spec.measure);
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(16);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"skipped_rows\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, spec.skipped_rows);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"points\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__points__json(out, spec.points);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"warnings\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite33chart__write__string__array__json(out, spec.warnings);
    _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite16chart__csv__json(input, kind) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite17chart__spec__json(_M0FP28clhhhhhh17moon_2dcsv_2dlite22chart__csv__spec__kind(input, kind));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite18chart__abs__double(value) {
    return value < 0 ? -value : value;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite12chart__color(index) {
    const colors = ["#2563eb", "#0f766e", "#b45309", "#b91c1c", "#7c3aed", "#0369a1", "#15803d", "#c2410c", "#be123c", "#4338ca"];
    const _tmp = colors.length;
    if (_tmp === 0) {
      $panic();
    }
    return _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(colors, index % _tmp | 0);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite18chart__max__double(left, right) {
    return left > right ? left : right;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite17chart__max__value(points) {
    if (points.length === 0) {
      return _M0DTPC16option6OptionGdE4None__;
    }
    const value = new _M0TPB8MutLocalGdE(_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(points, 0).value);
    const _bind = 1;
    const _bind$2 = points.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(points, i).value > value.val) {
          value.val = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(points, i).value;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16option6OptionGdE4Some(value.val);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite17chart__min__value(points) {
    if (points.length === 0) {
      return _M0DTPC16option6OptionGdE4None__;
    }
    const value = new _M0TPB8MutLocalGdE(_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(points, 0).value);
    const _bind = 1;
    const _bind$2 = points.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(points, i).value < value.val) {
          value.val = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(points, i).value;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16option6OptionGdE4Some(value.val);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite15chart__scale__y(value, min_value, max_value, top, height) {
    return max_value === min_value ? top + height / 2 : top + (max_value - value) / (max_value - min_value) * height;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27chart__write__html__escaped(out, value) {
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          return;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (ch === 38) {
        _M0IPB13StringBuilderPB6Logger13write__string(out, "&amp;");
      } else {
        if (ch === 60) {
          _M0IPB13StringBuilderPB6Logger13write__string(out, "&lt;");
        } else {
          if (ch === 62) {
            _M0IPB13StringBuilderPB6Logger13write__string(out, "&gt;");
          } else {
            if (ch === 34) {
              _M0IPB13StringBuilderPB6Logger13write__string(out, "&quot;");
            } else {
              if (ch === 39) {
                _M0IPB13StringBuilderPB6Logger13write__string(out, "&#39;");
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(out, ch);
              }
            }
          }
        }
      }
      continue;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__xml__escaped(out, value) {
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27chart__write__html__escaped(out, value);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__axis__labels(out, spec, y_min, y_max, left, top, plot_height) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(48);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "<text x=\"28\" y=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder, top + 5);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" font-size=\"11\" fill=\"#64748b\">");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__xml__escaped(out, String(y_max));
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</text>");
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(48);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "<text x=\"28\" y=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, top + plot_height);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" font-size=\"11\" fill=\"#64748b\">");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__xml__escaped(out, String(y_min));
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</text>");
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(49);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "<text x=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, left);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" y=\"356\" font-size=\"11\" fill=\"#64748b\">");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__xml__escaped(out, spec.label_column);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</text>");
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite24chart__write__empty__svg(out) {
    _M0IPB13StringBuilderPB6Logger13write__string(out, "<text x=\"380\" y=\"190\" text-anchor=\"middle\" font-size=\"16\" fill=\"#64748b\">No chartable data</text>");
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite24chart__write__svg__start(out, spec) {
    _M0IPB13StringBuilderPB6Logger13write__string(out, "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 380\" role=\"img\" aria-label=\"");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__xml__escaped(out, spec.title);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\">");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "<rect width=\"760\" height=\"380\" fill=\"#ffffff\"/>");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "<text x=\"28\" y=\"30\" font-size=\"18\" font-weight=\"700\" fill=\"#172033\">");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__xml__escaped(out, spec.title);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</text>");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "<text x=\"28\" y=\"50\" font-size=\"12\" fill=\"#64748b\">");
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(15);
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, spec.kind);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " / ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, spec.measure);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " / ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, spec.points.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " point(s)");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__xml__escaped(out, _M0MPB13StringBuilder10to__string(_string_builder));
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</text>");
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite19chart__label__short(value, limit) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const count = new _M0TPB8MutLocalGiE(0);
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (count.val >= limit) {
        _M0IPB13StringBuilderPB6Logger13write__string(out, "...");
        return _M0MPB13StringBuilder10to__string(out);
      }
      _M0IPB13StringBuilderPB6Logger11write__char(out, ch);
      count.val = count.val + 1 | 0;
      continue;
    }
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite22chart__write__x__label(out, label, x, y) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(67);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "<text x=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder, x);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" y=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder, y);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" text-anchor=\"middle\" font-size=\"10\" fill=\"#475569\">");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__xml__escaped(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite19chart__label__short(label, 12));
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</text>");
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite15chart__bar__svg(spec) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite24chart__write__svg__start(out, spec);
    if (spec.points.length === 0) {
      _M0FP28clhhhhhh17moon_2dcsv_2dlite24chart__write__empty__svg(out);
      _M0IPB13StringBuilderPB6Logger13write__string(out, "</svg>");
      return _M0MPB13StringBuilder10to__string(out);
    }
    const left = 70;
    const top = 54;
    const plot_width = 660;
    const plot_height = 250;
    const bottom = top + plot_height;
    const min_value = _M0MPC16option6Option10unwrap__orGdE(_M0FP28clhhhhhh17moon_2dcsv_2dlite17chart__min__value(spec.points), 0);
    const max_value = _M0MPC16option6Option10unwrap__orGdE(_M0FP28clhhhhhh17moon_2dcsv_2dlite17chart__max__value(spec.points), 0);
    const y_min = min_value > 0 ? 0 : min_value;
    const y_max = max_value < 0 ? 0 : max_value;
    const zero_y = _M0FP28clhhhhhh17moon_2dcsv_2dlite15chart__scale__y(0, y_min, y_max, top, plot_height);
    const slot = plot_width / (spec.points.length + 0);
    const bar_width = _M0FP28clhhhhhh17moon_2dcsv_2dlite18chart__max__double(8, slot * 0.62);
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(48);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "<line x1=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder, left);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" y1=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder, top);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" x2=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder, left);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" y2=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder, bottom);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" stroke=\"#94a3b8\"/>");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(48);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "<line x1=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, left);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" y1=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, zero_y);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" x2=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, left + plot_width);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" y2=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, zero_y);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" stroke=\"#94a3b8\"/>");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__axis__labels(out, spec, y_min, y_max, left, top, plot_height);
    const _bind = 0;
    const _bind$2 = spec.points.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        const point = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(spec.points, i);
        const x = left + (i + 0) * slot + (slot - bar_width) / 2;
        const y = _M0FP28clhhhhhh17moon_2dcsv_2dlite15chart__scale__y(point.value, y_min, y_max, top, plot_height);
        const rect_y = y < zero_y ? y : zero_y;
        const height = _M0FP28clhhhhhh17moon_2dcsv_2dlite18chart__abs__double(zero_y - y);
        const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(48);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "<rect x=\"");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, x);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" y=\"");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, rect_y);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" width=\"");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, bar_width);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" height=\"");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, height);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" rx=\"4\" fill=\"");
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite12chart__color(i));
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\"><title>");
        const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(2);
        _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, point.label);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, ": ");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$4, point.value);
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__xml__escaped(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
        _M0IPB13StringBuilderPB6Logger13write__string(out, "</title></rect>");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite22chart__write__x__label(out, point.label, x + bar_width / 2, bottom + 18);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</svg>");
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite14chart__line__x(index, count, left, width) {
    return count <= 1 ? left + width / 2 : left + (index + 0) * width / ((count - 1 | 0) + 0);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite16chart__line__svg(spec) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite24chart__write__svg__start(out, spec);
    if (spec.points.length === 0) {
      _M0FP28clhhhhhh17moon_2dcsv_2dlite24chart__write__empty__svg(out);
      _M0IPB13StringBuilderPB6Logger13write__string(out, "</svg>");
      return _M0MPB13StringBuilder10to__string(out);
    }
    const left = 70;
    const top = 54;
    const plot_width = 660;
    const plot_height = 250;
    const bottom = top + plot_height;
    const min_value = _M0MPC16option6Option10unwrap__orGdE(_M0FP28clhhhhhh17moon_2dcsv_2dlite17chart__min__value(spec.points), 0);
    const max_value = _M0MPC16option6Option10unwrap__orGdE(_M0FP28clhhhhhh17moon_2dcsv_2dlite17chart__max__value(spec.points), 0);
    const y_min = min_value === max_value ? min_value - 1 : min_value;
    const y_max = min_value === max_value ? max_value + 1 : max_value;
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(48);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "<line x1=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder, left);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" y1=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder, top);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" x2=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder, left);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" y2=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder, bottom);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" stroke=\"#94a3b8\"/>");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(48);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "<line x1=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, left);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" y1=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, bottom);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" x2=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, left + plot_width);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" y2=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, bottom);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" stroke=\"#94a3b8\"/>");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__axis__labels(out, spec, y_min, y_max, left, top, plot_height);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "<polyline fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" points=\"");
    const _bind = 0;
    const _bind$2 = spec.points.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 32);
        }
        const x = _M0FP28clhhhhhh17moon_2dcsv_2dlite14chart__line__x(i, spec.points.length, left, plot_width);
        const y = _M0FP28clhhhhhh17moon_2dcsv_2dlite15chart__scale__y(_M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(spec.points, i).value, y_min, y_max, top, plot_height);
        const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(1);
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, x);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, y);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\"/>");
    const _bind$3 = 0;
    const _bind$4 = spec.points.length;
    let _tmp$2 = _bind$3;
    while (true) {
      const i = _tmp$2;
      if (i < _bind$4) {
        const point = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(spec.points, i);
        const x = _M0FP28clhhhhhh17moon_2dcsv_2dlite14chart__line__x(i, spec.points.length, left, plot_width);
        const y = _M0FP28clhhhhhh17moon_2dcsv_2dlite15chart__scale__y(point.value, y_min, y_max, top, plot_height);
        const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(32);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "<circle cx=\"");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, x);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" cy=\"");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, y);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" r=\"5\" fill=\"");
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite12chart__color(i));
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\"><title>");
        const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(2);
        _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, point.label);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, ": ");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$4, point.value);
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__xml__escaped(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
        _M0IPB13StringBuilderPB6Logger13write__string(out, "</title></circle>");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite22chart__write__x__label(out, point.label, x, bottom + 18);
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</svg>");
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite22chart__positive__total(points) {
    const total = new _M0TPB8MutLocalGdE(0);
    const _bind = points.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const point = points[_];
        if (point.value > 0) {
          total.val = total.val + point.value;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return total.val;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite15chart__pie__svg(spec) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite24chart__write__svg__start(out, spec);
    const total = _M0FP28clhhhhhh17moon_2dcsv_2dlite22chart__positive__total(spec.points);
    if (spec.points.length === 0 || total <= 0) {
      _M0FP28clhhhhhh17moon_2dcsv_2dlite24chart__write__empty__svg(out);
      _M0IPB13StringBuilderPB6Logger13write__string(out, "</svg>");
      return _M0MPB13StringBuilder10to__string(out);
    }
    const cx = 220;
    const cy = 190;
    const radius = 88;
    const circumference = 552.92;
    const offset = new _M0TPB8MutLocalGdE(0);
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(73);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "<circle cx=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder, cx);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" cy=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder, cy);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" r=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder, radius);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\" fill=\"none\" stroke=\"#e5e7eb\" stroke-width=\"34\"/>");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    const _bind = 0;
    const _bind$2 = spec.points.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        const point = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(spec.points, i);
        if (point.value > 0) {
          const dash = point.value / total * circumference;
          const rest = circumference - dash;
          const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(45);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "<circle cx=\"");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, cx);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" cy=\"");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, cy);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" r=\"");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, radius);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" fill=\"none\" stroke=\"");
          _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
          _M0IPB13StringBuilderPB6Logger13write__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite12chart__color(i));
          const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(96);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" stroke-width=\"34\" stroke-dasharray=\"");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, dash);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, " ");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, rest);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" stroke-dashoffset=\"-");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, offset.val);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" transform=\"rotate(-90 ");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, cx);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, " ");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, cy);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ")\"><title>");
          _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
          const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(2);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder$4, point.label);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, ": ");
          _M0MPB13StringBuilder13write__objectGdE(_string_builder$4, point.value);
          _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__xml__escaped(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
          _M0IPB13StringBuilderPB6Logger13write__string(out, "</title></circle>");
          offset.val = offset.val + dash;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(43);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "<circle cx=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, cx);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" cy=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder$2, cy);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\" r=\"54\" fill=\"#ffffff\"/>");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(85);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "<text x=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, cx);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" y=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder$3, cy - 4);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"700\" fill=\"#172033\">");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__xml__escaped(out, spec.measure);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</text>");
    const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(80);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "<text x=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder$4, cx);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\" y=\"");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder$4, cy + 20);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "\" text-anchor=\"middle\" font-size=\"13\" fill=\"#64748b\">total ");
    _M0MPB13StringBuilder13write__objectGdE(_string_builder$4, total);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "</text>");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
    const legend_x = 390;
    const legend_y = new _M0TPB8MutLocalGdE(94);
    const _bind$3 = 0;
    const _bind$4 = spec.points.length;
    let _tmp$2 = _bind$3;
    while (true) {
      const i = _tmp$2;
      if (i < _bind$4) {
        const point = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(spec.points, i);
        const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(52);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "<rect x=\"");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$5, legend_x);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "\" y=\"");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$5, legend_y.val - 10);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "\" width=\"12\" height=\"12\" rx=\"3\" fill=\"");
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$5));
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite12chart__color(i));
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\"/>");
        const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(46);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "<text x=\"");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$6, legend_x + 18);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "\" y=\"");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$6, legend_y.val);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "\" font-size=\"12\" fill=\"#172033\">");
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$6));
        const _string_builder$7 = _M0MPB13StringBuilder21StringBuilder_2einner(2);
        _M0MPB13StringBuilder13write__objectGsE(_string_builder$7, point.label);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, ": ");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder$7, point.value);
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26chart__write__xml__escaped(out, _M0MPB13StringBuilder10to__string(_string_builder$7));
        _M0IPB13StringBuilderPB6Logger13write__string(out, "</text>");
        legend_y.val = legend_y.val + 22;
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</svg>");
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite16chart__spec__svg(spec) {
    return spec.kind === "line" ? _M0FP28clhhhhhh17moon_2dcsv_2dlite16chart__line__svg(spec) : spec.kind === "pie" ? _M0FP28clhhhhhh17moon_2dcsv_2dlite15chart__pie__svg(spec) : _M0FP28clhhhhhh17moon_2dcsv_2dlite15chart__bar__svg(spec);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite15chart__csv__svg(input, kind) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite16chart__spec__svg(_M0FP28clhhhhhh17moon_2dcsv_2dlite22chart__csv__spec__kind(input, kind));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite17chart__spec__html(spec) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "<!doctype html>\n<html>\n<head>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <meta charset=\"utf-8\">\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <title>");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27chart__write__html__escaped(out, spec.title);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</title>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <style>");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "body{font-family:Arial,sans-serif;margin:24px;color:#172033;line-height:1.45}svg{max-width:100%;height:auto;border:1px solid #d7dee8;border-radius:8px;background:#fff}table{border-collapse:collapse;margin-top:18px}th,td{border:1px solid #d7dee8;padding:6px 8px}th{background:#f4f6fa;text-align:left}.warn{color:#9a5b00}");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</style>\n</head>\n<body>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <h1>");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27chart__write__html__escaped(out, spec.title);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</h1>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <p>Kind: ");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27chart__write__html__escaped(out, spec.kind);
    _M0IPB13StringBuilderPB6Logger13write__string(out, " &middot; Label: ");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27chart__write__html__escaped(out, spec.label_column);
    _M0IPB13StringBuilderPB6Logger13write__string(out, " &middot; Value: ");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27chart__write__html__escaped(out, spec.value_column);
    _M0IPB13StringBuilderPB6Logger13write__string(out, " &middot; Measure: ");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27chart__write__html__escaped(out, spec.measure);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</p>\n");
    const _bind = spec.warnings;
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const warning = _bind[_];
        _M0IPB13StringBuilderPB6Logger13write__string(out, "  <p class=\"warn\">");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite27chart__write__html__escaped(out, warning);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "</p>\n");
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite16chart__spec__svg(spec));
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\n  <table>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "    <tr><th>Label</th><th>Value</th><th>Rows</th></tr>\n");
    const _bind$3 = spec.points;
    const _bind$4 = _bind$3.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$4) {
        const point = _bind$3[_];
        _M0IPB13StringBuilderPB6Logger13write__string(out, "    <tr><td>");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite27chart__write__html__escaped(out, point.label);
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(29);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</td><td>");
        _M0MPB13StringBuilder13write__objectGdE(_string_builder, point.value);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</td><td>");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, point.count);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</td></tr>\n");
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  </table>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</body>\n</html>");
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite16chart__csv__html(input, kind) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite17chart__spec__html(_M0FP28clhhhhhh17moon_2dcsv_2dlite22chart__csv__spec__kind(input, kind));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite17audit__report__ok(report) {
    return report.parse_issues.length === 0 && report.quality_issues.length === 0;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite30audit__write__optional__double(out, value) {
    let number;
    _L: {
      if (value.$tag === 1) {
        const _Some = value;
        const _number = _Some._0;
        number = _number;
        break _L;
      } else {
        return;
      }
    }
    _M0IPB13StringBuilderPB6Logger13write__string(out, String(number));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite23audit__delimiter__label(delimiter) {
    if (delimiter === 9) {
      return "\\t";
    } else {
      const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
      _M0IPB13StringBuilderPB6Logger11write__char(out, delimiter);
      return _M0MPB13StringBuilder10to__string(out);
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__html__escaped(out, value) {
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          return;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (ch === 38) {
        _M0IPB13StringBuilderPB6Logger13write__string(out, "&amp;");
      } else {
        if (ch === 60) {
          _M0IPB13StringBuilderPB6Logger13write__string(out, "&lt;");
        } else {
          if (ch === 62) {
            _M0IPB13StringBuilderPB6Logger13write__string(out, "&gt;");
          } else {
            if (ch === 34) {
              _M0IPB13StringBuilderPB6Logger13write__string(out, "&quot;");
            } else {
              if (ch === 39) {
                _M0IPB13StringBuilderPB6Logger13write__string(out, "&#39;");
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(out, ch);
              }
            }
          }
        }
      }
      continue;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite33audit__write__parse__issues__html(out, issues) {
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <h2>Parse Issues</h2>\n");
    if (issues.length === 0) {
      _M0IPB13StringBuilderPB6Logger13write__string(out, "  <p class=\"ok\">No parse issues.</p>\n");
      return;
    } else {
      _M0IPB13StringBuilderPB6Logger13write__string(out, "  <table>\n");
      _M0IPB13StringBuilderPB6Logger13write__string(out, "    <tr><th>Line</th><th>Column</th><th>Message</th></tr>\n");
      const _bind = issues.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const issue = issues[_];
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(30);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "    <tr><td>");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, issue.line);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</td><td>");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, issue.column);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</td><td>");
          _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
          _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__html__escaped(out, issue.message);
          _M0IPB13StringBuilderPB6Logger13write__string(out, "</td></tr>\n");
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0IPB13StringBuilderPB6Logger13write__string(out, "  </table>\n");
      return;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__profile__html(out, profiles) {
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <h2>Column Profile</h2>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <table>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "    <tr><th>Column</th><th>Type</th><th>Empty</th><th>Non-empty</th><th>Unique</th><th>Min</th><th>Max</th><th>Average</th></tr>\n");
    const _bind = profiles.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const profile = profiles[_];
        _M0IPB13StringBuilderPB6Logger13write__string(out, "    <tr><td>");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__html__escaped(out, profile.name);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "</td><td>");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__html__escaped(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite20inferred__type__name(profile.inferred));
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(36);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</td><td>");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, profile.empty);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</td><td>");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, profile.non_empty);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</td><td>");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, profile.unique);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</td><td>");
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
        _M0FP28clhhhhhh17moon_2dcsv_2dlite30audit__write__optional__double(out, profile.min);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "</td><td>");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite30audit__write__optional__double(out, profile.max);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "</td><td>");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite30audit__write__optional__double(out, profile.average);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "</td></tr>\n");
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  </table>\n");
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite35audit__write__quality__issues__html(out, issues) {
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <h2>Quality Issues</h2>\n");
    if (issues.length === 0) {
      _M0IPB13StringBuilderPB6Logger13write__string(out, "  <p class=\"ok\">No table quality issues.</p>\n");
      return;
    } else {
      _M0IPB13StringBuilderPB6Logger13write__string(out, "  <table>\n");
      _M0IPB13StringBuilderPB6Logger13write__string(out, "    <tr><th>Severity</th><th>Row</th><th>Column</th><th>Message</th></tr>\n");
      const _bind = issues.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const issue = issues[_];
          _M0IPB13StringBuilderPB6Logger13write__string(out, "    <tr><td>");
          _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__html__escaped(out, issue.severity);
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(18);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</td><td>");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, issue.row);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</td><td>");
          _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
          _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__html__escaped(out, issue.column);
          _M0IPB13StringBuilderPB6Logger13write__string(out, "</td><td>");
          _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__html__escaped(out, issue.message);
          _M0IPB13StringBuilderPB6Logger13write__string(out, "</td></tr>\n");
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0IPB13StringBuilderPB6Logger13write__string(out, "  </table>\n");
      return;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite35audit__write__recommendations__html(out, recommendations) {
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <h2>Recommendations</h2>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <ul>\n");
    const _bind = recommendations.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const item = recommendations[_];
        _M0IPB13StringBuilderPB6Logger13write__string(out, "    <li><strong>");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__html__escaped(out, item.severity);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ":</strong> ");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__html__escaped(out, item.message);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "</li>\n");
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  </ul>\n");
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite25audit__column__type__name(kind) {
    switch (kind) {
      case 0: {
        return "text";
      }
      case 1: {
        return "integer";
      }
      case 2: {
        return "float";
      }
      default: {
        return "boolean";
      }
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite11audit__join(values, separator) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const _bind = 0;
    const _bind$2 = values.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger13write__string(out, separator);
        }
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(values, i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__schema__html(out, rules) {
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <h2>Inferred Schema</h2>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <table>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "    <tr><th>Column</th><th>Type</th><th>Required</th><th>Empty</th><th>Unique</th><th>Examples</th></tr>\n");
    const _bind = rules.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const rule = rules[_];
        _M0IPB13StringBuilderPB6Logger13write__string(out, "    <tr><td>");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__html__escaped(out, rule.name);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "</td><td>");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__html__escaped(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite25audit__column__type__name(rule.kind));
        _M0IPB13StringBuilderPB6Logger13write__string(out, "</td><td>");
        _M0IPB13StringBuilderPB6Logger13write__string(out, rule.required ? "yes" : "no");
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(28);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</td><td>");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, rule.empty);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "/");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, rule.total);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</td><td>");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, rule.unique);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</td><td>");
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
        _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__html__escaped(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite11audit__join(rule.examples, ", "));
        _M0IPB13StringBuilderPB6Logger13write__string(out, "</td></tr>\n");
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  </table>\n");
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite25audit__write__score__html(out, score) {
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <h2>Quality Score</h2>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <table>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "    <tr><th>Metric</th><th>Value</th></tr>\n");
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(48);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "    <tr><td>Overall score</td><td>");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, score.score);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " (");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, score.grade);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ")</td></tr>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    _M0IPB13StringBuilderPB6Logger13write__string(out, "    <tr><td>Risk</td><td>");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__html__escaped(out, score.risk);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</td></tr>\n");
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(41);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "    <tr><td>Structure</td><td>");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, score.structure_score);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "</td></tr>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(44);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "    <tr><td>Completeness</td><td>");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, score.completeness_score);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "</td></tr>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
    const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(43);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "    <tr><td>Consistency</td><td>");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, score.consistency_score);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, "</td></tr>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
    const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(42);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "    <tr><td>Uniqueness</td><td>");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, score.uniqueness_score);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, "</td></tr>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$5));
    const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(46);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "    <tr><td>Missing cells</td><td>");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$6, score.missing_cells);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "/");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$6, score.total_cells);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, "</td></tr>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$6));
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  </table>\n");
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite19audit__report__html(report) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "<!doctype html>\n<html>\n<head>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <meta charset=\"utf-8\">\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <title>CSV Audit Report</title>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <style>");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "body{font-family:Arial,sans-serif;margin:24px;color:#172033;line-height:1.45}table{border-collapse:collapse;margin:10px 0 18px}th,td{border:1px solid #ccd3df;padding:6px 8px}th{background:#f4f6fa;text-align:left}.ok{color:#146c2e}.bad{color:#9b1c1c}.meta{background:#f7f9fc;border:1px solid #d8e0ea;padding:10px 12px}");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</style>\n</head>\n<body>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <h1>CSV Audit Report</h1>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <div class=\"meta\">\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "    <p><strong>Status:</strong> ");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite17audit__report__ok(report) ? "ok" : "issues");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "</p>\n");
    const score = _M0FP28clhhhhhh17moon_2dcsv_2dlite21audit__quality__score(report);
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(80);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "    <p><strong>Quality score:</strong> ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, score.score);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " (");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, score.grade);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ") &middot; <strong>Risk:</strong> ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, score.risk);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "</p>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    _M0IPB13StringBuilderPB6Logger13write__string(out, "    <p><strong>Dialect:</strong> ");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__html__escaped(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite13dialect__name(report.dialect));
    _M0IPB13StringBuilderPB6Logger13write__string(out, " (");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__html__escaped(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite23audit__delimiter__label(report.dialect.delimiter));
    _M0IPB13StringBuilderPB6Logger13write__string(out, ")</p>\n");
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(155);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "    <p><strong>Rows:</strong> ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, report.table.rows.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " &middot; <strong>Columns:</strong> ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, report.table.headers.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " &middot; <strong>Parse issues:</strong> ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, report.parse_issues.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " &middot; <strong>Quality issues:</strong> ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, report.quality_issues.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "</p>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  </div>\n");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite25audit__write__score__html(out, score);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite33audit__write__parse__issues__html(out, report.parse_issues);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite35audit__write__quality__issues__html(out, report.quality_issues);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__schema__html(out, report.inferred_schema);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "  <h2>Missing Values</h2>\n");
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite15table__to__html(report.missing_summary));
    _M0IPB13StringBuilderPB6Logger11write__char(out, 10);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__profile__html(out, report.profiles);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite35audit__write__recommendations__html(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite22audit__recommendations(report));
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\n</body>\n</html>");
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite34audit__delimiter__label__for__json(newline) {
    return newline === "\n" ? "\\n" : newline === "\r\n" ? "\\r\\n" : newline;
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite24audit__write__json__bool(out, value) {
    _M0IPB13StringBuilderPB6Logger13write__string(out, value ? "true" : "false");
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__json__escaped(out, value) {
    const _it = _M0MPC16string6String4iter(value);
    while (true) {
      let ch;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          return;
        } else {
          const _Some = _bind;
          const _ch = _Some;
          ch = _ch;
          break _L;
        }
      }
      if (ch === 34) {
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\\\"");
      } else {
        if (ch === 92) {
          _M0IPB13StringBuilderPB6Logger13write__string(out, "\\\\");
        } else {
          if (ch === 10) {
            _M0IPB13StringBuilderPB6Logger13write__string(out, "\\n");
          } else {
            if (ch === 13) {
              _M0IPB13StringBuilderPB6Logger13write__string(out, "\\r");
            } else {
              if (ch === 9) {
                _M0IPB13StringBuilderPB6Logger13write__string(out, "\\t");
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(out, ch);
              }
            }
          }
        }
      }
      continue;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, value) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 34);
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__json__escaped(out, value);
    _M0IPB13StringBuilderPB6Logger11write__char(out, 34);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__dialect__json(out, dialect) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\"name\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite13dialect__name(dialect));
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"delimiter\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite23audit__delimiter__label(dialect.delimiter));
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"newline\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite34audit__delimiter__label__for__json(dialect.newline));
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"skip_empty_lines\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite24audit__write__json__bool(out, dialect.skip_empty_lines);
    _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite31audit__write__json__int__string(out, value) {
    if (_M0MPC16string6String9is__empty(value)) {
      _M0IPB13StringBuilderPB6Logger13write__string(out, "0");
      return;
    } else {
      _M0IPB13StringBuilderPB6Logger13write__string(out, value);
      return;
    }
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__missing__json(out, table) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = table.rows.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        const row = _M0MPC15array5Array2atGRPB5ArrayGsEE(table.rows, i);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\"column\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite15audit__cell__at(row, 0));
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"missing\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite31audit__write__json__int__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite15audit__cell__at(row, 1));
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"present\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite31audit__write__json__int__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite15audit__cell__at(row, 2));
        _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite33audit__write__parse__issues__json(out, issues) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = issues.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        const issue = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(issues, i);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"line\":");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, issue.line);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(10);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"column\":");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, issue.column);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"message\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, issue.message);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite36audit__write__optional__double__json(out, value) {
    let number;
    _L: {
      if (value.$tag === 1) {
        const _Some = value;
        const _number = _Some._0;
        number = _number;
        break _L;
      } else {
        _M0IPB13StringBuilderPB6Logger13write__string(out, "null");
        return;
      }
    }
    _M0IPB13StringBuilderPB6Logger13write__string(out, String(number));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite28audit__write__profiles__json(out, profiles) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = profiles.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        const profile = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(profiles, i);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\"column\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, profile.name);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"type\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite20inferred__type__name(profile.inferred));
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(9);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"total\":");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, profile.total);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(9);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"empty\":");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, profile.empty);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
        const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(13);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",\"non_empty\":");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, profile.non_empty);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
        const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(10);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, ",\"unique\":");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, profile.unique);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"min\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite36audit__write__optional__double__json(out, profile.min);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"max\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite36audit__write__optional__double__json(out, profile.max);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"average\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite36audit__write__optional__double__json(out, profile.average);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite35audit__write__quality__issues__json(out, issues) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = issues.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        const issue = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(issues, i);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\"severity\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, issue.severity);
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"row\":");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, issue.row);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"column\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, issue.column);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"message\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, issue.message);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite35audit__write__recommendations__json(out, recommendations) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = recommendations.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        const item = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(recommendations, i);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\"severity\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, item.severity);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"message\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, item.message);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite33audit__write__string__array__json(out, values) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = values.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(values, i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__schema__json(out, rules) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 91);
    const _bind = 0;
    const _bind$2 = rules.length;
    let _tmp = _bind;
    while (true) {
      const i = _tmp;
      if (i < _bind$2) {
        if (i > 0) {
          _M0IPB13StringBuilderPB6Logger11write__char(out, 44);
        }
        const rule = _M0MPC15array5Array2atGRP28clhhhhhh17moon_2dcsv_2dlite13CsvParseErrorE(rules, i);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
        _M0IPB13StringBuilderPB6Logger13write__string(out, "\"column\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, rule.name);
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"type\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite25audit__column__type__name(rule.kind));
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"required\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite24audit__write__json__bool(out, rule.required);
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(9);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"total\":");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, rule.total);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(9);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"empty\":");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, rule.empty);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
        const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(10);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",\"unique\":");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, rule.unique);
        _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
        _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"examples\":");
        _M0FP28clhhhhhh17moon_2dcsv_2dlite33audit__write__string__array__json(out, rule.examples);
        _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger11write__char(out, 93);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite25audit__write__score__json(out, score) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(8);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"score\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, score.score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"grade\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, score.grade);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"risk\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, score.risk);
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(19);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"structure_score\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, score.structure_score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(22);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",\"completeness_score\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, score.completeness_score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
    const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(21);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, ",\"consistency_score\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, score.consistency_score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
    const _string_builder$5 = _M0MPB13StringBuilder21StringBuilder_2einner(20);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$5, ",\"uniqueness_score\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$5, score.uniqueness_score);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$5));
    const _string_builder$6 = _M0MPB13StringBuilder21StringBuilder_2einner(17);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$6, ",\"issue_penalty\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$6, score.issue_penalty);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$6));
    const _string_builder$7 = _M0MPB13StringBuilder21StringBuilder_2einner(17);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$7, ",\"missing_cells\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$7, score.missing_cells);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$7));
    const _string_builder$8 = _M0MPB13StringBuilder21StringBuilder_2einner(15);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$8, ",\"total_cells\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$8, score.total_cells);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$8));
    _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__summary__json(out, report) {
    _M0IPB13StringBuilderPB6Logger11write__char(out, 123);
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"rows\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, report.table.rows.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder));
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(11);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"columns\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, report.table.headers.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$2));
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(21);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ",\"parse_issue_count\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, report.parse_issues.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$3));
    const _string_builder$4 = _M0MPB13StringBuilder21StringBuilder_2einner(23);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$4, ",\"quality_issue_count\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder$4, report.quality_issues.length);
    _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPB13StringBuilder10to__string(_string_builder$4));
    _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite19audit__report__json(report) {
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0IPB13StringBuilderPB6Logger13write__string(out, "{");
    _M0IPB13StringBuilderPB6Logger13write__string(out, "\"status\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__json__string(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite17audit__report__ok(report) ? "ok" : "issues");
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"dialect\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__dialect__json(out, report.dialect);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"summary\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__summary__json(out, report);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"score\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite25audit__write__score__json(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite21audit__quality__score(report));
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"parse_issues\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite33audit__write__parse__issues__json(out, report.parse_issues);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"quality_issues\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite35audit__write__quality__issues__json(out, report.quality_issues);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"schema\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__write__schema__json(out, report.inferred_schema);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"missing\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite27audit__write__missing__json(out, report.missing_summary);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"profiles\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite28audit__write__profiles__json(out, report.profiles);
    _M0IPB13StringBuilderPB6Logger13write__string(out, ",\"recommendations\":");
    _M0FP28clhhhhhh17moon_2dcsv_2dlite35audit__write__recommendations__json(out, _M0FP28clhhhhhh17moon_2dcsv_2dlite22audit__recommendations(report));
    _M0IPB13StringBuilderPB6Logger11write__char(out, 125);
    return _M0MPB13StringBuilder10to__string(out);
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite16audit__csv__html(input) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite19audit__report__html(_M0FP28clhhhhhh17moon_2dcsv_2dlite10audit__csv(input));
  }
  function _M0FP28clhhhhhh17moon_2dcsv_2dlite16audit__csv__json(input) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite19audit__report__json(_M0FP28clhhhhhh17moon_2dcsv_2dlite10audit__csv(input));
  }
  function _M0FP38clhhhhhh17moon_2dcsv_2dlite3web12engine__name() {
    return "MoonBit JS backend";
  }
  function _M0FP38clhhhhhh17moon_2dcsv_2dlite3web16audit__csv__json(input) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite16audit__csv__json(input);
  }
  function _M0FP38clhhhhhh17moon_2dcsv_2dlite3web16audit__csv__html(input) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite16audit__csv__html(input);
  }
  function _M0FP38clhhhhhh17moon_2dcsv_2dlite3web29csv__data__passport__markdown(input, name) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite29csv__data__passport__markdown(input, name);
  }
  function _M0FP38clhhhhhh17moon_2dcsv_2dlite3web25csv__data__passport__json(input, name) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite25csv__data__passport__json(input, name);
  }
  function _M0FP38clhhhhhh17moon_2dcsv_2dlite3web18audit__drift__json(baseline_input, candidate_input) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite18audit__drift__json(baseline_input, candidate_input);
  }
  function _M0FP38clhhhhhh17moon_2dcsv_2dlite3web22audit__drift__markdown(baseline_input, candidate_input) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite22audit__drift__markdown(baseline_input, candidate_input);
  }
  function _M0FP38clhhhhhh17moon_2dcsv_2dlite3web26audit__quality__gate__json(baseline_input, candidate_input) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite26audit__quality__gate__json(baseline_input, candidate_input);
  }
  function _M0FP38clhhhhhh17moon_2dcsv_2dlite3web30audit__quality__gate__markdown(baseline_input, candidate_input) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite30audit__quality__gate__markdown(baseline_input, candidate_input);
  }
  function _M0FP38clhhhhhh17moon_2dcsv_2dlite3web29quality__contract__infer__csv(input) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite29quality__contract__infer__csv(input);
  }
  function _M0FP38clhhhhhh17moon_2dcsv_2dlite3web30audit__quality__contract__json(input, contract_csv) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite30audit__quality__contract__json(input, contract_csv);
  }
  function _M0FP38clhhhhhh17moon_2dcsv_2dlite3web34audit__quality__contract__markdown(input, contract_csv) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite34audit__quality__contract__markdown(input, contract_csv);
  }
  function _M0FP38clhhhhhh17moon_2dcsv_2dlite3web16chart__csv__json(input, kind) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite16chart__csv__json(input, kind);
  }
  function _M0FP38clhhhhhh17moon_2dcsv_2dlite3web15chart__csv__svg(input, kind) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite15chart__csv__svg(input, kind);
  }
  function _M0FP38clhhhhhh17moon_2dcsv_2dlite3web16chart__csv__html(input, kind) {
    return _M0FP28clhhhhhh17moon_2dcsv_2dlite16chart__csv__html(input, kind);
  }
  globalThis.engineName = _M0FP38clhhhhhh17moon_2dcsv_2dlite3web12engine__name;
  globalThis.auditCsvJson = _M0FP38clhhhhhh17moon_2dcsv_2dlite3web16audit__csv__json;
  globalThis.auditCsvHtml = _M0FP38clhhhhhh17moon_2dcsv_2dlite3web16audit__csv__html;
  globalThis.csvDataPassportMarkdown = _M0FP38clhhhhhh17moon_2dcsv_2dlite3web29csv__data__passport__markdown;
  globalThis.csvDataPassportJson = _M0FP38clhhhhhh17moon_2dcsv_2dlite3web25csv__data__passport__json;
  globalThis.auditDriftJson = _M0FP38clhhhhhh17moon_2dcsv_2dlite3web18audit__drift__json;
  globalThis.auditDriftMarkdown = _M0FP38clhhhhhh17moon_2dcsv_2dlite3web22audit__drift__markdown;
  globalThis.auditQualityGateJson = _M0FP38clhhhhhh17moon_2dcsv_2dlite3web26audit__quality__gate__json;
  globalThis.auditQualityGateMarkdown = _M0FP38clhhhhhh17moon_2dcsv_2dlite3web30audit__quality__gate__markdown;
  globalThis.qualityContractInferCsv = _M0FP38clhhhhhh17moon_2dcsv_2dlite3web29quality__contract__infer__csv;
  globalThis.auditQualityContractJson = _M0FP38clhhhhhh17moon_2dcsv_2dlite3web30audit__quality__contract__json;
  globalThis.auditQualityContractMarkdown = _M0FP38clhhhhhh17moon_2dcsv_2dlite3web34audit__quality__contract__markdown;
  globalThis.chartCsvJson = _M0FP38clhhhhhh17moon_2dcsv_2dlite3web16chart__csv__json;
  globalThis.chartCsvSvg = _M0FP38clhhhhhh17moon_2dcsv_2dlite3web15chart__csv__svg;
  globalThis.chartCsvHtml = _M0FP38clhhhhhh17moon_2dcsv_2dlite3web16chart__csv__html;
})();


