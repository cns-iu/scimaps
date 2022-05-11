"use strict";
(self["webpackChunkscimaps"] = self["webpackChunkscimaps"] || []).push([["default-projects_scimaps_src_app_pages_maker-videos_maker-videos_module_ts"],{

/***/ 8059:
/*!*******************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/maker-videos/maker-videos-body-resolver.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakerVideosBodyResolverService": () => (/* binding */ MakerVideosBodyResolverService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);



class MakerVideosBodyResolverService {
    constructor(content) {
        this.content = content;
        this.mdPath = 'site/maker-videos/maker-videos.md';
    }
    resolve() {
        return this.content.getContent(this.mdPath).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    }
}
MakerVideosBodyResolverService.ɵfac = function MakerVideosBodyResolverService_Factory(t) { return new (t || MakerVideosBodyResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_0__.ContentService)); };
MakerVideosBodyResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MakerVideosBodyResolverService, factory: MakerVideosBodyResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9255:
/*!************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/maker-videos/maker-videos-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakerVideosRoutingModule": () => (/* binding */ MakerVideosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_components_maker_video_maker_video_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/maker-video/maker-video.component */ 8707);
/* harmony import */ var _maker_video_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maker-video-resolver.service */ 3320);
/* harmony import */ var _maker_videos_body_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maker-videos-body-resolver.service */ 8059);
/* harmony import */ var _maker_videos_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maker-videos-resolver.service */ 3062);
/* harmony import */ var _maker_videos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maker-videos.component */ 5787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    {
        path: '',
        component: _maker_videos_component__WEBPACK_IMPORTED_MODULE_4__.MakerVideosComponent,
        resolve: {
            body: _maker_videos_body_resolver_service__WEBPACK_IMPORTED_MODULE_2__.MakerVideosBodyResolverService,
            videos: _maker_videos_resolver_service__WEBPACK_IMPORTED_MODULE_3__.MakerVideosResolverService
        },
        children: [
            {
                path: ':slug',
                resolve: {
                    video: _maker_video_resolver_service__WEBPACK_IMPORTED_MODULE_1__.MakerVideoResolverService
                },
                component: _shared_components_maker_video_maker_video_component__WEBPACK_IMPORTED_MODULE_0__.MakerVideoComponent
            }
        ]
    }
];
class MakerVideosRoutingModule {
}
MakerVideosRoutingModule.ɵfac = function MakerVideosRoutingModule_Factory(t) { return new (t || MakerVideosRoutingModule)(); };
MakerVideosRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: MakerVideosRoutingModule });
MakerVideosRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MakerVideosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5787:
/*!*******************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/maker-videos/maker-videos.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakerVideosComponent": () => (/* binding */ MakerVideosComponent)
/* harmony export */ });
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/drawer.animations */ 6665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.component */ 950);
/* harmony import */ var _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.component */ 6814);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _shared_components_video_tile_video_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/video-tile/video-tile.component */ 9248);








function MakerVideosComponent_sci_drawer_0_sci_video_tile_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "sci-video-tile", 8);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("video", item_r2);
} }
function MakerVideosComponent_sci_drawer_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "sci-drawer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "sci-drawer-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("backClick", function MakerVideosComponent_sci_drawer_0_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MakerVideosComponent_sci_drawer_0_sci_video_tile_6_Template, 1, 1, "sci-video-tile", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@drawerInOut", ctx_r0.showDrawer ? "show" : "hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r0.body.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.videos);
} }
class MakerVideosComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.body = { description: '' };
        this.videos = [];
        this.showDrawer = false;
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            const { body, videos } = data;
            if (body) {
                this.body = body;
            }
            if (videos && Array.isArray(videos)) {
                this.videos = videos;
            }
        });
        this.showDrawer = true;
    }
    goBack() {
        this.showDrawer = false;
        setTimeout(() => {
            this.router.navigate(['/', 'learning-center']);
        }, 500);
    }
    gotoVideo(slug) {
        this.router.navigate([slug], { relativeTo: this.route });
    }
}
MakerVideosComponent.ɵfac = function MakerVideosComponent_Factory(t) { return new (t || MakerVideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
MakerVideosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MakerVideosComponent, selectors: [["sci-maker-videos"]], decls: 2, vars: 1, consts: [["class", "sci-drawer", 4, "ngIf"], [1, "sci-drawer"], ["drawer", "", 1, "drawer-container"], ["title", "Videos", "backText", "Back", 3, "backClick"], ["markdown", "", 1, "description", 3, "data"], [1, "spacer-32"], [1, "video-tiles"], ["class", "col-4", 3, "video", 4, "ngFor", "ngForOf"], [1, "col-4", 3, "video"]], template: function MakerVideosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MakerVideosComponent_sci_drawer_0_Template, 7, 3, "sci-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showDrawer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__.DrawerComponent, _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__.DrawerHeaderComponent, ngx_markdown__WEBPACK_IMPORTED_MODULE_7__.MarkdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _shared_components_video_tile_video_tile_component__WEBPACK_IMPORTED_MODULE_3__.VideoTileComponent], styles: ["[_nghost-%COMP%]   .video-tiles[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2VyLXZpZGVvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSkoiLCJmaWxlIjoibWFrZXItdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1vYmlsZTogNjQwcHg7XG4kdGFibGV0OiA5NjBweDtcbiRkZXNrdG9wOiAxMjQ4cHg7XG5cbjpob3N0IHtcbiAgLnZpZGVvLXRpbGVzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG4iXX0= */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__.drawerInOut] } });


/***/ }),

/***/ 5599:
/*!****************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/maker-videos/maker-videos.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakerVideosModule": () => (/* binding */ MakerVideosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.module */ 9789);
/* harmony import */ var _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.module */ 626);
/* harmony import */ var _shared_components_maker_video_maker_video_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/maker-video/maker-video.module */ 6679);
/* harmony import */ var _shared_components_video_tile_video_tile_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/video-tile/video-tile.module */ 4598);
/* harmony import */ var _maker_videos_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maker-videos-routing.module */ 9255);
/* harmony import */ var _maker_videos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maker-videos.component */ 5787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);









class MakerVideosModule {
}
MakerVideosModule.ɵfac = function MakerVideosModule_Factory(t) { return new (t || MakerVideosModule)(); };
MakerVideosModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: MakerVideosModule });
MakerVideosModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _maker_videos_routing_module__WEBPACK_IMPORTED_MODULE_4__.MakerVideosRoutingModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_8__.MarkdownModule,
            _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_0__.DrawerHeaderModule,
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_1__.DrawerModule,
            _shared_components_maker_video_maker_video_module__WEBPACK_IMPORTED_MODULE_2__.MakerVideoModule,
            _shared_components_video_tile_video_tile_module__WEBPACK_IMPORTED_MODULE_3__.VideoTileModule,
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_1__.DrawerModule,
            _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_0__.DrawerHeaderModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MakerVideosModule, { declarations: [_maker_videos_component__WEBPACK_IMPORTED_MODULE_5__.MakerVideosComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _maker_videos_routing_module__WEBPACK_IMPORTED_MODULE_4__.MakerVideosRoutingModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_8__.MarkdownModule,
        _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_0__.DrawerHeaderModule,
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_1__.DrawerModule,
        _shared_components_maker_video_maker_video_module__WEBPACK_IMPORTED_MODULE_2__.MakerVideoModule,
        _shared_components_video_tile_video_tile_module__WEBPACK_IMPORTED_MODULE_3__.VideoTileModule,
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_1__.DrawerModule,
        _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_0__.DrawerHeaderModule] }); })();


/***/ }),

/***/ 8707:
/*!*****************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/maker-video/maker-video.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakerVideoComponent": () => (/* binding */ MakerVideoComponent)
/* harmony export */ });
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/drawer.animations */ 6665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drawer/drawer.component */ 950);
/* harmony import */ var _drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drawer-header/drawer-header.component */ 6814);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/safe.pipe */ 7248);








function MakerVideoComponent_sci_drawer_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "iframe", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 2, ctx_r1.video.videoLink, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r1.video == null ? null : ctx_r1.video.long_description);
} }
function MakerVideoComponent_sci_drawer_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "sci-drawer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "sci-drawer-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("backClick", function MakerVideoComponent_sci_drawer_0_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MakerVideoComponent_sci_drawer_0_div_3_Template, 5, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@drawerInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.video);
} }
class MakerVideoComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.showOverlay = false;
    }
    ngOnInit() {
        this.showOverlay = true;
        const { video } = this.route.snapshot.data;
        if (video) {
            this.video = video;
        }
    }
    close() {
        this.showOverlay = false;
        setTimeout(() => {
            this.router.navigate(['/', 'learning-center', 'maker-videos']);
        }, 500);
    }
}
MakerVideoComponent.ɵfac = function MakerVideoComponent_Factory(t) { return new (t || MakerVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
MakerVideoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MakerVideoComponent, selectors: [["sci-maker-video"]], decls: 1, vars: 1, consts: [["class", "sci-drawer", 4, "ngIf"], [1, "sci-drawer"], ["drawer", "", 1, "drawer"], ["backText", "Maker Videos", 3, "backClick"], ["class", "overlay-container", 4, "ngIf"], [1, "overlay-container"], ["title", "YouTube video player", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "iframe", 3, "src"], [1, "spacer-72"], ["markdown", "", 1, "long-description", 3, "data"]], template: function MakerVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MakerVideoComponent_sci_drawer_0_Template, 4, 2, "sci-drawer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showOverlay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__.DrawerComponent, _drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__.DrawerHeaderComponent, ngx_markdown__WEBPACK_IMPORTED_MODULE_7__.MarkdownComponent], pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__.SafePipe], styles: ["[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%] {\n  background-color: black;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 75vh;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%]   .iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56vw;\n  border: 0;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%]   .long-description[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2VyLXZpZGVvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsdUJBRlE7QUFBWjtBQUdJO0VBQ0UsdUJBSk07RUFLTixhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFETjtBQUVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBQVI7QUFFTTtFQUNFLFlBQUE7QUFBUiIsImZpbGUiOiJtYWtlci12aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLy8gT3ZlcmxheSBzdHlsaW5nXG4gICRiZ2NvbG9yOiBibGFjaztcbiAgLnNjaS1kcmF3ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xuICAgIC5vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdjb2xvcjtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA3NXZoO1xuICAgICAgLmlmcmFtZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDU2dnc7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgIH1cbiAgICAgIC5sb25nLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_0__.drawerInOut] } });


/***/ }),

/***/ 6679:
/*!**************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/maker-video/maker-video.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakerVideoModule": () => (/* binding */ MakerVideoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipes/safe.pipe */ 7248);
/* harmony import */ var _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drawer-header/drawer-header.module */ 9789);
/* harmony import */ var _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drawer/drawer.module */ 626);
/* harmony import */ var _maker_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maker-video.component */ 8707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







class MakerVideoModule {
}
MakerVideoModule.ɵfac = function MakerVideoModule_Factory(t) { return new (t || MakerVideoModule)(); };
MakerVideoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MakerVideoModule });
MakerVideoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_2__.DrawerModule,
            _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_1__.DrawerHeaderModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_6__.MarkdownModule,
            _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MakerVideoModule, { declarations: [_maker_video_component__WEBPACK_IMPORTED_MODULE_3__.MakerVideoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_2__.DrawerModule,
        _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_1__.DrawerHeaderModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_6__.MarkdownModule,
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipeModule], exports: [_maker_video_component__WEBPACK_IMPORTED_MODULE_3__.MakerVideoComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-projects_scimaps_src_app_pages_maker-videos_maker-videos_module_ts.js.map