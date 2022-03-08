(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~macroscope-macroscope-module~pages-maps-maps-module~submission-submission-module"],{

/***/ "iZg1":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/item-drawer/item-drawer.component.ts ***!
  \************************************************************************/
/*! exports provided: ItemDrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDrawerComponent", function() { return ItemDrawerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/drawer.animations */ "AY0P");
/* harmony import */ var _purchase_modal_purchase_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../purchase-modal/purchase-modal.component */ "Fh0M");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../drawer/drawer.component */ "IMSB");
/* harmony import */ var _drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../drawer-header/drawer-header.component */ "StKz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _makers_subdrawer_makers_subdrawer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../makers-subdrawer/makers-subdrawer.component */ "yRFm");












function ItemDrawerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDrawerComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.openPurchase(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PURCHASE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemDrawerComponent_div_19_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0|\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemDrawerComponent_div_19_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemDrawerComponent_div_19_div_3_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDrawerComponent_div_19_div_3_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const language_r9 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.languageSelect(language_r9.abbr_short); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r10 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r8.selectedLanguage === language_r9.abbr_short);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](language_r9.native);
} }
function ItemDrawerComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Languages:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ItemDrawerComponent_div_19_div_3_Template, 4, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.item.translations);
} }
function ItemDrawerComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reference_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", reference_r14);
} }
function ItemDrawerComponent_div_28_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "zoom_in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemDrawerComponent_div_28_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemDrawerComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemDrawerComponent_div_28_mat_icon_1_Template, 2, 0, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItemDrawerComponent_div_28_mat_icon_2_Template, 2, 0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.type === "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.type === "macroscope");
} }
function ItemDrawerComponent_div_29_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "smart_display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemDrawerComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemDrawerComponent_div_29_mat_icon_1_Template, 2, 0, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.type === "macroscope");
} }
function ItemDrawerComponent_sci_drawer_32_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-drawer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sci-makers-subdrawer", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function ItemDrawerComponent_sci_drawer_32_Template_sci_makers_subdrawer_closed_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.makersDrawer = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@drawerInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("makers", ctx_r5.item.makers)("title", ctx_r5.item.title);
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
        this.languageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        this.dialog.open(_purchase_modal_purchase_modal_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseModalComponent"], {
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
ItemDrawerComponent.ɵfac = function ItemDrawerComponent_Factory(t) { return new (t || ItemDrawerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ItemDrawerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemDrawerComponent, selectors: [["sci-item-drawer"]], hostVars: 2, hostBindings: function ItemDrawerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { type: "type", item: "item" }, outputs: { languageChange: "languageChange" }, ngContentSelectors: _c1, decls: 34, vars: 17, consts: [["drawer", "", 1, "details-container"], [1, "header"], [3, "backText", "backClick"], ["class", "purchase-button", 3, "click", 4, "ngIf"], [1, "body"], [1, "details-content"], [1, "details-title"], [1, "details-makers", 3, "click"], [1, "makers-text"], [1, "makers-label"], [1, "right"], [1, "details-credit"], ["class", "language-selection", 4, "ngIf"], ["markdown", "", 1, "details-description", 3, "data"], [1, "details-references"], ["class", "reference", 4, "ngFor", "ngForOf"], [1, "details-image"], [1, "container", 3, "ngClass", "click"], ["alt", "item image", 1, "thumbnail", 3, "src"], ["class", "icon", 4, "ngIf"], [1, "details-title", "mobile"], [4, "ngIf"], [1, "purchase-button", 3, "click"], [1, "language-selection"], ["class", "language-container", 4, "ngFor", "ngForOf"], [1, "language-container"], [1, "language", "option", 3, "click"], [1, "reference"], ["markdown", "", 3, "data"], [1, "icon"], ["class", "zoom", 4, "ngIf"], ["class", "launch", 4, "ngIf"], [1, "zoom"], [1, "launch"], ["class", "video", 4, "ngIf"], [1, "video"], ["drawer", ""], [3, "makers", "title", "closed"]], template: function ItemDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "sci-drawer-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backClick", function ItemDrawerComponent_Template_sci_drawer_header_backClick_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ItemDrawerComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDrawerComponent_Template_div_click_9_listener() { return ctx.makersDrawer = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Makers:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ItemDrawerComponent_div_19_Template, 4, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "References");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ItemDrawerComponent_div_24_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDrawerComponent_Template_div_click_26_listener() { return ctx.redirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ItemDrawerComponent_div_28_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ItemDrawerComponent_div_29_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ItemDrawerComponent_sci_drawer_32_Template, 3, 3, "sci-drawer", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](33, 0, ["[select]", "detail"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@drawerInOut", ctx.showDrawer ? "show" : "hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backText", "Iteration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.makers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.credit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.item.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.item.references);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.item.externalLink || ctx.item.videoLink ? true : false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.item.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.externalLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.videoLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.makersDrawer);
    } }, directives: [_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_5__["DrawerComponent"], _drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_6__["DrawerHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], ngx_markdown__WEBPACK_IMPORTED_MODULE_9__["MarkdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _makers_subdrawer_makers_subdrawer_component__WEBPACK_IMPORTED_MODULE_10__["MakersSubdrawerComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    padding: 1rem;\n  }\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .sci-drawer-header[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .purchase-button[_ngcontent-%COMP%] {\n  height: 2.25rem;\n  padding: 0 1rem;\n  border-width: 0.125rem;\n  border-style: solid;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  padding-right: 3rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0;\n  }\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-makers[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  align-items: center;\n  cursor: pointer;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-makers[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #7996a3;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-makers[_ngcontent-%COMP%]   .makers-text[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 1rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-makers[_ngcontent-%COMP%]   .makers-text[_ngcontent-%COMP%]   .makers-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-right: 0.5rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-credit[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .language-selection[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 1rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .language-selection[_ngcontent-%COMP%]   .language-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .language-selection[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-references[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 16px;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-references[_ngcontent-%COMP%]   .reference[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%]   .container.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%]   .container.clickable[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]:hover {\n  opacity: 70%;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  object-fit: contain;\n  width: 100%;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 0;\n  height: 3rem;\n  width: 3rem;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-title.mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pdGVtLWRyYXdlci9pdGVtLWRyYXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBVEY7QUFXRTtFQUxGO0lBTUksYUFBQTtFQVJGO0FBQ0Y7QUFZSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBVk47QUFZTTtFQUNFLGdCQUFBO0FBVlI7QUFhSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFYTjtBQWNJO0VBQ0UsYUFBQTtBQVpOO0FBY007RUFIRjtJQUlJLDhCQUFBO0VBWE47QUFDRjtBQWFNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBWFI7QUFhUTtFQU5GO0lBT0ksV0FBQTtJQUNBLFVBQUE7RUFWUjtBQUNGO0FBYVU7RUFERjtJQUVJLGFBQUE7RUFWVjtBQUNGO0FBYVE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBWFY7QUFhVTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQVhaO0FBY1U7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQVpaO0FBY1k7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBWmQ7QUFpQlE7RUFDRSxpQkFBQTtBQWZWO0FBa0JRO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFoQlY7QUFpQlU7RUFDRSxhQUFBO0FBZlo7QUFrQlU7RUFDRSxlQUFBO0FBaEJaO0FBb0JRO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQWxCVjtBQXFCUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQW5CVjtBQW9CVTtFQUNFLG1CQUFBO0FBbEJaO0FBdUJNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQXJCUjtBQXNCUTtFQUpGO0lBS0ksV0FBQTtFQW5CUjtBQUNGO0FBb0JRO0VBQ0Usa0JBQUE7QUFsQlY7QUFtQlU7RUFDRSxlQUFBO0FBakJaO0FBbUJjO0VBQ0UsWUFBQTtBQWpCaEI7QUFxQlU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFuQlo7QUFxQlU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQW5CWjtBQTBCVTtFQURGO0lBRUksYUFBQTtFQXZCVjtBQUNGIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pdGVtLWRyYXdlci9pdGVtLWRyYXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRicmVha3BvaW50OiA3NjhweDtcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxpbmcvYnJlYWtwb2ludHMnO1xuXG4vLyA6aG9zdCgubWFwcykge1xuLy8gfVxuXG4vLyA6aG9zdCgubWFjcnNjb3Blcykge1xuLy8gfVxuXG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludCkge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAuZGV0YWlscy1jb250YWluZXIge1xuXG4gICAgLmhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcblxuICAgICAgLnNjaS1kcmF3ZXItaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnB1cmNoYXNlLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDIuMjVyZW07XG4gICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICBib3JkZXItd2lkdGg6IDAuMTI1cmVtO1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgXG4gICAgLmJvZHkge1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50KSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgIH1cbiAgXG4gICAgICAuZGV0YWlscy1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbHMtdGl0bGUge1xuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludCkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGV0YWlscy1tYWtlcnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5NmEzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tYWtlcnMtdGV4dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLm1ha2Vycy1sYWJlbCB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbHMtY3JlZGl0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYW5ndWFnZS1zZWxlY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIC5sYW5ndWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub3B0aW9uIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbHMtcmVmZXJlbmNlcyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgIC5yZWZlcmVuY2Uge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIC5kZXRhaWxzLWltYWdlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50KSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICYuY2xpY2thYmxlIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIC50aHVtYm5haWwge1xuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiA3MCU7XG4gICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aHVtYm5haWwge1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGV0YWlscy10aXRsZSB7XG4gICAgICAgICYubW9iaWxlIHtcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemDrawerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-item-drawer',
                templateUrl: './item-drawer.component.html',
                styleUrls: ['./item-drawer.component.scss'],
                animations: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]]
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], languageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ml3Y":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/item-drawer/item-drawer.module.ts ***!
  \*********************************************************************/
/*! exports provided: ItemDrawerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDrawerModule", function() { return ItemDrawerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "PCNd");
/* harmony import */ var _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../drawer-header/drawer-header.module */ "4FRl");
/* harmony import */ var _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../drawer/drawer.module */ "t1/B");
/* harmony import */ var _makers_subdrawer_makers_subdrawer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../makers-subdrawer/makers-subdrawer.module */ "WTaD");
/* harmony import */ var _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../purchase-modal/purchase-modal.module */ "tVZI");
/* harmony import */ var _item_drawer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./item-drawer.component */ "iZg1");












class ItemDrawerModule {
}
ItemDrawerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ItemDrawerModule });
ItemDrawerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ItemDrawerModule_Factory(t) { return new (t || ItemDrawerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_9__["PurchaseModalModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__["DrawerModule"],
            _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_6__["DrawerHeaderModule"],
            _makers_subdrawer_makers_subdrawer_module__WEBPACK_IMPORTED_MODULE_8__["MakersSubdrawerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ItemDrawerModule, { declarations: [_item_drawer_component__WEBPACK_IMPORTED_MODULE_10__["ItemDrawerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_9__["PurchaseModalModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
        _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__["DrawerModule"],
        _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_6__["DrawerHeaderModule"],
        _makers_subdrawer_makers_subdrawer_module__WEBPACK_IMPORTED_MODULE_8__["MakersSubdrawerModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_item_drawer_component__WEBPACK_IMPORTED_MODULE_10__["ItemDrawerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ItemDrawerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_9__["PurchaseModalModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
                    _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__["DrawerModule"],
                    _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_6__["DrawerHeaderModule"],
                    _makers_subdrawer_makers_subdrawer_module__WEBPACK_IMPORTED_MODULE_8__["MakersSubdrawerModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                declarations: [_item_drawer_component__WEBPACK_IMPORTED_MODULE_10__["ItemDrawerComponent"]],
                exports: [_item_drawer_component__WEBPACK_IMPORTED_MODULE_10__["ItemDrawerComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~macroscope-macroscope-module~pages-maps-maps-module~submission-submission-module.js.map