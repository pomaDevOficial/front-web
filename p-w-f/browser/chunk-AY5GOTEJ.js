import{B as ge,D as De,H as pe,N as me,Pa as ve,Q as Z,R as ye,Ra as p,T as g,Ta as q,U as K,W as y,Wa as N,Y as h,Z as D,_a as B,ba as Ee,da as X,ea as v,eb as Se,fc as Te,ga as we,gc as Ie,ia as Fe,j as he,ja as Ae,ka as Ce,p as fe,q as Y,sa as _,ta as be,u as T,xa as L}from"./chunk-IAIY7PNC.js";var Ne=null;function J(){return Ne}function ln(t){Ne??=t}var Re=class{};var I=new y(""),re=(()=>{let e=class e{historyGo(n){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=g({token:e,factory:()=>D(et),providedIn:"platform"});let t=e;return t})(),hn=new y(""),et=(()=>{let e=class e extends re{constructor(){super(),this._doc=D(I),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return J().getBaseHref(this._doc)}onPopState(n){let r=J().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){let r=J().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,r,i){this._history.pushState(n,r,i)}replaceState(n,r,i){this._history.replaceState(n,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=g({token:e,factory:()=>new e,providedIn:"platform"});let t=e;return t})();function ie(t,e){if(t.length==0)return e;if(e.length==0)return t;let s=0;return t.endsWith("/")&&s++,e.startsWith("/")&&s++,s==2?t+e.substring(1):s==1?t+e:t+"/"+e}function Me(t){let e=t.match(/#|\?|$/),s=e&&e.index||t.length,n=s-(t[s-1]==="/"?1:0);return t.slice(0,n)+t.slice(s)}function w(t){return t&&t[0]!=="?"?"?"+t:t}var x=(()=>{let e=class e{historyGo(n){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=g({token:e,factory:()=>D(tt),providedIn:"root"});let t=e;return t})(),Be=new y(""),tt=(()=>{let e=class e extends x{constructor(n,r){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??D(I).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return ie(this._baseHref,n)}path(n=!1){let r=this._platformLocation.pathname+w(this._platformLocation.search),i=this._platformLocation.hash;return i&&n?`${r}${i}`:r}pushState(n,r,i,a){let o=this.prepareExternalUrl(i+w(a));this._platformLocation.pushState(n,r,o)}replaceState(n,r,i,a){let o=this.prepareExternalUrl(i+w(a));this._platformLocation.replaceState(n,r,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};e.\u0275fac=function(r){return new(r||e)(h(re),h(Be,8))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),fn=(()=>{let e=class e extends x{constructor(n,r){super(),this._platformLocation=n,this._baseHref="",this._removeListenerFns=[],r!=null&&(this._baseHref=r)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let r=this._platformLocation.hash??"#";return r.length>0?r.substring(1):r}prepareExternalUrl(n){let r=ie(this._baseHref,n);return r.length>0?"#"+r:r}pushState(n,r,i,a){let o=this.prepareExternalUrl(i+w(a));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(n,r,o)}replaceState(n,r,i,a){let o=this.prepareExternalUrl(i+w(a));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(n,r,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};e.\u0275fac=function(r){return new(r||e)(h(re),h(Be,8))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),nt=(()=>{let e=class e{constructor(n){this._subject=new be,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let r=this._locationStrategy.getBaseHref();this._basePath=st(Me(Oe(r))),this._locationStrategy.onPopState(i=>{this._subject.emit({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+w(r))}normalize(n){return e.stripTrailingSlash(it(this._basePath,Oe(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",i=null){this._locationStrategy.pushState(i,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+w(r)),i)}replaceState(n,r="",i=null){this._locationStrategy.replaceState(i,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+w(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(i=>i(n,r))}subscribe(n,r,i){return this._subject.subscribe({next:n,error:r,complete:i})}};e.normalizeQueryParams=w,e.joinWithSlash=ie,e.stripTrailingSlash=Me,e.\u0275fac=function(r){return new(r||e)(h(x))},e.\u0275prov=g({token:e,factory:()=>rt(),providedIn:"root"});let t=e;return t})();function rt(){return new nt(h(x))}function it(t,e){if(!t||!e.startsWith(t))return e;let s=e.substring(t.length);return s===""||["/",";","?","#"].includes(s[0])?s:e}function Oe(t){return t.replace(/\/index.html$/,"")}function st(t){if(new RegExp("^(https?:)?//").test(t)){let[,s]=t.split(/\/\/[^\/]+/);return s}return t}function ke(t,e){e=encodeURIComponent(e);for(let s of t.split(";")){let n=s.indexOf("="),[r,i]=n==-1?[s,""]:[s.slice(0,n),s.slice(n+1)];if(r.trim()===e)return decodeURIComponent(i)}return null}var H=/\s+/,Pe=[],gn=(()=>{let e=class e{constructor(n,r){this._ngEl=n,this._renderer=r,this.initialClasses=Pe,this.stateMap=new Map}set klass(n){this.initialClasses=n!=null?n.trim().split(H):Pe}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(H):n}ngDoCheck(){for(let r of this.initialClasses)this._updateState(r,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let r of n)this._updateState(r,!0);else if(n!=null)for(let r of Object.keys(n))this._updateState(r,!!n[r]);this._applyStateDiff()}_updateState(n,r){let i=this.stateMap.get(n);i!==void 0?(i.enabled!==r&&(i.changed=!0,i.enabled=r),i.touched=!0):this.stateMap.set(n,{enabled:r,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let r=n[0],i=n[1];i.changed?(this._toggleClass(r,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(r,!1),this.stateMap.delete(r)),i.touched=!1}}_toggleClass(n,r){n=n.trim(),n.length>0&&n.split(H).forEach(i=>{r?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}};e.\u0275fac=function(r){return new(r||e)(p(_),p(N))},e.\u0275dir=v({type:e,selectors:[["","ngClass",""]],inputs:{klass:[Ee.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let t=e;return t})();var Q=class{constructor(e,s,n,r){this.$implicit=e,this.ngForOf=s,this.index=n,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Dn=(()=>{let e=class e{set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}constructor(n,r,i){this._viewContainer=n,this._template=r,this._differs=i,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let n=this._ngForOf;if(!this._differ&&n)if(0)try{}catch{}else this._differ=this._differs.find(n).create(this.ngForTrackBy)}if(this._differ){let n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){let r=this._viewContainer;n.forEachOperation((i,a,o)=>{if(i.previousIndex==null)r.createEmbeddedView(this._template,new Q(i.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)r.remove(a===null?void 0:a);else if(a!==null){let c=r.get(a);r.move(c,o),_e(c,i)}});for(let i=0,a=r.length;i<a;i++){let c=r.get(i).context;c.index=i,c.count=a,c.ngForOf=this._ngForOf}n.forEachIdentityChange(i=>{let a=r.get(i.currentIndex);_e(a,i)})}static ngTemplateContextGuard(n,r){return!0}};e.\u0275fac=function(r){return new(r||e)(p(B),p(q),p(Te))},e.\u0275dir=v({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let t=e;return t})();function _e(t,e){t.context.$implicit=e.item}var pn=(()=>{let e=class e{constructor(n,r){this._viewContainer=n,this._context=new ee,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){Le("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){Le("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,r){return!0}};e.\u0275fac=function(r){return new(r||e)(p(B),p(q))},e.\u0275dir=v({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let t=e;return t})(),ee=class{constructor(){this.$implicit=null,this.ngIf=null}};function Le(t,e){if(!!!(!e||e.createEmbeddedView))throw new Error(`${t} must be a TemplateRef, but received '${ye(e)}'.`)}var mn=(()=>{let e=class e{constructor(n,r,i){this._ngEl=n,this._differs=r,this._renderer=i,this._ngStyle=null,this._differ=null}set ngStyle(n){this._ngStyle=n,!this._differ&&n&&(this._differ=this._differs.find(n).create())}ngDoCheck(){if(this._differ){let n=this._differ.diff(this._ngStyle);n&&this._applyChanges(n)}}_setStyle(n,r){let[i,a]=n.split("."),o=i.indexOf("-")===-1?void 0:ve.DashCase;r!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,a?`${r}${a}`:r,o):this._renderer.removeStyle(this._ngEl.nativeElement,i,o)}_applyChanges(n){n.forEachRemovedItem(r=>this._setStyle(r.key,null)),n.forEachAddedItem(r=>this._setStyle(r.key,r.currentValue)),n.forEachChangedItem(r=>this._setStyle(r.key,r.currentValue))}};e.\u0275fac=function(r){return new(r||e)(p(_),p(Ie),p(N))},e.\u0275dir=v({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0});let t=e;return t})(),yn=(()=>{let e=class e{constructor(n){this._viewContainerRef=n,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(n){if(this._shouldRecreateView(n)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(n){return!!n.ngTemplateOutlet||!!n.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(n,r,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,i):!1,get:(n,r,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,i)}})}};e.\u0275fac=function(r){return new(r||e)(p(B))},e.\u0275dir=v({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[Ce]});let t=e;return t})();var En=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=X({type:e}),e.\u0275inj=K({});let t=e;return t})(),ot="browser",at="server";function ut(t){return t===ot}function ct(t){return t===at}var wn=(()=>{let e=class e{};e.\u0275prov=g({token:e,providedIn:"root",factory:()=>ut(D(L))?new te(D(I),window):new ne});let t=e;return t})(),te=class{constructor(e,s){this.document=e,this.window=s,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let s=dt(this.document,e);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let s=e.getBoundingClientRect(),n=s.left+this.window.pageXOffset,r=s.top+this.window.pageYOffset,i=this.offset();this.window.scrollTo(n-i[0],r-i[1])}};function dt(t,e){let s=t.getElementById(e)||t.getElementsByName(e)[0];if(s)return s;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let i=r.shadowRoot;if(i){let a=i.getElementById(e)||i.querySelector(`[name="${e}"]`);if(a)return a}r=n.nextNode()}}return null}var ne=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},k=class{};var M=class{},$=class{},C=class t{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(s=>{let n=s.indexOf(":");if(n>0){let r=s.slice(0,n),i=r.toLowerCase(),a=s.slice(n+1).trim();this.maybeSetNormalizedName(r,i),this.headers.has(i)?this.headers.get(i).push(a):this.headers.set(i,[a])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((s,n)=>{this.setHeaderEntries(n,s)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([s,n])=>{this.setHeaderEntries(s,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let s=this.headers.get(e.toLowerCase());return s&&s.length>0?s[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,s){return this.clone({name:e,value:s,op:"a"})}set(e,s){return this.clone({name:e,value:s,op:"s"})}delete(e,s){return this.clone({name:e,value:s,op:"d"})}maybeSetNormalizedName(e,s){this.normalizedNames.has(s)||this.normalizedNames.set(s,e)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(s=>{this.headers.set(s,e.headers.get(s)),this.normalizedNames.set(s,e.normalizedNames.get(s))})}clone(e){let s=new t;return s.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,s.lazyUpdate=(this.lazyUpdate||[]).concat([e]),s}applyUpdate(e){let s=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(e.name,s);let r=(e.op==="a"?this.headers.get(s):void 0)||[];r.push(...n),this.headers.set(s,r);break;case"d":let i=e.value;if(!i)this.headers.delete(s),this.normalizedNames.delete(s);else{let a=this.headers.get(s);if(!a)return;a=a.filter(o=>i.indexOf(o)===-1),a.length===0?(this.headers.delete(s),this.normalizedNames.delete(s)):this.headers.set(s,a)}break}}setHeaderEntries(e,s){let n=(Array.isArray(s)?s:[s]).map(i=>i.toString()),r=e.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(s=>e(this.normalizedNames.get(s),this.headers.get(s)))}};var oe=class{encodeKey(e){return xe(e)}encodeValue(e){return xe(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function ht(t,e){let s=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let i=r.indexOf("="),[a,o]=i==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,i)),e.decodeValue(r.slice(i+1))],c=s.get(a)||[];c.push(o),s.set(a,c)}),s}var ft=/%(\d[a-f0-9])/gi,gt={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function xe(t){return encodeURIComponent(t).replace(ft,(e,s)=>gt[s]??e)}function U(t){return`${t}`}var A=class t{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new oe,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=ht(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(s=>{let n=e.fromObject[s],r=Array.isArray(n)?n.map(U):[U(n)];this.map.set(s,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let s=this.map.get(e);return s?s[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,s){return this.clone({param:e,value:s,op:"a"})}appendAll(e){let s=[];return Object.keys(e).forEach(n=>{let r=e[n];Array.isArray(r)?r.forEach(i=>{s.push({param:n,value:i,op:"a"})}):s.push({param:n,value:r,op:"a"})}),this.clone(s)}set(e,s){return this.clone({param:e,value:s,op:"s"})}delete(e,s){return this.clone({param:e,value:s,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let s=this.encoder.encodeKey(e);return this.map.get(e).map(n=>s+"="+this.encoder.encodeValue(n)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let s=new t({encoder:this.encoder});return s.cloneFrom=this.cloneFrom||this,s.updates=(this.updates||[]).concat(e),s}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let s=(e.op==="a"?this.map.get(e.param):void 0)||[];s.push(U(e.value)),this.map.set(e.param,s);break;case"d":if(e.value!==void 0){let n=this.map.get(e.param)||[],r=n.indexOf(U(e.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(e.param,n):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var ae=class{constructor(){this.map=new Map}set(e,s){return this.map.set(e,s),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Dt(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ue(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function $e(t){return typeof Blob<"u"&&t instanceof Blob}function je(t){return typeof FormData<"u"&&t instanceof FormData}function pt(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var R=class t{constructor(e,s,n,r){this.url=s,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let i;if(Dt(this.method)||r?(this.body=n!==void 0?n:null,i=r):i=n,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new C,this.context??=new ae,!this.params)this.params=new A,this.urlWithParams=s;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=s;else{let o=s.indexOf("?"),c=o===-1?"?":o<s.length-1?"&":"";this.urlWithParams=s+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ue(this.body)||$e(this.body)||je(this.body)||pt(this.body)?this.body:this.body instanceof A?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||je(this.body)?null:$e(this.body)?this.body.type||null:Ue(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof A?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let s=e.method||this.method,n=e.url||this.url,r=e.responseType||this.responseType,i=e.transferCache??this.transferCache,a=e.body!==void 0?e.body:this.body,o=e.withCredentials??this.withCredentials,c=e.reportProgress??this.reportProgress,u=e.headers||this.headers,m=e.params||this.params,P=e.context??this.context;return e.setHeaders!==void 0&&(u=Object.keys(e.setHeaders).reduce((E,F)=>E.set(F,e.setHeaders[F]),u)),e.setParams&&(m=Object.keys(e.setParams).reduce((E,F)=>E.set(F,e.setParams[F]),m)),new t(s,n,a,{params:m,headers:u,context:P,reportProgress:c,responseType:r,withCredentials:o,transferCache:i})}},S=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(S||{}),O=class{constructor(e,s=V.Ok,n="OK"){this.headers=e.headers||new C,this.status=e.status!==void 0?e.status:s,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},ue=class t extends O{constructor(e={}){super(e),this.type=S.ResponseHeader}clone(e={}){return new t({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},j=class t extends O{constructor(e={}){super(e),this.type=S.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new t({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},z=class extends O{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},V=function(t){return t[t.Continue=100]="Continue",t[t.SwitchingProtocols=101]="SwitchingProtocols",t[t.Processing=102]="Processing",t[t.EarlyHints=103]="EarlyHints",t[t.Ok=200]="Ok",t[t.Created=201]="Created",t[t.Accepted=202]="Accepted",t[t.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",t[t.NoContent=204]="NoContent",t[t.ResetContent=205]="ResetContent",t[t.PartialContent=206]="PartialContent",t[t.MultiStatus=207]="MultiStatus",t[t.AlreadyReported=208]="AlreadyReported",t[t.ImUsed=226]="ImUsed",t[t.MultipleChoices=300]="MultipleChoices",t[t.MovedPermanently=301]="MovedPermanently",t[t.Found=302]="Found",t[t.SeeOther=303]="SeeOther",t[t.NotModified=304]="NotModified",t[t.UseProxy=305]="UseProxy",t[t.Unused=306]="Unused",t[t.TemporaryRedirect=307]="TemporaryRedirect",t[t.PermanentRedirect=308]="PermanentRedirect",t[t.BadRequest=400]="BadRequest",t[t.Unauthorized=401]="Unauthorized",t[t.PaymentRequired=402]="PaymentRequired",t[t.Forbidden=403]="Forbidden",t[t.NotFound=404]="NotFound",t[t.MethodNotAllowed=405]="MethodNotAllowed",t[t.NotAcceptable=406]="NotAcceptable",t[t.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",t[t.RequestTimeout=408]="RequestTimeout",t[t.Conflict=409]="Conflict",t[t.Gone=410]="Gone",t[t.LengthRequired=411]="LengthRequired",t[t.PreconditionFailed=412]="PreconditionFailed",t[t.PayloadTooLarge=413]="PayloadTooLarge",t[t.UriTooLong=414]="UriTooLong",t[t.UnsupportedMediaType=415]="UnsupportedMediaType",t[t.RangeNotSatisfiable=416]="RangeNotSatisfiable",t[t.ExpectationFailed=417]="ExpectationFailed",t[t.ImATeapot=418]="ImATeapot",t[t.MisdirectedRequest=421]="MisdirectedRequest",t[t.UnprocessableEntity=422]="UnprocessableEntity",t[t.Locked=423]="Locked",t[t.FailedDependency=424]="FailedDependency",t[t.TooEarly=425]="TooEarly",t[t.UpgradeRequired=426]="UpgradeRequired",t[t.PreconditionRequired=428]="PreconditionRequired",t[t.TooManyRequests=429]="TooManyRequests",t[t.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",t[t.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",t[t.InternalServerError=500]="InternalServerError",t[t.NotImplemented=501]="NotImplemented",t[t.BadGateway=502]="BadGateway",t[t.ServiceUnavailable=503]="ServiceUnavailable",t[t.GatewayTimeout=504]="GatewayTimeout",t[t.HttpVersionNotSupported=505]="HttpVersionNotSupported",t[t.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",t[t.InsufficientStorage=507]="InsufficientStorage",t[t.LoopDetected=508]="LoopDetected",t[t.NotExtended=510]="NotExtended",t[t.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",t}(V||{});function se(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var mt=(()=>{let e=class e{constructor(n){this.handler=n}request(n,r,i={}){let a;if(n instanceof R)a=n;else{let u;i.headers instanceof C?u=i.headers:u=new C(i.headers);let m;i.params&&(i.params instanceof A?m=i.params:m=new A({fromObject:i.params})),a=new R(n,r,i.body!==void 0?i.body:null,{headers:u,context:i.context,params:m,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache})}let o=Y(a).pipe(De(u=>this.handler.handle(u)));if(n instanceof R||i.observe==="events")return o;let c=o.pipe(ge(u=>u instanceof j));switch(i.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return c.pipe(T(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return u.body}));case"blob":return c.pipe(T(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new Error("Response is not a Blob.");return u.body}));case"text":return c.pipe(T(u=>{if(u.body!==null&&typeof u.body!="string")throw new Error("Response is not a string.");return u.body}));case"json":default:return c.pipe(T(u=>u.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${i.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new A().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,i={}){return this.request("PATCH",n,se(i,r))}post(n,r,i={}){return this.request("POST",n,se(i,r))}put(n,r,i={}){return this.request("PUT",n,se(i,r))}};e.\u0275fac=function(r){return new(r||e)(h(M))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})();function yt(t,e){return e(t)}function Et(t,e,s){return(n,r)=>Ae(s,()=>e(n,i=>t(i,r)))}var Ge=new y(""),wt=new y(""),Ft=new y("");var ze=(()=>{let e=class e extends M{constructor(n,r){super(),this.backend=n,this.injector=r,this.chain=null,this.pendingTasks=D(Se);let i=D(Ft,{optional:!0});this.backend=i??n}handle(n){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(Ge),...this.injector.get(wt,[])]));this.chain=i.reduceRight((a,o)=>Et(a,o,this.injector),yt)}let r=this.pendingTasks.add();return this.chain(n,i=>this.backend.handle(i)).pipe(pe(()=>this.pendingTasks.remove(r)))}};e.\u0275fac=function(r){return new(r||e)(h($),h(Fe))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})();var At=/^\)\]\}',?\n/;function Ct(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}var Ve=(()=>{let e=class e{constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new Z(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?fe(r.\u0275loadImpl()):Y(null)).pipe(me(()=>new he(a=>{let o=r.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((d,l)=>o.setRequestHeader(d,l.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){let d=n.detectContentTypeHeader();d!==null&&o.setRequestHeader("Content-Type",d)}if(n.responseType){let d=n.responseType.toLowerCase();o.responseType=d!=="json"?d:"text"}let c=n.serializeBody(),u=null,m=()=>{if(u!==null)return u;let d=o.statusText||"OK",l=new C(o.getAllResponseHeaders()),b=Ct(o)||n.url;return u=new ue({headers:l,status:o.status,statusText:d,url:b}),u},P=()=>{let{headers:d,status:l,statusText:b,url:le}=m(),f=null;l!==V.NoContent&&(f=typeof o.response>"u"?o.responseText:o.response),l===0&&(l=f?V.Ok:0);let W=l>=200&&l<300;if(n.responseType==="json"&&typeof f=="string"){let Ye=f;f=f.replace(At,"");try{f=f!==""?JSON.parse(f):null}catch(Ze){f=Ye,W&&(W=!1,f={error:Ze,text:f})}}W?(a.next(new j({body:f,headers:d,status:l,statusText:b,url:le||void 0})),a.complete()):a.error(new z({error:f,headers:d,status:l,statusText:b,url:le||void 0}))},E=d=>{let{url:l}=m(),b=new z({error:d,status:o.status||0,statusText:o.statusText||"Unknown Error",url:l||void 0});a.error(b)},F=!1,ce=d=>{F||(a.next(m()),F=!0);let l={type:S.DownloadProgress,loaded:d.loaded};d.lengthComputable&&(l.total=d.total),n.responseType==="text"&&o.responseText&&(l.partialText=o.responseText),a.next(l)},de=d=>{let l={type:S.UploadProgress,loaded:d.loaded};d.lengthComputable&&(l.total=d.total),a.next(l)};return o.addEventListener("load",P),o.addEventListener("error",E),o.addEventListener("timeout",E),o.addEventListener("abort",E),n.reportProgress&&(o.addEventListener("progress",ce),c!==null&&o.upload&&o.upload.addEventListener("progress",de)),o.send(c),a.next({type:S.Sent}),()=>{o.removeEventListener("error",E),o.removeEventListener("abort",E),o.removeEventListener("load",P),o.removeEventListener("timeout",E),n.reportProgress&&(o.removeEventListener("progress",ce),c!==null&&o.upload&&o.upload.removeEventListener("progress",de)),o.readyState!==o.DONE&&o.abort()}})))}};e.\u0275fac=function(r){return new(r||e)(h(k))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),We=new y(""),bt="XSRF-TOKEN",vt=new y("",{providedIn:"root",factory:()=>bt}),St="X-XSRF-TOKEN",Tt=new y("",{providedIn:"root",factory:()=>St}),G=class{},It=(()=>{let e=class e{constructor(n,r,i){this.doc=n,this.platform=r,this.cookieName=i,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=ke(n,this.cookieName),this.lastCookieString=n),this.lastToken}};e.\u0275fac=function(r){return new(r||e)(h(I),h(L),h(vt))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})();function Rt(t,e){let s=t.url.toLowerCase();if(!D(We)||t.method==="GET"||t.method==="HEAD"||s.startsWith("http://")||s.startsWith("https://"))return e(t);let n=D(G).getToken(),r=D(Tt);return n!=null&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,n)})),e(t)}function Un(...t){let e=[mt,Ve,ze,{provide:M,useExisting:ze},{provide:$,useExisting:Ve},{provide:Ge,useValue:Rt,multi:!0},{provide:We,useValue:!0},{provide:G,useClass:It}];for(let s of t)e.push(...s.\u0275providers);return we(e)}export{J as a,ln as b,Re as c,I as d,hn as e,x as f,tt as g,fn as h,nt as i,ke as j,gn as k,Dn as l,pn as m,mn as n,yn as o,En as p,ot as q,ut as r,ct as s,wn as t,k as u,mt as v,Un as w};
