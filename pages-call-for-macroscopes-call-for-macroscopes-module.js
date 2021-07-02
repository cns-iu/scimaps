(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-call-for-macroscopes-call-for-macroscopes-module"],{

/***/ "//UK":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/call-out/call-out.component.ts ***!
  \******************************************************************/
/*! exports provided: CallOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallOutComponent", function() { return CallOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");



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
CallOutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CallOutComponent, selectors: [["sci-call-out"]], hostVars: 2, hostBindings: function CallOutComponent_HostBindings(rf, ctx) { if (rf & 2) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  align-items: center;\n  text-align: center;\n  padding: 1rem;\n}\n[_nghost-%COMP%]   .body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  font-size: 1.125rem;\n}\n[_nghost-%COMP%]   .body[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .body[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n}\n[_nghost-%COMP%]   .body[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-date[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jYWxsLW91dC9jYWxsLW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFBSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNFLHFCQUFBO0FBQU47QUFFTTtFQUNFLG1CQUFBO0FBQVI7QUFHTTtFQUNFLGlCQUFBO0FBRFIiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhbGwtb3V0L2NhbGwtb3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIC5ib2R5IHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcblxuICAgIC5pdGVtIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcblxuICAgICAgLml0ZW0tbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICAgICAgfVxuXG4gICAgICAuaXRlbS1kYXRlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallOutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-call-out',
                templateUrl: './call-out.component.html',
                styleUrls: ['./call-out.component.scss']
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "26Dg":
/*!******************************************************************************!*\
  !*** ./src/app/pages/call-for-macroscopes/call-for-macroscopes.component.ts ***!
  \******************************************************************************/
/*! exports provided: CallForMacroscopesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallForMacroscopesComponent", function() { return CallForMacroscopesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/drawer.animations */ "AY0P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/directives/breakpoint.directive */ "EpdQ");
/* harmony import */ var _shared_components_call_out_call_out_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/call-out/call-out.component */ "//UK");
/* harmony import */ var _shared_components_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/tab-header/tab-header.component */ "9W5r");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.component */ "IMSB");











function CallForMacroscopesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thumbnail_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", thumbnail_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", thumbnail_r5.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thumbnail_r5.title);
} }
function CallForMacroscopesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thumbnail_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", thumbnail_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", thumbnail_r6.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thumbnail_r6.title);
} }
function CallForMacroscopesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Download Details PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.pdfLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CallForMacroscopesComponent_div_14_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 28);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r7.tabContents[0]);
} }
function CallForMacroscopesComponent_div_14_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 28);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r8.tabContents[1]);
} }
function CallForMacroscopesComponent_div_14_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 28);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r9.tabContents[2]);
} }
function CallForMacroscopesComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "sci-tab-header", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeTabIndexChanged", function CallForMacroscopesComponent_div_14_Template_sci_tab_header_activeTabIndexChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.updateActivePageTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CallForMacroscopesComponent_div_14_ng_template_4_Template, 1, 1, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CallForMacroscopesComponent_div_14_ng_template_5_Template, 1, 1, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CallForMacroscopesComponent_div_14_ng_template_6_Template, 1, 1, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabs", ctx_r3.tabHeaders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.activePageTab == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.activePageTab == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.activePageTab == 2);
} }
function CallForMacroscopesComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CallForMacroscopesComponent_div_15_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const i_r15 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r16.updateActivePageTab(i_r15); return ctx_r16.showDrawer = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r14, " ");
} }
function CallForMacroscopesComponent_div_15_sci_drawer_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-drawer", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CallForMacroscopesComponent_div_15_sci_drawer_2_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.showDrawer = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@drawerInOut", ctx_r13.showDrawer ? "show" : "hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r13.tabHeaders[ctx_r13.activePageTab], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r13.tabContents[ctx_r13.activePageTab]);
} }
function CallForMacroscopesComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CallForMacroscopesComponent_div_15_div_1_Template, 4, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CallForMacroscopesComponent_div_15_sci_drawer_2_Template, 11, 3, "sci-drawer", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.tabHeaders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showDrawer);
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
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            const { body } = data;
            // Body
            if (body) {
                const { importantDates, pdfLink, lastIteration, submitURL, tabs } = body;
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
                this.importantDates = importantDates.map(((item) => {
                    return [item.label, this.datePipe.transform(item.date, 'MMM dd, yyyy')];
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
CallForMacroscopesComponent.ɵfac = function CallForMacroscopesComponent_Factory(t) { return new (t || CallForMacroscopesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"])); };
CallForMacroscopesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CallForMacroscopesComponent, selectors: [["sci-call-for-macroscopes"]], hostVars: 2, hostBindings: function CallForMacroscopesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 22, vars: 7, consts: [[1, "header1"], [1, "image-content"], ["class", "thumbnail desktop", 4, "ngFor", "ngForOf"], ["class", "thumbnail mobile", 4, "ngFor", "ngForOf"], [1, "spacer-48"], [1, "row"], [1, "due"], ["class", "download", 4, "ngIf"], [1, "spacer-24"], [1, "main-content"], [1, "col1"], ["class", "tabs", 4, "sciBreakpoint"], ["class", "mobile-tabs", 4, "sciBreakpoint"], [1, "col2"], ["type", "button", 1, "submit", 3, "click"], [1, "spacer-16"], [1, "call-out"], [3, "title", "items"], [1, "thumbnail", "desktop"], [1, "thumbnail-image", 3, "src", "alt"], [1, "thumbnail-title"], [1, "thumbnail", "mobile"], [1, "download"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "tabs"], [1, "tab-header", 3, "tabs", "activeTabIndexChanged"], [1, "tab-content"], [3, "ngIf"], ["markdown", "", 3, "data"], [1, "mobile-tabs"], ["class", "mobile-button", 3, "click", 4, "ngFor", "ngForOf"], ["class", "tab-drawer", 4, "ngIf"], [1, "mobile-button", 3, "click"], [1, "mobile-icon"], [1, "tab-drawer"], ["drawer", ""], [1, "drawer-header"], [1, "mobile-icon", 3, "click"], [1, "mobile-title"]], template: function CallForMacroscopesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Call for Macroscopes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CallForMacroscopesComponent_div_3_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CallForMacroscopesComponent_div_4_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Submissions due: March 15, 2021 / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CallForMacroscopesComponent_div_10_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CallForMacroscopesComponent_div_14_Template, 7, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CallForMacroscopesComponent_div_15_Template, 4, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CallForMacroscopesComponent_Template_button_click_17_listener() { return ctx.submitMacroscope(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " SUBMIT MACROSCOPE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "sci-call-out", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lastIterationThumbnails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lastIterationThumbnails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pdfLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "mobile+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "mobile-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Important Dates")("items", ctx.importantDates);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_4__["BreakpointDirective"], _shared_components_call_out_call_out_component__WEBPACK_IMPORTED_MODULE_5__["CallOutComponent"], _shared_components_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_6__["TabHeaderComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_9__["DrawerComponent"]], styles: ["[_nghost-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%] {\n  flex: 3;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.75rem;\n  font-size: 1rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%]   .mobile-button[_ngcontent-%COMP%]   .mobile-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  height: 1.5rem;\n  width: 1.5rem;\n  cursor: pointer;\n}\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-left: 2rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]   button.submit[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2rem;\n  background-color: white;\n  color: #7996a3;\n  border: 2px solid #7996a3;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]   .call-out[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]   .call-out[_ngcontent-%COMP%] {\n    flex: 1;\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .tab-drawer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  z-index: 10;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .mobile-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .mobile-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .mobile-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 0rem;\n    padding-right: 0rem;\n  }\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem;\n}\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-right: 1rem;\n  cursor: pointer;\n  margin-bottom: 1rem;\n  width: 22%;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    position: relative;\n    width: calc(50% - 1rem);\n  }\n}\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .thumbnail-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80%;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .thumbnail-title[_ngcontent-%COMP%] {\n  height: 20%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .thumbnail-title[_ngcontent-%COMP%] {\n    margin-top: 0rem;\n    bottom: 0.45rem;\n    z-index: 10;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail.desktop[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail.desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail.mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9jYWxsLWZvci1tYWNyb3Njb3Blcy9jYWxsLWZvci1tYWNyb3Njb3Blcy5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3NjaW1hcHMvc3JjL3N0eWxpbmcvX3NjcmVlbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBTko7QUNpQkk7RURiRjtJQUlJLHNCQUFBO0VBSko7QUFDRjtBQU1JO0VBQ0UsbUJBQUE7QUFKTjtBQ1NJO0VETkE7SUFHSSxjQUFBO0VBRk47QUFDRjtBQU1FO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0FBTEo7QUNBSTtFREVGO0lBS0ksc0JBQUE7RUFISjtBQUNGO0FBS0k7RUFDRSxPQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FBSk47QUNWSTtFRFVBO0lBT0ksT0FBQTtFQUhOO0FBQ0Y7QUFVTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVJSO0FBU1E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVBWO0FBUVU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQU5aO0FBU1U7RUFkRjtJQWVJLGFBQUE7RUFOVjtBQUNGO0FBVUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQVJOO0FDM0NJO0VEZ0RBO0lBS0ksY0FBQTtFQU5OO0FBQ0Y7QUFPTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFMUjtBQU9NO0VBQ0UsT0FBQTtBQUxSO0FDMURJO0VEOERFO0lBR0ksT0FBQTtJQUNBLFdBQUE7RUFIUjtBQUNGO0FBU0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVBKO0FBVUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBUko7QUFTSTtFQUNFLGVBQUE7QUFQTjtBQVNJO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBUE47QUFRTTtFQUNFLDJCQUFBO0FBTlI7QUFhRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQVhKO0FBYUk7RUFORjtJQU9JLFdBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBVko7QUFDRjtBQVlJO0VBWkY7SUFhSSxlQUFBO0VBVEo7QUFDRjtBQVdJO0VBQ0Usa0JBQUE7QUFUTjtBQVlJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBVk47QUFZTTtFQVJGO0lBU0ksa0JBQUE7SUFDQSx1QkFBQTtFQVROO0FBQ0Y7QUFXTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFUUjtBQVlNO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBVlI7QUFZUTtFQVBGO0lBUUksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxvQ0FBQTtJQUNBLFdBQUE7RUFUUjtBQUNGO0FBYUk7RUFDRSxrQkFBQTtBQVhOO0FBWU07RUFGRjtJQUdJLGFBQUE7RUFUTjtBQUNGO0FBYU07RUFERjtJQUVJLGFBQUE7RUFWTjtBQUNGIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9jYWxsLWZvci1tYWNyb3Njb3Blcy9jYWxsLWZvci1tYWNyb3Njb3Blcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3NjcmVlbic7XG5cbiRtb2JpbGU6IDY0MHB4O1xuJHRhYmxldDogOTYwcHg7XG4kZGVza3RvcDogMTI0OHB4O1xuXG46aG9zdCB7XG4gIC5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmRvd25sb2FkIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1haW4tY29udGVudCB7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICAgLy8gY29tbWVudFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmNvbDEge1xuICAgICAgZmxleDogMzsgLy8gNzUlIC0gMjUlXG4gICAgICAvLyB0YWIgYW5kIHRhYiBoZWFkZXJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLy8gb24gbW9iaWxlIDEwMCVcbiAgICAgIEBpbmNsdWRlIHNjcmVlbi5icmVha3BvaW50KG1vYmlsZSkge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgICAgLnRhYnMge1xuICAgICAgICAudGFiLWNvbnRlbnQge1xuICAgICAgICAgIC8vIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5tb2JpbGUtdGFicyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5tb2JpbGUtYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgLm1vYmlsZS1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuY29sMiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgICAgQGluY2x1ZGUgc2NyZWVuLmJyZWFrcG9pbnQobW9iaWxlKSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgfVxuICAgICAgYnV0dG9uLnN1Ym1pdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzc5OTZhMztcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzc5OTZhMztcbiAgICAgIH1cbiAgICAgIC5jYWxsLW91dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIEBpbmNsdWRlIHNjcmVlbi5icmVha3BvaW50KG1vYmlsZSkge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQb3NpdGlvbiBkcmF3ZXJzIGZyb20gUGFyZW50LlxuICAudGFiLWRyYXdlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuZHJhd2VyLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIC5tb2JpbGUtaWNvbiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5tb2JpbGUtdGl0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgaDMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAvLyBGb3IgYmFubmVyc1xuICAuaW1hZ2UtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDByZW07XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtO1xuICAgIH1cblxuICAgIC50aHVtYm5haWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgd2lkdGg6IDIyJTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxcmVtKTtcbiAgICAgIH1cblxuICAgICAgLnRodW1ibmFpbC1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG5cbiAgICAgIC50aHVtYm5haWwtdGl0bGUge1xuICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDByZW07XG4gICAgICAgICAgYm90dG9tOiAuNDVyZW07XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRodW1ibmFpbC5kZXNrdG9wIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRodW1ibmFpbC5tb2JpbGUge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRicmVha3BvaW50LW1vYmlsZTogNzY4cHg7XG4kYnJlYWtwb2ludC10YWJsZXQ6IDk2MHB4O1xuXG4kLWJyZWFrcG9pbnQtcXVlcmllczogKFxuICBtb2JpbGU6IFwiKG1heC13aWR0aDogI3skYnJlYWtwb2ludC1tb2JpbGV9KVwiLFxuICB0YWJsZXQ6XG4gICAgXCIobWluLXdpZHRoOiAjeyRicmVha3BvaW50LW1vYmlsZSArIDFweH0pIGFuZCAobWF4LXdpZHRoOiAjeyRicmVha3BvaW50LXRhYmxldH0pXCIsXG4gIGRlc2t0b3A6IFwiKG1pbi13aWR0aDogI3ticmVha3BvaW50LXRhYmxldCArIDFweH0pXCIsXG4pO1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkdHlwZXMuLi4pIHtcbiAgJHF1ZXJpZXM6ICgpO1xuICBAZWFjaCAkdHlwZSBpbiAkdHlwZXMge1xuICAgICRxdWVyeTogbWFwLWdldCgkLWJyZWFrcG9pbnQtcXVlcmllcywgJHR5cGUpO1xuICAgIEBpZiAkcXVlcnkge1xuICAgICAgJHF1ZXJpZXM6IGFwcGVuZCgkcXVlcmllcywgJHF1ZXJ5LCAkc2VwYXJhdG9yOiBjb21tYSk7XG4gICAgfVxuICB9XG5cbiAgQGlmIGxlbmd0aCgkcXVlcmllcykgPiAwIHtcbiAgICBAbWVkaWEgI3skcXVlcmllc30ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"], data: { animation: [
            _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallForMacroscopesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-call-for-macroscopes',
                templateUrl: './call-for-macroscopes.component.html',
                styleUrls: ['./call-for-macroscopes.component.scss'],
                animations: [
                    _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }]; }, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "8HAi":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/call-for-macroscopes/call-for-macroscopes-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CallForMacroscopesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallForMacroscopesRoutingModule", function() { return CallForMacroscopesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _macroscopes_macroscopes_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../macroscopes/macroscopes-resolver.service */ "n4Jh");
/* harmony import */ var _call_for_macroscopes_body_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./call-for-macroscopes-body-resolver.service */ "Yq6v");
/* harmony import */ var _call_for_macroscopes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./call-for-macroscopes.component */ "26Dg");







const routes = [
    { path: '',
        component: _call_for_macroscopes_component__WEBPACK_IMPORTED_MODULE_4__["CallForMacroscopesComponent"],
        resolve: {
            body: _call_for_macroscopes_body_resolver_service__WEBPACK_IMPORTED_MODULE_3__["CallForMacroscopesBodyResolver"],
            macroscopes: _macroscopes_macroscopes_resolver_service__WEBPACK_IMPORTED_MODULE_2__["MacroscopesResolverService"]
        }
    }
];
class CallForMacroscopesRoutingModule {
}
CallForMacroscopesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CallForMacroscopesRoutingModule });
CallForMacroscopesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CallForMacroscopesRoutingModule_Factory(t) { return new (t || CallForMacroscopesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CallForMacroscopesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallForMacroscopesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "AY0P":
/*!************************************************!*\
  !*** ./src/app/constants/drawer.animations.ts ***!
  \************************************************/
/*! exports provided: drawerInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerInOut", function() { return drawerInOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "f7+R");

const drawerInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('drawerInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        left: 0,
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        left: '120%',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hide => show', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show => hide', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            left: '120%'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            left: 0
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            left: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            left: '120%'
        }))
    ]),
]);


/***/ }),

/***/ "GhwO":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/call-out/call-out.module.ts ***!
  \***************************************************************/
/*! exports provided: CallOutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallOutModule", function() { return CallOutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _call_out_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call-out.component */ "//UK");




class CallOutModule {
}
CallOutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CallOutModule });
CallOutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CallOutModule_Factory(t) { return new (t || CallOutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CallOutModule, { declarations: [_call_out_component__WEBPACK_IMPORTED_MODULE_2__["CallOutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_call_out_component__WEBPACK_IMPORTED_MODULE_2__["CallOutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallOutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_call_out_component__WEBPACK_IMPORTED_MODULE_2__["CallOutComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_call_out_component__WEBPACK_IMPORTED_MODULE_2__["CallOutComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "IMSB":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/drawer/drawer.component.ts ***!
  \**************************************************************/
/*! exports provided: DrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function() { return DrawerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


const _c0 = [[["", "drawer", ""]]];
const _c1 = ["[drawer]"];
class DrawerComponent {
}
DrawerComponent.ɵfac = function DrawerComponent_Factory(t) { return new (t || DrawerComponent)(); };
DrawerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawerComponent, selectors: [["sci-drawer"]], ngContentSelectors: _c1, decls: 2, vars: 0, template: function DrawerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  padding: 1rem;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUFESiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJhd2VyL2RyYXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRicmVha3BvaW50OiA3NjhweDtcblxuOmhvc3Qge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgei1pbmRleDogMjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-drawer',
                templateUrl: './drawer.component.html',
                styleUrls: ['./drawer.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "Yq6v":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/call-for-macroscopes/call-for-macroscopes-body-resolver.service.ts ***!
  \******************************************************************************************/
/*! exports provided: CallForMacroscopesBodyResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallForMacroscopesBodyResolver", function() { return CallForMacroscopesBodyResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");




class CallForMacroscopesBodyResolver {
    constructor(content) {
        this.content = content;
        this.directory = 'assets/content/site';
    }
    resolve() {
        return this.content.getContent('site/callForMacroscopes.md').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            if (response.pdfLink) {
                if (!response.pdfLink.startsWith('http://') || !response.pdfLink.startsWith('//https://')) {
                    response.pdfLink = `${this.directory}/${response.pdfLink}`;
                }
            }
            return response;
        }));
    }
}
CallForMacroscopesBodyResolver.ɵfac = function CallForMacroscopesBodyResolver_Factory(t) { return new (t || CallForMacroscopesBodyResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"])); };
CallForMacroscopesBodyResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CallForMacroscopesBodyResolver, factory: CallForMacroscopesBodyResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallForMacroscopesBodyResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"] }]; }, null); })();


/***/ }),

/***/ "t1/B":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/drawer/drawer.module.ts ***!
  \***********************************************************/
/*! exports provided: DrawerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerModule", function() { return DrawerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _drawer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawer.component */ "IMSB");




class DrawerModule {
}
DrawerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DrawerModule });
DrawerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DrawerModule_Factory(t) { return new (t || DrawerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DrawerModule, { declarations: [_drawer_component__WEBPACK_IMPORTED_MODULE_2__["DrawerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_drawer_component__WEBPACK_IMPORTED_MODULE_2__["DrawerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_drawer_component__WEBPACK_IMPORTED_MODULE_2__["DrawerComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_drawer_component__WEBPACK_IMPORTED_MODULE_2__["DrawerComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "uXZP":
/*!***************************************************************************!*\
  !*** ./src/app/pages/call-for-macroscopes/call-for-macroscopes.module.ts ***!
  \***************************************************************************/
/*! exports provided: CallForMacroscopesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallForMacroscopesModule", function() { return CallForMacroscopesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _call_for_macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call-for-macroscopes-routing.module */ "8HAi");
/* harmony import */ var _call_for_macroscopes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./call-for-macroscopes.component */ "26Dg");
/* harmony import */ var _shared_components_call_out_call_out_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/call-out/call-out.module */ "GhwO");
/* harmony import */ var _shared_components_tab_header_tab_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/tab-header/tab-header.module */ "IbK4");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.module */ "t1/B");











class CallForMacroscopesModule {
}
CallForMacroscopesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CallForMacroscopesModule });
CallForMacroscopesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CallForMacroscopesModule_Factory(t) { return new (t || CallForMacroscopesModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _call_for_macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_2__["CallForMacroscopesRoutingModule"],
            _shared_components_call_out_call_out_module__WEBPACK_IMPORTED_MODULE_4__["CallOutModule"],
            _shared_components_tab_header_tab_header_module__WEBPACK_IMPORTED_MODULE_5__["TabHeaderModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_9__["DrawerModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CallForMacroscopesModule, { declarations: [_call_for_macroscopes_component__WEBPACK_IMPORTED_MODULE_3__["CallForMacroscopesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _call_for_macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_2__["CallForMacroscopesRoutingModule"],
        _shared_components_call_out_call_out_module__WEBPACK_IMPORTED_MODULE_4__["CallOutModule"],
        _shared_components_tab_header_tab_header_module__WEBPACK_IMPORTED_MODULE_5__["TabHeaderModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_9__["DrawerModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallForMacroscopesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_call_for_macroscopes_component__WEBPACK_IMPORTED_MODULE_3__["CallForMacroscopesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _call_for_macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_2__["CallForMacroscopesRoutingModule"],
                    _shared_components_call_out_call_out_module__WEBPACK_IMPORTED_MODULE_4__["CallOutModule"],
                    _shared_components_tab_header_tab_header_module__WEBPACK_IMPORTED_MODULE_5__["TabHeaderModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_9__["DrawerModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-call-for-macroscopes-call-for-macroscopes-module.js.map