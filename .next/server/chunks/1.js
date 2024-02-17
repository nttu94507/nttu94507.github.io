exports.id = 1;
exports.ids = [1];
exports.modules = {

/***/ 7358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Reducers)
});

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
;// CONCATENATED MODULE: ./Reducers/probeReducer.jsx
const initialState = {
    numOfCoffee: 20,
    numOfCoffeeBean: 20,
    numOfCake: 20
};
const probeReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_PROBE_BEGIN":
            return {
                ...state,
                numOfCoffee: state.numOfCoffee + 1
            };
        default:
            return state;
    }
};
/* harmony default export */ const Reducers_probeReducer = (probeReducer);

;// CONCATENATED MODULE: ./Reducers/customerReducer.jsx
const customerReducer_initialState = {
    numOfCoffee: 20,
    numOfCoffeeBean: 20,
    numOfCake: 20
};
const customerReducer = (state = customerReducer_initialState, action)=>{
    switch(action.type){
        case "ADD_PROBE_BEGIN":
            return {
                ...state,
                numOfCoffee: state.numOfCoffee + 1
            };
        default:
            return state;
    }
};
/* harmony default export */ const Reducers_customerReducer = (customerReducer);

;// CONCATENATED MODULE: ./Reducers/index.jsx

// const { combineReducers } = require("redux");


// const { orderReducer } = require('./orderReducer')
const createRootReducer = ()=>(0,external_redux_.combineReducers)({
        probeReducer: Reducers_probeReducer,
        customerReducer: Reducers_customerReducer
    });
/* harmony default export */ const Reducers = (createRootReducer);


/***/ }),

/***/ 5879:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9605);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6346);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_3__]);
_store__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// import { AppProps } from "next/app";
// import { getLayout as getBasicLayout } from "./header/Header";
const App = ({ Component, pageProps })=>{
    const getLayout = Component.getLayout || ((page)=>page);
    return getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
        store: _store__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ saga)
});

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
;// CONCATENATED MODULE: ./saga/probe.jsx

const ADD_PROBE_BEGIN = "ADD_PROBE_BEGIN";
const ADD_PROBE_SUCCESS = "ADD_PROBE_SUCCESS";
const FETCH_PROBE_BEGIN = "FETCH_PROBE_BEGIN";
const FETCH_PROBE_SUCCESS = "FETCH_PROBE_SUCCESS";
const fetchProbeBegin = async (id)=>{
    const src = await fetch(`https://randomuser.me/api/`).then((reponse)=>{
        return reponse.json();
    }).then((result)=>{
        console.log(result);
    });
};
// const probeSaga =async()=>{
//     await takeLatest(FETCH_PROBE_BEGIN,fetchProbeBegin)
// }
function* probeSaga() {
    yield (0,effects_.takeLatest)(FETCH_PROBE_BEGIN, fetchProbeBegin);
}
/* harmony default export */ const probe = (probeSaga);

;// CONCATENATED MODULE: ./saga/index.jsx


// const rootSaga =async()=>{
//     await all([
//         probeSaga()
//     ])
// }
function* rootSaga() {
    yield (0,effects_.all)([
        probe()
    ]);
}
/* harmony default export */ const saga = (rootSaga);


/***/ }),

/***/ 6346:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7358);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5998);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4634);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5013);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([redux_saga__WEBPACK_IMPORTED_MODULE_2__]);
redux_saga__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_2__["default"])();
const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.legacy_createStore)(_Reducers__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(sagaMiddleware, (redux_logger__WEBPACK_IMPORTED_MODULE_3___default())));
// const store = legacy_createStore(reducers)
sagaMiddleware.run(_saga__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
// const createRootReducer = (history) => combineReducers({
//     router: connectRouter(history),
//     createUser: signupReducer,
//   });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9605:
/***/ (() => {



/***/ })

};
;