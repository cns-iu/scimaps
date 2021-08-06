(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "9W5r":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/tab-header/tab-header.component.ts ***!
  \**********************************************************************/
/*! exports provided: TabHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeaderComponent", function() { return TabHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");



function TabHeaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabHeaderComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.setActiveTabIndex(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r2 === ctx_r0.activeTabIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r1);
} }
class TabHeaderComponent {
    constructor() {
        // Component class name
        this.clsName = 'sci-social-sidebar';
        this.activeTabIndex = 0;
        this.activeTabIndexChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    setActiveTabIndex(index) {
        if (index === this.activeTabIndex) {
            return;
        }
        this.activeTabIndex = index;
        this.activeTabIndexChanged.emit(index);
    }
}
TabHeaderComponent.ɵfac = function TabHeaderComponent_Factory(t) { return new (t || TabHeaderComponent)(); };
TabHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabHeaderComponent, selectors: [["sci-tab-header"]], hostVars: 2, hostBindings: function TabHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { tabs: "tabs", activeTabIndex: "activeTabIndex" }, outputs: { activeTabIndexChanged: "activeTabIndexChanged" }, decls: 1, vars: 1, consts: [["class", "tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "tab", 3, "click"]], template: function TabHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabHeaderComponent_div_0_Template, 2, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid #e0e0e0;\n}\n[_nghost-%COMP%]   .tab[_ngcontent-%COMP%] {\n  border-bottom: 2px solid transparent;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  cursor: pointer;\n  height: 3rem;\n  font-size: 1rem;\n  text-align: center;\n  line-height: 3rem;\n}\n[_nghost-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #8dc63f;\n  background-color: #f5f5f5;\n}\n[_nghost-%COMP%]   .tab[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid #8dc63f;\n  background-color: #f5f5f5;\n}\n[_nghost-%COMP%]   .tab[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWItaGVhZGVyL3RhYi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUNGO0FBQ0U7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDSTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7QUFDTjtBQUNJO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtBQUNOO0FBRUk7RUFDRSxpQkFBQTtBQUFOIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWItaGVhZGVyL3RhYi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuXG4gIC50YWIge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgICM4ZGM2M2Y7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgIzhkYzYzZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgfVxuXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-tab-header',
                templateUrl: './tab-header.component.html',
                styleUrls: ['./tab-header.component.scss']
            }]
    }], null, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], tabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeTabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeTabIndexChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "IbK4":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/tab-header/tab-header.module.ts ***!
  \*******************************************************************/
/*! exports provided: TabHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeaderModule", function() { return TabHeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _tab_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-header.component */ "9W5r");




class TabHeaderModule {
}
TabHeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TabHeaderModule });
TabHeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TabHeaderModule_Factory(t) { return new (t || TabHeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TabHeaderModule, { declarations: [_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabHeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"]]
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


/***/ })

}]);
//# sourceMappingURL=common.js.map