webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".btn {\r\n  background: #eff5fc;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#eff5fc), to(#379ac7));\r\n  background-image: linear-gradient(to bottom, #eff5fc, #379ac7);\r\n  \r\n  border-radius: 0px;\r\n  text-shadow: 2px 1px 3px #666666;\r\n  font-family: Georgia;\r\n  color: #ffffff;\r\n  font-size: 20px;\r\n  padding: 5px 25px 5px 25px;\r\n  border: solid #206e78 0px;\r\n  text-decoration: none;\r\n}\r\n\r\n.btn:hover {\r\n  background: #bbd4f0;\r\n  text-decoration: none;\r\n}\r\n\r\n.logo {\r\n    box-align: center;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    background:rgba(68, 188, 218, 0.3);\r\n    -webkit-box-shadow: 0 15px 15px -15px rgba(0,0,0,0.5);\r\n            box-shadow: 0 15px 15px -15px rgba(0,0,0,0.5);\r\n  }\r\n\r\n.logo-img {\r\nposition:relative;\r\nleft: 5px;\r\n}\r\n\r\n.mini-img{\r\n  box-align: center;\r\n  margin:0;\r\n  border:1px solid black;\r\n}\r\n\r\n.space{\r\n  opacity: 0;\r\n}\r\n\r\n.video-div {\r\n  box-align: center;\r\n background:rgba(0,0,0,0.5);\r\n width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.body-div{\r\n  font-family: 'Song Myung', serif;\r\n  border-radius: 10px;\r\n  width: 70%;\r\n  box-align: center;\r\n  background: rgba(255,255,255,0.8);\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\nh1{\r\n  color: white;\r\n  font-family: 'Gentium Basic', serif;\r\n  font-size: 24px;\r\n  text-align: left;\r\n  margin: 5px;\r\n}\r\n\r\np {\r\n  color: rgba(255, 255, 255, 0.945);\r\n  font-family: 'Gentium Basic', serif;\r\n  font-size: 14px;\r\n  text-align: left;\r\n  margin: 5px;\r\n}\r\n\r\ntable, td, th{\r\n  background:rgba(13, 52, 97, 0.6);\r\n  \r\n  vertical-align: top;\r\n  color: white;\r\n}\r\n\r\nth {\r\n   font-size: 16px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <div class=\"logo\">\n    <div class=\"logo-img-pos\" align=\"left\">\n    <img class=\"logo-img\" width=\"64\" height=\"64\" alt=\"Logo\" src=\"assets/siteico.ico\"/>\n    <img class=\"logo-img-text\" width=\"116\" height=\"37\" alt=\"Logo\" src=\"assets/logo.png\"/>\n    </div>\n  </div>\n  <p class=\"space\">.</p>\n<div class=\"body-div\">\n  <p class=\"space\">.</p>\n<table>\n<th>\n  <img class=\"main-img-spot\" width=\"100%\" alt=\"Logo\" src=\"assets/gameplay.png\"/>\n</th>\n<th>\n  <h1>O grze</h1>\n \n  <p>Zostań nieustraszonym łucznikiem </p><p>lub wikingiem i staw czoła kreaturom, oraz stojącym za nimi\n    bossom.\n  </p>\n  <h1>Gatunek:</h1>\n  <img width=\"128px\" alt=\"Logo\" src=\"assets/mmorpg_logo.png\"/>\n  <h1>Wymagania:</h1>\n  <img width=\"32px\" alt=\"Logo\" src=\"assets/android.png\"/>\n  <img width=\"32px\" alt=\"Logo\" src=\"assets/windows.png\"/>\n  <p class=\"space\">.</p>\n  \n  <button  class=\"btn\" onclick=\"location.href='http://www.google.com'\" type=\"button\">\n   Zagraj</button>\n</th>\n</table>\n<table>\n  <th class=\"img-first\" > <img width=\"100%\" alt=\"Logo\" src=\"assets/gameplay.png\"/></th>\n  <th class=\"img-second\"> <img width=\"100%\"  alt=\"Logo\" src=\"assets/gameplay_2.png\"/></th>\n  <th class=\"img-third\"> <img width=\"100%\"  alt=\"Logo\" src=\"assets/gameplay_3.png\"/></th>\n  <th class=\"img-fourth\"> <img width=\"100%\"  alt=\"Logo\" src=\"assets/gameplay_6.png\"/></th>\n  <th class=\"img-fifth\"> <img width=\"100%\"  alt=\"Logo\" src=\"assets/gameplay_1.png\"/></th>\n</table>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map