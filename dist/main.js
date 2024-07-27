/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/PlayfairDisplay-Regular.ttf */ "./src/fonts/PlayfairDisplay-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/sofiapro-light.otf */ "./src/fonts/sofiapro-light.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/playfair-italic.ttf */ "./src/fonts/playfair-italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg2.png */ "./src/images/bg2.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: playfair;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___})
}
 
@font-face {
    font-family: sofia;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
    font-family: playfair-italic;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

@keyframes scroll {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    height: 100vh;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size: cover;
    background-attachment: fixed;
    font-family: sofia;
    background-position: center;
}


header {
    display: flex;
    justify-content: space-between;
    padding: 50px 100px;
}

.healthcare {
    font-family: playfair-italic;
}

nav {
    display: flex;
    align-items: center;
    color: #F6F6F6;
    gap: 80px;
    font-weight: lighter;
    font-size: 1.25em;
}

nav > * {
    opacity: 70%;
}

nav > *:hover {
    cursor: pointer;
    border-bottom: 2px solid gray;
    font-weight: bold;
    opacity: 100%;
}

header button {
    color: #F6F6F6;
    background-color: transparent;
    border-style: none;
    font-size: 1.25rem;
    font-family: inherit;
}

.nexus-pulse {
    font-family: playfair;
    letter-spacing: -4px;
    font-size: 3em;
    color: #E1EEED;
}

header img {
    width: 230px;
}


.register-button,
.login-form {
    background-color: #00625C;
    color: #ffffff;
}

.connect-button:hover,
.login-form:hover {
    background-color: #00524D; 
    cursor: pointer;
}

#content {
    display: flex;
    color: #E1EEED;
    align-items: center;
}

.hero {
    font-family: playfair;
    font-weight: 500;
    margin-bottom: 10px;
    text-align: center;
    font-size: 5em;
}

.sub-hero {
    margin-bottom: 20px;
    font-size: 1.25em;
    padding: 16px;
    opacity: 80%;
}

.bottom-content {
    height: fit-content;
    background-color: #ffffff;
    display: flex;
    gap: 20px;
    justify-content: space-around;
}

.left {
    display: flex;
    align-items: center;
    width: 60%;
    text-align: center;
}

.left-img img {
    width: 400px;
    height: 350px;
    border-radius: 20px;
}

.left-img {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 25px;
    align-items: end;
}

.right-img {
    width: 40%;
}

.right-img img{
    width: 400px;
    height: 600px;
    border-radius: 20px;
}

.about-us-text {
    color: #7D7D7D;
    font-family: sofia;
    font-size: 2em;
    gap: 20px;
    display: flex;
    margin-bottom: 20px;
    font-weight: bold;
    align-items: center;
}

.dash {
    width: 400px;
}

.about-header {
    color: #6ABCB8;
    margin-bottom: 30px;
}

.right > p {
    font-family: sofia;
}

.right {
    display: flex;
    flex-direction: column;
    width: 40%;
}

.about-header {
    font-size: 4em;
    font-weight: 600;
}

em {
    font-weight: 600;
    font-family: playfair-italic;
    color: #00625C;
}

.right > p {
    font-size: 2em;
    width: 620px;
    text-align: left;
    letter-spacing: -.5px;
}

.key-features-container {
    padding: 100px 150px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    gap: 24px;
    background-color: #00625C;
}

.icon-container {
    width: 120px;
    height: 100px;
    background-color: #f6f6f6;
    position: absolute;
    margin-bottom: 350px;
    left: 0;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.key-features-container h2{
    font-size: 2em;
    letter-spacing: 5px;
    color: #F6F6F6;
}

.key-features-container > .header {
    display: flex;
    align-items: center;
    gap: 20px;
}

.key-features-container h3{
    font-size: 2.5em;
    color: #00625C;
    font-family: playfair-italic;
}

.key-features-container > .header img {
    width: 500px;
}

.key-features-container p{
    font-size: 1.5em;
    color: #333333;
    margin: 8px;
}

.key-features-collection{
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-top: 80px;
}

.key-features-card {
    width: 30%;
    height: 100%;
    border-radius: 16px;
    display: flex;
    position: relative;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: 2%;
    gap: 30px;
    background-color: #f6f6f6;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.key-features-card h3{
    font-size: 2.5em;
    height: 30%;
}

.key-features-card p {
    padding: 0 30px;
}

.interoperability {
    padding-top: 30px;
}

.team-container {
    width: 100%;
    height: 80vh;
    color: #6ABCB8;
    background-color: #F6F6F6;
    gap: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.team-container > .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.team-container h2 {
    font-size: 4em;
    font-family: playfair;
}

.team-container > .header p,
.team-container .name {
    font-size: 1.5em;
    color: #333333;
}

.team-container .card-container {
    display: flex;
    justify-content: center;
    gap: 50px;
}

.team-container .card-item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}

.developer {
    color: #00625C;
    font-family: playfair-italic;
}

.img-container {
    background-color: white;
    width: 300px;
    overflow: hidden;
    height: 300px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.img-container img {
    border-radius: 50%;
    object-fit: contain;
}

.neil {
    width: 100%;
    height: 110%;
}

.bob {
    width: 90%;
    height: 100%;
    margin-left: 15px;
}

.andrea {
    height: 100%;
    width: 90%;
    margin-left: 20px;
}

.mark {
    height: 100%;
    width: 320px;
    border-radius: 50%;
}

.contact-form-container{
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
}

.cfc{
    width: 50%;
    padding: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.form-label{
    gap:32px;
}

.form-label h1{
    font-size: 4em;
    color: #f6f6f6;
    font-family: playfair;
}

.form-label p, .form-label h3{
    font-size: 1.25em;
    color: #f6f6f6;
}

h3 a{
    font-weight: lighter;
}

form{
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 50vh;
    align-items: space-evenly;
    justify-content: space-evenly;
}

form label {
    color: #f6f6f6;
    font-size: 1.25em;
}

input[type=text], select, textarea {    
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    font-family: sofia;
    font-size: 1em;
}
  
input[type=submit] {
    background-color: #2c605c;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    font-size: 1.15em;
    margin-top: 20px;
    font-family: sofia;
    cursor: pointer;
}
  
input[type=submit]:hover {
    background-color: #00625C;
}

footer {
    position: fixed;
    bottom: 0;
    font-family: sofia;
    text-align: center;
    width: 100%;
    height: auto;
    background-color: #282d2e83;
    padding: 10px;
    color: #ffffff;
    font-size: 15px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: playfair;\r\n    src: url(./fonts/PlayfairDisplay-Regular.ttf)\r\n}\r\n \r\n@font-face {\r\n    font-family: sofia;\r\n    src: url(./fonts/sofiapro-light.otf);\r\n}\r\n\r\n@font-face {\r\n    font-family: playfair-italic;\r\n    src: url(./fonts/playfair-italic.ttf);\r\n}\r\n\r\n@keyframes scroll {\r\n    0% { opacity: 0; }\r\n    100% { opacity: 1; }\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    background: url(./images/bg2.png);\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    font-family: sofia;\r\n    background-position: center;\r\n}\r\n\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 50px 100px;\r\n}\r\n\r\n.healthcare {\r\n    font-family: playfair-italic;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    align-items: center;\r\n    color: #F6F6F6;\r\n    gap: 80px;\r\n    font-weight: lighter;\r\n    font-size: 1.25em;\r\n}\r\n\r\nnav > * {\r\n    opacity: 70%;\r\n}\r\n\r\nnav > *:hover {\r\n    cursor: pointer;\r\n    border-bottom: 2px solid gray;\r\n    font-weight: bold;\r\n    opacity: 100%;\r\n}\r\n\r\nheader button {\r\n    color: #F6F6F6;\r\n    background-color: transparent;\r\n    border-style: none;\r\n    font-size: 1.25rem;\r\n    font-family: inherit;\r\n}\r\n\r\n.nexus-pulse {\r\n    font-family: playfair;\r\n    letter-spacing: -4px;\r\n    font-size: 3em;\r\n    color: #E1EEED;\r\n}\r\n\r\nheader img {\r\n    width: 230px;\r\n}\r\n\r\n\r\n.register-button,\r\n.login-form {\r\n    background-color: #00625C;\r\n    color: #ffffff;\r\n}\r\n\r\n.connect-button:hover,\r\n.login-form:hover {\r\n    background-color: #00524D; \r\n    cursor: pointer;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    color: #E1EEED;\r\n    align-items: center;\r\n}\r\n\r\n.hero {\r\n    font-family: playfair;\r\n    font-weight: 500;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n    font-size: 5em;\r\n}\r\n\r\n.sub-hero {\r\n    margin-bottom: 20px;\r\n    font-size: 1.25em;\r\n    padding: 16px;\r\n    opacity: 80%;\r\n}\r\n\r\n.bottom-content {\r\n    height: fit-content;\r\n    background-color: #ffffff;\r\n    display: flex;\r\n    gap: 20px;\r\n    justify-content: space-around;\r\n}\r\n\r\n.left {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 60%;\r\n    text-align: center;\r\n}\r\n\r\n.left-img img {\r\n    width: 400px;\r\n    height: 350px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.left-img {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    gap: 25px;\r\n    align-items: end;\r\n}\r\n\r\n.right-img {\r\n    width: 40%;\r\n}\r\n\r\n.right-img img{\r\n    width: 400px;\r\n    height: 600px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.about-us-text {\r\n    color: #7D7D7D;\r\n    font-family: sofia;\r\n    font-size: 2em;\r\n    gap: 20px;\r\n    display: flex;\r\n    margin-bottom: 20px;\r\n    font-weight: bold;\r\n    align-items: center;\r\n}\r\n\r\n.dash {\r\n    width: 400px;\r\n}\r\n\r\n.about-header {\r\n    color: #6ABCB8;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.right > p {\r\n    font-family: sofia;\r\n}\r\n\r\n.right {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 40%;\r\n}\r\n\r\n.about-header {\r\n    font-size: 4em;\r\n    font-weight: 600;\r\n}\r\n\r\nem {\r\n    font-weight: 600;\r\n    font-family: playfair-italic;\r\n    color: #00625C;\r\n}\r\n\r\n.right > p {\r\n    font-size: 2em;\r\n    width: 620px;\r\n    text-align: left;\r\n    letter-spacing: -.5px;\r\n}\r\n\r\n.key-features-container {\r\n    padding: 100px 150px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: 80vh;\r\n    gap: 24px;\r\n    background-color: #00625C;\r\n}\r\n\r\n.icon-container {\r\n    width: 120px;\r\n    height: 100px;\r\n    background-color: #f6f6f6;\r\n    position: absolute;\r\n    margin-bottom: 350px;\r\n    left: 0;\r\n    border-radius: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.key-features-container h2{\r\n    font-size: 2em;\r\n    letter-spacing: 5px;\r\n    color: #F6F6F6;\r\n}\r\n\r\n.key-features-container > .header {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\n.key-features-container h3{\r\n    font-size: 2.5em;\r\n    color: #00625C;\r\n    font-family: playfair-italic;\r\n}\r\n\r\n.key-features-container > .header img {\r\n    width: 500px;\r\n}\r\n\r\n.key-features-container p{\r\n    font-size: 1.5em;\r\n    color: #333333;\r\n    margin: 8px;\r\n}\r\n\r\n.key-features-collection{\r\n    width: 100%;\r\n    height: fit-content;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 50px;\r\n    margin-top: 80px;\r\n}\r\n\r\n.key-features-card {\r\n    width: 30%;\r\n    height: 100%;\r\n    border-radius: 16px;\r\n    display: flex;\r\n    position: relative;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    justify-content: center;\r\n    padding: 2%;\r\n    gap: 30px;\r\n    background-color: #f6f6f6;\r\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\r\n}\r\n\r\n.key-features-card h3{\r\n    font-size: 2.5em;\r\n    height: 30%;\r\n}\r\n\r\n.key-features-card p {\r\n    padding: 0 30px;\r\n}\r\n\r\n.interoperability {\r\n    padding-top: 30px;\r\n}\r\n\r\n.team-container {\r\n    width: 100%;\r\n    height: 80vh;\r\n    color: #6ABCB8;\r\n    background-color: #F6F6F6;\r\n    gap: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.team-container > .header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\n.team-container h2 {\r\n    font-size: 4em;\r\n    font-family: playfair;\r\n}\r\n\r\n.team-container > .header p,\r\n.team-container .name {\r\n    font-size: 1.5em;\r\n    color: #333333;\r\n}\r\n\r\n.team-container .card-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 50px;\r\n}\r\n\r\n.team-container .card-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    align-items: center;\r\n}\r\n\r\n.developer {\r\n    color: #00625C;\r\n    font-family: playfair-italic;\r\n}\r\n\r\n.img-container {\r\n    background-color: white;\r\n    width: 300px;\r\n    overflow: hidden;\r\n    height: 300px;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: end;\r\n}\r\n\r\n.img-container img {\r\n    border-radius: 50%;\r\n    object-fit: contain;\r\n}\r\n\r\n.neil {\r\n    width: 100%;\r\n    height: 110%;\r\n}\r\n\r\n.bob {\r\n    width: 90%;\r\n    height: 100%;\r\n    margin-left: 15px;\r\n}\r\n\r\n.andrea {\r\n    height: 100%;\r\n    width: 90%;\r\n    margin-left: 20px;\r\n}\r\n\r\n.mark {\r\n    height: 100%;\r\n    width: 320px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.contact-form-container{\r\n    width: 100%;\r\n    height: 80vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    background: url(./images/bg2.png);\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n}\r\n\r\n.cfc{\r\n    width: 50%;\r\n    padding: 10%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.form-label{\r\n    gap:32px;\r\n}\r\n\r\n.form-label h1{\r\n    font-size: 4em;\r\n    color: #f6f6f6;\r\n    font-family: playfair;\r\n}\r\n\r\n.form-label p, .form-label h3{\r\n    font-size: 1.25em;\r\n    color: #f6f6f6;\r\n}\r\n\r\nh3 a{\r\n    font-weight: lighter;\r\n}\r\n\r\nform{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 70%;\r\n    height: 50vh;\r\n    align-items: space-evenly;\r\n    justify-content: space-evenly;\r\n}\r\n\r\nform label {\r\n    color: #f6f6f6;\r\n    font-size: 1.25em;\r\n}\r\n\r\ninput[type=text], select, textarea {    \r\n    width: 100%;\r\n    padding: 12px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    margin-top: 6px;\r\n    margin-bottom: 16px;\r\n    resize: vertical;\r\n    font-family: sofia;\r\n    font-size: 1em;\r\n}\r\n  \r\ninput[type=submit] {\r\n    background-color: #2c605c;\r\n    color: white;\r\n    padding: 12px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    font-size: 1.15em;\r\n    margin-top: 20px;\r\n    font-family: sofia;\r\n    cursor: pointer;\r\n}\r\n  \r\ninput[type=submit]:hover {\r\n    background-color: #00625C;\r\n}\r\n\r\nfooter {\r\n    position: fixed;\r\n    bottom: 0;\r\n    font-family: sofia;\r\n    text-align: center;\r\n    width: 100%;\r\n    height: auto;\r\n    background-color: #282d2e83;\r\n    padding: 10px;\r\n    color: #ffffff;\r\n    font-size: 15px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadAbout: () => (/* binding */ loadAbout)
/* harmony export */ });
/* harmony import */ var _images_image1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/image1.png */ "./src/images/image1.png");
/* harmony import */ var _images_image2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/image2.png */ "./src/images/image2.png");
/* harmony import */ var _images_image3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/image3.png */ "./src/images/image3.png");
/* harmony import */ var _images_dash_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/dash.png */ "./src/images/dash.png");





const loadAbout = () => {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = ''
    contentDiv.style.flexDirection = 'row'
    contentDiv.style.marginTop = 0;

    const imageContainer = document.createElement('div');
    imageContainer.className = 'left';
    
    const leftImages = document.createElement('div');
    leftImages.className = 'left-img';

    const img1 = document.createElement('img');
    img1.src = _images_image1_png__WEBPACK_IMPORTED_MODULE_0__;
    const img2 = document.createElement('img');
    img2.src = _images_image2_png__WEBPACK_IMPORTED_MODULE_1__;

    const rightImage = document.createElement('div');
    rightImage.className = 'right-img';

    const img3 = document.createElement('img');
    img3.src = _images_image3_png__WEBPACK_IMPORTED_MODULE_2__;
   
    const textContainer = document.createElement('div');
    textContainer.className = 'right';

    const aboutUsText = document.createElement('div');
    aboutUsText.classList = "about-us-text";

    const paraText = document.createElement('p');
    paraText.textContent = 'ABOUT US';

    const dash = document.createElement('img');
    dash.className = 'dash'
    dash.src = _images_dash_png__WEBPACK_IMPORTED_MODULE_3__;

    const aboutHeader = document.createElement('div');
    aboutHeader.className = 'about-header';
    aboutHeader.innerHTML = `<em>Innovating Health, </em><br> One Block at a Time`;

    const paraText2 = document.createElement('p');
    paraText2.textContent = 'NexusPulse revolutionizes healthcare information management by leveraging the power of blockchain technology. With unparalleled security and transparency, we ensure the confidentiality and integrity of your medical records, empowering both patients and healthcare providers.'

    leftImages.append(img1, img2);
    rightImage.append(img3);
    imageContainer.append(leftImages, rightImage);
    aboutUsText.append(paraText, dash);
    textContainer.append(aboutUsText, aboutHeader, paraText2);
    contentDiv.append(imageContainer, textContainer);
}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFooter: () => (/* binding */ createFooter)
/* harmony export */ });
const createFooter = () => {
    const body = document.querySelector('body');
    const currentYear = new Date().getFullYear();
    
    const footer = document.createElement('footer');
    footer.innerHTML = `<p>Currently under development by © UPRise Nexus ${currentYear}`;

    body.insertAdjacentElement("beforeend", footer);
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _images_logo4_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo4.png */ "./src/images/logo4.png");


const createHeader = () => {
    const body = document.querySelector('body');
    const contentDiv = document.querySelector('#content'); 

    const header = document.createElement('header');
    
    const headerLogo = document.createElement('img');
    headerLogo.src = _images_logo4_png__WEBPACK_IMPORTED_MODULE_0__;
    const navBar = document.createElement('nav');
    
    const homeBtn = document.createElement('button');
    const aboutBtn = document.createElement('button');
    const featuresBtn = document.createElement('button');
    const teamBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.className = 'home-btn';
    aboutBtn.className = 'about-btn';

    homeBtn.textContent = 'Home';
    aboutBtn.textContent = 'About';
    featuresBtn.textContent = 'Features';
    teamBtn.textContent = 'Team';
    contactBtn.textContent = 'Contact';

    navBar.append(homeBtn, aboutBtn, featuresBtn, teamBtn, contactBtn);
    header.append(headerLogo, navBar);
    body.insertBefore(header, contentDiv);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHome: () => (/* binding */ loadHome)
/* harmony export */ });
const loadHome = () => {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
    contentDiv.style.flexDirection = 'column';
    contentDiv.style.marginTop = '150px';

    const heroText = document.createElement('p');
    heroText.className = 'hero';
    
    const spanText = document.createElement('span');
    spanText.className ='healthcare';
    spanText.textContent = 'Healthcare';

    heroText.innerHTML = `A <span class="healthcare">Healthcare</span> Information <br> Management System`;

    const subHeroText = document.createElement('p');
    subHeroText.className = 'sub-hero';
    subHeroText.textContent = `Securing Your Data: Ensuring the Safety, Integrity, and Accessibility of Your Records`

    contentDiv.append(heroText, subHeroText);
}

/***/ }),

/***/ "./src/fonts/PlayfairDisplay-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/PlayfairDisplay-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "693728812dc43ab34710.ttf";

/***/ }),

/***/ "./src/fonts/playfair-italic.ttf":
/*!***************************************!*\
  !*** ./src/fonts/playfair-italic.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5b813a9539a87133d85.ttf";

/***/ }),

/***/ "./src/fonts/sofiapro-light.otf":
/*!**************************************!*\
  !*** ./src/fonts/sofiapro-light.otf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7978d11b00722a17ccfa.otf";

/***/ }),

/***/ "./src/images/bg2.png":
/*!****************************!*\
  !*** ./src/images/bg2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1226cff7b98cfc95ad7a.png";

/***/ }),

/***/ "./src/images/dash.png":
/*!*****************************!*\
  !*** ./src/images/dash.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e54e66f6d1e7f755639.png";

/***/ }),

/***/ "./src/images/image1.png":
/*!*******************************!*\
  !*** ./src/images/image1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "277a82bf48c596fff469.png";

/***/ }),

/***/ "./src/images/image2.png":
/*!*******************************!*\
  !*** ./src/images/image2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "188f61380ee2bcecb760.png";

/***/ }),

/***/ "./src/images/image3.png":
/*!*******************************!*\
  !*** ./src/images/image3.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4adeae9941549277ff1.png";

/***/ }),

/***/ "./src/images/logo4.png":
/*!******************************!*\
  !*** ./src/images/logo4.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da2a29e7b0e5fc85914f.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./src/about.js");







const init = () => {
    (0,_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)();
    (0,_home__WEBPACK_IMPORTED_MODULE_2__.loadHome)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_3__.createFooter)();
}

init();

const aboutBtn = document.querySelector('.about-btn');
aboutBtn.addEventListener('click', () => (0,_about__WEBPACK_IMPORTED_MODULE_4__.loadAbout)())

const homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', () => (0,_home__WEBPACK_IMPORTED_MODULE_2__.loadHome)())
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1KQUFzRDtBQUNsRyw0Q0FBNEMsaUlBQTZDO0FBQ3pGLDRDQUE0QyxtSUFBOEM7QUFDMUYsNENBQTRDLDZHQUFtQztBQUMvRSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssb0JBQW9CLHFCQUFxQixPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxRQUFRLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFB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QSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNvQjtBQUNOO0FBQ007QUFDeEM7QUFDb0M7QUFDcEM7QUFDQTtBQUNBLElBQUkscURBQVk7QUFDaEIsSUFBSSwrQ0FBUTtBQUNaLElBQUkscURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxpREFBUztBQUNsRDtBQUNBO0FBQ0Esd0NBQXdDLCtDQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvc29maWFwcm8tbGlnaHQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9wbGF5ZmFpci1pdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmcyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogcGxheWZhaXI7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KVxyXG59XHJcbiBcclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogc29maWE7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogcGxheWZhaXItaXRhbGljO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2Nyb2xsIHtcclxuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBmb250LWZhbWlseTogc29maWE7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDUwcHggMTAwcHg7XHJcbn1cclxuXHJcbi5oZWFsdGhjYXJlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBwbGF5ZmFpci1pdGFsaWM7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRjZGNkY2O1xyXG4gICAgZ2FwOiA4MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMjVlbTtcclxufVxyXG5cclxubmF2ID4gKiB7XHJcbiAgICBvcGFjaXR5OiA3MCU7XHJcbn1cclxuXHJcbm5hdiA+ICo6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyYXk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuXHJcbmhlYWRlciBidXR0b24ge1xyXG4gICAgY29sb3I6ICNGNkY2RjY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG59XHJcblxyXG4ubmV4dXMtcHVsc2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHBsYXlmYWlyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC00cHg7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIGNvbG9yOiAjRTFFRUVEO1xyXG59XHJcblxyXG5oZWFkZXIgaW1nIHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxufVxyXG5cclxuXHJcbi5yZWdpc3Rlci1idXR0b24sXHJcbi5sb2dpbi1mb3JtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDYyNUM7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmNvbm5lY3QtYnV0dG9uOmhvdmVyLFxyXG4ubG9naW4tZm9ybTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MjREOyBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGNvbG9yOiAjRTFFRUVEO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlcm8ge1xyXG4gICAgZm9udC1mYW1pbHk6IHBsYXlmYWlyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDVlbTtcclxufVxyXG5cclxuLnN1Yi1oZXJvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMjVlbTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBvcGFjaXR5OiA4MCU7XHJcbn1cclxuXHJcbi5ib3R0b20tY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGVmdC1pbWcgaW1nIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ubGVmdC1pbWcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZ2FwOiAyNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcclxufVxyXG5cclxuLnJpZ2h0LWltZyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4ucmlnaHQtaW1nIGltZ3tcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYWJvdXQtdXMtdGV4dCB7XHJcbiAgICBjb2xvcjogIzdEN0Q3RDtcclxuICAgIGZvbnQtZmFtaWx5OiBzb2ZpYTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kYXNoIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmFib3V0LWhlYWRlciB7XHJcbiAgICBjb2xvcjogIzZBQkNCODtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5yaWdodCA+IHAge1xyXG4gICAgZm9udC1mYW1pbHk6IHNvZmlhO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uYWJvdXQtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuZW0ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBwbGF5ZmFpci1pdGFsaWM7XHJcbiAgICBjb2xvcjogIzAwNjI1QztcclxufVxyXG5cclxuLnJpZ2h0ID4gcCB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIHdpZHRoOiA2MjBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLS41cHg7XHJcbn1cclxuXHJcbi5rZXktZmVhdHVyZXMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDE1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIGdhcDogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDYyNUM7XHJcbn1cclxuXHJcbi5pY29uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1MHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ua2V5LWZlYXR1cmVzLWNvbnRhaW5lciBoMntcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgIGNvbG9yOiAjRjZGNkY2O1xyXG59XHJcblxyXG4ua2V5LWZlYXR1cmVzLWNvbnRhaW5lciA+IC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5rZXktZmVhdHVyZXMtY29udGFpbmVyIGgze1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIGNvbG9yOiAjMDA2MjVDO1xyXG4gICAgZm9udC1mYW1pbHk6IHBsYXlmYWlyLWl0YWxpYztcclxufVxyXG5cclxuLmtleS1mZWF0dXJlcy1jb250YWluZXIgPiAuaGVhZGVyIGltZyB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5rZXktZmVhdHVyZXMtY29udGFpbmVyIHB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBtYXJnaW46IDhweDtcclxufVxyXG5cclxuLmtleS1mZWF0dXJlcy1jb2xsZWN0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4ua2V5LWZlYXR1cmVzLWNhcmQge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMnB4IDVweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDFweCAzcHggLTFweDtcclxufVxyXG5cclxuLmtleS1mZWF0dXJlcy1jYXJkIGgze1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG4ua2V5LWZlYXR1cmVzLWNhcmQgcCB7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbn1cclxuXHJcbi5pbnRlcm9wZXJhYmlsaXR5IHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4udGVhbS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBjb2xvcjogIzZBQkNCODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcbiAgICBnYXA6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGVhbS1jb250YWluZXIgPiAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMjBweDtcclxufVxyXG5cclxuLnRlYW0tY29udGFpbmVyIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgZm9udC1mYW1pbHk6IHBsYXlmYWlyO1xyXG59XHJcblxyXG4udGVhbS1jb250YWluZXIgPiAuaGVhZGVyIHAsXHJcbi50ZWFtLWNvbnRhaW5lciAubmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuXHJcbi50ZWFtLWNvbnRhaW5lciAuY2FyZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiA1MHB4O1xyXG59XHJcblxyXG4udGVhbS1jb250YWluZXIgLmNhcmQtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZXZlbG9wZXIge1xyXG4gICAgY29sb3I6ICMwMDYyNUM7XHJcbiAgICBmb250LWZhbWlseTogcGxheWZhaXItaXRhbGljO1xyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxufVxyXG5cclxuLmltZy1jb250YWluZXIgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5uZWlsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMTAlO1xyXG59XHJcblxyXG4uYm9iIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLmFuZHJlYSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXJrIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybS1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLmNmY3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbHtcclxuICAgIGdhcDozMnB4O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbCBoMXtcclxuICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBmb250LWZhbWlseTogcGxheWZhaXI7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHAsIC5mb3JtLWxhYmVsIGgze1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBjb2xvcjogI2Y2ZjZmNjtcclxufVxyXG5cclxuaDMgYXtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgYWxpZ24taXRlbXM6IHNwYWNlLWV2ZW5seTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG5mb3JtIGxhYmVsIHtcclxuICAgIGNvbG9yOiAjZjZmNmY2O1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCwgdGV4dGFyZWEgeyAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgICBmb250LWZhbWlseTogc29maWE7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG4gIFxyXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjNjA1YztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzb2ZpYTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gIFxyXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjI1QztcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBzb2ZpYTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmQyZTgzO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNENBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDRDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLEtBQUssVUFBVSxFQUFFO0lBQ2pCLE9BQU8sVUFBVSxFQUFFO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbURBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUdBOztJQUVJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFD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LGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogcGxheWZhaXI7XFxyXFxuICAgIHNyYzogdXJsKC4vZm9udHMvUGxheWZhaXJEaXNwbGF5LVJlZ3VsYXIudHRmKVxcclxcbn1cXHJcXG4gXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzb2ZpYTtcXHJcXG4gICAgc3JjOiB1cmwoLi9mb250cy9zb2ZpYXByby1saWdodC5vdGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHBsYXlmYWlyLWl0YWxpYztcXHJcXG4gICAgc3JjOiB1cmwoLi9mb250cy9wbGF5ZmFpci1pdGFsaWMudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzY3JvbGwge1xcclxcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cXHJcXG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCguL2ltYWdlcy9iZzIucG5nKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNvZmlhO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogNTBweCAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWx0aGNhcmUge1xcclxcbiAgICBmb250LWZhbWlseTogcGxheWZhaXItaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI0Y2RjZGNjtcXHJcXG4gICAgZ2FwOiA4MHB4O1xcclxcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxyXFxufVxcclxcblxcclxcbm5hdiA+ICoge1xcclxcbiAgICBvcGFjaXR5OiA3MCU7XFxyXFxufVxcclxcblxcclxcbm5hdiA+ICo6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmF5O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgb3BhY2l0eTogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGJ1dHRvbiB7XFxyXFxuICAgIGNvbG9yOiAjRjZGNkY2O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV4dXMtcHVsc2Uge1xcclxcbiAgICBmb250LWZhbWlseTogcGxheWZhaXI7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtNHB4O1xcclxcbiAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgY29sb3I6ICNFMUVFRUQ7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBpbWcge1xcclxcbiAgICB3aWR0aDogMjMwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5yZWdpc3Rlci1idXR0b24sXFxyXFxuLmxvZ2luLWZvcm0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2MjVDO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbm5lY3QtYnV0dG9uOmhvdmVyLFxcclxcbi5sb2dpbi1mb3JtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTI0RDsgXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogI0UxRUVFRDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8ge1xcclxcbiAgICBmb250LWZhbWlseTogcGxheWZhaXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA1ZW07XFxyXFxufVxcclxcblxcclxcbi5zdWItaGVybyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICBvcGFjaXR5OiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tY29udGVudCB7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1pbWcgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1pbWcge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBnYXA6IDI1cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1pbWcge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtaW1nIGltZ3tcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdXMtdGV4dCB7XFxyXFxuICAgIGNvbG9yOiAjN0Q3RDdEO1xcclxcbiAgICBmb250LWZhbWlseTogc29maWE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFzaCB7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWhlYWRlciB7XFxyXFxuICAgIGNvbG9yOiAjNkFCQ0I4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQgPiBwIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNvZmlhO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiA0ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbmVtIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHBsYXlmYWlyLWl0YWxpYztcXHJcXG4gICAgY29sb3I6ICMwMDYyNUM7XFxyXFxufVxcclxcblxcclxcbi5yaWdodCA+IHAge1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgd2lkdGg6IDYyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLS41cHg7XFxyXFxufVxcclxcblxcclxcbi5rZXktZmVhdHVyZXMtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMTAwcHggMTUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDgwdmg7XFxyXFxuICAgIGdhcDogMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjI1QztcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDM1MHB4O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmtleS1mZWF0dXJlcy1jb250YWluZXIgaDJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcclxcbiAgICBjb2xvcjogI0Y2RjZGNjtcXHJcXG59XFxyXFxuXFxyXFxuLmtleS1mZWF0dXJlcy1jb250YWluZXIgPiAuaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ua2V5LWZlYXR1cmVzLWNvbnRhaW5lciBoM3tcXHJcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXHJcXG4gICAgY29sb3I6ICMwMDYyNUM7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBwbGF5ZmFpci1pdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5rZXktZmVhdHVyZXMtY29udGFpbmVyID4gLmhlYWRlciBpbWcge1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5rZXktZmVhdHVyZXMtY29udGFpbmVyIHB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcclxcbiAgICBtYXJnaW46IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmtleS1mZWF0dXJlcy1jb2xsZWN0aW9ue1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmtleS1mZWF0dXJlcy1jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDJweCA1cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxcHggM3B4IC0xcHg7XFxyXFxufVxcclxcblxcclxcbi5rZXktZmVhdHVyZXMtY2FyZCBoM3tcXHJcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXHJcXG4gICAgaGVpZ2h0OiAzMCU7XFxyXFxufVxcclxcblxcclxcbi5rZXktZmVhdHVyZXMtY2FyZCBwIHtcXHJcXG4gICAgcGFkZGluZzogMCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW50ZXJvcGVyYWJpbGl0eSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbS1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA4MHZoO1xcclxcbiAgICBjb2xvcjogIzZBQkNCODtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYW0tY29udGFpbmVyID4gLmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYW0tY29udGFpbmVyIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiA0ZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBwbGF5ZmFpcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYW0tY29udGFpbmVyID4gLmhlYWRlciBwLFxcclxcbi50ZWFtLWNvbnRhaW5lciAubmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbS1jb250YWluZXIgLmNhcmQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYW0tY29udGFpbmVyIC5jYXJkLWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZXZlbG9wZXIge1xcclxcbiAgICBjb2xvcjogIzAwNjI1QztcXHJcXG4gICAgZm9udC1mYW1pbHk6IHBsYXlmYWlyLWl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciBpbWcge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi5uZWlsIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYiB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5hbmRyZWEge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFyayB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDMyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWZvcm0tY29udGFpbmVye1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA4MHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2JnMi5wbmcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNmY3tcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogMTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tbGFiZWx7XFxyXFxuICAgIGdhcDozMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1sYWJlbCBoMXtcXHJcXG4gICAgZm9udC1zaXplOiA0ZW07XFxyXFxuICAgIGNvbG9yOiAjZjZmNmY2O1xcclxcbiAgICBmb250LWZhbWlseTogcGxheWZhaXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWxhYmVsIHAsIC5mb3JtLWxhYmVsIGgze1xcclxcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXHJcXG4gICAgY29sb3I6ICNmNmY2ZjY7XFxyXFxufVxcclxcblxcclxcbmgzIGF7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3Jte1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBoZWlnaHQ6IDUwdmg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGxhYmVsIHtcXHJcXG4gICAgY29sb3I6ICNmNmY2ZjY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3QsIHRleHRhcmVhIHsgICAgXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbi10b3A6IDZweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNvZmlhO1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG59XFxyXFxuICBcXHJcXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM2MDVjO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogc29maWE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuICBcXHJcXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2MjVDO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNvZmlhO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODJkMmU4MztcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGltYWdlMSBmcm9tICcuL2ltYWdlcy9pbWFnZTEucG5nJztcclxuaW1wb3J0IGltYWdlMiBmcm9tICcuL2ltYWdlcy9pbWFnZTIucG5nJztcclxuaW1wb3J0IGltYWdlMyBmcm9tICcuL2ltYWdlcy9pbWFnZTMucG5nJztcclxuaW1wb3J0IERhc2ggZnJvbSAnLi9pbWFnZXMvZGFzaC5wbmcnXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZEFib3V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnXHJcbiAgICBjb250ZW50RGl2LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAncm93J1xyXG4gICAgY29udGVudERpdi5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG5cclxuICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbWFnZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnbGVmdCc7XHJcbiAgICBcclxuICAgIGNvbnN0IGxlZnRJbWFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxlZnRJbWFnZXMuY2xhc3NOYW1lID0gJ2xlZnQtaW1nJztcclxuXHJcbiAgICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcxLnNyYyA9IGltYWdlMTtcclxuICAgIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZzIuc3JjID0gaW1hZ2UyO1xyXG5cclxuICAgIGNvbnN0IHJpZ2h0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJpZ2h0SW1hZ2UuY2xhc3NOYW1lID0gJ3JpZ2h0LWltZyc7XHJcblxyXG4gICAgY29uc3QgaW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nMy5zcmMgPSBpbWFnZTM7XHJcbiAgIFxyXG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGV4dENvbnRhaW5lci5jbGFzc05hbWUgPSAncmlnaHQnO1xyXG5cclxuICAgIGNvbnN0IGFib3V0VXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dFVzVGV4dC5jbGFzc0xpc3QgPSBcImFib3V0LXVzLXRleHRcIjtcclxuXHJcbiAgICBjb25zdCBwYXJhVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHBhcmFUZXh0LnRleHRDb250ZW50ID0gJ0FCT1VUIFVTJztcclxuXHJcbiAgICBjb25zdCBkYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBkYXNoLmNsYXNzTmFtZSA9ICdkYXNoJ1xyXG4gICAgZGFzaC5zcmMgPSBEYXNoO1xyXG5cclxuICAgIGNvbnN0IGFib3V0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dEhlYWRlci5jbGFzc05hbWUgPSAnYWJvdXQtaGVhZGVyJztcclxuICAgIGFib3V0SGVhZGVyLmlubmVySFRNTCA9IGA8ZW0+SW5ub3ZhdGluZyBIZWFsdGgsIDwvZW0+PGJyPiBPbmUgQmxvY2sgYXQgYSBUaW1lYDtcclxuXHJcbiAgICBjb25zdCBwYXJhVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwYXJhVGV4dDIudGV4dENvbnRlbnQgPSAnTmV4dXNQdWxzZcKgcmV2b2x1dGlvbml6ZXMgaGVhbHRoY2FyZSBpbmZvcm1hdGlvbiBtYW5hZ2VtZW50IGJ5IGxldmVyYWdpbmcgdGhlIHBvd2VyIG9mIGJsb2NrY2hhaW4gdGVjaG5vbG9neS4gV2l0aCB1bnBhcmFsbGVsZWQgc2VjdXJpdHkgYW5kIHRyYW5zcGFyZW5jeSwgd2UgZW5zdXJlIHRoZSBjb25maWRlbnRpYWxpdHkgYW5kIGludGVncml0eSBvZiB5b3VyIG1lZGljYWwgcmVjb3JkcywgZW1wb3dlcmluZyBib3RoIHBhdGllbnRzIGFuZCBoZWFsdGhjYXJlIHByb3ZpZGVycy4nXHJcblxyXG4gICAgbGVmdEltYWdlcy5hcHBlbmQoaW1nMSwgaW1nMik7XHJcbiAgICByaWdodEltYWdlLmFwcGVuZChpbWczKTtcclxuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZChsZWZ0SW1hZ2VzLCByaWdodEltYWdlKTtcclxuICAgIGFib3V0VXNUZXh0LmFwcGVuZChwYXJhVGV4dCwgZGFzaCk7XHJcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZChhYm91dFVzVGV4dCwgYWJvdXRIZWFkZXIsIHBhcmFUZXh0Mik7XHJcbiAgICBjb250ZW50RGl2LmFwcGVuZChpbWFnZUNvbnRhaW5lciwgdGV4dENvbnRhaW5lcik7XHJcbn0iLCJleHBvcnQgY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgXHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgPHA+Q3VycmVudGx5IHVuZGVyIGRldmVsb3BtZW50IGJ5IMKpIFVQUmlzZSBOZXh1cyAke2N1cnJlbnRZZWFyfWA7XHJcblxyXG4gICAgYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgZm9vdGVyKTtcclxufSIsImltcG9ydCBsb2dvIGZyb20gJy4vaW1hZ2VzL2xvZ280LnBuZydcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7IFxyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBoZWFkZXJMb2dvLnNyYyA9IGxvZ287XHJcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIFxyXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGZlYXR1cmVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCB0ZWFtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgaG9tZUJ0bi5jbGFzc05hbWUgPSAnaG9tZS1idG4nO1xyXG4gICAgYWJvdXRCdG4uY2xhc3NOYW1lID0gJ2Fib3V0LWJ0bic7XHJcblxyXG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9ICdIb21lJztcclxuICAgIGFib3V0QnRuLnRleHRDb250ZW50ID0gJ0Fib3V0JztcclxuICAgIGZlYXR1cmVzQnRuLnRleHRDb250ZW50ID0gJ0ZlYXR1cmVzJztcclxuICAgIHRlYW1CdG4udGV4dENvbnRlbnQgPSAnVGVhbSc7XHJcbiAgICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xyXG5cclxuICAgIG5hdkJhci5hcHBlbmQoaG9tZUJ0biwgYWJvdXRCdG4sIGZlYXR1cmVzQnRuLCB0ZWFtQnRuLCBjb250YWN0QnRuKTtcclxuICAgIGhlYWRlci5hcHBlbmQoaGVhZGVyTG9nbywgbmF2QmFyKTtcclxuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGhlYWRlciwgY29udGVudERpdik7XHJcbn0iLCJleHBvcnQgY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb250ZW50RGl2LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcclxuICAgIGNvbnRlbnREaXYuc3R5bGUubWFyZ2luVG9wID0gJzE1MHB4JztcclxuXHJcbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGhlcm9UZXh0LmNsYXNzTmFtZSA9ICdoZXJvJztcclxuICAgIFxyXG4gICAgY29uc3Qgc3BhblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzcGFuVGV4dC5jbGFzc05hbWUgPSdoZWFsdGhjYXJlJztcclxuICAgIHNwYW5UZXh0LnRleHRDb250ZW50ID0gJ0hlYWx0aGNhcmUnO1xyXG5cclxuICAgIGhlcm9UZXh0LmlubmVySFRNTCA9IGBBIDxzcGFuIGNsYXNzPVwiaGVhbHRoY2FyZVwiPkhlYWx0aGNhcmU8L3NwYW4+IEluZm9ybWF0aW9uIDxicj4gTWFuYWdlbWVudCBTeXN0ZW1gO1xyXG5cclxuICAgIGNvbnN0IHN1Ykhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgc3ViSGVyb1RleHQuY2xhc3NOYW1lID0gJ3N1Yi1oZXJvJztcclxuICAgIHN1Ykhlcm9UZXh0LnRleHRDb250ZW50ID0gYFNlY3VyaW5nIFlvdXIgRGF0YTogRW5zdXJpbmcgdGhlIFNhZmV0eSwgSW50ZWdyaXR5LCBhbmQgQWNjZXNzaWJpbGl0eSBvZiBZb3VyIFJlY29yZHNgXHJcblxyXG4gICAgY29udGVudERpdi5hcHBlbmQoaGVyb1RleHQsIHN1Ykhlcm9UZXh0KTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tICcuL2Zvb3Rlcic7XHJcblxyXG5pbXBvcnQgeyBsb2FkQWJvdXQgfSBmcm9tICcuL2Fib3V0JztcclxuXHJcbmNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICBjcmVhdGVIZWFkZXIoKTtcclxuICAgIGxvYWRIb21lKCk7XHJcbiAgICBjcmVhdGVGb290ZXIoKTtcclxufVxyXG5cclxuaW5pdCgpO1xyXG5cclxuY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtYnRuJyk7XHJcbmFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9hZEFib3V0KCkpXHJcblxyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtYnRuJyk7XHJcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBsb2FkSG9tZSgpKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==