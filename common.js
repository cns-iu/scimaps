(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "URUp":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/video-tile/video-tile.module.ts ***!
  \*******************************************************************/
/*! exports provided: VideoTileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTileModule", function() { return VideoTileModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _video_tile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-tile.component */ "xLgn");




class VideoTileModule {
}
VideoTileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VideoTileModule });
VideoTileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function VideoTileModule_Factory(t) { return new (t || VideoTileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VideoTileModule, { declarations: [_video_tile_component__WEBPACK_IMPORTED_MODULE_2__["VideoTileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_video_tile_component__WEBPACK_IMPORTED_MODULE_2__["VideoTileComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VideoTileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_video_tile_component__WEBPACK_IMPORTED_MODULE_2__["VideoTileComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                ],
                exports: [_video_tile_component__WEBPACK_IMPORTED_MODULE_2__["VideoTileComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "UTmY":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/map-macroscope-resolver.service.ts ***!
  \********************************************************************/
/*! exports provided: MapMacroscopeResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMacroscopeResolverService", function() { return MapMacroscopeResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.service */ "qc/9");





class MapMacroscopeResolverService {
    constructor(content) {
        this.content = content;
    }
    resolve(route) {
        const languages$ = this.content
            .getContent('site/languages.md')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        const language = route.queryParamMap.get('lang') || 'en';
        const type = route.data.type;
        const iteration = route.paramMap.get('iteration');
        const sequence = route.paramMap.get('sequence');
        const mapSlug = `${type}/${iteration}/${sequence}`;
        const content$ = this.content.getContent(mapSlug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        // tslint:disable-next-line: no-any
        const response$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([languages$, content$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
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
            return item;
        }));
        const people$ = response$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((items) => items.makers), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((slugs) => {
            const forkJoins = slugs.map((slug) => {
                // {'s1': {}}, {'s2': {}}
                return this.content.getContent(`person/${slug}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
                    return {
                        [slug]: result,
                    };
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
                }));
            });
            // [ {'s1': {}}, {'s2': {}} ]
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(forkJoins);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((array) => {
            const result = {};
            array.forEach((element) => {
                Object.assign(result, element);
            });
            // {'s1': {}, 's2': {}}
            return result;
        }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([response$, people$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
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
MapMacroscopeResolverService.ɵfac = function MapMacroscopeResolverService_Factory(t) { return new (t || MapMacroscopeResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"])); };
MapMacroscopeResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapMacroscopeResolverService, factory: MapMacroscopeResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapMacroscopeResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"] }]; }, null); })();


/***/ }),

/***/ "YYwF":
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/*! exports provided: SafePipe, SafePipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipeModule", function() { return SafePipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");



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
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safe'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();
class SafePipeModule {
}
SafePipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SafePipeModule });
SafePipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SafePipeModule_Factory(t) { return new (t || SafePipeModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SafePipeModule, { declarations: [SafePipe], exports: [SafePipe] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    SafePipe
                ],
                exports: [
                    SafePipe
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "mXuf":
/*!*********************************************************************!*\
  !*** ./src/app/pages/maker-videos/maker-videos-resolver.service.ts ***!
  \*********************************************************************/
/*! exports provided: getMakerVideo, MakerVideosResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMakerVideo", function() { return getMakerVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakerVideosResolverService", function() { return MakerVideosResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/utils */ "fNWo");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");






const getMakerVideo = (n) => {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push({
            title: `title${i}`,
            short_description: `short ${i}`,
            long_description: `long ${i}`,
            slug: `slug${i}`,
            videoLink: `link$ ${i}`,
            maker: 'maker/readme',
            image: `image.${i}.jpg`
        });
    }
    return result;
};
class MakerVideosResolverService {
    constructor(content) {
        this.content = content;
        this.directory = 'assets/content/maker-videos';
    }
    updatePaths(makerVideo) {
        if (makerVideo.image && !Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["isHttp"])(makerVideo.image)) {
            makerVideo.image = `${this.directory}/${makerVideo.slug}/${makerVideo.image}`;
        }
        return makerVideo;
    }
    postProcess(makerVideos) {
        return makerVideos.map((makerVideo) => {
            makerVideo.slug = Object(_shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["toSlug"])(makerVideo.title);
            return this.updatePaths(makerVideo);
        });
    }
    resolve() {
        return this.content.getIndex('maker-videos').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((makerVideos) => {
            return this.postProcess(makerVideos);
        }));
    }
}
MakerVideosResolverService.ɵfac = function MakerVideosResolverService_Factory(t) { return new (t || MakerVideosResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"])); };
MakerVideosResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MakerVideosResolverService, factory: MakerVideosResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MakerVideosResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"] }]; }, null); })();


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




class MacroscopesResolverService {
    constructor(content) {
        this.content = content;
        this.cached = false;
    }
    resolve() {
        if (!this.cached) {
            this.result = this.content.getIndex('app-macroscopes').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
            this.cached = true;
        }
        return this.result;
    }
}
MacroscopesResolverService.ɵfac = function MacroscopesResolverService_Factory(t) { return new (t || MacroscopesResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"])); };
MacroscopesResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MacroscopesResolverService, factory: MacroscopesResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroscopesResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"] }]; }, null); })();


/***/ }),

/***/ "xLgn":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/video-tile/video-tile.component.ts ***!
  \**********************************************************************/
/*! exports provided: VideoTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTileComponent", function() { return VideoTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");



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
VideoTileComponent.ɵfac = function VideoTileComponent_Factory(t) { return new (t || VideoTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
VideoTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoTileComponent, selectors: [["sci-video-tile"]], inputs: { video: "video" }, decls: 6, vars: 3, consts: [[1, "container", 3, "click"], [1, "thumbnail"], [3, "src", "alt"], [1, "title"]], template: function VideoTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoTileComponent_Template_div_click_1_listener() { return ctx.gotoVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.video == null ? null : ctx.video.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.video == null ? null : ctx.video.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.video == null ? null : ctx.video.short_description, " ");
    } }, styles: ["[_nghost-%COMP%] {\n  overflow: hidden;\n  cursor: pointer;\n}\n[_nghost-%COMP%]:hover {\n  opacity: 0.7;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.col-4[_nghost-%COMP%] {\n  margin-bottom: 2rem;\n  margin-right: 1rem;\n}\n@media screen and (max-width: 640px) {\n  .col-4[_nghost-%COMP%] {\n    width: 95%;\n  }\n}\n@media screen and (min-width: 640px) and (max-width: 960px) {\n  .col-4[_nghost-%COMP%] {\n    width: 45%;\n  }\n}\n@media screen and (min-width: 960px) {\n  .col-4[_nghost-%COMP%] {\n    width: 30%;\n  }\n}\n@media screen and (min-width: 1248px) {\n  .col-4[_nghost-%COMP%] {\n    width: 22%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy92aWRlby10aWxlL3ZpZGVvLXRpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFERjtBQUVFO0VBQ0UsWUFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBREo7QUFHTTtFQUNFLFdBQUE7QUFEUjtBQU9BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUpGO0FBS0U7RUFIRjtJQUlJLFVBQUE7RUFGRjtBQUNGO0FBR0U7RUFORjtJQU9JLFVBQUE7RUFBRjtBQUNGO0FBQ0U7RUFURjtJQVVJLFVBQUE7RUFFRjtBQUNGO0FBREU7RUFaRjtJQWFJLFVBQUE7RUFJRjtBQUNGIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy92aWRlby10aWxlL3ZpZGVvLXRpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGluZy9icmVha3BvaW50c1wiO1xuXG46aG9zdCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC50aHVtYm5haWwge1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjpob3N0KC5jb2wtNCkge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtb2JpbGUpIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkZGVza3RvcCkge1xuICAgIHdpZHRoOiAyMiU7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-video-tile',
                templateUrl: './video-tile.component.html',
                styleUrls: ['./video-tile.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map