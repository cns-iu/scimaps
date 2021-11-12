(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~blogs-blogs-module~pages-blogs-blogs-module"],{

/***/ "RdVG":
/*!************************************************!*\
  !*** ./src/app/pages/blogs/blogs.component.ts ***!
  \************************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/drawer.animations */ "AY0P");
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/utils */ "fNWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.component */ "IMSB");
/* harmony import */ var _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.component */ "StKz");
/* harmony import */ var _shared_components_blog_tile_blog_tile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/blog-tile/blog-tile.component */ "vg4D");









function BlogsComponent_sci_drawer_0_sci_blog_tile_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sci-blog-tile", 7);
} if (rf & 2) {
    const blog_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blog", blog_r2);
} }
function BlogsComponent_sci_drawer_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-drawer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sci-drawer-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backClick", function BlogsComponent_sci_drawer_0_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BlogsComponent_sci_drawer_0_sci_blog_tile_5_Template, 1, 1, "sci-blog-tile", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@drawerInOut", ctx_r0.showDrawer ? "show" : "hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.blogs);
} }
class BlogsComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.blogs = [];
        this.showDrawer = false;
    }
    ngOnInit() {
        const snapshot = this.activatedRoute.snapshot;
        const { blogs } = snapshot.data;
        if (Array.isArray(blogs) && blogs.length) {
            this.blogs = blogs;
        }
        this.showDrawer = true;
    }
    goBack() {
        this.showDrawer = false;
        setTimeout(() => {
            this.router.navigate(['/', 'learning-center']);
        }, 500);
    }
    gotoBlog(index) {
        const blog = this.blogs[index];
        const [year, month, date] = Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["getSegmentedDate"])(blog.date);
        this.router.navigate(['/', 'learning-center', 'blogs', year, `${month}-${date}`, blog.slug]);
    }
}
BlogsComponent.ɵfac = function BlogsComponent_Factory(t) { return new (t || BlogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
BlogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogsComponent, selectors: [["sci-blogs"]], decls: 2, vars: 1, consts: [["class", "sci-drawer", 4, "ngIf"], [1, "sci-drawer"], ["drawer", "", 1, "drawer-container"], ["title", "Blog Posts", "backText", "Back", 3, "backClick"], [1, "drawer-content"], [1, "blogs-row"], ["class", "col-4", 3, "blog", 4, "ngFor", "ngForOf"], [1, "col-4", 3, "blog"]], template: function BlogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlogsComponent_sci_drawer_0_Template, 6, 2, "sci-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDrawer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_5__["DrawerComponent"], _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_6__["DrawerHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_components_blog_tile_blog_tile_component__WEBPACK_IMPORTED_MODULE_7__["BlogTileComponent"]], styles: ["[_nghost-%COMP%]   .blogs-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9ibG9ncy9ibG9ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFGUiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvcGFnZXMvYmxvZ3MvYmxvZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGluZy9icmVha3BvaW50c1wiO1xuXG46aG9zdCB7XG4gICAgLmJsb2dzLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIH1cbn0iXX0= */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-blogs',
                templateUrl: './blogs.component.html',
                styleUrls: ['./blogs.component.scss'],
                animations: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "UZGi":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/blog/blog-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");




const routes = [];
class BlogRoutingModule {
}
BlogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogRoutingModule });
BlogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogRoutingModule_Factory(t) { return new (t || BlogRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Yyrv":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/blog/blog.component.ts ***!
  \**********************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/drawer.animations */ "AY0P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drawer/drawer.component */ "IMSB");
/* harmony import */ var _drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../drawer-header/drawer-header.component */ "StKz");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../carousel/carousel.component */ "4Isi");
/* harmony import */ var _carousel_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../carousel/item.component */ "IV5s");
/* harmony import */ var _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directives/breakpoint.directive */ "EpdQ");











function BlogComponent_sci_drawer_0_sci_carousel_item_14_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r3 = ctx_r7.index;
    const image_r2 = ctx_r7.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("alt", "Image #", i_r3, " for book ", ctx_r4.blog == null ? null : ctx_r4.blog.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r2.sm, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BlogComponent_sci_drawer_0_sci_carousel_item_14_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r3 = ctx_r8.index;
    const image_r2 = ctx_r8.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("alt", "Image #", i_r3, " for book ", ctx_r6.blog == null ? null : ctx_r6.blog.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r2.lg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BlogComponent_sci_drawer_0_sci_carousel_item_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-carousel-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlogComponent_sci_drawer_0_sci_carousel_item_14_ng_container_2_Template, 2, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlogComponent_sci_drawer_0_sci_carousel_item_14_ng_template_3_Template, 1, 3, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sciBreakpoint", "mobile-")("sciBreakpointElse", _r5);
} }
function BlogComponent_sci_drawer_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-drawer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sci-drawer-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backClick", function BlogComponent_sci_drawer_0_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "sci-carousel", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BlogComponent_sci_drawer_0_sci_carousel_item_14_Template, 5, 2, "sci-carousel-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@drawerInOut", ctx_r0.showDrawer ? "show" : "hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.blog == null ? null : ctx_r0.blog.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 5, ctx_r0.blog == null ? null : ctx_r0.blog.date, "mediumDate", "+0000"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.blog == null ? null : ctx_r0.blog.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.blog == null ? null : ctx_r0.blog.blogImages);
} }
class BlogComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.showDrawer = false;
    }
    ngOnInit() {
        this.showDrawer = true;
        const { blog } = this.route.snapshot.data;
        if (blog) {
            this.blog = blog;
        }
    }
    goBack() {
        this.showDrawer = false;
        setTimeout(() => {
            this.router.navigate(['/', 'learning-center', 'blogs']);
        }, 500);
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["sci-blog"]], decls: 1, vars: 1, consts: [["class", "sci-drawer", 4, "ngIf"], [1, "sci-drawer"], ["drawer", "", 1, "drawer-container"], ["title", "Blog", "backText", "Back", 3, "backClick"], [1, "drawer-contet"], [1, "row"], [1, "text-column"], [1, "title"], [1, "date"], ["markdown", "", 1, "body", 3, "data"], [1, "carousel-column"], [1, "carousel"], [4, "ngFor", "ngForOf"], [1, "carousel-item"], [4, "sciBreakpoint", "sciBreakpointElse"], ["desktop", ""], [1, "carousel-image", 3, "src", "alt"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlogComponent_sci_drawer_0_Template, 15, 9, "sci-drawer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDrawer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_4__["DrawerComponent"], _drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_5__["DrawerHeaderComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _carousel_item_component__WEBPACK_IMPORTED_MODULE_8__["CarouselItemComponent"], _directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_9__["BreakpointDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["[_nghost-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: \"row\";\n  width: 100%;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%], [_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n  width: 50%;\n  max-width: 600px;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%] {\n  padding-right: 3rem;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .text-column[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  [_nghost-%COMP%]   .text-column[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-right: 0;\n  }\n  [_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 1rem;\n  }\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .carousel-column[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20rem;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBRko7QUFLRTs7RUFFRSxVQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQU1FO0VBQ0UsbUJBQUE7QUFKSjtBQUtJO0VBQ0UsbUJBQUE7QUFITjtBQUtJO0VBQ0UsbUJBQUE7QUFITjtBQU9FO0VBRUU7SUFDSSw4QkFBQTtFQU5OO0VBVUU7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUFSSjtFQVVFO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0VBUko7QUFDRjtBQVdFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBVEo7QUFVSTtFQUNFLFdBQUE7QUFSTjtBQVNNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBUFI7QUFRUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7QUFQViIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxpbmcvYnJlYWtwb2ludHNcIjtcblxuOmhvc3Qge1xuICAucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBcInJvd1wiO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnRleHQtY29sdW1uLFxuICAuY2Fyb3VzZWwtY29sdW1uIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cblxuICAudGV4dC1jb2x1bW4ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG4gICAgLmRhdGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gICAgLnRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICBcbiAgICAucm93IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIH1cbiAgICBcblxuICAgIC50ZXh0LWNvbHVtbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5jYXJvdXNlbC1jb2x1bW4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIC5jYXJvdXNlbC1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgLmNhcm91c2VsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMjByZW07XG4gICAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.scss'],
                animations: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "j+3n":
/*!*********************************************!*\
  !*** ./src/app/pages/blogs/blogs.module.ts ***!
  \*********************************************/
/*! exports provided: BlogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsModule", function() { return BlogsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_components_blog_tile_blog_tile_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/blog-tile/blog-tile.module */ "m3eH");
/* harmony import */ var _shared_components_blog_blog_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/blog/blog.module */ "pbtz");
/* harmony import */ var _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.module */ "4FRl");
/* harmony import */ var _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.module */ "t1/B");
/* harmony import */ var _blogs_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blogs-routing.module */ "kqNs");
/* harmony import */ var _blogs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blogs.component */ "RdVG");









class BlogsModule {
}
BlogsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BlogsModule });
BlogsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BlogsModule_Factory(t) { return new (t || BlogsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _blogs_routing_module__WEBPACK_IMPORTED_MODULE_6__["BlogsRoutingModule"],
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__["DrawerModule"],
            _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_4__["DrawerHeaderModule"],
            _shared_components_blog_blog_module__WEBPACK_IMPORTED_MODULE_3__["BlogModule"],
            _shared_components_blog_tile_blog_tile_module__WEBPACK_IMPORTED_MODULE_2__["BlogTileModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlogsModule, { declarations: [_blogs_component__WEBPACK_IMPORTED_MODULE_7__["BlogsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _blogs_routing_module__WEBPACK_IMPORTED_MODULE_6__["BlogsRoutingModule"],
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__["DrawerModule"],
        _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_4__["DrawerHeaderModule"],
        _shared_components_blog_blog_module__WEBPACK_IMPORTED_MODULE_3__["BlogModule"],
        _shared_components_blog_tile_blog_tile_module__WEBPACK_IMPORTED_MODULE_2__["BlogTileModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlogsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_blogs_component__WEBPACK_IMPORTED_MODULE_7__["BlogsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _blogs_routing_module__WEBPACK_IMPORTED_MODULE_6__["BlogsRoutingModule"],
                    _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__["DrawerModule"],
                    _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_4__["DrawerHeaderModule"],
                    _shared_components_blog_blog_module__WEBPACK_IMPORTED_MODULE_3__["BlogModule"],
                    _shared_components_blog_tile_blog_tile_module__WEBPACK_IMPORTED_MODULE_2__["BlogTileModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "kqNs":
/*!*****************************************************!*\
  !*** ./src/app/pages/blogs/blogs-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BlogsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsRoutingModule", function() { return BlogsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_components_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/blog/blog.component */ "Yyrv");
/* harmony import */ var _blog_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-resolver.service */ "+kgp");
/* harmony import */ var _blogs_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blogs-resolver.service */ "Lbdk");
/* harmony import */ var _blogs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blogs.component */ "RdVG");








const routes = [
    {
        path: '',
        component: _blogs_component__WEBPACK_IMPORTED_MODULE_5__["BlogsComponent"],
        resolve: {
            blogs: _blogs_resolver_service__WEBPACK_IMPORTED_MODULE_4__["BlogsResolverService"]
        },
        children: [
            {
                path: ':year/:month/:slug',
                component: _shared_components_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"],
                resolve: {
                    blog: _blog_resolver_service__WEBPACK_IMPORTED_MODULE_3__["BlogResolverService"]
                }
            }
        ]
    }
];
class BlogsRoutingModule {
}
BlogsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogsRoutingModule });
BlogsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogsRoutingModule_Factory(t) { return new (t || BlogsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "pbtz":
/*!*******************************************************!*\
  !*** ./src/app/shared/components/blog/blog.module.ts ***!
  \*******************************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "PCNd");
/* harmony import */ var _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../carousel/carousel.module */ "8yKn");
/* harmony import */ var _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../drawer-header/drawer-header.module */ "4FRl");
/* harmony import */ var _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../drawer/drawer.module */ "t1/B");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog-routing.module */ "UZGi");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog.component */ "Yyrv");










class BlogModule {
}
BlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BlogModule });
BlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BlogModule_Factory(t) { return new (t || BlogModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _blog_routing_module__WEBPACK_IMPORTED_MODULE_7__["BlogRoutingModule"],
            _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_6__["DrawerModule"],
            _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_5__["DrawerHeaderModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlogModule, { declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _blog_routing_module__WEBPACK_IMPORTED_MODULE_7__["BlogRoutingModule"],
        _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_6__["DrawerModule"],
        _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_5__["DrawerHeaderModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
        _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]], exports: [_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _blog_routing_module__WEBPACK_IMPORTED_MODULE_7__["BlogRoutingModule"],
                    _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_6__["DrawerModule"],
                    _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_5__["DrawerHeaderModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
                    _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]
                ],
                exports: [_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~blogs-blogs-module~pages-blogs-blogs-module.js.map