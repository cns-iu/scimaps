"use strict";
(self["webpackChunkscimaps"] = self["webpackChunkscimaps"] || []).push([["common"],{

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

/***/ 7907:
/*!************************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/learning-material/learning-material-resolver.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningMaterialResolverService": () => (/* binding */ LearningMaterialResolverService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




class LearningMaterialResolverService {
    constructor(contentService) {
        this.contentService = contentService;
        this.directory = 'content/learning-materials';
        this.mdPath = '';
        this.slug = '';
    }
    resolve(route) {
        ({ slug: this.slug } = route.params);
        this.mdPath = `learning-materials/${this.slug}/readme.md`;
        return this.contentService.getContent(this.mdPath).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((lm) => {
            return Object.assign(Object.assign({}, lm), { slug: (0,_shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__.toSlug)(lm.title) });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((lm) => {
            return this.updatePaths(lm);
        }));
    }
    updatePaths(item) {
        const { image } = item;
        if (image) {
            item.image = this.updateImagePath(image);
        }
        return item;
    }
    // Single Image
    updateImagePath(image) {
        return Object.assign(Object.assign({}, image), { sm: `assets/${this.directory}/${this.slug}/${image.sm}`, lg: `assets/${this.directory}/${this.slug}/${image.lg}` });
    }
}
LearningMaterialResolverService.ɵfac = function LearningMaterialResolverService_Factory(t) { return new (t || LearningMaterialResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__.ContentService)); };
LearningMaterialResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LearningMaterialResolverService, factory: LearningMaterialResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6319:
/*!**********************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/learning-material/learning-material-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningMaterialRoutingModule": () => (/* binding */ LearningMaterialRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _learning_material_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./learning-material-resolver.service */ 7907);
/* harmony import */ var _learning_material_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./learning-material.component */ 2575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [{
        path: ':slug',
        component: _learning_material_component__WEBPACK_IMPORTED_MODULE_1__.LearningMaterialComponent,
        resolve: {
            learningMaterial: _learning_material_resolver_service__WEBPACK_IMPORTED_MODULE_0__.LearningMaterialResolverService
        }
    }];
class LearningMaterialRoutingModule {
}
LearningMaterialRoutingModule.ɵfac = function LearningMaterialRoutingModule_Factory(t) { return new (t || LearningMaterialRoutingModule)(); };
LearningMaterialRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LearningMaterialRoutingModule });
LearningMaterialRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LearningMaterialRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 2575:
/*!*****************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/learning-material/learning-material.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningMaterialComponent": () => (/* binding */ LearningMaterialComponent)
/* harmony export */ });
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/drawer.animations */ 6665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.component */ 950);
/* harmony import */ var _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.component */ 6814);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ 8379);







function LearningMaterialComponent_sci_drawer_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "sci-drawer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "sci-drawer-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("backClick", function LearningMaterialComponent_sci_drawer_0_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@drawerInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Additional Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.item == null ? null : ctx_r0.item.image == null ? null : ctx_r0.item.image.lg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.item == null ? null : ctx_r0.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r0.item == null ? null : ctx_r0.item.body);
} }
class LearningMaterialComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.showDrawer = false;
    }
    ngOnInit() {
        this.route.data.subscribe((response) => {
            const { learningMaterial } = response;
            if (learningMaterial) {
                this.item = learningMaterial;
            }
        });
        this.showDrawer = true;
    }
    goBack() {
        this.showDrawer = false;
        setTimeout(() => {
            this.router.navigate(['/hosting'], { state: { direction: 'backward' } });
        }, 500);
    }
}
LearningMaterialComponent.ɵfac = function LearningMaterialComponent_Factory(t) { return new (t || LearningMaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
LearningMaterialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LearningMaterialComponent, selectors: [["sci-learning-material"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["drawer", "", 1, "container"], ["backText", "Hosting", 3, "title", "backClick"], [1, "content"], [1, "row1"], ["alt", "", 3, "src"], [1, "row2"], [1, "title"], ["markdown", "", 3, "data"]], template: function LearningMaterialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LearningMaterialComponent_sci_drawer_0_Template, 11, 5, "sci-drawer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showDrawer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__.DrawerComponent, _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__.DrawerHeaderComponent, ngx_markdown__WEBPACK_IMPORTED_MODULE_6__.MarkdownComponent], styles: ["[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 3rem;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row1[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0px auto 2rem auto;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n    margin-right: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXJuaW5nLW1hdGVyaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1JO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBTE47QUFNTTtFQUxGO0lBTUksMkJBQUE7RUFITjtBQUNGO0FBSU07RUFDRSxPQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUZSO0FBR1E7RUFDRSxlQUFBO0FBRFY7QUFLTTtFQUNFLE9BQUE7QUFIUjtBQUlRO0VBRkY7SUFHSSxrQkFBQTtFQURSO0FBQ0YiLCJmaWxlIjoibGVhcm5pbmctbWF0ZXJpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbW9iaWxlOiA2NDBweDtcbiR0YWJsZXQ6IDk2MHB4O1xuJGRlc2t0b3A6IDEyNDhweDtcbiRjb2x1bW46IDc2OHB4O1xuOmhvc3Qge1xuICAuY29udGFpbmVyIHtcbiAgICAuY29udGVudCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkY29sdW1uKSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgIH1cbiAgICAgIC5yb3cxIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0byAycmVtIGF1dG87XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIC8vIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5yb3cyIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRjb2x1bW4pIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__.drawerInOut] } });


/***/ }),

/***/ 1730:
/*!**************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/learning-material/learning-material.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningMaterialModule": () => (/* binding */ LearningMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _learning_material_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./learning-material-routing.module */ 6319);
/* harmony import */ var _learning_material_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./learning-material.component */ 2575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.module */ 9789);
/* harmony import */ var _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.module */ 626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);








class LearningMaterialModule {
}
LearningMaterialModule.ɵfac = function LearningMaterialModule_Factory(t) { return new (t || LearningMaterialModule)(); };
LearningMaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LearningMaterialModule });
LearningMaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _learning_material_routing_module__WEBPACK_IMPORTED_MODULE_0__.LearningMaterialRoutingModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_7__.MarkdownModule,
            _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_2__.DrawerHeaderModule,
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_3__.DrawerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LearningMaterialModule, { declarations: [_learning_material_component__WEBPACK_IMPORTED_MODULE_1__.LearningMaterialComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _learning_material_routing_module__WEBPACK_IMPORTED_MODULE_0__.LearningMaterialRoutingModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_7__.MarkdownModule,
        _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_2__.DrawerHeaderModule,
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_3__.DrawerModule] }); })();


/***/ }),

/***/ 4146:
/*!************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/macroscopes/macroscopes-resolver.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MacroscopesResolverService": () => (/* binding */ MacroscopesResolverService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);



class MacroscopesResolverService {
    constructor(content) {
        this.content = content;
        this.cached = false;
    }
    resolve() {
        if (!this.cached) {
            this.result = this.content.getIndex('app-macroscopes').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1));
            this.cached = true;
        }
        return this.result;
    }
}
MacroscopesResolverService.ɵfac = function MacroscopesResolverService_Factory(t) { return new (t || MacroscopesResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__.ContentService)); };
MacroscopesResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MacroscopesResolverService, factory: MacroscopesResolverService.ɵfac, providedIn: 'root' });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto 0 0;\n  cursor: pointer;\n}\n[_nghost-%COMP%]:hover {\n  opacity: 0.7;\n}\n[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 15rem;\n}\n[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: contain;\n  background: black;\n}\n[_nghost-%COMP%]   .blog-title[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.col-3[_nghost-%COMP%] {\n  width: 30%;\n}\n@media screen and (max-width: 640px) {\n  .col-3[_nghost-%COMP%] {\n    width: 45%;\n  }\n}\n.col-4[_nghost-%COMP%] {\n  margin-bottom: 2rem;\n  margin-right: 1rem;\n}\n@media screen and (max-width: 640px) {\n  .col-4[_nghost-%COMP%] {\n    width: 95%;\n  }\n}\n@media screen and (min-width: 640px) and (max-width: 960px) {\n  .col-4[_nghost-%COMP%] {\n    width: 45%;\n  }\n}\n@media screen and (min-width: 960px) {\n  .col-4[_nghost-%COMP%] {\n    width: 30%;\n  }\n}\n@media screen and (min-width: 1248px) {\n  .col-4[_nghost-%COMP%] {\n    width: 22%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ctdGlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBSUEsZUFBQTtBQUpGO0FBQ0U7RUFDRSxZQUFBO0FBQ0o7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSjtBQUlBO0VBQ0UsVUFBQTtBQURGO0FBRUU7RUFGRjtJQUdJLFVBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUhGO0lBSUksVUFBQTtFQUdGO0FBQ0Y7QUFGRTtFQU5GO0lBT0ksVUFBQTtFQUtGO0FBQ0Y7QUFKRTtFQVRGO0lBVUksVUFBQTtFQU9GO0FBQ0Y7QUFORTtFQVpGO0lBYUksVUFBQTtFQVNGO0FBQ0YiLCJmaWxlIjoiYmxvZy10aWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxpbmcvYnJlYWtwb2ludHNcIjtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDAgYXV0byAwIDA7XG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC5pbWFnZS1jb250YWluZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxNXJlbTtcbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgfVxuICB9XG4gIC5ibG9nLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG59XG5cbjpob3N0KC5jb2wtMykge1xuICB3aWR0aDogMzAlO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxufVxuXG46aG9zdCguY29sLTQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbW9iaWxlKSBhbmQgKG1heC13aWR0aDogJHRhYmxldCkge1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHRhYmxldCkge1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGRlc2t0b3ApIHtcbiAgICB3aWR0aDogMjIlO1xuICB9XG59XG4iXX0= */"] });


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

/***/ 6026:
/*!*************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/services/map-macroscope-resolver.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapMacroscopeResolverService": () => (/* binding */ MapMacroscopeResolverService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _content_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.service */ 8208);




class MapMacroscopeResolverService {
    constructor(content) {
        this.content = content;
    }
    resolve(route) {
        const languages$ = this.content
            .getContent('site/languages.md')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1));
        const language = route.queryParamMap.get('lang') || 'en';
        const type = route.data.type;
        const iteration = route.paramMap.get('iteration');
        const sequence = route.paramMap.get('sequence');
        const mapSlug = `${type}/${iteration}/${sequence}`;
        const content$ = this.content.getContent(mapSlug).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1));
        // tslint:disable-next-line: no-any
        const response$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([languages$, content$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            const item = {};
            const [languages, data] = response;
            item.title = data[language].title;
            item.makers = data.en.makers;
            item.credit = data[language].creditLine;
            item.description = data[language].body;
            item.references = data[language].references;
            item.thumbnail = `assets/content/${type}/${data.en.iteration}/${data.en.sequence}/${data.en.image.lg}`;
            item.translations = languages.languages.filter((lang) => {
                return Object.keys(data).includes(lang.abbr_short);
            });
            item.externalLink = data.en.externalLink;
            item.videoLink = data.en.videoLink;
            return item;
        }));
        const people$ = response$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((items) => items.makers), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)((slugs) => {
            const forkJoins = slugs.map((slug) => {
                // {'s1': {}}, {'s2': {}}
                return this.content.getContent(`person/${slug}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((result) => {
                    return {
                        [slug]: result,
                    };
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({});
                }));
            });
            // [ {'s1': {}}, {'s2': {}} ]
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)(forkJoins);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((array) => {
            const result = {};
            array.forEach((element) => {
                Object.assign(result, element);
            });
            // {'s1': {}, 's2': {}}
            return result;
        }));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([response$, people$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((result) => {
            const [response, people] = result;
            const makers = response.makers
                .map((slug) => {
                if (people.hasOwnProperty(slug) && people[slug]) {
                    const profile = people[slug];
                    if (profile) {
                        const folder = slug.split('/')[0];
                        profile.image = `assets/content/person/${folder}/${profile.image}`;
                        return profile;
                    }
                }
                else {
                    return {
                        name: slug.split('/')[0].replace('-', ' '),
                        body: 'Lorem Ipsum'
                    };
                }
            })
                .filter((profile) => profile);
            response.makers = makers;
            return response;
        }));
    }
}
MapMacroscopeResolverService.ɵfac = function MapMacroscopeResolverService_Factory(t) { return new (t || MapMacroscopeResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_content_service__WEBPACK_IMPORTED_MODULE_0__.ContentService)); };
MapMacroscopeResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: MapMacroscopeResolverService, factory: MapMacroscopeResolverService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map