"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-size: 16px;\\r\\n  font-family: \\\"Roboto\\\", sans-serif;\\r\\n  color: rgb(255, 207, 35);\\r\\n  background-color: rgb(153, 58, 14);\\r\\n}\\r\\n\\r\\n#logoimg {\\r\\n  width: 75px;\\r\\n  height: 75px;\\r\\n}\\r\\n\\r\\n.break {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100vw;\\r\\n}\\r\\n\\r\\n.hiden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\nul {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na,\\r\\np {\\r\\n  text-decoration: none;\\r\\n  font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n.category {\\r\\n  font-size: 1.3rem;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  width: 80%;\\r\\n  margin: 0 auto;\\r\\n  padding: 2rem;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  width: 100%;\\r\\n  margin: 0;\\r\\n  padding: 2rem;\\r\\n  border-top: 2px solid rgb(255, 214, 66);\\r\\n}\\r\\n\\r\\n.navbar,\\r\\n.nav-list,\\r\\n#meal-details,\\r\\n.category-ingredients-wrapper,\\r\\n#links,\\r\\n#previous-comments,\\r\\n.form-comment,\\r\\n#previous-comments-container,\\r\\n#prev-comments {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.nav-item {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 100px;\\r\\n}\\r\\n\\r\\n.itemcounter,\\r\\n#comment-header {\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.nav-list {\\r\\n  width: 70%;\\r\\n  gap: 4%;\\r\\n}\\r\\n\\r\\n/* Styling comment Popup */\\r\\n\\r\\n#comment-popup,\\r\\n#meal-details,\\r\\n#previous-comments {\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.meal-name {\\r\\n  margin: 3% 0;\\r\\n}\\r\\n\\r\\n.category-ingredients-wrapper {\\r\\n  justify-content: space-between;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n#meal-details {\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\n#comment-popup {\\r\\n  border: solid;\\r\\n  width: 100%;\\r\\n  min-height: 100vh;\\r\\n  gap: 6px;\\r\\n}\\r\\n\\r\\n.cooking-instruction {\\r\\n  padding: 2%;\\r\\n  text-align: left;\\r\\n}\\r\\n\\r\\n#links {\\r\\n  width: 100%;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.image-container {\\r\\n  height: 85vh;\\r\\n  background-size: 100% 100%;\\r\\n  width: 100%;\\r\\n  background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\n.form-comment {\\r\\n  width: 60%;\\r\\n  flex-direction: column;\\r\\n  gap: 40px;\\r\\n  margin-bottom: 3%;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n#Add-comment,\\r\\n#comment-header {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#prev-comments,\\r\\nform {\\r\\n  margin-left: 3%;\\r\\n}\\r\\n\\r\\n#prev-comments {\\r\\n  flex-direction: column;\\r\\n  gap: 12px;\\r\\n}\\r\\n\\r\\n#previous-comments-container {\\r\\n  gap: 5px;\\r\\n  flex-direction: column;\\r\\n  margin-top: 5%;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea,\\r\\n#commentBtn {\\r\\n  border-radius: 10px;\\r\\n  border: 2px solid rgb(255, 214, 66);\\r\\n}\\r\\n\\r\\ninput::placeholder,\\r\\ntextarea::placeholder {\\r\\n  color: rgb(255, 214, 66);\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  width: 45%;\\r\\n  height: 40px;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#commentBtn {\\r\\n  width: 22.5%;\\r\\n  height: 40px;\\r\\n  box-shadow: 2px 2px 2px rgb(255, 214, 66);\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  width: 50%;\\r\\n  height: 200px;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.closePopUp {\\r\\n  width: 60%;\\r\\n  text-align: right;\\r\\n  margin-top: 2%;\\r\\n}\\r\\n\\r\\n.fa-xmark {\\r\\n  font-size: 2rem;\\r\\n  color: rgb(255, 207, 35);\\r\\n}\\r\\n\\r\\n#maincontainer {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.section {\\r\\n  width: 33.333333%;\\r\\n  padding: 1rem;\\r\\n  min-height: 300px;\\r\\n  max-height: 400px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.mainimage {\\r\\n  max-width: 100%;\\r\\n  max-height: 100%;\\r\\n}\\r\\n\\r\\n.nameandlikes {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: flex-start;\\r\\n  min-height: 55px;\\r\\n}\\r\\n\\r\\n.mealname {\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.likesdiv {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 0.25rem;\\r\\n  align-self: center;\\r\\n  min-width: 80px;\\r\\n}\\r\\n\\r\\n.likebutton {\\r\\n  border: 0;\\r\\n  background: none;\\r\\n  padding: none;\\r\\n  width: 1.5rem;\\r\\n  height: 1.5rem;\\r\\n  cursor: pointer;\\r\\n  color: none;\\r\\n}\\r\\n\\r\\n.likebutton:hover {\\r\\n  width: 1.8rem;\\r\\n  height: 1.8rem;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.heart {\\r\\n  width: 100%;\\r\\n  pointer-events: none;\\r\\n  height: 100%;\\r\\n  color: rgb(255, 200, 200);\\r\\n}\\r\\n\\r\\n.pressed {\\r\\n  color: rgb(255, 200, 200);\\r\\n  cursor: auto;\\r\\n}\\r\\n\\r\\n.buttonholder {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.comments,\\r\\n#commentBtn,\\r\\n.ingredients {\\r\\n  font-weight: bold;\\r\\n  font-size: 1.2rem;\\r\\n  border: 2px solid rgb(255, 214, 66);\\r\\n  border-radius: 10%;\\r\\n  box-shadow: 2px 2px 2px rgb(255, 214, 66);\\r\\n}\\r\\n\\r\\n.comments:hover,\\r\\n#commentBtn:hover,\\r\\n.ingredients:hover {\\r\\n  background-color: rgb(255, 214, 66);\\r\\n  color: rgb(153, 58, 14);\\r\\n  box-shadow: 3px 3px 3px rgb(195, 124, 91);\\r\\n}\\r\\n\\r\\n.comment-prev,\\r\\n.cooking-instruction {\\r\\n  color: tan;\\r\\n}\\r\\n\\r\\n.fa-xmark:hover,\\r\\na:hover {\\r\\n  color: rgb(168, 190, 160);\\r\\n}\\r\\n\\r\\n.comments:active,\\r\\n#commentBtn:active,\\r\\n.ingredients:active {\\r\\n  background-color: rgb(255, 214, 66);\\r\\n  color: rgb(153, 58, 14);\\r\\n}\\r\\n\\r\\n.button {\\r\\n  margin: 0.5rem;\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 768px) {\\r\\n  #prev-comments,\\r\\n  form {\\r\\n    margin-left: 0;\\r\\n  }\\r\\n\\r\\n  #meal-details {\\r\\n    width: 80%;\\r\\n  }\\r\\n\\r\\n  .form-comment {\\r\\n    width: 80%;\\r\\n  }\\r\\n\\r\\n  .closePopUp {\\r\\n    width: 80%;\\r\\n  }\\r\\n\\r\\n  .image-container {\\r\\n    height: 88vh;\\r\\n  }\\r\\n\\r\\n  .button:hover {\\r\\n    cursor: pointer;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 425px) {\\r\\n  .break {\\r\\n    display: block;\\r\\n  }\\r\\n\\r\\n  #meal-details {\\r\\n    width: 95%;\\r\\n  }\\r\\n\\r\\n  .form-comment {\\r\\n    width: 95%;\\r\\n  }\\r\\n\\r\\n  .closePopUp {\\r\\n    width: 95%;\\r\\n  }\\r\\n\\r\\n  .image-container {\\r\\n    height: 60vh;\\r\\n  }\\r\\n\\r\\n  form {\\r\\n    margin-left: 0;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  form > div {\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  input {\\r\\n    width: 100%;\\r\\n    margin: 0 auto;\\r\\n  }\\r\\n\\r\\n  textarea {\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  #commentBtn {\\r\\n    width: 35%;\\r\\n  }\\r\\n\\r\\n  .ingredients {\\r\\n    width: 60%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (min-width: 768px) {\\r\\n  #logoimg {\\r\\n    width: 150px;\\r\\n    height: 150px;\\r\\n  }\\r\\n\\r\\n  .mealname,\\r\\n  .meal-name {\\r\\n    font-size: 1.3rem;\\r\\n  }\\r\\n\\r\\n  .likebutton {\\r\\n    width: 2rem;\\r\\n    height: 2rem;\\r\\n  }\\r\\n\\r\\n  .likebutton:hover {\\r\\n    width: 2.5rem;\\r\\n    height: 2.5rem;\\r\\n  }\\r\\n\\r\\n  .section {\\r\\n    padding: 1.3rem;\\r\\n    max-height: none;\\r\\n  }\\r\\n\\r\\n  .nameandlikes {\\r\\n    min-height: 70px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 430px) {\\r\\n  header {\\r\\n    padding: 1rem 0;\\r\\n    margin: 0;\\r\\n    align-self: center;\\r\\n  }\\r\\n\\r\\n  a {\\r\\n    font-size: 1rem;\\r\\n  }\\r\\n\\r\\n  .section {\\r\\n    min-height: 250px;\\r\\n    padding: 0.5rem;\\r\\n  }\\r\\n\\r\\n  .mealname {\\r\\n    font-size: 0.8rem;\\r\\n  }\\r\\n\\r\\n  .likes {\\r\\n    font-size: 0.8rem;\\r\\n  }\\r\\n\\r\\n  .nameandlikes {\\r\\n    flex-direction: column;\\r\\n    justify-content: space-between;\\r\\n    height: 50%;\\r\\n  }\\r\\n\\r\\n  .button {\\r\\n    padding: 0.25rem;\\r\\n    font-size: 0.8rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_fetcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fetcher.js */ \"./src/modules/fetcher.js\");\n/* harmony import */ var _modules_getlike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getlike.js */ \"./src/modules/getlike.js\");\n/* harmony import */ var _modules_addComment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/addComment.js */ \"./src/modules/addComment.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst logoholder = document.querySelector('#logoimg');\r\n\r\nlogoholder.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\nwindow.addEventListener('load', () => {\r\n  (0,_modules_fetcher_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  (0,_modules_getlike_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _commentPopUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentPopUp.js */ \"./src/modules/commentPopUp.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n\n\nconst commentWrapper = document.getElementById('comment-popup');\nconst previousComment = document.getElementById('prev-comments');\nconst userName = document.getElementById('name');\nconst comment = document.getElementById('comment');\nconst commentPopUpContainer = document.getElementById('body');\nconst mealsDatails = document.getElementById('meal-details');\nconst maincontainer = document.getElementById('maincontainer');\nconst header = document.getElementById('header');\nconst footer = document.getElementById('footer');\nconst closeBtn = document.getElementById('closeBtn');\n\nconst getDataFromInvolvementApi = async (mealId) => {\n  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TUbnIqBO6HOTZf6v0kyK/comments?item_id=${mealId}`)\n    .then((rawData) => rawData.json())\n    .then((commentData) => {\n      previousComment.innerHTML = '';\n      commentData.forEach((message, index) => {\n        previousComment.innerHTML += `<li class=\"comment-prev\">${commentData[index].creation_date} ${commentData[index].username}:<br class=\"break\"> ${commentData[index].comment} </li>`;\n      });\n      _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__.counter.innerHTML = `(${(0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__.commentCounter)(commentData)})`;\n    });\n};\n\nconst sendData = async (mealId) => {\n  const data = {\n    item_id: mealId,\n    username: userName.value,\n    comment: comment.value,\n  };\n\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TUbnIqBO6HOTZf6v0kyK/comments/', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(data),\n  });\n\n  getDataFromInvolvementApi(mealId);\n\n  userName.value = '';\n  comment.value = '';\n};\n\nlet id = 0;\n// Add event listener to booth Add comment button and comment button on home page\ncommentPopUpContainer.addEventListener('click', (e) => {\n  const btnId = parseInt(e.target.id, 10);\n  if (e.target.classList.contains('comments')) {\n    commentWrapper.classList.remove('hiden');\n    commentWrapper.style.display = 'flex';\n    maincontainer.style.display = 'none';\n    header.style.display = 'none';\n    footer.style.display = 'none';\n    getDataFromInvolvementApi(btnId);\n    mealsDatails.innerHTML = '';\n    (0,_commentPopUp_js__WEBPACK_IMPORTED_MODULE_0__.getData)(btnId);\n    id = btnId;\n  } else if (e.target.classList.contains('cmtBtn')) {\n    if (userName.value !== '' && comment.value !== '') {\n      sendData(id);\n    }\n  }\n});\n\n// Adding Event listener to close button on comment Popup\ncloseBtn.addEventListener('click', () => {\n  commentWrapper.style.display = 'none';\n  maincontainer.style.display = 'flex';\n  header.style.display = 'block';\n  footer.style.display = 'flex';\n});\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/addComment.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentCounter\": () => (/* binding */ commentCounter),\n/* harmony export */   \"counter\": () => (/* binding */ counter)\n/* harmony export */ });\nconst counter = document.getElementById('no-of-comments');\nconst commentCounter = (arrOfComments) => arrOfComments.length;\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/commentPopUp.js":
/*!*************************************!*\
  !*** ./src/modules/commentPopUp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentPopUp\": () => (/* binding */ commentPopUp),\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nconst commentPopUp = document.getElementById('meal-details');\n\nconst render = (meal) => {\n  const PopUpbody = `\n                    <div class=\"image-container\" style=\"background-image:url(${meal[0].strMealThumb})\"></div>\n                    <h2 class=\"meal-name\">${meal[0].strMeal}</h2>\n                    <div class=\"category-ingredients-wrapper category\">\n                    <p id=\"category\">\n                      Category:\n                      ${meal[0].strCategory}\n                    </p>\n                    <button type=\"button\" class=\"ingredients\">Ingredients and Measurement(s)</button>\n                    </div>\n                    <p class=\"cooking-instruction\">\n                      <small class=instruction\" style=\"color: cyan\">COOKING INSTRUCTION:</small>\n                      ${meal[0].strInstructions}\n                    </p>\n                 <div id=\"links\"> \n                    <a id=\"source\" href=${meal[0].strSource}>View Source</a>\n                    <a id=\"youtube-link\" href=${meal[0].strYoutube}>Watch on youtube</a>\n                 </div>`;\n\n  return PopUpbody;\n};\n\nconst getData = async (id) => {\n  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)\n    .then((rawData) => rawData.json())\n    .then((mealData) => {\n      commentPopUp.innerHTML += render(mealData.meals);\n    });\n};\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/commentPopUp.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _enablebuttons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enablebuttons.js */ \"./src/modules/enablebuttons.js\");\n/* harmony import */ var _itemcounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemcounter.js */ \"./src/modules/itemcounter.js\");\n\n\n\n\nconst display = (array) => {\n  const container = document.querySelector('#maincontainer');\n  array.forEach((item) => {\n    container.innerHTML += `<section class=\"section\">\n    <img class=\"mainimage\" src=${item.strMealThumb} alt=${item.strMeal}>\n    <div class=\"nameandlikes\">\n    <h2 class=\"mealname\">${item.strMeal}</h2>\n    <div class=\"likesdiv\">\n    <button id=\"like${item.idMeal}\" class=\"likebutton\" type=\"button\" title=\"Like\">\n    <ion-icon id=\"heart${item.idMeal}\" class=\"heart\" name=\"heart-outline\"></ion-icon>\n    </button>\n    <p class=\"likes\" id=\"countlike${item.idMeal}\"></p>\n    </div>\n    </div>\n    <div class=\"buttonholder\">\n    <button class=\"comments button\" id=${item.idMeal} type=\"button\">Comments</button>\n    </div>\n    </section>`;\n  });\n  (0,_enablebuttons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_itemcounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/enablebuttons.js":
/*!**************************************!*\
  !*** ./src/modules/enablebuttons.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likesend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likesend.js */ \"./src/modules/likesend.js\");\n/* harmony import */ var _getlike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getlike.js */ \"./src/modules/getlike.js\");\n\n\n\n\nconst enableButton = () => {\n  const likebuttons = document.querySelectorAll('.likebutton');\n  likebuttons.forEach((button) => {\n    const item = window.localStorage.getItem(button.id);\n    if (item === null) {\n      button.addEventListener('click', async (e) => {\n        const heart = e.target.querySelector('.heart');\n        const likecount = document.querySelector(`#count${e.target.id}`);\n        likecount.style.color = 'rgb(255, 200, 200)';\n        heart.setAttribute('name', 'heart');\n        button.classList.add('pressed');\n        await (0,_likesend_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e.target.id);\n        (0,_getlike_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        window.localStorage.setItem(`${e.target.id}`, 'clicked');\n      },\n      {\n        once: true,\n      });\n    } else if (item === 'clicked') {\n      const heart = button.querySelector('.heart');\n      const likecount = document.querySelector(`#count${button.id}`);\n      likecount.style.color = 'rgb(255, 200, 200)';\n      heart.setAttribute('name', 'heart');\n      button.classList.add('pressed');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enableButton);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/enablebuttons.js?");

/***/ }),

/***/ "./src/modules/fetcher.js":
/*!********************************!*\
  !*** ./src/modules/fetcher.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n\n\nconst fetcher = async () => {\n  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast', {\n    method: 'GET',\n  });\n  const result = response.json();\n  result.then((object) => (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(object.meals));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/fetcher.js?");

/***/ }),

/***/ "./src/modules/getlike.js":
/*!********************************!*\
  !*** ./src/modules/getlike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likeshow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeshow.js */ \"./src/modules/likeshow.js\");\n\r\n\r\nconst getLike = async () => {\r\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TUbnIqBO6HOTZf6v0kyK/likes/', {\r\n    method: 'GET',\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  })\r\n    .then((response) => response.json())\r\n    .then((json) => (0,_likeshow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(json));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLike);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/getlike.js?");

/***/ }),

/***/ "./src/modules/itemcounter.js":
/*!************************************!*\
  !*** ./src/modules/itemcounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemcounter = () => {\r\n  const display = document.querySelector('#chickencounter');\r\n  const sections = document.querySelectorAll('.section');\r\n  display.innerHTML = `(${sections.length})`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemcounter);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/itemcounter.js?");

/***/ }),

/***/ "./src/modules/likesend.js":
/*!*********************************!*\
  !*** ./src/modules/likesend.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst likeSend = async (id) => {\r\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TUbnIqBO6HOTZf6v0kyK/likes/', {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likeSend);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/likesend.js?");

/***/ }),

/***/ "./src/modules/likeshow.js":
/*!*********************************!*\
  !*** ./src/modules/likeshow.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst likeShow = (array) => {\n  const myArray = array.filter((object) => object.item_id !== '');\n  myArray.forEach((object) => {\n    const likes = document.querySelector(`#count${object.item_id}`);\n    if (object.likes === null) {\n      likes.innerHTML = '0 Likes';\n    } else {\n      likes.innerHTML = `${object.likes} Likes`;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likeShow);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/likeshow.js?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9bd4378cedd6fd9fa3c5.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/logo.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);