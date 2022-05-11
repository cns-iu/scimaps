"use strict";
(self["webpackChunkscimaps"] = self["webpackChunkscimaps"] || []).push([["projects_scimaps_src_app_pages_map_map_module_ts"],{

/***/ 8322:
/*!******************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/map/map-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapRoutingModule": () => (/* binding */ MapRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_components_tile_tile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/tile/tile.component */ 4231);
/* harmony import */ var _shared_services_map_macroscope_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/map-macroscope-resolver.service */ 6026);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.component */ 7560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: ':iteration/:sequence',
        component: _map_component__WEBPACK_IMPORTED_MODULE_2__.MapComponent,
        resolve: {
            map: _shared_services_map_macroscope_resolver_service__WEBPACK_IMPORTED_MODULE_1__.MapMacroscopeResolverService,
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        children: [
            {
                path: 'detail',
                component: _shared_components_tile_tile_component__WEBPACK_IMPORTED_MODULE_0__.TileComponent,
            },
        ],
    },
];
class MapRoutingModule {
}
MapRoutingModule.ɵfac = function MapRoutingModule_Factory(t) { return new (t || MapRoutingModule)(); };
MapRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MapRoutingModule });
MapRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MapRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 7560:
/*!*************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/map/map.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_components_item_drawer_item_drawer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/item-drawer/item-drawer.component */ 3760);



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
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
MapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["sci-map"]], decls: 2, vars: 2, consts: [[1, "map", 3, "item", "type", "languageChange"], ["detail", ""]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sci-item-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("languageChange", function MapComponent_Template_sci_item_drawer_languageChange_0_listener($event) { return ctx.changeLanguage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", ctx.selectedItem)("type", "map");
    } }, directives: [_shared_components_item_drawer_item_drawer_component__WEBPACK_IMPORTED_MODULE_0__.ItemDrawerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  position: static;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoibWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG59Il19 */"] });


/***/ }),

/***/ 9364:
/*!**********************************************************!*\
  !*** ./projects/scimaps/src/app/pages/map/map.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapModule": () => (/* binding */ MapModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-routing.module */ 8322);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.component */ 7560);
/* harmony import */ var _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/item-drawer/item-drawer.module */ 2524);
/* harmony import */ var _shared_components_tile_tile_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/tile/tile.module */ 180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);






class MapModule {
}
MapModule.ɵfac = function MapModule_Factory(t) { return new (t || MapModule)(); };
MapModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MapModule });
MapModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapRoutingModule,
            _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_2__.ItemDrawerModule,
            _shared_components_tile_tile_module__WEBPACK_IMPORTED_MODULE_3__.TileModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MapModule, { declarations: [_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapRoutingModule,
        _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_2__.ItemDrawerModule,
        _shared_components_tile_tile_module__WEBPACK_IMPORTED_MODULE_3__.TileModule] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_scimaps_src_app_pages_map_map_module_ts.js.map