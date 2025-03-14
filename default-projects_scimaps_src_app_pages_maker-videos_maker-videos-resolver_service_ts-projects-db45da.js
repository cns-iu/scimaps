"use strict";
(self["webpackChunkscimaps"] = self["webpackChunkscimaps"] || []).push([["default-projects_scimaps_src_app_pages_maker-videos_maker-videos-resolver_service_ts-projects-db45da"],{

/***/ 3320:
/*!*************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/maker-videos/maker-video-resolver.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getVideoImageSource": () => (/* binding */ getVideoImageSource),
/* harmony export */   "toMakerVideo": () => (/* binding */ toMakerVideo),
/* harmony export */   "MakerVideoResolverService": () => (/* binding */ MakerVideoResolverService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/utils */ 9298);
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);





const getVideoImageSource = (video, directory = '') => {
    let result = '';
    if (video.image) {
        result = video.image;
        if (!(0,_constants_utils__WEBPACK_IMPORTED_MODULE_0__.isHttp)(video.image)) {
            result = `${directory}/${video.slug}/${video.image}`;
        }
    }
    return result;
};
const toMakerVideo = (item, directory = '') => {
    const result = {
        title: item.title,
        short_description: item.short_description,
        long_description: item.long_description,
        videoLink: item.videoLink,
        maker: item.maker,
        image: item.image,
        slug: (0,_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__.toSlug)(item.title),
        date: item.date
    };
    result.image = getVideoImageSource(result, directory);
    return result;
};
class MakerVideoResolverService {
    constructor(contentService) {
        this.contentService = contentService;
        this.mdPath = '';
        this.directory = 'assets/content/maker-videos';
    }
    resolve(route) {
        const { slug } = route.params;
        this.mdPath = `maker-videos/${slug}`;
        return this.getResult(this.mdPath);
    }
    getResult(mdPath) {
        return this.contentService.getContent(mdPath).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((item) => toMakerVideo(item)));
    }
}
MakerVideoResolverService.ɵfac = function MakerVideoResolverService_Factory(t) { return new (t || MakerVideoResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService)); };
MakerVideoResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MakerVideoResolverService, factory: MakerVideoResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3062:
/*!**************************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/maker-videos/maker-videos-resolver.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMakerVideo": () => (/* binding */ getMakerVideo),
/* harmony export */   "MakerVideosResolverService": () => (/* binding */ MakerVideosResolverService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _maker_video_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maker-video-resolver.service */ 3320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);




const getMakerVideo = (n) => {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push({
            title: `title${i}`,
            short_description: `short ${i}`,
            long_description: `long ${i}`,
            slug: `title${i}`,
            videoLink: `link$ ${i}`,
            maker: 'maker/readme',
            image: `image.${i}.jpg`,
            date: `date${i}`
        });
    }
    return result;
};
class MakerVideosResolverService {
    constructor(content) {
        this.content = content;
        this.directory = 'assets/content/maker-videos';
    }
    resolve(route) {
        const { videosCount } = route.data;
        return this.content.getIndex('app-maker-videos').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((items) => {
            if (videosCount && videosCount > 0) {
                return items.sort((a, b) => a.date > b.date ? -1 : 1).slice(0, videosCount);
            }
            else {
                return items;
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((makerVideos) => {
            return makerVideos.map(item => (0,_maker_video_resolver_service__WEBPACK_IMPORTED_MODULE_0__.toMakerVideo)(item, this.directory));
        }));
    }
}
MakerVideosResolverService.ɵfac = function MakerVideosResolverService_Factory(t) { return new (t || MakerVideosResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService)); };
MakerVideosResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MakerVideosResolverService, factory: MakerVideosResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7248:
/*!*****************************************************!*\
  !*** ./projects/scimaps/src/app/pipes/safe.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe),
/* harmony export */   "SafePipeModule": () => (/* binding */ SafePipeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 1570);


class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        if (type === 'resourceUrl') {
            return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        }
        else {
            return '';
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
class SafePipeModule {
}
SafePipeModule.ɵfac = function SafePipeModule_Factory(t) { return new (t || SafePipeModule)(); };
SafePipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SafePipeModule });
SafePipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SafePipeModule, { declarations: [SafePipe], exports: [SafePipe] }); })();


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


/***/ }),

/***/ 9248:
/*!***************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/video-tile/video-tile.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoTileComponent": () => (/* binding */ VideoTileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ 8379);



class VideoTileComponent {
    constructor(router) {
        this.router = router;
    }
    gotoVideo() {
        if (this.video) {
            this.router.navigate(['/', 'learning-center', 'maker-videos', this.video.slug]);
        }
    }
}
VideoTileComponent.ɵfac = function VideoTileComponent_Factory(t) { return new (t || VideoTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
VideoTileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoTileComponent, selectors: [["sci-video-tile"]], inputs: { video: "video" }, decls: 6, vars: 3, consts: [[1, "container", 3, "click"], [1, "thumbnail"], [3, "src", "alt"], [1, "title"]], template: function VideoTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoTileComponent_Template_div_click_0_listener() { return ctx.gotoVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "markdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.video == null ? null : ctx.video.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.video == null ? null : ctx.video.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.video == null ? null : ctx.video.short_description, " ");
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_2__.MarkdownComponent], styles: ["[_nghost-%COMP%] {\n  overflow: hidden;\n  cursor: pointer;\n}\n[_nghost-%COMP%]:hover {\n  opacity: 0.7;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  background: black;\n  flex-grow: 1;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 52px;\n}\n.col-4[_nghost-%COMP%] {\n  margin-bottom: 2rem;\n  margin-right: 1rem;\n}\n@media screen and (max-width: 640px) {\n  .col-4[_nghost-%COMP%] {\n    width: 95%;\n  }\n}\n@media screen and (min-width: 640px) and (max-width: 960px) {\n  .col-4[_nghost-%COMP%] {\n    width: 45%;\n  }\n}\n@media screen and (min-width: 960px) {\n  .col-4[_nghost-%COMP%] {\n    width: 30%;\n  }\n}\n@media screen and (min-width: 1248px) {\n  .col-4[_nghost-%COMP%] {\n    width: 22%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLXRpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFERjtBQUVFO0VBQ0UsWUFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQURKO0FBRUk7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFBTjtBQUVNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFBUjtBQUlJO0VBQ0UsWUFBQTtBQUZOO0FBT0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBSkY7QUFLRTtFQUhGO0lBSUksVUFBQTtFQUZGO0FBQ0Y7QUFHRTtFQU5GO0lBT0ksVUFBQTtFQUFGO0FBQ0Y7QUFDRTtFQVRGO0lBVUksVUFBQTtFQUVGO0FBQ0Y7QUFERTtFQVpGO0lBYUksVUFBQTtFQUlGO0FBQ0YiLCJmaWxlIjoidmlkZW8tdGlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsaW5nL2JyZWFrcG9pbnRzXCI7XG5cbjpob3N0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC50aHVtYm5haWwge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgIGZsZXgtZ3JvdzogMTtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIGhlaWdodDogNTJweDtcbiAgICB9XG4gIH1cbn1cblxuOmhvc3QoLmNvbC00KSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1vYmlsZSkgYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcbiAgICB3aWR0aDogNDUlO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR0YWJsZXQpIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRkZXNrdG9wKSB7XG4gICAgd2lkdGg6IDIyJTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 4598:
/*!************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/video-tile/video-tile.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoTileModule": () => (/* binding */ VideoTileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _video_tile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-tile.component */ 9248);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




class VideoTileModule {
}
VideoTileModule.ɵfac = function VideoTileModule_Factory(t) { return new (t || VideoTileModule)(); };
VideoTileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VideoTileModule });
VideoTileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_3__.MarkdownModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VideoTileModule, { declarations: [_video_tile_component__WEBPACK_IMPORTED_MODULE_0__.VideoTileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_3__.MarkdownModule], exports: [_video_tile_component__WEBPACK_IMPORTED_MODULE_0__.VideoTileComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-projects_scimaps_src_app_pages_maker-videos_maker-videos-resolver_service_ts-projects-db45da.js.map