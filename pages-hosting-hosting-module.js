(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hosting-hosting-module"],{

/***/ "2+6Z":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/card-link/card-link.module.ts ***!
  \*****************************************************************/
/*! exports provided: CardLinkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardLinkModule", function() { return CardLinkModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _card_link_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-link.component */ "QjjN");





class CardLinkModule {
}
CardLinkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CardLinkModule });
CardLinkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CardLinkModule_Factory(t) { return new (t || CardLinkModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CardLinkModule, { declarations: [_card_link_component__WEBPACK_IMPORTED_MODULE_3__["CardLinkComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]], exports: [_card_link_component__WEBPACK_IMPORTED_MODULE_3__["CardLinkComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CardLinkModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_card_link_component__WEBPACK_IMPORTED_MODULE_3__["CardLinkComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]
                ],
                exports: [_card_link_component__WEBPACK_IMPORTED_MODULE_3__["CardLinkComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "3lz5":
/*!*************************************************!*\
  !*** ./src/app/pages/hosting/hosting.module.ts ***!
  \*************************************************/
/*! exports provided: HostingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostingModule", function() { return HostingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _hosting_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hosting-routing.module */ "fxZB");
/* harmony import */ var _hosting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hosting.component */ "DqQm");
/* harmony import */ var _shared_components_card_link_card_link_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/card-link/card-link.module */ "2+6Z");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/carousel/carousel.module */ "8yKn");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.module */ "t1/B");
/* harmony import */ var _shared_components_tab_header_tab_header_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/tab-header/tab-header.module */ "IbK4");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Meci");
/* harmony import */ var _shared_components_learning_material_list_learning_materials_list_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/learning-material-list/learning-materials-list.module */ "LcF6");
/* harmony import */ var _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.module */ "4FRl");















class HostingModule {
}
HostingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HostingModule });
HostingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HostingModule_Factory(t) { return new (t || HostingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _hosting_routing_module__WEBPACK_IMPORTED_MODULE_2__["HostingRoutingModule"],
            _shared_components_card_link_card_link_module__WEBPACK_IMPORTED_MODULE_4__["CardLinkModule"],
            _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_9__["DrawerModule"],
            _shared_components_tab_header_tab_header_module__WEBPACK_IMPORTED_MODULE_10__["TabHeaderModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _shared_components_learning_material_list_learning_materials_list_module__WEBPACK_IMPORTED_MODULE_12__["LearningMaterialsListModule"],
            _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_13__["DrawerHeaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HostingModule, { declarations: [_hosting_component__WEBPACK_IMPORTED_MODULE_3__["HostingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _hosting_routing_module__WEBPACK_IMPORTED_MODULE_2__["HostingRoutingModule"],
        _shared_components_card_link_card_link_module__WEBPACK_IMPORTED_MODULE_4__["CardLinkModule"],
        _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_9__["DrawerModule"],
        _shared_components_tab_header_tab_header_module__WEBPACK_IMPORTED_MODULE_10__["TabHeaderModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _shared_components_learning_material_list_learning_materials_list_module__WEBPACK_IMPORTED_MODULE_12__["LearningMaterialsListModule"],
        _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_13__["DrawerHeaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HostingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_hosting_component__WEBPACK_IMPORTED_MODULE_3__["HostingComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _hosting_routing_module__WEBPACK_IMPORTED_MODULE_2__["HostingRoutingModule"],
                    _shared_components_card_link_card_link_module__WEBPACK_IMPORTED_MODULE_4__["CardLinkModule"],
                    _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_9__["DrawerModule"],
                    _shared_components_tab_header_tab_header_module__WEBPACK_IMPORTED_MODULE_10__["TabHeaderModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _shared_components_learning_material_list_learning_materials_list_module__WEBPACK_IMPORTED_MODULE_12__["LearningMaterialsListModule"],
                    _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_13__["DrawerHeaderModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "4hhT":
/*!**********************************************************************!*\
  !*** ./src/app/pages/hosting/learning-materials-resolver.service.ts ***!
  \**********************************************************************/
/*! exports provided: LearningMaterialsResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningMaterialsResolverService", function() { return LearningMaterialsResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/utils */ "fNWo");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");






class LearningMaterialsResolverService {
    constructor(contentService) {
        this.contentService = contentService;
        this.directory = 'assets/content/learning-materials';
    }
    updatePaths(lm) {
        lm.slug = Object(_shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["toSlug"])(lm.title);
        if (lm.image) {
            if (lm.image.sm && !Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["isHttp"])(lm.image.sm)) {
                lm.image.sm = `${this.directory}/${lm.slug}/${lm.image.sm}`;
            }
            if (lm.image.lg && !Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["isHttp"])(lm.image.lg)) {
                lm.image.lg = `${this.directory}/${lm.slug}/${lm.image.lg}`;
            }
        }
        return lm;
    }
    resolve() {
        return this.contentService
            .getIndex('learning-materials')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response.sort((a, b) => a.order - b.order);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response.map((lm) => {
                lm.slug = Object(_shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["toSlug"])(lm.title);
                return this.updatePaths(lm);
            });
        }));
    }
}
LearningMaterialsResolverService.ɵfac = function LearningMaterialsResolverService_Factory(t) { return new (t || LearningMaterialsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"])); };
LearningMaterialsResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LearningMaterialsResolverService, factory: LearningMaterialsResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningMaterialsResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"] }]; }, null); })();


/***/ }),

/***/ "DqQm":
/*!****************************************************!*\
  !*** ./src/app/pages/hosting/hosting.component.ts ***!
  \****************************************************/
/*! exports provided: HostingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostingComponent", function() { return HostingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/drawer.animations */ "AY0P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _shared_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/carousel/carousel.component */ "4Isi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/directives/breakpoint.directive */ "EpdQ");
/* harmony import */ var _shared_components_learning_material_list_learning_material_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/learning-material-list/learning-material-list.component */ "VFaO");
/* harmony import */ var _shared_components_carousel_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/carousel/item.component */ "IV5s");
/* harmony import */ var _shared_components_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/tab-header/tab-header.component */ "9W5r");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.component */ "IMSB");
/* harmony import */ var _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.component */ "StKz");














function HostingComponent_sci_carousel_item_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.lg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r3.lg.split("/")[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
} }
function HostingComponent_sci_carousel_item_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.sm, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r3.sm.split("/")[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
} }
function HostingComponent_sci_carousel_item_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-carousel-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HostingComponent_sci_carousel_item_13_div_1_Template, 4, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HostingComponent_sci_carousel_item_13_div_2_Template, 4, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "desktop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "desktop-");
} }
function HostingComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "sci-tab-header", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeTabIndexChanged", function HostingComponent_div_19_Template_sci_tab_header_activeTabIndexChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.updateActivePageTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabs", ctx_r1.tabHeaders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.tabs[ctx_r1.activePageTab].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.tabs[ctx_r1.activePageTab].content);
} }
function HostingComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HostingComponent_div_20_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r13 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r14.updateActivePageTab(i_r13); return ctx_r14.showTab = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r12, " ");
} }
function HostingComponent_div_20_sci_drawer_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-drawer", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sci-drawer-header", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backClick", function HostingComponent_div_20_sci_drawer_2_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.showTab = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@drawerInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r11.tabHeaders[ctx_r11.activePageTab]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.tabs[ctx_r11.activePageTab].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r11.tabs[ctx_r11.activePageTab].content);
} }
function HostingComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HostingComponent_div_20_div_1_Template, 4, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HostingComponent_div_20_sci_drawer_2_Template, 8, 4, "sci-drawer", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.tabHeaders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showTab);
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
HostingComponent.ɵfac = function HostingComponent_Factory(t) { return new (t || HostingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
HostingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HostingComponent, selectors: [["sci-hosting"]], hostVars: 2, hostBindings: function HostingComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 26, vars: 8, consts: [[1, "header1"], [1, "highlight-content"], [1, "overview-container"], ["markdown", "", 3, "data"], [1, "spacer-24"], [1, "pdf-docs"], ["target", "_blank", "rel", "noopener noreferrer", 1, "master-booklet", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "install-guide", 3, "href"], [1, "carousel-container"], [1, "carousel"], ["class", "sci-carousel-item", 4, "ngFor", "ngForOf"], [1, "spacer-72"], [1, "divider"], [1, "spacer-48"], [1, "main-content"], [1, "col1"], ["class", "tabs", 4, "sciBreakpoint"], ["class", "mobile-tabs", 4, "sciBreakpoint"], [1, "bannerText"], ["header", "Learning Material that come with Exhibit.", 3, "items"], [1, "sci-carousel-item"], ["class", "carousel-item", 4, "sciBreakpoint"], [1, "carousel-item"], [1, "carousel-image", 3, "src", "alt"], [1, "carousel-image-title"], [1, "tabs"], [1, "tab-header", 3, "tabs", "activeTabIndexChanged"], [1, "tab-content"], ["alt", "", 3, "src"], ["markdown", "", 1, "col2", 3, "data"], [1, "mobile-tabs"], ["class", "mobile-button", 3, "click", 4, "ngFor", "ngForOf"], ["class", "sci-drawer", 4, "ngIf"], [1, "mobile-button", 3, "click"], [1, "mobile-icon"], [1, "sci-drawer"], ["drawer", "", 1, "drawer-container"], [3, "title", "backClick"], [1, "drawer-content"], [1, "row1"], [1, "row2"]], template: function HostingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hosting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Information Booklet (PDF)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Installation Guide (PDF)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "sci-carousel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HostingComponent_sci_carousel_item_13_Template, 3, 2, "sci-carousel-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HostingComponent_div_19_Template, 7, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HostingComponent_div_20_Template, 4, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "sci-learning-material-list", 19);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.overviewText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.masterBooklet, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.installGuide, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.carouselImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "mobile+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "mobile-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.bannerText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.learningMaterials);
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"], _shared_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_6__["BreakpointDirective"], _shared_components_learning_material_list_learning_material_list_component__WEBPACK_IMPORTED_MODULE_7__["LearningMaterialListComponent"], _shared_components_carousel_item_component__WEBPACK_IMPORTED_MODULE_8__["CarouselItemComponent"], _shared_components_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_9__["TabHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_11__["DrawerComponent"], _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_12__["DrawerHeaderComponent"]], styles: ["[_nghost-%COMP%]   .divider[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  border-bottom-color: #e0e0e0;\n  border-left-color: #e0e0e0;\n  border-right-color: #e0e0e0;\n  border-top: 0px solid #e0e0e0;\n  margin: 12px 0;\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    border: none;\n  }\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .overview-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  margin-right: 3rem;\n}\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .overview-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0rem;\n  }\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .overview-container[_ngcontent-%COMP%]   .pdf-docs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .overview-container[_ngcontent-%COMP%]   .pdf-docs[_ngcontent-%COMP%]   .install-guide[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 50%;\n  max-height: 28rem;\n}\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0rem;\n    margin-bottom: 1rem;\n  }\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .carousel-image[_ngcontent-%COMP%] {\n  height: 20rem;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .carousel-image-title[_ngcontent-%COMP%] {\n  padding: 1rem;\n  height: 3.75rem;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%] {\n  width: 50%;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: 3rem;\n  flex: 1;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.75rem;\n  font-size: 1rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%]   .mobile-button[_ngcontent-%COMP%]   .mobile-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  height: 1.5rem;\n  width: 1.5rem;\n  cursor: pointer;\n}\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .bannerText[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  color: #7997a3;\n  text-align: center;\n  background-color: #f9fcf5;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .drawer-container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .drawer-container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%]   .row1[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .drawer-container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%]   .row1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9ob3N0aW5nL2hvc3RpbmcuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9zY2ltYXBzL3NyYy9zdHlsaW5nL19zY3JlZW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNRTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBTEo7QUFPRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFMSjtBQU9JO0VBTEY7SUFNSSw4QkFBQTtJQUNBLFlBQUE7RUFKSjtBQUNGO0FBTUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFKTjtBQUtNO0VBTEY7SUFNSSxXQUFBO0lBQ0EsWUFBQTtFQUZOO0FBQ0Y7QUFJTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUZSO0FBSVE7RUFDRSxpQkFBQTtBQUZWO0FBT0k7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFMTjtBQU9NO0VBTkY7SUFPSSxXQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VBSk47QUFDRjtBQU1NO0VBQ0UsV0FBQTtBQUpSO0FBT1U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFMWjtBQU9ZO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBTGQ7QUFRWTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBTmQ7QUFjRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQVpKO0FDakRJO0VEMkRGO0lBSUksc0JBQUE7RUFWSjtBQUNGO0FBWUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBVk47QUMzREk7RURrRUE7SUFLSSxPQUFBO0VBUk47QUFDRjtBQVVRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBUlY7QUFTVTtFQUNFLFVBQUE7QUFQWjtBQVFZO0VBQ0UsZ0JBQUE7QUFOZDtBQVVVO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtBQVJaO0FBWU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFWUjtBQVdRO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFUVjtBQVVVO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFSWjtBQVdVO0VBZEY7SUFlSSxhQUFBO0VBUlY7QUFDRjtBQWNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBWko7QUFpQk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBZlI7QUFnQlE7RUFDRSxtQkFBQTtBQWRWO0FBZVU7RUFDRSxlQUFBO0FBYloiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3BhZ2VzL2hvc3RpbmcvaG9zdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkZXNrdG9wOiAxMjQ4cHg7XG4kdGFibGV0OiA5NjBweDtcbiRtb2JpbGU6IDY0MHB4O1xuQHVzZSAnc2NyZWVuJztcblxuOmhvc3Qge1xuICAuZGl2aWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZTBlMGUwO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZTBlMGUwO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2UwZTBlMDtcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgI2UwZTBlMDtcbiAgICBtYXJnaW46IDEycHggMDtcbiAgfVxuICAuaGlnaGxpZ2h0LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuXG4gICAgLm92ZXJ2aWV3LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwcmVtO1xuICAgICAgfVxuXG4gICAgICAucGRmLWRvY3Mge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgIC5pbnN0YWxsLWd1aWRlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJvdXNlbC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDI4cmVtO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMHJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cblxuICAgICAgLmNhcm91c2VsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLnNjaS1jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgLmNhcm91c2VsLWltYWdlIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMHJlbTtcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYXJvdXNlbC1pbWFnZS10aXRsZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICAgIGhlaWdodDogMy43NXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWFpbi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgQGluY2x1ZGUgc2NyZWVuLmJyZWFrcG9pbnQobW9iaWxlKSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5jb2wxIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAgIC50YWJzIHtcbiAgICAgICAgLnRhYi1jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIC5jb2wxIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbDIge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xuICAgICAgICAgICAgZmxleDogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm1vYmlsZS10YWJzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLm1vYmlsZS1idXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAubW9iaWxlLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJhbm5lclRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBjb2xvcjogIzc5OTdhMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmNmNTtcbiAgfVxuXG4gIC5zY2ktZHJhd2VyIHtcbiAgICAuZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgICAuZHJhd2VyLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLnJvdzEge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG59XG4iLCIkYnJlYWtwb2ludC1tb2JpbGU6IDc2OHB4O1xuJGJyZWFrcG9pbnQtdGFibGV0OiA5NjBweDtcblxuJC1icmVha3BvaW50LXF1ZXJpZXM6IChcbiAgbW9iaWxlOiBcIihtYXgtd2lkdGg6ICN7JGJyZWFrcG9pbnQtbW9iaWxlfSlcIixcbiAgdGFibGV0OlxuICAgIFwiKG1pbi13aWR0aDogI3skYnJlYWtwb2ludC1tb2JpbGUgKyAxcHh9KSBhbmQgKG1heC13aWR0aDogI3skYnJlYWtwb2ludC10YWJsZXR9KVwiLFxuICBkZXNrdG9wOiBcIihtaW4td2lkdGg6ICN7YnJlYWtwb2ludC10YWJsZXQgKyAxcHh9KVwiLFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHR5cGVzLi4uKSB7XG4gICRxdWVyaWVzOiAoKTtcbiAgQGVhY2ggJHR5cGUgaW4gJHR5cGVzIHtcbiAgICAkcXVlcnk6IG1hcC1nZXQoJC1icmVha3BvaW50LXF1ZXJpZXMsICR0eXBlKTtcbiAgICBAaWYgJHF1ZXJ5IHtcbiAgICAgICRxdWVyaWVzOiBhcHBlbmQoJHF1ZXJpZXMsICRxdWVyeSwgJHNlcGFyYXRvcjogY29tbWEpO1xuICAgIH1cbiAgfVxuXG4gIEBpZiBsZW5ndGgoJHF1ZXJpZXMpID4gMCB7XG4gICAgQG1lZGlhICN7JHF1ZXJpZXN9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HostingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-hosting',
                templateUrl: './hosting.component.html',
                styleUrls: ['./hosting.component.scss'],
                animations: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "LcF6":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/learning-material-list/learning-materials-list.module.ts ***!
  \********************************************************************************************/
/*! exports provided: LearningMaterialsListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningMaterialsListModule", function() { return LearningMaterialsListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _learning_material_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learning-material-list.component */ "VFaO");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "PCNd");
/* harmony import */ var _learning_material_item_learning_material_item_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../learning-material-item/learning-material-item.module */ "Y198");






class LearningMaterialsListModule {
}
LearningMaterialsListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LearningMaterialsListModule });
LearningMaterialsListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LearningMaterialsListModule_Factory(t) { return new (t || LearningMaterialsListModule)(); }, imports: [[_learning_material_item_learning_material_item_module__WEBPACK_IMPORTED_MODULE_4__["LearningMaterialItemModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LearningMaterialsListModule, { declarations: [_learning_material_list_component__WEBPACK_IMPORTED_MODULE_2__["LearningMaterialListComponent"]], imports: [_learning_material_item_learning_material_item_module__WEBPACK_IMPORTED_MODULE_4__["LearningMaterialItemModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_learning_material_list_component__WEBPACK_IMPORTED_MODULE_2__["LearningMaterialListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningMaterialsListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_learning_material_list_component__WEBPACK_IMPORTED_MODULE_2__["LearningMaterialListComponent"]],
                imports: [_learning_material_item_learning_material_item_module__WEBPACK_IMPORTED_MODULE_4__["LearningMaterialItemModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
                exports: [_learning_material_list_component__WEBPACK_IMPORTED_MODULE_2__["LearningMaterialListComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Oxd+":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/learning-material-item/learning-material-item.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LearningMaterialItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningMaterialItemComponent", function() { return LearningMaterialItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/drawer.animations */ "AY0P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/breakpoint.directive */ "EpdQ");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Meci");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");








function LearningMaterialItemComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LearningMaterialItemComponent_mat_card_0_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.gotoLearningMaterial(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-card-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.item.image.sm, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.item.image.sm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item == null ? null : ctx_r0.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.item.body.length > 80 ? ctx_r0.item.body.slice(0, 80) + "..." : ctx_r0.item.body);
} }
function LearningMaterialItemComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LearningMaterialItemComponent_mat_card_1_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.gotoLearningMaterial(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.item.image.sm, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.item == null ? null : ctx_r1.item.title);
} }
class LearningMaterialItemComponent {
    constructor(router) {
        this.router = router;
        this.item = {};
    }
    gotoLearningMaterial() {
        var _a;
        if ((_a = this.item) === null || _a === void 0 ? void 0 : _a.slug) {
            this.router.navigate(['/', 'learning-material', this.item.slug], { state: { direction: 'forward' } });
        }
    }
}
LearningMaterialItemComponent.ɵfac = function LearningMaterialItemComponent_Factory(t) { return new (t || LearningMaterialItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LearningMaterialItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LearningMaterialItemComponent, selectors: [["sci-learning-material-item"]], inputs: { item: "item" }, decls: 2, vars: 2, consts: [["class", "lm-item-desktop", 3, "click", 4, "sciBreakpoint"], ["class", "lm-item-mobile", 3, "click", 4, "sciBreakpoint"], [1, "lm-item-desktop", 3, "click"], [1, "row1"], ["mat-card-image", "", 3, "src", "alt"], [1, "row2"], [1, "header4"], [1, "content"], ["markdown", "", 3, "data"], [1, "lm-item-mobile", 3, "click"], [1, "col1"], ["mat-card-img", "", "alt", "", 3, "src"], [1, "col2"], [1, "col3"], [1, "mobile-icon"]], template: function LearningMaterialItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LearningMaterialItemComponent_mat_card_0_Template, 9, 4, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LearningMaterialItemComponent_mat_card_1_Template, 10, 2, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "mobile+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "mobile-");
    } }, directives: [_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_3__["BreakpointDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["@media screen and (min-width: 1248px) {\n  [_nghost-%COMP%] {\n    width: 25%;\n  }\n}\n@media screen and (min-width: 960px) {\n  [_nghost-%COMP%] {\n    width: 30%;\n  }\n}\n@media screen and (min-width: 640px) and (max-width: 960px) {\n  [_nghost-%COMP%] {\n    width: 50%;\n  }\n}\n@media screen and (max-width: 640px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .lm-item-desktop[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0;\n  overflow: hidden;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n  height: 18rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .lm-item-desktop[_ngcontent-%COMP%]:hover {\n  box-shadow: 1px 0px 5px 0px;\n}\n[_nghost-%COMP%]   .lm-item-desktop[_ngcontent-%COMP%]   .row1[_ngcontent-%COMP%] {\n  height: 60%;\n}\n[_nghost-%COMP%]   .lm-item-desktop[_ngcontent-%COMP%]   .row1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n}\n[_nghost-%COMP%]   .lm-item-desktop[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n  height: 40%;\n  padding: 1rem;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .lm-item-desktop[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-bottom: 0;\n  font-size: 20px;\n}\n[_nghost-%COMP%]   .lm-item-desktop[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n[_nghost-%COMP%]   .lm-item-mobile[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 1rem;\n  padding: 0;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .lm-item-mobile[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%] {\n  height: 100%;\n  justify-content: center;\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   .lm-item-mobile[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 66px;\n}\n[_nghost-%COMP%]   .lm-item-mobile[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .lm-item-mobile[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  overflow: inherit;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .lm-item-mobile[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  text-overflow: ellipsis;\n  overflow: inherit;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .lm-item-mobile[_ngcontent-%COMP%]   .col3[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: 1rem;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 1248px;\n  margin: auto;\n}\n[_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: #7996a3;\n}\n[_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-icon[_ngcontent-%COMP%] {\n  margin-left: -0.5rem;\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 1248px) {\n  [_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n}\n[_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%]   .row1[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 2rem;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%]   .row1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n[_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (min-width: 1248px) {\n  [_nghost-%COMP%]   .drawer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n    margin-right: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sZWFybmluZy1tYXRlcmlhbC1pdGVtL2xlYXJuaW5nLW1hdGVyaWFsLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUU7RUFGRjtJQUdJLFVBQUE7RUFKRjtBQUNGO0FBS0U7RUFMRjtJQU1JLFVBQUE7RUFGRjtBQUNGO0FBR0U7RUFSRjtJQVNJLFVBQUE7RUFBRjtBQUNGO0FBQ0U7RUFYRjtJQVlJLFdBQUE7RUFFRjtBQUNGO0FBREU7RUFDRSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBR0o7QUFESTtFQUNFLDJCQUFBO0FBR047QUFESTtFQUNFLFdBQUE7QUFHTjtBQUZNO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUFJUjtBQURJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUdOO0FBRk07RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFJUjtBQURRO0VBQ0UsZUFBQTtBQUdWO0FBR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQURKO0FBRUk7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUFOO0FBQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNSO0FBR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUROO0FBRU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFDUTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ1Y7QUFJSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFGTjtBQU9JO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUxOO0FBTU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBSlI7QUFLUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSFY7QUFLVTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFIWjtBQVFNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQU5SO0FBT1E7RUFKRjtJQUtJLDJCQUFBO0VBSlI7QUFDRjtBQUtRO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFIVjtBQUlVO0VBQ0UsZUFBQTtBQUZaO0FBTVE7RUFDRSxPQUFBO0FBSlY7QUFLVTtFQUZGO0lBR0ksa0JBQUE7RUFGVjtBQUNGIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sZWFybmluZy1tYXRlcmlhbC1pdGVtL2xlYXJuaW5nLW1hdGVyaWFsLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbW9iaWxlOiA2NDBweDtcbiR0YWJsZXQ6IDk2MHB4O1xuJGRlc2t0b3A6IDEyNDhweDtcblxuOmhvc3Qge1xuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGRlc2t0b3ApIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kICAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbW9iaWxlKSBhbmQgKG1heC13aWR0aDogJHRhYmxldCkge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5sbS1pdGVtLWRlc2t0b3Age1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDE4cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogMXB4IDBweCA1cHggMHB4O1xuICAgIH1cbiAgICAucm93MSB7XG4gICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cbiAgICAucm93MiB7XG4gICAgICBoZWlnaHQ6IDQwJTtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgaDQge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubG0taXRlbS1tb2JpbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5jb2wxIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDcycHg7XG4gICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29sMiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXQtY2FyZC10aXRsZSB7XG4gICAgICAgIG92ZXJmbG93OiBpbmhlcml0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBoNCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbDMge1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuZHJhd2VyIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXgtd2lkdGg6IDEyNDhweDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIC5kcmF3ZXItaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAuYmFjay1idXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgY29sb3I6ICM3OTk2YTM7XG5cbiAgICAgICAgICAuYmFjay1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZHJhd2VyLWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRkZXNrdG9wKSB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICB9XG4gICAgICAgIC5yb3cxIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAvLyBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucm93MiB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJGRlc2t0b3ApIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningMaterialItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-learning-material-item',
                templateUrl: './learning-material-item.component.html',
                styleUrls: ['./learning-material-item.component.scss'],
                animations: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "QjjN":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/card-link/card-link.component.ts ***!
  \********************************************************************/
/*! exports provided: CardLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardLinkComponent", function() { return CardLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");



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
CardLinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardLinkComponent, selectors: [["sci-card-link"]], hostVars: 2, hostBindings: function CardLinkComponent_HostBindings(rf, ctx) { if (rf & 2) {
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
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: ["[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  max-width: 100%;\n  display: flex;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  height: 4.2rem;\n  width: 4rem;\n  background-size: cover;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-size: 1rem;\n  padding: 0.75rem;\n  align-self: center;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jYXJkLWxpbmsvY2FyZC1saW5rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUFSO0FBRVE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQVo7QUFHUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURaO0FBSVE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBRloiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhcmQtbGluay9jYXJkLWxpbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmNhcmQge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIC50aHVtYm5haWwge1xuICAgICAgICAgICAgaGVpZ2h0OiA0LjJyZW07XG4gICAgICAgICAgICB3aWR0aDogNHJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgcGFkZGluZzogLjc1cmVtO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardLinkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-card-link',
                templateUrl: './card-link.component.html',
                styleUrls: ['./card-link.component.scss']
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], cardData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "VFaO":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/learning-material-list/learning-material-list.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LearningMaterialListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningMaterialListComponent", function() { return LearningMaterialListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/breakpoint.directive */ "EpdQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _learning_material_item_learning_material_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../learning-material-item/learning-material-item.component */ "Oxd+");





function LearningMaterialListComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "sci-learning-material-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r3.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r3);
} }
function LearningMaterialListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LearningMaterialListComponent_div_4_ng_container_1_Template, 2, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
function LearningMaterialListComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "sci-learning-material-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r5.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r5);
} }
function LearningMaterialListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LearningMaterialListComponent_div_5_ng_container_1_Template, 2, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
} }
class LearningMaterialListComponent {
    constructor() {
        this.classname = 'sci-learning-material-list';
        this.items = [];
        this.header = '';
    }
}
LearningMaterialListComponent.ɵfac = function LearningMaterialListComponent_Factory(t) { return new (t || LearningMaterialListComponent)(); };
LearningMaterialListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LearningMaterialListComponent, selectors: [["sci-learning-material-list"]], hostVars: 2, hostBindings: function LearningMaterialListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classname);
    } }, inputs: { items: "items", header: "header" }, decls: 6, vars: 3, consts: [[1, "header1"], [1, "spacer-48"], [1, "learning-material-container"], ["class", "lm-list-desktop", 4, "sciBreakpoint"], ["class", "lm-list-mobile", 4, "sciBreakpoint"], [1, "lm-list-desktop"], [4, "ngFor", "ngForOf"], [3, "id", "item"], [1, "lm-list-mobile"]], template: function LearningMaterialListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LearningMaterialListComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LearningMaterialListComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "mobile+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "mobile-");
    } }, directives: [_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_1__["BreakpointDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _learning_material_item_learning_material_item_component__WEBPACK_IMPORTED_MODULE_3__["LearningMaterialItemComponent"]], styles: ["[_nghost-%COMP%]   .learning-material-container[_ngcontent-%COMP%]   .lm-list-desktop[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .learning-material-container[_ngcontent-%COMP%]   .lm-list-mobile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sZWFybmluZy1tYXRlcmlhbC1saXN0L2xlYXJuaW5nLW1hdGVyaWFsLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRE47QUFHSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUROIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sZWFybmluZy1tYXRlcmlhbC1saXN0L2xlYXJuaW5nLW1hdGVyaWFsLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5sZWFybmluZy1tYXRlcmlhbC1jb250YWluZXIge1xuICAgIC5sbS1saXN0LWRlc2t0b3Age1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIC5sbS1saXN0LW1vYmlsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningMaterialListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-learning-material-list',
                templateUrl: './learning-material-list.component.html',
                styleUrls: ['./learning-material-list.component.scss'],
            }]
    }], null, { classname: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Y198":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/learning-material-item/learning-material-item.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: LearningMaterialItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningMaterialItemModule", function() { return LearningMaterialItemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _learning_material_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learning-material-item.component */ "Oxd+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Meci");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.module */ "PCNd");
/* harmony import */ var _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../drawer/drawer.module */ "t1/B");









class LearningMaterialItemModule {
}
LearningMaterialItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LearningMaterialItemModule });
LearningMaterialItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LearningMaterialItemModule_Factory(t) { return new (t || LearningMaterialItemModule)(); }, imports: [[
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__["DrawerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LearningMaterialItemModule, { declarations: [_learning_material_item_component__WEBPACK_IMPORTED_MODULE_2__["LearningMaterialItemComponent"]], imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"],
        _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__["DrawerModule"]], exports: [_learning_material_item_component__WEBPACK_IMPORTED_MODULE_2__["LearningMaterialItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningMaterialItemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_learning_material_item_component__WEBPACK_IMPORTED_MODULE_2__["LearningMaterialItemComponent"]],
                imports: [
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"],
                    _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__["DrawerModule"]
                ],
                exports: [_learning_material_item_component__WEBPACK_IMPORTED_MODULE_2__["LearningMaterialItemComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fxZB":
/*!*********************************************************!*\
  !*** ./src/app/pages/hosting/hosting-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HostingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostingRoutingModule", function() { return HostingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _hosting_body_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hosting-body-resolver.service */ "g2tg");
/* harmony import */ var _hosting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hosting.component */ "DqQm");
/* harmony import */ var _learning_materials_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./learning-materials-resolver.service */ "4hhT");







const routes = [
    {
        path: '',
        component: _hosting_component__WEBPACK_IMPORTED_MODULE_3__["HostingComponent"],
        resolve: {
            body: _hosting_body_resolver_service__WEBPACK_IMPORTED_MODULE_2__["HostingBodyResolverService"],
            learningMaterials: _learning_materials_resolver_service__WEBPACK_IMPORTED_MODULE_4__["LearningMaterialsResolverService"],
        },
    },
];
class HostingRoutingModule {
}
HostingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HostingRoutingModule });
HostingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HostingRoutingModule_Factory(t) { return new (t || HostingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HostingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HostingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "g2tg":
/*!****************************************************************!*\
  !*** ./src/app/pages/hosting/hosting-body-resolver.service.ts ***!
  \****************************************************************/
/*! exports provided: HostingBodyResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostingBodyResolverService", function() { return HostingBodyResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/utils */ "fNWo");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");





class HostingBodyResolverService {
    constructor(content) {
        this.content = content;
        this.mdPath = 'site/hosting/hosting.md';
        this.directory = 'assets/content/site/hosting';
    }
    resolve() {
        return this.content.getContent(this.mdPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((body) => {
            return this.updatePaths(body);
        }));
    }
    // converts paths to absolute paths.
    updatePaths(body) {
        if (body.install_guide && !Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["isHttp"])(body.install_guide)) {
            body.install_guide = `${this.directory}/${body.install_guide}`;
        }
        if (body.master_booklet && !Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["isHttp"])(body.master_booklet)) {
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
                if (image.lg && !Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["isHttp"])(image.lg)) {
                    image.lg = `${this.directory}/${image.lg}`;
                }
                if (image.sm && !Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["isHttp"])(image.sm)) {
                    image.sm = `${this.directory}/${image.sm}`;
                }
            });
            body.carousel = carousel;
        }
    }
    updateTabsPaths(body) {
        const { tabs } = body;
        tabs.forEach((tab) => {
            if (tab.image && !Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["isHttp"])(tab.image)) {
                tab.image = `${this.directory}/${tab.image}`;
            }
        });
    }
}
HostingBodyResolverService.ɵfac = function HostingBodyResolverService_Factory(t) { return new (t || HostingBodyResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"])); };
HostingBodyResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HostingBodyResolverService, factory: HostingBodyResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HostingBodyResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-hosting-hosting-module.js.map