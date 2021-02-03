(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maps-maps-module"],{

/***/ "/Z3E":
/*!**********************************************************!*\
  !*** ./src/app/pages/maps/maps-body-resolver.service.ts ***!
  \**********************************************************/
/*! exports provided: MapsBodyResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsBodyResolverService", function() { return MapsBodyResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");





class MapsBodyResolverService {
    constructor(content, router) {
        this.content = content;
        this.router = router;
    }
    resolve(route, state) {
        return this.content.getContent('site/whatIsAMap.md').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
}
MapsBodyResolverService.ɵfac = function MapsBodyResolverService_Factory(t) { return new (t || MapsBodyResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MapsBodyResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapsBodyResolverService, factory: MapsBodyResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapsBodyResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Cd2c":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/scimaps/scimaps/website/node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js ***!
  \***************************************************************************************************************/
/*! exports provided: MAT_INPUT_VALUE_ACCESSOR, MatInput, MatInputModule, MatTextareaAutosize, getMatInputUnsupportedTypeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function() { return MAT_INPUT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInput", function() { return MatInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInputModule", function() { return MatInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function() { return MatTextareaAutosize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function() { return getMatInputUnsupportedTypeError; });
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/text-field */ "H0K4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "5XID");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "cZZj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "+kfY");









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Directive to automatically resize a textarea to fit its content.
 * @deprecated Use `cdkTextareaAutosize` from `@angular/cdk/text-field` instead.
 * @breaking-change 8.0.0
 */






class MatTextareaAutosize extends _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["CdkTextareaAutosize"] {
    get matAutosizeMinRows() { return this.minRows; }
    set matAutosizeMinRows(value) { this.minRows = value; }
    get matAutosizeMaxRows() { return this.maxRows; }
    set matAutosizeMaxRows(value) { this.maxRows = value; }
    get matAutosize() { return this.enabled; }
    set matAutosize(value) { this.enabled = value; }
    get matTextareaAutosize() { return this.enabled; }
    set matTextareaAutosize(value) { this.enabled = value; }
}
MatTextareaAutosize.ɵfac = function MatTextareaAutosize_Factory(t) { return ɵMatTextareaAutosize_BaseFactory(t || MatTextareaAutosize); };
MatTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatTextareaAutosize, selectors: [["textarea", "mat-autosize", ""], ["textarea", "matTextareaAutosize", ""]], hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize", "mat-autosize"], inputs: { cdkAutosizeMinRows: "cdkAutosizeMinRows", cdkAutosizeMaxRows: "cdkAutosizeMaxRows", matAutosizeMinRows: "matAutosizeMinRows", matAutosizeMaxRows: "matAutosizeMaxRows", matAutosize: ["mat-autosize", "matAutosize"], matTextareaAutosize: "matTextareaAutosize" }, exportAs: ["matTextareaAutosize"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
MatTextareaAutosize.propDecorators = {
    matAutosizeMinRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    matAutosizeMaxRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    matAutosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['mat-autosize',] }],
    matTextareaAutosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
const ɵMatTextareaAutosize_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTextareaAutosize);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTextareaAutosize, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
                exportAs: 'matTextareaAutosize',
                inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
                host: {
                    'class': 'cdk-textarea-autosize mat-autosize',
                    // Textarea elements that have the directive applied should have a single row by default.
                    // Browsers normally show two rows by default and therefore this limits the minRows binding.
                    'rows': '1'
                }
            }]
    }], null, { matAutosizeMinRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], matAutosizeMaxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], matAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mat-autosize']
        }], matTextareaAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */
function getMatInputUnsupportedTypeError(type) {
    return Error(`Input type "${type}" isn't supported by matInput.`);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This token is used to inject the object whose value should be set into `MatInput`. If none is
 * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
 * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
 * value to them.
 */
const MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.
const MAT_INPUT_INVALID_TYPES = [
    'button',
    'checkbox',
    'file',
    'hidden',
    'image',
    'radio',
    'range',
    'reset',
    'submit'
];
let nextUniqueId = 0;
// Boilerplate for applying mixins to MatInput.
/** @docs-private */
class MatInputBase {
    constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, 
    /** @docs-private */
    ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}
const _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinErrorState"])(MatInputBase);
/** Directive that allows a native input to work inside a `MatFormField`. */
class MatInput extends _MatInputMixinBase {
    constructor(_elementRef, _platform, 
    /** @docs-private */
    ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone, 
    // TODO: Remove this once the legacy appearance has been removed. We only need
    // to inject the form-field for determining whether the placeholder has been promoted.
    _formField) {
        super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this._elementRef = _elementRef;
        this._platform = _platform;
        this.ngControl = ngControl;
        this._autofillMonitor = _autofillMonitor;
        this._formField = _formField;
        this._uid = `mat-input-${nextUniqueId++}`;
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        this.focused = false;
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        this.controlType = 'mat-input';
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        this.autofilled = false;
        this._disabled = false;
        this._required = false;
        this._type = 'text';
        this._readonly = false;
        this._neverEmptyInputTypes = [
            'date',
            'datetime',
            'datetime-local',
            'month',
            'time',
            'week'
        ].filter(t => Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(t));
        const element = this._elementRef.nativeElement;
        const nodeName = element.nodeName.toLowerCase();
        // If no input value accessor was explicitly specified, use the element as the input value
        // accessor.
        this._inputValueAccessor = inputValueAccessor || element;
        this._previousNativeValue = this.value;
        // Force setter to be called in case id was not specified.
        this.id = this.id;
        // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
        // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
        // exists on iOS, we only bother to install the listener on iOS.
        if (_platform.IOS) {
            ngZone.runOutsideAngular(() => {
                _elementRef.nativeElement.addEventListener('keyup', (event) => {
                    let el = event.target;
                    if (!el.value && !el.selectionStart && !el.selectionEnd) {
                        // Note: Just setting `0, 0` doesn't fix the issue. Setting
                        // `1, 1` fixes it for the first time that you type text and
                        // then hold delete. Toggling to `1, 1` and then back to
                        // `0, 0` seems to completely fix it.
                        el.setSelectionRange(1, 1);
                        el.setSelectionRange(0, 0);
                    }
                });
            });
        }
        this._isServer = !this._platform.isBrowser;
        this._isNativeSelect = nodeName === 'select';
        this._isTextarea = nodeName === 'textarea';
        if (this._isNativeSelect) {
            this.controlType = element.multiple ? 'mat-native-select-multiple' :
                'mat-native-select';
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        // Browsers may not fire the blur event if the input is disabled too quickly.
        // Reset from here to ensure that the element doesn't become stuck.
        if (this.focused) {
            this.focused = false;
            this.stateChanges.next();
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get id() { return this._id; }
    set id(value) { this._id = value || this._uid; }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get required() { return this._required; }
    set required(value) { this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); }
    /** Input type of the element. */
    get type() { return this._type; }
    set type(value) {
        this._type = value || 'text';
        this._validateType();
        // When using Angular inputs, developers are no longer able to set the properties on the native
        // input element. To ensure that bindings for `type` work, we need to sync the setter
        // with the native property. Textarea elements don't support the type property or attribute.
        if (!this._isTextarea && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(this._type)) {
            this._elementRef.nativeElement.type = this._type;
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get value() { return this._inputValueAccessor.value; }
    set value(value) {
        if (value !== this.value) {
            this._inputValueAccessor.value = value;
            this.stateChanges.next();
        }
    }
    /** Whether the element is readonly. */
    get readonly() { return this._readonly; }
    set readonly(value) { this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); }
    ngAfterViewInit() {
        if (this._platform.isBrowser) {
            this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(event => {
                this.autofilled = event.isAutofilled;
                this.stateChanges.next();
            });
        }
    }
    ngOnChanges() {
        this.stateChanges.next();
    }
    ngOnDestroy() {
        this.stateChanges.complete();
        if (this._platform.isBrowser) {
            this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
        }
    }
    ngDoCheck() {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
        }
        // We need to dirty-check the native element's value, because there are some cases where
        // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
        // updating the value using `emitEvent: false`).
        this._dirtyCheckNativeValue();
        // We need to dirty-check and set the placeholder attribute ourselves, because whether it's
        // present or not depends on a query which is prone to "changed after checked" errors.
        this._dirtyCheckPlaceholder();
    }
    /** Focuses the input. */
    focus(options) {
        this._elementRef.nativeElement.focus(options);
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    /** Callback for the cases where the focused state of the input changes. */
    // tslint:disable:no-host-decorator-in-concrete
    // tslint:enable:no-host-decorator-in-concrete
    _focusChanged(isFocused) {
        if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
            this.focused = isFocused;
            this.stateChanges.next();
        }
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _onInput() {
        // This is a noop function and is used to let Angular know whenever the value changes.
        // Angular will run a new change detection each time the `input` event has been dispatched.
        // It's necessary that Angular recognizes the value change, because when floatingLabel
        // is set to false and Angular forms aren't used, the placeholder won't recognize the
        // value changes and will not disappear.
        // Listening to the input event wouldn't be necessary when the input is using the
        // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
    }
    /** Does some manual dirty checking on the native input `placeholder` attribute. */
    _dirtyCheckPlaceholder() {
        var _a, _b;
        // If we're hiding the native placeholder, it should also be cleared from the DOM, otherwise
        // screen readers will read it out twice: once from the label and once from the attribute.
        // TODO: can be removed once we get rid of the `legacy` style for the form field, because it's
        // the only one that supports promoting the placeholder to a label.
        const placeholder = ((_b = (_a = this._formField) === null || _a === void 0 ? void 0 : _a._hideControlPlaceholder) === null || _b === void 0 ? void 0 : _b.call(_a)) ? null : this.placeholder;
        if (placeholder !== this._previousPlaceholder) {
            const element = this._elementRef.nativeElement;
            this._previousPlaceholder = placeholder;
            placeholder ?
                element.setAttribute('placeholder', placeholder) : element.removeAttribute('placeholder');
        }
    }
    /** Does some manual dirty checking on the native input `value` property. */
    _dirtyCheckNativeValue() {
        const newValue = this._elementRef.nativeElement.value;
        if (this._previousNativeValue !== newValue) {
            this._previousNativeValue = newValue;
            this.stateChanges.next();
        }
    }
    /** Make sure the input is a supported type. */
    _validateType() {
        if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatInputUnsupportedTypeError(this._type);
        }
    }
    /** Checks whether the input type is one of the types that are never empty. */
    _isNeverEmpty() {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
    }
    /** Checks whether the input is invalid based on the native validation. */
    _isBadInput() {
        // The `validity` property won't be present on platform-server.
        let validity = this._elementRef.nativeElement.validity;
        return validity && validity.badInput;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get empty() {
        return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() &&
            !this.autofilled;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get shouldLabelFloat() {
        if (this._isNativeSelect) {
            // For a single-selection `<select>`, the label should float when the selected option has
            // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
            // overlapping the label with the options.
            const selectElement = this._elementRef.nativeElement;
            const firstOption = selectElement.options[0];
            // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
            // -1 if the `value` is set to something, that isn't in the list of options, at a later point.
            return this.focused || selectElement.multiple || !this.empty ||
                !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
        }
        else {
            return this.focused || !this.empty;
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    setDescribedByIds(ids) {
        if (ids.length) {
            this._elementRef.nativeElement.setAttribute('aria-describedby', ids.join(' '));
        }
        else {
            this._elementRef.nativeElement.removeAttribute('aria-describedby');
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    onContainerClick() {
        // Do not re-focus the input element if the element is already focused. Otherwise it can happen
        // that someone clicks on a time input and the cursor resets to the "hours" field while the
        // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
        if (!this.focused) {
            this.focus();
        }
    }
}
MatInput.ɵfac = function MatInput_Factory(t) { return new (t || MatInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_INPUT_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD"], 8)); };
MatInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatInput, selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]], hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"], hostVars: 9, hostBindings: function MatInput_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatInput_focus_HostBindingHandler() { return ctx._focusChanged(true); })("blur", function MatInput_blur_HostBindingHandler() { return ctx._focusChanged(false); })("input", function MatInput_input_HostBindingHandler() { return ctx._onInput(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("disabled", ctx.disabled)("required", ctx.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id)("data-placeholder", ctx.placeholder)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-invalid", ctx.errorState)("aria-required", ctx.required.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-input-server", ctx._isServer);
    } }, inputs: { id: "id", disabled: "disabled", required: "required", type: "type", value: "value", readonly: "readonly", placeholder: "placeholder", errorStateMatcher: "errorStateMatcher", userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"] }, exportAs: ["matInput"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"], useExisting: MatInput }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
MatInput.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_INPUT_VALUE_ACCESSOR,] }] },
    { type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD"],] }] }
];
MatInput.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    userAriaDescribedBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-describedby',] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    _focusChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['focus', ['true'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['blur', ['false'],] }],
    _onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['input',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
                exportAs: 'matInput',
                host: {
                    /**
                     * @breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
                     */
                    'class': 'mat-input-element mat-form-field-autofill-control',
                    '[class.mat-input-server]': '_isServer',
                    // Native input properties that are overwritten by Angular inputs need to be synced with
                    // the native input element. Otherwise property bindings for those don't work.
                    '[attr.id]': 'id',
                    // At the time of writing, we have a lot of customer tests that look up the input based on its
                    // placeholder. Since we sometimes omit the placeholder attribute from the DOM to prevent screen
                    // readers from reading it twice, we have to keep it somewhere in the DOM for the lookup.
                    '[attr.data-placeholder]': 'placeholder',
                    '[disabled]': 'disabled',
                    '[required]': 'required',
                    '[attr.readonly]': 'readonly && !_isNativeSelect || null',
                    '[attr.aria-invalid]': 'errorState',
                    '[attr.aria-required]': 'required.toString()'
                },
                providers: [{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"], useExisting: MatInput }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [MAT_INPUT_VALUE_ACCESSOR]
            }] }, { type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD"]]
            }] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    /** Callback for the cases where the focused state of the input changes. */
    // tslint:disable:no-host-decorator-in-concrete
    // tslint:enable:no-host-decorator-in-concrete
    _focusChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['focus', ['true']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['blur', ['false']]
        }], 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], userAriaDescribedBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-describedby']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatInputModule {
}
MatInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatInputModule });
MatInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MatInputModule_Factory(t) { return new (t || MatInputModule)(); }, providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]], imports: [[
            _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        ], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],
        // We re-export the `MatFormFieldModule` since `MatInput` will almost always
        // be used together with `MatFormField`.
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatInputModule, { declarations: function () { return [MatInput, MatTextareaAutosize]; }, imports: function () { return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]]; }, exports: function () { return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],
        // We re-export the `MatFormFieldModule` since `MatInput` will almost always
        // be used together with `MatFormField`.
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [MatInput, MatTextareaAutosize],
                imports: [
                    _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                ],
                exports: [
                    _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],
                    // We re-export the `MatFormFieldModule` since `MatInput` will almost always
                    // be used together with `MatFormField`.
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    MatInput,
                    MatTextareaAutosize,
                ],
                providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=input.js.map

/***/ }),

/***/ "Fh0M":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/purchase-modal/purchase-modal.component.ts ***!
  \******************************************************************************/
/*! exports provided: PurchaseModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseModalComponent", function() { return PurchaseModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "mFH5");










function PurchaseModalComponent_mat_dialog_content_2_mat_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r4, " ");
} }
function PurchaseModalComponent_mat_dialog_content_2_mat_error_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getErrorMessage());
} }
function PurchaseModalComponent_mat_dialog_content_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Purchase Map(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Most exhibit maps can be purchased individually. Maps are 30\" x 24\" (76cm x 61cm). Different Pricing options are available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Inkjet print: $45 ea*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Premium archival print: $100 ea*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Iteration poster sets (inkjet): $150 per iteration* or $950 for all 20 posters*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*plus shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Complete and submit the form. You will be contacted by a staff member to complete your order and verify all information. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseModalComponent_mat_dialog_content_2_Template_input_change_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.change($event.target, "firstName"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseModalComponent_mat_dialog_content_2_Template_input_change_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.change($event.target, "lastName"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Shipping Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseModalComponent_mat_dialog_content_2_Template_input_change_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.change($event.target, "shipAddress"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseModalComponent_mat_dialog_content_2_Template_input_change_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.change($event.target, "city"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function PurchaseModalComponent_mat_dialog_content_2_Template_mat_select_selectionChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.stateChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PurchaseModalComponent_mat_dialog_content_2_mat_option_42_Template, 2, 2, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Zip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseModalComponent_mat_dialog_content_2_Template_input_change_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.change($event.target, "zip"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseModalComponent_mat_dialog_content_2_Template_input_change_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.change($event.target, "email"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, PurchaseModalComponent_mat_dialog_content_2_mat_error_52_Template, 2, 1, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseModalComponent_mat_dialog_content_2_Template_input_change_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.change($event.target, "phone"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Map name(s) and preferred shipping method");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseModalComponent_mat_dialog_content_2_Template_textarea_change_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.updateShipInfo($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseModalComponent_mat_dialog_content_2_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseModalComponent_mat_dialog_content_2_Template_a_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.buttonClickSend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "SEND");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.states);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.zip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.email.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r0.allValid());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.mailLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PurchaseModalComponent_mat_dialog_content_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Thank you for your order! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " A staff member will contact you to complete the payment process and confirm details. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseModalComponent_mat_dialog_content_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DONE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PurchaseModalComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        /** HTML class name */
        this.clsName = 'sci-purchase-modal';
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.address = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.city = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.state = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.zip = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        /**
         * Whether the confirmation screen has been reached
         */
        this.confirmation = false;
        /**
         * Current form inputs
         */
        this.currentInfo = {
            firstName: '',
            lastName: '',
            shipAddress: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            phone: '',
        };
        /**
         * Email link
         */
        this.mailLink = '';
        /**
         * Shipping info (body of email)
         */
        this.shipInfo = '';
        /**
         * Where the email will be sent
         */
        this.receivingEmail = 'katy@indiana.edu';
        /**
         * State options
         */
        this.states = [
            'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia',
            'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
            'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands',
            'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
            'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
    }
    /**
     * Closes info dialog component
     */
    close() {
        this.dialogRef.close();
    }
    /**
     * Opens the confirmation screen when send button is clicked
     */
    buttonClickSend() {
        if (this.allValid()) {
            this.confirmation = true;
        }
    }
    /**
     * Updates the current form inputs (excluding state)
     * @param input the input event
     * @param key Key to be updated
     */
    change(target, key) {
        const inputTarget = target;
        this.currentInfo = target ? Object.assign(Object.assign({}, this.currentInfo), { [key]: inputTarget.value }) : this.currentInfo;
        this.updateMailLink();
    }
    /**
     * Updates the selected state
     * @param event Selected state
     */
    stateChange(event) {
        this.currentInfo = Object.assign(Object.assign({}, this.currentInfo), { state: event.value });
        this.updateMailLink();
    }
    /**
     * Updates ship info portion of form
     * @param event Input event
     */
    updateShipInfo(target) {
        const inputTarget = target;
        this.shipInfo = target ? inputTarget.value.split('\n').join('%0D%0A') : this.shipInfo;
        this.updateMailLink();
    }
    /**
     * Updates mail link
     */
    updateMailLink() {
        this.mailLink = `mailto:${this.receivingEmail}?subject=Map%20Purchase&body=`;
        const mailName = `Name: ${this.currentInfo.firstName} ${this.currentInfo.lastName}`;
        const mailAddress = `Address: ${this.currentInfo.shipAddress}, ${this.currentInfo.city}, ${this.currentInfo.state}, ${this.currentInfo.zip}`;
        const mailEmail = `Email: ${this.currentInfo.email}`;
        const mailPhone = `Phone: ${this.currentInfo.phone}`;
        this.mailLink = this.mailLink.concat([mailName, mailAddress, mailEmail, mailPhone].join('%0D%0A')).concat(`%0D%0A%0D%0A${this.shipInfo}`);
    }
    allValid() {
        if (this.email.hasError('email') || this.email.hasError('required') || this.firstName.hasError('required') ||
            this.lastName.hasError('required') || this.address.hasError('required') || this.city.hasError('required') ||
            this.zip.hasError('required') || this.phone.hasError('required') ||
            this.shipInfo === '') {
            return false;
        }
        else {
            return true;
        }
    }
    getErrorMessage() {
        return this.email.hasError('email') ? 'Not a valid email' : '';
    }
}
PurchaseModalComponent.ɵfac = function PurchaseModalComponent_Factory(t) { return new (t || PurchaseModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
PurchaseModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseModalComponent, selectors: [["sci-purchase-modal"]], hostVars: 2, hostBindings: function PurchaseModalComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 4, vars: 2, consts: [[1, "purchase-modal", "wrapper"], [1, "container"], ["class", "screen1", 4, "ngIf"], ["class", "screen2", 4, "ngIf"], [1, "screen1"], [1, "purchase-info"], [1, "purchase-title"], [1, "description"], [1, "purchase-options"], [1, "instructions"], [1, "purchase-form-container"], [1, "purchase-form"], [1, "name-inputs"], ["appearance", "fill", 1, "first-name"], ["placeholder", "Enter first name", "matInput", "", 1, "first-name-input", 3, "formControl", "change"], ["appearance", "fill", 1, "last-name"], ["placeholder", "Enter last name", "matInput", "", 1, "last-name-input", 3, "formControl", "change"], [1, "shipping-input"], ["appearance", "fill", 1, "shipping-address"], ["placeholder", "Enter shipping address", "matInput", "", 1, "shipping-address-input", 3, "formControl", "change"], [1, "address-inputs"], ["appearance", "fill", 1, "city"], ["placeholder", "Enter city", "matInput", "", 1, "city-input", 3, "formControl", "change"], ["appearance", "fill", 1, "state"], [1, "state-input", 3, "formControl", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "zip"], ["placeholder", "xxxxx", "matInput", "", 1, "zip-input", 3, "formControl", "change"], [1, "contact-inputs"], ["appearance", "fill", 1, "email"], ["placeholder", "Enter email address", "matInput", "", 1, "email-input", 3, "formControl", "change"], [4, "ngIf"], ["appearance", "fill", 1, "phone"], ["placeholder", "xxx-xxx-xxxx", "matInput", "", 1, "phone-input", 3, "formControl", "change"], [1, "shipping-info"], [1, "shipping-info-label"], ["matInput", "", 1, "textarea", 3, "change"], [1, "button-container"], [1, "cancel", "button", 3, "click"], [1, "send", "button", 3, "href", "click"], [3, "value"], [1, "screen2"], [1, "content"], [1, "confirmation-header"], [1, "confirmation-text"], [1, "button", 3, "click"]], template: function PurchaseModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PurchaseModalComponent_mat_dialog_content_2_Template, 66, 13, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PurchaseModalComponent_mat_dialog_content_3_Template, 8, 0, "mat-dialog-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.confirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: ["mat-dialog-container {\n  padding: 0 !important;\n}\n  mat-dialog-container mat-dialog-content {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n[_nghost-%COMP%]   .purchase-modal[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .purchase-modal[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]     mat-dialog-content {\n  max-height: unset;\n}\n[_nghost-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 12%;\n    margin-top: -3.5rem;\n    cursor: pointer;\n  }\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-info[_ngcontent-%COMP%], [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  padding: 2rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-info[_ngcontent-%COMP%], [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-info[_ngcontent-%COMP%]   .purchase-options[_ngcontent-%COMP%] {\n  padding-inline-start: 1rem;\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-info[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .name-inputs[_ngcontent-%COMP%], [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .shipping-input[_ngcontent-%COMP%], [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .address-inputs[_ngcontent-%COMP%], [_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .contact-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 15%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]     .mat-form-field {\n  width: 100%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]     .mat-form-field .mat-form-field-flex {\n  background-color: inherit;\n  padding: 0;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .first-name[_ngcontent-%COMP%] {\n  width: 45%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .last-name[_ngcontent-%COMP%] {\n  width: 50%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%] {\n  width: 35%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .state[_ngcontent-%COMP%] {\n  width: 40%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .zip[_ngcontent-%COMP%] {\n  width: 15%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  width: 60%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  width: 35%;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .shipping-info[_ngcontent-%COMP%] {\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .shipping-info[_ngcontent-%COMP%]   .shipping-info-label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .shipping-info[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 1px;\n  height: calc(100% - 1rem);\n  padding: 0.5rem;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1rem;\n  display: flex;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: inherit;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button.cancel[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n  border: none;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button.send[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border-width: 1px;\n  border-style: solid;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .screen1[_ngcontent-%COMP%]   .purchase-form-container[_ngcontent-%COMP%]   .purchase-form[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .button.send.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n[_nghost-%COMP%]   .screen2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 25rem;\n}\n[_nghost-%COMP%]   .screen2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .confirmation-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .screen2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .confirmation-text[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  width: 60%;\n  text-align: center;\n}\n[_nghost-%COMP%]   .screen2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0.5rem;\n  border-width: 2px;\n  border-style: solid;\n  background-color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wdXJjaGFzZS1tb2RhbC9wdXJjaGFzZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFCQUFBO0FBREY7QUFHRTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUFESjtBQU1FO0VBQ0UsV0FBQTtBQUhKO0FBSUk7RUFDRSxZQUFBO0FBRk47QUFLRTtFQUNFLGlCQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7QUFKSjtBQU1JO0VBSEY7SUFJSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUFISjtBQUNGO0FBTUU7RUFDRSxhQUFBO0FBSko7QUFNSTtFQUhGO0lBSUksc0JBQUE7RUFISjtBQUNGO0FBS0k7O0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFITjtBQUtNO0VBUEY7O0lBUUksV0FBQTtFQUROO0FBQ0Y7QUFLTTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7QUFIUjtBQUtNO0VBQ0UsZ0JBQUE7QUFIUjtBQVFNO0VBREY7SUFFSSxjQUFBO0VBTE47QUFDRjtBQU9NO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBTFI7QUFPUTs7OztFQUlFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFMVjtBQVFRO0VBQ0UsV0FBQTtBQU5WO0FBUVU7RUFDRSx5QkFBQTtFQUNBLFVBQUE7QUFOWjtBQVVRO0VBQ0UsVUFBQTtBQVJWO0FBVVE7RUFDRSxVQUFBO0FBUlY7QUFVUTtFQUNFLFVBQUE7QUFSVjtBQVVRO0VBQ0UsVUFBQTtBQVJWO0FBVVE7RUFDRSxVQUFBO0FBUlY7QUFVUTtFQUNFLFVBQUE7QUFSVjtBQVVRO0VBQ0UsVUFBQTtBQVJWO0FBV1E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBVFY7QUFXVTtFQUNFLHFCQUFBO0FBVFo7QUFXVTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFUWjtBQWFRO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBWFY7QUFhVTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQVhaO0FBYVk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFYZDtBQWNZO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQVpkO0FBY2M7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQVpoQjtBQXNCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBcEJOO0FBc0JNO0VBQ0Usa0JBQUE7QUFwQlI7QUF1Qk07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQXJCUjtBQXdCTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBdEJSIiwiZmlsZSI6InByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wdXJjaGFzZS1tb2RhbC9wdXJjaGFzZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRicmVha3BvaW50OiA3NjhweDtcblxuOjpuZy1kZWVwIG1hdC1kaWFsb2ctY29udGFpbmVyIHsgXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcblxuICBtYXQtZGlhbG9nLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG46aG9zdCB7XG4gIC5wdXJjaGFzZS1tb2RhbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG4gIDo6bmctZGVlcCBtYXQtZGlhbG9nLWNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xuICB9XG5cbiAgLmNsb3NlLWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMiU7XG4gICAgICBtYXJnaW4tdG9wOiAtMy41cmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG4gIC5zY3JlZW4xIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5wdXJjaGFzZS1pbmZvLCBcbiAgICAucHVyY2hhc2UtZm9ybS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZzogMnJlbTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wdXJjaGFzZS1pbmZvIHtcbiAgICAgIC5wdXJjaGFzZS1vcHRpb25zIHtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDFyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIH1cbiAgICAgIC5pbnN0cnVjdGlvbnMge1xuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wdXJjaGFzZS1mb3JtLWNvbnRhaW5lciB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgIC5wdXJjaGFzZS1mb3JtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgLm5hbWUtaW5wdXRzLFxuICAgICAgICAuc2hpcHBpbmctaW5wdXQsXG4gICAgICAgIC5hZGRyZXNzLWlucHV0cyxcbiAgICAgICAgLmNvbnRhY3QtaW5wdXRzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBoZWlnaHQ6IDE1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmZpcnN0LW5hbWUge1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIH1cbiAgICAgICAgLmxhc3QtbmFtZSB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2l0eSB7XG4gICAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdGUge1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIH1cbiAgICAgICAgLnppcCB7XG4gICAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgfVxuICAgICAgICAuZW1haWwge1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIH1cbiAgICAgICAgLnBob25lIHtcbiAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNoaXBwaW5nLWluZm8ge1xuICAgICAgICAgIGhlaWdodDogNDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgIC5zaGlwcGluZy1pbmZvLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHRhcmVhIHtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMXJlbSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBcbiAgICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG5cbiAgICAgICAgICAgICYuY2FuY2VsIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2VuZCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IFxuICAgIH1cbiAgfVxuXG4gIC5zY3JlZW4yIHtcbiAgICAuY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMjVyZW07XG5cbiAgICAgIC5jb25maXJtYXRpb24taGVhZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuY29uZmlybWF0aW9uLXRleHQge1xuICAgICAgICBtYXJnaW46IDAgMCAxLjVyZW07XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-purchase-modal',
                templateUrl: './purchase-modal.component.html',
                styleUrls: ['./purchase-modal.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "H0K4":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/scimaps/scimaps/website/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js ***!
  \***************************************************************************************************************/
/*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function() { return AutofillMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAutofill", function() { return CdkAutofill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function() { return CdkTextareaAutosize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldModule", function() { return TextFieldModule; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "cZZj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "5XID");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");







/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Options to pass to the animationstart listener. */


const listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * An injectable service that can be used to monitor the autofill state of an input.
 * Based on the following blog post:
 * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
 */
class AutofillMonitor {
    constructor(_platform, _ngZone) {
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._monitoredElements = new Map();
    }
    monitor(elementOrRef) {
        if (!this._platform.isBrowser) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);
        const info = this._monitoredElements.get(element);
        if (info) {
            return info.subject;
        }
        const result = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        const cssClass = 'cdk-text-field-autofilled';
        const listener = ((event) => {
            // Animation events fire on initial element render, we check for the presence of the autofill
            // CSS class to make sure this is a real change in state, not just the initial render before
            // we fire off events.
            if (event.animationName === 'cdk-text-field-autofill-start' &&
                !element.classList.contains(cssClass)) {
                element.classList.add(cssClass);
                this._ngZone.run(() => result.next({ target: event.target, isAutofilled: true }));
            }
            else if (event.animationName === 'cdk-text-field-autofill-end' &&
                element.classList.contains(cssClass)) {
                element.classList.remove(cssClass);
                this._ngZone.run(() => result.next({ target: event.target, isAutofilled: false }));
            }
        });
        this._ngZone.runOutsideAngular(() => {
            element.addEventListener('animationstart', listener, listenerOptions);
            element.classList.add('cdk-text-field-autofill-monitored');
        });
        this._monitoredElements.set(element, {
            subject: result,
            unlisten: () => {
                element.removeEventListener('animationstart', listener, listenerOptions);
            }
        });
        return result;
    }
    stopMonitoring(elementOrRef) {
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);
        const info = this._monitoredElements.get(element);
        if (info) {
            info.unlisten();
            info.subject.complete();
            element.classList.remove('cdk-text-field-autofill-monitored');
            element.classList.remove('cdk-text-field-autofilled');
            this._monitoredElements.delete(element);
        }
    }
    ngOnDestroy() {
        this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
    }
}
AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) { return new (t || AutofillMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
AutofillMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function AutofillMonitor_Factory() { return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); }, token: AutofillMonitor, providedIn: "root" });
AutofillMonitor.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutofillMonitor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
/** A directive that can be used to monitor the autofill state of an input. */
class CdkAutofill {
    constructor(_elementRef, _autofillMonitor) {
        this._elementRef = _elementRef;
        this._autofillMonitor = _autofillMonitor;
        /** Emits when the autofill state of the element changes. */
        this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this._autofillMonitor
            .monitor(this._elementRef)
            .subscribe(event => this.cdkAutofill.emit(event));
    }
    ngOnDestroy() {
        this._autofillMonitor.stopMonitoring(this._elementRef);
    }
}
CdkAutofill.ɵfac = function CdkAutofill_Factory(t) { return new (t || CdkAutofill)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AutofillMonitor)); };
CdkAutofill.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkAutofill, selectors: [["", "cdkAutofill", ""]], outputs: { cdkAutofill: "cdkAutofill" } });
CdkAutofill.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: AutofillMonitor }
];
CdkAutofill.propDecorators = {
    cdkAutofill: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkAutofill, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[cdkAutofill]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: AutofillMonitor }]; }, { cdkAutofill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Directive to automatically resize a textarea to fit its content. */
class CdkTextareaAutosize {
    constructor(_elementRef, _platform, _ngZone, 
    /** @breaking-change 11.0.0 make document required */
    document) {
        this._elementRef = _elementRef;
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._enabled = true;
        /**
         * Value of minRows as of last resize. If the minRows has decreased, the
         * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
         * does not have the same problem because it does not affect the textarea's scrollHeight.
         */
        this._previousMinRows = -1;
        this._document = document;
        this._textareaElement = this._elementRef.nativeElement;
        this._measuringClass = _platform.FIREFOX ?
            'cdk-textarea-autosize-measuring-firefox' :
            'cdk-textarea-autosize-measuring';
    }
    /** Minimum amount of rows in the textarea. */
    get minRows() { return this._minRows; }
    set minRows(value) {
        this._minRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);
        this._setMinHeight();
    }
    /** Maximum amount of rows in the textarea. */
    get maxRows() { return this._maxRows; }
    set maxRows(value) {
        this._maxRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);
        this._setMaxHeight();
    }
    /** Whether autosizing is enabled or not */
    get enabled() { return this._enabled; }
    set enabled(value) {
        value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        // Only act if the actual value changed. This specifically helps to not run
        // resizeToFitContent too early (i.e. before ngAfterViewInit)
        if (this._enabled !== value) {
            (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
        }
    }
    /** Sets the minimum height of the textarea as determined by minRows. */
    _setMinHeight() {
        const minHeight = this.minRows && this._cachedLineHeight ?
            `${this.minRows * this._cachedLineHeight}px` : null;
        if (minHeight) {
            this._textareaElement.style.minHeight = minHeight;
        }
    }
    /** Sets the maximum height of the textarea as determined by maxRows. */
    _setMaxHeight() {
        const maxHeight = this.maxRows && this._cachedLineHeight ?
            `${this.maxRows * this._cachedLineHeight}px` : null;
        if (maxHeight) {
            this._textareaElement.style.maxHeight = maxHeight;
        }
    }
    ngAfterViewInit() {
        if (this._platform.isBrowser) {
            // Remember the height which we started with in case autosizing is disabled
            this._initialHeight = this._textareaElement.style.height;
            this.resizeToFitContent();
            this._ngZone.runOutsideAngular(() => {
                const window = this._getWindow();
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroyed))
                    .subscribe(() => this.resizeToFitContent(true));
            });
        }
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     */
    _cacheTextareaLineHeight() {
        if (this._cachedLineHeight) {
            return;
        }
        // Use a clone element because we have to override some styles.
        let textareaClone = this._textareaElement.cloneNode(false);
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        this._textareaElement.parentNode.appendChild(textareaClone);
        this._cachedLineHeight = textareaClone.clientHeight;
        this._textareaElement.parentNode.removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this._setMinHeight();
        this._setMaxHeight();
    }
    ngDoCheck() {
        if (this._platform.isBrowser) {
            this.resizeToFitContent();
        }
    }
    /**
     * Resize the textarea to fit its content.
     * @param force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     */
    resizeToFitContent(force = false) {
        // If autosizing is disabled, just skip everything else
        if (!this._enabled) {
            return;
        }
        this._cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this._cachedLineHeight) {
            return;
        }
        const textarea = this._elementRef.nativeElement;
        const value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
            return;
        }
        const placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add(this._measuringClass);
        textarea.placeholder = '';
        // The measuring class includes a 2px padding to workaround an issue with Chrome,
        // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).
        const height = textarea.scrollHeight - 4;
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = `${height}px`;
        textarea.classList.remove(this._measuringClass);
        textarea.placeholder = placeholderText;
        this._ngZone.runOutsideAngular(() => {
            if (typeof requestAnimationFrame !== 'undefined') {
                requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
            }
            else {
                setTimeout(() => this._scrollToCaretPosition(textarea));
            }
        });
        this._previousValue = value;
        this._previousMinRows = this._minRows;
    }
    /**
     * Resets the textarea to its original size
     */
    reset() {
        // Do not try to change the textarea, if the initialHeight has not been determined yet
        // This might potentially remove styles when reset() is called before ngAfterViewInit
        if (this._initialHeight !== undefined) {
            this._textareaElement.style.height = this._initialHeight;
        }
    }
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete
    _noopInputHandler() {
        // no-op handler that ensures we're running change detection on input events.
    }
    /** Access injected document if available or fallback to global document reference */
    _getDocument() {
        return this._document || document;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
        const doc = this._getDocument();
        return doc.defaultView || window;
    }
    /**
     * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
     * prevent it from scrolling to the caret position. We need to re-set the selection
     * in order for it to scroll to the proper position.
     */
    _scrollToCaretPosition(textarea) {
        const { selectionStart, selectionEnd } = textarea;
        const document = this._getDocument();
        // IE will throw an "Unspecified error" if we try to set the selection range after the
        // element has been removed from the DOM. Assert that the directive hasn't been destroyed
        // between the time we requested the animation frame and when it was executed.
        // Also note that we have to assert that the textarea is focused before we set the
        // selection range. Setting the selection range on a non-focused textarea will cause
        // it to receive focus on IE and Edge.
        if (!this._destroyed.isStopped && document.activeElement === textarea) {
            textarea.setSelectionRange(selectionStart, selectionEnd);
        }
    }
}
CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) { return new (t || CdkTextareaAutosize)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8)); };
CdkTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkTextareaAutosize, selectors: [["textarea", "cdkTextareaAutosize", ""]], hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"], hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() { return ctx._noopInputHandler(); });
    } }, inputs: { minRows: ["cdkAutosizeMinRows", "minRows"], maxRows: ["cdkAutosizeMaxRows", "maxRows"], enabled: ["cdkTextareaAutosize", "enabled"] }, exportAs: ["cdkTextareaAutosize"] });
CdkTextareaAutosize.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
];
CdkTextareaAutosize.propDecorators = {
    minRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkAutosizeMinRows',] }],
    maxRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkAutosizeMaxRows',] }],
    enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkTextareaAutosize',] }],
    _noopInputHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['input',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTextareaAutosize, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'textarea[cdkTextareaAutosize]',
                exportAs: 'cdkTextareaAutosize',
                host: {
                    'class': 'cdk-textarea-autosize',
                    // Textarea elements that have the directive applied should have a single row by default.
                    // Browsers normally show two rows by default and therefore this limits the minRows binding.
                    'rows': '1'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }]; }, { minRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAutosizeMinRows']
        }], maxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAutosizeMaxRows']
        }], enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkTextareaAutosize']
        }], 
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete
    _noopInputHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class TextFieldModule {
}
TextFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TextFieldModule });
TextFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TextFieldModule_Factory(t) { return new (t || TextFieldModule)(); }, imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TextFieldModule, { declarations: function () { return [CdkAutofill, CdkTextareaAutosize]; }, imports: function () { return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]; }, exports: function () { return [CdkAutofill, CdkTextareaAutosize]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TextFieldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [CdkAutofill, CdkTextareaAutosize],
                imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
                exports: [CdkAutofill, CdkTextareaAutosize]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=text-field.js.map

/***/ }),

/***/ "MWin":
/*!*******************************************!*\
  !*** ./src/app/pages/maps/maps.module.ts ***!
  \*******************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _maps_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps-routing.module */ "QqQm");
/* harmony import */ var _maps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maps.component */ "s6Bl");
/* harmony import */ var _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/discover-listing/discover-listing.module */ "RxUJ");
/* harmony import */ var _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/item-drawer/item-drawer.module */ "ml3Y");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/carousel/carousel.module */ "8yKn");










class MapsModule {
}
MapsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapsModule });
MapsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapsModule_Factory(t) { return new (t || MapsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _maps_routing_module__WEBPACK_IMPORTED_MODULE_3__["MapsRoutingModule"],
            _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_5__["DiscoverListingModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"],
            _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_6__["ItemDrawerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapsModule, { declarations: [_maps_component__WEBPACK_IMPORTED_MODULE_4__["MapsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _maps_routing_module__WEBPACK_IMPORTED_MODULE_3__["MapsRoutingModule"],
        _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_5__["DiscoverListingModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"],
        _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_6__["ItemDrawerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_maps_component__WEBPACK_IMPORTED_MODULE_4__["MapsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _maps_routing_module__WEBPACK_IMPORTED_MODULE_3__["MapsRoutingModule"],
                    _shared_components_discover_listing_discover_listing_module__WEBPACK_IMPORTED_MODULE_5__["DiscoverListingModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _shared_components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"],
                    _shared_components_item_drawer_item_drawer_module__WEBPACK_IMPORTED_MODULE_6__["ItemDrawerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "N1JP":
/*!*****************************************************!*\
  !*** ./src/app/pages/maps/maps-resolver.service.ts ***!
  \*****************************************************/
/*! exports provided: MapsResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsResolverService", function() { return MapsResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/content.service */ "qc/9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");





class MapsResolverService {
    constructor(content, router) {
        this.content = content;
        this.router = router;
    }
    resolve(route, state) {
        return this.content.getIndex('app-maps').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
}
MapsResolverService.ɵfac = function MapsResolverService_Factory(t) { return new (t || MapsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MapsResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapsResolverService, factory: MapsResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapsResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "QqQm":
/*!***************************************************!*\
  !*** ./src/app/pages/maps/maps-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MapsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsRoutingModule", function() { return MapsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _maps_body_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-body-resolver.service */ "/Z3E");
/* harmony import */ var _maps_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps-resolver.service */ "N1JP");
/* harmony import */ var _maps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maps.component */ "s6Bl");







const routes = [{
        path: '',
        component: _maps_component__WEBPACK_IMPORTED_MODULE_4__["MapsComponent"],
        resolve: {
            maps: _maps_resolver_service__WEBPACK_IMPORTED_MODULE_3__["MapsResolverService"],
            body: _maps_body_resolver_service__WEBPACK_IMPORTED_MODULE_2__["MapsBodyResolverService"]
        }
    }];
class MapsRoutingModule {
}
MapsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapsRoutingModule });
MapsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapsRoutingModule_Factory(t) { return new (t || MapsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "iZg1":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/item-drawer/item-drawer.component.ts ***!
  \************************************************************************/
/*! exports provided: ItemDrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDrawerComponent", function() { return ItemDrawerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _purchase_modal_purchase_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../purchase-modal/purchase-modal.component */ "Fh0M");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");






function ItemDrawerComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reference_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reference_r1);
} }
class ItemDrawerComponent {
    constructor(dialog) {
        this.dialog = dialog;
        /** HTML class name */
        this.clsName = 'sci-item-drawer';
        /**
         * Item to be displayed in the drawer
         */
        this.item = {
            title: 'Sample Map Item',
            makers: ['Homer Simpson', 'Elon Musk'],
            location: 'Springfield',
            credit: 'Credit line text',
            year: '2000',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo. Pellentesque ultrices blandit diam quis pretium. Suspendisse ut ante in enim consequat semper id consectetur arcu. Proin ultricies vestibulum nulla sit amet.',
            references: [
                'Reference 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                    'Fusce non dui euismod mauris faucibus euismod non lacinia quam.',
                'Reference 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                    'Fusce non dui euismod mauris faucibus euismod non lacinia quam.',
                'Reference 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                    'Fusce non dui euismod mauris faucibus euismod non lacinia quam.'
            ],
            thumbnail: 'assets/maps/maps-2019/rose.jpg'
        };
        /**
         * Emitted when the drawer closes
         */
        this.closeDrawer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits the selected language when the language changes
         */
        this.languageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Currently selected language
         */
        this.selectedLanguage = 'English';
    }
    /**
     * Combines the maker names
     */
    get makers() {
        return this.item.makers.join(', ');
    }
    /**
     * Closes the drawer
     */
    close() {
        this.closeDrawer.emit();
    }
    /**
     * Sets selectedLanguage to selected language and emits the new language
     * @param language The language selected
     */
    languageSelect(language) {
        this.selectedLanguage = language;
        this.languageChange.emit(language);
    }
    /**
     * Opens purchase modal
     */
    openPurchase() {
        this.dialog.open(_purchase_modal_purchase_modal_component__WEBPACK_IMPORTED_MODULE_1__["PurchaseModalComponent"], {
            width: window.innerWidth <= 768 ? '100%' : '738px'
        });
    }
}
ItemDrawerComponent.ɵfac = function ItemDrawerComponent_Factory(t) { return new (t || ItemDrawerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
ItemDrawerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemDrawerComponent, selectors: [["sci-item-drawer"]], hostVars: 2, hostBindings: function ItemDrawerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { item: "item" }, outputs: { closeDrawer: "closeDrawer", languageChange: "languageChange" }, decls: 45, vars: 14, consts: [[1, "details-container"], [1, "purchase-header"], [1, "back-button", 3, "click"], [1, "back-icon"], [1, "purchase-button", 3, "click"], [1, "body"], [1, "details-content"], [1, "details-title"], [1, "details-makers"], [1, "makers-label"], [1, "details-location"], [1, "details-credit"], [1, "language-selection"], [1, "language", "option", 3, "click"], [1, "details-description"], [1, "details-references"], ["class", "reference", 4, "ngFor", "ngForOf"], [1, "details-image"], ["alt", "item image", 1, "thumbnail", 3, "src"], [1, "zoom", "icon"], [1, "details-title", "mobile"], [1, "reference"]], template: function ItemDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDrawerComponent_Template_div_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDrawerComponent_Template_div_click_7_listener() { return ctx.openPurchase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PURCHASE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Makers:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Languages:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDrawerComponent_Template_div_click_25_listener() { return ctx.languageSelect("English"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "English\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "| ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDrawerComponent_Template_div_click_28_listener() { return ctx.languageSelect("Chinese"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00A0\u4E2D\u6587\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "| ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDrawerComponent_Template_div_click_31_listener() { return ctx.languageSelect("German"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00A0Deutsch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "References");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ItemDrawerComponent_div_38_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "zoom_in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.makers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.credit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.selectedLanguage === "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.selectedLanguage === "Chinese");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.selectedLanguage === "German");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.item.references);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.item.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.title);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  z-index: 2;\n  align-items: center;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%] {\n  width: 80%;\n  position: absolute;\n  top: 5rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .purchase-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 2rem;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .purchase-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: #7996A3;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .purchase-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-icon[_ngcontent-%COMP%] {\n  margin-left: -0.5rem;\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .purchase-header[_ngcontent-%COMP%]   .purchase-button[_ngcontent-%COMP%] {\n  height: 2.25rem;\n  padding: 0 1rem;\n  border-width: 0.125rem;\n  border-style: solid;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  padding-right: 3rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0;\n  }\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-makers[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  height: 3rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .makers-label[_ngcontent-%COMP%], [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-location[_ngcontent-%COMP%], [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-credit[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .makers-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .language-selection[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 1rem 0;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .language-selection[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-references[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 16px;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-references[_ngcontent-%COMP%]   .reference[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  object-fit: contain;\n  width: 100%;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-image[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1px;\n  height: 3rem;\n  width: 3rem;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%]   .details-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .details-title.mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pdGVtLWRyYXdlci9pdGVtLWRyYXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBREY7QUFHRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFESjtBQUdJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRE47QUFHTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRFI7QUFHUTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFEVjtBQUtNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUhSO0FBT0k7RUFDRSxhQUFBO0FBTE47QUFPTTtFQUhGO0lBSUksOEJBQUE7RUFKTjtBQUNGO0FBTU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQU1RO0VBTkY7SUFPSSxXQUFBO0lBQ0EsVUFBQTtFQUhSO0FBQ0Y7QUFNVTtFQURGO0lBRUksYUFBQTtFQUhWO0FBQ0Y7QUFNUTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSlY7QUFPUTs7O0VBR0UsaUJBQUE7QUFMVjtBQVFRO0VBQ0UsaUJBQUE7QUFOVjtBQVNRO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFQVjtBQVNVO0VBQ0UsZUFBQTtBQVBaO0FBV1E7RUFDRSxtQkFBQTtBQVRWO0FBWVE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFWVjtBQVlVO0VBQ0UsbUJBQUE7QUFWWjtBQWVNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQWJSO0FBZVE7RUFMRjtJQU1JLFdBQUE7RUFaUjtBQUNGO0FBY1E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBWlY7QUFlUTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBYlY7QUFtQlU7RUFERjtJQUVJLGFBQUE7RUFoQlY7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9zY2ltYXBzL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaXRlbS1kcmF3ZXIvaXRlbS1kcmF3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnJlYWtwb2ludDogNzY4cHg7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB6LWluZGV4OiAyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5kZXRhaWxzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cmVtO1xuXG4gICAgLnB1cmNoYXNlLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAgICAgLmJhY2stYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogIzc5OTZBMztcblxuICAgICAgICAuYmFjay1pY29uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAucHVyY2hhc2UtYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAyLjI1cmVtO1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgIGJvcmRlci13aWR0aDogMC4xMjVyZW07XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5ib2R5IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICB9XG4gIFxuICAgICAgLmRldGFpbHMtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50KSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWxzLXRpdGxlIHtcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbHMtbWFrZXJzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1ha2Vycy1sYWJlbCxcbiAgICAgICAgLmRldGFpbHMtbG9jYXRpb24sXG4gICAgICAgIC5kZXRhaWxzLWNyZWRpdCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAubWFrZXJzLWxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYW5ndWFnZS1zZWxlY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG5cbiAgICAgICAgICAub3B0aW9uIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWxzLXJlZmVyZW5jZXMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcblxuICAgICAgICAgIC5yZWZlcmVuY2Uge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIC5kZXRhaWxzLWltYWdlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDUwJTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAxcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRldGFpbHMtdGl0bGUge1xuICAgICAgICAmLm1vYmlsZSB7XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50KSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemDrawerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-item-drawer',
                templateUrl: './item-drawer.component.html',
                styleUrls: ['./item-drawer.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeDrawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], languageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ml3Y":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/item-drawer/item-drawer.module.ts ***!
  \*********************************************************************/
/*! exports provided: ItemDrawerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDrawerModule", function() { return ItemDrawerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _item_drawer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-drawer.component */ "iZg1");
/* harmony import */ var _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../purchase-modal/purchase-modal.module */ "tVZI");






class ItemDrawerModule {
}
ItemDrawerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ItemDrawerModule });
ItemDrawerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ItemDrawerModule_Factory(t) { return new (t || ItemDrawerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_4__["PurchaseModalModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ItemDrawerModule, { declarations: [_item_drawer_component__WEBPACK_IMPORTED_MODULE_3__["ItemDrawerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_4__["PurchaseModalModule"]], exports: [_item_drawer_component__WEBPACK_IMPORTED_MODULE_3__["ItemDrawerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ItemDrawerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _purchase_modal_purchase_modal_module__WEBPACK_IMPORTED_MODULE_4__["PurchaseModalModule"]
                ],
                declarations: [_item_drawer_component__WEBPACK_IMPORTED_MODULE_3__["ItemDrawerComponent"]],
                exports: [_item_drawer_component__WEBPACK_IMPORTED_MODULE_3__["ItemDrawerComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "s6Bl":
/*!**********************************************!*\
  !*** ./src/app/pages/maps/maps.component.ts ***!
  \**********************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_components_item_drawer_item_drawer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/item-drawer/item-drawer.component */ "iZg1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "DgXe");
/* harmony import */ var _shared_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/carousel/carousel.component */ "4Isi");
/* harmony import */ var _shared_components_carousel_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/carousel/item.component */ "IV5s");
/* harmony import */ var _shared_components_discover_listing_discover_listing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/discover-listing/discover-listing.component */ "0zur");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");










function MapsComponent_div_3_sci_carousel_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-carousel-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carouselItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", carouselItem_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", carouselItem_r6.image.split("/")[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](carouselItem_r6.title);
} }
function MapsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "sci-carousel", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapsComponent_div_3_sci_carousel_item_4_Template, 5, 3, "sci-carousel-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.highlightBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.highlightCarouselItems);
} }
function MapsComponent_sci_discover_listing_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-discover-listing", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openDrawer", function MapsComponent_sci_discover_listing_6_Template_sci_discover_listing_openDrawer_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.openDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("discoverItem", item_r7)("type", "maps");
} }
function MapsComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapsComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.showMoreMaps(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show More Maps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MapsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapsComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.showModal = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Discover Maps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MapsComponent_div_9_sci_carousel_item_8_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-carousel-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "sci-discover-listing", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openDrawer", function MapsComponent_div_9_sci_carousel_item_8_Template_sci_discover_listing_openDrawer_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.openDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const discoverItem_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("discoverItem", discoverItem_r15)("type", "maps");
} }
function MapsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapsComponent_div_9_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.showModal = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Maps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "sci-carousel", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MapsComponent_div_9_sci_carousel_item_8_Template, 2, 2, "sci-carousel-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.discoverItems);
} }
class MapsComponent {
    constructor(route) {
        this.route = route;
        /** HTML class name */
        this.clsName = 'sci-maps';
        /** Gives details-open class when showDrawer is true */
        this.showDrawer = false;
        this.showModal = false;
        this.itemsToDisplay = 3;
        this.highlightBody = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo. Pellentesque ultrices blandit diam quis pretium. Suspendisse ut ante in enim consequat semper id consectetur arcu. Proin ultricies vestibulum nulla sit amet.';
        this.discoverItems = [
            {
                title: 'X. The Future of Science Mapping',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
                thumbnails: [
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    }
                ],
                slug: 'maps-2019',
                directory: 'maps'
            },
            {
                title: 'VIII. Science Maps Showing Trends & Dynamics (2013)',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
                thumbnails: [
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    }
                ],
                slug: 'maps-2019',
                directory: 'maps'
            },
            {
                title: 'VIII. Science Maps for Kids (2012)',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
                thumbnails: [
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    }
                ],
                slug: 'maps-2019',
                directory: 'maps'
            },
            {
                title: 'VII.',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
                thumbnails: [
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    }
                ],
                slug: 'maps-2019',
                directory: 'maps'
            },
            {
                title: 'VI.',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
                thumbnails: [
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    },
                    {
                        title: '',
                        link: 'www.google.com',
                        image: 'rose.jpg'
                    }
                ],
                slug: 'maps-2019',
                directory: 'maps'
            }
        ];
        this.displayItems = [];
        this.highlightCarouselItems = [
            {
                image: 'assets/images/benches.jpg',
                title: 'Map 1 Description.',
                link: 'www.google.com'
            },
            {
                image: 'assets/images/bridge.jpg',
                title: 'Map 2 Description.',
                link: 'www.google.com'
            },
            {
                image: 'assets/images/flower.jpg',
                title: 'Map 3 Description.',
                link: 'www.google.com'
            },
            {
                image: 'assets/images/garden.jpg',
                title: 'Map 4 Description.',
                link: 'www.google.com'
            }
        ];
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.highlightBody = data.body.body;
            this.discoverItems = data.maps;
            this.highlightCarouselItems = this.discoverItems
                .reduce((acc, item) => {
                const thumbs = item.thumbnails;
                const randomThumbnailIndex = Math.round(Math.random() * (thumbs.length - 1));
                return acc.concat(thumbs[randomThumbnailIndex]);
            }, []);
            this.updateDisplayItems();
        });
    }
    updateDisplayItems() {
        const items = [...this.discoverItems];
        this.displayItems = items.splice(0, this.itemsToDisplay);
    }
    moreMaps() {
        return this.itemsToDisplay < this.discoverItems.length;
    }
    showMoreMaps() {
        this.itemsToDisplay = this.itemsToDisplay + 3;
        this.updateDisplayItems();
    }
    /**
     * Opens the details drawer
     */
    openDetails() {
        this.showDrawer = true;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        window.onscroll = () => {
            window.scrollTo(scrollLeft, scrollTop);
        };
        const drawer = document.getElementsByClassName('details-drawer')[0];
        if (window.innerWidth > 640) {
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = '1rem';
            drawer.style.width = '100%';
        }
    }
    /**
     * Closes the details drawer
     */
    closeDetails() {
        this.showDrawer = false;
        window.onscroll = () => { };
        const drawer = document.getElementsByClassName('details-drawer')[0];
        if (window.innerWidth > 640) {
            document.body.style.overflow = 'unset';
            document.body.style.marginRight = '0';
            drawer.style.width = 'calc(100% + 1rem)';
        }
    }
}
MapsComponent.ɵfac = function MapsComponent_Factory(t) { return new (t || MapsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
MapsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapsComponent, selectors: [["sci-maps"]], hostVars: 4, hostBindings: function MapsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("details-open", ctx.showDrawer);
    } }, decls: 10, vars: 7, consts: [[1, "details-drawer", 3, "closeDrawer"], [1, "header"], ["class", "highlight-content", 4, "ngIf"], [1, "header", "discover-maps"], ["class", "discover-item", 3, "discoverItem", "type", "openDrawer", 4, "ngFor", "ngForOf"], ["class", "more-button", 3, "click", 4, "ngIf"], ["class", "mobile-button", 3, "click", 4, "ngIf"], ["class", "fullscreen-modal", 4, "ngIf"], [1, "highlight-content"], ["markdown", "", 1, "highlight-body", 3, "data"], [1, "carousel-container"], [1, "carousel"], [4, "ngFor", "ngForOf"], [1, "carousel-item"], [1, "carousel-image", 3, "src", "alt"], [1, "carousel-image-title"], [1, "discover-item", 3, "discoverItem", "type", "openDrawer"], [1, "more-button", 3, "click"], [1, "mobile-button", 3, "click"], [1, "mobile-icon"], [1, "fullscreen-modal"], [1, "modal-header"], [1, "mobile-icon", 3, "click"], [1, "mobile-title"], [1, "maps-carousel"], ["class", "mobile-carousel-item", 4, "ngFor", "ngForOf"], [1, "mobile-carousel-item"], [3, "discoverItem", "type", "openDrawer"]], template: function MapsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sci-item-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeDrawer", function MapsComponent_Template_sci_item_drawer_closeDrawer_0_listener() { return ctx.closeDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MapsComponent_div_3_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Discover Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MapsComponent_sci_discover_listing_6_Template, 1, 2, "sci-discover-listing", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MapsComponent_button_7_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MapsComponent_div_8_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MapsComponent_div_9_Template, 9, 1, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.showDrawer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moreMaps());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showModal);
    } }, directives: [_shared_components_item_drawer_item_drawer_component__WEBPACK_IMPORTED_MODULE_2__["ItemDrawerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownComponent"], _shared_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"], _shared_components_carousel_item_component__WEBPACK_IMPORTED_MODULE_6__["CarouselItemComponent"], _shared_components_discover_listing_discover_listing_component__WEBPACK_IMPORTED_MODULE_7__["DiscoverListingComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: ["@media (max-width: 768px) {\n    .swiper-button-prev,   .swiper-button-next {\n    background-color: rgba(0, 0, 0, 0.75);\n    border-radius: 50%;\n    padding: 1.5rem;\n    top: 50% !important;\n  }\n    .swiper-button-prev::after,   .swiper-button-next::after {\n    color: white !important;\n  }\n}\n\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    top: 0%;\n    transition: top 1s;\n    overflow-y: scroll;\n    z-index: 6;\n  }\n  [_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n    -webkit-appearance: none;\n  }\n}\n\n[_nghost-%COMP%]   .details-drawer[_ngcontent-%COMP%] {\n  left: 0%;\n  transition: left 1s;\n  margin-right: 0;\n  overflow-y: scroll;\n  z-index: 6;\n}\n\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-drawer[_ngcontent-%COMP%] {\n    top: 0%;\n    left: 0%;\n    transition: top 1s;\n  }\n}\n\n[_nghost-%COMP%]   .details-drawer.hidden[_ngcontent-%COMP%] {\n  left: 100%;\n  margin-right: 1rem;\n}\n\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .details-drawer.hidden[_ngcontent-%COMP%] {\n    margin-right: 0;\n    top: -100%;\n    left: 0%;\n  }\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  padding-bottom: 2rem;\n  margin-bottom: 2rem;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    border: none;\n  }\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .highlight-body[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-right: 1rem;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .highlight-body[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0rem;\n  }\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 50%;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0rem;\n    margin-bottom: 1rem;\n  }\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .carousel-image[_ngcontent-%COMP%] {\n  height: 20rem;\n  object-fit: cover;\n}\n\n[_nghost-%COMP%]   .highlight-content[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .sci-carousel-item[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .carousel-image-title[_ngcontent-%COMP%] {\n  padding: 1rem;\n  height: 3.75rem;\n}\n\n[_nghost-%COMP%]   .discover-item[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .discover-item[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .discover-maps[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n[_nghost-%COMP%]   .more-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 2rem;\n  height: 2.5rem;\n  font-size: 1rem;\n  border-width: 1px;\n  border-style: solid;\n  cursor: pointer;\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]   .more-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n[_nghost-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  border-width: 1px 0;\n  border-style: solid;\n  padding: 0.75rem;\n  font-size: 1rem;\n  cursor: pointer;\n  margin-bottom: 2rem;\n}\n\n[_nghost-%COMP%]   .mobile-button[_ngcontent-%COMP%]   .mobile-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  height: 1.5rem;\n  width: 1.5rem;\n  cursor: pointer;\n}\n\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .mobile-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n[_nghost-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  z-index: 5;\n  width: 100%;\n  padding: 1rem;\n}\n\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n[_nghost-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n\n[_nghost-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mobile-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mobile-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mobile-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0rem !important;\n}\n\n[_nghost-%COMP%]   .fullscreen-modal[_ngcontent-%COMP%]   .maps-carousel[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NjaW1hcHMvc3JjL2FwcC9wYWdlcy9tYXBzL21hcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUU7RUFDRTtJQUNFLHFDQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUFMSjtFQVFFO0lBQ0UsdUJBQUE7RUFOSjtBQUNGOztBQVdFO0VBREY7SUFFSSxPQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUFQRjtFQVNFO0lBQ0Usd0JBQUE7RUFQSjtBQUNGOztBQVVFO0VBQ0UsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVJKOztBQVVJO0VBUEY7SUFRRyxPQUFBO0lBQ0EsUUFBQTtJQUNBLGtCQUFBO0VBUEg7QUFDRjs7QUFTSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQVBOOztBQVNNO0VBSkY7SUFLSSxlQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7RUFOTjtBQUNGOztBQVVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBUko7O0FBVUk7RUFURjtJQVVJLDhCQUFBO0lBQ0EsWUFBQTtFQVBKO0FBQ0Y7O0FBU0k7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFQTjs7QUFTTTtFQUpGO0lBS0ksV0FBQTtJQUNBLGFBQUE7RUFOTjtBQUNGOztBQVNJO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQVBOOztBQVNNO0VBTEY7SUFNSSxXQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VBTk47QUFDRjs7QUFRTTtFQUNFLFdBQUE7QUFOUjs7QUFTVTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVBaOztBQVNZO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBUGQ7O0FBVVk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQVJkOztBQWlCRTtFQUNFLG1CQUFBO0FBZko7O0FBaUJJO0VBSEY7SUFJSSxhQUFBO0VBZEo7QUFDRjs7QUFrQkk7RUFERjtJQUVJLGFBQUE7RUFmSjtBQUNGOztBQWtCRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFoQko7O0FBa0JJO0VBVEY7SUFVSSxhQUFBO0VBZko7QUFDRjs7QUFrQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWhCSjs7QUFrQkk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQWhCTjs7QUFtQkk7RUFsQkY7SUFtQkksYUFBQTtFQWhCSjtBQUNGOztBQW1CRTtFQUtFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQXJCSjs7QUFhSTtFQURGO0lBRUksYUFBQTtFQVZKO0FBQ0Y7O0FBa0JJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFoQk47O0FBa0JNO0VBQ0UsZUFBQTtBQWhCUjs7QUFtQk07RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBakJSOztBQW1CUTtFQUNFLDhCQUFBO0FBakJWOztBQXNCSTtFQUNFLFlBQUE7QUFwQk4iLCJmaWxlIjoicHJvamVjdHMvc2NpbWFwcy9zcmMvYXBwL3BhZ2VzL21hcHMvbWFwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkZXNrdG9wOiAxMjQ4cHg7XG4kdGFibGV0OiA5NjBweDtcbiRtb2JpbGU6IDY0MHB4O1xuJGJyZWFrcG9pbnQ6IDc2OHB4O1xuXG46Om5nLWRlZXAge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2LCAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICB0b3A6IDUwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgXG4gICAgLnN3aXBlci1idXR0b24tcHJldjo6YWZ0ZXIsIC5zd2lwZXItYnV0dG9uLW5leHQ6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG46aG9zdCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludCkge1xuICAgIHRvcDogMCU7XG4gICAgdHJhbnNpdGlvbjogdG9wIDFzO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB6LWluZGV4OiA2O1xuICAgIFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5kZXRhaWxzLWRyYXdlciB7XG4gICAgbGVmdDogMCU7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAxcztcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHotaW5kZXg6IDY7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcbiAgICAgdG9wOiAwJTtcbiAgICAgbGVmdDogMCU7XG4gICAgIHRyYW5zaXRpb246IHRvcCAxcztcbiAgICB9XG5cbiAgICAmLmhpZGRlbiB7XG4gICAgICBsZWZ0OiAxMDAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB0b3A6IC0xMDAlO1xuICAgICAgICBsZWZ0OiAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaGlnaGxpZ2h0LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuXG4gICAgLmhpZ2hsaWdodC1ib2R5IHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMHJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2Fyb3VzZWwtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIHdpZHRoOiA1MCU7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAuY2Fyb3VzZWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAuc2NpLWNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAuY2Fyb3VzZWwtaW1hZ2Uge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwcmVtO1xuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC5jYXJvdXNlbC1pbWFnZS10aXRsZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICAgIGhlaWdodDogMy43NXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5kaXNjb3Zlci1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmRpc2NvdmVyLW1hcHMge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tb3JlLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubW9iaWxlLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgLm1vYmlsZS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbW9iaWxlKSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5mdWxsc2NyZWVuLW1vZGFsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1vYmlsZSkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMXJlbTtcblxuICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5cbiAgICAgIC5tb2JpbGUtaWNvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLm1vYmlsZS10aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBoMyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hcHMtY2Fyb3VzZWwge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxufSAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sci-maps',
                templateUrl: './maps.component.html',
                styleUrls: ['./maps.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { clsName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], showDrawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.details-open']
        }] }); })();


/***/ }),

/***/ "tVZI":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/purchase-modal/purchase-modal.module.ts ***!
  \***************************************************************************/
/*! exports provided: PurchaseModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseModalModule", function() { return PurchaseModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _purchase_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchase-modal.component */ "Fh0M");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "nIj0");








class PurchaseModalModule {
}
PurchaseModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PurchaseModalModule });
PurchaseModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PurchaseModalModule_Factory(t) { return new (t || PurchaseModalModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PurchaseModalModule, { declarations: [_purchase_modal_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]], exports: [_purchase_modal_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseModalComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_purchase_modal_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseModalComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
                ],
                exports: [_purchase_modal_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseModalComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-maps-maps-module.js.map