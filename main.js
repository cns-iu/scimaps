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
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_1__["MarkdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _carousel_item_component__WEBPACK_IMPORTED_MODULE_4__["CarouselItemComponent"], _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_5__["BreakpointDirective"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%], [_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n  width: 50%;\n  max-width: 600px;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%] {\n  padding-right: 3rem;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .publisher[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .markdown.partial[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%] {\n  display: none;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 1rem;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin: 1rem 1rem 0 0;\n  padding: 0.5rem;\n  border: 1px solid;\n  text-decoration: none;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #8DC63F;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%], [_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .markdown.full[_ngcontent-%COMP%] {\n    display: none;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .markdown.partial[_ngcontent-%COMP%] {\n    display: initial;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%] {\n    display: initial;\n  }\n  [_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-right: 0;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ib29rLW92ZXJ2aWV3L2Jvb2stb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRkY7QUFJRTs7RUFFRSxVQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUtFO0VBQ0UsbUJBQUE7QUFISjtBQUtJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSE47QUFNSTtFQUNFLG1CQUFBO0FBSk47QUFPSTtFQUNFLGFBQUE7QUFMTjtBQVFJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFOTjtBQVNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUE47QUFTTTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQVBSO0FBVUk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFSTjtBQVVNO0VBQ0UsMEJBQUE7QUFSUjtBQWFFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBWEo7QUFZSTtFQUNFLFdBQUE7QUFWTjtBQVlNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBVlI7QUFZUTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQVZWO0FBZ0JFO0VBM0VGO0lBNEVJLDhCQUFBO0VBYkY7RUFlRTs7SUFFRSxXQUFBO0VBYko7RUFnQkU7SUFDRSxnQkFBQTtFQWRKO0VBZ0JJO0lBQ0UsYUFBQTtFQWROO0VBaUJJO0lBQ0UsZ0JBQUE7RUFmTjtFQWtCSTtJQUNFLGdCQUFBO0VBaEJOO0VBb0JFO0lBQ0UsbUJBQUE7RUFsQko7QUFDRjtBQXFCRTtFQUNFO0lBQ0Usc0JBQUE7RUFuQko7RUFxQkk7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VBbkJOO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Jvb2stb3ZlcnZpZXcvYm9vay1vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzaW5nbGUtY29sdW1uLW1heC13aWR0aDogNzY4cHg7XG4kYnV0dG9uLXNwYW4tbWF4LXdpZHRoOiA0ODBweDtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcblxuICAudGV4dC1jb2x1bW4sXG4gIC5jYXJvdXNlbC1jb2x1bW4ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgfVxuXG4gIC50ZXh0LWNvbHVtbiB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcblxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIH1cblxuICAgIC5wdWJsaXNoZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbiAgICAubWFya2Rvd24ucGFydGlhbCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5zaG93LW1vcmUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG5cbiAgICAgIC5idXR0b24ge1xuICAgICAgICBtYXJnaW46IDFyZW0gMXJlbSAwIDA7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmxpbmsge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICM4REM2M0Y7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2Fyb3VzZWwtY29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIC5jYXJvdXNlbCB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRzaW5nbGUtY29sdW1uLW1heC13aWR0aCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblxuICAgIC50ZXh0LWNvbHVtbixcbiAgICAuY2Fyb3VzZWwtY29sdW1uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC50ZXh0LWNvbHVtbiB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuXG4gICAgICAubWFya2Rvd24uZnVsbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5tYXJrZG93bi5wYXJ0aWFsIHtcbiAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICAgIH1cblxuICAgICAgLnNob3ctbW9yZSB7XG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhcm91c2VsLWNvbHVtbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnV0dG9uLXNwYW4tbWF4LXdpZHRoKSB7XG4gICAgLnRleHQtY29sdW1uIC5saW5rcyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAuYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
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






let PageState = class PageState extends _ngxs_labs_data_repositories__WEBPACK_IMPORTED_MODULE_3__["NgxsImmutableDataRepository"] {
};
PageState.ɵfac = function PageState_Factory(t) { return ɵPageState_BaseFactory(t || PageState); };
PageState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PageState, factory: PageState.ɵfac });
PageState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_data_decorators__WEBPACK_IMPORTED_MODULE_2__["StateRepository"])(),
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["State"])({
        name: 'page',
        defaults: {
            placeholder: 0
        }
    })
], PageState);

const ɵPageState_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](PageState);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PageState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();


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
    toBookUI(item) {
        const book = {
            title: item.title,
            amazonLink: item.amazonLink,
            pdfLink: item.pdfLink,
            publisher: item.publisher,
            author: item.author,
            body: item.body,
            slug: Object(_shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["toSlug"])(item.title),
            images: item.bookImages
        };
        book.images = this.getImageSource(book);
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
            }).map((book) => {
                const authorNames = book.author
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
                return this.toBookUI(Object.assign(Object.assign({}, book), { author: authorNames.join(', ') }));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Learn about CNS:\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "cns.iu.edu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Visit us on social media:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactComponent {
    constructor() {
        this.clsName = 'sci-contact mat-display-3';
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["sci-contact"]], hostVars: 2, hostBindings: function ContactComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 13, vars: 2, consts: [[1, "section-1"], ["href", "mailto:cnscntr@indiana.edu", "target", "_blank", "rel", "noopener noreferrer", 1, "email"], ["svgIcon", "social:email", 1, "icon"], [1, "phone"], [1, "icon"], ["class", "section-2", 4, "sciBreakpoint", "sciBreakpointElse"], ["desktop", ""], [1, "section-2"], ["href", "https://cns.iu.edu", "target", "_blank", "rel", "noopener noreferrer", 1, "website"], [1, "link"], [1, "social"], [1, "social-icons"], ["svgIcon", "social:twitter", 1, "icon"], ["svgIcon", "social:facebook", 1, "icon"], ["svgIcon", "social:instagram", 1, "icon"], [1, "section-3"], [1, "website"], ["href", "https://cns.iu.edu", "target", "_blank", "rel", "noopener noreferrer", 1, "link"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ContactComponent_div_10_Template, 15, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ContactComponent_ng_template_11_Template, 13, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "tablet-")("sciBreakpointElse", _r1);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_2__["BreakpointDirective"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 15rem;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .section-1[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-2[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem 1rem;\n}\n[_nghost-%COMP%]   .section-1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 3rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .section-2[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n[_nghost-%COMP%]   .section-2[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .section-2[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n[_nghost-%COMP%]   .section-2[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  font-size: 2.25rem;\n  line-height: 2.25rem;\n  border: 1px solid;\n  border-radius: 0.25rem;\n}\n[_nghost-%COMP%]   .section-2[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:not(:last-child), [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0.5rem;\n}\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .section-1[_ngcontent-%COMP%] {\n    padding-top: 1rem;\n    padding-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvc2NpbWFwcy9zcmMvc3R5bGluZy9faWNvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQUtFO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBSko7QUFNSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUpOO0FBUUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFOSjtBQVNFO0VBQ0Usc0JBQUE7QUFQSjtBQVNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBUE47QUFTTTtFQ3JDSixjRHNDeUI7RUNyQ3pCLGVEcUN5QjtFQ3BDekIsa0JEb0N5QjtFQ25DekIsb0JEbUN5QjtFQUNuQixpQkFBQTtFQUNBLHNCQUFBO0FBSlI7QUFNUTtFQUNFLG9CQUFBO0FBSlY7QUFVRTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtFQVJKO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdpY29uJztcblxuJHRhYmxldDogOTYwcHg7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAxNXJlbTtcblxuICBhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLnNlY3Rpb24tMSwgLnNlY3Rpb24tMiwgLnNlY3Rpb24tMyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuXG4gICAgJiA+ICoge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5zZWN0aW9uLTIge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG5cbiAgLnNlY3Rpb24tMiwgLnNlY3Rpb24tMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcblxuICAgIC5zb2NpYWwtaWNvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgIC5pY29uIHtcbiAgICAgICAgQGluY2x1ZGUgaWNvbi5zaXplKDIuMjVyZW0pO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcblxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcbiAgICAuc2VjdGlvbi0xIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuICB9XG59XG4iLCJcbkBtaXhpbiBzaXplKCRzaXplKSB7XG4gIHdpZHRoOiAkc2l6ZTtcbiAgaGVpZ2h0OiAkc2l6ZTtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgbGluZS1oZWlnaHQ6ICRzaXplO1xufVxuIl19 */"], changeDetection: 0 });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directives/breakpoint.directive */ "EpdQ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _shared_components_menu_icon_menu_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/menu-icon/menu-icon.component */ "EbOm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "Jb3d");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contact/contact.component */ "9lgV");










function HeaderComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.sidenavOpenChange.emit(ctx_r3.sidenavOpen = !ctx_r3.sidenavOpen); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "sci-menu-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx_r0.sidenavOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alternateIcon", ctx_r0.sidenavOpen);
} }
function HeaderComponent_ng_template_4_button_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " EXPLORE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, _r11.menuClosed) || _r11.menuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r8);
} }
function HeaderComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ABOUT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " THE EXHIBIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "MAPS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "MACROSCOPES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "BOOKS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "CALL FOR MACROSCOPES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "VENUES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "HOSTING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HeaderComponent_ng_template_4_button_22_Template, 6, 5, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-menu", 11, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "LEARNING CENTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " CONTACT US ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-menu", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "sci-contact", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 27);
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, _r5.menuClosed) || _r5.menuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 9, _r9.menuClosed) || _r9.menuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r10);
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
        this.sidenavOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["sci-header"]], hostVars: 2, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { sidenavOpen: "sidenavOpen" }, outputs: { sidenavOpenChange: "sidenavOpenChange" }, decls: 6, vars: 2, consts: [[1, "logo"], ["src", "../../../../assets/logos/logo-places-spaces.svg", "routerLink", "/home", "alt", "logo-places-spaces.svg"], [1, "filler"], [4, "sciBreakpoint", "sciBreakpointElse"], ["desktopNav", ""], [1, "sidenav-toggle"], ["mat-flat-button", "", 3, "click"], [3, "alternateIcon"], ["mat-button", "", "routerLink", "/about", "routerLinkActive", "active", 1, "nav-item", "about", "mat-display-3"], ["mat-button", "", 1, "nav-item", "exhibit", "mat-display-3", 3, "matMenuTriggerFor"], ["exhibitTrigger", "matMenuTrigger"], [1, "sci-header-menu"], ["exhibit", "matMenu"], ["mat-button", "", "routerLink", "/maps", "routerLinkActive", "active", 1, "mat-display-3"], ["mat-button", "", "routerLink", "/macroscopes", "routerLinkActive", "active", 1, "mat-display-3"], ["mat-button", "", "routerLink", "/books", "routerLinkActive", "active", 1, "mat-display-3"], ["mat-button", "", "routerLink", "/call-for-macroscopes", "routerLinkActive", "active", 1, "mat-display-3"], ["mat-button", "", "routerLink", "/venues", "routerLinkActive", "active", 1, "mat-display-3"], ["mat-button", "", "routerLink", "/hosting", "routerLinkActive", "active", 1, "mat-display-3"], ["mat-button", "", "class", "nav-item explore mat-display-3", 3, "active", "matMenuTriggerFor", 4, "ngIf"], ["explore", "matMenu"], ["mat-button", "", "routerLink", "/learning-center", "routerLinkActive", "active", 1, "mat-display-3"], ["mat-button", "", 1, "nav-item", "contact", "mat-display-3", 3, "matMenuTriggerFor"], ["contactTrigger", "matMenuTrigger"], [1, "sci-header-menu", "no-padding"], ["contact", "matMenu"], [1, "contact"], [1, "search"], ["mat-button", "", 1, "nav-item", "explore", "mat-display-3", 3, "matMenuTriggerFor"], ["exploreTrigger", "matMenuTrigger"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_ng_container_3_Template, 4, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_ng_template_4_Template, 35, 11, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "tablet-")("sciBreakpointElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_2__["BreakpointDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _shared_components_menu_icon_menu_icon_component__WEBPACK_IMPORTED_MODULE_4__["MenuIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 4.5rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 12px 0;\n  margin-left: 1rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 3rem;\n  outline: none;\n}\n[_nghost-%COMP%]   .sidenav-toggle[_ngcontent-%COMP%], [_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%], [_nghost-%COMP%]   .search[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0 1.5rem;\n}\n[_nghost-%COMP%]   .sidenav-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .sidenav-toggle.open[_ngcontent-%COMP%] {\n  border-left-width: 1px;\n  border-left-style: solid;\n}\n[_nghost-%COMP%]   .sidenav-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: unset;\n  padding: 0;\n}\n[_nghost-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.scrolled[_nghost-%COMP%] {\n  box-shadow: 0px 5px 10px 0px #e0e0e0cc;\n}\n  .sci-header-menu button {\n  width: 100%;\n  height: 3rem;\n  text-align: start;\n}\n  .sci-header-menu.no-padding > .mat-menu-content {\n  padding: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFFTjtBQUVFOzs7RUFHRSxZQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBREo7QUFHSTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUFETjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FBRk47QUFNRTtFQUNFLFlBQUE7QUFKSjtBQVFBO0VBQ0Usc0NBQUE7QUFMRjtBQVVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVBKO0FBVUU7RUFDRSxjQUFBO0FBUkoiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0LjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmxvZ28ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDNyZW07ICAvLyA0OHB4XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5zaWRlbmF2LXRvZ2dsZSxcbiAgLm5hdi1pdGVtLFxuICAuc2VhcmNoIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMCAxLjVyZW07XG4gIH1cblxuICAuc2lkZW5hdi10b2dnbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICYub3BlbiB7XG4gICAgICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xuICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gIH1cblxuICAuZmlsbGVyIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbn1cblxuOmhvc3QoLnNjcm9sbGVkKSB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAwcHggI2UwZTBlMGNjO1xufVxuXG4vLyBBbm5veWluZyBhbmd1bGFyIG92ZXJsYXlzLi4uXG46Om5nLWRlZXAgLnNjaS1oZWFkZXItbWVudSB7XG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICB9XG5cbiAgJi5uby1wYWRkaW5nID4gLm1hdC1tZW51LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IHVuc2V0O1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], sidenavOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sidenavOpenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var _components_news_item_list_news_item_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/news-item-list/news-item-list.module */ "otJX");
/* harmony import */ var _components_news_item_news_item_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/news-item/news-item.module */ "TJkZ");
/* harmony import */ var _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/breakpoint.directive */ "EpdQ");









class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_2__["CardGalleryModule"],
            _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
            _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_4__["MenuIconModule"],
            _components_news_item_news_item_module__WEBPACK_IMPORTED_MODULE_6__["NewsItemModule"],
            _components_news_item_list_news_item_list_module__WEBPACK_IMPORTED_MODULE_5__["NewsItemListModule"]
        ], _components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_2__["CardGalleryModule"],
        _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
        _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_4__["MenuIconModule"],
        _components_news_item_news_item_module__WEBPACK_IMPORTED_MODULE_6__["NewsItemModule"],
        _components_news_item_list_news_item_list_module__WEBPACK_IMPORTED_MODULE_5__["NewsItemListModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_7__["BreakpointDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_2__["CardGalleryModule"],
        _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
        _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_4__["MenuIconModule"],
        _components_news_item_news_item_module__WEBPACK_IMPORTED_MODULE_6__["NewsItemModule"],
        _components_news_item_list_news_item_list_module__WEBPACK_IMPORTED_MODULE_5__["NewsItemListModule"]], exports: [_components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_2__["CardGalleryModule"],
        _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
        _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_4__["MenuIconModule"],
        _components_news_item_news_item_module__WEBPACK_IMPORTED_MODULE_6__["NewsItemModule"],
        _components_news_item_list_news_item_list_module__WEBPACK_IMPORTED_MODULE_5__["NewsItemListModule"],
        _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_7__["BreakpointDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_2__["CardGalleryModule"],
                    _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
                    _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_4__["MenuIconModule"],
                    _components_news_item_news_item_module__WEBPACK_IMPORTED_MODULE_6__["NewsItemModule"],
                    _components_news_item_list_news_item_list_module__WEBPACK_IMPORTED_MODULE_5__["NewsItemListModule"]
                ],
                declarations: [
                    _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_7__["BreakpointDirective"]
                ],
                exports: [
                    _components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_2__["CardGalleryModule"],
                    _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
                    _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_4__["MenuIconModule"],
                    _components_news_item_news_item_module__WEBPACK_IMPORTED_MODULE_6__["NewsItemModule"],
                    _components_news_item_list_news_item_list_module__WEBPACK_IMPORTED_MODULE_5__["NewsItemListModule"],
                    _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_7__["BreakpointDirective"]
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

/***/ "QnGL":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/news-item-list/news-item-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: NewsItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemListComponent", function() { return NewsItemListComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "f7+R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _news_item_news_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../news-item/news-item.component */ "hHWb");













const _c0 = ["searchInput"];
function NewsItemListComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", year_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", year_r8, " ");
} }
function NewsItemListComponent_mat_icon_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-icon", 23);
} }
function NewsItemListComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@isSearchOpenTrigger.done", function NewsItemListComponent_div_20_Template_div_animation_isSearchOpenTrigger_done_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.afterAnimation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@isSearchOpenTrigger", undefined);
} }
function NewsItemListComponent_mat_icon_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NewsItemListComponent_mat_icon_24_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewsItemListComponent_mat_icon_24_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.clearSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NewsItemListComponent_ng_container_26_div_1_sci_news_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "sci-news-item", 32);
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r15);
} }
function NewsItemListComponent_ng_container_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NewsItemListComponent_ng_container_26_div_1_sci_news_item_1_Template, 1, 1, "sci-news-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.showAllItems || i_r16 < ctx_r14.displayLimit);
} }
function NewsItemListComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NewsItemListComponent_ng_container_26_div_1_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.displayedNewsItems);
} }
function NewsItemListComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No results matched your search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NewsItemListComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewsItemListComponent_div_30_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.showAllItems = !ctx_r19.showAllItems; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.showButtonText, " ");
} }
const _c1 = function (a0) { return { "open": a0 }; };
/**
 * Component for displaying news items
 */
class NewsItemListComponent {
    constructor(fb) {
        this.fb = fb;
        /**
         * Component class name
         */
        this.clsName = 'sci-news-item-list';
        /**
         * All news items
         */
        this.newsItems = [];
        /**
         * News items to be displayed
         */
        this.displayedNewsItems = [];
        /**
         * Order for date sorting (ascending or descending)
         */
        this.dateOrder = 'asc';
        /**
         * Order for title sorting (ascending or descending)
         */
        this.titleOrder = 'asc';
        /**
         * Order for publication sorting (ascending or descending)
         */
        this.publicationOrder = 'asc';
        /**
         * Whether all items should be displayed
         */
        this.showAllItems = false;
        this.isSearchOpen = false;
        this.displayLimit = 6;
        this.searchForm = this.fb.group({
            year: this.fb.control(''),
            search: this.fb.control('')
        });
    }
    /**
     * List of options to be displayed in year select dropdown
     */
    get yearList() {
        const years = this.newsItems.map((item) => {
            const fullDate = new Date(item.date);
            return fullDate.getFullYear().toString();
        });
        return [...new Set(years)];
    }
    get searchControl() {
        let result;
        if (this.searchForm) {
            const searchControl = this.searchForm.get('search');
            if (searchControl) {
                result = searchControl;
            }
        }
        return result;
    }
    get totalResultsText() {
        const denominator = this.displayedNewsItems.length;
        let numerator = denominator;
        if (!this.showAllItems && denominator > this.displayLimit) {
            numerator = this.displayLimit;
        }
        return `${numerator} / ${denominator}`;
    }
    /**
     * Sorts all items by date on init
     */
    ngOnInit() {
        var _a, _b, _c;
        this.displayedNewsItems = this.newsItems;
        // Initialize listener for search input change
        this.searchChangeSubscription = (_a = this.searchControl) === null || _a === void 0 ? void 0 : _a.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((searcKey) => {
            return searcKey.trim().toLowerCase();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((searchKey) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(searchKey);
        })).subscribe((searchKey) => {
            var _a;
            const year = (_a = this.searchForm.get('year')) === null || _a === void 0 ? void 0 : _a.value;
            this.filterData({ year, searchKey });
        });
        (_b = this.searchControl) === null || _b === void 0 ? void 0 : _b.setValue('');
        this.sort('publication', 'asc');
        // Initalize listener for year dropdown change
        this.yearChangeSubscription = (_c = this.searchForm.get('year')) === null || _c === void 0 ? void 0 : _c.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((year) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(year);
        })).subscribe((year) => {
            var _a;
            let searchKey = (_a = this.searchForm.get('search')) === null || _a === void 0 ? void 0 : _a.value;
            searchKey = searchKey.trim().toLowerCase();
            this.filterData({ searchKey, year });
        });
    }
    /**
     * Sorts displayed news items according to criteria
     * @param criteria Criteria to be sorted by
     */
    toggleSort(criteria) {
        let order;
        if (criteria === 'publication') {
            this.publicationOrder = this.publicationOrder === 'asc' ? 'desc' : 'asc';
            order = this.publicationOrder;
        }
        else if (criteria === 'date') {
            this.dateOrder = this.dateOrder === 'asc' ? 'desc' : 'asc';
            order = this.dateOrder;
        }
        else {
            this.titleOrder = this.titleOrder === 'asc' ? 'desc' : 'asc';
            order = this.titleOrder;
        }
        this.sort(criteria, order);
    }
    sort(criteria, order) {
        this.displayedNewsItems = [...this.displayedNewsItems].sort(this.compareValues(criteria, order));
        if (criteria === 'date') {
            this.dateOrder = order;
        }
        else if (criteria === 'publication') {
            this.publicationOrder = order;
        }
        else if (criteria === 'title') {
            this.titleOrder = order;
        }
    }
    /**
     * Comparison function for NewsItems
     * @param key Criteria being compared
     * @param order order to compare
     * @returns 1 if a[key] is greater than b[key], -1 if less (opposite for descending). 0 if equal.
     */
    compareValues(key, order) {
        return (a, b) => {
            let comparison;
            if (key === 'date') {
                comparison = a[key] > b[key] ? 1 : -1;
            }
            else {
                comparison = a[key].localeCompare(b[key]);
            }
            return ((order === 'desc') ? (comparison * -1) : comparison);
        };
    }
    // Predicate for filtering data.
    filterData(filter) {
        const predicateFilter = (item) => {
            let result = true;
            // year
            if (filter.year) {
                const year = new Date(item.date).getFullYear().toString();
                result = result && (year === filter.year);
            }
            // SearchKey
            if (filter.searchKey) {
                result = result &&
                    (item.title.toLowerCase().includes(filter.searchKey) ||
                        item.publication.toLowerCase().includes(filter.searchKey));
            }
            return result;
        };
        this.displayedNewsItems = [...this.newsItems].filter(predicateFilter);
    }
    /**
     * Text to be displayed in show more button
     */
    get showButtonText() {
        return (this.showAllItems) ? 'Show Less' : 'Show More News';
    }
    /**
     * Determines if show more button should be shown
     * @returns true if there are 4 or fewer items displayed
     */
    needShowMoreButton() {
        return (this.displayedNewsItems.length > this.displayLimit) ? true : false;
    }
    // After Animation hook
    afterAnimation(event) {
        if (event.fromState === 'void') {
            if (this.searchInput) {
                this.searchInput.nativeElement.focus();
            }
        }
    }
    clearSearch() {
        if (this.searchControl) {
            this.searchControl.setValue('');
        }
    }
    ngOnDestroy() {
        if (this.yearChangeSubscription) {
            this.yearChangeSubscription.unsubscribe();
        }
        if (this.searchChangeSubscription) {
            this.searchChangeSubscription.unsubscribe();
        }
    }
}
NewsItemListComponent.ɵfac = function NewsItemListComponent_Factory(t) { return new (t || NewsItemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
NewsItemListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewsItemListComponent, selectors: [["sci-news-item-list"]], viewQuery: function NewsItemListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, hostVars: 2, hostBindings: function NewsItemListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { newsItems: "newsItems" }, decls: 31, vars: 15, consts: [[1, "header2"], [1, "search-form", 3, "formGroup"], [1, "group1"], [1, "input-year"], ["formControlName", "year"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "sort-filters"], [1, "sort", "publication", 3, "click"], [1, "search-overlay", 3, "ngClass"], [1, "icon-container", "search-off-icon-container", 3, "click"], ["class", "icon-search-off", "svgIcon", "search:search_off", "aria-hidden", "false", "aria-label", "search", 4, "ngIf"], ["class", "input-search", 4, "ngIf"], [1, "icon-container", "search-icon-container", 3, "click"], ["class", "icon-search", "aria-hidden", "false", "aria-label", "search", 4, "ngIf"], [1, "icon-container", "close-icon-container"], ["class", "icon-search-close", "aria-hidden", "true", "svgIcon", "search:search_close", 3, "click", 4, "ngIf"], [1, "news-item-list"], [4, "ngIf"], ["class", "no-search", 4, "ngIf"], [1, "total"], ["class", "show-more", 3, "click", 4, "ngIf"], [3, "value"], ["svgIcon", "search:search_off", "aria-hidden", "false", "aria-label", "search", 1, "icon-search-off"], [1, "input-search"], ["matInput", "", "formControlName", "search", "placeholder", "Type search"], ["searchInput", ""], ["aria-hidden", "false", "aria-label", "search", 1, "icon-search"], ["aria-hidden", "true", "svgIcon", "search:search_close", 1, "icon-search-close", 3, "click"], ["class", "news-item", 4, "ngFor", "ngForOf"], [1, "news-item"], [3, "item", 4, "ngIf"], [3, "item"], [1, "no-search"], [1, "no-result-text"], [1, "show-more", 3, "click"]], template: function NewsItemListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "In the News");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NewsItemListComponent_mat_option_10_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewsItemListComponent_Template_div_click_12_listener() { return ctx.toggleSort("publication"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "arrow_downward");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewsItemListComponent_Template_div_click_18_listener() { return ctx.isSearchOpen = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, NewsItemListComponent_mat_icon_19_Template, 1, 0, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, NewsItemListComponent_div_20_Template, 5, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewsItemListComponent_Template_div_click_21_listener() { return ctx.isSearchOpen = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, NewsItemListComponent_mat_icon_22_Template, 2, 0, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, NewsItemListComponent_mat_icon_24_Template, 1, 0, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, NewsItemListComponent_ng_container_26_Template, 2, 1, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, NewsItemListComponent_div_27_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, NewsItemListComponent_div_30_Template, 2, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.yearList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("reversed", ctx.publicationOrder === "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c1, ctx.isSearchOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSearchOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSearchOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isSearchOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSearchOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayedNewsItems.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayedNewsItems.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.totalResultsText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.needShowMoreButton());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _news_item_news_item_component__WEBPACK_IMPORTED_MODULE_11__["NewsItemComponent"]], styles: ["[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  color: #757575;\n}\n[_nghost-%COMP%]   .search-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding: 0.5rem;\n  width: 100%;\n}\n[_nghost-%COMP%]   .search-form[_ngcontent-%COMP%]   .group1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .search-form[_ngcontent-%COMP%]   .group1[_ngcontent-%COMP%]   .input-year[_ngcontent-%COMP%] {\n  max-width: 4rem;\n  margin-right: 2rem;\n}\n[_nghost-%COMP%]   .search-form[_ngcontent-%COMP%]   .group1[_ngcontent-%COMP%]   .sort-filters[_ngcontent-%COMP%] {\n  display: flex;\n  height: 3rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .search-form[_ngcontent-%COMP%]   .group1[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  -moz-user-select: none;\n}\n[_nghost-%COMP%]   .search-form[_ngcontent-%COMP%]   .group1[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 100%;\n  padding-left: 6px;\n  padding-top: 6px;\n  transform: scale(-1);\n  transition: transform 200ms;\n  margin-left: 0.5rem;\n  color: #7997a3;\n}\n[_nghost-%COMP%]   .search-form[_ngcontent-%COMP%]   .group1[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover {\n  background-color: #dce0e2;\n  transform: scale(-1.1);\n}\n[_nghost-%COMP%]   .search-form[_ngcontent-%COMP%]   .group1[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n[_nghost-%COMP%]   .search-form[_ngcontent-%COMP%]   .group1[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%]:hover {\n  background-color: #dce0e2;\n  transform: scale(1.1);\n}\n[_nghost-%COMP%]   .search-form[_ngcontent-%COMP%]   .search-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  overflow: visible;\n  z-index: 2;\n}\n[_nghost-%COMP%]   .search-form[_ngcontent-%COMP%]   .search-overlay.open[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  box-shadow: 0px 5px 10px 0px #e0e0e0cc;\n}\n[_nghost-%COMP%]   .search-form[_ngcontent-%COMP%]   .search-overlay[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #212121;\n}\n[_nghost-%COMP%]   .search-form[_ngcontent-%COMP%]   .search-overlay[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  z-index: 2;\n  -webkit-user-select: none;\n          user-select: none;\n  margin: auto 0;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .search-form[_ngcontent-%COMP%]   .search-overlay[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%] {\n  color: #7997a3;\n}\n[_nghost-%COMP%]   .news-item-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 2rem;\n  min-height: 20rem;\n}\n[_nghost-%COMP%]   .news-item-list[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%] {\n  width: 33.33%;\n}\n@media (min-width: 769px) and (max-width: 960px) {\n  [_nghost-%COMP%]   .news-item-list[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .news-item-list[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .no-search[_ngcontent-%COMP%] {\n  align-self: center;\n  margin: auto;\n}\n[_nghost-%COMP%]   .no-search[_ngcontent-%COMP%]   .no-result-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n}\n[_nghost-%COMP%]   .show-more[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 2.5rem;\n  width: 100%;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  -moz-user-select: none;\n  margin-bottom: 2rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .show-more[_ngcontent-%COMP%] {\n    margin: 2rem 0.5rem;\n  }\n}\n[_nghost-%COMP%]   .total[_ngcontent-%COMP%] {\n  color: #757575;\n  display: flex;\n  width: 100%;\n  margin-top: 2rem;\n  padding: 1rem;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uZXdzLWl0ZW0tbGlzdC9uZXdzLWl0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3NjaW1hcHMvc3JjL3N0eWxpbmcvX3NjcmVlbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsY0FBQTtBQUZKO0FBS0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsV0FBQTtBQUpKO0FBVUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFSTjtBQVNNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBUFI7QUFXTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFUUjtBQW9CTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxzQkFBQTtBQW5CUjtBQXlCUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsb0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXpCVjtBQTBCVTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7QUF4Qlo7QUEyQlE7RUFDRSxtQkFBQTtBQXpCVjtBQTBCVTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUF4Qlo7QUE2Qkk7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUE1Qk47QUE4Qk07RUFDRSxlQUFBO0VBQ0Esc0NBQUE7QUE1QlI7QUFrQ1E7RUFDRSxjQUFBO0FBaENWO0FBb0NNO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWxDUjtBQXFDTTtFQUNFLGNBQUE7QUFuQ1I7QUF3Q0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUF0Q0o7QUF3Q0k7RUFDRSxhQUFBO0FBdENOO0FDaEVJO0VEcUdBO0lBR0ksVUFBQTtFQXBDTjtBQUNGO0FDckVJO0VEcUdBO0lBTUksV0FBQTtFQWxDTjtBQUNGO0FBc0NFO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0FBckNKO0FBc0NJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBcENOO0FBd0NFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQXRDSjtBQzdGSTtFRDBIRjtJQVlJLG1CQUFBO0VBckNKO0FBQ0Y7QUF3Q0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBdENKIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uZXdzLWl0ZW0tbGlzdC9uZXdzLWl0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3NjcmVlbic7XG5cbjpob3N0IHtcbiAgLmhlYWRlciB7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gIH1cblxuICAuc2VhcmNoLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLy8gQGluY2x1ZGUgc2NyZWVuLmJyZWFrcG9pbnQobW9iaWxlKSB7XG4gICAgLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vIH1cblxuICAgIC5ncm91cDEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAuaW5wdXQteWVhciB7XG4gICAgICAgIG1heC13aWR0aDogNHJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgICAgICBcbiAgICAgIH1cblxuICAgICAgLnNvcnQtZmlsdGVycyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIEBpbmNsdWRlIHNjcmVlbi5icmVha3BvaW50KG1vYmlsZSkge1xuICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc29ydCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcblxuICAgICAgICAvLyBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgICAgLy8gICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcblxuICAgICAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XG5cbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXM7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgICBjb2xvcjogIzc5OTdhMztcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2UwZTI7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLjEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucmV2ZXJzZWQge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlMGUyO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuc2VhcmNoLW92ZXJsYXkge1xuICAgICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIFxuICAgICAgJi5vcGVuIHtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggMHB4ICNlMGUwZTBjYzsgICAgXG4gICAgICB9XG4gICAgICAuaW5wdXQtc2VhcmNoIHtcbiAgICAgICAgLy8gQGluY2x1ZGUgc2NyZWVuLmJyZWFrcG9pbnQobW9iaWxlKSB7XG4gICAgICAgIC8vICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pY29uLWNvbnRhaW5lciB7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBtYXJnaW46IGF1dG8gMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuaWNvbi1zZWFyY2gge1xuICAgICAgICBjb2xvcjogIzc5OTdhMztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubmV3cy1pdGVtLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgbWluLWhlaWdodDogMjByZW07XG5cbiAgICAubmV3cy1pdGVtIHtcbiAgICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludCh0YWJsZXQpIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIHNjcmVlbi5icmVha3BvaW50KG1vYmlsZSkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubm8tc2VhcmNoIHtcbiAgICAvLyB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC5uby1yZXN1bHQtdGV4dCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICB9XG5cbiAgLnNob3ctbW9yZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgIG1hcmdpbjogMnJlbSAwLjVyZW07XG4gICAgfVxuICB9XG5cbiAgLnRvdGFsIHtcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogIHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG59XG4iLCIkYnJlYWtwb2ludC1tb2JpbGU6IDc2OHB4O1xuJGJyZWFrcG9pbnQtdGFibGV0OiA5NjBweDtcblxuJC1icmVha3BvaW50LXF1ZXJpZXM6IChcbiAgbW9iaWxlOiBcIihtYXgtd2lkdGg6ICN7JGJyZWFrcG9pbnQtbW9iaWxlfSlcIixcbiAgdGFibGV0OlxuICAgIFwiKG1pbi13aWR0aDogI3skYnJlYWtwb2ludC1tb2JpbGUgKyAxcHh9KSBhbmQgKG1heC13aWR0aDogI3skYnJlYWtwb2ludC10YWJsZXR9KVwiLFxuICBkZXNrdG9wOiBcIihtaW4td2lkdGg6ICN7YnJlYWtwb2ludC10YWJsZXQgKyAxcHh9KVwiLFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHR5cGVzLi4uKSB7XG4gICRxdWVyaWVzOiAoKTtcbiAgQGVhY2ggJHR5cGUgaW4gJHR5cGVzIHtcbiAgICAkcXVlcnk6IG1hcC1nZXQoJC1icmVha3BvaW50LXF1ZXJpZXMsICR0eXBlKTtcbiAgICBAaWYgJHF1ZXJ5IHtcbiAgICAgICRxdWVyaWVzOiBhcHBlbmQoJHF1ZXJpZXMsICRxdWVyeSwgJHNlcGFyYXRvcjogY29tbWEpO1xuICAgIH1cbiAgfVxuXG4gIEBpZiBsZW5ndGgoJHF1ZXJpZXMpID4gMCB7XG4gICAgQG1lZGlhICN7JHF1ZXJpZXN9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('isSearchOpenTrigger', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 0,
                        transform: 'translateX(25%)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1,
                        transform: 'translateX(0%)'
                    }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 0,
                        transform: 'translateX(25%)'
                    }))
                ]),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewsItemListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'sci-news-item-list',
                templateUrl: './news-item-list.component.html',
                styleUrls: ['./news-item-list.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('isSearchOpenTrigger', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 0,
                                transform: 'translateX(25%)'
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 1,
                                transform: 'translateX(0%)'
                            }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 1
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 0,
                                transform: 'translateX(25%)'
                            }))
                        ]),
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }]; }, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }], newsItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['searchInput']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: slideInAnimation, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "f7+R");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/header/header.component */ "OOyK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "lQ7A");
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/directives/breakpoint.directive */ "EpdQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/footer/footer.component */ "x0xU");
/* harmony import */ var _core_components_mobile_header_menu_mobile_header_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/components/mobile-header-menu/mobile-header-menu.component */ "uOwt");












function AppComponent_sci_mobile_header_menu_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-mobile-header-menu", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavClose", function AppComponent_sci_mobile_header_menu_3_Template_sci_mobile_header_menu_sidenavClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.sidenavOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "scrolled": a0 }; };
const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Maps => Map', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '-100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()),
    ])
]);
class AppComponent {
    constructor() {
        this.hasPageScrolled = false;
        this.sidenavOpen = false;
        this.newsItems = [
            {
                title: 'The Places & Spaces: Mapping Science comes to Virginia Tech at the University Libraries',
                date: new Date(2020, 2, 2),
                publication: 'Library News',
                institution: 'Virginia Tech',
                thumbnail: 'assets/images/rose.jpg',
                pdfLink: 'link'
            },
            {
                title: 'International exhibit unites students, faculty and staff in celebrating mapping technology',
                date: new Date(2020, 2, 1),
                publication: 'Research News',
                institution: 'Vanderbilt',
                thumbnail: 'assets/images/rose.jpg',
                pdfLink: 'link'
            },
            {
                title: 'Exhibit travels to the Centers for Disease Control and Prevention Museum in Atlanta',
                date: new Date(2020, 2, 2),
                publication: 'SolC News',
                institution: null,
                thumbnail: 'assets/images/rose.jpg',
                pdfLink: 'link'
            },
            {
                title: 'Article from 2019',
                date: new Date(2019, 3, 1),
                publication: 'Science News',
                institution: 'Washington University',
                thumbnail: 'assets/images/rose.jpg',
                pdfLink: 'link'
            },
            {
                title: 'The Places & Spaces: Mapping Science comes to Virginia Tech at the University Libraries',
                date: new Date(2020, 2, 2),
                publication: 'Library News',
                institution: 'Virginia Tech',
                thumbnail: 'assets/images/rose.jpg',
                pdfLink: 'link'
            },
            {
                title: 'International exhibit unites students, faculty and staff in celebrating mapping technology',
                date: new Date(2020, 2, 1),
                publication: 'Research News',
                institution: 'Vanderbilt',
                thumbnail: 'assets/images/rose.jpg',
                pdfLink: 'link'
            },
            {
                title: 'Exhibit travels to the Centers for Disease Control and Prevention Museum in Atlanta',
                date: new Date(2020, 2, 2),
                publication: 'SolC News',
                institution: null,
                thumbnail: 'assets/images/rose.jpg',
                pdfLink: 'link'
            },
            {
                title: 'Article from 2019',
                date: new Date(2019, 3, 1),
                publication: 'Science News',
                institution: 'Washington University',
                thumbnail: 'assets/images/rose.jpg',
                pdfLink: 'link'
            }
        ];
        this.learningItems = [
            {
                title: 'Humanexus',
                body: 'A short film that visualizes human communication from the Stone Age to today...and beyond.',
                slug: 'humanexus'
            },
            {
                title: 'WorldProcessor Globes',
                body: 'Explore mapped social, scientific, political and economic data on three globes as navigation guides in a "globalized" world.',
                slug: 'worldprocess-globes'
            },
            {
                title: 'Illuminated Diagram Display',
                body: 'Explore mapped social, scientific, political and economic data on three globes as navigation guides in a "globalized" world.',
                slug: 'illluminated-diagram-display'
            },
            {
                title: 'Scultpures of Science',
                body: 'The history of science realized in tangible form.',
                slug: 'sculptures-of-science'
            },
            {
                title: 'Inside the Museum',
                body: 'An imaginative look at the inside of the Metropolitan Museum of Art\'s holdings and spaces.',
                slug: 'inside-the-museum'
            },
            {
                title: 'The Fundamental Interconnectedness of All Things [dynamic format]',
                body: '',
                slug: 'interconnectedness-of-all-things'
            },
            {
                title: 'Gapminder Card Game',
                body: 'Country cards are arranged to reflect the gaps in the world today, then compared to the Gapminder World Map.',
                slug: 'gapminder-card-game'
            },
            {
                title: 'Science Maps for Kids',
                body: 'The hands-on science maps for kids invite children to see, explore, and understand science from above.',
                slug: 'science-maps-for-kids'
            },
            {
                title: 'Adventures in Knowledge Land Comic Book',
                body: 'Explores the Atlas of Science book using comics as a forum.',
                slug: 'knowledge-land-comic'
            },
            {
                title: 'My Science Story Coloring Book',
                body: 'Kids learn science by coloring.',
                slug: 'science-coloring-book'
            }
        ];
        this.slides = [
            'assets/images/benches.jpg',
            'assets/images/bridge.jpg',
            'assets/images/flower.jpg',
            'assets/images/garden.jpg',
        ];
        this.newsItem = {
            title: 'The Places & Spaces: Mapping Science comes to Virginia Tech at the University Libraries',
            date: new Date(2020, 2, 2),
            publication: 'Library News',
            institution: 'Virginia Tech',
            thumbnail: 'assets/images/rose.jpg',
            pdfLink: 'link'
        };
        this.footerParameters = {
            phoneNumber: '812-855-9930',
            acknowledgement: 'This exhibit is supported by the National Science Foundation under Grant No. IIS-0238261, CHE-0524661, IIS-0534909 and IIS-0715303, the James S. McDonnell Foundation; Thomson Reuters; the Cyberinfrastructure for Network Science Center, University Information Technology Services, and the School of Library and Information Science, all three at Indiana University. Some of the data used to generate the science maps is from the Web of Science by Thomson Reuters and Scopus by Elsevier. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.'
        };
    }
    ngOnInit() {
        this.windowScrollSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            return window.scrollY;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((scrollY) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(scrollY);
        })).subscribe(scrollY => {
            if (scrollY <= 0) {
                this.hasPageScrolled = false;
            }
            else {
                this.hasPageScrolled = true;
            }
        });
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
    ngOnDestroy() {
        if (this.windowScrollSubscription) {
            this.windowScrollSubscription.unsubscribe();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["sci-root"]], decls: 9, vars: 9, consts: [[1, "header", 3, "ngClass", "sidenavOpen", "sidenavOpenChange"], [1, "sidenav-container"], ["autoFocus", "false", "mode", "over", "position", "end", "fixedInViewport", "", "fixedTopGap", "72", 3, "opened", "closedStart"], [3, "sidenavClose", 4, "sciBreakpoint"], [1, "sidenav-content"], [1, "content"], ["outlet", "outlet"], [3, "acknowledgement", "phoneNumber"], [3, "sidenavClose"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavOpenChange", function AppComponent_Template_sci_header_sidenavOpenChange_0_listener($event) { return ctx.sidenavOpen = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closedStart", function AppComponent_Template_mat_sidenav_closedStart_2_listener() { return ctx.sidenavOpen = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_sci_mobile_header_menu_3_Template, 1, 0, "sci-mobile-header-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "sci-footer", 7);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.hasPageScrolled))("sidenavOpen", ctx.sidenavOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.sidenavOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "tablet-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("acknowledgement", ctx.footerParameters.acknowledgement)("phoneNumber", ctx.footerParameters.phoneNumber);
    } }, directives: [_core_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_7__["BreakpointDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _core_components_mobile_header_menu_mobile_header_menu_component__WEBPACK_IMPORTED_MODULE_10__["MobileHeaderMenuComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n[_nghost-%COMP%]   .mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n[_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n@media (min-width: 1248px) {\n  [_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    max-width: 80rem;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFBO0FBRkY7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFISjtBQU1FO0VBQ0UsdUJBQUE7QUFKSjtBQVFJO0VBREY7SUFFSSxZQUFBO0VBTEo7QUFDRjtBQU9JO0VBQ0UsZUFBQTtBQUxOO0FBT007RUFIRjtJQUlJLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VBSk47QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1vYmlsZTogNjQwcHg7XG4kZGVza3RvcDogMTI0OHB4O1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvLyBoZWlnaHQ6IDEwMCU7XG4gIC8vIG92ZXJmbG93LXk6IGF1dG87XG4gIC5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDIwO1xuICB9XG5cbiAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRkZXNrdG9wKSB7XG4gICAgICAgIG1heC13aWR0aDogODByZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [
            slideInAnimation
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [
                    slideInAnimation
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "TJkZ":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/news-item/news-item.module.ts ***!
  \*****************************************************************/
/*! exports provided: NewsItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemModule", function() { return NewsItemModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _news_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-item.component */ "hHWb");





class NewsItemModule {
}
NewsItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NewsItemModule });
NewsItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NewsItemModule_Factory(t) { return new (t || NewsItemModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewsItemModule, { declarations: [_news_item_component__WEBPACK_IMPORTED_MODULE_3__["NewsItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]], exports: [_news_item_component__WEBPACK_IMPORTED_MODULE_3__["NewsItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewsItemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_news_item_component__WEBPACK_IMPORTED_MODULE_3__["NewsItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]
                ],
                exports: [
                    _news_item_component__WEBPACK_IMPORTED_MODULE_3__["NewsItemComponent"]
                ]
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

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "lQ7A");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _shared_services_breakpoint_registry_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/breakpoint-registry.service */ "2zxw");
















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
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_breakpoint_registry_service__WEBPACK_IMPORTED_MODULE_11__["BreakpointRegistryService"])); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot({
                loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                markedOptions: {
                    provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkedOptions"],
                    useValue: {
                        gfm: true
                    }
                }
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot({
                        loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                        markedOptions: {
                            provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkedOptions"],
                            useValue: {
                                gfm: true
                            }
                        }
                    }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
                ],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }, { type: _shared_services_breakpoint_registry_service__WEBPACK_IMPORTED_MODULE_11__["BreakpointRegistryService"] }]; }, null); })();


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

/***/ "hHWb":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/news-item/news-item.component.ts ***!
  \********************************************************************/
/*! exports provided: NewsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemComponent", function() { return NewsItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");




function NewsItemComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.item.pdfLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NewsItemComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.item.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.item.title, " ");
} }
function NewsItemComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.item.title, " ");
} }
/**
 * Displays a news item
 */
class NewsItemComponent {
    constructor() {
        /**
         * Class name for component
         */
        this.clsName = 'sci-news-item';
    }
}
NewsItemComponent.ɵfac = function NewsItemComponent_Factory(t) { return new (t || NewsItemComponent)(); };
NewsItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsItemComponent, selectors: [["sci-news-item"]], hostVars: 2, hostBindings: function NewsItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { item: "item" }, decls: 15, vars: 9, consts: [[1, "news-item"], [1, "info"], [1, "card-header"], [1, "date", "mat-display-1"], [1, "download"], ["download", "", 3, "href", 4, "ngIf"], [1, "body"], [1, "text"], [3, "ngIf", "ngIfElse"], ["text", ""], [1, "identifier"], ["download", "", 3, "href"], ["aria-hidden", "true", "svgIcon", "file:download", 1, "icon-pdf-download"], [1, "link"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "link-title"], [1, "title"]], template: function NewsItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewsItemComponent_a_7_Template, 2, 1, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NewsItemComponent_ng_template_10_Template, 4, 2, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NewsItemComponent_ng_template_11_Template, 2, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, ctx.item.date, "mediumDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.pdfLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.sourceUrl)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.item.publication, " ", ctx.item.institution ? "at " + ctx.item.institution : "", " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  text-decoration: none;\n  margin: 0.5rem;\n  border-radius: 0.125rem;\n  max-height: 8rem;\n  border: 1px solid #e0e0e0;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .news-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    max-height: 16rem;\n  }\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%] {\n  width: 9rem;\n  object-fit: cover;\n  border-width: 0.125px;\n  border-style: solid;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%] {\n    height: 6rem;\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 3rem;\n  background-color: #f5f5f5;\n  padding: 1rem;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: #757575;\n  text-transform: uppercase;\n  font-size: 1rem;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  align-self: center;\n  width: 36px;\n  height: 36px;\n  transition: transform 200ms;\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]:hover {\n  background-color: #dce0e2;\n  transform: scale(1.2);\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   .icon-pdf-download[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  margin-top: 6px;\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  padding: 1rem;\n  height: 72px;\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-title[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .identifier[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-top: 0.25rem;\n  color: #757575;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uZXdzLWl0ZW0vbmV3cy1pdGVtLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvc2NpbWFwcy9zcmMvc3R5bGluZy9fc2NyZWVuLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFGSjtBQ1lJO0VEakJGO0lBVUksc0JBQUE7SUFDQSxpQkFBQTtFQURKO0FBQ0Y7QUFHSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFETjtBQ0FJO0VESEE7SUFNSSxZQUFBO0lBQ0EsV0FBQTtFQUNOO0FBQ0Y7QUFFSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUFOO0FBRU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFBUjtBQUVRO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQVY7QUFFUTtFQUVFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBRFY7QUFFVTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFBWjtBQUdVO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBRFo7QUFNTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBSlI7QUFPVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFMWjtBQVFVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQU5aO0FBUVk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFOZDtBQVlRO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVZWIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uZXdzLWl0ZW0vbmV3cy1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2NyZWVuJztcblxuOmhvc3Qge1xuICAubmV3cy1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbjogMC41cmVtOyAvLyA4cHhcbiAgICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcbiAgICBtYXgtaGVpZ2h0OiA4cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cbiAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXgtaGVpZ2h0OiAxNnJlbTtcbiAgICB9XG5cbiAgICAudGh1bWIge1xuICAgICAgd2lkdGg6IDlyZW07XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIGJvcmRlci13aWR0aDogMC4xMjVweDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgICAgaGVpZ2h0OiA2cmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBoZWlnaHQ6IDNyZW07IC8vIDQ4cHhcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgIC5kYXRlIHtcbiAgICAgICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5kb3dubG9hZCB7XG4gICAgICAgICAgLy8gZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXM7XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlMGUyO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pY29uLXBkZi1kb3dubG9hZCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIGhlaWdodDogNzJweDtcblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgICAgICAgICAgLmxpbmstdGl0bGUge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgLy8gY29sb3I6ICM4ZGM2M2Y7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmlkZW50aWZpZXIge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICAgICAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vICY6aG92ZXIge1xuICAgIC8vICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgLy8gfVxuICB9XG59XG4iLCIkYnJlYWtwb2ludC1tb2JpbGU6IDc2OHB4O1xuJGJyZWFrcG9pbnQtdGFibGV0OiA5NjBweDtcblxuJC1icmVha3BvaW50LXF1ZXJpZXM6IChcbiAgbW9iaWxlOiBcIihtYXgtd2lkdGg6ICN7JGJyZWFrcG9pbnQtbW9iaWxlfSlcIixcbiAgdGFibGV0OlxuICAgIFwiKG1pbi13aWR0aDogI3skYnJlYWtwb2ludC1tb2JpbGUgKyAxcHh9KSBhbmQgKG1heC13aWR0aDogI3skYnJlYWtwb2ludC10YWJsZXR9KVwiLFxuICBkZXNrdG9wOiBcIihtaW4td2lkdGg6ICN7YnJlYWtwb2ludC10YWJsZXQgKyAxcHh9KVwiLFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHR5cGVzLi4uKSB7XG4gICRxdWVyaWVzOiAoKTtcbiAgQGVhY2ggJHR5cGUgaW4gJHR5cGVzIHtcbiAgICAkcXVlcnk6IG1hcC1nZXQoJC1icmVha3BvaW50LXF1ZXJpZXMsICR0eXBlKTtcbiAgICBAaWYgJHF1ZXJ5IHtcbiAgICAgICRxdWVyaWVzOiBhcHBlbmQoJHF1ZXJpZXMsICRxdWVyeSwgJHNlcGFyYXRvcjogY29tbWEpO1xuICAgIH1cbiAgfVxuXG4gIEBpZiBsZW5ndGgoJHF1ZXJpZXMpID4gMCB7XG4gICAgQG1lZGlhICN7JHF1ZXJpZXN9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-news-item',
                templateUrl: './news-item.component.html',
                styleUrls: ['./news-item.component.scss']
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "otJX":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/news-item-list/news-item-list.module.ts ***!
  \***************************************************************************/
/*! exports provided: NewsItemListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemListModule", function() { return NewsItemListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _news_item_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-item-list.component */ "QnGL");
/* harmony import */ var _news_item_news_item_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../news-item/news-item.module */ "TJkZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");










class NewsItemListModule {
}
NewsItemListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NewsItemListModule });
NewsItemListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NewsItemListModule_Factory(t) { return new (t || NewsItemListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _news_item_news_item_module__WEBPACK_IMPORTED_MODULE_5__["NewsItemModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewsItemListModule, { declarations: [_news_item_list_component__WEBPACK_IMPORTED_MODULE_4__["NewsItemListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _news_item_news_item_module__WEBPACK_IMPORTED_MODULE_5__["NewsItemModule"]], exports: [_news_item_list_component__WEBPACK_IMPORTED_MODULE_4__["NewsItemListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsItemListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_news_item_list_component__WEBPACK_IMPORTED_MODULE_4__["NewsItemListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _news_item_news_item_module__WEBPACK_IMPORTED_MODULE_5__["NewsItemModule"],
                ],
                exports: [
                    _news_item_list_component__WEBPACK_IMPORTED_MODULE_4__["NewsItemListComponent"]
                ]
            }]
    }], null, null); })();


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
    { path: 'about', loadChildren: () => Promise.all(/*! import() | pages-about-about-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-about-about-module")]).then(__webpack_require__.bind(null, /*! ./pages/about/about.module */ "UoYK")).then(m => m.AboutModule) },
    { path: 'books', loadChildren: () => _pages_books_books_module__WEBPACK_IMPORTED_MODULE_2__["BooksModule"] },
    {
        path: 'maps',
        loadChildren: () => Promise.all(/*! import() | pages-maps-maps-module */[__webpack_require__.e("default~pages-macroscope-macroscope-module~pages-macroscopes-macroscopes-module~pages-map-map-module~6842d2ab"), __webpack_require__.e("default~pages-macroscope-macroscope-module~pages-map-map-module~pages-maps-maps-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-maps-maps-module")]).then(__webpack_require__.bind(null, /*! ./pages/maps/maps.module */ "MWin")).then(m => m.MapsModule),
        data: { animation: 'Maps' }
    },
    {
        path: 'map',
        loadChildren: () => Promise.all(/*! import() | pages-map-map-module */[__webpack_require__.e("default~pages-macroscope-macroscope-module~pages-macroscopes-macroscopes-module~pages-map-map-module~6842d2ab"), __webpack_require__.e("default~pages-macroscope-macroscope-module~pages-map-map-module~pages-maps-maps-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-map-map-module")]).then(__webpack_require__.bind(null, /*! ./pages/map/map.module */ "862v")).then(m => m.MapModule),
        data: { animation: 'Map', type: 'map' }
    },
    {
        path: 'macroscope',
        loadChildren: () => Promise.all(/*! import() | pages-macroscope-macroscope-module */[__webpack_require__.e("default~pages-macroscope-macroscope-module~pages-macroscopes-macroscopes-module~pages-map-map-module~6842d2ab"), __webpack_require__.e("default~pages-macroscope-macroscope-module~pages-map-map-module~pages-maps-maps-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-macroscope-macroscope-module")]).then(__webpack_require__.bind(null, /*! ./pages/macroscope/macroscope.module */ "+1hx")).then(m => m.MacroscopeModule),
        data: { animation: 'Macroscope', type: 'macroscope' }
    },
    {
        path: 'macroscopes',
        loadChildren: () => Promise.all(/*! import() | pages-macroscopes-macroscopes-module */[__webpack_require__.e("default~pages-macroscope-macroscope-module~pages-macroscopes-macroscopes-module~pages-map-map-module~6842d2ab"), __webpack_require__.e("common"), __webpack_require__.e("pages-macroscopes-macroscopes-module")]).then(__webpack_require__.bind(null, /*! ./pages/macroscopes/macroscopes.module */ "FJoV")).then(m => m.MacroscopesModule),
        data: { animation: 'Macroscopes' }
    },
    { path: 'hosting', loadChildren: () => __webpack_require__.e(/*! import() | pages-hosting-hosting-module */ "pages-hosting-hosting-module").then(__webpack_require__.bind(null, /*! ./pages/hosting/hosting.module */ "3lz5")).then(m => m.HostingModule) },
    { path: 'venues', loadChildren: () => __webpack_require__.e(/*! import() | pages-venues-venues-module */ "pages-venues-venues-module").then(__webpack_require__.bind(null, /*! ./pages/venues/venues.module */ "lbFG")).then(m => m.VenuesModule) },
    {
        path: 'learning-center',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-learning-center-learning-center-module */ "pages-learning-center-learning-center-module").then(__webpack_require__.bind(null, /*! ./pages/learning-center/learning-center.module */ "42h0")).then(m => m.LearningCenterModule)
    },
    {
        path: 'call-for-macroscopes',
        loadChildren: () => Promise.all(/*! import() | pages-call-for-macroscopes-call-for-macroscopes-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-call-for-macroscopes-call-for-macroscopes-module")]).then(__webpack_require__.bind(null, /*! ./pages/call-for-macroscopes/call-for-macroscopes.module */ "uXZP")).then(m => m.CallForMacroscopesModule)
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
        /** HTML class */
        this.clsName = 'sci-footer';
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["sci-footer"]], hostVars: 2, hostBindings: function FooterComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { phoneNumber: "phoneNumber", acknowledgement: "acknowledgement" }, decls: 26, vars: 2, consts: [[1, "contact"], [1, "social"], ["mat-icon-button", "", 1, "button", "twitter"], ["svgIcon", "social:twitter", 1, "icon"], ["mat-icon-button", "", 1, "button", "facebook"], ["svgIcon", "social:facebook", 1, "icon"], ["mat-icon-button", "", "href", "mailto:cnscntr@indiana.edu", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "email"], [1, "icon", "font"], ["mat-icon-button", "", 1, "button", "instagram"], ["svgIcon", "social:instagram", 1, "icon"], ["mat-icon-button", "", "href", "https://goo.gl/maps/yFFVMmMRzBNYU1pq8", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "map"], [1, "filler"], [1, "phone"], [1, "text", "mat-display-2"], [1, "acknowledgement", "mat-small"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 7);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.acknowledgement, "\n");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin-top: 7.5rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 3rem;\n  flex-direction: row;\n  align-items: center;\n  padding: 0 1rem 0 0.25rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  padding: 0 0.75rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #7997a3;\n  background-color: #ffffff;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .icon.font[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding: 0 0 0 0.75rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .icon.font[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  font-size: 3rem;\n  line-height: 3rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n[_nghost-%COMP%]   .acknowledgement[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .acknowledgement[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3NjaW1hcHMvc3JjL3N0eWxpbmcvX2ljb24uc2NzcyIsInByb2plY3RzL3NjaW1hcHMvc3JjL3N0eWxpbmcvX3NjcmVlbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBRkY7QUFHRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQURKO0FBR0k7RUFDRSxrQkFBQTtBQUROO0FBR007RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUFEUjtBQUdRO0VBQ0MsY0FBQTtFQUNBLHlCQUFBO0FBRFQ7QUFJTTtFQUNFLGVBQUE7QUFGUjtBQU1JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQU9NO0VBQ0Usc0JBQUE7QUFMUjtBQU9NO0VBQ0UsZUFBQTtBQUxSO0FBU0k7RUMzQ0YsV0Q0Q3VCO0VDM0N2QixZRDJDdUI7RUMxQ3ZCLGVEMEN1QjtFQ3pDdkIsaUJEeUN1QjtBQUp6QjtBQU9JO0VBQ0UsWUFBQTtBQUxOO0FBU0U7RUFDRSxhQUFBO0FBUEo7QUU1Qkk7RUZ1Q0E7SUFDRSxhQUFBO0VBUko7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdpY29uJztcbkB1c2UgJ3NjcmVlbic7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDcuNXJlbTtcbiAgLmNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDFyZW0gMCAwLjI1cmVtO1xuXG4gICAgLnNvY2lhbCB7XG4gICAgICBwYWRkaW5nOiAwIDAuNzVyZW07XG5cbiAgICAgIC5idXR0b24ge1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG5cbiAgICAgICAgLmljb246aG92ZXIge1xuICAgICAgICAgY29sb3I6ICM3OTk3YTM7XG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmljb24uZm9udCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGhvbmUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLy8gcGFkZGluZzogMC43NXJlbSAwIDAuNzVyZW0gMC43NXJlbTtcblxuICAgICAgLnRleHQge1xuICAgICAgICBwYWRkaW5nOiAwIDAgMCAwLjc1cmVtO1xuICAgICAgfVxuICAgICAgLmljb24uZm9udCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICBAaW5jbHVkZSBpY29uLnNpemUoM3JlbSk7XG4gICAgfVxuXG4gICAgLmZpbGxlciB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuICB9XG5cbiAgLmFja25vd2xlZGdlbWVudCB7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgfVxuXG4gIEBpbmNsdWRlIHNjcmVlbi5icmVha3BvaW50KG1vYmlsZSkge1xuICAgIC5hY2tub3dsZWRnZW1lbnQge1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG4gIH1cbn1cbiIsIlxuQG1peGluIHNpemUoJHNpemUpIHtcbiAgd2lkdGg6ICRzaXplO1xuICBoZWlnaHQ6ICRzaXplO1xuICBmb250LXNpemU6ICRzaXplO1xuICBsaW5lLWhlaWdodDogJHNpemU7XG59XG4iLCIkYnJlYWtwb2ludC1tb2JpbGU6IDc2OHB4O1xuJGJyZWFrcG9pbnQtdGFibGV0OiA5NjBweDtcblxuJC1icmVha3BvaW50LXF1ZXJpZXM6IChcbiAgbW9iaWxlOiBcIihtYXgtd2lkdGg6ICN7JGJyZWFrcG9pbnQtbW9iaWxlfSlcIixcbiAgdGFibGV0OlxuICAgIFwiKG1pbi13aWR0aDogI3skYnJlYWtwb2ludC1tb2JpbGUgKyAxcHh9KSBhbmQgKG1heC13aWR0aDogI3skYnJlYWtwb2ludC10YWJsZXR9KVwiLFxuICBkZXNrdG9wOiBcIihtaW4td2lkdGg6ICN7YnJlYWtwb2ludC10YWJsZXQgKyAxcHh9KVwiLFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHR5cGVzLi4uKSB7XG4gICRxdWVyaWVzOiAoKTtcbiAgQGVhY2ggJHR5cGUgaW4gJHR5cGVzIHtcbiAgICAkcXVlcnk6IG1hcC1nZXQoJC1icmVha3BvaW50LXF1ZXJpZXMsICR0eXBlKTtcbiAgICBAaWYgJHF1ZXJ5IHtcbiAgICAgICRxdWVyaWVzOiBhcHBlbmQoJHF1ZXJpZXMsICRxdWVyeSwgJHNlcGFyYXRvcjogY29tbWEpO1xuICAgIH1cbiAgfVxuXG4gIEBpZiBsZW5ndGgoJHF1ZXJpZXMpID4gMCB7XG4gICAgQG1lZGlhICN7JHF1ZXJpZXN9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });
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