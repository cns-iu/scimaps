"use strict";
(self["webpackChunkscimaps"] = self["webpackChunkscimaps"] || []).push([["projects_scimaps_src_app_pages_home_home_module_ts"],{

/***/ 6979:
/*!***************************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/home/home-body-resolver.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeBodyResolverService": () => (/* binding */ HomeBodyResolverService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/utils */ 9298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/content.service */ 8208);




class HomeBodyResolverService {
    constructor(content) {
        this.content = content;
        this.mdPath = 'site/home/home.md';
        this.directory = 'assets/content/site/home';
    }
    resolve() {
        return this.content.getContent(this.mdPath).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((body) => {
            return this.updatePaths(body);
        }));
    }
    updatePaths(body) {
        const { cta } = body;
        if (cta.imageSource && !(0,_constants_utils__WEBPACK_IMPORTED_MODULE_0__.isHttp)(cta.imageSource)) {
            cta.imageSource = `${this.directory}/${cta.imageSource}`;
        }
        body.cta = cta;
        return body;
    }
}
HomeBodyResolverService.ɵfac = function HomeBodyResolverService_Factory(t) { return new (t || HomeBodyResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService)); };
HomeBodyResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HomeBodyResolverService, factory: HomeBodyResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9404:
/*!********************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/home/home-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _home_body_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-body-resolver.service */ 6979);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 3655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
        data: {
            class: 'home-module'
        },
        resolve: {
            homeBody: _home_body_resolver_service__WEBPACK_IMPORTED_MODULE_0__.HomeBodyResolverService
        }
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 3655:
/*!***************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/home/home.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_components_social_sidebar_social_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/social-sidebar/social-sidebar.component */ 1250);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_action_card_action_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/action-card/action-card.component */ 7785);





function HomeComponent_sci_action_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "sci-action-card", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("actionItem", ctx_r0.actionCard);
} }
class HomeComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        /** HTML class name */
        this.clsName = 'sci-home';
        this.bgStyle = {
            'background-image': 'url(assets/images/home/image01.png)'
        };
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((response) => {
            const { homeBody } = response;
            if (homeBody && homeBody.hasOwnProperty('cta')) {
                this.actionCard = homeBody.cta;
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["sci-home"]], hostVars: 2, hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 6, vars: 2, consts: [[1, "home"], [1, "image-container", 3, "ngStyle"], [1, "logo"], ["src", "assets/images/home/logo-pas.svg", "alt", ""], ["class", "action-card", 3, "actionItem", 4, "ngIf"], [1, "action-card", 3, "actionItem"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "sci-social-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HomeComponent_sci_action_card_5_Template, 1, 1, "sci-action-card", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.bgStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.actionCard);
    } }, directives: [_shared_components_social_sidebar_social_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SocialSidebarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_action_card_action_card_component__WEBPACK_IMPORTED_MODULE_1__.ActionCardComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  border: 1px solid black;\n  width: 100%;\n  height: calc(100vh - 72px);\n}\n[_nghost-%COMP%]   .action-card[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: 2;\n}\n@media screen and (min-width: 640px) {\n  [_nghost-%COMP%]   .action-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 960px) {\n  [_nghost-%COMP%]   .action-card[_ngcontent-%COMP%] {\n    right: 3rem;\n  }\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  max-width: 960px;\n  width: 25vw;\n}\n@media screen and (max-width: 960px) {\n  [_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 50vw;\n  }\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .home[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 72px);\n}\n[_nghost-%COMP%]   .home[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 72px);\n  position: relative;\n  overflow-x: hidden;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxjQUFBO0VBRUEsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFORjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFMSjtBQU1JO0VBTEY7SUFNSSxXQUFBO0VBSEo7QUFDRjtBQUlJO0VBUkY7SUFTSSxXQUFBO0VBREo7QUFDRjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUZKO0FBR0k7RUFSRjtJQVNJLFdBQUE7RUFBSjtBQUNGO0FBQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNOO0FBR0U7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7QUFESjtBQUVJO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBQU4iLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3NjcmVlbic7XG5cbiRtb2JpbGU6IDY0MHB4O1xuJHRhYmxldDogOTYwcHg7XG4kZGVza3RvcDogMTI0OHB4O1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MnB4KTtcbiAgLmFjdGlvbi1jYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDI7IC8vIHNob3VsZCBub3Qgb3ZlcmxhcCB3aXRoIGxvZ29cbiAgICBAbWVkaWEgIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1vYmlsZSkge1xuICAgICAgd2lkdGg6IDEwMCU7IFxuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICByaWdodDogM3JlbTtcbiAgICB9XG4gIH1cblxuICAubG9nbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgd2lkdGg6IDI1dnc7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHRhYmxldCkge1xuICAgICAgd2lkdGg6IDUwdnc7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAuaG9tZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzJweCk7XG4gICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MnB4KTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 8518:
/*!************************************************************!*\
  !*** ./projects/scimaps/src/app/pages/home/home.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 9404);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 3655);
/* harmony import */ var _shared_components_action_card_action_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/action-card/action-card.module */ 1325);
/* harmony import */ var _shared_components_social_sidebar_social_sidebar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/social-sidebar/social-sidebar.module */ 6757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);






class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
            _shared_components_action_card_action_card_module__WEBPACK_IMPORTED_MODULE_2__.ActionCardModule,
            _shared_components_social_sidebar_social_sidebar_module__WEBPACK_IMPORTED_MODULE_3__.SocialSidebarModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
        _shared_components_action_card_action_card_module__WEBPACK_IMPORTED_MODULE_2__.ActionCardModule,
        _shared_components_social_sidebar_social_sidebar_module__WEBPACK_IMPORTED_MODULE_3__.SocialSidebarModule] }); })();


/***/ }),

/***/ 7785:
/*!*****************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/action-card/action-card.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionCardComponent": () => (/* binding */ ActionCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 2529);




function ActionCardComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionCardComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.goToLink(ctx_r1.actionItem.buttonLink); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.actionItem.buttonLabel);
} }
class ActionCardComponent {
    constructor() {
        /** HTML class name */
        this.clsName = 'sci-action-card';
        this.closed = false;
    }
    get imageUrl() {
        return `url('${this.actionItem.imageSource}')`;
    }
    goToLink(link) {
        window.open(link, '_blank');
    }
}
ActionCardComponent.ɵfac = function ActionCardComponent_Factory(t) { return new (t || ActionCardComponent)(); };
ActionCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionCardComponent, selectors: [["sci-action-card"]], hostVars: 2, hostBindings: function ActionCardComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { actionItem: "actionItem" }, decls: 12, vars: 8, consts: [[1, "action-card"], [1, "text-content"], [1, "title"], [1, "subtitle"], [1, "body"], ["markdown", "", 3, "data"], ["class", "action-button", 3, "click", 4, "ngIf"], [1, "image-container"], [1, "close-icon", 3, "click"], [1, "action-button", 3, "click"]], template: function ActionCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ActionCardComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionCardComponent_Template_mat_icon_click_10_listener() { return ctx.closed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx.closed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.actionItem.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.actionItem.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.actionItem.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actionItem.buttonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.imageUrl);
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_1__.MarkdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], styles: ["[_nghost-%COMP%]   .action-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: none;\n  position: relative;\n  margin-left: auto;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n  max-width: 31rem;\n}\n[_nghost-%COMP%]   .action-card[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n  width: 60%;\n}\n[_nghost-%COMP%]   .action-card[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 0.8rem;\n}\n[_nghost-%COMP%]   .action-card[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n[_nghost-%COMP%]   .action-card[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   .action-card[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding: 0.25rem;\n  font-size: 0.75rem;\n  margin-top: 0.5rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .action-card[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  width: 16rem;\n  border-top-right-radius: 1rem;\n  background-size: cover;\n  background-repeat: round;\n}\n[_nghost-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2%;\n  top: 5%;\n  cursor: pointer;\n  border-radius: 50%;\n}\n[_nghost-%COMP%]   .close-icon[_ngcontent-%COMP%]:hover {\n  background-color: #7997a3;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBRE47QUFFTTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUFBUjtBQUdNO0VBQ0UsaUJBQUE7QUFEUjtBQUlNO0VBQ0UsaUJBQUE7RUFFQSxnQkFBQTtFQUNBLHVCQUFBO0FBSFI7QUFNTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFKUjtBQVFJO0VBQ0UsWUFBQTtFQUVBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQVBOO0FBV0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBVEo7QUFVSTtFQUNFLHlCQUFBO0FBUk47QUFZRTtFQUNFLHdCQUFBO0FBVkoiLCJmaWxlIjoiYWN0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5hY3Rpb24tY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxcmVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxcmVtO1xuICAgIG1heC13aWR0aDogMzFyZW07XG4gICAgLy8gbWF4LWhlaWdodDogMjByZW07XG5cbiAgICAudGV4dC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG4gICAgICB9XG5cbiAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgfVxuXG4gICAgICAuYm9keSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgICAgICAvLyBoZWlnaHQ6IDVyZW07XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgfVxuXG4gICAgICAuYWN0aW9uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTZyZW07XG4gICAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG4gICAgfVxuICB9XG5cbiAgLmNsb3NlLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMiU7XG4gICAgdG9wOiA1JTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTdhMztcbiAgICB9XG4gIH1cblxuICAuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 1325:
/*!**************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/action-card/action-card.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionCardModule": () => (/* binding */ ActionCardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _action_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-card.component */ 7785);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ 8379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);





class ActionCardModule {
}
ActionCardModule.ɵfac = function ActionCardModule_Factory(t) { return new (t || ActionCardModule)(); };
ActionCardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ActionCardModule });
ActionCardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ActionCardModule, { declarations: [_action_card_component__WEBPACK_IMPORTED_MODULE_0__.ActionCardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownModule], exports: [_action_card_component__WEBPACK_IMPORTED_MODULE_0__.ActionCardComponent] }); })();


/***/ }),

/***/ 1250:
/*!***********************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/social-sidebar/social-sidebar.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialSidebarComponent": () => (/* binding */ SocialSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 2529);


class SocialSidebarComponent {
    constructor() {
        // Component class name
        this.clsName = 'sci-social-sidebar';
        this.facebook = 'https://www.facebook.com/mappingscience';
        this.twitter = 'https://www.twitter.com/mappingscience';
        this.instagram = 'https://www.instagram.com/cns_at_iu';
        this.bluesky = 'https://bsky.app/profile/cnscenter.bsky.social';
        this.email = 'mailto:cnscntr@iu.edu';
    }
}
SocialSidebarComponent.ɵfac = function SocialSidebarComponent_Factory(t) { return new (t || SocialSidebarComponent)(); };
SocialSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialSidebarComponent, selectors: [["sci-social-sidebar"]], hostVars: 2, hostBindings: function SocialSidebarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 15, vars: 5, consts: [[1, "social-button"], ["mat-icon-button", "", "target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["svgIcon", "social:x", 1, "icon", "svg", "twitter"], ["svgIcon", "social:bluesky", 1, "icon", "svg", "bluesky"], ["svgIcon", "social:facebook", 1, "icon", "svg"], ["svgIcon", "social:instagram", 1, "icon", "svg"], [1, "social-button", "bottom"], ["svgIcon", "social:email", 1, "icon", "svg", "email"]], template: function SocialSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.bluesky, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.email, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon], styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  z-index: 3;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n[_nghost-%COMP%]   .social-button[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  width: 2.5rem;\n  text-align: center;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .social-button.bottom[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .social-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  height: 2.5rem;\n  width: 2.5rem;\n}\n[_nghost-%COMP%]   .social-button[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%], [_nghost-%COMP%]   .social-button[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], [_nghost-%COMP%]   .social-button[_ngcontent-%COMP%]   .bluesky[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGluZy9faWNvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBREY7QUFJRTtFQUNFLGNBQUE7QUFGSjtBQUtFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFISjtBQUtJO0VBQ0UsbUJBQUE7QUFITjtBQU1JO0VDdEJGLGFEdUJ1QjtFQ3RCdkIsY0RzQnVCO0VDckJ2QixpQkRxQnVCO0VDcEJ2QixtQkRvQnVCO0VBQ25CLGNBQUE7RUFDQSxhQUFBO0FBRE47QUFJSTtFQUNFLFlBQUE7QUFGTiIsImZpbGUiOiJzb2NpYWwtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ2ljb24nO1xuXG46aG9zdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB6LWluZGV4OiAzO1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcblxuICBhIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIC5zb2NpYWwtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICB3aWR0aDogMi41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmLmJvdHRvbSB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgIEBpbmNsdWRlIGljb24uc2l6ZSgxLjVyZW0pO1xuICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICB3aWR0aDogMi41cmVtO1xuICAgIH1cblxuICAgIC50d2l0dGVyLCAuZW1haWwsIC5ibHVlc2t5IHtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICB9XG4gIH1cbn1cbiIsIlxuQG1peGluIHNpemUoJHNpemUpIHtcbiAgd2lkdGg6ICRzaXplO1xuICBoZWlnaHQ6ICRzaXplO1xuICBmb250LXNpemU6ICRzaXplO1xuICBsaW5lLWhlaWdodDogJHNpemU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 6757:
/*!********************************************************************************************!*\
  !*** ./projects/scimaps/src/app/shared/components/social-sidebar/social-sidebar.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialSidebarModule": () => (/* binding */ SocialSidebarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _social_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-sidebar.component */ 1250);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




class SocialSidebarModule {
}
SocialSidebarModule.ɵfac = function SocialSidebarModule_Factory(t) { return new (t || SocialSidebarModule)(); };
SocialSidebarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SocialSidebarModule });
SocialSidebarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SocialSidebarModule, { declarations: [_social_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SocialSidebarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule], exports: [_social_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SocialSidebarComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_scimaps_src_app_pages_home_home_module_ts.js.map