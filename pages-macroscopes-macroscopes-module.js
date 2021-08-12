(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-macroscopes-macroscopes-module"],{

/***/ "DsRh":
/*!*****************************************************************!*\
  !*** ./src/app/pages/macroscopes/macroscopes-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MacroscopesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroscopesRoutingModule", function() { return MacroscopesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _macroscopes_body_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./macroscopes-body-resolver.service */ "Oz6S");
/* harmony import */ var _macroscopes_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./macroscopes-resolver.service */ "n4Jh");
/* harmony import */ var _macroscopes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./macroscopes.component */ "iwkI");







const routes = [{
        path: '',
        component: _macroscopes_component__WEBPACK_IMPORTED_MODULE_4__["MacroscopesComponent"],
        resolve: {
            macroscopes: _macroscopes_resolver_service__WEBPACK_IMPORTED_MODULE_3__["MacroscopesResolverService"],
            body: _macroscopes_body_resolver_service__WEBPACK_IMPORTED_MODULE_2__["MacroscopesBodyResolverService"]
        },
        runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | macroscope-macroscope-module */[__webpack_require__.e("default~macroscope-macroscope-module~pages-maps-maps-module"), __webpack_require__.e("common"), __webpack_require__.e("macroscope-macroscope-module")]).then(__webpack_require__.bind(null, /*! ../macroscope/macroscope.module */ "+1hx")).then(m => m.MacroscopeModule),
                data: { animation: 'Macroscope', type: 'macroscope' }
            }
        ]
    }];
class MacroscopesRoutingModule {
}
MacroscopesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MacroscopesRoutingModule });
MacroscopesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MacroscopesRoutingModule_Factory(t) { return new (t || MacroscopesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MacroscopesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "FJoV":
/*!*********************************************************!*\
  !*** ./src/app/pages/macroscopes/macroscopes.module.ts ***!
  \*********************************************************/
/*! exports provided: MacroscopesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroscopesModule", function() { return MacroscopesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./macroscopes-routing.module */ "DsRh");
/* harmony import */ var _macroscopes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./macroscopes.component */ "iwkI");
/* harmony import */ var _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/discover-listing/discover-listing.module */ "RxUJ");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/carousel/carousel.module */ "8yKn");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.module */ "t1/B");
/* harmony import */ var _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.module */ "4FRl");












class MacroscopesModule {
}
MacroscopesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MacroscopesModule });
MacroscopesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MacroscopesModule_Factory(t) { return new (t || MacroscopesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_3__["MacroscopesRoutingModule"],
            _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_5__["DiscoverListingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
            _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_9__["DrawerModule"],
            _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_10__["DrawerHeaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MacroscopesModule, { declarations: [_macroscopes_component__WEBPACK_IMPORTED_MODULE_4__["MacroscopesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_3__["MacroscopesRoutingModule"],
        _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_5__["DiscoverListingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
        _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_9__["DrawerModule"],
        _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_10__["DrawerHeaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_macroscopes_component__WEBPACK_IMPORTED_MODULE_4__["MacroscopesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_3__["MacroscopesRoutingModule"],
                    _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_5__["DiscoverListingModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
                    _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_9__["DrawerModule"],
                    _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_10__["DrawerHeaderModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Oz6S":
/*!************************************************************************!*\
  !*** ./src/app/pages/macroscopes/macroscopes-body-resolver.service.ts ***!
  \************************************************************************/
/*! exports provided: MacroscopesBodyResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroscopesBodyResolverService", function() { return MacroscopesBodyResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/utils */ "fNWo");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");





class MacroscopesBodyResolverService {
    constructor(content) {
        this.content = content;
        this.directory = 'assets/content/site/macroscopes';
    }
    resolve() {
        return this.content
            .getContent('site/macroscopes/whatIsAMacroscope.md')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return this.updatePaths(response);
        }));
    }
    updatePaths(body) {
        // Carousel
        const { carousel } = body;
        if (carousel && Array.isArray(carousel)) {
            carousel.forEach((image) => {
                if (image.lg && !Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["isHttp"])(image.lg)) {
                    image.lg = `${this.directory}/${image.lg}`;
                }
                if (image.sm && !Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["isHttp"])(image.sm)) {
                    image.sm = `${this.directory}/${image.sm}`;
                }
            });
            body.carousel = carousel;
        }
        return body;
    }
}
MacroscopesBodyResolverService.ɵfac = function MacroscopesBodyResolverService_Factory(t) { return new (t || MacroscopesBodyResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"])); };
MacroscopesBodyResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MacroscopesBodyResolverService, factory: MacroscopesBodyResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopesBodyResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"] }]; }, null); })();


/***/ }),

/***/ "iwkI":
/*!************************************************************!*\
  !*** ./src/app/pages/macroscopes/macroscopes.component.ts ***!
  \************************************************************/
/*! exports provided: MacroscopesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroscopesComponent", function() { return MacroscopesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/drawer.animations */ "AY0P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _shared_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/carousel/carousel.component */ "4Isi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _shared_components_carousel_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/carousel/item.component */ "IV5s");
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/directives/breakpoint.directive */ "EpdQ");
/* harmony import */ var _shared_components_discover_listing_discover_listing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/discover-listing/discover-listing.component */ "0zur");
/* harmony import */ var _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.component */ "IMSB");
/* harmony import */ var _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.component */ "StKz");













function MacroscopesComponent_sci_carousel_item_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carouselItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", carouselItem_r4.lg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", carouselItem_r4.lg.split("/")[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](carouselItem_r4.title);
} }
function MacroscopesComponent_sci_carousel_item_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carouselItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", carouselItem_r4.sm, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", carouselItem_r4.sm.split("/")[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](carouselItem_r4.title);
} }
function MacroscopesComponent_sci_carousel_item_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-carousel-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MacroscopesComponent_sci_carousel_item_7_div_1_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MacroscopesComponent_sci_carousel_item_7_div_2_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "desktop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "desktop-");
} }
function MacroscopesComponent_ng_container_8_sci_discover_listing_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sci-discover-listing", 18);
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "macroscope-", item_r9.iteration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("discoverItem", item_r9)("type", "macroscopes");
} }
function MacroscopesComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MacroscopesComponent_ng_container_8_sci_discover_listing_1_Template, 1, 3, "sci-discover-listing", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showAllItems || i_r10 < ctx_r1.displayLimit);
} }
function MacroscopesComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MacroscopesComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.showAllItems = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show More Macroscopes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MacroscopesComponent_sci_drawer_14_sci_carousel_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-carousel-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "sci-discover-listing", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const discoverItem_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("discoverItem", discoverItem_r16)("type", "macroscopes");
} }
function MacroscopesComponent_sci_drawer_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-drawer", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sci-drawer-header", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backClick", function MacroscopesComponent_sci_drawer_14_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.showModal = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "sci-carousel", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MacroscopesComponent_sci_drawer_14_sci_carousel_item_5_Template, 2, 2, "sci-carousel-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@drawerInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Macroscopes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.discoverItems);
} }
class MacroscopesComponent {
    constructor(route) {
        this.route = route;
        /** HTML class name */
        this.clsName = 'sci-macroscopes';
        this.showModal = false;
        this.highlightBody = '';
        this.discoverItems = [];
        this.displayItems = [];
        this.carouselItems = [];
        this.showAllItems = false;
        this.displayLimit = 3;
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            const { body, macroscopes } = data;
            this.discoverItems = macroscopes;
            if (body) {
                this.highlightBody = body.body;
            }
            if (body.carousel) {
                this.carouselItems = body.carousel;
            }
            this.updateDisplayItems();
        });
    }
    updateDisplayItems() {
        const items = [...this.discoverItems];
        this.displayItems = items;
    }
}
MacroscopesComponent.ɵfac = function MacroscopesComponent_Factory(t) { return new (t || MacroscopesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
MacroscopesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MacroscopesComponent, selectors: [["sci-macroscopes"]], hostVars: 2, hostBindings: function MacroscopesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 16, vars: 5, consts: [[1, "macroscopes-container"], [1, "header"], [1, "highlight-content"], ["markdown", "", 1, "highlight-body", 3, "data"], [1, "carousel-container"], [1, "carousel"], ["class", "sci-carousel-item", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["class", "more-button", 3, "click", 4, "ngIf"], [1, "mobile-button", 3, "click"], [1, "mobile-icon"], ["class", "sci-drawer", 4, "ngIf"], [1, "sci-carousel-item"], ["class", "carousel-item", 4, "sciBreakpoint"], [1, "carousel-item"], [1, "carousel-image", 3, "src", "alt"], [1, "carousel-image-title"], ["class", "discover-item macroscopes", 3, "id", "discoverItem", "type", 4, "ngIf"], [1, "discover-item", "macroscopes", 3, "id", "discoverItem", "type"], [1, "more-button", 3, "click"], [1, "sci-drawer"], ["drawer", "", 1, "drawer-container"], [3, "title", "backClick"], [1, "drawer-content"], [1, "macroscopes-carousel"], ["class", "mobile-carousel", 4, "ngFor", "ngForOf"], [1, "mobile-carousel"], [3, "discoverItem", "type"]], template: function MacroscopesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Macroscopes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "sci-carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MacroscopesComponent_sci_carousel_item_7_Template, 3, 2, "sci-carousel-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MacroscopesComponent_ng_container_8_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MacroscopesComponent_button_9_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MacroscopesComponent_Template_div_click_10_listener() { return ctx.showModal = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Discover Macroscopes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MacroscopesComponent_sci_drawer_14_Template, 6, 3, "sci-drawer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.highlightBody);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.carouselItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAllItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showModal);
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"], _shared_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_components_carousel_item_component__WEBPACK_IMPORTED_MODULE_7__["CarouselItemComponent"], _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_8__["BreakpointDirective"], _shared_components_discover_listing_discover_listing_component__WEBPACK_IMPORTED_MODULE_9__["DiscoverListingComponent"], _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_10__["DrawerComponent"], _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_11__["DrawerHeaderComponent"]], styles: ["@media (max-width: 640px) {\n    .swiper-button-prev,   .swiper-button-next {\n    background-color: rgba(0, 0, 0, 0.75);\n    border-radius: 50%;\n    padding: 1.5rem;\n    top: 50% !important;\n  }\n    .swiper-button-prev::after,   .swiper-button-next::after {\n    color: white !important;\n  }\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding-bottom: 2rem;\n  margin-bottom: 2rem;\n  left: 0;\n}\n\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    border: none;\n  }\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .highlight-body[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-right: 1rem;\n}\n\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .highlight-body[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0rem;\n  }\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 50%;\n  max-height: 28rem;\n  margin-left: 3rem;\n}\n\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0rem;\n    margin-bottom: 1rem;\n    margin-left: 0rem;\n  }\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .carousel-image[_ngcontent-%COMP%] {\n  height: 20rem;\n  object-fit: cover;\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .carousel-image-title[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n[_nghost-%COMP%]   .discover-item[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .discover-item[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n[_nghost-%COMP%]   .more-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 2rem;\n  height: 2.5rem;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .more-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n[_nghost-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.75rem;\n  font-size: 1rem;\n  cursor: pointer;\n  margin-bottom: 2rem;\n}\n\n[_nghost-%COMP%]   .mobile-button[_ngcontent-%COMP%]   .mobile-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  height: 1.5rem;\n  width: 1.5rem;\n  cursor: pointer;\n}\n\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9tYWNyb3Njb3Blcy9tYWNyb3Njb3Blcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLRTtFQUNFO0lBQ0UscUNBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQUpKO0VBT0U7SUFDRSx1QkFBQTtFQUxKO0FBQ0Y7O0FBVUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7QUFQSjs7QUFTSTtFQVJGO0lBU0ksOEJBQUE7SUFDQSxZQUFBO0VBTko7QUFDRjs7QUFRSTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQU5OOztBQVFNO0VBSkY7SUFLSSxXQUFBO0lBQ0EsYUFBQTtFQUxOO0FBQ0Y7O0FBUUk7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQU5OOztBQU9NO0VBTkY7SUFPSSxXQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUFKTjtBQUNGOztBQU1NO0VBQ0UsV0FBQTtBQUpSOztBQU9VO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBTFo7O0FBT1k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFMZDs7QUFRWTtFQUNFLGFBQUE7QUFOZDs7QUFnQkU7RUFDRSxtQkFBQTtBQWRKOztBQWdCSTtFQUhGO0lBSUksYUFBQTtFQWJKO0FBQ0Y7O0FBZ0JFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBZEo7O0FBZ0JJO0VBUEY7SUFRSSxhQUFBO0VBYko7QUFDRjs7QUFnQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBZEo7O0FBZ0JJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFkTjs7QUFpQkk7RUFoQkY7SUFpQkksYUFBQTtFQWRKO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3BhZ2VzL21hY3Jvc2NvcGVzL21hY3Jvc2NvcGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRlc2t0b3A6IDEyNDhweDtcbiR0YWJsZXQ6IDk2MHB4O1xuJG1vYmlsZTogNjQwcHg7XG5cbjo6bmctZGVlcCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgLnN3aXBlci1idXR0b24tcHJldiwgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgdG9wOiA1MCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2OjphZnRlciwgLnN3aXBlci1idXR0b24tbmV4dDo6YWZ0ZXIge1xuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbjpob3N0IHtcbiAgLmhpZ2hsaWdodC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBsZWZ0OiAwO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG5cbiAgICAuaGlnaGxpZ2h0LWJvZHkge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwcmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJvdXNlbC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDI4cmVtO1xuICAgICAgbWFyZ2luLWxlZnQ6IDNyZW07XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMHJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgICB9XG5cbiAgICAgIC5jYXJvdXNlbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5zY2ktY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgICAgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgIC5jYXJvdXNlbC1pbWFnZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMjByZW07XG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLmNhcm91c2VsLWltYWdlLXRpdGxlIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAzLjc1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRpc2NvdmVyLWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubW9yZS1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tb2JpbGUtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAgIC5tb2JpbGUtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1vYmlsZSkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn0iXX0= */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-macroscopes',
                templateUrl: './macroscopes.component.html',
                styleUrls: ['./macroscopes.component.scss'],
                animations: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-macroscopes-macroscopes-module.js.map