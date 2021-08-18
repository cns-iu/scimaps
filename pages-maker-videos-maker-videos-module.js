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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _maker_videos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maker-videos-routing.module */ "vuS1");
/* harmony import */ var _maker_videos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maker-videos.component */ "Lzih");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.module */ "4FRl");
/* harmony import */ var _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.module */ "t1/B");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/safe.pipe */ "YYwF");









class MakerVideosModule {
}
MakerVideosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MakerVideosModule });
MakerVideosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MakerVideosModule_Factory(t) { return new (t || MakerVideosModule)(); }, providers: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__["SafePipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _maker_videos_routing_module__WEBPACK_IMPORTED_MODULE_2__["MakerVideosRoutingModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
            _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_5__["DrawerHeaderModule"],
            _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_6__["DrawerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MakerVideosModule, { declarations: [_maker_videos_component__WEBPACK_IMPORTED_MODULE_3__["MakerVideosComponent"], _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__["SafePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _maker_videos_routing_module__WEBPACK_IMPORTED_MODULE_2__["MakerVideosRoutingModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
        _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_5__["DrawerHeaderModule"],
        _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_6__["DrawerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MakerVideosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_maker_videos_component__WEBPACK_IMPORTED_MODULE_3__["MakerVideosComponent"], _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__["SafePipe"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _maker_videos_routing_module__WEBPACK_IMPORTED_MODULE_2__["MakerVideosRoutingModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
                    _shared_components_drawer_header_drawer_header_module__WEBPACK_IMPORTED_MODULE_5__["DrawerHeaderModule"],
                    _shared_components_drawer_drawer_module__WEBPACK_IMPORTED_MODULE_6__["DrawerModule"]
                ],
                providers: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__["SafePipe"]]
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
/* harmony import */ var _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/drawer/drawer.component */ "IMSB");
/* harmony import */ var _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/drawer-header/drawer-header.component */ "StKz");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/safe.pipe */ "YYwF");









function MakerVideosComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MakerVideosComponent_div_5_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r4.selectedItem = item_r2; return ctx_r4.showOverlay = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r2.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.short_description, " ");
} }
function MakerVideosComponent_sci_drawer_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-drawer", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sci-drawer-header", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backClick", function MakerVideosComponent_sci_drawer_6_Template_sci_drawer_header_backClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showOverlay = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "iframe", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@drawerInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 3, ctx_r1.selectedItem.videoLink, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.selectedItem.long_description);
} }
class MakerVideosComponent {
    constructor(route) {
        this.route = route;
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
}
MakerVideosComponent.ɵfac = function MakerVideosComponent_Factory(t) { return new (t || MakerVideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
MakerVideosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MakerVideosComponent, selectors: [["sci-maker-videos"]], decls: 7, vars: 3, consts: [[1, "header1"], ["markdown", "", 1, "description", 3, "data"], [1, "spacer-32"], [1, "grid"], ["class", "grid-item", 4, "ngFor", "ngForOf"], ["class", "sci-drawer", 4, "ngIf"], [1, "grid-item"], [1, "item-container", 3, "click"], [1, "thumbnail"], [3, "src", "alt"], [1, "title"], [1, "sci-drawer"], ["drawer", "", 1, "drawer"], ["backText", "Maker Videos", 3, "backClick"], [1, "overlay-container"], ["title", "YouTube video player", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "iframe", 3, "src"], [1, "spacer-72"], ["markdown", "", 1, "long-description", 3, "data"]], template: function MakerVideosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Map and Macroscope Maker Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MakerVideosComponent_div_5_Template, 6, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MakerVideosComponent_sci_drawer_6_Template, 8, 6, "sci-drawer", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.body.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOverlay && ctx.selectedItem);
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_5__["DrawerComponent"], _shared_components_drawer_header_drawer_header_component__WEBPACK_IMPORTED_MODULE_6__["DrawerHeaderComponent"]], pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__["SafePipe"]], styles: ["[_nghost-%COMP%]   .grid[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  margin-right: 1rem;\n  cursor: pointer;\n  overflow: hidden;\n}\n@media screen and (max-width: 640px) {\n  [_nghost-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n@media screen and (min-width: 640px) and (max-width: 960px) {\n  [_nghost-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n}\n@media screen and (min-width: 960px) {\n  [_nghost-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n@media screen and (min-width: 1248px) {\n  [_nghost-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n    width: 22%;\n  }\n}\n[_nghost-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%] {\n  background-color: black;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%]   .iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70vh;\n  border: 0;\n}\n[_nghost-%COMP%]   .sci-drawer[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%]   .long-description[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9tYWtlci12aWRlb3MvbWFrZXItdmlkZW9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFKSjtBQU1JO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFhQSxnQkFBQTtBQWhCTjtBQUlNO0VBSkY7SUFLSSxVQUFBO0VBRE47QUFDRjtBQUVNO0VBUEY7SUFRSSxVQUFBO0VBQ047QUFDRjtBQUFNO0VBVkY7SUFXSSxVQUFBO0VBR047QUFDRjtBQUZNO0VBYkY7SUFjSSxVQUFBO0VBS047QUFDRjtBQUZNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFJUjtBQURNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUdSO0FBRFU7RUFDRSxXQUFBO0FBR1o7QUFNRTtFQUNFLHVCQUZRO0FBRlo7QUFLSTtFQUNFLHVCQUpNO0VBS04sYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUhOO0FBSU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFGUjtBQUlNO0VBQ0UsWUFBQTtBQUZSIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9tYWtlci12aWRlb3MvbWFrZXItdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1vYmlsZTogNjQwcHg7XG4kdGFibGV0OiA5NjBweDtcbiRkZXNrdG9wOiAxMjQ4cHg7XG5cbjpob3N0IHtcbiAgLmdyaWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAuZ3JpZC1pdGVtIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbW9iaWxlKSBhbmQgKG1heC13aWR0aDogJHRhYmxldCkge1xuICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHRhYmxldCkge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGRlc2t0b3ApIHtcbiAgICAgICAgd2lkdGg6IDIyJTtcbiAgICAgIH1cbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLml0ZW0tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC50aHVtYm5haWwge1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBPdmVybGF5IHN0eWxpbmdcbiAgJGJnY29sb3I6IGJsYWNrO1xuICAuc2NpLWRyYXdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7XG4gICAgLm92ZXJsYXktY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLmlmcmFtZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDcwdmg7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgIH1cbiAgICAgIC5sb25nLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"], data: { animation: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MakerVideosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-maker-videos',
                templateUrl: './maker-videos.component.html',
                styleUrls: ['./maker-videos.component.scss'],
                animations: [_constants_drawer_animations__WEBPACK_IMPORTED_MODULE_1__["drawerInOut"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


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
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-self: flex-start;\n  cursor: pointer;\n  color: #7996a3;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-icon[_ngcontent-%COMP%] {\n  margin-left: -0.5rem;\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-text[_ngcontent-%COMP%] {\n  display: block;\n}\n@media screen and (max-width: 640px) {\n  [_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #757575;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kcmF3ZXItaGVhZGVyL2RyYXdlci1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0FBREY7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNOO0FBQU07RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFFTTtFQUNFLGNBQUE7QUFBUjtBQUNRO0VBRkY7SUFHTSxhQUFBO0VBRVY7QUFDRjtBQUNJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFDTjtBQUFNO0VBQ0UsZ0JBQUE7QUFFUiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJhd2VyLWhlYWRlci9kcmF3ZXItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGluZy9icmVha3BvaW50cyc7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIC5kcmF3ZXItaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgLmJhY2stYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICM3OTk2YTM7XG4gICAgICAuYmFjay1pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIH1cblxuICAgIC8vICBIaWRlIGJhY2sgdGV4dCBvbiBtb2JpbGUuXG4gICAgICAuYmFjay10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnRpdGxlIHtcbiAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
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
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
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
/* harmony import */ var _maker_videos_body_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maker-videos-body-resolver.service */ "x31g");
/* harmony import */ var _maker_videos_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maker-videos-resolver.service */ "mXuf");
/* harmony import */ var _maker_videos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maker-videos.component */ "Lzih");







const routes = [{
        path: '',
        component: _maker_videos_component__WEBPACK_IMPORTED_MODULE_4__["MakerVideosComponent"],
        resolve: {
            body: _maker_videos_body_resolver_service__WEBPACK_IMPORTED_MODULE_2__["MakerVideosBodyResolverService"],
            videos: _maker_videos_resolver_service__WEBPACK_IMPORTED_MODULE_3__["MakerVideosResolverService"]
        }
    }];
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