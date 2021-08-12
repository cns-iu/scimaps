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
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "KZIX");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.component */ "IMSB");
/* harmony import */ var _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.component */ "StKz");












function CallForMacroscopesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thumbnail_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", thumbnail_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", thumbnail_r5.image);
} }
function CallForMacroscopesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thumbnail_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", thumbnail_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", thumbnail_r6.image);
} }
function CallForMacroscopesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Download Details PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.pdfLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CallForMacroscopesComponent_div_14_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tab_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", tab_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r7.tabContents[i_r9]);
} }
function CallForMacroscopesComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CallForMacroscopesComponent_div_14_ng_container_2_Template, 4, 2, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.tabHeaders);
} }
function CallForMacroscopesComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CallForMacroscopesComponent_div_15_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r13 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r14.updateActivePageTab(i_r13); return ctx_r14.showDrawer = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r12, " ");
} }
function CallForMacroscopesComponent_div_15_sci_drawer_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-drawer", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sci-drawer-header", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backClick", function CallForMacroscopesComponent_div_15_sci_drawer_2_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.showDrawer = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@drawerInOut", ctx_r11.showDrawer ? "show" : "hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r11.tabHeaders[ctx_r11.activePageTab]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r11.tabContents[ctx_r11.activePageTab]);
} }
function CallForMacroscopesComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CallForMacroscopesComponent_div_15_div_1_Template, 4, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CallForMacroscopesComponent_div_15_sci_drawer_2_Template, 5, 3, "sci-drawer", 30);
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
    } }, decls: 22, vars: 7, consts: [[1, "header1"], [1, "image-content"], ["class", "thumbnail desktop", 4, "ngFor", "ngForOf"], ["class", "thumbnail mobile", 4, "ngFor", "ngForOf"], [1, "spacer-48"], [1, "row"], [1, "due"], ["class", "download", 4, "ngIf"], [1, "spacer-24"], [1, "main-content"], [1, "col1"], ["class", "tabs", 4, "sciBreakpoint"], ["class", "mobile-tabs", 4, "sciBreakpoint"], [1, "col2"], ["type", "button", 1, "submit", 3, "click"], [1, "spacer-16"], [1, "call-out"], [3, "title", "items"], [1, "thumbnail", "desktop"], [1, "thumbnail-image", 3, "src", "alt"], [1, "thumbnail", "mobile"], [1, "download"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "tabs"], [4, "ngFor", "ngForOf"], [3, "label"], [1, "tab-content"], ["markdown", "", 3, "data"], [1, "mobile-tabs"], ["class", "mobile-button", 3, "click", 4, "ngFor", "ngForOf"], ["class", "sci-drawer", 4, "ngIf"], [1, "mobile-button", 3, "click"], [1, "mobile-icon"], [1, "sci-drawer"], ["drawer", "", 1, "drawer-container"], [3, "title", "backClick"], [1, "drawer-content"]], template: function CallForMacroscopesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Call for Macroscopes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CallForMacroscopesComponent_div_3_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CallForMacroscopesComponent_div_4_Template, 2, 2, "div", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CallForMacroscopesComponent_div_14_Template, 3, 1, "div", 11);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_4__["BreakpointDirective"], _shared_components_call_out_call_out_component__WEBPACK_IMPORTED_MODULE_5__["CallOutComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_9__["DrawerComponent"], _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_10__["DrawerHeaderComponent"]], styles: ["[_nghost-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%] {\n  flex: 3;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.75rem;\n  font-size: 1rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%]   .mobile-button[_ngcontent-%COMP%]   .mobile-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  height: 1.5rem;\n  width: 1.5rem;\n  cursor: pointer;\n}\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]   .mobile-tabs[_ngcontent-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-left: 2rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]   button.submit[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2rem;\n  background-color: white;\n  color: #7996a3;\n  border: 2px solid #7996a3;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]   button.submit[_ngcontent-%COMP%]:hover {\n  background-color: #7996a3;\n  color: white;\n}\n[_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]   .call-out[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]   .call-out[_ngcontent-%COMP%] {\n    flex: 1;\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 0rem;\n    padding-right: 0rem;\n  }\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem;\n}\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    position: relative;\n    width: 50%;\n  }\n}\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .thumbnail-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .thumbnail-title[_ngcontent-%COMP%] {\n  height: 20%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .thumbnail-title[_ngcontent-%COMP%] {\n    margin-top: 0rem;\n    bottom: 0.45rem;\n    z-index: 10;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);\n    width: 100%;\n  }\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail.desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail.mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9jYWxsLWZvci1tYWNyb3Njb3Blcy9jYWxsLWZvci1tYWNyb3Njb3Blcy5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3NjaW1hcHMvc3JjL3N0eWxpbmcvX3NjcmVlbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBTko7QUNpQkk7RURiRjtJQUlJLHNCQUFBO0VBSko7QUFDRjtBQU1JO0VBQ0UsbUJBQUE7QUFKTjtBQ1NJO0VETkE7SUFHSSxjQUFBO0VBRk47QUFDRjtBQU1FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBSko7QUNBSTtFREVGO0lBSUksc0JBQUE7RUFGSjtBQUNGO0FBSUk7RUFDRSxPQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FBSE47QUNWSTtFRFNBO0lBT0ksT0FBQTtFQUZOO0FBQ0Y7QUFHTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQURSO0FBRVE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUFWO0FBQ1U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNaO0FBRVU7RUFkRjtJQWVJLGFBQUE7RUFDVjtBQUNGO0FBR0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUROO0FDM0NJO0VEeUNBO0lBS0ksY0FBQTtFQUNOO0FBQ0Y7QUFBTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBRVI7QUFEUTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUdWO0FBQ007RUFDRSxPQUFBO0FBQ1I7QUMvREk7RUQ2REU7SUFHSSxPQUFBO0lBQ0EsV0FBQTtFQUdSO0FBQ0Y7QUFLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUhKO0FBS0k7RUFORjtJQU9JLFdBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBRko7QUFDRjtBQUlJO0VBWkY7SUFhSSxlQUFBO0VBREo7QUFDRjtBQUdJO0VBQ0Usa0JBQUE7QUFETjtBQUlJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBR0EsVUFBQTtBQUpOO0FBTU07RUFQRjtJQVFJLGtCQUFBO0lBQ0EsVUFBQTtFQUhOO0FBQ0Y7QUFLTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFIUjtBQU1NO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSlI7QUFNUTtFQVBGO0lBUUksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxvQ0FBQTtJQUNBLFdBQUE7RUFIUjtBQUNGO0FBUU07RUFERjtJQUVJLGFBQUE7RUFMTjtBQUNGO0FBU007RUFERjtJQUVJLGFBQUE7RUFOTjtBQUNGIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9jYWxsLWZvci1tYWNyb3Njb3Blcy9jYWxsLWZvci1tYWNyb3Njb3Blcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3NjcmVlbic7XG5cbiRtb2JpbGU6IDY0MHB4O1xuJHRhYmxldDogOTYwcHg7XG4kZGVza3RvcDogMTI0OHB4O1xuXG46aG9zdCB7XG4gIC5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmRvd25sb2FkIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1haW4tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIEBpbmNsdWRlIHNjcmVlbi5icmVha3BvaW50KG1vYmlsZSkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuY29sMSB7XG4gICAgICBmbGV4OiAzOyAvLyA3NSUgLSAyNSVcbiAgICAgIC8vIHRhYiBhbmQgdGFiIGhlYWRlclxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAvLyBvbiBtb2JpbGUgMTAwJVxuICAgICAgQGluY2x1ZGUgc2NyZWVuLmJyZWFrcG9pbnQobW9iaWxlKSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgICAubW9iaWxlLXRhYnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAubW9iaWxlLWJ1dHRvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIC5tb2JpbGUtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1vYmlsZSkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmNvbDIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgIEBpbmNsdWRlIHNjcmVlbi5icmVha3BvaW50KG1vYmlsZSkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbi5zdWJtaXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICM3OTk2YTM7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM3OTk2YTM7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTZhMztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgLmNhbGwtb3V0IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgQGluY2x1ZGUgc2NyZWVuLmJyZWFrcG9pbnQobW9iaWxlKSB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcblxuXG4gIC8vIEZvciBiYW5uZXJzXG4gIC5pbWFnZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDByZW07XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtO1xuICAgIH1cblxuICAgIC50aHVtYm5haWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAvLyBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAvLyBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgd2lkdGg6IDI1JTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuXG4gICAgICAudGh1bWJuYWlsLWltYWdlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG5cbiAgICAgIC50aHVtYm5haWwtdGl0bGUge1xuICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDByZW07XG4gICAgICAgICAgYm90dG9tOiAuNDVyZW07XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRodW1ibmFpbC5kZXNrdG9wIHtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRodW1ibmFpbC5tb2JpbGUge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRicmVha3BvaW50LW1vYmlsZTogNzY4cHg7XG4kYnJlYWtwb2ludC10YWJsZXQ6IDk2MHB4O1xuXG4kLWJyZWFrcG9pbnQtcXVlcmllczogKFxuICBtb2JpbGU6IFwiKG1heC13aWR0aDogI3skYnJlYWtwb2ludC1tb2JpbGV9KVwiLFxuICB0YWJsZXQ6XG4gICAgXCIobWluLXdpZHRoOiAjeyRicmVha3BvaW50LW1vYmlsZSArIDFweH0pIGFuZCAobWF4LXdpZHRoOiAjeyRicmVha3BvaW50LXRhYmxldH0pXCIsXG4gIGRlc2t0b3A6IFwiKG1pbi13aWR0aDogI3ticmVha3BvaW50LXRhYmxldCArIDFweH0pXCIsXG4pO1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkdHlwZXMuLi4pIHtcbiAgJHF1ZXJpZXM6ICgpO1xuICBAZWFjaCAkdHlwZSBpbiAkdHlwZXMge1xuICAgICRxdWVyeTogbWFwLWdldCgkLWJyZWFrcG9pbnQtcXVlcmllcywgJHR5cGUpO1xuICAgIEBpZiAkcXVlcnkge1xuICAgICAgJHF1ZXJpZXM6IGFwcGVuZCgkcXVlcmllcywgJHF1ZXJ5LCAkc2VwYXJhdG9yOiBjb21tYSk7XG4gICAgfVxuICB9XG5cbiAgQGlmIGxlbmd0aCgkcXVlcmllcykgPiAwIHtcbiAgICBAbWVkaWEgI3skcXVlcmllc30ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"], data: { animation: [
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

/***/ "9W5r":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/tab-header/tab-header.component.ts ***!
  \**********************************************************************/
/*! exports provided: TabHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeaderComponent", function() { return TabHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");



function TabHeaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabHeaderComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.setActiveTabIndex(i_r2); });
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
        this.activeTabIndexChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
TabHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabHeaderComponent, selectors: [["sci-tab-header"]], hostVars: 2, hostBindings: function TabHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { tabs: "tabs", activeTabIndex: "activeTabIndex" }, outputs: { activeTabIndexChanged: "activeTabIndexChanged" }, decls: 1, vars: 1, consts: [["class", "tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "tab", 3, "click"]], template: function TabHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabHeaderComponent_div_0_Template, 2, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid #e0e0e0;\n}\n[_nghost-%COMP%]   .tab[_ngcontent-%COMP%] {\n  border-bottom: 2px solid transparent;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  cursor: pointer;\n  height: 3rem;\n  font-size: 1rem;\n  text-align: center;\n  line-height: 3rem;\n}\n[_nghost-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #8dc63f;\n  background-color: #f5f5f5;\n}\n[_nghost-%COMP%]   .tab[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid #8dc63f;\n  background-color: #f5f5f5;\n}\n[_nghost-%COMP%]   .tab[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWItaGVhZGVyL3RhYi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUNGO0FBQ0U7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDSTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7QUFDTjtBQUNJO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtBQUNOO0FBRUk7RUFDRSxpQkFBQTtBQUFOIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWItaGVhZGVyL3RhYi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuXG4gIC50YWIge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgICM4ZGM2M2Y7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgIzhkYzYzZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgfVxuXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-tab-header',
                templateUrl: './tab-header.component.html',
                styleUrls: ['./tab-header.component.scss']
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], tabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeTabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeTabIndexChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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

/***/ "IbK4":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/tab-header/tab-header.module.ts ***!
  \*******************************************************************/
/*! exports provided: TabHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeaderModule", function() { return TabHeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _tab_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-header.component */ "9W5r");




class TabHeaderModule {
}
TabHeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TabHeaderModule });
TabHeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TabHeaderModule_Factory(t) { return new (t || TabHeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TabHeaderModule, { declarations: [_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabHeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"]]
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
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/utils */ "fNWo");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");





class CallForMacroscopesBodyResolver {
    constructor(content) {
        this.content = content;
        this.directory = 'assets/content/site';
    }
    resolve() {
        return this.content.getContent('site/callForMacroscopes.md').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            if (response.pdfLink) {
                if (!Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["isHttp"])(response.pdfLink)) {
                    response.pdfLink = `${this.directory}/${response.pdfLink}`;
                }
            }
            return response;
        }));
    }
}
CallForMacroscopesBodyResolver.ɵfac = function CallForMacroscopesBodyResolver_Factory(t) { return new (t || CallForMacroscopesBodyResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"])); };
CallForMacroscopesBodyResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CallForMacroscopesBodyResolver, factory: CallForMacroscopesBodyResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallForMacroscopesBodyResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"] }]; }, null); })();


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
/* harmony import */ var _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.module */ "4FRl");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "KZIX");













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
            _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_10__["DrawerHeaderModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CallForMacroscopesModule, { declarations: [_call_for_macroscopes_component__WEBPACK_IMPORTED_MODULE_3__["CallForMacroscopesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _call_for_macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_2__["CallForMacroscopesRoutingModule"],
        _shared_components_call_out_call_out_module__WEBPACK_IMPORTED_MODULE_4__["CallOutModule"],
        _shared_components_tab_header_tab_header_module__WEBPACK_IMPORTED_MODULE_5__["TabHeaderModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_9__["DrawerModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_10__["DrawerHeaderModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"]] }); })();
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
                    _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_10__["DrawerHeaderModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"]
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-call-for-macroscopes-call-for-macroscopes-module.js.map