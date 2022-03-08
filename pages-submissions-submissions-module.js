(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-submissions-submissions-module"],{

/***/ "+1ub":
/*!*****************************************************************!*\
  !*** ./src/app/pages/submissions/submissions-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SubmissionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionsRoutingModule", function() { return SubmissionsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _submission_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submission-resolver.service */ "yUdd");
/* harmony import */ var _submissions_body_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submissions-body-resolver.service */ "c2nn");
/* harmony import */ var _submissions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./submissions.component */ "3JQ3");







const routes = [
    {
        path: ':iteration',
        component: _submissions_component__WEBPACK_IMPORTED_MODULE_4__["SubmissionsComponent"],
        resolve: {
            submissions: _submission_resolver_service__WEBPACK_IMPORTED_MODULE_2__["SubmissionResolverService"]
        },
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | submission-submission-module */[__webpack_require__.e("default~macroscope-macroscope-module~pages-maps-maps-module~submission-submission-module"), __webpack_require__.e("common"), __webpack_require__.e("submission-submission-module")]).then(__webpack_require__.bind(null, /*! ../submission/submission.module */ "JADd")).then(m => m.SubmissionModule),
                data: { animation: 'Macroscope', type: 'submission' }
            }
        ]
    },
    {
        path: '',
        component: _submissions_component__WEBPACK_IMPORTED_MODULE_4__["SubmissionsComponent"],
        resolve: {
            submissions: _submission_resolver_service__WEBPACK_IMPORTED_MODULE_2__["SubmissionResolverService"],
            body: _submissions_body_resolver_service__WEBPACK_IMPORTED_MODULE_3__["SubmissionsBodyResolverService"]
        },
        runGuardsAndResolvers: 'pathParamsOrQueryParamsChange'
    },
];
class SubmissionsRoutingModule {
}
SubmissionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SubmissionsRoutingModule });
SubmissionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SubmissionsRoutingModule_Factory(t) { return new (t || SubmissionsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SubmissionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmissionsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "3JQ3":
/*!************************************************************!*\
  !*** ./src/app/pages/submissions/submissions.component.ts ***!
  \************************************************************/
/*! exports provided: SubmissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionsComponent", function() { return SubmissionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_components_discover_listing_discover_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/discover-listing/discover-listing.component */ "0zur");





function SubmissionsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "sci-discover-listing", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("discoverItem", item_r1)("type", "submissions");
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
SubmissionsComponent.ɵfac = function SubmissionsComponent_Factory(t) { return new (t || SubmissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
SubmissionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubmissionsComponent, selectors: [["sci-submissions"]], decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "main"], [1, "discover-item", "submissions", 3, "discoverItem", "type"]], template: function SubmissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SubmissionsComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.submissions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_components_discover_listing_discover_listing_component__WEBPACK_IMPORTED_MODULE_3__["DiscoverListingComponent"]], styles: ["[_nghost-%COMP%]   .discover-item[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9zdWJtaXNzaW9ucy9zdWJtaXNzaW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLG1CQUFBO0FBRkoiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3BhZ2VzL3N1Ym1pc3Npb25zL3N1Ym1pc3Npb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGluZy9icmVha3BvaW50cyc7XG5cbjpob3N0IHtcbiAgLmRpc2NvdmVyLWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmissionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-submissions',
                templateUrl: './submissions.component.html',
                styleUrls: ['./submissions.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "6zo9":
/*!*********************************************************!*\
  !*** ./src/app/pages/submissions/submissions.module.ts ***!
  \*********************************************************/
/*! exports provided: SubmissionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionsModule", function() { return SubmissionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _submissions_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submissions-routing.module */ "+1ub");
/* harmony import */ var _submissions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submissions.component */ "3JQ3");
/* harmony import */ var _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/discover-listing/discover-listing.module */ "RxUJ");






class SubmissionsModule {
}
SubmissionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SubmissionsModule });
SubmissionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SubmissionsModule_Factory(t) { return new (t || SubmissionsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _submissions_routing_module__WEBPACK_IMPORTED_MODULE_2__["SubmissionsRoutingModule"],
            _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_4__["DiscoverListingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SubmissionsModule, { declarations: [_submissions_component__WEBPACK_IMPORTED_MODULE_3__["SubmissionsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _submissions_routing_module__WEBPACK_IMPORTED_MODULE_2__["SubmissionsRoutingModule"],
        _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_4__["DiscoverListingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmissionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_submissions_component__WEBPACK_IMPORTED_MODULE_3__["SubmissionsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _submissions_routing_module__WEBPACK_IMPORTED_MODULE_2__["SubmissionsRoutingModule"],
                    _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_4__["DiscoverListingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "c2nn":
/*!************************************************************************!*\
  !*** ./src/app/pages/submissions/submissions-body-resolver.service.ts ***!
  \************************************************************************/
/*! exports provided: SubmissionsBodyResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionsBodyResolverService", function() { return SubmissionsBodyResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");





class SubmissionsBodyResolverService {
    constructor(content, router) {
        this.content = content;
        this.router = router;
        this.directory = 'assets/content/site/submissions';
    }
    resolve() {
        return this.content.getContent('site/submissions/submissions.md').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => {
            return response;
        }));
    }
}
SubmissionsBodyResolverService.ɵfac = function SubmissionsBodyResolverService_Factory(t) { return new (t || SubmissionsBodyResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SubmissionsBodyResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubmissionsBodyResolverService, factory: SubmissionsBodyResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmissionsBodyResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "yUdd":
/*!******************************************************************!*\
  !*** ./src/app/pages/submissions/submission-resolver.service.ts ***!
  \******************************************************************/
/*! exports provided: SubmissionResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionResolverService", function() { return SubmissionResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");




class SubmissionResolverService {
    constructor(content) {
        this.content = content;
    }
    resolve(route) {
        const { iteration } = route.params;
        return this.content.getIndex('app-submissions').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(item => {
            if (iteration) {
                return item.filter(submission => {
                    return submission.iteration === parseInt(iteration, 10);
                });
            }
            else {
                return item;
            }
        }));
    }
}
SubmissionResolverService.ɵfac = function SubmissionResolverService_Factory(t) { return new (t || SubmissionResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"])); };
SubmissionResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubmissionResolverService, factory: SubmissionResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmissionResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-submissions-submissions-module.js.map