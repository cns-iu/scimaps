(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "RxUJ":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/discover-listing/discover-listing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DiscoverListingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverListingModule", function() { return DiscoverListingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _discover_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discover-listing.component */ "0zur");
/* harmony import */ var _warning_dialog_warning_dialog_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../warning-dialog/warning-dialog.module */ "yE48");








const routes = [
    { path: 'map', loadChildren: () => Promise.all(/*! import() | pages-map-map-module */[__webpack_require__.e("default~pages-macroscope-macroscope-module~pages-macroscopes-macroscopes-module~pages-map-map-module~6842d2ab"), __webpack_require__.e("default~pages-macroscope-macroscope-module~pages-map-map-module~pages-maps-maps-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-map-map-module")]).then(__webpack_require__.bind(null, /*! ../../../pages/map/map.module */ "862v")).then(m => m.MapModule) },
    { path: 'macroscope', loadChildren: () => Promise.all(/*! import() | pages-macroscope-macroscope-module */[__webpack_require__.e("default~pages-macroscope-macroscope-module~pages-macroscopes-macroscopes-module~pages-map-map-module~6842d2ab"), __webpack_require__.e("default~pages-macroscope-macroscope-module~pages-map-map-module~pages-maps-maps-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-macroscope-macroscope-module")]).then(__webpack_require__.bind(null, /*! ../../../pages/macroscope/macroscope.module */ "+1hx")).then(m => m.MacroscopeModule) },
];
class DiscoverListingModule {
}
DiscoverListingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DiscoverListingModule });
DiscoverListingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DiscoverListingModule_Factory(t) { return new (t || DiscoverListingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"],
            _warning_dialog_warning_dialog_module__WEBPACK_IMPORTED_MODULE_5__["WarningDialogModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DiscoverListingModule, { declarations: [_discover_listing_component__WEBPACK_IMPORTED_MODULE_4__["DiscoverListingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"],
        _warning_dialog_warning_dialog_module__WEBPACK_IMPORTED_MODULE_5__["WarningDialogModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_discover_listing_component__WEBPACK_IMPORTED_MODULE_4__["DiscoverListingComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscoverListingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_discover_listing_component__WEBPACK_IMPORTED_MODULE_4__["DiscoverListingComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"],
                    _warning_dialog_warning_dialog_module__WEBPACK_IMPORTED_MODULE_5__["WarningDialogModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ],
                exports: [_discover_listing_component__WEBPACK_IMPORTED_MODULE_4__["DiscoverListingComponent"]]
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
        const languages$ = this.content.getContent('site/languages.md').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        const language = route.queryParamMap.get('lang') || 'en';
        const type = route.data.type;
        const iteration = route.paramMap.get('iteration');
        const sequence = route.paramMap.get('sequence');
        const mapSlug = `${type}/${iteration}/${sequence}`;
        const content$ = this.content.getContent(mapSlug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        // tslint:disable-next-line: no-any
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([languages$, content$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([languages, data]) => {
            const item = {};
            item.title = data[language].title;
            item.makers = data.en.makers.map((m) => {
                const m1 = m.replace('/readme', '');
                const m2 = m1.replace(/-/g, ' ');
                const names = m2.split(' ');
                for (let i = 0, x = names.length; i < x; i++) {
                    names[i] = names[i][0].toUpperCase() + names[i].substr(1);
                }
                return {
                    name: names.join(' '),
                    job: 'Job Title',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci.',
                    thumbnail: `assets/content/person/${m1}/image.jpg`
                };
            });
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
    }
}
MapMacroscopeResolverService.ɵfac = function MapMacroscopeResolverService_Factory(t) { return new (t || MapMacroscopeResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"])); };
MapMacroscopeResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapMacroscopeResolverService, factory: MapMacroscopeResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapMacroscopeResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"] }]; }, null); })();


/***/ }),

/***/ "yE48":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/warning-dialog/warning-dialog.module.ts ***!
  \***************************************************************************/
/*! exports provided: WarningDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningDialogModule", function() { return WarningDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _warning_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warning-dialog.component */ "QAr1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");






class WarningDialogModule {
}
WarningDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WarningDialogModule });
WarningDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WarningDialogModule_Factory(t) { return new (t || WarningDialogModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WarningDialogModule, { declarations: [_warning_dialog_component__WEBPACK_IMPORTED_MODULE_2__["WarningDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]], exports: [_warning_dialog_component__WEBPACK_IMPORTED_MODULE_2__["WarningDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarningDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_warning_dialog_component__WEBPACK_IMPORTED_MODULE_2__["WarningDialogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]
                ],
                exports: [_warning_dialog_component__WEBPACK_IMPORTED_MODULE_2__["WarningDialogComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map