"use strict";
(self["webpackChunkscimaps"] = self["webpackChunkscimaps"] || []).push([["default-projects_scimaps_src_app_shared_components_discover-listing_discover-listing_module_ts"],{

/***/ 3972:
/*!***************************************************************!*\
  !*** ./projects/scimaps/src/app/constants/content-trigger.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentTrigger": () => (/* binding */ contentTrigger)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 7175);

const contentTrigger = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('contentTrigger', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            height: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            height: '*'
        })),
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            height: '*'
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            height: 0
        }))
    ]),
]);


/***/ }),

/***/ 8993:
/*!***************************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/discover-listing/discover-listing.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverListingComponent": () => (/* binding */ DiscoverListingComponent)
/* harmony export */ });
/* harmony import */ var _warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../warning-dialog/warning-dialog.component */ 6645);
/* harmony import */ var _constants_content_trigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/content-trigger */ 3972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/breakpoint.directive */ 8355);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ 8379);








function DiscoverListingComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r0.fullContent);
} }
function DiscoverListingComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 10);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r4.partialContent);
} }
function DiscoverListingComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 6);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@contentTrigger", undefined)("data", ctx_r5.fullContent);
} }
function DiscoverListingComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DiscoverListingComponent_div_4_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r7.fullContentVisible = !ctx_r7.fullContentVisible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.fullContentVisible ? "Show less" : "Read more...", " ");
} }
function DiscoverListingComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DiscoverListingComponent_div_4_div_1_Template, 1, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DiscoverListingComponent_div_4_div_2_Template, 1, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DiscoverListingComponent_div_4_div_3_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.fullContentVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.fullContentVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hasLongContent);
} }
function DiscoverListingComponent_div_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r10 = ctx_r12.index;
    const thumbnail_r9 = ctx_r12.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", i_r10 + 1, ". ", thumbnail_r9.title, "");
} }
function DiscoverListingComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DiscoverListingComponent_div_6_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const thumbnail_r9 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.desktopThumbnailClickHandler(thumbnail_r9.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DiscoverListingComponent_div_6_ng_template_2_Template, 2, 2, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thumbnail_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.imageSource(thumbnail_r9.image), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", thumbnail_r9.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.type == "submissions");
} }
function DiscoverListingComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DiscoverListingComponent_div_7_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const thumbnail_r15 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.mobileThumbnailClickHandler(thumbnail_r15.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thumbnail_r15 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r3.imageSource(thumbnail_r15.image), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", thumbnail_r15.image);
} }
class DiscoverListingComponent {
    constructor(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        /** HTML class name */
        this.clsName = 'sci-discover-listing';
        this.mobileWarning = 'Macroscopes work best on desktop or larger tablet screens.  You may have a less than optimal experience on this device.';
        this.fullContentVisible = false;
        this.maxContentLength = 500;
    }
    get hasLongContent() {
        var _a, _b;
        return (((_b = (_a = this.discoverItem) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.length) || 0) > this.maxContentLength;
    }
    get fullContent() {
        return this.discoverItem.body;
    }
    get partialContent() {
        const { fullContent, maxContentLength } = this;
        return `${fullContent.slice(0, maxContentLength)} ${this.hasLongContent ? '...' : ''}`;
    }
    imageSource(image) {
        return image.startsWith('assets/') ? image : `assets/${this.discoverItem.directory}/${this.discoverItem.slug}/${image}`;
    }
    mobileThumbnailClickHandler(link) {
        if (this.type === 'macroscopes') {
            this.dialog.open(_warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_0__.WarningDialogComponent, {
                width: '95%',
                data: {
                    warningMessage: this.mobileWarning,
                    closeLink: link
                }
            });
        }
        else {
            this.router.navigate(['/', ...link.split('/')]);
        }
    }
    desktopThumbnailClickHandler(link) {
        this.router.navigate(['/', ...link.split('/')]);
    }
}
DiscoverListingComponent.ɵfac = function DiscoverListingComponent_Factory(t) { return new (t || DiscoverListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
DiscoverListingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DiscoverListingComponent, selectors: [["sci-discover-listing"]], hostVars: 2, hostBindings: function DiscoverListingComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { discoverItem: "discoverItem", type: "type" }, decls: 8, vars: 5, consts: [[1, "text-content"], [1, "header"], [4, "sciBreakpoint"], [1, "image-content"], ["class", "thumbnail desktop", 3, "click", 4, "ngFor", "ngForOf"], ["class", "thumbnail mobile", 3, "click", 4, "ngFor", "ngForOf"], ["markdown", "", 1, "markdown", "full", 3, "data"], ["class", "markdown partial", "markdown", "", 3, "data", 4, "ngIf"], ["class", "markdown full", "markdown", "", 3, "data", 4, "ngIf"], ["class", "show-more", 3, "click", 4, "ngIf"], ["markdown", "", 1, "markdown", "partial", 3, "data"], [1, "show-more", 3, "click"], [1, "thumbnail", "desktop", 3, "click"], [1, "thumbnail-image", 3, "src", "alt"], [3, "ngIf"], [1, "thumbnail", "mobile", 3, "click"]], template: function DiscoverListingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DiscoverListingComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DiscoverListingComponent_div_4_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DiscoverListingComponent_div_6_Template, 3, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DiscoverListingComponent_div_7_Template, 2, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.discoverItem.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("sciBreakpoint", "desktop-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("sciBreakpoint", "desktop");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.discoverItem.thumbnails);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.discoverItem.thumbnails);
    } }, directives: [_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_2__.BreakpointDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ngx_markdown__WEBPACK_IMPORTED_MODULE_7__.MarkdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: [".maps[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  width: 16%;\n}\n\n.macroscopes[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  width: 22%;\n}\n\n.submissions[_nghost-%COMP%] {\n  flex-direction: column;\n}\n\n.submissions[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n\n.submissions[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  width: 44%;\n  border: 1px solid #ccc;\n  padding: 2rem;\n}\n\n.submissions[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail.desktop[_ngcontent-%COMP%]:hover {\n  transform: none;\n}\n\n.submissions[_nghost-%COMP%]   .text-content[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n  width: 100%;\n}\n\n.submissions[_nghost-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n\n@media (max-width: 960px) {\n  [_nghost-%COMP%] {\n    flex-direction: column-reverse;\n  }\n}\n\n[_nghost-%COMP%]   .text-content[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  padding-left: 1rem;\n  padding-right: 3rem;\n  width: 40%;\n}\n\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .text-content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 0rem;\n    padding-right: 0rem;\n  }\n}\n\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .text-content[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n[_nghost-%COMP%]   .text-content[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%] {\n  color: #8dc63f;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]   .text-content[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n[_nghost-%COMP%]   .text-content[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 60%;\n  flex-wrap: wrap;\n  height: 100%;\n}\n\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 0rem;\n    padding-right: 0rem;\n  }\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem;\n}\n\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-right: 1rem;\n  cursor: pointer;\n  margin-bottom: 1rem;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    position: relative;\n    width: calc(50% - 1rem);\n  }\n}\n\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .thumbnail-image[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: cover;\n}\n\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .thumbnail-title[_ngcontent-%COMP%] {\n  height: 20%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  margin-top: 16px;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .thumbnail-title[_ngcontent-%COMP%] {\n    margin-top: 0rem;\n    bottom: 0.45rem;\n    z-index: 10;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);\n    width: 100%;\n  }\n}\n\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail.desktop[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  transition: transform 0.2s;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail.desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail.desktop[_ngcontent-%COMP%]:hover {\n  opacity: 70%;\n  transform: scale(1.1);\n}\n\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail.mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvdmVyLWxpc3RpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUk7RUFDRSxVQUFBO0FBUE47O0FBZUk7RUFDRSxVQUFBO0FBWk47O0FBaUJBO0VBZUUsc0JBQUE7QUE1QkY7O0FBY0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVpKOztBQWFJO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQVhOOztBQWNNO0VBQ0UsZUFBQTtBQVpSOztBQWlCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFmSjs7QUFpQkU7RUFDRSxnQkFBQTtBQWZKOztBQW1CQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQWhCRjs7QUFrQkU7RUFORjtJQU9JLDhCQUFBO0VBZkY7QUFDRjs7QUFnQkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFkSjs7QUFpQkk7RUFQRjtJQVFJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBZEo7QUFDRjs7QUFpQk07RUFERjtJQUVJLGFBQUE7RUFkTjtBQUNGOztBQWlCRTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBZk47O0FBZ0JNO0VBQ0UsMEJBQUE7QUFkUjs7QUFpQkk7RUFDRSxnQkFBQTtBQWZOOztBQW1CRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQWpCSjs7QUFtQkk7RUFQRjtJQVFJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBaEJKO0FBQ0Y7O0FBa0JJO0VBYkY7SUFjSSxlQUFBO0VBZko7QUFDRjs7QUFpQkk7RUFDRSxrQkFBQTtBQWZOOztBQWtCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBaEJOOztBQW1CTTtFQVJGO0lBU0ksa0JBQUE7SUFDQSx1QkFBQTtFQWhCTjtBQUNGOztBQWtCTTtFQUNFLFdBQUE7RUFFQSxpQkFBQTtBQWpCUjs7QUFvQk07RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWxCUjs7QUFvQlE7RUFSRjtJQVNJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esb0NBQUE7SUFDQSxXQUFBO0VBakJSO0FBQ0Y7O0FBcUJJO0VBQ0Usa0JBQUE7RUFJQSwwQkFBQTtBQXRCTjs7QUFtQk07RUFGRjtJQUdJLGFBQUE7RUFoQk47QUFDRjs7QUFrQk07RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFoQlI7O0FBcUJNO0VBREY7SUFFSSxhQUFBO0VBbEJOO0FBQ0YiLCJmaWxlIjoiZGlzY292ZXItbGlzdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkZXNrdG9wOiAxMjQ4cHg7XG4kdGFibGV0OiA5NjBweDtcbiRtb2JpbGU6IDY0MHB4O1xuXG5cbjpob3N0KC5tYXBzKSB7XG4gIC8vIDUgaW1hZ2VzIGluIGVhY2ggcm93LCAyIHJvd3MuXG4gIC5pbWFnZS1jb250ZW50IHtcbiAgICAudGh1bWJuYWlsIHtcbiAgICAgIHdpZHRoOiAxNiU7XG4gICAgfVxuICB9XG59XG5cbjpob3N0KC5tYWNyb3Njb3Blcykge1xuICAvLyA0IGltYWdlcyBpbiBhIHJvdywgMSByb3cuXG4gIC5pbWFnZS1jb250ZW50IHtcbiAgICAudGh1bWJuYWlsIHtcbiAgICAgIHdpZHRoOiAyMiU7XG4gICAgfVxuICB9XG59XG5cbjpob3N0KC5zdWJtaXNzaW9ucykge1xuICAuaW1hZ2UtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC50aHVtYm5haWwge1xuICAgICAgd2lkdGg6IDQ0JTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBwYWRkaW5nOiAycmVtO1xuICAgIH1cbiAgICAudGh1bWJuYWlsLmRlc2t0b3Age1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLnRleHQtY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgaDQge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gIH1cbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG4gIC50ZXh0LWNvbnRlbnQge1xuICAgIGZsZXgtZ3JvdzogMjtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgICB3aWR0aDogNDAlO1xuXG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwcmVtO1xuICAgIH1cblxuICAgIC5ib2R5IHtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gIC5zaG93LW1vcmUge1xuICAgICAgY29sb3I6ICM4ZGM2M2Y7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuICAgIC5mdWxsIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICB9XG5cbiAgLmltYWdlLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogNjAlO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwcmVtO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbTtcbiAgICB9XG5cbiAgICAudGh1bWJuYWlsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIC8vIHdpZHRoOiAyMiU7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMXJlbSk7XG4gICAgICB9XG5cbiAgICAgIC50aHVtYm5haWwtaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gaGVpZ2h0OiA4MCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgfVxuXG4gICAgICAudGh1bWJuYWlsLXRpdGxlIHtcbiAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcmVtO1xuICAgICAgICAgIGJvdHRvbTogLjQ1cmVtO1xuICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50aHVtYm5haWwuZGVza3RvcCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogNzAlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRodW1ibmFpbC5tb2JpbGUge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [_constants_content_trigger__WEBPACK_IMPORTED_MODULE_1__.contentTrigger] } });


/***/ }),

/***/ 6904:
/*!************************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/discover-listing/discover-listing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverListingModule": () => (/* binding */ DiscoverListingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _discover_listing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover-listing.component */ 8993);
/* harmony import */ var _warning_dialog_warning_dialog_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../warning-dialog/warning-dialog.module */ 9794);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.module */ 3687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






class DiscoverListingModule {
}
DiscoverListingModule.ɵfac = function DiscoverListingModule_Factory(t) { return new (t || DiscoverListingModule)(); };
DiscoverListingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DiscoverListingModule });
DiscoverListingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownModule,
            _warning_dialog_warning_dialog_module__WEBPACK_IMPORTED_MODULE_1__.WarningDialogModule,
            _shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DiscoverListingModule, { declarations: [_discover_listing_component__WEBPACK_IMPORTED_MODULE_0__.DiscoverListingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownModule,
        _warning_dialog_warning_dialog_module__WEBPACK_IMPORTED_MODULE_1__.WarningDialogModule,
        _shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule], exports: [_discover_listing_component__WEBPACK_IMPORTED_MODULE_0__.DiscoverListingComponent] }); })();


/***/ }),

/***/ 6645:
/*!***********************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/warning-dialog/warning-dialog.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarningDialogComponent": () => (/* binding */ WarningDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 2529);




class WarningDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        /** HTML class name */
        this.clsName = 'sci-warning-dialog';
        this.closeLink = '';
        this.warningMessage = '';
        if (data.closeLink) {
            this.closeLink = data.closeLink;
        }
        if (data.warningMessage) {
            this.warningMessage = data.warningMessage;
        }
    }
    /**
     * Closes info dialog component
     */
    close() {
        this.dialogRef.close();
    }
    buttonClickHandler() {
        if (this.closeLink !== '') {
            window.open(this.closeLink, '_blank');
        }
        else {
            this.close();
        }
    }
}
WarningDialogComponent.ɵfac = function WarningDialogComponent_Factory(t) { return new (t || WarningDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
WarningDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WarningDialogComponent, selectors: [["sci-warning-dialog"]], hostVars: 2, hostBindings: function WarningDialogComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 15, vars: 1, consts: [[1, "warning-dialog", "wrapper"], [1, "container"], [1, "close"], [1, "material-icons", "close-icon", 3, "click"], [1, "content"], [1, "info-icon-container"], [1, "info-icon"], [1, "mat-typography"], [1, "description"], [1, "button-container"], [1, "continue-button", 3, "click"]], template: function WarningDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarningDialogComponent_Template_mat_icon_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarningDialogComponent_Template_button_click_13_listener() { return ctx.buttonClickHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "CONTINUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.warningMessage, " ");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent], styles: ["[_nghost-%COMP%]   .info-icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 2rem;\n}\n[_nghost-%COMP%]   .info-icon-container[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 3rem;\n  height: 3rem;\n  text-align: center;\n  padding: 0.7rem;\n  border-radius: 50%;\n}\n[_nghost-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12%;\n  margin-top: -3.5rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .description[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   .button-container[_ngcontent-%COMP%]   .continue-button[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcm5pbmctZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUdJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSEo7QUFNRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFKSjtBQU9FO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUxKO0FBT0k7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUxOIiwiZmlsZSI6Indhcm5pbmctZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG4gIC5pbmZvLWljb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgICAuaW5mby1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogLjdyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG5cbiAgLmNsb3NlLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTIlO1xuICAgIG1hcmdpbi10b3A6IC0zLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB9XG5cbiAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgICAuY29udGludWUtYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 9794:
/*!********************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/warning-dialog/warning-dialog.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarningDialogModule": () => (/* binding */ WarningDialogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _warning_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warning-dialog.component */ 6645);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);





class WarningDialogModule {
}
WarningDialogModule.ɵfac = function WarningDialogModule_Factory(t) { return new (t || WarningDialogModule)(); };
WarningDialogModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WarningDialogModule });
WarningDialogModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WarningDialogModule, { declarations: [_warning_dialog_component__WEBPACK_IMPORTED_MODULE_0__.WarningDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule], exports: [_warning_dialog_component__WEBPACK_IMPORTED_MODULE_0__.WarningDialogComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-projects_scimaps_src_app_shared_components_discover-listing_discover-listing_module_ts.js.map