"use strict";
(self["webpackChunkscimaps"] = self["webpackChunkscimaps"] || []).push([["projects_scimaps_src_app_pages_call-for-macroscopes_call-for-macroscopes_module_ts"],{

/***/ 4978:
/*!***********************************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/call-for-macroscopes/call-for-macroscopes-body-resolver.service.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallForMacroscopesBodyResolver": () => (/* binding */ CallForMacroscopesBodyResolver)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/utils */ 9298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);




class CallForMacroscopesBodyResolver {
    constructor(content) {
        this.content = content;
        this.directory = 'assets/content/site';
    }
    resolve() {
        return this.content.getContent('site/callForMacroscopes.md').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            if (response.pdfLink) {
                if (!(0,_constants_utils__WEBPACK_IMPORTED_MODULE_0__.isHttp)(response.pdfLink)) {
                    response.pdfLink = `${this.directory}/${response.pdfLink}`;
                }
            }
            return response;
        }));
    }
}
CallForMacroscopesBodyResolver.ɵfac = function CallForMacroscopesBodyResolver_Factory(t) { return new (t || CallForMacroscopesBodyResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService)); };
CallForMacroscopesBodyResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CallForMacroscopesBodyResolver, factory: CallForMacroscopesBodyResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4015:
/*!****************************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/call-for-macroscopes/call-for-macroscopes-routing.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallForMacroscopesRoutingModule": () => (/* binding */ CallForMacroscopesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _macroscopes_macroscopes_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../macroscopes/macroscopes-resolver.service */ 4146);
/* harmony import */ var _call_for_macroscopes_body_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./call-for-macroscopes-body-resolver.service */ 4978);
/* harmony import */ var _call_for_macroscopes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call-for-macroscopes.component */ 1288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    { path: '',
        component: _call_for_macroscopes_component__WEBPACK_IMPORTED_MODULE_2__.CallForMacroscopesComponent,
        resolve: {
            body: _call_for_macroscopes_body_resolver_service__WEBPACK_IMPORTED_MODULE_1__.CallForMacroscopesBodyResolver,
            macroscopes: _macroscopes_macroscopes_resolver_service__WEBPACK_IMPORTED_MODULE_0__.MacroscopesResolverService
        }
    }
];
class CallForMacroscopesRoutingModule {
}
CallForMacroscopesRoutingModule.ɵfac = function CallForMacroscopesRoutingModule_Factory(t) { return new (t || CallForMacroscopesRoutingModule)(); };
CallForMacroscopesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CallForMacroscopesRoutingModule });
CallForMacroscopesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CallForMacroscopesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 1288:
/*!***********************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/call-for-macroscopes/call-for-macroscopes.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallForMacroscopesComponent": () => (/* binding */ CallForMacroscopesComponent)
/* harmony export */ });
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/drawer.animations */ 6665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/directives/breakpoint.directive */ 8355);
/* harmony import */ var _shared_components_call_out_call_out_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/call-out/call-out.component */ 9198);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.component */ 950);
/* harmony import */ var _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.component */ 6814);











function CallForMacroscopesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thumbnail_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", thumbnail_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", thumbnail_r5.image);
} }
function CallForMacroscopesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thumbnail_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", thumbnail_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", thumbnail_r6.image);
} }
function CallForMacroscopesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Download Details PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx_r2.pdfLink, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function CallForMacroscopesComponent_div_14_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-tab", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tab_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", tab_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r7.tabContents[i_r9]);
} }
function CallForMacroscopesComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-tab-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CallForMacroscopesComponent_div_14_ng_container_2_Template, 4, 2, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.tabHeaders);
} }
function CallForMacroscopesComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CallForMacroscopesComponent_div_15_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const i_r13 = restoredCtx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); ctx_r14.updateActivePageTab(i_r13); return ctx_r14.showDrawer = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tab_r12, " ");
} }
function CallForMacroscopesComponent_div_15_sci_drawer_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "sci-drawer", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "sci-drawer-header", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("backClick", function CallForMacroscopesComponent_div_15_sci_drawer_2_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r16.showDrawer = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@drawerInOut", ctx_r11.showDrawer ? "show" : "hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r11.tabHeaders[ctx_r11.activePageTab]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r11.tabContents[ctx_r11.activePageTab]);
} }
function CallForMacroscopesComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CallForMacroscopesComponent_div_15_div_1_Template, 4, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CallForMacroscopesComponent_div_15_sci_drawer_2_Template, 5, 3, "sci-drawer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.tabHeaders);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.showDrawer);
} }
class CallForMacroscopesComponent {
    constructor(route, datePipe) {
        this.route = route;
        this.datePipe = datePipe;
        this.clsName = 'sci-call-for-macrosopes';
        this.tabHeaders = [];
        this.tabContents = [];
        this.lastIterationThumbnails = [];
        this.activePageTab = 0;
        this.showDrawer = false;
        this.lastIteration = 16;
        this.importantDates = [];
        this.submitURL = '';
        this.pdfLink = '';
        this.allowSubmission = true;
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            const { body } = data;
            // Body
            if (body) {
                const { importantDates, pdfLink, lastIteration, submitURL, tabs, allowSubmission } = body;
                // Tabs
                if (tabs && Array.isArray(tabs)) {
                    tabs.forEach((tab) => {
                        this.tabHeaders.push(tab.header);
                        this.tabContents.push(tab.content);
                    });
                }
                // other keys
                this.lastIteration = lastIteration;
                this.submitURL = submitURL;
                this.pdfLink = pdfLink;
                this.allowSubmission = allowSubmission;
                this.importantDates = importantDates.map(((item) => {
                    return [item.label, this.datePipe.transform(item.date, 'MMM dd, yyyy', '+0000')];
                }));
            }
            // Last Macroscope Iteraction
            const { macroscopes } = data;
            if (macroscopes && Array.isArray(macroscopes) && macroscopes.length > 0) {
                const lastmacroscope = macroscopes.find((macroscope) => {
                    return macroscope.slug.includes(this.lastIteration);
                });
                if (lastmacroscope) {
                    this.lastIterationThumbnails = lastmacroscope.thumbnails;
                }
            }
        });
    }
    updateActivePageTab(index) {
        this.activePageTab = index;
    }
    submitMacroscope() {
        if (this.submitURL) {
            window.open(this.submitURL, '_blank');
        }
    }
}
CallForMacroscopesComponent.ɵfac = function CallForMacroscopesComponent_Factory(t) { return new (t || CallForMacroscopesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe)); };
CallForMacroscopesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CallForMacroscopesComponent, selectors: [["sci-call-for-macroscopes"]], hostVars: 2, hostBindings: function CallForMacroscopesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 23, vars: 10, consts: [[1, "header1"], [1, "image-content"], ["class", "thumbnail desktop", 4, "ngFor", "ngForOf"], ["class", "thumbnail mobile", 4, "ngFor", "ngForOf"], [1, "spacer-48"], [1, "row"], [1, "due"], ["class", "download", 4, "ngIf"], [1, "spacer-24"], [1, "main-content"], [1, "col1"], ["class", "tabs", 4, "sciBreakpoint"], ["class", "mobile-tabs", 4, "sciBreakpoint"], [1, "col2"], ["type", "button", 1, "submit", 3, "ngClass", "disabled", "click"], [1, "spacer-72"], [1, "call-out"], [3, "title", "items"], [1, "thumbnail", "desktop"], [1, "thumbnail-image", 3, "src", "alt"], [1, "thumbnail", "mobile"], [1, "download"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "tabs"], [4, "ngFor", "ngForOf"], [3, "label"], [1, "tab-content"], ["markdown", "", 3, "data"], [1, "mobile-tabs"], ["class", "mobile-button", 3, "click", 4, "ngFor", "ngForOf"], ["class", "sci-drawer", 4, "ngIf"], [1, "mobile-button", 3, "click"], [1, "mobile-icon"], [1, "sci-drawer"], ["drawer", "", 1, "drawer-container"], [3, "title", "backClick"], [1, "drawer-content"]], template: function CallForMacroscopesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Call for Macroscopes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CallForMacroscopesComponent_div_3_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CallForMacroscopesComponent_div_4_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, CallForMacroscopesComponent_div_10_Template, 5, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CallForMacroscopesComponent_div_14_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, CallForMacroscopesComponent_div_15_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CallForMacroscopesComponent_Template_button_click_18_listener() { return ctx.submitMacroscope(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " SUBMIT MACROSCOPE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "sci-call-out", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.lastIterationThumbnails);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.lastIterationThumbnails);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Submissions due: ", ctx.importantDates.length ? ctx.importantDates[0][1] : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pdfLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sciBreakpoint", "mobile+");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sciBreakpoint", "mobile-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.allowSubmission ? "active" : "disabled")("disabled", !ctx.allowSubmission);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Important Dates")("items", ctx.importantDates);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_1__.BreakpointDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _shared_components_call_out_call_out_component__WEBPACK_IMPORTED_MODULE_2__.CallOutComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTab, ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_3__.DrawerComponent, _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_4__.DrawerHeaderComponent], styles: ["[_nghost-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%] {\n  flex: 3;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.75rem;\n  font-size: 1rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%]   .mobile-button[_ngcontent-%COMP%]   .mobile-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  height: 1.5rem;\n  width: 1.5rem;\n  cursor: pointer;\n}\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-left: 2rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]   button.submit[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]   button.submit.active[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #7996a3;\n  border: 2px solid #7996a3;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]   button.submit.active[_ngcontent-%COMP%]:hover {\n  background-color: #7996a3;\n  color: white;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]   .call-out[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]   .call-out[_ngcontent-%COMP%] {\n    flex: 1;\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 0rem;\n    padding-right: 0rem;\n  }\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem;\n}\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    position: relative;\n    width: 50%;\n  }\n}\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .thumbnail-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .thumbnail-title[_ngcontent-%COMP%] {\n  height: 20%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .thumbnail-title[_ngcontent-%COMP%] {\n    margin-top: 0rem;\n    bottom: 0.45rem;\n    z-index: 10;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);\n    width: 100%;\n  }\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail.desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail.mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGwtZm9yLW1hY3Jvc2NvcGVzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vc3R5bGluZy9fc2NyZWVuLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFOSjtBQ2lCSTtFRGJGO0lBSUksc0JBQUE7RUFKSjtBQUNGO0FBTUk7RUFDRSxtQkFBQTtBQUpOO0FDU0k7RUROQTtJQUdJLGNBQUE7RUFGTjtBQUNGO0FBTUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQ0FJO0VERUY7SUFJSSxzQkFBQTtFQUZKO0FBQ0Y7QUFJSTtFQUNFLE9BQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUFITjtBQ1ZJO0VEU0E7SUFPSSxPQUFBO0VBRk47QUFDRjtBQUdNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBRFI7QUFFUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQVY7QUFDVTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ1o7QUFFVTtFQWRGO0lBZUksYUFBQTtFQUNWO0FBQ0Y7QUFHSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBRE47QUMzQ0k7RUR5Q0E7SUFLSSxjQUFBO0VBQ047QUFDRjtBQUFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFFUjtBQUFRO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBRVY7QUFEVTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUdaO0FBQ007RUFDRSxPQUFBO0FBQ1I7QUNqRUk7RUQrREU7SUFHSSxPQUFBO0lBQ0EsV0FBQTtFQUdSO0FBQ0Y7QUFLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUhKO0FBS0k7RUFORjtJQU9JLFdBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBRko7QUFDRjtBQUlJO0VBWkY7SUFhSSxlQUFBO0VBREo7QUFDRjtBQUdJO0VBQ0Usa0JBQUE7QUFETjtBQUlJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBR0EsVUFBQTtBQUpOO0FBTU07RUFQRjtJQVFJLGtCQUFBO0lBQ0EsVUFBQTtFQUhOO0FBQ0Y7QUFLTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFIUjtBQU1NO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSlI7QUFNUTtFQVBGO0lBUUksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxvQ0FBQTtJQUNBLFdBQUE7RUFIUjtBQUNGO0FBUU07RUFERjtJQUVJLGFBQUE7RUFMTjtBQUNGO0FBU007RUFERjtJQUVJLGFBQUE7RUFOTjtBQUNGIiwiZmlsZSI6ImNhbGwtZm9yLW1hY3Jvc2NvcGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2NyZWVuJztcblxuJG1vYmlsZTogNjQwcHg7XG4kdGFibGV0OiA5NjBweDtcbiRkZXNrdG9wOiAxMjQ4cHg7XG5cbjpob3N0IHtcbiAgLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIEBpbmNsdWRlIHNjcmVlbi5icmVha3BvaW50KG1vYmlsZSkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuZG93bmxvYWQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgIEBpbmNsdWRlIHNjcmVlbi5icmVha3BvaW50KG1vYmlsZSkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWFpbi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgQGluY2x1ZGUgc2NyZWVuLmJyZWFrcG9pbnQobW9iaWxlKSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5jb2wxIHtcbiAgICAgIGZsZXg6IDM7IC8vIDc1JSAtIDI1JVxuICAgICAgLy8gdGFiIGFuZCB0YWIgaGVhZGVyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC8vIG9uIG1vYmlsZSAxMDAlXG4gICAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAgIC5tb2JpbGUtdGFicyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5tb2JpbGUtYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgLm1vYmlsZS1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuY29sMiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgICAgQGluY2x1ZGUgc2NyZWVuLmJyZWFrcG9pbnQobW9iaWxlKSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgfVxuICAgICAgYnV0dG9uLnN1Ym1pdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIFxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgY29sb3I6ICM3OTk2YTM7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzc5OTZhMztcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5NmEzO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmNhbGwtb3V0IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgQGluY2x1ZGUgc2NyZWVuLmJyZWFrcG9pbnQobW9iaWxlKSB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcblxuXG4gIC8vIEZvciBiYW5uZXJzXG4gIC5pbWFnZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDByZW07XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtO1xuICAgIH1cblxuICAgIC50aHVtYm5haWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAvLyBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAvLyBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgd2lkdGg6IDI1JTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuXG4gICAgICAudGh1bWJuYWlsLWltYWdlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG5cbiAgICAgIC50aHVtYm5haWwtdGl0bGUge1xuICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDByZW07XG4gICAgICAgICAgYm90dG9tOiAuNDVyZW07XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRodW1ibmFpbC5kZXNrdG9wIHtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRodW1ibmFpbC5tb2JpbGUge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRicmVha3BvaW50LW1vYmlsZTogNzY4cHg7XG4kYnJlYWtwb2ludC10YWJsZXQ6IDk2MHB4O1xuXG4kLWJyZWFrcG9pbnQtcXVlcmllczogKFxuICBtb2JpbGU6IFwiKG1heC13aWR0aDogI3skYnJlYWtwb2ludC1tb2JpbGV9KVwiLFxuICB0YWJsZXQ6XG4gICAgXCIobWluLXdpZHRoOiAjeyRicmVha3BvaW50LW1vYmlsZSArIDFweH0pIGFuZCAobWF4LXdpZHRoOiAjeyRicmVha3BvaW50LXRhYmxldH0pXCIsXG4gIGRlc2t0b3A6IFwiKG1pbi13aWR0aDogI3ticmVha3BvaW50LXRhYmxldCArIDFweH0pXCIsXG4pO1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkdHlwZXMuLi4pIHtcbiAgJHF1ZXJpZXM6ICgpO1xuICBAZWFjaCAkdHlwZSBpbiAkdHlwZXMge1xuICAgICRxdWVyeTogbWFwLWdldCgkLWJyZWFrcG9pbnQtcXVlcmllcywgJHR5cGUpO1xuICAgIEBpZiAkcXVlcnkge1xuICAgICAgJHF1ZXJpZXM6IGFwcGVuZCgkcXVlcmllcywgJHF1ZXJ5LCAkc2VwYXJhdG9yOiBjb21tYSk7XG4gICAgfVxuICB9XG5cbiAgQGlmIGxlbmd0aCgkcXVlcmllcykgPiAwIHtcbiAgICBAbWVkaWEgI3skcXVlcmllc30ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"], data: { animation: [
            _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__.drawerInOut
        ] } });


/***/ }),

/***/ 7574:
/*!********************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/call-for-macroscopes/call-for-macroscopes.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallForMacroscopesModule": () => (/* binding */ CallForMacroscopesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _call_for_macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call-for-macroscopes-routing.module */ 4015);
/* harmony import */ var _call_for_macroscopes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./call-for-macroscopes.component */ 1288);
/* harmony import */ var _shared_components_call_out_call_out_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/call-out/call-out.module */ 8000);
/* harmony import */ var _shared_components_tab_header_tab_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/tab-header/tab-header.module */ 3577);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ 3687);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.module */ 626);
/* harmony import */ var _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.module */ 9789);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);












class CallForMacroscopesModule {
}
CallForMacroscopesModule.ɵfac = function CallForMacroscopesModule_Factory(t) { return new (t || CallForMacroscopesModule)(); };
CallForMacroscopesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CallForMacroscopesModule });
CallForMacroscopesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _call_for_macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_0__.CallForMacroscopesRoutingModule,
            _shared_components_call_out_call_out_module__WEBPACK_IMPORTED_MODULE_2__.CallOutModule,
            _shared_components_tab_header_tab_header_module__WEBPACK_IMPORTED_MODULE_3__.TabHeaderModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__.DrawerModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_6__.DrawerHeaderModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CallForMacroscopesModule, { declarations: [_call_for_macroscopes_component__WEBPACK_IMPORTED_MODULE_1__.CallForMacroscopesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _call_for_macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_0__.CallForMacroscopesRoutingModule,
        _shared_components_call_out_call_out_module__WEBPACK_IMPORTED_MODULE_2__.CallOutModule,
        _shared_components_tab_header_tab_header_module__WEBPACK_IMPORTED_MODULE_3__.TabHeaderModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__.DrawerModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_6__.DrawerHeaderModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule] }); })();


/***/ }),

/***/ 9198:
/*!***********************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/call-out/call-out.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallOutComponent": () => (/* binding */ CallOutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function CallOutComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1[1]);
} }
class CallOutComponent {
    constructor() {
        /** HTML class */
        this.clsName = 'sci-call-out';
    }
}
CallOutComponent.ɵfac = function CallOutComponent_Factory(t) { return new (t || CallOutComponent)(); };
CallOutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CallOutComponent, selectors: [["sci-call-out"]], hostVars: 2, hostBindings: function CallOutComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { title: "title", items: "items" }, decls: 4, vars: 2, consts: [[1, "title"], [1, "body"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "item-label"], [1, "item-date"]], template: function CallOutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CallOutComponent_div_3_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  align-items: center;\n  text-align: center;\n  padding: 1rem;\n  line-height: 2rem;\n}\n[_nghost-%COMP%]   .body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  font-size: 1.125rem;\n}\n[_nghost-%COMP%]   .body[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .body[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n}\n[_nghost-%COMP%]   .body[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-date[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGwtb3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQUo7QUFFRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDRSxxQkFBQTtBQUFOO0FBRU07RUFDRSxtQkFBQTtBQUFSO0FBR007RUFDRSxpQkFBQTtBQURSIiwiZmlsZSI6ImNhbGwtb3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB9XG4gIC5ib2R5IHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcblxuICAgIC5pdGVtIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcblxuICAgICAgLml0ZW0tbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICAgICAgfVxuXG4gICAgICAuaXRlbS1kYXRlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */"] });


/***/ }),

/***/ 8000:
/*!********************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/call-out/call-out.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallOutModule": () => (/* binding */ CallOutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _call_out_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call-out.component */ 9198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class CallOutModule {
}
CallOutModule.ɵfac = function CallOutModule_Factory(t) { return new (t || CallOutModule)(); };
CallOutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CallOutModule });
CallOutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CallOutModule, { declarations: [_call_out_component__WEBPACK_IMPORTED_MODULE_0__.CallOutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_call_out_component__WEBPACK_IMPORTED_MODULE_0__.CallOutComponent] }); })();


/***/ }),

/***/ 5437:
/*!***************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/tab-header/tab-header.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabHeaderComponent": () => (/* binding */ TabHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);



function TabHeaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabHeaderComponent_div_0_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.setActiveTabIndex(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r2 === ctx_r0.activeTabIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r1);
} }
class TabHeaderComponent {
    constructor() {
        // Component class name
        this.clsName = 'sci-social-sidebar';
        this.activeTabIndex = 0;
        this.activeTabIndexChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    setActiveTabIndex(index) {
        if (index === this.activeTabIndex) {
            return;
        }
        this.activeTabIndex = index;
        this.activeTabIndexChanged.emit(index);
    }
}
TabHeaderComponent.ɵfac = function TabHeaderComponent_Factory(t) { return new (t || TabHeaderComponent)(); };
TabHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabHeaderComponent, selectors: [["sci-tab-header"]], hostVars: 2, hostBindings: function TabHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { tabs: "tabs", activeTabIndex: "activeTabIndex" }, outputs: { activeTabIndexChanged: "activeTabIndexChanged" }, decls: 1, vars: 1, consts: [["class", "tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "tab", 3, "click"]], template: function TabHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabHeaderComponent_div_0_Template, 2, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid #e0e0e0;\n}\n[_nghost-%COMP%]   .tab[_ngcontent-%COMP%] {\n  border-bottom: 2px solid transparent;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  cursor: pointer;\n  height: 3rem;\n  font-size: 1rem;\n  text-align: center;\n  line-height: 3rem;\n}\n[_nghost-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #8dc63f;\n  background-color: #f5f5f5;\n}\n[_nghost-%COMP%]   .tab[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid #8dc63f;\n  background-color: #f5f5f5;\n}\n[_nghost-%COMP%]   .tab[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUNGO0FBQ0U7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDSTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7QUFDTjtBQUNJO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtBQUNOO0FBRUk7RUFDRSxpQkFBQTtBQUFOIiwiZmlsZSI6InRhYi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuXG4gIC50YWIge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgICM4ZGM2M2Y7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgIzhkYzYzZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgfVxuXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICB9XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 3577:
/*!************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/tab-header/tab-header.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabHeaderModule": () => (/* binding */ TabHeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _tab_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-header.component */ 5437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class TabHeaderModule {
}
TabHeaderModule.ɵfac = function TabHeaderModule_Factory(t) { return new (t || TabHeaderModule)(); };
TabHeaderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TabHeaderModule });
TabHeaderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabHeaderModule, { declarations: [_tab_header_component__WEBPACK_IMPORTED_MODULE_0__.TabHeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_tab_header_component__WEBPACK_IMPORTED_MODULE_0__.TabHeaderComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_scimaps_src_app_pages_call-for-macroscopes_call-for-macroscopes_module_ts.js.map