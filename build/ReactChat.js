"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _react = _interopRequireWildcard(require("react"));
var _reactInfiniteScrollComponent = _interopRequireDefault(require("react-infinite-scroll-component"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var imageComponent = function imageComponent(url, className, icon) {
  if (url == "" || url == null || url == undefined) {
    return /*#__PURE__*/_react["default"].createElement("img", {
      className: className,
      src: icon,
      alt: "IMAGE"
    });
  }
  return /*#__PURE__*/_react["default"].createElement("img", {
    className: className,
    src: url,
    alt: "IMAGE"
  });
};
var getFullDateAndHour = function getFullDateAndHour(date) {
  return date ? date.substr(0, 16).replace("T", " ") : null;
};
var conversationTypeDetector = function conversationTypeDetector(message, type) {
  if (type === "IMAGE") return imageComponent(message);
  if (type === "TEXT" && message.length <= 39) return /*#__PURE__*/_react["default"].createElement("span", null, " ", message);
  if (type === "TEXT" && message.length >= 40) return /*#__PURE__*/_react["default"].createElement("span", null, message.slice(0, 40), " ", /*#__PURE__*/_react["default"].createElement("span", null, " more "));
  if (type === "AUDIO") return /*#__PURE__*/_react["default"].createElement("audio", {
    controls: true
  }, /*#__PURE__*/_react["default"].createElement("source", {
    src: message,
    type: "audio/ogg"
  }));
  if (type === "VIDEO") return /*#__PURE__*/_react["default"].createElement("video", {
    height: "100%",
    width: "100%",
    controls: true
  }, /*#__PURE__*/_react["default"].createElement("source", {
    src: message,
    type: "video/ogg"
  }));
};
var ReactChat = function ReactChat(_ref) {
  var totalContents = _ref.totalContents,
    disableProfileHeader = _ref.disableProfileHeader,
    handleGetUserConversation = _ref.handleGetUserConversation,
    conversationList = _ref.conversationList,
    conversationContents = _ref.conversationContents,
    wallpaper = _ref.wallpaper,
    ownerId = _ref.ownerId,
    disableContextMenu = _ref.disableContextMenu,
    disableProfileDetailButton = _ref.disableProfileDetailButton,
    rightBoxColors = _ref.rightBoxColors,
    leftBoxColors = _ref.leftBoxColors,
    conversationHeaderStyle = _ref.conversationHeaderStyle,
    height = _ref.height,
    icons = _ref.icons;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    hasMore = _useState2[0],
    setHasMore = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loadMoreTop: false,
      loadMoreBottom: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    scrollLoadMore = _useState4[0],
    setScrollLoadMore = _useState4[1]; // check from  totalCount
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    conversationContentsData = _useState6[0],
    setConversationContentsData = _useState6[1];
  console.log("EVERYBODY LIES", conversationContentsData);
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showDetail = _useState8[0],
    setShowDetail = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    closeList = _useState10[0],
    setCloseList = _useState10[1];
  var _useState11 = (0, _react.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    searchUser = _useState12[0],
    setSearchUser = _useState12[1];
  var _useState13 = (0, _react.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    openConversation = _useState14[0],
    setOpenConversation = _useState14[1];
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    conversationUsers = _useState16[0],
    setConversationUsers = _useState16[1]; // One of the click conversation this will be set

  var _useState17 = (0, _react.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    filteredConversationList = _useState18[0],
    setFilteredConversationList = _useState18[1];
  var _useState19 = (0, _react.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    showBuble = _useState20[0],
    setShowBubble = _useState20[1];
  var _useState21 = (0, _react.useState)({
      pageX: "",
      pageY: ""
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    mouseLocation = _useState22[0],
    setMouseLocation = _useState22[1];
  var _useState23 = (0, _react.useState)({
      type: "",
      seenUsers: []
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    openModal = _useState24[0],
    setOpenModal = _useState24[1];

  //State update for a when the user scroll
  (0, _react.useEffect)(function () {
    setScrollLoadMore(scrollLoadMore);
  }, [scrollLoadMore]);

  //State update for a when the user  get new messages  or current
  (0, _react.useEffect)(function () {
    setConversationContentsData(conversationContentsData.concat(conversationContents));
  }, [conversationContents]);

  //Lock the body scroll
  (0, _react.useLayoutEffect)(function () {
    if (typeof window !== "undefined") {
      if (showBuble !== "") {
        // Get original value of body overflow
        var originalStyle = window.getComputedStyle(document.body).overflow;
        // Prevent scrolling on mount
        document.body.style.overflow = "hidden";
        // Re-enable scrolling when component unmounts
        return function () {
          return document.body.style.overflow = originalStyle;
        };
      } else document.body.style.overflow = "scroll";
      return function () {
        return document.body.style.overflow = "scroll";
      };
    }
  }, [showBuble]); // Empty array ensures effect is only run on mount and unmount

  // Escape modal hook
  (0, _react.useEffect)(function () {
    if (typeof window !== "undefined") {
      document.addEventListener("keydown", escModal, false);
      return function () {
        document.removeEventListener("keydown", escModal, false);
      };
    }
  }, [showBuble]);

  /* Search User Hook  */
  (0, _react.useEffect)(function () {
    if (searchUser !== "" && conversationList.length > 0) {
      searchFunction();
    } else {
      setFilteredConversationList(null);
    }
  }, [searchUser]);
  var searchFunction = function searchFunction() {
    var filtered = conversationList.map(function (data) {
      return _objectSpread(_objectSpread({}, data), {}, {
        users: data.users.filter(function (_ref2) {
          var username = _ref2.username,
            _id = _ref2._id;
          return username.toLowerCase().includes(searchUser.toLowerCase()) && _id !== ownerId;
        })
      });
    });
    setFilteredConversationList(filtered.filter(function (data) {
      return data.users.length > 0;
    }));
  };

  /* ESCAPE ON MODAL  WITH ESC */
  var escModal = (0, _react.useCallback)(function (event) {
    if (event.key === "Escape") {
      setOpenModal(false);
    }
  }, []);

  /* Scroll for reply messages  */
  var scrollReplyMessage = function scrollReplyMessage(id) {
    if (typeof window !== "undefined") {
      var section = document.getElementById("".concat(id));
      if (!!section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  };

  /* Bubble function  */
  var handleClick = function handleClick(e, id) {
    if (disableContextMenu) return true;
    if (e.type === "click") {
      setShowBubble("");
    } else if (e.type === "contextmenu") {
      e.preventDefault();
      e.stopPropagation();
      setMouseLocation({
        pageX: "".concat(e.clientX - 80, "px"),
        pageY: "".concat(e.clientY, "px")
      });
      setShowBubble(id);
    }
  };
  var clearStates = function clearStates() {
    setShowBubble("");
    setMouseLocation({
      pageX: "",
      pageY: ""
    });
    setOpenModal({
      type: "",
      seenUsers: []
    });
  };

  /*Modal Component  */
  var seenUsersModal = function seenUsersModal() {
    if (openModal.type === "MESSAGE_DETAIL") {
      return /*#__PURE__*/_react["default"].createElement("div", {
        onClick: function onClick() {
          return clearStates();
        },
        className: "modal-message-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-message-wrapper"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-message-detail-title"
      }, "Seen by ", openModal.seenUsers.length, " users"), openModal.seenUsers.length >= 1 ? openModal.seenUsers.map(function (_ref3) {
        var _id = _ref3._id,
          profileImage = _ref3.profileImage,
          username = _ref3.username;
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: _id,
          style: {
            padding: "20px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }
        }, imageComponent(profileImage, "chat-avatar"), /*#__PURE__*/_react["default"].createElement("span", {
          style: {
            marginLeft: "10px"
          }
        }, username, " "), /*#__PURE__*/_react["default"].createElement("span", {
          style: {
            marginLeft: "auto",
            color: "grey"
          }
        }, getFullDateAndHour("2022-10-18T14:23:49.086682675Z")));
      }) : /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          padding: "20px"
        }
      }, " No One Seen Yet ")));
    }
  };
  var profileDetailComponent = function profileDetailComponent() {
    return conversationUsers.length == 0 ? "" : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
      onClick: function onClick() {
        return setShowDetail(!showDetail);
      },
      style: {
        display: disableProfileDetailButton ? "none" : ""
      },
      className: "chat-profile-detail-button"
    }, showDetail ? ">" : "<"), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: showDetail ? "" : "none"
      },
      className: "chat-profile"
    }, conversationUsers.map(function (_ref4) {
      var profileImage = _ref4.profileImage,
        username = _ref4.username,
        _id = _ref4._id,
        status = _ref4.status;
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: _id,
        style: {
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderBottom: "1px solid rgba(145, 158, 171, 0.24)"
        }
      }, imageComponent(profileImage, "chat-avatar", icons.profileIcon), /*#__PURE__*/_react["default"].createElement("span", null, " ", username));
    })));
  };
  var chatList = function chatList() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        overflow: "scroll",
        height: "90%"
      }
    }, (!filteredConversationList ? conversationList : filteredConversationList).map(function (_ref5) {
      var users = _ref5.users,
        type = _ref5.type,
        lastMessage = _ref5.lastMessage,
        lastMessageCreatedAt = _ref5.lastMessageCreatedAt,
        _id = _ref5._id;
      return /*#__PURE__*/_react["default"].createElement("div", {
        onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  setConversationUsers(users);
                  setOpenConversation(_id);
                  setCloseList(!closeList);
                  setConversationContentsData([]);
                  if (!(openConversation !== _id)) {
                    _context.next = 9;
                    break;
                  }
                  _context.next = 7;
                  return handleGetUserConversation(_id);
                case 7:
                  _context.next = 10;
                  break;
                case 9:
                  "";
                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })),
        key: _id,
        style: {
          background: openConversation === _id ? "repeating-linear-gradient(180deg, rgb(34 96 230 / 56%), transparent 100px)" : "transparent",
          color: openConversation === _id ? "white" : "black"
        },
        className: "chat-list-inside"
      }, users.map(function (data) {
        return type == "SINGLE" && ownerId !== data._id ? /*#__PURE__*/_react["default"].createElement("div", null, imageComponent(data.profileImage, openConversation === _id ? "chat-avatar open" : "chat-avatar", icons.profileIcon), /*#__PURE__*/_react["default"].createElement("div", {
          className: "chat-list-profile"
        }, /*#__PURE__*/_react["default"].createElement("span", null, data.username), conversationTypeDetector(lastMessage.type === "TEXT" ? lastMessage.content.slice(0, 14) + "..." : lastMessage.content, lastMessage.type))) : "" // @Todo  What if group ?
        ;
      }));
    }));
  };

  var search = function search() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "search-container"
    }, /*#__PURE__*/_react["default"].createElement("input", {
      onChange: function onChange(e) {
        return setSearchUser(e.target.value);
      }
      // style={{ display: closeList ? "none" : "" }}
      ,
      className: "search",
      placeholder: "Search Content..."
    }));
  };

  // @ todo make a dynamic not a  static
  var conversationHeader = function conversationHeader() {
    return conversationUsers.length == 0 ? "" : /*#__PURE__*/_react["default"].createElement("div", {
      style: _objectSpread(_objectSpread({}, conversationHeaderStyle), {}, {
        display: disableProfileHeader ? "none" : "",
        overflow: "hidden"
      }),
      className: "chat-header"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        cursor: "pointer",
        marginRight: "10px "
      },
      onClick: function onClick() {
        return setCloseList(!closeList);
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "arrow"
    }, " ")), imageComponent("https://jupap-backend.s3.eu-central-1.amazonaws.com/jupap-posts/19be69f4-78f1-40a6-aef6-00162b2de369e7bc19c4-05dd-4c89-8633-9acb987c614enatal-sofia-4-1431300.jpeg", "chat-avatar"), /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        marginLeft: "10px"
      }
    }, " Batuhan "));
  };

  // In the users array taking parameters actually taking field
  var messageContentsUsersInformation = function messageContentsUsersInformation(wantedParam, id) {
    var data = conversationUsers.filter(function (data) {
      return data._id == id;
    });
    return data.length == 0 ? "" : data[0][wantedParam];
  };
  var replyUsername = function replyUsername(reply) {
    var _user$;
    var user = conversationUsers.filter(function (_ref7) {
      var _id = _ref7._id;
      return _id == (reply === null || reply === void 0 ? void 0 : reply.sender);
    });
    return (_user$ = user[0]) === null || _user$ === void 0 ? void 0 : _user$.username;
  };
  var replyMessages = function replyMessages(reply, sender) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: reply ? "" : "none",
        flexDirection: (reply === null || reply === void 0 ? void 0 : reply.type) === "IMAGE" ? "" : "column-reverse",
        alignItems: (reply === null || reply === void 0 ? void 0 : reply.type) === "IMAGE" ? "" : "baseline"
      },
      onClick: function onClick() {
        return scrollReplyMessage(reply === null || reply === void 0 ? void 0 : reply._id);
      },
      className: "conversation-reply"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "conversation-reply-stick",
      style: {
        background: sender === ownerId ? rightBoxColors === null || rightBoxColors === void 0 ? void 0 : rightBoxColors.stickColor : leftBoxColors === null || leftBoxColors === void 0 ? void 0 : leftBoxColors.stickColor
      }
    }), conversationTypeDetector(reply === null || reply === void 0 ? void 0 : reply.content, reply === null || reply === void 0 ? void 0 : reply.type), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "5px"
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        color: sender === ownerId ? rightBoxColors === null || rightBoxColors === void 0 ? void 0 : rightBoxColors.textColor : leftBoxColors === null || leftBoxColors === void 0 ? void 0 : leftBoxColors.textColor
      }
    }, replyUsername(reply)), /*#__PURE__*/_react["default"].createElement("span", {
      className: "caption",
      style: {
        color: sender === ownerId ? rightBoxColors === null || rightBoxColors === void 0 ? void 0 : rightBoxColors.captionColor : leftBoxColors === null || leftBoxColors === void 0 ? void 0 : leftBoxColors.captionColor
      }
    }, (reply === null || reply === void 0 ? void 0 : reply.caption.length) > 20 ? (reply === null || reply === void 0 ? void 0 : reply.caption.slice(0, 20)) + "..." : reply === null || reply === void 0 ? void 0 : reply.caption)));
  };
  var handleScroll = function handleScroll(e) {
    var top = e.target.scrollHeight + e.target.scrollTop <= e.target.clientHeight;
    var bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight;
    if (bottom || e.target.scrollTop === 0.5 || e.target.scrollTop === 0 || top) setScrollLoadMore({
      loadMoreTop: top || e.target.scrollTop === 0,
      loadMoreBottom: bottom || e.target.scrollTop === 0.5,
      pageOrder: top || e.target.scrollTop === 0 ? "scrollToTop" : "scrollToBottom"
    });
  };
  var loadMoreConversation = function loadMoreConversation() {
    //totalCount needed
    if (conversationContentsData.length >= 500) {
      setHasMore(false);
      return;
    }
    console.log("%cSCROLL  lotuses", "font-size:30px;color:yellow", scrollLoadMore);
    if (scrollLoadMore.loadMoreTop || scrollLoadMore.loadMoreBottom) {
      setTimeout(function () {
        // need api  and must be came from prop @Todo
        setConversationContentsData(scrollLoadMore.loadMoreBottom ? conversationContentsData.concat([{
          caption: "",
          content: "BOM BOM BAKUDAAAAAN !! ! ! !",
          conversation: "63774a368a348850a4de6876",
          createdAt: "2022-11-18T11:11:26.172Z",
          info: null,
          isCleared: [],
          isDeleted: [],
          isSeen: ["63774a0ea8adb0ad8120a59a"],
          reply: null,
          sender: "63772cc717255af340a1db29",
          type: "TEXT",
          _id: Math.random() * 1000
        }]) : [{
          caption: "",
          content: " BATUUU !! ! ! !",
          conversation: "63774a368a348850a4de6876",
          createdAt: "2022-11-18T11:11:26.172Z",
          info: null,
          isCleared: [],
          isDeleted: [],
          isSeen: ["63774a0ea8adb0ad8120a59a"],
          reply: null,
          sender: "63772cc717255af340a1db29",
          type: "TEXT",
          _id: Math.random() * 1000
        }].concat(conversationContentsData));
      }, 2500);
    }
  };
  var messageContents = function messageContents() {
    // const scroll = useScrollHandler(999);
    // console.log("asdsa", scroll);
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        background: wallpaper ? "url(".concat(wallpaper, ")") : "white",
        borderRadius: "0px 11px 0px 0px"
      },
      className: "conversation"
    }, conversationHeader(), /*#__PURE__*/_react["default"].createElement("div", {
      onScroll: function onScroll(e) {
        return handleScroll(e);
      },
      id: "scrollableDiv",
      style: {
        overflow: showBuble ? "hidden" : "scroll",
        height: "90%",
        display: "flex",
        flexDirection: scrollLoadMore.loadMoreBottom // problem here !!!!!!!!
        ? "column" : "column-reverse"
      }
    }, conversationUsers.length == 0 ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "start-conversation-container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _conversationList$, _conversationList$2, _conversationList$3;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(conversationList.length !== 0)) {
                  _context2.next = 5;
                  break;
                }
                setConversationUsers((_conversationList$ = conversationList[0]) === null || _conversationList$ === void 0 ? void 0 : _conversationList$.users);
                setOpenConversation((_conversationList$2 = conversationList[0]) === null || _conversationList$2 === void 0 ? void 0 : _conversationList$2._id);
                _context2.next = 5;
                return handleGetUserConversation((_conversationList$3 = conversationList[0]) === null || _conversationList$3 === void 0 ? void 0 : _conversationList$3._id);
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })),
      className: "start-conversation-items"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "Start"), /*#__PURE__*/_react["default"].createElement("span", null, " Conversation"))) : !!conversationContentsData ? /*#__PURE__*/_react["default"].createElement(_reactInfiniteScrollComponent["default"], {
      next: function next() {
        return loadMoreConversation();
      },
      dataLength: conversationContentsData.length,
      hasMore: true // when the totalcount equal to contents lenght become false
      ,
      scrollableTarget: "scrollableDiv"
      // initialScrollY={99999}
      ,
      inverse: scrollLoadMore.loadMoreBottom ? false : true,
      loader: /*#__PURE__*/_react["default"].createElement("p", {
        className: "chat-spinner",
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      }),
      endMessage: /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          overflowY: "scroll",
          position: "absolute",
          zIndex: 0,
          top: "10px",
          left: "40%"
        }
      }, /*#__PURE__*/_react["default"].createElement("h4", null, "You have seen all messages"))
    }, conversationContentsData.map(function (_ref9) {
      var _id = _ref9._id,
        content = _ref9.content,
        type = _ref9.type,
        caption = _ref9.caption,
        sender = _ref9.sender,
        reply = _ref9.reply,
        isSeen = _ref9.isSeen,
        createdAt = _ref9.createdAt;
      return /*#__PURE__*/_react["default"].createElement("div", {
        onContextMenu: function onContextMenu(e) {
          return handleClick(e, _id);
        },
        onClick: function onClick(e) {
          return handleClick(e);
        },
        style: {
          padding: "24px",
          background: showBuble === _id ? "#8080800f" : ""
        },
        className: sender === ownerId ? "conversation-right" : "conversation-left",
        id: _id,
        key: _id
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "bubble-menu-wrapper",
        style: {
          top: mouseLocation.pageY,
          left: mouseLocation.pageX,
          display: showBuble === _id ? "block" : "none"
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        onClick: function onClick() {
          return setOpenModal({
            type: "MESSAGE_DETAIL",
            seenUsers: conversationUsers.filter(function (user) {
              return isSeen.includes(user._id);
            })
          });
        },
        className: "bubble-menu"
      }, imageComponent("", "bubble-menu-icon", icons.informationIcon), "Information")), imageComponent(messageContentsUsersInformation("profileImage", sender), "chat-avatar", icons.profileIcon), /*#__PURE__*/_react["default"].createElement("div", {
        className: "conversation-container"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          marginLeft: sender === ownerId ? "auto" : "",
          justifyContent: "space-between",
          marginBottom: "10px"
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: "flex",
          flexDirection: sender === ownerId ? "row-reverse" : "row"
        }
      }, messageContentsUsersInformation("username", sender), /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          marginRight: "10px",
          marginLeft: "10px"
        }
      }, (0, _moment["default"])(new Date(createdAt)).fromNow()))), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          backgroundColor: sender === ownerId ? rightBoxColors === null || rightBoxColors === void 0 ? void 0 : rightBoxColors.boxColor : leftBoxColors === null || leftBoxColors === void 0 ? void 0 : leftBoxColors.boxColor
        },
        className: "conversation-box"
      }, replyMessages(reply, sender), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          color: sender === ownerId ? rightBoxColors === null || rightBoxColors === void 0 ? void 0 : rightBoxColors.textColor : leftBoxColors === null || leftBoxColors === void 0 ? void 0 : leftBoxColors.textColor,
          padding: sender === ownerId && (reply === null || reply === void 0 ? void 0 : reply.type) === "IMAGE" ? "0px 0px 0px 2px" : ""
        }
      }, conversationTypeDetector(content, type)), /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          color: sender === ownerId ? rightBoxColors === null || rightBoxColors === void 0 ? void 0 : rightBoxColors.textColor : leftBoxColors === null || leftBoxColors === void 0 ? void 0 : leftBoxColors.textColor
        }
      }, caption))));
    })) : ""));
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: height
    },
    className: "chat"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "chat-container"
  }, profileDetailComponent(), messageContents()), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: closeList ? "71px" : "300px"
    },
    className: "chat-list-container  ".concat(closeList ? "closeList" : "", " ")
  }, /*#__PURE__*/_react["default"].createElement("div", null, search()), chatList()), seenUsersModal()));
};
ReactChat.PropTypes = {
  ownerId: _propTypes["default"].string.isRequired,
  conversationContents: _propTypes["default"].array.isRequired,
  conversationList: _propTypes["default"].array.isRequired,
  handleGetUserConversation: _propTypes["default"].func.isRequired,
  totalContents: _propTypes["default"].string.isRequired,
  totalConversationList: _propTypes["default"].string.isRequired,
  wallpaper: _propTypes["default"].string,
  disableContextMenu: _propTypes["default"].bool,
  disableProfileDetailButton: _propTypes["default"].bool,
  disableProfileHeader: _propTypes["default"].bool,
  conversationHeaderStyle: _propTypes["default"].exact({
    background: _propTypes["default"].string,
    seenIcon: _propTypes["default"].string,
    informationIcon: _propTypes["default"].string
  }),
  icons: _propTypes["default"].exact({
    profileIcon: _propTypes["default"].string,
    seenIcon: _propTypes["default"].string,
    informationIcon: _propTypes["default"].string
  }),
  height: _propTypes["default"].string,
  rightBoxColors: _propTypes["default"].exact({
    boxColor: _propTypes["default"].string,
    stickColor: _propTypes["default"].string,
    textColor: _propTypes["default"].string,
    captionColor: _propTypes["default"].string
  }),
  leftBoxColors: _propTypes["default"].exact({
    boxColor: _propTypes["default"].string,
    stickColor: _propTypes["default"].string,
    textColor: _propTypes["default"].string,
    captionColor: _propTypes["default"].string
  })
};
var _default = ReactChat;
exports["default"] = _default;