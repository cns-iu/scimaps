(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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