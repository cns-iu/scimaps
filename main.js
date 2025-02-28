(self["webpackChunkscimaps"] = self["webpackChunkscimaps"] || []).push([["main"],{

/***/ 5719:
/*!********************************************************!*\
  !*** ./projects/scimaps/src/app/app-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _pages_books_books_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/books/books.module */ 8633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() */ "projects_scimaps_src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 8518)).then(m => m.HomeModule) },
    { path: 'about', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js-projects_scimaps_src_app_-a1d8c7"), __webpack_require__.e("default-projects_scimaps_src_app_shared_components_list-view_list-view_module_ts-projects_sci-83e9e8"), __webpack_require__.e("projects_scimaps_src_app_pages_about_about_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 6830)).then(m => m.AboutModule) },
    { path: 'books', loadChildren: () => _pages_books_books_module__WEBPACK_IMPORTED_MODULE_0__.BooksModule },
    {
        matcher: (url) => {
            if (url.length >= 1 && (url[0].path === 'map' || url[0].path === 'maps')) {
                return {
                    consumed: [url[0]]
                };
            }
            return null;
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_scimaps_src_app_shared_components_item-drawer_item-drawer_module_ts"), __webpack_require__.e("default-projects_scimaps_src_app_shared_components_discover-listing_discover-listing_module_ts"), __webpack_require__.e("projects_scimaps_src_app_pages_maps_maps_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/maps/maps.module */ 1148)).then(m => m.MapsModule),
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
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_scimaps_src_app_shared_components_discover-listing_discover-listing_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_scimaps_src_app_pages_macroscopes_macroscopes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/macroscopes/macroscopes.module */ 4202)).then(m => m.MacroscopesModule),
        data: { animation: 'Macroscopes' }
    },
    {
        path: 'hosting',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js-projects_scimaps_src_app_-a1d8c7"), __webpack_require__.e("projects_scimaps_src_app_pages_hosting_hosting_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/hosting/hosting.module */ 7028)).then(m => m.HostingModule),
        data: { animation: 'Hosting' }
    },
    {
        path: 'venues',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_scimaps_src_app_shared_components_list-view_list-view_module_ts-projects_sci-83e9e8"), __webpack_require__.e("projects_scimaps_src_app_pages_venues_venues_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/venues/venues.module */ 6520)).then(m => m.VenuesModule)
    },
    {
        path: 'learning-center',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_scimaps_src_app_pages_maker-videos_maker-videos-resolver_service_ts-projects-db45da"), __webpack_require__.e("common"), __webpack_require__.e("projects_scimaps_src_app_pages_learning-center_learning-center_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/learning-center/learning-center.module */ 2958)).then(m => m.LearningCenterModule)
    },
    {
        path: 'call-for-macroscopes',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js-projects_scimaps_src_app_-a1d8c7"), __webpack_require__.e("common"), __webpack_require__.e("projects_scimaps_src_app_pages_call-for-macroscopes_call-for-macroscopes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/call-for-macroscopes/call-for-macroscopes.module */ 7574)).then(m => m.CallForMacroscopesModule)
    },
    {
        path: 'learning-material',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_scimaps_src_app_shared_components_drawer-header_drawer-header_module_ts-_d6320")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/learning-material/learning-material.module */ 1730)).then(m => m.LearningMaterialModule),
        data: { animation: 'LearningMaterial' }
    },
    {
        path: 'maker-videos',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_scimaps_src_app_pages_maker-videos_maker-videos-resolver_service_ts-projects-db45da"), __webpack_require__.e("default-projects_scimaps_src_app_pages_maker-videos_maker-videos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/maker-videos/maker-videos.module */ 5599)).then(m => m.MakerVideosModule)
    },
    {
        path: 'blogs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_scimaps_src_app_pages_blogs_blogs_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_scimaps_src_app_shared_components_drawer-header_drawer-header_module_ts-_d6321")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/blogs/blogs.module */ 6928)).then(m => m.BlogsModule)
    },
    {
        matcher: (url) => {
            if (url.length >= 1 && (url[0].path === 'submission' || url[0].path === 'submissions')) {
                return {
                    consumed: [url[0]]
                };
            }
            return null;
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_scimaps_src_app_shared_components_discover-listing_discover-listing_module_ts"), __webpack_require__.e("projects_scimaps_src_app_pages_submissions_submissions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/submissions/submissions.module */ 4520)).then(m => m.SubmissionsModule),
        data: { animation: 'Macroscopes' }
    },
    // {
    //   path: 'submissions',
    //   loadChildren: () => import('./pages/submissions/submissions.module').then(m => m.SubmissionsModule)
    // },
    {
        path: '**',
        redirectTo: '/home'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6353:
/*!***************************************************!*\
  !*** ./projects/scimaps/src/app/app.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 4835);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 3720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/drawer.animations */ 6665);
/* harmony import */ var _constants_route_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/route.animations */ 8902);
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/utils */ 9298);
/* harmony import */ var _core_actions_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/actions/app.actions */ 2830);
/* harmony import */ var _core_state_page_page_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/state/page/page.state */ 7251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/header/header.component */ 5270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/directives/breakpoint.directive */ 8355);
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/footer/footer.component */ 8685);
/* harmony import */ var _core_components_mobile_header_menu_mobile_header_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/mobile-header-menu/mobile-header-menu.component */ 8106);



















function AppComponent_sci_mobile_header_menu_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "sci-mobile-header-menu", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("sidenavClose", function AppComponent_sci_mobile_header_menu_3_Template_sci_mobile_header_menu_sidenavClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r2.sidenavOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "scrolled": a0 }; };
class AppComponent {
    constructor(router, zone, store) {
        this.router = router;
        this.zone = zone;
        this.store = store;
        this.hasPageScrolled = false;
        this.sidenavOpen = false;
        this.footerParameters = {
            phoneNumber: '812-855-4831',
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
                if ((0,_constants_utils__WEBPACK_IMPORTED_MODULE_3__.isExternalURL)(href) || (0,_constants_utils__WEBPACK_IMPORTED_MODULE_3__.isAssetURL)(href)) {
                    window.open(href, '_blank');
                }
                else {
                    this.router.navigate([href]);
                }
            }
        }
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
        this.windowScrollSubscription = cdkScrollable.elementScrolled().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => {
            return cdkScrollable.measureScrollOffset('top');
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(10), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)((scrollY) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(scrollY);
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
    onActivate() {
        const cdkScrollable = this.sidenavContainer.scrollable;
        cdkScrollable.scrollTo({ top: 0, left: 0 });
    }
    closeDrawer() {
        this.store.dispatch(new _core_actions_app_actions__WEBPACK_IMPORTED_MODULE_4__.SetAppState({
            drawer: {
                showDrawer: false
            }
        }));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["sci-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenavContainer, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.sidenavContainer = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_click_HostBindingHandler($event) { return ctx.customRedirect($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveDocument"]);
    } }, decls: 9, vars: 10, consts: [[1, "header", 3, "ngClass", "sidenavOpen", "sidenavOpenChange"], ["autosize", "", 1, "sidenav-container"], ["autoFocus", "false", "mode", "over", "position", "end", "fixedInViewport", "", "fixedTopGap", "72", 3, "opened", "closedStart"], [3, "sidenavClose", 4, "sciBreakpoint"], [1, "sidenav-content"], [1, "content", 3, "ngClass"], [3, "activate"], ["outlet", "outlet"], [3, "acknowledgement", "phoneNumber"], [3, "sidenavClose"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "sci-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("sidenavOpenChange", function AppComponent_Template_sci_header_sidenavOpenChange_0_listener($event) { return ctx.sidenavOpen = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-sidenav-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-sidenav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("closedStart", function AppComponent_Template_mat_sidenav_closedStart_2_listener() { return ctx.sidenavOpen = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, AppComponent_sci_mobile_header_menu_3_Template, 1, 0, "sci-mobile-header-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-sidenav-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "router-outlet", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_6_listener() { return ctx.onActivate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "sci-footer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](8, _c0, ctx.hasPageScrolled))("sidenavOpen", ctx.sidenavOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("opened", ctx.sidenavOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("sciBreakpoint", "tablet-");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r1))("ngClass", ctx.prepareClass(_r1));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("acknowledgement", ctx.footerParameters.acknowledgement)("phoneNumber", ctx.footerParameters.phoneNumber);
    } }, directives: [_core_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenav, _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_7__.BreakpointDirective, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterOutlet, _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent, _core_components_mobile_header_menu_mobile_header_menu_component__WEBPACK_IMPORTED_MODULE_9__.MobileHeaderMenuComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  overflow-y: hidden;\n}\n[_nghost-%COMP%]   .mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n[_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 72px);\n  z-index: unset;\n}\n[_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav-content[_ngcontent-%COMP%] {\n  z-index: unset;\n}\n[_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  margin-bottom: 7.5rem;\n  margin-top: 1rem;\n  min-height: 100%;\n}\n@media (min-width: 1248px) {\n  [_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    max-width: 80rem;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 3rem;\n  }\n}\n[_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .content.home-module[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQU1FO0VBQ0UsdUJBQUE7QUFKSjtBQU9FO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0FBTEo7QUFNSTtFQUNFLGNBQUE7QUFKTjtBQU9JO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUxOO0FBTU07RUFMRjtJQU1JLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VBSE47QUFDRjtBQUlNO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRlIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1vYmlsZTogNjQwcHg7XG4kZGVza3RvcDogMTI0OHB4O1xuXG4kaGVhZGVyLWhlaWdodDogNzJweDtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIFxuICAubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuc2lkZW5hdi1jb250YWluZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9KTtcbiAgICB6LWluZGV4OiB1bnNldDtcbiAgICAuc2lkZW5hdi1jb250ZW50IHtcbiAgICAgIHotaW5kZXg6IHVuc2V0O1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDcuNXJlbTtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRkZXNrdG9wKSB7XG4gICAgICAgIG1heC13aWR0aDogODByZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICB9XG4gICAgICAmLmhvbWUtbW9kdWxlIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], data: { animation: [
            _constants_route_animations__WEBPACK_IMPORTED_MODULE_2__.slideWithTransform,
            _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__.drawerInOut
        ] } });
(0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_core_state_page_page_state__WEBPACK_IMPORTED_MODULE_5__.PageState.drawer)
], AppComponent.prototype, "drawer$", void 0);


/***/ }),

/***/ 7674:
/*!************************************************!*\
  !*** ./projects/scimaps/src/app/app.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ 2791);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 5719);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6353);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 793);
/* harmony import */ var _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/drawer/drawer.module */ 626);
/* harmony import */ var _shared_components_makers_subdrawer_makers_subdrawer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/makers-subdrawer/makers-subdrawer.module */ 643);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ 3687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_breakpoint_registry_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/breakpoint-registry.service */ 4413);


















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
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_shared_services_breakpoint_registry_service__WEBPACK_IMPORTED_MODULE_6__.BreakpointRegistryService)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_13__.MarkdownModule.forRoot({
                loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
                markedOptions: {
                    provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_13__.MarkedOptions,
                    useValue: {
                        gfm: true
                    }
                }
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.ScrollingModule,
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_3__.DrawerModule,
            _shared_components_makers_subdrawer_makers_subdrawer_module__WEBPACK_IMPORTED_MODULE_4__.MakersSubdrawerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_13__.MarkdownModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.ScrollingModule,
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_3__.DrawerModule,
        _shared_components_makers_subdrawer_makers_subdrawer_module__WEBPACK_IMPORTED_MODULE_4__.MakersSubdrawerModule] }); })();


/***/ }),

/***/ 6665:
/*!*****************************************************************!*\
  !*** ./projects/scimaps/src/app/constants/drawer.animations.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawerInOut": () => (/* binding */ drawerInOut)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 7175);

const drawerInOut = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('drawerInOut', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('show', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        left: 0,
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('hide', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        left: '120%',
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('hide => show', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('500ms ease-out')]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('show => hide', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms ease-in')]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            left: '120%',
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('500ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            left: 0,
        })),
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            left: 0,
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('500ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            left: '120%',
        })),
    ]),
]);


/***/ }),

/***/ 8902:
/*!****************************************************************!*\
  !*** ./projects/scimaps/src/app/constants/route.animations.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fader": () => (/* binding */ fader),
/* harmony export */   "slider": () => (/* binding */ slider),
/* harmony export */   "transformer": () => (/* binding */ transformer),
/* harmony export */   "routeTransitionAnimations": () => (/* binding */ routeTransitionAnimations),
/* harmony export */   "slideWithTransform": () => (/* binding */ slideWithTransform)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 7175);

// apply on main and main should have relative position on it.
const fader = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY()',
            }),
        ], { optional: true }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                opacity: 1,
                transform: 'scale(1) translateY(0)',
            })),
        ], { optional: true }),
    ]),
]);
const slideTo = (direction) => {
    const optional = { optional: true };
    return [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%',
            }),
        ], optional),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                [direction]: '-100%',
            }),
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                    [direction]: '100%',
                })),
            ], optional),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                    [direction]: '0%',
                })),
            ], optional),
        ]),
    ];
};
const slider = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('Maps => Map', slideTo('right')),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('Map => Maps', slideTo('left')),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => isLeft', slideTo('left')),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => isRight', slideTo('right')),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('isRight => *', slideTo('right')),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('isLeft => *', slideTo('right')),
]);
const transformTo = ({ x = -100, y = 0, rotate = 0 }) => {
    const optional = { optional: true };
    return [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            }),
        ], optional),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: `tranlate(${x}%, ${y}%) rotate(${rotate}deg)`,
            }),
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms ease-out'),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                    transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`,
                }),
            ], optional),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                    transform: `translate(0, 0) rotate(0)`,
                })),
            ]),
        ]),
    ];
};
const transformer = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('Maps => Map', transformTo({ x: -100, y: -100, rotate: -720 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('Map => Maps', transformTo({ x: -100, y: -100, rotate: -720 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => isLeft', transformTo({ x: -100, y: -100, rotate: -720 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => isRight', transformTo({ x: -100, y: -100, rotate: -720 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('isRight => *', transformTo({ x: -100, y: -100, rotate: -720 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('isLeft => *', transformTo({ x: -100, y: -100, rotate: -720 })),
]);
const routeTransitionAnimations = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('Maps => Map, Macroscopes => Macroscope', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ position: 'relative' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%',
            }),
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ right: '-100%', opacity: 0 })]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)()),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('500ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ right: '100%', opacity: 0 })),
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('500ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ right: '0%', opacity: 1 })),
            ]),
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)()),
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('Map => Maps, Macroscope => Macroscopes', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ position: 'relative' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            }),
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ left: '-100%', opacity: 0 })]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)()),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ left: '100%', opacity: 0 })),
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ left: '0%', opacity: 1 })),
            ]),
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)()),
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
const slideWithTransform = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`${forward}`, [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: '!', width: '!' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'translateX(100%)',
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
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
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            // query(':leave', [
            //   animate(
            //     '3.3s cubic-bezier(.35,0,.25,1)',
            //     style({ transform: 'translateX(-100%)' })
            //   ),
            // ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }))),
        ]),
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`${backward}`, [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: '!', width: '!' }),
        // query(':enter', style({ transform: 'translateX(-100%)' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
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
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(100%)' })),
            ]),
            // and now reveal the enter
            // query(
            //   ':enter',
            //   animate(
            //     '0.3s cubic-bezier(.35,0,.25,1)',
            //     style({ transform: 'translateX(0)' })
            //   )
            // ),
        ]),
    ]),
]);


/***/ }),

/***/ 9298:
/*!*****************************************************!*\
  !*** ./projects/scimaps/src/app/constants/utils.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isHttp": () => (/* binding */ isHttp),
/* harmony export */   "isExternalURL": () => (/* binding */ isExternalURL),
/* harmony export */   "isAssetURL": () => (/* binding */ isAssetURL),
/* harmony export */   "getSegmentedDate": () => (/* binding */ getSegmentedDate)
/* harmony export */ });
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

/***/ 2830:
/*!**************************************************************!*\
  !*** ./projects/scimaps/src/app/core/actions/app.actions.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetAppState": () => (/* binding */ SetAppState)
/* harmony export */ });
class SetAppState {
    constructor(payload) {
        this.payload = payload;
    }
}
SetAppState.type = '[AppState] set';


/***/ }),

/***/ 2659:
/*!*******************************************************************************!*\
  !*** ./projects/scimaps/src/app/core/components/contact/contact.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/directives/breakpoint.directive */ 8355);



function ContactComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "language");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00A0\u00A0CNS:\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "cns.iu.edu");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Visit us:\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r0.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r0.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r0.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ContactComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Learn about CNS:\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "cns.iu.edu");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Visit us on social media:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r2.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r2.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r2.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
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
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["sci-contact"]], hostVars: 2, hostBindings: function ContactComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 13, vars: 2, consts: [[1, "section-1"], ["href", "mailto:cnscntr@iu.edu", "target", "_blank", "rel", "noopener noreferrer", 1, "email"], ["svgIcon", "social:email", 1, "icon"], [1, "phone"], [1, "icon"], ["class", "section-2", 4, "sciBreakpoint", "sciBreakpointElse"], ["desktop", ""], [1, "section-2"], ["href", "https://cns.iu.edu", "target", "_blank", "rel", "noopener noreferrer", 1, "website"], [1, "link"], [1, "social"], [1, "social-icons"], ["target", "_blank", "rel", "noopener noreferrer", 1, "link", 3, "href"], ["svgIcon", "social:twitter", 1, "icon"], ["svgIcon", "social:facebook", 1, "icon"], ["svgIcon", "social:instagram", 1, "icon"], [1, "section-3"], [1, "website"], ["href", "https://cns.iu.edu", "target", "_blank", "rel", "noopener noreferrer", 1, "link"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00A0\u00A0cnscntr@iu.edu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u00A0\u00A0812-855-4831");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ContactComponent_div_10_Template, 18, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ContactComponent_ng_template_11_Template, 16, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sciBreakpoint", "tablet-")("sciBreakpointElse", _r1);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_0__.BreakpointDirective], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 15rem;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .section-1[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-2[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem 1rem;\n}\n[_nghost-%COMP%]   .section-1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 3rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .section-2[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n[_nghost-%COMP%]   .section-2[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .section-2[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex: 1;\n}\n[_nghost-%COMP%]   .section-2[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  font-size: 2.25rem;\n  line-height: 2.25rem;\n  border: 1px solid;\n  border-radius: 0.25rem;\n}\n[_nghost-%COMP%]   .section-2[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:not(:last-child), [_nghost-%COMP%]   .section-3[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0.5rem;\n}\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .section-1[_ngcontent-%COMP%] {\n    padding-top: 1rem;\n    padding-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsaW5nL19pY29uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUhGO0FBS0U7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKSjtBQU1JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSk47QUFRRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQU5KO0FBU0U7RUFDRSxzQkFBQTtBQVBKO0FBU0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLE9BQUE7QUFQTjtBQVFNO0VDdENKLGNEdUN5QjtFQ3RDekIsZURzQ3lCO0VDckN6QixrQkRxQ3lCO0VDcEN6QixvQkRvQ3lCO0VBQ25CLGlCQUFBO0VBQ0Esc0JBQUE7QUFIUjtBQUtRO0VBQ0Usb0JBQUE7QUFIVjtBQVNFO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VBUEo7QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnaWNvbic7XG5cbiR0YWJsZXQ6IDk2MHB4O1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMTVyZW07XG5cbiAgYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5zZWN0aW9uLTEsIC5zZWN0aW9uLTIsIC5zZWN0aW9uLTMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcblxuICAgICYgPiAqIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuc2VjdGlvbi0yIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5zZWN0aW9uLTIsIC5zZWN0aW9uLTMge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG5cbiAgICAuc29jaWFsLWljb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICBmbGV4OiAxO1xuICAgICAgLmljb24ge1xuICAgICAgICBAaW5jbHVkZSBpY29uLnNpemUoMi4yNXJlbSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkge1xuICAgIC5zZWN0aW9uLTEge1xuICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cbiIsIlxuQG1peGluIHNpemUoJHNpemUpIHtcbiAgd2lkdGg6ICRzaXplO1xuICBoZWlnaHQ6ICRzaXplO1xuICBmb250LXNpemU6ICRzaXplO1xuICBsaW5lLWhlaWdodDogJHNpemU7XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 3039:
/*!****************************************************************************!*\
  !*** ./projects/scimaps/src/app/core/components/contact/contact.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactModule": () => (/* binding */ ContactModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 3687);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component */ 2659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





class ContactModule {
}
ContactModule.ɵfac = function ContactModule_Factory(t) { return new (t || ContactModule)(); };
ContactModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ContactModule });
ContactModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContactModule, { declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule], exports: [_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent] }); })();


/***/ }),

/***/ 8685:
/*!*****************************************************************************!*\
  !*** ./projects/scimaps/src/app/core/components/footer/footer.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 2529);



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
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["sci-footer"]], hostVars: 2, hostBindings: function FooterComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { phoneNumber: "phoneNumber", acknowledgement: "acknowledgement" }, decls: 25, vars: 5, consts: [[1, "contact"], [1, "social"], ["mat-icon-button", "", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "twitter", 3, "href"], ["svgIcon", "social:twitter", 1, "icon"], ["mat-icon-button", "", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "facebook", 3, "href"], ["svgIcon", "social:facebook", 1, "icon"], ["mat-icon-button", "", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "instagram", 3, "href"], ["svgIcon", "social:instagram", 1, "icon"], ["mat-icon-button", "", "href", "mailto:cnscntr@iu.edu", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "email"], [1, "icon", "font"], ["mat-icon-button", "", "href", "https://goo.gl/maps/yFFVMmMRzBNYU1pq8", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "map"], [1, "phone"], [1, "text", "mat-display-2"], [1, "acknowledgement", "mat-small"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.acknowledgement, "\n");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon], styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow-x: hidden;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 3rem;\n  flex-direction: row;\n  align-items: center;\n  padding: 0 1rem 0 0.25rem;\n}\n@media screen and (max-width: 640px) {\n  [_nghost-%COMP%]   .contact[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  padding: 0 0.75rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #7997a3;\n  background-color: #ffffff;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .icon.font[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-left: auto;\n}\n@media screen and (max-width: 640px) {\n  [_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding: 0 0 0 0.75rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .icon.font[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  font-size: 3rem;\n  line-height: 3rem;\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n[_nghost-%COMP%]   .acknowledgement[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .acknowledgement[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxpbmcvX2ljb24uc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxpbmcvX3NjcmVlbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsY0FBQTtFQUVBLGtCQUFBO0FBUEY7QUFTRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQVBKO0FBU0k7RUFSRjtJQVNJLHVCQUFBO0VBTko7QUFDRjtBQVFJO0VBQ0Usa0JBQUE7QUFOTjtBQVFNO0VBQ0UsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7QUFOUjtBQVFRO0VBQ0MsY0FBQTtFQUNBLHlCQUFBO0FBTlQ7QUFTTTtFQUNFLGVBQUE7QUFQUjtBQVdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVROO0FBWU07RUFQRjtJQVFJLGFBQUE7RUFUTjtBQUNGO0FBV007RUFDRSxzQkFBQTtBQVRSO0FBV007RUFDRSxlQUFBO0FBVFI7QUFhSTtFQzFERixXRDJEdUI7RUMxRHZCLFlEMER1QjtFQ3pEdkIsZUR5RHVCO0VDeER2QixpQkR3RHVCO0FBUnpCO0FBV0k7RUFDRSxZQUFBO0FBVE47QUFhRTtFQUNFLGFBQUE7QUFYSjtBRXZDSTtFRnNEQTtJQUNFLGFBQUE7RUFaSjtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ2ljb24nO1xuQHVzZSAnc2NyZWVuJztcblxuJGRlc2t0b3A6IDEyNDhweDtcbiR0YWJsZXQ6IDk2MHB4O1xuJG1vYmlsZTogNjQwcHg7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8vIG1hcmdpbi10b3A6IDcuNXJlbTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG4gIC5jb250YWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxcmVtIDAgMC4yNXJlbTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAuc29jaWFsIHtcbiAgICAgIHBhZGRpbmc6IDAgMC43NXJlbTtcblxuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICAgICAgICAuaWNvbjpob3ZlciB7XG4gICAgICAgICBjb2xvcjogIzc5OTdhMztcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuaWNvbi5mb250IHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5waG9uZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIC8vIHBhZGRpbmc6IDAuNzVyZW0gMCAwLjc1cmVtIDAuNzVyZW07XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnRleHQge1xuICAgICAgICBwYWRkaW5nOiAwIDAgMCAwLjc1cmVtO1xuICAgICAgfVxuICAgICAgLmljb24uZm9udCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICBAaW5jbHVkZSBpY29uLnNpemUoM3JlbSk7XG4gICAgfVxuXG4gICAgLmZpbGxlciB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuICB9XG5cbiAgLmFja25vd2xlZGdlbWVudCB7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgfVxuXG4gIEBpbmNsdWRlIHNjcmVlbi5icmVha3BvaW50KG1vYmlsZSkge1xuICAgIC5hY2tub3dsZWRnZW1lbnQge1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG4gIH1cbn1cbiIsIlxuQG1peGluIHNpemUoJHNpemUpIHtcbiAgd2lkdGg6ICRzaXplO1xuICBoZWlnaHQ6ICRzaXplO1xuICBmb250LXNpemU6ICRzaXplO1xuICBsaW5lLWhlaWdodDogJHNpemU7XG59XG4iLCIkYnJlYWtwb2ludC1tb2JpbGU6IDc2OHB4O1xuJGJyZWFrcG9pbnQtdGFibGV0OiA5NjBweDtcblxuJC1icmVha3BvaW50LXF1ZXJpZXM6IChcbiAgbW9iaWxlOiBcIihtYXgtd2lkdGg6ICN7JGJyZWFrcG9pbnQtbW9iaWxlfSlcIixcbiAgdGFibGV0OlxuICAgIFwiKG1pbi13aWR0aDogI3skYnJlYWtwb2ludC1tb2JpbGUgKyAxcHh9KSBhbmQgKG1heC13aWR0aDogI3skYnJlYWtwb2ludC10YWJsZXR9KVwiLFxuICBkZXNrdG9wOiBcIihtaW4td2lkdGg6ICN7YnJlYWtwb2ludC10YWJsZXQgKyAxcHh9KVwiLFxuKTtcblxuQG1peGluIGJyZWFrcG9pbnQoJHR5cGVzLi4uKSB7XG4gICRxdWVyaWVzOiAoKTtcbiAgQGVhY2ggJHR5cGUgaW4gJHR5cGVzIHtcbiAgICAkcXVlcnk6IG1hcC1nZXQoJC1icmVha3BvaW50LXF1ZXJpZXMsICR0eXBlKTtcbiAgICBAaWYgJHF1ZXJ5IHtcbiAgICAgICRxdWVyaWVzOiBhcHBlbmQoJHF1ZXJpZXMsICRxdWVyeSwgJHNlcGFyYXRvcjogY29tbWEpO1xuICAgIH1cbiAgfVxuXG4gIEBpZiBsZW5ndGgoJHF1ZXJpZXMpID4gMCB7XG4gICAgQG1lZGlhICN7JHF1ZXJpZXN9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 9514:
/*!**************************************************************************!*\
  !*** ./projects/scimaps/src/app/core/components/footer/footer.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterModule": () => (/* binding */ FooterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ 8685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);





class FooterModule {
}
FooterModule.ɵfac = function FooterModule_Factory(t) { return new (t || FooterModule)(); };
FooterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent] }); })();


/***/ }),

/***/ 5270:
/*!*****************************************************************************!*\
  !*** ./projects/scimaps/src/app/core/components/header/header.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 4835);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var _state_page_page_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/page/page.state */ 7251);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directives/breakpoint.directive */ 8355);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _shared_components_menu_icon_menu_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/menu-icon/menu-icon.component */ 1377);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact/contact.component */ 2659);















const _c0 = ["exhibitTrigger"];
const _c1 = ["contactTrigger"];
const _c2 = ["exploreTrigger"];
function HeaderComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_ng_container_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.sidenavOpenChange.emit(ctx_r3.sidenavOpen = !ctx_r3.sidenavOpen); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "sci-menu-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("open", ctx_r0.sidenavOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("alternateIcon", ctx_r0.sidenavOpen);
} }
const _c3 = function (a0) { return { "active": a0 }; };
function HeaderComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function HeaderComponent_ng_template_4_Template_button_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3); return _r5.closeMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " ABOUT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function HeaderComponent_ng_template_4_Template_div_mouseenter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.mouseEvents($event, 0); })("mouseleave", function HeaderComponent_ng_template_4_Template_div_mouseleave_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.mouseEvents($event, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "EXHIBIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-menu", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function HeaderComponent_ng_template_4_Template_div_mouseenter_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r21.mouseEvents($event, 0); })("mouseleave", function HeaderComponent_ng_template_4_Template_div_mouseleave_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r22.mouseEvents($event, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "MAPS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "MACROSCOPES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "BOOKS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "CALL FOR SUBMISSIONS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "VENUES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "HOSTING");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function HeaderComponent_ng_template_4_Template_div_mouseenter_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r23.mouseEvents($event, 2); })("mouseleave", function HeaderComponent_ng_template_4_Template_div_mouseleave_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r24.mouseEvents($event, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "EXPLORE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-menu", 11, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function HeaderComponent_ng_template_4_Template_div_mouseenter_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r25.mouseEvents($event, 2); })("mouseleave", function HeaderComponent_ng_template_4_Template_div_mouseleave_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r26.mouseEvents($event, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " LEARNING CENTER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function HeaderComponent_ng_template_4_Template_div_mouseenter_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r27.mouseEvents($event, 1); })("mouseleave", function HeaderComponent_ng_template_4_Template_div_mouseleave_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r28.mouseEvents($event, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](42, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, " CONTACT US ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "mat-menu", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function HeaderComponent_ng_template_4_Template_div_mouseenter_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r29.mouseEvents($event, 1); })("mouseleave", function HeaderComponent_ng_template_4_Template_div_mouseleave_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r30.mouseEvents($event, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "sci-contact", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function HeaderComponent_ng_template_4_Template_div_mouseenter_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](41); return _r15.closeMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](15);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](18);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](27);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](30);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](36);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](41);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 11, _r5.menuClosed) || _r5.menuOpen || _r7.isActive || _r8.isActive || _r9.isActive || _r10.isActive || _r11.isActive || _r12.isActive))("matMenuTriggerFor", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hasBackdrop", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 13, _r13.menuClosed) || _r13.menuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hasBackdrop", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](42, 15, _r15.menuClosed) || _r15.menuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hasBackdrop", false);
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
        this.sidenavOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.exhibitStream = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.contactStream = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.exploreStream = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    }
    ngOnInit() {
        this.exhibitStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((payload) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(payload);
        })).subscribe((payload) => {
            var _a;
            if (payload.type === 'mouseenter') {
                this.exhibitTrigger.openMenu();
            }
            else {
                (_a = this.exhibitTrigger) === null || _a === void 0 ? void 0 : _a.closeMenu();
            }
        });
        this.contactStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((payload) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(payload);
        })).subscribe((payload) => {
            if (payload.type === 'mouseenter') {
                this.contactTrigger.openMenu();
            }
            else {
                this.contactTrigger.closeMenu();
            }
        });
        this.exploreStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((payload) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(payload);
        })).subscribe((payload) => {
            if (payload.type === 'mouseenter') {
                this.exploreTrigger.openMenu();
            }
            else {
                this.exploreTrigger.closeMenu();
            }
        });
    }
    mouseEvents(e, index) {
        if (index === 0) {
            this.exhibitStream.next({ type: e.type, event: e, index });
        }
        else if (index === 1) {
            this.contactStream.next({ type: e.type, event: e, index });
        }
        else {
            this.exploreStream.next({ type: e.type, event: e, index });
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["sci-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.exhibitTrigger = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.contactTrigger = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.exploreTrigger = _t.first);
    } }, hostVars: 2, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { sidenavOpen: "sidenavOpen" }, outputs: { sidenavOpenChange: "sidenavOpenChange" }, decls: 6, vars: 2, consts: [[1, "logo"], ["src", "assets/logos/logo-places-spaces.svg", "routerLink", "/home", "alt", "logo-places-spaces.svg"], [1, "filler"], [4, "sciBreakpoint", "sciBreakpointElse"], ["desktopNav", ""], [1, "sidenav-toggle"], ["mat-flat-button", "", 3, "click"], [3, "alternateIcon"], ["mat-button", "", "routerLink", "/about", "routerLinkActive", "active", 1, "nav-item", "about", "mat-display-3", 3, "mouseenter"], ["mat-button", "", 1, "nav-item", "exhibit", "mat-display-3", 3, "ngClass", "matMenuTriggerFor", "mouseenter", "mouseleave"], ["exhibitTrigger", "matMenuTrigger"], ["xPosition", "before", 1, "sci-header-menu", 3, "hasBackdrop"], ["exhibit", "matMenu"], [3, "mouseenter", "mouseleave"], ["mat-button", "", "routerLink", "/maps", "routerLinkActive", "active", 1, "mat-display-3"], ["maps", "routerLinkActive"], ["mat-button", "", "routerLink", "/macroscopes", "routerLinkActive", "active", 1, "mat-display-3"], ["macroscopes", "routerLinkActive"], ["mat-button", "", "routerLink", "/books", "routerLinkActive", "active", 1, "mat-display-3"], ["books", "routerLinkActive"], ["mat-button", "", "routerLink", "/call-for-macroscopes", "routerLinkActive", "active", 1, "mat-display-3"], ["cfm", "routerLinkActive"], ["mat-button", "", "routerLink", "/venues", "routerLinkActive", "active", 1, "mat-display-3"], ["venues", "routerLinkActive"], ["mat-button", "", "routerLink", "/hosting", "routerLinkActive", "active", 1, "mat-display-3"], ["hosting", "routerLinkActive"], ["mat-button", "", 1, "nav-item", "explore", "mat-display-3", 3, "matMenuTriggerFor", "mouseenter", "mouseleave"], ["exploreTrigger", "matMenuTrigger"], ["explore", "matMenu"], ["mat-button", "", "routerLink", "/learning-center", "routerLinkActive", "active", 1, "mat-display-3"], ["mat-button", "", 1, "nav-item", "contact", "mat-display-3", 3, "matMenuTriggerFor", "mouseenter", "mouseleave"], ["contactTrigger", "matMenuTrigger"], [1, "sci-header-menu", "no-padding", 3, "hasBackdrop"], ["contact", "matMenu"], [1, "contact"], [1, "search", 3, "mouseenter"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, HeaderComponent_ng_container_3_Template, 4, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HeaderComponent_ng_template_4_Template, 49, 19, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sciBreakpoint", "tablet-")("sciBreakpointElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_2__.BreakpointDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _shared_components_menu_icon_menu_icon_component__WEBPACK_IMPORTED_MODULE_3__.MenuIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe], styles: [".scrolled[_nghost-%COMP%] {\n  box-shadow: 0px 5px 10px 0px #e0e0e0cc;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 4.5rem;\n  align-items: center;\n  position: sticky;\n  top: 0;\n  z-index: 3;\n}\n\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 12px 0;\n  margin-left: 1rem;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 3rem;\n  outline: none;\n}\n\n[_nghost-%COMP%]   .sidenav-toggle[_ngcontent-%COMP%], [_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%], [_nghost-%COMP%]   .search[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0 1.5rem;\n}\n\n[_nghost-%COMP%]   .nav-item.exhibit[_ngcontent-%COMP%], [_nghost-%COMP%]   .nav-item.contact[_ngcontent-%COMP%], [_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n[_nghost-%COMP%]   .sidenav-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n[_nghost-%COMP%]   .sidenav-toggle.open[_ngcontent-%COMP%] {\n  border-left-width: 1px;\n  border-left-style: solid;\n}\n\n[_nghost-%COMP%]   .sidenav-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: unset;\n  padding: 0;\n}\n\n[_nghost-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n  .sci-header-menu button {\n  width: 100%;\n  height: 3rem;\n  text-align: start;\n}\n\n  .sci-header-menu.no-padding > .mat-menu-content {\n  padding: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHNDQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQURGOztBQUVFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ047O0FBR0U7OztFQUdFLFlBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFLSTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUFITjs7QUFNSTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQUpOOztBQVFFO0VBQ0UsWUFBQTtBQU5KOztBQWNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVhKOztBQWNFO0VBQ0UsY0FBQTtBQVpKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3QoLnNjcm9sbGVkKSB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAwcHggI2UwZTBlMGNjO1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDM7XG4gIC5sb2dvIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweCAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAzcmVtOyAgLy8gNDhweFxuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuc2lkZW5hdi10b2dnbGUsXG4gIC5uYXYtaXRlbSxcbiAgLnNlYXJjaCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICB9XG5cbiAgLm5hdi1pdGVtLmV4aGliaXQsIC5uYXYtaXRlbS5jb250YWN0LCAubmF2LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5zaWRlbmF2LXRvZ2dsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJi5vcGVuIHtcbiAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XG4gICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIG1pbi13aWR0aDogdW5zZXQ7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5maWxsZXIge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxufVxuXG5cblxuLy8gQW5ub3lpbmcgYW5ndWxhciBvdmVybGF5cy4uLlxuOjpuZy1kZWVwIC5zY2ktaGVhZGVyLW1lbnUge1xuICBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgfVxuXG4gICYubm8tcGFkZGluZyA+IC5tYXQtbWVudS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiB1bnNldDtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });
(0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_state_page_page_state__WEBPACK_IMPORTED_MODULE_1__.PageState.drawer)
], HeaderComponent.prototype, "drawer$", void 0);


/***/ }),

/***/ 7619:
/*!**************************************************************************!*\
  !*** ./projects/scimaps/src/app/core/components/header/header.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderModule": () => (/* binding */ HeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 3687);
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact/contact.module */ 3039);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ 5270);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);









class HeaderModule {
}
HeaderModule.ɵfac = function HeaderModule_Factory(t) { return new (t || HeaderModule)(); };
HeaderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _contact_contact_module__WEBPACK_IMPORTED_MODULE_1__.ContactModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _contact_contact_module__WEBPACK_IMPORTED_MODULE_1__.ContactModule], exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent] }); })();


/***/ }),

/***/ 8106:
/*!*****************************************************************************************************!*\
  !*** ./projects/scimaps/src/app/core/components/mobile-header-menu/mobile-header-menu.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileHeaderMenuComponent": () => (/* binding */ MobileHeaderMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contact/contact.component */ 2659);





class MobileHeaderMenuComponent {
    constructor() {
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /** HTML class */
        this.clsName = 'sci-mobile-header-menu mat-dispay-3';
    }
}
MobileHeaderMenuComponent.ɵfac = function MobileHeaderMenuComponent_Factory(t) { return new (t || MobileHeaderMenuComponent)(); };
MobileHeaderMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MobileHeaderMenuComponent, selectors: [["sci-mobile-header-menu"]], hostVars: 2, hostBindings: function MobileHeaderMenuComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.clsName);
    } }, outputs: { sidenavClose: "sidenavClose" }, decls: 20, vars: 8, consts: [[1, "top-border-overlay"], [1, "search"], ["mat-button", "", "routerLink", "/about", 1, "link", "mat-display-3", 3, "routerLinkActive", "click"], ["mat-button", "", "routerLink", "/maps", 1, "link", "mat-display-3", 3, "routerLinkActive", "click"], ["mat-button", "", "routerLink", "/macroscopes", 1, "link", "mat-display-3", 3, "routerLinkActive", "click"], ["mat-button", "", "routerLink", "/books", 1, "link", "mat-display-3", 3, "routerLinkActive", "click"], ["mat-button", "", "routerLink", "/call-for-macroscopes", 1, "link", "mat-display-3", 3, "routerLinkActive", "click"], ["mat-button", "", "routerLink", "/venues", 1, "link", "mat-display-3", 3, "routerLinkActive", "click"], ["mat-button", "", "routerLink", "/hosting", 1, "link", "mat-display-3", 3, "routerLinkActive", "click"], ["mat-button", "", "routerLink", "/learning-center", 1, "link", "mat-display-3", 3, "routerLinkActive", "click"], [1, "filler"]], template: function MobileHeaderMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MobileHeaderMenuComponent_Template_button_click_2_listener() { return ctx.sidenavClose.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MobileHeaderMenuComponent_Template_button_click_4_listener() { return ctx.sidenavClose.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "MAPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MobileHeaderMenuComponent_Template_button_click_6_listener() { return ctx.sidenavClose.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "MACROSCOPES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MobileHeaderMenuComponent_Template_button_click_8_listener() { return ctx.sidenavClose.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "BOOKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MobileHeaderMenuComponent_Template_button_click_10_listener() { return ctx.sidenavClose.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "CALL FOR SUBMISSIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MobileHeaderMenuComponent_Template_button_click_12_listener() { return ctx.sidenavClose.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "VENUES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MobileHeaderMenuComponent_Template_button_click_14_listener() { return ctx.sidenavClose.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "HOSTING");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MobileHeaderMenuComponent_Template_button_click_16_listener() { return ctx.sidenavClose.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "LEARNING CENTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "sci-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow-y: auto;\n  border-top-width: 1px;\n  border-top-style: solid;\n}\n[_nghost-%COMP%]   .search[_ngcontent-%COMP%], [_nghost-%COMP%]   .link[_ngcontent-%COMP%] {\n  height: 3rem;\n}\n[_nghost-%COMP%]   .search[_ngcontent-%COMP%], [_nghost-%COMP%]   .link[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[_nghost-%COMP%]   .top-border-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 5.25rem;\n  height: 0.25rem;\n  top: -0.125rem;\n  right: 0;\n}\n[_nghost-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZS1oZWFkZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtBQUNKO0FBRUU7RUFDRSxxQkFBQTtBQUFKO0FBR0U7RUFDRSxnQkFBQTtBQURKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7QUFGSjtBQUtFO0VBQ0UsWUFBQTtBQUhKIiwiZmlsZSI6Im1vYmlsZS1oZWFkZXItbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuXG4gIC5zZWFyY2gsIC5saW5rIHtcbiAgICBoZWlnaHQ6IDNyZW07XG4gIH1cblxuICAuc2VhcmNoLCAubGluazpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cblxuICAubGluayB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC50b3AtYm9yZGVyLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNS4yNXJlbTtcbiAgICBoZWlnaHQ6IDAuMjVyZW07XG4gICAgdG9wOiAtMC4xMjVyZW07XG4gICAgcmlnaHQ6IDA7XG4gIH1cblxuICAuZmlsbGVyIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 7299:
/*!**************************************************************************************************!*\
  !*** ./projects/scimaps/src/app/core/components/mobile-header-menu/mobile-header-menu.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileHeaderMenuModule": () => (/* binding */ MobileHeaderMenuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contact/contact.module */ 3039);
/* harmony import */ var _mobile_header_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-header-menu.component */ 8106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class MobileHeaderMenuModule {
}
MobileHeaderMenuModule.ɵfac = function MobileHeaderMenuModule_Factory(t) { return new (t || MobileHeaderMenuModule)(); };
MobileHeaderMenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MobileHeaderMenuModule });
MobileHeaderMenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
            _contact_contact_module__WEBPACK_IMPORTED_MODULE_0__.ContactModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MobileHeaderMenuModule, { declarations: [_mobile_header_menu_component__WEBPACK_IMPORTED_MODULE_1__.MobileHeaderMenuComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _contact_contact_module__WEBPACK_IMPORTED_MODULE_0__.ContactModule], exports: [_mobile_header_menu_component__WEBPACK_IMPORTED_MODULE_1__.MobileHeaderMenuComponent] }); })();


/***/ }),

/***/ 793:
/*!******************************************************!*\
  !*** ./projects/scimaps/src/app/core/core.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-google-analytics */ 4462);
/* harmony import */ var _components_contact_contact_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/contact/contact.module */ 3039);
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.module */ 9514);
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.module */ 7619);
/* harmony import */ var _components_mobile_header_menu_mobile_header_menu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mobile-header-menu/mobile-header-menu.module */ 7299);
/* harmony import */ var _state_state_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/state.module */ 2777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








class CoreModule {
    constructor(other) {
        if (other) {
            throw new Error('CoreModule should only be imported once in the AppModule!');
        }
    }
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](CoreModule, 12)); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_6__.NgxGoogleAnalyticsModule.forRoot('UA-54599506-1'),
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_6__.NgxGoogleAnalyticsRouterModule,
            _state_state_module__WEBPACK_IMPORTED_MODULE_4__.StateModule,
            _components_contact_contact_module__WEBPACK_IMPORTED_MODULE_0__.ContactModule,
            _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule,
            _components_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
            _components_mobile_header_menu_mobile_header_menu_module__WEBPACK_IMPORTED_MODULE_3__.MobileHeaderMenuModule,
        ], _components_contact_contact_module__WEBPACK_IMPORTED_MODULE_0__.ContactModule,
        _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule,
        _components_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
        _components_mobile_header_menu_mobile_header_menu_module__WEBPACK_IMPORTED_MODULE_3__.MobileHeaderMenuModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CoreModule, { imports: [ngx_google_analytics__WEBPACK_IMPORTED_MODULE_6__.NgxGoogleAnalyticsModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_6__.NgxGoogleAnalyticsRouterModule,
        _state_state_module__WEBPACK_IMPORTED_MODULE_4__.StateModule,
        _components_contact_contact_module__WEBPACK_IMPORTED_MODULE_0__.ContactModule,
        _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule,
        _components_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
        _components_mobile_header_menu_mobile_header_menu_module__WEBPACK_IMPORTED_MODULE_3__.MobileHeaderMenuModule], exports: [_components_contact_contact_module__WEBPACK_IMPORTED_MODULE_0__.ContactModule,
        _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule,
        _components_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
        _components_mobile_header_menu_mobile_header_menu_module__WEBPACK_IMPORTED_MODULE_3__.MobileHeaderMenuModule] }); })();


/***/ }),

/***/ 7251:
/*!****************************************************************!*\
  !*** ./projects/scimaps/src/app/core/state/page/page.state.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageState": () => (/* binding */ PageState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 4835);
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/app.actions */ 2830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let PageState = class PageState {
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
PageState.ɵfac = function PageState_Factory(t) { return new (t || PageState)(); };
PageState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PageState, factory: PageState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_1__.SetAppState)
], PageState.prototype, "setAppState", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], PageState, "getAppState", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], PageState, "drawer", null);
PageState = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
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



/***/ }),

/***/ 1391:
/*!********************************************************************!*\
  !*** ./projects/scimaps/src/app/core/state/router/router.state.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterState": () => (/* binding */ RouterState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/router-plugin */ 811);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 4835);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);









let RouterState = class RouterState {
    constructor(actions$, router) {
        this.actions$ = actions$;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.navigationStart$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((ev) => ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationStart), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(ev => ev.url), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$));
        this.navigationEnd$ = this.actions$.pipe((0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.ofActionCompleted)(_ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_0__.RouterNavigation), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(ev => ev.action.event.url), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
RouterState.ɵfac = function RouterState_Factory(t) { return new (t || RouterState)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
RouterState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: RouterState, factory: RouterState.ɵfac });
RouterState = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.State)({
        name: 'routerFacade'
    })
], RouterState);



/***/ }),

/***/ 2777:
/*!*************************************************************!*\
  !*** ./projects/scimaps/src/app/core/state/state.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateModule": () => (/* binding */ StateModule)
/* harmony export */ });
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/logger-plugin */ 3142);
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/router-plugin */ 811);
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/storage-plugin */ 6619);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 4835);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ 4282);
/* harmony import */ var _router_router_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router/router.state */ 1391);
/* harmony import */ var _page_page_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/page.state */ 7251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);












const ROOT_STATES = [
    _router_router_state__WEBPACK_IMPORTED_MODULE_5__.RouterState,
    _page_page_state__WEBPACK_IMPORTED_MODULE_6__.PageState
];
class StateModule {
}
StateModule.ɵfac = function StateModule_Factory(t) { return new (t || StateModule)(); };
StateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: StateModule });
StateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            // Note: Order of state modules is important!
            // The following described order MUST be maintained
            // 1. NgxsDataPluginModule - Must be before NgxsModule due to injection order bug
            // 2. NgxsModule
            // 3. NgxsStoragePluginModule
            // 4+. Other plugins
            // LAST. NgxsLoggerPluginModule
            _ngxs_store__WEBPACK_IMPORTED_MODULE_3__.NgxsModule.forRoot(ROOT_STATES, {
                developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production
            }),
            _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_2__.NgxsStoragePluginModule.forRoot({
                key: []
            }),
            _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_1__.NgxsRouterPluginModule.forRoot(),
            _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_0__.NgxsLoggerPluginModule.forRoot({
                disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](StateModule, { imports: [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["ɵk"], _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_2__.NgxsStoragePluginModule, _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_1__.NgxsRouterPluginModule, _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_0__.NgxsLoggerPluginModule] }); })();


/***/ }),

/***/ 8446:
/*!************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/books/books-resolver.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooksResolverService": () => (/* binding */ BooksResolverService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2720);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1486);
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5816);
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/utils */ 9298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);






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
            slug: (0,_shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__.toSlug)(item.title),
            images: item.bookImages
        };
    }
    toBookUI(book) {
        book.images = this.getImageSource(book);
        if (book.pdfLink) {
            if (!(0,_constants_utils__WEBPACK_IMPORTED_MODULE_1__.isHttp)(book.pdfLink)) {
                book.pdfLink = this.getSourceLink(book);
            }
        }
        return book;
    }
    resolve() {
        const books$ = this.contentService.getIndex('books').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)());
        const person$ = books$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((items) => {
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
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)((slugs) => {
            const forkJoins = slugs.map((slug) => {
                // {'s1': {}}, {'s2': {}}
                return this.contentService.getContent(`person/${slug}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
                    return {
                        [slug]: result
                    };
                }));
            });
            // [ {'s1': {}}, {'s2': {}} ]
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)(forkJoins);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((array) => {
            const result = {};
            array.forEach(element => {
                Object.assign(result, element);
            });
            // {'s1': {}, 's2': {}}
            return result;
        }));
        // Combine
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([person$, books$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((result) => {
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
BooksResolverService.ɵfac = function BooksResolverService_Factory(t) { return new (t || BooksResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__.ContentService)); };
BooksResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: BooksResolverService, factory: BooksResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6097:
/*!**********************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/books/books-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooksRoutingModule": () => (/* binding */ BooksRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _books_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./books.component */ 2914);
/* harmony import */ var _books_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books-resolver.service */ 8446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [{
        path: '',
        component: _books_component__WEBPACK_IMPORTED_MODULE_0__.BooksComponent,
        resolve: {
            books: _books_resolver_service__WEBPACK_IMPORTED_MODULE_1__.BooksResolverService
        }
    }];
class BooksRoutingModule {
}
BooksRoutingModule.ɵfac = function BooksRoutingModule_Factory(t) { return new (t || BooksRoutingModule)(); };
BooksRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BooksRoutingModule });
BooksRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BooksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 2914:
/*!*****************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/books/books.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooksComponent": () => (/* binding */ BooksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_book_overview_book_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/book-overview/book-overview.component */ 607);




function BooksComponent_sci_book_overview_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "sci-book-overview", 2);
} if (rf & 2) {
    const book_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("book", book_r1);
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
BooksComponent.ɵfac = function BooksComponent_Factory(t) { return new (t || BooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
BooksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BooksComponent, selectors: [["sci-books"]], decls: 3, vars: 1, consts: [[1, "header"], ["class", "book", 3, "book", 4, "ngFor", "ngForOf"], [1, "book", 3, "book"]], template: function BooksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BooksComponent_sci_book_overview_2_Template, 1, 1, "sci-book-overview", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.books);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_components_book_overview_book_overview_component__WEBPACK_IMPORTED_MODULE_0__.BookOverviewComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .book[_ngcontent-%COMP%] {\n  margin-bottom: 6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtBQUNKIiwiZmlsZSI6ImJvb2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICAuYm9vayB7XG4gICAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 8633:
/*!**************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/books/books.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooksModule": () => (/* binding */ BooksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_book_overview_book_overview_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/book-overview/book-overview.module */ 977);
/* harmony import */ var _books_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books-routing.module */ 6097);
/* harmony import */ var _books_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books.component */ 2914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class BooksModule {
}
BooksModule.ɵfac = function BooksModule_Factory(t) { return new (t || BooksModule)(); };
BooksModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BooksModule });
BooksModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _books_routing_module__WEBPACK_IMPORTED_MODULE_1__.BooksRoutingModule,
            _shared_components_book_overview_book_overview_module__WEBPACK_IMPORTED_MODULE_0__.BookOverviewModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BooksModule, { declarations: [_books_component__WEBPACK_IMPORTED_MODULE_2__.BooksComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _books_routing_module__WEBPACK_IMPORTED_MODULE_1__.BooksRoutingModule,
        _shared_components_book_overview_book_overview_module__WEBPACK_IMPORTED_MODULE_0__.BookOverviewModule] }); })();


/***/ }),

/***/ 607:
/*!*********************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/book-overview/book-overview.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookOverviewComponent": () => (/* binding */ BookOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../carousel/carousel.component */ 3924);
/* harmony import */ var _carousel_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carousel/item.component */ 2948);
/* harmony import */ var _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/breakpoint.directive */ 8355);






function BookOverviewComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookOverviewComponent_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.fullContentVisible = !ctx_r4.fullContentVisible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.fullContentVisible ? "Show less" : "Read more...", " ");
} }
function BookOverviewComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " BOOK EXCERPT (PDF) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r1.book.pdfLink, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function BookOverviewComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " BUY ON AMAZON ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r2.book.amazonLink, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function BookOverviewComponent_sci_carousel_item_17_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r7 = ctx_r11.index;
    const image_r6 = ctx_r11.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("alt", "Image #", i_r7, " for book ", ctx_r8.book.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", image_r6.sm, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function BookOverviewComponent_sci_carousel_item_17_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r7 = ctx_r12.index;
    const image_r6 = ctx_r12.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("alt", "Image #", i_r7, " for book ", ctx_r10.book.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", image_r6.lg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function BookOverviewComponent_sci_carousel_item_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "sci-carousel-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BookOverviewComponent_sci_carousel_item_17_ng_container_2_Template, 2, 3, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BookOverviewComponent_sci_carousel_item_17_ng_template_3_Template, 1, 3, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("sciBreakpoint", "mobile-")("sciBreakpointElse", _r9);
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
BookOverviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BookOverviewComponent, selectors: [["sci-book-overview"]], hostVars: 2, hostBindings: function BookOverviewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { book: "book", maxContentLength: "maxContentLength" }, decls: 18, vars: 9, consts: [[1, "text-column"], [1, "title"], [1, "author"], [1, "publisher"], ["href", "http://mitpress.mit.edu/", "rel", "noreferrer noopener", "target", "_blank", 1, "link"], ["markdown", "", 1, "markdown", "full", 3, "data"], ["markdown", "", 1, "markdown", "partial", 3, "data"], ["class", "show-more", 3, "click", 4, "ngIf"], [1, "buttons"], ["class", "button", "target", "_blank", "rel", "noreferrer noopener", 3, "href", 4, "ngIf"], [1, "carousel-column"], [1, "carousel"], [4, "ngFor", "ngForOf"], [1, "show-more", 3, "click"], ["target", "_blank", "rel", "noreferrer noopener", 1, "button", 3, "href"], [1, "carousel-item"], [4, "sciBreakpoint", "sciBreakpointElse"], ["desktop", ""], [1, "carousel-image", 3, "src", "alt"]], template: function BookOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Published by: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, BookOverviewComponent_div_11_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, BookOverviewComponent_a_13_Template, 2, 1, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, BookOverviewComponent_a_14_Template, 2, 1, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "sci-carousel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, BookOverviewComponent_sci_carousel_item_17_Template, 5, 2, "sci-carousel-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.book.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Author: ", ctx.book.author, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.book.publisher, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.fullContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.partialContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasLongContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.book.pdfLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.book.amazonLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.book.images);
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_0__.CarouselComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _carousel_item_component__WEBPACK_IMPORTED_MODULE_1__.CarouselItemComponent, _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_2__.BreakpointDirective], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%], [_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n  width: 50%;\n  max-width: 600px;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%] {\n  padding-right: 3rem;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .publisher[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .markdown.partial[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%] {\n  display: none;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 1rem;\n}\n@media screen and (max-width: 640px) {\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin: 1rem 1rem 0 0;\n  padding: 0.5rem;\n  border: 1px solid;\n  text-decoration: none;\n  white-space: nowrap;\n  text-align: center;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #8DC63F;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: cover;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%], [_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .markdown.full[_ngcontent-%COMP%] {\n    display: none;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .markdown.partial[_ngcontent-%COMP%] {\n    display: initial;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%] {\n    display: initial;\n  }\n  [_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBREY7QUFHRTs7RUFFRSxVQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0UsbUJBQUE7QUFGSjtBQUlJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBRk47QUFLSTtFQUNFLG1CQUFBO0FBSE47QUFNSTtFQUNFLGFBQUE7QUFKTjtBQU9JO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFMTjtBQVFJO0VBQ0UsYUFBQTtFQUlBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVE47QUFJTTtFQUZGO0lBR0ksc0JBQUE7RUFETjtBQUNGO0FBS007RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhSO0FBTUk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFKTjtBQU1NO0VBQ0UsMEJBQUE7QUFKUjtBQVNFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBUEo7QUFRSTtFQUNFLFdBQUE7QUFOTjtBQVFNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBTlI7QUFRUTtFQUNFLFdBQUE7RUFFQSxpQkFBQTtBQVBWO0FBYUU7RUEvRUY7SUFnRkksOEJBQUE7RUFWRjtFQVlFOztJQUVFLFdBQUE7RUFWSjtFQWFFO0lBQ0UsZ0JBQUE7RUFYSjtFQWFJO0lBQ0UsYUFBQTtFQVhOO0VBY0k7SUFDRSxnQkFBQTtFQVpOO0VBZUk7SUFDRSxnQkFBQTtFQWJOO0VBaUJFO0lBQ0UsbUJBQUE7RUFmSjtBQUNGIiwiZmlsZSI6ImJvb2stb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsaW5nL2JyZWFrcG9pbnRzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcblxuICAudGV4dC1jb2x1bW4sXG4gIC5jYXJvdXNlbC1jb2x1bW4ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgfVxuXG4gIC50ZXh0LWNvbHVtbiB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcblxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIH1cblxuICAgIC5wdWJsaXNoZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbiAgICAubWFya2Rvd24ucGFydGlhbCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5zaG93LW1vcmUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAuYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAxcmVtIDFyZW0gMCAwO1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLmxpbmsge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICM4REM2M0Y7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2Fyb3VzZWwtY29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIC5jYXJvdXNlbCB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cbiAgICAudGV4dC1jb2x1bW4sXG4gICAgLmNhcm91c2VsLWNvbHVtbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAudGV4dC1jb2x1bW4ge1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcblxuICAgICAgLm1hcmtkb3duLmZ1bGwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAubWFya2Rvd24ucGFydGlhbCB7XG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgICB9XG5cbiAgICAgIC5zaG93LW1vcmUge1xuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJvdXNlbC1jb2x1bW4ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 977:
/*!******************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/book-overview/book-overview.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookOverviewModule": () => (/* binding */ BookOverviewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared.module */ 3687);
/* harmony import */ var _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carousel/carousel.module */ 3708);
/* harmony import */ var _book_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-overview.component */ 607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






class BookOverviewModule {
}
BookOverviewModule.ɵfac = function BookOverviewModule_Factory(t) { return new (t || BookOverviewModule)(); };
BookOverviewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BookOverviewModule });
BookOverviewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownModule, _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_1__.CarouselModule, _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BookOverviewModule, { declarations: [_book_overview_component__WEBPACK_IMPORTED_MODULE_2__.BookOverviewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownModule, _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_1__.CarouselModule, _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule], exports: [_book_overview_component__WEBPACK_IMPORTED_MODULE_2__.BookOverviewComponent] }); })();


/***/ }),

/***/ 9508:
/*!*******************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/card-gallery/card-gallery.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardGalleryComponent": () => (/* binding */ CardGalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 2529);





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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardGalleryComponent_mat_card_2_Template_mat_card_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const card_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.handleClick(card_r3); });
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
        this.cardClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    getImageSource(slug) {
        return `assets/${this.directory}/${slug}/image.png`;
    }
    handleClick(card) {
        this.cardClicked.emit();
    }
}
CardGalleryComponent.ɵfac = function CardGalleryComponent_Factory(t) { return new (t || CardGalleryComponent)(); };
CardGalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardGalleryComponent, selectors: [["sci-card-gallery"]], hostVars: 2, hostBindings: function CardGalleryComponent_HostBindings(rf, ctx) { if (rf & 2) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], styles: ["[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .desktop-card[_ngcontent-%COMP%] {\n  width: 18rem;\n  margin: 0.5rem;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .desktop-card[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .mobile-card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1rem;\n  padding: 0rem;\n  height: 4rem;\n}\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .mobile-card[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .mobile-card[_ngcontent-%COMP%]   .mobile-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 0.5rem;\n}\n[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .mobile-card[_ngcontent-%COMP%]   .mobile-content[_ngcontent-%COMP%]   .mobile-header[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: left;\n  white-space: nowrap;\n  padding: 1rem;\n  line-height: 1.75rem;\n  height: 100%;\n}\n[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .mobile-card[_ngcontent-%COMP%]   .mobile-content[_ngcontent-%COMP%]   .mobile-image-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 5rem;\n}\n[_nghost-%COMP%]   .card-gallery[_ngcontent-%COMP%]   .mobile-card[_ngcontent-%COMP%]   .mobile-content[_ngcontent-%COMP%]   .mobile-image-container[_ngcontent-%COMP%]   .mobile-image[_ngcontent-%COMP%] {\n  object-fit: cover;\n  height: 100%;\n  width: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBRko7QUFJSTtFQUNFLGVBQUE7QUFGTjtBQUlNO0VBQ0UsZUFBQTtBQUZSO0FBTUk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUpOO0FBTU07RUFKRjtJQUtJLGFBQUE7RUFITjtBQUNGO0FBTUk7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUpOO0FBTU07RUFORjtJQU9JLGFBQUE7RUFITjtBQUNGO0FBS007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBSFI7QUFLUTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFIVjtBQU1RO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFKVjtBQU1VO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUpaIiwiZmlsZSI6ImNhcmQtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtb2JpbGU6IDY0MHB4O1xuXG46aG9zdCB7XG4gIC5jYXJkLWdhbGxlcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xuXG4gICAgLmNhcmQge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRlc2t0b3AtY2FyZCB7XG4gICAgICB3aWR0aDogMThyZW07XG4gICAgICBtYXJnaW46IDAuNXJlbTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9iaWxlLWNhcmQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgcGFkZGluZzogMHJlbTtcbiAgICAgIGhlaWdodDogNHJlbTtcblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLm1vYmlsZS1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcblxuICAgICAgICAubW9iaWxlLWhlYWRlciB7XG4gICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZS1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogNXJlbTtcblxuICAgICAgICAgIC5tb2JpbGUtaW1hZ2Uge1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2743:
/*!****************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/card-gallery/card-gallery.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardGalleryModule": () => (/* binding */ CardGalleryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _card_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-gallery.component */ 9508);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);





class CardGalleryModule {
}
CardGalleryModule.ɵfac = function CardGalleryModule_Factory(t) { return new (t || CardGalleryModule)(); };
CardGalleryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CardGalleryModule });
CardGalleryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CardGalleryModule, { declarations: [_card_gallery_component__WEBPACK_IMPORTED_MODULE_0__.CardGalleryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule], exports: [_card_gallery_component__WEBPACK_IMPORTED_MODULE_0__.CardGalleryComponent] }); })();


/***/ }),

/***/ 3924:
/*!***********************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/carousel/carousel.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselComponent": () => (/* binding */ CarouselComponent)
/* harmony export */ });
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ 2320);
/* harmony import */ var _item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.component */ 2948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




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
CarouselComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["sci-carousel"]], contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _item_component__WEBPACK_IMPORTED_MODULE_0__.CarouselItemComponent, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slides = _t);
    } }, viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__.SwiperDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.swiper = _t.first);
    } }, hostVars: 2, hostBindings: function CarouselComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.clsName);
    } }, ngContentSelectors: _c1, decls: 6, vars: 1, consts: [[1, "swiper", "swiper-container", 3, "swiper"], [1, "swiper-wrapper"], [1, "swiper-pagination"], [1, "swiper-button-prev"], [1, "swiper-button-next"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("swiper", ctx.config);
    } }, directives: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__.SwiperDirective], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n[_nghost-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%], [_nghost-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n  top: unset;\n  bottom: 0.75rem;\n}\n[_nghost-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .swiper-pagination[_ngcontent-%COMP%] {\n  bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBRUk7RUFFRSxtQkFBQTtBQUROO0FBSUk7O0VBRUUsVUFBQTtFQUNBLGVBQUE7QUFGTjtBQUtJO0VBQ0UsWUFBQTtBQUhOIiwiZmlsZSI6ImNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgLnN3aXBlci13cmFwcGVyIHtcblxuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICB9XG5cbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2LFxuICAgIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgICAgdG9wOiB1bnNldDtcbiAgICAgIGJvdHRvbTogMC43NXJlbTtcbiAgICB9XG5cbiAgICAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgICAgYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 3708:
/*!********************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/carousel/carousel.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselModule": () => (/* binding */ CarouselModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ 2320);
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.component */ 3924);
/* harmony import */ var _item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.component */ 2948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





class CarouselModule {
}
CarouselModule.ɵfac = function CarouselModule_Factory(t) { return new (t || CarouselModule)(); };
CarouselModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CarouselModule });
CarouselModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__.SwiperModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CarouselModule, { declarations: [_carousel_component__WEBPACK_IMPORTED_MODULE_0__.CarouselComponent, _item_component__WEBPACK_IMPORTED_MODULE_1__.CarouselItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__.SwiperModule], exports: [_carousel_component__WEBPACK_IMPORTED_MODULE_0__.CarouselComponent, _item_component__WEBPACK_IMPORTED_MODULE_1__.CarouselItemComponent] }); })();


/***/ }),

/***/ 2948:
/*!*******************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/carousel/item.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselItemComponent": () => (/* binding */ CarouselItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

const _c0 = ["*"];
class CarouselItemComponent {
    constructor() {
        this.classes = ['sci-carousel-item', 'swiper-slide'];
    }
}
CarouselItemComponent.ɵfac = function CarouselItemComponent_Factory(t) { return new (t || CarouselItemComponent)(); };
CarouselItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselItemComponent, selectors: [["sci-carousel-item"]], hostVars: 2, hostBindings: function CarouselItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
    } }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CarouselItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[_nghost-%COMP%] { display: block; overflow: hidden; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsY0FBYyxFQUFFLGdCQUFnQixFQUFFIiwiZmlsZSI6Iml0ZW0uY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3c6IGhpZGRlbjsgfSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 950:
/*!*******************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/drawer/drawer.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawerComponent": () => (/* binding */ DrawerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

const _c0 = [[["", "drawer", ""]]];
const _c1 = ["[drawer]"];
class DrawerComponent {
}
DrawerComponent.ɵfac = function DrawerComponent_Factory(t) { return new (t || DrawerComponent)(); };
DrawerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawerComponent, selectors: [["sci-drawer"]], ngContentSelectors: _c1, decls: 2, vars: 0, consts: [[1, "main"]], template: function DrawerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  top: 72px;\n  left: 0;\n  z-index: 2;\n  background-color: white;\n  width: 100%;\n  height: calc(100% - 72px);\n  overflow-y: scroll;\n}\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 1rem;\n  max-width: 80rem;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 1rem;\n}\n@media screen and (min-width: 1248px) {\n  [_nghost-%COMP%]   .main[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLGVBQUE7RUFDQSxTQUpFO0VBS0YsT0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSko7QUFNSTtFQUVJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQU1RO0VBUko7SUFTUSxnQkFBQTtFQUhWO0FBQ0YiLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGluZy9icmVha3BvaW50cyc7XG4kYnJlYWtwb2ludDogNzY4cHg7XG5cbiR0b3A6IDcycHg7XG5cbjpob3N0IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAkdG9wO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JHRvcH0pO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxuICAgIC5tYWluIHtcbiAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkZGVza3RvcCkge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 626:
/*!****************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/drawer/drawer.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawerModule": () => (/* binding */ DrawerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _drawer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawer.component */ 950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class DrawerModule {
}
DrawerModule.ɵfac = function DrawerModule_Factory(t) { return new (t || DrawerModule)(); };
DrawerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DrawerModule });
DrawerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DrawerModule, { declarations: [_drawer_component__WEBPACK_IMPORTED_MODULE_0__.DrawerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_drawer_component__WEBPACK_IMPORTED_MODULE_0__.DrawerComponent] }); })();


/***/ }),

/***/ 6949:
/*!***************************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/makers-subdrawer/makers-subdrawer.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakersSubdrawerComponent": () => (/* binding */ MakersSubdrawerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ 8379);





function MakersSubdrawerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const maker_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", maker_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](maker_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](maker_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", maker_r1.body);
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
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
}
MakersSubdrawerComponent.ɵfac = function MakersSubdrawerComponent_Factory(t) { return new (t || MakersSubdrawerComponent)(); };
MakersSubdrawerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MakersSubdrawerComponent, selectors: [["sci-makers-subdrawer"]], hostVars: 2, hostBindings: function MakersSubdrawerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { title: "title", makers: "makers" }, outputs: { closed: "closed" }, decls: 10, vars: 2, consts: [[1, "details-container"], [1, "back-button", 3, "click"], [1, "back-icon"], [1, "makers-title"], [1, "maker-container"], ["class", "maker-info", 4, "ngFor", "ngForOf"], [1, "maker-info"], ["alt", "maker image", 1, "thumbnail", 3, "src"], [1, "info"], [1, "name"], [1, "job"], [1, "bio"], ["markdown", "", 3, "data"]], template: function MakersSubdrawerComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MakersSubdrawerComponent_div_9_Template, 9, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Makers: ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.makers);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_markdown__WEBPACK_IMPORTED_MODULE_3__.MarkdownComponent], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  z-index: 2;\n  align-items: center;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  margin-bottom: 2rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-icon[_ngcontent-%COMP%] {\n  margin-left: -0.5rem;\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%]   .maker-info[_ngcontent-%COMP%] {\n  display: flex;\n  width: 50%;\n  padding: 1rem;\n  font-size: 1rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%]   .maker-info[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-bottom: 2rem;\n  }\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%]   .maker-info[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  height: 6rem;\n  width: auto;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%]   .maker-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 3rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%]   .maker-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%]   .maker-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .maker-container[_ngcontent-%COMP%]   .maker-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2Vycy1zdWJkcmF3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFHQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFIRjtBQUtFO0VBQ0UsV0FBQTtBQUhKO0FBSUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFGTjtBQUlNO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQUZSO0FBTUk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUpOO0FBTU07RUFKRjtJQUtJLHNCQUFBO0VBSE47QUFDRjtBQUtNO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUhSO0FBSVE7RUFMRjtJQU1JLFdBQUE7SUFDQSxvQkFBQTtFQURSO0FBQ0Y7QUFHUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBRFY7QUFJUTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFGVjtBQUlVO0VBSkY7SUFLSSxnQkFBQTtFQURWO0FBQ0Y7QUFHVTtFQUNFLGlCQUFBO0FBRFo7QUFJVTtFQUNFLG1CQUFBO0FBRloiLCJmaWxlIjoibWFrZXJzLXN1YmRyYXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRicmVha3BvaW50OiA3NjhweDtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gIC8vIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmRldGFpbHMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuYmFjay1idXR0b24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgICAuYmFjay1pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWFrZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAubWFrZXItaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50KSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudGh1bWJuYWlsIHtcbiAgICAgICAgICBoZWlnaHQ6IDZyZW07XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJpbyB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 643:
/*!************************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/makers-subdrawer/makers-subdrawer.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakersSubdrawerModule": () => (/* binding */ MakersSubdrawerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _makers_subdrawer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makers-subdrawer.component */ 6949);
/* harmony import */ var _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../purchase-modal/purchase-modal.module */ 651);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class MakersSubdrawerModule {
}
MakersSubdrawerModule.ɵfac = function MakersSubdrawerModule_Factory(t) { return new (t || MakersSubdrawerModule)(); };
MakersSubdrawerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MakersSubdrawerModule });
MakersSubdrawerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
            _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_1__.PurchaseModalModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MakersSubdrawerModule, { declarations: [_makers_subdrawer_component__WEBPACK_IMPORTED_MODULE_0__.MakersSubdrawerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_1__.PurchaseModalModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownModule], exports: [_makers_subdrawer_component__WEBPACK_IMPORTED_MODULE_0__.MakersSubdrawerComponent] }); })();


/***/ }),

/***/ 1377:
/*!*************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/menu-icon/menu-icon.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuIconComponent": () => (/* binding */ MenuIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class MenuIconComponent {
    constructor() {
        this.clsName = 'sci-menu-icon';
        this.alternateIcon = false;
    }
}
MenuIconComponent.ɵfac = function MenuIconComponent_Factory(t) { return new (t || MenuIconComponent)(); };
MenuIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuIconComponent, selectors: [["sci-menu-icon"]], hostVars: 2, hostBindings: function MenuIconComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { alternateIcon: "alternateIcon" }, decls: 4, vars: 2, consts: [[1, "icon"], [1, "bar"]], template: function MenuIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("alternate", ctx.alternateIcon);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 2.25rem;\n  height: 1.5rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin: 0.125rem;\n}\n[_nghost-%COMP%]   .icon[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  width: 1.875rem;\n  height: 0.25rem;\n  border-radius: 0.625rem;\n  transition: 0.4s;\n}\n[_nghost-%COMP%]   .icon[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-of-type(2) {\n  margin: 0.25rem 0;\n}\n[_nghost-%COMP%]   .icon.alternate[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-of-type(1) {\n  width: 1.75rem;\n  transform: translate(0, 0.5rem) rotate(45deg);\n}\n[_nghost-%COMP%]   .icon.alternate[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-of-type(2) {\n  opacity: 0;\n}\n[_nghost-%COMP%]   .icon.alternate[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-of-type(3) {\n  width: 1.75rem;\n  transform: translate(0, -0.5rem) rotate(-45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ047QUFDTTtFQUNFLGlCQUFBO0FBQ1I7QUFJTTtFQUNFLGNBQUE7RUFDQSw2Q0FBQTtBQUZSO0FBS007RUFDRSxVQUFBO0FBSFI7QUFNTTtFQUNFLGNBQUE7RUFDQSwrQ0FBQTtBQUpSIiwiZmlsZSI6Im1lbnUtaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyLjI1cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIC5pY29uIHtcbiAgICBtYXJnaW46IDAuMTI1cmVtO1xuXG4gICAgLmJhciB7XG4gICAgICB3aWR0aDogMS44NzVyZW07XG4gICAgICBoZWlnaHQ6IDAuMjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbiAgICAgIHRyYW5zaXRpb246IDAuNHM7XG5cbiAgICAgICY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICBtYXJnaW46IDAuMjVyZW0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFsdGVybmF0ZSAuYmFyIHtcbiAgICAgICY6bnRoLW9mLXR5cGUoMSkge1xuICAgICAgICB3aWR0aDogMS43NXJlbTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMC41cmVtKSByb3RhdGUoNDVkZWcpO1xuICAgICAgfVxuXG4gICAgICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cblxuICAgICAgJjpudGgtb2YtdHlwZSgzKSB7XG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMC41cmVtKSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 2467:
/*!**********************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/menu-icon/menu-icon.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuIconModule": () => (/* binding */ MenuIconModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _menu_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-icon.component */ 1377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class MenuIconModule {
}
MenuIconModule.ɵfac = function MenuIconModule_Factory(t) { return new (t || MenuIconModule)(); };
MenuIconModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MenuIconModule });
MenuIconModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MenuIconModule, { declarations: [_menu_icon_component__WEBPACK_IMPORTED_MODULE_0__.MenuIconComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_menu_icon_component__WEBPACK_IMPORTED_MODULE_0__.MenuIconComponent] }); })();


/***/ }),

/***/ 3699:
/*!***********************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/purchase-modal/purchase-modal.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseModalComponent": () => (/* binding */ PurchaseModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 2220);









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
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
        this.address = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
        this.city = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
        this.state = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
        this.zip = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]);
        this.phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
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
        this.receivingEmail = 'cnscntr@iu.edu';
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
PurchaseModalComponent.ɵfac = function PurchaseModalComponent_Factory(t) { return new (t || PurchaseModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef)); };
PurchaseModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseModalComponent, selectors: [["sci-purchase-modal"]], hostVars: 2, hostBindings: function PurchaseModalComponent_HostBindings(rf, ctx) { if (rf & 2) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError], styles: ["mat-dialog-container {\n  padding: 0 !important;\n}\n  mat-dialog-container mat-dialog-content {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n[_nghost-%COMP%]   .purchase-modal[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .purchase-modal[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]     mat-dialog-content {\n  max-height: unset;\n}\n[_nghost-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 12%;\n    margin-top: -3.5rem;\n    cursor: pointer;\n  }\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-info[_ngcontent-%COMP%], [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  padding: 1rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-info[_ngcontent-%COMP%], [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-info[_ngcontent-%COMP%]   .purchase-title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-info[_ngcontent-%COMP%]   .purchase-options[_ngcontent-%COMP%] {\n  padding-inline-start: 1rem;\n  margin-bottom: 1rem;\n  margin-top: 0;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-info[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .name-inputs[_ngcontent-%COMP%], [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .shipping-input[_ngcontent-%COMP%], [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .address-inputs[_ngcontent-%COMP%], [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .contact-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 15%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]     .mat-form-field {\n  width: 100%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]     .mat-form-field .mat-form-field-flex {\n  background-color: inherit;\n  padding: 0;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .first-name[_ngcontent-%COMP%] {\n  width: 45%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .last-name[_ngcontent-%COMP%] {\n  width: 50%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%] {\n  width: 35%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .state[_ngcontent-%COMP%] {\n  width: 40%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .zip[_ngcontent-%COMP%] {\n  width: 15%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  width: 60%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  width: 35%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .shipping-info[_ngcontent-%COMP%] {\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .shipping-info[_ngcontent-%COMP%]   .shipping-info-label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .shipping-info[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 1px;\n  height: calc(100% - 1rem);\n  padding: 0.5rem;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1rem;\n  display: flex;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: inherit;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button.cancel[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n  border: none;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button.send[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border-width: 1px;\n  border-style: solid;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button.send.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n[_nghost-%COMP%]   .screen2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 25rem;\n}\n[_nghost-%COMP%]   .screen2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .confirmation-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .screen2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .confirmation-text[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  width: 60%;\n  text-align: center;\n}\n[_nghost-%COMP%]   .screen2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0.5rem;\n  border-width: 2px;\n  border-style: solid;\n  background-color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUJBQUE7QUFERjtBQUdFO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQURKO0FBTUU7RUFDRSxXQUFBO0FBSEo7QUFJSTtFQUNFLFlBQUE7QUFGTjtBQUtFO0VBQ0UsaUJBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtBQUpKO0FBTUk7RUFIRjtJQUlJLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQUhKO0FBQ0Y7QUFNRTtFQUNFLGFBQUE7QUFKSjtBQU1JO0VBSEY7SUFJSSxzQkFBQTtFQUhKO0FBQ0Y7QUFLSTs7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUhOO0FBS007RUFQRjs7SUFRSSxXQUFBO0VBRE47QUFDRjtBQUtNO0VBQ0UsbUJBQUE7QUFIUjtBQUtNO0VBQ0UsbUJBQUE7QUFIUjtBQUtNO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFIUjtBQUtNO0VBQ0UsbUJBQUE7QUFIUjtBQVFNO0VBREY7SUFFSSxjQUFBO0VBTE47QUFDRjtBQU9NO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBTFI7QUFPUTs7OztFQUlFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFMVjtBQVFRO0VBQ0UsV0FBQTtBQU5WO0FBUVU7RUFDRSx5QkFBQTtFQUNBLFVBQUE7QUFOWjtBQVVRO0VBQ0UsVUFBQTtBQVJWO0FBVVE7RUFDRSxVQUFBO0FBUlY7QUFVUTtFQUNFLFVBQUE7QUFSVjtBQVVRO0VBQ0UsVUFBQTtBQVJWO0FBVVE7RUFDRSxVQUFBO0FBUlY7QUFVUTtFQUNFLFVBQUE7QUFSVjtBQVVRO0VBQ0UsVUFBQTtBQVJWO0FBV1E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBVFY7QUFXVTtFQUNFLHFCQUFBO0FBVFo7QUFXVTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFUWjtBQWFRO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBWFY7QUFhVTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQVhaO0FBYVk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFYZDtBQWNZO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQVpkO0FBY2M7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQVpoQjtBQXNCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBcEJOO0FBc0JNO0VBQ0Usa0JBQUE7QUFwQlI7QUF1Qk07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQXJCUjtBQXdCTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBdEJSIiwiZmlsZSI6InB1cmNoYXNlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnQ6IDc2OHB4O1xuXG46Om5nLWRlZXAgbWF0LWRpYWxvZy1jb250YWluZXIgeyBcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuXG4gIG1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG59XG5cbjpob3N0IHtcbiAgLnB1cmNoYXNlLW1vZGFsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbiAgOjpuZy1kZWVwIG1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogdW5zZXQ7XG4gIH1cblxuICAuY2xvc2UtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludCkge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDEyJTtcbiAgICAgIG1hcmdpbi10b3A6IC0zLjVyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLnNjcmVlbjEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLnB1cmNoYXNlLWluZm8sIFxuICAgIC5wdXJjaGFzZS1mb3JtLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnB1cmNoYXNlLWluZm8ge1xuICAgICAgLnB1cmNoYXNlLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICB9XG4gICAgICAucHVyY2hhc2Utb3B0aW9ucyB7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuICAgICAgLmluc3RydWN0aW9ucyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnB1cmNoYXNlLWZvcm0tY29udGFpbmVyIHtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgLnB1cmNoYXNlLWZvcm0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAubmFtZS1pbnB1dHMsXG4gICAgICAgIC5zaGlwcGluZy1pbnB1dCxcbiAgICAgICAgLmFkZHJlc3MtaW5wdXRzLFxuICAgICAgICAuY29udGFjdC1pbnB1dHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICB9XG5cbiAgICAgICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZmlyc3QtbmFtZSB7XG4gICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgfVxuICAgICAgICAubGFzdC1uYW1lIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB9XG4gICAgICAgIC5jaXR5IHtcbiAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0ZSB7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgfVxuICAgICAgICAuemlwIHtcbiAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICB9XG4gICAgICAgIC5lbWFpbCB7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgfVxuICAgICAgICAucGhvbmUge1xuICAgICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2hpcHBpbmctaW5mbyB7XG4gICAgICAgICAgaGVpZ2h0OiA0MCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgLnNoaXBwaW5nLWluZm8tbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dGFyZWEge1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxcmVtKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIFxuICAgICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcblxuICAgICAgICAgICAgJi5jYW5jZWwge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZW5kIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gXG4gICAgfVxuICB9XG5cbiAgLnNjcmVlbjIge1xuICAgIC5jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAyNXJlbTtcblxuICAgICAgLmNvbmZpcm1hdGlvbi1oZWFkZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5jb25maXJtYXRpb24tdGV4dCB7XG4gICAgICAgIG1hcmdpbjogMCAwIDEuNXJlbTtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuYnV0dG9uIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */"] });


/***/ }),

/***/ 651:
/*!********************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/purchase-modal/purchase-modal.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseModalModule": () => (/* binding */ PurchaseModalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _purchase_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-modal.component */ 3699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);







class PurchaseModalModule {
}
PurchaseModalModule.ɵfac = function PurchaseModalModule_Factory(t) { return new (t || PurchaseModalModule)(); };
PurchaseModalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PurchaseModalModule });
PurchaseModalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PurchaseModalModule, { declarations: [_purchase_modal_component__WEBPACK_IMPORTED_MODULE_0__.PurchaseModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule], exports: [_purchase_modal_component__WEBPACK_IMPORTED_MODULE_0__.PurchaseModalComponent] }); })();


/***/ }),

/***/ 8355:
/*!****************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/directives/breakpoint.directive.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreakpointDirective": () => (/* binding */ BreakpointDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_media_query_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/media-query.service */ 6077);
/* harmony import */ var _services_breakpoint_registry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/breakpoint-registry.service */ 4413);



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
BreakpointDirective.ɵfac = function BreakpointDirective_Factory(t) { return new (t || BreakpointDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_media_query_service__WEBPACK_IMPORTED_MODULE_0__.MediaQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_breakpoint_registry_service__WEBPACK_IMPORTED_MODULE_1__.BreakpointRegistryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)); };
BreakpointDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: BreakpointDirective, selectors: [["", "sciBreakpoint", ""]], inputs: { sciBreakpoint: "sciBreakpoint", sciBreakpointThen: "sciBreakpointThen", sciBreakpointElse: "sciBreakpointElse" } });


/***/ }),

/***/ 4413:
/*!*********************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/services/breakpoint-registry.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreakpointUnits": () => (/* binding */ BreakpointUnits),
/* harmony export */   "BreakpointDimension": () => (/* binding */ BreakpointDimension),
/* harmony export */   "BreakpointRegistryService": () => (/* binding */ BreakpointRegistryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

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
BreakpointRegistryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BreakpointRegistryService, factory: BreakpointRegistryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8208:
/*!*********************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/services/content.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toSlug": () => (/* binding */ toSlug),
/* harmony export */   "ContentService": () => (/* binding */ ContentService)
/* harmony export */ });
/* harmony import */ var front_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! front-matter */ 9095);
/* harmony import */ var front_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(front_matter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slugify */ 5609);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3882);





function toSlug(str) {
    return slugify__WEBPACK_IMPORTED_MODULE_1___default()(str, { lower: true, strict: true });
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
        return this.http.get(`assets/content/${contentPath}`, { responseType: 'text' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((body) => {
            const data = front_matter__WEBPACK_IMPORTED_MODULE_0___default()(body);
            if (data.body) {
                Object.assign(data.attributes, { [bodyAttribute]: data.body });
            }
            return data.attributes;
        }));
    }
}
ContentService.ɵfac = function ContentService_Factory(t) { return new (t || ContentService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
ContentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ContentService, factory: ContentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6077:
/*!*************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/services/media-query.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaQueryService": () => (/* binding */ MediaQueryService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4236);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2125);
/* harmony import */ var _utils_global_di_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/global-di-tokens */ 9408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);




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
        const first = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.defer)(() => [mq.matches]);
        const events = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(mq, 'change').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.pluck)('matches'));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(first, events).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.concatAll)());
    }
}
MediaQueryService.ɵfac = function MediaQueryService_Factory(t) { return new (t || MediaQueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_utils_global_di_tokens__WEBPACK_IMPORTED_MODULE_0__.WINDOW)); };
MediaQueryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: MediaQueryService, factory: MediaQueryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3687:
/*!**********************************************************!*\
  !*** ./projects/scimaps/src/app/shared/shared.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/card-gallery/card-gallery.module */ 2743);
/* harmony import */ var _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/carousel/carousel.module */ 3708);
/* harmony import */ var _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu-icon/menu-icon.module */ 2467);
/* harmony import */ var _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/breakpoint.directive */ 8355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);






class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_0__.CardGalleryModule,
            _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_1__.CarouselModule,
            _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_2__.MenuIconModule,
        ], _components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_0__.CardGalleryModule,
        _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_1__.CarouselModule,
        _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_2__.MenuIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_3__.BreakpointDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_0__.CardGalleryModule,
        _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_1__.CarouselModule,
        _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_2__.MenuIconModule], exports: [_components_card_gallery_card_gallery_module__WEBPACK_IMPORTED_MODULE_0__.CardGalleryModule,
        _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_1__.CarouselModule,
        _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_2__.MenuIconModule,
        _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_3__.BreakpointDirective] }); })();


/***/ }),

/***/ 9408:
/*!*******************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/utils/global-di-tokens.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOCUMENT": () => (/* reexport safe */ _angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT),
/* harmony export */   "WINDOW": () => (/* binding */ WINDOW)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 4364);

// Reexport document token from angular

/**
 * A DI Token for the global window object
 */
const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('Global window object', {
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

/***/ 4282:
/*!**********************************************************!*\
  !*** ./projects/scimaps/src/environments/environment.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 1295:
/*!**************************************!*\
  !*** ./projects/scimaps/src/main.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 7674);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4282);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 1096:
/*!************************************************************************!*\
  !*** ./projects/scimaps/$_lazy_route_resources/ lazy namespace object ***!
  \************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 1096;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1295)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map