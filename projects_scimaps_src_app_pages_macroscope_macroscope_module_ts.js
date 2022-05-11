"use strict";
(self["webpackChunkscimaps"] = self["webpackChunkscimaps"] || []).push([["projects_scimaps_src_app_pages_macroscope_macroscope_module_ts"],{

/***/ 7567:
/*!****************************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/macroscope/macroscope-detail/macroscope-detail.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MacroscopeDetailComponent": () => (/* binding */ MacroscopeDetailComponent)
/* harmony export */ });
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/drawer.animations */ 6665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/drawer/drawer.component */ 950);
/* harmony import */ var _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/drawer-header/drawer-header.component */ 6814);
/* harmony import */ var _shared_components_video_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/video/video.component */ 2947);







function MacroscopeDetailComponent_sci_drawer_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "sci-video", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("url", ctx_r1.item.videoLink);
} }
function MacroscopeDetailComponent_sci_drawer_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "sci-drawer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "sci-drawer-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("backClick", function MacroscopeDetailComponent_sci_drawer_0_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MacroscopeDetailComponent_sci_drawer_0_div_4_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@drawerInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.item.videoLink);
} }
class MacroscopeDetailComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.showOverlay = false;
    }
    ngOnInit() {
        var _a;
        this.showOverlay = true;
        const parentSnapshot = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.snapshot;
        const macroscope = parentSnapshot === null || parentSnapshot === void 0 ? void 0 : parentSnapshot.data.macroscope;
        this.item = macroscope;
    }
    close() {
        this.showOverlay = false;
        setTimeout(() => {
            this.router.navigate(['../'], { relativeTo: this.route });
        }, 500);
    }
}
MacroscopeDetailComponent.ɵfac = function MacroscopeDetailComponent_Factory(t) { return new (t || MacroscopeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
MacroscopeDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MacroscopeDetailComponent, selectors: [["sci-macroscope-detail"]], decls: 1, vars: 1, consts: [["class", "sci-drawer", 4, "ngIf"], [1, "sci-drawer"], ["drawer", "", 1, "drawer"], ["backText", "Macroscope", 3, "backClick"], [1, "overlay-container"], ["class", "video-wrapper", 4, "ngIf"], [1, "video-wrapper"], [3, "url"]], template: function MacroscopeDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MacroscopeDetailComponent_sci_drawer_0_Template, 5, 2, "sci-drawer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showOverlay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__.DrawerComponent, _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__.DrawerHeaderComponent, _shared_components_video_video_component__WEBPACK_IMPORTED_MODULE_3__.VideoComponent], styles: [".video-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY3Jvc2NvcGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtBQUFKIiwiZmlsZSI6Im1hY3Jvc2NvcGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udmlkZW8td3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__.drawerInOut] } });


/***/ }),

/***/ 8294:
/*!********************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/macroscope/macroscope-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MacroscopeRoutingModule": () => (/* binding */ MacroscopeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_services_map_macroscope_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/map-macroscope-resolver.service */ 6026);
/* harmony import */ var _macroscope_detail_macroscope_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./macroscope-detail/macroscope-detail.component */ 7567);
/* harmony import */ var _macroscope_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./macroscope.component */ 9520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [{
        path: ':iteration/:sequence',
        component: _macroscope_component__WEBPACK_IMPORTED_MODULE_2__.MacroscopeComponent,
        resolve: {
            macroscope: _shared_services_map_macroscope_resolver_service__WEBPACK_IMPORTED_MODULE_0__.MapMacroscopeResolverService
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        children: [
            {
                path: 'detail',
                component: _macroscope_detail_macroscope_detail_component__WEBPACK_IMPORTED_MODULE_1__.MacroscopeDetailComponent,
            },
        ],
    }];
class MacroscopeRoutingModule {
}
MacroscopeRoutingModule.ɵfac = function MacroscopeRoutingModule_Factory(t) { return new (t || MacroscopeRoutingModule)(); };
MacroscopeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MacroscopeRoutingModule });
MacroscopeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MacroscopeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 9520:
/*!***************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/macroscope/macroscope.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MacroscopeComponent": () => (/* binding */ MacroscopeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_components_item_drawer_item_drawer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/item-drawer/item-drawer.component */ 3760);



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
MacroscopeComponent.ɵfac = function MacroscopeComponent_Factory(t) { return new (t || MacroscopeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
MacroscopeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MacroscopeComponent, selectors: [["sci-macroscope"]], decls: 2, vars: 2, consts: [[1, "macroscope", 3, "item", "type", "languageChange"], ["detail-macroscope", ""]], template: function MacroscopeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sci-item-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("languageChange", function MacroscopeComponent_Template_sci_item_drawer_languageChange_0_listener($event) { return ctx.changeLanguage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", ctx.selectedItem)("type", "macroscope");
    } }, directives: [_shared_components_item_drawer_item_drawer_component__WEBPACK_IMPORTED_MODULE_0__.ItemDrawerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 2086:
/*!************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/macroscope/macroscope.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MacroscopeModule": () => (/* binding */ MacroscopeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _macroscope_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./macroscope-routing.module */ 8294);
/* harmony import */ var _macroscope_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./macroscope.component */ 9520);
/* harmony import */ var _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/item-drawer/item-drawer.module */ 2524);
/* harmony import */ var _shared_components_maker_video_maker_video_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/maker-video/maker-video.module */ 6679);
/* harmony import */ var _macroscope_detail_macroscope_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./macroscope-detail/macroscope-detail.component */ 7567);
/* harmony import */ var _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.module */ 626);
/* harmony import */ var _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.module */ 9789);
/* harmony import */ var _shared_components_video_video_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/video/video.module */ 4187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);










class MacroscopeModule {
}
MacroscopeModule.ɵfac = function MacroscopeModule_Factory(t) { return new (t || MacroscopeModule)(); };
MacroscopeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: MacroscopeModule });
MacroscopeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _shared_components_maker_video_maker_video_module__WEBPACK_IMPORTED_MODULE_3__.MakerVideoModule,
            _macroscope_routing_module__WEBPACK_IMPORTED_MODULE_0__.MacroscopeRoutingModule,
            _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_2__.ItemDrawerModule,
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__.DrawerModule,
            _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_6__.DrawerHeaderModule,
            _shared_components_video_video_module__WEBPACK_IMPORTED_MODULE_7__.VideoModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MacroscopeModule, { declarations: [_macroscope_component__WEBPACK_IMPORTED_MODULE_1__.MacroscopeComponent, _macroscope_detail_macroscope_detail_component__WEBPACK_IMPORTED_MODULE_4__.MacroscopeDetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _shared_components_maker_video_maker_video_module__WEBPACK_IMPORTED_MODULE_3__.MakerVideoModule,
        _macroscope_routing_module__WEBPACK_IMPORTED_MODULE_0__.MacroscopeRoutingModule,
        _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_2__.ItemDrawerModule,
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__.DrawerModule,
        _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_6__.DrawerHeaderModule,
        _shared_components_video_video_module__WEBPACK_IMPORTED_MODULE_7__.VideoModule] }); })();


/***/ }),

/***/ 8707:
/*!*****************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/maker-video/maker-video.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakerVideoComponent": () => (/* binding */ MakerVideoComponent)
/* harmony export */ });
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/drawer.animations */ 6665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drawer/drawer.component */ 950);
/* harmony import */ var _drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drawer-header/drawer-header.component */ 6814);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/safe.pipe */ 7248);








function MakerVideoComponent_sci_drawer_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "iframe", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 2, ctx_r1.video.videoLink, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r1.video == null ? null : ctx_r1.video.long_description);
} }
function MakerVideoComponent_sci_drawer_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "sci-drawer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "sci-drawer-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("backClick", function MakerVideoComponent_sci_drawer_0_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MakerVideoComponent_sci_drawer_0_div_3_Template, 5, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@drawerInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.video);
} }
class MakerVideoComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.showOverlay = false;
    }
    ngOnInit() {
        this.showOverlay = true;
        const { video } = this.route.snapshot.data;
        if (video) {
            this.video = video;
        }
    }
    close() {
        this.showOverlay = false;
        setTimeout(() => {
            this.router.navigate(['/', 'learning-center', 'maker-videos']);
        }, 500);
    }
}
MakerVideoComponent.ɵfac = function MakerVideoComponent_Factory(t) { return new (t || MakerVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
MakerVideoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MakerVideoComponent, selectors: [["sci-maker-video"]], decls: 1, vars: 1, consts: [["class", "sci-drawer", 4, "ngIf"], [1, "sci-drawer"], ["drawer", "", 1, "drawer"], ["backText", "Maker Videos", 3, "backClick"], ["class", "overlay-container", 4, "ngIf"], [1, "overlay-container"], ["title", "YouTube video player", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "iframe", 3, "src"], [1, "spacer-72"], ["markdown", "", 1, "long-description", 3, "data"]], template: function MakerVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MakerVideoComponent_sci_drawer_0_Template, 4, 2, "sci-drawer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showOverlay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__.DrawerComponent, _drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__.DrawerHeaderComponent, ngx_markdown__WEBPACK_IMPORTED_MODULE_7__.MarkdownComponent], pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__.SafePipe], styles: ["[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%] {\n  background-color: black;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 75vh;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%]   .iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56vw;\n  border: 0;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%]   .long-description[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2VyLXZpZGVvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsdUJBRlE7QUFBWjtBQUdJO0VBQ0UsdUJBSk07RUFLTixhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFETjtBQUVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBQVI7QUFFTTtFQUNFLFlBQUE7QUFBUiIsImZpbGUiOiJtYWtlci12aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLy8gT3ZlcmxheSBzdHlsaW5nXG4gICRiZ2NvbG9yOiBibGFjaztcbiAgLnNjaS1kcmF3ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xuICAgIC5vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdjb2xvcjtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA3NXZoO1xuICAgICAgLmlmcmFtZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDU2dnc7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgIH1cbiAgICAgIC5sb25nLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__.drawerInOut] } });


/***/ }),

/***/ 6679:
/*!**************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/maker-video/maker-video.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakerVideoModule": () => (/* binding */ MakerVideoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipes/safe.pipe */ 7248);
/* harmony import */ var _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drawer-header/drawer-header.module */ 9789);
/* harmony import */ var _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drawer/drawer.module */ 626);
/* harmony import */ var _maker_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maker-video.component */ 8707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







class MakerVideoModule {
}
MakerVideoModule.ɵfac = function MakerVideoModule_Factory(t) { return new (t || MakerVideoModule)(); };
MakerVideoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MakerVideoModule });
MakerVideoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_2__.DrawerModule,
            _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_1__.DrawerHeaderModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_6__.MarkdownModule,
            _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MakerVideoModule, { declarations: [_maker_video_component__WEBPACK_IMPORTED_MODULE_3__.MakerVideoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_2__.DrawerModule,
        _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_1__.DrawerHeaderModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_6__.MarkdownModule,
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipeModule], exports: [_maker_video_component__WEBPACK_IMPORTED_MODULE_3__.MakerVideoComponent] }); })();


/***/ }),

/***/ 2947:
/*!*****************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/video/video.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoComponent": () => (/* binding */ VideoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipes/safe.pipe */ 7248);


class VideoComponent {
    constructor() {
        this.url = '';
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["sci-video"]], inputs: { url: "url" }, decls: 21, vars: 36, consts: [[1, "container"], ["controls", "", "autoplay", "", 1, "video"], ["type", "video/webm", 3, "src"], ["type", "video/mp4", 3, "src"], ["type", "video/ogg", 3, "src"], ["type", "video/3gp", 3, "src"], ["type", "video/quicktime", 3, "src"], ["type", "video/x-quicktime", 3, "src"], ["type", "video/avi", 3, "src"], ["type", "video/x-ms-wmv", 3, "src"], ["type", "video/x-ms-asf", 3, "src"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "source", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "source", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "source", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "source", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "source", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "source", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Sorry, your browser doesn't support embedded videos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 9, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 12, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 15, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 18, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 21, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 24, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 27, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 30, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 33, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipe], styles: ["[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n[_nghost-%COMP%]   .video[_ngcontent-%COMP%] {\n  width: 70vw;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBRFI7QUFHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRFIiLCJmaWxlIjoidmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLnZpZGVvIHtcbiAgICAgICAgd2lkdGg6IDcwdnc7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 4187:
/*!**************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/video/video.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoModule": () => (/* binding */ VideoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _video_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.component */ 2947);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/safe.pipe */ 7248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class VideoModule {
}
VideoModule.ɵfac = function VideoModule_Factory(t) { return new (t || VideoModule)(); };
VideoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: VideoModule });
VideoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_1__.SafePipeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VideoModule, { declarations: [_video_component__WEBPACK_IMPORTED_MODULE_0__.VideoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_1__.SafePipeModule], exports: [_video_component__WEBPACK_IMPORTED_MODULE_0__.VideoComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_scimaps_src_app_pages_macroscope_macroscope_module_ts.js.map