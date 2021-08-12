(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["learning-material-learning-material-module"],{

/***/ "L9xK":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/learning-material/learning-material-resolver.service.ts ***!
  \*******************************************************************************/
/*! exports provided: LearningMaterialResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningMaterialResolverService", function() { return LearningMaterialResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");





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
        return this.contentService.getContent(this.mdPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((lm) => {
            return Object.assign(Object.assign({}, lm), { slug: Object(_shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["toSlug"])(lm.title) });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((lm) => {
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
LearningMaterialResolverService.ɵfac = function LearningMaterialResolverService_Factory(t) { return new (t || LearningMaterialResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"])); };
LearningMaterialResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LearningMaterialResolverService, factory: LearningMaterialResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningMaterialResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"] }]; }, null); })();


/***/ }),

/***/ "TzDt":
/*!*********************************************************************!*\
  !*** ./src/app/pages/learning-material/learning-material.module.ts ***!
  \*********************************************************************/
/*! exports provided: LearningMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningMaterialModule", function() { return LearningMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _learning_material_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learning-material-routing.module */ "ovEf");
/* harmony import */ var _learning_material_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./learning-material.component */ "vQnS");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.module */ "4FRl");
/* harmony import */ var _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.module */ "t1/B");









class LearningMaterialModule {
}
LearningMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LearningMaterialModule });
LearningMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LearningMaterialModule_Factory(t) { return new (t || LearningMaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _learning_material_routing_module__WEBPACK_IMPORTED_MODULE_2__["LearningMaterialRoutingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"],
            _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_6__["DrawerHeaderModule"],
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__["DrawerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LearningMaterialModule, { declarations: [_learning_material_component__WEBPACK_IMPORTED_MODULE_3__["LearningMaterialComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _learning_material_routing_module__WEBPACK_IMPORTED_MODULE_2__["LearningMaterialRoutingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"],
        _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_6__["DrawerHeaderModule"],
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__["DrawerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_learning_material_component__WEBPACK_IMPORTED_MODULE_3__["LearningMaterialComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _learning_material_routing_module__WEBPACK_IMPORTED_MODULE_2__["LearningMaterialRoutingModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"],
                    _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_6__["DrawerHeaderModule"],
                    _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_7__["DrawerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ovEf":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/learning-material/learning-material-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: LearningMaterialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningMaterialRoutingModule", function() { return LearningMaterialRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _learning_material_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learning-material-resolver.service */ "L9xK");
/* harmony import */ var _learning_material_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./learning-material.component */ "vQnS");






const routes = [{
        path: ':slug',
        component: _learning_material_component__WEBPACK_IMPORTED_MODULE_3__["LearningMaterialComponent"],
        resolve: {
            learningMaterial: _learning_material_resolver_service__WEBPACK_IMPORTED_MODULE_2__["LearningMaterialResolverService"]
        }
    }];
class LearningMaterialRoutingModule {
}
LearningMaterialRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LearningMaterialRoutingModule });
LearningMaterialRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LearningMaterialRoutingModule_Factory(t) { return new (t || LearningMaterialRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LearningMaterialRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningMaterialRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vQnS":
/*!************************************************************************!*\
  !*** ./src/app/pages/learning-material/learning-material.component.ts ***!
  \************************************************************************/
/*! exports provided: LearningMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningMaterialComponent", function() { return LearningMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/drawer.animations */ "AY0P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.component */ "IMSB");
/* harmony import */ var _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.component */ "StKz");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "DgXe");








function LearningMaterialComponent_sci_drawer_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-drawer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sci-drawer-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backClick", function LearningMaterialComponent_sci_drawer_0_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@drawerInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Additional Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.item == null ? null : ctx_r0.item.image == null ? null : ctx_r0.item.image.lg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item == null ? null : ctx_r0.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.item == null ? null : ctx_r0.item.body);
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
LearningMaterialComponent.ɵfac = function LearningMaterialComponent_Factory(t) { return new (t || LearningMaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
LearningMaterialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LearningMaterialComponent, selectors: [["sci-learning-material"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["drawer", "", 1, "container"], ["backText", "Hosting", 3, "title", "backClick"], [1, "content"], [1, "row1"], ["alt", "", 3, "src"], [1, "row2"], [1, "title"], ["markdown", "", 3, "data"]], template: function LearningMaterialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LearningMaterialComponent_sci_drawer_0_Template, 11, 5, "sci-drawer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDrawer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_4__["DrawerComponent"], _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_5__["DrawerHeaderComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownComponent"]], styles: ["[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 1248px) {\n  [_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row1[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0px auto 2rem auto;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (min-width: 1248px) {\n  [_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n    margin-right: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9sZWFybmluZy1tYXRlcmlhbC9sZWFybmluZy1tYXRlcmlhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFMTjtBQU1NO0VBSkY7SUFLSSwyQkFBQTtFQUhOO0FBQ0Y7QUFJTTtFQUNFLE9BQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBRlI7QUFHUTtFQUNFLGVBQUE7QUFEVjtBQUtNO0VBQ0UsT0FBQTtBQUhSO0FBSVE7RUFGRjtJQUdJLGtCQUFBO0VBRFI7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvcGFnZXMvbGVhcm5pbmctbWF0ZXJpYWwvbGVhcm5pbmctbWF0ZXJpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbW9iaWxlOiA2NDBweDtcbiR0YWJsZXQ6IDk2MHB4O1xuJGRlc2t0b3A6IDEyNDhweDtcblxuOmhvc3Qge1xuICAuY29udGFpbmVyIHtcbiAgICAuY29udGVudCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRkZXNrdG9wKSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgIH1cbiAgICAgIC5yb3cxIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0byAycmVtIGF1dG87XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIC8vIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5yb3cyIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRkZXNrdG9wKSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningMaterialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-learning-material',
                templateUrl: './learning-material.component.html',
                styleUrls: ['./learning-material.component.scss'],
                animations: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=learning-material-learning-material-module.js.map