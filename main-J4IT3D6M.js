import{A as N,Aa as I,B as T,Ca as H,Da as K,E as F,Ea as Z,Fa as G,Ga as $,H as W,Ja as q,Ka as z,La as Y,N as U,T as C,X as j,a as M,d as S,f as m,g as P,h as c,ha as L,j as R,k as E,m as w,n as b,o as u,p as h,q as p,r as k,s as A,sa as V,t as f,ua as x,v as D,va as B,wa as _,y}from"./chunk-BGIRWM4X.js";var J=[{path:":filter",loadChildren:()=>import("./chunk-TVEQYFI7.js")},{path:"**",redirectTo:"all",pathMatch:"full"}];var v="Service workers are disabled or not supported by this browser";function se(r){return E(()=>P(new Error(r)))}var d=class{constructor(e){if(this.serviceWorker=e,!e)this.worker=this.events=this.registration=se(v);else{let t=w(e,"controllerchange").pipe(c(()=>e.controller)),n=E(()=>m(e.controller)),s=R(n,t);this.worker=s.pipe(h(l=>!!l)),this.registration=this.worker.pipe(f(()=>e.getRegistration()));let O=w(e,"message").pipe(c(l=>l.data)).pipe(h(l=>l&&l.type)).pipe(A());O.connect(),this.events=O}}postMessage(e,i){return this.worker.pipe(p(1),D(t=>{t.postMessage(M({action:e},i))})).toPromise().then(()=>{})}postMessageWithOperation(e,i,t){let n=this.waitForOperationCompleted(t),s=this.postMessage(e,i);return Promise.all([s,n]).then(([,a])=>a)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(e){let i;return typeof e=="string"?i=t=>t.type===e:i=t=>e.includes(t.type),this.events.pipe(h(i))}nextEventOfType(e){return this.eventsOfType(e).pipe(p(1))}waitForOperationCompleted(e){return this.eventsOfType("OPERATION_COMPLETED").pipe(h(i=>i.nonce===e),p(1),c(i=>{if(i.result!==void 0)return i.result;throw new Error(i.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},oe=(()=>{let e=class e{get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,this.pushManager=null,this.subscriptionChanges=new S,!t.isEnabled){this.messages=u,this.notificationClicks=u,this.subscription=u;return}this.messages=this.sw.eventsOfType("PUSH").pipe(c(s=>s.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(c(s=>s.data)),this.pushManager=this.sw.registration.pipe(c(s=>s.pushManager));let n=this.pushManager.pipe(f(s=>s.getSubscription()));this.subscription=b(n,this.subscriptionChanges)}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(v));let n={userVisibleOnly:!0},s=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),a=new Uint8Array(new ArrayBuffer(s.length));for(let o=0;o<s.length;o++)a[o]=s.charCodeAt(o);return n.applicationServerKey=a,this.pushManager.pipe(f(o=>o.subscribe(n)),p(1)).toPromise().then(o=>(this.subscriptionChanges.next(o),o))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(v));let t=n=>{if(n===null)throw new Error("Not subscribed to push notifications.");return n.unsubscribe().then(s=>{if(!s)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(p(1),f(t)).toPromise()}decodeBase64(t){return atob(t)}};e.\u0275fac=function(n){return new(n||e)(T(d))},e.\u0275prov=y({token:e,factory:e.\u0275fac});let r=e;return r})(),ae=(()=>{let e=class e{get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=u,this.unrecoverable=u;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(v));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(v));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}};e.\u0275fac=function(n){return new(n||e)(T(d))},e.\u0275prov=y({token:e,factory:e.\u0275fac});let r=e;return r})();var Q=new N("");function ce(r,e,i,t){return()=>{if(!(I(t)&&"serviceWorker"in navigator&&i.enabled!==!1))return;navigator.serviceWorker.addEventListener("controllerchange",()=>{navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.postMessage({action:"INITIALIZE"})});let n;if(typeof i.registrationStrategy=="function")n=i.registrationStrategy();else{let[a,...o]=(i.registrationStrategy||"registerWhenStable:30000").split(":");switch(a){case"registerImmediately":n=m(null);break;case"registerWithDelay":n=X(+o[0]||0);break;case"registerWhenStable":n=o[0]?b(ee(r),X(+o[0])):ee(r);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${i.registrationStrategy}`)}}r.get(j).runOutsideAngular(()=>n.pipe(p(1)).subscribe(()=>navigator.serviceWorker.register(e,{scope:i.scope}).catch(a=>console.error("Service worker registration failed with:",a))))}}function X(r){return m(null).pipe(k(r))}function ee(r){return r.get(B).isStable.pipe(h(i=>i))}function pe(r,e){return new d(I(e)&&r.enabled!==!1?navigator.serviceWorker:void 0)}var g=class{};function te(r,e={}){return W([oe,ae,{provide:Q,useValue:r},{provide:g,useValue:e},{provide:d,useFactory:pe,deps:[g,C]},{provide:x,useFactory:ce,deps:[U,Q,g,C],multi:!0}])}var re={providers:[H(K()),q(J,z(),Y()),G(),te("ngsw-worker.js",{enabled:!_(),registrationStrategy:"registerWhenStable:30000"})]};var ne=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=F({type:e,selectors:[["app-root"]],standalone:!0,features:[V],decls:1,vars:0,template:function(n,s){n&1&&L(0,"router-outlet")},dependencies:[$],encapsulation:2});let r=e;return r})();Z(ne,re).catch(r=>console.error(r));
