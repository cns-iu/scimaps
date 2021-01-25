(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-macroscopes-macroscopes-module"],{

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
        }
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









class MacroscopesModule {
}
MacroscopesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MacroscopesModule });
MacroscopesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MacroscopesModule_Factory(t) { return new (t || MacroscopesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_3__["MacroscopesRoutingModule"],
            _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_5__["DiscoverListingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
            _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MacroscopesModule, { declarations: [_macroscopes_component__WEBPACK_IMPORTED_MODULE_4__["MacroscopesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _macroscopes_routing_module__WEBPACK_IMPORTED_MODULE_3__["MacroscopesRoutingModule"],
        _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_5__["DiscoverListingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
        _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"]] }); })();
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
                    _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"]
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
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");





class MacroscopesBodyResolverService {
    constructor(content, router) {
        this.content = content;
        this.router = router;
    }
    resolve(route, state) {
        return this.content.getContent('site/whatIsAMacroscope.md').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
}
MacroscopesBodyResolverService.ɵfac = function MacroscopesBodyResolverService_Factory(t) { return new (t || MacroscopesBodyResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MacroscopesBodyResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MacroscopesBodyResolverService, factory: MacroscopesBodyResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopesBodyResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _shared_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/carousel/carousel.component */ "4Isi");
/* harmony import */ var _shared_components_carousel_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/carousel/item.component */ "IV5s");
/* harmony import */ var _shared_components_discover_listing_discover_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/discover-listing/discover-listing.component */ "0zur");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");









function MacroscopesComponent_div_2_sci_carousel_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-carousel-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carouselItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", carouselItem_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", carouselItem_r6.image.split("/")[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](carouselItem_r6.title);
} }
function MacroscopesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "sci-carousel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MacroscopesComponent_div_2_sci_carousel_item_4_Template, 5, 3, "sci-carousel-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.highlightBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.highlightCarouselItems);
} }
function MacroscopesComponent_sci_discover_listing_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sci-discover-listing", 15);
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("discoverItem", item_r7)("type", "macroscopes");
} }
function MacroscopesComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MacroscopesComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.showMoreMacroscopes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show More Macroscopes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MacroscopesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MacroscopesComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.showModal = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Discover Macroscopes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MacroscopesComponent_div_6_sci_carousel_item_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-carousel-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "sci-discover-listing", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const discoverItem_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("discoverItem", discoverItem_r13)("type", "macroscopes");
} }
function MacroscopesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MacroscopesComponent_div_6_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.showModal = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Macroscopes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "sci-carousel", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MacroscopesComponent_div_6_sci_carousel_item_8_Template, 2, 2, "sci-carousel-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.discoverItems);
} }
class MacroscopesComponent {
    constructor(route) {
        this.route = route;
        /** HTML class name */
        this.clsName = 'sci-macroscopes';
        this.showModal = false;
        this.itemsToDisplay = 3;
        this.highlightBody = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo. Pellentesque ultrices blandit diam quis pretium. Suspendisse ut ante in enim consequat semper id consectetur arcu. Proin ultricies vestibulum nulla sit amet.';
        this.discoverItems = [
            {
                title: 'XV: macroscopes for Tracking the Flow of Resources (2019)',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
                thumbnails: [
                    {
                        title: 'Refugee Flow',
                        link: 'www.google.com',
                        image: 'image1.png'
                    },
                    {
                        title: 'Politoscope',
                        link: 'www.google.com',
                        image: 'image2.png'
                    },
                    {
                        title: 'Income Disparity',
                        link: 'www.google.com',
                        image: 'image3.png'
                    },
                    {
                        title: 'Making Sense of Skills',
                        link: 'www.google.com',
                        image: 'image4.png'
                    }
                ],
                slug: 'macroscopes-2019',
                directory: 'macroscopes'
            },
            {
                title: 'XV: macroscopes for Tracking the Flow of Resources (2019)',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
                thumbnails: [
                    {
                        title: 'Refugee Flow',
                        link: 'www.google.com',
                        image: 'image1.png'
                    },
                    {
                        title: 'Politoscope',
                        link: 'www.google.com',
                        image: 'image2.png'
                    },
                    {
                        title: 'Income Disparity',
                        link: 'www.google.com',
                        image: 'image3.png'
                    },
                    {
                        title: 'Making Sense of Skills',
                        link: 'www.google.com',
                        image: 'image4.png'
                    }
                ],
                slug: 'macroscopes-2019',
                directory: 'macroscopes'
            },
            {
                title: 'XV: macroscopes for Tracking the Flow of Resources (2019)',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
                thumbnails: [
                    {
                        title: 'Refugee Flow',
                        link: 'www.google.com',
                        image: 'image1.png'
                    },
                    {
                        title: 'Politoscope',
                        link: 'www.google.com',
                        image: 'image2.png'
                    },
                    {
                        title: 'Income Disparity',
                        link: 'www.google.com',
                        image: 'image3.png'
                    },
                    {
                        title: 'Making Sense of Skills',
                        link: 'www.google.com',
                        image: 'image4.png'
                    }
                ],
                slug: 'macroscopes-2019',
                directory: 'macroscopes'
            },
            {
                title: 'XV: macroscopes for Tracking the Flow of Resources (2019)',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
                thumbnails: [
                    {
                        title: 'Refugee Flow',
                        link: 'www.google.com',
                        image: 'image1.png'
                    },
                    {
                        title: 'Politoscope',
                        link: 'www.google.com',
                        image: 'image2.png'
                    },
                    {
                        title: 'Income Disparity',
                        link: 'www.google.com',
                        image: 'image3.png'
                    },
                    {
                        title: 'Making Sense of Skills',
                        link: 'www.google.com',
                        image: 'image4.png'
                    }
                ],
                slug: 'macroscopes-2019',
                directory: 'macroscopes'
            },
            {
                title: 'XV: macroscopes for Tracking the Flow of Resources (2019)',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
                thumbnails: [
                    {
                        title: 'Refugee Flow',
                        link: 'www.google.com',
                        image: 'image1.png'
                    },
                    {
                        title: 'Politoscope',
                        link: 'www.google.com',
                        image: 'image2.png'
                    },
                    {
                        title: 'Income Disparity',
                        link: 'www.google.com',
                        image: 'image3.png'
                    },
                    {
                        title: 'Making Sense of Skills',
                        link: 'www.google.com',
                        image: 'image4.png'
                    }
                ],
                slug: 'macroscopes-2019',
                directory: 'macroscopes'
            }
        ];
        this.displayItems = [];
        this.highlightCarouselItems = [
            {
                image: 'assets/macroscopes/highlight/image1.png',
                title: 'The macroscopic scale is the length scale on which objects or phenomena are large enough to be visible with the naked eye, without magnifying optical instruments.  It is the opposite of microscopic.',
                link: 'www.google.com'
            },
            {
                image: 'assets/macroscopes/highlight/image1.png',
                title: 'The macroscopic scale is the length scale on which objects or phenomena are large enough to be visible with the naked eye, without magnifying optical instruments.  It is the opposite of microscopic.',
                link: 'www.google.com'
            },
            {
                image: 'assets/macroscopes/highlight/image1.png',
                title: 'The macroscopic scale is the length scale on which objects or phenomena are large enough to be visible with the naked eye, without magnifying optical instruments.  It is the opposite of microscopic.',
                link: 'www.google.com'
            },
            {
                image: 'assets/macroscopes/highlight/image1.png',
                title: 'The macroscopic scale is the length scale on which objects or phenomena are large enough to be visible with the naked eye, without magnifying optical instruments.  It is the opposite of microscopic.',
                link: 'www.google.com'
            }
        ];
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.highlightBody = data.body.body;
            this.discoverItems = data.macroscopes;
            this.highlightCarouselItems = this.discoverItems
                .reduce((acc, item) => {
                const thumbs = item.thumbnails;
                const randomThumbnailIndex = Math.round(Math.random() * (thumbs.length - 1));
                return acc.concat(thumbs[randomThumbnailIndex]);
            }, []);
            this.updateDisplayItems();
        });
    }
    updateDisplayItems() {
        const items = [...this.discoverItems];
        this.displayItems = items.splice(0, this.itemsToDisplay);
    }
    moreMacroscopes() {
        return this.itemsToDisplay < this.discoverItems.length;
    }
    showMoreMacroscopes() {
        this.itemsToDisplay = this.itemsToDisplay + 3;
        this.updateDisplayItems();
    }
}
MacroscopesComponent.ɵfac = function MacroscopesComponent_Factory(t) { return new (t || MacroscopesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
MacroscopesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MacroscopesComponent, selectors: [["sci-macroscopes"]], hostVars: 2, hostBindings: function MacroscopesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 7, vars: 5, consts: [[1, "header"], ["class", "highlight-content", 4, "ngIf"], ["class", "discover-item", 3, "discoverItem", "type", 4, "ngFor", "ngForOf"], ["class", "more-button", 3, "click", 4, "ngIf"], ["class", "mobile-button", 3, "click", 4, "ngIf"], ["class", "fullscreen-modal", 4, "ngIf"], [1, "highlight-content"], ["markdown", "", 1, "highlight-body", 3, "data"], [1, "carousel-container"], [1, "carousel"], ["class", "sci-carousel-item", 4, "ngFor", "ngForOf"], [1, "sci-carousel-item"], [1, "carousel-item"], [1, "carousel-image", 3, "src", "alt"], [1, "carousel-image-title"], [1, "discover-item", 3, "discoverItem", "type"], [1, "more-button", 3, "click"], [1, "mobile-button", 3, "click"], [1, "mobile-icon"], [1, "fullscreen-modal"], [1, "modal-header"], [1, "mobile-icon", 3, "click"], [1, "mobile-title"], [1, "macroscopes-carousel"], ["class", "mobile-carousel", 4, "ngFor", "ngForOf"], [1, "mobile-carousel"], [3, "discoverItem", "type"]], template: function MacroscopesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Macroscopes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MacroscopesComponent_div_2_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MacroscopesComponent_sci_discover_listing_3_Template, 1, 2, "sci-discover-listing", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MacroscopesComponent_button_4_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MacroscopesComponent_div_5_Template, 4, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MacroscopesComponent_div_6_Template, 9, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moreMacroscopes());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showModal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"], _shared_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _shared_components_carousel_item_component__WEBPACK_IMPORTED_MODULE_5__["CarouselItemComponent"], _shared_components_discover_listing_discover_listing_component__WEBPACK_IMPORTED_MODULE_6__["DiscoverListingComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: ["@media (max-width: 640px) {\n    .swiper-button-prev,   .swiper-button-next {\n    background-color: rgba(0, 0, 0, 0.75);\n    border-radius: 50%;\n    padding: 1.5rem;\n    top: 50% !important;\n  }\n    .swiper-button-prev::after,   .swiper-button-next::after {\n    color: white !important;\n  }\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding-bottom: 2rem;\n  margin-bottom: 2rem;\n}\n\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    border: none;\n  }\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .highlight-body[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-right: 1rem;\n}\n\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .highlight-body[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0rem;\n  }\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 50%;\n}\n\n@media (max-width: 960px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0rem;\n    margin-bottom: 1rem;\n  }\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .carousel-image[_ngcontent-%COMP%] {\n  height: 20rem;\n  object-fit: cover;\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .carousel-image-title[_ngcontent-%COMP%] {\n  padding: 1rem;\n  height: 3.75rem;\n}\n\n[_nghost-%COMP%]   .discover-item[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .discover-item[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n[_nghost-%COMP%]   .more-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 2rem;\n  height: 2.5rem;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .more-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n[_nghost-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.75rem;\n  font-size: 1rem;\n  cursor: pointer;\n  margin-bottom: 2rem;\n}\n\n[_nghost-%COMP%]   .mobile-button[_ngcontent-%COMP%]   .mobile-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  height: 1.5rem;\n  width: 1.5rem;\n  cursor: pointer;\n}\n\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n[_nghost-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  z-index: 5;\n  width: 100vw;\n  height: 100vh;\n  padding: 1rem;\n}\n\n[_nghost-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n\n[_nghost-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mobile-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mobile-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mobile-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9tYWNyb3Njb3Blcy9tYWNyb3Njb3Blcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLRTtFQUNFO0lBQ0UscUNBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQUpKO0VBT0U7SUFDRSx1QkFBQTtFQUxKO0FBQ0Y7O0FBVUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVNJO0VBUEY7SUFRSSw4QkFBQTtJQUNBLFlBQUE7RUFOSjtBQUNGOztBQVFJO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBTk47O0FBUU07RUFKRjtJQUtJLFdBQUE7SUFDQSxhQUFBO0VBTE47QUFDRjs7QUFRSTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUFOTjs7QUFRTTtFQUxGO0lBTUksV0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtFQUxOO0FBQ0Y7O0FBT007RUFDRSxXQUFBO0FBTFI7O0FBUVU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFOWjs7QUFRWTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQU5kOztBQVNZO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFQZDs7QUFnQkU7RUFDRSxtQkFBQTtBQWRKOztBQWdCSTtFQUhGO0lBSUksYUFBQTtFQWJKO0FBQ0Y7O0FBZ0JFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBZEo7O0FBZ0JJO0VBUEY7SUFRSSxhQUFBO0VBYko7QUFDRjs7QUFnQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBZEo7O0FBZ0JJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFkTjs7QUFpQkk7RUFoQkY7SUFpQkksYUFBQTtFQWRKO0FBQ0Y7O0FBaUJFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQWZKOztBQWlCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBZk47O0FBaUJNO0VBQ0UsZUFBQTtBQWZSOztBQWtCTTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFoQlI7O0FBa0JRO0VBQ0UsOEJBQUE7QUFoQlYiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3BhZ2VzL21hY3Jvc2NvcGVzL21hY3Jvc2NvcGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRlc2t0b3A6IDEyNDhweDtcbiR0YWJsZXQ6IDk2MHB4O1xuJG1vYmlsZTogNjQwcHg7XG5cbjo6bmctZGVlcCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgLnN3aXBlci1idXR0b24tcHJldiwgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgdG9wOiA1MCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2OjphZnRlciwgLnN3aXBlci1idXR0b24tbmV4dDo6YWZ0ZXIge1xuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbjpob3N0IHtcbiAgLmhpZ2hsaWdodC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuXG4gICAgLmhpZ2hsaWdodC1ib2R5IHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMHJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2Fyb3VzZWwtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIHdpZHRoOiA1MCU7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAuY2Fyb3VzZWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAuc2NpLWNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAuY2Fyb3VzZWwtaW1hZ2Uge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwcmVtO1xuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC5jYXJvdXNlbC1pbWFnZS10aXRsZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICAgIGhlaWdodDogMy43NXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5kaXNjb3Zlci1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1vcmUtYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubW9iaWxlLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgICAubW9iaWxlLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmZ1bGxzY3JlZW4tbW9kYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogNTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcblxuICAgICAgLm1vYmlsZS1pY29uIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAubW9iaWxlLXRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-macroscopes',
                templateUrl: './macroscopes.component.html',
                styleUrls: ['./macroscopes.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "n4Jh":
/*!*******************************************************************!*\
  !*** ./src/app/pages/macroscopes/macroscopes-resolver.service.ts ***!
  \*******************************************************************/
/*! exports provided: MacroscopesResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroscopesResolverService", function() { return MacroscopesResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");





class MacroscopesResolverService {
    constructor(content, router) {
        this.content = content;
        this.router = router;
    }
    resolve(route, state) {
        return this.content.getIndex('app-macroscopes').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
}
MacroscopesResolverService.ɵfac = function MacroscopesResolverService_Factory(t) { return new (t || MacroscopesResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MacroscopesResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MacroscopesResolverService, factory: MacroscopesResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopesResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-macroscopes-macroscopes-module.js.map