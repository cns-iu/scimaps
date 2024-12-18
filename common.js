"use strict";
(self["webpackChunkscimaps"] = self["webpackChunkscimaps"] || []).push([["common"],{

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
        slug: (0,_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__.toSlug)(item.title)
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
    resolve(route) {
        const { videosCount } = route.data;
        return this.content.getIndex('app-maker-videos').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((items) => {
            if (videosCount && videosCount > 0) {
                return items.slice(0, videosCount);
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
VideoTileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoTileComponent, selectors: [["sci-video-tile"]], inputs: { video: "video" }, decls: 7, vars: 3, consts: [[1, "container", 3, "click"], [1, "thumbnail"], [3, "src", "alt"], [1, "title"]], template: function VideoTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoTileComponent_Template_div_click_1_listener() { return ctx.gotoVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "markdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.video == null ? null : ctx.video.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.video == null ? null : ctx.video.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.video == null ? null : ctx.video.short_description, " ");
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_2__.MarkdownComponent], styles: ["[_nghost-%COMP%] {\n  overflow: hidden;\n  cursor: pointer;\n}\n[_nghost-%COMP%]:hover {\n  opacity: 0.7;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.col-4[_nghost-%COMP%] {\n  margin-bottom: 2rem;\n  margin-right: 1rem;\n}\n@media screen and (max-width: 640px) {\n  .col-4[_nghost-%COMP%] {\n    width: 95%;\n  }\n}\n@media screen and (min-width: 640px) and (max-width: 960px) {\n  .col-4[_nghost-%COMP%] {\n    width: 45%;\n  }\n}\n@media screen and (min-width: 960px) {\n  .col-4[_nghost-%COMP%] {\n    width: 30%;\n  }\n}\n@media screen and (min-width: 1248px) {\n  .col-4[_nghost-%COMP%] {\n    width: 22%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLXRpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFERjtBQUVFO0VBQ0UsWUFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBREo7QUFHTTtFQUNFLFdBQUE7QUFEUjtBQU9BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUpGO0FBS0U7RUFIRjtJQUlJLFVBQUE7RUFGRjtBQUNGO0FBR0U7RUFORjtJQU9JLFVBQUE7RUFBRjtBQUNGO0FBQ0U7RUFURjtJQVVJLFVBQUE7RUFFRjtBQUNGO0FBREU7RUFaRjtJQWFJLFVBQUE7RUFJRjtBQUNGIiwiZmlsZSI6InZpZGVvLXRpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGluZy9icmVha3BvaW50c1wiO1xuXG46aG9zdCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC50aHVtYm5haWwge1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjpob3N0KC5jb2wtNCkge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtb2JpbGUpIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkZGVza3RvcCkge1xuICAgIHdpZHRoOiAyMiU7XG4gIH1cbn1cbiJdfQ== */"] });


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