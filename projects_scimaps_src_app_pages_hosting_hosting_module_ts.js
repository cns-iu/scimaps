"use strict";
(self["webpackChunkscimaps"] = self["webpackChunkscimaps"] || []).push([["projects_scimaps_src_app_pages_hosting_hosting_module_ts"],{

/***/ 1266:
/*!*********************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/hosting/hosting-body-resolver.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostingBodyResolverService": () => (/* binding */ HostingBodyResolverService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/utils */ 9298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);




class HostingBodyResolverService {
    constructor(content) {
        this.content = content;
        this.mdPath = 'site/hosting/hosting.md';
        this.directory = 'assets/content/site/hosting';
    }
    resolve() {
        return this.content.getContent(this.mdPath).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((body) => {
            return this.updatePaths(body);
        }));
    }
    // converts paths to absolute paths.
    updatePaths(body) {
        if (body.install_guide && !(0,_constants_utils__WEBPACK_IMPORTED_MODULE_0__.isHttp)(body.install_guide)) {
            body.install_guide = `${this.directory}/${body.install_guide}`;
        }
        if (body.master_booklet && !(0,_constants_utils__WEBPACK_IMPORTED_MODULE_0__.isHttp)(body.master_booklet)) {
            body.master_booklet = `${this.directory}/${body.master_booklet}`;
        }
        this.updateCarouselPaths(body);
        this.updateTabsPaths(body);
        return body;
    }
    updateCarouselPaths(body) {
        const { carousel } = body;
        if (carousel && Array.isArray(carousel)) {
            carousel.forEach((image) => {
                if (image.lg && !(0,_constants_utils__WEBPACK_IMPORTED_MODULE_0__.isHttp)(image.lg)) {
                    image.lg = `${this.directory}/${image.lg}`;
                }
                if (image.sm && !(0,_constants_utils__WEBPACK_IMPORTED_MODULE_0__.isHttp)(image.sm)) {
                    image.sm = `${this.directory}/${image.sm}`;
                }
            });
            body.carousel = carousel;
        }
    }
    updateTabsPaths(body) {
        const { tabs } = body;
        tabs.forEach((tab) => {
            if (tab.image && !(0,_constants_utils__WEBPACK_IMPORTED_MODULE_0__.isHttp)(tab.image)) {
                tab.image = `${this.directory}/${tab.image}`;
            }
        });
    }
}
HostingBodyResolverService.ɵfac = function HostingBodyResolverService_Factory(t) { return new (t || HostingBodyResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService)); };
HostingBodyResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HostingBodyResolverService, factory: HostingBodyResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2413:
/*!**************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/hosting/hosting-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostingRoutingModule": () => (/* binding */ HostingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _hosting_body_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hosting-body-resolver.service */ 1266);
/* harmony import */ var _hosting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hosting.component */ 1275);
/* harmony import */ var _learning_materials_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learning-materials-resolver.service */ 4796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: '',
        component: _hosting_component__WEBPACK_IMPORTED_MODULE_1__.HostingComponent,
        resolve: {
            body: _hosting_body_resolver_service__WEBPACK_IMPORTED_MODULE_0__.HostingBodyResolverService,
            learningMaterials: _learning_materials_resolver_service__WEBPACK_IMPORTED_MODULE_2__.LearningMaterialsResolverService,
        },
        children: [
            {
                path: 'learning-material',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../learning-material/learning-material.module */ 1730)).then(m => m.LearningMaterialModule),
            },
        ]
    }
];
class HostingRoutingModule {
}
HostingRoutingModule.ɵfac = function HostingRoutingModule_Factory(t) { return new (t || HostingRoutingModule)(); };
HostingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HostingRoutingModule });
HostingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HostingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 1275:
/*!*********************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/hosting/hosting.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostingComponent": () => (/* binding */ HostingComponent)
/* harmony export */ });
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/drawer.animations */ 6665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _shared_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/carousel/carousel.component */ 3924);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directives/breakpoint.directive */ 8355);
/* harmony import */ var _shared_components_learning_material_list_learning_material_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/learning-material-list/learning-material-list.component */ 3306);
/* harmony import */ var _shared_components_carousel_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/carousel/item.component */ 2948);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.component */ 950);
/* harmony import */ var _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.component */ 6814);













function HostingComponent_sci_carousel_item_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", item_r3.lg, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", item_r3.lg.split("/")[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r3.title);
} }
function HostingComponent_sci_carousel_item_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", item_r3.sm, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", item_r3.sm.split("/")[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r3.title);
} }
function HostingComponent_sci_carousel_item_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "sci-carousel-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, HostingComponent_sci_carousel_item_13_div_1_Template, 4, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, HostingComponent_sci_carousel_item_13_div_2_Template, 4, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sciBreakpoint", "desktop");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sciBreakpoint", "desktop-");
} }
function HostingComponent_div_18_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-tab", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tab_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", tab_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r8.tabs[i_r10].image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx_r8.tabs[i_r10].content);
} }
function HostingComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-tab-group", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, HostingComponent_div_18_ng_container_2_Template, 6, 3, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.tabHeaders);
} }
function HostingComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HostingComponent_div_19_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const i_r14 = restoredCtx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); ctx_r15.updateActivePageTab(i_r14); return ctx_r15.showTab = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", tab_r13, " ");
} }
function HostingComponent_div_19_sci_drawer_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "sci-drawer", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "sci-drawer-header", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("backClick", function HostingComponent_div_19_sci_drawer_2_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r17.showTab = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@drawerInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx_r12.tabHeaders[ctx_r12.activePageTab]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r12.tabs[ctx_r12.activePageTab].image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx_r12.tabs[ctx_r12.activePageTab].content);
} }
function HostingComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, HostingComponent_div_19_div_1_Template, 4, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, HostingComponent_div_19_sci_drawer_2_Template, 8, 4, "sci-drawer", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.tabHeaders);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.showTab);
} }
class HostingComponent {
    constructor(route) {
        this.route = route;
        /** HTML class name */
        this.clsName = 'sci-hosting';
        this.learningMaterials = [];
        this.overviewText = 'Hello';
        this.carouselImages = [];
        this.installGuide = '';
        this.masterBooklet = '';
        this.bannerText = '';
        this.activePageTab = 0;
        this.tabs = [];
        this.showTab = false; // maintains drawer show/hide for tab
    }
    get tabHeaders() {
        return this.tabs.map((tab) => tab.header);
    }
    ngOnInit() {
        // this.route
        this.route.data.subscribe((data) => {
            // Other keys
            const { body, learningMaterials } = data;
            if (learningMaterials) {
                this.learningMaterials = learningMaterials;
            }
            ({
                overview: this.overviewText,
                install_guide: this.installGuide,
                master_booklet: this.masterBooklet,
                carousel: this.carouselImages,
                banner_text: this.bannerText,
                tabs: this.tabs,
            } = this.getBodyContent(body));
        });
    }
    getBodyContent(body) {
        const result = {};
        const keys = [
            'overview',
            'tabs',
            'carousel',
            'install_guide',
            'master_booklet',
            'banner_text',
        ];
        keys.forEach((key) => {
            if (body.hasOwnProperty(key) && body[key]) {
                result[key] = body[key];
            }
        });
        return result;
    }
    updateActivePageTab(index) {
        this.activePageTab = index;
    }
}
HostingComponent.ɵfac = function HostingComponent_Factory(t) { return new (t || HostingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute)); };
HostingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: HostingComponent, selectors: [["sci-hosting"]], hostVars: 2, hostBindings: function HostingComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 26, vars: 8, consts: [[1, "header1"], [1, "highlight-content"], [1, "overview-container"], ["markdown", "", 3, "data"], [1, "spacer-24"], [1, "pdf-docs"], ["target", "_blank", "rel", "noopener noreferrer", 1, "master-booklet", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "install-guide", 3, "href"], [1, "carousel-container"], [1, "carousel"], ["class", "sci-carousel-item", 4, "ngFor", "ngForOf"], [1, "spacer-72"], [1, "spacer-48"], [1, "main-content"], [1, "col1"], ["class", "tabs", 4, "sciBreakpoint"], ["class", "mobile-tabs", 4, "sciBreakpoint"], [1, "bannerText"], ["header", "Additional Resources", 3, "items"], [1, "sci-carousel-item"], ["class", "carousel-item", 4, "sciBreakpoint"], [1, "carousel-item"], [1, "carousel-image", 3, "src", "alt"], [1, "carousel-image-title"], [1, "tabs"], ["mat-align-tabs", "start"], [4, "ngFor", "ngForOf"], [3, "label"], [1, "tab-content"], ["alt", "", 3, "src"], ["markdown", "", 1, "col2", 3, "data"], [1, "mobile-tabs"], ["class", "mobile-button", 3, "click", 4, "ngFor", "ngForOf"], ["class", "sci-drawer", 4, "ngIf"], [1, "mobile-button", 3, "click"], [1, "mobile-icon"], [1, "sci-drawer"], ["drawer", "", 1, "drawer-container"], [3, "title", "backClick"], [1, "drawer-content"], [1, "row1"], [1, "row2"]], template: function HostingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Hosting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Information Booklet (PDF)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Installation Guide (PDF)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "sci-carousel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, HostingComponent_sci_carousel_item_13_Template, 3, 2, "sci-carousel-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, HostingComponent_div_18_Template, 3, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, HostingComponent_div_19_Template, 4, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "sci-learning-material-list", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.overviewText);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx.masterBooklet, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx.installGuide, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.carouselImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sciBreakpoint", "mobile+");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sciBreakpoint", "mobile-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.bannerText);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.learningMaterials);
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownComponent, _shared_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_2__.BreakpointDirective, _shared_components_learning_material_list_learning_material_list_component__WEBPACK_IMPORTED_MODULE_3__.LearningMaterialListComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _shared_components_carousel_item_component__WEBPACK_IMPORTED_MODULE_4__.CarouselItemComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTab, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_5__.DrawerComponent, _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_6__.DrawerHeaderComponent], styles: ["[_nghost-%COMP%]   .divider[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  border-bottom-color: #e0e0e0;\n  border-left-color: #e0e0e0;\n  border-right-color: #e0e0e0;\n  border-top: 0px solid #e0e0e0;\n  margin: 12px 0;\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    border: none;\n  }\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .overview-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  margin-right: 3rem;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .overview-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0rem;\n  }\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .overview-container[_ngcontent-%COMP%]   .pdf-docs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .overview-container[_ngcontent-%COMP%]   .pdf-docs[_ngcontent-%COMP%]   .install-guide[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 50%;\n  max-height: 28rem;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0rem;\n    margin-bottom: 1rem;\n  }\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .carousel-image[_ngcontent-%COMP%] {\n  height: 20rem;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .carousel-image-title[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%] {\n  width: 50%;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: 3rem;\n  flex: 1;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.75rem;\n  font-size: 1rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%]   .mobile-button[_ngcontent-%COMP%]   .mobile-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  height: 1.5rem;\n  width: 1.5rem;\n  cursor: pointer;\n}\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .bannerText[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  color: #7997a3;\n  text-align: center;\n  font-size: 18px;\n  background-color: #f9fcf5;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .drawer-container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .drawer-container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%]   .row1[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .drawer-container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%]   .row1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvc3RpbmcuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9zdHlsaW5nL19zY3JlZW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBSEo7QUFLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFISjtBQUtJO0VBTEY7SUFNSSw4QkFBQTtJQUNBLFlBQUE7RUFGSjtBQUNGO0FBSUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUdNO0VBTEY7SUFNSSxXQUFBO0lBQ0EsWUFBQTtFQUFOO0FBQ0Y7QUFFTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFSO0FBRVE7RUFDRSxpQkFBQTtBQUFWO0FBS0k7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFITjtBQUtNO0VBTkY7SUFPSSxXQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VBRk47QUFDRjtBQUlNO0VBQ0UsV0FBQTtBQUZSO0FBS1U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFIWjtBQUtZO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBSGQ7QUFNWTtFQUNFLGFBQUE7QUFKZDtBQWFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBWEo7QUNoREk7RUR5REY7SUFJSSxzQkFBQTtFQVRKO0FBQ0Y7QUFXSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFUTjtBQzFESTtFRGdFQTtJQUtJLE9BQUE7RUFQTjtBQUNGO0FBU1E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFQVjtBQVFVO0VBQ0UsVUFBQTtBQU5aO0FBT1k7RUFDRSxnQkFBQTtBQUxkO0FBU1U7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxPQUFBO0FBUFo7QUFXTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVRSO0FBVVE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVJWO0FBU1U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQVBaO0FBVVU7RUFkRjtJQWVJLGFBQUE7RUFQVjtBQUNGO0FBYUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBWEo7QUFnQk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBZFI7QUFlUTtFQUNFLG1CQUFBO0FBYlY7QUFjVTtFQUNFLGVBQUE7QUFaWiIsImZpbGUiOiJob3N0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2NyZWVuJztcbkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxpbmcvYnJlYWtwb2ludHMnO1xuXG46aG9zdCB7XG4gIC5kaXZpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlMGUwZTA7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNlMGUwZTA7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZTBlMGUwO1xuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZTBlMGUwO1xuICAgIG1hcmdpbjogMTJweCAwO1xuICB9XG4gIC5oaWdobGlnaHQtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG5cbiAgICAub3ZlcnZpZXctY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDByZW07XG4gICAgICB9XG5cbiAgICAgIC5wZGYtZG9jcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgLmluc3RhbGwtZ3VpZGUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhcm91c2VsLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgbWF4LWhlaWdodDogMjhyZW07XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAuY2Fyb3VzZWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAuc2NpLWNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAuY2Fyb3VzZWwtaW1hZ2Uge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwcmVtO1xuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhcm91c2VsLWltYWdlLXRpdGxlIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAzLjc1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYWluLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmNvbDEge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIEBpbmNsdWRlIHNjcmVlbi5icmVha3BvaW50KG1vYmlsZSkge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgICAgLnRhYnMge1xuICAgICAgICAudGFiLWNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgLmNvbDEge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sMiB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNyZW07XG4gICAgICAgICAgICBmbGV4OiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubW9iaWxlLXRhYnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAubW9iaWxlLWJ1dHRvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIC5tb2JpbGUtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1vYmlsZSkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYmFubmVyVGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGNvbG9yOiAjNzk5N2EzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmNmNTtcbiAgfVxuXG4gIC5zY2ktZHJhd2VyIHtcbiAgICAuZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgICAuZHJhd2VyLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLnJvdzEge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG59XG4iLCIkYnJlYWtwb2ludC1tb2JpbGU6IDc2OHB4O1xuJGJyZWFrcG9pbnQtdGFibGV0OiA5NjBweDtcblxuJC1icmVha3BvaW50LXF1ZXJpZXM6IChcbiAgbW9iaWxlOiBcIihtYXgtd2lkdGg6ICN7JGJyZWFrcG9pbnQtbW9iaWxlfSlcIixcbiAgdGFibGV0OlxuICAgIFwiKG1pbi13aWR0aDogI3skYnJlYWtwb2ludC1tb2JpbGUgKyAxcHh9KSBhbmQgKG1heC13aWR0aDogI3skYnJlYWtwb2ludC10YWJsZXR9KVwiLFxuICBkZXNrdG9wOiBcIihtaW4td2lkdGg6ICN7YnJlYWtwb2ludC10YWJsZXQgKyAxcHh9KVwiLFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHR5cGVzLi4uKSB7XG4gICRxdWVyaWVzOiAoKTtcbiAgQGVhY2ggJHR5cGUgaW4gJHR5cGVzIHtcbiAgICAkcXVlcnk6IG1hcC1nZXQoJC1icmVha3BvaW50LXF1ZXJpZXMsICR0eXBlKTtcbiAgICBAaWYgJHF1ZXJ5IHtcbiAgICAgICRxdWVyaWVzOiBhcHBlbmQoJHF1ZXJpZXMsICRxdWVyeSwgJHNlcGFyYXRvcjogY29tbWEpO1xuICAgIH1cbiAgfVxuXG4gIEBpZiBsZW5ndGgoJHF1ZXJpZXMpID4gMCB7XG4gICAgQG1lZGlhICN7JHF1ZXJpZXN9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__.drawerInOut] } });


/***/ }),

/***/ 7028:
/*!******************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/hosting/hosting.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostingModule": () => (/* binding */ HostingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _shared_components_card_link_card_link_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/card-link/card-link.module */ 9221);
/* harmony import */ var _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/carousel/carousel.module */ 3708);
/* harmony import */ var _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.module */ 9789);
/* harmony import */ var _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.module */ 626);
/* harmony import */ var _shared_components_learning_material_list_learning_materials_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/learning-material-list/learning-materials-list.module */ 3836);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ 3687);
/* harmony import */ var _hosting_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hosting-routing.module */ 2413);
/* harmony import */ var _hosting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hosting.component */ 1275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);














class HostingModule {
}
HostingModule.ɵfac = function HostingModule_Factory(t) { return new (t || HostingModule)(); };
HostingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: HostingModule });
HostingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _hosting_routing_module__WEBPACK_IMPORTED_MODULE_6__.HostingRoutingModule,
            _shared_components_card_link_card_link_module__WEBPACK_IMPORTED_MODULE_0__.CardLinkModule,
            _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_1__.CarouselModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_10__.MarkdownModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_3__.DrawerModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _shared_components_learning_material_list_learning_materials_list_module__WEBPACK_IMPORTED_MODULE_4__.LearningMaterialsListModule,
            _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_2__.DrawerHeaderModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HostingModule, { declarations: [_hosting_component__WEBPACK_IMPORTED_MODULE_7__.HostingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _hosting_routing_module__WEBPACK_IMPORTED_MODULE_6__.HostingRoutingModule,
        _shared_components_card_link_card_link_module__WEBPACK_IMPORTED_MODULE_0__.CardLinkModule,
        _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_1__.CarouselModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_10__.MarkdownModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_3__.DrawerModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _shared_components_learning_material_list_learning_materials_list_module__WEBPACK_IMPORTED_MODULE_4__.LearningMaterialsListModule,
        _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_2__.DrawerHeaderModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabsModule] }); })();


/***/ }),

/***/ 4796:
/*!***************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/hosting/learning-materials-resolver.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningMaterialsResolverService": () => (/* binding */ LearningMaterialsResolverService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/utils */ 9298);
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);





class LearningMaterialsResolverService {
    constructor(contentService) {
        this.contentService = contentService;
        this.directory = 'assets/content/learning-materials';
    }
    updatePaths(lm) {
        lm.slug = (0,_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__.toSlug)(lm.title);
        if (lm.image) {
            if (lm.image.sm && !(0,_constants_utils__WEBPACK_IMPORTED_MODULE_0__.isHttp)(lm.image.sm)) {
                lm.image.sm = `${this.directory}/${lm.slug}/${lm.image.sm}`;
            }
            if (lm.image.lg && !(0,_constants_utils__WEBPACK_IMPORTED_MODULE_0__.isHttp)(lm.image.lg)) {
                lm.image.lg = `${this.directory}/${lm.slug}/${lm.image.lg}`;
            }
        }
        return lm;
    }
    resolve() {
        return this.contentService
            .getIndex('learning-materials')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            return response.sort((a, b) => a.order - b.order);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            return response.map((lm) => {
                lm.slug = (0,_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__.toSlug)(lm.title);
                return this.updatePaths(lm);
            });
        }));
    }
}
LearningMaterialsResolverService.ɵfac = function LearningMaterialsResolverService_Factory(t) { return new (t || LearningMaterialsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService)); };
LearningMaterialsResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: LearningMaterialsResolverService, factory: LearningMaterialsResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2258:
/*!*************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/card-link/card-link.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardLinkComponent": () => (/* binding */ CardLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 2529);


class CardLinkComponent {
    constructor() {
        /** HTML class name */
        this.clsName = 'sci-card-link';
    }
    goToLink() {
        window.open(this.cardData.link, '_blank');
    }
    get imageUrl() {
        return `url('${this.cardData.imageSource}')`;
    }
}
CardLinkComponent.ɵfac = function CardLinkComponent_Factory(t) { return new (t || CardLinkComponent)(); };
CardLinkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardLinkComponent, selectors: [["sci-card-link"]], hostVars: 2, hostBindings: function CardLinkComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { cardData: "cardData" }, decls: 6, vars: 3, consts: [[1, "card", "mat-elevation-z2", 3, "click"], [1, "thumbnail"], [1, "title"], [1, "icon"]], template: function CardLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardLinkComponent_Template_div_click_0_listener() { return ctx.goToLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "arrow_forward_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cardData.label);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon], styles: ["[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  max-width: 100%;\n  display: flex;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  height: 4.2rem;\n  width: 4rem;\n  background-size: cover;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-size: 1rem;\n  padding: 0.75rem;\n  align-self: center;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtbGluay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFBUjtBQUVRO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUFaO0FBR1E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFEWjtBQUlRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUZaIiwiZmlsZSI6ImNhcmQtbGluay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAuY2FyZCB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQuMnJlbTtcbiAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAuNzVyZW07XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 9221:
/*!**********************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/card-link/card-link.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardLinkModule": () => (/* binding */ CardLinkModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _card_link_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-link.component */ 2258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




class CardLinkModule {
}
CardLinkModule.ɵfac = function CardLinkModule_Factory(t) { return new (t || CardLinkModule)(); };
CardLinkModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CardLinkModule });
CardLinkModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CardLinkModule, { declarations: [_card_link_component__WEBPACK_IMPORTED_MODULE_0__.CardLinkComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule], exports: [_card_link_component__WEBPACK_IMPORTED_MODULE_0__.CardLinkComponent] }); })();


/***/ }),

/***/ 2877:
/*!***************************************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/learning-material-item/learning-material-item.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningMaterialItemComponent": () => (/* binding */ LearningMaterialItemComponent)
/* harmony export */ });
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/drawer.animations */ 6665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/breakpoint.directive */ 8355);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 2529);







function LearningMaterialItemComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LearningMaterialItemComponent_mat_card_0_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.gotoLearningMaterial(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-card-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.item.image.sm, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r0.item.image.sm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item == null ? null : ctx_r0.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r0.item.body.length > 80 ? ctx_r0.item.body.slice(0, 80) + "..." : ctx_r0.item.body);
} }
function LearningMaterialItemComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LearningMaterialItemComponent_mat_card_1_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.gotoLearningMaterial(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.item.image.sm, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.item == null ? null : ctx_r1.item.title);
} }
class LearningMaterialItemComponent {
    constructor(router) {
        this.router = router;
        this.item = {};
    }
    gotoLearningMaterial() {
        var _a;
        if ((_a = this.item) === null || _a === void 0 ? void 0 : _a.slug) {
            this.router.navigate(['/', 'hosting', 'learning-material', this.item.slug], { state: { direction: 'forward' } });
        }
    }
}
LearningMaterialItemComponent.ɵfac = function LearningMaterialItemComponent_Factory(t) { return new (t || LearningMaterialItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
LearningMaterialItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LearningMaterialItemComponent, selectors: [["sci-learning-material-item"]], inputs: { item: "item" }, decls: 2, vars: 2, consts: [["class", "lm-item-desktop", 3, "click", 4, "sciBreakpoint"], ["class", "lm-item-mobile", 3, "click", 4, "sciBreakpoint"], [1, "lm-item-desktop", 3, "click"], [1, "row1"], ["mat-card-image", "", 3, "src", "alt"], [1, "row2"], [1, "header4"], [1, "content"], ["markdown", "", 3, "data"], [1, "lm-item-mobile", 3, "click"], [1, "col1"], ["mat-card-img", "", "alt", "", 3, "src"], [1, "col2"], [1, "col3"], [1, "mobile-icon"]], template: function LearningMaterialItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, LearningMaterialItemComponent_mat_card_0_Template, 9, 4, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LearningMaterialItemComponent_mat_card_1_Template, 10, 2, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sciBreakpoint", "mobile+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sciBreakpoint", "mobile-");
    } }, directives: [_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_1__.BreakpointDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon], styles: ["@media screen and (min-width: 1248px) {\n  [_nghost-%COMP%] {\n    width: 25%;\n  }\n}\n@media screen and (min-width: 960px) {\n  [_nghost-%COMP%] {\n    width: 30%;\n  }\n}\n@media screen and (min-width: 640px) and (max-width: 960px) {\n  [_nghost-%COMP%] {\n    width: 50%;\n  }\n}\n@media screen and (max-width: 640px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .lm-item-desktop[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0;\n  overflow: hidden;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n  height: 18rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .lm-item-desktop[_ngcontent-%COMP%]:hover {\n  box-shadow: 1px 0px 5px 0px;\n}\n[_nghost-%COMP%]   .lm-item-desktop[_ngcontent-%COMP%]   .row1[_ngcontent-%COMP%] {\n  height: 60%;\n}\n[_nghost-%COMP%]   .lm-item-desktop[_ngcontent-%COMP%]   .row1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n}\n[_nghost-%COMP%]   .lm-item-desktop[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n  height: 40%;\n  padding: 1rem;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .lm-item-desktop[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-bottom: 0;\n  font-size: 20px;\n}\n[_nghost-%COMP%]   .lm-item-desktop[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n[_nghost-%COMP%]   .lm-item-mobile[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 1rem;\n  padding: 0;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .lm-item-mobile[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%] {\n  height: 100%;\n  justify-content: center;\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   .lm-item-mobile[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 66px;\n}\n[_nghost-%COMP%]   .lm-item-mobile[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .lm-item-mobile[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  overflow: inherit;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .lm-item-mobile[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  text-overflow: ellipsis;\n  overflow: inherit;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .lm-item-mobile[_ngcontent-%COMP%]   .col3[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: 1rem;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 1248px;\n  margin: auto;\n}\n[_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: #7996a3;\n}\n[_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-icon[_ngcontent-%COMP%] {\n  margin-left: -0.5rem;\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 1248px) {\n  [_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n}\n[_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%]   .row1[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 2rem;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%]   .row1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n[_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (min-width: 1248px) {\n  [_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n    margin-right: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXJuaW5nLW1hdGVyaWFsLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUU7RUFGRjtJQUdJLFVBQUE7RUFKRjtBQUNGO0FBS0U7RUFMRjtJQU1JLFVBQUE7RUFGRjtBQUNGO0FBR0U7RUFSRjtJQVNJLFVBQUE7RUFBRjtBQUNGO0FBQ0U7RUFYRjtJQVlJLFdBQUE7RUFFRjtBQUNGO0FBREU7RUFDRSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBR0o7QUFESTtFQUNFLDJCQUFBO0FBR047QUFESTtFQUNFLFdBQUE7QUFHTjtBQUZNO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUFJUjtBQURJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUdOO0FBRk07RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFJUjtBQURRO0VBQ0UsZUFBQTtBQUdWO0FBR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQURKO0FBRUk7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUFOO0FBQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNSO0FBR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUROO0FBRU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFDUTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ1Y7QUFJSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFGTjtBQU9JO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUxOO0FBTU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBSlI7QUFLUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSFY7QUFLVTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFIWjtBQVFNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQU5SO0FBT1E7RUFKRjtJQUtJLDJCQUFBO0VBSlI7QUFDRjtBQUtRO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFIVjtBQUlVO0VBQ0UsZUFBQTtBQUZaO0FBTVE7RUFDRSxPQUFBO0FBSlY7QUFLVTtFQUZGO0lBR0ksa0JBQUE7RUFGVjtBQUNGIiwiZmlsZSI6ImxlYXJuaW5nLW1hdGVyaWFsLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbW9iaWxlOiA2NDBweDtcbiR0YWJsZXQ6IDk2MHB4O1xuJGRlc2t0b3A6IDEyNDhweDtcblxuOmhvc3Qge1xuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGRlc2t0b3ApIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbW9iaWxlKSBhbmQgKG1heC13aWR0aDogJHRhYmxldCkge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5sbS1pdGVtLWRlc2t0b3Age1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDE4cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogMXB4IDBweCA1cHggMHB4O1xuICAgIH1cbiAgICAucm93MSB7XG4gICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cbiAgICAucm93MiB7XG4gICAgICBoZWlnaHQ6IDQwJTtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgaDQge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubG0taXRlbS1tb2JpbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5jb2wxIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDcycHg7XG4gICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29sMiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXQtY2FyZC10aXRsZSB7XG4gICAgICAgIG92ZXJmbG93OiBpbmhlcml0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBoNCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbDMge1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuZHJhd2VyIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXgtd2lkdGg6IDEyNDhweDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIC5kcmF3ZXItaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAuYmFjay1idXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgY29sb3I6ICM3OTk2YTM7XG5cbiAgICAgICAgICAuYmFjay1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZHJhd2VyLWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRkZXNrdG9wKSB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICB9XG4gICAgICAgIC5yb3cxIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAvLyBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucm93MiB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJGRlc2t0b3ApIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__.drawerInOut] } });


/***/ }),

/***/ 1110:
/*!************************************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/learning-material-item/learning-material-item.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningMaterialItemModule": () => (/* binding */ LearningMaterialItemModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _learning_material_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./learning-material-item.component */ 2877);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared.module */ 3687);
/* harmony import */ var _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drawer/drawer.module */ 626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);








class LearningMaterialItemModule {
}
LearningMaterialItemModule.ɵfac = function LearningMaterialItemModule_Factory(t) { return new (t || LearningMaterialItemModule)(); };
LearningMaterialItemModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LearningMaterialItemModule });
LearningMaterialItemModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_6__.MarkdownModule,
            _shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_2__.DrawerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LearningMaterialItemModule, { declarations: [_learning_material_item_component__WEBPACK_IMPORTED_MODULE_0__.LearningMaterialItemComponent], imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_6__.MarkdownModule,
        _shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_2__.DrawerModule], exports: [_learning_material_item_component__WEBPACK_IMPORTED_MODULE_0__.LearningMaterialItemComponent] }); })();


/***/ }),

/***/ 3306:
/*!***************************************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/learning-material-list/learning-material-list.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningMaterialListComponent": () => (/* binding */ LearningMaterialListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/breakpoint.directive */ 8355);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _learning_material_item_learning_material_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../learning-material-item/learning-material-item.component */ 2877);




function LearningMaterialListComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "sci-learning-material-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", item_r3.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r3);
} }
function LearningMaterialListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LearningMaterialListComponent_div_4_ng_container_1_Template, 2, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
function LearningMaterialListComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "sci-learning-material-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", item_r5.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r5);
} }
function LearningMaterialListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LearningMaterialListComponent_div_5_ng_container_1_Template, 2, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.items);
} }
class LearningMaterialListComponent {
    constructor() {
        this.classname = 'sci-learning-material-list';
        this.items = [];
        this.header = '';
    }
}
LearningMaterialListComponent.ɵfac = function LearningMaterialListComponent_Factory(t) { return new (t || LearningMaterialListComponent)(); };
LearningMaterialListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LearningMaterialListComponent, selectors: [["sci-learning-material-list"]], hostVars: 2, hostBindings: function LearningMaterialListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.classname);
    } }, inputs: { items: "items", header: "header" }, decls: 6, vars: 3, consts: [[1, "header1"], [1, "spacer-48"], [1, "learning-material-container"], ["class", "lm-list-desktop", 4, "sciBreakpoint"], ["class", "lm-list-mobile", 4, "sciBreakpoint"], [1, "lm-list-desktop"], [4, "ngFor", "ngForOf"], [3, "id", "item"], [1, "lm-list-mobile"]], template: function LearningMaterialListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, LearningMaterialListComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, LearningMaterialListComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sciBreakpoint", "mobile+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sciBreakpoint", "mobile-");
    } }, directives: [_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_0__.BreakpointDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _learning_material_item_learning_material_item_component__WEBPACK_IMPORTED_MODULE_1__.LearningMaterialItemComponent], styles: ["[_nghost-%COMP%]   .learning-material-container[_ngcontent-%COMP%]   .lm-list-desktop[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .learning-material-container[_ngcontent-%COMP%]   .lm-list-mobile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXJuaW5nLW1hdGVyaWFsLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRE47QUFHSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUROIiwiZmlsZSI6ImxlYXJuaW5nLW1hdGVyaWFsLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5sZWFybmluZy1tYXRlcmlhbC1jb250YWluZXIge1xuICAgIC5sbS1saXN0LWRlc2t0b3Age1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIC5sbS1saXN0LW1vYmlsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 3836:
/*!*************************************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/learning-material-list/learning-materials-list.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningMaterialsListModule": () => (/* binding */ LearningMaterialsListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _learning_material_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./learning-material-list.component */ 3306);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared.module */ 3687);
/* harmony import */ var _learning_material_item_learning_material_item_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../learning-material-item/learning-material-item.module */ 1110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class LearningMaterialsListModule {
}
LearningMaterialsListModule.ɵfac = function LearningMaterialsListModule_Factory(t) { return new (t || LearningMaterialsListModule)(); };
LearningMaterialsListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LearningMaterialsListModule });
LearningMaterialsListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_learning_material_item_learning_material_item_module__WEBPACK_IMPORTED_MODULE_2__.LearningMaterialItemModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LearningMaterialsListModule, { declarations: [_learning_material_list_component__WEBPACK_IMPORTED_MODULE_0__.LearningMaterialListComponent], imports: [_learning_material_item_learning_material_item_module__WEBPACK_IMPORTED_MODULE_2__.LearningMaterialItemModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule], exports: [_learning_material_list_component__WEBPACK_IMPORTED_MODULE_0__.LearningMaterialListComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_scimaps_src_app_pages_hosting_hosting_module_ts.js.map