(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-macroscope-macroscope-module"],{

/***/ "+1hx":
/*!*******************************************************!*\
  !*** ./src/app/pages/macroscope/macroscope.module.ts ***!
  \*******************************************************/
/*! exports provided: MacroscopeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroscopeModule", function() { return MacroscopeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _macroscope_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./macroscope-routing.module */ "HDbH");
/* harmony import */ var _macroscope_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./macroscope.component */ "k5Vb");
/* harmony import */ var _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/item-drawer/item-drawer.module */ "ml3Y");






class MacroscopeModule {
}
MacroscopeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MacroscopeModule });
MacroscopeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MacroscopeModule_Factory(t) { return new (t || MacroscopeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _macroscope_routing_module__WEBPACK_IMPORTED_MODULE_2__["MacroscopeRoutingModule"],
            _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_4__["ItemDrawerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MacroscopeModule, { declarations: [_macroscope_component__WEBPACK_IMPORTED_MODULE_3__["MacroscopeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _macroscope_routing_module__WEBPACK_IMPORTED_MODULE_2__["MacroscopeRoutingModule"],
        _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_4__["ItemDrawerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_macroscope_component__WEBPACK_IMPORTED_MODULE_3__["MacroscopeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _macroscope_routing_module__WEBPACK_IMPORTED_MODULE_2__["MacroscopeRoutingModule"],
                    _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_4__["ItemDrawerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "HDbH":
/*!***************************************************************!*\
  !*** ./src/app/pages/macroscope/macroscope-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MacroscopeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroscopeRoutingModule", function() { return MacroscopeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_services_map_macroscope_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/map-macroscope-resolver.service */ "UTmY");
/* harmony import */ var _macroscope_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./macroscope.component */ "k5Vb");






const routes = [{
        path: ':iteration/:sequence',
        component: _macroscope_component__WEBPACK_IMPORTED_MODULE_3__["MacroscopeComponent"],
        resolve: {
            macroscope: _shared_services_map_macroscope_resolver_service__WEBPACK_IMPORTED_MODULE_2__["MapMacroscopeResolverService"]
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange'
    }];
class MacroscopeRoutingModule {
}
MacroscopeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MacroscopeRoutingModule });
MacroscopeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MacroscopeRoutingModule_Factory(t) { return new (t || MacroscopeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MacroscopeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "k5Vb":
/*!**********************************************************!*\
  !*** ./src/app/pages/macroscope/macroscope.component.ts ***!
  \**********************************************************/
/*! exports provided: MacroscopeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroscopeComponent", function() { return MacroscopeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_components_item_drawer_item_drawer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/item-drawer/item-drawer.component */ "iZg1");




/**
 * Component to displaying individual macroscope items
 */
class MacroscopeComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        /**
         * Selected language
         */
        this.currentLanguage = 'en';
    }
    ngOnInit() {
        this.subscription = this.route.data.subscribe((data) => {
            this.selectedItem = data.macroscope;
        });
    }
    /**
     * Changes selected language and navigates to new language route
     * @param language selected language
     */
    changeLanguage(language) {
        const iteration = this.route.snapshot.paramMap.get('iteration');
        const sequence = this.route.snapshot.paramMap.get('sequence');
        this.router.navigate(['/', 'macroscope', iteration, sequence], { queryParams: { lang: language } });
    }
    /**
     * Unsubscribe from Observables
     */
    ngOnDestroy() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
MacroscopeComponent.ɵfac = function MacroscopeComponent_Factory(t) { return new (t || MacroscopeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MacroscopeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MacroscopeComponent, selectors: [["sci-macroscope"]], decls: 1, vars: 2, consts: [[3, "item", "type", "languageChange"]], template: function MacroscopeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-item-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("languageChange", function MacroscopeComponent_Template_sci_item_drawer_languageChange_0_listener($event) { return ctx.changeLanguage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.selectedItem)("type", "macroscope");
    } }, directives: [_shared_components_item_drawer_item_drawer_component__WEBPACK_IMPORTED_MODULE_2__["ItemDrawerComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-macroscope',
                templateUrl: './macroscope.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-macroscope-macroscope-module.js.map