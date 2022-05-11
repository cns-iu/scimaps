"use strict";
(self["webpackChunkscimaps"] = self["webpackChunkscimaps"] || []).push([["projects_scimaps_src_app_pages_about_about_module_ts"],{

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

/***/ 3027:
/*!*************************************************************!*\
  !*** ./projects/scimaps/src/app/constants/region-labels.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REGIONS": () => (/* binding */ REGIONS)
/* harmony export */ });
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

/***/ 4990:
/*!*****************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/about/about-body-resolver.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutBodyResolverService": () => (/* binding */ AboutBodyResolverService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/utils */ 9298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);





class AboutBodyResolverService {
    constructor(content) {
        this.content = content;
        this.directory = 'assets/content/site/about';
    }
    resolve() {
        const mdPath = 'site/about/about.md';
        return this.content.getContent(mdPath).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((body) => {
            const { annualReports } = body;
            if (annualReports && Array.isArray(annualReports)) {
                annualReports.forEach((report) => {
                    const pdfLink = report.pdfLink;
                    if (!(0,_constants_utils__WEBPACK_IMPORTED_MODULE_0__.isHttp)(pdfLink)) {
                        report.pdfLink = `${this.directory}/${report.pdfLink}`;
                    }
                });
                body.annualReports = annualReports;
            }
            return body;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => {
            console.error('Error in fetching', mdPath);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({});
        }));
    }
}
AboutBodyResolverService.ɵfac = function AboutBodyResolverService_Factory(t) { return new (t || AboutBodyResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService)); };
AboutBodyResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AboutBodyResolverService, factory: AboutBodyResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5945:
/*!************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/about/about-resolver.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutResolverService": () => (/* binding */ AboutResolverService)
/* harmony export */ });
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




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
        return this.content.getIndex('people').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((items) => {
            return items.filter(item => item.name).map((item) => {
                const profile = {
                    name: item.name,
                    slug: (0,_shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__.toSlug)(item.name),
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
AboutResolverService.ɵfac = function AboutResolverService_Factory(t) { return new (t || AboutResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__.ContentService)); };
AboutResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AboutResolverService, factory: AboutResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1386:
/*!**********************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/about/about-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutRoutingModule": () => (/* binding */ AboutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ 5843);
/* harmony import */ var _about_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-resolver.service */ 5945);
/* harmony import */ var _about_body_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-body-resolver.service */ 4990);
/* harmony import */ var _news_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-resolver.service */ 9322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    {
        path: '',
        component: _about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent,
        resolve: {
            profiles: _about_resolver_service__WEBPACK_IMPORTED_MODULE_1__.AboutResolverService,
            newsItems: _news_resolver_service__WEBPACK_IMPORTED_MODULE_3__.NewsResolverService,
            body: _about_body_resolver_service__WEBPACK_IMPORTED_MODULE_2__.AboutBodyResolverService
        }
    }
];
class AboutRoutingModule {
}
AboutRoutingModule.ɵfac = function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); };
AboutRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5843:
/*!*****************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/about/about.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/breakpoint.directive */ 8355);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/select/select.component */ 4528);
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/table/table.component */ 9024);
/* harmony import */ var _shared_components_search_overlay_search_overlay_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/search-overlay/search-overlay.component */ 3738);
/* harmony import */ var _shared_components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/list-view/list-view.component */ 8047);
/* harmony import */ var _shared_components_partners_partners_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/partners/partners.component */ 5450);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _shared_components_profile_gallery_profile_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/profile-gallery/profile-gallery.component */ 2466);
















function AboutComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 30);
} }
function AboutComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 31);
} }
function AboutComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", report_r5.pdfLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", report_r5.year, " ");
} }
function AboutComponent_ng_container_29_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "sci-profile-gallery", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "sci-profile-gallery", 36);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Curatorial Team")("description", ctx_r8.curatorsDescription)("profiles", ctx_r8.curatorProfiles)("compact", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Advisory Board")("description", ctx_r8.advisoryBoardDescription)("profiles", ctx_r8.advisoryBoardProfiles)("compact", true);
} }
function AboutComponent_ng_container_29_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "sci-profile-gallery", 37);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Exhibit Ambassadors")("description", ctx_r9.ambassadorsDescription)("profiles", ctx_r9.ambassadorProfiles)("groupBy", "region")("compact", true);
} }
function AboutComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-tab", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AboutComponent_ng_container_29_ng_template_2_Template, 3, 8, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AboutComponent_ng_container_29_ng_template_3_Template, 1, 5, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", ctx_r4.pageTabs[i_r7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r7 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r7 == 1);
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
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource();
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
            const year = new Date(item.date).getUTCFullYear().toString();
            result = result && year === parsedFilter.year;
        }
        if (parsedFilter.searchKey) {
            result =
                result &&
                    (((_a = item.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(parsedFilter.searchKey)) ||
                        ((_b = item.publication) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(parsedFilter.searchKey)));
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
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute)); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["sci-about"]], hostVars: 2, hostBindings: function AboutComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 43, vars: 20, consts: [[1, "intro"], [1, "header1"], [1, "image-container"], ["src", "assets/images/about/image.med.jpg", "alt", "", 4, "sciBreakpoint", "sciBreakpointElse"], ["desktop", ""], [1, "description"], [1, "paragraph"], ["markdown", "", 3, "data"], [1, "quote"], [1, "spacer-32"], [1, "reports"], [1, "row"], [1, "annual-reports"], ["placeholder", "Annual Reports", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "divider"], [1, "spacer-24"], [1, "ambassador-map"], [1, "container"], ["src", "assets/images/map-advisors-ambassadors.svg", "alt", ""], [1, "spacer-72"], ["mat-align-tabs", "start", 1, "tab-view"], [4, "ngFor", "ngForOf"], [1, "header2"], [1, "group1"], [3, "select", "options", "selectChange"], [3, "dataSource", "initialSort", "tableHeaders", "headersOnly"], [1, "group2"], [3, "search", "searchChange"], [1, "news-list", 3, "config"], ["src", "assets/images/about/image.med.jpg", "alt", ""], ["src", "assets/images/about/image.lg.jpg", "alt", ""], [3, "value"], [3, "label"], [3, "ngIf"], [1, "profile-gallery", 3, "title", "description", "profiles", "compact"], [3, "title", "description", "profiles", "compact"], [3, "title", "description", "profiles", "groupBy", "compact"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "About the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Places & Spaces");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Exhibition");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, AboutComponent_img_7_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AboutComponent_ng_template_8_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function AboutComponent_Template_mat_select_selectionChange_20_listener($event) { return ctx.getReport($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, AboutComponent_mat_option_21_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "mat-tab-group", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, AboutComponent_ng_container_29_Template, 4, 3, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "In the News");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "sci-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectChange", function AboutComponent_Template_sci_select_selectChange_35_listener($event) { return ctx.onSelectChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "sci-table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "sci-search-overlay", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("searchChange", function AboutComponent_Template_sci_search_overlay_searchChange_38_listener($event) { return ctx.onSearchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "sci-list-view", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](40, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "sci-partners");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sciBreakpoint", "mobile-")("sciBreakpointElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.overviewParagraph);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.overviewQuote);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.annualReports);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.pageTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("select", ctx.year)("options", ctx.yearList);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource)("initialSort", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](16, _c0))("tableHeaders", ctx.sortHeaders)("headersOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("search", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](18, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](40, 14, ctx.dataSource.connect().asObservable()) || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](17, _c1)));
    } }, directives: [_shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_0__.BreakpointDirective, ngx_markdown__WEBPACK_IMPORTED_MODULE_10__.MarkdownComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabGroup, _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_1__.SelectComponent, _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_2__.TableComponent, _shared_components_search_overlay_search_overlay_component__WEBPACK_IMPORTED_MODULE_3__.SearchOverlayComponent, _shared_components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__.ListViewComponent, _shared_components_partners_partners_component__WEBPACK_IMPORTED_MODULE_5__.PartnersComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTab, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_profile_gallery_profile_gallery_component__WEBPACK_IMPORTED_MODULE_6__.ProfileGalleryComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe], styles: ["[_nghost-%COMP%]   .tab-header[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n[_nghost-%COMP%]   .profile-gallery[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 48px;\n}\n[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 100%;\n  height: auto;\n}\n[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  color: #757575;\n  font-size: 16px;\n  margin: 0 1.5rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .intro[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    padding-left: 0;\n  }\n}\n[_nghost-%COMP%]   .reports[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex row;\n}\n@media screen and (max-width: 640px) {\n  [_nghost-%COMP%]   .reports[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .ambassador-map[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 640px) and (max-width: 960px) {\n  [_nghost-%COMP%]   .ambassador-map[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: auto;\n  }\n}\n@media (min-width: 960px) {\n  [_nghost-%COMP%]   .ambassador-map[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    width: 70%;\n    margin: auto;\n  }\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 0.5rem;\n}\n@media screen and (max-width: 640px) {\n  [_nghost-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .group1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vc3R5bGluZy9fc2NyZWVuLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0U7RUFDRSxtQkFBQTtBQUpKO0FBT0U7RUFDRSxxQkFBQTtBQUxKO0FBU0k7RUFDRSxXQUFBO0VBUUEsbUJBQUE7QUFkTjtBQU9NO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUxSO0FBVUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFvQkEsbUJBQUE7QUEzQk47QUNESTtFRE1BO0lBSUksc0JBQUE7RUFMTjtBQUNGO0FBTU07RUFDRSxPQUFBO0FBSlI7QUFNTTtFQUNFLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSlI7QUNoQkk7RURlRTtJQVFJLGdCQUFBO0lBQ0EsZUFBQTtFQUhSO0FBQ0Y7QUFVSTtFQUNFLGlCQUFBO0FBUk47QUFVSTtFQUpGO0lBS0ksa0JBQUE7RUFQSjtBQUNGO0FBWU07RUFERjtJQUVJLGFBQUE7RUFUTjtBQUNGO0FBVU07RUFKRjtJQUtJLFdBQUE7SUFDQSxZQUFBO0VBUE47QUFDRjtBQVFNO0VBUkY7SUFTSSxVQUFBO0lBQ0EsWUFBQTtFQUxOO0FBQ0Y7QUFTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUEo7QUFRSTtFQUxGO0lBTUksOEJBQUE7RUFMSjtBQUNGO0FBT0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBTE4iLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzY3JlZW4nO1xuXG5AaW1wb3J0ICcuLi8uLi8uLi9zdHlsaW5nL2JyZWFrcG9pbnRzJztcblxuOmhvc3Qge1xuICAudGFiLWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxuXG4gIC5wcm9maWxlLWdhbGxlcnkge1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgfVxuICBcbiAgLmludHJvIHtcbiAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgICB9XG4gIFxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIEBpbmNsdWRlIHNjcmVlbi5icmVha3BvaW50KG1vYmlsZSkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgICAgZGl2IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAgIC5xdW90ZSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbjogMCAxLjVyZW07XG4gICAgICAgIFxuICAgICAgICBAaW5jbHVkZSBzY3JlZW4uYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuICB9XG4gIC5yZXBvcnRzIHtcbiAgICAucm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXggcm93O1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmFtYmFzc2Fkb3ItbWFwIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1vYmlsZSkgYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH0gXG4gICAgfVxuICB9XG5cbiAgLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgfVxuICAgIC8vIHNlbGVjdCBib3hcbiAgICAuZ3JvdXAxIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59IiwiJGJyZWFrcG9pbnQtbW9iaWxlOiA3NjhweDtcbiRicmVha3BvaW50LXRhYmxldDogOTYwcHg7XG5cbiQtYnJlYWtwb2ludC1xdWVyaWVzOiAoXG4gIG1vYmlsZTogXCIobWF4LXdpZHRoOiAjeyRicmVha3BvaW50LW1vYmlsZX0pXCIsXG4gIHRhYmxldDpcbiAgICBcIihtaW4td2lkdGg6ICN7JGJyZWFrcG9pbnQtbW9iaWxlICsgMXB4fSkgYW5kIChtYXgtd2lkdGg6ICN7JGJyZWFrcG9pbnQtdGFibGV0fSlcIixcbiAgZGVza3RvcDogXCIobWluLXdpZHRoOiAje2JyZWFrcG9pbnQtdGFibGV0ICsgMXB4fSlcIixcbik7XG5cbkBtaXhpbiBicmVha3BvaW50KCR0eXBlcy4uLikge1xuICAkcXVlcmllczogKCk7XG4gIEBlYWNoICR0eXBlIGluICR0eXBlcyB7XG4gICAgJHF1ZXJ5OiBtYXAtZ2V0KCQtYnJlYWtwb2ludC1xdWVyaWVzLCAkdHlwZSk7XG4gICAgQGlmICRxdWVyeSB7XG4gICAgICAkcXVlcmllczogYXBwZW5kKCRxdWVyaWVzLCAkcXVlcnksICRzZXBhcmF0b3I6IGNvbW1hKTtcbiAgICB9XG4gIH1cblxuICBAaWYgbGVuZ3RoKCRxdWVyaWVzKSA+IDAge1xuICAgIEBtZWRpYSAjeyRxdWVyaWVzfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6830:
/*!**************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/about/about.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _shared_components_list_view_list_view_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/list-view/list-view.module */ 3223);
/* harmony import */ var _shared_components_partners_partners_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/partners/partners.module */ 9448);
/* harmony import */ var _shared_components_profile_gallery_profile_gallery_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/profile-gallery/profile-gallery.module */ 1215);
/* harmony import */ var _shared_components_search_overlay_search_overlay_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/search-overlay/search-overlay.module */ 4442);
/* harmony import */ var _shared_components_select_select_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/select/select.module */ 8650);
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/table/table.module */ 2559);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ 3687);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-routing.module */ 1386);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about.component */ 5843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);














class AboutModule {
}
AboutModule.ɵfac = function AboutModule_Factory(t) { return new (t || AboutModule)(); };
AboutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_7__.AboutRoutingModule,
            _shared_components_profile_gallery_profile_gallery_module__WEBPACK_IMPORTED_MODULE_2__.ProfileGalleryModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
            _shared_components_partners_partners_module__WEBPACK_IMPORTED_MODULE_1__.PartnersModule,
            _shared_components_select_select_module__WEBPACK_IMPORTED_MODULE_4__.SelectModule,
            _shared_components_search_overlay_search_overlay_module__WEBPACK_IMPORTED_MODULE_3__.SearchOverlayModule,
            _shared_components_list_view_list_view_module__WEBPACK_IMPORTED_MODULE_0__.ListViewModule,
            _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_5__.TableModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_12__.MarkdownModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_8__.AboutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _about_routing_module__WEBPACK_IMPORTED_MODULE_7__.AboutRoutingModule,
        _shared_components_profile_gallery_profile_gallery_module__WEBPACK_IMPORTED_MODULE_2__.ProfileGalleryModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        _shared_components_partners_partners_module__WEBPACK_IMPORTED_MODULE_1__.PartnersModule,
        _shared_components_select_select_module__WEBPACK_IMPORTED_MODULE_4__.SelectModule,
        _shared_components_search_overlay_search_overlay_module__WEBPACK_IMPORTED_MODULE_3__.SearchOverlayModule,
        _shared_components_list_view_list_view_module__WEBPACK_IMPORTED_MODULE_0__.ListViewModule,
        _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_5__.TableModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_12__.MarkdownModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabsModule] }); })();


/***/ }),

/***/ 9322:
/*!***********************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/about/news-resolver.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsResolverService": () => (/* binding */ NewsResolverService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/utils */ 9298);
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);





class NewsResolverService {
    constructor(contentService) {
        this.contentService = contentService;
        this.directory = 'content/news';
    }
    // Used to get full path of resources.
    getSourceLink(newsItem, type = 'image') {
        const [year, month, date] = (0,_constants_utils__WEBPACK_IMPORTED_MODULE_0__.getSegmentedDate)(newsItem.date);
        const slug = (0,_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__.toSlug)(newsItem.title);
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
        return this.contentService.getIndex('news').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((items) => {
            return items.map((item) => {
                const newsItem = this.toNewsItem(item);
                newsItem.thumbnail = this.getSourceLink(newsItem);
                if (newsItem.pdfLink) {
                    if (!(0,_constants_utils__WEBPACK_IMPORTED_MODULE_0__.isHttp)(newsItem.pdfLink)) {
                        newsItem.pdfLink = this.getSourceLink(newsItem, 'pdfLink');
                    }
                }
                return newsItem;
            });
        }));
    }
}
NewsResolverService.ɵfac = function NewsResolverService_Factory(t) { return new (t || NewsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService)); };
NewsResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NewsResolverService, factory: NewsResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5450:
/*!***********************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/partners/partners.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnersComponent": () => (/* binding */ PartnersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function PartnersComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PartnersComponent_div_4_Template_img_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const partner_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.openLink(partner_r1.link); });
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
PartnersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PartnersComponent, selectors: [["sci-partners"]], decls: 5, vars: 1, consts: [[1, "partners"], [1, "header2"], [1, "logos"], ["class", "flex-item", 4, "ngFor", "ngForOf"], [1, "flex-item"], [3, "ngClass", "src", "alt", "click"]], template: function PartnersComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["[_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .header2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n[_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 1rem;\n}\n[_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 280px;\n  max-height: 50px;\n}\n[_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .left-aligned[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n[_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .right-aligned[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 auto;\n  }\n  [_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .left-aligned[_ngcontent-%COMP%] {\n    margin-right: auto;\n    margin-left: auto;\n  }\n  [_nghost-%COMP%]   .partners[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .right-aligned[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRuZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1JO0VBQ0Usa0JBQUE7QUFMTjtBQVFJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQU5OO0FBUU07RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQU5SO0FBUVE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQU5WO0FBT1U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUxaO0FBUVE7RUFDRSxrQkFBQTtBQU5WO0FBUVE7RUFDRSxpQkFBQTtBQU5WO0FBUVE7RUFuQkY7SUFvQkksV0FBQTtJQUNBLGNBQUE7RUFMUjtFQU1RO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtFQUpWO0VBTVE7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VBSlY7QUFDRiIsImZpbGUiOiJwYXJ0bmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkZXNrdG9wOiAxMjQ4cHg7XG4kdGFibGV0OiA5NjBweDtcbiRtb2JpbGU6IDY0MHB4O1xuXG46aG9zdCB7XG4gIC5wYXJ0bmVycyB7XG4gICAgLmhlYWRlcjIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5sb2dvcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgLmZsZXgtaXRlbSB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5sZWZ0LWFsaWduZWQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAucmlnaHQtYWxpZ25lZCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpICB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgLmxlZnQtYWxpZ25lZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0LWFsaWduZWQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 9448:
/*!********************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/partners/partners.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnersModule": () => (/* binding */ PartnersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _partners_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partners.component */ 5450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class PartnersModule {
}
PartnersModule.ɵfac = function PartnersModule_Factory(t) { return new (t || PartnersModule)(); };
PartnersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PartnersModule });
PartnersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PartnersModule, { declarations: [_partners_component__WEBPACK_IMPORTED_MODULE_0__.PartnersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_partners_component__WEBPACK_IMPORTED_MODULE_0__.PartnersComponent] }); })();


/***/ }),

/***/ 2466:
/*!*************************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/profile-gallery/profile-gallery.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileGalleryComponent": () => (/* binding */ ProfileGalleryComponent)
/* harmony export */ });
/* harmony import */ var _constants_region_labels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/region-labels */ 3027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _profile_item_profile_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile-item/profile-item.component */ 4277);





function ProfileGalleryComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function ProfileGalleryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r1.description);
} }
function ProfileGalleryComponent_ng_container_2_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { "profiles": a0 }; };
function ProfileGalleryComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProfileGalleryComponent_ng_container_2_div_1_ng_container_3_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.REGIONS[group_r8.key] ? ctx_r7.REGIONS[group_r8.key] : group_r8.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, group_r8.value));
} }
function ProfileGalleryComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileGalleryComponent_ng_container_2_div_1_Template, 4, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r2.profilesByGroup));
} }
function ProfileGalleryComponent_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ProfileGalleryComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProfileGalleryComponent_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 9);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r4.profiles));
} }
function ProfileGalleryComponent_ng_template_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "sci-profile-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("profile", profile_r13)("compact", ctx_r12.compact);
} }
function ProfileGalleryComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileGalleryComponent_ng_template_5_div_1_Template, 2, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profiles_r11 = ctx.profiles;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", profiles_r11);
} }
class ProfileGalleryComponent {
    constructor() {
        this.REGIONS = _constants_region_labels__WEBPACK_IMPORTED_MODULE_0__.REGIONS;
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
ProfileGalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileGalleryComponent, selectors: [["sci-profile-gallery"]], hostVars: 2, hostBindings: function ProfileGalleryComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { profiles: "profiles", compact: "compact", title: "title", description: "description", groupBy: "groupBy" }, decls: 7, vars: 4, consts: [["class", "header2 title", 4, "ngIf"], ["markdown", "", "class", "description", 3, "data", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["withoutGroup", ""], ["profilesTemplate", ""], [1, "header2", "title"], ["markdown", "", 1, "description", 3, "data"], ["class", "profile-group", 4, "ngFor", "ngForOf"], [1, "profile-group"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "profile-container"], ["class", "profile", 4, "ngFor", "ngForOf"], [1, "profile"], [3, "profile", "compact"]], template: function ProfileGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProfileGalleryComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileGalleryComponent_div_1_Template, 1, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProfileGalleryComponent_ng_container_2_Template, 3, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProfileGalleryComponent_ng_template_3_Template, 1, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProfileGalleryComponent_ng_template_5_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.title !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.description !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.groupBy)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _profile_item_profile_item_component__WEBPACK_IMPORTED_MODULE_1__.ProfileItemComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.KeyValuePipe], styles: ["[_nghost-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n[_nghost-%COMP%]   .profile-group[_ngcontent-%COMP%] {\n  margin-bottom: 4.5rem;\n}\n[_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 30%;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n    width: 48%;\n  }\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTRTtFQUNFLG1CQUFBO0FBUko7QUFXRTtFQUNFLHFCQUFBO0FBVEo7QUFXRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQVRKO0FBV0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUFUTjtBQVdNO0VBTkY7SUFPSSxVQUFBO0VBUk47QUFDRjtBQVVNO0VBVkY7SUFXSSxXQUFBO0VBUE47QUFDRiIsImZpbGUiOiJwcm9maWxlLWdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZGVza3RvcDogMTI0OHB4O1xuJHRhYmxldDogOTYwcHg7XG4kbW9iaWxlOiA2NDBweDtcblxuOmhvc3Qge1xuICAudGl0bGUge1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cblxuICAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cblxuICAucHJvZmlsZS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNC41cmVtO1xuICB9XG4gIC5wcm9maWxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAucHJvZmlsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcbiAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 1215:
/*!**********************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/profile-gallery/profile-gallery.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileGalleryModule": () => (/* binding */ ProfileGalleryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _profile_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-gallery.component */ 2466);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _profile_item_profile_item_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile-item/profile-item.module */ 3104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





class ProfileGalleryModule {
}
ProfileGalleryModule.ɵfac = function ProfileGalleryModule_Factory(t) { return new (t || ProfileGalleryModule)(); };
ProfileGalleryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfileGalleryModule });
ProfileGalleryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownModule,
            _profile_item_profile_item_module__WEBPACK_IMPORTED_MODULE_1__.ProfileItemModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileGalleryModule, { declarations: [_profile_gallery_component__WEBPACK_IMPORTED_MODULE_0__.ProfileGalleryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownModule,
        _profile_item_profile_item_module__WEBPACK_IMPORTED_MODULE_1__.ProfileItemModule], exports: [_profile_gallery_component__WEBPACK_IMPORTED_MODULE_0__.ProfileGalleryComponent] }); })();


/***/ }),

/***/ 4277:
/*!*******************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/profile-item/profile-item.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileItemComponent": () => (/* binding */ ProfileItemComponent)
/* harmony export */ });
/* harmony import */ var _constants_content_trigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/content-trigger */ 3972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/breakpoint.directive */ 8355);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ 8379);





function ProfileItemComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.profile.affiliation, " ");
} }
function ProfileItemComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r2.fullContent);
} }
function ProfileItemComponent_div_11_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 15);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r4.partialContent);
} }
function ProfileItemComponent_div_11_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 11);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@contentTrigger", undefined)("data", ctx_r5.fullContent);
} }
function ProfileItemComponent_div_11_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileItemComponent_div_11_div_2_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r7.fullContentVisible = !ctx_r7.fullContentVisible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.fullContentVisible ? "Show less" : "Read more...", " ");
} }
function ProfileItemComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileItemComponent_div_11_div_2_div_1_Template, 1, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProfileItemComponent_div_11_div_2_div_2_Template, 1, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProfileItemComponent_div_11_div_2_div_3_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.fullContentVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.fullContentVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.hasLongContent);
} }
function ProfileItemComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileItemComponent_div_11_div_1_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProfileItemComponent_div_11_div_2_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sciBreakpoint", "mobile-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sciBreakpoint", "mobile+");
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
    get curatorText() {
        return this.profile.roles.filter((role) => role.includes('curator')).join(' ,');
    }
    /** Profile content - truncated if necessary */
    get partialContent() {
        const { fullContent, maxContentLength } = this;
        return `${fullContent.slice(0, maxContentLength)} ${this.hasLongContent ? '...' : ''}`;
    }
}
ProfileItemComponent.ɵfac = function ProfileItemComponent_Factory(t) { return new (t || ProfileItemComponent)(); };
ProfileItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileItemComponent, selectors: [["sci-profile-item"]], inputs: { profile: "profile", compact: "compact" }, decls: 12, vars: 9, consts: [[1, "profile-item"], [1, "profile-image", 3, "src", "alt"], [1, "profile-about"], [1, "profile-name"], [1, "profile-curator"], [1, "profile-title"], ["class", "profile-affiliation", 4, "ngIf"], ["class", "profile-body", 4, "ngIf"], [1, "profile-affiliation"], [1, "profile-body"], [4, "sciBreakpoint"], ["markdown", "", 1, "markdown", "full", 3, "data"], ["class", "markdown partial", "markdown", "", 3, "data", 4, "ngIf"], ["class", "markdown full", "markdown", "", 3, "data", 4, "ngIf"], ["class", "show-more", 3, "click", 4, "ngIf"], ["markdown", "", 1, "markdown", "partial", 3, "data"], [1, "show-more", 3, "click"]], template: function ProfileItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProfileItemComponent_div_10_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ProfileItemComponent_div_11_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.profile.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx.profile.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.profile.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 7, ctx.curatorText));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.profile.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.compact === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.compact === false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_1__.BreakpointDirective, ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe], styles: ["[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%] {\n  height: 6rem;\n  width: auto;\n}\n[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-about[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-left: 1rem;\n  flex-grow: 2;\n}\n[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-about[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%], [_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-about[_ngcontent-%COMP%]   .profile-affiliation[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-about[_ngcontent-%COMP%]   .profile-curator[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  font-style: italic;\n}\n[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-about[_ngcontent-%COMP%]   .profile-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  font-style: italic;\n}\n[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-body[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%] {\n  color: #8dc63f;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-body[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n[_nghost-%COMP%]   .profile-item[_ngcontent-%COMP%]   .profile-body[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNRTtFQUNFLGFBQUE7QUFMSjtBQU9JO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFMTjtBQVFJO0VBQ0UsaUJBQUE7QUFOTjtBQVNJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVBOO0FBU007O0VBRUUsc0JBQUE7QUFQUjtBQVNNO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQVBSO0FBU007RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBUFI7QUFhTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBWFI7QUFZUTtFQUNFLDBCQUFBO0FBVlY7QUFhTTtFQUNFLGdCQUFBO0FBWFIiLCJmaWxlIjoicHJvZmlsZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRlc2t0b3A6IDEyNDhweDtcbiR0YWJsZXQ6IDk2MHB4O1xuJG1vYmlsZTogNjQwcHg7XG4kc2luZ2xlLWNvbHVtbi1tYXgtd2lkdGg6IDY0MHB4O1xuXG46aG9zdCB7XG4gIC5wcm9maWxlLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG4gICAgLnByb2ZpbGUtaW1hZ2Uge1xuICAgICAgaGVpZ2h0OiA2cmVtO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuXG4gICAgLnByb2ZpbGUtbmFtZSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAucHJvZmlsZS1hYm91dCB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgZmxleC1ncm93OiAyO1xuXG4gICAgICAucHJvZmlsZS1uYW1lLFxuICAgICAgLnByb2ZpbGUtYWZmaWxpYXRpb24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgICAgfVxuICAgICAgLnByb2ZpbGUtY3VyYXRvciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIH1cbiAgICAgIC5wcm9maWxlLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9maWxlLWJvZHkge1xuXG4gICAgICAuc2hvdy1tb3JlIHtcbiAgICAgICAgY29sb3I6ICM4ZGM2M2Y7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5mdWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [
            _constants_content_trigger__WEBPACK_IMPORTED_MODULE_0__.contentTrigger
        ] } });


/***/ }),

/***/ 3104:
/*!****************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/profile-item/profile-item.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileItemModule": () => (/* binding */ ProfileItemModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _profile_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-item.component */ 4277);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared.module */ 3687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





class ProfileItemModule {
}
ProfileItemModule.ɵfac = function ProfileItemModule_Factory(t) { return new (t || ProfileItemModule)(); };
ProfileItemModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfileItemModule });
ProfileItemModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownModule,
            _shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileItemModule, { declarations: [_profile_item_component__WEBPACK_IMPORTED_MODULE_0__.ProfileItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownModule,
        _shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule], exports: [_profile_item_component__WEBPACK_IMPORTED_MODULE_0__.ProfileItemComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_scimaps_src_app_pages_about_about_module_ts.js.map