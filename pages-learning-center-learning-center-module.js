(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-learning-center-learning-center-module"],{

/***/ "42h0":
/*!*****************************************************************!*\
  !*** ./src/app/pages/learning-center/learning-center.module.ts ***!
  \*****************************************************************/
/*! exports provided: LearningCenterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningCenterModule", function() { return LearningCenterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _learning_center_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learning-center-routing.module */ "P/uA");
/* harmony import */ var _learning_center_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./learning-center.component */ "xmkC");





class LearningCenterModule {
}
LearningCenterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LearningCenterModule });
LearningCenterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LearningCenterModule_Factory(t) { return new (t || LearningCenterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _learning_center_routing_module__WEBPACK_IMPORTED_MODULE_2__["LearningCenterRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LearningCenterModule, { declarations: [_learning_center_component__WEBPACK_IMPORTED_MODULE_3__["LearningCenterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _learning_center_routing_module__WEBPACK_IMPORTED_MODULE_2__["LearningCenterRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningCenterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_learning_center_component__WEBPACK_IMPORTED_MODULE_3__["LearningCenterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _learning_center_routing_module__WEBPACK_IMPORTED_MODULE_2__["LearningCenterRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "P/uA":
/*!*************************************************************************!*\
  !*** ./src/app/pages/learning-center/learning-center-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: LearningCenterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningCenterRoutingModule", function() { return LearningCenterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _learning_center_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learning-center.component */ "xmkC");





const routes = [{ path: '', component: _learning_center_component__WEBPACK_IMPORTED_MODULE_2__["LearningCenterComponent"] }];
class LearningCenterRoutingModule {
}
LearningCenterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LearningCenterRoutingModule });
LearningCenterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LearningCenterRoutingModule_Factory(t) { return new (t || LearningCenterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LearningCenterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningCenterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xmkC":
/*!********************************************************************!*\
  !*** ./src/app/pages/learning-center/learning-center.component.ts ***!
  \********************************************************************/
/*! exports provided: LearningCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningCenterComponent", function() { return LearningCenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class LearningCenterComponent {
    constructor() { }
    ngOnInit() {
    }
}
LearningCenterComponent.ɵfac = function LearningCenterComponent_Factory(t) { return new (t || LearningCenterComponent)(); };
LearningCenterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LearningCenterComponent, selectors: [["sci-learning-center"]], decls: 2, vars: 0, template: function LearningCenterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "learning-center works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvcGFnZXMvbGVhcm5pbmctY2VudGVyL2xlYXJuaW5nLWNlbnRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningCenterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-learning-center',
                templateUrl: './learning-center.component.html',
                styleUrls: ['./learning-center.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-learning-center-learning-center-module.js.map