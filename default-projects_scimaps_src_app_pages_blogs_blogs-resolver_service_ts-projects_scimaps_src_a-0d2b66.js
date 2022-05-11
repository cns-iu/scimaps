"use strict";
(self["webpackChunkscimaps"] = self["webpackChunkscimaps"] || []).push([["default-projects_scimaps_src_app_pages_blogs_blogs-resolver_service_ts-projects_scimaps_src_a-0d2b66"],{

/***/ 2700:
/*!***********************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/blogs/blog-resolver.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBlogImageSource": () => (/* binding */ getBlogImageSource),
/* harmony export */   "toBlog": () => (/* binding */ toBlog),
/* harmony export */   "BlogResolverService": () => (/* binding */ BlogResolverService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/utils */ 9298);
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);





const getBlogImageSource = (blog, directory = '') => {
    const [year, month, date] = (0,_constants_utils__WEBPACK_IMPORTED_MODULE_0__.getSegmentedDate)(blog.date);
    const slug = (0,_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__.toSlug)(blog.title);
    let result = [];
    if (Array.isArray(blog.blogImages) && blog.blogImages.length) {
        result = blog.blogImages.map((image) => {
            let sm = image.sm;
            let lg = image.lg;
            if (!(0,_constants_utils__WEBPACK_IMPORTED_MODULE_0__.isHttp)(image.sm)) {
                sm = `${directory}/${year}/${month}-${date}/${slug}/${image.sm}`;
            }
            if (!(0,_constants_utils__WEBPACK_IMPORTED_MODULE_0__.isHttp)(image.lg)) {
                lg = `${directory}/${year}/${month}-${date}/${slug}/${image.lg}`;
            }
            return { sm, lg };
        });
    }
    return result;
};
const toBlog = (blogItem, directory = '') => {
    const blog = {
        publish_date: blogItem.publish_date,
        title: blogItem.title,
        date: blogItem.date,
        published: blogItem.published,
        body: blogItem.body,
        blogImages: blogItem.blogImages,
        slug: (0,_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__.toSlug)(blogItem.title)
    };
    blog.blogImages = getBlogImageSource(blog, directory);
    return blog;
};
class BlogResolverService {
    constructor(contentService) {
        this.contentService = contentService;
        this.mdPath = '';
        this.directory = 'assets/content/blog';
    }
    resolve(route) {
        const { year, month, slug } = route.params;
        this.mdPath = `blog/${year}/${month}/${slug}/readme.md`;
        return this.getResult(this.mdPath);
    }
    getResult(mdPath) {
        return this.contentService.getContent(mdPath).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((blog) => toBlog(blog, this.directory)));
    }
}
BlogResolverService.ɵfac = function BlogResolverService_Factory(t) { return new (t || BlogResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService)); };
BlogResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: BlogResolverService, factory: BlogResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2878:
/*!************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/blogs/blogs-resolver.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogsResolverService": () => (/* binding */ BlogsResolverService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _blog_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-resolver.service */ 2700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);




class BlogsResolverService {
    constructor(contentService) {
        this.contentService = contentService;
        this.directory = 'assets/content/blog';
    }
    resolve(route) {
        const { blogsCount } = route.data;
        return this.contentService.getIndex('app-blogs').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((items) => {
            if (blogsCount && blogsCount > 0) {
                return items.slice(0, blogsCount);
            }
            else {
                return items;
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((items) => {
            return items.map((item) => (0,_blog_resolver_service__WEBPACK_IMPORTED_MODULE_0__.toBlog)(item, this.directory));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((items) => {
            return items.filter((item) => {
                const today = new Date();
                const todayUTC = Date.parse(today.toUTCString());
                const publishedDate = new Date(item.publish_date);
                publishedDate.setUTCHours(0, 0, 0, 0);
                const publishDateUTC = Date.parse(publishedDate.toUTCString());
                return todayUTC > publishDateUTC;
            });
        }));
    }
}
BlogsResolverService.ɵfac = function BlogsResolverService_Factory(t) { return new (t || BlogsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService)); };
BlogsResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BlogsResolverService, factory: BlogsResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7739:
/*!*************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/blog-tile/blog-tile.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogTileComponent": () => (/* binding */ BlogTileComponent)
/* harmony export */ });
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/utils */ 9298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);




function BlogTileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogTileComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.gotoBlog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.blog == null ? null : ctx_r0.blog.title);
} }
class BlogTileComponent {
    constructor(router) {
        this.router = router;
    }
    get thumbnail() {
        if (this.blog && this.blog.blogImages.length) {
            return this.blog.blogImages[0].sm;
        }
        else {
            return '';
        }
    }
    gotoBlog() {
        if (this.blog) {
            const [year, month, date] = (0,_constants_utils__WEBPACK_IMPORTED_MODULE_0__.getSegmentedDate)(this.blog.date);
            this.router.navigate(['/', 'learning-center', 'blogs', year, `${month}-${date}`, this.blog.slug]);
        }
    }
}
BlogTileComponent.ɵfac = function BlogTileComponent_Factory(t) { return new (t || BlogTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
BlogTileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BlogTileComponent, selectors: [["sci-blog-tile"]], inputs: { blog: "blog" }, decls: 1, vars: 1, consts: [[3, "click", 4, "ngIf"], [3, "click"], [1, "image-container"], ["alt", "Blog Thumbnail", 3, "src"], [1, "blog-title"]], template: function BlogTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BlogTileComponent_div_0_Template, 6, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.blog);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto 0 0;\n  cursor: pointer;\n}\n[_nghost-%COMP%]:hover {\n  opacity: 0.7;\n}\n[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 15rem;\n}\n[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: fill;\n}\n[_nghost-%COMP%]   .blog-title[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.col-3[_nghost-%COMP%] {\n  width: 30%;\n}\n@media screen and (max-width: 640px) {\n  .col-3[_nghost-%COMP%] {\n    width: 45%;\n  }\n}\n.col-4[_nghost-%COMP%] {\n  margin-bottom: 2rem;\n  margin-right: 1rem;\n}\n@media screen and (max-width: 640px) {\n  .col-4[_nghost-%COMP%] {\n    width: 95%;\n  }\n}\n@media screen and (min-width: 640px) and (max-width: 960px) {\n  .col-4[_nghost-%COMP%] {\n    width: 45%;\n  }\n}\n@media screen and (min-width: 960px) {\n  .col-4[_nghost-%COMP%] {\n    width: 30%;\n  }\n}\n@media screen and (min-width: 1248px) {\n  .col-4[_nghost-%COMP%] {\n    width: 22%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ctdGlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBSUEsZUFBQTtBQUpGO0FBQ0U7RUFDRSxZQUFBO0FBQ0o7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGdCQUFBO0FBQU47QUFHRTtFQUNFLGdCQUFBO0FBREo7QUFLQTtFQUNFLFVBQUE7QUFGRjtBQUdFO0VBRkY7SUFHSSxVQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUFGO0FBQ0U7RUFIRjtJQUlJLFVBQUE7RUFFRjtBQUNGO0FBREU7RUFORjtJQU9JLFVBQUE7RUFJRjtBQUNGO0FBSEU7RUFURjtJQVVJLFVBQUE7RUFNRjtBQUNGO0FBTEU7RUFaRjtJQWFJLFVBQUE7RUFRRjtBQUNGIiwiZmlsZSI6ImJsb2ctdGlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsaW5nL2JyZWFrcG9pbnRzXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwIGF1dG8gMCAwO1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbiAgY3Vyc29yOiBwb2ludGVyO1xuICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTVyZW07XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLy8gb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBvYmplY3QtZml0OiBmaWxsO1xuICAgIH1cbiAgfVxuICAuYmxvZy10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxufVxuXG46aG9zdCguY29sLTMpIHtcbiAgd2lkdGg6IDMwJTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cbn1cblxuOmhvc3QoLmNvbC00KSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1vYmlsZSkgYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcbiAgICB3aWR0aDogNDUlO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR0YWJsZXQpIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRkZXNrdG9wKSB7XG4gICAgd2lkdGg6IDIyJTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 8652:
/*!**********************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/blog-tile/blog-tile.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogTileModule": () => (/* binding */ BlogTileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _blog_tile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-tile.component */ 7739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class BlogTileModule {
}
BlogTileModule.ɵfac = function BlogTileModule_Factory(t) { return new (t || BlogTileModule)(); };
BlogTileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BlogTileModule });
BlogTileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlogTileModule, { declarations: [_blog_tile_component__WEBPACK_IMPORTED_MODULE_0__.BlogTileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_blog_tile_component__WEBPACK_IMPORTED_MODULE_0__.BlogTileComponent] }); })();


/***/ }),

/***/ 6814:
/*!*********************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/drawer-header/drawer-header.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawerHeaderComponent": () => (/* binding */ DrawerHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);




class DrawerHeaderComponent {
    constructor() {
        this.className = 'sci-drawer-header';
        this.title = '';
        this.backText = '';
        this.backClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
}
DrawerHeaderComponent.ɵfac = function DrawerHeaderComponent_Factory(t) { return new (t || DrawerHeaderComponent)(); };
DrawerHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawerHeaderComponent, selectors: [["sci-drawer-header"]], hostVars: 2, hostBindings: function DrawerHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
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
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin-bottom: 1.5rem;\n  height: 2rem;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  justify-self: flex-start;\n  cursor: pointer;\n  color: #7996a3;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-icon[_ngcontent-%COMP%] {\n  margin-left: -0.5rem;\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-text[_ngcontent-%COMP%] {\n  display: block;\n}\n@media screen and (max-width: 640px) {\n  [_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #757575;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  margin-left: auto;\n  margin-right: auto;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYXdlci1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQU47QUFDTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUdNO0VBQ0UsY0FBQTtBQURSO0FBRVE7RUFGRjtJQUdNLGFBQUE7RUFDVjtBQUNGO0FBRUk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUNNO0VBQ0UsZ0JBQUE7QUFDUiIsImZpbGUiOiJkcmF3ZXItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGluZy9icmVha3BvaW50cyc7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBcbiAgLmRyYXdlci1oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5iYWNrLWJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiAjNzk5NmEzO1xuICAgICAgLmJhY2staWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICB9XG5cbiAgICAvLyAgSGlkZSBiYWNrIHRleHQgb24gbW9iaWxlLlxuICAgICAgLmJhY2stdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 9789:
/*!******************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/drawer-header/drawer-header.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawerHeaderModule": () => (/* binding */ DrawerHeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _drawer_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawer-header.component */ 6814);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared.module */ 3687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





class DrawerHeaderModule {
}
DrawerHeaderModule.ɵfac = function DrawerHeaderModule_Factory(t) { return new (t || DrawerHeaderModule)(); };
DrawerHeaderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DrawerHeaderModule });
DrawerHeaderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
            _shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DrawerHeaderModule, { declarations: [_drawer_header_component__WEBPACK_IMPORTED_MODULE_0__.DrawerHeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule], exports: [_drawer_header_component__WEBPACK_IMPORTED_MODULE_0__.DrawerHeaderComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-projects_scimaps_src_app_pages_blogs_blogs-resolver_service_ts-projects_scimaps_src_a-0d2b66.js.map