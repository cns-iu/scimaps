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






function BookOverviewComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookOverviewComponent_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.fullContentVisible = !ctx_r4.fullContentVisible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.fullContentVisible ? "Show less" : "Read more...", " ");
} }
function BookOverviewComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " BOOK EXCERPT (PDF) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.book.pdfLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BookOverviewComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " BUY ON AMAZON ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.book.amazonLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BookOverviewComponent_sci_carousel_item_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-carousel-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("alt", "Image #", i_r7, " for book ", ctx_r3.book.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
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
    } }, inputs: { book: "book", maxContentLength: "maxContentLength" }, decls: 16, vars: 9, consts: [[1, "text-column"], [1, "title"], [1, "author"], [1, "publisher"], ["markdown", "", 1, "markdown", "full", 3, "data"], ["markdown", "", 1, "markdown", "partial", 3, "data"], ["class", "show-more", 3, "click", 4, "ngIf"], [1, "links"], ["class", "button", "target", "_blank", "rel", "noreferrer noopener", 3, "href", 4, "ngIf"], [1, "carousel-column"], [1, "carousel"], [4, "ngFor", "ngForOf"], [1, "show-more", 3, "click"], ["target", "_blank", "rel", "noreferrer noopener", 1, "button", 3, "href"], [3, "src", "alt"]], template: function BookOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BookOverviewComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BookOverviewComponent_a_11_Template, 2, 1, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BookOverviewComponent_a_12_Template, 2, 1, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "sci-carousel", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BookOverviewComponent_sci_carousel_item_15_Template, 2, 3, "sci-carousel-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Author: ", ctx.book.author, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Published by: ", ctx.book.publisher, "");
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
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_1__["MarkdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _carousel_item_component__WEBPACK_IMPORTED_MODULE_4__["CarouselItemComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%], [_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n  width: 50%;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%] {\n  padding-right: 3rem;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .publisher[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .markdown.partial[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%] {\n  display: none;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 1rem;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin: 1rem 1rem 0 0;\n  padding: 0.5rem;\n  border: 1px solid;\n  text-decoration: none;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 25rem;\n  height: 15.625rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%], [_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .markdown.full[_ngcontent-%COMP%] {\n    display: none;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .markdown.partial[_ngcontent-%COMP%] {\n    display: initial;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%] {\n    display: initial;\n  }\n  [_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-right: 0;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ib29rLW92ZXJ2aWV3L2Jvb2stb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRkY7QUFJRTs7RUFFRSxVQUFBO0FBRko7QUFLRTtFQUNFLG1CQUFBO0FBSEo7QUFLSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUhOO0FBTUk7RUFDRSxtQkFBQTtBQUpOO0FBT0k7RUFDRSxhQUFBO0FBTE47QUFRSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBTk47QUFTSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVBOO0FBU007RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVlFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBVko7QUFZSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBVk47QUFjRTtFQTNERjtJQTRESSw4QkFBQTtFQVhGO0VBYUU7O0lBRUUsV0FBQTtFQVhKO0VBY0U7SUFDRSxnQkFBQTtFQVpKO0VBY0k7SUFDRSxhQUFBO0VBWk47RUFlSTtJQUNFLGdCQUFBO0VBYk47RUFnQkk7SUFDRSxnQkFBQTtFQWROO0VBa0JFO0lBQ0UsbUJBQUE7RUFoQko7QUFDRjtBQW1CRTtFQUNFO0lBQ0Usc0JBQUE7RUFqQko7RUFtQkk7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VBakJOO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Jvb2stb3ZlcnZpZXcvYm9vay1vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzaW5nbGUtY29sdW1uLW1heC13aWR0aDogNzY4cHg7XG4kYnV0dG9uLXNwYW4tbWF4LXdpZHRoOiA0ODBweDtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcblxuICAudGV4dC1jb2x1bW4sXG4gIC5jYXJvdXNlbC1jb2x1bW4ge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICAudGV4dC1jb2x1bW4ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB9XG5cbiAgICAucHVibGlzaGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgLm1hcmtkb3duLnBhcnRpYWwge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuc2hvdy1tb3JlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmxpbmtzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcblxuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMXJlbSAxcmVtIDAgMDtcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jYXJvdXNlbC1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgICAuY2Fyb3VzZWwge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDI1cmVtO1xuICAgICAgaGVpZ2h0OiAxNS42MjVyZW07XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRzaW5nbGUtY29sdW1uLW1heC13aWR0aCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblxuICAgIC50ZXh0LWNvbHVtbixcbiAgICAuY2Fyb3VzZWwtY29sdW1uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC50ZXh0LWNvbHVtbiB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuXG4gICAgICAubWFya2Rvd24uZnVsbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5tYXJrZG93bi5wYXJ0aWFsIHtcbiAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICAgIH1cblxuICAgICAgLnNob3ctbW9yZSB7XG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhcm91c2VsLWNvbHVtbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnV0dG9uLXNwYW4tbWF4LXdpZHRoKSB7XG4gICAgLnRleHQtY29sdW1uIC5saW5rcyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAuYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
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





const routes = [{ path: '', component: _books_component__WEBPACK_IMPORTED_MODULE_2__["BooksComponent"] }];
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
            }
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
    } }, directives: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__["SwiperDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .swiper-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  height: calc(100% - 3rem);\n  margin-bottom: 3rem;\n}\n[_nghost-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%], [_nghost-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n  top: unset;\n  bottom: 0.75rem;\n}\n[_nghost-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .swiper-pagination[_ngcontent-%COMP%] {\n  bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtBQUNKO0FBQ0k7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBQ047QUFFSTs7RUFFRSxVQUFBO0VBQ0EsZUFBQTtBQUFOO0FBR0k7RUFDRSxZQUFBO0FBRE4iLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLnN3aXBlci13cmFwcGVyIHtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gM3JlbSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIH1cblxuICAgIC5zd2lwZXItYnV0dG9uLXByZXYsXG4gICAgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgICB0b3A6IHVuc2V0O1xuICAgICAgYm90dG9tOiAwLjc1cmVtO1xuICAgIH1cblxuICAgIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgICBib3R0b206IDFyZW07XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0\u00A0800.555.1212");
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_components_book_overview_book_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/book-overview/book-overview.component */ "2k/r");




function BooksComponent_sci_book_overview_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sci-book-overview", 1);
} if (rf & 2) {
    const book_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("book", book_r1);
} }
class BooksComponent {
    constructor() {
        this.books = [
            {
                title: 'Atlas of Science: Visualizing What We Know',
                author: 'Katy Börner',
                publisher: 'MIT Press',
                body: 'Atlas of Science, based on the popular exhibit Places & Spaces: Mapping Science, describes and displays successful mapping techniques. The heart of the book is a visual feast: Claudius Ptolemy\'s Cosmographia World Map from 1482; a guide to a PhD thesis that resembles a subway map; "the structure of science" as revealed in a map of citation relationships in papers published in 2002; a periodic table; and many more. Each entry includes the story behind the map and biographies of its makers.',
                pdfLink: 'http://www.barnesandnoble.com/w/atlas-of-science-katy-borner/1100660429?cm_mmc=googlepla-_-textbook_instock_26to75_pt105-_-q000000633-_-9780262014458&ean=9780262014458&isbn=9780262014458&r=1',
                amazonLink: 'http://www.amazon.com/Atlas-Science-Visualizing-What-Know/dp/0262014459/ref=sr_1_1?ie=UTF8&qid=1400082763&sr=8-1&keywords=atlas+of+science',
                slug: 'atlas-of-science',
                images: []
            },
            {
                title: 'Atlas of Knowledge: Anyone Can Map',
                author: 'Katy Börner',
                publisher: 'MIT Press',
                body: 'In an age of information overload, the ability to make sense of vast amounts of data and to render insightful visualizations is as important as the ability to read and write. The Atlas of Knowledge explains and exemplifies the power of visualizations not only to help locate us in physical space but also to help us understand the extent and structure of our collective knowledge, to identify bursts of activity, pathways of ideas, and borders that beg to be crossed.',
                pdfLink: 'https://www.barnesandnoble.com/w/atlas-of-knowledge-katy-b-rner/1120681679?ean=9780262028813',
                amazonLink: 'https://www.amazon.com/Atlas-Knowledge-Anyone-Can-Press/dp/0262028816/ref=sr_1_2?ie=UTF8&qid=1471440921&sr=8-2&keywords=atlas+of+science',
                slug: 'atlas-of-knowledge',
                images: []
            },
            {
                title: 'Visual Insights: A Practical Guide to Making Sense of Data',
                author: 'Katy Börner & David E. Polley',
                publisher: 'MIT Press',
                body: '# Debita *est penetralibus* aut putares formae iunctasque\n\n## **Quaerit** portasque suarum cuspide\n\nLorem markdownum altum me Auguste loca concolor fide frustra. Primo pondus aliasque ab illas admonitu Hymenaeon minatur linguam irascitur laeva; defendere ecce.\n\nMihi facilesque. Pro reverti caput, erat quoniam artem Melantho privignae neque. Decus ut Plexippi illius fulvo: vix ora nam hoc, diffusa neque iactatis: ut. Sed **dixerat**, sermonibus liquidis venit nisi ignavi vestis corpore draconi lambentem esset procellamnos atque.\n\n## Toto dixit admirantibus cognita\n\nAb Manto. Sanguis semimari heres in tamen nervus clavam Circaea terrae ignorantia animae, et patrio. Vestem erant, quid proque se nostris robore, faciebat Haec factum gramen, Elis vetus illo fibula patrias, damna.',
                pdfLink: 'http://www.barnesandnoble.com/w/visual-insights-katy-b-rner/1117270498?ean=9780262526197',
                amazonLink: 'http://www.amazon.com/Visual-Insights-Practical-Guide-Making/dp/0262526190/ref=sr_1_1?ie=UTF8&qid=1384193730&sr=8-1&keywords=visual+insights+a+practical+guide',
                slug: 'visual-insights',
                images: []
            }
        ];
    }
}
BooksComponent.ɵfac = function BooksComponent_Factory(t) { return new (t || BooksComponent)(); };
BooksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BooksComponent, selectors: [["sci-books"]], decls: 1, vars: 1, consts: [["class", "book", 3, "book", 4, "ngFor", "ngForOf"], [1, "book", 3, "book"]], template: function BooksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BooksComponent_sci_book_overview_0_Template, 1, 1, "sci-book-overview", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_components_book_overview_book_overview_component__WEBPACK_IMPORTED_MODULE_2__["BookOverviewComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .book[_ngcontent-%COMP%] {\n  margin-bottom: 6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9ib29rcy9ib29rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7QUFDSiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvcGFnZXMvYm9va3MvYm9va3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIC5ib29rIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2cmVtO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-books',
                templateUrl: './books.component.html',
                styleUrls: ['./books.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/breakpoint.directive */ "EpdQ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _shared_components_menu_icon_menu_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/menu-icon/menu-icon.component */ "EbOm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "Jb3d");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contact/contact.component */ "9lgV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "2kYt");










function HeaderComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.sidenavOpenChange.emit(ctx_r3.sidenavOpen = !ctx_r3.sidenavOpen); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "sci-menu-icon", 6);
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
function HeaderComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ABOUT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " THE EXHIBIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "MAPS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "MACROSCOPES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "BOOKS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "CALL FOR MACROSCOPES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "VENUES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "HOSTING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " EXPLORE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-menu", 10, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "LEARNING CENTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " CONTACT US ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-menu", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "sci-contact", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 27);
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, _r5.menuClosed) || _r5.menuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 11, _r7.menuClosed) || _r7.menuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 13, _r9.menuClosed) || _r9.menuOpen);
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
    } }, inputs: { sidenavOpen: "sidenavOpen" }, outputs: { sidenavOpenChange: "sidenavOpenChange" }, decls: 5, vars: 2, consts: [[1, "logo"], [1, "filler"], [4, "sciBreakpoint", "sciBreakpointElse"], ["desktopNav", ""], [1, "sidenav-toggle"], ["mat-flat-button", "", 3, "click"], [3, "alternateIcon"], ["mat-button", "", "routerLink", "/about", "routerLinkActive", "active", 1, "nav-item", "about", "mat-display-3"], ["mat-button", "", 1, "nav-item", "exhibit", "mat-display-3", 3, "matMenuTriggerFor"], ["exhibitTrigger", "matMenuTrigger"], [1, "sci-header-menu"], ["exhibit", "matMenu"], ["mat-button", "", "routerLink", "/maps", "routerLinkActive", "active", 1, "mat-display-3"], ["mat-button", "", "routerLink", "/macroscopes", "routerLinkActive", "active", 1, "mat-display-3"], ["mat-button", "", "routerLink", "/books", "routerLinkActive", "active", 1, "mat-display-3"], ["mat-button", "", "routerLink", "/call-for-macroscopes", "routerLinkActive", "active", 1, "mat-display-3"], ["mat-button", "", "routerLink", "/venues", "routerLinkActive", "active", 1, "mat-display-3"], ["mat-button", "", "routerLink", "/hosting", "routerLinkActive", "active", 1, "mat-display-3"], ["mat-button", "", 1, "nav-item", "explore", "mat-display-3", 3, "matMenuTriggerFor"], ["exploreTrigger", "matMenuTrigger"], ["explore", "matMenu"], ["mat-button", "", "routerLink", "/learning-center", "routerLinkActive", "active", 1, "mat-display-3"], ["mat-button", "", 1, "nav-item", "contact", "mat-display-3", 3, "matMenuTriggerFor"], ["contactTrigger", "matMenuTrigger"], [1, "sci-header-menu", "no-padding"], ["contact", "matMenu"], [1, "contact"], [1, "search"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_ng_container_2_Template, 4, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_ng_template_3_Template, 40, 15, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "tablet-")("sciBreakpointElse", _r1);
    } }, directives: [_shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_1__["BreakpointDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _shared_components_menu_icon_menu_icon_component__WEBPACK_IMPORTED_MODULE_3__["MenuIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 4.5rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%], [_nghost-%COMP%]   .sidenav-toggle[_ngcontent-%COMP%], [_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%], [_nghost-%COMP%]   .search[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0 1.5rem;\n}\n[_nghost-%COMP%]   .sidenav-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .sidenav-toggle.open[_ngcontent-%COMP%] {\n  border-left-width: 1px;\n  border-left-style: solid;\n}\n[_nghost-%COMP%]   .sidenav-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: unset;\n  padding: 0;\n}\n[_nghost-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n  .sci-header-menu button {\n  width: 100%;\n  height: 3rem;\n  text-align: start;\n}\n  .sci-header-menu.no-padding > .mat-menu-content {\n  padding: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFOzs7O0VBSUUsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDRSxzQkFBQTtFQUNBLHdCQUFBO0FBQU47QUFHSTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQUROO0FBS0U7RUFDRSxZQUFBO0FBSEo7QUFTRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFOSjtBQVNFO0VBQ0UsY0FBQTtBQVBKIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNC41cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5sb2dvLFxuICAuc2lkZW5hdi10b2dnbGUsXG4gIC5uYXYtaXRlbSxcbiAgLnNlYXJjaCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICB9XG5cbiAgLnNpZGVuYXYtdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmLm9wZW4ge1xuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcbiAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICB9XG5cbiAgLmZpbGxlciB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG59XG5cbi8vIEFubm95aW5nIGFuZ3VsYXIgb3ZlcmxheXMuLi5cbjo6bmctZGVlcCAuc2NpLWhlYWRlci1tZW51IHtcbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIH1cblxuICAmLm5vLXBhZGRpbmcgPiAubWF0LW1lbnUtY29udGVudCB7XG4gICAgcGFkZGluZzogdW5zZXQ7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _news_item_news_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../news-item/news-item.component */ "hHWb");








function NewsItemListComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", year_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", year_r3, " ");
} }
function NewsItemListComponent_div_23_sci_news_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sci-news-item", 14);
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r4);
} }
function NewsItemListComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsItemListComponent_div_23_sci_news_item_1_Template, 1, 1, "sci-news-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showAllItems || ctx_r1.displayedNewsItems.indexOf(item_r4) < 4);
} }
function NewsItemListComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsItemListComponent_div_24_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.showAllItems = !ctx_r7.showAllItems; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.showButtonText, "");
} }
/**
 * Component for displaying news items
 */
class NewsItemListComponent {
    constructor() {
        /**
         * Component class name
         */
        this.clsName = 'sci-news-item-list';
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
        /**
         * Currently selected year
         */
        this.selectedYear = 'All';
    }
    /**
     * Sorts all items by date on init
     */
    ngOnInit() {
        this.displayedNewsItems = this.newsItems;
        this.sort('date');
    }
    /**
     * Sorts displayed news items according to criteria
     * @param criteria Criteria to be sorted by
     */
    sort(criteria) {
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
        this.displayedNewsItems = [...this.displayedNewsItems].sort(this.compareValues(criteria, order));
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
    /**
     * List of options to be displayed in year select dropdown
     */
    get yearList() {
        const years = this.newsItems.map(item => item.date.getFullYear().toString());
        return ['All'].concat([...new Set(years)]);
    }
    /**
     * Filters displayed news items by selected year
     * @param value Selected value
     */
    onYearChange(value) {
        this.sort('date');
        if (value === 'All') {
            this.displayedNewsItems = [...this.newsItems];
        }
        else {
            this.displayedNewsItems = [...this.newsItems].filter((item) => item.date.getFullYear().toString() === value);
        }
    }
    /**
     * Text to be displayed in show more button
     */
    get showButtonText() {
        return (this.showAllItems) ? 'Show Less' : 'Show More';
    }
    /**
     * Determines if show more button should be shown
     * @returns true if there are 4 or fewer items displayed
     */
    needShowMoreButton() {
        return (this.displayedNewsItems.length < 5) ? false : true;
    }
}
NewsItemListComponent.ɵfac = function NewsItemListComponent_Factory(t) { return new (t || NewsItemListComponent)(); };
NewsItemListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsItemListComponent, selectors: [["sci-news-item-list"]], hostVars: 2, hostBindings: function NewsItemListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { newsItems: "newsItems" }, decls: 25, vars: 10, consts: [[1, "filter-header"], ["appearance", "fill", 1, "year-select"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "sort-filters"], [1, "sort", "date", 3, "click"], [1, "sort", "title", 3, "click"], [1, "sort", "publication", 3, "click"], [1, "news-item-list"], ["class", "news-item", 4, "ngFor", "ngForOf"], ["class", "show-more", 3, "click", 4, "ngIf"], [3, "value"], [1, "news-item"], [3, "item", 4, "ngIf"], [3, "item"], [1, "show-more", 3, "click"]], template: function NewsItemListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function NewsItemListComponent_Template_mat_select_valueChange_4_listener($event) { return ctx.selectedYear = $event; })("selectionChange", function NewsItemListComponent_Template_mat_select_selectionChange_4_listener($event) { return ctx.onYearChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NewsItemListComponent_mat_option_5_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsItemListComponent_Template_div_click_7_listener() { return ctx.sort("date"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "filter_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsItemListComponent_Template_div_click_12_listener() { return ctx.sort("title"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "filter_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsItemListComponent_Template_div_click_17_listener() { return ctx.sort("publication"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Publication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "filter_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NewsItemListComponent_div_23_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NewsItemListComponent_div_24_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yearList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("reversed", ctx.dateOrder === "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("reversed", ctx.titleOrder === "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("reversed", ctx.publicationOrder === "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedNewsItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.needShowMoreButton());
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], _news_item_news_item_component__WEBPACK_IMPORTED_MODULE_6__["NewsItemComponent"]], styles: ["[_nghost-%COMP%]   .filter-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .filter-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    margin-left: 0.5rem;\n  }\n}\n[_nghost-%COMP%]   .filter-header[_ngcontent-%COMP%]   .year-select[_ngcontent-%COMP%] {\n  margin-right: 1.5rem;\n}\n[_nghost-%COMP%]   .filter-header[_ngcontent-%COMP%]   .year-select[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  height: 3rem;\n  margin-bottom: 1em;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .filter-header[_ngcontent-%COMP%]   .year-select[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n    margin-bottom: 0.5rem;\n    align-items: center;\n    padding-bottom: 0;\n  }\n}\n[_nghost-%COMP%]   .filter-header[_ngcontent-%COMP%]   .year-select[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix {\n  width: 5rem;\n}\n[_nghost-%COMP%]   .filter-header[_ngcontent-%COMP%]   .year-select[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-select-arrow-wrapper {\n  display: block;\n}\n[_nghost-%COMP%]   .filter-header[_ngcontent-%COMP%]   .year-select[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-underline {\n  bottom: 0;\n}\n[_nghost-%COMP%]   .filter-header[_ngcontent-%COMP%]   .sort-filters[_ngcontent-%COMP%] {\n  display: flex;\n  height: 3rem;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .filter-header[_ngcontent-%COMP%]   .sort-filters[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n}\n[_nghost-%COMP%]   .filter-header[_ngcontent-%COMP%]   .sort-filters[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 1.5rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  -moz-user-select: none;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .filter-header[_ngcontent-%COMP%]   .sort-filters[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%] {\n    margin-right: 0.5rem;\n  }\n}\n[_nghost-%COMP%]   .filter-header[_ngcontent-%COMP%]   .sort-filters[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: scaleY(-1);\n  margin-left: 0.5rem;\n}\n[_nghost-%COMP%]   .filter-header[_ngcontent-%COMP%]   .sort-filters[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%] {\n  transform: none;\n}\n[_nghost-%COMP%]   .news-item-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .news-item-list[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .news-item-list[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .show-more[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 2.5rem;\n  width: 100%;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  -moz-user-select: none;\n  border-width: 1px;\n  border-style: solid;\n  margin: 2rem 0;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .show-more[_ngcontent-%COMP%] {\n    margin: 2rem 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uZXdzLWl0ZW0tbGlzdC9uZXdzLWl0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3NjaW1hcHMvc3JjL3N0eWxpbmcvX3NjcmVlbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRko7QUNpQkk7RURqQkY7SUFLSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUFESjtBQUNGO0FBR0k7RUFDRSxvQkFBQTtBQUROO0FBR007RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQ0dJO0VESkU7SUFLSSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUFBUjtBQUNGO0FBR1U7RUFDRSxXQUFBO0FBRFo7QUFHWTtFQUNFLGNBQUE7QUFEZDtBQU1RO0VBQ0UsU0FBQTtBQUpWO0FBU0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBUE47QUNsQkk7RURzQkE7SUFNSSxXQUFBO0lBQ0EsOEJBQUE7RUFOTjtBQUNGO0FBUU07RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLHNCQUFBO0FBTlI7QUMvQkk7RURnQ0U7SUFRSSxvQkFBQTtFQUxSO0FBQ0Y7QUFPUTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFMVjtBQVFRO0VBQ0UsZUFBQTtBQU5WO0FBWUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQVZKO0FBWUk7RUFDRSxVQUFBO0FBVk47QUNsREk7RUQyREE7SUFJSSxXQUFBO0VBVE47QUFDRjtBQWFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVhKO0FDcEVJO0VEb0VGO0lBY0ksbUJBQUE7RUFWSjtBQUNGIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uZXdzLWl0ZW0tbGlzdC9uZXdzLWl0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3NjcmVlbic7XG5cbjpob3N0IHtcbiAgLmZpbHRlci1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIEBpbmNsdWRlIHNjcmVlbi5icmVha3BvaW50KG1vYmlsZSkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICB9XG5cbiAgICAueWVhci1zZWxlY3Qge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG5cbiAgICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuXG4gICAgICAgIEBpbmNsdWRlIHNjcmVlbi5icmVha3BvaW50KG1vYmlsZSkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICAgICAgICB3aWR0aDogNXJlbTtcblxuICAgICAgICAgICAgLm1hdC1zZWxlY3QtYXJyb3ctd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5zb3J0LWZpbHRlcnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIEBpbmNsdWRlIHNjcmVlbi5icmVha3BvaW50KG1vYmlsZSkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuXG4gICAgICAuc29ydCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgICAgIEBpbmNsdWRlIHNjcmVlbi5icmVha3BvaW50KG1vYmlsZSkge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJldmVyc2VkIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubmV3cy1pdGVtLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLm5ld3MtaXRlbSB7XG4gICAgICB3aWR0aDogNTAlO1xuXG4gICAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNob3ctbW9yZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgbWFyZ2luOiAycmVtIDA7XG5cbiAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgIG1hcmdpbjogMnJlbSAwLjVyZW07XG4gICAgfVxuICB9XG59XG4iLCIkYnJlYWtwb2ludC1tb2JpbGU6IDc2OHB4O1xuJGJyZWFrcG9pbnQtdGFibGV0OiA5NjBweDtcblxuJC1icmVha3BvaW50LXF1ZXJpZXM6IChcbiAgbW9iaWxlOiBcIihtYXgtd2lkdGg6ICN7JGJyZWFrcG9pbnQtbW9iaWxlfSlcIixcbiAgdGFibGV0OlxuICAgIFwiKG1pbi13aWR0aDogI3skYnJlYWtwb2ludC1tb2JpbGUgKyAxcHh9KSBhbmQgKG1heC13aWR0aDogI3skYnJlYWtwb2ludC10YWJsZXR9KVwiLFxuICBkZXNrdG9wOiBcIihtaW4td2lkdGg6ICN7YnJlYWtwb2ludC10YWJsZXQgKyAxcHh9KVwiLFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHR5cGVzLi4uKSB7XG4gICRxdWVyaWVzOiAoKTtcbiAgQGVhY2ggJHR5cGUgaW4gJHR5cGVzIHtcbiAgICAkcXVlcnk6IG1hcC1nZXQoJC1icmVha3BvaW50LXF1ZXJpZXMsICR0eXBlKTtcbiAgICBAaWYgJHF1ZXJ5IHtcbiAgICAgICRxdWVyaWVzOiBhcHBlbmQoJHF1ZXJpZXMsICRxdWVyeSwgJHNlcGFyYXRvcjogY29tbWEpO1xuICAgIH1cbiAgfVxuXG4gIEBpZiBsZW5ndGgoJHF1ZXJpZXMpID4gMCB7XG4gICAgQG1lZGlhICN7JHF1ZXJpZXN9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsItemListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-news-item-list',
                templateUrl: './news-item-list.component.html',
                styleUrls: ['./news-item-list.component.scss']
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], newsItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/header/header.component */ "OOyK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "lQ7A");
/* harmony import */ var _core_components_mobile_header_menu_mobile_header_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/mobile-header-menu/mobile-header-menu.component */ "uOwt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/footer/footer.component */ "x0xU");








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
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["sci-root"]], decls: 9, vars: 3, consts: [[1, "header", 3, "sidenavOpen", "sidenavOpenChange"], [1, "sidenav-container"], ["mode", "over", "position", "end", "fixedInViewport", "", "fixedTopGap", "72", 3, "opened", "closedStart"], [1, "sidenav-content"], [1, "content"], ["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavOpenChange", function AppComponent_Template_sci_header_sidenavOpenChange_0_listener($event) { return ctx.sidenavOpen = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closedStart", function AppComponent_Template_mat_sidenav_closedStart_2_listener() { return ctx.sidenavOpen = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "sci-mobile-header-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "sci-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidenavOpen", ctx.sidenavOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.sidenavOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
    } }, directives: [_core_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _core_components_mobile_header_menu_mobile_header_menu_component__WEBPACK_IMPORTED_MODULE_4__["MobileHeaderMenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n[_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBREY7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFESjtBQUtJO0VBREY7SUFFSSxZQUFBO0VBRko7QUFDRjtBQUlJO0VBQ0UsZUFBQTtBQUZOIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbW9iaWxlOiA2NDBweDtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gIC5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDIwO1xuICB9XG5cbiAgLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [
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
/* harmony import */ var _news_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-item.component */ "hHWb");




class NewsItemModule {
}
NewsItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NewsItemModule });
NewsItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NewsItemModule_Factory(t) { return new (t || NewsItemModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewsItemModule, { declarations: [_news_item_component__WEBPACK_IMPORTED_MODULE_2__["NewsItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_news_item_component__WEBPACK_IMPORTED_MODULE_2__["NewsItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewsItemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_news_item_component__WEBPACK_IMPORTED_MODULE_2__["NewsItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                ],
                exports: [
                    _news_item_component__WEBPACK_IMPORTED_MODULE_2__["NewsItemComponent"]
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
            { namespace: 'social', name: 'facebook', url: 'assets/social-media-logos/facebook.svg' }
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
    } }, inputs: { item: "item" }, decls: 10, vars: 9, consts: [[1, "news-item", 3, "href"], ["alt", "image thumbnail", 1, "thumb", 3, "src"], [1, "info"], [1, "date", "mat-display-1"], [1, "title"], [1, "identifier"]], template: function NewsItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.item.pdfLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.item.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, ctx.item.date, "mediumDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.item.publication, " at ", ctx.item.institution, "");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  text-decoration: none;\n  margin: 0.5rem;\n  border-radius: 0.125rem;\n  max-height: 8rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.54);\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .news-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    max-height: 16rem;\n  }\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%] {\n  width: 9rem;\n  object-fit: cover;\n  border-width: 0.125px;\n  border-style: solid;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%] {\n    height: 6rem;\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  height: 20px;\n  text-transform: uppercase;\n  font-size: 12px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 40px;\n  font-weight: 700;\n  margin: 0.5rem 0;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .identifier[_ngcontent-%COMP%] {\n  font-weight: 300;\n  height: 20px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .news-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.54);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uZXdzLWl0ZW0vbmV3cy1pdGVtLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvc2NpbWFwcy9zcmMvc3R5bGluZy9fc2NyZWVuLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUFGSjtBQ1lJO0VEakJGO0lBVUksc0JBQUE7SUFDQSxpQkFBQTtFQURKO0FBQ0Y7QUFHSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFETjtBQ0FJO0VESEE7SUFPSSxZQUFBO0lBQ0EsV0FBQTtFQUFOO0FBQ0Y7QUFHSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUROO0FBR007RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUlNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUZSO0FBS007RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUhSO0FBT0k7RUFDRSx5Q0FBQTtBQUxOIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uZXdzLWl0ZW0vbmV3cy1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2NyZWVuJztcblxuOmhvc3Qge1xuICAubmV3cy1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbjogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xuICAgIG1heC1oZWlnaHQ6IDhyZW07XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41NCk7XG5cbiAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXgtaGVpZ2h0OiAxNnJlbTtcbiAgICB9XG5cbiAgICAudGh1bWIge1xuICAgICAgd2lkdGg6IDlyZW07XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIGJvcmRlci13aWR0aDogMC4xMjVweDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG5cbiAgICAgIEBpbmNsdWRlIHNjcmVlbi5icmVha3BvaW50KG1vYmlsZSkge1xuICAgICAgICBoZWlnaHQ6IDZyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgLmRhdGUge1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAuaWRlbnRpZmllciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgIH1cbiAgfVxufVxuIiwiJGJyZWFrcG9pbnQtbW9iaWxlOiA3NjhweDtcbiRicmVha3BvaW50LXRhYmxldDogOTYwcHg7XG5cbiQtYnJlYWtwb2ludC1xdWVyaWVzOiAoXG4gIG1vYmlsZTogXCIobWF4LXdpZHRoOiAjeyRicmVha3BvaW50LW1vYmlsZX0pXCIsXG4gIHRhYmxldDpcbiAgICBcIihtaW4td2lkdGg6ICN7JGJyZWFrcG9pbnQtbW9iaWxlICsgMXB4fSkgYW5kIChtYXgtd2lkdGg6ICN7JGJyZWFrcG9pbnQtdGFibGV0fSlcIixcbiAgZGVza3RvcDogXCIobWluLXdpZHRoOiAje2JyZWFrcG9pbnQtdGFibGV0ICsgMXB4fSlcIixcbik7XG5cbkBtaXhpbiBicmVha3BvaW50KCR0eXBlcy4uLikge1xuICAkcXVlcmllczogKCk7XG4gIEBlYWNoICR0eXBlIGluICR0eXBlcyB7XG4gICAgJHF1ZXJ5OiBtYXAtZ2V0KCQtYnJlYWtwb2ludC1xdWVyaWVzLCAkdHlwZSk7XG4gICAgQGlmICRxdWVyeSB7XG4gICAgICAkcXVlcmllczogYXBwZW5kKCRxdWVyaWVzLCAkcXVlcnksICRzZXBhcmF0b3I6IGNvbW1hKTtcbiAgICB9XG4gIH1cblxuICBAaWYgbGVuZ3RoKCRxdWVyaWVzKSA+IDAge1xuICAgIEBtZWRpYSAjeyRxdWVyaWVzfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
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







class NewsItemListModule {
}
NewsItemListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NewsItemListModule });
NewsItemListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NewsItemListModule_Factory(t) { return new (t || NewsItemListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _news_item_news_item_module__WEBPACK_IMPORTED_MODULE_5__["NewsItemModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewsItemListModule, { declarations: [_news_item_list_component__WEBPACK_IMPORTED_MODULE_4__["NewsItemListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
        _news_item_news_item_module__WEBPACK_IMPORTED_MODULE_5__["NewsItemModule"]], exports: [_news_item_list_component__WEBPACK_IMPORTED_MODULE_4__["NewsItemListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsItemListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_news_item_list_component__WEBPACK_IMPORTED_MODULE_4__["NewsItemListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                    _news_item_news_item_module__WEBPACK_IMPORTED_MODULE_5__["NewsItemModule"]
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
/* harmony import */ var _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel/carousel.module */ "8yKn");
/* harmony import */ var _book_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-overview.component */ "2k/r");






class BookOverviewModule {
}
BookOverviewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BookOverviewModule });
BookOverviewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BookOverviewModule_Factory(t) { return new (t || BookOverviewModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"], _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BookOverviewModule, { declarations: [_book_overview_component__WEBPACK_IMPORTED_MODULE_4__["BookOverviewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"], _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"]], exports: [_book_overview_component__WEBPACK_IMPORTED_MODULE_4__["BookOverviewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BookOverviewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"], _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"]],
                declarations: [_book_overview_component__WEBPACK_IMPORTED_MODULE_4__["BookOverviewComponent"]],
                exports: [_book_overview_component__WEBPACK_IMPORTED_MODULE_4__["BookOverviewComponent"]]
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
        /** HTML class */
        this.clsName = 'sci-mobile-header-menu mat-dispay-3';
    }
}
MobileHeaderMenuComponent.ɵfac = function MobileHeaderMenuComponent_Factory(t) { return new (t || MobileHeaderMenuComponent)(); };
MobileHeaderMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileHeaderMenuComponent, selectors: [["sci-mobile-header-menu"]], hostVars: 2, hostBindings: function MobileHeaderMenuComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 16, vars: 0, consts: [[1, "top-border-overlay"], [1, "search"], ["mat-button", "", "routerLink", "/maps", 1, "link", "mat-display-3"], ["mat-button", "", "routerLink", "/macroscopes", 1, "link", "mat-display-3"], ["mat-button", "", "routerLink", "/books", 1, "link", "mat-display-3"], ["mat-button", "", "routerLink", "/call-for-macroscopes", 1, "link", "mat-display-3"], ["mat-button", "", "routerLink", "/venues", 1, "link", "mat-display-3"], ["mat-button", "", "routerLink", "/hosting", 1, "link", "mat-display-3"], [1, "filler"]], template: function MobileHeaderMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MAPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MACROSCOPES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "BOOKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "CALL FOR MACROSCOPES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "VENUES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "HOSTING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "sci-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 8);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  border-top-width: 1px;\n  border-top-style: solid;\n}\n[_nghost-%COMP%]   .search[_ngcontent-%COMP%], [_nghost-%COMP%]   .link[_ngcontent-%COMP%] {\n  height: 3rem;\n}\n[_nghost-%COMP%]   .search[_ngcontent-%COMP%], [_nghost-%COMP%]   .link[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[_nghost-%COMP%]   .top-border-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 5.25rem;\n  height: 0.25rem;\n  top: -0.125rem;\n  right: 0;\n}\n[_nghost-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbW9iaWxlLWhlYWRlci1tZW51L21vYmlsZS1oZWFkZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7QUFDSjtBQUVFO0VBQ0UscUJBQUE7QUFBSjtBQUdFO0VBQ0UsZ0JBQUE7QUFESjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0FBRko7QUFLRTtFQUNFLFlBQUE7QUFISiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL21vYmlsZS1oZWFkZXItbWVudS9tb2JpbGUtaGVhZGVyLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcblxuICAuc2VhcmNoLCAubGluayB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICB9XG5cbiAgLnNlYXJjaCwgLmxpbms6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG5cbiAgLmxpbmsge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAudG9wLWJvcmRlci1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDUuMjVyZW07XG4gICAgaGVpZ2h0OiAwLjI1cmVtO1xuICAgIHRvcDogLTAuMTI1cmVtO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLmZpbGxlciB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileHeaderMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-mobile-header-menu',
                templateUrl: './mobile-header-menu.component.html',
                styleUrls: ['./mobile-header-menu.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { clsName: [{
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
    { path: 'about', loadChildren: () => __webpack_require__.e(/*! import() | pages-about-about-module */ "pages-about-about-module").then(__webpack_require__.bind(null, /*! ./pages/about/about.module */ "UoYK")).then(m => m.AboutModule) },
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
        loadChildren: () => __webpack_require__.e(/*! import() | pages-call-for-macroscopes-call-for-macroscopes-module */ "pages-call-for-macroscopes-call-for-macroscopes-module").then(__webpack_require__.bind(null, /*! ./pages/call-for-macroscopes/call-for-macroscopes.module */ "uXZP")).then(m => m.CallForMacroscopesModule)
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
    } }, inputs: { phoneNumber: "phoneNumber", acknowledgement: "acknowledgement" }, decls: 24, vars: 2, consts: [[1, "contact"], [1, "social"], ["mat-icon-button", "", 1, "button", "twitter"], ["svgIcon", "social:twitter", 1, "icon", "svg"], ["mat-icon-button", "", 1, "button", "facebook"], ["mat-icon-button", "", 1, "button", "email"], [1, "icon", "font"], ["mat-icon-button", "", 1, "button", "instagram"], ["mat-icon-button", "", 1, "button", "map"], [1, "filler"], [1, "phone"], [1, "text", "mat-display-2"], [1, "acknowledgement", "mat-small"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.acknowledgement, "\n");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 4.5rem;\n  flex-direction: row;\n  align-items: center;\n  padding: 0 1rem 0 0.25rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0.75rem 0 0.75rem 0.75rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding: 0 0 0 0.75rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  font-size: 3rem;\n  line-height: 3rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n[_nghost-%COMP%]   .acknowledgement[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .acknowledgement[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3NjaW1hcHMvc3JjL3N0eWxpbmcvX2ljb24uc2NzcyIsInByb2plY3RzL3NjaW1hcHMvc3JjL3N0eWxpbmcvX3NjcmVlbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBQTtBQUZGO0FBSUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFGSjtBQUlJO0VBQ0UsZ0JBQUE7QUFGTjtBQUlNO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBRlI7QUFNSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUFKTjtBQU1NO0VBQ0Usc0JBQUE7QUFKUjtBQVFJO0VDaENGLFdEaUN1QjtFQ2hDdkIsWURnQ3VCO0VDL0J2QixlRCtCdUI7RUM5QnZCLGlCRDhCdUI7QUFIekI7QUFNSTtFQUNFLFlBQUE7QUFKTjtBQVFFO0VBQ0UsYUFBQTtBQU5KO0FFbEJJO0VGNEJBO0lBQ0UsYUFBQTtFQVBKO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnaWNvbic7XG5AdXNlICdzY3JlZW4nO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIC5jb250YWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNC41cmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDFyZW0gMCAwLjI1cmVtO1xuXG4gICAgLnNvY2lhbCB7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuXG4gICAgICAuYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5waG9uZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDAgMC43NXJlbSAwLjc1cmVtO1xuXG4gICAgICAudGV4dCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDAuNzVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgQGluY2x1ZGUgaWNvbi5zaXplKDNyZW0pO1xuICAgIH1cblxuICAgIC5maWxsZXIge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cbiAgfVxuXG4gIC5hY2tub3dsZWRnZW1lbnQge1xuICAgIHBhZGRpbmc6IDNyZW07XG4gIH1cblxuICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAuYWNrbm93bGVkZ2VtZW50IHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuICB9XG59XG4iLCJcbkBtaXhpbiBzaXplKCRzaXplKSB7XG4gIHdpZHRoOiAkc2l6ZTtcbiAgaGVpZ2h0OiAkc2l6ZTtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgbGluZS1oZWlnaHQ6ICRzaXplO1xufVxuIiwiJGJyZWFrcG9pbnQtbW9iaWxlOiA3NjhweDtcbiRicmVha3BvaW50LXRhYmxldDogOTYwcHg7XG5cbiQtYnJlYWtwb2ludC1xdWVyaWVzOiAoXG4gIG1vYmlsZTogXCIobWF4LXdpZHRoOiAjeyRicmVha3BvaW50LW1vYmlsZX0pXCIsXG4gIHRhYmxldDpcbiAgICBcIihtaW4td2lkdGg6ICN7JGJyZWFrcG9pbnQtbW9iaWxlICsgMXB4fSkgYW5kIChtYXgtd2lkdGg6ICN7JGJyZWFrcG9pbnQtdGFibGV0fSlcIixcbiAgZGVza3RvcDogXCIobWluLXdpZHRoOiAje2JyZWFrcG9pbnQtdGFibGV0ICsgMXB4fSlcIixcbik7XG5cbkBtaXhpbiBicmVha3BvaW50KCR0eXBlcy4uLikge1xuICAkcXVlcmllczogKCk7XG4gIEBlYWNoICR0eXBlIGluICR0eXBlcyB7XG4gICAgJHF1ZXJ5OiBtYXAtZ2V0KCQtYnJlYWtwb2ludC1xdWVyaWVzLCAkdHlwZSk7XG4gICAgQGlmICRxdWVyeSB7XG4gICAgICAkcXVlcmllczogYXBwZW5kKCRxdWVyaWVzLCAkcXVlcnksICRzZXBhcmF0b3I6IGNvbW1hKTtcbiAgICB9XG4gIH1cblxuICBAaWYgbGVuZ3RoKCRxdWVyaWVzKSA+IDAge1xuICAgIEBtZWRpYSAjeyRxdWVyaWVzfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
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