(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-macroscopes-macroscopes-module~pages-maps-maps-module"],{

/***/ "0zur":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/discover-listing/discover-listing.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DiscoverListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverListingComponent", function() { return DiscoverListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../warning-dialog/warning-dialog.component */ "QAr1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");







function DiscoverListingComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiscoverListingComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const thumbnail_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.desktopThumbnailClickHandler(thumbnail_r2.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thumbnail_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imageSource(thumbnail_r2.image), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", thumbnail_r2.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thumbnail_r2.title);
} }
function DiscoverListingComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiscoverListingComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const thumbnail_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.mobileThumbnailClickHandler(thumbnail_r5.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thumbnail_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imageSource(thumbnail_r5.image), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", thumbnail_r5.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thumbnail_r5.title);
} }
class DiscoverListingComponent {
    constructor(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        /** HTML class name */
        this.clsName = 'sci-discover-listing';
        this.mobileWarning = 'Macroscopes work best on desktop or larger tablet screens.  You may have a less than optimal experience on this device.';
    }
    imageSource(image) {
        return image.startsWith('assets/') ? image : `assets/${this.discoverItem.directory}/${this.discoverItem.slug}/${image}`;
    }
    mobileThumbnailClickHandler(link) {
        if (this.type === 'macroscopes') {
            this.dialog.open(_warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_1__["WarningDialogComponent"], {
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
DiscoverListingComponent.ɵfac = function DiscoverListingComponent_Factory(t) { return new (t || DiscoverListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DiscoverListingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiscoverListingComponent, selectors: [["sci-discover-listing"]], hostVars: 2, hostBindings: function DiscoverListingComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { discoverItem: "discoverItem", type: "type" }, decls: 8, vars: 5, consts: [[1, "text-content"], [1, "header"], ["markdown", "", 1, "body", 3, "data"], [1, "image-content"], ["class", "thumbnail desktop", 3, "click", 4, "ngFor", "ngForOf"], ["class", "thumbnail mobile", 3, "click", 4, "ngFor", "ngForOf"], ["markdown", "", 1, "tablet-body", 3, "data"], [1, "thumbnail", "desktop", 3, "click"], [1, "thumbnail-image", 3, "src", "alt"], [1, "thumbnail-title"], [1, "thumbnail", "mobile", 3, "click"]], template: function DiscoverListingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DiscoverListingComponent_div_5_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DiscoverListingComponent_div_6_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.discoverItem.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.discoverItem.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.discoverItem.thumbnails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.discoverItem.thumbnails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.discoverItem.body);
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".maps[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  width: 16%;\n}\n\n.macroscopes[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  width: 22%;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n\n@media (max-width: 960px) {\n  [_nghost-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n[_nghost-%COMP%]   .text-content[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  padding-left: 1rem;\n  padding-right: 3rem;\n  width: 40%;\n}\n\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .text-content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 0rem;\n    padding-right: 0rem;\n  }\n}\n\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .text-content[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 60%;\n  flex-wrap: wrap;\n  height: 100%;\n}\n\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 0rem;\n    padding-right: 0rem;\n  }\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem;\n}\n\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-right: 1rem;\n  cursor: pointer;\n  margin-bottom: 1rem;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    position: relative;\n    width: calc(50% - 1rem);\n  }\n}\n\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .thumbnail-image[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: cover;\n}\n\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .thumbnail-title[_ngcontent-%COMP%] {\n  height: 20%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  margin-top: 16px;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .thumbnail-title[_ngcontent-%COMP%] {\n    margin-top: 0rem;\n    bottom: 0.45rem;\n    z-index: 10;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);\n    width: 100%;\n  }\n}\n\n[_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail.desktop[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail.desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .image-content[_ngcontent-%COMP%]   .thumbnail.mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n[_nghost-%COMP%]   .tablet-body[_ngcontent-%COMP%] {\n  padding-left: 0rem;\n  padding-right: 0rem;\n  margin-top: 1rem;\n}\n\n@media (min-width: 960px) {\n  [_nghost-%COMP%]   .tablet-body[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kaXNjb3Zlci1saXN0aW5nL2Rpc2NvdmVyLWxpc3RpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUk7RUFDRSxVQUFBO0FBUE47O0FBZUk7RUFDRSxVQUFBO0FBWk47O0FBaUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBZEY7O0FBZ0JFO0VBTkY7SUFPSSxzQkFBQTtFQWJGO0FBQ0Y7O0FBZUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFiSjs7QUFnQkk7RUFQRjtJQVFJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBYko7QUFDRjs7QUFnQk07RUFERjtJQUVJLGFBQUE7RUFiTjtBQUNGOztBQWlCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQWZKOztBQWlCSTtFQVBGO0lBUUksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFkSjtBQUNGOztBQWdCSTtFQWJGO0lBY0ksZUFBQTtFQWJKO0FBQ0Y7O0FBZUk7RUFDRSxrQkFBQTtBQWJOOztBQWdCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBZE47O0FBaUJNO0VBUkY7SUFTSSxrQkFBQTtJQUNBLHVCQUFBO0VBZE47QUFDRjs7QUFnQk07RUFDRSxXQUFBO0VBRUEsaUJBQUE7QUFmUjs7QUFrQk07RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWhCUjs7QUFrQlE7RUFSRjtJQVNJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esb0NBQUE7SUFDQSxXQUFBO0VBZlI7QUFDRjs7QUFtQkk7RUFDRSxrQkFBQTtBQWpCTjs7QUFrQk07RUFGRjtJQUdJLGFBQUE7RUFmTjtBQUNGOztBQW1CTTtFQURGO0lBRUksYUFBQTtFQWhCTjtBQUNGOztBQW9CRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWxCSjs7QUFvQkk7RUFMRjtJQU1JLGFBQUE7RUFqQko7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlzY292ZXItbGlzdGluZy9kaXNjb3Zlci1saXN0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRlc2t0b3A6IDEyNDhweDtcbiR0YWJsZXQ6IDk2MHB4O1xuJG1vYmlsZTogNjQwcHg7XG5cblxuOmhvc3QoLm1hcHMpIHtcbiAgLy8gNSBpbWFnZXMgaW4gZWFjaCByb3csIDIgcm93cy5cbiAgLmltYWdlLWNvbnRlbnQge1xuICAgIC50aHVtYm5haWwge1xuICAgICAgd2lkdGg6IDE2JTtcbiAgICB9XG4gIH1cbn1cblxuOmhvc3QoLm1hY3Jvc2NvcGVzKSB7XG4gIC8vIDQgaW1hZ2VzIGluIGEgcm93LCAxIHJvdy5cbiAgLmltYWdlLWNvbnRlbnQge1xuICAgIC50aHVtYm5haWwge1xuICAgICAgd2lkdGg6IDIyJTtcbiAgICB9XG4gIH1cbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC50ZXh0LWNvbnRlbnQge1xuICAgIGZsZXgtZ3JvdzogMjtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgICB3aWR0aDogNDAlO1xuXG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwcmVtO1xuICAgIH1cblxuICAgIC5ib2R5IHtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmltYWdlLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogNjAlO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwcmVtO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbTtcbiAgICB9XG5cbiAgICAudGh1bWJuYWlsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIC8vIHdpZHRoOiAyMiU7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMXJlbSk7XG4gICAgICB9XG5cbiAgICAgIC50aHVtYm5haWwtaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gaGVpZ2h0OiA4MCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgfVxuXG4gICAgICAudGh1bWJuYWlsLXRpdGxlIHtcbiAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcmVtO1xuICAgICAgICAgIGJvdHRvbTogLjQ1cmVtO1xuICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50aHVtYm5haWwuZGVza3RvcCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aHVtYm5haWwubW9iaWxlIHtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnRhYmxldC1ib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgcGFkZGluZy1yaWdodDogMHJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscoverListingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-discover-listing',
                templateUrl: './discover-listing.component.html',
                styleUrls: ['./discover-listing.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], discoverItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "QAr1":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/warning-dialog/warning-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: WarningDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningDialogComponent", function() { return WarningDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");





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
WarningDialogComponent.ɵfac = function WarningDialogComponent_Factory(t) { return new (t || WarningDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
WarningDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WarningDialogComponent, selectors: [["sci-warning-dialog"]], hostVars: 2, hostBindings: function WarningDialogComponent_HostBindings(rf, ctx) { if (rf & 2) {
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
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"]], styles: ["[_nghost-%COMP%]   .info-icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 2rem;\n}\n[_nghost-%COMP%]   .info-icon-container[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 3rem;\n  height: 3rem;\n  text-align: center;\n  padding: 0.7rem;\n  border-radius: 50%;\n}\n[_nghost-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12%;\n  margin-top: -3.5rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .description[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   .button-container[_ngcontent-%COMP%]   .continue-button[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy93YXJuaW5nLWRpYWxvZy93YXJuaW5nLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBREo7QUFHSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRE47QUFLRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUhKO0FBTUU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBSko7QUFPRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFMSjtBQU9JO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFMTiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvd2FybmluZy1kaWFsb2cvd2FybmluZy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cbiAgLmluZm8taWNvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAgIC5pbmZvLWljb24ge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgd2lkdGg6IDNyZW07XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAuN3JlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gIH1cblxuICAuY2xvc2UtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMiU7XG4gICAgbWFyZ2luLXRvcDogLTMuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuZGVzY3JpcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIH1cblxuICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgIC5jb250aW51ZS1idXR0b24ge1xuICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarningDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-warning-dialog',
                templateUrl: './warning-dialog.component.html',
                styleUrls: ['./warning-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "RxUJ":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/discover-listing/discover-listing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DiscoverListingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverListingModule", function() { return DiscoverListingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _discover_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discover-listing.component */ "0zur");
/* harmony import */ var _warning_dialog_warning_dialog_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../warning-dialog/warning-dialog.module */ "yE48");








const routes = [
    { path: 'map', loadChildren: () => Promise.all(/*! import() | pages-map-map-module */[__webpack_require__.e("default~pages-about-about-module~pages-macroscope-macroscope-module~pages-map-map-module~pages-maps-~ae28e702"), __webpack_require__.e("default~pages-macroscope-macroscope-module~pages-macroscopes-macroscopes-module~pages-map-map-module~6842d2ab"), __webpack_require__.e("default~pages-macroscope-macroscope-module~pages-map-map-module~pages-maps-maps-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-map-map-module")]).then(__webpack_require__.bind(null, /*! ../../../pages/map/map.module */ "862v")).then(m => m.MapModule) },
    { path: 'macroscope', loadChildren: () => Promise.all(/*! import() | pages-macroscope-macroscope-module */[__webpack_require__.e("default~pages-about-about-module~pages-macroscope-macroscope-module~pages-map-map-module~pages-maps-~ae28e702"), __webpack_require__.e("default~pages-macroscope-macroscope-module~pages-macroscopes-macroscopes-module~pages-map-map-module~6842d2ab"), __webpack_require__.e("default~pages-macroscope-macroscope-module~pages-map-map-module~pages-maps-maps-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-macroscope-macroscope-module")]).then(__webpack_require__.bind(null, /*! ../../../pages/macroscope/macroscope.module */ "+1hx")).then(m => m.MacroscopeModule) },
];
class DiscoverListingModule {
}
DiscoverListingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DiscoverListingModule });
DiscoverListingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DiscoverListingModule_Factory(t) { return new (t || DiscoverListingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"],
            _warning_dialog_warning_dialog_module__WEBPACK_IMPORTED_MODULE_5__["WarningDialogModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DiscoverListingModule, { declarations: [_discover_listing_component__WEBPACK_IMPORTED_MODULE_4__["DiscoverListingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"],
        _warning_dialog_warning_dialog_module__WEBPACK_IMPORTED_MODULE_5__["WarningDialogModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_discover_listing_component__WEBPACK_IMPORTED_MODULE_4__["DiscoverListingComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscoverListingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_discover_listing_component__WEBPACK_IMPORTED_MODULE_4__["DiscoverListingComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"],
                    _warning_dialog_warning_dialog_module__WEBPACK_IMPORTED_MODULE_5__["WarningDialogModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ],
                exports: [_discover_listing_component__WEBPACK_IMPORTED_MODULE_4__["DiscoverListingComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yE48":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/warning-dialog/warning-dialog.module.ts ***!
  \***************************************************************************/
/*! exports provided: WarningDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningDialogModule", function() { return WarningDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _warning_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warning-dialog.component */ "QAr1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");






class WarningDialogModule {
}
WarningDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WarningDialogModule });
WarningDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WarningDialogModule_Factory(t) { return new (t || WarningDialogModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WarningDialogModule, { declarations: [_warning_dialog_component__WEBPACK_IMPORTED_MODULE_2__["WarningDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]], exports: [_warning_dialog_component__WEBPACK_IMPORTED_MODULE_2__["WarningDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarningDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_warning_dialog_component__WEBPACK_IMPORTED_MODULE_2__["WarningDialogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]
                ],
                exports: [_warning_dialog_component__WEBPACK_IMPORTED_MODULE_2__["WarningDialogComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-macroscopes-macroscopes-module~pages-maps-maps-module.js.map