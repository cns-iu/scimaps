"use strict";
(self["webpackChunkscimaps"] = self["webpackChunkscimaps"] || []).push([["projects_scimaps_src_app_pages_submissions_submissions_module_ts"],{

/***/ 6707:
/*!***********************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/submissions/submission-resolver.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmissionResolverService": () => (/* binding */ SubmissionResolverService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);



class SubmissionResolverService {
    constructor(content) {
        this.content = content;
    }
    resolve(route) {
        const { iteration } = route.params;
        return this.content.getIndex('app-submissions').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(item => {
            if (iteration) {
                return item.filter(submission => {
                    return submission.iteration === parseInt(iteration, 10);
                });
            }
            else {
                const maxIteration = Math.max(...item.map(s => s.iteration));
                return item.filter(s => s.iteration === maxIteration);
            }
        }));
    }
}
SubmissionResolverService.ɵfac = function SubmissionResolverService_Factory(t) { return new (t || SubmissionResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__.ContentService)); };
SubmissionResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SubmissionResolverService, factory: SubmissionResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4365:
/*!*****************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/submissions/submissions-body-resolver.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmissionsBodyResolverService": () => (/* binding */ SubmissionsBodyResolverService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);




class SubmissionsBodyResolverService {
    constructor(content, router) {
        this.content = content;
        this.router = router;
        this.directory = 'assets/content/site/submissions';
    }
    resolve() {
        return this.content.getContent('site/submissions/submissions.md').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
            return response;
        }));
    }
}
SubmissionsBodyResolverService.ɵfac = function SubmissionsBodyResolverService_Factory(t) { return new (t || SubmissionsBodyResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__.ContentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
SubmissionsBodyResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SubmissionsBodyResolverService, factory: SubmissionsBodyResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9217:
/*!**********************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/submissions/submissions-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmissionsRoutingModule": () => (/* binding */ SubmissionsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _submission_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submission-resolver.service */ 6707);
/* harmony import */ var _submissions_body_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submissions-body-resolver.service */ 4365);
/* harmony import */ var _submissions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submissions.component */ 5292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: ':iteration',
        component: _submissions_component__WEBPACK_IMPORTED_MODULE_2__.SubmissionsComponent,
        resolve: {
            submissions: _submission_resolver_service__WEBPACK_IMPORTED_MODULE_0__.SubmissionResolverService
        },
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_scimaps_src_app_shared_components_item-drawer_item-drawer_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_scimaps_src_app_pages_submission_submission_module_ts-projects_scimaps_src_app_share-62c167")]).then(__webpack_require__.bind(__webpack_require__, /*! ../submission/submission.module */ 7312)).then(m => m.SubmissionModule),
                data: { animation: 'Macroscope', type: 'submission' }
            }
        ]
    },
    {
        path: '',
        component: _submissions_component__WEBPACK_IMPORTED_MODULE_2__.SubmissionsComponent,
        resolve: {
            submissions: _submission_resolver_service__WEBPACK_IMPORTED_MODULE_0__.SubmissionResolverService,
            body: _submissions_body_resolver_service__WEBPACK_IMPORTED_MODULE_1__.SubmissionsBodyResolverService
        },
        runGuardsAndResolvers: 'pathParamsOrQueryParamsChange'
    },
];
class SubmissionsRoutingModule {
}
SubmissionsRoutingModule.ɵfac = function SubmissionsRoutingModule_Factory(t) { return new (t || SubmissionsRoutingModule)(); };
SubmissionsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SubmissionsRoutingModule });
SubmissionsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SubmissionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5292:
/*!*****************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/submissions/submissions.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmissionsComponent": () => (/* binding */ SubmissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_discover_listing_discover_listing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/discover-listing/discover-listing.component */ 8993);




function SubmissionsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "sci-discover-listing", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("discoverItem", item_r1)("type", "submissions");
} }
class SubmissionsComponent {
    constructor(route) {
        this.route = route;
        this.submissions = [];
        this.thumbnails = [];
    }
    ngOnInit() {
        if (this.route.data) {
            this.dataSubscription = this.route.data.subscribe((data) => {
                const { submissions } = data;
                if (submissions) {
                    this.submissions = submissions;
                }
            });
        }
    }
    ngOnDestroy() {
        if (this.dataSubscription) {
            this.dataSubscription.unsubscribe();
        }
    }
}
SubmissionsComponent.ɵfac = function SubmissionsComponent_Factory(t) { return new (t || SubmissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
SubmissionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SubmissionsComponent, selectors: [["sci-submissions"]], decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "main"], [1, "discover-item", "submissions", 3, "discoverItem", "type"]], template: function SubmissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SubmissionsComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.submissions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_components_discover_listing_discover_listing_component__WEBPACK_IMPORTED_MODULE_0__.DiscoverListingComponent], styles: ["[_nghost-%COMP%]   .discover-item[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pc3Npb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsbUJBQUE7QUFGSiIsImZpbGUiOiJzdWJtaXNzaW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxpbmcvYnJlYWtwb2ludHMnO1xuXG46aG9zdCB7XG4gIC5kaXNjb3Zlci1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 4520:
/*!**************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/submissions/submissions.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmissionsModule": () => (/* binding */ SubmissionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _submissions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submissions-routing.module */ 9217);
/* harmony import */ var _submissions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submissions.component */ 5292);
/* harmony import */ var _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/discover-listing/discover-listing.module */ 6904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class SubmissionsModule {
}
SubmissionsModule.ɵfac = function SubmissionsModule_Factory(t) { return new (t || SubmissionsModule)(); };
SubmissionsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SubmissionsModule });
SubmissionsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _submissions_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubmissionsRoutingModule,
            _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_2__.DiscoverListingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SubmissionsModule, { declarations: [_submissions_component__WEBPACK_IMPORTED_MODULE_1__.SubmissionsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _submissions_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubmissionsRoutingModule,
        _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_2__.DiscoverListingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_scimaps_src_app_pages_submissions_submissions_module_ts.js.map