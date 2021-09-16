(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maker-videos-maker-videos-module"],{

/***/ "3VGK":
/*!***********************************************************!*\
  !*** ./src/app/pages/maker-videos/maker-videos.module.ts ***!
  \***********************************************************/
/*! exports provided: MakerVideosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakerVideosModule", function() { return MakerVideosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.module */ "4FRl");
/* harmony import */ var _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.module */ "t1/B");
/* harmony import */ var _shared_components_maker_video_maker_video_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/maker-video/maker-video.module */ "brYF");
/* harmony import */ var _maker_videos_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maker-videos-routing.module */ "vuS1");
/* harmony import */ var _maker_videos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./maker-videos.component */ "Lzih");









class MakerVideosModule {
}
MakerVideosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MakerVideosModule });
MakerVideosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MakerVideosModule_Factory(t) { return new (t || MakerVideosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _maker_videos_routing_module__WEBPACK_IMPORTED_MODULE_6__["MakerVideosRoutingModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
            _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_3__["DrawerHeaderModule"],
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_4__["DrawerModule"],
            _shared_components_maker_video_maker_video_module__WEBPACK_IMPORTED_MODULE_5__["MakerVideoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MakerVideosModule, { declarations: [_maker_videos_component__WEBPACK_IMPORTED_MODULE_7__["MakerVideosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _maker_videos_routing_module__WEBPACK_IMPORTED_MODULE_6__["MakerVideosRoutingModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
        _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_3__["DrawerHeaderModule"],
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_4__["DrawerModule"],
        _shared_components_maker_video_maker_video_module__WEBPACK_IMPORTED_MODULE_5__["MakerVideoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MakerVideosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_maker_videos_component__WEBPACK_IMPORTED_MODULE_7__["MakerVideosComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _maker_videos_routing_module__WEBPACK_IMPORTED_MODULE_6__["MakerVideosRoutingModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
                    _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_3__["DrawerHeaderModule"],
                    _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_4__["DrawerModule"],
                    _shared_components_maker_video_maker_video_module__WEBPACK_IMPORTED_MODULE_5__["MakerVideoModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "4FRl":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/drawer-header/drawer-header.module.ts ***!
  \*************************************************************************/
/*! exports provided: DrawerHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerHeaderModule", function() { return DrawerHeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _drawer_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawer-header.component */ "StKz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "PCNd");






class DrawerHeaderModule {
}
DrawerHeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DrawerHeaderModule });
DrawerHeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DrawerHeaderModule_Factory(t) { return new (t || DrawerHeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DrawerHeaderModule, { declarations: [_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__["DrawerHeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]], exports: [_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__["DrawerHeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawerHeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__["DrawerHeaderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                exports: [_drawer_header_component__WEBPACK_IMPORTED_MODULE_2__["DrawerHeaderComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Lzih":
/*!**************************************************************!*\
  !*** ./src/app/pages/maker-videos/maker-videos.component.ts ***!
  \**************************************************************/
/*! exports provided: MakerVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakerVideosComponent", function() { return MakerVideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/drawer.animations */ "AY0P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");






function MakerVideosComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MakerVideosComponent_div_5_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.gotoVideo(item_r1.slug); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r1.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.short_description, " ");
} }
class MakerVideosComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.body = { description: '' };
        this.videos = [];
        //
        this.showOverlay = false;
        this.selectedItem = null;
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
    }
    gotoVideo(slug) {
        this.router.navigate([slug], { relativeTo: this.route });
    }
}
MakerVideosComponent.ɵfac = function MakerVideosComponent_Factory(t) { return new (t || MakerVideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MakerVideosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MakerVideosComponent, selectors: [["sci-maker-videos"]], decls: 7, vars: 2, consts: [[1, "header1"], ["markdown", "", 1, "description", 3, "data"], [1, "spacer-32"], [1, "grid"], ["class", "grid-item", 4, "ngFor", "ngForOf"], [1, "grid-item"], [1, "item-container", 3, "click"], [1, "thumbnail"], [3, "src", "alt"], [1, "title"]], template: function MakerVideosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Map and Macroscope Maker Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MakerVideosComponent_div_5_Template, 6, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.body.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videos);
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%]   .grid[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  margin-right: 1rem;\n  cursor: pointer;\n  overflow: hidden;\n}\n@media screen and (max-width: 640px) {\n  [_nghost-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n@media screen and (min-width: 640px) and (max-width: 960px) {\n  [_nghost-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n}\n@media screen and (min-width: 960px) {\n  [_nghost-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n@media screen and (min-width: 1248px) {\n  [_nghost-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n    width: 22%;\n  }\n}\n[_nghost-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9tYWtlci12aWRlb3MvbWFrZXItdmlkZW9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFKSjtBQU1JO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFhQSxnQkFBQTtBQWhCTjtBQUlNO0VBSkY7SUFLSSxVQUFBO0VBRE47QUFDRjtBQUVNO0VBUEY7SUFRSSxVQUFBO0VBQ047QUFDRjtBQUFNO0VBVkY7SUFXSSxVQUFBO0VBR047QUFDRjtBQUZNO0VBYkY7SUFjSSxVQUFBO0VBS047QUFDRjtBQUZNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFJUjtBQURNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUdSO0FBRFU7RUFDRSxXQUFBO0FBR1oiLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3BhZ2VzL21ha2VyLXZpZGVvcy9tYWtlci12aWRlb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbW9iaWxlOiA2NDBweDtcbiR0YWJsZXQ6IDk2MHB4O1xuJGRlc2t0b3A6IDEyNDhweDtcblxuOmhvc3Qge1xuICAuZ3JpZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5ncmlkLWl0ZW0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtb2JpbGUpIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkZGVza3RvcCkge1xuICAgICAgICB3aWR0aDogMjIlO1xuICAgICAgfVxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuaXRlbS1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MakerVideosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-maker-videos',
                templateUrl: './maker-videos.component.html',
                styleUrls: ['./maker-videos.component.scss'],
                animations: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "StKz":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/drawer-header/drawer-header.component.ts ***!
  \****************************************************************************/
/*! exports provided: DrawerHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerHeaderComponent", function() { return DrawerHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");




class DrawerHeaderComponent {
    constructor() {
        this.className = 'sci-drawer-header';
        this.title = '';
        this.backText = '';
        this.backClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
DrawerHeaderComponent.ɵfac = function DrawerHeaderComponent_Factory(t) { return new (t || DrawerHeaderComponent)(); };
DrawerHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawerHeaderComponent, selectors: [["sci-drawer-header"]], hostVars: 2, hostBindings: function DrawerHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
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
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin-bottom: 1.5rem;\n  height: 2rem;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  justify-self: flex-start;\n  cursor: pointer;\n  color: #7996a3;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-icon[_ngcontent-%COMP%] {\n  margin-left: -0.5rem;\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-text[_ngcontent-%COMP%] {\n  display: block;\n}\n@media screen and (max-width: 640px) {\n  [_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #757575;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  margin-left: auto;\n  margin-right: auto;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kcmF3ZXItaGVhZGVyL2RyYXdlci1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQU47QUFDTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUdNO0VBQ0UsY0FBQTtBQURSO0FBRVE7RUFGRjtJQUdNLGFBQUE7RUFDVjtBQUNGO0FBRUk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUNNO0VBQ0UsZ0JBQUE7QUFDUiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJhd2VyLWhlYWRlci9kcmF3ZXItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGluZy9icmVha3BvaW50cyc7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBcbiAgLmRyYXdlci1oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5iYWNrLWJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiAjNzk5NmEzO1xuICAgICAgLmJhY2staWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICB9XG5cbiAgICAvLyAgSGlkZSBiYWNrIHRleHQgb24gbW9iaWxlLlxuICAgICAgLmJhY2stdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawerHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-drawer-header',
                templateUrl: './drawer-header.component.html',
                styleUrls: ['./drawer-header.component.scss']
            }]
    }], null, { className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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

/***/ "brYF":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/maker-video/maker-video.module.ts ***!
  \*********************************************************************/
/*! exports provided: MakerVideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakerVideoModule", function() { return MakerVideoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/safe.pipe */ "YYwF");
/* harmony import */ var _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drawer-header/drawer-header.module */ "4FRl");
/* harmony import */ var _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../drawer/drawer.module */ "t1/B");
/* harmony import */ var _maker_video_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maker-video.component */ "u5px");








class MakerVideoModule {
}
MakerVideoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MakerVideoModule });
MakerVideoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MakerVideoModule_Factory(t) { return new (t || MakerVideoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__["DrawerModule"],
            _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_4__["DrawerHeaderModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
            _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MakerVideoModule, { declarations: [_maker_video_component__WEBPACK_IMPORTED_MODULE_6__["MakerVideoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__["DrawerModule"],
        _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_4__["DrawerHeaderModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipeModule"]], exports: [_maker_video_component__WEBPACK_IMPORTED_MODULE_6__["MakerVideoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MakerVideoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_maker_video_component__WEBPACK_IMPORTED_MODULE_6__["MakerVideoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _drawer_drawer_module__WEBPACK_IMPORTED_MODULE_5__["DrawerModule"],
                    _drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_4__["DrawerHeaderModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
                    _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipeModule"]
                ],
                exports: [
                    _maker_video_component__WEBPACK_IMPORTED_MODULE_6__["MakerVideoComponent"]
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

/***/ "u5px":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/maker-video/maker-video.component.ts ***!
  \************************************************************************/
/*! exports provided: MakerVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakerVideoComponent", function() { return MakerVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/drawer.animations */ "AY0P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drawer/drawer.component */ "IMSB");
/* harmony import */ var _drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../drawer-header/drawer-header.component */ "StKz");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/safe.pipe */ "YYwF");









function MakerVideoComponent_sci_drawer_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r1.video.videoLink, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.video == null ? null : ctx_r1.video.long_description);
} }
function MakerVideoComponent_sci_drawer_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-drawer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sci-drawer-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backClick", function MakerVideoComponent_sci_drawer_0_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MakerVideoComponent_sci_drawer_0_div_3_Template, 5, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@drawerInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.video);
} }
class MakerVideoComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.showOverlay = false;
    }
    ngOnInit() {
        var _a, _b;
        this.showOverlay = true;
        const { slug } = this.route.snapshot.params;
        const videos = (_b = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.snapshot.data) === null || _b === void 0 ? void 0 : _b.videos;
        if (Array.isArray(videos)) {
            const video = videos.find(item => item.slug === slug);
            if (video) {
                this.video = video;
            }
        }
    }
    close() {
        this.showOverlay = false;
        setTimeout(() => {
            this.router.navigate(['/', 'maker-videos']);
        }, 500);
    }
}
MakerVideoComponent.ɵfac = function MakerVideoComponent_Factory(t) { return new (t || MakerVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MakerVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MakerVideoComponent, selectors: [["sci-maker-video"]], decls: 1, vars: 1, consts: [["class", "sci-drawer", 4, "ngIf"], [1, "sci-drawer"], ["drawer", "", 1, "drawer"], ["backText", "Maker Videos", 3, "backClick"], ["class", "overlay-container", 4, "ngIf"], [1, "overlay-container"], ["title", "YouTube video player", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "iframe", 3, "src"], [1, "spacer-72"], ["markdown", "", 1, "long-description", 3, "data"]], template: function MakerVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MakerVideoComponent_sci_drawer_0_Template, 4, 2, "sci-drawer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOverlay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_4__["DrawerComponent"], _drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_5__["DrawerHeaderComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownComponent"]], pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__["SafePipe"]], styles: ["[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%] {\n  background-color: black;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%]   .iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56vw;\n  border: 0;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%]   .long-description[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tYWtlci12aWRlby9tYWtlci12aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLHVCQUZRO0FBQVo7QUFHSTtFQUNFLHVCQUpNO0VBS04sYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUROO0FBRU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFBUjtBQUVNO0VBQ0UsWUFBQTtBQUFSIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tYWtlci12aWRlby9tYWtlci12aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLy8gT3ZlcmxheSBzdHlsaW5nXG4gICRiZ2NvbG9yOiBibGFjaztcbiAgLnNjaS1kcmF3ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xuICAgIC5vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdjb2xvcjtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC5pZnJhbWUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1NnZ3O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICB9XG4gICAgICAubG9uZy1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MakerVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-maker-video',
                templateUrl: './maker-video.component.html',
                styleUrls: ['./maker-video.component.scss'],
                animations: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "vuS1":
/*!*******************************************************************!*\
  !*** ./src/app/pages/maker-videos/maker-videos-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MakerVideosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakerVideosRoutingModule", function() { return MakerVideosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_components_maker_video_maker_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/maker-video/maker-video.component */ "u5px");
/* harmony import */ var _maker_videos_body_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maker-videos-body-resolver.service */ "x31g");
/* harmony import */ var _maker_videos_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maker-videos-resolver.service */ "mXuf");
/* harmony import */ var _maker_videos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maker-videos.component */ "Lzih");








const routes = [
    {
        path: '',
        component: _maker_videos_component__WEBPACK_IMPORTED_MODULE_5__["MakerVideosComponent"],
        resolve: {
            body: _maker_videos_body_resolver_service__WEBPACK_IMPORTED_MODULE_3__["MakerVideosBodyResolverService"],
            videos: _maker_videos_resolver_service__WEBPACK_IMPORTED_MODULE_4__["MakerVideosResolverService"]
        },
        children: [
            {
                path: ':slug',
                component: _shared_components_maker_video_maker_video_component__WEBPACK_IMPORTED_MODULE_2__["MakerVideoComponent"]
            }
        ]
    }
];
class MakerVideosRoutingModule {
}
MakerVideosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MakerVideosRoutingModule });
MakerVideosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MakerVideosRoutingModule_Factory(t) { return new (t || MakerVideosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MakerVideosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MakerVideosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "x31g":
/*!**************************************************************************!*\
  !*** ./src/app/pages/maker-videos/maker-videos-body-resolver.service.ts ***!
  \**************************************************************************/
/*! exports provided: MakerVideosBodyResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakerVideosBodyResolverService", function() { return MakerVideosBodyResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");




class MakerVideosBodyResolverService {
    constructor(content) {
        this.content = content;
        this.mdPath = 'site/maker-videos/maker-videos.md';
    }
    resolve() {
        return this.content.getContent(this.mdPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
}
MakerVideosBodyResolverService.ɵfac = function MakerVideosBodyResolverService_Factory(t) { return new (t || MakerVideosBodyResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"])); };
MakerVideosBodyResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MakerVideosBodyResolverService, factory: MakerVideosBodyResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MakerVideosBodyResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-maker-videos-maker-videos-module.js.map