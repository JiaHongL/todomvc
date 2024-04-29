import{$ as Oe,A as ae,B as w,C as $,D as x,E as W,F as _,G as v,H as le,I as O,J as q,K as T,L as j,M as F,N as z,O as G,P as Ie,Q as Se,R as s,S as a,T as xe,U as C,V as d,W as M,X as Q,Y as Z,Z as R,_ as c,a as p,aa as Te,b,ba as J,c as _e,ca as y,d as Ce,da as ke,e as Ve,ea as V,f as De,fa as I,g as te,ga as ue,h as be,ha as Ne,i as Ae,j as we,k as Me,l as ie,m as L,n as ne,na as Pe,o as re,oa as je,p as D,q as m,r as A,s as g,t as oe,u as E,v as Ee,w as Fe,x as h,y as f,z as se}from"./chunk-4QKV7P3D.js";function Ge(t){t||(Ee(Ge),t=m(ae));let e=new _e(r=>t.onDestroy(r.next.bind(r)));return r=>r.pipe(we(e))}var de=class{constructor(e){this.source=e,this.destroyed=!1,this.destroyRef=m(ae),this.destroyRef.onDestroy(()=>{this.destroyed=!0})}subscribe(e){if(this.destroyed)throw new ie(953,!1);let r=this.source.pipe(Ge(this.destroyRef)).subscribe({next:i=>e(i)});return{unsubscribe:()=>r.unsubscribe()}}};function Re(t,e){return new de(t)}var yt=["input"],Ue=(()=>{let e=class e{constructor(){this.input=q.required("input"),this.valueChange$=new Ce,this.addTodo=Re(this.valueChange$.asObservable().pipe(Ae(i=>!!i.trim()),Me(()=>this.input().nativeElement.value="")))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-header"]],viewQuery:function(n,o){n&1&&Q(o.input,yt,5),n&2&&Z()},outputs:{addTodo:"addTodo"},standalone:!0,features:[y],decls:5,vars:0,consts:[["input",""],[1,"header"],["placeholder","What needs to be done?","autofocus","",1,"new-todo",3,"keyup.enter"]],template:function(n,o){if(n&1){let l=C();s(0,"header",1)(1,"h1"),c(2,"todos"),a(),s(3,"input",2,0),d("keyup.enter",function(){h(l);let P=R(4);return f(o.valueChange$.next(P.value))}),a()()}},encapsulation:2,changeDetection:0});let t=e;return t})();var Be={apiUrl:"https://todomvc-backend.onrender.com/api"};var _t=new D("WindowToken",{factory:()=>typeof window<"u"?window:new Window}),k=(()=>{let e=class e{constructor(){this.api=Be.apiUrl+"/todos",this.http=m(Ne),this.window=m(_t),this.todos=O([]),this.filter=O("all"),this.filteredTodos=V(()=>{let i=this.filter(),n=[];switch(i){case"active":n=this.todos().filter(o=>!o.completed);break;case"completed":n=this.todos().filter(o=>o.completed);break;default:n=this.todos();break}return n}),this.isFirstTimeTriggered=!0}getTodos$(){return this.http.get(this.api)}add(i){let n={completed:!1,text:i};this.http.post(this.api,n).subscribe(o=>{this.todos.update(l=>[...l,o])})}delete(i){this.http.delete(this.api+"/"+i).pipe(te(()=>this.getTodos$())).subscribe(n=>{this.todos.set(n)})}update(i,n){this.http.put(this.api,{id:i,text:n}).subscribe(o=>{this.todos.update(l=>l.map(u=>u.id===o.id?p(p({},u),o):u))})}toggle(i){let n=this.todos().find(o=>o.id===i);n&&(n.completed=!n.completed),this.http.put(this.api,n).subscribe(o=>{this.todos.update(l=>l.map(u=>u.id===o.id?p(p({},u),o):u))})}toggleAll(i){let n=this.todos().map(o=>b(p({},o),{completed:i}));this.http.put(this.api+"/batch",n).subscribe(o=>{this.todos.set(o)})}clearCompleted(){this.http.post(this.api+"/delete/batch",{ids:this.todos().filter(i=>i.completed).map(i=>i.id)}).pipe(te(()=>this.getTodos$())).subscribe(i=>{this.todos.set(i)})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=ne({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Ct(t,e){if(t&1){let r=C();s(0,"button",7),d("click",function(){h(r);let n=M();return f(n.clearCompleted.emit())}),c(1,"Clear completed"),a()}}var He=(()=>{let e=class e{constructor(){this.clearCompleted=w(),this.todosService=m(k),this.activeTodoCount=V(()=>this.todosService.todos().filter(i=>!i.completed).length),this.completedTodoCount=V(()=>this.todosService.todos().filter(i=>i.completed).length)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-footer"]],outputs:{clearCompleted:"clearCompleted"},standalone:!0,features:[y],decls:16,vars:2,consts:[[1,"footer"],[1,"todo-count"],[1,"filters"],["routerLink","/all","routerLinkActive","selected"],["routerLink","/active","routerLinkActive","selected"],["routerLink","/completed","routerLinkActive","selected"],[1,"clear-completed"],[1,"clear-completed",3,"click"]],template:function(n,o){n&1&&(s(0,"footer",0)(1,"span",1)(2,"strong"),c(3),a(),c(4," item left"),a(),s(5,"ul",2)(6,"li")(7,"a",3),c(8,"All"),a()(),s(9,"li")(10,"a",4),c(11,"Active"),a()(),s(12,"li")(13,"a",5),c(14,"Completed"),a()()(),j(15,Ct,2,0,"button",6),a()),n&2&&(_(3),Oe(o.activeTodoCount()),_(12),G(15,o.completedTodoCount()>0?15:-1))},dependencies:[Pe,je],encapsulation:2,changeDetection:0});let t=e;return t})();var Le=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-info"]],standalone:!0,features:[y],decls:11,vars:0,consts:[[1,"info"],["href","https://github.com/JiaHongL/todomvc"],["href","http://todomvc.com"]],template:function(n,o){n&1&&(s(0,"footer",0)(1,"p"),c(2,"Double-click to edit a todo"),a(),s(3,"p"),c(4,"Created by "),s(5,"a",1),c(6,"JiaHongL"),a()(),s(7,"p"),c(8,"Part of "),s(9,"a",2),c(10,"TodoMVC"),a()()())},encapsulation:2});let t=e;return t})();var Vt=["input"],$e=(()=>{let e=class e{constructor(){this.todoItem=$.required(),this.isCompleted=V(()=>this.todoItem()?.completed||!1),this.isEditing=O(!1),this.toggle=w(),this.delete=w(),this.update=w(),this.input=q("input",{read:x}),this.editingEffectRef=I(()=>{this.isEditing()&&setTimeout(()=>{this.input()?.nativeElement.focus()})})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-todo-item"]],viewQuery:function(n,o){n&1&&Q(o.input,Vt,5,x),n&2&&Z()},inputs:{todoItem:[A.SignalBased,"todoItem"]},outputs:{toggle:"toggle",delete:"delete",update:"update"},standalone:!0,features:[y],decls:9,vars:7,consts:[["input",""],[1,"view"],["type","checkbox",1,"toggle",3,"click","checked"],[3,"dblclick"],[1,"destroy",3,"click"],[1,"input-container"],["id","edit-todo-input",1,"edit",3,"blur","keyup.enter","value"]],template:function(n,o){if(n&1){let l=C();s(0,"li")(1,"div",1)(2,"input",2),d("click",function(){return h(l),f(o.toggle.emit(o.todoItem().id))}),a(),s(3,"label",3),d("dblclick",function(){return h(l),f(o.isEditing.set(!0))}),c(4),a(),s(5,"button",4),d("click",function(){return h(l),f(o.delete.emit(o.todoItem().id))}),a()(),s(6,"div",5)(7,"input",6,0),d("blur",function(){h(l);let P=R(8);return o.isEditing.set(!1),f(P.value=o.todoItem().text)})("keyup.enter",function(){h(l);let P=R(8);return o.isEditing.set(!1),f(o.update.emit({id:o.todoItem().id,text:P.value}))}),a()()()}n&2&&(z("completed",o.isCompleted())("editing",o.isEditing()),_(2),F("checked",o.isCompleted()),_(2),Te(" ",o.todoItem().text," "),_(3),F("value",o.todoItem().text))},encapsulation:2,changeDetection:0});let t=e;return t})();var Xe=(()=>{let e=class e{constructor(i,n){this._renderer=i,this._elementRef=n,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,n){this._renderer.setProperty(this._elementRef.nativeElement,i,n)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(n){return new(n||e)(v(le),v(x))},e.\u0275dir=E({type:e});let t=e;return t})(),Ye=(()=>{let e=class e extends Xe{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=se(e)))(o||e)}})(),e.\u0275dir=E({type:e,features:[T]});let t=e;return t})(),me=new D(""),Dt={provide:me,useExisting:L(()=>ge),multi:!0},ge=(()=>{let e=class e extends Ye{writeValue(i){this.setProperty("checked",i)}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=se(e)))(o||e)}})(),e.\u0275dir=E({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,o){n&1&&d("change",function(u){return o.onChange(u.target.checked)})("blur",function(){return o.onTouched()})},features:[J([Dt]),T]});let t=e;return t})(),bt={provide:me,useExisting:L(()=>Ke),multi:!0};function At(){let t=ue()?ue().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var wt=new D(""),Ke=(()=>{let e=class e extends Xe{constructor(i,n,o){super(i,n),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!At())}writeValue(i){let n=i??"";this.setProperty("value",n)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(n){return new(n||e)(v(le),v(x),v(wt,8))},e.\u0275dir=E({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&d("input",function(u){return o._handleInput(u.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(u){return o._compositionEnd(u.target.value)})},features:[J([bt]),T]});let t=e;return t})();var Mt=new D(""),Et=new D("");function et(t){return t!=null}function tt(t){return ke(t)?Ve(t):t}function it(t){let e={};return t.forEach(r=>{e=r!=null?p(p({},e),r):e}),Object.keys(e).length===0?null:e}function nt(t,e){return e.map(r=>r(t))}function Ft(t){return!t.validate}function rt(t){return t.map(e=>Ft(e)?e:r=>e.validate(r))}function It(t){if(!t)return null;let e=t.filter(et);return e.length==0?null:function(r){return it(nt(r,e))}}function ot(t){return t!=null?It(rt(t)):null}function St(t){if(!t)return null;let e=t.filter(et);return e.length==0?null:function(r){let i=nt(r,e).map(tt);return be(i).pipe(De(it))}}function st(t){return t!=null?St(rt(t)):null}function We(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function at(t){return t._rawValidators}function lt(t){return t._rawAsyncValidators}function ce(t){return t?Array.isArray(t)?t:[t]:[]}function Y(t,e){return Array.isArray(t)?t.includes(e):t===e}function qe(t,e){let r=ce(e);return ce(t).forEach(n=>{Y(r,n)||r.push(n)}),r}function ze(t,e){return ce(e).filter(r=>!Y(t,r))}var he=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ot(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=st(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,r){return this.control?this.control.hasError(e,r):!1}getError(e,r){return this.control?this.control.getError(e,r):null}};var H=class extends he{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},fe=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},xt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ki=b(p({},xt),{"[class.ng-submitted]":"isSubmitted"}),ut=(()=>{let e=class e extends fe{constructor(i){super(i)}};e.\u0275fac=function(n){return new(n||e)(v(H,2))},e.\u0275dir=E({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&z("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[T]});let t=e;return t})();var U="VALID",X="INVALID",N="PENDING",B="DISABLED";function Ot(t){return(ee(t)?t.validators:t)||null}function Tt(t){return Array.isArray(t)?ot(t):t||null}function kt(t,e){return(ee(e)?e.asyncValidators:t)||null}function Nt(t){return Array.isArray(t)?st(t):t||null}function ee(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var pe=class{constructor(e,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===U}get invalid(){return this.status===X}get pending(){return this.status==N}get disabled(){return this.status===B}get enabled(){return this.status!==B}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(qe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(qe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ze(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ze(e,this._rawAsyncValidators))}hasValidator(e){return Y(this._rawValidators,e)}hasAsyncValidator(e){return Y(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=N,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=B,this.errors=null,this._forEachChild(i=>{i.disable(b(p({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(b(p({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=U,this._forEachChild(i=>{i.enable(b(p({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(b(p({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===U||this.status===N)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?B:U}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=N,this._hasOwnPendingAsyncValidator=!0;let r=tt(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,r={}){this.errors=e,this._updateControlsErrors(r.emitEvent!==!1)}get(e){let r=e;return r==null||(Array.isArray(r)||(r=r.split(".")),r.length===0)?null:r.reduce((i,n)=>i&&i._find(n),this)}getError(e,r){let i=r?this.get(r):this;return i&&i.errors?i.errors[e]:null}hasError(e,r){return!!this.getError(e,r)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new W,this.statusChanges=new W}_calculateStatus(){return this._allControlsDisabled()?B:this.errors?X:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(N)?N:this._anyControlsHaveStatus(X)?X:U}_anyControlsHaveStatus(e){return this._anyControls(r=>r.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ee(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let r=this._parent&&this._parent.dirty;return!e&&!!r&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Tt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Nt(this._rawAsyncValidators)}};var dt=new D("CallSetDisabledState",{providedIn:"root",factory:()=>ve}),ve="always";function Pt(t,e,r=ve){Gt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||r==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Ut(t,e),Ht(t,e),Bt(t,e),jt(t,e)}function Qe(t,e,r=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),Rt(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function K(t,e){t.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(e)})}function jt(t,e){if(e.valueAccessor.setDisabledState){let r=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(r),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(r)})}}function Gt(t,e){let r=at(t);e.validator!==null?t.setValidators(We(r,e.validator)):typeof r=="function"&&t.setValidators([r]);let i=lt(t);e.asyncValidator!==null?t.setAsyncValidators(We(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let n=()=>t.updateValueAndValidity();K(e._rawValidators,n),K(e._rawAsyncValidators,n)}function Rt(t,e){let r=!1;if(t!==null){if(e.validator!==null){let n=at(t);if(Array.isArray(n)&&n.length>0){let o=n.filter(l=>l!==e.validator);o.length!==n.length&&(r=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let n=lt(t);if(Array.isArray(n)&&n.length>0){let o=n.filter(l=>l!==e.asyncValidator);o.length!==n.length&&(r=!0,t.setAsyncValidators(o))}}}let i=()=>{};return K(e._rawValidators,i),K(e._rawAsyncValidators,i),r}function Ut(t,e){e.valueAccessor.registerOnChange(r=>{t._pendingValue=r,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ct(t,e)})}function Bt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ct(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ct(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ht(t,e){let r=(i,n)=>{e.valueAccessor.writeValue(i),n&&e.viewToModelUpdate(i)};t.registerOnChange(r),e._registerOnDestroy(()=>{t._unregisterOnChange(r)})}function Lt(t,e){if(!t.hasOwnProperty("model"))return!1;let r=t.model;return r.isFirstChange()?!0:!Object.is(e,r.currentValue)}function $t(t){return Object.getPrototypeOf(t.constructor)===Ye}function Wt(t,e){if(!e)return null;Array.isArray(e);let r,i,n;return e.forEach(o=>{o.constructor===Ke?r=o:$t(o)?i=o:n=o}),n||i||r||null}function Ze(t,e){let r=t.indexOf(e);r>-1&&t.splice(r,1)}function Je(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ht=class extends pe{constructor(e=null,r,i){super(Ot(r),kt(i,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ee(r)&&(r.nonNullable||r.initialValueIsDefault)&&(Je(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,r={}){this.value=this._pendingValue=e,this._onChange.length&&r.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,r.emitViewToModelChange!==!1)),this.updateValueAndValidity(r)}patchValue(e,r={}){this.setValue(e,r)}reset(e=this.defaultValue,r={}){this._applyFormState(e),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ze(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ze(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Je(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ft=new D(""),qt={provide:H,useExisting:L(()=>ye)},ye=(()=>{let e=class e extends H{set isDisabled(i){}constructor(i,n,o,l,u){super(),this._ngModelWarningConfig=l,this.callSetDisabledState=u,this.update=new W,this._ngModelWarningSent=!1,this._setValidators(i),this._setAsyncValidators(n),this.valueAccessor=Wt(this,o)}ngOnChanges(i){if(this._isControlChanged(i)){let n=i.form.previousValue;n&&Qe(n,this,!1),Pt(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Lt(i,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Qe(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_isControlChanged(i){return i.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(n){return new(n||e)(v(Mt,10),v(Et,10),v(me,10),v(ft,8),v(dt,8))},e.\u0275dir=E({type:e,selectors:[["","formControl",""]],inputs:{form:[A.None,"formControl","form"],isDisabled:[A.None,"disabled","isDisabled"],model:[A.None,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[J([qt]),T,Fe]});let t=e;return t})();var zt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=oe({type:e}),e.\u0275inj=re({});let t=e;return t})();var pt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ft,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:dt,useValue:i.callSetDisabledState??ve}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=oe({type:e}),e.\u0275inj=re({imports:[zt]});let t=e;return t})();var mt=(()=>{let e=class e{constructor(){this.toggleAll=w(),this.todosService=m(k),this.isAllCompleted=V(()=>this.todosService.filteredTodos().every(i=>i.completed)),this.updateTodosEffectRef=I(()=>{this.isAllCompleted()!==this.checkboxFormControl.value&&this.checkboxFormControl.setValue(this.isAllCompleted())}),this.checkboxFormControl=new ht(this.isAllCompleted())}emitToggleAllEvent(){let i=this.checkboxFormControl.value||!1;this.toggleAll.emit(i)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-toggle-all"]],outputs:{toggleAll:"toggleAll"},standalone:!0,features:[y],decls:3,vars:1,consts:[["id","toggle-all","type","checkbox",1,"toggle-all",3,"change","formControl"],["for","toggle-all"]],template:function(n,o){n&1&&(s(0,"input",0),d("change",function(){return o.emitToggleAllEvent()}),a(),s(1,"label",1),c(2,"Toggle All Input"),a()),n&2&&F("formControl",o.checkboxFormControl)},dependencies:[pt,ge,ut,ye],encapsulation:2,changeDetection:0});let t=e;return t})();var Zt=(t,e)=>e.id;function Jt(t,e){if(t&1){let r=C();s(0,"app-toggle-all",5),d("toggleAll",function(n){h(r);let o=M();return f(o.todosService.toggleAll(n))}),a()}}function Xt(t,e){if(t&1){let r=C();s(0,"app-todo-item",6),d("toggle",function(){let n=h(r).$implicit,o=M();return f(o.todosService.toggle(n.id))})("delete",function(){let n=h(r).$implicit,o=M();return f(o.todosService.delete(n.id))})("update",function(n){h(r);let o=M();return f(o.todosService.update(n.id,n.text))}),a()}if(t&2){let r=e.$implicit;F("todoItem",r)}}function Yt(t,e){if(t&1){let r=C();s(0,"app-footer",7),d("clearCompleted",function(){h(r);let n=M();return f(n.todosService.clearCompleted())}),a()}}var gt=(()=>{let e=class e{constructor(){this.todosService=m(k),this.filter=$(),this.filterEffectRef=I(()=>{let i=this.filter()||"all";this.todosService.filter.set(i)},{allowSignalWrites:!0}),this.todosService.getTodos$().subscribe(i=>{this.todosService.todos.set(i)})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-todo"]],inputs:{filter:[A.SignalBased,"filter"]},standalone:!0,features:[y],decls:9,vars:2,consts:[[1,"todoapp"],[3,"addTodo"],[1,"main"],[1,"todo-list"],[3,"todoItem"],[3,"toggleAll"],[3,"toggle","delete","update","todoItem"],[3,"clearCompleted"]],template:function(n,o){n&1&&(s(0,"section",0)(1,"app-header",1),d("addTodo",function(u){return o.todosService.add(u)}),a(),s(2,"section",2),j(3,Jt,1,0,"app-toggle-all"),s(4,"ul",3),Ie(5,Xt,1,1,"app-todo-item",4,Zt),a()(),j(7,Yt,1,0,"app-footer"),a(),xe(8,"app-info")),n&2&&(_(3),G(3,o.todosService.filteredTodos().length>0?3:-1),_(2),Se(o.todosService.filteredTodos()),_(2),G(7,o.todosService.todos().length>0?7:-1))},dependencies:[Ue,He,Le,$e,mt],changeDetection:0});let t=e;return t})();var Kt=[{path:"",component:gt}],Cn=Kt;export{Cn as default};
