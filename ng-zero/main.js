(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/home/home.module": [
		"./src/app/views/home/home.module.ts",
		"views-home-home-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-gui.module.ts":
/*!***********************************!*\
  !*** ./src/app/app-gui.module.ts ***!
  \***********************************/
/*! exports provided: AppGuiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGuiModule", function() { return AppGuiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppGuiModule = /** @class */ (function () {
    function AppGuiModule() {
    }
    AppGuiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'always' }),
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ]
        })
    ], AppGuiModule);
    return AppGuiModule;
}());



/***/ }),

/***/ "./src/app/app-preloading-strategy.ts":
/*!********************************************!*\
  !*** ./src/app/app-preloading-strategy.ts ***!
  \********************************************/
/*! exports provided: AppPreloadingStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPreloadingStrategy", function() { return AppPreloadingStrategy; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var AppPreloadingStrategy = /** @class */ (function () {
    function AppPreloadingStrategy() {
    }
    AppPreloadingStrategy.prototype.preload = function (route, load) {
        var loadRoute = function (delay) { return delay
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(150).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_) { return load(); }))
            : load(); };
        return route.data && route.data.preload
            ? loadRoute(route.data.delay)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    };
    return AppPreloadingStrategy;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_preloading_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-preloading-strategy */ "./src/app/app-preloading-strategy.ts");
/* harmony import */ var _core_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/auth/auth-guard.service */ "./src/app/core/auth/auth-guard.service.ts");
/* harmony import */ var _layouts_secured_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/secured.layout */ "./src/app/layouts/secured.layout.ts");
/* harmony import */ var _layouts_unsecured_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/unsecured.layout */ "./src/app/layouts/unsecured.layout.ts");
/* harmony import */ var _core_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/login/login.component */ "./src/app/core/login/login.component.ts");
/* harmony import */ var _core_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/error/error.component */ "./src/app/core/error/error.component.ts");
/* harmony import */ var _views_user_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user/users.component */ "./src/app/views/user/users.component.ts");
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _views_user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/user/user.component */ "./src/app/views/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _layouts_unsecured_layout__WEBPACK_IMPORTED_MODULE_5__["UnsecuredLayoutComponent"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: _core_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            },
            {
                path: 'home',
                loadChildren: './views/home/home.module#HomeModule',
                data: {
                    preload: true,
                    delay: false
                }
            },
        ]
    },
    {
        path: '',
        component: _layouts_secured_layout__WEBPACK_IMPORTED_MODULE_4__["SecuredLayoutComponent"],
        canActivateChild: [_core_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
        children: [
            {
                path: 'users',
                component: _views_user_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"],
            },
            {
                path: 'users/:id',
                component: _views_user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
            },
            {
                path: 'dashboard',
                component: _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                data: {
                    expectedRole: 'admin'
                }
            },
            {
                path: 'error',
                component: _core_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]
            },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [_app_preloading_strategy__WEBPACK_IMPORTED_MODULE_2__["AppPreloadingStrategy"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _app_preloading_strategy__WEBPACK_IMPORTED_MODULE_2__["AppPreloadingStrategy"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0Usc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFHRSx1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLG1CQUFtQixDQUFDLGlCQUFpQjtDQUN0QztBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7QUFDRDtFQUNFLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBRTtDQUN0QjtBQUNEO0VBQ0U7SUFDRSxVQUFVO0dBQ1g7RUFDRDtJQUNFLGdCQUFnQjtHQUNqQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEYXNoYm9hcmRDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbltjbGFzcyo9J2NvbC0nXSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbltjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiosICo6YWZ0ZXIsICo6YmVmb3JlIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmg0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmdyaWQge1xuICBtYXJnaW46IDA7XG59XG4uY29sLTEtNCB7XG4gIHdpZHRoOiAyNSU7XG59XG4ubW9kdWxlIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2VlZTtcbiAgbWF4LWhlaWdodDogMTIwcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5tb2R1bGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNjA3ZDhiO1xufVxuLmdyaWQtcGFkIHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLmdyaWQtcGFkID4gW2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1vZHVsZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1heC1oZWlnaHQ6IDc1cHg7IH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmdyaWQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAubW9kdWxlIHtcbiAgICBtaW4td2lkdGg6IDYwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-messages></app-messages>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(swUpdate) {
        this.swUpdate = swUpdate;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(function () {
                if (confirm('A newer version of the application is available. Load the new version ?')) {
                    window.location.reload();
                }
            });
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core.module */ "./src/app/core.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/error */ "./src/app/core/error/index.ts");
/* harmony import */ var _app_gui_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-gui.module */ "./src/app/app-gui.module.ts");
/* harmony import */ var _core_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/auth/auth.module */ "./src/app/core/auth/auth.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_messages_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/messages/messages.component */ "./src/app/core/messages/messages.component.ts");
/* harmony import */ var _layouts_secured_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/secured.layout */ "./src/app/layouts/secured.layout.ts");
/* harmony import */ var _layouts_unsecured_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/unsecured.layout */ "./src/app/layouts/unsecured.layout.ts");
/* harmony import */ var _core_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/login/login.component */ "./src/app/core/login/login.component.ts");
/* harmony import */ var _views_user_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/user/users.component */ "./src/app/views/user/users.component.ts");
/* harmony import */ var _views_user_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/user/user.component */ "./src/app/views/user/user.component.ts");
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_login_login_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/login/login-dialog.component */ "./src/app/core/login/login-dialog.component.ts");
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/header/header.component */ "./src/app/views/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _views_user_users_component__WEBPACK_IMPORTED_MODULE_15__["UsersComponent"],
                _views_user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"],
                _core_messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"],
                _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                _layouts_secured_layout__WEBPACK_IMPORTED_MODULE_12__["SecuredLayoutComponent"],
                _layouts_unsecured_layout__WEBPACK_IMPORTED_MODULE_13__["UnsecuredLayoutComponent"],
                _core_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _core_login_login_dialog_component__WEBPACK_IMPORTED_MODULE_19__["LoginDialogComponent"],
                _views_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
            ],
            imports: [
                _core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _core_error__WEBPACK_IMPORTED_MODULE_6__["ErrorModule"],
                _core_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _app_gui_module__WEBPACK_IMPORTED_MODULE_7__["AppGuiModule"],
            ],
            entryComponents: [
                _core_login_login_dialog_component__WEBPACK_IMPORTED_MODULE_19__["LoginDialogComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core.module.ts":
/*!********************************!*\
  !*** ./src/app/core.module.ts ***!
  \********************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_service_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/service/utils.service */ "./src/app/core/service/utils.service.ts");
/* harmony import */ var _core_messages_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/messages/message.service */ "./src/app/core/messages/message.service.ts");
/* harmony import */ var _core_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/service/http.service */ "./src/app/core/service/http.service.ts");
/* harmony import */ var _core_service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/service/notification.service */ "./src/app/core/service/notification.service.ts");
/* harmony import */ var _core_service_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/service/pagination.service */ "./src/app/core/service/pagination.service.ts");
/* harmony import */ var _core_service_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/service/login.service */ "./src/app/core/service/login.service.ts");
/* harmony import */ var _views_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/user.service */ "./src/app/views/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var CoreModule = /** @class */ (function () {
    // Make sure the core module is imported only once as it contains all global services which are to be singletons
    function CoreModule(coreModule) {
        if (coreModule) {
            throw new Error('The core module has ALREADY been imported.');
        }
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                _core_service_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"],
                _core_messages_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
                _core_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
                _core_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"],
                _core_service_pagination_service__WEBPACK_IMPORTED_MODULE_5__["PaginationService"],
                _views_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
                _core_service_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
            ],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/auth/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/auth/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token.service */ "./src/app/core/auth/token.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, tokenService, authService) {
        this.router = router;
        this.tokenService = tokenService;
        this.authService = authService;
    }
    // Check if the user can navigate to a route
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (isAuthenticated) {
            if (!isAuthenticated) {
                _this.authService.setPostLoginRedirectUrl(state.url);
                _this.router.navigate(['login']);
                return false;
            }
            else {
                return true;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error, caught) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }));
    };
    AuthGuardService.prototype.canActivateChild = function (route, state) {
        var _this = this;
        return this.authService.isAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (isAuthenticated) {
            if (!isAuthenticated) {
                _this.authService.setPostLoginRedirectUrl(state.url);
                _this.router.navigate(['login']);
                return false;
            }
            else {
                var expectedRole = route.data.expectedRole ? (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ROLE_PREFIX + route.data.expectedRole).toUpperCase() : null;
                var tokenPayload = _this.tokenService.getDecodedAccessToken();
                var actualRoles = tokenPayload.scopes ? tokenPayload.scopes : null;
                // Check the role only if the route expects one
                if (expectedRole != null && (actualRoles == null || !actualRoles.includes(expectedRole))) {
                    _this.router.navigate(['home']);
                    return false;
                }
                else {
                    return true;
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error, caught) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }));
    };
    // Check if a module should be loaded
    // It would be pointless to load a module if the user may not use it
    AuthGuardService.prototype.canLoad = function () {
        if (this.authService.isAuthenticated()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/core/auth/auth.interceptor.ts ***!
  \***********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./token.service */ "./src/app/core/auth/token.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/core/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PATH_LOGIN = 'login';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router, tokenService, authService) {
        this.router = router;
        this.tokenService = tokenService;
        this.authService = authService;
        this.refreshTokenInProgress = false;
        this.tokenRefreshedSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.tokenRefreshed$ = this.tokenRefreshedSource.asObservable();
        // Contains the current refresh token or is null if
        // the refresh is pending and no refresh token is currently available
        this.refreshTokenSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        if (this.authService.isSecuredUrl(request)) {
            return this.handleRequest(request, next);
        }
        else {
            return next.handle(request);
        }
    };
    AuthInterceptor.prototype.handleRequest = function (request, next) {
        var _this = this;
        request = this.addAccessToken(request);
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (response) {
            if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (error.status === 401) {
                    console.log('The response returned a 401 error');
                    if (_this.authService.isLoginRequest(request)) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
                    }
                    else if (_this.authService.isRefreshTokenRequest(request)) {
                        _this.logout();
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
                    }
                    else {
                        if (_this.authService.rememberMe()) {
                            // if (this.refreshTokenInProgress) {
                            //   return this.refreshTokenSubject
                            //     .pipe(
                            //       filter(result => result !== null),
                            //       take(1),
                            //       switchMap((token: any) => {
                            //         return next.handle(this.addAuthenticationAccessToken(request));
                            //       })
                            //     );
                            // } else {
                            //   this.refreshTokenInProgress = true;
                            //   // Reset the refresh token subject to null so that subsequent
                            //   // requests will wait until the new refresh token has been retrieved
                            //   this.refreshTokenSubject.next(null);
                            //   return this.authService.refreshAccessToken()
                            //     .pipe(
                            //       switchMap((token: any) => {
                            //         this.refreshTokenInProgress = false;
                            //         this.refreshTokenSubject.next(token);
                            //         return next.handle(this.addAuthenticationAccessToken(request));
                            //       })
                            //     )
                            //     .pipe(
                            //       catchError((err: any) => {
                            //         this.refreshTokenInProgress = false;
                            //         // this.logout();
                            //         return throwError(error);
                            //       })
                            //     );
                            // }
                            console.log('Remember me...');
                            return _this.refreshToken()
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
                                request = _this.addAccessToken(request);
                                return next.handle(request);
                            }))
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (refreshError) {
                                _this.authService.logout();
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["empty"])();
                                // return throwError(refreshError); TODO
                            }));
                        }
                    }
                }
                else if (error.status === 498) {
                    // The token expired
                    _this.logout();
                }
                console.log('The response returned the error with the status ' + error.status + ' ' + error.statusText);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        }));
    };
    AuthInterceptor.prototype.addAccessToken = function (request) {
        if (!this.tokenService.getAccessTokenFromLocalStorage()) {
            return request;
        }
        // The original request is immutable and cannot be changed
        return this.authService.addAccessTokenToClonedRequest(request);
    };
    AuthInterceptor.prototype.refreshToken = function () {
        var _this = this;
        if (this.refreshTokenInProgress) {
            return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this.tokenRefreshed$.subscribe(function () {
                    observer.next();
                    observer.complete();
                });
            });
        }
        else {
            this.refreshTokenInProgress = true;
            console.log('Sending a refresh token request...');
            return this.authService.refreshAccessToken()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
                console.log('The access token has been refreshed by the interceptor');
                _this.refreshTokenInProgress = false;
                _this.tokenRefreshedSource.next();
            }));
        }
    };
    AuthInterceptor.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.module.ts":
/*!******************************************!*\
  !*** ./src/app/core/auth/auth.module.ts ***!
  \******************************************/
/*! exports provided: jwtOptionsFactory, AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtOptionsFactory", function() { return jwtOptionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.interceptor */ "./src/app/core/auth/auth.interceptor.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _keycloak_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keycloak-client.service */ "./src/app/core/auth/keycloak-client.service.ts");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token.service */ "./src/app/core/auth/token.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/core/auth/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








function jwtOptionsFactory(tokenService) {
    return {
        // whitelistedDomains: ['localhost:4200'],
        // blacklistedRoutes: ['localhost:8180/auth/'],
        tokenGetter: function () {
            return tokenService.getAccessTokenFromLocalStorage();
        }
    };
}
var AuthModule = /** @class */ (function () {
    function AuthModule(keycloakClientService) {
        // const subscription = keycloakClientService.init() TODO
        // .subscribe(
        //   () => {
        //     console.log('The keycloak client service has been initialized');
        //   }
        // );
        // subscription.unsubscribe();
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtModule"].forRoot({
                    jwtOptionsProvider: {
                        provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JWT_OPTIONS"],
                        useFactory: jwtOptionsFactory,
                        deps: [_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"]]
                    }
                })
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
                _keycloak_client_service__WEBPACK_IMPORTED_MODULE_5__["KeycloakClientService"],
                _token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"],
                // {
                //   provide: HTTP_INTERCEPTORS, TODO
                //   useClass: KeycloakInterceptor,
                //   multi: true
                // },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_3__["AuthInterceptor"],
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_keycloak_client_service__WEBPACK_IMPORTED_MODULE_5__["KeycloakClientService"]])
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/http.service */ "./src/app/core/service/http.service.ts");
/* harmony import */ var _auth_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/token.service */ "./src/app/core/auth/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PATH_AUTH = 'auth';
var PATH_LOGIN = 'login';
var URI_LOGIN = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_REST_URI + '/' + PATH_AUTH + '/' + PATH_LOGIN;
var PATH_LOGOUT = 'logout';
var URI_LOGOUT = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_REST_URI + '/' + PATH_AUTH + '/' + PATH_LOGOUT;
var PATH_TOKEN_REFRESH = 'token-refresh';
var URI_REFRESH_TOKEN = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_REST_URI + '/' + PATH_AUTH + '/' + PATH_TOKEN_REFRESH;
var AuthService = /** @class */ (function () {
    function AuthService(httpService, tokenService) {
        this.httpService = httpService;
        this.tokenService = tokenService;
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        console.log('Sending the login credentials to obtain a token');
        var credentials = { 'email': username, 'password': password };
        var httpHeaders = this.httpService.buildHeader(null);
        httpHeaders = this.addClientIdHeader(httpHeaders);
        return this.httpService.postWithHeadersInResponse(URI_LOGIN, credentials, httpHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            _this.storeTokensInLocalStorage(response);
        }));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.httpService.postWithHeadersInResponse(URI_LOGOUT, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            _this.clearTokensFromLocalStorage(response);
        }));
    };
    AuthService.prototype.isAuthenticated = function () {
        if (this.tokenService.accessTokenExpired()) {
            console.log('The access token expired.');
            if (this.tokenService.refreshTokenExpired()) {
                console.log('The refresh token expired.');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
            }
            else {
                return this.refreshAccessToken()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                    if (response) {
                        console.log('The access token has been refreshed');
                        return true;
                    }
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error, caught) {
                    console.log('The access token could not be refreshed');
                    console.log(error);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
                }));
            }
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
    };
    AuthService.prototype.storeTokensInLocalStorage = function (response) {
        this.storeAccessTokenInLocalStorage(response);
        this.storeRefreshTokenInLocalStorage(response);
    };
    AuthService.prototype.storeAccessTokenInLocalStorage = function (response) {
        var accessTokenHeader = response.headers.get(this.tokenService.getAccessTokenHeaderName());
        if (null != accessTokenHeader) {
            var accessToken = this.tokenService.extractTokenFromHeaderValue(accessTokenHeader);
            if (null != accessToken) {
                console.log('Storing the access token from the response header: ' + accessToken);
                this.tokenService.setAccessTokenToLocalStorage(accessToken);
            }
        }
    };
    AuthService.prototype.storeRefreshTokenInLocalStorage = function (response) {
        var name = this.tokenService.getRefreshTokenHeaderName();
        var refreshTokenHeader = response.headers.get(this.tokenService.getRefreshTokenHeaderName());
        if (null != refreshTokenHeader) {
            var refreshToken = this.tokenService.extractTokenFromHeaderValue(refreshTokenHeader);
            if (null != refreshToken) {
                console.log('Storing the refresh token from the response header: ' + refreshToken);
                this.tokenService.setRefreshTokenToLocalStorage(refreshToken);
            }
        }
    };
    AuthService.prototype.clearTokensFromLocalStorage = function (response) {
        this.tokenService.setAccessTokenToLocalStorage('');
        this.tokenService.setRefreshTokenToLocalStorage('');
    };
    AuthService.prototype.addRefreshTokenHeader = function (httpHeaders) {
        var refreshHeaderName = this.tokenService.getRefreshTokenHeaderName();
        var refreshToken = this.tokenService.buildRefreshTokenValue();
        httpHeaders = httpHeaders.append(refreshHeaderName, refreshToken);
        return httpHeaders;
    };
    AuthService.prototype.addClientIdHeader = function (httpHeaders) {
        var clientIdHeaderName = this.tokenService.getClientIdHeaderName();
        var clientId = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].CLIENT_ID;
        httpHeaders = httpHeaders.append(clientIdHeaderName, clientId);
        return httpHeaders;
    };
    AuthService.prototype.refreshAccessToken = function () {
        var _this = this;
        console.log('Sending the refresh token to obtain a new access token');
        var httpHeaders = this.httpService.buildHeader(null);
        httpHeaders = this.addRefreshTokenHeader(httpHeaders);
        httpHeaders = this.addClientIdHeader(httpHeaders);
        return this.httpService.postWithHeadersInResponse(URI_REFRESH_TOKEN, {}, httpHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            // Only the access token is refreshed
            // Refresing the refresh token would be like giving a never expiring refresh token
            _this.storeAccessTokenInLocalStorage(response);
            console.log('Stored the refreshed access token in the local storage');
            return true;
        }));
    };
    AuthService.prototype.isLoginRequest = function (request) {
        return request.url.includes(PATH_LOGIN);
    };
    AuthService.prototype.isRefreshTokenRequest = function (request) {
        return request.url.includes(PATH_TOKEN_REFRESH);
    };
    AuthService.prototype.isSecuredUrl = function (request) {
        if (request.url.match(URI_LOGIN) || request.url.match(URI_REFRESH_TOKEN)) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.rememberMe = function () {
        return true; // TODO Implement the remember me
    };
    AuthService.prototype.addAccessTokenToClonedRequest = function (request) {
        var _a;
        var accessTokenHeaderName = this.tokenService.getAccessTokenHeaderName();
        return request.clone({
            setHeaders: (_a = {},
                _a[accessTokenHeaderName] = this.tokenService.buildAccessTokenValue(),
                // The cache and pragma headers prevent IE from caching GET 200 requests
                _a['Cache-Control'] = 'no-cache',
                _a['Pragma'] = 'no-cache',
                _a)
        });
    };
    AuthService.prototype.setPostLoginRedirectUrl = function (postLoginRedirectUrl) {
        this.postLoginRedirectUrl = postLoginRedirectUrl;
    };
    AuthService.prototype.getPostLoginRedirectUrl = function () {
        return this.postLoginRedirectUrl;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _auth_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/auth/keycloak-client.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/auth/keycloak-client.service.ts ***!
  \******************************************************/
/*! exports provided: KeycloakClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeycloakClientService", function() { return KeycloakClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KeycloakClientService = /** @class */ (function () {
    function KeycloakClientService(httpClient, zone) {
        this.httpClient = httpClient;
        this.zone = zone;
    }
    KeycloakClientService_1 = KeycloakClientService;
    KeycloakClientService.prototype.init = function () {
        KeycloakClientService_1.auth.loggedIn = false;
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var keycloakConfig = {
                'url': _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].KEYCLOAK_URI,
                'realm': _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].KEYCLOAK_REALM,
                'clientId': _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].KEYCLOAK_CLIENTID,
                'ssl-required': 'external',
                'public-client': true
            };
            var keycloakAuth = new Keycloak(keycloakConfig);
            keycloakAuth.init({ 'onLoad': 'check-sso' })
                .success(function () {
                KeycloakClientService_1.auth.loggedIn = true;
                KeycloakClientService_1.auth.authz = keycloakAuth;
                KeycloakClientService_1.auth.logoutUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].KEYCLOAK_URI
                    + '/realms/' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].KEYCLOAK_REALM + '/protocol/openid-connect/logout?redirect_uri='
                    + document.baseURI;
                console.log('The keycloak auth has been initialized');
                observer.next('Succeeded in initiating the keycloak client');
                observer.complete();
            })
                .error(function () {
                console.log('The keycloak client could not be initiated');
                observer.error('Failed to initiate the keycloak client');
            });
        });
    };
    KeycloakClientService.prototype.login = function (ussername, password) {
        console.log('Sending the login credentials to obtain a token');
        var credentials = { username: ussername, password: password };
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].KEYCLOAK_URI + '/realms/' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].KEYCLOAK_REALM
            + '/protocol/openid-connect/token/generate-token';
        return this.httpClient.post(url, credentials);
    };
    KeycloakClientService.prototype.logout = function () {
        KeycloakClientService_1.auth.loggedIn = false;
        KeycloakClientService_1.auth.authz = null;
        window.location.href = KeycloakClientService_1.auth.logoutUrl;
    };
    KeycloakClientService.prototype.hasRole = function (role) {
        return KeycloakClientService_1.auth.authz.tokenParsed.realm_access.roles.indexOf(role) > -1;
    };
    KeycloakClientService.prototype.getRealmRoles = function () {
        return KeycloakClientService_1.auth.authz.realmAccess.roles;
    };
    KeycloakClientService.prototype.hasRealmRole = function (role) {
        return KeycloakClientService_1.auth.authz.hasRealmRole(role);
    };
    KeycloakClientService.prototype.getUsername = function () {
        return KeycloakClientService_1.auth.authz.tokenParsed.preferred_username;
    };
    KeycloakClientService.prototype.getFullName = function () {
        return KeycloakClientService_1.auth.authz.tokenParsed.name;
    };
    KeycloakClientService.prototype.getToken = function () {
        console.log('Getting the retrieved token');
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            if (KeycloakClientService_1.auth.authz && KeycloakClientService_1.auth.authz.token) {
                KeycloakClientService_1.auth.authz
                    .updateToken(5) // Refresh the token if it will expire in n seconds or less
                    .success(function () {
                    observer.next(KeycloakClientService_1.auth.authz.token);
                    observer.complete();
                })
                    .error(function () {
                    observer.error('Failed to refresh the auth token');
                });
            }
            else {
                observer.error('The auth token could not be retrieved because the user was not logged in');
            }
        });
    };
    KeycloakClientService.prototype.clearToken = function () {
        KeycloakClientService_1.auth.authz.clearToken();
    };
    KeycloakClientService.prototype.accountManagement = function () {
        KeycloakClientService_1.auth.authz.accountManagement();
    };
    KeycloakClientService.prototype.getConfiguration = function () {
        var notAvailable = 'N/A';
        return {
            'authServerUrl': KeycloakClientService_1.auth.authz.authServerUrl ? KeycloakClientService_1.auth.authz.authServerUrl : notAvailable,
            'openIdFlow': KeycloakClientService_1.auth.authz.flow ? KeycloakClientService_1.auth.authz.flow : notAvailable,
            'openIdResponseMode': KeycloakClientService_1.auth.authz.responseMode ? KeycloakClientService_1.auth.authz.responseMode : notAvailable,
            'openIdResponseType': KeycloakClientService_1.auth.authz.responseType ? KeycloakClientService_1.auth.authz.responseType : notAvailable,
            'realm': KeycloakClientService_1.auth.authz.realm ? KeycloakClientService_1.auth.authz.realm : notAvailable,
            'clientId': KeycloakClientService_1.auth.authz.clientId ? KeycloakClientService_1.auth.authz.clientId : notAvailable,
            'timeSkew': KeycloakClientService_1.auth.authz.timeSkew ? KeycloakClientService_1.auth.authz.timeSkew : notAvailable
        };
    };
    KeycloakClientService.prototype.loadUserProfile = function () {
        return new Promise(function (resolve, reject) {
            KeycloakClientService_1.auth.authz.loadUserProfile().success(function (profile) {
                resolve(profile);
            }).error(function () {
                reject('Failed to retrieve user profile');
            });
        });
    };
    var KeycloakClientService_1;
    KeycloakClientService.auth = {};
    KeycloakClientService = KeycloakClientService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], KeycloakClientService);
    return KeycloakClientService;
}());



/***/ }),

/***/ "./src/app/core/auth/token.service.ts":
/*!********************************************!*\
  !*** ./src/app/core/auth/token.service.ts ***!
  \********************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// See https://github.com/auth0/angular2-jwt
var ACCESS_TOKEN_NAME = 'accessToken';
var REFRESH_TOKEN_NAME = 'refreshToken';
var ACCESS_TOKEN_HEADER_NAME = 'Authorization';
var AUTH_BEARER_HEADER = 'Bearer';
var REFRESH_TOKEN_HEADER_NAME = 'TokenRefresh';
var CLIENT_ID_HEADER_NAME = 'ClientId';
var TokenService = /** @class */ (function () {
    function TokenService() {
        // See https://stackoverflow.com/questions/49240232/getting-a-cyclic-dependency-error
        this.jwtHelperService = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
    }
    // constructor(private jwtHelperService: JwtHelperService) {}
    TokenService.prototype.accessTokenExpired = function () {
        var token = this.getAccessTokenFromLocalStorage();
        return (!token || this.jwtHelperService.isTokenExpired(token));
    };
    TokenService.prototype.refreshTokenExpired = function () {
        var token = this.getRefreshTokenFromLocalStorage();
        return (!token || this.jwtHelperService.isTokenExpired(token));
    };
    TokenService.prototype.getAccessTokenExpirationDate = function () {
        var token = this.getAccessTokenFromLocalStorage();
        return this.jwtHelperService.getTokenExpirationDate(token);
    };
    TokenService.prototype.getDecodedAccessToken = function () {
        var token = this.getAccessTokenFromLocalStorage();
        return this.jwtHelperService.decodeToken(token);
    };
    TokenService.prototype.getAccessTokenFromLocalStorage = function () {
        return localStorage.getItem(ACCESS_TOKEN_NAME);
    };
    TokenService.prototype.setAccessTokenToLocalStorage = function (token) {
        localStorage.setItem(ACCESS_TOKEN_NAME, token);
    };
    TokenService.prototype.getRefreshTokenFromLocalStorage = function () {
        return localStorage.getItem(REFRESH_TOKEN_NAME);
    };
    TokenService.prototype.setRefreshTokenToLocalStorage = function (token) {
        localStorage.setItem(REFRESH_TOKEN_NAME, token);
    };
    TokenService.prototype.extractTokenFromHeaderValue = function (header) {
        if (header.startsWith(AUTH_BEARER_HEADER)) {
            return header.substring(7, header.length);
        }
        else {
            return null;
        }
    };
    TokenService.prototype.buildAccessTokenValue = function () {
        return AUTH_BEARER_HEADER + ' ' + this.getAccessTokenFromLocalStorage();
    };
    TokenService.prototype.buildRefreshTokenValue = function () {
        return AUTH_BEARER_HEADER + ' ' + this.getRefreshTokenFromLocalStorage();
    };
    TokenService.prototype.getAccessTokenHeaderName = function () {
        return ACCESS_TOKEN_HEADER_NAME;
    };
    TokenService.prototype.getRefreshTokenHeaderName = function () {
        return REFRESH_TOKEN_HEADER_NAME;
    };
    TokenService.prototype.getClientIdHeaderName = function () {
        return CLIENT_ID_HEADER_NAME;
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/core/error/error-custom-handler.ts":
/*!****************************************************!*\
  !*** ./src/app/core/error/error-custom-handler.ts ***!
  \****************************************************/
/*! exports provided: ErrorCustomHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCustomHandler", function() { return ErrorCustomHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.service */ "./src/app/core/error/error.service.ts");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/notification.service */ "./src/app/core/service/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ErrorCustomHandler = /** @class */ (function () {
    function ErrorCustomHandler(injector) {
        this.injector = injector;
    }
    ErrorCustomHandler.prototype.handleError = function (error) {
        var notificationService = this.injector.get(_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]);
        var errorService = this.injector.get(_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"]);
        var router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            // Handle server or connection errors
            if (!navigator.onLine) {
                // TODO return notificationService.notify('No Internet Connection');
                console.log('No internet connection');
            }
            else {
                // Handle Http errors (like error.status === 403, 404...)
                console.log('An HTTP error occured');
                errorService.log(error).subscribe(function (errorWithContextInfo) {
                    console.log(errorWithContextInfo);
                });
                // TODO return notificationService.notify(`${error.status} - ${error.message}`);
            }
        }
        else {
            // Handle client errors (Angular Error, ReferenceError...)
            // Client errors can completely crash the app,
            // or originate corrupt data that could be stored in the server,
            // or keep the user working on stuff that wouldn’t be saved
            // If something is broken in the app, stop the app and
            // redirect the user to an error screen with all the information
            console.log('A client error occured');
            errorService.log(error).subscribe(function (errorWithContextInfo) {
                console.log(errorWithContextInfo);
                router.navigate(['error'], { queryParams: errorWithContextInfo });
            });
        }
    };
    ErrorCustomHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], ErrorCustomHandler);
    return ErrorCustomHandler;
}());



/***/ }),

/***/ "./src/app/core/error/error-request-interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/error/error-request-interceptor.ts ***!
  \*********************************************************/
/*! exports provided: ErrorRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorRequestInterceptor", function() { return ErrorRequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _error_custom_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-custom-handler */ "./src/app/core/error/error-custom-handler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Because the best Error is the one that never happens, improve the error handling
// using an HttpInterceptor to intercept all the server calls and retry them n times
// before throwing an error
var NB_RETRIES = 3;
var HTTP_SERVER_ERROR = /^5.*$/;
var ErrorRequestInterceptor = /** @class */ (function () {
    function ErrorRequestInterceptor(errorCustomHandler) {
        this.errorCustomHandler = errorCustomHandler;
    }
    // TODO https://stackoverflow.com/questions/51999929
    ErrorRequestInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (errors) {
            return errors
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (error) {
                if (_this.isServerError(error)) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(200));
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
                }
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(NB_RETRIES))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({ error: 'There was a server error (after ' + NB_RETRIES + ' retries)' })));
        }));
    };
    ErrorRequestInterceptor.prototype.isServerError = function (error) {
        return HTTP_SERVER_ERROR.test((error.status.toString()));
    };
    ErrorRequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_error_custom_handler__WEBPACK_IMPORTED_MODULE_3__["ErrorCustomHandler"]])
    ], ErrorRequestInterceptor);
    return ErrorRequestInterceptor;
}());



/***/ }),

/***/ "./src/app/core/error/error-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/core/error/error-routing.module.ts ***!
  \****************************************************/
/*! exports provided: ErrorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorRoutingModule", function() { return ErrorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.component */ "./src/app/core/error/error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'error', component: _error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"] },
    { path: '**', component: _error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], data: { error: 404 } },
];
var ErrorRoutingModule = /** @class */ (function () {
    function ErrorRoutingModule() {
    }
    ErrorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ErrorRoutingModule);
    return ErrorRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/error/error.component.html":
/*!*************************************************!*\
  !*** ./src/app/core/error/error.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div *ngIf=\"routeParams?.message\">\n        <div>Message : {{ routeParams?.message }}</div>\n        <div>Stack : {{ routeParams?.stack }}</div>\n        <div>Name : {{ routeParams?.name }}</div>\n        <div>Url : {{ routeParams?.url }}</div>\n        <div>User : {{ routeParams?.user }}</div>\n        <div>Time : {{ routeParams?.time | date : 'yyyy-MM-dd HH:mm:ss'}}</div>\n        <div>Application : {{ routeParams?.appId }}</div>\n        <div>Id : {{ routeParams?.id }}</div>\n    </div>\n    <div *ngIf=\"data\">\n        <div>{{ data }}</div>\n    </div>\n    <div>\n        <a mat-raised-button [routerLink]=\"'/'\">Home</a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/error/error.component.scss":
/*!*************************************************!*\
  !*** ./src/app/core/error/error.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h3, h4, h5 {\n  margin-bottom: 0;\n  margin-top: 10px; }\n\n.error-container {\n  width: 220px;\n  margin: 0 auto;\n  margin-top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0ZXBoYW5lL2Rldi9qcy9wcm9qZWN0cy9hbmd1bGFyL25nLXplcm8vc3JjL2FwcC9jb3JlL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGFBQVk7RUFDWixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixvQ0FBMkI7VUFBM0IsNEJBQTJCO0VBQzNCLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSwgaDMsIGg0LCBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIFxuICAuZXJyb3ItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/core/error/error.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/error/error.component.ts ***!
  \***********************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        this.routeParams = this.activatedRoute.snapshot.queryParams;
        this.data = this.activatedRoute.snapshot.data;
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/core/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/core/error/error.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/core/error/error.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/error/error.module.ts ***!
  \********************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error_custom_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-custom-handler */ "./src/app/core/error/error-custom-handler.ts");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error.service */ "./src/app/core/error/error.service.ts");
/* harmony import */ var _error_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-routing.module */ "./src/app/core/error/error-routing.module.ts");
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error.component */ "./src/app/core/error/error.component.ts");
/* harmony import */ var _error_request_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error-request-interceptor */ "./src/app/core/error/error-request-interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// See https://medium.com/@aleixsuau/error-handling-angular-859d529fa53a
var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _error_routing_module__WEBPACK_IMPORTED_MODULE_6__["ErrorRoutingModule"],
            ],
            providers: [
                _error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
                    useClass: _error_custom_handler__WEBPACK_IMPORTED_MODULE_4__["ErrorCustomHandler"]
                },
                _error_custom_handler__WEBPACK_IMPORTED_MODULE_4__["ErrorCustomHandler"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                    useClass: _error_request_interceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorRequestInterceptor"],
                    multi: true,
                }
            ]
        })
    ], ErrorModule);
    return ErrorModule;
}());



/***/ }),

/***/ "./src/app/core/error/error.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/error/error.service.ts ***!
  \*********************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ErrorService = /** @class */ (function () {
    function ErrorService(injector, router, httpClient) {
        var _this = this;
        this.injector = injector;
        this.router = router;
        this.httpClient = httpClient;
        // Subscribe to the navigation errors
        this.router
            .events
            .subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
                _this.log(event.error)
                    .subscribe(function (errorWithContext) {
                    _this.router.navigate(['error'], { queryParams: errorWithContext });
                });
            }
        });
    }
    ErrorService.prototype.log = function (error) {
        var errorWithContext = this.addContextInfo(error);
        return MockHttpService.post(errorWithContext); // TODO Implement a server side error inbox
    };
    ErrorService.prototype.addContextInfo = function (error) {
        var appId = 'My API id'; // TODO get an env variable
        var location = this.injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"]);
        var url = location instanceof _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] ? location.path() : '';
        var time = new Date().getTime();
        var name = error.name || null;
        var user = ''; // TODO get the logged in user
        var id = appId + "-" + user + "-" + time;
        var status = error.status || null;
        var message = (error && error.body) ? error.body.error : error.toString();
        var stack = error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] ? null : error; // TODO StackTraceParser.parse(error);
        var method = (stack && stack[0]) ? stack[0].functionName : null;
        var errorWithContext = { message: message, method: method, name: name, appId: appId, user: user, time: time, id: id, url: url, status: status, stack: stack };
        return errorWithContext;
    };
    ErrorService.prototype.fireFakeClientError = function () {
        throw new Error('Another runtime error)');
        // As the 'it' object is not defined, this should produce a runtime error
        // return it.happens;
    };
    ErrorService.prototype.fireFakeServerError = function () {
        this.httpClient
            .get('https://jsonplaceholder.typicode.com/1')
            .subscribe();
    };
    ErrorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ErrorService);
    return ErrorService;
}());

var MockHttpService = /** @class */ (function () {
    function MockHttpService() {
    }
    MockHttpService.post = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
    };
    return MockHttpService;
}());


/***/ }),

/***/ "./src/app/core/error/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/error/index.ts ***!
  \*************************************/
/*! exports provided: ErrorModule, ErrorService, ErrorCustomHandler, ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.module */ "./src/app/core/error/error.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return _error_module__WEBPACK_IMPORTED_MODULE_0__["ErrorModule"]; });

/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.service */ "./src/app/core/error/error.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return _error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorService"]; });

/* harmony import */ var _error_custom_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-custom-handler */ "./src/app/core/error/error-custom-handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorCustomHandler", function() { return _error_custom_handler__WEBPACK_IMPORTED_MODULE_2__["ErrorCustomHandler"]; });

/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .//error.component */ "./src/app/core/error/error.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return _error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"]; });







/***/ }),

/***/ "./src/app/core/login/login-dialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/core/login/login-dialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Login</h1>\n<form [formGroup]=\"myform\" (ngSubmit)=\"submit(myform)\">\n\t<h1 mat-dialog-title>Add file</h1>\n\t<mat-dialog-content>\n\t\t<mat-form-field>\n\t\t\t<input matInput formControlName=\"username\" placeholder=\"Enter your login name\">\n\t\t\t<mat-hint align=\"start\"><strong>Some hint</strong></mat-hint>\n\t\t\t<mat-hint align=\"end\">Some other hint</mat-hint>\n\t\t\t<mat-error>This field is required</mat-error>\n\t\t</mat-form-field>\n\t</mat-dialog-content>\n\t<mat-dialog-actions>\n\t\t<button mat-button type=\"submit\">Add</button>\n\t\t<button mat-button type=\"button\" mat-dialog-close>Cancel</button>\n\t</mat-dialog-actions>\n</form>"

/***/ }),

/***/ "./src/app/core/login/login-dialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/core/login/login-dialog.component.ts ***!
  \******************************************************/
/*! exports provided: LoginDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialogComponent", function() { return LoginDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var LoginDialogComponent = /** @class */ (function () {
    function LoginDialogComponent(formBuilder, loginDialog, data) {
        this.formBuilder = formBuilder;
        this.loginDialog = loginDialog;
        this.data = data;
    }
    LoginDialogComponent.prototype.ngOnInit = function () {
        this.myform = this.formBuilder.group({
            username: this.data ? this.data.name : ''
        });
    };
    LoginDialogComponent.prototype.submit = function (form) {
        this.loginDialog.close("" + this.myform.value.username);
    };
    LoginDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-dialog',
            template: __webpack_require__(/*! ./login-dialog.component.html */ "./src/app/core/login/login-dialog.component.html")
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], LoginDialogComponent);
    return LoginDialogComponent;
}());



/***/ }),

/***/ "./src/app/core/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/core/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n    max-width: 400px;\n    margin: 2em auto;\n    text-align: center;\n}\n\n.signin-content {\n    padding: 60px 1rem;\n}\n\n.full-width-input {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpZ25pbi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA2MHB4IDFyZW07XG59XG5cbi5mdWxsLXdpZHRoLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/core/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"signin-content\">\n\t<mat-card>\n\t\t<mat-card-header>\n\t\t\t<mat-card-title>Login</mat-card-title>\n\t\t</mat-card-header>\n\t\t\t<mat-card-content>\n\t\t\t<form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n\t\t\t\t<p>Please login to continue</p>\n\t\t\t\t<mat-form-field class=\"full-width-input\">\n\t\t\t\t\t<input matInput placeholder=\"User\" formControlName=\"username\" required>\n\t\t\t\t\t<mat-error *ngIf=\"isFieldInvalid('username')\">\n\t\t\t\t\t\tPlease inform your user name\n\t\t\t\t\t</mat-error>\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-form-field class=\"full-width-input\">\n\t\t\t\t\t<input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n\t\t\t\t\t<mat-error *ngIf=\"isFieldInvalid('password')\">\n\t\t\t\t\t\tPlease inform your password\n\t\t\t\t\t</mat-error>\n\t\t\t\t</mat-form-field>\n\t\t\t\t<button mat-raised-button color=\"primary\" type=\"submit\">Login</button>\n\t\t\t</form>\n\t\t</mat-card-content>\n\t</mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/core/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/token.service */ "./src/app/core/auth/token.service.ts");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/login.service */ "./src/app/core/service/login.service.ts");
/* harmony import */ var _login_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-dialog.component */ "./src/app/core/login/login-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, dialog, tokenService, loginService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.dialog = dialog;
        this.tokenService = tokenService;
        this.loginService = loginService;
        this.username = 'mittiprovence@yahoo.se';
        this.password = 'mignet';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            username: [this.username, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [this.password, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    LoginComponent.prototype.isFieldInvalid = function (field) {
        return ((!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt));
    };
    LoginComponent.prototype.login = function () {
        if (this.form.valid) {
            this.loginService.login(this.form.get('username').value, this.form.get('password').value);
        }
    };
    LoginComponent.prototype.openLoginDialog = function (username) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.hasBackdrop = false;
        dialogConfig.data = {
            login: username ? username : ''
        };
        this.loginDialog = this.dialog.open(_login_dialog_component__WEBPACK_IMPORTED_MODULE_6__["LoginDialogComponent"], dialogConfig);
        this.loginDialog.afterClosed().subscribe(function (name) {
            console.log(name);
            _this.username = name;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/core/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/core/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _auth_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"],
            _service_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/messages/message.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/messages/message.service.ts ***!
  \**************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/core/messages/messages.component.css":
/*!******************************************************!*\
  !*** ./src/app/core/messages/messages.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\nh2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  margin: 2em;\n}\nbody, input[text], button {\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\nbutton.clear {\n  color: #888;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0QztBQUM1QztFQUNFLFdBQVc7RUFDWCwwQ0FBMEM7RUFDMUMscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFDRDtFQUNFLGVBQWU7RUFDZiw4QkFBOEI7Q0FDL0I7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1lc3NhZ2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5oMiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbmJvZHkge1xuICBtYXJnaW46IDJlbTtcbn1cbmJvZHksIGlucHV0W3RleHRdLCBidXR0b24ge1xuICBjb2xvcjogY3JpbXNvbjtcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWE7XG59XG5cbmJ1dHRvbi5jbGVhciB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogI2FhYTtcbiAgY3Vyc29yOiBhdXRvO1xufVxuYnV0dG9uLmNsZWFyIHtcbiAgY29sb3I6ICM4ODg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/messages/messages.component.html":
/*!*******************************************************!*\
  !*** ./src/app/core/messages/messages.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\t<h2>Messages</h2>\n\t<button class=\"clear\" (click)=\"messageService.clear()\">clear</button>\n\t<div *ngFor='let message of messageService.messages'>{{message}}\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/core/messages/messages.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/messages/messages.component.ts ***!
  \*****************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.service */ "./src/app/core/messages/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/core/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/core/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/core/service/http.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/service/http.service.ts ***!
  \**********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(httpClient) {
        this.httpClient = httpClient;
    }
    HttpService.prototype.get = function (url, httpParams, headers) {
        var options = this.buildOptions(headers);
        options = this.addOptionParams(options, httpParams);
        return this.httpClient.get(url, options);
    };
    HttpService.prototype.post = function (url, body, headers) {
        return this.httpClient.post(url, body, this.buildOptions(headers));
    };
    HttpService.prototype.postWithHeadersInResponse = function (url, body, headers) {
        var options = this.buildOptions(headers);
        options = this.addOptionForCompleteResponse(options);
        return this.httpClient.post(url, body, options);
    };
    HttpService.prototype.put = function (url, body, headers) {
        return this.httpClient.put(url, body, this.buildOptions(headers));
    };
    HttpService.prototype.patch = function (url, body, headers) {
        return this.httpClient.patch(url, body, this.buildOptions(headers));
    };
    HttpService.prototype.delete = function (url, headers) {
        return this.httpClient.delete(url, this.buildOptions(headers));
    };
    HttpService.prototype.buildOptions = function (headers) {
        var options = {
            headers: this.buildHeader(headers),
            responseType: 'json'
        };
        return options;
    };
    HttpService.prototype.addOptionParams = function (options, httpParams) {
        options['params'] = httpParams;
        return options;
    };
    // Have the response headers included in the response object
    HttpService.prototype.addOptionForCompleteResponse = function (options) {
        options['observe'] = 'response';
        return options;
    };
    HttpService.prototype.buildHeader = function (headers) {
        headers = headers || new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Accept', 'application/json');
        return headers;
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/core/service/login.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/service/login.service.ts ***!
  \***********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/core/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        this.authService.login(username, password).subscribe(function (response) {
            if (_this.authService.getPostLoginRedirectUrl() != null) {
                _this.router.navigateByUrl(_this.authService.getPostLoginRedirectUrl());
            }
            else {
                _this.router.navigate(['users']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginService.prototype.logout = function () {
        var _this = this;
        this.authService.logout().subscribe(function (response) {
            _this.router.navigate(['login']);
        }, function (error) {
            console.log(error);
        });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/core/service/notification.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/service/notification.service.ts ***!
  \******************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this._notification = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.notification$ = this._notification.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["publish"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["refCount"])()));
    }
    NotificationService.prototype.notify = function (message) {
        var _this = this;
        this._notification.next(message);
        setTimeout(function () { return _this._notification.next(null); }, 3000);
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/core/service/pagination.api.ts":
/*!************************************************!*\
  !*** ./src/app/core/service/pagination.api.ts ***!
  \************************************************/
/*! exports provided: PaginationApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationApi", function() { return PaginationApi; });
var PaginationApi = /** @class */ (function () {
    function PaginationApi(currentPageNumber, elementsPerPage, totalElements, totalPages) {
        this.currentPageNumber = currentPageNumber;
        this.elementsPerPage = elementsPerPage;
        this.totalElements = totalElements;
        this.totalPages = totalPages;
    }
    return PaginationApi;
}());



/***/ }),

/***/ "./src/app/core/service/pagination.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/service/pagination.service.ts ***!
  \****************************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PaginationService = /** @class */ (function () {
    function PaginationService() {
    }
    // The current page number returned in the json response by Spring Data
    // is still zero based even if the configuration asks for a one based indexed pagination
    // See https://jira.spring.io/browse/DATACMNS-563
    PaginationService.prototype.correctPageNumberMispatch = function (pageNumber) {
        return pageNumber + 1;
    };
    PaginationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "./src/app/core/service/utils.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/service/utils.service.ts ***!
  \***********************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.prototype.sortByAsc = function (collection, fieldName) {
        return collection.sort(function (param1, param2) {
            return param1[fieldName] < param2[fieldName] ? -1 :
                (param1[fieldName] > param2[fieldName] ? 1 : 0);
        });
    };
    UtilsService.prototype.sortByDesc = function (collection, fieldName) {
        return collection.sort(function (param1, param2) {
            return param1[fieldName] > param2[fieldName] ? -1 :
                (param1[fieldName] < param2[fieldName] ? 1 : 0);
        });
    };
    UtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/layouts/secured.layout.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layouts/secured.layout.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\n  <mat-sidenav #sidenav mode=\"push\" class=\"app-sidenav\">\n    <mat-toolbar color=\"primary\">\n      <!--future svg to go here-->\n      <span class=\"toolbar-filler\"></span>\n      <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"mat-icon-button sidenav-toggle-button\" [hidden]=\"!sidenav.opened\">\n        <mat-icon aria-label=\"Menu\" class=\"material-icons\">close</mat-icon>\n      </button>\n    </mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item class=\"sidenav-link\" (click)=\"sidenav.toggle();logout(); \">\n        <mat-icon mat-list-icon>account_balance</mat-icon>\n        <span class=\"title\" mat-line>Log out</span>\n        <span mat-line class=\"secondary\">Log me out</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link\" [routerLink]=\"['/users']\" (click)=\"sidenav.toggle()\">\n        <mat-icon mat-list-icon>android</mat-icon>\n        <span class=\"title\" mat-line>Users</span>\n        <span mat-line class=\"secondary\">The users</span>\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"mat-icon-button sidenav-toggle-button\" [hidden]=\"sidenav.opened\">\n      <mat-icon aria-label=\"Another menu\" class=\"material-icons\">menu</mat-icon>\n    </button>\n    <h1 class=\"component-title\">\n      <a class=\"title-link\">{{title}}</a>\n    </h1>\n  </mat-toolbar>\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/layouts/secured.layout.ts":
/*!*******************************************!*\
  !*** ./src/app/layouts/secured.layout.ts ***!
  \*******************************************/
/*! exports provided: SecuredLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuredLayoutComponent", function() { return SecuredLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/service/login.service */ "./src/app/core/service/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecuredLayoutComponent = /** @class */ (function () {
    function SecuredLayoutComponent(loginService) {
        this.loginService = loginService;
        this.title = 'Tour of Zeroes';
    }
    SecuredLayoutComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    SecuredLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-layout',
            template: __webpack_require__(/*! ./secured.layout.component.html */ "./src/app/layouts/secured.layout.component.html")
        }),
        __metadata("design:paramtypes", [_core_service_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], SecuredLayoutComponent);
    return SecuredLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/unsecured.layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layouts/unsecured.layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\n  <mat-sidenav #sidenav mode=\"push\" class=\"app-sidenav\">\n    <mat-toolbar color=\"primary\">\n      <!--future svg to go here-->\n      <span class=\"toolbar-filler\"></span>\n      <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"mat-icon-button sidenav-toggle-button\" [hidden]=\"!sidenav.opened\">\n        <mat-icon aria-label=\"Menu\" class=\"material-icons\">close</mat-icon>\n      </button>\n    </mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item class=\"sidenav-link\" [routerLink]=\"['/login']\" (click)=\"sidenav.toggle()\">\n        <mat-icon mat-list-icon>account_box</mat-icon>\n        <span class=\"title\" mat-line>Log In</span>\n        <span mat-line class=\"secondary\">Log in the application</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link\" [routerLink]=\"['/users']\" (click)=\"sidenav.toggle()\">\n        <mat-icon mat-list-icon>android</mat-icon>\n        <span class=\"title\" mat-line>Users</span>\n        <span mat-line class=\"secondary\">The users</span>\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"mat-icon-button sidenav-toggle-button\" [hidden]=\"sidenav.opened\">\n      <mat-icon aria-label=\"Another menu\" class=\"material-icons\">menu</mat-icon>\n    </button>\n    <h1 class=\"component-title\">\n      <a class=\"title-link\">{{title}}</a>\n    </h1>\n  </mat-toolbar>\n  <router-outlet></router-outlet>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/layouts/unsecured.layout.ts":
/*!*********************************************!*\
  !*** ./src/app/layouts/unsecured.layout.ts ***!
  \*********************************************/
/*! exports provided: UnsecuredLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsecuredLayoutComponent", function() { return UnsecuredLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UnsecuredLayoutComponent = /** @class */ (function () {
    function UnsecuredLayoutComponent() {
        this.title = 'Tour of Zeroes';
    }
    UnsecuredLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unsecured-layout',
            template: __webpack_require__(/*! ./unsecured.layout.component.html */ "./src/app/layouts/unsecured.layout.component.html")
        })
    ], UnsecuredLayoutComponent);
    return UnsecuredLayoutComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QztFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLHNCQUFzQjtDQUN2QjtBQUNEO0VBR0UsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxtQkFBbUIsQ0FBQyxpQkFBaUI7Q0FDdEM7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUU7Q0FDdEI7QUFDRDtFQUNFO0lBQ0UsVUFBVTtHQUNYO0VBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERhc2hib2FyZENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuW2NsYXNzKj0nY29sLSddIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuW2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuKiwgKjphZnRlciwgKjpiZWZvcmUge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAwO1xufVxuaDQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ3JpZCB7XG4gIG1hcmdpbjogMDtcbn1cbi5jb2wtMS00IHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5tb2R1bGUge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZWVlO1xuICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLm1vZHVsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM2MDdkOGI7XG59XG4uZ3JpZC1wYWQge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uZ3JpZC1wYWQgPiBbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9kdWxlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWF4LWhlaWdodDogNzVweDsgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZ3JpZCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5tb2R1bGUge1xuICAgIG1pbi13aWR0aDogNjBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Top Users</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let user of users\" class=\"col-1-4\" routerLink=\"/user/{{user.id}}\">\n    <div class=\"module user\">\n      <h4>{{user.email}} {{user.id}}</h4>\n    </div>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ "./src/app/views/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    DashboardComponent.prototype.getAll = function () {
        var _this = this;
        this.userService.getAll()
            .subscribe(function (users) {
            _this.users = _this.users = users;
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/views/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/views/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/header/header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".angular-logo {\n    margin: 0 4px 3px 0;\n    height: 35px;\n    vertical-align: middle;\n}\n.fill-remaining-space {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYix1QkFBdUI7Q0FDMUI7QUFDRDtFQUNFLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5ndWxhci1sb2dvIHtcbiAgICBtYXJnaW46IDAgNHB4IDNweCAwO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgZmxleDogMSAxIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/views/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>\n    My header\n  </span>\n  <span class=\"fill-remaining-space\"></span>\n  <button mat-button routerLink=\"/home\">Home</button>\n  <button mat-button routerLink=\"/users\">Users</button>\n  <button mat-button routerLink=\"/dashboard\">Dashboard</button>\n  <button mat-button (click)=\"logout()\">Logout</button>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/views/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/service/login.service */ "./src/app/core/service/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginService) {
        this.loginService = loginService;
    }
    HeaderComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/views/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/views/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_core_service_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/user/user.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/user/user.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/user/user.component.html":
/*!************************************************!*\
  !*** ./src/app/views/user/user.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\n  <h2>{{ user.name | uppercase }}</h2>\n  <div>\n    <span>id: </span>{{user.id}}</div>\n  <div>\n    <label>Firstname:\n      <input [(ngModel)]=\"user.firstname\" placeholder=\"firstname\" />\n      <!-- TODO Replace the  [(ngModel)] for a reactive form syntax -->\n    </label>\n  </div>\n  <div>\n    <label>Lastname:\n      <input [(ngModel)]=\"user.lastname\" placeholder=\"lastname\" />\n      <!-- TODO Replace the  [(ngModel)] for a reactive form syntax -->\n    </label>\n  </div>\n\n</div>\n\n<button (click)=\"goBack()\">Cancel</button>\n<button (click)=\"save()\">Save</button>"

/***/ }),

/***/ "./src/app/views/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.service */ "./src/app/views/user/user.service.ts");
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user */ "./src/app/views/user/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = /** @class */ (function () {
    function UserComponent(route, userService, location) {
        this.route = route;
        this.userService = userService;
        this.location = location;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserComponent.prototype.getUser = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.userService.get(id)
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    UserComponent.prototype.goBack = function () {
        this.location.back();
    };
    UserComponent.prototype.save = function () {
        var _this = this;
        this.userService.partialUpdate(this.user)
            .subscribe(function () {
            _this.goBack();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _user_user__WEBPACK_IMPORTED_MODULE_4__["User"])
    ], UserComponent.prototype, "user", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/views/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/views/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/views/user/user.service.ts":
/*!********************************************!*\
  !*** ./src/app/views/user/user.service.ts ***!
  \********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_service_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/service/http.service */ "./src/app/core/service/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DOMAIN_URI = 'users';
var UserService = /** @class */ (function () {
    function UserService(httpService) {
        this.httpService = httpService;
        this.usersUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_REST_URI + '/' + DOMAIN_URI;
    }
    UserService.prototype.getAll = function () {
        return this.httpService.get(this.usersUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            return data._embedded.userResourceList;
        }));
    };
    UserService.prototype.getSome = function (searchTerm, sortFieldName, sortDirection, currentPage, limit) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('page', currentPage.toString())
            .set('size', limit.toString());
        if (searchTerm) {
            httpParams = httpParams.append('searchTerm', searchTerm);
        }
        if (sortFieldName && sortDirection) {
            httpParams = httpParams.append('sort', sortFieldName + ',' + sortDirection);
        }
        return this.httpService.get(this.usersUrl, httpParams);
    };
    UserService.prototype.get = function (id) {
        var url = this.usersUrl + '/' + id.toString();
        return this.httpService.get(url);
    };
    UserService.prototype.add = function (user) {
        return this.httpService.post(this.usersUrl, user);
    };
    UserService.prototype.fullUpdate = function (user) {
        var url = this.usersUrl + '/' + user.id;
        return this.httpService.put(url, user);
    };
    UserService.prototype.partialUpdate = function (user) {
        var url = this.usersUrl + '/' + user.id;
        return this.httpService.patch(url, user);
    };
    UserService.prototype.delete = function (user) {
        var url = this.usersUrl + '/' + user.id;
        return this.httpService.delete(url);
    };
    UserService.prototype.deleteById = function (userId) {
        var url = this.usersUrl + '/' + userId;
        return this.httpService.delete(url);
    };
    UserService.prototype.search = function (term) {
        if (!term.trim()) {
            // If there is no search term then return an empty user array
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        this.httpService.get(this.usersUrl + '?name=' + term)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            return data._embedded.userResourceList;
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/views/user/user.ts":
/*!************************************!*\
  !*** ./src/app/views/user/user.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/views/user/users.api.ts":
/*!*****************************************!*\
  !*** ./src/app/views/user/users.api.ts ***!
  \*****************************************/
/*! exports provided: UsersApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersApi", function() { return UsersApi; });
/* harmony import */ var _core_service_pagination_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/service/pagination.api */ "./src/app/core/service/pagination.api.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UsersApi = /** @class */ (function (_super) {
    __extends(UsersApi, _super);
    function UsersApi(users, currentPageNumber, elementsPerPage, totalElements, totalPages) {
        var _this = _super.call(this, currentPageNumber, elementsPerPage, totalElements, totalPages) || this;
        _this.users = users;
        return _this;
    }
    return UsersApi;
}(_core_service_pagination_api__WEBPACK_IMPORTED_MODULE_0__["PaginationApi"]));



/***/ }),

/***/ "./src/app/views/user/users.component.css":
/*!************************************************!*\
  !*** ./src/app/views/user/users.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci91c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/user/users.component.html":
/*!*************************************************!*\
  !*** ./src/app/views/user/users.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Users</h2>\n<mat-form-field>\n\t<input matInput (keyup)=\"search($event.target.value)\" placeholder=\"User name\" autocomplete=\"off\">\n</mat-form-field>\n\n<div class=\"example-container mat-elevation-z8\">\n\t<div class=\"example-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\">\n\t\t<mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n\t\t<div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n\t\t\tThe user api rate limit has been reached. It will be reset in one minute.\n\t\t</div>\n\t</div>\n\n\t<div class=\"\">\n\t\t<table class=\"\" mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"email\" matSortDisableClear matSortDirection=\"asc\">\n\t\t\t<ng-container matColumnDef=\"id\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let user\">{{user.id}}</td>\n\t\t\t</ng-container>\n\n\t\t\t<ng-container matColumnDef=\"firstname\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>Firstname</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let user\">{{user.firstname}}</td>\n\t\t\t</ng-container>\n\n\t\t\t<ng-container matColumnDef=\"lastname\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>Lastname</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let user\">{{user.lastname}}</td>\n\t\t\t</ng-container>\n\n\t\t\t<ng-container matColumnDef=\"email\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let user\"><a routerLink=\"/users/{{user.id}}\">{{user.email}}</a></td>\n\t\t\t</ng-container>\n\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t<tr mat-row *matRowDef=\"let columnName; columns: displayedColumns;\"></tr>\n\t\t</table>\n\t</div>\n\n\t<mat-paginator [length]=\"totalElements\" [pageSize]=\"elementsPerPage\"></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/views/user/users.component.ts":
/*!***********************************************!*\
  !*** ./src/app/views/user/users.component.ts ***!
  \***********************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _users_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.api */ "./src/app/views/user/users.api.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user.service */ "./src/app/views/user/user.service.ts");
/* harmony import */ var _core_service_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/service/pagination.service */ "./src/app/core/service/pagination.service.ts");
/* harmony import */ var _core_messages_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/messages/message.service */ "./src/app/core/messages/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService, paginationService, messageService) {
        this.userService = userService;
        this.paginationService = paginationService;
        this.messageService = messageService;
        this.displayedColumns = ['id', 'email', 'firstname', 'lastname'];
        this.elementsPerPage = 5;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        this.searchTermEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Select the first page when the sort order changes
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.searchTermEvent, this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            _this.isLoadingResults = true;
            return _this.getUsers(_this.searchTerm, _this.sort.active, _this.sort.direction, _this.paginator.pageIndex);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (userApi) {
            _this.isLoadingResults = false;
            _this.isRateLimitReached = false;
            _this.currentPageNumber = userApi.currentPageNumber;
            _this.elementsPerPage = userApi.elementsPerPage;
            _this.totalElements = userApi.totalElements;
            _this.totalPages = userApi.totalPages;
            return userApi.users;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            _this.isLoadingResults = false;
            _this.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        })).subscribe(function (users) {
            _this.dataSource.data = users;
        });
    };
    UsersComponent.prototype.getUsers = function (searchTerm, sortFieldName, sortDirection, currentPageNumber) {
        var _this = this;
        return this.userService.getSome(searchTerm, sortFieldName, sortDirection, currentPageNumber, this.elementsPerPage)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return new _users_api__WEBPACK_IMPORTED_MODULE_4__["UsersApi"](response._embedded.userResourceList, _this.paginationService.correctPageNumberMispatch(response.page.number), response.page.size, response.page.totalElements, response.page.totalPages);
        }));
    };
    UsersComponent.prototype.search = function (searchTerm) {
        this.searchTerm = searchTerm;
        this.searchTermEvent.emit({
            value: this.searchTerm
        });
        if (this.paginator) {
            this.paginator.firstPage();
        }
    };
    UsersComponent.prototype.onSelect = function (user) {
        this.messageService.add('Selected the user ' + user.email);
    };
    UsersComponent.prototype.add = function (email) {
        email = email.trim();
        if (!name) {
            return;
        }
        this.userService.add({ email: email })
            .subscribe(function (user) {
        });
    };
    UsersComponent.prototype.delete = function (user) {
        this.userService.delete(user).subscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], UsersComponent.prototype, "sort", void 0);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/views/user/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/views/user/users.component.css")]
        }),
        __metadata("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _core_service_pagination_service__WEBPACK_IMPORTED_MODULE_6__["PaginationService"],
            _core_messages_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    CLIENT_ID: 'ng-zero',
    ROLE_PREFIX: 'role_',
    BASE_REST_URI: 'http://localhost:8080/api',
    KEYCLOAK_URI: 'http://localhost:8180/auth',
    KEYCLOAK_REALM: 'learnintouch',
    KEYCLOAK_CLIENTID: 'learnintouch-js'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .then(function () {
})
    .catch(function (error) {
    console.log(error);
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/stephane/dev/js/projects/angular/ng-zero/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map