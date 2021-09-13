(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_components_social_sidebar_social_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/social-sidebar/social-sidebar.component */ "eERE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_components_action_card_action_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/action-card/action-card.component */ "MSW7");





class HomeComponent {
    constructor() {
        /** HTML class name */
        this.clsName = 'sci-home';
        this.bgStyle = {
            'background-image': 'url(assets/images/home/image01.png)'
        };
        this.testActionItem = {
            title: 'Atlas of Forecasts: Modeling and Mapping Desirable Futures.',
            subtitle: '',
            body: 'A new book from Katy Börner! This third book in the series focuses on using models and visualizations to help society envision and create the future we want.',
            buttonLabel: 'Purchase',
            buttonLink: 'https://www.amazon.com/Atlas-Forecasts-Modeling-Mapping-Desirable/dp/0262045958/ref=[…]&keywords=borner+atlas+forecast&qid=1620409272&s=books&sr=1-1',
            imageSource: 'assets/action-card/cta-atlas-of-forecasts.jpg'
        };
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["sci-home"]], hostVars: 2, hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 6, vars: 2, consts: [[1, "home"], [1, "image-container", 3, "ngStyle"], [1, "logo"], ["src", "assets/images/home/logo-pas.svg", "alt", ""], [1, "action-card", 3, "actionItem"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sci-social-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "sci-action-card", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.bgStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actionItem", ctx.testActionItem);
    } }, directives: [_shared_components_social_sidebar_social_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SocialSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _shared_components_action_card_action_card_component__WEBPACK_IMPORTED_MODULE_3__["ActionCardComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  border: 1px solid black;\n  width: 100%;\n  height: calc(100vh - 72px);\n}\n[_nghost-%COMP%]   .action-card[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n}\n@media screen and (min-width: 640px) {\n  [_nghost-%COMP%]   .action-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 960px) {\n  [_nghost-%COMP%]   .action-card[_ngcontent-%COMP%] {\n    right: 3rem;\n  }\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  max-width: 960px;\n  width: 25vw;\n}\n@media screen and (max-width: 960px) {\n  [_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 50vw;\n  }\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .home[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 72px);\n}\n[_nghost-%COMP%]   .home[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 72px);\n  position: relative;\n  overflow-x: hidden;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxjQUFBO0VBRUEsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFORjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFMSjtBQU1JO0VBTEY7SUFNSSxXQUFBO0VBSEo7QUFDRjtBQUlJO0VBUkY7SUFTSSxXQUFBO0VBREo7QUFDRjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUZKO0FBR0k7RUFSRjtJQVNJLFdBQUE7RUFBSjtBQUNGO0FBQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNOO0FBR0U7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7QUFESjtBQUVJO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBQU4iLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3NjcmVlbic7XG5cbiRtb2JpbGU6IDY0MHB4O1xuJHRhYmxldDogOTYwcHg7XG4kZGVza3RvcDogMTI0OHB4O1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MnB4KTtcbiAgLmFjdGlvbi1jYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgQG1lZGlhICBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHRhYmxldCkge1xuICAgICAgcmlnaHQ6IDNyZW07XG4gICAgfVxuICB9XG5cbiAgLmxvZ28ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgIHdpZHRoOiAyNXZ3O1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcbiAgICAgIHdpZHRoOiA1MHZ3O1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLmhvbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcycHgpO1xuICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzJweCk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "1LmZ");
/* harmony import */ var _shared_components_action_card_action_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/action-card/action-card.module */ "BrT2");
/* harmony import */ var _shared_components_social_sidebar_social_sidebar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/social-sidebar/social-sidebar.module */ "g6xp");







class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            _shared_components_action_card_action_card_module__WEBPACK_IMPORTED_MODULE_4__["ActionCardModule"],
            _shared_components_social_sidebar_social_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["SocialSidebarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        _shared_components_action_card_action_card_module__WEBPACK_IMPORTED_MODULE_4__["ActionCardModule"],
        _shared_components_social_sidebar_social_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["SocialSidebarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                    _shared_components_action_card_action_card_module__WEBPACK_IMPORTED_MODULE_4__["ActionCardModule"],
                    _shared_components_social_sidebar_social_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["SocialSidebarModule"]
                ],
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "1LmZ");





const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        data: {
            class: 'home-module'
        }
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "BrT2":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/action-card/action-card.module.ts ***!
  \*********************************************************************/
/*! exports provided: ActionCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionCardModule", function() { return ActionCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _action_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-card.component */ "MSW7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");





class ActionCardModule {
}
ActionCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ActionCardModule });
ActionCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ActionCardModule_Factory(t) { return new (t || ActionCardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ActionCardModule, { declarations: [_action_card_component__WEBPACK_IMPORTED_MODULE_2__["ActionCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]], exports: [_action_card_component__WEBPACK_IMPORTED_MODULE_2__["ActionCardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_action_card_component__WEBPACK_IMPORTED_MODULE_2__["ActionCardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
                ],
                exports: [_action_card_component__WEBPACK_IMPORTED_MODULE_2__["ActionCardComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "MSW7":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/action-card/action-card.component.ts ***!
  \************************************************************************/
/*! exports provided: ActionCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionCardComponent", function() { return ActionCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");



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
ActionCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionCardComponent, selectors: [["sci-action-card"]], hostVars: 2, hostBindings: function ActionCardComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { actionItem: "actionItem" }, decls: 13, vars: 8, consts: [[1, "action-card"], [1, "text-content"], [1, "title"], [1, "subtitle"], [1, "body"], [1, "action-button", 3, "click"], [1, "image-container"], [1, "close-icon", 3, "click"]], template: function ActionCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionCardComponent_Template_div_click_8_listener() { return ctx.goToLink(ctx.actionItem.buttonLink); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionCardComponent_Template_mat_icon_click_11_listener() { return ctx.closed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx.closed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.actionItem.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.actionItem.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.actionItem.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.actionItem.buttonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.imageUrl);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: ["[_nghost-%COMP%]   .action-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: none;\n  position: relative;\n  margin-left: auto;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n  max-width: 27.6875rem;\n  height: 13rem;\n}\n[_nghost-%COMP%]   .action-card[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n  width: 65%;\n}\n[_nghost-%COMP%]   .action-card[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 0.8rem;\n}\n[_nghost-%COMP%]   .action-card[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n[_nghost-%COMP%]   .action-card[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  height: 5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   .action-card[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding: 0.25rem;\n  font-size: 0.75rem;\n  margin-top: 0.5rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .action-card[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 100%;\n  border-top-right-radius: 1rem;\n  background-size: cover;\n}\n[_nghost-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2%;\n  top: 5%;\n  cursor: pointer;\n  border-radius: 50%;\n}\n[_nghost-%COMP%]   .close-icon[_ngcontent-%COMP%]:hover {\n  background-color: #7997a3;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hY3Rpb24tY2FyZC9hY3Rpb24tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBRUk7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQUFOO0FBQ007RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBQ1I7QUFFTTtFQUNFLGlCQUFBO0FBQVI7QUFHTTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFEUjtBQUlNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZSO0FBTUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUFKTjtBQVFFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQU5KO0FBT0k7RUFDRSx5QkFBQTtBQUxOO0FBV0U7RUFDRSx3QkFBQTtBQVRKIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hY3Rpb24tY2FyZC9hY3Rpb24tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmFjdGlvbi1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07XG4gICAgbWF4LXdpZHRoOiAyNy42ODc1cmVtO1xuICAgIGhlaWdodDogMTNyZW07XG5cbiAgICAudGV4dC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICB3aWR0aDogNjUlO1xuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjhyZW07XG4gICAgICB9XG5cbiAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgfVxuXG4gICAgICAuYm9keSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgfVxuXG4gICAgICAuYWN0aW9uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgfVxuXG4gIC5jbG9zZS1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIlO1xuICAgIHRvcDogNSU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTk3YTM7XG4gICAgfVxuICB9XG5cbiAgXG5cbiAgLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-action-card',
                templateUrl: './action-card.component.html',
                styleUrls: ['./action-card.component.scss']
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], actionItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "eERE":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/social-sidebar/social-sidebar.component.ts ***!
  \******************************************************************************/
/*! exports provided: SocialSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSidebarComponent", function() { return SocialSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");



class SocialSidebarComponent {
    constructor() {
        // Component class name
        this.clsName = 'sci-social-sidebar';
        this.facebook = 'https://www.facebook.com/mappingscience';
        this.twitter = 'https://www.twitter.com/mappingscience';
        this.instagram = 'https://www.instagram.com/cns_at_iu';
    }
    goToLink(link) {
        window.open(link, '_blank');
    }
}
SocialSidebarComponent.ɵfac = function SocialSidebarComponent_Factory(t) { return new (t || SocialSidebarComponent)(); };
SocialSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialSidebarComponent, selectors: [["sci-social-sidebar"]], hostVars: 2, hostBindings: function SocialSidebarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 8, vars: 0, consts: [[1, "social-button", 3, "click"], ["svgIcon", "social:twitter", 1, "icon", "svg", "twitter"], ["svgIcon", "social:facebook", 1, "icon", "svg"], ["svgIcon", "social:instagram", 1, "icon", "svg"], [1, "social-button", "bottom", 3, "click"], ["svgIcon", "social:email", 1, "icon", "svg", "email"]], template: function SocialSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialSidebarComponent_Template_div_click_0_listener() { return ctx.goToLink("https://twitter.com/intent/tweet"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialSidebarComponent_Template_div_click_2_listener() { return ctx.goToLink("https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fscimaps.org%2F&src=sdkpreparse"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialSidebarComponent_Template_div_click_4_listener() { return ctx.goToLink("https://www.instagram.com/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialSidebarComponent_Template_div_click_6_listener() { return ctx.goToLink("mailto:"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  z-index: 2;\n}\n[_nghost-%COMP%]   .social-button[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  width: 2.5rem;\n  text-align: center;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .social-button.bottom[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .social-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  height: 2.5rem;\n  width: 2.5rem;\n}\n[_nghost-%COMP%]   .social-button[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zb2NpYWwtc2lkZWJhci9zb2NpYWwtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3NjaW1hcHMvc3JjL3N0eWxpbmcvX2ljb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQURGO0FBSUU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZKO0FBSUk7RUFDRSxtQkFBQTtBQUZOO0FBS0k7RUNsQkYsYURtQnVCO0VDbEJ2QixjRGtCdUI7RUNqQnZCLGlCRGlCdUI7RUNoQnZCLG1CRGdCdUI7RUFDbkIsY0FBQTtFQUNBLGFBQUE7QUFBTjtBQUdJO0VBQ0UsWUFBQTtBQUROIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zb2NpYWwtc2lkZWJhci9zb2NpYWwtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ2ljb24nO1xuXG46aG9zdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB6LWluZGV4OiAyO1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcblxuICAuc29jaWFsLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICBcbiAgICAmLmJvdHRvbSB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgIEBpbmNsdWRlIGljb24uc2l6ZSgxLjVyZW0pO1xuICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICB3aWR0aDogMi41cmVtO1xuICAgIH1cblxuICAgIC5lbWFpbCB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuICB9XG59IiwiXG5AbWl4aW4gc2l6ZSgkc2l6ZSkge1xuICB3aWR0aDogJHNpemU7XG4gIGhlaWdodDogJHNpemU7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-social-sidebar',
                templateUrl: './social-sidebar.component.html',
                styleUrls: ['./social-sidebar.component.scss']
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "g6xp":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/social-sidebar/social-sidebar.module.ts ***!
  \***************************************************************************/
/*! exports provided: SocialSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSidebarModule", function() { return SocialSidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _social_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-sidebar.component */ "eERE");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");





class SocialSidebarModule {
}
SocialSidebarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SocialSidebarModule });
SocialSidebarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SocialSidebarModule_Factory(t) { return new (t || SocialSidebarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SocialSidebarModule, { declarations: [_social_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SocialSidebarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]], exports: [_social_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SocialSidebarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialSidebarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_social_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SocialSidebarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
                ],
                exports: [_social_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SocialSidebarComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map