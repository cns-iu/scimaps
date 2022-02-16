(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["macroscope-macroscope-module"],{

/***/ "+1hx":
/*!*******************************************************!*\
  !*** ./src/app/pages/macroscope/macroscope.module.ts ***!
  \*******************************************************/
/*! exports provided: MacroscopeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroscopeModule", function() { return MacroscopeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _macroscope_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./macroscope-routing.module */ "HDbH");
/* harmony import */ var _macroscope_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./macroscope.component */ "k5Vb");
/* harmony import */ var _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/item-drawer/item-drawer.module */ "ml3Y");
/* harmony import */ var _shared_components_maker_video_maker_video_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/maker-video/maker-video.module */ "brYF");
/* harmony import */ var _macroscope_detail_macroscope_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./macroscope-detail/macroscope-detail.component */ "QwFk");
/* harmony import */ var _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.module */ "t1/B");
/* harmony import */ var _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.module */ "4FRl");
/* harmony import */ var _shared_components_video_video_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/video/video.module */ "pRNg");











class MacroscopeModule {
}
MacroscopeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MacroscopeModule });
MacroscopeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MacroscopeModule_Factory(t) { return new (t || MacroscopeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_components_maker_video_maker_video_module__WEBPACK_IMPORTED_MODULE_5__["MakerVideoModule"],
            _macroscope_routing_module__WEBPACK_IMPORTED_MODULE_2__["MacroscopeRoutingModule"],
            _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_4__["ItemDrawerModule"],
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__["DrawerModule"],
            _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_8__["DrawerHeaderModule"],
            _shared_components_video_video_module__WEBPACK_IMPORTED_MODULE_9__["VideoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MacroscopeModule, { declarations: [_macroscope_component__WEBPACK_IMPORTED_MODULE_3__["MacroscopeComponent"], _macroscope_detail_macroscope_detail_component__WEBPACK_IMPORTED_MODULE_6__["MacroscopeDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_components_maker_video_maker_video_module__WEBPACK_IMPORTED_MODULE_5__["MakerVideoModule"],
        _macroscope_routing_module__WEBPACK_IMPORTED_MODULE_2__["MacroscopeRoutingModule"],
        _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_4__["ItemDrawerModule"],
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__["DrawerModule"],
        _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_8__["DrawerHeaderModule"],
        _shared_components_video_video_module__WEBPACK_IMPORTED_MODULE_9__["VideoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_macroscope_component__WEBPACK_IMPORTED_MODULE_3__["MacroscopeComponent"], _macroscope_detail_macroscope_detail_component__WEBPACK_IMPORTED_MODULE_6__["MacroscopeDetailComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_components_maker_video_maker_video_module__WEBPACK_IMPORTED_MODULE_5__["MakerVideoModule"],
                    _macroscope_routing_module__WEBPACK_IMPORTED_MODULE_2__["MacroscopeRoutingModule"],
                    _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_4__["ItemDrawerModule"],
                    _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__["DrawerModule"],
                    _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_8__["DrawerHeaderModule"],
                    _shared_components_video_video_module__WEBPACK_IMPORTED_MODULE_9__["VideoModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "HDbH":
/*!***************************************************************!*\
  !*** ./src/app/pages/macroscope/macroscope-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MacroscopeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroscopeRoutingModule", function() { return MacroscopeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_services_map_macroscope_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/map-macroscope-resolver.service */ "UTmY");
/* harmony import */ var _macroscope_detail_macroscope_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./macroscope-detail/macroscope-detail.component */ "QwFk");
/* harmony import */ var _macroscope_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./macroscope.component */ "k5Vb");







const routes = [{
        path: ':iteration/:sequence',
        component: _macroscope_component__WEBPACK_IMPORTED_MODULE_4__["MacroscopeComponent"],
        resolve: {
            macroscope: _shared_services_map_macroscope_resolver_service__WEBPACK_IMPORTED_MODULE_2__["MapMacroscopeResolverService"]
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        children: [
            {
                path: 'detail',
                component: _macroscope_detail_macroscope_detail_component__WEBPACK_IMPORTED_MODULE_3__["MacroscopeDetailComponent"],
            },
        ],
    }];
class MacroscopeRoutingModule {
}
MacroscopeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MacroscopeRoutingModule });
MacroscopeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MacroscopeRoutingModule_Factory(t) { return new (t || MacroscopeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MacroscopeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "QwFk":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/macroscope/macroscope-detail/macroscope-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MacroscopeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroscopeDetailComponent", function() { return MacroscopeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/drawer.animations */ "AY0P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/drawer/drawer.component */ "IMSB");
/* harmony import */ var _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/drawer-header/drawer-header.component */ "StKz");
/* harmony import */ var _shared_components_video_video_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/video/video.component */ "kEUT");








function MacroscopeDetailComponent_sci_drawer_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "sci-video", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx_r1.item.videoLink);
} }
function MacroscopeDetailComponent_sci_drawer_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-drawer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sci-drawer-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backClick", function MacroscopeDetailComponent_sci_drawer_0_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MacroscopeDetailComponent_sci_drawer_0_div_4_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@drawerInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.videoLink);
} }
class MacroscopeDetailComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.showOverlay = false;
    }
    ngOnInit() {
        var _a;
        this.showOverlay = true;
        const parentSnapshot = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.snapshot;
        const macroscope = parentSnapshot === null || parentSnapshot === void 0 ? void 0 : parentSnapshot.data.macroscope;
        this.item = macroscope;
    }
    close() {
        this.showOverlay = false;
        setTimeout(() => {
            this.router.navigate(['../'], { relativeTo: this.route });
        }, 500);
    }
}
MacroscopeDetailComponent.ɵfac = function MacroscopeDetailComponent_Factory(t) { return new (t || MacroscopeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MacroscopeDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MacroscopeDetailComponent, selectors: [["sci-macroscope-detail"]], decls: 1, vars: 1, consts: [["class", "sci-drawer", 4, "ngIf"], [1, "sci-drawer"], ["drawer", "", 1, "drawer"], ["backText", "Macroscope", 3, "backClick"], [1, "overlay-container"], ["class", "video-wrapper", 4, "ngIf"], [1, "video-wrapper"], [3, "url"]], template: function MacroscopeDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MacroscopeDetailComponent_sci_drawer_0_Template, 5, 2, "sci-drawer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOverlay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_4__["DrawerComponent"], _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_5__["DrawerHeaderComponent"], _shared_components_video_video_component__WEBPACK_IMPORTED_MODULE_6__["VideoComponent"]], styles: [".video-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9tYWNyb3Njb3BlL21hY3Jvc2NvcGUtZGV0YWlsL21hY3Jvc2NvcGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtBQUFKIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9tYWNyb3Njb3BlL21hY3Jvc2NvcGUtZGV0YWlsL21hY3Jvc2NvcGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udmlkZW8td3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopeDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-macroscope-detail',
                templateUrl: './macroscope-detail.component.html',
                styleUrls: ['./macroscope-detail.component.scss'],
                animations: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "YYwF":
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/*! exports provided: SafePipe, SafePipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipeModule", function() { return SafePipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");



class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        if (type === 'resourceUrl') {
            return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        }
        else {
            return '';
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safe'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();
class SafePipeModule {
}
SafePipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SafePipeModule });
SafePipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SafePipeModule_Factory(t) { return new (t || SafePipeModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SafePipeModule, { declarations: [SafePipe], exports: [SafePipe] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    SafePipe
                ],
                exports: [
                    SafePipe
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "brYF":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/maker-video/maker-video.module.ts ***!
  \*********************************************************************/
/*! exports provided: MakerVideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakerVideoModule", function() { return MakerVideoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/safe.pipe */ "YYwF");
/* harmony import */ var _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drawer-header/drawer-header.module */ "4FRl");
/* harmony import */ var _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../drawer/drawer.module */ "t1/B");
/* harmony import */ var _maker_video_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maker-video.component */ "u5px");








class MakerVideoModule {
}
MakerVideoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MakerVideoModule });
MakerVideoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MakerVideoModule_Factory(t) { return new (t || MakerVideoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__["DrawerModule"],
            _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_4__["DrawerHeaderModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
            _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MakerVideoModule, { declarations: [_maker_video_component__WEBPACK_IMPORTED_MODULE_6__["MakerVideoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__["DrawerModule"],
        _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_4__["DrawerHeaderModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipeModule"]], exports: [_maker_video_component__WEBPACK_IMPORTED_MODULE_6__["MakerVideoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MakerVideoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_maker_video_component__WEBPACK_IMPORTED_MODULE_6__["MakerVideoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__["DrawerModule"],
                    _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_4__["DrawerHeaderModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
                    _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipeModule"]
                ],
                exports: [
                    _maker_video_component__WEBPACK_IMPORTED_MODULE_6__["MakerVideoComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "k5Vb":
/*!**********************************************************!*\
  !*** ./src/app/pages/macroscope/macroscope.component.ts ***!
  \**********************************************************/
/*! exports provided: MacroscopeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroscopeComponent", function() { return MacroscopeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_components_item_drawer_item_drawer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/item-drawer/item-drawer.component */ "iZg1");




/**
 * Component to displaying individual macroscope items
 */
class MacroscopeComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        /**
         * Selected language
         */
        this.currentLanguage = 'en';
    }
    ngOnInit() {
        this.subscription = this.route.data.subscribe((data) => {
            this.selectedItem = data.macroscope;
        });
    }
    /**
     * Changes selected language and navigates to new language route
     * @param language selected language
     */
    changeLanguage(language) {
        const iteration = this.route.snapshot.paramMap.get('iteration');
        const sequence = this.route.snapshot.paramMap.get('sequence');
        this.router.navigate(['/', 'macroscope', iteration, sequence], { queryParams: { lang: language } });
    }
    /**
     * Unsubscribe from Observables
     */
    ngOnDestroy() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
MacroscopeComponent.ɵfac = function MacroscopeComponent_Factory(t) { return new (t || MacroscopeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MacroscopeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MacroscopeComponent, selectors: [["sci-macroscope"]], decls: 2, vars: 2, consts: [[1, "macroscope", 3, "item", "type", "languageChange"], ["detail-macroscope", ""]], template: function MacroscopeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-item-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("languageChange", function MacroscopeComponent_Template_sci_item_drawer_languageChange_0_listener($event) { return ctx.changeLanguage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.selectedItem)("type", "macroscope");
    } }, directives: [_shared_components_item_drawer_item_drawer_component__WEBPACK_IMPORTED_MODULE_2__["ItemDrawerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-macroscope',
                templateUrl: './macroscope.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "kEUT":
/*!************************************************************!*\
  !*** ./src/app/shared/components/video/video.component.ts ***!
  \************************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/safe.pipe */ "YYwF");



class VideoComponent {
    constructor() {
        this.url = '';
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["sci-video"]], inputs: { url: "url" }, decls: 21, vars: 36, consts: [[1, "container"], ["controls", "", "autoplay", "", 1, "video"], ["type", "video/webm", 3, "src"], ["type", "video/mp4", 3, "src"], ["type", "video/ogg", 3, "src"], ["type", "video/3gp", 3, "src"], ["type", "video/quicktime", 3, "src"], ["type", "video/x-quicktime", 3, "src"], ["type", "video/avi", 3, "src"], ["type", "video/x-ms-wmv", 3, "src"], ["type", "video/x-ms-asf", 3, "src"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "source", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "source", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "source", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "source", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "source", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Sorry, your browser doesn't support embedded videos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 9, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 12, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 15, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 18, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 21, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 24, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 27, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 30, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 33, ctx.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_1__["SafePipe"]], styles: ["[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n[_nghost-%COMP%]   .video[_ngcontent-%COMP%] {\n  width: 70vw;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQURSO0FBR0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQURSIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3Qge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAudmlkZW8ge1xuICAgICAgICB3aWR0aDogNzB2dztcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-video',
                templateUrl: './video.component.html',
                styleUrls: ['./video.component.scss']
            }]
    }], null, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "pRNg":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/video/video.module.ts ***!
  \*********************************************************/
/*! exports provided: VideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoModule", function() { return VideoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video.component */ "kEUT");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/safe.pipe */ "YYwF");





class VideoModule {
}
VideoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VideoModule });
VideoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VideoModule_Factory(t) { return new (t || VideoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideoModule, { declarations: [_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipeModule"]], exports: [_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipeModule"]
                ],
                exports: [_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "u5px":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/maker-video/maker-video.component.ts ***!
  \************************************************************************/
/*! exports provided: MakerVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakerVideoComponent", function() { return MakerVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/drawer.animations */ "AY0P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drawer/drawer.component */ "IMSB");
/* harmony import */ var _drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../drawer-header/drawer-header.component */ "StKz");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/safe.pipe */ "YYwF");









function MakerVideoComponent_sci_drawer_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r1.video.videoLink, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.video == null ? null : ctx_r1.video.long_description);
} }
function MakerVideoComponent_sci_drawer_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-drawer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sci-drawer-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backClick", function MakerVideoComponent_sci_drawer_0_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MakerVideoComponent_sci_drawer_0_div_3_Template, 5, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@drawerInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.video);
} }
class MakerVideoComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.showOverlay = false;
    }
    ngOnInit() {
        this.showOverlay = true;
        const { video } = this.route.snapshot.data;
        if (video) {
            this.video = video;
        }
    }
    close() {
        this.showOverlay = false;
        setTimeout(() => {
            this.router.navigate(['/', 'learning-center', 'maker-videos']);
        }, 500);
    }
}
MakerVideoComponent.ɵfac = function MakerVideoComponent_Factory(t) { return new (t || MakerVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MakerVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MakerVideoComponent, selectors: [["sci-maker-video"]], decls: 1, vars: 1, consts: [["class", "sci-drawer", 4, "ngIf"], [1, "sci-drawer"], ["drawer", "", 1, "drawer"], ["backText", "Maker Videos", 3, "backClick"], ["class", "overlay-container", 4, "ngIf"], [1, "overlay-container"], ["title", "YouTube video player", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "iframe", 3, "src"], [1, "spacer-72"], ["markdown", "", 1, "long-description", 3, "data"]], template: function MakerVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MakerVideoComponent_sci_drawer_0_Template, 4, 2, "sci-drawer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOverlay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_4__["DrawerComponent"], _drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_5__["DrawerHeaderComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownComponent"]], pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__["SafePipe"]], styles: ["[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%] {\n  background-color: black;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 75vh;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%]   .iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56vw;\n  border: 0;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%]   .long-description[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tYWtlci12aWRlby9tYWtlci12aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLHVCQUZRO0FBQVo7QUFHSTtFQUNFLHVCQUpNO0VBS04sYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRE47QUFFTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUFSO0FBRU07RUFDRSxZQUFBO0FBQVIiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21ha2VyLXZpZGVvL21ha2VyLXZpZGVvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAvLyBPdmVybGF5IHN0eWxpbmdcbiAgJGJnY29sb3I6IGJsYWNrO1xuICAuc2NpLWRyYXdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7XG4gICAgLm92ZXJsYXktY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDc1dmg7XG4gICAgICAuaWZyYW1lIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTZ2dztcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgfVxuICAgICAgLmxvbmctZGVzY3JpcHRpb24ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MakerVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-maker-video',
                templateUrl: './maker-video.component.html',
                styleUrls: ['./maker-video.component.scss'],
                animations: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=macroscope-macroscope-module.js.map