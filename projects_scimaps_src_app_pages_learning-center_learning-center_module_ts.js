"use strict";
(self["webpackChunkscimaps"] = self["webpackChunkscimaps"] || []).push([["projects_scimaps_src_app_pages_learning-center_learning-center_module_ts"],{

/***/ 5337:
/*!*************************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/learning-center/learning-center-body-resolver.service.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningCenterBodyResolverService": () => (/* binding */ LearningCenterBodyResolverService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);
/* harmony import */ var _maker_videos_maker_video_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../maker-videos/maker-video-resolver.service */ 3320);
/* harmony import */ var _blogs_blog_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blogs/blog-resolver.service */ 2700);






class LearningCenterBodyResolverService {
    constructor(content, videoResolver, blogResolver) {
        this.content = content;
        this.videoResolver = videoResolver;
        this.blogResolver = blogResolver;
        this.mdPath = 'site/learning-center/learning-center.md';
        this.directory = 'assets/content/site/learning-center';
    }
    resolve() {
        return this.content.getContent(this.mdPath).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.concatMap)((body) => {
            const { featured } = body;
            if (featured && featured.type === 'blog' && featured['featured-blog-slug']) {
                const slug = featured['featured-blog-slug'];
                const featuredBlog$ = this.blogResolver.getResult(`blog/${slug}`);
                return featuredBlog$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((blog) => {
                    return Object.assign(Object.assign({}, body), { featuredBlog: blog });
                }));
            }
            else if (featured && featured.type === 'video' && featured['featured-video-slug']) {
                const slug = featured['featured-video-slug'];
                const featuredVideo$ = this.videoResolver.getResult(`maker-videos/${slug}`);
                return featuredVideo$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((makerVide) => {
                    return Object.assign(Object.assign({}, body), { featuredVideo: makerVide });
                }));
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(body);
            }
        }));
    }
}
LearningCenterBodyResolverService.ɵfac = function LearningCenterBodyResolverService_Factory(t) { return new (t || LearningCenterBodyResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__.ContentService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_maker_videos_maker_video_resolver_service__WEBPACK_IMPORTED_MODULE_1__.MakerVideoResolverService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_blogs_blog_resolver_service__WEBPACK_IMPORTED_MODULE_2__.BlogResolverService)); };
LearningCenterBodyResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: LearningCenterBodyResolverService, factory: LearningCenterBodyResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1612:
/*!******************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/learning-center/learning-center-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningCenterRoutingModule": () => (/* binding */ LearningCenterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _blogs_blogs_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blogs/blogs-resolver.service */ 2878);
/* harmony import */ var _maker_videos_maker_videos_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../maker-videos/maker-videos-resolver.service */ 3062);
/* harmony import */ var _learning_center_body_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learning-center-body-resolver.service */ 5337);
/* harmony import */ var _learning_center_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./learning-center.component */ 1374);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    {
        path: '',
        component: _learning_center_component__WEBPACK_IMPORTED_MODULE_3__.LearningCenterComponent,
        data: {
            blogsCount: 4,
            videosCount: 4
        },
        resolve: {
            body: _learning_center_body_resolver_service__WEBPACK_IMPORTED_MODULE_2__.LearningCenterBodyResolverService,
            blogs: _blogs_blogs_resolver_service__WEBPACK_IMPORTED_MODULE_0__.BlogsResolverService,
            videos: _maker_videos_maker_videos_resolver_service__WEBPACK_IMPORTED_MODULE_1__.MakerVideosResolverService
        },
        children: [
            {
                path: 'blogs',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-projects_scimaps_src_app_pages_blogs_blogs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../blogs/blogs.module */ 6928)).then(m => m.BlogsModule)
            }, {
                path: 'maker-videos',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-projects_scimaps_src_app_pages_maker-videos_maker-videos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../maker-videos/maker-videos.module */ 5599)).then(m => m.MakerVideosModule)
            }
        ]
    }
];
class LearningCenterRoutingModule {
}
LearningCenterRoutingModule.ɵfac = function LearningCenterRoutingModule_Factory(t) { return new (t || LearningCenterRoutingModule)(); };
LearningCenterRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LearningCenterRoutingModule });
LearningCenterRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LearningCenterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 1374:
/*!*************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/learning-center/learning-center.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningCenterComponent": () => (/* binding */ LearningCenterComponent)
/* harmony export */ });
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/drawer.animations */ 6665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/directives/breakpoint.directive */ 8355);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _shared_components_blog_tile_blog_tile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/blog-tile/blog-tile.component */ 7739);
/* harmony import */ var _shared_components_video_tile_video_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/video-tile/video-tile.component */ 9248);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/safe.pipe */ 7248);










function LearningCenterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.featuredBlog.blogImages[0].sm, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.featuredBlog.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](10, 4, ctx_r0.featuredBlog.date, "mediumDate", "+0000"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r0.featuredBlog.body);
} }
function LearningCenterComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "iframe", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 2, ctx_r1.featuredVideo.videoLink, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r1.featuredVideo == null ? null : ctx_r1.featuredVideo.long_description);
} }
function LearningCenterComponent_div_5_ng_container_5_sci_blog_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "sci-blog-tile", 23);
} if (rf & 2) {
    const blog_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("blog", blog_r6);
} }
function LearningCenterComponent_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LearningCenterComponent_div_5_ng_container_5_sci_blog_tile_1_Template, 1, 1, "sci-blog-tile", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r7 < ctx_r4.itemsPerRow);
} }
function LearningCenterComponent_div_5_ng_container_13_sci_video_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "sci-video-tile", 25);
} if (rf & 2) {
    const video_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("video", video_r10);
} }
function LearningCenterComponent_div_5_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LearningCenterComponent_div_5_ng_container_13_sci_video_tile_1_Template, 1, 1, "sci-video-tile", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r11 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r11 < ctx_r5.itemsPerRow);
} }
function LearningCenterComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, LearningCenterComponent_div_5_ng_container_5_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LearningCenterComponent_div_5_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.goto("blogs"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " more_vert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, LearningCenterComponent_div_5_ng_container_13_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LearningCenterComponent_div_5_Template_mat_icon_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.goto("videos"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " more_vert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Blog ( ", ctx_r2.blogs.length, " )");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.blogs);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Videos ( ", ctx_r2.videos.length, " )");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.videos);
} }
function LearningCenterComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LearningCenterComponent_div_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.goto("blogs"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LearningCenterComponent_div_6_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.goto("videos"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Blogs ( ", ctx_r3.blogs.length, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Videos ( ", ctx_r3.videos.length, " ) ");
} }
class LearningCenterComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.blogs = [];
        this.videos = [];
        this.itemsPerRow = 4;
    }
    ngOnInit() {
        const { data } = this.activatedRoute.snapshot;
        const { body, blogs, videos } = data;
        if (body) {
            this.body = body;
        }
        this.setBlogs(blogs);
        this.setVideos(videos);
        // Set featured
        this.setFeatured();
    }
    setBlogs(blogs) {
        if (Array.isArray(blogs) && blogs.length) {
            this.blogs = blogs;
        }
    }
    setVideos(videos) {
        if (Array.isArray(videos) && videos.length) {
            this.videos = videos;
        }
    }
    setFeatured() {
        const { type } = this.body.featured;
        if (type === 'video') {
            const { featuredVideo } = this.body;
            if (featuredVideo) {
                this.featuredVideo = featuredVideo;
            }
            else {
                this.featuredVideo = this.videos[0];
            }
        }
        else {
            const { featuredBlog } = this.body;
            if (featuredBlog) {
                this.featuredBlog = featuredBlog;
            }
            else {
                this.featuredBlog = this.blogs[0];
            }
        }
    }
    goto(page) {
        if (page === 'blogs') {
            this.router.navigate(['/', 'learning-center', 'blogs']);
        }
        else if (page === 'videos') {
            this.router.navigate(['/', 'learning-center', 'maker-videos']);
        }
    }
}
LearningCenterComponent.ɵfac = function LearningCenterComponent_Factory(t) { return new (t || LearningCenterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
LearningCenterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LearningCenterComponent, selectors: [["sci-learning-center"]], decls: 8, vars: 4, consts: [[1, "header"], ["class", "featured-blog", 4, "ngIf"], ["class", "featured-video", 4, "ngIf"], [1, "spacer-48"], ["class", "desktop-menu", 4, "sciBreakpoint"], ["class", "mobile-menu", 4, "sciBreakpoint"], [1, "featured-blog"], [1, "featured-container"], ["alt", "Image", 3, "src"], [1, "featured-description"], [1, "spacer-16"], ["markdown", "", 3, "data"], [1, "featured-video"], ["title", "YouTube video player", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "iframe", 3, "src"], [1, "spacer-72"], ["markdown", "", 1, "long-description", 3, "data"], [1, "desktop-menu"], [1, "category"], [1, "category-row"], [4, "ngFor", "ngForOf"], [1, "icon-container"], [1, "more", "icon", 3, "click"], ["class", "col-4", 3, "blog", 4, "ngIf"], [1, "col-4", 3, "blog"], ["class", "col-4", 3, "video", 4, "ngIf"], [1, "col-4", 3, "video"], [1, "mobile-menu"], [1, "mobile-button", 3, "click"], [1, "mobile-icon"]], template: function LearningCenterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Learning Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LearningCenterComponent_div_2_Template, 13, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, LearningCenterComponent_div_3_Template, 5, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, LearningCenterComponent_div_5_Template, 17, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, LearningCenterComponent_div_6_Template, 9, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.featuredBlog);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.featuredVideo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sciBreakpoint", "mobile+");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sciBreakpoint", "mobile-");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_directives_breakpoint_directive__WEBPACK_IMPORTED_MODULE_1__.BreakpointDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, ngx_markdown__WEBPACK_IMPORTED_MODULE_8__.MarkdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _shared_components_blog_tile_blog_tile_component__WEBPACK_IMPORTED_MODULE_2__.BlogTileComponent, _shared_components_video_tile_video_tile_component__WEBPACK_IMPORTED_MODULE_3__.VideoTileComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_4__.SafePipe], styles: ["[_nghost-%COMP%]   .featured-blog[_ngcontent-%COMP%]   .featured-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .featured-blog[_ngcontent-%COMP%]   .featured-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  max-width: 100%;\n  max-height: 30rem;\n}\n[_nghost-%COMP%]   .featured-video[_ngcontent-%COMP%]   .iframe[_ngcontent-%COMP%] {\n  margin: auto;\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n  border: 0;\n}\n[_nghost-%COMP%]   .desktop-menu[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .category-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .category-row[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 15rem;\n}\n[_nghost-%COMP%]   .category-row[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .mobile-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .mobile-menu[_ngcontent-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.75rem;\n  font-size: 1rem;\n  cursor: pointer;\n  border: 1px solid #e0e0e0;\n  border-left: none;\n  border-right: none;\n  color: #757575;\n}\n[_nghost-%COMP%]   .mobile-menu[_ngcontent-%COMP%]   .mobile-button[_ngcontent-%COMP%]   .mobile-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  height: 1.5rem;\n  width: 1.5rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXJuaW5nLWNlbnRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNFLFdBQUE7QUFITjtBQUlNO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQVFJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBTk47QUFXSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVROO0FBYUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBWEo7QUFjSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQVpOO0FBY0k7RUFDRSxlQUFBO0FBWk47QUFpQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFmSjtBQWdCSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWROO0FBZU07RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQWJSIiwiZmlsZSI6ImxlYXJuaW5nLWNlbnRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsaW5nL2JyZWFrcG9pbnRzXCI7XG5cbjpob3N0IHtcbiAgLmZlYXR1cmVkLWJsb2cge1xuICAgIC5mZWF0dXJlZC1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBpbWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMzByZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZlYXR1cmVkLXZpZGVvIHtcbiAgICAuaWZyYW1lIHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gIH1cblxuICAuZGVza3RvcC1tZW51IHtcbiAgICAuY2F0ZWdvcnkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICB9XG5cbiAgLmNhdGVnb3J5LXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC8vIHRocmVlIGRvdFxuICAgIC5pY29uLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgaGVpZ2h0OiAxNXJlbTtcbiAgICB9XG4gICAgLmljb24ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1vYmlsZSBVSS5cbiAgLm1vYmlsZS1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLm1vYmlsZS1idXR0b24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgICAgLm1vYmlsZS1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__.drawerInOut] } });


/***/ }),

/***/ 2958:
/*!**********************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/learning-center/learning-center.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningCenterModule": () => (/* binding */ LearningCenterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/safe.pipe */ 7248);
/* harmony import */ var _shared_components_blog_tile_blog_tile_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/blog-tile/blog-tile.module */ 8652);
/* harmony import */ var _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.module */ 9789);
/* harmony import */ var _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.module */ 626);
/* harmony import */ var _shared_components_video_tile_video_tile_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/video-tile/video-tile.module */ 4598);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ 3687);
/* harmony import */ var _learning_center_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./learning-center-routing.module */ 1612);
/* harmony import */ var _learning_center_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./learning-center.component */ 1374);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);













class LearningCenterModule {
}
LearningCenterModule.ɵfac = function LearningCenterModule_Factory(t) { return new (t || LearningCenterModule)(); };
LearningCenterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: LearningCenterModule });
LearningCenterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _learning_center_routing_module__WEBPACK_IMPORTED_MODULE_6__.LearningCenterRoutingModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_10__.MarkdownModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_3__.DrawerModule,
            _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_2__.DrawerHeaderModule,
            _shared_components_blog_tile_blog_tile_module__WEBPACK_IMPORTED_MODULE_1__.BlogTileModule,
            _shared_components_video_tile_video_tile_module__WEBPACK_IMPORTED_MODULE_4__.VideoTileModule,
            _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](LearningCenterModule, { declarations: [_learning_center_component__WEBPACK_IMPORTED_MODULE_7__.LearningCenterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _learning_center_routing_module__WEBPACK_IMPORTED_MODULE_6__.LearningCenterRoutingModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_10__.MarkdownModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_3__.DrawerModule,
        _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_2__.DrawerHeaderModule,
        _shared_components_blog_tile_blog_tile_module__WEBPACK_IMPORTED_MODULE_1__.BlogTileModule,
        _shared_components_video_tile_video_tile_module__WEBPACK_IMPORTED_MODULE_4__.VideoTileModule,
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipeModule] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_scimaps_src_app_pages_learning-center_learning-center_module_ts.js.map