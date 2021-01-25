(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-venues-venues-module"],{

/***/ "33fF":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/lazy-cards/lazy-cards.module.ts ***!
  \*******************************************************************/
/*! exports provided: LazyCardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyCardsModule", function() { return LazyCardsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _lazy_cards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazy-cards.component */ "lEWS");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");





class LazyCardsModule {
}
LazyCardsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LazyCardsModule });
LazyCardsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LazyCardsModule_Factory(t) { return new (t || LazyCardsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LazyCardsModule, { declarations: [_lazy_cards_component__WEBPACK_IMPORTED_MODULE_2__["LazyCardsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]], exports: [_lazy_cards_component__WEBPACK_IMPORTED_MODULE_2__["LazyCardsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyCardsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_lazy_cards_component__WEBPACK_IMPORTED_MODULE_2__["LazyCardsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
                ],
                exports: [_lazy_cards_component__WEBPACK_IMPORTED_MODULE_2__["LazyCardsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "lEWS":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/lazy-cards/lazy-cards.component.ts ***!
  \**********************************************************************/
/*! exports provided: LazyCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyCardsComponent", function() { return LazyCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");




function LazyCardsComponent_div_3_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LazyCardsComponent_div_3_mat_icon_5_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.goToLink(item_r2.photoLink); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "insert_photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LazyCardsComponent_div_3_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LazyCardsComponent_div_3_mat_icon_6_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.goToLink(item_r2.videoLink); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "videocam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LazyCardsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LazyCardsComponent_div_3_mat_icon_5_Template, 2, 0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LazyCardsComponent_div_3_mat_icon_6_Template, 2, 0, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r2.startDate, " - ", item_r2.endDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!item_r2.photoLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!item_r2.videoLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.event);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.contact);
} }
function LazyCardsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LazyCardsComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.showMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show More Venues");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LazyCardsComponent {
    constructor() {
        /** HTML class name */
        this.clsName = 'sci-lazy-cards';
        this.ITEMS_TO_DISPLAY_INCREMENT = 6;
        this.itemsToDisplay = 6;
    }
    get displayItems() {
        return this.data.slice(0, this.itemsToDisplay);
    }
    get moreItemsToDisplay() {
        return this.itemsToDisplay < this.data.length;
    }
    goToLink(link) {
        window.open(link, '_blank');
    }
    showMore() {
        this.itemsToDisplay = this.itemsToDisplay + this.ITEMS_TO_DISPLAY_INCREMENT;
    }
}
LazyCardsComponent.ɵfac = function LazyCardsComponent_Factory(t) { return new (t || LazyCardsComponent)(); };
LazyCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LazyCardsComponent, selectors: [["sci-lazy-cards"]], hostVars: 2, hostBindings: function LazyCardsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { data: "data" }, decls: 5, vars: 2, consts: [[1, "card-tray"], ["class", "card mat-elevation-z4", 4, "ngFor", "ngForOf"], ["class", "more-button", 3, "click", 4, "ngIf"], [1, "card", "mat-elevation-z4"], [1, "card-header"], [1, "dates"], [1, "media"], ["class", "icon", 3, "click", 4, "ngIf"], ["class", "icon ml-50", 3, "click", 4, "ngIf"], [1, "card-body"], [1, "mb-45"], [1, "icon", 3, "click"], [1, "icon", "ml-50", 3, "click"], [1, "more-button", 3, "click"]], template: function LazyCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lazy-cards works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LazyCardsComponent_div_3_Template, 14, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LazyCardsComponent_div_4_Template, 2, 0, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moreItemsToDisplay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: ["[_nghost-%COMP%]   .card-tray[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .card-tray[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 48%;\n  min-height: 12rem;\n  margin-bottom: 2rem;\n  min-width: 25rem;\n}\n@media (max-width: 805px) {\n  [_nghost-%COMP%]   .card-tray[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .card-tray[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.75rem;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .card-tray[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0rem;\n}\n[_nghost-%COMP%]   .card-tray[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  height: 1.75rem;\n  width: 1.75rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .card-tray[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  font-size: 1.1rem;\n}\n[_nghost-%COMP%]   .card-tray[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n[_nghost-%COMP%]   .more-button[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding: 1rem;\n  font-size: 1.5rem;\n  margin-bottom: 2rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .mb-45[_ngcontent-%COMP%] {\n  margin-bottom: 0.45rem;\n}\n[_nghost-%COMP%]   .ml-50[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sYXp5LWNhcmRzL2xhenktY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBTEo7QUFPSTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFMTjtBQU9NO0VBTkY7SUFPSSxXQUFBO0VBSk47QUFDRjtBQU1NO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBR0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU5SO0FBUVE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBTlY7QUFVVTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBUlo7QUFhTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFYUjtBQWFRO0VBQ0UsbUJBQUE7QUFYVjtBQWlCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUlBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWxCSjtBQTBCRTtFQUNFLHNCQUFBO0FBeEJKO0FBMkJFO0VBQ0UsbUJBQUE7QUF6QkoiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xhenktY2FyZHMvbGF6eS1jYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkZXNrdG9wOiAxMjQ4cHg7XG4kdGFibGV0OiA5NjBweDtcbiRtb2JpbGU6IDgwNXB4O1xuXG46aG9zdCB7XG5cbiAgLmNhcmQtdHJheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmNhcmQge1xuICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgIG1pbi1oZWlnaHQ6IDEycmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgIG1pbi13aWR0aDogMjVyZW07XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNGOUZDRjU7XG4gICAgICAgIC8vIGNvbG9yOiAjNEE1RjY4O1xuICAgICAgICBwYWRkaW5nOiAuNzVyZW07XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAgICAgLmRhdGVzIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW07XG4gICAgICAgIH1cblxuICAgICAgICAubWVkaWEge1xuICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMS43NXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxLjc1cmVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogLjc1cmVtO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcblxuICAgICAgICBkaXYge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubW9yZS1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBjb2xvcjogIzc5OTZBMztcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGMEYxO1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICM3OTk2QTM7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC8vICY6aG92ZXIge1xuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTZBMztcbiAgICAvLyAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyB9XG4gIH1cblxuICAubWItNDUge1xuICAgIG1hcmdpbi1ib3R0b206IC40NXJlbTtcbiAgfVxuXG4gIC5tbC01MCB7XG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-lazy-cards',
                templateUrl: './lazy-cards.component.html',
                styleUrls: ['./lazy-cards.component.scss']
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "lbFG":
/*!***********************************************!*\
  !*** ./src/app/pages/venues/venues.module.ts ***!
  \***********************************************/
/*! exports provided: VenuesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenuesModule", function() { return VenuesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _venues_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./venues-routing.module */ "tGu1");
/* harmony import */ var _venues_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./venues.component */ "wpwP");
/* harmony import */ var _shared_components_lazy_cards_lazy_cards_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/lazy-cards/lazy-cards.module */ "33fF");






class VenuesModule {
}
VenuesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VenuesModule });
VenuesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VenuesModule_Factory(t) { return new (t || VenuesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _venues_routing_module__WEBPACK_IMPORTED_MODULE_2__["VenuesRoutingModule"],
            _shared_components_lazy_cards_lazy_cards_module__WEBPACK_IMPORTED_MODULE_4__["LazyCardsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VenuesModule, { declarations: [_venues_component__WEBPACK_IMPORTED_MODULE_3__["VenuesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _venues_routing_module__WEBPACK_IMPORTED_MODULE_2__["VenuesRoutingModule"],
        _shared_components_lazy_cards_lazy_cards_module__WEBPACK_IMPORTED_MODULE_4__["LazyCardsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VenuesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_venues_component__WEBPACK_IMPORTED_MODULE_3__["VenuesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _venues_routing_module__WEBPACK_IMPORTED_MODULE_2__["VenuesRoutingModule"],
                    _shared_components_lazy_cards_lazy_cards_module__WEBPACK_IMPORTED_MODULE_4__["LazyCardsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "tGu1":
/*!*******************************************************!*\
  !*** ./src/app/pages/venues/venues-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: VenuesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenuesRoutingModule", function() { return VenuesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _venues_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./venues.component */ "wpwP");





const routes = [{ path: '', component: _venues_component__WEBPACK_IMPORTED_MODULE_2__["VenuesComponent"] }];
class VenuesRoutingModule {
}
VenuesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VenuesRoutingModule });
VenuesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VenuesRoutingModule_Factory(t) { return new (t || VenuesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VenuesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VenuesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wpwP":
/*!**************************************************!*\
  !*** ./src/app/pages/venues/venues.component.ts ***!
  \**************************************************/
/*! exports provided: VenuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenuesComponent", function() { return VenuesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_components_lazy_cards_lazy_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/lazy-cards/lazy-cards.component */ "lEWS");



class VenuesComponent {
    constructor() {
        /** HTML class name */
        this.clsName = 'sci-venues';
        this.testVenues = [
            {
                startDate: '9/2/2020',
                endDate: '9/30/2020',
                event: 'Technology Petting Zoo',
                location: 'Indiana University UITS, Bloomington, IN',
                contact: 'Jeannette Lehr',
                photoLink: 'www.google.com'
            },
            {
                startDate: '3/2/2020',
                endDate: '5/1/2020',
                event: 'Women in Data Science 2020 (Regional Event)',
                location: 'UNAM, Mexico City',
                contact: 'Mariana Espinosa',
                photoLink: 'www.google.com',
                videoLink: 'www.google.com'
            },
            {
                startDate: '1/29/2020',
                endDate: '',
                event: 'Tour for MetroStar Systems',
                location: 'Indiana University, Bloomington, IN',
                contact: '',
                photoLink: 'www.google.com'
            },
            {
                startDate: '3/2/2020',
                endDate: '9/1/2020',
                event: 'Women in Data Science 2020 (Regional Event)',
                location: 'UNAM, Mexico City',
                contact: 'Mariana Espinosa',
                photoLink: 'www.google.com',
                videoLink: 'www.google.com'
            },
            {
                startDate: '11/12/2020',
                endDate: '11/15/2020',
                event: 'Women in Data Science 2020 (Regional Event)',
                location: 'UNAM, Mexico City',
                contact: 'Mariana Espinosa',
                photoLink: 'www.google.com',
                videoLink: 'www.google.com'
            },
            {
                startDate: '9/2/2020',
                endDate: '9/30/2020',
                event: 'Technology Petting Zoo',
                location: 'Indiana University UITS, Bloomington, IN',
                contact: 'Jeannette Lehr',
                photoLink: 'www.google.com'
            },
            {
                startDate: '3/2/2020',
                endDate: '5/1/2020',
                event: 'Women in Data Science 2020 (Regional Event)',
                location: 'UNAM, Mexico City',
                contact: 'Mariana Espinosa',
                photoLink: 'www.google.com',
                videoLink: 'www.google.com'
            },
            {
                startDate: '1/29/2020',
                endDate: '',
                event: 'Tour for MetroStar Systems',
                location: 'Indiana University, Bloomington, IN',
                contact: '',
                photoLink: 'www.google.com'
            },
            {
                startDate: '3/2/2020',
                endDate: '9/1/2020',
                event: 'Women in Data Science 2020 (Regional Event)',
                location: 'UNAM, Mexico City',
                contact: 'Mariana Espinosa',
                photoLink: 'www.google.com',
                videoLink: 'www.google.com'
            },
            {
                startDate: '11/12/2020',
                endDate: '11/15/2020',
                event: 'Women in Data Science 2020 (Regional Event)',
                location: 'UNAM, Mexico City',
                contact: 'Mariana Espinosa',
                photoLink: 'www.google.com',
                videoLink: 'www.google.com'
            },
            {
                startDate: '9/2/2020',
                endDate: '9/30/2020',
                event: 'Technology Petting Zoo',
                location: 'Indiana University UITS, Bloomington, IN',
                contact: 'Jeannette Lehr',
                photoLink: 'www.google.com'
            },
            {
                startDate: '3/2/2020',
                endDate: '5/1/2020',
                event: 'Women in Data Science 2020 (Regional Event)',
                location: 'UNAM, Mexico City',
                contact: 'Mariana Espinosa',
                photoLink: 'www.google.com',
                videoLink: 'www.google.com'
            },
            {
                startDate: '1/29/2020',
                endDate: '',
                event: 'Tour for MetroStar Systems',
                location: 'Indiana University, Bloomington, IN',
                contact: '',
                photoLink: 'www.google.com'
            },
            {
                startDate: '3/2/2020',
                endDate: '9/1/2020',
                event: 'Women in Data Science 2020 (Regional Event)',
                location: 'UNAM, Mexico City',
                contact: 'Mariana Espinosa',
                photoLink: 'www.google.com',
                videoLink: 'www.google.com'
            },
            {
                startDate: '11/12/2020',
                endDate: '11/15/2020',
                event: 'Women in Data Science 2020 (Regional Event)',
                location: 'UNAM, Mexico City',
                contact: 'Mariana Espinosa',
                photoLink: 'www.google.com',
                videoLink: 'www.google.com'
            }
        ];
    }
}
VenuesComponent.ɵfac = function VenuesComponent_Factory(t) { return new (t || VenuesComponent)(); };
VenuesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VenuesComponent, selectors: [["sci-venues"]], hostVars: 2, hostBindings: function VenuesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 3, vars: 1, consts: [[1, "mobile-cards", 3, "data"]], template: function VenuesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "venues works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "sci-lazy-cards", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.testVenues);
    } }, directives: [_shared_components_lazy_cards_lazy_cards_component__WEBPACK_IMPORTED_MODULE_1__["LazyCardsComponent"]], styles: ["@media (min-width: 1248px) {\n  [_nghost-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy92ZW51ZXMvdmVudWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtFO0VBREY7SUFFSSxhQUFBO0VBSEY7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvcGFnZXMvdmVudWVzL3ZlbnVlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkZXNrdG9wOiAxMjQ4cHg7XG4kdGFibGV0OiA5NjBweDtcbiRtb2JpbGU6IDY0MHB4O1xuXG46aG9zdCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZGVza3RvcCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VenuesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-venues',
                templateUrl: './venues.component.html',
                styleUrls: ['./venues.component.scss']
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-venues-venues-module.js.map