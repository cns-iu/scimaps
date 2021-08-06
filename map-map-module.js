(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-map-module"],{

/***/ "5T7I":
/*!********************************************!*\
  !*** ./src/app/pages/map/map.component.ts ***!
  \********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_components_item_drawer_item_drawer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/item-drawer/item-drawer.component */ "iZg1");




/**
 * Component to displaying individual map items
 */
class MapComponent {
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
            this.selectedItem = data.map;
        });
    }
    /**
     * Changes selected language and navigates to new language route
     * @param language selected language
     */
    changeLanguage(language) {
        const iteration = this.route.snapshot.paramMap.get('iteration');
        const sequence = this.route.snapshot.paramMap.get('sequence');
        this.router.navigate(['/', 'map', iteration, sequence], { queryParams: { lang: language } });
    }
    /**
     * Unsubscribe from Observables
     */
    ngOnDestroy() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["sci-map"]], decls: 1, vars: 2, consts: [[1, "map", 3, "item", "type", "languageChange"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-item-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("languageChange", function MapComponent_Template_sci_item_drawer_languageChange_0_listener($event) { return ctx.changeLanguage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.selectedItem)("type", "map");
    } }, directives: [_shared_components_item_drawer_item_drawer_component__WEBPACK_IMPORTED_MODULE_2__["ItemDrawerComponent"]], styles: ["[_nghost-%COMP%] {\n  position: static;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvcGFnZXMvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "862v":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-routing.module */ "oLE7");
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.component */ "5T7I");
/* harmony import */ var _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/item-drawer/item-drawer.module */ "ml3Y");






class MapModule {
}
MapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapModule });
MapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapModule_Factory(t) { return new (t || MapModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _map_routing_module__WEBPACK_IMPORTED_MODULE_2__["MapRoutingModule"],
            _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_4__["ItemDrawerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapModule, { declarations: [_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _map_routing_module__WEBPACK_IMPORTED_MODULE_2__["MapRoutingModule"],
        _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_4__["ItemDrawerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _map_routing_module__WEBPACK_IMPORTED_MODULE_2__["MapRoutingModule"],
                    _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_4__["ItemDrawerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "oLE7":
/*!*************************************************!*\
  !*** ./src/app/pages/map/map-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapRoutingModule", function() { return MapRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_services_map_macroscope_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/map-macroscope-resolver.service */ "UTmY");
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.component */ "5T7I");






const routes = [{
        path: ':iteration/:sequence',
        component: _map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"],
        resolve: {
            map: _shared_services_map_macroscope_resolver_service__WEBPACK_IMPORTED_MODULE_2__["MapMacroscopeResolverService"]
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange'
    }];
class MapRoutingModule {
}
MapRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapRoutingModule });
MapRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapRoutingModule_Factory(t) { return new (t || MapRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=map-map-module.js.map