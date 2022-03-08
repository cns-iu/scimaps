(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-macroscopes-macroscopes-module"],{

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

/***/ "DsRh":
/*!*****************************************************************!*\
  !*** ./src/app/pages/macroscopes/macroscopes-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MacroscopesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroscopesRoutingModule", function() { return MacroscopesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _macroscopes_body_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./macroscopes-body-resolver.service */ "Oz6S");
/* harmony import */ var _macroscopes_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./macroscopes-resolver.service */ "n4Jh");
/* harmony import */ var _macroscopes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./macroscopes.component */ "iwkI");







const routes = [{
        path: '',
        component: _macroscopes_component__WEBPACK_IMPORTED_MODULE_4__["MacroscopesComponent"],
        resolve: {
            macroscopes: _macroscopes_resolver_service__WEBPACK_IMPORTED_MODULE_3__["MacroscopesResolverService"],
            body: _macroscopes_body_resolver_service__WEBPACK_IMPORTED_MODULE_2__["MacroscopesBodyResolverService"]
        },
        runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | macroscope-macroscope-module */[__webpack_require__.e("default~macroscope-macroscope-module~pages-maps-maps-module~submission-submission-module"), __webpack_require__.e("common"), __webpack_require__.e("macroscope-macroscope-module")]).then(__webpack_require__.bind(null, /*! ../macroscope/macroscope.module */ "+1hx")).then(m => m.MacroscopeModule),
                data: { animation: 'Macroscope', type: 'macroscope' }
            }
        ]
    }];
class MacroscopesRoutingModule {
}
MacroscopesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MacroscopesRoutingModule });
MacroscopesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MacroscopesRoutingModule_Factory(t) { return new (t || MacroscopesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MacroscopesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "FJoV":
/*!*********************************************************!*\
  !*** ./src/app/pages/macroscopes/macroscopes.module.ts ***!
  \*********************************************************/
/*! exports provided: MacroscopesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroscopesModule", function() { return MacroscopesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./macroscopes-routing.module */ "DsRh");
/* harmony import */ var _macroscopes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./macroscopes.component */ "iwkI");
/* harmony import */ var _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/discover-listing/discover-listing.module */ "RxUJ");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/carousel/carousel.module */ "8yKn");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.module */ "t1/B");
/* harmony import */ var _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.module */ "4FRl");












class MacroscopesModule {
}
MacroscopesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MacroscopesModule });
MacroscopesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MacroscopesModule_Factory(t) { return new (t || MacroscopesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_3__["MacroscopesRoutingModule"],
            _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_5__["DiscoverListingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
            _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_9__["DrawerModule"],
            _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_10__["DrawerHeaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MacroscopesModule, { declarations: [_macroscopes_component__WEBPACK_IMPORTED_MODULE_4__["MacroscopesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_3__["MacroscopesRoutingModule"],
        _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_5__["DiscoverListingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
        _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_9__["DrawerModule"],
        _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_10__["DrawerHeaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_macroscopes_component__WEBPACK_IMPORTED_MODULE_4__["MacroscopesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_3__["MacroscopesRoutingModule"],
                    _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_5__["DiscoverListingModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
                    _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_9__["DrawerModule"],
                    _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_10__["DrawerHeaderModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Oz6S":
/*!************************************************************************!*\
  !*** ./src/app/pages/macroscopes/macroscopes-body-resolver.service.ts ***!
  \************************************************************************/
/*! exports provided: MacroscopesBodyResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroscopesBodyResolverService", function() { return MacroscopesBodyResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/utils */ "fNWo");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");





class MacroscopesBodyResolverService {
    constructor(content) {
        this.content = content;
        this.directory = 'assets/content/site/macroscopes';
    }
    resolve() {
        return this.content
            .getContent('site/macroscopes/whatIsAMacroscope.md')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return this.updatePaths(response);
        }));
    }
    updatePaths(body) {
        // Carousel
        const { carousel } = body;
        if (carousel && Array.isArray(carousel)) {
            carousel.forEach((image) => {
                if (image.lg && !Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["isHttp"])(image.lg)) {
                    image.lg = `${this.directory}/${image.lg}`;
                }
                if (image.sm && !Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["isHttp"])(image.sm)) {
                    image.sm = `${this.directory}/${image.sm}`;
                }
            });
            body.carousel = carousel;
        }
        return body;
    }
}
MacroscopesBodyResolverService.ɵfac = function MacroscopesBodyResolverService_Factory(t) { return new (t || MacroscopesBodyResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"])); };
MacroscopesBodyResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MacroscopesBodyResolverService, factory: MacroscopesBodyResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopesBodyResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"] }]; }, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");




class DrawerHeaderComponent {
    constructor() {
        this.className = 'sci-drawer-header';
        this.title = '';
        this.backText = '';
        this.backClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
DrawerHeaderComponent.ɵfac = function DrawerHeaderComponent_Factory(t) { return new (t || DrawerHeaderComponent)(); };
DrawerHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawerHeaderComponent, selectors: [["sci-drawer-header"]], hostVars: 2, hostBindings: function DrawerHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.className);
    } }, inputs: { title: "title", backText: "backText" }, outputs: { backClick: "backClick" }, decls: 10, vars: 4, consts: [[1, "drawer-header"], [1, "back-button", 3, "click"], [1, "back-icon"], [1, "back-text"], [1, "title"]], template: function DrawerHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawerHeaderComponent_Template_div_click_1_listener() { return ctx.backClick.emit("back"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.backText));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin-bottom: 1.5rem;\n  height: 2rem;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  justify-self: flex-start;\n  cursor: pointer;\n  color: #7996a3;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-icon[_ngcontent-%COMP%] {\n  margin-left: -0.5rem;\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-text[_ngcontent-%COMP%] {\n  display: block;\n}\n@media screen and (max-width: 640px) {\n  [_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #757575;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  margin-left: auto;\n  margin-right: auto;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kcmF3ZXItaGVhZGVyL2RyYXdlci1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQU47QUFDTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUdNO0VBQ0UsY0FBQTtBQURSO0FBRVE7RUFGRjtJQUdNLGFBQUE7RUFDVjtBQUNGO0FBRUk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUNNO0VBQ0UsZ0JBQUE7QUFDUiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJhd2VyLWhlYWRlci9kcmF3ZXItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGluZy9icmVha3BvaW50cyc7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBcbiAgLmRyYXdlci1oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5iYWNrLWJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiAjNzk5NmEzO1xuICAgICAgLmJhY2staWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICB9XG5cbiAgICAvLyAgSGlkZSBiYWNrIHRleHQgb24gbW9iaWxlLlxuICAgICAgLmJhY2stdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
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
        }], backText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "iwkI":
/*!************************************************************!*\
  !*** ./src/app/pages/macroscopes/macroscopes.component.ts ***!
  \************************************************************/
/*! exports provided: MacroscopesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroscopesComponent", function() { return MacroscopesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/drawer.animations */ "AY0P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _shared_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/carousel/carousel.component */ "4Isi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _shared_components_carousel_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/carousel/item.component */ "IV5s");
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/directives/breakpoint.directive */ "EpdQ");
/* harmony import */ var _shared_components_discover_listing_discover_listing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/discover-listing/discover-listing.component */ "0zur");
/* harmony import */ var _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.component */ "IMSB");
/* harmony import */ var _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.component */ "StKz");













function MacroscopesComponent_sci_carousel_item_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carouselItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", carouselItem_r4.lg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", carouselItem_r4.lg.split("/")[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](carouselItem_r4.title);
} }
function MacroscopesComponent_sci_carousel_item_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carouselItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", carouselItem_r4.sm, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", carouselItem_r4.sm.split("/")[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](carouselItem_r4.title);
} }
function MacroscopesComponent_sci_carousel_item_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-carousel-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MacroscopesComponent_sci_carousel_item_7_div_1_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MacroscopesComponent_sci_carousel_item_7_div_2_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "desktop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "desktop-");
} }
function MacroscopesComponent_ng_container_8_sci_discover_listing_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sci-discover-listing", 18);
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "macroscope-", item_r9.iteration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("discoverItem", item_r9)("type", "macroscopes");
} }
function MacroscopesComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MacroscopesComponent_ng_container_8_sci_discover_listing_1_Template, 1, 3, "sci-discover-listing", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showAllItems || i_r10 < ctx_r1.displayLimit);
} }
function MacroscopesComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MacroscopesComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.showAllItems = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show More Macroscopes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MacroscopesComponent_sci_drawer_14_sci_carousel_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-carousel-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "sci-discover-listing", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const discoverItem_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("discoverItem", discoverItem_r16)("type", "macroscopes");
} }
function MacroscopesComponent_sci_drawer_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-drawer", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sci-drawer-header", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backClick", function MacroscopesComponent_sci_drawer_14_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.showModal = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "sci-carousel", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MacroscopesComponent_sci_drawer_14_sci_carousel_item_5_Template, 2, 2, "sci-carousel-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@drawerInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Macroscopes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.discoverItems);
} }
class MacroscopesComponent {
    constructor(route) {
        this.route = route;
        /** HTML class name */
        this.clsName = 'sci-macroscopes';
        this.showModal = false;
        this.highlightBody = '';
        this.discoverItems = [];
        this.displayItems = [];
        this.carouselItems = [];
        this.showAllItems = false;
        this.displayLimit = 3;
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            const { body, macroscopes } = data;
            this.discoverItems = macroscopes;
            if (body) {
                this.highlightBody = body.body;
            }
            if (body.carousel) {
                this.carouselItems = body.carousel;
            }
            this.updateDisplayItems();
        });
    }
    updateDisplayItems() {
        const items = [...this.discoverItems];
        this.displayItems = items;
    }
}
MacroscopesComponent.ɵfac = function MacroscopesComponent_Factory(t) { return new (t || MacroscopesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
MacroscopesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MacroscopesComponent, selectors: [["sci-macroscopes"]], hostVars: 2, hostBindings: function MacroscopesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 16, vars: 5, consts: [[1, "macroscopes-container"], [1, "header"], [1, "highlight-content"], ["markdown", "", 1, "highlight-body", 3, "data"], [1, "carousel-container"], [1, "carousel"], ["class", "sci-carousel-item", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["class", "more-button", 3, "click", 4, "ngIf"], [1, "mobile-button", 3, "click"], [1, "mobile-icon"], ["class", "sci-drawer", 4, "ngIf"], [1, "sci-carousel-item"], ["class", "carousel-item", 4, "sciBreakpoint"], [1, "carousel-item"], [1, "carousel-image", 3, "src", "alt"], [1, "carousel-image-title"], ["class", "discover-item macroscopes", 3, "id", "discoverItem", "type", 4, "ngIf"], [1, "discover-item", "macroscopes", 3, "id", "discoverItem", "type"], [1, "more-button", 3, "click"], [1, "sci-drawer"], ["drawer", "", 1, "drawer-container"], [3, "title", "backClick"], [1, "drawer-content"], [1, "macroscopes-carousel"], ["class", "mobile-carousel", 4, "ngFor", "ngForOf"], [1, "mobile-carousel"], [3, "discoverItem", "type"]], template: function MacroscopesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Macroscopes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "sci-carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MacroscopesComponent_sci_carousel_item_7_Template, 3, 2, "sci-carousel-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MacroscopesComponent_ng_container_8_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MacroscopesComponent_button_9_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MacroscopesComponent_Template_div_click_10_listener() { return ctx.showModal = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Discover Macroscopes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MacroscopesComponent_sci_drawer_14_Template, 6, 3, "sci-drawer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.highlightBody);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.carouselItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAllItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showModal);
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"], _shared_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_components_carousel_item_component__WEBPACK_IMPORTED_MODULE_7__["CarouselItemComponent"], _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_8__["BreakpointDirective"], _shared_components_discover_listing_discover_listing_component__WEBPACK_IMPORTED_MODULE_9__["DiscoverListingComponent"], _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_10__["DrawerComponent"], _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_11__["DrawerHeaderComponent"]], styles: ["@media (max-width: 640px) {\n    .swiper-button-prev,   .swiper-button-next {\n    background-color: rgba(0, 0, 0, 0.75);\n    border-radius: 50%;\n    padding: 1.5rem;\n    top: 40% !important;\n  }\n    .swiper-button-prev::after,   .swiper-button-next::after {\n    color: white !important;\n  }\n    .macroscopes-carousel .swiper-button-prev,   .macroscopes-carousel .swiper-button-next {\n    position: fixed;\n    top: calc(50% + 36px) !important;\n  }\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding-bottom: 2rem;\n  margin-bottom: 2rem;\n  left: 0;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    border: none;\n  }\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .highlight-body[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-right: 1rem;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .highlight-body[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0rem;\n  }\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 50%;\n  max-height: 28rem;\n  margin-left: 3rem;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0rem;\n    margin-bottom: 1rem;\n    margin-left: 0rem;\n  }\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .carousel-image[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .carousel-image-title[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n[_nghost-%COMP%]   .discover-item[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .discover-item[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n[_nghost-%COMP%]   .more-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 2rem;\n  height: 2.5rem;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .more-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n[_nghost-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.75rem;\n  font-size: 1rem;\n  cursor: pointer;\n  margin-bottom: 2rem;\n}\n\n[_nghost-%COMP%]   .mobile-button[_ngcontent-%COMP%]   .mobile-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  height: 1.5rem;\n  width: 1.5rem;\n  cursor: pointer;\n}\n\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 640px) {\n  [_nghost-%COMP%]   sci-drawer.sci-drawer[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9tYWNyb3Njb3Blcy9tYWNyb3Njb3Blcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFO0lBQ0UscUNBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQUZKO0VBS0U7SUFDRSx1QkFBQTtFQUhKO0VBUUk7SUFDRSxlQUFBO0lBQ0EsZ0NBQUE7RUFOTjtBQUNGOztBQVlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0FBVEo7O0FBV0k7RUFSRjtJQVNJLDhCQUFBO0lBQ0EsWUFBQTtFQVJKO0FBQ0Y7O0FBVUk7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFSTjs7QUFVTTtFQUpGO0lBS0ksV0FBQTtJQUNBLGFBQUE7RUFQTjtBQUNGOztBQVVJO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFSTjs7QUFTTTtFQU5GO0lBT0ksV0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VBTk47QUFDRjs7QUFRTTtFQUNFLFdBQUE7QUFOUjs7QUFRVTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQU5aOztBQVFZO0VBRUUsaUJBQUE7QUFQZDs7QUFVWTtFQUNFLGFBQUE7QUFSZDs7QUFrQkU7RUFDRSxtQkFBQTtBQWhCSjs7QUFrQkk7RUFIRjtJQUlJLGFBQUE7RUFmSjtBQUNGOztBQWtCRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWhCSjs7QUFrQkk7RUFQRjtJQVFJLGFBQUE7RUFmSjtBQUNGOztBQWtCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFoQko7O0FBa0JJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFoQk47O0FBbUJJO0VBaEJGO0lBaUJJLGFBQUE7RUFoQko7QUFDRjs7QUFvQkk7RUFERjtJQUVJLGFBQUE7RUFqQko7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvcGFnZXMvbWFjcm9zY29wZXMvbWFjcm9zY29wZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsaW5nL2JyZWFrcG9pbnRzJztcblxuOjpuZy1kZWVwIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2LCAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICB0b3A6IDQwJSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5zd2lwZXItYnV0dG9uLXByZXY6OmFmdGVyLCAuc3dpcGVyLWJ1dHRvbi1uZXh0OjphZnRlciB7XG4gICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAvLyBtYWNyb3Njb3BlcyBkcmF3ZXIgb3ZlcnJpZGVcbiAgICAubWFjcm9zY29wZXMtY2Fyb3VzZWwge1xuICAgICAgLnN3aXBlci1idXR0b24tcHJldiwgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSArIDM2cHgpICFpbXBvcnRhbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOmhvc3Qge1xuICAuaGlnaGxpZ2h0LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGxlZnQ6IDA7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgIC5oaWdobGlnaHQtYm9keSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDByZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhcm91c2VsLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgbWF4LWhlaWdodDogMjhyZW07XG4gICAgICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMHJlbTtcbiAgICAgIH1cblxuICAgICAgLmNhcm91c2VsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC5zY2ktY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgICAgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgIC5jYXJvdXNlbC1pbWFnZSB7XG4gICAgICAgICAgICAgIC8vIGhlaWdodDogMjByZW07XG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLmNhcm91c2VsLWltYWdlLXRpdGxlIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAzLjc1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRpc2NvdmVyLWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubW9yZS1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tb2JpbGUtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAgIC5tb2JpbGUtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1vYmlsZSkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICBzY2ktZHJhd2VyLnNjaS1kcmF3ZXIge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59Il19 */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-macroscopes',
                templateUrl: './macroscopes.component.html',
                styleUrls: ['./macroscopes.component.scss'],
                animations: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-macroscopes-macroscopes-module.js.map