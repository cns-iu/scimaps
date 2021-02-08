(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n[_nghost-%COMP%]   .tab[_ngcontent-%COMP%] {\n  border-bottom: 2px solid transparent;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  cursor: pointer;\n  height: 3rem;\n  font-size: 1rem;\n  text-align: center;\n  line-height: 3rem;\n}\n[_nghost-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #8dc63f;\n}\n[_nghost-%COMP%]   .tab[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWItaGVhZGVyL3RhYi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0k7RUFDRSxnQ0FBQTtBQUNOO0FBRUk7RUFDRSxpQkFBQTtBQUFOIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWItaGVhZGVyL3RhYi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgLnRhYiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgIzhkYzYzZjtcbiAgICB9XG5cbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIH1cbiAgfVxufSJdfQ== */"] });
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





const routes = [{ path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }];
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

/***/ "UoYK":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-routing.module */ "P6uQ");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "rVrE");
/* harmony import */ var _shared_components_profile_gallery_profile_gallery_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/profile-gallery/profile-gallery.module */ "nyXH");
/* harmony import */ var _shared_components_tab_header_tab_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/tab-header/tab-header.module */ "IbK4");







class AboutModule {
}
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutModule_Factory(t) { return new (t || AboutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
            _shared_components_profile_gallery_profile_gallery_module__WEBPACK_IMPORTED_MODULE_4__["ProfileGalleryModule"],
            _shared_components_tab_header_tab_header_module__WEBPACK_IMPORTED_MODULE_5__["TabHeaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
        _shared_components_profile_gallery_profile_gallery_module__WEBPACK_IMPORTED_MODULE_4__["ProfileGalleryModule"],
        _shared_components_tab_header_tab_header_module__WEBPACK_IMPORTED_MODULE_5__["TabHeaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
                    _shared_components_profile_gallery_profile_gallery_module__WEBPACK_IMPORTED_MODULE_4__["ProfileGalleryModule"],
                    _shared_components_tab_header_tab_header_module__WEBPACK_IMPORTED_MODULE_5__["TabHeaderModule"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");



function ProfileGalleryComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function ProfileGalleryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.description);
} }
function ProfileGalleryComponent_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r3.affiliation);
} }
function ProfileGalleryComponent_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r3.body);
} }
function ProfileGalleryComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileGalleryComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const profile_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.goToLink(profile_r3.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileGalleryComponent_div_3_div_7_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileGalleryComponent_div_3_div_8_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.getImageSource(profile_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", profile_r3.slug + "/image.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.compact === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.compact === false);
} }
class ProfileGalleryComponent {
    constructor() {
        /** HTML class name */
        this.clsName = 'sci-profile-gallery';
        this.compact = true;
        this.title = '';
        this.description = '';
    }
    getImageSource(profile) {
        return `assets/${this.directory}/${profile.slug}/image.png`;
    }
    goToLink(link) {
        window.open(link, '_blank');
    }
}
ProfileGalleryComponent.ɵfac = function ProfileGalleryComponent_Factory(t) { return new (t || ProfileGalleryComponent)(); };
ProfileGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileGalleryComponent, selectors: [["sci-profile-gallery"]], hostVars: 2, hostBindings: function ProfileGalleryComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { profiles: "profiles", directory: "directory", compact: "compact", title: "title", description: "description" }, decls: 4, vars: 3, consts: [["class", "title", 4, "ngIf"], ["class", "description", 4, "ngIf"], [1, "profile-container"], ["class", "profile", 3, "click", 4, "ngFor", "ngForOf"], [1, "title"], [1, "description"], [1, "profile", 3, "click"], [1, "profile-image", 3, "src", "alt"], [1, "profile-about"], [1, "profile-name"], [1, "profile-title"], ["class", "profile-affiliation", 4, "ngIf"], ["class", "profile-body", 4, "ngIf"], [1, "profile-affiliation"], [1, "profile-body"]], template: function ProfileGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileGalleryComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileGalleryComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileGalleryComponent_div_3_Template, 9, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profiles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n[_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 30%;\n  margin-bottom: 1.5rem;\n  cursor: pointer;\n}\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n    width: 48%;\n  }\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%] {\n  height: 6rem;\n  width: auto;\n}\n[_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-about[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-left: 1rem;\n  flex-grow: 2;\n}\n[_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-about[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%], [_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-about[_ngcontent-%COMP%]   .profile-title[_ngcontent-%COMP%], [_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-about[_ngcontent-%COMP%]   .profile-affiliation[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9maWxlLWdhbGxlcnkvcHJvZmlsZS1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtFO0VBQ0UsbUJBQUE7QUFKSjtBQU9FO0VBQ0UsbUJBQUE7QUFMSjtBQVFFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQU5KO0FBUUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBTk47QUFRTTtFQVBGO0lBUUksVUFBQTtFQUxOO0FBQ0Y7QUFPTTtFQVhGO0lBWUksV0FBQTtFQUpOO0FBQ0Y7QUFNTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBSlI7QUFPTTtFQUNFLGlCQUFBO0FBTFI7QUFRTTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFOUjtBQVFRO0VBQ0Usc0JBQUE7QUFOViIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZmlsZS1nYWxsZXJ5L3Byb2ZpbGUtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkZXNrdG9wOiAxMjQ4cHg7XG4kdGFibGV0OiA5NjBweDtcbiRtb2JpbGU6IDY0MHB4O1xuXG46aG9zdCB7XG4gIC50aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIC5wcm9maWxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLnByb2ZpbGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAucHJvZmlsZS1pbWFnZSB7XG4gICAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5wcm9maWxlLW5hbWUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLnByb2ZpbGUtYWJvdXQge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgIGZsZXgtZ3JvdzogMjtcblxuICAgICAgICAucHJvZmlsZS1uYW1lLCAucHJvZmlsZS10aXRsZSwgLnByb2ZpbGUtYWZmaWxpYXRpb24ge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC4yNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */"] });
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
        }], directory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], compact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
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




class ProfileGalleryModule {
}
ProfileGalleryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileGalleryModule });
ProfileGalleryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileGalleryModule_Factory(t) { return new (t || ProfileGalleryModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileGalleryModule, { declarations: [_profile_gallery_component__WEBPACK_IMPORTED_MODULE_2__["ProfileGalleryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_profile_gallery_component__WEBPACK_IMPORTED_MODULE_2__["ProfileGalleryComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileGalleryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_profile_gallery_component__WEBPACK_IMPORTED_MODULE_2__["ProfileGalleryComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
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
/* harmony import */ var _shared_components_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/tab-header/tab-header.component */ "9W5r");
/* harmony import */ var _shared_components_profile_gallery_profile_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/profile-gallery/profile-gallery.component */ "W7zp");




class AboutComponent {
    constructor() {
        /** HTML class name */
        this.clsName = 'sci-about';
        this.placeholderProfilesShort = [
            {
                name: 'Name Surname',
                title: 'Job Title',
                affiliation: 'Affiliation',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
                link: 'www.google.com',
                slug: 'name-surname'
            },
            {
                name: 'Name Surname',
                title: 'Job Title',
                affiliation: 'Affiliation',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
                link: 'www.google.com',
                slug: 'name-surname'
            },
            {
                name: 'Name Surname',
                title: 'Job Title',
                affiliation: 'Affiliation',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
                link: 'www.google.com',
                slug: 'name-surname'
            }
        ];
        this.placeholderProfilesLong = [
            {
                name: 'Name Surname',
                title: 'Job Title',
                affiliation: 'Affiliation',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
                link: 'www.google.com',
                slug: 'name-surname'
            },
            {
                name: 'Name Surname',
                title: 'Job Title',
                affiliation: 'Affiliation',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
                link: 'www.google.com',
                slug: 'name-surname'
            },
            {
                name: 'Name Surname',
                title: 'Job Title',
                affiliation: 'Affiliation',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
                link: 'www.google.com',
                slug: 'name-surname'
            },
            {
                name: 'Name Surname',
                title: 'Job Title',
                affiliation: 'Affiliation',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
                link: 'www.google.com',
                slug: 'name-surname'
            },
            {
                name: 'Name Surname',
                title: 'Job Title',
                affiliation: 'Affiliation',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
                link: 'www.google.com',
                slug: 'name-surname'
            },
            {
                name: 'Name Surname',
                title: 'Job Title',
                affiliation: 'Affiliation',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
                link: 'www.google.com',
                slug: 'name-surname'
            },
            {
                name: 'Name Surname',
                title: 'Job Title',
                affiliation: 'Affiliation',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
                link: 'www.google.com',
                slug: 'name-surname'
            },
            {
                name: 'Name Surname',
                title: 'Job Title',
                affiliation: 'Affiliation',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
                link: 'www.google.com',
                slug: 'name-surname'
            },
            {
                name: 'Name Surname',
                title: 'Job Title',
                affiliation: 'Affiliation',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
                link: 'www.google.com',
                slug: 'name-surname'
            }
        ];
        this.placeholderDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam ligula felis, id blandit quam viverra auctor. Nullam quam dolor, mattis consequat tincidunt sed, condimentum id sapien. Pellentesque ut congue lectus. Sed leo velit, rutrum vitae sapien sed, faucibus tincidunt justo. Donec et vestibulum enim, a efficitur purus. Mauris quis lacinia nibh, eget suscipit felis. Suspendisse ut elementum metus, ac sagittis sem. ';
        this.pageTabs = ['Curators/Advisory Board', 'Ambassadors'];
        this.activePageTab = 0;
    }
    updateActivePageTab(index) {
        this.activePageTab = index;
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["sci-about"]], hostVars: 2, hostBindings: function AboutComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 3, vars: 11, consts: [[1, "tab-header", 3, "tabs", "activeTabIndexChanged"], [1, "profile-gallery", 3, "title", "description", "profiles", "compact", "directory"], [3, "title", "description", "profiles", "compact", "directory"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-tab-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeTabIndexChanged", function AboutComponent_Template_sci_tab_header_activeTabIndexChanged_0_listener($event) { return ctx.updateActivePageTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "sci-profile-gallery", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "sci-profile-gallery", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabs", ctx.pageTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Curators")("description", ctx.placeholderDescription)("profiles", ctx.placeholderProfilesShort)("compact", false)("directory", "profiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Advisory Board")("description", ctx.placeholderDescription)("profiles", ctx.placeholderProfilesLong)("compact", true)("directory", "profiles");
    } }, directives: [_shared_components_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_1__["TabHeaderComponent"], _shared_components_profile_gallery_profile_gallery_component__WEBPACK_IMPORTED_MODULE_2__["ProfileGalleryComponent"]], styles: ["[_nghost-%COMP%]   .tab-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .profile-gallery[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0FBQUo7QUFHRTtFQUNFLHFCQUFBO0FBREoiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAudGFiLWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5wcm9maWxlLWdhbGxlcnkge1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-about-about-module.js.map