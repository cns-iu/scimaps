(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "0XBH":
/*!********************************************!*\
  !*** ./src/app/constants/region-labels.ts ***!
  \********************************************/
/*! exports provided: REGIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGIONS", function() { return REGIONS; });
const REGIONS = {
    n_america: 'North America',
    c_america: 'Central America',
    s_america: 'South America',
    europe: 'Europe',
    asia: 'Asia',
    africa: 'Africa',
    australia: 'Australia',
};


/***/ }),

/***/ "7ZJu":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/partners/partners.module.ts ***!
  \***************************************************************/
/*! exports provided: PartnersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersModule", function() { return PartnersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _partners_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partners.component */ "Oz1G");




class PartnersModule {
}
PartnersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PartnersModule });
PartnersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PartnersModule_Factory(t) { return new (t || PartnersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PartnersModule, { declarations: [_partners_component__WEBPACK_IMPORTED_MODULE_2__["PartnersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_partners_component__WEBPACK_IMPORTED_MODULE_2__["PartnersComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartnersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_partners_component__WEBPACK_IMPORTED_MODULE_2__["PartnersComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_partners_component__WEBPACK_IMPORTED_MODULE_2__["PartnersComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "9K1r":
/*!******************************************************!*\
  !*** ./src/app/pages/about/news-resolver.service.ts ***!
  \******************************************************/
/*! exports provided: NewsResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsResolverService", function() { return NewsResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/utils */ "fNWo");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");






class NewsResolverService {
    constructor(contentService) {
        this.contentService = contentService;
        this.directory = 'content/news';
    }
    // Used to get full path of resources.
    getSourceLink(newsItem, type = 'image') {
        const [year, month, date] = Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["getSegmentedDate"])(newsItem.date);
        const slug = Object(_shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["toSlug"])(newsItem.title);
        if (type === 'pdfLink') {
            return `assets/${this.directory}/${year}/${month}-${date}/${slug}/${newsItem.pdfLink}`;
        }
        else {
            return `assets/${this.directory}/${year}/${month}-${date}/${slug}/${newsItem.thumbnail}`;
        }
    }
    // Mapper
    toNewsItem(newsItem) {
        return {
            title: newsItem.title,
            date: newsItem.date,
            publication: newsItem.source,
            thumbnail: newsItem.image,
            pdfLink: newsItem.pdfLink,
            sourceUrl: newsItem.sourceUrl
        };
    }
    resolve() {
        return this.contentService.getIndex('news').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((items) => {
            return items.map((item) => {
                const newsItem = this.toNewsItem(item);
                newsItem.thumbnail = this.getSourceLink(newsItem);
                if (newsItem.pdfLink) {
                    if (!Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["isHttp"])(newsItem.pdfLink)) {
                        newsItem.pdfLink = this.getSourceLink(newsItem, 'pdfLink');
                    }
                }
                return newsItem;
            });
        }));
    }
}
NewsResolverService.ɵfac = function NewsResolverService_Factory(t) { return new (t || NewsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"])); };
NewsResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewsResolverService, factory: NewsResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"] }]; }, null); })();


/***/ }),

/***/ "KQZo":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/profile-item/profile-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProfileItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileItemComponent", function() { return ProfileItemComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "f7+R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/breakpoint.directive */ "EpdQ");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "DgXe");






function ProfileItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.profile.affiliation, " ");
} }
function ProfileItemComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r2.fullContent);
} }
function ProfileItemComponent_div_8_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 14);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r4.partialContent);
} }
function ProfileItemComponent_div_8_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 10);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@contentTrigger", undefined)("data", ctx_r5.fullContent);
} }
function ProfileItemComponent_div_8_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileItemComponent_div_8_div_2_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r7.fullContentVisible = !ctx_r7.fullContentVisible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.fullContentVisible ? "Show less" : "Read more...", " ");
} }
function ProfileItemComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileItemComponent_div_8_div_2_div_1_Template, 1, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileItemComponent_div_8_div_2_div_2_Template, 1, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileItemComponent_div_8_div_2_div_3_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.fullContentVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.fullContentVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.hasLongContent);
} }
function ProfileItemComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileItemComponent_div_8_div_1_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileItemComponent_div_8_div_2_Template, 4, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sciBreakpoint", "mobile-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sciBreakpoint", "mobile+");
} }
class ProfileItemComponent {
    constructor() {
        this.compact = true;
        this.maxContentLength = 100;
        this.fullContentVisible = false;
    }
    /** Whether the book content exceeds the maximum character count */
    get hasLongContent() {
        var _a, _b;
        return (((_b = (_a = this.profile) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.length) || 0) > this.maxContentLength;
    }
    /** Full profile content */
    get fullContent() {
        return this.profile.body;
    }
    /** Profile content - truncated if necessary */
    get partialContent() {
        const { fullContent, maxContentLength } = this;
        return `${fullContent.slice(0, maxContentLength)}...`;
    }
}
ProfileItemComponent.ɵfac = function ProfileItemComponent_Factory(t) { return new (t || ProfileItemComponent)(); };
ProfileItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileItemComponent, selectors: [["sci-profile-item"]], inputs: { profile: "profile", compact: "compact" }, decls: 9, vars: 6, consts: [[1, "profile-item"], [1, "profile-image", 3, "src", "alt"], [1, "profile-about"], [1, "profile-name"], [1, "profile-title"], ["class", "profile-affiliation", 4, "ngIf"], ["class", "profile-body", 4, "ngIf"], [1, "profile-affiliation"], [1, "profile-body"], [4, "sciBreakpoint"], ["markdown", "", 1, "markdown", "full", 3, "data"], ["class", "markdown partial", "markdown", "", 3, "data", 4, "ngIf"], ["class", "markdown full", "markdown", "", 3, "data", 4, "ngIf"], ["class", "show-more", 3, "click", 4, "ngIf"], ["markdown", "", 1, "markdown", "partial", 3, "data"], [1, "show-more", 3, "click"]], template: function ProfileItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProfileItemComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProfileItemComponent_div_8_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.profile.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.profile.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.profile.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.profile.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.compact === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.compact === false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_3__["BreakpointDirective"], ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownComponent"]], styles: ["[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%] {\n  height: 6rem;\n  width: auto;\n}\n[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-about[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-left: 1rem;\n  flex-grow: 2;\n}\n[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-about[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%], [_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-about[_ngcontent-%COMP%]   .profile-affiliation[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-about[_ngcontent-%COMP%]   .profile-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  font-style: italic;\n}\n[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-body[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%] {\n  color: #8dc63f;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-body[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-body[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9maWxlLWl0ZW0vcHJvZmlsZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1FO0VBQ0UsYUFBQTtBQUxKO0FBT0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUxOO0FBUUk7RUFDRSxpQkFBQTtBQU5OO0FBU0k7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBUE47QUFTTTs7RUFFRSxzQkFBQTtBQVBSO0FBU007RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBUFI7QUFhTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBWFI7QUFZUTtFQUNFLDBCQUFBO0FBVlY7QUFhTTtFQUNFLGdCQUFBO0FBWFIiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2ZpbGUtaXRlbS9wcm9maWxlLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZGVza3RvcDogMTI0OHB4O1xuJHRhYmxldDogOTYwcHg7XG4kbW9iaWxlOiA2NDBweDtcbiRzaW5nbGUtY29sdW1uLW1heC13aWR0aDogNjQwcHg7XG5cbjpob3N0IHtcbiAgLnByb2ZpbGUtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbiAgICAucHJvZmlsZS1pbWFnZSB7XG4gICAgICBoZWlnaHQ6IDZyZW07XG4gICAgICB3aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAucHJvZmlsZS1uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5wcm9maWxlLWFib3V0IHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICBmbGV4LWdyb3c6IDI7XG5cbiAgICAgIC5wcm9maWxlLW5hbWUsXG4gICAgICAucHJvZmlsZS1hZmZpbGlhdGlvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgICB9XG4gICAgICAucHJvZmlsZS10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvZmlsZS1ib2R5IHtcblxuICAgICAgLnNob3ctbW9yZSB7XG4gICAgICAgIGNvbG9yOiAjOGRjNjNmO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZnVsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('contentTrigger', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1,
                        height: '0px',
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1,
                        height: '*'
                    })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1,
                        height: '*'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 0,
                        height: 0
                    }))
                ]),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'sci-profile-item',
                templateUrl: './profile-item.component.html',
                styleUrls: ['./profile-item.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('contentTrigger', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 1,
                                height: '0px',
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 1,
                                height: '*'
                            })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 1,
                                height: '*'
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 0,
                                height: 0
                            }))
                        ]),
                    ])
                ]
            }]
    }], null, { profile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], compact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "NSU+":
/*!************************************************************!*\
  !*** ./src/app/pages/about/about-body-resolver.service.ts ***!
  \************************************************************/
/*! exports provided: AboutBodyResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutBodyResolverService", function() { return AboutBodyResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/utils */ "fNWo");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");






class AboutBodyResolverService {
    constructor(content) {
        this.content = content;
        this.directory = 'assets/content/site/about';
    }
    resolve() {
        const mdPath = 'site/about/about.md';
        return this.content.getContent(mdPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((body) => {
            const { annualReports } = body;
            if (annualReports && Array.isArray(annualReports)) {
                annualReports.forEach((report) => {
                    const pdfLink = report.pdfLink;
                    if (!Object(_constants_utils__WEBPACK_IMPORTED_MODULE_3__["isHttp"])(pdfLink)) {
                        report.pdfLink = `${this.directory}/${report.pdfLink}`;
                    }
                });
                body.annualReports = annualReports;
            }
            return body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(() => {
            console.error('Error in fetching', mdPath);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
        }));
    }
}
AboutBodyResolverService.ɵfac = function AboutBodyResolverService_Factory(t) { return new (t || AboutBodyResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"])); };
AboutBodyResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AboutBodyResolverService, factory: AboutBodyResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutBodyResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"] }]; }, null); })();


/***/ }),

/***/ "Oz1G":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/partners/partners.component.ts ***!
  \******************************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");



function PartnersComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PartnersComponent_div_4_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const partner_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.openLink(partner_r1.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const partner_r1 = ctx.$implicit;
    const isEven_r3 = ctx.even;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", isEven_r3 ? "right-aligned" : "left-aligned")("src", partner_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", partner_r1.name);
} }
class PartnersComponent {
    constructor() {
        this.data = [
            {
                name: 'CNS',
                logo: 'assets/logos/logo-cns.svg',
                link: 'https://cns.iu.edu',
            },
            {
                name: 'Luddy',
                logo: 'assets/logos/logo-luddy-school.svg',
                link: 'https://luddy.indiana.edu/index.html',
            },
            {
                name: 'McDonnel',
                logo: 'assets/logos/logo-james-s-mcdonnell-foundation.svg',
                link: 'https://www.jsmf.org/',
            },
            {
                name: 'reuters',
                logo: 'assets/logos/logo-thomson-reuters.svg',
                link: 'https://thomsonreuters.com/',
            },
            {
                name: 'NSF',
                logo: 'assets/logos/logo-nsf.svg',
                link: 'https://www.nsf.gov/',
            },
            {
                name: 'elsevier',
                logo: 'assets/logos/logo-elsevier.svg',
                link: 'https://www.elsevier.com/',
            },
        ];
    }
    openLink(link) {
        window.open(link, '_blank');
    }
}
PartnersComponent.ɵfac = function PartnersComponent_Factory(t) { return new (t || PartnersComponent)(); };
PartnersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PartnersComponent, selectors: [["sci-partners"]], decls: 5, vars: 1, consts: [[1, "partners"], [1, "header2"], [1, "logos"], ["class", "flex-item", 4, "ngFor", "ngForOf"], [1, "flex-item"], [3, "ngClass", "src", "alt", "click"]], template: function PartnersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Thanks to the following for their support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PartnersComponent_div_4_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["[_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .header2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n[_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 1rem;\n}\n[_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 280px;\n  max-height: 50px;\n}\n[_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .left-aligned[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n[_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .right-aligned[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 auto;\n  }\n  [_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .left-aligned[_ngcontent-%COMP%] {\n    margin-right: auto;\n    margin-left: auto;\n  }\n  [_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .right-aligned[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wYXJ0bmVycy9wYXJ0bmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSTtFQUNFLGtCQUFBO0FBTE47QUFRSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFOTjtBQVFNO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFOUjtBQVFRO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFOVjtBQU9VO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFMWjtBQVFRO0VBQ0Usa0JBQUE7QUFOVjtBQVFRO0VBQ0UsaUJBQUE7QUFOVjtBQVFRO0VBbkJGO0lBb0JJLFdBQUE7SUFDQSxjQUFBO0VBTFI7RUFNUTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7RUFKVjtFQU1RO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQUpWO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhcnRuZXJzL3BhcnRuZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRlc2t0b3A6IDEyNDhweDtcbiR0YWJsZXQ6IDk2MHB4O1xuJG1vYmlsZTogNjQwcHg7XG5cbjpob3N0IHtcbiAgLnBhcnRuZXJzIHtcbiAgICAuaGVhZGVyMiB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmxvZ29zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAuZmxleC1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgICAgICAgbWF4LWhlaWdodDogNTBweDtcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmxlZnQtYWxpZ25lZCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5yaWdodC1hbGlnbmVkIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkgIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAubGVmdC1hbGlnbmVkIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHQtYWxpZ25lZCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartnersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-partners',
                templateUrl: './partners.component.html',
                styleUrls: ['./partners.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "P6uQ":
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "rVrE");
/* harmony import */ var _about_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-resolver.service */ "y4XA");
/* harmony import */ var _about_body_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-body-resolver.service */ "NSU+");
/* harmony import */ var _news_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-resolver.service */ "9K1r");








const routes = [
    {
        path: '',
        component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        resolve: {
            profiles: _about_resolver_service__WEBPACK_IMPORTED_MODULE_3__["AboutResolverService"],
            newsItems: _news_resolver_service__WEBPACK_IMPORTED_MODULE_5__["NewsResolverService"],
            body: _about_body_resolver_service__WEBPACK_IMPORTED_MODULE_4__["AboutBodyResolverService"]
        }
    }
];
class AboutRoutingModule {
}
AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "R81U":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/profile-item/profile-item.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProfileItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileItemModule", function() { return ProfileItemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _profile_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-item.component */ "KQZo");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "PCNd");






class ProfileItemModule {
}
ProfileItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileItemModule });
ProfileItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileItemModule_Factory(t) { return new (t || ProfileItemModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileItemModule, { declarations: [_profile_item_component__WEBPACK_IMPORTED_MODULE_2__["ProfileItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"],
        _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]], exports: [_profile_item_component__WEBPACK_IMPORTED_MODULE_2__["ProfileItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileItemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_profile_item_component__WEBPACK_IMPORTED_MODULE_2__["ProfileItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"],
                    _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                exports: [_profile_item_component__WEBPACK_IMPORTED_MODULE_2__["ProfileItemComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "UoYK":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "KZIX");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _shared_components_list_view_list_view_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/list-view/list-view.module */ "Powi");
/* harmony import */ var _shared_components_partners_partners_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/partners/partners.module */ "7ZJu");
/* harmony import */ var _shared_components_profile_gallery_profile_gallery_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/profile-gallery/profile-gallery.module */ "nyXH");
/* harmony import */ var _shared_components_search_overlay_search_overlay_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/search-overlay/search-overlay.module */ "ErVL");
/* harmony import */ var _shared_components_select_select_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/select/select.module */ "DS98");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/table/table.module */ "8kBh");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about-routing.module */ "P6uQ");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about.component */ "rVrE");















class AboutModule {
}
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AboutModule_Factory(t) { return new (t || AboutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_12__["AboutRoutingModule"],
            _shared_components_profile_gallery_profile_gallery_module__WEBPACK_IMPORTED_MODULE_7__["ProfileGalleryModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _shared_components_partners_partners_module__WEBPACK_IMPORTED_MODULE_6__["PartnersModule"],
            _shared_components_select_select_module__WEBPACK_IMPORTED_MODULE_9__["SelectModule"],
            _shared_components_search_overlay_search_overlay_module__WEBPACK_IMPORTED_MODULE_8__["SearchOverlayModule"],
            _shared_components_list_view_list_view_module__WEBPACK_IMPORTED_MODULE_5__["ListViewModule"],
            _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _about_routing_module__WEBPACK_IMPORTED_MODULE_12__["AboutRoutingModule"],
        _shared_components_profile_gallery_profile_gallery_module__WEBPACK_IMPORTED_MODULE_7__["ProfileGalleryModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
        _shared_components_partners_partners_module__WEBPACK_IMPORTED_MODULE_6__["PartnersModule"],
        _shared_components_select_select_module__WEBPACK_IMPORTED_MODULE_9__["SelectModule"],
        _shared_components_search_overlay_search_overlay_module__WEBPACK_IMPORTED_MODULE_8__["SearchOverlayModule"],
        _shared_components_list_view_list_view_module__WEBPACK_IMPORTED_MODULE_5__["ListViewModule"],
        _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _about_routing_module__WEBPACK_IMPORTED_MODULE_12__["AboutRoutingModule"],
                    _shared_components_profile_gallery_profile_gallery_module__WEBPACK_IMPORTED_MODULE_7__["ProfileGalleryModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                    _shared_components_partners_partners_module__WEBPACK_IMPORTED_MODULE_6__["PartnersModule"],
                    _shared_components_select_select_module__WEBPACK_IMPORTED_MODULE_9__["SelectModule"],
                    _shared_components_search_overlay_search_overlay_module__WEBPACK_IMPORTED_MODULE_8__["SearchOverlayModule"],
                    _shared_components_list_view_list_view_module__WEBPACK_IMPORTED_MODULE_5__["ListViewModule"],
                    _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "W7zp":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/profile-gallery/profile-gallery.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProfileGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileGalleryComponent", function() { return ProfileGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants_region_labels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/region-labels */ "0XBH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _profile_item_profile_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-item/profile-item.component */ "KQZo");






function ProfileGalleryComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function ProfileGalleryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.description);
} }
function ProfileGalleryComponent_ng_container_2_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { "profiles": a0 }; };
function ProfileGalleryComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileGalleryComponent_ng_container_2_div_1_ng_container_3_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.REGIONS[group_r8.key] ? ctx_r7.REGIONS[group_r8.key] : group_r8.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, group_r8.value));
} }
function ProfileGalleryComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileGalleryComponent_ng_container_2_div_1_Template, 4, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.profilesByGroup));
} }
function ProfileGalleryComponent_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function ProfileGalleryComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileGalleryComponent_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 9);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r4.profiles));
} }
function ProfileGalleryComponent_ng_template_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "sci-profile-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profile", profile_r13)("compact", ctx_r12.compact);
} }
function ProfileGalleryComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileGalleryComponent_ng_template_5_div_1_Template, 2, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profiles_r11 = ctx.profiles;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", profiles_r11);
} }
class ProfileGalleryComponent {
    constructor() {
        this.REGIONS = _constants_region_labels__WEBPACK_IMPORTED_MODULE_1__["REGIONS"];
        /** HTML class name */
        this.clsName = 'sci-profile-gallery';
        this.compact = true;
        this.title = '';
        this.description = '';
        this.profilesByGroup = {};
    }
    ngOnInit() {
        if (this.groupBy) {
            this.profilesByGroup = this.profiles.reduce((accumulator, profile) => {
                if (profile[this.groupBy]) {
                    const key = profile[this.groupBy];
                    if (accumulator[key]) {
                        accumulator[key].push(profile);
                    }
                    else {
                        accumulator[key] = [profile];
                    }
                }
                return accumulator;
            }, {});
        }
    }
}
ProfileGalleryComponent.ɵfac = function ProfileGalleryComponent_Factory(t) { return new (t || ProfileGalleryComponent)(); };
ProfileGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileGalleryComponent, selectors: [["sci-profile-gallery"]], hostVars: 2, hostBindings: function ProfileGalleryComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { profiles: "profiles", compact: "compact", title: "title", description: "description", groupBy: "groupBy" }, decls: 7, vars: 4, consts: [["class", "header2 title", 4, "ngIf"], ["markdown", "", "class", "description", 3, "data", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["withoutGroup", ""], ["profilesTemplate", ""], [1, "header2", "title"], ["markdown", "", 1, "description", 3, "data"], ["class", "profile-group", 4, "ngFor", "ngForOf"], [1, "profile-group"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "profile-container"], ["class", "profile", 4, "ngFor", "ngForOf"], [1, "profile"], [3, "profile", "compact"]], template: function ProfileGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileGalleryComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileGalleryComponent_div_1_Template, 1, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileGalleryComponent_ng_container_2_Template, 3, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileGalleryComponent_ng_template_3_Template, 1, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileGalleryComponent_ng_template_5_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupBy)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _profile_item_profile_item_component__WEBPACK_IMPORTED_MODULE_4__["ProfileItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: ["[_nghost-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n[_nghost-%COMP%]   .profile-group[_ngcontent-%COMP%] {\n  margin-bottom: 4.5rem;\n}\n[_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 30%;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n    width: 48%;\n  }\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9maWxlLWdhbGxlcnkvcHJvZmlsZS1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNFO0VBQ0UsbUJBQUE7QUFSSjtBQVdFO0VBQ0UscUJBQUE7QUFUSjtBQVdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBVEo7QUFXSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQVROO0FBV007RUFORjtJQU9JLFVBQUE7RUFSTjtBQUNGO0FBVU07RUFWRjtJQVdJLFdBQUE7RUFQTjtBQUNGIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9maWxlLWdhbGxlcnkvcHJvZmlsZS1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRlc2t0b3A6IDEyNDhweDtcbiR0YWJsZXQ6IDk2MHB4O1xuJG1vYmlsZTogNjQwcHg7XG5cbjpob3N0IHtcbiAgLnRpdGxlIHtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG5cbiAgLnByb2ZpbGUtZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDQuNXJlbTtcbiAgfVxuICAucHJvZmlsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLnByb2ZpbGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-profile-gallery',
                templateUrl: './profile-gallery.component.html',
                styleUrls: ['./profile-gallery.component.scss']
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], profiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], compact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "nyXH":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/profile-gallery/profile-gallery.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ProfileGalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileGalleryModule", function() { return ProfileGalleryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _profile_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-gallery.component */ "W7zp");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _profile_item_profile_item_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-item/profile-item.module */ "R81U");






class ProfileGalleryModule {
}
ProfileGalleryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileGalleryModule });
ProfileGalleryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileGalleryModule_Factory(t) { return new (t || ProfileGalleryModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"],
            _profile_item_profile_item_module__WEBPACK_IMPORTED_MODULE_4__["ProfileItemModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileGalleryModule, { declarations: [_profile_gallery_component__WEBPACK_IMPORTED_MODULE_2__["ProfileGalleryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"],
        _profile_item_profile_item_module__WEBPACK_IMPORTED_MODULE_4__["ProfileItemModule"]], exports: [_profile_gallery_component__WEBPACK_IMPORTED_MODULE_2__["ProfileGalleryComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileGalleryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_profile_gallery_component__WEBPACK_IMPORTED_MODULE_2__["ProfileGalleryComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"],
                    _profile_item_profile_item_module__WEBPACK_IMPORTED_MODULE_4__["ProfileItemModule"]
                ],
                exports: [_profile_gallery_component__WEBPACK_IMPORTED_MODULE_2__["ProfileGalleryComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "rVrE":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "FlRo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/directives/breakpoint.directive */ "EpdQ");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "KZIX");
/* harmony import */ var _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/select/select.component */ "wnGv");
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/table/table.component */ "Xv+k");
/* harmony import */ var _shared_components_search_overlay_search_overlay_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/search-overlay/search-overlay.component */ "XFsG");
/* harmony import */ var _shared_components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/list-view/list-view.component */ "fQZA");
/* harmony import */ var _shared_components_partners_partners_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/partners/partners.component */ "Oz1G");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _shared_components_profile_gallery_profile_gallery_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/components/profile-gallery/profile-gallery.component */ "W7zp");

















function AboutComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
} }
function AboutComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 29);
} }
function AboutComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", report_r5.pdfLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", report_r5.year, " ");
} }
function AboutComponent_ng_container_28_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sci-profile-gallery", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "sci-profile-gallery", 34);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Curatorial Team")("description", ctx_r8.curatorsDescription)("profiles", ctx_r8.curatorProfiles)("compact", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Advisory Board")("description", ctx_r8.advisoryBoardDescription)("profiles", ctx_r8.advisoryBoardProfiles)("compact", true);
} }
function AboutComponent_ng_container_28_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sci-profile-gallery", 35);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Exhibit Ambassadors")("description", ctx_r9.ambassadorsDescription)("profiles", ctx_r9.ambassadorProfiles)("groupBy", "region")("compact", true);
} }
function AboutComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AboutComponent_ng_container_28_ng_template_2_Template, 3, 8, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AboutComponent_ng_container_28_ng_template_3_Template, 1, 5, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r4.pageTabs[i_r7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r7 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r7 == 1);
} }
const _c0 = function () { return { column: "date", direction: "desc" }; };
const _c1 = function () { return []; };
const _c2 = function (a1) { return { type: "news", items: a1, displayLimit: 6, showAllItems: false }; };
class AboutComponent {
    constructor(route) {
        this.route = route;
        /** HTML class name */
        this.clsName = 'sci-about';
        this.overviewParagraph = '';
        this.overviewQuote = '';
        this.curatorProfiles = [];
        this.curatorsDescription = '';
        this.advisoryBoardProfiles = [];
        this.advisoryBoardDescription = '';
        this.ambassadorProfiles = [];
        this.ambassadorsDescription = '';
        this.pageTabs = ['Curatorial Team / Advisory Board', 'Exhibit Ambassadors'];
        this.newsItems = [];
        this.annualReports = [];
        this.sortHeaders = [
            {
                label: 'Source',
                key: 'publication',
            },
            {
                label: 'Date',
                key: 'date'
            }
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.searchKey = '';
        this.year = '';
        this.yearList = [];
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            const { profiles, body, newsItems } = data;
            // Profiles
            ({
                curatorProfiles: this.curatorProfiles,
                advisoryBoardProfiles: this.advisoryBoardProfiles,
                ambassadorProfiles: this.ambassadorProfiles,
            } = this.groupProfiles(profiles));
            // Body
            ({
                curatorsDescription: this.curatorsDescription,
                advisoryBoardDescription: this.advisoryBoardDescription,
                ambassadorsDescription: this.ambassadorsDescription,
                overviewParagraph: this.overviewParagraph,
                overviewQuote: this.overviewQuote,
                annualReports: this.annualReports,
            } = this.getStaticContent(body));
            // NewsItems
            if (newsItems && Array.isArray(newsItems)) {
                this.newsItems = newsItems;
                this.dataSource.data = newsItems;
                this.dataSource.filterPredicate = this.filterData;
            }
        });
        this.setYears();
    }
    groupProfiles(profiles) {
        let curatorProfiles = [];
        let advisoryBoardProfiles = [];
        let ambassadorProfiles = [];
        if (profiles && Array.isArray(profiles)) {
            curatorProfiles = profiles.filter((profile) => {
                return (profile.roles.includes('curator') ||
                    profile.roles.includes('co-curator'));
            });
            advisoryBoardProfiles = profiles.filter((profile) => {
                return profile.roles.includes('advisory_board');
            });
            ambassadorProfiles = profiles.filter((profile) => {
                return profile.roles.includes('ambassador');
            });
        }
        return { curatorProfiles, advisoryBoardProfiles, ambassadorProfiles };
    }
    getStaticContent(body) {
        const keys = [
            'curatorsDescription',
            'advisoryBoardDescription',
            'ambassadorsDescription',
            'overviewParagraph',
            'overviewQuote',
            'annualReports',
        ];
        const result = {};
        keys.forEach((key) => {
            if (body && body.hasOwnProperty(key) && body[key]) {
                result[key] = body[key];
            }
            else {
                result[key] = '';
            }
        });
        return result;
    }
    getReport(report) {
        if (report) {
            window.open(report, '_blank');
        }
    }
    // Predicate for filtering data.
    filterData(item, filter) {
        var _a, _b;
        const parsedFilter = JSON.parse(filter);
        let result = true;
        if (parsedFilter.year && parsedFilter.year !== 'all') {
            const year = new Date(item.date).getFullYear().toString();
            result = result && year === parsedFilter.year;
        }
        if (parsedFilter.searchKey) {
            result =
                result &&
                    (((_a = item.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(parsedFilter.searchKey)) || ((_b = item.publication) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(parsedFilter.searchKey)));
        }
        return result;
    }
    onSearchChange(searchKey) {
        this.searchKey = searchKey;
        this.applyFilter();
    }
    onSelectChange(year) {
        this.year = year;
        this.applyFilter();
    }
    applyFilter() {
        const filter = { year: this.year, searchKey: this.searchKey };
        const filterString = JSON.stringify(filter);
        this.dataSource.filter = filterString;
    }
    setYears() {
        const years = new Set();
        this.dataSource.data.forEach((item) => {
            const fullDate = new Date(item.date);
            const year = fullDate.getFullYear().toString();
            if (!years.has(year)) {
                years.add(year);
            }
        });
        this.yearList = Array.from(years).sort().reverse();
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["sci-about"]], hostVars: 2, hostBindings: function AboutComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 41, vars: 20, consts: [[1, "intro"], [1, "header1"], [1, "image-container"], ["src", "assets/images/about/image.med.jpg", "alt", "", 4, "sciBreakpoint", "sciBreakpointElse"], ["desktop", ""], [1, "description"], [1, "paragraph"], ["markdown", "", 3, "data"], [1, "quote"], [1, "reports"], [1, "row"], [1, "annual-reports"], ["placeholder", "Annual Reports", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "divider"], [1, "spacer-24"], [1, "ambassador-map"], [1, "container"], ["src", "assets/images/map-advisors-ambassadors.svg", "alt", ""], [1, "spacer-72"], ["mat-align-tabs", "start"], [4, "ngFor", "ngForOf"], [1, "header2"], [1, "group1"], [3, "select", "options", "selectChange"], [3, "dataSource", "initialSort", "tableHeaders", "headersOnly"], [3, "search", "searchChange"], [1, "news-list", 3, "config"], ["src", "assets/images/about/image.med.jpg", "alt", ""], ["src", "assets/images/about/image.lg.jpg", "alt", ""], [3, "value"], [3, "label"], [3, "ngIf"], [1, "profile-gallery", 3, "title", "description", "profiles", "compact"], [3, "title", "description", "profiles", "compact"], [3, "title", "description", "profiles", "groupBy", "compact"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Places & Spaces");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Exhibition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AboutComponent_img_7_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutComponent_ng_template_8_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AboutComponent_Template_mat_select_selectionChange_19_listener($event) { return ctx.getReport($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AboutComponent_mat_option_20_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-tab-group", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AboutComponent_ng_container_28_Template, 4, 3, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "In the News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "sci-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectChange", function AboutComponent_Template_sci_select_selectChange_34_listener($event) { return ctx.onSelectChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "sci-table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "sci-search-overlay", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchChange", function AboutComponent_Template_sci_search_overlay_searchChange_36_listener($event) { return ctx.onSearchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "sci-list-view", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "sci-partners");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "mobile-")("sciBreakpointElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.overviewParagraph);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.overviewQuote);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.annualReports);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("select", ctx.year)("options", ctx.yearList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("initialSort", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0))("tableHeaders", ctx.sortHeaders)("headersOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("search", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 14, ctx.dataSource.connect().asObservable()) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1)));
    } }, directives: [_shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_3__["BreakpointDirective"], ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_9__["SelectComponent"], _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_10__["TableComponent"], _shared_components_search_overlay_search_overlay_component__WEBPACK_IMPORTED_MODULE_11__["SearchOverlayComponent"], _shared_components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_12__["ListViewComponent"], _shared_components_partners_partners_component__WEBPACK_IMPORTED_MODULE_13__["PartnersComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_profile_gallery_profile_gallery_component__WEBPACK_IMPORTED_MODULE_15__["ProfileGalleryComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["[_nghost-%COMP%]   .tab-header[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n[_nghost-%COMP%]   .profile-gallery[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 48px;\n}\n[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 100%;\n  height: auto;\n}\n[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  color: #757575;\n  font-size: 16px;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    padding-left: 0;\n  }\n}\n[_nghost-%COMP%]   .reports[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex row;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .ambassador-map[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 640px) and (max-width: 960px) {\n  [_nghost-%COMP%]   .ambassador-map[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: auto;\n  }\n}\n@media (min-width: 960px) {\n  [_nghost-%COMP%]   .ambassador-map[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    width: 70%;\n    margin: auto;\n  }\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 0.5rem;\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .group1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .sci-search-overlay[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3NjaW1hcHMvc3JjL3N0eWxpbmcvX3NjcmVlbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9FO0VBQ0UsbUJBQUE7QUFOSjtBQVNFO0VBQ0UscUJBQUE7QUFQSjtBQVdJO0VBQ0UsV0FBQTtFQVFBLG1CQUFBO0FBaEJOO0FBU007RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBUFI7QUFZSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQWtCQSxtQkFBQTtBQTNCTjtBQ0RJO0VEUUE7SUFJSSxzQkFBQTtFQVBOO0FBQ0Y7QUFRTTtFQUNFLE9BQUE7QUFOUjtBQVFNO0VBQ0Usa0JBQUE7RUFDQSxxREFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBTlI7QUNmSTtFRGlCRTtJQU1JLGdCQUFBO0lBQ0EsZUFBQTtFQUpSO0FBQ0Y7QUFXSTtFQUNFLGlCQUFBO0FBVE47QUFlTTtFQURGO0lBRUksYUFBQTtFQVpOO0FBQ0Y7QUFhTTtFQUpGO0lBS0ksV0FBQTtJQUNBLFlBQUE7RUFWTjtBQUNGO0FBV007RUFSRjtJQVNJLFVBQUE7SUFDQSxZQUFBO0VBUk47QUFDRjtBQVlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFWSjtBQVlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBVk47QUFZSTtFQUNFLGlCQUFBO0FBVk4iLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2NyZWVuJztcblxuJG1vYmlsZTogNjQwcHg7XG4kdGFibGV0OiA5NjBweDtcbiRkZXNrdG9wOiAxMjQ4cHg7XG5cbjpob3N0IHtcbiAgLnRhYi1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cblxuICAucHJvZmlsZS1nYWxsZXJ5IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIH1cbiAgXG4gIC5pbnRybyB7XG4gICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cbiAgICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gICAgfVxuICBcbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cbiAgICAgIGRpdiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgICAucXVvdGUge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuICB9XG4gIC5yZXBvcnRzIHtcbiAgICAucm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXggcm93O1xuICAgIH1cbiAgfVxuXG4gIC5hbWJhc3NhZG9yLW1hcCB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtb2JpbGUpIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCkge1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9IFxuICAgIH1cbiAgfVxuXG4gIC5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgLy8gc2VsZWN0IGJveFxuICAgIC5ncm91cDEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5zY2ktc2VhcmNoLW92ZXJsYXkge1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgfVxuICB9XG59IiwiJGJyZWFrcG9pbnQtbW9iaWxlOiA3NjhweDtcbiRicmVha3BvaW50LXRhYmxldDogOTYwcHg7XG5cbiQtYnJlYWtwb2ludC1xdWVyaWVzOiAoXG4gIG1vYmlsZTogXCIobWF4LXdpZHRoOiAjeyRicmVha3BvaW50LW1vYmlsZX0pXCIsXG4gIHRhYmxldDpcbiAgICBcIihtaW4td2lkdGg6ICN7JGJyZWFrcG9pbnQtbW9iaWxlICsgMXB4fSkgYW5kIChtYXgtd2lkdGg6ICN7JGJyZWFrcG9pbnQtdGFibGV0fSlcIixcbiAgZGVza3RvcDogXCIobWluLXdpZHRoOiAje2JyZWFrcG9pbnQtdGFibGV0ICsgMXB4fSlcIixcbik7XG5cbkBtaXhpbiBicmVha3BvaW50KCR0eXBlcy4uLikge1xuICAkcXVlcmllczogKCk7XG4gIEBlYWNoICR0eXBlIGluICR0eXBlcyB7XG4gICAgJHF1ZXJ5OiBtYXAtZ2V0KCQtYnJlYWtwb2ludC1xdWVyaWVzLCAkdHlwZSk7XG4gICAgQGlmICRxdWVyeSB7XG4gICAgICAkcXVlcmllczogYXBwZW5kKCRxdWVyaWVzLCAkcXVlcnksICRzZXBhcmF0b3I6IGNvbW1hKTtcbiAgICB9XG4gIH1cblxuICBAaWYgbGVuZ3RoKCRxdWVyaWVzKSA+IDAge1xuICAgIEBtZWRpYSAjeyRxdWVyaWVzfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "y4XA":
/*!*******************************************************!*\
  !*** ./src/app/pages/about/about-resolver.service.ts ***!
  \*******************************************************/
/*! exports provided: AboutResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutResolverService", function() { return AboutResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");





class AboutResolverService {
    constructor(content) {
        this.content = content;
    }
    /**
     * getImageSource - used to generate full asset path of the image of the profile.
     * @param - Profile
     * @returns - string - relative path of the image in assets.
     */
    getImageSource(profile) {
        const directory = 'content/person';
        return `assets/${directory}/${profile.slug}/${profile.image}`;
    }
    resolve() {
        return this.content.getIndex('people').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((items) => {
            return items.filter(item => item.name).map((item) => {
                const profile = {
                    name: item.name,
                    slug: Object(_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__["toSlug"])(item.name),
                    title: item.jobTitle,
                    link: item.homepage,
                    body: item.body,
                    affiliation: item.affiliation,
                    image: item.image,
                    roles: item.roles || [],
                    location_name: item.location_name,
                    region: item.region,
                };
                profile.image = this.getImageSource(profile);
                return profile;
            });
        }));
    }
}
AboutResolverService.ɵfac = function AboutResolverService_Factory(t) { return new (t || AboutResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"])); };
AboutResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AboutResolverService, factory: AboutResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-about-about-module.js.map