"use strict";
(self["webpackChunkscimaps"] = self["webpackChunkscimaps"] || []).push([["default-projects_scimaps_src_app_shared_components_item-drawer_item-drawer_module_ts"],{

/***/ 3760:
/*!*****************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/item-drawer/item-drawer.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDrawerComponent": () => (/* binding */ ItemDrawerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/drawer.animations */ 6665);
/* harmony import */ var _purchase_modal_purchase_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../purchase-modal/purchase-modal.component */ 3699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drawer/drawer.component */ 950);
/* harmony import */ var _drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../drawer-header/drawer-header.component */ 6814);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _makers_subdrawer_makers_subdrawer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../makers-subdrawer/makers-subdrawer.component */ 6949);












function ItemDrawerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemDrawerComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.openPurchase(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "PURCHASE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ItemDrawerComponent_div_19_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0\u00A0|\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ItemDrawerComponent_div_19_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ItemDrawerComponent_div_19_div_3_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemDrawerComponent_div_19_div_3_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const language_r9 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r12.languageSelect(language_r9.abbr_short); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r10 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r8.selectedLanguage === language_r9.abbr_short);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](language_r9.native);
} }
function ItemDrawerComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Languages:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ItemDrawerComponent_div_19_div_3_Template, 4, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.item.translations);
} }
function ItemDrawerComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reference_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", reference_r14);
} }
function ItemDrawerComponent_div_28_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "zoom_in");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ItemDrawerComponent_div_28_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ItemDrawerComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ItemDrawerComponent_div_28_mat_icon_1_Template, 2, 0, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ItemDrawerComponent_div_28_mat_icon_2_Template, 2, 0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.type === "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.type === "macroscope");
} }
function ItemDrawerComponent_div_29_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "smart_display");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ItemDrawerComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ItemDrawerComponent_div_29_mat_icon_1_Template, 2, 0, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.type === "macroscope");
} }
function ItemDrawerComponent_sci_drawer_32_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "sci-drawer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "sci-makers-subdrawer", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("closed", function ItemDrawerComponent_sci_drawer_32_Template_sci_makers_subdrawer_closed_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.makersDrawer = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@drawerInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("makers", ctx_r5.item.makers)("title", ctx_r5.item.title);
} }
const _c0 = function (a0) { return { "clickable": a0 }; };
const _c1 = ["*"];
/**
 * Drawer that opens when a map or macroscope item is selected
 */
class ItemDrawerComponent {
    constructor(dialog, router, route) {
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        /** HTML class name */
        this.clsName = 'sci-item-drawer';
        /**
         * Emits the selected language when the language changes
         */
        this.languageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        /**
         * Currently selected language
         */
        this.selectedLanguage = 'en';
        this.showDrawer = false;
        this.makersDrawer = false;
    }
    ngOnInit() {
        this.showDrawer = true;
    }
    /**
     * Combines the maker names
     */
    get makers() {
        return this.item.makers.map(maker => maker.name).join(', ');
    }
    /**
     * Closes item drawer component and returns to the maps or macroscopes page
     */
    close() {
        this.showDrawer = false;
        setTimeout(() => {
            this.router.navigate(['/', this.type + 's']);
        }, 500);
    }
    /**
     * Sets selectedLanguage to selected language and emits the new language
     * @param language The language selected
     */
    languageSelect(language) {
        this.selectedLanguage = language;
        this.languageChange.emit(language);
    }
    /**
     * Opens purchase modal
     */
    openPurchase() {
        this.dialog.open(_purchase_modal_purchase_modal_component__WEBPACK_IMPORTED_MODULE_1__.PurchaseModalComponent, {
            width: window.innerWidth <= 768 ? '100%' : '738px'
        });
    }
    redirect() {
        if (this.type === 'map') {
            this.router.navigate(['detail'], { relativeTo: this.route });
        }
        else if (this.type === 'macroscope') {
            const { videoLink, externalLink } = this.item;
            if (videoLink) {
                this.router.navigate(['detail'], { relativeTo: this.route });
                return;
            }
            if (externalLink) {
                window.open(externalLink, '_blank');
            }
        }
    }
}
ItemDrawerComponent.ɵfac = function ItemDrawerComponent_Factory(t) { return new (t || ItemDrawerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
ItemDrawerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ItemDrawerComponent, selectors: [["sci-item-drawer"]], hostVars: 2, hostBindings: function ItemDrawerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { type: "type", item: "item" }, outputs: { languageChange: "languageChange" }, ngContentSelectors: _c1, decls: 34, vars: 17, consts: [["drawer", "", 1, "details-container"], [1, "header"], [3, "backText", "backClick"], ["class", "purchase-button", 3, "click", 4, "ngIf"], [1, "body"], [1, "details-content"], [1, "details-title"], [1, "details-makers", 3, "click"], [1, "makers-text"], [1, "makers-label"], [1, "right"], [1, "details-credit"], ["class", "language-selection", 4, "ngIf"], ["markdown", "", 1, "details-description", 3, "data"], [1, "details-references"], ["class", "reference", 4, "ngFor", "ngForOf"], [1, "details-image"], [1, "container", 3, "ngClass", "click"], ["alt", "item image", 1, "thumbnail", 3, "src"], ["class", "icon", 4, "ngIf"], [1, "details-title", "mobile"], [4, "ngIf"], [1, "purchase-button", 3, "click"], [1, "language-selection"], ["class", "language-container", 4, "ngFor", "ngForOf"], [1, "language-container"], [1, "language", "option", 3, "click"], [1, "reference"], ["markdown", "", 3, "data"], [1, "icon"], ["class", "zoom", 4, "ngIf"], ["class", "launch", 4, "ngIf"], [1, "zoom"], [1, "launch"], ["class", "video", 4, "ngIf"], [1, "video"], ["drawer", ""], [3, "makers", "title", "closed"]], template: function ItemDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "sci-drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "sci-drawer-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("backClick", function ItemDrawerComponent_Template_sci_drawer_header_backClick_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ItemDrawerComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemDrawerComponent_Template_div_click_9_listener() { return ctx.makersDrawer = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Makers:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ItemDrawerComponent_div_19_Template, 4, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "References");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ItemDrawerComponent_div_24_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemDrawerComponent_Template_div_click_26_listener() { return ctx.redirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ItemDrawerComponent_div_28_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, ItemDrawerComponent_div_29_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, ItemDrawerComponent_sci_drawer_32_Template, 3, 3, "sci-drawer", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](33, 0, ["[select]", "detail"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@drawerInOut", ctx.showDrawer ? "show" : "hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("backText", "Iteration");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.type === "map");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.item.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.makers);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.item.credit);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.type === "map");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.item.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.item.references);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c0, ctx.item.externalLink || ctx.item.videoLink ? true : false));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.item.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.item.externalLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.item.videoLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.item.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.makersDrawer);
    } }, directives: [_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_2__.DrawerComponent, _drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_3__.DrawerHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, ngx_markdown__WEBPACK_IMPORTED_MODULE_10__.MarkdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _makers_subdrawer_makers_subdrawer_component__WEBPACK_IMPORTED_MODULE_4__.MakersSubdrawerComponent], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    padding: 1rem;\n  }\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .sci-drawer-header[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .purchase-button[_ngcontent-%COMP%] {\n  height: 2.25rem;\n  padding: 0 1rem;\n  border-width: 0.125rem;\n  border-style: solid;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  padding-right: 3rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0;\n  }\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-makers[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  align-items: center;\n  cursor: pointer;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-makers[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #7996a3;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-makers[_ngcontent-%COMP%]   .makers-text[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 1rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-makers[_ngcontent-%COMP%]   .makers-text[_ngcontent-%COMP%]   .makers-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-right: 0.5rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-credit[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .language-selection[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 1rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .language-selection[_ngcontent-%COMP%]   .language-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .language-selection[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-references[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 16px;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-references[_ngcontent-%COMP%]   .reference[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%]   .container.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%]   .container.clickable[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]:hover {\n  opacity: 70%;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  object-fit: contain;\n  width: 100%;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 0;\n  height: 3rem;\n  width: 3rem;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-title.mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tZHJhd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFURjtBQVdFO0VBTEY7SUFNSSxhQUFBO0VBUkY7QUFDRjtBQVlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFWTjtBQVlNO0VBQ0UsZ0JBQUE7QUFWUjtBQWFJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVhOO0FBY0k7RUFDRSxhQUFBO0FBWk47QUFjTTtFQUhGO0lBSUksOEJBQUE7RUFYTjtBQUNGO0FBYU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFYUjtBQWFRO0VBTkY7SUFPSSxXQUFBO0lBQ0EsVUFBQTtFQVZSO0FBQ0Y7QUFhVTtFQURGO0lBRUksYUFBQTtFQVZWO0FBQ0Y7QUFhUTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFYVjtBQWFVO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FBWFo7QUFjVTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBWlo7QUFjWTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFaZDtBQWlCUTtFQUNFLGlCQUFBO0FBZlY7QUFrQlE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWhCVjtBQWlCVTtFQUNFLGFBQUE7QUFmWjtBQWtCVTtFQUNFLGVBQUE7QUFoQlo7QUFvQlE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBbEJWO0FBcUJRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBbkJWO0FBb0JVO0VBQ0UsbUJBQUE7QUFsQlo7QUF1Qk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBckJSO0FBc0JRO0VBSkY7SUFLSSxXQUFBO0VBbkJSO0FBQ0Y7QUFvQlE7RUFDRSxrQkFBQTtBQWxCVjtBQW1CVTtFQUNFLGVBQUE7QUFqQlo7QUFtQmM7RUFDRSxZQUFBO0FBakJoQjtBQXFCVTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQW5CWjtBQXFCVTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBbkJaO0FBMEJVO0VBREY7SUFFSSxhQUFBO0VBdkJWO0FBQ0YiLCJmaWxlIjoiaXRlbS1kcmF3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnJlYWtwb2ludDogNzY4cHg7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsaW5nL2JyZWFrcG9pbnRzJztcblxuLy8gOmhvc3QoLm1hcHMpIHtcbi8vIH1cblxuLy8gOmhvc3QoLm1hY3JzY29wZXMpIHtcbi8vIH1cblxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgLmRldGFpbHMtY29udGFpbmVyIHtcblxuICAgIC5oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5cbiAgICAgIC5zY2ktZHJhd2VyLWhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICAgIC5wdXJjaGFzZS1idXR0b24ge1xuICAgICAgaGVpZ2h0OiAyLjI1cmVtO1xuICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgYm9yZGVyLXdpZHRoOiAwLjEyNXJlbTtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIFxuICAgIC5ib2R5IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICB9XG4gIFxuICAgICAgLmRldGFpbHMtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50KSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWxzLXRpdGxlIHtcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbHMtbWFrZXJzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTZhMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWFrZXJzLXRleHQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5tYWtlcnMtbGFiZWwge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWxzLWNyZWRpdCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAubGFuZ3VhZ2Utc2VsZWN0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAubGFuZ3VhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm9wdGlvbiB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWxzLXJlZmVyZW5jZXMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAucmVmZXJlbmNlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXG4gICAgICAuZGV0YWlscy1pbWFnZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludCkge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAmLmNsaWNrYWJsZSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAudGh1bWJuYWlsIHtcbiAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogNzAlO1xuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAudGh1bWJuYWlsIHtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRldGFpbHMtdGl0bGUge1xuICAgICAgICAmLm1vYmlsZSB7XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50KSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__.drawerInOut] } });


/***/ }),

/***/ 2524:
/*!**************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/item-drawer/item-drawer.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDrawerModule": () => (/* binding */ ItemDrawerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared.module */ 3687);
/* harmony import */ var _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drawer-header/drawer-header.module */ 9789);
/* harmony import */ var _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drawer/drawer.module */ 626);
/* harmony import */ var _makers_subdrawer_makers_subdrawer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../makers-subdrawer/makers-subdrawer.module */ 643);
/* harmony import */ var _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../purchase-modal/purchase-modal.module */ 651);
/* harmony import */ var _item_drawer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-drawer.component */ 3760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);











class ItemDrawerModule {
}
ItemDrawerModule.ɵfac = function ItemDrawerModule_Factory(t) { return new (t || ItemDrawerModule)(); };
ItemDrawerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ItemDrawerModule });
ItemDrawerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_4__.PurchaseModalModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownModule,
            _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_2__.DrawerModule,
            _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_1__.DrawerHeaderModule,
            _makers_subdrawer_makers_subdrawer_module__WEBPACK_IMPORTED_MODULE_3__.MakersSubdrawerModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ItemDrawerModule, { declarations: [_item_drawer_component__WEBPACK_IMPORTED_MODULE_5__.ItemDrawerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_4__.PurchaseModalModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownModule,
        _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_2__.DrawerModule,
        _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_1__.DrawerHeaderModule,
        _makers_subdrawer_makers_subdrawer_module__WEBPACK_IMPORTED_MODULE_3__.MakersSubdrawerModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_item_drawer_component__WEBPACK_IMPORTED_MODULE_5__.ItemDrawerComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-projects_scimaps_src_app_shared_components_item-drawer_item-drawer_module_ts.js.map