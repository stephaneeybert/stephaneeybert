(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/error/error.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/error/error.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div *ngIf=\"routeParams?.message\">\n        <div>Message : {{ routeParams?.message }}</div>\n        <div>Stack : {{ routeParams?.stack }}</div>\n        <div>Name : {{ routeParams?.name }}</div>\n        <div>Url : {{ routeParams?.url }}</div>\n        <div>User : {{ routeParams?.user }}</div>\n        <div>Time : {{ routeParams?.time | date : 'yyyy-MM-dd HH:mm:ss'}}</div>\n        <div>Application : {{ routeParams?.appId }}</div>\n        <div>Id : {{ routeParams?.id }}</div>\n    </div>\n    <div *ngIf=\"data\">\n        <div>{{ data }}</div>\n    </div>\n    <div>\n        <a mat-raised-button [routerLink]=\"'/'\">Home</a>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/login/login-dialog.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/login/login-dialog.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Login</h1>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"submit(loginForm)\">\n\t<h1 mat-dialog-title>Add file</h1>\n\t<mat-dialog-content>\n\t\t<mat-form-field>\n\t\t\t<input matInput formControlName=\"username\" placeholder=\"Enter your login name\">\n\t\t\t<mat-hint align=\"start\"><strong>Some hint</strong></mat-hint>\n\t\t\t<mat-hint align=\"end\">Some other hint</mat-hint>\n\t\t\t<mat-error>This field is required</mat-error>\n\t\t</mat-form-field>\n\t</mat-dialog-content>\n\t<mat-dialog-actions>\n\t\t<button mat-button type=\"submit\">Add</button>\n\t\t<button mat-button type=\"button\" mat-dialog-close>Cancel</button>\n\t</mat-dialog-actions>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"signin-content\">\n\t<mat-card>\n\t\t<mat-card-header>\n\t\t\t<mat-card-title>Login</mat-card-title>\n\t\t</mat-card-header>\n\t\t\t<mat-card-content>\n\t\t\t<form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n\t\t\t\t<p>Please login to continue</p>\n\t\t\t\t<mat-form-field class=\"full-width-input\">\n\t\t\t\t\t<input matInput placeholder=\"User\" formControlName=\"username\">\n\t\t\t\t\t<mat-error *ngIf=\"isFieldInvalid('username')\">\n\t\t\t\t\t\tPlease inform your user name\n\t\t\t\t\t</mat-error>\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-form-field class=\"full-width-input\">\n\t\t\t\t\t<input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n\t\t\t\t\t<mat-error *ngIf=\"isFieldInvalid('password')\">\n\t\t\t\t\t\tPlease inform your password\n\t\t\t\t\t</mat-error>\n        </mat-form-field>\n        <mat-dialog-actions>\n          <button mat-raised-button type=\"button\" (click)=\"clear()\">Clear</button>\n          <button mat-raised-button color=\"primary\" type=\"submit\">Login</button>\n        </mat-dialog-actions>\n\t\t\t</form>\n\t\t</mat-card-content>\n\t</mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/toast/toast.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/toast/toast.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toast\" [@fadeAnimation]=\"{value: animationState, params:\n        { fadeIn: toastConfig.animation.fadeIn, fadeOut: toastConfig.animation.fadeOut }}\" (@fadeAnimation.done)=\"onFadeFinished($event)\">\n  <mat-icon>{{ iconType }}</mat-icon>\n  <div>{{ data.text }}</div>\n  <mat-icon (click)=\"close()\">close</mat-icon>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/secured/header.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/secured/header.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>\n    App\n  </span>\n  <span class=\"fill-remaining-space\"></span>\n  <button mat-button routerLink=\"/home\">Home</button>\n  <button mat-button routerLink=\"/users\">Users</button>\n  <button mat-button routerLink=\"/dashboard\">Dashboard</button>\n  <button mat-button routerLink=\"/music\">Music</button>\n  <button mat-button (click)=\"logout()\">Logout</button>\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/secured/secured.layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/secured/secured.layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\n  <app-secured-sidenav></app-secured-sidenav>\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/secured/secured.sidenav.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/secured/secured.sidenav.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav #sidenav mode=\"push\" class=\"app-sidenav\">\n  <mat-toolbar color=\"primary\">\n    <!--future svg to go here-->\n    <span class=\"toolbar-filler\"></span>\n    <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"mat-icon-button sidenav-toggle-button\"\n      [hidden]=\"!sidenav.opened\">\n      <mat-icon aria-label=\"Menu\" class=\"material-icons\">close</mat-icon>\n    </button>\n  </mat-toolbar>\n  <mat-nav-list>\n    <a mat-list-item class=\"sidenav-link\" (click)=\"sidenav.toggle();logout(); \">\n      <mat-icon mat-list-icon>account_balance</mat-icon>\n      <span class=\"title\" mat-line>Log out</span>\n      <span mat-line class=\"secondary\">Log me out</span>\n    </a>\n    <a mat-list-item class=\"sidenav-link\" [routerLink]=\"['/users']\" (click)=\"sidenav.toggle()\">\n      <mat-icon mat-list-icon>android</mat-icon>\n      <span class=\"title\" mat-line>Users</span>\n      <span mat-line class=\"secondary\">The users</span>\n    </a>\n    <a mat-list-item class=\"sidenav-link\" [routerLink]=\"['/music']\" (click)=\"sidenav.toggle()\">\n      <mat-icon mat-list-icon>android</mat-icon>\n      <span class=\"title\" mat-line>Music</span>\n      <span mat-line class=\"secondary\">The music project</span>\n    </a>\n  </mat-nav-list>\n</mat-sidenav>\n<mat-toolbar>\n  <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"mat-icon-button sidenav-toggle-button\"\n    [hidden]=\"sidenav.opened\">\n    <mat-icon aria-label=\"Another menu\" class=\"material-icons\">menu</mat-icon>\n  </button>\n  <h1 class=\"component-title\">\n    <a class=\"title-link\">{{title}}</a>\n  </h1>\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/unsecured/unsecured.layout.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/unsecured/unsecured.layout.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\n  <app-unsecured-sidenav></app-unsecured-sidenav>\n  <router-outlet></router-outlet>\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/unsecured/unsecured.sidenav.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/unsecured/unsecured.sidenav.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav #sidenav mode=\"push\" class=\"app-sidenav\">\n  <mat-toolbar color=\"primary\">\n    <!--future svg to go here-->\n    <span class=\"toolbar-filler\"></span>\n    <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"mat-icon-button sidenav-toggle-button\" [hidden]=\"!sidenav.opened\">\n      <mat-icon aria-label=\"Menu\" class=\"material-icons\">close</mat-icon>\n    </button>\n  </mat-toolbar>\n  <mat-nav-list>\n    <a mat-list-item class=\"sidenav-link\" [routerLink]=\"['/login']\" (click)=\"sidenav.toggle()\">\n      <mat-icon mat-list-icon>account_box</mat-icon>\n      <span class=\"title\" mat-line>Log In</span>\n      <span mat-line class=\"secondary\">Log in the application</span>\n    </a>\n    <a mat-list-item class=\"sidenav-link\" [routerLink]=\"['/users']\" (click)=\"sidenav.toggle()\">\n      <mat-icon mat-list-icon>android</mat-icon>\n      <span class=\"title\" mat-line>Users</span>\n      <span mat-line class=\"secondary\">The users</span>\n    </a>\n    <a mat-list-item class=\"sidenav-link\" [routerLink]=\"['/music']\" (click)=\"sidenav.toggle()\">\n      <mat-icon mat-list-icon>android</mat-icon>\n      <span class=\"title\" mat-line>Music</span>\n      <span mat-line class=\"secondary\">The music project</span>\n    </a>\n  </mat-nav-list>\n</mat-sidenav>\n<mat-toolbar color=\"primary\">\n  <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"mat-icon-button sidenav-toggle-button\" [hidden]=\"sidenav.opened\">\n    <mat-icon aria-label=\"Another menu\" class=\"material-icons\">menu</mat-icon>\n  </button>\n  <h1 class=\"component-title\">\n    <a class=\"title-link\">{{title}}</a>\n  </h1>\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard-view [users]=\"users$ | async\" title=\"The users\"></app-dashboard-view>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/dashboard/dashboard.view.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/dashboard/dashboard.view.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Top Users</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let user of users\" class=\"col-1-4\" routerLink=\"/user/{{user.id}}\">\n    <div class=\"module user\">\n      <h4>{{user.email}} {{user.id}}</h4>\n    </div>\n  </a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/user/user-confirmed.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/user/user-confirmed.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-slide-toggle [(ngModel)]=\"confirmed\" (change)=\"toggleConfirmed($event)\" color=\"primary\"></mat-slide-toggle>\n<!-- TODO Replace the  [(ngModel)] for a reactive form syntax -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/user/user-dialog.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/user/user-dialog.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"submit(form)\">\n    <h1 mat-dialog-title>Adding or modifying a user</h1>\n    <mat-dialog-content>\n        <mat-form-field>\n            <input matInput formControlName=\"email\" placeholder=\"Email\">\n        </mat-form-field>\n    </mat-dialog-content>\n    <mat-dialog-content>\n        <mat-form-field>\n            <input matInput formControlName=\"firstname\" placeholder=\"Firstname\">\n        </mat-form-field>\n    </mat-dialog-content>\n    <mat-dialog-content>\n        <mat-form-field>\n            <input matInput formControlName=\"lastname\" placeholder=\"Lastname\">\n        </mat-form-field>\n    </mat-dialog-content>\n    <mat-dialog-actions>\n      <button mat-button type=\"button\" mat-dialog-close>Cancel</button>\n      <button mat-button type=\"submit\">Save</button>\n    </mat-dialog-actions>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/user/user-edit.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/user/user-edit.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openUserDialog()\">{{label}}</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/user/user.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/user/user.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Edit a user</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form [formGroup]=\"form\" (ngSubmit)=\"save()\">\n        <mat-form-field class=\"full-width-input\">\n          <input matInput placeholder=\"Firstname\" formControlName=\"firstname\" />\n          <mat-error *ngIf=\"isFieldInvalid('firstname')\">\n            Please inform your firstname\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"full-width-input\">\n          <input matInput placeholder=\"Lastname\" formControlName=\"lastname\" />\n          <mat-error *ngIf=\"isFieldInvalid('lastname')\">\n            Please inform your lastname\n          </mat-error>\n        </mat-form-field>\n        <mat-dialog-actions>\n          <button mat-raised-button type=\"button\" (click)=\"cancel()\">Cancel</button>\n          <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n        </mat-dialog-actions>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/user/users.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/user/users.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput [(ngModel)]=\"searchTerm\" (appOnDebounce)=\"search($event)\" placeholder=\"Search...\" autocomplete=\"off\">\n</mat-form-field>\n\n<button (appOnDebounceClick)=\"logDebounceClick()\" [debounceTime]=\"700\">Debounced Click</button>\n\n<app-user-edit (userEditedEvent)=\"refreshListForUser($event)\" label=\"Add a user\"></app-user-edit>\n\n<div class=\"example-container mat-elevation-z8\">\n\t<div class=\"example-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\">\n\t\t<mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n\t\t<div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n\t\t\tThe user api rate limit has been reached. It will be reset in one minute.\n\t\t</div>\n\t</div>\n\n\t<div>\n\t\t<table class=\"\" mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"email\" matSortDisableClear matSortDirection=\"asc\">\n\t\t\t<ng-container matColumnDef=\"firstname\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>Firstname</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let user\">{{user.firstname}}</td>\n\t\t\t</ng-container>\n\n\t\t\t<ng-container matColumnDef=\"lastname\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>Lastname</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let user\">{{user.lastname}}</td>\n\t\t\t</ng-container>\n\n\t\t\t<ng-container matColumnDef=\"confirmed\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef>Confirmed</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let user\">\n\t\t\t\t\t<app-user-confirmed [userId]=\"user.id\" (confirmedChange)=\"displayConfirmed($event)\"></app-user-confirmed>\n\t\t\t\t</td>\n\t\t\t</ng-container>\n\n\t\t\t<ng-container matColumnDef=\"actions\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef>Actions</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let user\">\n          <button mat-button (click)=\"view(user);\">View</button>\n          <app-user-edit [existingUser]=\"user\" (userEditedEvent)=\"refreshListForUser($event)\"></app-user-edit>\n\t\t\t\t\t<button mat-button (click)=\"delete(user)\">Delete</button>\n\t\t\t\t</td>\n\t\t\t</ng-container>\n\n\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t<tr mat-row *matRowDef=\"let columnName; columns: displayedColumns;\"></tr>\n\t\t</table>\n\t</div>\n\n\t<mat-paginator [pageIndex]=\"currentPageNumber\" [length]=\"totalElements\" [pageSize]=\"elementsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" [showFirstLastButtons]=\"true\"></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_preloading_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-preloading-strategy */ "./src/app/app-preloading-strategy.ts");
/* harmony import */ var _core_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/auth/auth-guard.service */ "./src/app/core/auth/auth-guard.service.ts");
/* harmony import */ var _layouts_secured_secured_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/secured/secured.layout.component */ "./src/app/layouts/secured/secured.layout.component.ts");
/* harmony import */ var _layouts_unsecured_unsecured_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/unsecured/unsecured.layout.component */ "./src/app/layouts/unsecured/unsecured.layout.component.ts");
/* harmony import */ var _core_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/login/login.component */ "./src/app/core/login/login.component.ts");
/* harmony import */ var _core_error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/error/error.component */ "./src/app/core/error/error.component.ts");
/* harmony import */ var _views_user_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/user/users.component */ "./src/app/views/user/users.component.ts");
/* harmony import */ var _views_user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/user/user.component */ "./src/app/views/user/user.component.ts");
/* harmony import */ var _app_views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/views/dashboard/dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");












var routes = [
    {
        path: '',
        component: _layouts_unsecured_unsecured_layout_component__WEBPACK_IMPORTED_MODULE_6__["UnsecuredLayoutComponent"],
        children: [
            {
                path: 'login',
                component: _core_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
            },
            {
                path: 'music',
                loadChildren: function () { return __webpack_require__.e(/*! import() | views-home-home-module */ "views-home-home-module").then(__webpack_require__.bind(null, /*! ./views/home/home.module */ "./src/app/views/home/home.module.ts")).then(function (module) { return module.HomeModule; }); },
                data: {
                    preload: true,
                    delay: false
                }
            },
            {
                path: 'home',
                loadChildren: function () { return __webpack_require__.e(/*! import() | views-home-home-module */ "views-home-home-module").then(__webpack_require__.bind(null, /*! ./views/home/home.module */ "./src/app/views/home/home.module.ts")).then(function (module) { return module.HomeModule; }); },
                data: {
                    preload: true,
                    delay: false
                }
            },
            {
                path: '',
                redirectTo: 'music',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        component: _layouts_secured_secured_layout_component__WEBPACK_IMPORTED_MODULE_5__["SecuredLayoutComponent"],
        canActivateChild: [_core_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
        children: [
            {
                path: 'users',
                component: _views_user_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"],
            },
            {
                path: 'users/:id',
                component: _views_user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
            },
            {
                path: 'dashboard',
                component: _app_views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                data: {
                    expectedRole: 'user' // 'admin' TODO put this back some time
                }
            },
            {
                path: 'error',
                component: _core_error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"]
            },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [_app_preloading_strategy__WEBPACK_IMPORTED_MODULE_3__["AppPreloadingStrategy"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _app_preloading_strategy__WEBPACK_IMPORTED_MODULE_3__["AppPreloadingStrategy"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-ui.module.ts":
/*!**********************************!*\
  !*** ./src/app/app-ui.module.ts ***!
  \**********************************/
/*! exports provided: AppUiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUiModule", function() { return AppUiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var AppUiModule = /** @class */ (function () {
    function AppUiModule() {
    }
    AppUiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'always' }),
            ],
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ]
        })
    ], AppUiModule);
    return AppUiModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDO0FBQzVDO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFHRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQixFQUFFLGdCQUFnQjtBQUN0QztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUU7QUFDdEI7QUFDQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERhc2hib2FyZENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuW2NsYXNzKj0nY29sLSddIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuW2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuKiwgKjphZnRlciwgKjpiZWZvcmUge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAwO1xufVxuaDQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ3JpZCB7XG4gIG1hcmdpbjogMDtcbn1cbi5jb2wtMS00IHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5tb2R1bGUge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZWVlO1xuICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLm1vZHVsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM2MDdkOGI7XG59XG4uZ3JpZC1wYWQge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uZ3JpZC1wYWQgPiBbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9kdWxlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWF4LWhlaWdodDogNzVweDsgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZ3JpZCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5tb2R1bGUge1xuICAgIG1pbi13aWR0aDogNjBweDtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_core_service_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/service/ui.service */ "./src/app/core/service/ui.service.ts");





var LANGUAGE_CODE_ENGLISH = 'en';
var LANGUAGE_CODE_FRANCAIS = 'fr';
var AppComponent = /** @class */ (function () {
    function AppComponent(swUpdate, translateService, uiService) {
        this.swUpdate = swUpdate;
        this.translateService = translateService;
        this.uiService = uiService;
        // The default language used as a fallback if a translation isn't found for the current language
        translateService.setDefaultLang(LANGUAGE_CODE_ENGLISH);
        // The language to use
        translateService.use(LANGUAGE_CODE_FRANCAIS);
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(function (event) {
                if (confirm('A newer version of the application is available. Load the new version ?')) {
                    window.location.reload();
                }
            });
        }
        this.metaData();
    };
    AppComponent.prototype.metaData = function () {
        this.uiService.setMetaData({
            title: 'MusicNg',
            description: 'A music generator application'
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _app_core_service_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _app_core_service_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_layouts_app_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layouts/app-layout.module */ "./src/app/layouts/app-layout.module.ts");
/* harmony import */ var _app_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-ui.module */ "./src/app/app-ui.module.ts");
/* harmony import */ var _core_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/error */ "./src/app/core/error/index.ts");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core.module */ "./src/app/core.module.ts");
/* harmony import */ var _core_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/auth/auth.module */ "./src/app/core/auth/auth.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/login/login.component */ "./src/app/core/login/login.component.ts");
/* harmony import */ var _core_login_login_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/login/login-dialog.component */ "./src/app/core/login/login-dialog.component.ts");
/* harmony import */ var _views_user_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/user/users.component */ "./src/app/views/user/users.component.ts");
/* harmony import */ var _views_user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/user/user.component */ "./src/app/views/user/user.component.ts");
/* harmony import */ var _views_user_user_confirmed_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/user/user-confirmed.component */ "./src/app/views/user/user-confirmed.component.ts");
/* harmony import */ var _app_views_user_user_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/views/user/user-edit.component */ "./src/app/views/user/user-edit.component.ts");
/* harmony import */ var _views_user_user_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/user/user-dialog.component */ "./src/app/views/user/user-dialog.component.ts");
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _app_views_dashboard_dashboard_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/views/dashboard/dashboard.view.component */ "./src/app/views/dashboard/dashboard.view.component.ts");
/* harmony import */ var _debounce_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./debounce.directive */ "./src/app/debounce.directive.ts");
/* harmony import */ var _debounce_click_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./debounce-click.directive */ "./src/app/debounce-click.directive.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _core_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _core_login_login_dialog_component__WEBPACK_IMPORTED_MODULE_9__["LoginDialogComponent"],
                _views_user_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"],
                _views_user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
                _views_user_user_confirmed_component__WEBPACK_IMPORTED_MODULE_12__["UserConfirmedComponent"],
                _app_views_user_user_edit_component__WEBPACK_IMPORTED_MODULE_13__["UserEditComponent"],
                _views_user_user_dialog_component__WEBPACK_IMPORTED_MODULE_14__["UserDialogComponent"],
                _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"],
                _app_views_dashboard_dashboard_view_component__WEBPACK_IMPORTED_MODULE_16__["DashboardViewComponent"],
                _debounce_directive__WEBPACK_IMPORTED_MODULE_17__["DebounceDirective"],
                _debounce_click_directive__WEBPACK_IMPORTED_MODULE_18__["DebounceClickDirective"]
            ],
            imports: [
                _app_layouts_app_layout_module__WEBPACK_IMPORTED_MODULE_2__["AppLayoutModule"],
                _app_ui_module__WEBPACK_IMPORTED_MODULE_3__["AppUiModule"],
                _core_error__WEBPACK_IMPORTED_MODULE_4__["ErrorModule"],
                _core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _core_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"]
            ],
            entryComponents: [
                _views_user_user_dialog_component__WEBPACK_IMPORTED_MODULE_14__["UserDialogComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core.module.ts":
/*!********************************!*\
  !*** ./src/app/core.module.ts ***!
  \********************************/
/*! exports provided: httpLoaderFactory, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpLoaderFactory", function() { return httpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_core_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/toast */ "./src/app/core/toast/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");






function httpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](httpClient);
}
var CoreModule = /** @class */ (function () {
    // Make sure the core module is imported only once as it contains all global services which are to be singletons
    function CoreModule(coreModule) {
        if (coreModule) {
            throw new Error('The core module has ALREADY been imported.');
        }
    }
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
    ]; };
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: httpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                    }
                }),
                _app_core_toast__WEBPACK_IMPORTED_MODULE_3__["ToastModule"].forRoot()
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token.service */ "./src/app/core/auth/token.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth/auth.service.ts");








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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (isAuthenticated) {
            if (!isAuthenticated) {
                _this.authService.setPostLoginRedirectUrl(state.url);
                _this.router.navigate(['login']);
                return false;
            }
            else {
                return true;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error, caught) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    AuthGuardService.prototype.canActivateChild = function (route, state) {
        var _this = this;
        return this.authService.isAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (isAuthenticated) {
            if (!isAuthenticated) {
                _this.authService.setPostLoginRedirectUrl(state.url);
                _this.router.navigate(['login']);
                return false;
            }
            else {
                var expectedRole = route.data.expectedRole ? (_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ROLE_PREFIX + route.data.expectedRole).toUpperCase() : null;
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
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error, caught) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    // Check if a module should be loaded
    // It would be pointless to load a module if the user may not use it
    AuthGuardService.prototype.canLoad = function () {
        if (this.authService.isAuthenticated()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
    ]; };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./token.service */ "./src/app/core/auth/token.service.ts");
/* harmony import */ var _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");










var PATH_LOGIN = 'login';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router, tokenService, authService) {
        this.router = router;
        this.tokenService = tokenService;
        this.authService = authService;
        this.refreshTokenInProgress = false;
        this.tokenRefreshedSource = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.tokenRefreshed$ = this.tokenRefreshedSource.asObservable();
        // Contains the current refresh token or is null if
        // the refresh is pending and no refresh token is currently available
        this.refreshTokenSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (response) {
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (error.status === 401) {
                    console.log('The response returned a 401 error');
                    if (_this.authService.isLoginRequest(request)) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(error);
                    }
                    else if (_this.authService.isRefreshTokenRequest(request)) {
                        _this.logout();
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(error);
                    }
                    else {
                        if (_this.authService.rememberMe()) {
                            console.log('Remember me...');
                            return _this.refreshToken()
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
                                request = _this.addAccessToken(request);
                                return next.handle(request);
                            }))
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (refreshError) {
                                _this.logout();
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(refreshError);
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(error);
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
            return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
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
    AuthInterceptor.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"] },
        { type: _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }
    ]; };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"],
            _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.interceptor */ "./src/app/core/auth/auth.interceptor.ts");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token.service */ "./src/app/core/auth/token.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/core/auth/auth-guard.service.ts");







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
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtModule"].forRoot({
                    jwtOptionsProvider: {
                        provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JWT_OPTIONS"],
                        useFactory: jwtOptionsFactory,
                        deps: [_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]]
                    }
                })
            ],
            providers: [
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["AuthInterceptor"],
                    multi: true
                }
            ]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core_service_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/service/http.service */ "./src/app/core/service/http.service.ts");
/* harmony import */ var _app_core_auth_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/auth/token.service */ "./src/app/core/auth/token.service.ts");







var PATH_AUTH = 'auth';
var PATH_LOGIN = 'login';
var URI_LOGIN = _env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_REST_URI + '/' + PATH_AUTH + '/' + PATH_LOGIN;
var PATH_LOGOUT = 'logout';
var URI_LOGOUT = _env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_REST_URI + '/' + PATH_AUTH + '/' + PATH_LOGOUT;
var PATH_TOKEN_REFRESH = 'token-refresh';
var URI_REFRESH_TOKEN = _env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_REST_URI + '/' + PATH_AUTH + '/' + PATH_TOKEN_REFRESH;
var AuthService = /** @class */ (function () {
    function AuthService(httpService, tokenService) {
        this.httpService = httpService;
        this.tokenService = tokenService;
        this.postLoginRedirectUrl = '';
    }
    AuthService.prototype.setPostLoginRedirectUrl = function (postLoginRedirectUrl) {
        this.postLoginRedirectUrl = postLoginRedirectUrl;
    };
    AuthService.prototype.getPostLoginRedirectUrl = function () {
        return this.postLoginRedirectUrl;
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        console.log('Sending the login credentials to obtain a token');
        var credentials = { 'email': username, 'password': password };
        var httpHeaders = this.httpService.buildHeader();
        httpHeaders = this.addClientIdHeader(httpHeaders);
        return this.httpService.postWithHeadersInResponse(URI_LOGIN, credentials, httpHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.storeTokensInLocalStorage(response);
            return response;
        }));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.httpService.postWithHeadersInResponse(URI_LOGOUT, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.clearTokensFromLocalStorage(response);
            return response;
        }));
    };
    AuthService.prototype.isAuthenticated = function () {
        if (this.tokenService.accessTokenExpired()) {
            console.log('The access token expired.');
            if (this.tokenService.refreshTokenExpired()) {
                console.log('The refresh token expired.');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
            }
            else {
                return this.refreshAccessToken()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
                    if (response) {
                        console.log('The access token has been refreshed');
                        return true;
                    }
                    else {
                        return false;
                    }
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error, caught) {
                    console.log('The access token could not be refreshed');
                    console.log(error);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
                }));
            }
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
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
        var clientId = _env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].CLIENT_ID;
        httpHeaders = httpHeaders.append(clientIdHeaderName, clientId);
        return httpHeaders;
    };
    AuthService.prototype.refreshAccessToken = function () {
        var _this = this;
        console.log('Sending the refresh token to obtain a new access token');
        var httpHeaders = this.httpService.buildHeader();
        httpHeaders = this.addRefreshTokenHeader(httpHeaders);
        httpHeaders = this.addClientIdHeader(httpHeaders);
        return this.httpService.postWithHeadersInResponse(URI_REFRESH_TOKEN, {}, httpHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
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
    AuthService.ctorParameters = function () { return [
        { type: _app_core_service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
        { type: _app_core_auth_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
            _app_core_auth_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"]])
    ], AuthService);
    return AuthService;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");



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
        this.jwtHelperService = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
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
        var token = localStorage.getItem(ACCESS_TOKEN_NAME);
        if (token != null) {
            return token;
        }
        else {
            return '';
        }
    };
    TokenService.prototype.setAccessTokenToLocalStorage = function (token) {
        localStorage.setItem(ACCESS_TOKEN_NAME, token);
    };
    TokenService.prototype.getRefreshTokenFromLocalStorage = function () {
        var token = localStorage.getItem(REFRESH_TOKEN_NAME);
        if (token != null) {
            return token;
        }
        else {
            return '';
        }
    };
    TokenService.prototype.setRefreshTokenToLocalStorage = function (token) {
        localStorage.setItem(REFRESH_TOKEN_NAME, token);
    };
    TokenService.prototype.extractTokenFromHeaderValue = function (header) {
        if (header.startsWith(AUTH_BEARER_HEADER)) {
            return header.substring(7, header.length);
        }
        else {
            return '';
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
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.service */ "./src/app/core/error/error.service.ts");
/* harmony import */ var _app_core_service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/service/notification.service */ "./src/app/core/service/notification.service.ts");





var ErrorCustomHandler = /** @class */ (function () {
    function ErrorCustomHandler(injector) {
        this.injector = injector;
    }
    ErrorCustomHandler.prototype.handleError = function (error) {
        var notificationService = this.injector.get(_app_core_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]);
        var errorService = this.injector.get(_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"]);
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
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
            errorService.log(error).subscribe(function (errorWithContextInfo) {
                console.log(errorWithContextInfo);
            });
        }
    };
    ErrorCustomHandler.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    ErrorCustomHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _error_custom_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-custom-handler */ "./src/app/core/error/error-custom-handler.ts");





// Because the best error is the one that never happens, improve the error handling
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
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (errors) {
            return errors
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (error) {
                if (_this.isServerError(error)) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(200));
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                }
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(NB_RETRIES))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: 'There was a server error (after ' + NB_RETRIES + ' retries)' })));
        }));
    };
    ErrorRequestInterceptor.prototype.isServerError = function (error) {
        return HTTP_SERVER_ERROR.test((String(error.status)));
    };
    ErrorRequestInterceptor.ctorParameters = function () { return [
        { type: _error_custom_handler__WEBPACK_IMPORTED_MODULE_4__["ErrorCustomHandler"] }
    ]; };
    ErrorRequestInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_error_custom_handler__WEBPACK_IMPORTED_MODULE_4__["ErrorCustomHandler"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.component */ "./src/app/core/error/error.component.ts");




var routes = [
    { path: 'error', component: _error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"] },
    { path: '**', component: _error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"], data: { error: 404 } },
];
var ErrorRoutingModule = /** @class */ (function () {
    function ErrorRoutingModule() {
    }
    ErrorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ErrorRoutingModule);
    return ErrorRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/error/error.component.scss":
/*!*************************************************!*\
  !*** ./src/app/core/error/error.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h3, h4, h5 {\n  margin-bottom: 0;\n  margin-top: 10px;\n}\n\n.error-container {\n  width: 220px;\n  margin: 0 auto;\n  margin-top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0ZXBoYW5lL2Rldi9qcy9wcm9qZWN0cy9hbmd1bGFyL211c2ljbmcvc3JjL2FwcC9jb3JlL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEsIGgzLCBoNCwgaDUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICBcbiAgLmVycm9yLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICIsImgxLCBoMywgaDQsIGg1IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmVycm9yLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAyMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.routeParams = {};
        this.data = {};
    }
    ErrorComponent.prototype.ngOnInit = function () {
        this.routeParams = this.activatedRoute.snapshot.queryParams;
        this.data = this.activatedRoute.snapshot.data;
    };
    ErrorComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/core/error/error.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error_custom_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-custom-handler */ "./src/app/core/error/error-custom-handler.ts");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error.service */ "./src/app/core/error/error.service.ts");
/* harmony import */ var _error_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-routing.module */ "./src/app/core/error/error-routing.module.ts");
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error.component */ "./src/app/core/error/error.component.ts");
/* harmony import */ var _error_request_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error-request-interceptor */ "./src/app/core/error/error-request-interceptor.ts");










// See https://medium.com/@aleixsuau/error-handling-angular-859d529fa53a
var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _error_routing_module__WEBPACK_IMPORTED_MODULE_7__["ErrorRoutingModule"],
            ],
            providers: [
                _error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
                    useClass: _error_custom_handler__WEBPACK_IMPORTED_MODULE_5__["ErrorCustomHandler"]
                },
                _error_custom_handler__WEBPACK_IMPORTED_MODULE_5__["ErrorCustomHandler"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _error_request_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorRequestInterceptor"],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






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
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationError"]) {
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
        var location = this.injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]);
        var url = location instanceof _angular_common__WEBPACK_IMPORTED_MODULE_2__["PathLocationStrategy"] ? location.path() : '';
        var time = new Date().getTime();
        var name = error.name || null;
        var user = ''; // TODO get the logged in user
        var id = appId + "-" + user + "-" + time;
        var status = error.status || null;
        var message = (error && error.body) ? error.body.error : String(error);
        var stack = error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"] ? null : error; // TODO StackTraceParser.parse(error);
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
    ErrorService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ErrorService);
    return ErrorService;
}());

var MockHttpService = /** @class */ (function () {
    function MockHttpService() {
    }
    MockHttpService.post = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(error);
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

/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.component */ "./src/app/core/error/error.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return _error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"]; });







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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var LoginDialogComponent = /** @class */ (function () {
    function LoginDialogComponent(formBuilder, loginDialog, data) {
        this.formBuilder = formBuilder;
        this.loginDialog = loginDialog;
        this.data = data;
    }
    LoginDialogComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: this.data ? this.data.name : ''
        });
    };
    LoginDialogComponent.prototype.submit = function (form) {
        this.loginDialog.close("" + this.loginForm.value.username);
    };
    LoginDialogComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    LoginDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-dialog',
            template: __webpack_require__(/*! raw-loader!./login-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/login/login-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
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

module.exports = "mat-card {\n    max-width: 400px;\n    margin: 2em auto;\n    text-align: center;\n}\n\n.signin-content {\n    padding: 60px 1rem;\n}\n\n.full-width-input {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpZ25pbi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA2MHB4IDFyZW07XG59XG5cbi5mdWxsLXdpZHRoLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_core_auth_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/auth/token.service */ "./src/app/core/auth/token.service.ts");
/* harmony import */ var _app_core_service_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/service/login.service */ "./src/app/core/service/login.service.ts");
/* harmony import */ var _login_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-dialog.component */ "./src/app/core/login/login-dialog.component.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, dialog, tokenService, loginService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.dialog = dialog;
        this.tokenService = tokenService;
        this.loginService = loginService;
        this.username = 'mittiprovence@yahoo.se';
        this.password = '';
        this.formSubmitAttempt = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            username: [this.username, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: [this.password, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    LoginComponent.prototype.isFieldInvalid = function (field) {
        var invalid = false;
        var formField = this.form.get(field);
        if ((formField && !formField.valid && formField.touched) ||
            (formField && formField.untouched && this.formSubmitAttempt)) {
            invalid = true;
        }
        return invalid;
    };
    LoginComponent.prototype.login = function () {
        if (this.form.valid) {
            var usernameField = this.form.get('username');
            var passwordField = this.form.get('password');
            if (usernameField && passwordField) {
                this.loginService.login(usernameField.value, passwordField.value);
            }
        }
    };
    LoginComponent.prototype.openLoginDialog = function (username) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.hasBackdrop = false;
        dialogConfig.data = {
            login: username ? username : ''
        };
        this.loginDialog = this.dialog.open(_login_dialog_component__WEBPACK_IMPORTED_MODULE_7__["LoginDialogComponent"], dialogConfig);
        this.loginDialog.afterClosed().subscribe(function (name) {
            console.log(name);
            _this.username = name;
        });
    };
    LoginComponent.prototype.clear = function () {
        this.form.reset();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _app_core_auth_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] },
        { type: _app_core_service_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/core/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _app_core_auth_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
            _app_core_service_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// The options need to be explicitly typed so as to have the typescript compiler use the correct get() method,
// the get method that returns the interface <T>> and not the one that returns an HttpEvent<T> of the interface.
var HttpOptions = /** @class */ (function () {
    function HttpOptions() {
    }
    return HttpOptions;
}());
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
        options = this.addOptionForFullHttpResponse(options);
        return this.httpClient.post(url, body, options);
    };
    HttpService.prototype.put = function (url, body, headers) {
        return this.httpClient.put(url, body, this.buildOptions(headers));
    };
    HttpService.prototype.patch = function (url, body, headers) {
        return this.httpClient.patch(url, body, this.buildOptions(headers));
    };
    HttpService.prototype.delete = function (url) {
        return this.httpClient.delete(url, this.buildOptions());
    };
    HttpService.prototype.buildOptions = function (headers) {
        var options = {
            headers: this.buildHeader(headers),
            responseType: 'json'
        };
        return options;
    };
    HttpService.prototype.buildHeader = function (headers) {
        headers = headers || new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Accept', 'application/json');
        return headers;
    };
    HttpService.prototype.addOptionParams = function (options, httpParams) {
        options['params'] = httpParams;
        return options;
    };
    // Return a full HTTP response with its headers instead of simply the response body
    HttpService.prototype.addOptionForFullHttpResponse = function (options) {
        options['observe'] = 'response';
        return options;
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/core/service/localized-paginator.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/service/localized-paginator.ts ***!
  \*****************************************************/
/*! exports provided: LocalizedPaginator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedPaginator", function() { return LocalizedPaginator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ITEMS_PER_PAGE = 'PAGINATOR.ITEMS_PER_PAGE';
var NEXT_PAGE = 'PAGINATOR.NEXT_PAGE';
var PREVIOUS_PAGE = 'PAGINATOR.PREVIOUS_PAGE';
var FIRST_PAGE = 'PAGINATOR.FIRST_PAGE';
var LAST_PAGE = 'PAGINATOR.LAST_PAGE';
var OUT_OF = 'PAGINATOR.OUT_OF';
var LocalizedPaginator = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LocalizedPaginator, _super);
    function LocalizedPaginator(translate) {
        var _this = _super.call(this) || this;
        _this.translate = translate;
        _this.getRangeLabel = function (page, pageSize, length) {
            var out_of = _this.translate.instant(OUT_OF);
            if (length === 0 || pageSize === 0) {
                return '0 ' + out_of + ' ' + length;
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            // If the start index exceeds the list length, do not try and fix the end index to the end
            var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            return startIndex + 1 + ' - ' + endIndex + ' ' + out_of + ' ' + length;
        };
        _this.translate.onLangChange.subscribe(function (e) {
            _this.getAndInitTranslations();
        });
        _this.getAndInitTranslations();
        return _this;
    }
    LocalizedPaginator.prototype.getAndInitTranslations = function () {
        var _this = this;
        this.translate.get([
            ITEMS_PER_PAGE,
            NEXT_PAGE,
            PREVIOUS_PAGE,
            FIRST_PAGE,
            LAST_PAGE
        ])
            .subscribe(function (translation) {
            _this.itemsPerPageLabel = translation[ITEMS_PER_PAGE];
            _this.nextPageLabel = translation[NEXT_PAGE];
            _this.previousPageLabel = translation[PREVIOUS_PAGE];
            _this.firstPageLabel = translation[FIRST_PAGE];
            _this.lastPageLabel = translation[LAST_PAGE];
            _this.changes.next();
        });
    };
    LocalizedPaginator.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    LocalizedPaginator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], LocalizedPaginator);
    return LocalizedPaginator;
}(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorIntl"]));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");




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
    LoginService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this._notification = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.notification$ = this._notification.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["publish"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["refCount"])()));
    }
    NotificationService.prototype.notify = function (message) {
        var _this = this;
        this._notification.next(message);
        setTimeout(function () { return _this._notification.next(''); }, 3000);
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
    PaginationApi.ctorParameters = function () { return [
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number }
    ]; };
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.elementsPerPage = 5;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    // The current page number returned in the json response by Spring Data
    // is still zero based even if the configuration asks for a one based indexed pagination
    // See https://jira.spring.io/browse/DATACMNS-563
    PaginationService.prototype.correctPageNumberMispatch = function (pageNumber) {
        return pageNumber + 1;
    };
    PaginationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "./src/app/core/service/ui.service.ts":
/*!********************************************!*\
  !*** ./src/app/core/service/ui.service.ts ***!
  \********************************************/
/*! exports provided: UiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiService", function() { return UiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var APP_COLOR = '#343a40';
var APP_IMAGE = '/assets/icons/icon-72x72.png';
var APP_TITLE = 'PierrePapierCiseaux';
var APP_DESCRIPTION = 'Le jeu de pierre papier ciseaux';
var UiService = /** @class */ (function () {
    function UiService(meta, title) {
        this.meta = meta;
        this.title = title;
    }
    UiService.prototype.setMetaData = function (config) {
        var _this = this;
        var description = config.description || APP_DESCRIPTION;
        var image = config.image || APP_IMAGE;
        var title = config.title ? "" + config.title : APP_TITLE;
        this.title.setTitle(title);
        var tags = [
            { name: 'description', content: description },
            { name: 'theme-color', content: APP_COLOR },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:image', content: image },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
            { name: 'apple-mobile-web-app-title', content: title },
            { name: 'apple-touch-startup-image', content: image },
            { name: 'og:title', content: title },
            { name: 'og:description', content: description },
            { name: 'og:image', content: image },
        ];
        tags.forEach(function (tag) { return _this.meta.updateTag(tag); });
    };
    UiService.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
    ]; };
    UiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], UiService);
    return UiService;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");



var UtilsService = /** @class */ (function () {
    function UtilsService(matSnackBar) {
        this.matSnackBar = matSnackBar;
    }
    UtilsService.prototype.showSnackBar = function (message, action) {
        this.matSnackBar.open(message, action, {
            duration: 2000,
        });
    };
    UtilsService.ctorParameters = function () { return [
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/core/toast/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/toast/index.ts ***!
  \*************************************/
/*! exports provided: ToastService, ToastModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast.service */ "./src/app/core/toast/toast.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return _toast_service__WEBPACK_IMPORTED_MODULE_0__["ToastService"]; });

/* harmony import */ var _toast_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.module */ "./src/app/core/toast/toast.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastModule", function() { return _toast_module__WEBPACK_IMPORTED_MODULE_1__["ToastModule"]; });





/***/ }),

/***/ "./src/app/core/toast/toast-animation.ts":
/*!***********************************************!*\
  !*** ./src/app/core/toast/toast-animation.ts ***!
  \***********************************************/
/*! exports provided: toastAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toastAnimations", function() { return toastAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var toastAnimations = {
    fadeToast: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ fadeIn }}ms')]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('default => closing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ fadeOut }}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))),
    ]),
};


/***/ }),

/***/ "./src/app/core/toast/toast-config.ts":
/*!********************************************!*\
  !*** ./src/app/core/toast/toast-config.ts ***!
  \********************************************/
/*! exports provided: ToastData, defaultToastConfig, TOAST_CONFIG_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastData", function() { return ToastData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultToastConfig", function() { return defaultToastConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOAST_CONFIG_TOKEN", function() { return TOAST_CONFIG_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ToastData = /** @class */ (function () {
    function ToastData() {
    }
    return ToastData;
}());

var defaultToastConfig = {
    position: {
        top: 20,
        right: 20,
    },
    animation: {
        fadeOut: 2500,
        fadeIn: 300,
    },
};
var TOAST_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('toast-config');


/***/ }),

/***/ "./src/app/core/toast/toast-ref.ts":
/*!*****************************************!*\
  !*** ./src/app/core/toast/toast-ref.ts ***!
  \*****************************************/
/*! exports provided: ToastRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastRef", function() { return ToastRef; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");

var ToastRef = /** @class */ (function () {
    function ToastRef(overlay) {
        this.overlay = overlay;
    }
    ToastRef.prototype.close = function () {
        this.overlay.dispose();
    };
    ToastRef.prototype.isVisible = function () {
        return this.overlay && this.overlay.overlayElement;
    };
    ToastRef.prototype.getPosition = function () {
        return this.overlay.overlayElement.getBoundingClientRect();
    };
    ToastRef.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"] }
    ]; };
    return ToastRef;
}());



/***/ }),

/***/ "./src/app/core/toast/toast.component.css":
/*!************************************************!*\
  !*** ./src/app/core/toast/toast.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toast {\n    position: relative;\n    display: -webkit-box;\n    display: flex;\n    justify-content: space-around;\n    margin-bottom: 20px;\n    padding: 10px 15px 10px 48px;\n    width: 290px;\n    background: #fff;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #dddddd #d6d6d6 #cfcfcf;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS90b2FzdC90b2FzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMseUNBQXlDO0FBQzdDIiwiZmlsZSI6InNyYy9hcHAvY29yZS90b2FzdC90b2FzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvYXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDQ4cHg7XG4gICAgd2lkdGg6IDI5MHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQgI2Q2ZDZkNiAjY2ZjZmNmO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/toast/toast.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/toast/toast.component.ts ***!
  \***********************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toast_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast-config */ "./src/app/core/toast/toast-config.ts");
/* harmony import */ var _toast_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast-ref */ "./src/app/core/toast/toast-ref.ts");
/* harmony import */ var _toast_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toast-animation */ "./src/app/core/toast/toast-animation.ts");





var ToastComponent = /** @class */ (function () {
    function ToastComponent(data, ref, toastConfig) {
        this.data = data;
        this.ref = ref;
        this.toastConfig = toastConfig;
        this.animationState = 'default';
        this.iconType = data.type === 'success' ? 'done' : data.type;
    }
    ToastComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.intervalId = setTimeout(function () { return _this.animationState = 'closing'; }, 5000);
    };
    ToastComponent.prototype.ngOnDestroy = function () {
        if (this.intervalId) {
            clearTimeout(this.intervalId);
        }
    };
    ToastComponent.prototype.close = function () {
        this.ref.close();
    };
    ToastComponent.prototype.onFadeFinished = function (event) {
        var toState = event.toState;
        var isFadeOut = toState === 'closing';
        var itFinished = this.animationState === 'closing';
        if (isFadeOut && itFinished) {
            this.close();
        }
    };
    ToastComponent.ctorParameters = function () { return [
        { type: _toast_config__WEBPACK_IMPORTED_MODULE_2__["ToastData"] },
        { type: _toast_ref__WEBPACK_IMPORTED_MODULE_3__["ToastRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_toast_config__WEBPACK_IMPORTED_MODULE_2__["TOAST_CONFIG_TOKEN"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ToastComponent.prototype, "ngOnDestroy", null);
    ToastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toast',
            template: __webpack_require__(/*! raw-loader!./toast.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/toast/toast.component.html"),
            animations: [_toast_animation__WEBPACK_IMPORTED_MODULE_4__["toastAnimations"].fadeToast],
            styles: [__webpack_require__(/*! ./toast.component.css */ "./src/app/core/toast/toast.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_toast_config__WEBPACK_IMPORTED_MODULE_2__["TOAST_CONFIG_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_toast_config__WEBPACK_IMPORTED_MODULE_2__["ToastData"],
            _toast_ref__WEBPACK_IMPORTED_MODULE_3__["ToastRef"], Object])
    ], ToastComponent);
    return ToastComponent;
}());



/***/ }),

/***/ "./src/app/core/toast/toast.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/toast/toast.module.ts ***!
  \********************************************/
/*! exports provided: ToastModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastModule", function() { return ToastModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toast.component */ "./src/app/core/toast/toast.component.ts");
/* harmony import */ var _toast_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toast-config */ "./src/app/core/toast/toast-config.ts");






var ToastModule = /** @class */ (function () {
    function ToastModule() {
    }
    ToastModule_1 = ToastModule;
    ToastModule.forRoot = function (config) {
        if (config === void 0) { config = _toast_config__WEBPACK_IMPORTED_MODULE_5__["defaultToastConfig"]; }
        return {
            ngModule: ToastModule_1,
            providers: [
                {
                    provide: _toast_config__WEBPACK_IMPORTED_MODULE_5__["TOAST_CONFIG_TOKEN"],
                    useValue: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _toast_config__WEBPACK_IMPORTED_MODULE_5__["defaultToastConfig"], config),
                },
            ],
        };
    };
    var ToastModule_1;
    ToastModule = ToastModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]],
            declarations: [_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"]],
            entryComponents: [_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"]]
        })
    ], ToastModule);
    return ToastModule;
}());



/***/ }),

/***/ "./src/app/core/toast/toast.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/toast/toast.service.ts ***!
  \*********************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toast.component */ "./src/app/core/toast/toast.component.ts");
/* harmony import */ var _toast_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toast-config */ "./src/app/core/toast/toast-config.ts");
/* harmony import */ var _toast_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toast-ref */ "./src/app/core/toast/toast-ref.ts");







var ToastService = /** @class */ (function () {
    function ToastService(overlay, parentInjector, toastConfig) {
        this.overlay = overlay;
        this.parentInjector = parentInjector;
        this.toastConfig = toastConfig;
    }
    ToastService.prototype.show = function (data) {
        var positionStrategy = this.getPositionStrategy();
        var overlayRef = this.overlay.create({ positionStrategy: positionStrategy });
        var toastRef = new _toast_ref__WEBPACK_IMPORTED_MODULE_6__["ToastRef"](overlayRef);
        this.lastToast = toastRef;
        var injector = this.getInjector(data, toastRef, this.parentInjector);
        var toastPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"], null, injector);
        overlayRef.attach(toastPortal);
        return toastRef;
    };
    ToastService.prototype.getPositionStrategy = function () {
        return this.overlay.position()
            .global()
            .top(this.getPosition())
            .right(this.toastConfig.position.right + 'px');
    };
    ToastService.prototype.getPosition = function () {
        var lastToastIsVisible = this.lastToast && this.lastToast.isVisible();
        var position = lastToastIsVisible ? this.lastToast.getPosition().bottom : this.toastConfig.position.top;
        return position + 'px';
    };
    ToastService.prototype.getInjector = function (data, toastRef, parentInjector) {
        var tokens = new WeakMap();
        tokens.set(_toast_config__WEBPACK_IMPORTED_MODULE_5__["ToastData"], data);
        tokens.set(_toast_ref__WEBPACK_IMPORTED_MODULE_6__["ToastRef"], toastRef);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](parentInjector, tokens);
    };
    ToastService.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_toast_config__WEBPACK_IMPORTED_MODULE_5__["TOAST_CONFIG_TOKEN"],] }] }
    ]; };
    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_toast_config__WEBPACK_IMPORTED_MODULE_5__["TOAST_CONFIG_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], Object])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/debounce-click.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/debounce-click.directive.ts ***!
  \*********************************************/
/*! exports provided: DebounceClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebounceClickDirective", function() { return DebounceClickDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




// Usage: <button (appOnDebounceClick)="log()" [debounceTime]="700">Debounced Click</button>
var DebounceClickDirective = /** @class */ (function () {
    function DebounceClickDirective() {
        this.debounceTime = 500;
        this.appOnDebounceClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clicks = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DebounceClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.clicks.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.debounceTime)).subscribe(function (e) { return _this.appOnDebounceClick.emit(e); });
    };
    DebounceClickDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DebounceClickDirective.prototype.clickEvent = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DebounceClickDirective.prototype, "debounceTime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DebounceClickDirective.prototype, "appOnDebounceClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DebounceClickDirective.prototype, "clickEvent", null);
    DebounceClickDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appOnDebounceClick]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DebounceClickDirective);
    return DebounceClickDirective;
}());



/***/ }),

/***/ "./src/app/debounce.directive.ts":
/*!***************************************!*\
  !*** ./src/app/debounce.directive.ts ***!
  \***************************************/
/*! exports provided: DebounceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebounceDirective", function() { return DebounceDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_operator_takeUntil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/takeUntil */ "./node_modules/rxjs-compat/_esm5/add/operator/takeUntil.js");






var DebounceDirective = /** @class */ (function () {
    function DebounceDirective(model) {
        this.debounceTime = 300;
        this.isFirstChange = true;
        this.model = model;
        this.appOnDebounce = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DebounceDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.model.valueChanges) {
            this.subscription = this.model.valueChanges
                .debounceTime(this.debounceTime)
                .distinctUntilChanged()
                .subscribe(function (modelValue) {
                if (_this.isFirstChange) {
                    _this.isFirstChange = false;
                }
                else {
                    console.log(modelValue);
                    _this.appOnDebounce.emit(modelValue);
                }
            });
        }
    };
    DebounceDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DebounceDirective.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DebounceDirective.prototype, "debounceTime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DebounceDirective.prototype, "appOnDebounce", void 0);
    DebounceDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ngModel][appOnDebounce]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]])
    ], DebounceDirective);
    return DebounceDirective;
}());



/***/ }),

/***/ "./src/app/layouts/app-layout.module.ts":
/*!**********************************************!*\
  !*** ./src/app/layouts/app-layout.module.ts ***!
  \**********************************************/
/*! exports provided: AppLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLayoutModule", function() { return AppLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_mdbootstrap_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/mdbootstrap.module */ "./src/app/mdbootstrap.module.ts");
/* harmony import */ var _app_layouts_unsecured_unsecured_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/layouts/unsecured/unsecured.layout.component */ "./src/app/layouts/unsecured/unsecured.layout.component.ts");
/* harmony import */ var _app_layouts_secured_secured_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/layouts/secured/secured.layout.component */ "./src/app/layouts/secured/secured.layout.component.ts");
/* harmony import */ var _app_layouts_secured_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/layouts/secured/header.component */ "./src/app/layouts/secured/header.component.ts");
/* harmony import */ var _app_layouts_secured_secured_sidenav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/layouts/secured/secured.sidenav.component */ "./src/app/layouts/secured/secured.sidenav.component.ts");
/* harmony import */ var _app_layouts_unsecured_unsecured_sidenav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/layouts/unsecured/unsecured.sidenav.component */ "./src/app/layouts/unsecured/unsecured.sidenav.component.ts");













var AppLayoutModule = /** @class */ (function () {
    function AppLayoutModule() {
    }
    AppLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_layouts_secured_secured_layout_component__WEBPACK_IMPORTED_MODULE_9__["SecuredLayoutComponent"],
                _app_layouts_unsecured_unsecured_layout_component__WEBPACK_IMPORTED_MODULE_8__["UnsecuredLayoutComponent"],
                _app_layouts_secured_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _app_layouts_secured_secured_sidenav_component__WEBPACK_IMPORTED_MODULE_11__["SecuredSidenavComponent"],
                _app_layouts_unsecured_unsecured_sidenav_component__WEBPACK_IMPORTED_MODULE_12__["UnsecuredSidenavComponent"]
            ],
            imports: [
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production }),
                _app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _app_mdbootstrap_module__WEBPACK_IMPORTED_MODULE_7__["MDBootstrapModule"]
            ],
            exports: [
                _app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            ]
        })
    ], AppLayoutModule);
    return AppLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/secured/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/layouts/secured/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".angular-logo {\n    margin: 0 4px 3px 0;\n    height: 35px;\n    vertical-align: middle;\n}\n.fill-remaining-space {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9zZWN1cmVkL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtFQUNFLG1CQUFjO1VBQWQsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvc2VjdXJlZC9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbmd1bGFyLWxvZ28ge1xuICAgIG1hcmdpbjogMCA0cHggM3B4IDA7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layouts/secured/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layouts/secured/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/service/login.service */ "./src/app/core/service/login.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginService) {
        this.loginService = loginService;
    }
    HeaderComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _app_core_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/secured/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layouts/secured/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layouts/secured/secured.layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/secured/secured.layout.component.ts ***!
  \*************************************************************/
/*! exports provided: SecuredLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuredLayoutComponent", function() { return SecuredLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/service/login.service */ "./src/app/core/service/login.service.ts");



var SecuredLayoutComponent = /** @class */ (function () {
    function SecuredLayoutComponent(loginService) {
        this.loginService = loginService;
    }
    SecuredLayoutComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    SecuredLayoutComponent.ctorParameters = function () { return [
        { type: _app_core_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    SecuredLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-secured-layout',
            template: __webpack_require__(/*! raw-loader!./secured.layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/secured/secured.layout.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], SecuredLayoutComponent);
    return SecuredLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/secured/secured.sidenav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/secured/secured.sidenav.component.ts ***!
  \**************************************************************/
/*! exports provided: SecuredSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuredSidenavComponent", function() { return SecuredSidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/service/login.service */ "./src/app/core/service/login.service.ts");



var SecuredSidenavComponent = /** @class */ (function () {
    function SecuredSidenavComponent(loginService) {
        this.loginService = loginService;
        this.title = 'MusicNG';
    }
    SecuredSidenavComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    SecuredSidenavComponent.ctorParameters = function () { return [
        { type: _app_core_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    SecuredSidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-secured-sidenav',
            template: __webpack_require__(/*! raw-loader!./secured.sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/secured/secured.sidenav.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], SecuredSidenavComponent);
    return SecuredSidenavComponent;
}());



/***/ }),

/***/ "./src/app/layouts/unsecured/unsecured.layout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layouts/unsecured/unsecured.layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: UnsecuredLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsecuredLayoutComponent", function() { return UnsecuredLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnsecuredLayoutComponent = /** @class */ (function () {
    function UnsecuredLayoutComponent() {
    }
    UnsecuredLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unsecured-layout',
            template: __webpack_require__(/*! raw-loader!./unsecured.layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/unsecured/unsecured.layout.component.html")
        })
    ], UnsecuredLayoutComponent);
    return UnsecuredLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/unsecured/unsecured.sidenav.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/unsecured/unsecured.sidenav.component.ts ***!
  \******************************************************************/
/*! exports provided: UnsecuredSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsecuredSidenavComponent", function() { return UnsecuredSidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnsecuredSidenavComponent = /** @class */ (function () {
    function UnsecuredSidenavComponent() {
        this.title = 'MusicNG';
    }
    UnsecuredSidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unsecured-sidenav',
            template: __webpack_require__(/*! raw-loader!./unsecured.sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/unsecured/unsecured.sidenav.component.html")
        })
    ], UnsecuredSidenavComponent);
    return UnsecuredSidenavComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _core_service_localized_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/service/localized-paginator */ "./src/app/core/service/localized-paginator.ts");





















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"]
            ],
            providers: [
                {
                    provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorIntl"],
                    useClass: _core_service_localized_paginator__WEBPACK_IMPORTED_MODULE_20__["LocalizedPaginator"]
                }
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/mdbootstrap.module.ts":
/*!***************************************!*\
  !*** ./src/app/mdbootstrap.module.ts ***!
  \***************************************/
/*! exports provided: MDBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBootstrapModule", function() { return MDBootstrapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");



var MDBootstrapModule = /** @class */ (function () {
    function MDBootstrapModule() {
    }
    MDBootstrapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"]
            ]
        })
    ], MDBootstrapModule);
    return MDBootstrapModule;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_views_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/views/user/user.service */ "./src/app/views/user/user.service.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService) {
        this.userService = userService;
        this.users$ = this.userService.getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (users) {
            return users.slice(1, 5);
        }));
    }
    DashboardComponent.ctorParameters = function () { return [
        { type: _app_views_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/dashboard/dashboard.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_views_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.view.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.view.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZGFzaGJvYXJkL2Rhc2hib2FyZC52aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDO0FBQzVDO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFHRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQixFQUFFLGdCQUFnQjtBQUN0QztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUU7QUFDdEI7QUFDQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9kYXNoYm9hcmQvZGFzaGJvYXJkLnZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERhc2hib2FyZENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuW2NsYXNzKj0nY29sLSddIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuW2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuKiwgKjphZnRlciwgKjpiZWZvcmUge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAwO1xufVxuaDQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ3JpZCB7XG4gIG1hcmdpbjogMDtcbn1cbi5jb2wtMS00IHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5tb2R1bGUge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZWVlO1xuICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLm1vZHVsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM2MDdkOGI7XG59XG4uZ3JpZC1wYWQge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uZ3JpZC1wYWQgPiBbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9kdWxlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWF4LWhlaWdodDogNzVweDsgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZ3JpZCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5tb2R1bGUge1xuICAgIG1pbi13aWR0aDogNjBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.view.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardViewComponent", function() { return DashboardViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardViewComponent = /** @class */ (function () {
    function DashboardViewComponent() {
        this.users = [];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DashboardViewComponent.prototype, "users", void 0);
    DashboardViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-view',
            template: __webpack_require__(/*! raw-loader!./dashboard.view.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/dashboard/dashboard.view.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.view.component.css */ "./src/app/views/dashboard/dashboard.view.component.css")]
        })
    ], DashboardViewComponent);
    return DashboardViewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/user-confirmed.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/user/user-confirmed.component.ts ***!
  \********************************************************/
/*! exports provided: UserConfirmedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConfirmedComponent", function() { return UserConfirmedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_views_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/views/user/user.service */ "./src/app/views/user/user.service.ts");





var UserConfirmedComponent = /** @class */ (function () {
    function UserConfirmedComponent(userService) {
        this.userService = userService;
        this.confirmedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.confirmed = false;
    }
    UserConfirmedComponent.prototype.toggleConfirmed = function (event) {
        var _this = this;
        this.userService.get(this.userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            user.confirmedEmail = !user.confirmedEmail;
            return _this.userService.partialUpdate(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (updatedUser) {
            _this.update(updatedUser.confirmedEmail);
            return _this.confirmedChange.emit(updatedUser);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }));
    };
    // This method is called after the input bindings attempt
    // this, even if no actual input was provided to the bindings
    UserConfirmedComponent.prototype.ngOnInit = function () {
        // Ensure the input bindings are actually provided at run-time
        this.assertInputsProvided();
    };
    // This method is called after the input bindings attempt
    // and only if there was actual input provided to the bindings
    UserConfirmedComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.userService.get(this.userId)
            .subscribe(function (user) {
            _this.update(user.confirmedEmail);
        });
    };
    UserConfirmedComponent.prototype.update = function (confirmedEmail) {
        this.confirmed = confirmedEmail;
    };
    // Assert the user is defined,
    // that is, the required input binding was actually provided by the calling context
    UserConfirmedComponent.prototype.assertInputsProvided = function () {
        if (!this.userId) {
            throw (new Error("The required input [userId] was not provided"));
        }
    };
    UserConfirmedComponent.ctorParameters = function () { return [
        { type: _app_views_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserConfirmedComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], UserConfirmedComponent.prototype, "confirmedChange", void 0);
    UserConfirmedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-confirmed',
            template: __webpack_require__(/*! raw-loader!./user-confirmed.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/user/user-confirmed.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_views_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], UserConfirmedComponent);
    return UserConfirmedComponent;
}());



/***/ }),

/***/ "./src/app/views/user/user-dialog.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/user-dialog.component.ts ***!
  \*****************************************************/
/*! exports provided: UserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDialogComponent", function() { return UserDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/views/user/user.service.ts");





var UserDialogComponent = /** @class */ (function () {
    function UserDialogComponent(formBuilder, userDialogRef, userService, data) {
        this.formBuilder = formBuilder;
        this.userDialogRef = userDialogRef;
        this.userService = userService;
        this.data = data;
    }
    UserDialogComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            email: this.data.user ? this.data.user.email : '',
            firstname: this.data.user ? this.data.user.firstname : '',
            lastname: this.data.user ? this.data.user.lastname : ''
        });
    };
    UserDialogComponent.prototype.submit = function (form) {
        this.userDialogRef.close(form.value);
    };
    UserDialogComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    UserDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./user-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/user/user-dialog.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], Object])
    ], UserDialogComponent);
    return UserDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/user/user-edit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/user/user-edit.component.ts ***!
  \***************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/app/views/user/user.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/views/user/user.service.ts");
/* harmony import */ var _user_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-dialog.component */ "./src/app/views/user/user-dialog.component.ts");
/* harmony import */ var _app_core_service_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/service/utils.service */ "./src/app/core/service/utils.service.ts");







var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(matDialog, utilsService, userService) {
        this.matDialog = matDialog;
        this.utilsService = utilsService;
        this.userService = userService;
        this._label = 'Edit'; // TODO Is using a _label part of the public API ?
        this.userEditedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UserEditComponent.prototype.ngOnChanges = function (changes) {
        var loggedOutput = [];
        for (var _i = 0, _a = Object.keys(changes); _i < _a.length; _i++) {
            var propName = _a[_i];
            var change = changes[propName];
            var currentValue = JSON.stringify(change.currentValue);
            var previousValue = JSON.stringify(change.previousValue);
            var changedTo = JSON.stringify(change.currentValue);
            if (change.isFirstChange()) {
                loggedOutput.push("Initial value of " + propName + " set to " + changedTo);
            }
            else {
                var changedFrom = JSON.stringify(change.previousValue);
                loggedOutput.push(propName + " changed from " + changedFrom + " to " + changedTo);
            }
        }
        console.log(loggedOutput.join(', '));
    };
    Object.defineProperty(UserEditComponent.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (label) {
            this._label = (label && label.trim()) || '<no label set>';
        },
        enumerable: true,
        configurable: true
    });
    UserEditComponent.prototype.openUserDialog = function () {
        var _this = this;
        this.userDialogRef = this.matDialog.open(_user_dialog_component__WEBPACK_IMPORTED_MODULE_5__["UserDialogComponent"], {
            hasBackdrop: false,
            data: {
                user: this.existingUser
            }
        });
        this.userDialogRef
            .afterClosed()
            .subscribe(function (user) {
            // TODO validate the edited user
            if (user) {
                if (_this.existingUser) {
                    user.id = _this.existingUser.id;
                    _this.userService.fullUpdate(user)
                        .subscribe(function (updatedUser) {
                        _this.userEditedEvent.emit(updatedUser);
                        _this.utilsService.showSnackBar('The user ' + updatedUser.firstname + ' ' + updatedUser.lastname + ' has been updated.');
                    });
                }
                else {
                    _this.userService.add(user)
                        .subscribe(function (addedUser) {
                        _this.userEditedEvent.emit(addedUser);
                        _this.utilsService.showSnackBar('The user ' + addedUser.firstname + ' ' + addedUser.lastname + ' has been added.');
                    });
                }
            }
        });
    };
    UserEditComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _app_core_service_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _user__WEBPACK_IMPORTED_MODULE_3__["User"])
    ], UserEditComponent.prototype, "existingUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], UserEditComponent.prototype, "userEditedEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], UserEditComponent.prototype, "label", null);
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! raw-loader!./user-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/user/user-edit.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _app_core_service_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/views/user/user.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/user/user.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n\n.signin-content {\n  padding: 60px 1rem;\n}\n\n.full-width-input {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDJlbSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaWduaW4tY29udGVudCB7XG4gIHBhZGRpbmc6IDYwcHggMXJlbTtcbn1cblxuLmZ1bGwtd2lkdGgtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_views_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/views/user/user.service */ "./src/app/views/user/user.service.ts");





var UserComponent = /** @class */ (function () {
    function UserComponent(formBuilder, route, router, userService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.formSubmitAttempt = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserComponent.prototype.getUser = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.userService.get(id)
                .subscribe(function (user) {
                _this.user = user;
                _this.form = _this.formBuilder.group({
                    firstname: [_this.user.firstname, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    lastname: [_this.user.lastname, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                });
            });
        }
    };
    UserComponent.prototype.isFieldInvalid = function (field) {
        var invalid = false;
        if (this.form) {
            var formField = this.form.get(field);
            if ((formField && !formField.valid && formField.touched) ||
                (formField && formField.untouched && this.formSubmitAttempt)) {
                invalid = true;
            }
        }
        return invalid;
    };
    UserComponent.prototype.save = function () {
        var _this = this;
        if (this.user && this.form) {
            var firstnameField = this.form.get('firstname');
            var lastnameField = this.form.get('lastname');
            if (firstnameField && lastnameField) {
                this.user.firstname = firstnameField.value;
                this.user.lastname = lastnameField.value;
                this.userService.partialUpdate(this.user)
                    .subscribe(function (user) {
                    _this.router.navigate(['users']);
                });
            }
        }
    };
    UserComponent.prototype.cancel = function () {
        this.router.navigate(['users']);
    };
    UserComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _app_views_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/views/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _app_views_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core_service_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/service/http.service */ "./src/app/core/service/http.service.ts");






var DOMAIN_URI = 'users';
var UserService = /** @class */ (function () {
    function UserService(httpService) {
        this.httpService = httpService;
        this.usersUrl = _env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_REST_URI + '/' + DOMAIN_URI;
    }
    UserService.prototype.getAll = function () {
        return this.httpService.get(this.usersUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (hateoasPageable) {
            console.log(hateoasPageable);
            return hateoasPageable._embedded.userModelList;
        }));
    };
    UserService.prototype.getSome = function (searchTerm, sortFieldName, sortDirection, currentPage, pageSize) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('page', String(currentPage))
            .set('size', String(pageSize));
        if (searchTerm) {
            httpParams = httpParams.append('searchTerm', searchTerm);
        }
        if (sortFieldName && sortDirection) {
            httpParams = httpParams.append('sort', sortFieldName + ',' + sortDirection);
        }
        return this.httpService.get(this.usersUrl, httpParams);
    };
    UserService.prototype.get = function (id) {
        var url = this.usersUrl + '/' + String(id);
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
    UserService.ctorParameters = function () { return [
        { type: _app_core_service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
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
    function User(id, email, confirmedEmail, password, firstname, lastname) {
        this.id = id;
        this.email = email;
        this.confirmedEmail = confirmedEmail;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    User.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return User;
}());



/***/ }),

/***/ "./src/app/views/user/users-api.ts":
/*!*****************************************!*\
  !*** ./src/app/views/user/users-api.ts ***!
  \*****************************************/
/*! exports provided: UsersApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersApi", function() { return UsersApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_core_service_pagination_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/service/pagination.api */ "./src/app/core/service/pagination.api.ts");


var UsersApi = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsersApi, _super);
    function UsersApi(users, currentPageNumber, elementsPerPage, totalElements, totalPages) {
        var _this = _super.call(this, currentPageNumber, elementsPerPage, totalElements, totalPages) || this;
        _this.users = users;
        return _this;
    }
    UsersApi.ctorParameters = function () { return [
        { type: Array },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number }
    ]; };
    return UsersApi;
}(_app_core_service_pagination_api__WEBPACK_IMPORTED_MODULE_1__["PaginationApi"]));



/***/ }),

/***/ "./src/app/views/user/users.component.css":
/*!************************************************!*\
  !*** ./src/app/views/user/users.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci91c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users-api */ "./src/app/views/user/users-api.ts");
/* harmony import */ var _app_views_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/views/user/user.service */ "./src/app/views/user/user.service.ts");
/* harmony import */ var _app_core_service_pagination_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/core/service/pagination.service */ "./src/app/core/service/pagination.service.ts");
/* harmony import */ var _app_core_service_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/core/service/utils.service */ "./src/app/core/service/utils.service.ts");
/* harmony import */ var _app_core_toast_toast_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/core/toast/toast.service */ "./src/app/core/toast/toast.service.ts");













var UsersComponent = /** @class */ (function () {
    function UsersComponent(router, userService, paginationService, utilsService, toastService) {
        this.router = router;
        this.userService = userService;
        this.paginationService = paginationService;
        this.utilsService = utilsService;
        this.toastService = toastService;
        this.displayedColumns = ['confirmed', 'firstname', 'lastname', 'actions'];
        this.elementsPerPage = 0;
        this.pageSizeOptions = [];
        this.currentPageNumber = 0;
        this.totalElements = 0;
        this.totalPages = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        this.updateEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchTermEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchTerm = '';
        this.sort = new _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.elementsPerPage = this.paginationService.elementsPerPage;
        this.pageSizeOptions = this.paginationService.pageSizeOptions;
        // Select the first page when the sort order changes
        this.sort.sortChange.subscribe(function (sort) {
            _this.goToFirstPage();
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.updateEvent, this.searchTermEvent, this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
            _this.isLoadingResults = true;
            var pageIndex = 0;
            pageIndex = _this.paginator.pageIndex;
            return _this.getUsers(_this.searchTerm, _this.sort.active, _this.sort.direction, pageIndex);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (usersApi) {
            _this.isLoadingResults = false;
            _this.isRateLimitReached = false;
            _this.currentPageNumber = usersApi.currentPageNumber;
            _this.elementsPerPage = usersApi.elementsPerPage;
            _this.totalElements = usersApi.totalElements;
            _this.totalPages = usersApi.totalPages;
            return usersApi.users;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function () {
            _this.isLoadingResults = false;
            _this.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        })).subscribe(function (users) {
            _this.dataSource.data = users;
        });
    };
    UsersComponent.prototype.getUsers = function (searchTerm, sortFieldName, sortDirection, currentPageNumber) {
        return this.userService.getSome(searchTerm, sortFieldName, sortDirection, currentPageNumber, this.elementsPerPage)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (hateoasPageable) {
            return new _users_api__WEBPACK_IMPORTED_MODULE_8__["UsersApi"](hateoasPageable._embedded.userModelList, hateoasPageable.page.pageNumber, hateoasPageable.page.pageSize, hateoasPageable.page.totalElements, hateoasPageable.page.totalPages);
        }));
    };
    UsersComponent.prototype.search = function (searchTerm) {
        this.searchTerm = searchTerm;
        this.searchTermEvent.emit({
            value: this.searchTerm
        });
        this.paginator.firstPage();
    };
    UsersComponent.prototype.delete = function (user) {
        var _this = this;
        this.userService.delete(user).subscribe(function (users) {
            _this.goToFirstPage();
            _this.refreshListForUser(user);
            _this.utilsService.showSnackBar('The user ' + user.firstname + ' ' + user.lastname + ' has been deleted.');
        });
    };
    UsersComponent.prototype.displayConfirmed = function (user) {
        var message = 'Toggled the mail confirmed status for ' + user.firstname + ' ' + user.lastname; // TODO Have a language resource
        this.showToast(message);
        this.utilsService.showSnackBar(message);
    };
    UsersComponent.prototype.view = function (user) {
        this.router.navigateByUrl('/users/' + user.id);
    };
    UsersComponent.prototype.goToFirstPage = function () {
        this.paginator.pageIndex = 0;
    };
    UsersComponent.prototype.refreshListForUser = function (user) {
        this.updateEvent.emit({
            value: user
        });
    };
    UsersComponent.prototype.showToast = function (message) {
        this.toastService.show({
            text: message,
            type: 'success'
        });
    };
    UsersComponent.prototype.logDebounceClick = function () {
        console.log('Logging a debounce click');
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _app_views_user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
        { type: _app_core_service_pagination_service__WEBPACK_IMPORTED_MODULE_10__["PaginationService"] },
        { type: _app_core_service_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"] },
        { type: _app_core_toast_toast_service__WEBPACK_IMPORTED_MODULE_12__["ToastService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], UsersComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], UsersComponent.prototype, "sort", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/user/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/views/user/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _app_views_user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _app_core_service_pagination_service__WEBPACK_IMPORTED_MODULE_10__["PaginationService"],
            _app_core_service_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"],
            _app_core_toast_toast_service__WEBPACK_IMPORTED_MODULE_12__["ToastService"]])
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
    CLIENT_ID: 'musicng',
    ROLE_PREFIX: 'role_',
    BASE_REST_URI: 'http://dev.thalasoft.com:8443/api',
    KEYCLOAK_URI: 'https://dev.thalasoft.com:8180/auth',
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app.module */ "./src/app/app.module.ts");
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

module.exports = __webpack_require__(/*! /home/stephane/dev/js/projects/angular/musicng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map