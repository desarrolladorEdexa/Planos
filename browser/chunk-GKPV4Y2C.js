import{$a as g,Ca as L,Da as l,Ea as c,Ha as de,Ka as ce,M as I,Ma as W,N as f,O as G,P as B,R as p,Ra as O,T as ue,Z as H,a,aa as S,b as u,cb as he,eb as z,fa as C,fb as h,gb as b,hb as Z,i as ne,ja as $,ka as V,l as ie,n as re,q as se,r as oe,ub as fe,vb as pe,wa as q,x as ae,xa as o,z as le}from"./chunk-6W3H5QY7.js";var De=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(o(q),o($))};static \u0275dir=l({type:n})}return n})(),Ae=(()=>{class n extends De{static \u0275fac=(()=>{let t;return function(r){return(t||(t=S(n)))(r||n)}})();static \u0275dir=l({type:n,features:[c]})}return n})(),Y=new p("");var Ge={provide:Y,useExisting:f(()=>Me),multi:!0};function Be(){let n=Z()?Z().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var He=new p(""),Me=(()=>{class n extends De{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Be())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(o(q),o($),o(He,8))};static \u0275dir=l({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&O("input",function(d){return r._handleInput(d.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(d){return r._compositionEnd(d.target.value)})},standalone:!1,features:[g([Ge]),c]})}return n})();function $e(n){return n==null||qe(n)===0}function qe(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var K=new p(""),Ee=new p("");function Le(n){return $e(n.value)?{required:!0}:null}function ge(n){return null}function we(n){return n!=null}function Fe(n){return de(n)?ie(n):n}function Ie(n){let e={};return n.forEach(t=>{e=t!=null?a(a({},e),t):e}),Object.keys(e).length===0?null:e}function Se(n,e){return e.map(t=>t(n))}function We(n){return!n.validate}function Oe(n){return n.map(e=>We(e)?e:t=>e.validate(t))}function ze(n){if(!n)return null;let e=n.filter(we);return e.length==0?null:function(t){return Ie(Se(t,e))}}function J(n){return n!=null?ze(Oe(n)):null}function Ze(n){if(!n)return null;let e=n.filter(we);return e.length==0?null:function(t){let i=Se(t,e).map(Fe);return ae(i).pipe(oe(Ie))}}function Q(n){return n!=null?Ze(Oe(n)):null}function me(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Xe(n){return n._rawValidators}function Ye(n){return n._rawAsyncValidators}function X(n){return n?Array.isArray(n)?n:[n]:[]}function x(n,e){return Array.isArray(n)?n.includes(e):n===e}function ve(n,e){let t=X(e);return X(n).forEach(r=>{x(t,r)||t.push(r)}),t}function _e(n,e){return X(e).filter(t=>!x(n,t))}var P=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=J(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Q(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},_=class extends P{name;get formDirective(){return null}get path(){return null}},F=class extends P{_parent=null;name=null;valueAccessor=null},U=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Ke={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Bt=u(a({},Ke),{"[class.ng-submitted]":"isSubmitted"}),Ht=(()=>{class n extends U{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(o(F,2))};static \u0275dir=l({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&W("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[c]})}return n})(),$t=(()=>{class n extends U{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(o(_,10))};static \u0275dir=l({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&W("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[c]})}return n})();var D="VALID",N="INVALID",m="PENDING",A="DISABLED",y=class{},k=class extends y{value;source;constructor(e,t){super(),this.value=e,this.source=t}},E=class extends y{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},w=class extends y{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},v=class extends y{status;source;constructor(e,t){super(),this.status=e,this.source=t}};function Ne(n){return(j(n)?n.validators:n)||null}function Je(n){return Array.isArray(n)?J(n):n||null}function xe(n,e){return(j(e)?e.asyncValidators:n)||null}function Qe(n){return Array.isArray(n)?Q(n):n||null}function j(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function et(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new I(1e3,"");if(!i[t])throw new I(1001,"")}function tt(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new I(1002,"")})}var R=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return h(this.statusReactive)}set status(e){h(()=>this.statusReactive.set(e))}_status=b(()=>this.statusReactive());statusReactive=V(void 0);get valid(){return this.status===D}get invalid(){return this.status===N}get pending(){return this.status==m}get disabled(){return this.status===A}get enabled(){return this.status!==A}errors;get pristine(){return h(this.pristineReactive)}set pristine(e){h(()=>this.pristineReactive.set(e))}_pristine=b(()=>this.pristineReactive());pristineReactive=V(!0);get dirty(){return!this.pristine}get touched(){return h(this.touchedReactive)}set touched(e){h(()=>this.touchedReactive.set(e))}_touched=b(()=>this.touchedReactive());touchedReactive=V(!1);get untouched(){return!this.touched}_events=new ne;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ve(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ve(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(_e(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(_e(e,this._rawAsyncValidators))}hasValidator(e){return x(this._rawValidators,e)}hasAsyncValidator(e){return x(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(u(a({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new w(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new w(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(u(a({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new E(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new E(!0,i))}markAsPending(e={}){this.status=m;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new v(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(u(a({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=A,this.errors=null,this._forEachChild(r=>{r.disable(u(a({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new k(this.value,i)),this._events.next(new v(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(u(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=D,this._forEachChild(i=>{i.enable(u(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(u(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===m)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new k(this.value,t)),this._events.next(new v(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(u(a({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?A:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=m,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=Fe(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new v(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new C,this.statusChanges=new C}_calculateStatus(){return this._allControlsDisabled()?A:this.errors?N:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(m)?m:this._anyControlsHaveStatus(N)?N:D}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new E(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new w(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){j(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Je(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Qe(this._rawAsyncValidators)}},T=class extends R{constructor(e,t,i){super(Ne(t),xe(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){tt(this,!0,e),Object.keys(e).forEach(i=>{et(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,s)=>{i=t(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ee=new p("",{providedIn:"root",factory:()=>te}),te="always";function nt(n,e){return[...e.path,n]}function Pe(n,e,t=te){Ue(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),rt(n,e),ot(n,e),st(n,e),it(n,e)}function ye(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function it(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function Ue(n,e){let t=Xe(n);e.validator!==null?n.setValidators(me(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=Ye(n);e.asyncValidator!==null?n.setAsyncValidators(me(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();ye(e._rawValidators,r),ye(e._rawAsyncValidators,r)}function rt(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&ke(n,e)})}function st(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&ke(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function ke(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function ot(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function at(n,e){n==null,Ue(n,e)}function lt(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function ut(n){return Object.getPrototypeOf(n.constructor)===Ae}function dt(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function ct(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(s=>{s.constructor===Me?t=s:ut(s)?i=s:r=s}),r||i||t||null}var ht={provide:_,useExisting:f(()=>ft)},M=Promise.resolve(),ft=(()=>{class n extends _{callSetDisabledState;get submitted(){return h(this.submittedReactive)}_submitted=b(()=>this.submittedReactive());submittedReactive=V(!1);_directives=new Set;form;ngSubmit=new C;options;constructor(t,i,r){super(),this.callSetDisabledState=r,this.form=new T({},J(t),Q(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){M.then(()=>{let i=this._findContainer(t.path);t.control=i.registerControl(t.name,t.control),Pe(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){M.then(()=>{let i=this._findContainer(t.path);i&&i.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){M.then(()=>{let i=this._findContainer(t.path),r=new T({});at(r,t),i.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){M.then(()=>{let i=this._findContainer(t.path);i&&i.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){M.then(()=>{this.form.get(t.path).setValue(i)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),dt(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(i){return new(i||n)(o(K,10),o(Ee,10),o(ee,8))};static \u0275dir=l({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&O("submit",function(d){return r.onSubmit(d)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[g([ht]),c]})}return n})();function Ce(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Ve(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var pt=class extends R{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(Ne(t),xe(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),j(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ve(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ce(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ce(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ve(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var gt={provide:F,useExisting:f(()=>mt)},be=Promise.resolve(),mt=(()=>{class n extends F{_changeDetectorRef;callSetDisabledState;control=new pt;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new C;constructor(t,i,r,s,d,Te){super(),this._changeDetectorRef=d,this.callSetDisabledState=Te,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=ct(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),lt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Pe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){be.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&z(i);be.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?nt(t,this._parent):[t]}static \u0275fac=function(i){return new(i||n)(o(_,9),o(K,10),o(Ee,10),o(Y,10),o(he,8),o(ee,8))};static \u0275dir=l({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[g([gt]),c,H]})}return n})();var Lt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=l({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})(),vt={provide:Y,useExisting:f(()=>_t),multi:!0},_t=(()=>{class n extends Ae{writeValue(t){let i=t??"";this.setProperty("value",i)}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=S(n)))(r||n)}})();static \u0275dir=l({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,r){i&1&&O("input",function(d){return r.onChange(d.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[g([vt]),c]})}return n})();var yt=(()=>{class n{_validator=ge;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):ge,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(i){return new(i||n)};static \u0275dir=l({type:n,features:[H]})}return n})();var Ct={provide:K,useExisting:f(()=>Vt),multi:!0};var Vt=(()=>{class n extends yt{required;inputName="required";normalizeInput=z;createValidator=t=>Le;enabled(t){return t}static \u0275fac=(()=>{let t;return function(r){return(t||(t=S(n)))(r||n)}})();static \u0275dir=l({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&ce("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[g([Ct]),c]})}return n})();var bt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=L({type:n});static \u0275inj=B({})}return n})();var Wt=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:ee,useValue:t.callSetDisabledState??te}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=L({type:n});static \u0275inj=B({imports:[bt]})}return n})();var Re=class n{constructor(e){this.http=e}apiItems="http://10.39.7.115:80/Plano/api/itemAll";apiUrl="http://10.39.7.115:80/Plano/api/Equivalencias";apiUsuarios="http://10.39.7.115:80/Plano/api/Usuarios";apiEquivalencias="http://10.39.7.115:80/Plano/api/ListasPrecios";obtenerItems(e,t){let i=new fe().set("listaPrecios",e.toString()).set("idItem",t.toString());return this.http.get(`${this.apiEquivalencias}/ObtenerItems`,{params:i}).pipe(se(2e3),le(r=>re(()=>new Error("Error en la solicitud, el servidor tard\xF3 demasiado en responder."))))}compararPorDescripcion(e){let t=`${this.apiItems}/comparar/descripcion/${encodeURIComponent(e)}`;return this.http.get(t)}getEquivalencias(){return this.http.get(this.apiUrl)}getEquivalenciaById(e){return this.http.get(`${this.apiUrl}/${e}`)}getEquivalenciaPorDescripcion(e){return this.http.get(`${this.apiUrl}/descripcion/${e}`)}getEquivalenciasPorNit(e){return this.http.get(`${this.apiUrl}/nit/${encodeURIComponent(e)}`)}getEquivalenciasPorNitId(e){return this.http.get(`${this.apiUrl}/nitId/${encodeURIComponent(e)}`)}createEquivalencia(e){return this.http.post(this.apiUrl,e)}updateEquivalencia(e,t){return this.http.put(`${this.apiUrl}/${e}`,t)}deleteEquivalencia(e){return this.http.delete(`${this.apiUrl}/${e}`)}getUsuarios(){return this.http.get(this.apiUsuarios)}getUsuariosById(e){return this.http.get(`${this.apiUsuarios}/${e}`)}createUsuarios(e){return e.fechaCreacion||(e.fechaCreacion=new Date().toISOString()),this.http.post(this.apiUsuarios,e)}updateUsuarios(e,t){return this.http.put(`${this.apiUsuarios}/${e}`,t)}deleteUsuarios(e){return this.http.delete(`${this.apiUsuarios}/${e}`)}enviarDatosTabla(e){return this.http.post("https://localhost:44390/excel",e)}cargarEquivalenciasPorPlano(e){return this.http.post(`${this.apiUrl}/CargarPlano`,e)}static \u0275fac=function(t){return new(t||n)(ue(pe))};static \u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"})};export{Me as a,Ht as b,$t as c,ft as d,mt as e,Lt as f,_t as g,Vt as h,Wt as i,Re as j};
