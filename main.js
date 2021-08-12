(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/scimaps/scimaps/website/projects/scimaps/src/main.ts */"zUnb");


/***/ }),

/***/ "2k/r":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/book-overview/book-overview.component.ts ***!
  \****************************************************************************/
/*! exports provided: BookOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookOverviewComponent", function() { return BookOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel/carousel.component */ "4Isi");
/* harmony import */ var _carousel_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../carousel/item.component */ "IV5s");
/* harmony import */ var _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/breakpoint.directive */ "EpdQ");







function BookOverviewComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookOverviewComponent_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.fullContentVisible = !ctx_r4.fullContentVisible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.fullContentVisible ? "Show less" : "Read more...", " ");
} }
function BookOverviewComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " BOOK EXCERPT (PDF) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.book.pdfLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BookOverviewComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " BUY ON AMAZON ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.book.amazonLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BookOverviewComponent_sci_carousel_item_17_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r7 = ctx_r11.index;
    const image_r6 = ctx_r11.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("alt", "Image #", i_r7, " for book ", ctx_r8.book.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r6.sm, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BookOverviewComponent_sci_carousel_item_17_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r7 = ctx_r12.index;
    const image_r6 = ctx_r12.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("alt", "Image #", i_r7, " for book ", ctx_r10.book.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r6.lg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BookOverviewComponent_sci_carousel_item_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-carousel-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BookOverviewComponent_sci_carousel_item_17_ng_container_2_Template, 2, 3, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BookOverviewComponent_sci_carousel_item_17_ng_template_3_Template, 1, 3, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "mobile-")("sciBreakpointElse", _r9);
} }
/**
 * Display a book
 */
class BookOverviewComponent {
    constructor() {
        /** HTML class name */
        this.clsName = 'sci-book-overview';
        /** Maximum character count to show of book content by default */
        this.maxContentLength = 370;
        /** Whether full book content should be shown */
        this.fullContentVisible = false;
    }
    /** Whether the book content exceeds the maximum character count */
    get hasLongContent() {
        return this.book.body.length > this.maxContentLength;
    }
    /** Full book content */
    get fullContent() {
        return this.book.body;
    }
    /** Book content - truncated if necessary */
    get partialContent() {
        const { fullContent, maxContentLength, hasLongContent, fullContentVisible } = this;
        if (!hasLongContent || fullContentVisible) {
            return fullContent;
        }
        // Text breaking might need some improvement
        return `${fullContent.slice(0, maxContentLength)}...`;
    }
}
BookOverviewComponent.ɵfac = function BookOverviewComponent_Factory(t) { return new (t || BookOverviewComponent)(); };
BookOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookOverviewComponent, selectors: [["sci-book-overview"]], hostVars: 2, hostBindings: function BookOverviewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { book: "book", maxContentLength: "maxContentLength" }, decls: 18, vars: 9, consts: [[1, "text-column"], [1, "title"], [1, "author"], [1, "publisher"], ["href", "http://mitpress.mit.edu/", "rel", "noreferrer noopener", "target", "_blank", 1, "link"], ["markdown", "", 1, "markdown", "full", 3, "data"], ["markdown", "", 1, "markdown", "partial", 3, "data"], ["class", "show-more", 3, "click", 4, "ngIf"], [1, "buttons"], ["class", "button", "target", "_blank", "rel", "noreferrer noopener", 3, "href", 4, "ngIf"], [1, "carousel-column"], [1, "carousel"], [4, "ngFor", "ngForOf"], [1, "show-more", 3, "click"], ["target", "_blank", "rel", "noreferrer noopener", 1, "button", 3, "href"], [1, "carousel-item"], [4, "sciBreakpoint", "sciBreakpointElse"], ["desktop", ""], [1, "carousel-image", 3, "src", "alt"]], template: function BookOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Published by: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BookOverviewComponent_div_11_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BookOverviewComponent_a_13_Template, 2, 1, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BookOverviewComponent_a_14_Template, 2, 1, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "sci-carousel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BookOverviewComponent_sci_carousel_item_17_Template, 5, 2, "sci-carousel-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Author: ", ctx.book.author, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.book.publisher, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.fullContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.partialContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasLongContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.book.pdfLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.book.amazonLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.book.images);
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_1__["MarkdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _carousel_item_component__WEBPACK_IMPORTED_MODULE_4__["CarouselItemComponent"], _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_5__["BreakpointDirective"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%], [_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n  width: 50%;\n  max-width: 600px;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%] {\n  padding-right: 3rem;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .publisher[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .markdown.partial[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%] {\n  display: none;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 1rem;\n}\n@media screen and (max-width: 480px) {\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin: 1rem 1rem 0 0;\n  padding: 0.5rem;\n  border: 1px solid;\n  text-decoration: none;\n  white-space: nowrap;\n  text-align: center;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #8DC63F;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%], [_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .markdown.full[_ngcontent-%COMP%] {\n    display: none;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .markdown.partial[_ngcontent-%COMP%] {\n    display: initial;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%] {\n    display: initial;\n  }\n  [_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-right: 0;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ib29rLW92ZXJ2aWV3L2Jvb2stb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRkY7QUFJRTs7RUFFRSxVQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUtFO0VBQ0UsbUJBQUE7QUFISjtBQUtJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSE47QUFNSTtFQUNFLG1CQUFBO0FBSk47QUFPSTtFQUNFLGFBQUE7QUFMTjtBQVFJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFOTjtBQVNJO0VBQ0UsYUFBQTtFQUlBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVk47QUFLTTtFQUZGO0lBR0ksc0JBQUE7RUFGTjtBQUNGO0FBTU07RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUpSO0FBT0k7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFMTjtBQU9NO0VBQ0UsMEJBQUE7QUFMUjtBQVVFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBUko7QUFTSTtFQUNFLFdBQUE7QUFQTjtBQVNNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBUFI7QUFTUTtFQUNFLFdBQUE7RUFFQSxpQkFBQTtBQVJWO0FBY0U7RUEvRUY7SUFnRkksOEJBQUE7RUFYRjtFQWFFOztJQUVFLFdBQUE7RUFYSjtFQWNFO0lBQ0UsZ0JBQUE7RUFaSjtFQWNJO0lBQ0UsYUFBQTtFQVpOO0VBZUk7SUFDRSxnQkFBQTtFQWJOO0VBZ0JJO0lBQ0UsZ0JBQUE7RUFkTjtFQWtCRTtJQUNFLG1CQUFBO0VBaEJKO0FBQ0Y7QUFtQkU7RUFDRTtJQUNFLHNCQUFBO0VBakJKO0VBbUJJO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQWpCTjtBQUNGIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ib29rLW92ZXJ2aWV3L2Jvb2stb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc2luZ2xlLWNvbHVtbi1tYXgtd2lkdGg6IDc2OHB4O1xuJGJ1dHRvbi1zcGFuLW1heC13aWR0aDogNDgwcHg7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLnRleHQtY29sdW1uLFxuICAuY2Fyb3VzZWwtY29sdW1uIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cblxuICAudGV4dC1jb2x1bW4ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB9XG5cbiAgICAucHVibGlzaGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgLm1hcmtkb3duLnBhcnRpYWwge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuc2hvdy1tb3JlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRidXR0b24tc3Bhbi1tYXgtd2lkdGgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMXJlbSAxcmVtIDAgMDtcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC5saW5rIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAjOERDNjNGO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhcm91c2VsLWNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAuY2Fyb3VzZWwge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc2luZ2xlLWNvbHVtbi1tYXgtd2lkdGgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cbiAgICAudGV4dC1jb2x1bW4sXG4gICAgLmNhcm91c2VsLWNvbHVtbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAudGV4dC1jb2x1bW4ge1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcblxuICAgICAgLm1hcmtkb3duLmZ1bGwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAubWFya2Rvd24ucGFydGlhbCB7XG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgICB9XG5cbiAgICAgIC5zaG93LW1vcmUge1xuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJvdXNlbC1jb2x1bW4ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogJGJ1dHRvbi1zcGFuLW1heC13aWR0aCkge1xuICAgIC50ZXh0LWNvbHVtbiAubGlua3Mge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-book-overview',
                templateUrl: './book-overview.component.html',
                styleUrls: ['./book-overview.component.scss']
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], book: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxContentLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "2zxw":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/breakpoint-registry.service.ts ***!
  \****************************************************************/
/*! exports provided: BreakpointUnits, BreakpointDimension, BreakpointRegistryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointUnits", function() { return BreakpointUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointDimension", function() { return BreakpointDimension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointRegistryService", function() { return BreakpointRegistryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


/**
 * Supported css units in breakpoints
 */
var BreakpointUnits;
(function (BreakpointUnits) {
    BreakpointUnits["PX"] = "px";
    BreakpointUnits["EM"] = "em";
    BreakpointUnits["REM"] = "rem";
})(BreakpointUnits || (BreakpointUnits = {}));
/**
 * Dimension breakpoints can be applied to
 */
var BreakpointDimension;
(function (BreakpointDimension) {
    BreakpointDimension["WIDTH"] = "width";
    BreakpointDimension["HEIGHT"] = "height";
})(BreakpointDimension || (BreakpointDimension = {}));
/**
 * Simple registry for adding/getting breakpoints
 */
class BreakpointRegistryService {
    constructor() {
        /**
         * Stored breakpoints
         */
        this.breakpoints = {};
    }
    /**
     * Adds a single breakpoint definition to the registry.
     * If the breakpoint already exists it is overridden with the new definition.
     *
     * @param name Name associated with breakpoint
     * @param size Dimension size
     * @param units Dimension size units
     * @param dimension Dimension breakpoint is applied to
     */
    addBreakpoint(name, size, units = BreakpointUnits.PX, dimension = BreakpointDimension.WIDTH) {
        this.breakpoints[name] = {
            name, size, units, dimension
        };
    }
    /**
     * Gets a breakpoint definition with the specified name
     *
     * @param name Name associated with breakpoint
     * @returns A breakpoint definition if found, undefined otherwise
     */
    getBreakpoint(name) {
        return this.breakpoints[name];
    }
}
BreakpointRegistryService.ɵfac = function BreakpointRegistryService_Factory(t) { return new (t || BreakpointRegistryService)(); };
BreakpointRegistryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BreakpointRegistryService, factory: BreakpointRegistryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointRegistryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "42cY":
/*!*****************************************************!*\
  !*** ./src/app/pages/books/books-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BooksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksRoutingModule", function() { return BooksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _books_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books.component */ "ECD4");
/* harmony import */ var _books_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./books-resolver.service */ "6qLs");






const routes = [{
        path: '',
        component: _books_component__WEBPACK_IMPORTED_MODULE_2__["BooksComponent"],
        resolve: {
            books: _books_resolver_service__WEBPACK_IMPORTED_MODULE_3__["BooksResolverService"]
        }
    }];
class BooksRoutingModule {
}
BooksRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BooksRoutingModule });
BooksRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BooksRoutingModule_Factory(t) { return new (t || BooksRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BooksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "4FRl":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/drawer-header/drawer-header.module.ts ***!
  \*************************************************************************/
/*! exports provided: DrawerHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerHeaderModule", function() { return DrawerHeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _drawer_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawer-header.component */ "StKz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "PCNd");






class DrawerHeaderModule {
}
DrawerHeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DrawerHeaderModule });
DrawerHeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DrawerHeaderModule_Factory(t) { return new (t || DrawerHeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DrawerHeaderModule, { declarations: [_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__["DrawerHeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]], exports: [_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__["DrawerHeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawerHeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__["DrawerHeaderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                exports: [_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__["DrawerHeaderComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "4Isi":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/carousel/carousel.component.ts ***!
  \******************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-swiper-wrapper */ "Y9fb");
/* harmony import */ var _item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.component */ "IV5s");





const _c0 = [[["sci-carousel-item"]]];
const _c1 = ["sci-carousel-item"];
/**
 * Carousel component for displaying images
 */
class CarouselComponent {
    constructor() {
        /** HTML class */
        this.clsName = 'sci-carousel';
        /**
         * Carousel options
         */
        this.config = {
            a11y: { enabled: true },
            keyboard: false,
            mousewheel: false,
            simulateTouch: false,
            navigation: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                hideOnClick: false
            },
            loop: true
        };
    }
    /**
     * Initializes listener on slides changes and notifies swiper
     */
    ngAfterViewInit() {
        this.slides.changes.subscribe(() => this.swiper.update());
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["sci-carousel"]], contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _item_component__WEBPACK_IMPORTED_MODULE_2__["CarouselItemComponent"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slides = _t);
    } }, viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__["SwiperDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.swiper = _t.first);
    } }, hostVars: 2, hostBindings: function CarouselComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, ngContentSelectors: _c1, decls: 6, vars: 1, consts: [[1, "swiper", "swiper-container", 3, "swiper"], [1, "swiper-wrapper"], [1, "swiper-pagination"], [1, "swiper-button-prev"], [1, "swiper-button-next"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
    } }, directives: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__["SwiperDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n[_nghost-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%], [_nghost-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n  top: unset;\n  bottom: 0.75rem;\n}\n[_nghost-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .swiper-pagination[_ngcontent-%COMP%] {\n  bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUVJO0VBRUUsbUJBQUE7QUFETjtBQUlJOztFQUVFLFVBQUE7RUFDQSxlQUFBO0FBRk47QUFLSTtFQUNFLFlBQUE7QUFITiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIC5zd2lwZXItY29udGFpbmVyIHtcbiAgICAuc3dpcGVyLXdyYXBwZXIge1xuXG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIH1cblxuICAgIC5zd2lwZXItYnV0dG9uLXByZXYsXG4gICAgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgICB0b3A6IHVuc2V0O1xuICAgICAgYm90dG9tOiAwLjc1cmVtO1xuICAgIH1cblxuICAgIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgICBib3R0b206IDFyZW07XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.scss']
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], swiper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__["SwiperDirective"]]
        }], slides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_item_component__WEBPACK_IMPORTED_MODULE_2__["CarouselItemComponent"]]
        }] }); })();


/***/ }),

/***/ "4XY/":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/gallery-item/gallery-item.module.ts ***!
  \***********************************************************************/
/*! exports provided: GalleryItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryItemModule", function() { return GalleryItemModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../drawer-header/drawer-header.module */ "4FRl");
/* harmony import */ var _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drawer/drawer.module */ "t1/B");
/* harmony import */ var _gallery_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery-item.component */ "UGVg");







class GalleryItemModule {
}
GalleryItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GalleryItemModule });
GalleryItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function GalleryItemModule_Factory(t) { return new (t || GalleryItemModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_4__["DrawerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_3__["DrawerHeaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GalleryItemModule, { declarations: [_gallery_item_component__WEBPACK_IMPORTED_MODULE_5__["GalleryItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_4__["DrawerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_3__["DrawerHeaderModule"]], exports: [_gallery_item_component__WEBPACK_IMPORTED_MODULE_5__["GalleryItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GalleryItemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_gallery_item_component__WEBPACK_IMPORTED_MODULE_5__["GalleryItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_4__["DrawerModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_3__["DrawerHeaderModule"]
                ],
                exports: [_gallery_item_component__WEBPACK_IMPORTED_MODULE_5__["GalleryItemComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "5QFB":
/*!***********************************************************!*\
  !*** ./src/app/core/components/contact/contact.module.ts ***!
  \***********************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.component */ "9lgV");






class ContactModule {
}
ContactModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContactModule });
ContactModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ContactModule_Factory(t) { return new (t || ContactModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactModule, { declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]],
                exports: [_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "61A3":
/*!***********************************************!*\
  !*** ./src/app/core/state/page/page.state.ts ***!
  \***********************************************/
/*! exports provided: PageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageState", function() { return PageState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _ngxs_labs_data_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs-labs/data/decorators */ "imKX");
/* harmony import */ var _ngxs_labs_data_repositories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs-labs/data/repositories */ "r5NQ");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "yDe4");
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/app.actions */ "zqhc");







let PageState = class PageState extends _ngxs_labs_data_repositories__WEBPACK_IMPORTED_MODULE_3__["NgxsImmutableDataRepository"] {
    static getAppState(state) {
        return state.app;
    }
    static drawer(state) {
        return state.app.drawer;
    }
    setAppState({ getState, patchState }, { payload }) {
        const state = getState();
        patchState({
            app: Object.assign(Object.assign({}, state.app), payload)
        });
    }
};
PageState.ɵfac = function PageState_Factory(t) { return ɵPageState_BaseFactory(t || PageState); };
PageState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PageState, factory: PageState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(_actions_app_actions__WEBPACK_IMPORTED_MODULE_5__["SetAppState"])
], PageState.prototype, "setAppState", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Selector"])()
], PageState, "getAppState", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Selector"])()
], PageState, "drawer", null);
PageState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_data_decorators__WEBPACK_IMPORTED_MODULE_2__["StateRepository"])(),
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["State"])({
        name: 'page',
        defaults: {
            placeholder: 0,
            app: {
                test: 'test',
                drawer: {
                    showDrawer: false
                }
            }
        }
    })
], PageState);

const ɵPageState_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](PageState);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PageState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, { setAppState: [] }); })();


/***/ }),

/***/ "6qLs":
/*!*******************************************************!*\
  !*** ./src/app/pages/books/books-resolver.service.ts ***!
  \*******************************************************/
/*! exports provided: BooksResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksResolverService", function() { return BooksResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/utils */ "fNWo");







class BooksResolverService {
    constructor(contentService) {
        this.contentService = contentService;
        this.directory = 'content/book';
    }
    getImageSource(book) {
        let result = [];
        if (Array.isArray(book.images) && book.images.length > 0) {
            result = book.images.map((image) => {
                return {
                    sm: `assets/${this.directory}/${book.slug}/${image.sm}`,
                    lg: `assets/${this.directory}/${book.slug}/${image.lg}`
                };
            });
        }
        return result;
    }
    getSourceLink(book) {
        return `assets/${this.directory}/${book.slug}/${book.pdfLink}`;
    }
    toBook(item) {
        return {
            title: item.title,
            amazonLink: item.amazonLink,
            pdfLink: item.pdfLink,
            publisher: item.publisher,
            author: item.author,
            body: item.body,
            slug: Object(_shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["toSlug"])(item.title),
            images: item.bookImages
        };
    }
    toBookUI(book) {
        book.images = this.getImageSource(book);
        if (book.pdfLink) {
            if (!Object(_constants_utils__WEBPACK_IMPORTED_MODULE_4__["isHttp"])(book.pdfLink)) {
                book.pdfLink = this.getSourceLink(book);
            }
        }
        return book;
    }
    resolve() {
        const books$ = this.contentService.getIndex('books').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
        const person$ = books$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((items) => {
            let slugs = [];
            items.forEach((item) => {
                item.author.forEach((author) => {
                    if (!slugs.includes(author)) {
                        slugs = [...slugs, author];
                    }
                });
            });
            // ['s1', 's2']
            return slugs;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((slugs) => {
            const forkJoins = slugs.map((slug) => {
                // {'s1': {}}, {'s2': {}}
                return this.contentService.getContent(`person/${slug}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => {
                    return {
                        [slug]: result
                    };
                }));
            });
            // [ {'s1': {}}, {'s2': {}} ]
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(forkJoins);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((array) => {
            const result = {};
            array.forEach(element => {
                Object.assign(result, element);
            });
            // {'s1': {}, 's2': {}}
            return result;
        }));
        // Combine
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([person$, books$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => {
            const [people, books] = result;
            return books.filter((book) => {
                return book.title;
            }).map((bookParams) => {
                const authorNames = bookParams.author
                    .map((slug) => {
                    let authorName;
                    if (people.hasOwnProperty(slug) && people[slug]) {
                        const profile = people[slug];
                        if (profile) {
                            authorName = profile.name;
                        }
                    }
                    return authorName;
                }).filter((author) => author);
                const book = this.toBook(Object.assign(Object.assign({}, bookParams), { author: authorNames.join(', ') }));
                return this.toBookUI(book);
            });
        }));
    }
}
BooksResolverService.ɵfac = function BooksResolverService_Factory(t) { return new (t || BooksResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"])); };
BooksResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BooksResolverService, factory: BooksResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"] }]; }, null); })();


/***/ }),

/***/ "8yKn":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/carousel/carousel.module.ts ***!
  \***************************************************************/
/*! exports provided: CarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ "Y9fb");
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel.component */ "4Isi");
/* harmony import */ var _item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item.component */ "IV5s");






class CarouselModule {
}
CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CarouselModule });
CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CarouselModule_Factory(t) { return new (t || CarouselModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CarouselModule, { declarations: [_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _item_component__WEBPACK_IMPORTED_MODULE_4__["CarouselItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperModule"]], exports: [_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _item_component__WEBPACK_IMPORTED_MODULE_4__["CarouselItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperModule"]],
                declarations: [_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _item_component__WEBPACK_IMPORTED_MODULE_4__["CarouselItemComponent"]],
                exports: [_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _item_component__WEBPACK_IMPORTED_MODULE_4__["CarouselItemComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "9lgV":
/*!**************************************************************!*\
  !*** ./src/app/core/components/contact/contact.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directives/breakpoint.directive */ "EpdQ");




function ContactComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "language");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0\u00A0CNS:\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "cns.iu.edu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Visit us:\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ContactComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Learn about CNS:\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "cns.iu.edu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Visit us on social media:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ContactComponent {
    constructor() {
        this.clsName = 'sci-contact mat-display-3';
        this.facebook = 'https://www.facebook.com/mappingscience';
        this.twitter = 'https://www.twitter.com/mappingscience';
        this.instagram = 'https://www.instagram.com/cns_at_iu';
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["sci-contact"]], hostVars: 2, hostBindings: function ContactComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 13, vars: 2, consts: [[1, "section-1"], ["href", "mailto:cnscntr@indiana.edu", "target", "_blank", "rel", "noopener noreferrer", 1, "email"], ["svgIcon", "social:email", 1, "icon"], [1, "phone"], [1, "icon"], ["class", "section-2", 4, "sciBreakpoint", "sciBreakpointElse"], ["desktop", ""], [1, "section-2"], ["href", "https://cns.iu.edu", "target", "_blank", "rel", "noopener noreferrer", 1, "website"], [1, "link"], [1, "social"], [1, "social-icons"], ["target", "_blank", "rel", "noopener noreferrer", 1, "link", 3, "href"], ["svgIcon", "social:twitter", 1, "icon"], ["svgIcon", "social:facebook", 1, "icon"], ["svgIcon", "social:instagram", 1, "icon"], [1, "section-3"], [1, "website"], ["href", "https://cns.iu.edu", "target", "_blank", "rel", "noopener noreferrer", 1, "link"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0\u00A0cnscntr@indiana.edu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0\u00A0812-855-9930");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ContactComponent_div_10_Template, 18, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ContactComponent_ng_template_11_Template, 16, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "tablet-")("sciBreakpointElse", _r1);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_2__["BreakpointDirective"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 15rem;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .section-1[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-2[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem 1rem;\n}\n[_nghost-%COMP%]   .section-1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 3rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .section-2[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n[_nghost-%COMP%]   .section-2[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .section-2[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex: 1;\n}\n[_nghost-%COMP%]   .section-2[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  font-size: 2.25rem;\n  line-height: 2.25rem;\n  border: 1px solid;\n  border-radius: 0.25rem;\n}\n[_nghost-%COMP%]   .section-2[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:not(:last-child), [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0.5rem;\n}\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .section-1[_ngcontent-%COMP%] {\n    padding-top: 1rem;\n    padding-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvc2NpbWFwcy9zcmMvc3R5bGluZy9faWNvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQUtFO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBSko7QUFNSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUpOO0FBUUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFOSjtBQVNFO0VBQ0Usc0JBQUE7QUFQSjtBQVNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxPQUFBO0FBUE47QUFRTTtFQ3RDSixjRHVDeUI7RUN0Q3pCLGVEc0N5QjtFQ3JDekIsa0JEcUN5QjtFQ3BDekIsb0JEb0N5QjtFQUNuQixpQkFBQTtFQUNBLHNCQUFBO0FBSFI7QUFLUTtFQUNFLG9CQUFBO0FBSFY7QUFTRTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtFQVBKO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdpY29uJztcblxuJHRhYmxldDogOTYwcHg7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAxNXJlbTtcblxuICBhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLnNlY3Rpb24tMSwgLnNlY3Rpb24tMiwgLnNlY3Rpb24tMyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuXG4gICAgJiA+ICoge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5zZWN0aW9uLTIge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG5cbiAgLnNlY3Rpb24tMiwgLnNlY3Rpb24tMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcblxuICAgIC5zb2NpYWwtaWNvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgIGZsZXg6IDE7XG4gICAgICAuaWNvbiB7XG4gICAgICAgIEBpbmNsdWRlIGljb24uc2l6ZSgyLjI1cmVtKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG5cbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgLnNlY3Rpb24tMSB7XG4gICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cbiAgfVxufVxuIiwiXG5AbWl4aW4gc2l6ZSgkc2l6ZSkge1xuICB3aWR0aDogJHNpemU7XG4gIGhlaWdodDogJHNpemU7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hide => show', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out')]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show => hide', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in')]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            left: '120%',
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            left: 0,
        })),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            left: 0,
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            left: '120%',
        })),
    ]),
]);


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "By0U":
/*!********************************************************!*\
  !*** ./src/app/shared/services/media-query.service.ts ***!
  \********************************************************/
/*! exports provided: MediaQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaQueryService", function() { return MediaQueryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _utils_global_di_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/global-di-tokens */ "GEEO");





/**
 * Service for testing and creating streams of media queries
 */
class MediaQueryService {
    /**
     * Creates an instance of media query service.
     *
     * @param window The global window
     */
    constructor(window) {
        this.window = window;
    }
    /**
     * Synchronously tests a media query
     *
     * @param query Query to test
     * @returns true if the query matches false otherwise
     */
    test(query) {
        return this.window.matchMedia(query).matches;
    }
    /**
     * Creates a stream for a media query that emits whenever the matching state changes
     *
     * @param query Query to test
     * @returns Stream of matches
     */
    createStream(query) {
        const mq = this.window.matchMedia(query);
        const first = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => [mq.matches]);
        const events = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(mq, 'change').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('matches'));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(first, events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatAll"])());
    }
}
MediaQueryService.ɵfac = function MediaQueryService_Factory(t) { return new (t || MediaQueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_global_di_tokens__WEBPACK_IMPORTED_MODULE_3__["WINDOW"])); };
MediaQueryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MediaQueryService, factory: MediaQueryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaQueryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_utils_global_di_tokens__WEBPACK_IMPORTED_MODULE_3__["WINDOW"]]
            }] }]; }, null); })();


/***/ }),

/***/ "ECD4":
/*!************************************************!*\
  !*** ./src/app/pages/books/books.component.ts ***!
  \************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_components_book_overview_book_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/book-overview/book-overview.component */ "2k/r");





function BooksComponent_sci_book_overview_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sci-book-overview", 2);
} if (rf & 2) {
    const book_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("book", book_r1);
} }
class BooksComponent {
    constructor(route) {
        this.route = route;
        this.books = [];
    }
    ngOnInit() {
        this.dataSubscription = this.route.data.subscribe((data) => {
            if (data && data.hasOwnProperty('books') && Array.isArray(data.books)) {
                this.books = data.books;
            }
        });
    }
    ngOnDestroy() {
        if (this.dataSubscription) {
            this.dataSubscription.unsubscribe();
        }
    }
}
BooksComponent.ɵfac = function BooksComponent_Factory(t) { return new (t || BooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BooksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BooksComponent, selectors: [["sci-books"]], decls: 3, vars: 1, consts: [[1, "header"], ["class", "book", 3, "book", 4, "ngFor", "ngForOf"], [1, "book", 3, "book"]], template: function BooksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BooksComponent_sci_book_overview_2_Template, 1, 1, "sci-book-overview", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_components_book_overview_book_overview_component__WEBPACK_IMPORTED_MODULE_3__["BookOverviewComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .book[_ngcontent-%COMP%] {\n  margin-bottom: 6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9ib29rcy9ib29rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7QUFDSiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvcGFnZXMvYm9va3MvYm9va3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIC5ib29rIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2cmVtO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-books',
                templateUrl: './books.component.html',
                styleUrls: ['./books.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "EbOm":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/menu-icon/menu-icon.component.ts ***!
  \********************************************************************/
/*! exports provided: MenuIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuIconComponent", function() { return MenuIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class MenuIconComponent {
    constructor() {
        this.clsName = 'sci-menu-icon';
        this.alternateIcon = false;
    }
}
MenuIconComponent.ɵfac = function MenuIconComponent_Factory(t) { return new (t || MenuIconComponent)(); };
MenuIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuIconComponent, selectors: [["sci-menu-icon"]], hostVars: 2, hostBindings: function MenuIconComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { alternateIcon: "alternateIcon" }, decls: 4, vars: 2, consts: [[1, "icon"], [1, "bar"]], template: function MenuIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("alternate", ctx.alternateIcon);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 2.25rem;\n  height: 1.5rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin: 0.125rem;\n}\n[_nghost-%COMP%]   .icon[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  width: 1.875rem;\n  height: 0.25rem;\n  border-radius: 0.625rem;\n  transition: 0.4s;\n}\n[_nghost-%COMP%]   .icon[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-of-type(2) {\n  margin: 0.25rem 0;\n}\n[_nghost-%COMP%]   .icon.alternate[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-of-type(1) {\n  width: 1.75rem;\n  transform: translate(0, 0.5rem) rotate(45deg);\n}\n[_nghost-%COMP%]   .icon.alternate[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-of-type(2) {\n  opacity: 0;\n}\n[_nghost-%COMP%]   .icon.alternate[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-of-type(3) {\n  width: 1.75rem;\n  transform: translate(0, -0.5rem) rotate(-45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZW51LWljb24vbWVudS1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtBQUNKO0FBQ0k7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDTjtBQUNNO0VBQ0UsaUJBQUE7QUFDUjtBQUlNO0VBQ0UsY0FBQTtFQUNBLDZDQUFBO0FBRlI7QUFLTTtFQUNFLFVBQUE7QUFIUjtBQU1NO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0FBSlIiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lbnUtaWNvbi9tZW51LWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMi4yNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAuaWNvbiB7XG4gICAgbWFyZ2luOiAwLjEyNXJlbTtcblxuICAgIC5iYXIge1xuICAgICAgd2lkdGg6IDEuODc1cmVtO1xuICAgICAgaGVpZ2h0OiAwLjI1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuXG4gICAgICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5hbHRlcm5hdGUgLmJhciB7XG4gICAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAuNXJlbSkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cblxuICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG5cbiAgICAgICY6bnRoLW9mLXR5cGUoMykge1xuICAgICAgICB3aWR0aDogMS43NXJlbTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTAuNXJlbSkgcm90YXRlKC00NWRlZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-menu-icon',
                templateUrl: './menu-icon.component.html',
                styleUrls: ['./menu-icon.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], alternateIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "EpdQ":
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/breakpoint.directive.ts ***!
  \***********************************************************/
/*! exports provided: BreakpointDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointDirective", function() { return BreakpointDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _services_media_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/media-query.service */ "By0U");
/* harmony import */ var _services_breakpoint_registry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/breakpoint-registry.service */ "2zxw");




/**
 * Directive for adding/removing dom content based on screen width/height
 * using named breakpoints.
 * This directive supports the same syntax as ngIf (except `as varname`)
 */
class BreakpointDirective {
    /**
     * Creates an instance of breakpoint directive.
     *
     * @param viewContainer The view container to add content to
     * @param mq Service for matching the breakpoint queries
     * @param bpr Service for finding named breakpoint definitions
     * @param templateRef The initial template reference on which the directive is attached
     */
    constructor(viewContainer, mq, bpr, templateRef) {
        this.viewContainer = viewContainer;
        this.mq = mq;
        this.bpr = bpr;
        /** Whether the query is currently matching */
        this.matches = false;
        this.thenTemplateRef = templateRef;
    }
    /**
     * Sets breakpoint name with an optional trailing `+` or `-`.
     * `-` matches the breakpoint and all smaller breakpoints.
     * `+` matches the breakpoint and all larger breakpoints.
     * If no trailing `+` or `-` is provided it defaults to `+`.
     */
    set sciBreakpoint(value) {
        this.updateQuery(value);
    }
    /**
     * Sets the template to display when truthy
     */
    set sciBreakpointThen(templateRef) {
        this.thenTemplateRef = templateRef;
        this.thenViewRef = undefined;
        this.updateView();
    }
    /**
     * Sets the template to display when falsy
     */
    set sciBreakpointElse(templateRef) {
        this.elseTemplateRef = templateRef;
        this.elseViewRef = undefined;
        this.updateView();
    }
    /**
     * Cleans up subscriptions
     */
    ngOnDestroy() {
        var _a;
        (_a = this.subscriptions) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    /**
     * Updates the breakpoint definition used to match on
     *
     * @param value The breakpoint name
     */
    updateQuery(value) {
        const { bpr, mq, subscriptions } = this;
        subscriptions === null || subscriptions === void 0 ? void 0 : subscriptions.unsubscribe();
        const last = value.slice(-1);
        if (last === '+' || last === '-') {
            value = value.slice(0, -1);
        }
        const breakpoint = bpr.getBreakpoint(value);
        if (!breakpoint) {
            this.matches = false;
            this.updateView();
            return;
        }
        const prefix = last === '-' ? 'max' : 'min';
        const query = `(${prefix}-${breakpoint.dimension}: ${breakpoint.size}${breakpoint.units})`;
        this.subscriptions = mq.createStream(query).subscribe(matches => {
            this.matches = matches;
            this.updateView();
        });
    }
    /**
     * Updates the content based on the matching state of the breakpoint query
     */
    updateView() {
        const { matches, thenTemplateRef, thenViewRef, elseTemplateRef, elseViewRef, viewContainer } = this;
        if (matches && !thenViewRef) {
            viewContainer.clear();
            this.elseViewRef = undefined;
            if (thenTemplateRef) {
                this.thenViewRef = viewContainer.createEmbeddedView(thenTemplateRef);
                this.thenViewRef.markForCheck();
            }
        }
        else if (!matches && !elseViewRef) {
            viewContainer.clear();
            this.thenViewRef = undefined;
            if (elseTemplateRef) {
                this.elseViewRef = viewContainer.createEmbeddedView(elseTemplateRef);
                this.elseViewRef.markForCheck();
            }
        }
    }
}
BreakpointDirective.ɵfac = function BreakpointDirective_Factory(t) { return new (t || BreakpointDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_media_query_service__WEBPACK_IMPORTED_MODULE_1__["MediaQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_breakpoint_registry_service__WEBPACK_IMPORTED_MODULE_2__["BreakpointRegistryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
BreakpointDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BreakpointDirective, selectors: [["", "sciBreakpoint", ""]], inputs: { sciBreakpoint: "sciBreakpoint", sciBreakpointThen: "sciBreakpointThen", sciBreakpointElse: "sciBreakpointElse" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[sciBreakpoint]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _services_media_query_service__WEBPACK_IMPORTED_MODULE_1__["MediaQueryService"] }, { type: _services_breakpoint_registry_service__WEBPACK_IMPORTED_MODULE_2__["BreakpointRegistryService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { sciBreakpoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sciBreakpointThen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sciBreakpointElse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Fh0M":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/purchase-modal/purchase-modal.component.ts ***!
  \******************************************************************************/
/*! exports provided: PurchaseModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseModalComponent", function() { return PurchaseModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "mFH5");










function PurchaseModalComponent_mat_dialog_content_2_mat_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r4, " ");
} }
function PurchaseModalComponent_mat_dialog_content_2_mat_error_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getErrorMessage());
} }
function PurchaseModalComponent_mat_dialog_content_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Purchase Map(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Most exhibit maps can be purchased individually. Maps are 30\" x 24\" (76cm x 61cm). Different Pricing options are available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Inkjet print: $45 ea*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Premium archival print: $100 ea*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Iteration poster sets (inkjet): $150 per iteration* or $950 for all 20 posters*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*plus shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Complete and submit the form. You will be contacted by a staff member to complete your order and verify all information. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseModalComponent_mat_dialog_content_2_Template_input_change_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.change($event.target, "firstName"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseModalComponent_mat_dialog_content_2_Template_input_change_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.change($event.target, "lastName"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Shipping Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseModalComponent_mat_dialog_content_2_Template_input_change_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.change($event.target, "shipAddress"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseModalComponent_mat_dialog_content_2_Template_input_change_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.change($event.target, "city"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function PurchaseModalComponent_mat_dialog_content_2_Template_mat_select_selectionChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.stateChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PurchaseModalComponent_mat_dialog_content_2_mat_option_42_Template, 2, 2, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Zip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseModalComponent_mat_dialog_content_2_Template_input_change_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.change($event.target, "zip"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseModalComponent_mat_dialog_content_2_Template_input_change_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.change($event.target, "email"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, PurchaseModalComponent_mat_dialog_content_2_mat_error_52_Template, 2, 1, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseModalComponent_mat_dialog_content_2_Template_input_change_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.change($event.target, "phone"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Map name(s) and preferred shipping method");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseModalComponent_mat_dialog_content_2_Template_textarea_change_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.updateShipInfo($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseModalComponent_mat_dialog_content_2_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseModalComponent_mat_dialog_content_2_Template_a_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.buttonClickSend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "SEND");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.states);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.zip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.email.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r0.allValid());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.mailLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PurchaseModalComponent_mat_dialog_content_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Thank you for your order! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " A staff member will contact you to complete the payment process and confirm details. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseModalComponent_mat_dialog_content_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DONE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PurchaseModalComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        /** HTML class name */
        this.clsName = 'sci-purchase-modal';
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.address = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.city = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.state = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.zip = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        /**
         * Whether the confirmation screen has been reached
         */
        this.confirmation = false;
        /**
         * Current form inputs
         */
        this.currentInfo = {
            firstName: '',
            lastName: '',
            shipAddress: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            phone: '',
        };
        /**
         * Email link
         */
        this.mailLink = '';
        /**
         * Shipping info (body of email)
         */
        this.shipInfo = '';
        /**
         * Where the email will be sent
         */
        this.receivingEmail = 'katy@indiana.edu';
        /**
         * State options
         */
        this.states = [
            'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia',
            'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
            'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands',
            'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
            'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
    }
    /**
     * Closes info dialog component
     */
    close() {
        this.dialogRef.close();
    }
    /**
     * Opens the confirmation screen when send button is clicked
     */
    buttonClickSend() {
        if (this.allValid()) {
            this.confirmation = true;
        }
    }
    /**
     * Updates the current form inputs (excluding state)
     * @param input the input event
     * @param key Key to be updated
     */
    change(target, key) {
        const inputTarget = target;
        this.currentInfo = target ? Object.assign(Object.assign({}, this.currentInfo), { [key]: inputTarget.value }) : this.currentInfo;
        this.updateMailLink();
    }
    /**
     * Updates the selected state
     * @param event Selected state
     */
    stateChange(event) {
        this.currentInfo = Object.assign(Object.assign({}, this.currentInfo), { state: event.value });
        this.updateMailLink();
    }
    /**
     * Updates ship info portion of form
     * @param event Input event
     */
    updateShipInfo(target) {
        const inputTarget = target;
        this.shipInfo = target ? inputTarget.value.split('\n').join('%0D%0A') : this.shipInfo;
        this.updateMailLink();
    }
    /**
     * Updates mail link
     */
    updateMailLink() {
        this.mailLink = `mailto:${this.receivingEmail}?subject=Map%20Purchase&body=`;
        const mailName = `Name: ${this.currentInfo.firstName} ${this.currentInfo.lastName}`;
        const mailAddress = `Address: ${this.currentInfo.shipAddress}, ${this.currentInfo.city}, ${this.currentInfo.state}, ${this.currentInfo.zip}`;
        const mailEmail = `Email: ${this.currentInfo.email}`;
        const mailPhone = `Phone: ${this.currentInfo.phone}`;
        this.mailLink = this.mailLink.concat([mailName, mailAddress, mailEmail, mailPhone].join('%0D%0A')).concat(`%0D%0A%0D%0A${this.shipInfo}`);
    }
    allValid() {
        if (this.email.hasError('email') || this.email.hasError('required') || this.firstName.hasError('required') ||
            this.lastName.hasError('required') || this.address.hasError('required') || this.city.hasError('required') ||
            this.zip.hasError('required') || this.phone.hasError('required') ||
            this.shipInfo === '') {
            return false;
        }
        else {
            return true;
        }
    }
    getErrorMessage() {
        return this.email.hasError('email') ? 'Not a valid email' : '';
    }
}
PurchaseModalComponent.ɵfac = function PurchaseModalComponent_Factory(t) { return new (t || PurchaseModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
PurchaseModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseModalComponent, selectors: [["sci-purchase-modal"]], hostVars: 2, hostBindings: function PurchaseModalComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 4, vars: 2, consts: [[1, "purchase-modal", "wrapper"], [1, "container"], ["class", "screen1", 4, "ngIf"], ["class", "screen2", 4, "ngIf"], [1, "screen1"], [1, "purchase-info"], [1, "purchase-title"], [1, "description"], [1, "purchase-options"], [1, "instructions"], [1, "purchase-form-container"], [1, "purchase-form"], [1, "name-inputs"], ["appearance", "fill", 1, "first-name"], ["placeholder", "Enter first name", "matInput", "", 1, "first-name-input", 3, "formControl", "change"], ["appearance", "fill", 1, "last-name"], ["placeholder", "Enter last name", "matInput", "", 1, "last-name-input", 3, "formControl", "change"], [1, "shipping-input"], ["appearance", "fill", 1, "shipping-address"], ["placeholder", "Enter shipping address", "matInput", "", 1, "shipping-address-input", 3, "formControl", "change"], [1, "address-inputs"], ["appearance", "fill", 1, "city"], ["placeholder", "Enter city", "matInput", "", 1, "city-input", 3, "formControl", "change"], ["appearance", "fill", 1, "state"], [1, "state-input", 3, "formControl", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "zip"], ["placeholder", "xxxxx", "matInput", "", 1, "zip-input", 3, "formControl", "change"], [1, "contact-inputs"], ["appearance", "fill", 1, "email"], ["placeholder", "Enter email address", "matInput", "", 1, "email-input", 3, "formControl", "change"], [4, "ngIf"], ["appearance", "fill", 1, "phone"], ["placeholder", "xxx-xxx-xxxx", "matInput", "", 1, "phone-input", 3, "formControl", "change"], [1, "shipping-info"], [1, "shipping-info-label"], ["matInput", "", 1, "textarea", 3, "change"], [1, "button-container"], [1, "cancel", "button", 3, "click"], [1, "send", "button", 3, "href", "click"], [3, "value"], [1, "screen2"], [1, "content"], [1, "confirmation-header"], [1, "confirmation-text"], [1, "button", 3, "click"]], template: function PurchaseModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PurchaseModalComponent_mat_dialog_content_2_Template, 66, 13, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PurchaseModalComponent_mat_dialog_content_3_Template, 8, 0, "mat-dialog-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.confirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: ["mat-dialog-container {\n  padding: 0 !important;\n}\n  mat-dialog-container mat-dialog-content {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n[_nghost-%COMP%]   .purchase-modal[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .purchase-modal[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]     mat-dialog-content {\n  max-height: unset;\n}\n[_nghost-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 12%;\n    margin-top: -3.5rem;\n    cursor: pointer;\n  }\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-info[_ngcontent-%COMP%], [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  padding: 2rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-info[_ngcontent-%COMP%], [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-info[_ngcontent-%COMP%]   .purchase-options[_ngcontent-%COMP%] {\n  padding-inline-start: 1rem;\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-info[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .name-inputs[_ngcontent-%COMP%], [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .shipping-input[_ngcontent-%COMP%], [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .address-inputs[_ngcontent-%COMP%], [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .contact-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 15%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]     .mat-form-field {\n  width: 100%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]     .mat-form-field .mat-form-field-flex {\n  background-color: inherit;\n  padding: 0;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .first-name[_ngcontent-%COMP%] {\n  width: 45%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .last-name[_ngcontent-%COMP%] {\n  width: 50%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%] {\n  width: 35%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .state[_ngcontent-%COMP%] {\n  width: 40%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .zip[_ngcontent-%COMP%] {\n  width: 15%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  width: 60%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  width: 35%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .shipping-info[_ngcontent-%COMP%] {\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .shipping-info[_ngcontent-%COMP%]   .shipping-info-label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .shipping-info[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 1px;\n  height: calc(100% - 1rem);\n  padding: 0.5rem;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1rem;\n  display: flex;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: inherit;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button.cancel[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n  border: none;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button.send[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border-width: 1px;\n  border-style: solid;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button.send.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n[_nghost-%COMP%]   .screen2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 25rem;\n}\n[_nghost-%COMP%]   .screen2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .confirmation-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .screen2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .confirmation-text[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  width: 60%;\n  text-align: center;\n}\n[_nghost-%COMP%]   .screen2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0.5rem;\n  border-width: 2px;\n  border-style: solid;\n  background-color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wdXJjaGFzZS1tb2RhbC9wdXJjaGFzZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFCQUFBO0FBREY7QUFHRTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUFESjtBQU1FO0VBQ0UsV0FBQTtBQUhKO0FBSUk7RUFDRSxZQUFBO0FBRk47QUFLRTtFQUNFLGlCQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7QUFKSjtBQU1JO0VBSEY7SUFJSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUFISjtBQUNGO0FBTUU7RUFDRSxhQUFBO0FBSko7QUFNSTtFQUhGO0lBSUksc0JBQUE7RUFISjtBQUNGO0FBS0k7O0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFITjtBQUtNO0VBUEY7O0lBUUksV0FBQTtFQUROO0FBQ0Y7QUFLTTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7QUFIUjtBQUtNO0VBQ0UsZ0JBQUE7QUFIUjtBQVFNO0VBREY7SUFFSSxjQUFBO0VBTE47QUFDRjtBQU9NO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBTFI7QUFPUTs7OztFQUlFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFMVjtBQVFRO0VBQ0UsV0FBQTtBQU5WO0FBUVU7RUFDRSx5QkFBQTtFQUNBLFVBQUE7QUFOWjtBQVVRO0VBQ0UsVUFBQTtBQVJWO0FBVVE7RUFDRSxVQUFBO0FBUlY7QUFVUTtFQUNFLFVBQUE7QUFSVjtBQVVRO0VBQ0UsVUFBQTtBQVJWO0FBVVE7RUFDRSxVQUFBO0FBUlY7QUFVUTtFQUNFLFVBQUE7QUFSVjtBQVVRO0VBQ0UsVUFBQTtBQVJWO0FBV1E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBVFY7QUFXVTtFQUNFLHFCQUFBO0FBVFo7QUFXVTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFUWjtBQWFRO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBWFY7QUFhVTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQVhaO0FBYVk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFYZDtBQWNZO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQVpkO0FBY2M7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQVpoQjtBQXNCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBcEJOO0FBc0JNO0VBQ0Usa0JBQUE7QUFwQlI7QUF1Qk07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQXJCUjtBQXdCTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBdEJSIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wdXJjaGFzZS1tb2RhbC9wdXJjaGFzZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRicmVha3BvaW50OiA3NjhweDtcblxuOjpuZy1kZWVwIG1hdC1kaWFsb2ctY29udGFpbmVyIHsgXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcblxuICBtYXQtZGlhbG9nLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG46aG9zdCB7XG4gIC5wdXJjaGFzZS1tb2RhbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG4gIDo6bmctZGVlcCBtYXQtZGlhbG9nLWNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xuICB9XG5cbiAgLmNsb3NlLWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMiU7XG4gICAgICBtYXJnaW4tdG9wOiAtMy41cmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG4gIC5zY3JlZW4xIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5wdXJjaGFzZS1pbmZvLCBcbiAgICAucHVyY2hhc2UtZm9ybS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZzogMnJlbTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wdXJjaGFzZS1pbmZvIHtcbiAgICAgIC5wdXJjaGFzZS1vcHRpb25zIHtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDFyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIH1cbiAgICAgIC5pbnN0cnVjdGlvbnMge1xuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wdXJjaGFzZS1mb3JtLWNvbnRhaW5lciB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgIC5wdXJjaGFzZS1mb3JtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgLm5hbWUtaW5wdXRzLFxuICAgICAgICAuc2hpcHBpbmctaW5wdXQsXG4gICAgICAgIC5hZGRyZXNzLWlucHV0cyxcbiAgICAgICAgLmNvbnRhY3QtaW5wdXRzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBoZWlnaHQ6IDE1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmZpcnN0LW5hbWUge1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIH1cbiAgICAgICAgLmxhc3QtbmFtZSB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2l0eSB7XG4gICAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdGUge1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIH1cbiAgICAgICAgLnppcCB7XG4gICAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgfVxuICAgICAgICAuZW1haWwge1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIH1cbiAgICAgICAgLnBob25lIHtcbiAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNoaXBwaW5nLWluZm8ge1xuICAgICAgICAgIGhlaWdodDogNDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgIC5zaGlwcGluZy1pbmZvLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHRhcmVhIHtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMXJlbSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBcbiAgICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG5cbiAgICAgICAgICAgICYuY2FuY2VsIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2VuZCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IFxuICAgIH1cbiAgfVxuXG4gIC5zY3JlZW4yIHtcbiAgICAuY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMjVyZW07XG5cbiAgICAgIC5jb25maXJtYXRpb24taGVhZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuY29uZmlybWF0aW9uLXRleHQge1xuICAgICAgICBtYXJnaW46IDAgMCAxLjVyZW07XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-purchase-modal',
                templateUrl: './purchase-modal.component.html',
                styleUrls: ['./purchase-modal.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "GEEO":
/*!**************************************************!*\
  !*** ./src/app/shared/utils/global-di-tokens.ts ***!
  \**************************************************/
/*! exports provided: DOCUMENT, WINDOW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]; });


// Reexport document token from angular

/**
 * A DI Token for the global window object
 */
const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Global window object', {
    providedIn: 'root',
    /* istanbul ignore next This is really hard to test as it depends on the global environment */
    factory() {
        // This should pretty much always be available unless
        // we are running in some outdated environment
        if (typeof globalThis === 'object') {
            return globalThis;
        }
        // Check the common places for a global object
        if (typeof global === 'object') { // Node.js environment
            return global;
        }
        else if (typeof window === 'object') { // Browser environment
            return window;
        }
        else if (typeof self === 'object') { // Web worker environment
            return self;
        }
        // One last try - may fail depending on content security policy (CSP) settings
        return (new Function('return this;'))();
    }
});


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
DrawerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawerComponent, selectors: [["sci-drawer"]], ngContentSelectors: _c1, decls: 2, vars: 0, consts: [[1, "main"]], template: function DrawerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  top: 72px;\n  left: 0;\n  z-index: 2;\n  background-color: white;\n  width: 100%;\n  height: calc(100% - 72px);\n  overflow-y: scroll;\n}\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 1rem;\n  max-width: 80rem;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 1rem;\n}\n@media screen and (min-width: 1248px) {\n  [_nghost-%COMP%]   .main[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksZUFBQTtFQUNBLFNBSkU7RUFLRixPQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFKSjtBQU9JO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxSO0FBTVE7RUFQSjtJQVFRLGdCQUFBO0VBSFY7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJhd2VyL2RyYXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxpbmcvYnJlYWtwb2ludHMnO1xuJGJyZWFrcG9pbnQ6IDc2OHB4O1xuXG4kdG9wOiA3MnB4O1xuXG46aG9zdCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogJHRvcDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyR0b3B9KTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cblxuICAgIC5tYWluIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgbWF4LXdpZHRoOiA4MHJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGRlc2t0b3ApIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-drawer',
                templateUrl: './drawer.component.html',
                styleUrls: ['./drawer.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "IV5s":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/carousel/item.component.ts ***!
  \**************************************************************/
/*! exports provided: CarouselItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemComponent", function() { return CarouselItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


const _c0 = ["*"];
class CarouselItemComponent {
    constructor() {
        this.classes = ['sci-carousel-item', 'swiper-slide'];
    }
}
CarouselItemComponent.ɵfac = function CarouselItemComponent_Factory(t) { return new (t || CarouselItemComponent)(); };
CarouselItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselItemComponent, selectors: [["sci-carousel-item"]], hostVars: 2, hostBindings: function CarouselItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
    } }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CarouselItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[_nghost-%COMP%] { display: block; overflow: hidden; }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-carousel-item',
                template: '<ng-content></ng-content>',
                styles: [':host { display: block; overflow: hidden; }'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "JbMY":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/card-gallery/card-gallery.module.ts ***!
  \***********************************************************************/
/*! exports provided: CardGalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardGalleryModule", function() { return CardGalleryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _card_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-gallery.component */ "w1kv");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Meci");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");






class CardGalleryModule {
}
CardGalleryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CardGalleryModule });
CardGalleryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CardGalleryModule_Factory(t) { return new (t || CardGalleryModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CardGalleryModule, { declarations: [_card_gallery_component__WEBPACK_IMPORTED_MODULE_2__["CardGalleryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]], exports: [_card_gallery_component__WEBPACK_IMPORTED_MODULE_2__["CardGalleryComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardGalleryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_card_gallery_component__WEBPACK_IMPORTED_MODULE_2__["CardGalleryComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]
                ],
                exports: [_card_gallery_component__WEBPACK_IMPORTED_MODULE_2__["CardGalleryComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "OOyK":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "yDe4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _state_page_page_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/page/page.state */ "61A3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/directives/breakpoint.directive */ "EpdQ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _shared_components_menu_icon_menu_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/menu-icon/menu-icon.component */ "EbOm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "Jb3d");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../contact/contact.component */ "9lgV");















const _c0 = ["exhibitTrigger"];
const _c1 = ["contactTrigger"];
function HeaderComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ng_container_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.sidenavOpenChange.emit(ctx_r3.sidenavOpen = !ctx_r3.sidenavOpen); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "sci-menu-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx_r0.sidenavOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alternateIcon", ctx_r0.sidenavOpen);
} }
function HeaderComponent_ng_template_4_ng_template_0_button_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " EXPLORE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, _r18.menuClosed) || _r18.menuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r15);
} }
const _c2 = function (a0) { return { "active": a0 }; };
function HeaderComponent_ng_template_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function HeaderComponent_ng_template_4_ng_template_0_Template_button_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return _r6.closeMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " ABOUT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function HeaderComponent_ng_template_4_ng_template_0_Template_div_mouseenter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.mouseEvents($event, 0); })("mouseleave", function HeaderComponent_ng_template_4_ng_template_0_Template_div_mouseleave_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.mouseEvents($event, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "EXHIBIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-menu", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function HeaderComponent_ng_template_4_ng_template_0_Template_div_mouseenter_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r23.mouseEvents($event, 0); })("mouseleave", function HeaderComponent_ng_template_4_ng_template_0_Template_div_mouseleave_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.mouseEvents($event, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "MAPS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "MACROSCOPES");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "BOOKS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "CALL FOR MACROSCOPES");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "VENUES");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "HOSTING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, HeaderComponent_ng_template_4_ng_template_0_button_29_Template, 6, 5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-menu", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "LEARNING CENTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function HeaderComponent_ng_template_4_ng_template_0_Template_div_mouseenter_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r25.mouseEvents($event, 1); })("mouseleave", function HeaderComponent_ng_template_4_ng_template_0_Template_div_mouseleave_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.mouseEvents($event, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " CONTACT US ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-menu", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function HeaderComponent_ng_template_4_ng_template_0_Template_div_mouseenter_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r27.mouseEvents($event, 1); })("mouseleave", function HeaderComponent_ng_template_4_ng_template_0_Template_div_mouseleave_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r28.mouseEvents($event, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "sci-contact", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function HeaderComponent_ng_template_4_ng_template_0_Template_div_mouseenter_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35); return _r16.closeMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 8, _r6.menuClosed) || _r6.menuOpen || _r8.isActive || _r9.isActive || _r10.isActive || _r11.isActive || _r12.isActive || _r13.isActive))("matMenuTriggerFor", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hasBackdrop", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 10, _r16.menuClosed) || _r16.menuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hasBackdrop", false);
} }
function HeaderComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HeaderComponent_ng_template_4_ng_template_0_Template, 43, 14, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r2.drawer$)) == null ? null : tmp_0_0.showDrawer));
} }
/**
 * Page header component
 */
class HeaderComponent {
    constructor() {
        /** HTML classes */
        this.clsName = 'sci-header mat-display-3';
        /**
         * Whether the sidenav button is in open mode
         */
        this.sidenavOpen = false;
        /**
         * Emits whenever the sidenav buttton is clicked
         */
        this.sidenavOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.exhibitStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.contactStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.exhibitStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((payload) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(payload);
        })).subscribe((payload) => {
            var _a;
            if (payload.type === 'mouseenter') {
                if (this.contactTrigger.menuOpen) {
                    this.contactTrigger.closeMenu();
                }
                this.exhibitTrigger.openMenu();
            }
            else {
                (_a = this.exhibitTrigger) === null || _a === void 0 ? void 0 : _a.closeMenu();
            }
        });
        this.contactStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((payload) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(payload);
        })).subscribe((payload) => {
            if (payload.type === 'mouseenter') {
                if (this.exhibitTrigger.menuOpen) {
                    this.exhibitTrigger.closeMenu();
                }
                this.contactTrigger.openMenu();
            }
            else {
                this.contactTrigger.closeMenu();
            }
        });
    }
    mouseEvents(e, index) {
        if (index === 0) {
            this.exhibitStream.next({ type: e.type, event: e, index });
        }
        else {
            this.contactStream.next({ type: e.type, event: e, index });
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["sci-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.exhibitTrigger = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contactTrigger = _t.first);
    } }, hostVars: 2, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { sidenavOpen: "sidenavOpen" }, outputs: { sidenavOpenChange: "sidenavOpenChange" }, decls: 6, vars: 2, consts: [[1, "logo"], ["src", "../../../../assets/logos/logo-places-spaces.svg", "routerLink", "/home", "alt", "logo-places-spaces.svg"], [1, "filler"], [4, "sciBreakpoint", "sciBreakpointElse"], ["desktopNav", ""], [1, "sidenav-toggle"], ["mat-flat-button", "", 3, "click"], [3, "alternateIcon"], [3, "ngIf"], ["mat-button", "", "routerLink", "/about", "routerLinkActive", "active", 1, "nav-item", "about", "mat-display-3", 3, "mouseenter"], ["mat-button", "", 1, "nav-item", "exhibit", "mat-display-3", 3, "ngClass", "matMenuTriggerFor", "mouseenter", "mouseleave"], ["exhibitTrigger", "matMenuTrigger"], ["xPosition", "before", 1, "sci-header-menu", 3, "hasBackdrop"], ["exhibit", "matMenu"], [3, "mouseenter", "mouseleave"], ["mat-button", "", "routerLink", "/maps", "routerLinkActive", "active", 1, "mat-display-3"], ["maps", "routerLinkActive"], ["mat-button", "", "routerLink", "/macroscopes", "routerLinkActive", "active", 1, "mat-display-3"], ["macroscopes", "routerLinkActive"], ["mat-button", "", "routerLink", "/books", "routerLinkActive", "active", 1, "mat-display-3"], ["books", "routerLinkActive"], ["mat-button", "", "routerLink", "/call-for-macroscopes", "routerLinkActive", "active", 1, "mat-display-3"], ["cfm", "routerLinkActive"], ["mat-button", "", "routerLink", "/venues", "routerLinkActive", "active", 1, "mat-display-3"], ["venues", "routerLinkActive"], ["mat-button", "", "routerLink", "/hosting", "routerLinkActive", "active", 1, "mat-display-3"], ["hosting", "routerLinkActive"], ["mat-button", "", "class", "nav-item explore mat-display-3", 3, "active", "matMenuTriggerFor", 4, "ngIf"], [1, "sci-header-menu"], ["explore", "matMenu"], ["mat-button", "", "routerLink", "/learning-center", "routerLinkActive", "active", 1, "mat-display-3"], ["mat-button", "", 1, "nav-item", "contact", "mat-display-3", 3, "matMenuTriggerFor", "mouseenter", "mouseleave"], ["contactTrigger", "matMenuTrigger"], [1, "sci-header-menu", "no-padding", 3, "hasBackdrop"], ["contact", "matMenu"], [1, "contact"], [1, "search", 3, "mouseenter"], ["mat-button", "", 1, "nav-item", "explore", "mat-display-3", 3, "matMenuTriggerFor"], ["exploreTrigger", "matMenuTrigger"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderComponent_ng_container_3_Template, 4, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HeaderComponent_ng_template_4_Template, 2, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sciBreakpoint", "tablet-")("sciBreakpointElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_7__["BreakpointDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _shared_components_menu_icon_menu_icon_component__WEBPACK_IMPORTED_MODULE_9__["MenuIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenu"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: [".scrolled[_nghost-%COMP%] {\n  box-shadow: 0px 5px 10px 0px #e0e0e0cc;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 4.5rem;\n  align-items: center;\n  position: sticky;\n  top: 0;\n  z-index: 3;\n}\n\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 12px 0;\n  margin-left: 1rem;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 3rem;\n  outline: none;\n}\n\n[_nghost-%COMP%]   .sidenav-toggle[_ngcontent-%COMP%], [_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%], [_nghost-%COMP%]   .search[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0 1.5rem;\n}\n\n[_nghost-%COMP%]   .nav-item.exhibit[_ngcontent-%COMP%], [_nghost-%COMP%]   .nav-item.contact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n[_nghost-%COMP%]   .sidenav-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n[_nghost-%COMP%]   .sidenav-toggle.open[_ngcontent-%COMP%] {\n  border-left-width: 1px;\n  border-left-style: solid;\n}\n\n[_nghost-%COMP%]   .sidenav-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: unset;\n  padding: 0;\n}\n\n[_nghost-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n  .sci-header-menu button {\n  width: 100%;\n  height: 3rem;\n  text-align: start;\n}\n\n  .sci-header-menu.no-padding > .mat-menu-content {\n  padding: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHNDQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQURGOztBQUVFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ047O0FBR0U7OztFQUdFLFlBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFLSTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUFITjs7QUFNSTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQUpOOztBQVFFO0VBQ0UsWUFBQTtBQU5KOztBQWNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVhKOztBQWNFO0VBQ0UsY0FBQTtBQVpKIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3QoLnNjcm9sbGVkKSB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAwcHggI2UwZTBlMGNjO1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDM7XG4gIC5sb2dvIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweCAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAzcmVtOyAgLy8gNDhweFxuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuc2lkZW5hdi10b2dnbGUsXG4gIC5uYXYtaXRlbSxcbiAgLnNlYXJjaCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICB9XG5cbiAgLm5hdi1pdGVtLmV4aGliaXQsIC5uYXYtaXRlbS5jb250YWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuc2lkZW5hdi10b2dnbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICYub3BlbiB7XG4gICAgICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xuICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gIH1cblxuICAuZmlsbGVyIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbn1cblxuXG5cbi8vIEFubm95aW5nIGFuZ3VsYXIgb3ZlcmxheXMuLi5cbjo6bmctZGVlcCAuc2NpLWhlYWRlci1tZW51IHtcbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIH1cblxuICAmLm5vLXBhZGRpbmcgPiAubWF0LW1lbnUtY29udGVudCB7XG4gICAgcGFkZGluZzogdW5zZXQ7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_state_page_page_state__WEBPACK_IMPORTED_MODULE_5__["PageState"].drawer)
], HeaderComponent.prototype, "drawer$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'sci-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }], sidenavOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sidenavOpenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], exhibitTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['exhibitTrigger']
        }], contactTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['contactTrigger']
        }], drawer$: [] }); })();


/***/ }),

/***/ "P6ex":
/*!*********************************************************!*\
  !*** ./src/app/core/components/footer/footer.module.ts ***!
  \*********************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.component */ "x0xU");






class FooterModule {
}
FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function FooterModule_Factory(t) { return new (t || FooterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
                ],
                declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
                exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card-gallery/card-gallery.module */ "JbMY");
/* harmony import */ var _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/carousel/carousel.module */ "8yKn");
/* harmony import */ var _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu-icon/menu-icon.module */ "zxUb");
/* harmony import */ var _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/breakpoint.directive */ "EpdQ");







class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_2__["CardGalleryModule"],
            _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
            _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_4__["MenuIconModule"],
        ], _components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_2__["CardGalleryModule"],
        _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
        _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_4__["MenuIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_5__["BreakpointDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_2__["CardGalleryModule"],
        _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
        _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_4__["MenuIconModule"]], exports: [_components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_2__["CardGalleryModule"],
        _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
        _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_4__["MenuIconModule"],
        _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_5__["BreakpointDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_2__["CardGalleryModule"],
                    _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
                    _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_4__["MenuIconModule"],
                ],
                declarations: [
                    _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_5__["BreakpointDirective"]
                ],
                exports: [
                    _components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_2__["CardGalleryModule"],
                    _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
                    _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_4__["MenuIconModule"],
                    _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_5__["BreakpointDirective"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "QUfl":
/*!***************************************************!*\
  !*** ./src/app/core/state/router/router.state.ts ***!
  \***************************************************/
/*! exports provided: RouterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterState", function() { return RouterState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _ngxs_labs_data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs-labs/data/decorators */ "imKX");
/* harmony import */ var _ngxs_labs_data_repositories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs-labs/data/repositories */ "r5NQ");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/router-plugin */ "t6I5");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "yDe4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");












let RouterState = class RouterState extends _ngxs_labs_data_repositories__WEBPACK_IMPORTED_MODULE_4__["NgxsImmutableDataRepository"] {
    constructor(actions$, router) {
        super();
        this.actions$ = actions$;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.navigationStart$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((ev) => ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(ev => ev.url), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$));
        this.navigationEnd$ = this.actions$.pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ofActionCompleted"])(_ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_5__["RouterNavigation"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(ev => ev.action.event.url), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
RouterState.ɵfac = function RouterState_Factory(t) { return new (t || RouterState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RouterState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RouterState, factory: RouterState.ɵfac });
RouterState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_data_decorators__WEBPACK_IMPORTED_MODULE_3__["StateRepository"])(),
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["State"])({
        name: 'routerFacade'
    })
], RouterState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RouterState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Actions"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "StKz":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/drawer-header/drawer-header.component.ts ***!
  \****************************************************************************/
/*! exports provided: DrawerHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerHeaderComponent", function() { return DrawerHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");



class DrawerHeaderComponent {
    constructor() {
        this.className = 'sci-drawer-header';
        this.title = '';
        this.backClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
DrawerHeaderComponent.ɵfac = function DrawerHeaderComponent_Factory(t) { return new (t || DrawerHeaderComponent)(); };
DrawerHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawerHeaderComponent, selectors: [["sci-drawer-header"]], hostVars: 2, hostBindings: function DrawerHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.className);
    } }, inputs: { title: "title" }, outputs: { backClick: "backClick" }, decls: 9, vars: 1, consts: [[1, "drawer-header"], [1, "back-button", 3, "click"], [1, "back-icon"], [1, "back-text"], [1, "title"]], template: function DrawerHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawerHeaderComponent_Template_div_click_1_listener() { return ctx.backClick.emit("back"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-self: flex-start;\n  cursor: pointer;\n  color: #7996a3;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-icon[_ngcontent-%COMP%] {\n  margin-left: -0.5rem;\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-text[_ngcontent-%COMP%] {\n  display: block;\n}\n@media screen and (max-width: 640px) {\n  [_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #757575;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kcmF3ZXItaGVhZGVyL2RyYXdlci1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0FBREY7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNOO0FBQU07RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFFTTtFQUNFLGNBQUE7QUFBUjtBQUNRO0VBRkY7SUFHTSxhQUFBO0VBRVY7QUFDRjtBQUNJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFDTjtBQUFNO0VBQ0UsZ0JBQUE7QUFFUiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJhd2VyLWhlYWRlci9kcmF3ZXItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGluZy9icmVha3BvaW50cyc7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIC5kcmF3ZXItaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgLmJhY2stYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICM3OTk2YTM7XG4gICAgICAuYmFjay1pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIH1cblxuICAgIC8vICAgSGlkZSBiYWNrIHRleHQgb24gdGFibGV0IGFuZCBkZXNrdG9wXG4gICAgICAuYmFjay10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnRpdGxlIHtcbiAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawerHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-drawer-header',
                templateUrl: './drawer-header.component.html',
                styleUrls: ['./drawer-header.component.scss']
            }]
    }], null, { className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "lQ7A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "yDe4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/drawer.animations */ "AY0P");
/* harmony import */ var _constants_route_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/route.animations */ "Xovb");
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/utils */ "fNWo");
/* harmony import */ var _core_actions_app_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/actions/app.actions */ "zqhc");
/* harmony import */ var _core_state_page_page_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/state/page/page.state */ "61A3");
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/components/header/header.component */ "OOyK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/directives/breakpoint.directive */ "EpdQ");
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/components/footer/footer.component */ "x0xU");
/* harmony import */ var _core_components_mobile_header_menu_mobile_header_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/components/mobile-header-menu/mobile-header-menu.component */ "uOwt");
/* harmony import */ var _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/components/drawer/drawer.component */ "IMSB");
/* harmony import */ var _shared_components_gallery_item_gallery_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/components/gallery-item/gallery-item.component */ "UGVg");
/* harmony import */ var _shared_components_makers_subdrawer_makers_subdrawer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/components/makers-subdrawer/makers-subdrawer.component */ "yRFm");
























function AppComponent_sci_mobile_header_menu_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sci-mobile-header-menu", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidenavClose", function AppComponent_sci_mobile_header_menu_3_Template_sci_mobile_header_menu_sidenavClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.sidenavOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_sci_drawer_9_sci_gallery_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sci-gallery-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function AppComponent_sci_drawer_9_sci_gallery_item_4_Template_sci_gallery_item_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.closeDrawer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r5.drawer$)) == null ? null : tmp_0_0.drawerPayload);
} }
function AppComponent_sci_drawer_9_sci_makers_subdrawer_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sci-makers-subdrawer", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function AppComponent_sci_drawer_9_sci_makers_subdrawer_5_Template_sci_makers_subdrawer_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.closeDrawer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    var tmp_0_0 = null;
    var tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("makers", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r6.drawer$)) == null ? null : tmp_0_0.drawerPayload == null ? null : tmp_0_0.drawerPayload.makers)("title", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, ctx_r6.drawer$)) == null ? null : tmp_1_0.drawerPayload == null ? null : tmp_1_0.drawerPayload.title);
} }
function AppComponent_sci_drawer_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sci-drawer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_sci_drawer_9_sci_gallery_item_4_Template, 2, 3, "sci-gallery-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_sci_drawer_9_sci_makers_subdrawer_5_Template, 3, 6, "sci-makers-subdrawer", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@drawerInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx_r2.drawer$)) == null ? null : tmp_0_0.drawerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "venue-gallery-drawer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "makers-drawer");
} }
const _c0 = function (a0) { return { "scrolled": a0 }; };
class AppComponent {
    constructor(activatedRoute, router, zone, store) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.zone = zone;
        this.store = store;
        this.hasPageScrolled = false;
        this.sidenavOpen = false;
        this.footerParameters = {
            phoneNumber: '812-855-9930',
            acknowledgement: 'This exhibit is supported by the National Science Foundation under Grant No. IIS-0238261, CHE-0524661, IIS-0534909 and IIS-0715303, the James S. McDonnell Foundation; Thomson Reuters; the Cyberinfrastructure for Network Science Center, University Information Technology Services, and the School of Library and Information Science, all three at Indiana University. Some of the data used to generate the science maps is from the Web of Science by Thomson Reuters and Scopus by Elsevier. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.'
        };
        this.scrollPositions = {};
    }
    // All external / internal link behaviour.
    customRedirect(e) {
        const target = e.target;
        if (target.nodeName === 'A') {
            const href = target.getAttribute('href');
            if (href) {
                e.preventDefault();
                e.stopPropagation();
                if (Object(_constants_utils__WEBPACK_IMPORTED_MODULE_9__["isExternalURL"])(href) || Object(_constants_utils__WEBPACK_IMPORTED_MODULE_9__["isAssetURL"])(href)) {
                    window.open(href, '_blank');
                }
                else {
                    this.router.navigate([href]);
                }
            }
        }
    }
    ngOnInit() {
        // Scroll retention code
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RoutesRecognized"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pairwise"])()).subscribe(([previous, current]) => {
            var _a, _b;
            const navigation = this.router.getCurrentNavigation();
            console.log(navigation);
            const direction = (_b = (_a = navigation === null || navigation === void 0 ? void 0 : navigation.extras) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.direction;
            if (direction === 'forward') {
                const scrollY = this.sidenavContainer.scrollable.measureScrollOffset('top');
                this.scrollPositions[previous.url] = scrollY;
                this.sidenavContainer.scrollable.scrollTo({ top: 0, left: 0 });
            }
            else if (direction === 'backward') {
                setTimeout(() => {
                    this.sidenavContainer.scrollable.scrollTo({ top: this.scrollPositions[current.url] || 0, left: 0 });
                }, 200);
            }
        });
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
    prepareClass(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.class;
    }
    ngOnDestroy() {
        if (this.windowScrollSubscription) {
            this.windowScrollSubscription.unsubscribe();
        }
    }
    ngAfterViewInit() {
        const cdkScrollable = this.sidenavContainer.scrollable;
        this.windowScrollSubscription = cdkScrollable.elementScrolled().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => {
            return cdkScrollable.measureScrollOffset('top');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((scrollY) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(scrollY);
        })).subscribe((scrollY) => {
            this.zone.run(() => {
                if (scrollY <= 0) {
                    this.hasPageScrolled = false;
                }
                else {
                    this.hasPageScrolled = true;
                }
            });
        });
    }
    closeDrawer() {
        this.store.dispatch(new _core_actions_app_actions__WEBPACK_IMPORTED_MODULE_10__["SetAppState"]({
            drawer: {
                showDrawer: false
            }
        }));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["sci-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sidenavContainer = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_click_HostBindingHandler($event) { return ctx.customRedirect($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, decls: 11, vars: 13, consts: [[1, "header", 3, "ngClass", "sidenavOpen", "sidenavOpenChange"], ["autosize", "", 1, "sidenav-container"], ["autoFocus", "false", "mode", "over", "position", "end", "fixedInViewport", "", "fixedTopGap", "72", 3, "opened", "closedStart"], [3, "sidenavClose", 4, "sciBreakpoint"], [1, "sidenav-content"], [1, "content", 3, "ngClass"], ["outlet", "outlet"], [3, "acknowledgement", "phoneNumber"], [4, "ngIf"], [3, "sidenavClose"], ["drawer", ""], [3, "ngSwitch"], [3, "item", "closed", 4, "ngSwitchCase"], [3, "makers", "title", "closed", 4, "ngSwitchCase"], [3, "item", "closed"], [3, "makers", "title", "closed"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sci-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidenavOpenChange", function AppComponent_Template_sci_header_sidenavOpenChange_0_listener($event) { return ctx.sidenavOpen = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-sidenav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closedStart", function AppComponent_Template_mat_sidenav_closedStart_2_listener() { return ctx.sidenavOpen = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_sci_mobile_header_menu_3_Template, 1, 0, "sci-mobile-header-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-sidenav-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "router-outlet", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "sci-footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AppComponent_sci_drawer_9_Template, 6, 6, "sci-drawer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        var tmp_8_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.hasPageScrolled))("sidenavOpen", ctx.sidenavOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("opened", ctx.sidenavOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sciBreakpoint", "tablet-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r1))("ngClass", ctx.prepareClass(_r1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("acknowledgement", ctx.footerParameters.acknowledgement)("phoneNumber", ctx.footerParameters.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 9, ctx.drawer$)) == null ? null : tmp_8_0.showDrawer);
    } }, directives: [_core_components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_14__["BreakpointDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _core_components_mobile_header_menu_mobile_header_menu_component__WEBPACK_IMPORTED_MODULE_16__["MobileHeaderMenuComponent"], _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_17__["DrawerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], _shared_components_gallery_item_gallery_item_component__WEBPACK_IMPORTED_MODULE_18__["GalleryItemComponent"], _shared_components_makers_subdrawer_makers_subdrawer_component__WEBPACK_IMPORTED_MODULE_19__["MakersSubdrawerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  overflow-y: scroll;\n}\n[_nghost-%COMP%]   .mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n[_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 72px);\n  z-index: unset;\n}\n[_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav-content[_ngcontent-%COMP%] {\n  z-index: unset;\n}\n[_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  margin-bottom: 7.5rem;\n  margin-top: 1rem;\n  min-height: 100%;\n}\n@media (min-width: 1248px) {\n  [_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    max-width: 80rem;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n[_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .content.home-module[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSkY7QUFNRTtFQUNFLHVCQUFBO0FBSko7QUFPRTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQUxKO0FBTUk7RUFDRSxjQUFBO0FBSk47QUFPSTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFMTjtBQU1NO0VBTEY7SUFNSSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUFITjtBQUNGO0FBSU07RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFGUiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1vYmlsZTogNjQwcHg7XG4kZGVza3RvcDogMTI0OHB4O1xuXG4kaGVhZGVyLWhlaWdodDogNzJweDtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIFxuICAubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuc2lkZW5hdi1jb250YWluZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9KTtcbiAgICB6LWluZGV4OiB1bnNldDtcbiAgICAuc2lkZW5hdi1jb250ZW50IHtcbiAgICAgIHotaW5kZXg6IHVuc2V0O1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDcuNXJlbTtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRkZXNrdG9wKSB7XG4gICAgICAgIG1heC13aWR0aDogODByZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgICAmLmhvbWUtbW9kdWxlIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], data: { animation: [
            _constants_route_animations__WEBPACK_IMPORTED_MODULE_8__["slideWithTransform"],
            _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_7__["drawerInOut"]
        ] } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_core_state_page_page_state__WEBPACK_IMPORTED_MODULE_11__["PageState"].drawer)
], AppComponent.prototype, "drawer$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'sci-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [
                    _constants_route_animations__WEBPACK_IMPORTED_MODULE_8__["slideWithTransform"],
                    _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_7__["drawerInOut"]
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, { sidenavContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"]]
        }], drawer$: [], customRedirect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "UGVg":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/gallery-item/gallery-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: GalleryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryItemComponent", function() { return GalleryItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drawer-header/drawer-header.component */ "StKz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../drawer/drawer.component */ "IMSB");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");






function GalleryItemComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryItemComponent_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r4.overlayImage = ctx_r4.item.venueImages[i_r3].lg; return ctx_r4.showOverlay = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r2.sm, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", image_r2.sm);
} }
function GalleryItemComponent_sci_drawer_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-drawer", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryItemComponent_sci_drawer_12_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showOverlay = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.overlayImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r1.overlayImage);
} }
class GalleryItemComponent {
    constructor() {
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showOverlay = false;
        this.overlayImage = '';
    }
    closeDrawer() {
        this.closed.emit('close');
    }
}
GalleryItemComponent.ɵfac = function GalleryItemComponent_Factory(t) { return new (t || GalleryItemComponent)(); };
GalleryItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryItemComponent, selectors: [["sci-gallery-item"]], inputs: { item: "item" }, outputs: { closed: "closed" }, decls: 13, vars: 9, consts: [[1, "gallery-item"], ["title", "Gallery", 3, "backClick"], [1, "header2"], [1, "details"], [1, "thumbnails-container"], ["class", "thumbnail", 3, "click", 4, "ngFor", "ngForOf"], ["class", "sci-drawer", 4, "ngIf"], [1, "thumbnail", 3, "click"], [3, "src", "alt"], [1, "sci-drawer"], ["drawer", "", 1, "drawer"], [1, "close-wrapper"], [1, "close-icon", 3, "click"], [1, "overlay-container"]], template: function GalleryItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "sci-drawer-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backClick", function GalleryItemComponent_Template_sci_drawer_header_backClick_1_listener() { return ctx.closeDrawer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GalleryItemComponent_div_11_Template, 2, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GalleryItemComponent_sci_drawer_12_Template, 7, 2, "sci-drawer", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 5, ctx.item.dateStart, "mediumDate", "+0000"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Photoes By: ", ctx.item.credit, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.item.venueImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOverlay && ctx.overlayImage);
    } }, directives: [_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_1__["DrawerHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_3__["DrawerComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["[_nghost-%COMP%]   .gallery-item[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   .gallery-item[_ngcontent-%COMP%]   .close-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .gallery-item[_ngcontent-%COMP%]   .close-wrapper[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  color: #7997a3;\n  position: absolute;\n  top: 1rem;\n  right: 5%;\n  cursor: pointer;\n  border-radius: 50%;\n}\n[_nghost-%COMP%]   .gallery-item[_ngcontent-%COMP%]   .close-wrapper[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]:hover {\n  background-color: #dce0e2;\n  color: #7997a3;\n}\n[_nghost-%COMP%]   .gallery-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n[_nghost-%COMP%]   .gallery-item[_ngcontent-%COMP%]   .thumbnails-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .gallery-item[_ngcontent-%COMP%]   .thumbnails-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  margin-right: 1rem;\n  cursor: pointer;\n  overflow: hidden;\n}\n@media screen and (min-width: 1248px) {\n  [_nghost-%COMP%]   .gallery-item[_ngcontent-%COMP%]   .thumbnails-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    width: 22%;\n  }\n}\n@media screen and (min-width: 960px) {\n  [_nghost-%COMP%]   .gallery-item[_ngcontent-%COMP%]   .thumbnails-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n@media screen and (min-width: 640px) and (max-width: 960px) {\n  [_nghost-%COMP%]   .gallery-item[_ngcontent-%COMP%]   .thumbnails-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n}\n@media screen and (max-width: 640px) {\n  [_nghost-%COMP%]   .gallery-item[_ngcontent-%COMP%]   .thumbnails-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%] {\n  background-color: black;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .close-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .close-wrapper[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  color: #7997a3;\n  cursor: pointer;\n  border-radius: 50%;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .close-wrapper[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]:hover {\n  background-color: #dce0e2;\n  color: #7997a3;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n  overflow: scroll;\n  background-color: black;\n  padding: 1rem;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9nYWxsZXJ5LWl0ZW0vZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFKSjtBQUtJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUhOO0FBSU07RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUZSO0FBR1E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFEVjtBQU1JO0VBQ0UsbUJBQUE7QUFKTjtBQU1JO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFKTjtBQU1NO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFhQSxnQkFBQTtBQWhCUjtBQUlRO0VBSkY7SUFLSSxVQUFBO0VBRFI7QUFDRjtBQUVRO0VBUEY7SUFRSSxVQUFBO0VBQ1I7QUFDRjtBQUFRO0VBVkY7SUFXSSxVQUFBO0VBR1I7QUFDRjtBQUZRO0VBYkY7SUFjSSxVQUFBO0VBS1I7QUFDRjtBQUVFO0VBQ0UsdUJBRlE7QUFFWjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNOO0FBQ007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFBUTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUVWO0FBR0k7RUFDRSxnQkFBQTtFQUNBLHVCQXJCTTtFQXNCTixhQUFBO0FBRE47QUFFTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUFSIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9nYWxsZXJ5LWl0ZW0vZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1vYmlsZTogNjQwcHg7XG4kdGFibGV0OiA5NjBweDtcbiRkZXNrdG9wOiAxMjQ4cHg7XG5cbjpob3N0IHtcbiAgLmdhbGxlcnktaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLmNsb3NlLXdyYXBwZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIC5jbG9zZS1pY29uIHtcbiAgICAgICAgY29sb3I6ICM3OTk3YTM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxcmVtO1xuICAgICAgICByaWdodDogNSU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlMGUyO1xuICAgICAgICAgIGNvbG9yOiAjNzk5N2EzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRldGFpbHMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG4gICAgLnRodW1ibmFpbHMtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgIC50aHVtYm5haWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGRlc2t0b3ApIHtcbiAgICAgICAgICB3aWR0aDogMjIlO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbW9iaWxlKSBhbmQgKG1heC13aWR0aDogJHRhYmxldCkge1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIH1cbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAkYmdjb2xvcjogYmxhY2s7XG4gIC5zY2ktZHJhd2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdjb2xvcjtcbiAgICAuY2xvc2Utd3JhcHBlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAuY2xvc2UtaWNvbiB7XG4gICAgICAgIGNvbG9yOiAjNzk5N2EzO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZTBlMjtcbiAgICAgICAgICBjb2xvcjogIzc5OTdhMztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-gallery-item',
                templateUrl: './gallery-item.component.html',
                styleUrls: ['./gallery-item.component.scss']
            }]
    }], null, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "WTaD":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/makers-subdrawer/makers-subdrawer.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MakersSubdrawerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakersSubdrawerModule", function() { return MakersSubdrawerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _makers_subdrawer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./makers-subdrawer.component */ "yRFm");
/* harmony import */ var _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../purchase-modal/purchase-modal.module */ "tVZI");






class MakersSubdrawerModule {
}
MakersSubdrawerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MakersSubdrawerModule });
MakersSubdrawerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MakersSubdrawerModule_Factory(t) { return new (t || MakersSubdrawerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_4__["PurchaseModalModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MakersSubdrawerModule, { declarations: [_makers_subdrawer_component__WEBPACK_IMPORTED_MODULE_3__["MakersSubdrawerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_4__["PurchaseModalModule"]], exports: [_makers_subdrawer_component__WEBPACK_IMPORTED_MODULE_3__["MakersSubdrawerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MakersSubdrawerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_4__["PurchaseModalModule"]
                ],
                declarations: [_makers_subdrawer_component__WEBPACK_IMPORTED_MODULE_3__["MakersSubdrawerComponent"]],
                exports: [_makers_subdrawer_component__WEBPACK_IMPORTED_MODULE_3__["MakersSubdrawerComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "WgaZ":
/*!*********************************************************************************!*\
  !*** ./src/app/core/components/mobile-header-menu/mobile-header-menu.module.ts ***!
  \*********************************************************************************/
/*! exports provided: MobileHeaderMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileHeaderMenuModule", function() { return MobileHeaderMenuModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact/contact.module */ "5QFB");
/* harmony import */ var _mobile_header_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-header-menu.component */ "uOwt");







class MobileHeaderMenuModule {
}
MobileHeaderMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MobileHeaderMenuModule });
MobileHeaderMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MobileHeaderMenuModule_Factory(t) { return new (t || MobileHeaderMenuModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _contact_contact_module__WEBPACK_IMPORTED_MODULE_4__["ContactModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MobileHeaderMenuModule, { declarations: [_mobile_header_menu_component__WEBPACK_IMPORTED_MODULE_5__["MobileHeaderMenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _contact_contact_module__WEBPACK_IMPORTED_MODULE_4__["ContactModule"]], exports: [_mobile_header_menu_component__WEBPACK_IMPORTED_MODULE_5__["MobileHeaderMenuComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MobileHeaderMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _contact_contact_module__WEBPACK_IMPORTED_MODULE_4__["ContactModule"]
                ],
                declarations: [_mobile_header_menu_component__WEBPACK_IMPORTED_MODULE_5__["MobileHeaderMenuComponent"]],
                exports: [_mobile_header_menu_component__WEBPACK_IMPORTED_MODULE_5__["MobileHeaderMenuComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Xovb":
/*!***********************************************!*\
  !*** ./src/app/constants/route.animations.ts ***!
  \***********************************************/
/*! exports provided: fader, slider, transformer, routeTransitionAnimations, slideWithTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fader", function() { return fader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformer", function() { return transformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeTransitionAnimations", function() { return routeTransitionAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideWithTransform", function() { return slideWithTransform; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "f7+R");

// apply on main and main should have relative position on it.
const fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY()',
            }),
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1,
                transform: 'scale(1) translateY(0)',
            })),
        ], { optional: true }),
    ]),
]);
const slideTo = (direction) => {
    const optional = { optional: true };
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%',
            }),
        ], optional),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                [direction]: '-100%',
            }),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    [direction]: '100%',
                })),
            ], optional),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    [direction]: '0%',
                })),
            ], optional),
        ]),
    ];
};
const slider = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Maps => Map', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Map => Maps', slideTo('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isLeft', slideTo('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isRight', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isRight => *', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isLeft => *', slideTo('right')),
]);
const transformTo = ({ x = -100, y = 0, rotate = 0 }) => {
    const optional = { optional: true };
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            }),
        ], optional),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: `tranlate(${x}%, ${y}%) rotate(${rotate}deg)`,
            }),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out'),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`,
                }),
            ], optional),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: `translate(0, 0) rotate(0)`,
                })),
            ]),
        ]),
    ];
};
const transformer = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Maps => Map', transformTo({ x: -100, y: -100, rotate: -720 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Map => Maps', transformTo({ x: -100, y: -100, rotate: -720 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isLeft', transformTo({ x: -100, y: -100, rotate: -720 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isRight', transformTo({ x: -100, y: -100, rotate: -720 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isRight => *', transformTo({ x: -100, y: -100, rotate: -720 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isLeft => *', transformTo({ x: -100, y: -100, rotate: -720 })),
]);
const routeTransitionAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Maps => Map, Macroscopes => Macroscope', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%',
            }),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '-100%', opacity: 0 })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '100%', opacity: 0 })),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '0%', opacity: 1 })),
            ]),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Map => Maps, Macroscope => Macroscopes', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            }),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%', opacity: 0 })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%', opacity: 0 })),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%', opacity: 1 })),
            ]),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
]);
const transitions = [
    ['Maps', 'Map'],
    ['Macroscopes', 'Macroscope'],
    ['Hosting', 'LearningMaterial']
];
const forward = transitions.map(item => {
    return [item[0], item[1]].join(' => ');
}).join(', ');
const backward = transitions.map(item => {
    return [item[1], item[0]].join(' => ');
}).join(', ');
const slideWithTransform = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`${forward}`, [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '!', width: '!' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(100%)',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            position: 'fixed',
            top: '72px',
            padding: '0 1rem',
            'margin-top': '1rem',
            'max-width': '80rem',
            background: 'white',
            'z-index': 2,
            width: '100%',
            'overflow-y': 'scroll'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            // query(':leave', [
            //   animate(
            //     '3.3s cubic-bezier(.35,0,.25,1)',
            //     style({ transform: 'translateX(-100%)' })
            //   ),
            // ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s cubic-bezier(.35,0,.25,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))),
        ]),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(`${backward}`, [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '!', width: '!' }),
        // query(':enter', style({ transform: 'translateX(-100%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            position: 'fixed',
            top: '72px',
            padding: '0 1rem',
            'margin-top': '1rem',
            'max-width': '80rem',
            background: 'white',
            'z-index': 2,
            width: '100%',
            'overflow-y': 'scroll'
        })),
        // animate the leave page away
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s cubic-bezier(.35,0,.25,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' })),
            ]),
        ]),
    ]),
]);


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "qvOF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "lQ7A");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/drawer/drawer.module */ "t1/B");
/* harmony import */ var _shared_components_gallery_item_gallery_item_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/gallery-item/gallery-item.module */ "4XY/");
/* harmony import */ var _shared_components_makers_subdrawer_makers_subdrawer_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/makers-subdrawer/makers-subdrawer.module */ "WTaD");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _shared_services_breakpoint_registry_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/breakpoint-registry.service */ "2zxw");




















class AppModule {
    constructor(registry, sanitizer, bpr) {
        const icons = [
            { namespace: 'social', name: 'twitter', url: 'assets/social-media-logos/twitter.svg' },
            { namespace: 'social', name: 'instagram', url: 'assets/social-media-logos/instagram.svg' },
            { namespace: 'social', name: 'email', url: 'assets/social-media-logos/email.svg' },
            { namespace: 'social', name: 'facebook', url: 'assets/social-media-logos/facebook.svg' },
            { namespace: 'search', name: 'search', url: 'assets/icons/search.svg' },
            { namespace: 'search', name: 'search_close', url: 'assets/icons/search_close.svg' },
            { namespace: 'search', name: 'search_off', url: 'assets/icons/search_off.svg' },
            { namespace: 'file', name: 'download', url: 'assets/icons/pdf_download.svg' }
        ];
        for (const icon of icons) {
            const { namespace, name, url: rawUrl } = icon;
            const url = sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
            registry.addSvgIconInNamespace(namespace, name, url);
        }
        this.registerBreakpoints(bpr);
    }
    registerBreakpoints(bpr) {
        bpr.addBreakpoint('desktop', 1248);
        bpr.addBreakpoint('tablet', 960);
        bpr.addBreakpoint('mobile', 640);
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_breakpoint_registry_service__WEBPACK_IMPORTED_MODULE_15__["BreakpointRegistryService"])); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"].forRoot({
                loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                markedOptions: {
                    provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkedOptions"],
                    useValue: {
                        gfm: true
                    }
                }
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"],
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_11__["DrawerModule"],
            _shared_components_gallery_item_gallery_item_module__WEBPACK_IMPORTED_MODULE_12__["GalleryItemModule"],
            _shared_components_makers_subdrawer_makers_subdrawer_module__WEBPACK_IMPORTED_MODULE_13__["MakersSubdrawerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"],
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_11__["DrawerModule"],
        _shared_components_gallery_item_gallery_item_module__WEBPACK_IMPORTED_MODULE_12__["GalleryItemModule"],
        _shared_components_makers_subdrawer_makers_subdrawer_module__WEBPACK_IMPORTED_MODULE_13__["MakersSubdrawerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"].forRoot({
                        loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                        markedOptions: {
                            provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkedOptions"],
                            useValue: {
                                gfm: true
                            }
                        }
                    }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"],
                    _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_11__["DrawerModule"],
                    _shared_components_gallery_item_gallery_item_module__WEBPACK_IMPORTED_MODULE_12__["GalleryItemModule"],
                    _shared_components_makers_subdrawer_makers_subdrawer_module__WEBPACK_IMPORTED_MODULE_13__["MakersSubdrawerModule"]
                ],
                // providers: [
                //   {
                //     provide: RouteReuseStrategy,
                //     useClass: CustomRouteReuseStrategy
                //   }
                // ],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }, { type: _shared_services_breakpoint_registry_service__WEBPACK_IMPORTED_MODULE_15__["BreakpointRegistryService"] }]; }, null); })();


/***/ }),

/***/ "auVE":
/*!*********************************************************!*\
  !*** ./src/app/core/components/header/header.module.ts ***!
  \*********************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "Jb3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contact/contact.module */ "5QFB");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header.component */ "OOyK");










class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _contact_contact_module__WEBPACK_IMPORTED_MODULE_7__["ContactModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _contact_contact_module__WEBPACK_IMPORTED_MODULE_7__["ContactModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _contact_contact_module__WEBPACK_IMPORTED_MODULE_7__["ContactModule"]
                ],
                declarations: [_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]],
                exports: [_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "efN5":
/*!********************************************!*\
  !*** ./src/app/core/state/state.module.ts ***!
  \********************************************/
/*! exports provided: StateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateModule", function() { return StateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _ngxs_labs_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs-labs/data */ "49Uf");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/logger-plugin */ "d963");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/router-plugin */ "t6I5");
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/storage-plugin */ "qORN");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "yDe4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _router_router_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router/router.state */ "QUfl");
/* harmony import */ var _page_page_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/page.state */ "61A3");















const ROOT_STATES = [
    _router_router_state__WEBPACK_IMPORTED_MODULE_7__["RouterState"],
    _page_page_state__WEBPACK_IMPORTED_MODULE_8__["PageState"]
];
class StateModule {
}
StateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StateModule });
StateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StateModule_Factory(t) { return new (t || StateModule)(); }, imports: [[
            // Note: Order of state modules is important!
            // The following described order MUST be maintained
            // 1. NgxsDataPluginModule - Must be before NgxsModule due to injection order bug
            // 2. NgxsModule
            // 3. NgxsStoragePluginModule
            // 4+. Other plugins
            // LAST. NgxsLoggerPluginModule
            _ngxs_labs_data__WEBPACK_IMPORTED_MODULE_1__["NgxsDataPluginModule"].forRoot(),
            _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forRoot(ROOT_STATES, {
                developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
            }),
            _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsStoragePluginModule"].forRoot({
                key: []
            }),
            _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_3__["NgxsRouterPluginModule"].forRoot(),
            _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_2__["NgxsLoggerPluginModule"].forRoot({
                disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StateModule, { imports: [_ngxs_labs_data__WEBPACK_IMPORTED_MODULE_1__["NgxsDataPluginModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["ɵj"], _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsStoragePluginModule"], _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_3__["NgxsRouterPluginModule"], _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_2__["NgxsLoggerPluginModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    // Note: Order of state modules is important!
                    // The following described order MUST be maintained
                    // 1. NgxsDataPluginModule - Must be before NgxsModule due to injection order bug
                    // 2. NgxsModule
                    // 3. NgxsStoragePluginModule
                    // 4+. Other plugins
                    // LAST. NgxsLoggerPluginModule
                    _ngxs_labs_data__WEBPACK_IMPORTED_MODULE_1__["NgxsDataPluginModule"].forRoot(),
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forRoot(ROOT_STATES, {
                        developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
                    }),
                    _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsStoragePluginModule"].forRoot({
                        key: []
                    }),
                    _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_3__["NgxsRouterPluginModule"].forRoot(),
                    _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_2__["NgxsLoggerPluginModule"].forRoot({
                        disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
                    }),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "fNWo":
/*!************************************!*\
  !*** ./src/app/constants/utils.ts ***!
  \************************************/
/*! exports provided: isHttp, isExternalURL, isAssetURL, getSegmentedDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHttp", function() { return isHttp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExternalURL", function() { return isExternalURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAssetURL", function() { return isAssetURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSegmentedDate", function() { return getSegmentedDate; });
const isHttp = (path) => {
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return true;
    }
    else {
        return false;
    }
};
const isExternalURL = (url) => {
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto') || url.startsWith('tel')) {
        return true;
    }
    else {
        return false;
    }
};
const isAssetURL = (url) => {
    return url.lastIndexOf('.') !== -1;
};
const getSegmentedDate = (dateString) => {
    const fullDate = new Date(new Date(dateString).toUTCString());
    const year = fullDate.getUTCFullYear();
    const date = ('0' + fullDate.getUTCDate()).slice(-2);
    const month = ('0' + (fullDate.getUTCMonth() + 1)).slice(-2);
    return [year, month, date];
};


/***/ }),

/***/ "pCxb":
/*!*********************************************!*\
  !*** ./src/app/pages/books/books.module.ts ***!
  \*********************************************/
/*! exports provided: BooksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModule", function() { return BooksModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_components_book_overview_book_overview_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/book-overview/book-overview.module */ "s6z3");
/* harmony import */ var _books_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./books-routing.module */ "42cY");
/* harmony import */ var _books_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books.component */ "ECD4");






class BooksModule {
}
BooksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BooksModule });
BooksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BooksModule_Factory(t) { return new (t || BooksModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _books_routing_module__WEBPACK_IMPORTED_MODULE_3__["BooksRoutingModule"],
            _shared_components_book_overview_book_overview_module__WEBPACK_IMPORTED_MODULE_2__["BookOverviewModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BooksModule, { declarations: [_books_component__WEBPACK_IMPORTED_MODULE_4__["BooksComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _books_routing_module__WEBPACK_IMPORTED_MODULE_3__["BooksRoutingModule"],
        _shared_components_book_overview_book_overview_module__WEBPACK_IMPORTED_MODULE_2__["BookOverviewModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BooksModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _books_routing_module__WEBPACK_IMPORTED_MODULE_3__["BooksRoutingModule"],
                    _shared_components_book_overview_book_overview_module__WEBPACK_IMPORTED_MODULE_2__["BookOverviewModule"]
                ],
                declarations: [_books_component__WEBPACK_IMPORTED_MODULE_4__["BooksComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-google-analytics */ "PKRn");
/* harmony import */ var _components_contact_contact_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contact/contact.module */ "5QFB");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.module */ "P6ex");
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.module */ "auVE");
/* harmony import */ var _components_mobile_header_menu_mobile_header_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mobile-header-menu/mobile-header-menu.module */ "WgaZ");
/* harmony import */ var _state_state_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/state.module */ "efN5");









class CoreModule {
    constructor(other) {
        if (other) {
            throw new Error('CoreModule should only be imported once in the AppModule!');
        }
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12)); }, imports: [[
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__["NgxGoogleAnalyticsModule"].forRoot('UA-54599506-1'),
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__["NgxGoogleAnalyticsRouterModule"],
            _state_state_module__WEBPACK_IMPORTED_MODULE_6__["StateModule"],
            _components_contact_contact_module__WEBPACK_IMPORTED_MODULE_2__["ContactModule"],
            _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__["FooterModule"],
            _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
            _components_mobile_header_menu_mobile_header_menu_module__WEBPACK_IMPORTED_MODULE_5__["MobileHeaderMenuModule"],
        ], _components_contact_contact_module__WEBPACK_IMPORTED_MODULE_2__["ContactModule"],
        _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__["FooterModule"],
        _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
        _components_mobile_header_menu_mobile_header_menu_module__WEBPACK_IMPORTED_MODULE_5__["MobileHeaderMenuModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__["NgxGoogleAnalyticsModule"], ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__["NgxGoogleAnalyticsRouterModule"],
        _state_state_module__WEBPACK_IMPORTED_MODULE_6__["StateModule"],
        _components_contact_contact_module__WEBPACK_IMPORTED_MODULE_2__["ContactModule"],
        _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__["FooterModule"],
        _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
        _components_mobile_header_menu_mobile_header_menu_module__WEBPACK_IMPORTED_MODULE_5__["MobileHeaderMenuModule"]], exports: [_components_contact_contact_module__WEBPACK_IMPORTED_MODULE_2__["ContactModule"],
        _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__["FooterModule"],
        _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
        _components_mobile_header_menu_mobile_header_menu_module__WEBPACK_IMPORTED_MODULE_5__["MobileHeaderMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__["NgxGoogleAnalyticsModule"].forRoot('UA-54599506-1'),
                    ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__["NgxGoogleAnalyticsRouterModule"],
                    _state_state_module__WEBPACK_IMPORTED_MODULE_6__["StateModule"],
                    _components_contact_contact_module__WEBPACK_IMPORTED_MODULE_2__["ContactModule"],
                    _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__["FooterModule"],
                    _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                    _components_mobile_header_menu_mobile_header_menu_module__WEBPACK_IMPORTED_MODULE_5__["MobileHeaderMenuModule"],
                ],
                exports: [
                    _components_contact_contact_module__WEBPACK_IMPORTED_MODULE_2__["ContactModule"],
                    _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__["FooterModule"],
                    _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                    _components_mobile_header_menu_mobile_header_menu_module__WEBPACK_IMPORTED_MODULE_5__["MobileHeaderMenuModule"]
                ]
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "qc/9":
/*!****************************************************!*\
  !*** ./src/app/shared/services/content.service.ts ***!
  \****************************************************/
/*! exports provided: toSlug, ContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSlug", function() { return toSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentService", function() { return ContentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var front_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! front-matter */ "mTk4");
/* harmony import */ var front_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(front_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slugify */ "0Wfq");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "vobO");






function toSlug(str) {
    return slugify__WEBPACK_IMPORTED_MODULE_3___default()(str, { lower: true, strict: true });
}
class ContentService {
    constructor(http) {
        this.http = http;
    }
    getIndex(indexName) {
        if (!indexName.endsWith('.json')) {
            indexName += '.json';
        }
        return this.http.get(`assets/indexes/${indexName}`);
    }
    getContent(contentPath, bodyAttribute = 'body') {
        if (!contentPath.endsWith('.md')) {
            if (!contentPath.endsWith('/readme')) {
                contentPath += '/readme.md';
            }
            else {
                contentPath += '.md';
            }
        }
        return this.http.get(`assets/content/${contentPath}`, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((body) => {
            const data = front_matter__WEBPACK_IMPORTED_MODULE_1___default()(body);
            if (data.body) {
                Object.assign(data.attributes, { [bodyAttribute]: data.body });
            }
            return data.attributes;
        }));
    }
}
ContentService.ɵfac = function ContentService_Factory(t) { return new (t || ContentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ContentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContentService, factory: ContentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "s6z3":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/book-overview/book-overview.module.ts ***!
  \*************************************************************************/
/*! exports provided: BookOverviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookOverviewModule", function() { return BookOverviewModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "PCNd");
/* harmony import */ var _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../carousel/carousel.module */ "8yKn");
/* harmony import */ var _book_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-overview.component */ "2k/r");







class BookOverviewModule {
}
BookOverviewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BookOverviewModule });
BookOverviewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BookOverviewModule_Factory(t) { return new (t || BookOverviewModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"], _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BookOverviewModule, { declarations: [_book_overview_component__WEBPACK_IMPORTED_MODULE_5__["BookOverviewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"], _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_book_overview_component__WEBPACK_IMPORTED_MODULE_5__["BookOverviewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BookOverviewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"], _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
                declarations: [_book_overview_component__WEBPACK_IMPORTED_MODULE_5__["BookOverviewComponent"]],
                exports: [_book_overview_component__WEBPACK_IMPORTED_MODULE_5__["BookOverviewComponent"]]
            }]
    }], null, null); })();


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

/***/ "tVZI":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/purchase-modal/purchase-modal.module.ts ***!
  \***************************************************************************/
/*! exports provided: PurchaseModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseModalModule", function() { return PurchaseModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _purchase_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchase-modal.component */ "Fh0M");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "nIj0");








class PurchaseModalModule {
}
PurchaseModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PurchaseModalModule });
PurchaseModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PurchaseModalModule_Factory(t) { return new (t || PurchaseModalModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PurchaseModalModule, { declarations: [_purchase_modal_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]], exports: [_purchase_modal_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseModalComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_purchase_modal_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseModalComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
                ],
                exports: [_purchase_modal_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseModalComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "uOwt":
/*!************************************************************************************!*\
  !*** ./src/app/core/components/mobile-header-menu/mobile-header-menu.component.ts ***!
  \************************************************************************************/
/*! exports provided: MobileHeaderMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileHeaderMenuComponent", function() { return MobileHeaderMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact/contact.component */ "9lgV");





class MobileHeaderMenuComponent {
    constructor() {
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** HTML class */
        this.clsName = 'sci-mobile-header-menu mat-dispay-3';
    }
}
MobileHeaderMenuComponent.ɵfac = function MobileHeaderMenuComponent_Factory(t) { return new (t || MobileHeaderMenuComponent)(); };
MobileHeaderMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileHeaderMenuComponent, selectors: [["sci-mobile-header-menu"]], hostVars: 2, hostBindings: function MobileHeaderMenuComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, outputs: { sidenavClose: "sidenavClose" }, decls: 18, vars: 7, consts: [[1, "top-border-overlay"], [1, "search"], ["mat-button", "", "routerLink", "/about", 1, "link", "mat-display-3", 3, "routerLinkActive", "click"], ["mat-button", "", "routerLink", "/maps", 1, "link", "mat-display-3", 3, "routerLinkActive", "click"], ["mat-button", "", "routerLink", "/macroscopes", 1, "link", "mat-display-3", 3, "routerLinkActive", "click"], ["mat-button", "", "routerLink", "/books", 1, "link", "mat-display-3", 3, "routerLinkActive", "click"], ["mat-button", "", "routerLink", "/call-for-macroscopes", 1, "link", "mat-display-3", 3, "routerLinkActive", "click"], ["mat-button", "", "routerLink", "/venues", 1, "link", "mat-display-3", 3, "routerLinkActive", "click"], ["mat-button", "", "routerLink", "/hosting", 1, "link", "mat-display-3", 3, "routerLinkActive", "click"], [1, "filler"]], template: function MobileHeaderMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderMenuComponent_Template_button_click_2_listener() { return ctx.sidenavClose.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderMenuComponent_Template_button_click_4_listener() { return ctx.sidenavClose.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MAPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderMenuComponent_Template_button_click_6_listener() { return ctx.sidenavClose.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "MACROSCOPES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderMenuComponent_Template_button_click_8_listener() { return ctx.sidenavClose.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "BOOKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderMenuComponent_Template_button_click_10_listener() { return ctx.sidenavClose.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "CALL FOR MACROSCOPES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderMenuComponent_Template_button_click_12_listener() { return ctx.sidenavClose.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "VENUES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderMenuComponent_Template_button_click_14_listener() { return ctx.sidenavClose.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "HOSTING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "sci-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow-y: auto;\n  border-top-width: 1px;\n  border-top-style: solid;\n}\n[_nghost-%COMP%]   .search[_ngcontent-%COMP%], [_nghost-%COMP%]   .link[_ngcontent-%COMP%] {\n  height: 3rem;\n}\n[_nghost-%COMP%]   .search[_ngcontent-%COMP%], [_nghost-%COMP%]   .link[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[_nghost-%COMP%]   .top-border-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 5.25rem;\n  height: 0.25rem;\n  top: -0.125rem;\n  right: 0;\n}\n[_nghost-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbW9iaWxlLWhlYWRlci1tZW51L21vYmlsZS1oZWFkZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtBQUNKO0FBRUU7RUFDRSxxQkFBQTtBQUFKO0FBR0U7RUFDRSxnQkFBQTtBQURKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7QUFGSjtBQUtFO0VBQ0UsWUFBQTtBQUhKIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbW9iaWxlLWhlYWRlci1tZW51L21vYmlsZS1oZWFkZXItbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuXG4gIC5zZWFyY2gsIC5saW5rIHtcbiAgICBoZWlnaHQ6IDNyZW07XG4gIH1cblxuICAuc2VhcmNoLCAubGluazpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cblxuICAubGluayB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC50b3AtYm9yZGVyLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNS4yNXJlbTtcbiAgICBoZWlnaHQ6IDAuMjVyZW07XG4gICAgdG9wOiAtMC4xMjVyZW07XG4gICAgcmlnaHQ6IDA7XG4gIH1cblxuICAuZmlsbGVyIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileHeaderMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-mobile-header-menu',
                templateUrl: './mobile-header-menu.component.html',
                styleUrls: ['./mobile-header-menu.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { sidenavClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _pages_books_books_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/books/books.module */ "pCxb");





const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomeModule) },
    { path: 'about', loadChildren: () => Promise.all(/*! import() | pages-about-about-module */[__webpack_require__.e("default~pages-about-about-module~pages-venues-venues-module"), __webpack_require__.e("default~pages-about-about-module~pages-hosting-hosting-module"), __webpack_require__.e("pages-about-about-module")]).then(__webpack_require__.bind(null, /*! ./pages/about/about.module */ "UoYK")).then(m => m.AboutModule) },
    { path: 'books', loadChildren: () => _pages_books_books_module__WEBPACK_IMPORTED_MODULE_2__["BooksModule"] },
    {
        matcher: (url) => {
            if (url.length >= 1 && (url[0].path === 'map' || url[0].path === 'maps')) {
                return {
                    consumed: [url[0]]
                };
            }
            return null;
        },
        loadChildren: () => Promise.all(/*! import() | pages-maps-maps-module */[__webpack_require__.e("default~macroscope-macroscope-module~pages-maps-maps-module"), __webpack_require__.e("default~pages-macroscopes-macroscopes-module~pages-maps-maps-module"), __webpack_require__.e("pages-maps-maps-module")]).then(__webpack_require__.bind(null, /*! ./pages/maps/maps.module */ "MWin")).then(m => m.MapsModule),
        data: { animation: 'Maps' }
    },
    {
        matcher: (url) => {
            if (url.length >= 1 && (url[0].path === 'macroscope' || url[0].path === 'macroscopes')) {
                return {
                    consumed: [url[0]]
                };
            }
            return null;
        },
        loadChildren: () => Promise.all(/*! import() | pages-macroscopes-macroscopes-module */[__webpack_require__.e("default~pages-macroscopes-macroscopes-module~pages-maps-maps-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-macroscopes-macroscopes-module")]).then(__webpack_require__.bind(null, /*! ./pages/macroscopes/macroscopes.module */ "FJoV")).then(m => m.MacroscopesModule),
        data: { animation: 'Macroscopes' }
    },
    { path: 'hosting',
        loadChildren: () => Promise.all(/*! import() | pages-hosting-hosting-module */[__webpack_require__.e("default~pages-about-about-module~pages-hosting-hosting-module"), __webpack_require__.e("pages-hosting-hosting-module")]).then(__webpack_require__.bind(null, /*! ./pages/hosting/hosting.module */ "3lz5")).then(m => m.HostingModule),
        data: { animation: 'Hosting' }
    },
    { path: 'venues', loadChildren: () => Promise.all(/*! import() | pages-venues-venues-module */[__webpack_require__.e("default~pages-about-about-module~pages-venues-venues-module"), __webpack_require__.e("pages-venues-venues-module")]).then(__webpack_require__.bind(null, /*! ./pages/venues/venues.module */ "lbFG")).then(m => m.VenuesModule) },
    {
        path: 'learning-center',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-learning-center-learning-center-module */ "pages-learning-center-learning-center-module").then(__webpack_require__.bind(null, /*! ./pages/learning-center/learning-center.module */ "42h0")).then(m => m.LearningCenterModule)
    },
    {
        path: 'call-for-macroscopes',
        loadChildren: () => Promise.all(/*! import() | pages-call-for-macroscopes-call-for-macroscopes-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-call-for-macroscopes-call-for-macroscopes-module")]).then(__webpack_require__.bind(null, /*! ./pages/call-for-macroscopes/call-for-macroscopes.module */ "uXZP")).then(m => m.CallForMacroscopesModule)
    },
    {
        path: 'learning-material',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-learning-material-learning-material-module */ "pages-learning-material-learning-material-module").then(__webpack_require__.bind(null, /*! ./pages/learning-material/learning-material.module */ "TzDt")).then(m => m.LearningMaterialModule),
        data: { animation: 'LearningMaterial' }
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "w1kv":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/card-gallery/card-gallery.component.ts ***!
  \**************************************************************************/
/*! exports provided: CardGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardGalleryComponent", function() { return CardGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Meci");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");





function CardGalleryComponent_h3_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.galleryTitle);
} }
function CardGalleryComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardGalleryComponent_mat_card_2_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const card_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.handleClick(card_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.getImageSource(card_r3.slug), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", card_r3.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r3.body);
} }
function CardGalleryComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.getImageSource(card_r6.slug), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", card_r6.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r6.title);
} }
class CardGalleryComponent {
    constructor() {
        /** HTML class name */
        this.clsName = 'sci-card-gallery';
        this.galleryTitle = '';
        this.cardClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    getImageSource(slug) {
        return `assets/${this.directory}/${slug}/image.png`;
    }
    handleClick(card) {
        this.cardClicked.emit();
    }
}
CardGalleryComponent.ɵfac = function CardGalleryComponent_Factory(t) { return new (t || CardGalleryComponent)(); };
CardGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardGalleryComponent, selectors: [["sci-card-gallery"]], hostVars: 2, hostBindings: function CardGalleryComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { galleryTitle: "galleryTitle", cards: "cards", directory: "directory" }, outputs: { cardClicked: "cardClicked" }, decls: 4, vars: 3, consts: [["class", "title", 4, "ngIf"], [1, "card-gallery"], ["class", "desktop-card card", 3, "click", 4, "ngFor", "ngForOf"], ["class", "mobile-card card", 4, "ngFor", "ngForOf"], [1, "title"], [1, "desktop-card", "card", 3, "click"], ["mat-card-image", "", 3, "src", "alt"], [1, "card-header"], [1, "mobile-card", "card"], [1, "mobile-content"], [1, "mobile-image-container"], [1, "mobile-image", 3, "src", "alt"], [1, "card-header", "mobile-header"], [1, "mobile-icon"]], template: function CardGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardGalleryComponent_h3_0_Template, 2, 1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardGalleryComponent_mat_card_2_Template, 7, 4, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardGalleryComponent_mat_card_3_Template, 8, 3, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.galleryTitle != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: ["[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .desktop-card[_ngcontent-%COMP%] {\n  width: 18rem;\n  margin: 0.5rem;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .desktop-card[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .mobile-card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1rem;\n  padding: 0rem;\n  height: 4rem;\n}\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .mobile-card[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .mobile-card[_ngcontent-%COMP%]   .mobile-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 0.5rem;\n}\n[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .mobile-card[_ngcontent-%COMP%]   .mobile-content[_ngcontent-%COMP%]   .mobile-header[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: left;\n  white-space: nowrap;\n  padding: 1rem;\n  line-height: 1.75rem;\n  height: 100%;\n}\n[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .mobile-card[_ngcontent-%COMP%]   .mobile-content[_ngcontent-%COMP%]   .mobile-image-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 5rem;\n}\n[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .mobile-card[_ngcontent-%COMP%]   .mobile-content[_ngcontent-%COMP%]   .mobile-image-container[_ngcontent-%COMP%]   .mobile-image[_ngcontent-%COMP%] {\n  object-fit: cover;\n  height: 100%;\n  width: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jYXJkLWdhbGxlcnkvY2FyZC1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFGSjtBQUlJO0VBQ0UsZUFBQTtBQUZOO0FBSU07RUFDRSxlQUFBO0FBRlI7QUFNSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBSk47QUFNTTtFQUpGO0lBS0ksYUFBQTtFQUhOO0FBQ0Y7QUFNSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBSk47QUFNTTtFQU5GO0lBT0ksYUFBQTtFQUhOO0FBQ0Y7QUFLTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFIUjtBQUtRO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUhWO0FBTVE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUpWO0FBTVU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSloiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhcmQtZ2FsbGVyeS9jYXJkLWdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbW9iaWxlOiA2NDBweDtcblxuOmhvc3Qge1xuICAuY2FyZC1nYWxsZXJ5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogLTAuNXJlbTtcblxuICAgIC5jYXJkIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kZXNrdG9wLWNhcmQge1xuICAgICAgd2lkdGg6IDE4cmVtO1xuICAgICAgbWFyZ2luOiAwLjVyZW07XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1vYmlsZS1jYXJkIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIHBhZGRpbmc6IDByZW07XG4gICAgICBoZWlnaHQ6IDRyZW07XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5tb2JpbGUtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG5cbiAgICAgICAgLm1vYmlsZS1oZWFkZXIge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2JpbGUtaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDVyZW07XG5cbiAgICAgICAgICAubW9iaWxlLWltYWdlIHtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-card-gallery',
                templateUrl: './card-gallery.component.html',
                styleUrls: ['./card-gallery.component.scss']
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], galleryTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cards: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "x0xU":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");




/**
 * App footer
 */
class FooterComponent {
    constructor() {
        this.facebook = 'https://www.facebook.com/mappingscience';
        this.twitter = 'https://www.twitter.com/mappingscience';
        this.instagram = 'https://www.instagram.com/cns_at_iu';
        /** HTML class */
        this.clsName = 'sci-footer';
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["sci-footer"]], hostVars: 2, hostBindings: function FooterComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { phoneNumber: "phoneNumber", acknowledgement: "acknowledgement" }, decls: 26, vars: 5, consts: [[1, "contact"], [1, "social"], ["mat-icon-button", "", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "twitter", 3, "href"], ["svgIcon", "social:twitter", 1, "icon"], ["mat-icon-button", "", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "facebook", 3, "href"], ["svgIcon", "social:facebook", 1, "icon"], ["mat-icon-button", "", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "instagram", 3, "href"], ["svgIcon", "social:instagram", 1, "icon"], ["mat-icon-button", "", "href", "mailto:cnscntr@indiana.edu", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "email"], [1, "icon", "font"], ["mat-icon-button", "", "href", "https://goo.gl/maps/yFFVMmMRzBNYU1pq8", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "map"], [1, "filler"], [1, "phone"], [1, "text", "mat-display-2"], [1, "acknowledgement", "mat-small"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.acknowledgement, "\n");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow-x: hidden;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 3rem;\n  flex-direction: row;\n  align-items: center;\n  padding: 0 1rem 0 0.25rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  padding: 0 0.75rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #7997a3;\n  background-color: #ffffff;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .icon.font[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding: 0 0 0 0.75rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .icon.font[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  font-size: 3rem;\n  line-height: 3rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n[_nghost-%COMP%]   .acknowledgement[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .acknowledgement[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3NjaW1hcHMvc3JjL3N0eWxpbmcvX2ljb24uc2NzcyIsInByb2plY3RzL3NjaW1hcHMvc3JjL3N0eWxpbmcvX3NjcmVlbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBQTtFQUVBLGtCQUFBO0FBSEY7QUFLRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUhKO0FBS0k7RUFDRSxrQkFBQTtBQUhOO0FBS007RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUFIUjtBQUtRO0VBQ0MsY0FBQTtFQUNBLHlCQUFBO0FBSFQ7QUFNTTtFQUNFLGVBQUE7QUFKUjtBQVFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFOTjtBQVNNO0VBQ0Usc0JBQUE7QUFQUjtBQVNNO0VBQ0UsZUFBQTtBQVBSO0FBV0k7RUM3Q0YsV0Q4Q3VCO0VDN0N2QixZRDZDdUI7RUM1Q3ZCLGVENEN1QjtFQzNDdkIsaUJEMkN1QjtBQU56QjtBQVNJO0VBQ0UsWUFBQTtBQVBOO0FBV0U7RUFDRSxhQUFBO0FBVEo7QUU1Qkk7RUZ5Q0E7SUFDRSxhQUFBO0VBVko7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdpY29uJztcbkB1c2UgJ3NjcmVlbic7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8vIG1hcmdpbi10b3A6IDcuNXJlbTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG4gIC5jb250YWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxcmVtIDAgMC4yNXJlbTtcbiAgICBcbiAgICAuc29jaWFsIHtcbiAgICAgIHBhZGRpbmc6IDAgMC43NXJlbTtcblxuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICAgICAgICAuaWNvbjpob3ZlciB7XG4gICAgICAgICBjb2xvcjogIzc5OTdhMztcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuaWNvbi5mb250IHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5waG9uZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAvLyBwYWRkaW5nOiAwLjc1cmVtIDAgMC43NXJlbSAwLjc1cmVtO1xuXG4gICAgICAudGV4dCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDAuNzVyZW07XG4gICAgICB9XG4gICAgICAuaWNvbi5mb250IHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgIEBpbmNsdWRlIGljb24uc2l6ZSgzcmVtKTtcbiAgICB9XG5cbiAgICAuZmlsbGVyIHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG4gIH1cblxuICAuYWNrbm93bGVkZ2VtZW50IHtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICB9XG5cbiAgQGluY2x1ZGUgc2NyZWVuLmJyZWFrcG9pbnQobW9iaWxlKSB7XG4gICAgLmFja25vd2xlZGdlbWVudCB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgIH1cbiAgfVxufVxuIiwiXG5AbWl4aW4gc2l6ZSgkc2l6ZSkge1xuICB3aWR0aDogJHNpemU7XG4gIGhlaWdodDogJHNpemU7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcbn1cbiIsIiRicmVha3BvaW50LW1vYmlsZTogNzY4cHg7XG4kYnJlYWtwb2ludC10YWJsZXQ6IDk2MHB4O1xuXG4kLWJyZWFrcG9pbnQtcXVlcmllczogKFxuICBtb2JpbGU6IFwiKG1heC13aWR0aDogI3skYnJlYWtwb2ludC1tb2JpbGV9KVwiLFxuICB0YWJsZXQ6XG4gICAgXCIobWluLXdpZHRoOiAjeyRicmVha3BvaW50LW1vYmlsZSArIDFweH0pIGFuZCAobWF4LXdpZHRoOiAjeyRicmVha3BvaW50LXRhYmxldH0pXCIsXG4gIGRlc2t0b3A6IFwiKG1pbi13aWR0aDogI3ticmVha3BvaW50LXRhYmxldCArIDFweH0pXCIsXG4pO1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkdHlwZXMuLi4pIHtcbiAgJHF1ZXJpZXM6ICgpO1xuICBAZWFjaCAkdHlwZSBpbiAkdHlwZXMge1xuICAgICRxdWVyeTogbWFwLWdldCgkLWJyZWFrcG9pbnQtcXVlcmllcywgJHR5cGUpO1xuICAgIEBpZiAkcXVlcnkge1xuICAgICAgJHF1ZXJpZXM6IGFwcGVuZCgkcXVlcmllcywgJHF1ZXJ5LCAkc2VwYXJhdG9yOiBjb21tYSk7XG4gICAgfVxuICB9XG5cbiAgQGlmIGxlbmd0aCgkcXVlcmllcykgPiAwIHtcbiAgICBAbWVkaWEgI3skcXVlcmllc30ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], phoneNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], acknowledgement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "yRFm":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/makers-subdrawer/makers-subdrawer.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MakersSubdrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakersSubdrawerComponent", function() { return MakersSubdrawerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");




function MakersSubdrawerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const maker_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", maker_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, maker_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](maker_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](maker_r1.body);
} }
/**
 * Subdrawer of the item drawer containing maker information
 */
class MakersSubdrawerComponent {
    constructor() {
        /** HTML class name */
        this.clsName = 'sci-makers-subdrawer';
        /**
         * Emitted when the drawer closes
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
MakersSubdrawerComponent.ɵfac = function MakersSubdrawerComponent_Factory(t) { return new (t || MakersSubdrawerComponent)(); };
MakersSubdrawerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MakersSubdrawerComponent, selectors: [["sci-makers-subdrawer"]], hostVars: 2, hostBindings: function MakersSubdrawerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { title: "title", makers: "makers" }, outputs: { closed: "closed" }, decls: 10, vars: 2, consts: [[1, "details-container"], [1, "back-button", 3, "click"], [1, "back-icon"], [1, "makers-title"], [1, "maker-container"], ["class", "maker-info", 4, "ngFor", "ngForOf"], [1, "maker-info"], ["alt", "maker image", 1, "thumbnail", 3, "src"], [1, "info"], [1, "name"], [1, "job"], [1, "bio"]], template: function MakersSubdrawerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MakersSubdrawerComponent_Template_div_click_1_listener() { return ctx.closed.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MakersSubdrawerComponent_div_9_Template, 10, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Makers: ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.makers);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  z-index: 2;\n  align-items: center;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  margin-bottom: 2rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-icon[_ngcontent-%COMP%] {\n  margin-left: -0.5rem;\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%]   .maker-info[_ngcontent-%COMP%] {\n  display: flex;\n  width: 50%;\n  padding: 1rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%]   .maker-info[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-bottom: 2rem;\n  }\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%]   .maker-info[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  height: 6rem;\n  width: auto;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%]   .maker-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 3rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%]   .maker-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%]   .maker-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%]   .maker-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tYWtlcnMtc3ViZHJhd2VyL21ha2Vycy1zdWJkcmF3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFHQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFIRjtBQU1JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSk47QUFNTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQVFJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFOTjtBQVFNO0VBSkY7SUFLSSxzQkFBQTtFQUxOO0FBQ0Y7QUFPTTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUxSO0FBT1E7RUFMRjtJQU1JLFdBQUE7SUFDQSxvQkFBQTtFQUpSO0FBQ0Y7QUFNUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBSlY7QUFPUTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFMVjtBQU9VO0VBSkY7SUFLSSxnQkFBQTtFQUpWO0FBQ0Y7QUFNVTtFQUNFLGlCQUFBO0FBSlo7QUFPVTtFQUNFLG1CQUFBO0FBTFoiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21ha2Vycy1zdWJkcmF3ZXIvbWFrZXJzLXN1YmRyYXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRicmVha3BvaW50OiA3NjhweDtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gIC8vIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmRldGFpbHMtY29udGFpbmVyIHtcbiAgICAuYmFjay1idXR0b24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgICAuYmFjay1pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWFrZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAubWFrZXItaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50KSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudGh1bWJuYWlsIHtcbiAgICAgICAgICBoZWlnaHQ6IDZyZW07XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJpbyB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MakersSubdrawerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-makers-subdrawer',
                templateUrl: './makers-subdrawer.component.html',
                styleUrls: ['./makers-subdrawer.component.scss']
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], makers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zqhc":
/*!*********************************************!*\
  !*** ./src/app/core/actions/app.actions.ts ***!
  \*********************************************/
/*! exports provided: SetAppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAppState", function() { return SetAppState; });
class SetAppState {
    constructor(payload) {
        this.payload = payload;
    }
}
SetAppState.type = '[AppState] set';


/***/ }),

/***/ "zxUb":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/menu-icon/menu-icon.module.ts ***!
  \*****************************************************************/
/*! exports provided: MenuIconModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuIconModule", function() { return MenuIconModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _menu_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-icon.component */ "EbOm");




class MenuIconModule {
}
MenuIconModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MenuIconModule });
MenuIconModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MenuIconModule_Factory(t) { return new (t || MenuIconModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MenuIconModule, { declarations: [_menu_icon_component__WEBPACK_IMPORTED_MODULE_2__["MenuIconComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_menu_icon_component__WEBPACK_IMPORTED_MODULE_2__["MenuIconComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MenuIconModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                declarations: [_menu_icon_component__WEBPACK_IMPORTED_MODULE_2__["MenuIconComponent"]],
                exports: [_menu_icon_component__WEBPACK_IMPORTED_MODULE_2__["MenuIconComponent"]]
            }]
    }], null, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map