const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-DVtt2n9T.js","./webworkerAll-CSPA8VZM.js","./colorToUniform-D4g9gBlc.js","./getBatchSamplersUniformGroup-Cn-MYyXc.js","./WebGPURenderer-DI7v-qk-.js","./SharedSystems-DJIRG7XZ.js","./WebGLRenderer-Cz23HemV.js"])))=>i.map(i=>d[i]);
var Gf=Object.defineProperty;var Nf=(n,t,e)=>t in n?Gf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var G=(n,t,e)=>Nf(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Vf="modulepreload",Wf=function(n,t){return new URL(n,t).href},Aa={},_r=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){const s=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.all(e.map(l=>{if(l=Wf(l,i),l in Aa)return;Aa[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!i)for(let d=s.length-1;d>=0;d--){const m=s[d];if(m.href===l&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Vf,u||(f.as="script",f.crossOrigin=""),f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((d,m)=>{f.addEventListener("load",d),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}return r.then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var B=(n=>(n.Application="application",n.WebGLPipes="webgl-pipes",n.WebGLPipesAdaptor="webgl-pipes-adaptor",n.WebGLSystem="webgl-system",n.WebGPUPipes="webgpu-pipes",n.WebGPUPipesAdaptor="webgpu-pipes-adaptor",n.WebGPUSystem="webgpu-system",n.CanvasSystem="canvas-system",n.CanvasPipesAdaptor="canvas-pipes-adaptor",n.CanvasPipes="canvas-pipes",n.Asset="asset",n.LoadParser="load-parser",n.ResolveParser="resolve-parser",n.CacheParser="cache-parser",n.DetectionParser="detection-parser",n.MaskEffect="mask-effect",n.BlendMode="blend-mode",n.TextureSource="texture-source",n.Environment="environment",n.ShapeBuilder="shape-builder",n))(B||{});const Ns=n=>{if(typeof n=="function"||typeof n=="object"&&n.extension){if(!n.extension)throw new Error("Extension class must have an extension object");n={...typeof n.extension!="object"?{type:n.extension}:n.extension,ref:n}}if(typeof n=="object")n={...n};else throw new Error("Invalid extension type");return typeof n.type=="string"&&(n.type=[n.type]),n},$n=(n,t)=>Ns(n).priority??t,Ft={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...n){return n.map(Ns).forEach(t=>{t.type.forEach(e=>{var i,r;return(r=(i=this._removeHandlers)[e])==null?void 0:r.call(i,t)})}),this},add(...n){return n.map(Ns).forEach(t=>{t.type.forEach(e=>{var s,o;const i=this._addHandlers,r=this._queue;i[e]?(o=i[e])==null||o.call(i,t):(r[e]=r[e]||[],(s=r[e])==null||s.push(t))})}),this},handle(n,t,e){var o;const i=this._addHandlers,r=this._removeHandlers;if(i[n]||r[n])throw new Error(`Extension type ${n} already has a handler`);i[n]=t,r[n]=e;const s=this._queue;return s[n]&&((o=s[n])==null||o.forEach(a=>t(a)),delete s[n]),this},handleByMap(n,t){return this.handle(n,e=>{e.name&&(t[e.name]=e.ref)},e=>{e.name&&delete t[e.name]})},handleByNamedList(n,t,e=-1){return this.handle(n,i=>{t.findIndex(s=>s.name===i.name)>=0||(t.push({name:i.name,value:i.ref}),t.sort((s,o)=>$n(o.value,e)-$n(s.value,e)))},i=>{const r=t.findIndex(s=>s.name===i.name);r!==-1&&t.splice(r,1)})},handleByList(n,t,e=-1){return this.handle(n,i=>{t.includes(i.ref)||(t.push(i.ref),t.sort((r,s)=>$n(s,e)-$n(r,e)))},i=>{const r=t.indexOf(i.ref);r!==-1&&t.splice(r,1)})}},$f={extension:{type:B.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await _r(()=>import("./browserAll-DVtt2n9T.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)}},Yf={extension:{type:B.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await _r(()=>import("./webworkerAll-CSPA8VZM.js"),__vite__mapDeps([1,2,3]),import.meta.url)}};class Ot{constructor(t,e,i){this._x=e||0,this._y=i||0,this._observer=t}clone(t){return new Ot(t??this._observer,this._x,this._y)}set(t=0,e=t){return(this._x!==t||this._y!==e)&&(this._x=t,this._y=e,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}function Rr(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var hu={exports:{}};(function(n){var t=Object.prototype.hasOwnProperty,e="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(e=!1));function r(l,u,h){this.fn=l,this.context=u,this.once=h||!1}function s(l,u,h,c,f){if(typeof h!="function")throw new TypeError("The listener must be a function");var d=new r(h,c||l,f),m=e?e+u:u;return l._events[m]?l._events[m].fn?l._events[m]=[l._events[m],d]:l._events[m].push(d):(l._events[m]=d,l._eventsCount++),l}function o(l,u){--l._eventsCount===0?l._events=new i:delete l._events[u]}function a(){this._events=new i,this._eventsCount=0}a.prototype.eventNames=function(){var u=[],h,c;if(this._eventsCount===0)return u;for(c in h=this._events)t.call(h,c)&&u.push(e?c.slice(1):c);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(h)):u},a.prototype.listeners=function(u){var h=e?e+u:u,c=this._events[h];if(!c)return[];if(c.fn)return[c.fn];for(var f=0,d=c.length,m=new Array(d);f<d;f++)m[f]=c[f].fn;return m},a.prototype.listenerCount=function(u){var h=e?e+u:u,c=this._events[h];return c?c.fn?1:c.length:0},a.prototype.emit=function(u,h,c,f,d,m){var p=e?e+u:u;if(!this._events[p])return!1;var g=this._events[p],_=arguments.length,x,v;if(g.fn){switch(g.once&&this.removeListener(u,g.fn,void 0,!0),_){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,h),!0;case 3:return g.fn.call(g.context,h,c),!0;case 4:return g.fn.call(g.context,h,c,f),!0;case 5:return g.fn.call(g.context,h,c,f,d),!0;case 6:return g.fn.call(g.context,h,c,f,d,m),!0}for(v=1,x=new Array(_-1);v<_;v++)x[v-1]=arguments[v];g.fn.apply(g.context,x)}else{var y=g.length,S;for(v=0;v<y;v++)switch(g[v].once&&this.removeListener(u,g[v].fn,void 0,!0),_){case 1:g[v].fn.call(g[v].context);break;case 2:g[v].fn.call(g[v].context,h);break;case 3:g[v].fn.call(g[v].context,h,c);break;case 4:g[v].fn.call(g[v].context,h,c,f);break;default:if(!x)for(S=1,x=new Array(_-1);S<_;S++)x[S-1]=arguments[S];g[v].fn.apply(g[v].context,x)}}return!0},a.prototype.on=function(u,h,c){return s(this,u,h,c,!1)},a.prototype.once=function(u,h,c){return s(this,u,h,c,!0)},a.prototype.removeListener=function(u,h,c,f){var d=e?e+u:u;if(!this._events[d])return this;if(!h)return o(this,d),this;var m=this._events[d];if(m.fn)m.fn===h&&(!f||m.once)&&(!c||m.context===c)&&o(this,d);else{for(var p=0,g=[],_=m.length;p<_;p++)(m[p].fn!==h||f&&!m[p].once||c&&m[p].context!==c)&&g.push(m[p]);g.length?this._events[d]=g.length===1?g[0]:g:o(this,d)}return this},a.prototype.removeAllListeners=function(u){var h;return u?(h=e?e+u:u,this._events[h]&&o(this,h)):(this._events=new i,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=e,a.EventEmitter=a,n.exports=a})(hu);var Xf=hu.exports;const Et=Rr(Xf),Hf=Math.PI*2,jf=180/Math.PI,Wi=Math.PI/180;class Ct{constructor(t=0,e=0){this.x=0,this.y=0,this.x=t,this.y=e}clone(){return new Ct(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,e=t){return this.x=t,this.y=e,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return Zr.x=0,Zr.y=0,Zr}}const Zr=new Ct;class J{constructor(t=1,e=0,i=0,r=1,s=0,o=0){this.array=null,this.a=t,this.b=e,this.c=i,this.d=r,this.tx=s,this.ty=o}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,e,i,r,s,o){return this.a=t,this.b=e,this.c=i,this.d=r,this.tx=s,this.ty=o,this}toArray(t,e){this.array||(this.array=new Float32Array(9));const i=e||this.array;return t?(i[0]=this.a,i[1]=this.b,i[2]=0,i[3]=this.c,i[4]=this.d,i[5]=0,i[6]=this.tx,i[7]=this.ty,i[8]=1):(i[0]=this.a,i[1]=this.c,i[2]=this.tx,i[3]=this.b,i[4]=this.d,i[5]=this.ty,i[6]=0,i[7]=0,i[8]=1),i}apply(t,e){e=e||new Ct;const i=t.x,r=t.y;return e.x=this.a*i+this.c*r+this.tx,e.y=this.b*i+this.d*r+this.ty,e}applyInverse(t,e){e=e||new Ct;const i=this.a,r=this.b,s=this.c,o=this.d,a=this.tx,l=this.ty,u=1/(i*o+s*-r),h=t.x,c=t.y;return e.x=o*u*h+-s*u*c+(l*s-a*o)*u,e.y=i*u*c+-r*u*h+(-l*i+a*r)*u,e}translate(t,e){return this.tx+=t,this.ty+=e,this}scale(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this}rotate(t){const e=Math.cos(t),i=Math.sin(t),r=this.a,s=this.c,o=this.tx;return this.a=r*e-this.b*i,this.b=r*i+this.b*e,this.c=s*e-this.d*i,this.d=s*i+this.d*e,this.tx=o*e-this.ty*i,this.ty=o*i+this.ty*e,this}append(t){const e=this.a,i=this.b,r=this.c,s=this.d;return this.a=t.a*e+t.b*r,this.b=t.a*i+t.b*s,this.c=t.c*e+t.d*r,this.d=t.c*i+t.d*s,this.tx=t.tx*e+t.ty*r+this.tx,this.ty=t.tx*i+t.ty*s+this.ty,this}appendFrom(t,e){const i=t.a,r=t.b,s=t.c,o=t.d,a=t.tx,l=t.ty,u=e.a,h=e.b,c=e.c,f=e.d;return this.a=i*u+r*c,this.b=i*h+r*f,this.c=s*u+o*c,this.d=s*h+o*f,this.tx=a*u+l*c+e.tx,this.ty=a*h+l*f+e.ty,this}setTransform(t,e,i,r,s,o,a,l,u){return this.a=Math.cos(a+u)*s,this.b=Math.sin(a+u)*s,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=t-(i*this.a+r*this.c),this.ty=e-(i*this.b+r*this.d),this}prepend(t){const e=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const i=this.a,r=this.c;this.a=i*t.a+this.b*t.c,this.b=i*t.b+this.b*t.d,this.c=r*t.a+this.d*t.c,this.d=r*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this}decompose(t){const e=this.a,i=this.b,r=this.c,s=this.d,o=t.pivot,a=-Math.atan2(-r,s),l=Math.atan2(i,e),u=Math.abs(a+l);return u<1e-5||Math.abs(Hf-u)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=a,t.skew.y=l),t.scale.x=Math.sqrt(e*e+i*i),t.scale.y=Math.sqrt(r*r+s*s),t.position.x=this.tx+(o.x*e+o.y*r),t.position.y=this.ty+(o.x*i+o.y*s),t}invert(){const t=this.a,e=this.b,i=this.c,r=this.d,s=this.tx,o=t*r-e*i;return this.a=r/o,this.b=-e/o,this.c=-i/o,this.d=t/o,this.tx=(i*this.ty-r*s)/o,this.ty=-(t*this.ty-e*s)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new J;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return Kf.identity()}static get shared(){return qf.identity()}}const qf=new J,Kf=new J,Je=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],ti=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],ei=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],ii=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Vs=[],cu=[],Yn=Math.sign;function Qf(){for(let n=0;n<16;n++){const t=[];Vs.push(t);for(let e=0;e<16;e++){const i=Yn(Je[n]*Je[e]+ei[n]*ti[e]),r=Yn(ti[n]*Je[e]+ii[n]*ti[e]),s=Yn(Je[n]*ei[e]+ei[n]*ii[e]),o=Yn(ti[n]*ei[e]+ii[n]*ii[e]);for(let a=0;a<16;a++)if(Je[a]===i&&ti[a]===r&&ei[a]===s&&ii[a]===o){t.push(a);break}}}for(let n=0;n<16;n++){const t=new J;t.set(Je[n],ti[n],ei[n],ii[n],0,0),cu.push(t)}}Qf();const ot={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:n=>Je[n],uY:n=>ti[n],vX:n=>ei[n],vY:n=>ii[n],inv:n=>n&8?n&15:-n&7,add:(n,t)=>Vs[n][t],sub:(n,t)=>Vs[n][ot.inv(t)],rotate180:n=>n^4,isVertical:n=>(n&3)===2,byDirection:(n,t)=>Math.abs(n)*2<=Math.abs(t)?t>=0?ot.S:ot.N:Math.abs(t)*2<=Math.abs(n)?n>0?ot.E:ot.W:t>0?n>0?ot.SE:ot.SW:n>0?ot.NE:ot.NW,matrixAppendRotationInv:(n,t,e=0,i=0)=>{const r=cu[ot.inv(t)];r.tx=e,r.ty=i,n.append(r)}},Xn=[new Ct,new Ct,new Ct,new Ct];class dt{constructor(t=0,e=0,i=0,r=0){this.type="rectangle",this.x=Number(t),this.y=Number(e),this.width=Number(i),this.height=Number(r)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new dt(0,0,0,0)}clone(){return new dt(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height}strokeContains(t,e,i){const{width:r,height:s}=this;if(r<=0||s<=0)return!1;const o=this.x,a=this.y,l=o-i/2,u=o+r+i/2,h=a-i/2,c=a+s+i/2,f=o+i/2,d=o+r-i/2,m=a+i/2,p=a+s-i/2;return t>=l&&t<=u&&e>=h&&e<=c&&!(t>f&&t<d&&e>m&&e<p)}intersects(t,e){if(!e){const C=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=C)return!1;const T=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>T}const i=this.left,r=this.right,s=this.top,o=this.bottom;if(r<=i||o<=s)return!1;const a=Xn[0].set(t.left,t.top),l=Xn[1].set(t.left,t.bottom),u=Xn[2].set(t.right,t.top),h=Xn[3].set(t.right,t.bottom);if(u.x<=a.x||l.y<=a.y)return!1;const c=Math.sign(e.a*e.d-e.b*e.c);if(c===0||(e.apply(a,a),e.apply(l,l),e.apply(u,u),e.apply(h,h),Math.max(a.x,l.x,u.x,h.x)<=i||Math.min(a.x,l.x,u.x,h.x)>=r||Math.max(a.y,l.y,u.y,h.y)<=s||Math.min(a.y,l.y,u.y,h.y)>=o))return!1;const f=c*(l.y-a.y),d=c*(a.x-l.x),m=f*i+d*s,p=f*r+d*s,g=f*i+d*o,_=f*r+d*o;if(Math.max(m,p,g,_)<=f*a.x+d*a.y||Math.min(m,p,g,_)>=f*h.x+d*h.y)return!1;const x=c*(a.y-u.y),v=c*(u.x-a.x),y=x*i+v*s,S=x*r+v*s,A=x*i+v*o,w=x*r+v*o;return!(Math.max(y,S,A,w)<=x*a.x+v*a.y||Math.min(y,S,A,w)>=x*h.x+v*h.y)}pad(t=0,e=t){return this.x-=t,this.y-=e,this.width+=t*2,this.height+=e*2,this}fit(t){const e=Math.max(this.x,t.x),i=Math.min(this.x+this.width,t.x+t.width),r=Math.max(this.y,t.y),s=Math.min(this.y+this.height,t.y+t.height);return this.x=e,this.width=Math.max(i-e,0),this.y=r,this.height=Math.max(s-r,0),this}ceil(t=1,e=.001){const i=Math.ceil((this.x+this.width-e)*t)/t,r=Math.ceil((this.y+this.height-e)*t)/t;return this.x=Math.floor((this.x+e)*t)/t,this.y=Math.floor((this.y+e)*t)/t,this.width=i-this.x,this.height=r-this.y,this}enlarge(t){const e=Math.min(this.x,t.x),i=Math.max(this.x+this.width,t.x+t.width),r=Math.min(this.y,t.y),s=Math.max(this.y+this.height,t.y+t.height);return this.x=e,this.width=i-e,this.y=r,this.height=s-r,this}getBounds(t){return t=t||new dt,t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const Jr={default:-1};function _t(n="default"){return Jr[n]===void 0&&(Jr[n]=-1),++Jr[n]}const Ta={},Q="8.0.0";function k(n,t,e=3){if(Ta[t])return;let i=new Error().stack;typeof i>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${n}`):(i=i.split(`
`).splice(e).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${n}`),console.warn(i),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${n}`),console.warn(i))),Ta[t]=!0}const fu=()=>{};function xr(n){return n+=n===0?1:0,--n,n|=n>>>1,n|=n>>>2,n|=n>>>4,n|=n>>>8,n|=n>>>16,n+1}function Pa(n){return!(n&n-1)&&!!n}function Zf(n){const t={};for(const e in n)n[e]!==void 0&&(t[e]=n[e]);return t}const Fa=Object.create(null);function Jf(n){const t=Fa[n];return t===void 0&&(Fa[n]=_t("resource")),t}const du=class pu extends Et{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...pu.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){k(Q,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=Jf(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};du.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let td=du;const mu=class gu extends Et{constructor(t={}){super(),this.options=t,this.uid=_t("textureSource"),this._resourceType="textureSource",this._resourceId=_t("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...gu.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new td(Zf(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){var e,i;this.style!==t&&((e=this._style)==null||e.off("change",this._onStyleChange,this),this._style=t,(i=this._style)==null||i.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=_t("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,e,i){i=i||this._resolution,t=t||this.width,e=e||this.height;const r=Math.round(t*i),s=Math.round(e*i);return this.width=r/i,this.height=s/i,this._resolution=i,this.pixelWidth===r&&this.pixelHeight===s?!1:(this._refreshPOT(),this.pixelWidth=r,this.pixelHeight=s,this.emit("resize",this),this._resourceId=_t("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Pa(this.pixelWidth)&&Pa(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};mu.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let he=mu;class Go extends he{constructor(t){const e=t.resource||new Float32Array(t.width*t.height*4);let i=t.format;i||(e instanceof Float32Array?i="rgba32float":e instanceof Int32Array||e instanceof Uint32Array?i="rgba32uint":e instanceof Int16Array||e instanceof Uint16Array?i="rgba16uint":(e instanceof Int8Array,i="bgra8unorm")),super({...t,resource:e,format:i}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}Go.extension=B.TextureSource;const Ma=new J;class ed{constructor(t,e){this.mapCoord=new J,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof e>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=e,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){var e;this.texture!==t&&((e=this._texture)==null||e.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,e){e===void 0&&(e=t);const i=this.mapCoord;for(let r=0;r<t.length;r+=2){const s=t[r],o=t[r+1];e[r]=s*i.a+o*i.c+i.tx,e[r+1]=s*i.b+o*i.d+i.ty}return e}update(){const t=this._texture;this._updateID++;const e=t.uvs;this.mapCoord.set(e.x1-e.x0,e.y1-e.y0,e.x3-e.x0,e.y3-e.y0,e.x0,e.y0);const i=t.orig,r=t.trim;r&&(Ma.set(i.width/r.width,0,0,i.height/r.height,-r.x/r.width,-r.y/r.height),this.mapCoord.append(Ma));const s=t.source,o=this.uClampFrame,a=this.clampMargin/s._resolution,l=this.clampOffset;return o[0]=(t.frame.x+a+l)/s.width,o[1]=(t.frame.y+a+l)/s.height,o[2]=(t.frame.x+t.frame.width-a+l)/s.width,o[3]=(t.frame.y+t.frame.height-a+l)/s.height,this.uClampOffset[0]=l/s.pixelWidth,this.uClampOffset[1]=l/s.pixelHeight,this.isSimple=t.frame.width===s.width&&t.frame.height===s.height&&t.rotate===0,!0}}class D extends Et{constructor({source:t,label:e,frame:i,orig:r,trim:s,defaultAnchor:o,defaultBorders:a,rotate:l,dynamic:u}={}){if(super(),this.uid=_t("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new dt,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=e,this.source=(t==null?void 0:t.source)??new he,this.noFrame=!i,i)this.frame.copyFrom(i);else{const{width:h,height:c}=this._source;this.frame.width=h,this.frame.height=c}this.orig=r||this.frame,this.trim=s,this.rotate=l??0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new ed(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:e}=this,{width:i,height:r}=this._source,s=e.x/i,o=e.y/r,a=e.width/i,l=e.height/r;let u=this.rotate;if(u){const h=a/2,c=l/2,f=s+h,d=o+c;u=ot.add(u,ot.NW),t.x0=f+h*ot.uX(u),t.y0=d+c*ot.uY(u),u=ot.add(u,2),t.x1=f+h*ot.uX(u),t.y1=d+c*ot.uY(u),u=ot.add(u,2),t.x2=f+h*ot.uX(u),t.y2=d+c*ot.uY(u),u=ot.add(u,2),t.x3=f+h*ot.uX(u),t.y3=d+c*ot.uY(u)}else t.x0=s,t.y0=o,t.x1=s+a,t.y1=o,t.x2=s+a,t.y2=o+l,t.x3=s,t.y3=o+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return k(Q,"Texture.baseTexture is now Texture.source"),this._source}}D.EMPTY=new D({label:"EMPTY",source:new he({label:"EMPTY"})});D.EMPTY.destroy=fu;D.WHITE=new D({source:new Go({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});D.WHITE.destroy=fu;function id(n,t,e,i){const{width:r,height:s}=e.orig,o=e.trim;if(o){const a=o.width,l=o.height;n.minX=o.x-t._x*r-i,n.maxX=n.minX+a,n.minY=o.y-t._y*s-i,n.maxY=n.minY+l}else n.minX=-t._x*r-i,n.maxX=n.minX+r,n.minY=-t._y*s-i,n.maxY=n.minY+s}var nd={grad:.9,turn:360,rad:360/(2*Math.PI)},be=function(n){return typeof n=="string"?n.length>0:typeof n=="number"},yt=function(n,t,e){return t===void 0&&(t=0),e===void 0&&(e=Math.pow(10,t)),Math.round(e*n)/e+0},te=function(n,t,e){return t===void 0&&(t=0),e===void 0&&(e=1),n>e?e:n>t?n:t},_u=function(n){return(n=isFinite(n)?n%360:0)>0?n:n+360},Ia=function(n){return{r:te(n.r,0,255),g:te(n.g,0,255),b:te(n.b,0,255),a:te(n.a)}},ts=function(n){return{r:yt(n.r),g:yt(n.g),b:yt(n.b),a:yt(n.a,3)}},rd=/^#([0-9a-f]{3,8})$/i,Hn=function(n){var t=n.toString(16);return t.length<2?"0"+t:t},xu=function(n){var t=n.r,e=n.g,i=n.b,r=n.a,s=Math.max(t,e,i),o=s-Math.min(t,e,i),a=o?s===t?(e-i)/o:s===e?2+(i-t)/o:4+(t-e)/o:0;return{h:60*(a<0?a+6:a),s:s?o/s*100:0,v:s/255*100,a:r}},vu=function(n){var t=n.h,e=n.s,i=n.v,r=n.a;t=t/360*6,e/=100,i/=100;var s=Math.floor(t),o=i*(1-e),a=i*(1-(t-s)*e),l=i*(1-(1-t+s)*e),u=s%6;return{r:255*[i,a,o,o,l,i][u],g:255*[l,i,i,a,o,o][u],b:255*[o,o,l,i,i,a][u],a:r}},Ea=function(n){return{h:_u(n.h),s:te(n.s,0,100),l:te(n.l,0,100),a:te(n.a)}},za=function(n){return{h:yt(n.h),s:yt(n.s),l:yt(n.l),a:yt(n.a,3)}},Oa=function(n){return vu((e=(t=n).s,{h:t.h,s:(e*=((i=t.l)<50?i:100-i)/100)>0?2*e/(i+e)*100:0,v:i+e,a:t.a}));var t,e,i},_n=function(n){return{h:(t=xu(n)).h,s:(r=(200-(e=t.s))*(i=t.v)/100)>0&&r<200?e*i/100/(r<=100?r:200-r)*100:0,l:r/2,a:t.a};var t,e,i,r},sd=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,od=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ad=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ld=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ws={string:[[function(n){var t=rd.exec(n);return t?(n=t[1]).length<=4?{r:parseInt(n[0]+n[0],16),g:parseInt(n[1]+n[1],16),b:parseInt(n[2]+n[2],16),a:n.length===4?yt(parseInt(n[3]+n[3],16)/255,2):1}:n.length===6||n.length===8?{r:parseInt(n.substr(0,2),16),g:parseInt(n.substr(2,2),16),b:parseInt(n.substr(4,2),16),a:n.length===8?yt(parseInt(n.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(n){var t=ad.exec(n)||ld.exec(n);return t?t[2]!==t[4]||t[4]!==t[6]?null:Ia({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(n){var t=sd.exec(n)||od.exec(n);if(!t)return null;var e,i,r=Ea({h:(e=t[1],i=t[2],i===void 0&&(i="deg"),Number(e)*(nd[i]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Oa(r)},"hsl"]],object:[[function(n){var t=n.r,e=n.g,i=n.b,r=n.a,s=r===void 0?1:r;return be(t)&&be(e)&&be(i)?Ia({r:Number(t),g:Number(e),b:Number(i),a:Number(s)}):null},"rgb"],[function(n){var t=n.h,e=n.s,i=n.l,r=n.a,s=r===void 0?1:r;if(!be(t)||!be(e)||!be(i))return null;var o=Ea({h:Number(t),s:Number(e),l:Number(i),a:Number(s)});return Oa(o)},"hsl"],[function(n){var t=n.h,e=n.s,i=n.v,r=n.a,s=r===void 0?1:r;if(!be(t)||!be(e)||!be(i))return null;var o=function(a){return{h:_u(a.h),s:te(a.s,0,100),v:te(a.v,0,100),a:te(a.a)}}({h:Number(t),s:Number(e),v:Number(i),a:Number(s)});return vu(o)},"hsv"]]},Ra=function(n,t){for(var e=0;e<t.length;e++){var i=t[e][0](n);if(i)return[i,t[e][1]]}return[null,void 0]},ud=function(n){return typeof n=="string"?Ra(n.trim(),Ws.string):typeof n=="object"&&n!==null?Ra(n,Ws.object):[null,void 0]},es=function(n,t){var e=_n(n);return{h:e.h,s:te(e.s+100*t,0,100),l:e.l,a:e.a}},is=function(n){return(299*n.r+587*n.g+114*n.b)/1e3/255},ka=function(n,t){var e=_n(n);return{h:e.h,s:e.s,l:te(e.l+100*t,0,100),a:e.a}},$s=function(){function n(t){this.parsed=ud(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return n.prototype.isValid=function(){return this.parsed!==null},n.prototype.brightness=function(){return yt(is(this.rgba),2)},n.prototype.isDark=function(){return is(this.rgba)<.5},n.prototype.isLight=function(){return is(this.rgba)>=.5},n.prototype.toHex=function(){return t=ts(this.rgba),e=t.r,i=t.g,r=t.b,o=(s=t.a)<1?Hn(yt(255*s)):"","#"+Hn(e)+Hn(i)+Hn(r)+o;var t,e,i,r,s,o},n.prototype.toRgb=function(){return ts(this.rgba)},n.prototype.toRgbString=function(){return t=ts(this.rgba),e=t.r,i=t.g,r=t.b,(s=t.a)<1?"rgba("+e+", "+i+", "+r+", "+s+")":"rgb("+e+", "+i+", "+r+")";var t,e,i,r,s},n.prototype.toHsl=function(){return za(_n(this.rgba))},n.prototype.toHslString=function(){return t=za(_n(this.rgba)),e=t.h,i=t.s,r=t.l,(s=t.a)<1?"hsla("+e+", "+i+"%, "+r+"%, "+s+")":"hsl("+e+", "+i+"%, "+r+"%)";var t,e,i,r,s},n.prototype.toHsv=function(){return t=xu(this.rgba),{h:yt(t.h),s:yt(t.s),v:yt(t.v),a:yt(t.a,3)};var t},n.prototype.invert=function(){return fe({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},n.prototype.saturate=function(t){return t===void 0&&(t=.1),fe(es(this.rgba,t))},n.prototype.desaturate=function(t){return t===void 0&&(t=.1),fe(es(this.rgba,-t))},n.prototype.grayscale=function(){return fe(es(this.rgba,-1))},n.prototype.lighten=function(t){return t===void 0&&(t=.1),fe(ka(this.rgba,t))},n.prototype.darken=function(t){return t===void 0&&(t=.1),fe(ka(this.rgba,-t))},n.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},n.prototype.alpha=function(t){return typeof t=="number"?fe({r:(e=this.rgba).r,g:e.g,b:e.b,a:t}):yt(this.rgba.a,3);var e},n.prototype.hue=function(t){var e=_n(this.rgba);return typeof t=="number"?fe({h:t,s:e.s,l:e.l,a:e.a}):yt(e.h)},n.prototype.isEqual=function(t){return this.toHex()===fe(t).toHex()},n}(),fe=function(n){return n instanceof $s?n:new $s(n)},Ba=[],hd=function(n){n.forEach(function(t){Ba.indexOf(t)<0&&(t($s,Ws),Ba.push(t))})};function cd(n,t){var e={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},i={};for(var r in e)i[e[r]]=r;var s={};n.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,u=i[this.toHex()];if(u)return u;if(o!=null&&o.closest){var h=this.toRgb(),c=1/0,f="black";if(!s.length)for(var d in e)s[d]=new n(e[d]).toRgb();for(var m in e){var p=(a=h,l=s[m],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));p<c&&(c=p,f=m)}return f}},t.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":e[a];return l?new n(l).toRgb():null},"name"])}hd([cd]);const $i=class fn{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof fn)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._normalize(t),this._value=this._cloneSource(t))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,e){const i=typeof t;if(i!==typeof e)return!1;if(i==="number"||i==="string"||t instanceof Number)return t===e;if(Array.isArray(t)&&Array.isArray(e)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(e))return t.length!==e.length?!1:t.every((s,o)=>s===e[o]);if(t!==null&&e!==null){const s=Object.keys(t),o=Object.keys(e);return s.length!==o.length?!1:s.every(a=>t[a]===e[a])}return t===e}toRgba(){const[t,e,i,r]=this._components;return{r:t,g:e,b:i,a:r}}toRgb(){const[t,e,i]=this._components;return{r:t,g:e,b:i}}toRgbaString(){const[t,e,i]=this.toUint8RgbArray();return`rgba(${t},${e},${i},${this.alpha})`}toUint8RgbArray(t){const[e,i,r]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb,t[0]=Math.round(e*255),t[1]=Math.round(i*255),t[2]=Math.round(r*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t=t||this._arrayRgba;const[e,i,r,s]=this._components;return t[0]=e,t[1]=i,t[2]=r,t[3]=s,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb;const[e,i,r]=this._components;return t[0]=e,t[1]=i,t[2]=r,t}toNumber(){return this._int}toBgrNumber(){const[t,e,i]=this.toUint8RgbArray();return(i<<16)+(e<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[e,i,r,s]=fn._temp.setValue(t)._components;return this._components[0]*=e,this._components[1]*=i,this._components[2]*=r,this._components[3]*=s,this._refreshInt(),this._value=null,this}premultiply(t,e=!0){return e&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,e=!0){if(t===1)return(255<<24)+this._int;if(t===0)return e?0:this._int;let i=this._int>>16&255,r=this._int>>8&255,s=this._int&255;return e&&(i=i*t+.5|0,r=r*t+.5|0,s=s*t+.5|0),(t*255<<24)+(i<<16)+(r<<8)+s}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const e=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-e.length)+e}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let e,i,r,s;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const o=t;e=(o>>16&255)/255,i=(o>>8&255)/255,r=(o&255)/255,s=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[e,i,r,s=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[e,i,r,s=255]=t,e/=255,i/=255,r/=255,s/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const a=fn.HEX_PATTERN.exec(t);a&&(t=`#${a[2]}`)}const o=fe(t);o.isValid()&&({r:e,g:i,b:r,a:s}=o.rgba,e/=255,i/=255,r/=255)}if(e!==void 0)this._components[0]=e,this._components[1]=i,this._components[2]=r,this._components[3]=s,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,e,i]=this._components;this._int=(t*255<<16)+(e*255<<8)+(i*255|0)}_clamp(t,e=0,i=1){return typeof t=="number"?Math.min(Math.max(t,e),i):(t.forEach((r,s)=>{t[s]=Math.min(Math.max(r,e),i)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof fn||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};$i.shared=new $i;$i._temp=new $i;$i.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let j=$i;const fd={cullArea:null,cullable:!1,cullableChildren:!0};class No{constructor(t,e){this._pool=[],this._count=0,this._index=0,this._classType=t,e&&this.prepopulate(e)}prepopulate(t){for(let e=0;e<t;e++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){var i;let e;return this._index>0?e=this._pool[--this._index]:e=new this._classType,(i=e.init)==null||i.call(e,t),e}return(t){var e;(e=t.reset)==null||e.call(t),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}}class dd{constructor(){this._poolsByClass=new Map}prepopulate(t,e){this.getPool(t).prepopulate(e)}get(t,e){return this.getPool(t).get(e)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new No(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(e=>{const i=t[e._classType.name]?e._classType.name+e._classType.ID:e._classType.name;t[i]={free:e.totalFree,used:e.totalUsed,size:e.totalSize}}),t}}const Te=new dd;function pd(n,t,e){const i=n.length;let r;if(t>=i||e===0)return;e=t+e>i?i-t:e;const s=i-e;for(r=t;r<s;++r)n[r]=n[r+e];n.length=s}const md={allowChildren:!0,removeChildren(n=0,t){const e=t??this.children.length,i=e-n,r=[];if(i>0&&i<=e){for(let o=e-1;o>=n;o--){const a=this.children[o];a&&(r.push(a),a.parent=null)}pd(this.children,n,e);const s=this.renderGroup||this.parentRenderGroup;s&&s.removeChildren(r);for(let o=0;o<r.length;++o)this.emit("childRemoved",r[o],this,o),r[o].emit("removed",this);return r}else if(i===0&&this.children.length===0)return r;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(n){const t=this.getChildAt(n);return this.removeChild(t)},getChildAt(n){if(n<0||n>=this.children.length)throw new Error(`getChildAt: Index (${n}) does not exist.`);return this.children[n]},setChildIndex(n,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(n),this.addChildAt(n,t)},getChildIndex(n){const t=this.children.indexOf(n);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(n,t){this.allowChildren||k(Q,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:e}=this;if(t<0||t>e.length)throw new Error(`${n}addChildAt: The index ${t} supplied is out of bounds ${e.length}`);if(n.parent){const r=n.parent.children.indexOf(n);if(n.parent===this&&r===t)return n;r!==-1&&n.parent.children.splice(r,1)}t===e.length?e.push(n):e.splice(t,0,n),n.parent=this,n.didChange=!0,n.didViewUpdate=!1,n._updateFlags=15;const i=this.renderGroup||this.parentRenderGroup;return i&&i.addChild(n),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",n,this,t),n.emit("added",this),n},swapChildren(n,t){if(n===t)return;const e=this.getChildIndex(n),i=this.getChildIndex(t);this.children[e]=t,this.children[i]=n;const r=this.renderGroup||this.parentRenderGroup;r&&(r.structureDidChange=!0),this._didChangeId++},removeFromParent(){var n;(n=this.parent)==null||n.removeChild(this)},reparentChild(...n){return n.length===1?this.reparentChildAt(n[0],this.children.length):(n.forEach(t=>this.reparentChildAt(t,this.children.length)),n[0])},reparentChildAt(n,t){if(n.parent===this)return this.setChildIndex(n,t),n;const e=n.worldTransform.clone();n.removeFromParent(),this.addChildAt(n,t);const i=this.worldTransform.clone();return i.invert(),e.prepend(i),n.setFromMatrix(e),n}};class Ua{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class gd{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let e=0;e<this._tests.length;e++){const i=this._tests[e];if(i.test(t))return Te.get(i.maskClass,t)}return t}returnMaskEffect(t){Te.return(t)}}const Ys=new gd;Ft.handleByList(B.MaskEffect,Ys._effectClasses);const _d={_maskEffect:null,_filterEffect:null,effects:[],addEffect(n){if(this.effects.indexOf(n)!==-1)return;this.effects.push(n),this.effects.sort((i,r)=>i.priority-r.priority);const e=this.renderGroup||this.parentRenderGroup;e&&(e.structureDidChange=!0),this._updateIsSimple()},removeEffect(n){const t=this.effects.indexOf(n);t!==-1&&(this.effects.splice(t,1),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateIsSimple())},set mask(n){const t=this._maskEffect;(t==null?void 0:t.mask)!==n&&(t&&(this.removeEffect(t),Ys.returnMaskEffect(t),this._maskEffect=null),n!=null&&(this._maskEffect=Ys.getMaskEffect(n),this.addEffect(this._maskEffect)))},get mask(){var n;return(n=this._maskEffect)==null?void 0:n.mask},set filters(n){var s;!Array.isArray(n)&&n&&(n=[n]);const t=this._filterEffect||(this._filterEffect=new Ua);n=n;const e=(n==null?void 0:n.length)>0,i=((s=t.filters)==null?void 0:s.length)>0,r=e!==i;n=Array.isArray(n)?n.slice(0):n,t.filters=Object.freeze(n),r&&(e?this.addEffect(t):(this.removeEffect(t),t.filters=n??null))},get filters(){var n;return(n=this._filterEffect)==null?void 0:n.filters},set filterArea(n){this._filterEffect||(this._filterEffect=new Ua),this._filterEffect.filterArea=n},get filterArea(){var n;return(n=this._filterEffect)==null?void 0:n.filterArea}},xd={label:null,get name(){return k(Q,"Container.name property has been removed, use Container.label instead"),this.label},set name(n){k(Q,"Container.name property has been removed, use Container.label instead"),this.label=n},getChildByName(n,t=!1){return this.getChildByLabel(n,t)},getChildByLabel(n,t=!1){const e=this.children;for(let i=0;i<e.length;i++){const r=e[i];if(r.label===n||n instanceof RegExp&&n.test(r.label))return r}if(t)for(let i=0;i<e.length;i++){const s=e[i].getChildByLabel(n,!0);if(s)return s}return null},getChildrenByLabel(n,t=!1,e=[]){const i=this.children;for(let r=0;r<i.length;r++){const s=i[r];(s.label===n||n instanceof RegExp&&n.test(s.label))&&e.push(s)}if(t)for(let r=0;r<i.length;r++)i[r].getChildrenByLabel(n,!0,e);return e}},La=new J;class ve{constructor(t=1/0,e=1/0,i=-1/0,r=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=La,this.minX=t,this.minY=e,this.maxX=i,this.maxY=r}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new dt);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=La,this}set(t,e,i,r){this.minX=t,this.minY=e,this.maxX=i,this.maxY=r}addFrame(t,e,i,r,s){s||(s=this.matrix);const o=s.a,a=s.b,l=s.c,u=s.d,h=s.tx,c=s.ty;let f=this.minX,d=this.minY,m=this.maxX,p=this.maxY,g=o*t+l*e+h,_=a*t+u*e+c;g<f&&(f=g),_<d&&(d=_),g>m&&(m=g),_>p&&(p=_),g=o*i+l*e+h,_=a*i+u*e+c,g<f&&(f=g),_<d&&(d=_),g>m&&(m=g),_>p&&(p=_),g=o*t+l*r+h,_=a*t+u*r+c,g<f&&(f=g),_<d&&(d=_),g>m&&(m=g),_>p&&(p=_),g=o*i+l*r+h,_=a*i+u*r+c,g<f&&(f=g),_<d&&(d=_),g>m&&(m=g),_>p&&(p=_),this.minX=f,this.minY=d,this.maxX=m,this.maxY=p}addRect(t,e){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,e)}addBounds(t,e){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,e)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const e=this.minX,i=this.minY,r=this.maxX,s=this.maxY,{a:o,b:a,c:l,d:u,tx:h,ty:c}=t;let f=o*e+l*i+h,d=a*e+u*i+c;this.minX=f,this.minY=d,this.maxX=f,this.maxY=d,f=o*r+l*i+h,d=a*r+u*i+c,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*e+l*s+h,d=a*e+u*s+c,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*r+l*s+h,d=a*r+u*s+c,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,e,i,r){return this.minX<t&&(this.minX=t),this.maxX>e&&(this.maxX=e),this.minY<i&&(this.minY=i),this.maxY>r&&(this.maxY=r),this}pad(t,e=t){return this.minX-=t,this.maxX+=t,this.minY-=e,this.maxY+=e,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new ve(this.minX,this.minY,this.maxX,this.maxY)}scale(t,e=t){return this.minX*=t,this.minY*=e,this.maxX*=t,this.maxY*=e,this}get x(){return this.minX}set x(t){const e=this.maxX-this.minX;this.minX=t,this.maxX=t+e}get y(){return this.minY}set y(t){const e=this.maxY-this.minY;this.minY=t,this.maxY=t+e}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,e,i,r){let s=this.minX,o=this.minY,a=this.maxX,l=this.maxY;r||(r=this.matrix);const u=r.a,h=r.b,c=r.c,f=r.d,d=r.tx,m=r.ty;for(let p=e;p<i;p+=2){const g=t[p],_=t[p+1],x=u*g+c*_+d,v=h*g+f*_+m;s=x<s?x:s,o=v<o?v:o,a=x>a?x:a,l=v>l?v:l}this.minX=s,this.minY=o,this.maxX=a,this.maxY=l}containsPoint(t,e){return this.minX<=t&&this.minY<=e&&this.maxX>=t&&this.maxY>=e}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}}const Pe=new No(J),Yi=new No(ve);function yu(n,t,e){e.clear();let i,r;return n.parent?t?i=n.parent.worldTransform:(r=Pe.get().identity(),i=vr(n,r)):i=J.IDENTITY,bu(n,e,i,t),r&&Pe.return(r),e.isValid||e.set(0,0,0,0),e}function bu(n,t,e,i){var a,l;if(!n.visible||!n.measurable)return;let r;i?r=n.worldTransform:(n.updateLocalTransform(),r=Pe.get(),r.appendFrom(n.localTransform,e));const s=t,o=!!n.effects.length;if(o&&(t=Yi.get().clear()),n.boundsArea)t.addRect(n.boundsArea,r);else{n.addBounds&&(t.matrix=r,n.addBounds(t));for(let u=0;u<n.children.length;u++)bu(n.children[u],t,r,i)}if(o){for(let u=0;u<n.effects.length;u++)(l=(a=n.effects[u]).addBounds)==null||l.call(a,t);s.addBounds(t,J.IDENTITY),Yi.return(t)}i||Pe.return(r)}function vr(n,t){const e=n.parent;return e&&(vr(e,t),e.updateLocalTransform(),t.append(e.localTransform)),t}let ns=0;const Da=500;function xt(...n){ns!==Da&&(ns++,ns===Da?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...n))}function Su(n,t,e){return t.clear(),e||(e=J.IDENTITY),wu(n,t,e,n,!0),t.isValid||t.set(0,0,0,0),t}function wu(n,t,e,i,r){var l,u;let s;if(r)s=Pe.get(),s=e.copyTo(s);else{if(!n.visible||!n.measurable)return;n.updateLocalTransform();const h=n.localTransform;s=Pe.get(),s.appendFrom(h,e)}const o=t,a=!!n.effects.length;if(a&&(t=Yi.get().clear()),n.boundsArea)t.addRect(n.boundsArea,s);else{n.renderPipeId&&(t.matrix=s,n.addBounds(t));const h=n.children;for(let c=0;c<h.length;c++)wu(h[c],t,s,i,!1)}if(a){for(let h=0;h<n.effects.length;h++)(u=(l=n.effects[h]).addLocalBounds)==null||u.call(l,t,i);o.addBounds(t,J.IDENTITY),Yi.return(t)}Pe.return(s)}function Cu(n,t){const e=n.children;for(let i=0;i<e.length;i++){const r=e[i],s=(r.uid&255)<<24|r._didChangeId&16777215;t.data[t.index]!==s&&(t.data[t.index]=s,t.didChange=!0),t.index++,r.children.length&&Cu(r,t)}return t.didChange}const vd=new J,yd={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(n,t){const e=Math.sign(this.scale.x)||1;t!==0?this.scale.x=n/t*e:this.scale.x=e},_setHeight(n,t){const e=Math.sign(this.scale.y)||1;t!==0?this.scale.y=n/t*e:this.scale.y=e},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new ve});const n=this._localBoundsCacheData;return n.index=1,n.didChange=!1,n.data[0]!==this._didChangeId>>12&&(n.didChange=!0,n.data[0]=this._didChangeId>>12),Cu(this,n),n.didChange&&Su(this,n.localBounds,vd),n.localBounds},getBounds(n,t){return yu(this,n,t||new ve)}},bd={_onRender:null,set onRender(n){const t=this.renderGroup||this.parentRenderGroup;if(!n){this._onRender&&(t==null||t.removeOnRender(this)),this._onRender=null;return}this._onRender||t==null||t.addOnRender(this),this._onRender=n},get onRender(){return this._onRender}},Sd={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(n){this._zIndex!==n&&(this._zIndex=n,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(wd))}};function wd(n,t){return n._zIndex-t._zIndex}const Cd={getGlobalPosition(n=new Ct,t=!1){return this.parent?this.parent.toGlobal(this._position,n,t):(n.x=this._position.x,n.y=this._position.y),n},toGlobal(n,t,e=!1){if(!e){this.updateLocalTransform();const i=vr(this,new J);return i.append(this.localTransform),i.apply(n,t)}return this.worldTransform.apply(n,t)},toLocal(n,t,e,i){if(t&&(n=t.toGlobal(n,e,i)),!i){this.updateLocalTransform();const r=vr(this,new J);return r.append(this.localTransform),r.applyInverse(n,e)}return this.worldTransform.applyInverse(n,e)}};class Au{constructor(){this.uid=_t("instructionSet"),this.instructions=[],this.instructionSize=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}class Ad{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new J,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new Au,this._onRenderContainers=[]}init(t){this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const e=t.children;for(let i=0;i<e.length;i++)this.addChild(e[i])}reset(){this.renderGroupChildren.length=0;for(const t in this.childrenToUpdate){const e=this.childrenToUpdate[t];e.list.fill(null),e.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const e=this.renderGroupChildren.indexOf(t);e>-1&&this.renderGroupChildren.splice(e,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const e=t.children;for(let i=0;i<e.length;i++)this.addChild(e[i])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const e=t.children;for(let i=0;i<e.length;i++)this.removeChild(e[i])}removeChildren(t){for(let e=0;e<t.length;e++)this.removeChild(t[e])}onChildUpdate(t){let e=this.childrenToUpdate[t.relativeRenderGroupDepth];e||(e=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),e.list[e.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(t.didViewUpdate=!1,this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t))}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}destroy(){this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const e=this.root.children;for(let i=0;i<e.length;i++)this._getChildren(e[i],t);return t}_getChildren(t,e=[]){if(e.push(t),t.renderGroup)return e;const i=t.children;for(let r=0;r<i.length;r++)this._getChildren(i[r],e);return e}}function Td(n,t,e={}){for(const i in t)!e[i]&&t[i]!==void 0&&(n[i]=t[i])}const rs=new Ot(null),ss=new Ot(null),os=new Ot(null,1,1),Ga=1,Pd=2,as=4;class H extends Et{constructor(t={}){var e,i;super(),this.uid=_t("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new J,this.relativeGroupTransform=new J,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new Ot(this,0,0),this._scale=os,this._pivot=ss,this._skew=rs,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didChangeId=0,this._didLocalTransformChangeId=-1,Td(this,t,{children:!0,parent:!0,effects:!0}),(e=t.children)==null||e.forEach(r=>this.addChild(r)),this.effects=[],(i=t.parent)==null||i.addChild(this)}static mixin(t){Object.defineProperties(H.prototype,Object.getOwnPropertyDescriptors(t))}addChild(...t){if(this.allowChildren||k(Q,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let r=0;r<t.length;r++)this.addChild(t[r]);return t[0]}const e=t[0];if(e.parent===this)return this.children.splice(this.children.indexOf(e),1),this.children.push(e),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),e;e.parent&&e.parent.removeChild(e),this.children.push(e),this.sortableChildren&&(this.sortDirty=!0),e.parent=this,e.didChange=!0,e.didViewUpdate=!1,e._updateFlags=15;const i=this.renderGroup||this.parentRenderGroup;return i&&i.addChild(e),this.emit("childAdded",e,this,this.children.length-1),e.emit("added",this),this._didChangeId+=4096,e._zIndex!==0&&e.depthOfChildModified(),e}removeChild(...t){if(t.length>1){for(let r=0;r<t.length;r++)this.removeChild(t[r]);return t[0]}const e=t[0],i=this.children.indexOf(e);return i>-1&&(this._didChangeId+=4096,this.children.splice(i,1),this.renderGroup?this.renderGroup.removeChild(e):this.parentRenderGroup&&this.parentRenderGroup.removeChild(e),e.parent=null,this.emit("childRemoved",e,this,i),e.emit("removed",this)),e}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didChangeId++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){!!this.renderGroup!==t&&(t?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t==null||t.removeChild(this),this.renderGroup=Te.get(Ad,this),this.groupTransform=J.IDENTITY,t==null||t.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const t=this.parentRenderGroup;t==null||t.removeChild(this),Te.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,t==null||t.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new J),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*jf}set angle(t){this.rotation=t*Wi}get pivot(){return this._pivot===ss&&(this._pivot=new Ot(this,0,0)),this._pivot}set pivot(t){this._pivot===ss&&(this._pivot=new Ot(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===rs&&(this._skew=new Ot(this,0,0)),this._skew}set skew(t){this._skew===rs&&(this._skew=new Ot(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===os&&(this._scale=new Ot(this,1,1)),this._scale}set scale(t){this._scale===os&&(this._scale=new Ot(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const e=this.getLocalBounds().width;this._setWidth(t,e)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const e=this.getLocalBounds().height;this._setHeight(t,e)}getSize(t){t||(t={});const e=this.getLocalBounds();return t.width=Math.abs(this.scale.x*e.width),t.height=Math.abs(this.scale.y*e.height),t}setSize(t,e){const i=this.getLocalBounds();let r,s;typeof t!="object"?(r=t,s=e??t):(r=t.width,s=t.height??t.width),r!==void 0&&this._setWidth(r,i.width),s!==void 0&&this._setHeight(s,i.height)}_updateSkew(){const t=this._rotation,e=this._skew;this._cx=Math.cos(t+e._y),this._sx=Math.sin(t+e._y),this._cy=-Math.sin(t-e._x),this._sy=Math.cos(t-e._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){const t=this._didChangeId&4095;if(this._didLocalTransformChangeId===t)return;this._didLocalTransformChangeId=t;const e=this.localTransform,i=this._scale,r=this._pivot,s=this._position,o=i._x,a=i._y,l=r._x,u=r._y;e.a=this._cx*o,e.b=this._sx*o,e.c=this._cy*a,e.d=this._sy*a,e.tx=s._x-(l*e.a+u*e.c),e.ty=s._y-(l*e.b+u*e.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=Ga,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const i=j.shared.setValue(t??16777215).toBgrNumber();i!==this.localColor&&(this.localColor=i,this._updateFlags|=Ga,this._onUpdate())}get tint(){const t=this.localColor;return((t&255)<<16)+(t&65280)+(t>>16&255)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Pd,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const e=t?2:0;(this.localDisplayStatus&2)!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=as,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const e=t?0:4;(this.localDisplayStatus&4)!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=as,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const e=t?1:0;(this.localDisplayStatus&1)!==e&&(this._updateFlags|=as,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){var r;if(this.destroyed)return;this.destroyed=!0;const e=this.removeChildren(0,this.children.length);if(this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.children)for(let s=0;s<e.length;++s)e[s].destroy(t);(r=this.renderGroup)==null||r.destroy(),this.renderGroup=null}}H.mixin(md);H.mixin(Cd);H.mixin(bd);H.mixin(yd);H.mixin(_d);H.mixin(xd);H.mixin(Sd);H.mixin(fd);class rt extends H{constructor(t=D.EMPTY){t instanceof D&&(t={texture:t});const{texture:e=D.EMPTY,anchor:i,roundPixels:r,width:s,height:o,...a}=t;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._didSpriteUpdate=!1,this._bounds={minX:0,maxX:1,minY:0,maxY:0},this._sourceBounds={minX:0,maxX:1,minY:0,maxY:0},this._boundsDirty=!0,this._sourceBoundsDirty=!0,this._roundPixels=0,this._anchor=new Ot({_onUpdate:()=>{this.onViewUpdate()}}),i?this.anchor=i:e.defaultAnchor&&(this.anchor=e.defaultAnchor),this.texture=e,this.allowChildren=!1,this.roundPixels=r??!1,s!==void 0&&(this.width=s),o!==void 0&&(this.height=o)}static from(t,e=!1){return t instanceof D?new rt(t):new rt(D.from(t,e))}set texture(t){t||(t=D.EMPTY);const e=this._texture;e!==t&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get sourceBounds(){return this._sourceBoundsDirty&&(this._updateSourceBounds(),this._sourceBoundsDirty=!1),this._sourceBounds}containsPoint(t){const e=this.sourceBounds;return t.x>=e.maxX&&t.x<=e.minX&&t.y>=e.maxY&&t.y<=e.minY}addBounds(t){const e=this._texture.trim?this.sourceBounds:this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}onViewUpdate(){if(this._didChangeId+=4096,this._didSpriteUpdate=!0,this._sourceBoundsDirty=this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}_updateBounds(){id(this._bounds,this._anchor,this._texture,0)}_updateSourceBounds(){const t=this._anchor,e=this._texture,i=this._sourceBounds,{width:r,height:s}=e.orig;i.maxX=-t._x*r,i.minX=i.maxX+r,i.maxY=-t._y*s,i.minY=i.maxY+s}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t==null?void 0:t.texture){const i=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(i)}this._texture=null,this._bounds=null,this._sourceBounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,e){let i,r;typeof t!="object"?(i=t,r=e??t):(i=t.width,r=t.height??t.width),i!==void 0&&this._setWidth(i,this._texture.orig.width),r!==void 0&&this._setHeight(r,this._texture.orig.height)}}const Fd=new ve;function Tu(n,t,e){const i=Fd;n.measurable=!0,yu(n,e,i),t.addBoundsMask(i),n.measurable=!1}function Pu(n,t,e){const i=Yi.get();n.measurable=!0;const r=Pe.get().identity(),s=Fu(n,e,r);Su(n,i,s),n.measurable=!1,t.addBoundsMask(i),Pe.return(r),Yi.return(i)}function Fu(n,t,e){return n?(n!==t&&(Fu(n.parent,t,e),n.updateLocalTransform(),e.append(n.localTransform)),e):(xt("Mask bounds, renderable is not inside the root container"),e)}class Mu{constructor(t){this.priority=0,this.pipe="alphaMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof rt),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,e){Tu(this.mask,t,e)}addLocalBounds(t,e){Pu(this.mask,t,e)}containsPoint(t,e){const i=this.mask;return e(i,t)}destroy(){this.reset()}static test(t){return t instanceof rt}}Mu.extension=B.MaskEffect;class Iu{constructor(t){this.priority=0,this.pipe="colorMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}Iu.extension=B.MaskEffect;class Eu{constructor(t){this.priority=0,this.pipe="stencilMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,e){Tu(this.mask,t,e)}addLocalBounds(t,e){Pu(this.mask,t,e)}containsPoint(t,e){const i=this.mask;return e(i,t)}destroy(){this.reset()}static test(t){return t instanceof H}}Eu.extension=B.MaskEffect;const Md={createCanvas:(n,t)=>{const e=document.createElement("canvas");return e.width=n,e.height=t,e},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(n,t)=>fetch(n,t),parseXML:n=>new DOMParser().parseFromString(n,"text/xml")};let Na=Md;const ct={get(){return Na},set(n){Na=n}};class zu extends he{constructor(t){t.resource||(t.resource=ct.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity;const e=t.resource;(this.pixelWidth!==e.width||this.pixelWidth!==e.height)&&this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,e=this.height,i=this._resolution){const r=super.resize(t,e,i);return r&&this.resizeCanvas(),r}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}}zu.extension=B.TextureSource;class bi extends he{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const e=ct.get().createCanvas(t.resource.width,t.resource.height);e.getContext("2d").drawImage(t.resource,0,0),t.resource=e,xt("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap}}bi.extension=B.TextureSource;var yr=(n=>(n[n.INTERACTION=50]="INTERACTION",n[n.HIGH=25]="HIGH",n[n.NORMAL=0]="NORMAL",n[n.LOW=-25]="LOW",n[n.UTILITY=-50]="UTILITY",n))(yr||{});class ls{constructor(t,e=null,i=0,r=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=e,this.priority=i,this._once=r}match(t,e=null){return this._fn===t&&this._context===e}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const e=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),e}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const e=this.next;return this.next=t?null:e,this.previous=null,e}}const Ou=class Xt{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new ls(null,null,1/0),this.deltaMS=1/Xt.targetFPMS,this.elapsedMS=1/Xt.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,e,i=yr.NORMAL){return this._addListener(new ls(t,e,i))}addOnce(t,e,i=yr.NORMAL){return this._addListener(new ls(t,e,i,!0))}_addListener(t){let e=this._head.next,i=this._head;if(!e)t.connect(i);else{for(;e;){if(t.priority>e.priority){t.connect(i);break}i=e,e=e.next}t.previous||t.connect(i)}return this._startIfPossible(),this}remove(t,e){let i=this._head.next;for(;i;)i.match(t,e)?i=i.destroy():i=i.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,e=this._head;for(;e=e.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let e;if(t>this.lastTime){if(e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),e*=this.speed,this._minElapsedMS){const s=t-this._lastFrame|0;if(s<this._minElapsedMS)return;this._lastFrame=t-s%this._minElapsedMS}this.deltaMS=e,this.deltaTime=this.deltaMS*Xt.targetFPMS;const i=this._head;let r=i.next;for(;r;)r=r.emit(this);i.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const e=Math.min(this.maxFPS,t),i=Math.min(Math.max(0,e)/1e3,Xt.targetFPMS);this._maxElapsedMS=1/i}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const e=Math.max(this.minFPS,t);this._minElapsedMS=1/(e/1e3)}}static get shared(){if(!Xt._shared){const t=Xt._shared=new Xt;t.autoStart=!0,t._protected=!0}return Xt._shared}static get system(){if(!Xt._system){const t=Xt._system=new Xt;t.autoStart=!0,t._protected=!0}return Xt._system}};Ou.targetFPMS=.06;let Lt=Ou,us;async function Ru(){return us??(us=(async()=>{var o;const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const e=await new Promise(a=>{const l=document.createElement("video");l.onloadeddata=()=>a(l),l.onerror=()=>a(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!e)return"premultiply-alpha-on-upload";const i=t.createTexture();t.bindTexture(t.TEXTURE_2D,i);const r=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,r),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e);const s=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,s),t.deleteFramebuffer(r),t.deleteTexture(i),(o=t.getExtension("WEBGL_lose_context"))==null||o.loseContext(),s[0]<=s[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),us}const kr=class ku extends he{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...ku.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=Lt.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,e=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(e.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await Ru(),this._load=new Promise((i,r)=>{this.isValid?i(this):(this._resolve=i,this._reject=r,e.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Lt.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Lt.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Lt.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement||globalThis.VideoFrame&&t instanceof VideoFrame}};kr.extension=B.TextureSource;kr.defaultOptions={...he.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};kr.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let sr=kr;const le=(n,t,e=!1)=>(Array.isArray(n)||(n=[n]),t?n.map(i=>typeof i=="string"||e?t(i):i):n);class Id{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const e=this._cache.get(t);return e||xt(`[Assets] Asset id ${t} was not found in the Cache`),e}set(t,e){const i=le(t);let r;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(e)){r=u.getCacheableAssets(i,e);break}}const s=new Map(Object.entries(r||{}));r||i.forEach(l=>{s.set(l,e)});const o=[...s.keys()],a={cacheKeys:o,keys:i};i.forEach(l=>{this._cacheMap.set(l,a)}),o.forEach(l=>{const u=r?r[l]:e;this._cache.has(l)&&this._cache.get(l)!==u&&xt("[Cache] already has key:",l),this._cache.set(l,s.get(l))})}remove(t){if(!this._cacheMap.has(t)){xt(`[Assets] Asset id ${t} was not found in the Cache`);return}const e=this._cacheMap.get(t);e.cacheKeys.forEach(r=>{this._cache.delete(r)}),e.keys.forEach(r=>{this._cacheMap.delete(r)})}get parsers(){return this._parsers}}const at=new Id,Xs=[];Ft.handleByList(B.TextureSource,Xs);function Bu(n={}){const t=n&&n.resource,e=t?n.resource:n,i=t?n:{resource:n};for(let r=0;r<Xs.length;r++){const s=Xs[r];if(s.test(e))return new s(i)}throw new Error(`Could not find a source type for resource: ${i.resource}`)}function Ed(n={},t=!1){const e=n&&n.resource,i=e?n.resource:n,r=e?n:{resource:n};if(!t&&at.has(i))return at.get(i);const s=new D({source:Bu(r)});return s.on("destroy",()=>{at.has(i)&&at.remove(i)}),t||at.set(i,s),s}function zd(n,t=!1){return typeof n=="string"?at.get(n):n instanceof he?new D({source:n}):Ed(n,t)}D.from=zd;he.from=Bu;Ft.add(Mu,Iu,Eu,sr,bi,zu,Go);var Ie=(n=>(n[n.Low=0]="Low",n[n.Normal=1]="Normal",n[n.High=2]="High",n))(Ie||{});function ae(n){if(typeof n!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(n)}`)}function on(n){return n.split("?")[0].split("#")[0]}function Od(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Rd(n,t,e){return n.replace(new RegExp(Od(t),"g"),e)}function kd(n,t){let e="",i=0,r=-1,s=0,o=-1;for(let a=0;a<=n.length;++a){if(a<n.length)o=n.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(r===a-1||s===1))if(r!==a-1&&s===2){if(e.length<2||i!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){const l=e.lastIndexOf("/");if(l!==e.length-1){l===-1?(e="",i=0):(e=e.slice(0,l),i=e.length-1-e.lastIndexOf("/")),r=a,s=0;continue}}else if(e.length===2||e.length===1){e="",i=0,r=a,s=0;continue}}}else e.length>0?e+=`/${n.slice(r+1,a)}`:e=n.slice(r+1,a),i=a-r-1;r=a,s=0}else o===46&&s!==-1?++s:s=-1}return e}const At={toPosix(n){return Rd(n,"\\","/")},isUrl(n){return/^https?:/.test(this.toPosix(n))},isDataUrl(n){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(n)},isBlobUrl(n){return n.startsWith("blob:")},hasProtocol(n){return/^[^/:]+:/.test(this.toPosix(n))},getProtocol(n){ae(n),n=this.toPosix(n);const t=/^file:\/\/\//.exec(n);if(t)return t[0];const e=/^[^/:]+:\/{0,2}/.exec(n);return e?e[0]:""},toAbsolute(n,t,e){if(ae(n),this.isDataUrl(n)||this.isBlobUrl(n))return n;const i=on(this.toPosix(t??ct.get().getBaseUrl())),r=on(this.toPosix(e??this.rootname(i)));return n=this.toPosix(n),n.startsWith("/")?At.join(r,n.slice(1)):this.isAbsolute(n)?n:this.join(i,n)},normalize(n){if(ae(n),n.length===0)return".";if(this.isDataUrl(n)||this.isBlobUrl(n))return n;n=this.toPosix(n);let t="";const e=n.startsWith("/");this.hasProtocol(n)&&(t=this.rootname(n),n=n.slice(t.length));const i=n.endsWith("/");return n=kd(n),n.length>0&&i&&(n+="/"),e?`/${n}`:t+n},isAbsolute(n){return ae(n),n=this.toPosix(n),this.hasProtocol(n)?!0:n.startsWith("/")},join(...n){if(n.length===0)return".";let t;for(let e=0;e<n.length;++e){const i=n[e];if(ae(i),i.length>0)if(t===void 0)t=i;else{const r=n[e-1]??"";this.joinExtensions.includes(this.extname(r).toLowerCase())?t+=`/../${i}`:t+=`/${i}`}}return t===void 0?".":this.normalize(t)},dirname(n){if(ae(n),n.length===0)return".";n=this.toPosix(n);let t=n.charCodeAt(0);const e=t===47;let i=-1,r=!0;const s=this.getProtocol(n),o=n;n=n.slice(s.length);for(let a=n.length-1;a>=1;--a)if(t=n.charCodeAt(a),t===47){if(!r){i=a;break}}else r=!1;return i===-1?e?"/":this.isUrl(o)?s+n:s:e&&i===1?"//":s+n.slice(0,i)},rootname(n){ae(n),n=this.toPosix(n);let t="";if(n.startsWith("/")?t="/":t=this.getProtocol(n),this.isUrl(n)){const e=n.indexOf("/",t.length);e!==-1?t=n.slice(0,e):t=n,t.endsWith("/")||(t+="/")}return t},basename(n,t){ae(n),t&&ae(t),n=on(this.toPosix(n));let e=0,i=-1,r=!0,s;if(t!==void 0&&t.length>0&&t.length<=n.length){if(t.length===n.length&&t===n)return"";let o=t.length-1,a=-1;for(s=n.length-1;s>=0;--s){const l=n.charCodeAt(s);if(l===47){if(!r){e=s+1;break}}else a===-1&&(r=!1,a=s+1),o>=0&&(l===t.charCodeAt(o)?--o===-1&&(i=s):(o=-1,i=a))}return e===i?i=a:i===-1&&(i=n.length),n.slice(e,i)}for(s=n.length-1;s>=0;--s)if(n.charCodeAt(s)===47){if(!r){e=s+1;break}}else i===-1&&(r=!1,i=s+1);return i===-1?"":n.slice(e,i)},extname(n){ae(n),n=on(this.toPosix(n));let t=-1,e=0,i=-1,r=!0,s=0;for(let o=n.length-1;o>=0;--o){const a=n.charCodeAt(o);if(a===47){if(!r){e=o+1;break}continue}i===-1&&(r=!1,i=o+1),a===46?t===-1?t=o:s!==1&&(s=1):t!==-1&&(s=-1)}return t===-1||i===-1||s===0||s===1&&t===i-1&&t===e+1?"":n.slice(t,i)},parse(n){ae(n);const t={root:"",dir:"",base:"",ext:"",name:""};if(n.length===0)return t;n=on(this.toPosix(n));let e=n.charCodeAt(0);const i=this.isAbsolute(n);let r;t.root=this.rootname(n),i||this.hasProtocol(n)?r=1:r=0;let s=-1,o=0,a=-1,l=!0,u=n.length-1,h=0;for(;u>=r;--u){if(e=n.charCodeAt(u),e===47){if(!l){o=u+1;break}continue}a===-1&&(l=!1,a=u+1),e===46?s===-1?s=u:h!==1&&(h=1):s!==-1&&(h=-1)}return s===-1||a===-1||h===0||h===1&&s===a-1&&s===o+1?a!==-1&&(o===0&&i?t.base=t.name=n.slice(1,a):t.base=t.name=n.slice(o,a)):(o===0&&i?(t.name=n.slice(1,s),t.base=n.slice(1,a)):(t.name=n.slice(o,s),t.base=n.slice(o,a)),t.ext=n.slice(s,a)),t.dir=this.dirname(n),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function Uu(n,t,e,i,r){const s=t[e];for(let o=0;o<s.length;o++){const a=s[o];e<t.length-1?Uu(n.replace(i[e],a),t,e+1,i,r):r.push(n.replace(i[e],a))}}function Bd(n){const t=/\{(.*?)\}/g,e=n.match(t),i=[];if(e){const r=[];e.forEach(s=>{const o=s.substring(1,s.length-1).split(",");r.push(o)}),Uu(n,r,0,e,i)}else i.push(n);return i}const br=n=>!Array.isArray(n);class tn{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,e)=>`${t}${this._bundleIdConnector}${e}`,extractAssetIdFromBundle:(t,e)=>e.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(e=>{this._preferredOrder.push(e),e.priority||(e.priority=Object.keys(e.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const e=t;this._defaultSearchParams=Object.keys(e).map(i=>`${encodeURIComponent(i)}=${encodeURIComponent(e[i])}`).join("&")}}getAlias(t){const{alias:e,src:i}=t;return le(e||i,s=>typeof s=="string"?s:Array.isArray(s)?s.map(o=>(o==null?void 0:o.src)??o):s!=null&&s.src?s.src:s,!0)}addManifest(t){this._manifest&&xt("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(e=>{this.addBundle(e.name,e.assets)})}addBundle(t,e){const i=[];let r=e;Array.isArray(e)||(r=Object.entries(e).map(([s,o])=>typeof o=="string"||Array.isArray(o)?{alias:s,src:o}:{alias:s,...o})),r.forEach(s=>{const o=s.src,a=s.alias;let l;if(typeof a=="string"){const u=this._createBundleAssetId(t,a);i.push(u),l=[a,u]}else{const u=a.map(h=>this._createBundleAssetId(t,h));i.push(...u),l=[...a,...u]}this.add({...s,alias:l,src:o})}),this._bundles[t]=i}add(t){const e=[];Array.isArray(t)?e.push(...t):e.push(t);let i;i=s=>{this.hasKey(s)&&xt(`[Resolver] already has key: ${s} overwriting`)},le(e).forEach(s=>{const{src:o}=s;let{data:a,format:l,loadParser:u}=s;const h=le(o).map(d=>typeof d=="string"?Bd(d):Array.isArray(d)?d:[d]),c=this.getAlias(s);Array.isArray(c)?c.forEach(i):i(c);const f=[];h.forEach(d=>{d.forEach(m=>{let p={};if(typeof m!="object"){p.src=m;for(let g=0;g<this._parsers.length;g++){const _=this._parsers[g];if(_.test(m)){p=_.parse(m);break}}}else a=m.data??a,l=m.format??l,u=m.loadParser??u,p={...p,...m};if(!c)throw new Error(`[Resolver] alias is undefined for this asset: ${p.src}`);p=this._buildResolvedAsset(p,{aliases:c,data:a,format:l,loadParser:u}),f.push(p)})}),c.forEach(d=>{this._assetMap[d]=f})})}resolveBundle(t){const e=br(t);t=le(t);const i={};return t.forEach(r=>{const s=this._bundles[r];if(s){const o=this.resolve(s),a={};for(const l in o){const u=o[l];a[this._extractAssetIdFromBundle(r,l)]=u}i[r]=a}}),e?i[t[0]]:i}resolveUrl(t){const e=this.resolve(t);if(typeof t!="string"){const i={};for(const r in e)i[r]=e[r].src;return i}return e.src}resolve(t){const e=br(t);t=le(t);const i={};return t.forEach(r=>{if(!this._resolverHash[r])if(this._assetMap[r]){let s=this._assetMap[r];const o=this._getPreferredOrder(s);o==null||o.priority.forEach(a=>{o.params[a].forEach(l=>{const u=s.filter(h=>h[a]?h[a]===l:!1);u.length&&(s=u)})}),this._resolverHash[r]=s[0]}else this._resolverHash[r]=this._buildResolvedAsset({alias:[r],src:r},{});i[r]=this._resolverHash[r]}),e?i[t[0]]:i}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let e=0;e<t.length;e++){const i=t[0],r=this._preferredOrder.find(s=>s.params.format.includes(i.format));if(r)return r}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const e=/\?/.test(t)?"&":"?";return`${t}${e}${this._defaultSearchParams}`}_buildResolvedAsset(t,e){const{aliases:i,data:r,loadParser:s,format:o}=e;return(this._basePath||this._rootPath)&&(t.src=At.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=i??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...r||{},...t.data},t.loadParser=s??t.loadParser,t.format=o??t.format??Ud(t.src),t}}tn.RETINA_PREFIX=/@([0-9\.]+)x/;function Ud(n){return n.split(".").pop().split("?").shift().split("#").shift()}const Hs=(n,t)=>{const e=t.split("?")[1];return e&&(n+=`?${e}`),n},Lu=class dn{constructor(t,e){this.linkedSheets=[],this._texture=t instanceof D?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=e;const i=parseFloat(e.meta.scale);i?(this.resolution=i,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=dn.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let e=t;const i=dn.BATCH_SIZE;for(;e-t<i&&e<this._frameKeys.length;){const r=this._frameKeys[e],s=this._frames[r],o=s.frame;if(o){let a=null,l=null;const u=s.trimmed!==!1&&s.sourceSize?s.sourceSize:s.frame,h=new dt(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);s.rotated?a=new dt(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):a=new dt(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),s.trimmed!==!1&&s.spriteSourceSize&&(l=new dt(Math.floor(s.spriteSourceSize.x)/this.resolution,Math.floor(s.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[r]=new D({source:this.textureSource,frame:a,orig:h,trim:l,rotate:s.rotated?2:0,defaultAnchor:s.anchor,defaultBorders:s.borders,label:r.toString()})}e++}}_processAnimations(){const t=this.data.animations||{};for(const e in t){this.animations[e]=[];for(let i=0;i<t[e].length;i++){const r=t[e][i];this.animations[e].push(this.textures[r])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*dn.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*dn.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){var e;for(const i in this.textures)this.textures[i].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&((e=this._texture)==null||e.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};Lu.BATCH_SIZE=1e3;let js=Lu;const Ld=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function Du(n,t,e){const i={};if(n.forEach(r=>{i[r]=t}),Object.keys(t.textures).forEach(r=>{i[r]=t.textures[r]}),!e){const r=At.dirname(n[0]);t.linkedSheets.forEach((s,o)=>{const a=Du([`${r}/${t.data.meta.related_multi_packs[o]}`],s,!0);Object.assign(i,a)})}return i}const Dd={extension:B.Asset,cache:{test:n=>n instanceof js,getCacheableAssets:(n,t)=>Du(n,t,!1)},resolver:{extension:{type:B.ResolveParser,name:"resolveSpritesheet"},test:n=>{const e=n.split("?")[0].split("."),i=e.pop(),r=e.pop();return i==="json"&&Ld.includes(r)},parse:n=>{var e;const t=n.split(".");return{resolution:parseFloat(((e=tn.RETINA_PREFIX.exec(n))==null?void 0:e[1])??"1"),format:t[t.length-2],src:n}}},loader:{name:"spritesheetLoader",extension:{type:B.LoadParser,priority:Ie.Normal,name:"spritesheetLoader"},async testParse(n,t){return At.extname(t.src).toLowerCase()===".json"&&!!n.frames},async parse(n,t,e){var u,h;const{texture:i,imageFilename:r}=(t==null?void 0:t.data)??{};let s=At.dirname(t.src);s&&s.lastIndexOf("/")!==s.length-1&&(s+="/");let o;if(i instanceof D)o=i;else{const c=Hs(s+(r??n.meta.image),t.src);o=(await e.load([c]))[c]}const a=new js(o.source,n);await a.parse();const l=(u=n==null?void 0:n.meta)==null?void 0:u.related_multi_packs;if(Array.isArray(l)){const c=[];for(const d of l){if(typeof d!="string")continue;let m=s+d;(h=t.data)!=null&&h.ignoreMultiPack||(m=Hs(m,t.src),c.push(e.load({src:m,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(c);a.linkedSheets=f,f.forEach(d=>{d.linkedSheets=[a].concat(a.linkedSheets.filter(m=>m!==d))})}return a},async unload(n,t,e){await e.unload(n.textureSource._sourceOrigin),n.destroy(!1)}}};Ft.add(Dd);var hs=/iPhone/i,Va=/iPod/i,Wa=/iPad/i,$a=/\biOS-universal(?:.+)Mac\b/i,cs=/\bAndroid(?:.+)Mobile\b/i,Ya=/Android/i,Ci=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,jn=/Silk/i,Se=/Windows Phone/i,Xa=/\bWindows(?:.+)ARM\b/i,Ha=/BlackBerry/i,ja=/BB10/i,qa=/Opera Mini/i,Ka=/\b(CriOS|Chrome)(?:.+)Mobile/i,Qa=/Mobile(?:.+)Firefox\b/i,Za=function(n){return typeof n<"u"&&n.platform==="MacIntel"&&typeof n.maxTouchPoints=="number"&&n.maxTouchPoints>1&&typeof MSStream>"u"};function Gd(n){return function(t){return t.test(n)}}function Ja(n){var t={userAgent:"",platform:"",maxTouchPoints:0};!n&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof n=="string"?t.userAgent=n:n&&n.userAgent&&(t={userAgent:n.userAgent,platform:n.platform,maxTouchPoints:n.maxTouchPoints||0});var e=t.userAgent,i=e.split("[FBAN");typeof i[1]<"u"&&(e=i[0]),i=e.split("Twitter"),typeof i[1]<"u"&&(e=i[0]);var r=Gd(e),s={apple:{phone:r(hs)&&!r(Se),ipod:r(Va),tablet:!r(hs)&&(r(Wa)||Za(t))&&!r(Se),universal:r($a),device:(r(hs)||r(Va)||r(Wa)||r($a)||Za(t))&&!r(Se)},amazon:{phone:r(Ci),tablet:!r(Ci)&&r(jn),device:r(Ci)||r(jn)},android:{phone:!r(Se)&&r(Ci)||!r(Se)&&r(cs),tablet:!r(Se)&&!r(Ci)&&!r(cs)&&(r(jn)||r(Ya)),device:!r(Se)&&(r(Ci)||r(jn)||r(cs)||r(Ya))||r(/\bokhttp\b/i)},windows:{phone:r(Se),tablet:r(Xa),device:r(Se)||r(Xa)},other:{blackberry:r(Ha),blackberry10:r(ja),opera:r(qa),firefox:r(Qa),chrome:r(Ka),device:r(Ha)||r(ja)||r(qa)||r(Qa)||r(Ka)},any:!1,phone:!1,tablet:!1};return s.any=s.apple.device||s.android.device||s.windows.device||s.other.device,s.phone=s.apple.phone||s.android.phone||s.windows.phone,s.tablet=s.apple.tablet||s.android.tablet||s.windows.tablet,s}const Nd=Ja.default??Ja,Vd=Nd(globalThis.navigator),fs=Object.create(null),tl=Object.create(null);function Vo(n,t){let e=tl[n];return e===void 0&&(fs[t]===void 0&&(fs[t]=1),tl[n]=e=fs[t]++),e}let Ai;function Gu(){return(!Ai||Ai!=null&&Ai.isContextLost())&&(Ai=ct.get().createCanvas().getContext("webgl",{})),Ai}let qn;function Wd(){if(!qn){qn="mediump";const n=Gu();n&&n.getShaderPrecisionFormat&&(qn=n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision?"highp":"mediump")}return qn}function $d(n,t,e){return t?n:e?(n=n.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${n}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${n}
        `}function Yd(n,t,e){const i=e?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(n.substring(0,9)!=="precision"){let r=e?t.requestedFragmentPrecision:t.requestedVertexPrecision;return r==="highp"&&i!=="highp"&&(r="mediump"),`precision ${r} float;
${n}`}else if(i!=="highp"&&n.substring(0,15)==="precision highp")return n.replace("precision highp","precision mediump");return n}function Xd(n,t){return t?`#version 300 es
${n}`:n}const Hd={},jd={};function qd(n,{name:t="pixi-program"},e=!0){t=t.replace(/\s+/g,"-"),t+=e?"-fragment":"-vertex";const i=e?Hd:jd;return i[t]?(i[t]++,t+=`-${i[t]}`):i[t]=1,n.indexOf("#define SHADER_NAME")!==-1?n:`${`#define SHADER_NAME ${t}`}
${n}`}function Kd(n,t){return t?n.replace("#version 300 es",""):n}const ds={stripVersion:Kd,ensurePrecision:Yd,addProgramDefines:$d,setProgramName:qd,insertVersion:Xd},ps=Object.create(null),Nu=class qs{constructor(t){t={...qs.defaultOptions,...t};const e=t.fragment.indexOf("#version 300 es")!==-1,i={stripVersion:e,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:Wd()},setProgramName:{name:t.name},addProgramDefines:e,insertVersion:e};let r=t.fragment,s=t.vertex;Object.keys(ds).forEach(o=>{const a=i[o];r=ds[o](r,a,!0),s=ds[o](s,a,!1)}),this.fragment=r,this.vertex=s,this._key=Vo(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const e=`${t.vertex}:${t.fragment}`;return ps[e]||(ps[e]=new qs(t)),ps[e]}};Nu.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let $=Nu;const el={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function Qd(n){return el[n]??el.float32}const Zd={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function Jd({source:n,entryPoint:t}){const e={},i=n.indexOf(`fn ${t}`);if(i!==-1){const r=n.indexOf("->",i);if(r!==-1){const s=n.substring(i,r),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=o.exec(s))!==null;){const l=Zd[a[3]]??"float32";e[a[2]]={location:parseInt(a[1],10),format:l,stride:Qd(l).stride,offset:0,instance:!1,start:0}}}}return e}function ms(n){var c,f;const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,e=/@group\((\d+)\)/,i=/@binding\((\d+)\)/,r=/var(<[^>]+>)? (\w+)/,s=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=(c=n.match(t))==null?void 0:c.map(d=>({group:parseInt(d.match(e)[1],10),binding:parseInt(d.match(i)[1],10),name:d.match(r)[2],isUniform:d.match(r)[1]==="<uniform>",type:d.match(s)[1]}));if(!u)return{groups:[],structs:[]};const h=((f=n.match(o))==null?void 0:f.map(d=>{const m=d.match(l)[1],p=d.match(a).reduce((g,_)=>{const[x,v]=_.split(":");return g[x.trim()]=v.trim(),g},{});return p?{name:m,members:p}:null}).filter(({name:d})=>u.some(m=>m.type===d)))??[];return{groups:u,structs:h}}var pn=(n=>(n[n.VERTEX=1]="VERTEX",n[n.FRAGMENT=2]="FRAGMENT",n[n.COMPUTE=4]="COMPUTE",n))(pn||{});function tp({groups:n}){const t=[];for(let e=0;e<n.length;e++){const i=n[e];t[i.group]||(t[i.group]=[]),i.isUniform?t[i.group].push({binding:i.binding,visibility:pn.VERTEX|pn.FRAGMENT,buffer:{type:"uniform"}}):i.type==="sampler"?t[i.group].push({binding:i.binding,visibility:pn.FRAGMENT,sampler:{type:"filtering"}}):i.type==="texture_2d"&&t[i.group].push({binding:i.binding,visibility:pn.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function ep({groups:n}){const t=[];for(let e=0;e<n.length;e++){const i=n[e];t[i.group]||(t[i.group]={}),t[i.group][i.name]=i.binding}return t}function ip(n,t){const e=new Set,i=new Set,r=[...n.structs,...t.structs].filter(o=>e.has(o.name)?!1:(e.add(o.name),!0)),s=[...n.groups,...t.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return i.has(a)?!1:(i.add(a),!0)});return{structs:r,groups:s}}const gs=Object.create(null);class W{constructor(t){var a,l;this._layoutKey=0;const{fragment:e,vertex:i,layout:r,gpuLayout:s,name:o}=t;if(this.name=o,this.fragment=e,this.vertex=i,e.source===i.source){const u=ms(e.source);this.structsAndGroups=u}else{const u=ms(i.source),h=ms(e.source);this.structsAndGroups=ip(u,h)}this.layout=r??ep(this.structsAndGroups),this.gpuLayout=s??tp(this.structsAndGroups),this.autoAssignGlobalUniforms=((a=this.layout[0])==null?void 0:a.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:e}=this,i=t.source+e.source+t.entryPoint+e.entryPoint;this._layoutKey=Vo(i,"program")}get attributeData(){return this._attributeData??(this._attributeData=Jd(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const e=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return gs[e]||(gs[e]=new W(t)),gs[e]}}const Vu=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>"],np=Vu.reduce((n,t)=>(n[t]=!0,n),{});function rp(n,t){switch(n){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const Wu=class $u{constructor(t,e){this._touched=0,this.uid=_t("uniform"),this._resourceType="uniformGroup",this._resourceId=_t("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,e={...$u.defaultOptions,...e},this.uniformStructures=t;const i={};for(const r in t){const s=t[r];if(s.name=r,s.size=s.size??1,!np[s.type])throw new Error(`Uniform type ${s.type} is not supported. Supported uniform types are: ${Vu.join(", ")}`);s.value??(s.value=rp(s.type,s.size)),i[r]=s.value}this.uniforms=i,this._dirtyId=1,this.ubo=e.ubo,this.isStatic=e.isStatic,this._signature=Vo(Object.keys(i).map(r=>`${r}-${t[r].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};Wu.defaultOptions={ubo:!1,isStatic:!1};let Yu=Wu;class or{constructor(t){this.resources=Object.create(null),this._dirty=!0;let e=0;for(const i in t){const r=t[i];this.setResource(r,e++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let e=0;for(const i in this.resources)t[e++]=this.resources[i]._resourceId;this._key=t.join("|")}setResource(t,e){var r,s;const i=this.resources[e];t!==i&&(i&&((r=t.off)==null||r.call(t,"change",this.onResourceChange,this)),(s=t.on)==null||s.call(t,"change",this.onResourceChange,this),this.resources[e]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const e=this.resources;for(const i in e)e[i]._touched=t}destroy(){var e;const t=this.resources;for(const i in t){const r=t[i];(e=r.off)==null||e.call(r,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const e=this.resources;for(const i in e)e[i]===t&&(e[i]=null)}else this._updateKey()}}var Cn=(n=>(n[n.WEBGL=1]="WEBGL",n[n.WEBGPU=2]="WEBGPU",n[n.BOTH=3]="BOTH",n))(Cn||{});class Wo extends Et{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:e,glProgram:i,groups:r,resources:s,compatibleRenderers:o,groupMap:a}=t;this.gpuProgram=e,this.glProgram=i,o===void 0&&(o=0,e&&(o|=Cn.WEBGPU),i&&(o|=Cn.WEBGL)),this.compatibleRenderers=o;const l={};if(!s&&!r&&(s={}),s&&r)throw new Error("[Shader] Cannot have both resources and groups");if(!e&&r&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!e&&r&&a)for(const u in a)for(const h in a[u]){const c=a[u][h];l[c]={group:u,binding:h,name:c}}else if(e&&r&&!a){const u=e.structsAndGroups.groups;a={},u.forEach(h=>{a[h.group]=a[h.group]||{},a[h.group][h.binding]=h.name,l[h.name]=h})}else if(s){r={},a={},e&&e.structsAndGroups.groups.forEach(c=>{a[c.group]=a[c.group]||{},a[c.group][c.binding]=c.name,l[c.name]=c});let u=0;for(const h in s)l[h]||(r[99]||(r[99]=new or,this._ownedBindGroups.push(r[99])),l[h]={group:99,binding:u,name:h},a[99]=a[99]||{},a[99][u]=h,u++);for(const h in s){const c=h;let f=s[h];!f.source&&!f._resourceType&&(f=new Yu(f));const d=l[c];d&&(r[d.group]||(r[d.group]=new or,this._ownedBindGroups.push(r[d.group])),r[d.group].setResource(f,d.binding))}}this.groups=r,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(r,l)}addResource(t,e,i){var r,s;(r=this._uniformBindMap)[e]||(r[e]={}),(s=this._uniformBindMap[e])[i]||(s[i]=t),this.groups[e]||(this.groups[e]=new or,this._ownedBindGroups.push(this.groups[e]))}_buildResourceAccessor(t,e){const i={};for(const r in e){const s=e[r];Object.defineProperty(i,s.name,{get(){return t[s.group].getResource(s.binding)},set(o){t[s.group].setResource(o,s.binding)}})}return i}destroy(t=!1){var e,i;this.emit("destroy",this),t&&((e=this.gpuProgram)==null||e.destroy(),(i=this.glProgram)==null||i.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(r=>{r.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:e,gl:i,...r}=t;let s,o;return e&&(s=W.from(e)),i&&(o=$.from(i)),new Wo({gpuProgram:s,glProgram:o,...r})}}const sp={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8},_s=0,xs=1,vs=2,ys=3,bs=4,Ss=5,Ks=class Xu{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<_s)}set blend(t){!!(this.data&1<<_s)!==t&&(this.data^=1<<_s)}get offsets(){return!!(this.data&1<<xs)}set offsets(t){!!(this.data&1<<xs)!==t&&(this.data^=1<<xs)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<vs)}set culling(t){!!(this.data&1<<vs)!==t&&(this.data^=1<<vs)}get depthTest(){return!!(this.data&1<<ys)}set depthTest(t){!!(this.data&1<<ys)!==t&&(this.data^=1<<ys)}get depthMask(){return!!(this.data&1<<Ss)}set depthMask(t){!!(this.data&1<<Ss)!==t&&(this.data^=1<<Ss)}get clockwiseFrontFace(){return!!(this.data&1<<bs)}set clockwiseFrontFace(t){!!(this.data&1<<bs)!==t&&(this.data^=1<<bs)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=sp[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new Xu;return t.depthTest=!1,t.blend=!0,t}};Ks.default2d=Ks.for2d();let op=Ks;const Hu=class Qs extends Wo{constructor(t){t={...Qs.defaultOptions,...t},super(t),this.enabled=!0,this._state=op.for2d(),this.blendMode=t.blendMode,this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.addResource("uTexture",0,1)}apply(t,e,i,r){t.applyFilter(this,e,i,r)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:e,gl:i,...r}=t;let s,o;return e&&(s=W.from(e)),i&&(o=$.from(i)),new Qs({gpuProgram:s,glProgram:o,...r})}};Hu.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1};let X=Hu;const Zs=[];Ft.handleByNamedList(B.Environment,Zs);async function ap(n){if(!n)for(let t=0;t<Zs.length;t++){const e=Zs[t];if(e.value.test()){await e.value.load();return}}}let an;function lp(){if(typeof an=="boolean")return an;try{an=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{an=!1}return an}var $o={exports:{}};$o.exports=Br;$o.exports.default=Br;function Br(n,t,e){e=e||2;var i=t&&t.length,r=i?t[0]*e:n.length,s=ju(n,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;var a,l,u,h,c,f,d;if(i&&(s=dp(n,t,s,e)),n.length>80*e){a=u=n[0],l=h=n[1];for(var m=e;m<r;m+=e)c=n[m],f=n[m+1],c<a&&(a=c),f<l&&(l=f),c>u&&(u=c),f>h&&(h=f);d=Math.max(u-a,h-l),d=d!==0?32767/d:0}return An(s,o,e,a,l,d,0),o}function ju(n,t,e,i,r){var s,o;if(r===eo(n,t,e,i)>0)for(s=t;s<e;s+=i)o=il(s,n[s],n[s+1],o);else for(s=e-i;s>=t;s-=i)o=il(s,n[s],n[s+1],o);return o&&Ur(o,o.next)&&(Pn(o),o=o.next),o}function xi(n,t){if(!n)return n;t||(t=n);var e=n,i;do if(i=!1,!e.steiner&&(Ur(e,e.next)||ut(e.prev,e,e.next)===0)){if(Pn(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function An(n,t,e,i,r,s,o){if(n){!o&&s&&xp(n,i,r,s);for(var a=n,l,u;n.prev!==n.next;){if(l=n.prev,u=n.next,s?hp(n,i,r,s):up(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(u.i/e|0),Pn(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=cp(xi(n),t,e),An(n,t,e,i,r,s,2)):o===2&&fp(n,t,e,i,r,s):An(xi(n),t,e,i,r,s,1);break}}}}function up(n){var t=n.prev,e=n,i=n.next;if(ut(t,e,i)>=0)return!1;for(var r=t.x,s=e.x,o=i.x,a=t.y,l=e.y,u=i.y,h=r<s?r<o?r:o:s<o?s:o,c=a<l?a<u?a:u:l<u?l:u,f=r>s?r>o?r:o:s>o?s:o,d=a>l?a>u?a:u:l>u?l:u,m=i.next;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=c&&m.y<=d&&ki(r,a,s,l,o,u,m.x,m.y)&&ut(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function hp(n,t,e,i){var r=n.prev,s=n,o=n.next;if(ut(r,s,o)>=0)return!1;for(var a=r.x,l=s.x,u=o.x,h=r.y,c=s.y,f=o.y,d=a<l?a<u?a:u:l<u?l:u,m=h<c?h<f?h:f:c<f?c:f,p=a>l?a>u?a:u:l>u?l:u,g=h>c?h>f?h:f:c>f?c:f,_=Js(d,m,t,e,i),x=Js(p,g,t,e,i),v=n.prevZ,y=n.nextZ;v&&v.z>=_&&y&&y.z<=x;){if(v.x>=d&&v.x<=p&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&ki(a,h,l,c,u,f,v.x,v.y)&&ut(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=p&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&ki(a,h,l,c,u,f,y.x,y.y)&&ut(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=_;){if(v.x>=d&&v.x<=p&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&ki(a,h,l,c,u,f,v.x,v.y)&&ut(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=p&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&ki(a,h,l,c,u,f,y.x,y.y)&&ut(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function cp(n,t,e){var i=n;do{var r=i.prev,s=i.next.next;!Ur(r,s)&&qu(r,i,i.next,s)&&Tn(r,s)&&Tn(s,r)&&(t.push(r.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),Pn(i),Pn(i.next),i=n=s),i=i.next}while(i!==n);return xi(i)}function fp(n,t,e,i,r,s){var o=n;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&bp(o,a)){var l=Ku(o,a);o=xi(o,o.next),l=xi(l,l.next),An(o,t,e,i,r,s,0),An(l,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function dp(n,t,e,i){var r=[],s,o,a,l,u;for(s=0,o=t.length;s<o;s++)a=t[s]*i,l=s<o-1?t[s+1]*i:n.length,u=ju(n,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(yp(u));for(r.sort(pp),s=0;s<r.length;s++)e=mp(r[s],e);return e}function pp(n,t){return n.x-t.x}function mp(n,t){var e=gp(n,t);if(!e)return t;var i=Ku(e,n);return xi(i,i.next),xi(e,e.next)}function gp(n,t){var e=t,i=n.x,r=n.y,s=-1/0,o;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){var a=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(a<=i&&a>s&&(s=a,o=e.x<e.next.x?e:e.next,a===i))return o}e=e.next}while(e!==t);if(!o)return null;var l=o,u=o.x,h=o.y,c=1/0,f;e=o;do i>=e.x&&e.x>=u&&i!==e.x&&ki(r<h?i:s,r,u,h,r<h?s:i,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(i-e.x),Tn(e,n)&&(f<c||f===c&&(e.x>o.x||e.x===o.x&&_p(o,e)))&&(o=e,c=f)),e=e.next;while(e!==l);return o}function _p(n,t){return ut(n.prev,n,t.prev)<0&&ut(t.next,n,n.next)<0}function xp(n,t,e,i){var r=n;do r.z===0&&(r.z=Js(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,vp(r)}function vp(n){var t,e,i,r,s,o,a,l,u=1;do{for(e=n,n=null,s=null,o=0;e;){for(o++,i=e,a=0,t=0;t<u&&(a++,i=i.nextZ,!!i);t++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(r=e,e=e.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;e=i}s.nextZ=null,u*=2}while(o>1);return n}function Js(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function yp(n){var t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ki(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function bp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Sp(n,t)&&(Tn(n,t)&&Tn(t,n)&&wp(n,t)&&(ut(n.prev,n,t.prev)||ut(n,t.prev,t))||Ur(n,t)&&ut(n.prev,n,n.next)>0&&ut(t.prev,t,t.next)>0)}function ut(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ur(n,t){return n.x===t.x&&n.y===t.y}function qu(n,t,e,i){var r=Qn(ut(n,t,e)),s=Qn(ut(n,t,i)),o=Qn(ut(e,i,n)),a=Qn(ut(e,i,t));return!!(r!==s&&o!==a||r===0&&Kn(n,e,t)||s===0&&Kn(n,i,t)||o===0&&Kn(e,n,i)||a===0&&Kn(e,t,i))}function Kn(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Qn(n){return n>0?1:n<0?-1:0}function Sp(n,t){var e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&qu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Tn(n,t){return ut(n.prev,n,n.next)<0?ut(n,t,n.next)>=0&&ut(n,n.prev,t)>=0:ut(n,t,n.prev)<0||ut(n,n.next,t)<0}function wp(n,t){var e=n,i=!1,r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Ku(n,t){var e=new to(n.i,n.x,n.y),i=new to(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function il(n,t,e,i){var r=new to(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Pn(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function to(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Br.deviation=function(n,t,e,i){var r=t&&t.length,s=r?t[0]*e:n.length,o=Math.abs(eo(n,0,s,e));if(r)for(var a=0,l=t.length;a<l;a++){var u=t[a]*e,h=a<l-1?t[a+1]*e:n.length;o-=Math.abs(eo(n,u,h,e))}var c=0;for(a=0;a<i.length;a+=3){var f=i[a]*e,d=i[a+1]*e,m=i[a+2]*e;c+=Math.abs((n[f]-n[m])*(n[d+1]-n[f+1])-(n[f]-n[d])*(n[m+1]-n[f+1]))}return o===0&&c===0?0:Math.abs((c-o)/o)};function eo(n,t,e,i){for(var r=0,s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}Br.flatten=function(n){for(var t=n[0][0].length,e={vertices:[],holes:[],dimensions:t},i=0,r=0;r<n.length;r++){for(var s=0;s<n[r].length;s++)for(var o=0;o<t;o++)e.vertices.push(n[r][s][o]);r>0&&(i+=n[r-1].length,e.holes.push(i))}return e};var Cp=$o.exports;const Ap=Rr(Cp);var Qu=(n=>(n[n.NONE=0]="NONE",n[n.COLOR=16384]="COLOR",n[n.STENCIL=1024]="STENCIL",n[n.DEPTH=256]="DEPTH",n[n.COLOR_DEPTH=16640]="COLOR_DEPTH",n[n.COLOR_STENCIL=17408]="COLOR_STENCIL",n[n.DEPTH_STENCIL=1280]="DEPTH_STENCIL",n[n.ALL=17664]="ALL",n))(Qu||{});class Tp{constructor(t){this.items=[],this._name=t}emit(t,e,i,r,s,o,a,l){const{name:u,items:h}=this;for(let c=0,f=h.length;c<f;c++)h[c][u](t,e,i,r,s,o,a,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const e=this.items.indexOf(t);return e!==-1&&this.items.splice(e,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Pp=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Zu=class Ju extends Et{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const e=[...Pp,...this.config.runners??[]];this._addRunners(...e),this._unsafeEvalCheck()}async init(t={}){const e=t.skipExtensionImports===!0?!0:t.manageImports===!1;await ap(e),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const i in this._systemsHash)t={...this._systemsHash[i].constructor.defaultOptions,...t};t={...Ju.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let i=0;i<this.runners.init.items.length;i++)await this.runners.init.items[i].init(t);this._initOptions=t}render(t,e){let i=t;if(i instanceof H&&(i={container:i},e&&(k(Q,"passing a second argument is deprecated, please use render options instead"),i.target=e.renderTexture)),i.target||(i.target=this.view.renderTarget),i.target===this.view.renderTarget&&(this._lastObjectRendered=i.container,i.clearColor=this.background.colorRgba),i.clearColor){const r=Array.isArray(i.clearColor)&&i.clearColor.length===4;i.clearColor=r?i.clearColor:j.shared.setValue(i.clearColor).toArray()}i.transform||(i.container.updateLocalTransform(),i.transform=i.container.localTransform),this.runners.prerender.emit(i),this.runners.renderStart.emit(i),this.runners.render.emit(i),this.runners.renderEnd.emit(i),this.runners.postrender.emit(i)}resize(t,e,i){this.view.resize(t,e,i),this.emit("resize",this.view.screen.width,this.view.screen.height)}clear(t={}){const e=this;t.target||(t.target=e.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=Qu.ALL);const{clear:i,clearColor:r,target:s}=t;j.shared.setValue(r??this.background.colorRgba),e.renderTarget.clear(s,i,j.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(e=>{this.runners[e]=new Tp(e)})}_addSystems(t){let e;for(e in t){const i=t[e];this._addSystem(i.value,i.name)}}_addSystem(t,e){const i=new t(this);if(this[e])throw new Error(`Whoops! The name "${e}" is already in use`);this[e]=i,this._systemsHash[e]=i;for(const r in this.runners)this.runners[r].add(i);return this}_addPipes(t,e){const i=e.reduce((r,s)=>(r[s.name]=s.value,r),{});t.forEach(r=>{const s=r.value,o=r.name,a=i[o];this.renderPipes[o]=new s(this,a?new a:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(e=>{e.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!lp())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};Zu.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let th=Zu,Zn;function Fp(n){return Zn!==void 0||(Zn=(()=>{var e;const t={stencil:!0,failIfMajorPerformanceCaveat:n??th.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ct.get().getWebGLRenderingContext())return!1;let r=ct.get().createCanvas().getContext("webgl",t);const s=!!((e=r==null?void 0:r.getContextAttributes())!=null&&e.stencil);if(r){const o=r.getExtension("WEBGL_lose_context");o&&o.loseContext()}return r=null,s}catch{return!1}})()),Zn}let Jn;async function Mp(n={}){return Jn!==void 0||(Jn=await(async()=>{if(!ct.get().getNavigator().gpu)return!1;try{return await(await navigator.gpu.requestAdapter(n)).requestDevice(),!0}catch{return!1}})()),Jn}const nl=["webgl","webgpu","canvas"];async function Ip(n){let t=[];n.preference?(t.push(n.preference),nl.forEach(s=>{s!==n.preference&&t.push(s)})):t=nl.slice();let e,i={};for(let s=0;s<t.length;s++){const o=t[s];if(o==="webgpu"&&await Mp()){const{WebGPURenderer:a}=await _r(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-DI7v-qk-.js");return{WebGPURenderer:l}},__vite__mapDeps([4,2,5]),import.meta.url);e=a,i={...n,...n.webgpu};break}else if(o==="webgl"&&Fp(n.failIfMajorPerformanceCaveat??th.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await _r(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-Cz23HemV.js");return{WebGLRenderer:l}},__vite__mapDeps([6,2,3,5]),import.meta.url);e=a,i={...n,...n.webgl};break}else if(o==="canvas")throw i={...n},new Error("CanvasRenderer is not yet implemented")}if(delete i.webgpu,delete i.webgl,!e)throw new Error("No available renderer for the current environment");const r=new e;return await r.init(i),r}class eh{static init(){var t;(t=globalThis.__PIXI_APP_INIT__)==null||t.call(globalThis,this)}static destroy(){}}eh.extension=B.Application;class Ep{constructor(t){this._renderer=t}init(){var t;(t=globalThis.__PIXI_RENDERER_INIT__)==null||t.call(globalThis,this._renderer)}destroy(){this._renderer=null}}Ep.extension={type:[B.WebGLSystem,B.WebGPUSystem],name:"initHook",priority:-10};const ih=class io{constructor(...t){this.stage=new H,t[0]!==void 0&&k(Q,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await Ip(t),io._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return k(Q,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,e=!1){const i=io._plugins.slice(0);i.reverse(),i.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(e),this.stage=null,this.renderer.destroy(t),this.renderer=null}};ih._plugins=[];let nh=ih;Ft.handleByList(B.Application,nh._plugins);Ft.add(eh);class rh extends Et{constructor(){super(...arguments),this.chars=Object.create(null),this.lineHeight=0,this.fontFamily="",this.fontMetrics={fontSize:0,ascent:0,descent:0},this.baseLineOffset=0,this.distanceField={type:"none",range:0},this.pages=[],this.applyFillAsTint=!0,this.baseMeasurementFontSize=100,this.baseRenderedFontSize=100}get font(){return k(Q,"BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."),this.fontFamily}get pageTextures(){return k(Q,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}get size(){return k(Q,"BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."),this.fontMetrics.fontSize}get distanceFieldRange(){return k(Q,"BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."),this.distanceField.range}get distanceFieldType(){return k(Q,"BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."),this.distanceField.type}destroy(t=!1){var e;this.emit("destroy",this),this.removeAllListeners();for(const i in this.chars)(e=this.chars[i].texture)==null||e.destroy();this.chars=null,t&&(this.pages.forEach(i=>i.texture.destroy(!0)),this.pages=null)}}const sh=class no{constructor(t,e,i,r){this.uid=_t("fillGradient"),this.type="linear",this.gradientStops=[],this._styleKey=null,this.x0=t,this.y0=e,this.x1=i,this.y1=r}addColorStop(t,e){return this.gradientStops.push({offset:t,color:j.shared.setValue(e).toHexa()}),this._styleKey=null,this}buildLinearGradient(){const t=no.defaultTextureSize,{gradientStops:e}=this,i=ct.get().createCanvas();i.width=t,i.height=t;const r=i.getContext("2d"),s=r.createLinearGradient(0,0,no.defaultTextureSize,1);for(let p=0;p<e.length;p++){const g=e[p];s.addColorStop(g.offset,g.color)}r.fillStyle=s,r.fillRect(0,0,t,t),this.texture=new D({source:new bi({resource:i,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:a,x1:l,y1:u}=this,h=new J,c=l-o,f=u-a,d=Math.sqrt(c*c+f*f),m=Math.atan2(f,c);h.translate(-o,-a),h.scale(1/t,1/t),h.rotate(-m),h.scale(256/d,1),this.transform=h,this._styleKey=null}get styleKey(){if(this._styleKey)return this._styleKey;const t=this.gradientStops.map(r=>`${r.offset}-${r.color}`).join("-"),e=this.texture.uid,i=this.transform.toArray().join("-");return`fill-gradient-${this.uid}-${t}-${e}-${i}-${this.x0}-${this.y0}-${this.x1}-${this.y1}`}};sh.defaultTextureSize=256;let De=sh;const rl={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class Lr{constructor(t,e){this.uid=_t("fillPattern"),this.transform=new J,this._styleKey=null,this.texture=t,this.transform.scale(1/t.frame.width,1/t.frame.height),e&&(t.source.style.addressModeU=rl[e].addressModeU,t.source.style.addressModeV=rl[e].addressModeV)}setTransform(t){const e=this.texture;this.transform.copyFrom(t),this.transform.invert(),this.transform.scale(1/e.frame.width,1/e.frame.height),this._styleKey=null}get styleKey(){return this._styleKey?this._styleKey:(this._styleKey=`fill-pattern-${this.uid}-${this.texture.uid}-${this.transform.toArray().join("-")}`,this._styleKey)}}var zp=Rp,ws={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},Op=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function Rp(n){var t=[];return n.replace(Op,function(e,i,r){var s=i.toLowerCase();for(r=Bp(r),s=="m"&&r.length>2&&(t.push([i].concat(r.splice(0,2))),s="l",i=i=="m"?"l":"L");;){if(r.length==ws[s])return r.unshift(i),t.push(r);if(r.length<ws[s])throw new Error("malformed path data");t.push([i].concat(r.splice(0,ws[s])))}}),t}var kp=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function Bp(n){var t=n.match(kp);return t?t.map(Number):[]}const Up=Rr(zp);function Lp(n,t){const e=Up(n),i=[];let r=null,s=0,o=0;for(let a=0;a<e.length;a++){const l=e[a],u=l[0],h=l;switch(u){case"M":s=h[1],o=h[2],t.moveTo(s,o);break;case"m":s+=h[1],o+=h[2],t.moveTo(s,o);break;case"H":s=h[1],t.lineTo(s,o);break;case"h":s+=h[1],t.lineTo(s,o);break;case"V":o=h[1],t.lineTo(s,o);break;case"v":o+=h[1],t.lineTo(s,o);break;case"L":s=h[1],o=h[2],t.lineTo(s,o);break;case"l":s+=h[1],o+=h[2],t.lineTo(s,o);break;case"C":s=h[5],o=h[6],t.bezierCurveTo(h[1],h[2],h[3],h[4],s,o);break;case"c":t.bezierCurveTo(s+h[1],o+h[2],s+h[3],o+h[4],s+h[5],o+h[6]),s+=h[5],o+=h[6];break;case"S":s=h[3],o=h[4],t.bezierCurveToShort(h[1],h[2],s,o);break;case"s":t.bezierCurveToShort(s+h[1],o+h[2],s+h[3],o+h[4]),s+=h[3],o+=h[4];break;case"Q":s=h[3],o=h[4],t.quadraticCurveTo(h[1],h[2],s,o);break;case"q":t.quadraticCurveTo(s+h[1],o+h[2],s+h[3],o+h[4]),s+=h[3],o+=h[4];break;case"T":s=h[1],o=h[2],t.quadraticCurveToShort(s,o);break;case"t":s+=h[1],o+=h[2],t.quadraticCurveToShort(s,o);break;case"A":s=h[6],o=h[7],t.arcToSvg(h[1],h[2],h[3],h[4],h[5],s,o);break;case"a":s+=h[6],o+=h[7],t.arcToSvg(h[1],h[2],h[3],h[4],h[5],s,o);break;case"Z":case"z":t.closePath(),i.length>0&&(r=i.pop(),r?(s=r.startX,o=r.startY):(s=0,o=0)),r=null;break;default:xt(`Unknown SVG path command: ${u}`)}u!=="Z"&&u!=="z"&&r===null&&(r={startX:s,startY:o},i.push(r))}return t}class Yo{constructor(t=0,e=0,i=0){this.type="circle",this.x=t,this.y=e,this.radius=i}clone(){return new Yo(this.x,this.y,this.radius)}contains(t,e){if(this.radius<=0)return!1;const i=this.radius*this.radius;let r=this.x-t,s=this.y-e;return r*=r,s*=s,r+s<=i}strokeContains(t,e,i){if(this.radius===0)return!1;const r=this.x-t,s=this.y-e,o=this.radius,a=i/2,l=Math.sqrt(r*r+s*s);return l<o+a&&l>o-a}getBounds(t){return t=t||new dt,t.x=this.x-this.radius,t.y=this.y-this.radius,t.width=this.radius*2,t.height=this.radius*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.radius=t.radius,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class Xo{constructor(t=0,e=0,i=0,r=0){this.type="ellipse",this.x=t,this.y=e,this.halfWidth=i,this.halfHeight=r}clone(){return new Xo(this.x,this.y,this.halfWidth,this.halfHeight)}contains(t,e){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let i=(t-this.x)/this.halfWidth,r=(e-this.y)/this.halfHeight;return i*=i,r*=r,i+r<=1}strokeContains(t,e,i){const{halfWidth:r,halfHeight:s}=this;if(r<=0||s<=0)return!1;const o=i/2,a=r-o,l=s-o,u=r+o,h=s+o,c=t-this.x,f=e-this.y,d=c*c/(a*a)+f*f/(l*l),m=c*c/(u*u)+f*f/(h*h);return d>1&&m<=1}getBounds(t){return t=t||new dt,t.x=this.x-this.halfWidth,t.y=this.y-this.halfHeight,t.width=this.halfWidth*2,t.height=this.halfHeight*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.halfWidth=t.halfWidth,this.halfHeight=t.halfHeight,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function Dp(n,t,e,i,r,s){const o=n-e,a=t-i,l=r-e,u=s-i,h=o*l+a*u,c=l*l+u*u;let f=-1;c!==0&&(f=h/c);let d,m;f<0?(d=e,m=i):f>1?(d=r,m=s):(d=e+f*l,m=i+f*u);const p=n-d,g=t-m;return p*p+g*g}class xn{constructor(...t){this.type="polygon";let e=Array.isArray(t[0])?t[0]:t;if(typeof e[0]!="number"){const i=[];for(let r=0,s=e.length;r<s;r++)i.push(e[r].x,e[r].y);e=i}this.points=e,this.closePath=!0}clone(){const t=this.points.slice(),e=new xn(t);return e.closePath=this.closePath,e}contains(t,e){let i=!1;const r=this.points.length/2;for(let s=0,o=r-1;s<r;o=s++){const a=this.points[s*2],l=this.points[s*2+1],u=this.points[o*2],h=this.points[o*2+1];l>e!=h>e&&t<(u-a)*((e-l)/(h-l))+a&&(i=!i)}return i}strokeContains(t,e,i){const r=i/2,s=r*r,{points:o}=this,a=o.length-(this.closePath?0:2);for(let l=0;l<a;l+=2){const u=o[l],h=o[l+1],c=o[(l+2)%o.length],f=o[(l+3)%o.length];if(Dp(t,e,u,h,c,f)<=s)return!0}return!1}getBounds(t){t=t||new dt;const e=this.points;let i=1/0,r=-1/0,s=1/0,o=-1/0;for(let a=0,l=e.length;a<l;a+=2){const u=e[a],h=e[a+1];i=u<i?u:i,r=u>r?u:r,s=h<s?h:s,o=h>o?h:o}return t.x=i,t.width=r-i,t.y=s,t.height=o-s,t}copyFrom(t){return this.points=t.points.slice(),this.closePath=t.closePath,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t,e)=>`${t}, ${e}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const tr=(n,t,e,i,r,s)=>{const o=n-e,a=t-i,l=Math.sqrt(o*o+a*a);return l>=r-s&&l<=r+s};class Ho{constructor(t=0,e=0,i=0,r=0,s=20){this.type="roundedRectangle",this.x=t,this.y=e,this.width=i,this.height=r,this.radius=s}getBounds(t){return t=t||new dt,t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}clone(){return new Ho(this.x,this.y,this.width,this.height,this.radius)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height){const i=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(e>=this.y+i&&e<=this.y+this.height-i||t>=this.x+i&&t<=this.x+this.width-i)return!0;let r=t-(this.x+i),s=e-(this.y+i);const o=i*i;if(r*r+s*s<=o||(r=t-(this.x+this.width-i),r*r+s*s<=o)||(s=e-(this.y+this.height-i),r*r+s*s<=o)||(r=t-(this.x+i),r*r+s*s<=o))return!0}return!1}strokeContains(t,e,i){const{x:r,y:s,width:o,height:a,radius:l}=this,u=i/2,h=r+l,c=s+l,f=o-l*2,d=a-l*2,m=r+o,p=s+a;return(t>=r-u&&t<=r+u||t>=m-u&&t<=m+u)&&e>=c&&e<=c+d||(e>=s-u&&e<=s+u||e>=p-u&&e<=p+u)&&t>=h&&t<=h+f?!0:t<h&&e<c&&tr(t,e,h,c,l,u)||t>m-l&&e<c&&tr(t,e,m-l,c,l,u)||t>m-l&&e>p-l&&tr(t,e,m-l,p-l,l,u)||t<h&&e>p-l&&tr(t,e,h,p-l,l,u)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}const Gp=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function Np(n){let t="";for(let e=0;e<n;++e)e>0&&(t+=`
else `),e<n-1&&(t+=`if(test == ${e}.0){}`);return t}function Vp(n,t){if(n===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const e=t.createShader(t.FRAGMENT_SHADER);for(;;){const i=Gp.replace(/%forloop%/gi,Np(n));if(t.shaderSource(e,i),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))n=n/2|0;else break}return n}let Ti=null;function oh(){if(Ti)return Ti;const n=Gu();return Ti=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),Ti=Vp(Ti,n),Ti}const ah={};function Wp(n,t){let e=0;for(let i=0;i<t;i++)e=e*31+n[i].uid>>>0;return ah[e]||$p(n,t,e)}let Cs=0;function $p(n,t,e){const i={};let r=0;Cs||(Cs=oh());for(let o=0;o<Cs;o++){const a=o<t?n[o]:D.EMPTY.source;i[r++]=a.source,i[r++]=a.style}const s=new or(i);return ah[e]=s,s}class sl{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function ol(n,t){const e=n.byteLength/8|0,i=new Float64Array(n,0,e);new Float64Array(t,0,e).set(i);const s=n.byteLength-e*8;if(s>0){const o=new Uint8Array(n,e*8,s);new Uint8Array(t,e*8,s).set(o)}}const Yp={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var Xp=(n=>(n[n.DISABLED=0]="DISABLED",n[n.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",n[n.MASK_ACTIVE=2]="MASK_ACTIVE",n[n.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",n[n.NONE=4]="NONE",n))(Xp||{});function al(n,t){return t.alphaMode==="no-premultiply-alpha"&&Yp[n]||n}class Hp{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const e=this.textures[t];this.textures[t]=null,this.ids[e.uid]=null}this.count=0}}class jp{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new Hp,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}const lh=[];let ro=0;function ll(){return ro>0?lh[--ro]:new jp}function ul(n){lh[ro++]=n}let ln=0;const uh=class hh{constructor(t={}){this.uid=_t("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._vertexSize=6,this._elements=[],t={...hh.defaultOptions,...t};const{vertexSize:e,indexSize:i}=t;this.attributeBuffer=new sl(e*this._vertexSize*4),this.indexBuffer=new Uint16Array(i),this._maxTextures=oh()}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let t=0;t<this.batchIndex;t++)ul(this.batches[t]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t.indexStart=this.indexSize,t.location=this.attributeSize,t.batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.vertexSize*this._vertexSize}checkAndUpdateTexture(t,e){const i=t.batch.textures.ids[e._source.uid];return!i&&i!==0?!1:(t.textureId=i,t.texture=e,!0)}updateElement(t){this.dirty=!0,t.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,t.location,t.textureId)}break(t){const e=this._elements;if(!e[this.elementStart])return;let i=ll(),r=i.textures;r.clear();const s=e[this.elementStart];let o=al(s.blendMode,s.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const a=this.attributeBuffer.float32View,l=this.attributeBuffer.uint32View,u=this.indexBuffer;let h=this._batchIndexSize,c=this._batchIndexStart,f="startBatch";const d=this._maxTextures;for(let m=this.elementStart;m<this.elementSize;++m){const p=e[m];e[m]=null;const _=p.texture._source,x=al(p.blendMode,_),v=o!==x;if(_._batchTick===ln&&!v){p.textureId=_._textureBindLocation,h+=p.indexSize,p.packAttributes(a,l,p.location,p.textureId),p.packIndex(u,p.indexStart,p.location/this._vertexSize),p.batch=i;continue}_._batchTick=ln,(r.count>=d||v)&&(this._finishBatch(i,c,h-c,r,o,t,f),f="renderBatch",c=h,o=x,i=ll(),r=i.textures,r.clear(),++ln),p.textureId=_._textureBindLocation=r.count,r.ids[_.uid]=r.count,r.textures[r.count++]=_,p.batch=i,h+=p.indexSize,p.packAttributes(a,l,p.location,p.textureId),p.packIndex(u,p.indexStart,p.location/this._vertexSize)}r.count>0&&(this._finishBatch(i,c,h-c,r,o,t,f),c=h,++ln),this.elementStart=this.elementSize,this._batchIndexStart=c,this._batchIndexSize=h}_finishBatch(t,e,i,r,s,o,a){t.gpuBindGroup=null,t.bindGroup=null,t.action=a,t.batcher=this,t.textures=r,t.blendMode=s,t.start=e,t.size=i,++ln,this.batches[this.batchIndex++]=t,o.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const e=Math.max(t,this.attributeBuffer.size*2),i=new sl(e);ol(this.attributeBuffer.rawBinaryData,i.rawBinaryData),this.attributeBuffer=i}_resizeIndexBuffer(t){const e=this.indexBuffer;let i=Math.max(t,e.length*1.5);i+=i%2;const r=i>65535?new Uint32Array(i):new Uint16Array(i);if(r.BYTES_PER_ELEMENT!==e.BYTES_PER_ELEMENT)for(let s=0;s<e.length;s++)r[s]=e[s];else ol(e.buffer,r.buffer);this.indexBuffer=r}destroy(){for(let t=0;t<this.batches.length;t++)ul(this.batches[t]);this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t].batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};uh.defaultOptions={vertexSize:4,indexSize:6};let qp=uh;var Ut=(n=>(n[n.MAP_READ=1]="MAP_READ",n[n.MAP_WRITE=2]="MAP_WRITE",n[n.COPY_SRC=4]="COPY_SRC",n[n.COPY_DST=8]="COPY_DST",n[n.INDEX=16]="INDEX",n[n.VERTEX=32]="VERTEX",n[n.UNIFORM=64]="UNIFORM",n[n.STORAGE=128]="STORAGE",n[n.INDIRECT=256]="INDIRECT",n[n.QUERY_RESOLVE=512]="QUERY_RESOLVE",n[n.STATIC=1024]="STATIC",n))(Ut||{});class Fn extends Et{constructor(t){let{data:e,size:i}=t;const{usage:r,label:s,shrinkToFit:o}=t;super(),this.uid=_t("buffer"),this._resourceType="buffer",this._resourceId=_t("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,this.destroyed=!1,e instanceof Array&&(e=new Float32Array(e)),this._data=e,i=i??(e==null?void 0:e.byteLength);const a=!!e;this.descriptor={size:i,usage:r,mappedAtCreation:a,label:s},this.shrinkToFit=o??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get static(){return!!(this.descriptor.usage&Ut.STATIC)}set static(t){t?this.descriptor.usage|=Ut.STATIC:this.descriptor.usage&=~Ut.STATIC}setDataWithSize(t,e,i){if(this._updateID++,this._updateSize=e*t.BYTES_PER_ELEMENT,this._data===t){i&&this.emit("update",this);return}const r=this._data;if(this._data=t,r.length!==t.length){!this.shrinkToFit&&t.byteLength<r.byteLength?i&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=_t("resource"),this.emit("change",this));return}i&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function ch(n,t){if(!(n instanceof Fn)){let e=t?Ut.INDEX:Ut.VERTEX;n instanceof Array&&(t?(n=new Uint32Array(n),e=Ut.INDEX|Ut.COPY_DST):(n=new Float32Array(n),e=Ut.VERTEX|Ut.COPY_DST)),n=new Fn({data:n,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:e})}return n}function Kp(n,t,e){const i=n.getAttribute(t);if(!i)return e.minX=0,e.minY=0,e.maxX=0,e.maxY=0,e;const r=i.buffer.data;let s=1/0,o=1/0,a=-1/0,l=-1/0;const u=r.BYTES_PER_ELEMENT,h=(i.offset||0)/u,c=(i.stride||2*4)/u;for(let f=h;f<r.length;f+=c){const d=r[f],m=r[f+1];d>a&&(a=d),m>l&&(l=m),d<s&&(s=d),m<o&&(o=m)}return e.minX=s,e.minY=o,e.maxX=a,e.maxY=l,e}function Qp(n){return(n instanceof Fn||Array.isArray(n)||n.BYTES_PER_ELEMENT)&&(n={buffer:n}),n.buffer=ch(n.buffer,!1),n}class Zp extends Et{constructor(t){const{attributes:e,indexBuffer:i,topology:r}=t;super(),this.uid=_t("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new ve,this._boundsDirty=!0,this.attributes=e,this.buffers=[],this.instanceCount=t.instanceCount||1;for(const s in e){const o=e[s]=Qp(e[s]);this.buffers.indexOf(o.buffer)===-1&&(this.buffers.push(o.buffer),o.buffer.on("update",this.onBufferUpdate,this),o.buffer.on("change",this.onBufferUpdate,this))}i&&(this.indexBuffer=ch(i,!0),this.buffers.push(this.indexBuffer)),this.topology=r||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const e=this.attributes[t];return e.buffer.data.length/(e.stride/4||e.size)}return 0}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,Kp(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(e=>e.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const Jp=new Float32Array(1),tm=new Uint32Array(1);class em extends Zp{constructor(){const e=new Fn({data:Jp,label:"attribute-batch-buffer",usage:Ut.VERTEX|Ut.COPY_DST,shrinkToFit:!1}),i=new Fn({data:tm,label:"index-batch-buffer",usage:Ut.INDEX|Ut.COPY_DST,shrinkToFit:!1}),r=6*4;super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:r,offset:0,location:1},aUV:{buffer:e,format:"float32x2",stride:r,offset:2*4,location:3},aColor:{buffer:e,format:"unorm8x4",stride:r,offset:4*4,location:0},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:r,offset:5*4,location:2}},indexBuffer:i})}}function im(n,t,e,i,r,s,o,a=null){let l=0;e*=t,r*=s;const u=a.a,h=a.b,c=a.c,f=a.d,d=a.tx,m=a.ty;for(;l<o;){const p=n[e],g=n[e+1];i[r]=u*p+c*g+d,i[r+1]=h*p+f*g+m,r+=s,e+=t,l++}}function nm(n,t,e,i){let r=0;for(t*=e;r<i;)n[t]=0,n[t+1]=0,t+=e,r++}function fh(n,t,e,i,r){const s=t.a,o=t.b,a=t.c,l=t.d,u=t.tx,h=t.ty;e=e||0,i=i||2,r=r||n.length/i-e;let c=e*i;for(let f=0;f<r;f++){const d=n[c],m=n[c+1];n[c]=s*d+a*m+u,n[c+1]=o*d+l*m+h,c+=i}}function rm(n,t){if(n===16777215||!t)return t;if(t===16777215||!n)return n;const e=n>>16&255,i=n>>8&255,r=n&255,s=t>>16&255,o=t>>8&255,a=t&255,l=e*s/255,u=i*o/255,h=r*a/255;return(l<<16)+(u<<8)+h}class dh{constructor(){this.batcher=null,this.batch=null,this.applyTransform=!0,this.roundPixels=0}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}packIndex(t,e,i){const r=this.geometryData.indices;for(let s=0;s<this.indexSize;s++)t[e++]=r[s+this.indexOffset]+i-this.vertexOffset}packAttributes(t,e,i,r){const s=this.geometryData,o=this.renderable,a=s.vertices,l=s.uvs,u=this.vertexOffset*2,h=(this.vertexOffset+this.vertexSize)*2,c=this.color,f=c>>16|c&65280|(c&255)<<16;if(this.applyTransform){const d=rm(f,o.groupColor)+(this.alpha*o.groupAlpha*255<<24),m=o.groupTransform,p=r<<16|this.roundPixels&65535,g=m.a,_=m.b,x=m.c,v=m.d,y=m.tx,S=m.ty;for(let A=u;A<h;A+=2){const w=a[A],C=a[A+1];t[i]=g*w+x*C+y,t[i+1]=_*w+v*C+S,t[i+2]=l[A],t[i+3]=l[A+1],e[i+4]=d,e[i+5]=p,i+=6}}else{const d=f+(this.alpha*255<<24);for(let m=u;m<h;m+=2)t[i]=a[m],t[i+1]=a[m+1],t[i+2]=l[m],t[i+3]=l[m+1],e[i+4]=d,e[i+5]=r<<16,i+=6}}get vertSize(){return this.vertexSize}copyTo(t){t.indexOffset=this.indexOffset,t.indexSize=this.indexSize,t.vertexOffset=this.vertexOffset,t.vertexSize=this.vertexSize,t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.geometryData=this.geometryData}reset(){this.applyTransform=!0}}const Mn={extension:{type:B.ShapeBuilder,name:"circle"},build(n,t){let e,i,r,s,o,a;if(n.type==="circle"){const y=n;e=y.x,i=y.y,o=a=y.radius,r=s=0}else if(n.type==="ellipse"){const y=n;e=y.x,i=y.y,o=y.halfWidth,a=y.halfHeight,r=s=0}else{const y=n,S=y.width/2,A=y.height/2;e=y.x+S,i=y.y+A,o=a=Math.max(0,Math.min(y.radius,Math.min(S,A))),r=S-o,s=A-a}if(!(o>=0&&a>=0&&r>=0&&s>=0))return t;const l=Math.ceil(2.3*Math.sqrt(o+a)),u=l*8+(r?4:0)+(s?4:0);if(u===0)return t;if(l===0)return t[0]=t[6]=e+r,t[1]=t[3]=i+s,t[2]=t[4]=e-r,t[5]=t[7]=i-s,t;let h=0,c=l*4+(r?2:0)+2,f=c,d=u,m=r+o,p=s,g=e+m,_=e-m,x=i+p;if(t[h++]=g,t[h++]=x,t[--c]=x,t[--c]=_,s){const y=i-p;t[f++]=_,t[f++]=y,t[--d]=y,t[--d]=g}for(let y=1;y<l;y++){const S=Math.PI/2*(y/l),A=r+Math.cos(S)*o,w=s+Math.sin(S)*a,C=e+A,b=e-A,T=i+w,O=i-w;t[h++]=C,t[h++]=T,t[--c]=T,t[--c]=b,t[f++]=b,t[f++]=O,t[--d]=O,t[--d]=C}m=r,p=s+a,g=e+m,_=e-m,x=i+p;const v=i-p;return t[h++]=g,t[h++]=x,t[--d]=v,t[--d]=g,r&&(t[h++]=_,t[h++]=x,t[--d]=v,t[--d]=_),t},triangulate(n,t,e,i,r,s){if(n.length===0)return;let o=0,a=0;for(let h=0;h<n.length;h+=2)o+=n[h],a+=n[h+1];o/=n.length/2,a/=n.length/2;let l=i;t[l*e]=o,t[l*e+1]=a;const u=l++;for(let h=0;h<n.length;h+=2)t[l*e]=n[h],t[l*e+1]=n[h+1],h>0&&(r[s++]=l,r[s++]=u,r[s++]=l-1),l++;r[s++]=u+1,r[s++]=u,r[s++]=l-1}},sm={...Mn,extension:{...Mn.extension,name:"ellipse"}},om={...Mn,extension:{...Mn.extension,name:"roundedRectangle"}},am=1e-4,hl=1e-4;function lm(n){const t=n.length;if(t<6)return 1;let e=0;for(let i=0,r=n[t-2],s=n[t-1];i<t;i+=2){const o=n[i],a=n[i+1];e+=(o-r)*(a+s),r=o,s=a}return e<0?-1:1}function cl(n,t,e,i,r,s,o,a){const l=n-e*r,u=t-i*r,h=n+e*s,c=t+i*s;let f,d;o?(f=i,d=-e):(f=-i,d=e);const m=l+f,p=u+d,g=h+f,_=c+d;return a.push(m,p),a.push(g,_),2}function Ke(n,t,e,i,r,s,o,a){const l=e-n,u=i-t;let h=Math.atan2(l,u),c=Math.atan2(r-n,s-t);a&&h<c?h+=Math.PI*2:!a&&h>c&&(c+=Math.PI*2);let f=h;const d=c-h,m=Math.abs(d),p=Math.sqrt(l*l+u*u),g=(15*m*Math.sqrt(p)/Math.PI>>0)+1,_=d/g;if(f+=_,a){o.push(n,t),o.push(e,i);for(let x=1,v=f;x<g;x++,v+=_)o.push(n,t),o.push(n+Math.sin(v)*p,t+Math.cos(v)*p);o.push(n,t),o.push(r,s)}else{o.push(e,i),o.push(n,t);for(let x=1,v=f;x<g;x++,v+=_)o.push(n+Math.sin(v)*p,t+Math.cos(v)*p),o.push(n,t);o.push(r,s),o.push(n,t)}return g*2}function um(n,t,e,i,r,s,o,a,l){const u=am;if(n.length===0)return;const h=t;let c=h.alignment;if(t.alignment!==.5){let L=lm(n);c=(c-.5)*L+.5}const f=new Ct(n[0],n[1]),d=new Ct(n[n.length-2],n[n.length-1]),m=i,p=Math.abs(f.x-d.x)<u&&Math.abs(f.y-d.y)<u;if(m){n=n.slice(),p&&(n.pop(),n.pop(),d.set(n[n.length-2],n[n.length-1]));const L=(f.x+d.x)*.5,oe=(d.y+f.y)*.5;n.unshift(L,oe),n.push(L,oe)}const g=r,_=n.length/2;let x=n.length;const v=g.length/2,y=h.width/2,S=y*y,A=h.miterLimit*h.miterLimit;let w=n[0],C=n[1],b=n[2],T=n[3],O=0,N=0,F=-(C-T),M=w-b,E=0,U=0,P=Math.sqrt(F*F+M*M);F/=P,M/=P,F*=y,M*=y;const V=c,I=(1-V)*2,z=V*2;m||(h.cap==="round"?x+=Ke(w-F*(I-z)*.5,C-M*(I-z)*.5,w-F*I,C-M*I,w+F*z,C+M*z,g,!0)+2:h.cap==="square"&&(x+=cl(w,C,F,M,I,z,!0,g))),g.push(w-F*I,C-M*I),g.push(w+F*z,C+M*z);for(let L=1;L<_-1;++L){w=n[(L-1)*2],C=n[(L-1)*2+1],b=n[L*2],T=n[L*2+1],O=n[(L+1)*2],N=n[(L+1)*2+1],F=-(C-T),M=w-b,P=Math.sqrt(F*F+M*M),F/=P,M/=P,F*=y,M*=y,E=-(T-N),U=b-O,P=Math.sqrt(E*E+U*U),E/=P,U/=P,E*=y,U*=y;const oe=b-w,zt=C-T,Yt=b-O,rn=N-T,ba=oe*Yt+zt*rn,Nn=zt*Yt-rn*oe,sn=Nn<0;if(Math.abs(Nn)<.001*Math.abs(ba)){g.push(b-F*I,T-M*I),g.push(b+F*z,T+M*z),ba>=0&&(h.join==="round"?x+=Ke(b,T,b-F*I,T-M*I,b-E*I,T-U*I,g,!1)+4:x+=2,g.push(b-E*z,T-U*z),g.push(b+E*I,T+U*I));continue}const Sa=(-F+w)*(-M+T)-(-F+b)*(-M+C),wa=(-E+O)*(-U+T)-(-E+b)*(-U+N),Vn=(oe*wa-Yt*Sa)/Nn,Wn=(rn*Sa-zt*wa)/Nn,Qr=(Vn-b)*(Vn-b)+(Wn-T)*(Wn-T),Xe=b+(Vn-b)*I,He=T+(Wn-T)*I,je=b-(Vn-b)*z,qe=T-(Wn-T)*z,Lf=Math.min(oe*oe+zt*zt,Yt*Yt+rn*rn),Ca=sn?I:z,Df=Lf+Ca*Ca*S;Qr<=Df?h.join==="bevel"||Qr/S>A?(sn?(g.push(Xe,He),g.push(b+F*z,T+M*z),g.push(Xe,He),g.push(b+E*z,T+U*z)):(g.push(b-F*I,T-M*I),g.push(je,qe),g.push(b-E*I,T-U*I),g.push(je,qe)),x+=2):h.join==="round"?sn?(g.push(Xe,He),g.push(b+F*z,T+M*z),x+=Ke(b,T,b+F*z,T+M*z,b+E*z,T+U*z,g,!0)+4,g.push(Xe,He),g.push(b+E*z,T+U*z)):(g.push(b-F*I,T-M*I),g.push(je,qe),x+=Ke(b,T,b-F*I,T-M*I,b-E*I,T-U*I,g,!1)+4,g.push(b-E*I,T-U*I),g.push(je,qe)):(g.push(Xe,He),g.push(je,qe)):(g.push(b-F*I,T-M*I),g.push(b+F*z,T+M*z),h.join==="round"?sn?x+=Ke(b,T,b+F*z,T+M*z,b+E*z,T+U*z,g,!0)+2:x+=Ke(b,T,b-F*I,T-M*I,b-E*I,T-U*I,g,!1)+2:h.join==="miter"&&Qr/S<=A&&(sn?(g.push(je,qe),g.push(je,qe)):(g.push(Xe,He),g.push(Xe,He)),x+=2),g.push(b-E*I,T-U*I),g.push(b+E*z,T+U*z),x+=2)}w=n[(_-2)*2],C=n[(_-2)*2+1],b=n[(_-1)*2],T=n[(_-1)*2+1],F=-(C-T),M=w-b,P=Math.sqrt(F*F+M*M),F/=P,M/=P,F*=y,M*=y,g.push(b-F*I,T-M*I),g.push(b+F*z,T+M*z),m||(h.cap==="round"?x+=Ke(b-F*(I-z)*.5,T-M*(I-z)*.5,b-F*I,T-M*I,b+F*z,T+M*z,g,!1)+2:h.cap==="square"&&(x+=cl(b,T,F,M,I,z,!1,g)));const ft=hl*hl;for(let L=v;L<x+v-2;++L)w=g[L*2],C=g[L*2+1],b=g[(L+1)*2],T=g[(L+1)*2+1],O=g[(L+2)*2],N=g[(L+2)*2+1],!(Math.abs(w*(T-N)+b*(N-C)+O*(C-T))<ft)&&a.push(L,L+1,L+2)}function ph(n,t,e,i,r,s,o){const a=Ap(n,t,2);if(!a)return;for(let u=0;u<a.length;u+=3)s[o++]=a[u]+r,s[o++]=a[u+1]+r,s[o++]=a[u+2]+r;let l=r*i;for(let u=0;u<n.length;u+=2)e[l]=n[u],e[l+1]=n[u+1],l+=i}const hm=[],cm={extension:{type:B.ShapeBuilder,name:"polygon"},build(n,t){for(let e=0;e<n.points.length;e++)t[e]=n.points[e];return t},triangulate(n,t,e,i,r,s){ph(n,hm,t,e,i,r,s)}},fm={extension:{type:B.ShapeBuilder,name:"rectangle"},build(n,t){const e=n,i=e.x,r=e.y,s=e.width,o=e.height;return s>=0&&o>=0&&(t[0]=i,t[1]=r,t[2]=i+s,t[3]=r,t[4]=i+s,t[5]=r+o,t[6]=i,t[7]=r+o),t},triangulate(n,t,e,i,r,s){let o=0;i*=e,t[i+o]=n[0],t[i+o+1]=n[1],o+=e,t[i+o]=n[2],t[i+o+1]=n[3],o+=e,t[i+o]=n[6],t[i+o+1]=n[7],o+=e,t[i+o]=n[4],t[i+o+1]=n[5],o+=e;const a=i/e;r[s++]=a,r[s++]=a+1,r[s++]=a+2,r[s++]=a+1,r[s++]=a+3,r[s++]=a+2}},dm={extension:{type:B.ShapeBuilder,name:"triangle"},build(n,t){return t[0]=n.x,t[1]=n.y,t[2]=n.x2,t[3]=n.y2,t[4]=n.x3,t[5]=n.y3,t},triangulate(n,t,e,i,r,s){let o=0;i*=e,t[i+o]=n[0],t[i+o+1]=n[1],o+=e,t[i+o]=n[2],t[i+o+1]=n[3],o+=e,t[i+o]=n[4],t[i+o+1]=n[5];const a=i/e;r[s++]=a,r[s++]=a+1,r[s++]=a+2}},Dr={};Ft.handleByMap(B.ShapeBuilder,Dr);Ft.add(fm,cm,dm,Mn,sm,om);const pm=new dt;function mm(n,t){const{geometryData:e,batches:i}=t;i.length=0,e.indices.length=0,e.vertices.length=0,e.uvs.length=0;for(let r=0;r<n.instructions.length;r++){const s=n.instructions[r];if(s.action==="texture")gm(s.data,i,e);else if(s.action==="fill"||s.action==="stroke"){const o=s.action==="stroke",a=s.data.path.shapePath,l=s.data.style,u=s.data.hole;o&&u&&fl(u.shapePath,l,null,!0,i,e),fl(a,l,u,o,i,e)}}}function gm(n,t,e){const{vertices:i,uvs:r,indices:s}=e,o=s.length,a=i.length/2,l=[],u=Dr.rectangle,h=pm,c=n.image;h.x=n.dx,h.y=n.dy,h.width=n.dw,h.height=n.dh;const f=n.transform;u.build(h,l),f&&fh(l,f),u.triangulate(l,i,2,a,s,o);const d=c.uvs;r.push(d.x0,d.y0,d.x1,d.y1,d.x3,d.y3,d.x2,d.y2);const m=Te.get(dh);m.indexOffset=o,m.indexSize=s.length-o,m.vertexOffset=a,m.vertexSize=i.length/2-a,m.color=n.style,m.alpha=n.alpha,m.texture=c,m.geometryData=e,t.push(m)}function fl(n,t,e,i,r,s){const{vertices:o,uvs:a,indices:l}=s,u=n.shapePrimitives.length-1;n.shapePrimitives.forEach(({shape:h,transform:c},f)=>{const d=l.length,m=o.length/2,p=[],g=Dr[h.type];if(g.build(h,p),c&&fh(p,c),i){const y=h.closePath??!0;um(p,t,!1,y,o,2,m,l)}else if(e&&u===f){u!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const y=[],S=p.slice();_m(e.shapePath).forEach(w=>{y.push(S.length/2),S.push(...w)}),ph(S,y,o,2,m,l,d)}else g.triangulate(p,o,2,m,l,d);const _=a.length/2,x=t.texture;if(x!==D.WHITE){const y=t.matrix;y&&(c&&y.append(c.clone().invert()),im(o,2,m,a,_,2,o.length/2-m,y))}else nm(a,_,2,o.length/2-m);const v=Te.get(dh);v.indexOffset=d,v.indexSize=l.length-d,v.vertexOffset=m,v.vertexSize=o.length/2-m,v.color=t.color,v.alpha=t.alpha,v.texture=x,v.geometryData=s,r.push(v)})}function _m(n){if(!n)return[];const t=n.shapePrimitives,e=[];for(let i=0;i<t.length;i++){const r=t[i].shape,s=[];Dr[r.type].build(r,s),e.push(s)}return e}class xm{constructor(){this.batcher=new qp,this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}}class vm{constructor(){this.geometry=new em,this.instructions=new Au}init(){this.instructions.reset()}}const jo=class so{constructor(){this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null)}init(t){so.defaultOptions.bezierSmoothness=(t==null?void 0:t.bezierSmoothness)??so.defaultOptions.bezierSmoothness}getContextRenderData(t){return this._graphicsDataContextHash[t.uid]||this._initContextRenderData(t)}updateGpuContext(t){let e=this._gpuContextHash[t.uid]||this._initContext(t);if(t.dirty){e?this._cleanGraphicsContextData(t):e=this._initContext(t),mm(t,e);const i=t.batchMode;t.customShader||i==="no-batch"?e.isBatchable=!1:i==="auto"&&(e.isBatchable=e.geometryData.vertices.length<400),t.dirty=!1}return e}getGpuContext(t){return this._gpuContextHash[t.uid]||this._initContext(t)}_initContextRenderData(t){const e=Te.get(vm),{batches:i,geometryData:r,batcher:s}=this._gpuContextHash[t.uid],o=r.vertices.length,a=r.indices.length;for(let h=0;h<i.length;h++)i[h].applyTransform=!1;s.ensureAttributeBuffer(o),s.ensureIndexBuffer(a),s.begin();for(let h=0;h<i.length;h++){const c=i[h];s.add(c)}s.finish(e.instructions);const l=e.geometry;l.indexBuffer.setDataWithSize(s.indexBuffer,s.indexSize,!0),l.buffers[0].setDataWithSize(s.attributeBuffer.float32View,s.attributeSize,!0);const u=s.batches;for(let h=0;h<u.length;h++){const c=u[h];c.bindGroup=Wp(c.textures.textures,c.textures.count)}return this._graphicsDataContextHash[t.uid]=e,e}_initContext(t){const e=new xm;return e.context=t,this._gpuContextHash[t.uid]=e,t.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]}onGraphicsContextDestroy(t){this._cleanGraphicsContextData(t),t.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]=null}_cleanGraphicsContextData(t){const e=this._gpuContextHash[t.uid];e.isBatchable||this._graphicsDataContextHash[t.uid]&&(Te.return(this.getContextRenderData(t)),this._graphicsDataContextHash[t.uid]=null),e.batches&&e.batches.forEach(i=>{Te.return(i)})}destroy(){for(const t in this._gpuContextHash)this._gpuContextHash[t]&&this.onGraphicsContextDestroy(this._gpuContextHash[t].context)}};jo.extension={type:[B.WebGLSystem,B.WebGPUSystem,B.CanvasSystem],name:"graphicsContext"};jo.defaultOptions={bezierSmoothness:.5};let mh=jo;const ym=8,er=11920929e-14,bm=1;function gh(n,t,e,i,r,s,o,a,l,u){const c=Math.min(.99,Math.max(0,u??mh.defaultOptions.bezierSmoothness));let f=(bm-c)/1;return f*=f,Sm(t,e,i,r,s,o,a,l,n,f),n}function Sm(n,t,e,i,r,s,o,a,l,u){oo(n,t,e,i,r,s,o,a,l,u,0),l.push(o,a)}function oo(n,t,e,i,r,s,o,a,l,u,h){if(h>ym)return;const c=(n+e)/2,f=(t+i)/2,d=(e+r)/2,m=(i+s)/2,p=(r+o)/2,g=(s+a)/2,_=(c+d)/2,x=(f+m)/2,v=(d+p)/2,y=(m+g)/2,S=(_+v)/2,A=(x+y)/2;if(h>0){let w=o-n,C=a-t;const b=Math.abs((e-o)*C-(i-a)*w),T=Math.abs((r-o)*C-(s-a)*w);if(b>er&&T>er){if((b+T)*(b+T)<=u*(w*w+C*C)){l.push(S,A);return}}else if(b>er){if(b*b<=u*(w*w+C*C)){l.push(S,A);return}}else if(T>er){if(T*T<=u*(w*w+C*C)){l.push(S,A);return}}else if(w=S-(n+o)/2,C=A-(t+a)/2,w*w+C*C<=u){l.push(S,A);return}}oo(n,t,c,f,_,x,S,A,l,u,h+1),oo(S,A,v,y,p,g,o,a,l,u,h+1)}const wm=8,Cm=11920929e-14,Am=1;function Tm(n,t,e,i,r,s,o,a){const u=Math.min(.99,Math.max(0,a??mh.defaultOptions.bezierSmoothness));let h=(Am-u)/1;return h*=h,Pm(t,e,i,r,s,o,n,h),n}function Pm(n,t,e,i,r,s,o,a){ao(o,n,t,e,i,r,s,a,0),o.push(r,s)}function ao(n,t,e,i,r,s,o,a,l){if(l>wm)return;const u=(t+i)/2,h=(e+r)/2,c=(i+s)/2,f=(r+o)/2,d=(u+c)/2,m=(h+f)/2;let p=s-t,g=o-e;const _=Math.abs((i-s)*g-(r-o)*p);if(_>Cm){if(_*_<=a*(p*p+g*g)){n.push(d,m);return}}else if(p=d-(t+s)/2,g=m-(e+o)/2,p*p+g*g<=a){n.push(d,m);return}ao(n,t,e,u,h,d,m,a,l+1),ao(n,d,m,c,f,s,o,a,l+1)}function _h(n,t,e,i,r,s,o,a){let l=Math.abs(r-s);(!o&&r>s||o&&s>r)&&(l=2*Math.PI-l),a=a||Math.max(6,Math.floor(6*Math.pow(i,1/3)*(l/Math.PI))),a=Math.max(a,3);let u=l/a,h=r;u*=o?-1:1;for(let c=0;c<a+1;c++){const f=Math.cos(h),d=Math.sin(h),m=t+f*i,p=e+d*i;n.push(m,p),h+=u}}function Fm(n,t,e,i,r,s){const o=n[n.length-2],l=n[n.length-1]-e,u=o-t,h=r-e,c=i-t,f=Math.abs(l*c-u*h);if(f<1e-8||s===0){(n[n.length-2]!==t||n[n.length-1]!==e)&&n.push(t,e);return}const d=l*l+u*u,m=h*h+c*c,p=l*h+u*c,g=s*Math.sqrt(d)/f,_=s*Math.sqrt(m)/f,x=g*p/d,v=_*p/m,y=g*c+_*u,S=g*h+_*l,A=u*(_+x),w=l*(_+x),C=c*(g+v),b=h*(g+v),T=Math.atan2(w-S,A-y),O=Math.atan2(b-S,C-y);_h(n,y+t,S+e,s,T,O,u*h>c*l)}const vn=Math.PI*2,As={centerX:0,centerY:0,ang1:0,ang2:0},Ts=({x:n,y:t},e,i,r,s,o,a,l)=>{n*=e,t*=i;const u=r*n-s*t,h=s*n+r*t;return l.x=u+o,l.y=h+a,l};function Mm(n,t){const e=t===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(t/4),i=t===1.5707963267948966?.551915024494:e,r=Math.cos(n),s=Math.sin(n),o=Math.cos(n+t),a=Math.sin(n+t);return[{x:r-s*i,y:s+r*i},{x:o+a*i,y:a-o*i},{x:o,y:a}]}const dl=(n,t,e,i)=>{const r=n*i-t*e<0?-1:1;let s=n*e+t*i;return s>1&&(s=1),s<-1&&(s=-1),r*Math.acos(s)},Im=(n,t,e,i,r,s,o,a,l,u,h,c,f)=>{const d=Math.pow(r,2),m=Math.pow(s,2),p=Math.pow(h,2),g=Math.pow(c,2);let _=d*m-d*g-m*p;_<0&&(_=0),_/=d*g+m*p,_=Math.sqrt(_)*(o===a?-1:1);const x=_*r/s*c,v=_*-s/r*h,y=u*x-l*v+(n+e)/2,S=l*x+u*v+(t+i)/2,A=(h-x)/r,w=(c-v)/s,C=(-h-x)/r,b=(-c-v)/s,T=dl(1,0,A,w);let O=dl(A,w,C,b);a===0&&O>0&&(O-=vn),a===1&&O<0&&(O+=vn),f.centerX=y,f.centerY=S,f.ang1=T,f.ang2=O};function Em(n,t,e,i,r,s,o,a=0,l=0,u=0){if(s===0||o===0)return;const h=Math.sin(a*vn/360),c=Math.cos(a*vn/360),f=c*(t-i)/2+h*(e-r)/2,d=-h*(t-i)/2+c*(e-r)/2;if(f===0&&d===0)return;s=Math.abs(s),o=Math.abs(o);const m=Math.pow(f,2)/Math.pow(s,2)+Math.pow(d,2)/Math.pow(o,2);m>1&&(s*=Math.sqrt(m),o*=Math.sqrt(m)),Im(t,e,i,r,s,o,l,u,h,c,f,d,As);let{ang1:p,ang2:g}=As;const{centerX:_,centerY:x}=As;let v=Math.abs(g)/(vn/4);Math.abs(1-v)<1e-7&&(v=1);const y=Math.max(Math.ceil(v),1);g/=y;let S=n[n.length-2],A=n[n.length-1];const w={x:0,y:0};for(let C=0;C<y;C++){const b=Mm(p,g),{x:T,y:O}=Ts(b[0],s,o,c,h,_,x,w),{x:N,y:F}=Ts(b[1],s,o,c,h,_,x,w),{x:M,y:E}=Ts(b[2],s,o,c,h,_,x,w);gh(n,S,A,T,O,N,F,M,E),S=M,A=E,p+=g}}function zm(n,t,e){const i=(o,a)=>{const l=a.x-o.x,u=a.y-o.y,h=Math.sqrt(l*l+u*u),c=l/h,f=u/h;return{len:h,nx:c,ny:f}},r=(o,a)=>{o===0?n.moveTo(a.x,a.y):n.lineTo(a.x,a.y)};let s=t[t.length-1];for(let o=0;o<t.length;o++){const a=t[o%t.length],l=a.radius??e;if(l<=0){r(o,a),s=a;continue}const u=t[(o+1)%t.length],h=i(a,s),c=i(a,u);if(h.len<1e-4||c.len<1e-4){r(o,a),s=a;continue}let f=Math.asin(h.nx*c.ny-h.ny*c.nx),d=1,m=!1;h.nx*c.nx-h.ny*-c.ny<0?f<0?f=Math.PI+f:(f=Math.PI-f,d=-1,m=!0):f>0&&(d=-1,m=!0);const p=f/2;let g,_=Math.abs(Math.cos(p)*l/Math.sin(p));_>Math.min(h.len/2,c.len/2)?(_=Math.min(h.len/2,c.len/2),g=Math.abs(_*Math.sin(p)/Math.cos(p))):g=l;const x=a.x+c.nx*_+-c.ny*g*d,v=a.y+c.ny*_+c.nx*g*d,y=Math.atan2(h.ny,h.nx)+Math.PI/2*d,S=Math.atan2(c.ny,c.nx)-Math.PI/2*d;o===0&&n.moveTo(x+Math.cos(y)*g,v+Math.sin(y)*g),n.arc(x,v,g,y,S,m),s=a}}function Om(n,t,e,i){const r=(a,l)=>Math.sqrt((a.x-l.x)**2+(a.y-l.y)**2),s=(a,l,u)=>({x:a.x+(l.x-a.x)*u,y:a.y+(l.y-a.y)*u}),o=t.length;for(let a=0;a<o;a++){const l=t[(a+1)%o],u=l.radius??e;if(u<=0){a===0?n.moveTo(l.x,l.y):n.lineTo(l.x,l.y);continue}const h=t[a],c=t[(a+2)%o],f=r(h,l);let d;if(f<1e-4)d=l;else{const g=Math.min(f/2,u);d=s(l,h,g/f)}const m=r(c,l);let p;if(m<1e-4)p=l;else{const g=Math.min(m/2,u);p=s(l,c,g/m)}a===0?n.moveTo(d.x,d.y):n.lineTo(d.x,d.y),n.quadraticCurveTo(l.x,l.y,p.x,p.y,i)}}const Rm=new dt;class km{constructor(t){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new ve,this._graphicsPath2D=t}moveTo(t,e){return this.startPoly(t,e),this}lineTo(t,e){this._ensurePoly();const i=this._currentPoly.points,r=i[i.length-2],s=i[i.length-1];return(r!==t||s!==e)&&i.push(t,e),this}arc(t,e,i,r,s,o){this._ensurePoly(!1);const a=this._currentPoly.points;return _h(a,t,e,i,r,s,o),this}arcTo(t,e,i,r,s){this._ensurePoly();const o=this._currentPoly.points;return Fm(o,t,e,i,r,s),this}arcToSvg(t,e,i,r,s,o,a){const l=this._currentPoly.points;return Em(l,this._currentPoly.lastX,this._currentPoly.lastY,o,a,t,e,i,r,s),this}bezierCurveTo(t,e,i,r,s,o,a){this._ensurePoly();const l=this._currentPoly;return gh(this._currentPoly.points,l.lastX,l.lastY,t,e,i,r,s,o,a),this}quadraticCurveTo(t,e,i,r,s){this._ensurePoly();const o=this._currentPoly;return Tm(this._currentPoly.points,o.lastX,o.lastY,t,e,i,r,s),this}closePath(){return this.endPoly(!0),this}addPath(t,e){this.endPoly(),e&&!e.isIdentity()&&(t=t.clone(!0),t.transform(e));for(let i=0;i<t.instructions.length;i++){const r=t.instructions[i];this[r.action](...r.data)}return this}finish(t=!1){this.endPoly(t)}rect(t,e,i,r,s){return this.drawShape(new dt(t,e,i,r),s),this}circle(t,e,i,r){return this.drawShape(new Yo(t,e,i),r),this}poly(t,e,i){const r=new xn(t);return r.closePath=e,this.drawShape(r,i),this}regularPoly(t,e,i,r,s=0,o){r=Math.max(r|0,3);const a=-1*Math.PI/2+s,l=Math.PI*2/r,u=[];for(let h=0;h<r;h++){const c=h*l+a;u.push(t+i*Math.cos(c),e+i*Math.sin(c))}return this.poly(u,!0,o),this}roundPoly(t,e,i,r,s,o=0,a){if(r=Math.max(r|0,3),s<=0)return this.regularPoly(t,e,i,r,o);const l=i*Math.sin(Math.PI/r)-.001;s=Math.min(s,l);const u=-1*Math.PI/2+o,h=Math.PI*2/r,c=(r-2)*Math.PI/r/2;for(let f=0;f<r;f++){const d=f*h+u,m=t+i*Math.cos(d),p=e+i*Math.sin(d),g=d+Math.PI+c,_=d-Math.PI-c,x=m+s*Math.cos(g),v=p+s*Math.sin(g),y=m+s*Math.cos(_),S=p+s*Math.sin(_);f===0?this.moveTo(x,v):this.lineTo(x,v),this.quadraticCurveTo(m,p,y,S,a)}return this.closePath()}roundShape(t,e,i=!1,r){return t.length<3?this:(i?Om(this,t,e,r):zm(this,t,e),this.closePath())}filletRect(t,e,i,r,s){if(s===0)return this.rect(t,e,i,r);const o=Math.min(i,r)/2,a=Math.min(o,Math.max(-o,s)),l=t+i,u=e+r,h=a<0?-a:0,c=Math.abs(a);return this.moveTo(t,e+c).arcTo(t+h,e+h,t+c,e,c).lineTo(l-c,e).arcTo(l-h,e+h,l,e+c,c).lineTo(l,u-c).arcTo(l-h,u-h,t+i-c,u,c).lineTo(t+c,u).arcTo(t+h,u-h,t,u-c,c).closePath()}chamferRect(t,e,i,r,s,o){if(s<=0)return this.rect(t,e,i,r);const a=Math.min(s,Math.min(i,r)/2),l=t+i,u=e+r,h=[t+a,e,l-a,e,l,e+a,l,u-a,l-a,u,t+a,u,t,u-a,t,e+a];for(let c=h.length-1;c>=2;c-=2)h[c]===h[c-2]&&h[c-1]===h[c-3]&&h.splice(c-1,2);return this.poly(h,!0,o)}ellipse(t,e,i,r,s){return this.drawShape(new Xo(t,e,i,r),s),this}roundRect(t,e,i,r,s,o){return this.drawShape(new Ho(t,e,i,r,s),o),this}drawShape(t,e){return this.endPoly(),this.shapePrimitives.push({shape:t,transform:e}),this}startPoly(t,e){let i=this._currentPoly;return i&&this.endPoly(),i=new xn,i.points.push(t,e),this._currentPoly=i,this}endPoly(t=!1){const e=this._currentPoly;return e&&e.points.length>2&&(e.closePath=t,this.shapePrimitives.push({shape:e})),this._currentPoly=null,this}_ensurePoly(t=!0){if(!this._currentPoly&&(this._currentPoly=new xn,t)){const e=this.shapePrimitives[this.shapePrimitives.length-1];if(e){let i=e.shape.x,r=e.shape.y;if(e.transform&&!e.transform.isIdentity()){const s=e.transform,o=i;i=s.a*i+s.c*r+s.tx,r=s.b*o+s.d*r+s.ty}this._currentPoly.points.push(i,r)}else this._currentPoly.points.push(0,0)}}buildPath(){const t=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let e=0;e<t.instructions.length;e++){const i=t.instructions[e];this[i.action](...i.data)}this.finish()}get bounds(){const t=this._bounds;t.clear();const e=this.shapePrimitives;for(let i=0;i<e.length;i++){const r=e[i],s=r.shape.getBounds(Rm);r.transform?t.addRect(s,r.transform):t.addRect(s)}return t}}class Xi{constructor(t){this.instructions=[],this.uid=_t("graphicsPath"),this._dirty=!0,typeof t=="string"?Lp(t,this):this.instructions=(t==null?void 0:t.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new km(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(t,e){return t=t.clone(),this.instructions.push({action:"addPath",data:[t,e]}),this._dirty=!0,this}arc(...t){return this.instructions.push({action:"arc",data:t}),this._dirty=!0,this}arcTo(...t){return this.instructions.push({action:"arcTo",data:t}),this._dirty=!0,this}arcToSvg(...t){return this.instructions.push({action:"arcToSvg",data:t}),this._dirty=!0,this}bezierCurveTo(...t){return this.instructions.push({action:"bezierCurveTo",data:t}),this._dirty=!0,this}bezierCurveToShort(t,e,i,r,s){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(Ct.shared);let l=0,u=0;if(!o||o.action!=="bezierCurveTo")l=a.x,u=a.y;else{l=o.data[2],u=o.data[3];const h=a.x,c=a.y;l=h+(h-l),u=c+(c-u)}return this.instructions.push({action:"bezierCurveTo",data:[l,u,t,e,i,r,s]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...t){return this.instructions.push({action:"ellipse",data:t}),this._dirty=!0,this}lineTo(...t){return this.instructions.push({action:"lineTo",data:t}),this._dirty=!0,this}moveTo(...t){return this.instructions.push({action:"moveTo",data:t}),this}quadraticCurveTo(...t){return this.instructions.push({action:"quadraticCurveTo",data:t}),this._dirty=!0,this}quadraticCurveToShort(t,e,i){const r=this.instructions[this.instructions.length-1],s=this.getLastPoint(Ct.shared);let o=0,a=0;if(!r||r.action!=="quadraticCurveTo")o=s.x,a=s.y;else{o=r.data[0],a=r.data[1];const l=s.x,u=s.y;o=l+(l-o),a=u+(u-a)}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,t,e,i]}),this._dirty=!0,this}rect(t,e,i,r,s){return this.instructions.push({action:"rect",data:[t,e,i,r,s]}),this._dirty=!0,this}circle(t,e,i,r){return this.instructions.push({action:"circle",data:[t,e,i,r]}),this._dirty=!0,this}roundRect(...t){return this.instructions.push({action:"roundRect",data:t}),this._dirty=!0,this}poly(...t){return this.instructions.push({action:"poly",data:t}),this._dirty=!0,this}regularPoly(...t){return this.instructions.push({action:"regularPoly",data:t}),this._dirty=!0,this}roundPoly(...t){return this.instructions.push({action:"roundPoly",data:t}),this._dirty=!0,this}roundShape(...t){return this.instructions.push({action:"roundShape",data:t}),this._dirty=!0,this}filletRect(...t){return this.instructions.push({action:"filletRect",data:t}),this._dirty=!0,this}chamferRect(...t){return this.instructions.push({action:"chamferRect",data:t}),this._dirty=!0,this}star(t,e,i,r,s,o,a){s=s||r/2;const l=-1*Math.PI/2+o,u=i*2,h=Math.PI*2/u,c=[];for(let f=0;f<u;f++){const d=f%2?s:r,m=f*h+l;c.push(t+d*Math.cos(m),e+d*Math.sin(m))}return this.poly(c,!0,a),this}clone(t=!1){const e=new Xi;if(!t)e.instructions=this.instructions.slice();else for(let i=0;i<this.instructions.length;i++){const r=this.instructions[i];e.instructions.push({action:r.action,data:r.data.slice()})}return e}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(t){if(t.isIdentity())return this;const e=t.a,i=t.b,r=t.c,s=t.d,o=t.tx,a=t.ty;let l=0,u=0,h=0,c=0,f=0,d=0,m=0,p=0;for(let g=0;g<this.instructions.length;g++){const _=this.instructions[g],x=_.data;switch(_.action){case"moveTo":case"lineTo":l=x[0],u=x[1],x[0]=e*l+r*u+o,x[1]=i*l+s*u+a;break;case"bezierCurveTo":h=x[0],c=x[1],f=x[2],d=x[3],l=x[4],u=x[5],x[0]=e*h+r*c+o,x[1]=i*h+s*c+a,x[2]=e*f+r*d+o,x[3]=i*f+s*d+a,x[4]=e*l+r*u+o,x[5]=i*l+s*u+a;break;case"quadraticCurveTo":h=x[0],c=x[1],l=x[2],u=x[3],x[0]=e*h+r*c+o,x[1]=i*h+s*c+a,x[2]=e*l+r*u+o,x[3]=i*l+s*u+a;break;case"arcToSvg":l=x[5],u=x[6],m=x[0],p=x[1],x[0]=e*m+r*p,x[1]=i*m+s*p,x[5]=e*l+r*u+o,x[6]=i*l+s*u+a;break;case"circle":x[4]=un(x[3],t);break;case"rect":x[4]=un(x[4],t);break;case"ellipse":x[8]=un(x[8],t);break;case"roundRect":x[5]=un(x[5],t);break;case"addPath":x[0].transform(t);break;case"poly":x[2]=un(x[2],t);break;default:xt("unknown transform action",_.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(t){let e=this.instructions.length-1,i=this.instructions[e];if(!i)return t.x=0,t.y=0,t;for(;i.action==="closePath";){if(e--,e<0)return t.x=0,t.y=0,t;i=this.instructions[e]}switch(i.action){case"moveTo":case"lineTo":t.x=i.data[0],t.y=i.data[1];break;case"quadraticCurveTo":t.x=i.data[2],t.y=i.data[3];break;case"bezierCurveTo":t.x=i.data[4],t.y=i.data[5];break;case"arc":case"arcToSvg":t.x=i.data[5],t.y=i.data[6];break;case"addPath":i.data[0].getLastPoint(t);break}return t}}function un(n,t){return n?n.prepend(t):t.clone()}function Bm(n,t){if(typeof n=="string"){const i=document.createElement("div");i.innerHTML=n.trim(),n=i.querySelector("svg")}const e={context:t,path:new Xi};return xh(n,e,null,null),t}function xh(n,t,e,i){const r=n.children,{fillStyle:s,strokeStyle:o}=Um(n);s&&e?e={...e,...s}:s&&(e=s),o&&i?i={...i,...o}:o&&(i=o),t.context.fillStyle=e,t.context.strokeStyle=i;let a,l,u,h,c,f,d,m,p,g,_,x,v,y,S,A,w;switch(n.nodeName.toLowerCase()){case"path":y=n.getAttribute("d"),S=new Xi(y),t.context.path(S),e&&t.context.fill(),i&&t.context.stroke();break;case"circle":d=vt(n,"cx",0),m=vt(n,"cy",0),p=vt(n,"r",0),t.context.ellipse(d,m,p,p),e&&t.context.fill(),i&&t.context.stroke();break;case"rect":a=vt(n,"x",0),l=vt(n,"y",0),A=vt(n,"width",0),w=vt(n,"height",0),g=vt(n,"rx",0),_=vt(n,"ry",0),g||_?t.context.roundRect(a,l,A,w,g||_):t.context.rect(a,l,A,w),e&&t.context.fill(),i&&t.context.stroke();break;case"ellipse":d=vt(n,"cx",0),m=vt(n,"cy",0),g=vt(n,"rx",0),_=vt(n,"ry",0),t.context.beginPath(),t.context.ellipse(d,m,g,_),e&&t.context.fill(),i&&t.context.stroke();break;case"line":u=vt(n,"x1",0),h=vt(n,"y1",0),c=vt(n,"x2",0),f=vt(n,"y2",0),t.context.beginPath(),t.context.moveTo(u,h),t.context.lineTo(c,f),i&&t.context.stroke();break;case"polygon":v=n.getAttribute("points"),x=v.match(/\d+/g).map(C=>parseInt(C,10)),t.context.poly(x,!0),e&&t.context.fill(),i&&t.context.stroke();break;case"polyline":v=n.getAttribute("points"),x=v.match(/\d+/g).map(C=>parseInt(C,10)),t.context.poly(x,!1),i&&t.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${n.nodeName}> elements unsupported`);break}}for(let C=0;C<r.length;C++)xh(r[C],t,e,i)}function vt(n,t,e){const i=n.getAttribute(t);return i?Number(i):e}function Um(n){const t=n.getAttribute("style"),e={},i={};let r=!1,s=!1;if(t){const o=t.split(";");for(let a=0;a<o.length;a++){const l=o[a],[u,h]=l.split(":");switch(u){case"stroke":h!=="none"&&(e.color=j.shared.setValue(h).toNumber(),s=!0);break;case"stroke-width":e.width=Number(h);break;case"fill":h!=="none"&&(r=!0,i.color=j.shared.setValue(h).toNumber());break;case"fill-opacity":i.alpha=Number(h);break;case"stroke-opacity":e.alpha=Number(h);break;case"opacity":i.alpha=Number(h),e.alpha=Number(h);break}}}else{const o=n.getAttribute("stroke");o&&o!=="none"&&(s=!0,e.color=j.shared.setValue(o).toNumber(),e.width=vt(n,"stroke-width",1));const a=n.getAttribute("fill");a&&a!=="none"&&(r=!0,i.color=j.shared.setValue(a).toNumber())}return{strokeStyle:s?e:null,fillStyle:r?i:null}}function Lm(n){return j.isColorLike(n)}function pl(n){return n instanceof Lr}function ml(n){return n instanceof De}function Dm(n,t,e){const i=j.shared.setValue(t??0);return n.color=i.toNumber(),n.alpha=i.alpha===1?e.alpha:i.alpha,n.texture=D.WHITE,{...e,...n}}function gl(n,t,e){return n.fill=t,n.color=16777215,n.texture=t.texture,n.matrix=t.transform,{...e,...n}}function _l(n,t,e){return t.buildLinearGradient(),n.fill=t,n.color=16777215,n.texture=t.texture,n.matrix=t.transform,{...e,...n}}function Gm(n,t){var r;const e={...t,...n};if(e.texture){if(e.texture!==D.WHITE){const o=((r=e.matrix)==null?void 0:r.invert())||new J;o.translate(e.texture.frame.x,e.texture.frame.y),o.scale(1/e.texture.source.width,1/e.texture.source.height),e.matrix=o}const s=e.texture.source.style;s.addressMode==="clamp-to-edge"&&(s.addressMode="repeat",s.update())}const i=j.shared.setValue(e.color);return e.alpha*=i.alpha,e.color=i.toNumber(),e.matrix=e.matrix?e.matrix.clone():null,e}function oi(n,t){if(n==null)return null;const e={},i=n;return Lm(n)?Dm(e,n,t):pl(n)?gl(e,n,t):ml(n)?_l(e,n,t):i.fill&&pl(i.fill)?gl(i,i.fill,t):i.fill&&ml(i.fill)?_l(i,i.fill,t):Gm(i,t)}function Sr(n,t){const{width:e,alignment:i,miterLimit:r,cap:s,join:o,...a}=t,l=oi(n,a);return l?{width:e,alignment:i,miterLimit:r,cap:s,join:o,...l}:null}const Nm=new Ct,xl=new J,qo=class de extends Et{constructor(){super(...arguments),this.uid=_t("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new Xi,this._transform=new J,this._fillStyle={...de.defaultFillStyle},this._strokeStyle={...de.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new ve,this._boundsDirty=!0}clone(){const t=new de;return t.batchMode=this.batchMode,t.instructions=this.instructions.slice(),t._activePath=this._activePath.clone(),t._transform=this._transform.clone(),t._fillStyle={...this._fillStyle},t._strokeStyle={...this._strokeStyle},t._stateStack=this._stateStack.slice(),t._bounds=this._bounds.clone(),t._boundsDirty=!0,t}get fillStyle(){return this._fillStyle}set fillStyle(t){this._fillStyle=oi(t,de.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(t){this._strokeStyle=Sr(t,de.defaultStrokeStyle)}setFillStyle(t){return this._fillStyle=oi(t,de.defaultFillStyle),this}setStrokeStyle(t){return this._strokeStyle=oi(t,de.defaultStrokeStyle),this}texture(t,e,i,r,s,o){return this.instructions.push({action:"texture",data:{image:t,dx:i||0,dy:r||0,dw:s||t.frame.width,dh:o||t.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:e?j.shared.setValue(e).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new Xi,this}fill(t,e){let i;const r=this.instructions[this.instructions.length-1];return this._tick===0&&r&&r.action==="stroke"?i=r.data.path:i=this._activePath.clone(),i?(t!=null&&(e!==void 0&&typeof t=="number"&&(k(Q,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),t={color:t,alpha:e}),this._fillStyle=oi(t,de.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:i}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:t,y:e}=this._activePath.getLastPoint(Ct.shared);this._activePath.clear(),this._activePath.moveTo(t,e)}stroke(t){let e;const i=this.instructions[this.instructions.length-1];return this._tick===0&&i&&i.action==="fill"?e=i.data.path:e=this._activePath.clone(),e?(t!=null&&(this._strokeStyle=Sr(t,de.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:e}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let t=0;t<2;t++){const e=this.instructions[this.instructions.length-1-t],i=this._activePath.clone();if(e&&(e.action==="stroke"||e.action==="fill"))if(e.data.hole)e.data.hole.addPath(i);else{e.data.hole=i;break}}return this._initNextPathLocation(),this}arc(t,e,i,r,s,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*t+a.c*e+a.tx,a.b*t+a.d*e+a.ty,i,r,s,o),this}arcTo(t,e,i,r,s){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*i+o.c*r+o.tx,o.b*i+o.d*r+o.ty,s),this}arcToSvg(t,e,i,r,s,o,a){this._tick++;const l=this._transform;return this._activePath.arcToSvg(t,e,i,r,s,l.a*o+l.c*a+l.tx,l.b*o+l.d*a+l.ty),this}bezierCurveTo(t,e,i,r,s,o,a){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*t+l.c*e+l.tx,l.b*t+l.d*e+l.ty,l.a*i+l.c*r+l.tx,l.b*i+l.d*r+l.ty,l.a*s+l.c*o+l.tx,l.b*s+l.d*o+l.ty,a),this}closePath(){var t;return this._tick++,(t=this._activePath)==null||t.closePath(),this}ellipse(t,e,i,r){return this._tick++,this._activePath.ellipse(t,e,i,r,this._transform.clone()),this}circle(t,e,i){return this._tick++,this._activePath.circle(t,e,i,this._transform.clone()),this}path(t){return this._tick++,this._activePath.addPath(t,this._transform.clone()),this}lineTo(t,e){this._tick++;const i=this._transform;return this._activePath.lineTo(i.a*t+i.c*e+i.tx,i.b*t+i.d*e+i.ty),this}moveTo(t,e){this._tick++;const i=this._transform,r=this._activePath.instructions,s=i.a*t+i.c*e+i.tx,o=i.b*t+i.d*e+i.ty;return r.length===1&&r[0].action==="moveTo"?(r[0].data[0]=s,r[0].data[1]=o,this):(this._activePath.moveTo(s,o),this)}quadraticCurveTo(t,e,i,r,s){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*i+o.c*r+o.tx,o.b*i+o.d*r+o.ty,s),this}rect(t,e,i,r){return this._tick++,this._activePath.rect(t,e,i,r,this._transform.clone()),this}roundRect(t,e,i,r,s){return this._tick++,this._activePath.roundRect(t,e,i,r,s,this._transform.clone()),this}poly(t,e){return this._tick++,this._activePath.poly(t,e,this._transform.clone()),this}regularPoly(t,e,i,r,s=0,o){return this._tick++,this._activePath.regularPoly(t,e,i,r,s,o),this}roundPoly(t,e,i,r,s,o){return this._tick++,this._activePath.roundPoly(t,e,i,r,s,o),this}roundShape(t,e,i,r){return this._tick++,this._activePath.roundShape(t,e,i,r),this}filletRect(t,e,i,r,s){return this._tick++,this._activePath.filletRect(t,e,i,r,s),this}chamferRect(t,e,i,r,s,o){return this._tick++,this._activePath.chamferRect(t,e,i,r,s,o),this}star(t,e,i,r,s=0,o=0){return this._tick++,this._activePath.star(t,e,i,r,s,o,this._transform.clone()),this}svg(t){return this._tick++,Bm(t,this),this}restore(){const t=this._stateStack.pop();return t&&(this._transform=t.transform,this._fillStyle=t.fillStyle,this._strokeStyle=t.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(t){return this._transform.rotate(t),this}scale(t,e=t){return this._transform.scale(t,e),this}setTransform(t,e,i,r,s,o){return t instanceof J?(this._transform.set(t.a,t.b,t.c,t.d,t.tx,t.ty),this):(this._transform.set(t,e,i,r,s,o),this)}transform(t,e,i,r,s,o){return t instanceof J?(this._transform.append(t),this):(xl.set(t,e,i,r,s,o),this._transform.append(xl),this)}translate(t,e=t){return this._transform.translate(t,e),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;const t=this._bounds;t.clear();for(let e=0;e<this.instructions.length;e++){const i=this.instructions[e],r=i.action;if(r==="fill"){const s=i.data;t.addBounds(s.path.bounds)}else if(r==="texture"){const s=i.data;t.addFrame(s.dx,s.dy,s.dx+s.dw,s.dy+s.dh,s.transform)}if(r==="stroke"){const s=i.data,o=s.style.width/2,a=s.path.bounds;t.addFrame(a.minX-o,a.minY-o,a.maxX+o,a.maxY+o)}}return t}containsPoint(t){var r;if(!this.bounds.containsPoint(t.x,t.y))return!1;const e=this.instructions;let i=!1;for(let s=0;s<e.length;s++){const o=e[s],a=o.data,l=a.path;if(!o.action||!l)continue;const u=a.style,h=l.shapePath.shapePrimitives;for(let c=0;c<h.length;c++){const f=h[c].shape;if(!u||!f)continue;const d=h[c].transform,m=d?d.applyInverse(t,Nm):t;o.action==="fill"?i=f.contains(m.x,m.y):i=f.strokeContains(m.x,m.y,u.width);const p=a.hole;if(p){const g=(r=p.shapePath)==null?void 0:r.shapePrimitives;if(g)for(let _=0;_<g.length;_++)g[_].shape.contains(m.x,m.y)&&(i=!1)}if(i)return!0}}return i}destroy(t=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const i=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(i),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(i)}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};qo.defaultFillStyle={color:16777215,alpha:1,texture:D.WHITE,matrix:null,fill:null};qo.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:D.WHITE,matrix:null,fill:null};let Jt=qo;const vl=["align","breakWords","cssOverrides","fontVariant","fontWeight","leading","letterSpacing","lineHeight","padding","textBaseline","trim","whiteSpace","wordWrap","wordWrapWidth","fontFamily","fontStyle","fontSize"];function Vm(n){const t=[];let e=0;for(let i=0;i<vl.length;i++){const r=`_${vl[i]}`;t[e++]=n[r]}return e=vh(n._fill,t,e),e=Wm(n._stroke,t,e),e=$m(n.dropShadow,t,e),t.join("-")}function vh(n,t,e){var i;return n&&(t[e++]=n.color,t[e++]=n.alpha,t[e++]=(i=n.fill)==null?void 0:i.styleKey),e}function Wm(n,t,e){return n&&(e=vh(n,t,e),t[e++]=n.width,t[e++]=n.alignment,t[e++]=n.cap,t[e++]=n.join,t[e++]=n.miterLimit),e}function $m(n,t,e){return n&&(t[e++]=n.alpha,t[e++]=n.angle,t[e++]=n.blur,t[e++]=n.distance,t[e++]=j.shared.setValue(n.color).toNumber()),e}const Ko=class Mi extends Et{constructor(t={}){super(),Ym(t);const e={...Mi.defaultTextStyle,...t};for(const i in e){const r=i;this[r]=e[i]}this.update()}get align(){return this._align}set align(t){this._align=t,this.update()}get breakWords(){return this._breakWords}set breakWords(t){this._breakWords=t,this.update()}get dropShadow(){return this._dropShadow}set dropShadow(t){t!==null&&typeof t=="object"?this._dropShadow=this._createProxy({...Mi.defaultDropShadow,...t}):this._dropShadow=t?this._createProxy({...Mi.defaultDropShadow}):null,this.update()}get fontFamily(){return this._fontFamily}set fontFamily(t){this._fontFamily=t,this.update()}get fontSize(){return this._fontSize}set fontSize(t){typeof t=="string"?this._fontSize=parseInt(t,10):this._fontSize=t,this.update()}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle=t,this.update()}get fontVariant(){return this._fontVariant}set fontVariant(t){this._fontVariant=t,this.update()}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight=t,this.update()}get leading(){return this._leading}set leading(t){this._leading=t,this.update()}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing=t,this.update()}get lineHeight(){return this._lineHeight}set lineHeight(t){this._lineHeight=t,this.update()}get padding(){return this._padding}set padding(t){this._padding=t,this.update()}get trim(){return this._trim}set trim(t){this._trim=t,this.update()}get textBaseline(){return this._textBaseline}set textBaseline(t){this._textBaseline=t,this.update()}get whiteSpace(){return this._whiteSpace}set whiteSpace(t){this._whiteSpace=t,this.update()}get wordWrap(){return this._wordWrap}set wordWrap(t){this._wordWrap=t,this.update()}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(t){this._wordWrapWidth=t,this.update()}get fill(){return this._originalFill}set fill(t){t!==this._originalFill&&(this._originalFill=t,this._isFillStyle(t)&&(this._originalFill=this._createProxy({...Jt.defaultFillStyle,...t},()=>{this._fill=oi({...this._originalFill},Jt.defaultFillStyle)})),this._fill=oi(t===0?"black":t,Jt.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(t){t!==this._originalStroke&&(this._originalStroke=t,this._isFillStyle(t)&&(this._originalStroke=this._createProxy({...Jt.defaultStrokeStyle,...t},()=>{this._stroke=Sr({...this._originalStroke},Jt.defaultStrokeStyle)})),this._stroke=Sr(t,Jt.defaultStrokeStyle),this.update())}_generateKey(){return this._styleKey=Vm(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this)}reset(){const t=Mi.defaultTextStyle;for(const e in t)this[e]=t[e]}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new Mi({align:this.align,breakWords:this.breakWords,dropShadow:this._dropShadow?{...this._dropShadow}:null,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(t=!1){var i,r,s,o;if(this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const a=typeof t=="boolean"?t:t==null?void 0:t.textureSource;(i=this._fill)!=null&&i.texture&&this._fill.texture.destroy(a),(r=this._originalFill)!=null&&r.texture&&this._originalFill.texture.destroy(a),(s=this._stroke)!=null&&s.texture&&this._stroke.texture.destroy(a),(o=this._originalStroke)!=null&&o.texture&&this._originalStroke.texture.destroy(a)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}_createProxy(t,e){return new Proxy(t,{set:(i,r,s)=>(i[r]=s,e==null||e(r,s),this.update(),!0)})}_isFillStyle(t){return(t??null)!==null&&!(j.isColorLike(t)||t instanceof De||t instanceof Lr)}};Ko.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};Ko.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let Hi=Ko;function Ym(n){const t=n;if(typeof t.dropShadow=="boolean"&&t.dropShadow){const e=Hi.defaultDropShadow;n.dropShadow={alpha:t.dropShadowAlpha??e.alpha,angle:t.dropShadowAngle??e.angle,blur:t.dropShadowBlur??e.blur,color:t.dropShadowColor??e.color,distance:t.dropShadowDistance??e.distance}}if(t.strokeThickness!==void 0){k(Q,"strokeThickness is now a part of stroke");const e=t.stroke;let i={};if(j.isColorLike(e))i.color=e;else if(e instanceof De||e instanceof Lr)i.fill=e;else if(Object.hasOwnProperty.call(e,"color")||Object.hasOwnProperty.call(e,"fill"))i=e;else throw new Error("Invalid stroke value.");n.stroke={...i,width:t.strokeThickness}}if(Array.isArray(t.fillGradientStops)){k(Q,"gradient fill is now a fill pattern: `new FillGradient(...)`");let e;n.fontSize==null?n.fontSize=Hi.defaultTextStyle.fontSize:typeof n.fontSize=="string"?e=parseInt(n.fontSize,10):e=n.fontSize;const i=new De(0,0,0,e*1.7),r=t.fillGradientStops.map(s=>j.shared.setValue(s).toNumber());r.forEach((s,o)=>{const a=o/(r.length-1);i.addColorStop(a,s)}),n.fill={fill:i}}}class Xm{constructor(t){this._canvasPool=Object.create(null),this.canvasOptions=t||{},this.enableFullScreen=!1}_createCanvasAndContext(t,e){const i=ct.get().createCanvas();i.width=t,i.height=e;const r=i.getContext("2d");return{canvas:i,context:r}}getOptimalCanvasAndContext(t,e,i=1){t=Math.ceil(t*i-1e-6),e=Math.ceil(e*i-1e-6),t=xr(t),e=xr(e);const r=(t<<17)+(e<<1);this._canvasPool[r]||(this._canvasPool[r]=[]);let s=this._canvasPool[r].pop();return s||(s=this._createCanvasAndContext(t,e)),s}returnCanvasAndContext(t){const e=t.canvas,{width:i,height:r}=e,s=(i<<17)+(r<<1);this._canvasPool[s].push(t)}clear(){this._canvasPool={}}}const yl=new Xm,Hm=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function lo(n){const t=typeof n.fontSize=="number"?`${n.fontSize}px`:n.fontSize;let e=n.fontFamily;Array.isArray(n.fontFamily)||(e=n.fontFamily.split(","));for(let i=e.length-1;i>=0;i--){let r=e[i].trim();!/([\"\'])[^\'\"]+\1/.test(r)&&!Hm.includes(r)&&(r=`"${r}"`),e[i]=r}return`${n.fontStyle} ${n.fontVariant} ${n.fontWeight} ${t} ${e.join(",")}`}const Ps={willReadFrequently:!0},ce=class R{static get experimentalLetterSpacingSupported(){let t=R._experimentalLetterSpacingSupported;if(t!==void 0){const e=ct.get().getCanvasRenderingContext2D().prototype;t=R._experimentalLetterSpacingSupported="letterSpacing"in e||"textLetterSpacing"in e}return t}constructor(t,e,i,r,s,o,a,l,u){this.text=t,this.style=e,this.width=i,this.height=r,this.lines=s,this.lineWidths=o,this.lineHeight=a,this.maxLineWidth=l,this.fontProperties=u}static measureText(t=" ",e,i=R._canvas,r=e.wordWrap){var x;const s=`${t}:${e.styleKey}`;if(R._measurementCache[s])return R._measurementCache[s];const o=lo(e),a=R.measureFont(o);a.fontSize===0&&(a.fontSize=e.fontSize,a.ascent=e.fontSize);const l=R.__context;l.font=o;const h=(r?R._wordWrap(t,e,i):t).split(/(?:\r\n|\r|\n)/),c=new Array(h.length);let f=0;for(let v=0;v<h.length;v++){const y=R._measureText(h[v],e.letterSpacing,l);c[v]=y,f=Math.max(f,y)}const d=((x=e._stroke)==null?void 0:x.width)||0;let m=f+d;e.dropShadow&&(m+=e.dropShadow.distance);const p=e.lineHeight||a.fontSize;let g=Math.max(p,a.fontSize+d)+(h.length-1)*(p+e.leading);return e.dropShadow&&(g+=e.dropShadow.distance),new R(t,e,m,g,h,c,p+e.leading,f,a)}static _measureText(t,e,i){let r=!1;R.experimentalLetterSpacingSupported&&(R.experimentalLetterSpacing?(i.letterSpacing=`${e}px`,i.textLetterSpacing=`${e}px`,r=!0):(i.letterSpacing="0px",i.textLetterSpacing="0px"));let s=i.measureText(t).width;return s>0&&(r?s-=e:s+=(R.graphemeSegmenter(t).length-1)*e),s}static _wordWrap(t,e,i=R._canvas){const r=i.getContext("2d",Ps);let s=0,o="",a="";const l=Object.create(null),{letterSpacing:u,whiteSpace:h}=e,c=R._collapseSpaces(h),f=R._collapseNewlines(h);let d=!c;const m=e.wordWrapWidth+u,p=R._tokenize(t);for(let g=0;g<p.length;g++){let _=p[g];if(R._isNewline(_)){if(!f){a+=R._addLine(o),d=!c,o="",s=0;continue}_=" "}if(c){const v=R.isBreakingSpace(_),y=R.isBreakingSpace(o[o.length-1]);if(v&&y)continue}const x=R._getFromCache(_,u,l,r);if(x>m)if(o!==""&&(a+=R._addLine(o),o="",s=0),R.canBreakWords(_,e.breakWords)){const v=R.wordWrapSplit(_);for(let y=0;y<v.length;y++){let S=v[y],A=S,w=1;for(;v[y+w];){const b=v[y+w];if(!R.canBreakChars(A,b,_,y,e.breakWords))S+=b;else break;A=b,w++}y+=w-1;const C=R._getFromCache(S,u,l,r);C+s>m&&(a+=R._addLine(o),d=!1,o="",s=0),o+=S,s+=C}}else{o.length>0&&(a+=R._addLine(o),o="",s=0);const v=g===p.length-1;a+=R._addLine(_,!v),d=!1,o="",s=0}else x+s>m&&(d=!1,a+=R._addLine(o),o="",s=0),(o.length>0||!R.isBreakingSpace(_)||d)&&(o+=_,s+=x)}return a+=R._addLine(o,!1),a}static _addLine(t,e=!0){return t=R._trimRight(t),t=e?`${t}
`:t,t}static _getFromCache(t,e,i,r){let s=i[t];return typeof s!="number"&&(s=R._measureText(t,e,r)+e,i[t]=s),s}static _collapseSpaces(t){return t==="normal"||t==="pre-line"}static _collapseNewlines(t){return t==="normal"}static _trimRight(t){if(typeof t!="string")return"";for(let e=t.length-1;e>=0;e--){const i=t[e];if(!R.isBreakingSpace(i))break;t=t.slice(0,-1)}return t}static _isNewline(t){return typeof t!="string"?!1:R._newlines.includes(t.charCodeAt(0))}static isBreakingSpace(t,e){return typeof t!="string"?!1:R._breakingSpaces.includes(t.charCodeAt(0))}static _tokenize(t){const e=[];let i="";if(typeof t!="string")return e;for(let r=0;r<t.length;r++){const s=t[r],o=t[r+1];if(R.isBreakingSpace(s,o)||R._isNewline(s)){i!==""&&(e.push(i),i=""),e.push(s);continue}i+=s}return i!==""&&e.push(i),e}static canBreakWords(t,e){return e}static canBreakChars(t,e,i,r,s){return!0}static wordWrapSplit(t){return R.graphemeSegmenter(t)}static measureFont(t){if(R._fonts[t])return R._fonts[t];const e=R._context;e.font=t;const i=e.measureText(R.METRICS_STRING+R.BASELINE_SYMBOL),r={ascent:i.actualBoundingBoxAscent,descent:i.actualBoundingBoxDescent,fontSize:i.actualBoundingBoxAscent+i.actualBoundingBoxDescent};return R._fonts[t]=r,r}static clearMetrics(t=""){t?delete R._fonts[t]:R._fonts={}}static get _canvas(){if(!R.__canvas){let t;try{const e=new OffscreenCanvas(0,0),i=e.getContext("2d",Ps);if(i!=null&&i.measureText)return R.__canvas=e,e;t=ct.get().createCanvas()}catch{t=ct.get().createCanvas()}t.width=t.height=10,R.__canvas=t}return R.__canvas}static get _context(){return R.__context||(R.__context=R._canvas.getContext("2d",Ps)),R.__context}};ce.METRICS_STRING="|ÉqÅ";ce.BASELINE_SYMBOL="M";ce.BASELINE_MULTIPLIER=1.4;ce.HEIGHT_MULTIPLIER=2;ce.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const n=new Intl.Segmenter;return t=>[...n.segment(t)].map(e=>e.segment)}return n=>[...n]})();ce.experimentalLetterSpacing=!1;ce._fonts={};ce._newlines=[10,13];ce._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];ce._measurementCache={};let uo=ce;function bl(n,t){if(n.texture===D.WHITE&&!n.fill)return j.shared.setValue(n.color).toHex();if(n.fill){if(n.fill instanceof Lr){const e=n.fill,i=t.createPattern(e.texture.source.resource,"repeat"),r=e.transform.copyTo(J.shared);return r.scale(e.texture.frame.width,e.texture.frame.height),i.setTransform(r),i}else if(n.fill instanceof De){const e=n.fill;if(e.type==="linear"){const i=t.createLinearGradient(e.x0,e.y0,e.x1,e.y1);return e.gradientStops.forEach(r=>{i.addColorStop(r.offset,j.shared.setValue(r.color).toHex())}),i}}}else{const e=t.createPattern(n.texture.source.resource,"repeat"),i=n.matrix.copyTo(J.shared);return i.scale(n.texture.frame.width,n.texture.frame.height),e.setTransform(i),e}return xt("FillStyle not recognised",n),"red"}function yh(n){if(n==="")return[];typeof n=="string"&&(n=[n]);const t=[];for(let e=0,i=n.length;e<i;e++){const r=n[e];if(Array.isArray(r)){if(r.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${r.length}.`);if(r[0].length===0||r[1].length===0)throw new Error("[BitmapFont]: Invalid character delimiter.");const s=r[0].charCodeAt(0),o=r[1].charCodeAt(0);if(o<s)throw new Error("[BitmapFont]: Invalid character range.");for(let a=s,l=o;a<=l;a++)t.push(String.fromCharCode(a))}else t.push(...Array.from(r))}if(t.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return t}const bh=class Sh extends rh{constructor(t){super(),this.resolution=1,this.pages=[],this._padding=0,this._measureCache=Object.create(null),this._currentChars=[],this._currentX=0,this._currentY=0,this._currentPageIndex=-1,this._skipKerning=!1;const e={...Sh.defaultOptions,...t};this._textureSize=e.textureSize,this._mipmap=e.mipmap;const i=e.style.clone();e.overrideFill&&(i._fill.color=16777215,i._fill.alpha=1,i._fill.texture=D.WHITE,i._fill.fill=null),this.applyFillAsTint=e.overrideFill;const r=i.fontSize;i.fontSize=this.baseMeasurementFontSize;const s=lo(i);e.overrideSize?i._stroke&&(i._stroke.width*=this.baseRenderedFontSize/r):i.fontSize=this.baseRenderedFontSize=r,this._style=i,this._skipKerning=e.skipKerning??!1,this.resolution=e.resolution??1,this._padding=e.padding??4,this.fontMetrics=uo.measureFont(s),this.lineHeight=i.lineHeight||this.fontMetrics.fontSize||i.fontSize}ensureCharacters(t){var p,g;const e=yh(t).filter(_=>!this._currentChars.includes(_)).filter((_,x,v)=>v.indexOf(_)===x);if(!e.length)return;this._currentChars=[...this._currentChars,...e];let i;this._currentPageIndex===-1?i=this._nextPage():i=this.pages[this._currentPageIndex];let{canvas:r,context:s}=i.canvasAndContext,o=i.texture.source;const a=this._style;let l=this._currentX,u=this._currentY;const h=this.baseRenderedFontSize/this.baseMeasurementFontSize,c=this._padding*h,f=a.fontStyle==="italic"?2:1;let d=0,m=!1;for(let _=0;_<e.length;_++){const x=e[_],v=uo.measureText(x,a,r,!1);v.lineHeight=v.height;const y=f*v.width*h,S=v.height*h,A=y+c*2,w=S+c*2;if(m=!1,x!==`
`&&x!=="\r"&&x!=="	"&&x!==" "&&(m=!0,d=Math.ceil(Math.max(w,d))),l+A>this._textureSize&&(u+=d,d=w,l=0,u+d>this._textureSize)){o.update();const b=this._nextPage();r=b.canvasAndContext.canvas,s=b.canvasAndContext.context,o=b.texture.source,u=0}const C=y/h-(((p=a.dropShadow)==null?void 0:p.distance)??0)-(((g=a._stroke)==null?void 0:g.width)??0);if(this.chars[x]={id:x.codePointAt(0),xOffset:-this._padding,yOffset:-this._padding,xAdvance:C,kerning:{}},m){this._drawGlyph(s,v,l+c,u+c,h,a);const b=o.width*h,T=o.height*h,O=new dt(l/b*o.width,u/T*o.height,A/b*o.width,w/T*o.height);this.chars[x].texture=new D({source:o,frame:O}),l+=Math.ceil(A)}}o.update(),this._currentX=l,this._currentY=u,this._skipKerning&&this._applyKerning(e,s)}get pageTextures(){return k(Q,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}_applyKerning(t,e){const i=this._measureCache;for(let r=0;r<t.length;r++){const s=t[r];for(let o=0;o<this._currentChars.length;o++){const a=this._currentChars[o];let l=i[s];l||(l=i[s]=e.measureText(s).width);let u=i[a];u||(u=i[a]=e.measureText(a).width);let h=e.measureText(s+a).width,c=h-(l+u);c&&(this.chars[s].kerning[a]=c),h=e.measureText(s+a).width,c=h-(l+u),c&&(this.chars[a].kerning[s]=c)}}}_nextPage(){this._currentPageIndex++;const t=this.resolution,e=yl.getOptimalCanvasAndContext(this._textureSize,this._textureSize,t);this._setupContext(e.context,this._style,t);const i=t*(this.baseRenderedFontSize/this.baseMeasurementFontSize),r=new D({source:new bi({resource:e.canvas,resolution:i,alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:this._mipmap})}),s={canvasAndContext:e,texture:r};return this.pages[this._currentPageIndex]=s,s}_setupContext(t,e,i){e.fontSize=this.baseRenderedFontSize,t.scale(i,i),t.font=lo(e),e.fontSize=this.baseMeasurementFontSize,t.textBaseline=e.textBaseline;const r=e._stroke,s=(r==null?void 0:r.width)??0;if(r&&(t.lineWidth=s,t.lineJoin=r.join,t.miterLimit=r.miterLimit,t.strokeStyle=bl(r,t)),e._fill&&(t.fillStyle=bl(e._fill,t)),e.dropShadow){const o=e.dropShadow,a=j.shared.setValue(o.color).toArray(),l=o.blur*i,u=o.distance*i;t.shadowColor=`rgba(${a[0]*255},${a[1]*255},${a[2]*255},${o.alpha})`,t.shadowBlur=l,t.shadowOffsetX=Math.cos(o.angle)*u,t.shadowOffsetY=Math.sin(o.angle)*u}else t.shadowColor="black",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0}_drawGlyph(t,e,i,r,s,o){const a=e.text,l=e.fontProperties,u=o._stroke,h=((u==null?void 0:u.width)??0)*s,c=i+h/2,f=r-h/2,d=l.descent*s,m=e.lineHeight*s;o.stroke&&h&&t.strokeText(a,c,f+m-d),o._fill&&t.fillText(a,c,f+m-d)}destroy(){super.destroy();for(let t=0;t<this.pages.length;t++){const{canvasAndContext:e,texture:i}=this.pages[t];e.canvas.width=e.canvas.width,yl.returnCanvasAndContext(e),i.destroy(!0)}this.pages=null}};bh.defaultOptions={textureSize:512,style:new Hi,mipmap:!0};let Sl=bh;function jm(n,t,e){const i={width:0,height:0,offsetY:0,scale:t.fontSize/e.baseMeasurementFontSize,lines:[{width:0,charPositions:[],spaceWidth:0,spacesIndex:[],chars:[]}]};i.offsetY=e.baseLineOffset;let r=i.lines[0],s=null,o=!0;const a={spaceWord:!1,width:0,start:0,index:0,positions:[],chars:[]},l=d=>{const m=r.width;for(let p=0;p<a.index;p++){const g=d.positions[p];r.chars.push(d.chars[p]),r.charPositions.push(g+m)}r.width+=d.width,o=!1,a.width=0,a.index=0,a.chars.length=0},u=()=>{let d=r.chars.length-1,m=r.chars[d];for(;m===" ";)r.width-=e.chars[m].xAdvance,m=r.chars[--d];i.width=Math.max(i.width,r.width),r={width:0,charPositions:[],chars:[],spaceWidth:0,spacesIndex:[]},o=!0,i.lines.push(r),i.height+=e.lineHeight},h=e.baseMeasurementFontSize/t.fontSize,c=t.letterSpacing*h,f=t.wordWrapWidth*h;for(let d=0;d<n.length+1;d++){let m;const p=d===n.length;p||(m=n[d]);const g=e.chars[m]||e.chars[" "];if(/(?:\s)/.test(m)||m==="\r"||m===`
`||p){if(!o&&t.wordWrap&&r.width+a.width-c>f?(u(),l(a),p||r.charPositions.push(0)):(a.start=r.width,l(a),p||r.charPositions.push(0)),m==="\r"||m===`
`)r.width!==0&&u();else if(!p){const y=g.xAdvance+(g.kerning[s]||0)+c;r.width+=y,r.spaceWidth=y,r.spacesIndex.push(r.charPositions.length),r.chars.push(m)}}else{const v=g.kerning[s]||0,y=g.xAdvance+v+c;a.positions[a.index++]=a.width+v,a.chars.push(m),a.width+=y}s=m}return u(),t.align==="center"?qm(i):t.align==="right"?Km(i):t.align==="justify"&&Qm(i),i}function qm(n){for(let t=0;t<n.lines.length;t++){const e=n.lines[t],i=n.width/2-e.width/2;for(let r=0;r<e.charPositions.length;r++)e.charPositions[r]+=i}}function Km(n){for(let t=0;t<n.lines.length;t++){const e=n.lines[t],i=n.width-e.width;for(let r=0;r<e.charPositions.length;r++)e.charPositions[r]+=i}}function Qm(n){const t=n.width;for(let e=0;e<n.lines.length;e++){const i=n.lines[e];let r=0,s=i.spacesIndex[r++],o=0;const a=i.spacesIndex.length,u=(t-i.width)/a;for(let h=0;h<i.charPositions.length;h++)h===s&&(s=i.spacesIndex[r++],o+=u),i.charPositions[h]+=o}}let ir=0;class Zm{constructor(){this.ALPHA=[["a","z"],["A","Z"]," "],this.NUMERIC=[["0","9"]],this.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],this.ASCII=[[" ","~"]],this.defaultOptions={chars:this.ALPHANUMERIC,resolution:1,padding:4,skipKerning:!1}}getFont(t,e){var o;let i=`${e.fontFamily}-bitmap`,r=!0;if(e._fill.fill&&!e._stroke)i+=e._fill.fill.styleKey,r=!1;else if(e._stroke||e.dropShadow){let a=e.styleKey;a=a.substring(0,a.lastIndexOf("-")),i=`${a}-bitmap`,r=!1}if(!at.has(i)){const a=new Sl({style:e,overrideFill:r,overrideSize:!0,...this.defaultOptions});ir++,ir>50&&xt("BitmapText",`You have dynamically created ${ir} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``),a.once("destroy",()=>{ir--,at.remove(i)}),at.set(i,a)}const s=at.get(i);return(o=s.ensureCharacters)==null||o.call(s,t),s}getLayout(t,e){const i=this.getFont(t,e);return jm([...t],e,i)}measureText(t,e){return this.getLayout(t,e)}install(...t){var u,h,c,f;let e=t[0];typeof e=="string"&&(e={name:e,style:t[1],chars:(u=t[2])==null?void 0:u.chars,resolution:(h=t[2])==null?void 0:h.resolution,padding:(c=t[2])==null?void 0:c.padding,skipKerning:(f=t[2])==null?void 0:f.skipKerning},k(Q,"BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));const i=e==null?void 0:e.name;if(!i)throw new Error("[BitmapFontManager] Property `name` is required.");e={...this.defaultOptions,...e};const r=e.style,s=r instanceof Hi?r:new Hi(r),o=s._fill.fill!==null&&s._fill.fill!==void 0,a=new Sl({style:s,overrideFill:o,skipKerning:e.skipKerning,padding:e.padding,resolution:e.resolution,overrideSize:!1}),l=yh(e.chars);return a.ensureCharacters(l.join("")),at.set(`${i}-bitmap`,a),a.once("destroy",()=>at.remove(`${i}-bitmap`)),a}uninstall(t){const e=`${t}-bitmap`,i=at.get(e);i&&(at.remove(e),i.destroy())}}const wl=new Zm;class wh extends rh{constructor(t,e){super();const{textures:i,data:r}=t;Object.keys(r.pages).forEach(s=>{const o=r.pages[parseInt(s,10)],a=i[o.id];this.pages.push({texture:a})}),Object.keys(r.chars).forEach(s=>{const o=r.chars[s],{frame:a,source:l}=i[o.page],u=new dt(o.x+a.x,o.y+a.y,o.width,o.height),h=new D({source:l,frame:u});this.chars[s]={id:s.codePointAt(0),xOffset:o.xOffset,yOffset:o.yOffset,xAdvance:o.xAdvance,kerning:o.kerning??{},texture:h}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=e}destroy(){super.destroy();for(let t=0;t<this.pages.length;t++){const{texture:e}=this.pages[t];e.destroy(!0)}this.pages=null}static install(t){wl.install(t)}static uninstall(t){wl.uninstall(t)}}const Fs={test(n){return typeof n=="string"&&n.startsWith("info face=")},parse(n){const t=n.match(/^[a-z]+\s+.+$/gm),e={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const c in t){const f=t[c].match(/^[a-z]+/gm)[0],d=t[c].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),m={};for(const p in d){const g=d[p].split("="),_=g[0],x=g[1].replace(/"/gm,""),v=parseFloat(x),y=isNaN(v)?x:v;m[_]=y}e[f].push(m)}const i={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=e.info,[s]=e.common,[o]=e.distanceField??[];o&&(i.distanceField={range:parseInt(o.distanceRange,10),type:o.fieldType}),i.fontSize=parseInt(r.size,10),i.fontFamily=r.face,i.lineHeight=parseInt(s.lineHeight,10);const a=e.page;for(let c=0;c<a.length;c++)i.pages.push({id:parseInt(a[c].id,10)||0,file:a[c].file});const l={};i.baseLineOffset=i.lineHeight-parseInt(s.base,10);const u=e.char;for(let c=0;c<u.length;c++){const f=u[c],d=parseInt(f.id,10);let m=f.letter??f.char??String.fromCharCode(d);m==="space"&&(m=" "),l[d]=m,i.chars[m]={id:d,page:parseInt(f.page,10)||0,x:parseInt(f.x,10),y:parseInt(f.y,10),width:parseInt(f.width,10),height:parseInt(f.height,10),xOffset:parseInt(f.xoffset,10),yOffset:parseInt(f.yoffset,10),xAdvance:parseInt(f.xadvance,10),kerning:{}}}const h=e.kerning||[];for(let c=0;c<h.length;c++){const f=parseInt(h[c].first,10),d=parseInt(h[c].second,10),m=parseInt(h[c].amount,10);i.chars[l[d]].kerning[l[f]]=m}return i}},Cl={test(n){const t=n;return typeof t!="string"&&"getElementsByTagName"in t&&t.getElementsByTagName("page").length&&t.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(n){const t={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},e=n.getElementsByTagName("info")[0],i=n.getElementsByTagName("common")[0],r=n.getElementsByTagName("distanceField")[0];r&&(t.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const s=n.getElementsByTagName("page"),o=n.getElementsByTagName("char"),a=n.getElementsByTagName("kerning");t.fontSize=parseInt(e.getAttribute("size"),10),t.fontFamily=e.getAttribute("face"),t.lineHeight=parseInt(i.getAttribute("lineHeight"),10);for(let u=0;u<s.length;u++)t.pages.push({id:parseInt(s[u].getAttribute("id"),10)||0,file:s[u].getAttribute("file")});const l={};t.baseLineOffset=t.lineHeight-parseInt(i.getAttribute("base"),10);for(let u=0;u<o.length;u++){const h=o[u],c=parseInt(h.getAttribute("id"),10);let f=h.getAttribute("letter")??h.getAttribute("char")??String.fromCharCode(c);f==="space"&&(f=" "),l[c]=f,t.chars[f]={id:c,page:parseInt(h.getAttribute("page"),10)||0,x:parseInt(h.getAttribute("x"),10),y:parseInt(h.getAttribute("y"),10),width:parseInt(h.getAttribute("width"),10),height:parseInt(h.getAttribute("height"),10),xOffset:parseInt(h.getAttribute("xoffset"),10),yOffset:parseInt(h.getAttribute("yoffset"),10),xAdvance:parseInt(h.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<a.length;u++){const h=parseInt(a[u].getAttribute("first"),10),c=parseInt(a[u].getAttribute("second"),10),f=parseInt(a[u].getAttribute("amount"),10);t.chars[l[c]].kerning[l[h]]=f}return t}},Al={test(n){return typeof n=="string"&&n.includes("<font>")?Cl.test(ct.get().parseXML(n)):!1},parse(n){return Cl.parse(ct.get().parseXML(n))}},Jm=[".xml",".fnt"],tg={extension:{type:B.CacheParser,name:"cacheBitmapFont"},test:n=>n instanceof wh,getCacheableAssets(n,t){const e={};return n.forEach(i=>{e[i]=t,e[`${i}-bitmap`]=t}),e[`${t.fontFamily}-bitmap`]=t,e}},eg={extension:{type:B.LoadParser,priority:Ie.Normal},name:"loadBitmapFont",test(n){return Jm.includes(At.extname(n).toLowerCase())},async testParse(n){return Fs.test(n)||Al.test(n)},async parse(n,t,e){const i=Fs.test(n)?Fs.parse(n):Al.parse(n),{src:r}=t,{pages:s}=i,o=[],a=i.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let c=0;c<s.length;++c){const f=s[c].file;let d=At.join(At.dirname(r),f);d=Hs(d,r),o.push({src:d,data:a})}const l=await e.load(o),u=o.map(c=>l[c.src]);return new wh({data:i,textures:u},r)},async load(n,t){return await(await ct.get().fetch(n)).text()},async unload(n,t,e){await Promise.all(n.pages.map(i=>e.unload(i.texture.source._sourceOrigin))),n.destroy()}};class ig{constructor(t,e=!1){this._loader=t,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e}add(t){t.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const t=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let i=0;i<e;i++)t.push(this._assetList.pop());await this._loader.load(t),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(t){this._isActive!==t&&(this._isActive=t,t&&!this._isLoading&&this._next())}}const ng={extension:{type:B.CacheParser,name:"cacheTextureArray"},test:n=>Array.isArray(n)&&n.every(t=>t instanceof D),getCacheableAssets:(n,t)=>{const e={};return n.forEach(i=>{t.forEach((r,s)=>{e[i+(s===0?"":s+1)]=r})}),e}};async function Ch(n){if("Image"in globalThis)return new Promise(t=>{const e=new Image;e.onload=()=>{t(!0)},e.onerror=()=>{t(!1)},e.src=n});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const t=await(await fetch(n)).blob();await createImageBitmap(t)}catch{return!1}return!0}return!1}const rg={extension:{type:B.DetectionParser,priority:1},test:async()=>Ch("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async n=>[...n,"avif"],remove:async n=>n.filter(t=>t!=="avif")},Tl=["png","jpg","jpeg"],sg={extension:{type:B.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async n=>[...n,...Tl],remove:async n=>n.filter(t=>!Tl.includes(t))},og="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Qo(n){return og?!1:document.createElement("video").canPlayType(n)!==""}const ag={extension:{type:B.DetectionParser,priority:0},test:async()=>Qo("video/mp4"),add:async n=>[...n,"mp4","m4v"],remove:async n=>n.filter(t=>t!=="mp4"&&t!=="m4v")},lg={extension:{type:B.DetectionParser,priority:0},test:async()=>Qo("video/ogg"),add:async n=>[...n,"ogv"],remove:async n=>n.filter(t=>t!=="ogv")},ug={extension:{type:B.DetectionParser,priority:0},test:async()=>Qo("video/webm"),add:async n=>[...n,"webm"],remove:async n=>n.filter(t=>t!=="webm")},hg={extension:{type:B.DetectionParser,priority:0},test:async()=>Ch("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async n=>[...n,"webp"],remove:async n=>n.filter(t=>t!=="webp")};class cg{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(t,e,i)=>(this._parsersValidated=!1,t[e]=i,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(t,e){const i={promise:null,parser:null};return i.promise=(async()=>{var o,a;let r=null,s=null;if(e.loadParser&&(s=this._parserHash[e.loadParser],s||xt(`[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`)),!s){for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.load&&((o=u.test)!=null&&o.call(u,t,e,this))){s=u;break}}if(!s)return xt(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await s.load(t,e,this),i.parser=s;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];u.parse&&u.parse&&await((a=u.testParse)==null?void 0:a.call(u,r,e,this))&&(r=await u.parse(r,e,this)||r,i.parser=u)}return r})(),i}async load(t,e){this._parsersValidated||this._validateParsers();let i=0;const r={},s=br(t),o=le(t,u=>({alias:[u],src:u,data:{}})),a=o.length,l=o.map(async u=>{const h=At.toAbsolute(u.src);if(!r[u.src])try{this.promiseCache[h]||(this.promiseCache[h]=this._getLoadPromiseAndParser(h,u)),r[u.src]=await this.promiseCache[h].promise,e&&e(++i/a)}catch(c){throw delete this.promiseCache[h],delete r[u.src],new Error(`[Loader.load] Failed to load ${h}.
${c}`)}});return await Promise.all(l),s?r[o[0].src]:r}async unload(t){const i=le(t,r=>({alias:[r],src:r})).map(async r=>{var a,l;const s=At.toAbsolute(r.src),o=this.promiseCache[s];if(o){const u=await o.promise;delete this.promiseCache[s],await((l=(a=o.parser)==null?void 0:a.unload)==null?void 0:l.call(a,u,r,this))}});await Promise.all(i)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(t=>t.name).reduce((t,e)=>(e.name?t[e.name]&&xt(`[Assets] loadParser name conflict "${e.name}"`):xt("[Assets] loadParser should have a name"),{...t,[e.name]:e}),{})}}function en(n,t){if(Array.isArray(t)){for(const e of t)if(n.startsWith(`data:${e}`))return!0;return!1}return n.startsWith(`data:${t}`)}function nn(n,t){const e=n.split("?")[0],i=At.extname(e).toLowerCase();return Array.isArray(t)?t.includes(i):i===t}const fg=".json",dg="application/json",pg={extension:{type:B.LoadParser,priority:Ie.Low},name:"loadJson",test(n){return en(n,dg)||nn(n,fg)},async load(n){return await(await ct.get().fetch(n)).json()}},mg=".txt",gg="text/plain",_g={name:"loadTxt",extension:{type:B.LoadParser,priority:Ie.Low,name:"loadTxt"},test(n){return en(n,gg)||nn(n,mg)},async load(n){return await(await ct.get().fetch(n)).text()}},xg=["normal","bold","100","200","300","400","500","600","700","800","900"],vg=[".ttf",".otf",".woff",".woff2"],yg=["font/ttf","font/otf","font/woff","font/woff2"],bg=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Sg(n){const t=At.extname(n),r=At.basename(n,t).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1));let s=r.length>0;for(const a of r)if(!a.match(bg)){s=!1;break}let o=r.join(" ");return s||(o=`"${o.replace(/[\\"]/g,"\\$&")}"`),o}const wg=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Cg(n){return wg.test(n)?n:encodeURI(n)}const Ag={extension:{type:B.LoadParser,priority:Ie.Low},name:"loadWebFont",test(n){return en(n,yg)||nn(n,vg)},async load(n,t){var i,r,s;const e=ct.get().getFontFaceSet();if(e){const o=[],a=((i=t.data)==null?void 0:i.family)??Sg(n),l=((s=(r=t.data)==null?void 0:r.weights)==null?void 0:s.filter(h=>xg.includes(h)))??["normal"],u=t.data??{};for(let h=0;h<l.length;h++){const c=l[h],f=new FontFace(a,`url(${Cg(n)})`,{...u,weight:c});await f.load(),e.add(f),o.push(f)}return at.set(`${a}-and-url`,{url:n,fontFaces:o}),o.length===1?o[0]:o}return xt("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(n){(Array.isArray(n)?n:[n]).forEach(t=>{at.remove(t.family),ct.get().getFontFaceSet().delete(t)})}};function Zo(n,t=1){var i;const e=(i=tn.RETINA_PREFIX)==null?void 0:i.exec(n);return e?parseFloat(e[1]):t}function Jo(n,t,e){n.label=e,n._sourceOrigin=e;const i=new D({source:n,label:e}),r=()=>{delete t.promiseCache[e],at.has(e)&&at.remove(e)};return i.source.once("destroy",()=>{t.promiseCache[e]&&(xt("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),i.once("destroy",()=>{n.destroyed||(xt("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),i}const Tg=".svg",Pg="image/svg+xml",Fg={extension:{type:B.LoadParser,priority:Ie.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(n){return en(n,Pg)||nn(n,Tg)},async load(n,t,e){return t.data.parseAsGraphicsContext??this.config.parseAsGraphicsContext?Ig(n):Mg(n,t,e,this.config.crossOrigin)},unload(n){n.destroy(!0)}};async function Mg(n,t,e,i){var g,_,x;const s=await(await ct.get().fetch(n)).blob(),o=URL.createObjectURL(s),a=new Image;a.src=o,a.crossOrigin=i,await a.decode(),URL.revokeObjectURL(o);const l=document.createElement("canvas"),u=l.getContext("2d"),h=((g=t.data)==null?void 0:g.resolution)||Zo(n),c=((_=t.data)==null?void 0:_.width)??a.width,f=((x=t.data)==null?void 0:x.height)??a.height;l.width=c*h,l.height=f*h,u.drawImage(a,0,0,c*h,f*h);const{parseAsGraphicsContext:d,...m}=t.data,p=new bi({resource:l,alphaMode:"premultiply-alpha-on-upload",resolution:h,...m});return Jo(p,e,n)}async function Ig(n){const e=await(await ct.get().fetch(n)).text(),i=new Jt;return i.svg(e),i}const Eg=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;let Li=null,ho=class{constructor(){Li||(Li=URL.createObjectURL(new Blob([Eg],{type:"application/javascript"}))),this.worker=new Worker(Li)}};ho.revokeObjectURL=function(){Li&&(URL.revokeObjectURL(Li),Li=null)};const zg=`(function () {
    'use strict';

    async function loadImageBitmap(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      const imageBitmap = await createImageBitmap(imageBlob);
      return imageBitmap;
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;let Di=null;class Ah{constructor(){Di||(Di=URL.createObjectURL(new Blob([zg],{type:"application/javascript"}))),this.worker=new Worker(Di)}}Ah.revokeObjectURL=function(){Di&&(URL.revokeObjectURL(Di),Di=null)};let Pl=0,Ms;class Og{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(t=>{const{worker:e}=new ho;e.addEventListener("message",i=>{e.terminate(),ho.revokeObjectURL(),t(i.data)})}),this._isImageBitmapSupported)}loadImageBitmap(t){return this._run("loadImageBitmap",[t])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Ms===void 0&&(Ms=navigator.hardwareConcurrency||4);let t=this._workerPool.pop();return!t&&this._createdWorkers<Ms&&(this._createdWorkers++,t=new Ah().worker,t.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),t}_returnWorker(t){this._workerPool.push(t)}_complete(t){t.error!==void 0?this._resolveHash[t.uuid].reject(t.error):this._resolveHash[t.uuid].resolve(t.data),this._resolveHash[t.uuid]=null}async _run(t,e){await this._initWorkers();const i=new Promise((r,s)=>{this._queue.push({id:t,arguments:e,resolve:r,reject:s})});return this._next(),i}_next(){if(!this._queue.length)return;const t=this._getWorker();if(!t)return;const e=this._queue.pop(),i=e.id;this._resolveHash[Pl]={resolve:e.resolve,reject:e.reject},t.postMessage({data:e.arguments,uuid:Pl++,id:i})}}const Fl=new Og,Rg=[".jpeg",".jpg",".png",".webp",".avif"],kg=["image/jpeg","image/png","image/webp","image/avif"];async function Bg(n){const t=await ct.get().fetch(n);if(!t.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${n}: ${t.status} ${t.statusText}`);const e=await t.blob();return await createImageBitmap(e)}const Th={name:"loadTextures",extension:{type:B.LoadParser,priority:Ie.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(n){return en(n,kg)||nn(n,Rg)},async load(n,t,e){var s;let i=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Fl.isImageBitmapSupported()?i=await Fl.loadImageBitmap(n):i=await Bg(n):i=await new Promise(o=>{i=new Image,i.crossOrigin=this.config.crossOrigin,i.src=n,i.complete?o(i):i.onload=()=>{o(i)}});const r=new bi({resource:i,alphaMode:"premultiply-alpha-on-upload",resolution:((s=t.data)==null?void 0:s.resolution)||Zo(n),...t.data});return Jo(r,e,n)},unload(n){n.destroy(!0)}},Ph=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Ug=Ph.map(n=>`video/${n.substring(1)}`);function Lg(n,t,e){e===void 0&&!t.startsWith("data:")?n.crossOrigin=Gg(t):e!==!1&&(n.crossOrigin=typeof e=="string"?e:"anonymous")}function Dg(n){return new Promise((t,e)=>{n.addEventListener("canplaythrough",i),n.addEventListener("error",r),n.load();function i(){s(),t()}function r(o){s(),e(o)}function s(){n.removeEventListener("canplaythrough",i),n.removeEventListener("error",r)}})}function Gg(n,t=globalThis.location){if(n.startsWith("data:"))return"";t=t||globalThis.location;const e=new URL(n,document.baseURI);return e.hostname!==t.hostname||e.port!==t.port||e.protocol!==t.protocol?"anonymous":""}const Ng={name:"loadVideo",extension:{type:B.LoadParser,name:"loadVideo"},test(n){const t=en(n,Ug),e=nn(n,Ph);return t||e},async load(n,t,e){var l,u;const i={...sr.defaultOptions,resolution:((l=t.data)==null?void 0:l.resolution)||Zo(n),alphaMode:((u=t.data)==null?void 0:u.alphaMode)||await Ru(),...t.data},r=document.createElement("video"),s={preload:i.autoLoad!==!1?"auto":void 0,"webkit-playsinline":i.playsinline!==!1?"":void 0,playsinline:i.playsinline!==!1?"":void 0,muted:i.muted===!0?"":void 0,loop:i.loop===!0?"":void 0,autoplay:i.autoPlay!==!1?"":void 0};Object.keys(s).forEach(h=>{const c=s[h];c!==void 0&&r.setAttribute(h,c)}),i.muted===!0&&(r.muted=!0),Lg(r,n,i.crossorigin);const o=document.createElement("source");let a;if(n.startsWith("data:"))a=n.slice(5,n.indexOf(";"));else if(!n.startsWith("blob:")){const h=n.split("?")[0].slice(n.lastIndexOf(".")+1).toLowerCase();a=sr.MIME_TYPES[h]||`video/${h}`}return o.src=n,a&&(o.type=a),new Promise(h=>{const c=async()=>{const f=new sr({...i,resource:r});r.removeEventListener("canplay",c),t.data.preload&&await Dg(r),h(Jo(f,e,n))};r.addEventListener("canplay",c),r.appendChild(o)})},unload(n){n.destroy(!0)}},Fh={extension:{type:B.ResolveParser,name:"resolveTexture"},test:Th.test,parse:n=>{var t;return{resolution:parseFloat(((t=tn.RETINA_PREFIX.exec(n))==null?void 0:t[1])??"1"),format:n.split(".").pop(),src:n}}},Vg={extension:{type:B.ResolveParser,priority:-2,name:"resolveJson"},test:n=>tn.RETINA_PREFIX.test(n)&&n.endsWith(".json"),parse:Fh.parse};class Wg{constructor(){this._detections=[],this._initialized=!1,this.resolver=new tn,this.loader=new cg,this.cache=at,this._backgroundLoader=new ig(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(t={}){var s,o;if(this._initialized){xt("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,t.defaultSearchParams&&this.resolver.setDefaultSearchParams(t.defaultSearchParams),t.basePath&&(this.resolver.basePath=t.basePath),t.bundleIdentifier&&this.resolver.setBundleIdentifier(t.bundleIdentifier),t.manifest){let a=t.manifest;typeof a=="string"&&(a=await this.load(a)),this.resolver.addManifest(a)}const e=((s=t.texturePreference)==null?void 0:s.resolution)??1,i=typeof e=="number"?[e]:e,r=await this._detectFormats({preferredFormats:(o=t.texturePreference)==null?void 0:o.format,skipDetections:t.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:i}}),t.preferences&&this.setPreferences(t.preferences)}add(t){this.resolver.add(t)}async load(t,e){this._initialized||await this.init();const i=br(t),r=le(t).map(a=>{if(typeof a!="string"){const l=this.resolver.getAlias(a);return l.some(u=>!this.resolver.hasKey(u))&&this.add(a),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),s=this.resolver.resolve(r),o=await this._mapLoadToResolve(s,e);return i?o[r[0]]:o}addBundle(t,e){this.resolver.addBundle(t,e)}async loadBundle(t,e){this._initialized||await this.init();let i=!1;typeof t=="string"&&(i=!0,t=[t]);const r=this.resolver.resolveBundle(t),s={},o=Object.keys(r);let a=0,l=0;const u=()=>{e==null||e(++a/l)},h=o.map(c=>{const f=r[c];return l+=Object.keys(f).length,this._mapLoadToResolve(f,u).then(d=>{s[c]=d})});return await Promise.all(h),i?s[t[0]]:s}async backgroundLoad(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolve(t);this._backgroundLoader.add(Object.values(e))}async backgroundLoadBundle(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolveBundle(t);Object.values(e).forEach(i=>{this._backgroundLoader.add(Object.values(i))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(t){if(typeof t=="string")return at.get(t);const e={};for(let i=0;i<t.length;i++)e[i]=at.get(t[i]);return e}async _mapLoadToResolve(t,e){const i=[...new Set(Object.values(t))];this._backgroundLoader.active=!1;const r=await this.loader.load(i,e);this._backgroundLoader.active=!0;const s={};return i.forEach(o=>{const a=r[o.src],l=[o.src];o.alias&&l.push(...o.alias),l.forEach(u=>{s[u]=a}),at.set(l,a)}),s}async unload(t){this._initialized||await this.init();const e=le(t).map(r=>typeof r!="string"?r.src:r),i=this.resolver.resolve(e);await this._unloadFromResolved(i)}async unloadBundle(t){this._initialized||await this.init(),t=le(t);const e=this.resolver.resolveBundle(t),i=Object.keys(e).map(r=>this._unloadFromResolved(e[r]));await Promise.all(i)}async _unloadFromResolved(t){const e=Object.values(t);e.forEach(i=>{at.remove(i.src)}),await this.loader.unload(e)}async _detectFormats(t){let e=[];t.preferredFormats&&(e=Array.isArray(t.preferredFormats)?t.preferredFormats:[t.preferredFormats]);for(const i of t.detections)t.skipDetections||await i.test()?e=await i.add(e):t.skipDetections||(e=await i.remove(e));return e=e.filter((i,r)=>e.indexOf(i)===r),e}get detections(){return this._detections}setPreferences(t){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(i=>i in t).forEach(i=>{e.config[i]=t[i]})})}}const ai=new Wg;Ft.handleByList(B.LoadParser,ai.loader.parsers).handleByList(B.ResolveParser,ai.resolver.parsers).handleByList(B.CacheParser,ai.cache.parsers).handleByList(B.DetectionParser,ai.detections);Ft.add(ng,sg,rg,hg,ag,lg,ug,pg,_g,Ag,Fg,Th,Ng,eg,tg,Fh,Vg);const Ml={loader:B.LoadParser,resolver:B.ResolveParser,cache:B.CacheParser,detection:B.DetectionParser};Ft.handle(B.Asset,n=>{const t=n.ref;Object.entries(Ml).filter(([e])=>!!t[e]).forEach(([e,i])=>Ft.add(Object.assign(t[e],{extension:t[e].extension??i})))},n=>{const t=n.ref;Object.keys(Ml).filter(e=>!!t[e]).forEach(e=>Ft.remove(t[e]))});var $g=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,Yg=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,Il=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`;const Mh=class Ih extends X{constructor(t){t={...Ih.defaultOptions,...t};const e=W.from({vertex:{source:Il,entryPoint:"mainVertex"},fragment:{source:Il,entryPoint:"mainFragment"}}),i=$.from({vertex:$g,fragment:Yg,name:"alpha-filter"}),{alpha:r,...s}=t,o=new Yu({uAlpha:{value:r,type:"f32"}});super({...s,gpuProgram:e,glProgram:i,resources:{alphaUniforms:o}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t}};Mh.defaultOptions={alpha:1};let Xg=Mh,Hg=0;class jg{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,e,i){const r=new he({...this.textureOptions,width:t,height:e,resolution:1,antialias:i,autoGarbageCollect:!0});return new D({source:r,label:`texturePool_${Hg++}`})}getOptimalTexture(t,e,i=1,r){let s=Math.ceil(t*i-1e-6),o=Math.ceil(e*i-1e-6);s=xr(s),o=xr(o);const a=(s<<17)+(o<<1)+(r?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(s,o,r)),l.source._resolution=i,l.source.width=s/i,l.source.height=o/i,l.source.pixelWidth=s,l.source.pixelHeight=o,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=e,l.updateUvs(),this._poolKeyHash[l.uid]=a,l}getSameSizeTexture(t,e=!1){const i=t.source;return this.getOptimalTexture(t.width,t.height,i._resolution,e)}returnTexture(t){const e=this._poolKeyHash[t.uid];this._texturePool[e].push(t)}clear(t){if(t=t!==!1,t)for(const e in this._texturePool){const i=this._texturePool[e];if(i)for(let r=0;r<i.length;r++)i[r].destroy(!0)}this._texturePool={}}}const Dt=new jg,Eh={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},qg=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function Kg(n){const t=Eh[n],e=t.length;let i=qg,r="";const s="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let o;for(let a=0;a<n;a++){let l=s.replace("%index%",a.toString());o=a,a>=e&&(o=n-a-1),l=l.replace("%value%",t[o].toString()),r+=l,r+=`
`}return i=i.replace("%blur%",r),i=i.replace("%size%",n.toString()),i}const Qg=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function Zg(n,t){const e=Math.ceil(n/2);let i=Qg,r="",s;t?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let o=0;o<n;o++){let a=s.replace("%index%",o.toString());a=a.replace("%sampleIndex%",`${o-(e-1)}.0`),r+=a,r+=`
`}return i=i.replace("%blur%",r),i=i.replace("%size%",n.toString()),i=i.replace("%dimension%",t?"z":"w"),i}function Jg(n,t){const e=Zg(t,n),i=Kg(t);return $.from({vertex:e,fragment:i,name:`blur-${n?"horizontal":"vertical"}-pass-filter`})}var t0=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let strength = gfu.uInputSize.w * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;function e0(n,t){const e=Eh[t],i=e.length,r=[],s=[],o=[];for(let c=0;c<t;c++){r[c]=`@location(${c}) offset${c}: vec2<f32>,`,n?s[c]=`filteredCord + vec2(${c-i+1} * strength, 0.0),`:s[c]=`filteredCord + vec2(0.0, ${c-i+1} * strength),`;const f=c<i?c:t-c-1,d=e[f].toString();o[c]=`finalColor += textureSample(uTexture, uSampler, offset${c}) * ${d};`}const a=r.join(`
`),l=s.join(`
`),u=o.join(`
`),h=t0.replace("%blur-struct%",a).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",a).replace("%blur-sampling%",u);return W.from({vertex:{source:h,entryPoint:"mainVertex"},fragment:{source:h,entryPoint:"mainFragment"}})}const zh=class Oh extends X{constructor(t){t={...Oh.defaultOptions,...t};const e=Jg(t.horizontal,t.kernelSize),i=e0(t.horizontal,t.kernelSize);super({glProgram:e,gpuProgram:i,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(t,e,i,r){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,e,i,r);else{const s=Dt.getSameSizeTexture(e);let o=e,a=s;this._state.blend=!1;for(let l=0;l<this.passes-1;l++){t.applyFilter(this,o,a,t.renderer.type===Cn.WEBGPU);const u=a;a=o,o=u}this._state.blend=!0,t.applyFilter(this,o,i,r),Dt.returnTexture(s)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}};zh.defaultOptions={strength:8,quality:4,kernelSize:5};let yn=zh;class Rh extends X{constructor(...t){let e=t[0]??{};typeof e=="number"&&(k(Q,"BlurFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }"),e={strength:e},t[1]!==void 0&&(e.quality=t[1]),t[2]!==void 0&&(e.resolution=t[2]||"inherit"),t[3]!==void 0&&(e.kernelSize=t[3])),e={...yn.defaultOptions,...e};const{strength:i,quality:r,...s}=e;super({...s,compatibleRenderers:Cn.BOTH,resources:{}}),this._repeatEdgePixels=!1,this.blurXFilter=new yn({horizontal:!1,...e}),this.blurYFilter=new yn({horizontal:!0,...e}),this.quality=r,this.blur=i,this.repeatEdgePixels=!1}apply(t,e,i,r){const s=Math.abs(this.blurXFilter.strength),o=Math.abs(this.blurYFilter.strength);if(s&&o){const a=Dt.getSameSizeTexture(e);this.blurXFilter.blendMode="normal",this.blurXFilter.apply(t,e,a,!0),this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(t,a,i,r),Dt.returnTexture(a)}else o?(this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(t,e,i,r)):(this.blurXFilter.blendMode=this.blendMode,this.blurXFilter.apply(t,e,i,r))}updatePadding(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.blur),Math.abs(this.blurYFilter.blur))*2}get blur(){return this.blurXFilter.blur}set blur(t){this.blurXFilter.blur=this.blurYFilter.blur=t,this.updatePadding()}get quality(){return this.blurXFilter.quality}set quality(t){this.blurXFilter.quality=this.blurYFilter.quality=t}get blurX(){return this.blurXFilter.blur}set blurX(t){this.blurXFilter.blur=t,this.updatePadding()}get blurY(){return this.blurYFilter.blur}set blurY(t){this.blurYFilter.blur=t,this.updatePadding()}get repeatEdgePixels(){return this._repeatEdgePixels}set repeatEdgePixels(t){this._repeatEdgePixels=t,this.updatePadding()}}Rh.defaultOptions={strength:8,quality:4,kernelSize:5};class ue extends H{constructor(t){t instanceof Jt&&(t={context:t});const{context:e,roundPixels:i,...r}=t||{};super({label:"Graphics",...r}),this.canBundle=!0,this.renderPipeId="graphics",this._roundPixels=0,e?this._context=e:this._context=this._ownedContext=new Jt,this._context.on("update",this.onViewUpdate,this),this.allowChildren=!1,this.roundPixels=i??!1}set context(t){t!==this._context&&(this._context.off("update",this.onViewUpdate,this),this._context=t,this._context.on("update",this.onViewUpdate,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}addBounds(t){t.addBounds(this._context.bounds)}containsPoint(t){return this._context.containsPoint(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}onViewUpdate(){if(this._didChangeId+=4096,this._didGraphicsUpdate=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){this._ownedContext&&!t?this._ownedContext.destroy(t):(t===!0||(t==null?void 0:t.context)===!0)&&this._context.destroy(t),this._ownedContext=null,this._context=null,super.destroy(t)}_callContextMethod(t,e){return this.context[t](...e),this}setFillStyle(...t){return this._callContextMethod("setFillStyle",t)}setStrokeStyle(...t){return this._callContextMethod("setStrokeStyle",t)}fill(...t){return this._callContextMethod("fill",t)}stroke(...t){return this._callContextMethod("stroke",t)}texture(...t){return this._callContextMethod("texture",t)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...t){return this._callContextMethod("arc",t)}arcTo(...t){return this._callContextMethod("arcTo",t)}arcToSvg(...t){return this._callContextMethod("arcToSvg",t)}bezierCurveTo(...t){return this._callContextMethod("bezierCurveTo",t)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...t){return this._callContextMethod("ellipse",t)}circle(...t){return this._callContextMethod("circle",t)}path(...t){return this._callContextMethod("path",t)}lineTo(...t){return this._callContextMethod("lineTo",t)}moveTo(...t){return this._callContextMethod("moveTo",t)}quadraticCurveTo(...t){return this._callContextMethod("quadraticCurveTo",t)}rect(...t){return this._callContextMethod("rect",t)}roundRect(...t){return this._callContextMethod("roundRect",t)}poly(...t){return this._callContextMethod("poly",t)}regularPoly(...t){return this._callContextMethod("regularPoly",t)}roundPoly(...t){return this._callContextMethod("roundPoly",t)}roundShape(...t){return this._callContextMethod("roundShape",t)}filletRect(...t){return this._callContextMethod("filletRect",t)}chamferRect(...t){return this._callContextMethod("chamferRect",t)}star(...t){return this._callContextMethod("star",t)}svg(...t){return this._callContextMethod("svg",t)}restore(...t){return this._callContextMethod("restore",t)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...t){return this._callContextMethod("rotate",t)}scaleTransform(...t){return this._callContextMethod("scale",t)}setTransform(...t){return this._callContextMethod("setTransform",t)}transform(...t){return this._callContextMethod("transform",t)}translateTransform(...t){return this._callContextMethod("translate",t)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(t){this._context.fillStyle=t}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(t){this._context.strokeStyle=t}clone(t=!1){return t?new ue(this._context.clone()):(this._ownedContext=null,new ue(this._context))}lineStyle(t,e,i){k(Q,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const r={};return t&&(r.width=t),e&&(r.color=e),i&&(r.alpha=i),this.context.strokeStyle=r,this}beginFill(t,e){k(Q,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const i={};return t&&(i.color=t),e&&(i.alpha=e),this.context.fillStyle=i,this}endFill(){k(Q,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const t=this.context.strokeStyle;return(t.width!==Jt.defaultStrokeStyle.width||t.color!==Jt.defaultStrokeStyle.color||t.alpha!==Jt.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...t){return k(Q,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",t)}drawEllipse(...t){return k(Q,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",t)}drawPolygon(...t){return k(Q,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",t)}drawRect(...t){return k(Q,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",t)}drawRoundedRect(...t){return k(Q,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",t)}drawStar(...t){return k(Q,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",t)}}class wr extends rt{constructor(t,e=!0){super(t[0]instanceof D?t[0]:t[0].texture),this._textures=null,this._durations=null,this._autoUpdate=e,this._isConnectedToTicker=!1,this.animationSpeed=1,this.loop=!0,this.updateAnchor=!1,this.onComplete=null,this.onFrameChange=null,this.onLoop=null,this._currentTime=0,this._playing=!1,this._previousFrame=null,this.textures=t}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Lt.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Lt.shared.add(this.update,this,yr.HIGH),this._isConnectedToTicker=!0))}gotoAndStop(t){this.stop(),this.currentFrame=t}gotoAndPlay(t){this.currentFrame=t,this.play()}update(t){if(!this._playing)return;const e=t.deltaTime,i=this.animationSpeed*e,r=this.currentFrame;if(this._durations!==null){let s=this._currentTime%1*this._durations[this.currentFrame];for(s+=i/60*1e3;s<0;)this._currentTime--,s+=this._durations[this.currentFrame];const o=Math.sign(this.animationSpeed*e);for(this._currentTime=Math.floor(this._currentTime);s>=this._durations[this.currentFrame];)s-=this._durations[this.currentFrame]*o,this._currentTime+=o;this._currentTime+=s/this._durations[this.currentFrame]}else this._currentTime+=i;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):r!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<r||this.animationSpeed<0&&this.currentFrame>r)&&this.onLoop(),this._updateTexture())}_updateTexture(){const t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this.texture=this._textures[t],this.updateAnchor&&this.anchor.copyFrom(this.texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))}destroy(){this.stop(),super.destroy(),this.onComplete=null,this.onFrameChange=null,this.onLoop=null}static fromFrames(t){const e=[];for(let i=0;i<t.length;++i)e.push(D.from(t[i]));return new wr(e)}static fromImages(t){const e=[];for(let i=0;i<t.length;++i)e.push(D.from(t[i]));return new wr(e)}get totalFrames(){return this._textures.length}get textures(){return this._textures}set textures(t){if(t[0]instanceof D)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(let e=0;e<t.length;e++)this._textures.push(t[e].texture),this._durations.push(t[e].time)}this._previousFrame=null,this.gotoAndStop(0),this._updateTexture()}get currentFrame(){let t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t}set currentFrame(t){if(t<0||t>this.totalFrames-1)throw new Error(`[AnimatedSprite]: Invalid frame index value ${t}, expected to be between 0 and totalFrames ${this.totalFrames}.`);const e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this._updateTexture()}get playing(){return this._playing}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(Lt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Lt.shared.add(this.update,this),this._isConnectedToTicker=!0))}}class i0 extends H{constructor(t,e){const{text:i,resolution:r,style:s,anchor:o,width:a,height:l,roundPixels:u,...h}=t;super({...h}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._roundPixels=0,this._bounds=new ve,this._boundsDirty=!0,this._styleClass=e,this.text=i??"",this.style=s,this.resolution=r??null,this.allowChildren=!1,this._anchor=new Ot({_onUpdate:()=>{this.onViewUpdate()}}),o&&(this.anchor=o),this.roundPixels=u??!1,a!==void 0&&(this.width=a),l!==void 0&&(this.height=l)}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}set text(t){t=t.toString(),this._text!==t&&(this._text=t,this.onViewUpdate())}get text(){return this._text}set resolution(t){this._autoResolution=t===null,this._resolution=t,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(t){var e;t=t||{},(e=this._style)==null||e.off("update",this.onViewUpdate,this),t instanceof this._styleClass?this._style=t:this._style=new this._styleClass(t),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(t){this._setWidth(t,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(t){this._setHeight(t,this.bounds.height)}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this.bounds.width,t.height=Math.abs(this.scale.y)*this.bounds.height,t}setSize(t,e){let i,r;typeof t!="object"?(i=t,r=e??t):(i=t.width,r=t.height??t.width),i!==void 0&&this._setWidth(i,this.bounds.width),r!==void 0&&this._setHeight(r,this.bounds.height)}addBounds(t){const e=this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}containsPoint(t){const e=this.bounds.width,i=this.bounds.height,r=-e*this.anchor.x;let s=0;return t.x>=r&&t.x<=r+e&&(s=-i*this.anchor.y,t.y>=s&&t.y<=s+i)}onViewUpdate(){if(this._didChangeId+=4096,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0,this._didTextUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(t=!1){super.destroy(t),this.owner=null,this._bounds=null,this._anchor=null,(typeof t=="boolean"?t:t!=null&&t.style)&&this._style.destroy(t),this._style=null,this._text=null}}function n0(n,t){let e=n[0]??{};return(typeof e=="string"||n[1])&&(k(Q,`use new ${t}({ text: "hi!", style }) instead`),e={text:e,style:n[1]}),e}class ne extends i0{constructor(...t){const e=n0(t,"Text");super(e,Hi),this.renderPipeId="text"}_updateBounds(){const t=this._bounds,e=this._anchor,i=uo.measureText(this._text,this._style),{width:r,height:s}=i;t.minX=-e._x*r,t.maxX=t.minX+r,t.minY=-e._y*s,t.maxY=t.minY+s}}Ft.add($f,Yf);const r0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAALVBMVEUAAAASDzYSDzUUEDgSDzYYEDwSDzYTDzcSEDYTDzgTEDUSDzYSDzYTEDYSDza/LaliAAAADnRSTlMAgO8g3xDPv5BgYK+fUDGa7xgAAAL/SURBVHja7NexSURBFEbhK4sGgrAVmIihIhZgaibaiFiBBRiI2IKJkZEdmNvDLusiCrcGecJb5VVw7uV8HRxmfpiJ0fbz63FWc353EhNXt1nS+mnSUe80Rm/xz1bdjsx5bMyus7DV304es7SjzcXK4sbLtZ/FLeLXXpb3EIPTLO8gBhdZ3rrF1Me5n2UDhxHxng0sImbZwfIydrOFeexkCzc9tp75ES/ZwlfcZwufUfSLO/Xd4YEyWEX2sOwSkobQGEJjCI0hNIbQGEJjCI0hNIbQGEJjCI0hNIbQGEJjCI0hNIbQGEJjCI0hNIbQGEJjCI0hNIbQGEJjCI0hNIbQGEJjCI0hNIbQGEJjCI0hNIbQGEJjCI0hNIbQGEJjCI0hNIbQGEJjCI0hNIbQGEJjCI0hNIbQGEJjCI0hNIbQGEJjCI0hNIbQGEJjCI0hND/sz7EAAAAAwCB/62nsKINEbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EYn+OBQAAAAAG+VtPo2MZpDmiOaI5ojmiOaI5ojmiOaI5ojmiOaI5ojmiOaI5ojmiOaI5ojmiOaI5ojmiOaI5oon9ORYAAAAAGORvPY0dZZDIjciNyI3IjciNyI3IjciNyI3IjciNyE3d17EJwgAQheFfRMQuTVobKxsJdoIbCCIOIE5g5RQWYukUjuAM4gYmwSjIm0ECEdQN7n0bHNy7x/kMMpIH5rJQcpaFir0sPDjJwpOVLBR0ZWFNSxYOdDyKJIO+DLyApQwU4BGSBGCj8EpqY4U3oNZTeBcAg7t1A3CIe0LjqtCGfLRDf1f3DDBYrjzhy1RR5Sk/JkFrsUr50z5uFU0+2y1ovAFXFKcEiN0OrQAAAABJRU5ErkJggg==",s0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAKlBMVEUAAAAiDk0iDk0kEFAjDk0iDk0gEFAiDk0jD00iDk0iDk0iDk0jEE0iDk1Dxv0LAAAADXRSTlMAgO8gYN8Qz7+Qr59QEmA1vwAAAvxJREFUeNrs17FJREEURuErK5oYbANGgpGCmAuikYG5iaCFCDZgZmpoBcYWsYvronB7kSe8VV4F517O18Fh5oeZGO1cvR5nNTfPJzFx/5QlrS8nHfVOY/QW/2zV7cicx8bsIQtb/e3kIks72lysLG68XPtZ3CJ+7WV55zE4zfIOYnCb5a1bTH2c+1k2cBgR79nAImKWHSzvYjtbmMdutvDYY+uZn3GdLXzES7bwFUW/uFPfHR4og1VkD8suIWkIjSE0htAYQmMIjSE0htAYQmMIjSE0htAYQmMIjSE0htAYQmMIjSE0htAYQmMIjSE0htAYQmMIjSE0htAYQmMIjSE0htAYQmMIjSE0htAYQmMIjSE0htAYQmMIjSE0htAYQmMIjSE0htAYQmMIjSE0htAYQmMIjSE0htAYQmMIjSE0htAYQmMIjSE0htAYQvPD/hwLAAAAAAzyt57GjjJI5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRG5EbkRuRGJPbnWAAAAABgkL/1NDqWQZojmiOaI5ojmiOaI5ojmiOaI5ojmiOaI5ojmiOaI5ojmiOaI5ojmiOaI5ojmiOaI5rYn2MBAAAAgEH+1tPYUQaJ3IjciNyI3IjciNyI3IjciNyI3IjciNzUfR2bIAwAURj+RRHLVOmstBWC2NnYWriAIIi94AKWbmDrCO4gbmBiMCJvFwlEUDe4921wcO8e5zPISB5YyULJWRYqTrLwZCELd7ayUNCThR0tWZjR9SiSDPoy8AI2MlCAR0gSgL3CK6mNFd6AWkfhXQAM7tYNwCHuCY2rQhvy0Q79XT0ywGC58oQvU0WVp/yYBK3FKuVPe35QNPnyuKbxBqX19msj9cquAAAAAElFTkSuQmCC",o0=""+new URL("block-pink.png",import.meta.url).href,a0=""+new URL("block-yellow.png",import.meta.url).href,l0=""+new URL("block-violet.png",import.meta.url).href,u0=""+new URL("block-green.png",import.meta.url).href,h0=""+new URL("block-blue.png",import.meta.url).href,c0=""+new URL("block-orange.png",import.meta.url).href,f0=""+new URL("crown.png",import.meta.url).href,d0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAc8AAAHPBAMAAADHVkwYAAAAG1BMVEUAAABQVpdQVZdQVpdPVZhQVZhQVJhQVJdPVZhTs/ULAAAACHRSTlMAgGCgv59QQDgblVoAAAGjSURBVHja7M/BCYMAEABBy0gBKSLvIPalL8u2hL2HIMJsAQuzSJIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIk6Q1910n/O2fb8kSfc9I+m/1Gs2P0AgUFBQUFBQXNQEFBQUFBQUEzUFBQUFBQUNAMFBQUFBQUFDQDBQUFBQUFBc1AQUFBQUFBQTNQUFBQUFBQ0AwUFBQUFBQUNAMFBQUFBQUFzUBBQUFBQUFBM1BQUFBQUFDQDBQUFBQUFBQ0AwUFBQUFBQXNQEFBQUFBQUEzUFBQUFBQUNAMFBQUFBQUFDQDBQUFBQUFBc1AQUFBQUFBL/bnQAAAAABAkL/1CAuUQaJLVFRUVFRUVHSJioqKioqKii5RUVFRUVFR0SUqKioqKioqukRFRUVFRUVFl6ioqKioqKjoEhUVFRUVFRVdoqKioqKioqJLVFRUVFRUVHSJioqKioqKii5RUVFRUVFR0SVa+3NQAwAIAwFsZpA0UIB/Czgg913SOqioqKjo5OjtxK7I6sQpAAAAAAAAAAAAAAAAAAAAAAAAAAAAfh6AALtcsMBrowAAAABJRU5ErkJggg==",p0=""+new URL("volume-off.png",import.meta.url).href,m0=""+new URL("volume-on.png",import.meta.url).href,g0=""+new URL("button-primary.png",import.meta.url).href,_0=""+new URL("button-secondary.png",import.meta.url).href,x0=""+new URL("touch-animation.png",import.meta.url).href,v0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAAFLCAMAAAC5jlrcAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA3yCA7xBgn79AcFCQz68wj+aLosYAAAW0SURBVHja7NoJjsIwEERRO3EWQAmp+192JCQISzDdI2Yo43pHKKm/EUoQ+aSmCfJC0y/DFHGSpnk5HINs6Poh4UGc+y7Ijd2Y8Mx8CHLWtQlZsVfATEudxDZI6BNMYh8q14wwi3W/ivsEj6HebHUDvGrNVjPhmrL1XBPxK7G+Q7ydStmyTqVsmadStnK6iJWylTVgpWxltVgpW1kNVspWXsSFspXX40LZymsi3it9b7YWnClbhrC/3/SVh9jiTNlyPILKlucRVLZyRtxRthxlV7YcJ6hsef5gULZcr6Cy5ciVsnXngOeULc+PdmXr2oz/NBZ9iCNeUbb+6Bn86u+2EgyUrRMYKVuOrZStADNlCw61Zws+VWcLTjVnC14VZwt+1WYLnzeXcohgUEi2QCHuQwFAooRsgQZ/tkCEPVtgQp4tcKHOFtgQZwt8aLMFQqzZAiXObIEU4yGCFt9a4EV3iGBGtha4UR0i2BGtBXo8h4gCsKyFInAcIgrBsBZKQXCIKMfH10JJfIdY91bA4lir9q08h1j9VkA8BBttZc+WtrJnS1vZs6Wt7NnSVvZsaSt7trSVPVvayp4tbWXPlrba0G6vpa3s2dJW2+IuPNBW9mxpK3u2tJU9W9rKni1tZc+WtrJnS1vZs6Wt7NnSVvZsaSurttNWjmxpK7t41FaebGmrH3buILdhGAaAIEhKlKPEcP//2vbUXtdA0Fx2nrA3WyS5mrbCom3FxWUrbqWtuJq2wqJtxcVlK26lrbiyFRdtKy7SVtxKW3FlKy7aVlykrbiVtuLKVly0rbhIW3ErbcWVrbhoW3Fn2opbaStslK24aFtxZ9qKW2krbJStuGhbcWfailtpKyzaVtxKW2Fx2YrbtuLKVlzZiitbcWUrrm2FjctWWExbYV+24h62wmLaCitbYWPaCitbYWPaCtu2wg5bcWkrrGyFHbbipq2wthX2shV22AobtuJsZasftuJsxdmKsxVnK85WnK04W3G24mx1g9/ON/hP5gb/9X3I01ZY2oo6ffPCtq18o//l7McHtK2ocK7PGcj3i7QVtZ3ZpsK9CexpK+rl7pI7ce+X7lpS2x1ed8P/eHOA85YF540Uyts7/yse3nSCjumtMGZsb9BBr+ltw+/27i03jSCMgnDPDSbgEPX+N5tEQjK+gKtfzGl3nSWUhk/zgOZn23/5zUy26ey3WNnWZfMbv2zHzW9HU6j8JjmFym/dY6i8oUCh8jYHhcqbLxQqbwlhqLxR5e0zNg6VN/W81QjHofIGqLdl2ThU3iz2FjYch8ob697ur0+HasxW/6GyFYXKVmiXuRRbUahsRbYeSrEVhcpWGCpbUahsRaGyFYXKVhgqW1GobEWhshWFylZo+1yKrThUtuL/t7YVh8pWHCpbcahsxaGyFYfKVhwqW3GobMWhshWHylYcKlu92+/7UNmKQ2Wr2z2GylYcKltxqGzFobIVh8pWHCpbcaiGb9UA1eitWqAau1UbVCO3mhqhGrdVO1TDtnrZytNXu9g+l4DVDvZ0qLppFQBVL60SoOqjVQZUPbRKgSq/VQ5U8a2CoApvFQVVdKswqIJbrUuJXM1bHlSprfY/JXU1a5lQJbZKhSqwVSxUca2CoQprFQ1VVKtwqJJapUOV0yofqpRWPUCV0Wpd+vj5BbTqBKqAVns/P7/mVsNC1dxqYKiaWw0MVVursaG6bqpgo0PFWwnVdXv9ckJ13bE+nlC9bqmPJlS3O9f7E6q3m+s37dh7qX9b650J1VNwn87lR+xQP5lQfbqtfpxQ0bdRoYJvDUL1aNtaXydU+NVdqOiDJVTwwRIq/GAJFdyp1ppwBKqL7UKFN68RR6D62Emo+C5ChbdNQoU3T0LVEEuoGmIJVUMsoWqIJVR424tQ8Z3W2rLLcFDdbt6Fiu8A1VoHhertlkmo8ObDZCm+8+V+qCGd+gtoESoQFxvEQQAAAABJRU5ErkJggg==",y0=""+new URL("icon-pause.png",import.meta.url).href,b0=""+new URL("grid.png",import.meta.url).href,S0=""+new URL("game-logo.png",import.meta.url).href,w0=""+new URL("leaderboard-logo.png",import.meta.url).href,C0=""+new URL("lightning.png",import.meta.url).href,A0=""+new URL("Golos-Bold.ttf",import.meta.url).href,T0=""+new URL("RobotoFlex.ttf",import.meta.url).href,P0=""+new URL("figure_placed.wav",import.meta.url).href,F0=""+new URL("match_combo.wav",import.meta.url).href,M0=""+new URL("match.wav",import.meta.url).href,I0=""+new URL("theme_music.mp3",import.meta.url).href;var li=(n=>(n.VOLUME_OFF="volume-off",n.VOLUME_ON="volume-on",n))(li||{});function Ce(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function kh(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Kt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ji={duration:.5,overwrite:!1,delay:0},ta,Mt,st,ee=1e8,nt=1/ee,co=Math.PI*2,E0=co/4,z0=0,Bh=Math.sqrt,O0=Math.cos,R0=Math.sin,St=function(t){return typeof t=="string"},pt=function(t){return typeof t=="function"},Fe=function(t){return typeof t=="number"},ea=function(t){return typeof t>"u"},ye=function(t){return typeof t=="object"},Gt=function(t){return t!==!1},ia=function(){return typeof window<"u"},nr=function(t){return pt(t)||St(t)},Uh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},It=Array.isArray,fo=/(?:-?\.?\d|\.)+/gi,Lh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Is=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Dh=/[+-]=-?[.\d]+/,Gh=/[^,'"\[\]\s]+/gi,k0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,lt,me,po,na,Qt={},Cr={},Nh,Vh=function(t){return(Cr=vi(t,Qt))&&$t},ra=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},In=function(t,e){return!e&&console.warn(t)},Wh=function(t,e){return t&&(Qt[t]=e)&&Cr&&(Cr[t]=e)||Qt},En=function(){return 0},B0={suppressEvents:!0,isStart:!0,kill:!1},ar={suppressEvents:!0,kill:!1},U0={suppressEvents:!0},sa={},Be=[],mo={},$h,Ht={},Es={},El=30,lr=[],oa="",aa=function(t){var e=t[0],i,r;if(ye(e)||pt(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=lr.length;r--&&!lr[r].targetTest(e););i=lr[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new pc(t[r],i)))||t.splice(r,1);return t},fi=function(t){return t._gsap||aa(ie(t))[0]._gsap},Yh=function(t,e,i){return(i=t[e])&&pt(i)?t[e]():ea(i)&&t.getAttribute&&t.getAttribute(e)||i},Nt=function(t,e){return(t=t.split(",")).forEach(e)||t},mt=function(t){return Math.round(t*1e5)/1e5||0},bt=function(t){return Math.round(t*1e7)/1e7||0},Gi=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},L0=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},Ar=function(){var t=Be.length,e=Be.slice(0),i,r;for(mo={},Be.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Xh=function(t,e,i,r){Be.length&&!Mt&&Ar(),t.render(e,i,Mt&&e<0&&(t._initted||t._startAt)),Be.length&&!Mt&&Ar()},Hh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Gh).length<2?e:St(t)?t.trim():t},jh=function(t){return t},se=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},D0=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},vi=function(t,e){for(var i in e)t[i]=e[i];return t},zl=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=ye(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},Tr=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},bn=function(t){var e=t.parent||lt,i=t.keyframes?D0(It(t.keyframes)):se;if(Gt(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},G0=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},qh=function(t,e,i,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},Gr=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Ge=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},di=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},N0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},go=function(t,e,i,r){return t._startAt&&(Mt?t._startAt.revert(ar):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},V0=function n(t){return!t||t._ts&&n(t.parent)},Ol=function(t){return t._repeat?qi(t._tTime,t=t.duration()+t._rDelay)*t:0},qi=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},Pr=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Nr=function(t){return t._end=bt(t._start+(t._tDur/Math.abs(t._ts||t._rts||nt)||0))},Vr=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=bt(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Nr(t),i._dirty||di(i,t)),t},Kh=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Pr(t.rawTime(),e),(!e._dur||Gn(0,e.totalDuration(),i)-e._tTime>nt)&&e.render(i,!0)),di(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-nt}},ge=function(t,e,i,r){return e.parent&&Ge(e),e._start=bt((Fe(i)?i:i||t!==lt?Zt(t,i,e):t._time)+e._delay),e._end=bt(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),qh(t,e,"_first","_last",t._sort?"_start":0),_o(e)||(t._recent=e),r||Kh(t,e),t._ts<0&&Vr(t,t._tTime),t},Qh=function(t,e){return(Qt.ScrollTrigger||ra("scrollTrigger",e))&&Qt.ScrollTrigger.create(e,t)},Zh=function(t,e,i,r,s){if(ua(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!Mt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&$h!==jt.frame)return Be.push(t),t._lazy=[s,r],1},W0=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},_o=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},$0=function(t,e,i,r){var s=t.ratio,o=e<0||!e&&(!t._start&&W0(t)&&!(!t._initted&&_o(t))||(t._ts<0||t._dp._ts<0)&&!_o(t))?0:1,a=t._rDelay,l=0,u,h,c;if(a&&t._repeat&&(l=Gn(0,t._tDur,e),h=qi(l,a),t._yoyo&&h&1&&(o=1-o),h!==qi(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Mt||r||t._zTime===nt||!e&&t._zTime){if(!t._initted&&Zh(t,e,r,i,l))return;for(c=t._zTime,t._zTime=e||(i?nt:0),i||(i=e&&!c),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,u=t._pt;u;)u.r(o,u.d),u=u._next;e<0&&go(t,e,i,!0),t._onUpdate&&!i&&qt(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&qt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ge(t,1),!i&&!Mt&&(qt(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Y0=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Ki=function(t,e,i,r){var s=t._repeat,o=bt(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:bt(o*(s+1)+t._rDelay*s):o,a>0&&!r&&Vr(t,t._tTime=t._tDur*a),t.parent&&Nr(t),i||di(t.parent,t),t},Rl=function(t){return t instanceof Rt?di(t):Ki(t,t._dur)},X0={_start:0,endTime:En,totalDuration:En},Zt=function n(t,e,i){var r=t.labels,s=t._recent||X0,o=t.duration()>=ee?s.endTime(!1):t._dur,a,l,u;return St(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),u=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),u&&i&&(l=l/100*(It(i)?i[0]:i).totalDuration()),a>1?n(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},Sn=function(t,e,i){var r=Fe(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Gt(l.vars.inherit)&&l.parent;o.immediateRender=Gt(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new gt(e[0],o,e[s+1])},$e=function(t,e){return t||t===0?e(t):e},Gn=function(t,e,i){return i<t?t:i>e?e:i},Pt=function(t,e){return!St(t)||!(e=k0.exec(t))?"":e[1]},H0=function(t,e,i){return $e(i,function(r){return Gn(t,e,r)})},xo=[].slice,Jh=function(t,e){return t&&ye(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ye(t[0]))&&!t.nodeType&&t!==me},j0=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return St(r)&&!e||Jh(r,1)?(s=i).push.apply(s,ie(r)):i.push(r)})||i},ie=function(t,e,i){return st&&!e&&st.selector?st.selector(t):St(t)&&!i&&(po||!Qi())?xo.call((e||na).querySelectorAll(t),0):It(t)?j0(t,i):Jh(t)?xo.call(t,0):t?[t]:[]},vo=function(t){return t=ie(t)[0]||In("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return ie(e,i.querySelectorAll?i:i===t?In("Invalid scope")||na.createElement("div"):t)}},tc=function(t){return t.sort(function(){return .5-Math.random()})},ec=function(t){if(pt(t))return t;var e=ye(t)?t:{each:t},i=pi(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=e.axis,h=r,c=r;return St(r)?h=c={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(h=r[0],c=r[1]),function(f,d,m){var p=(m||e).length,g=o[p],_,x,v,y,S,A,w,C,b;if(!g){if(b=e.grid==="auto"?0:(e.grid||[1,ee])[1],!b){for(w=-ee;w<(w=m[b++].getBoundingClientRect().left)&&b<p;);b<p&&b--}for(g=o[p]=[],_=l?Math.min(b,p)*h-.5:r%b,x=b===ee?0:l?p*c/b-.5:r/b|0,w=0,C=ee,A=0;A<p;A++)v=A%b-_,y=x-(A/b|0),g[A]=S=u?Math.abs(u==="y"?y:v):Bh(v*v+y*y),S>w&&(w=S),S<C&&(C=S);r==="random"&&tc(g),g.max=w-C,g.min=C,g.v=p=(parseFloat(e.amount)||parseFloat(e.each)*(b>p?p-1:u?u==="y"?p/b:b:Math.max(b,p/b))||0)*(r==="edges"?-1:1),g.b=p<0?s-p:s,g.u=Pt(e.amount||e.each)||0,i=i&&p<0?cc(i):i}return p=(g[f]-g.min)/g.max||0,bt(g.b+(i?i(p):p)*g.v)+g.u}},yo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=bt(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(Fe(i)?0:Pt(i))}},ic=function(t,e){var i=It(t),r,s;return!i&&ye(t)&&(r=i=t.radius||ee,t.values?(t=ie(t.values),(s=!Fe(t[0]))&&(r*=r)):t=yo(t.increment)),$e(e,i?pt(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=ee,h=0,c=t.length,f,d;c--;)s?(f=t[c].x-a,d=t[c].y-l,f=f*f+d*d):f=Math.abs(t[c]-a),f<u&&(u=f,h=c);return h=!r||u<=r?t[h]:o,s||h===o||Fe(o)?h:h+Pt(o)}:yo(t))},nc=function(t,e,i,r){return $e(It(t)?!e:i===!0?!!(i=0):!r,function(){return It(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},q0=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(s,o){return o(s)},r)}},K0=function(t,e){return function(i){return t(parseFloat(i))+(e||Pt(i))}},Q0=function(t,e,i){return sc(t,e,0,1,i)},rc=function(t,e,i){return $e(i,function(r){return t[~~e(r)]})},Z0=function n(t,e,i){var r=e-t;return It(t)?rc(t,n(0,t.length),e):$e(i,function(s){return(r+(s-t)%r)%r+t})},J0=function n(t,e,i){var r=e-t,s=r*2;return It(t)?rc(t,n(0,t.length-1),e):$e(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},zn=function(t){for(var e=0,i="",r,s,o,a;~(r=t.indexOf("random(",e));)o=t.indexOf(")",r),a=t.charAt(r+7)==="[",s=t.substr(r+7,o-r-7).match(a?Gh:fo),i+=t.substr(e,r-e)+nc(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return i+t.substr(e,t.length-e)},sc=function(t,e,i,r,s){var o=e-t,a=r-i;return $e(s,function(l){return i+((l-t)/o*a||0)})},t_=function n(t,e,i,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=St(t),a={},l,u,h,c,f;if(i===!0&&(r=1)&&(i=null),o)t={p:t},e={p:e};else if(It(t)&&!It(e)){for(h=[],c=t.length,f=c-2,u=1;u<c;u++)h.push(n(t[u-1],t[u]));c--,s=function(m){m*=c;var p=Math.min(f,~~m);return h[p](m-p)},i=e}else r||(t=vi(It(t)?[]:{},t));if(!h){for(l in e)la.call(a,t,l,"get",e[l]);s=function(m){return fa(m,a)||(o?t.p:t)}}}return $e(i,s)},kl=function(t,e,i){var r=t.labels,s=ee,o,a,l;for(o in r)a=r[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},qt=function(t,e,i){var r=t.vars,s=r[e],o=st,a=t._ctx,l,u,h;if(s)return l=r[e+"Params"],u=r.callbackScope||t,i&&Be.length&&Ar(),a&&(st=a),h=l?s.apply(u,l):s.call(u),st=o,h},mn=function(t){return Ge(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Mt),t.progress()<1&&qt(t,"onInterrupt"),t},Ui,oc=[],ac=function(t){if(t)if(t=!t.name&&t.default||t,ia()||t.headless){var e=t.name,i=pt(t),r=e&&!i&&t.init?function(){this._props=[]}:t,s={init:En,render:fa,add:la,kill:g_,modifier:m_,rawVars:0},o={targetTest:0,get:0,getSetter:ca,aliases:{},register:0};if(Qi(),t!==r){if(Ht[e])return;se(r,se(Tr(t,s),o)),vi(r.prototype,vi(s,Tr(t,o))),Ht[r.prop=e]=r,t.targetTest&&(lr.push(r),sa[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Wh(e,r),t.register&&t.register($t,r,Vt)}else oc.push(t)},et=255,gn={aqua:[0,et,et],lime:[0,et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,et],navy:[0,0,128],white:[et,et,et],olive:[128,128,0],yellow:[et,et,0],orange:[et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[et,0,0],pink:[et,192,203],cyan:[0,et,et],transparent:[et,et,et,0]},zs=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*et+.5|0},lc=function(t,e,i){var r=t?Fe(t)?[t>>16,t>>8&et,t&et]:0:gn.black,s,o,a,l,u,h,c,f,d,m;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),gn[t])r=gn[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&et,r&et,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&et,t&et]}else if(t.substr(0,3)==="hsl"){if(r=m=t.match(fo),!e)l=+r[0]%360/360,u=+r[1]/100,h=+r[2]/100,o=h<=.5?h*(u+1):h+u-h*u,s=h*2-o,r.length>3&&(r[3]*=1),r[0]=zs(l+1/3,s,o),r[1]=zs(l,s,o),r[2]=zs(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(Lh),i&&r.length<4&&(r[3]=1),r}else r=t.match(fo)||gn.transparent;r=r.map(Number)}return e&&!m&&(s=r[0]/et,o=r[1]/et,a=r[2]/et,c=Math.max(s,o,a),f=Math.min(s,o,a),h=(c+f)/2,c===f?l=u=0:(d=c-f,u=h>.5?d/(2-c-f):d/(c+f),l=c===s?(o-a)/d+(o<a?6:0):c===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(h*100+.5)),i&&r.length<4&&(r[3]=1),r},uc=function(t){var e=[],i=[],r=-1;return t.split(Ue).forEach(function(s){var o=s.match(Bi)||[];e.push.apply(e,o),i.push(r+=o.length+1)}),e.c=i,e},Bl=function(t,e,i){var r="",s=(t+r).match(Ue),o=e?"hsla(":"rgba(",a=0,l,u,h,c;if(!s)return t;if(s=s.map(function(f){return(f=lc(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(h=uc(t),l=i.c,l.join(r)!==h.c.join(r)))for(u=t.replace(Ue,"1").split(Bi),c=u.length-1;a<c;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!u)for(u=t.split(Ue),c=u.length-1;a<c;a++)r+=u[a]+s[a];return r+u[c]},Ue=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in gn)n+="|"+t+"\\b";return new RegExp(n+")","gi")}(),e_=/hsl[a]?\(/,hc=function(t){var e=t.join(" "),i;if(Ue.lastIndex=0,Ue.test(e))return i=e_.test(e),t[1]=Bl(t[1],i),t[0]=Bl(t[0],i,uc(t[1])),!0},On,jt=function(){var n=Date.now,t=500,e=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,h,c,f,d,m=function p(g){var _=n()-r,x=g===!0,v,y,S,A;if((_>t||_<0)&&(i+=_-e),r+=_,S=r-i,v=S-o,(v>0||x)&&(A=++c.frame,f=S-c.time*1e3,c.time=S=S/1e3,o+=v+(v>=s?4:s-v),y=1),x||(l=u(p)),y)for(d=0;d<a.length;d++)a[d](S,f,A,g)};return c={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){Nh&&(!po&&ia()&&(me=po=window,na=me.document||{},Qt.gsap=$t,(me.gsapVersions||(me.gsapVersions=[])).push($t.version),Vh(Cr||me.GreenSockGlobals||!me.gsap&&me||{}),oc.forEach(ac)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&c.sleep(),u=h||function(g){return setTimeout(g,o-c.time*1e3+1|0)},On=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),On=0,u=En},lagSmoothing:function(g,_){t=g||1/0,e=Math.min(_||33,t)},fps:function(g){s=1e3/(g||240),o=c.time*1e3+s},add:function(g,_,x){var v=_?function(y,S,A,w){g(y,S,A,w),c.remove(v)}:g;return c.remove(g),a[x?"unshift":"push"](v),Qi(),v},remove:function(g,_){~(_=a.indexOf(g))&&a.splice(_,1)&&d>=_&&d--},_listeners:a},c}(),Qi=function(){return!On&&jt.wake()},Y={},i_=/^[\d.\-M][\d.\-,\s]/,n_=/["']/g,r_=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),e[r]=isNaN(u)?u.replace(n_,"").trim():+u,r=l.substr(a+1).trim();return e},s_=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},o_=function(t){var e=(t+"").split("("),i=Y[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[r_(e[1])]:s_(t).split(",").map(Hh)):Y._CE&&i_.test(t)?Y._CE("",t):i},cc=function(t){return function(e){return 1-t(1-e)}},fc=function n(t,e){for(var i=t._first,r;i;)i instanceof Rt?n(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?n(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},pi=function(t,e){return t&&(pt(t)?t:Y[t]||o_(t))||e},Si=function(t,e,i,r){i===void 0&&(i=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:r},o;return Nt(t,function(a){Y[a]=Qt[a]=s,Y[o=a.toLowerCase()]=i;for(var l in s)Y[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Y[a+"."+l]=s[l]}),s},dc=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Os=function n(t,e,i){var r=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/co*(Math.asin(1/r)||0),a=function(h){return h===1?1:r*Math.pow(2,-10*h)*R0((h-o)*s)+1},l=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:dc(a);return s=co/s,l.config=function(u,h){return n(t,u,h)},l},Rs=function n(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:dc(i);return r.config=function(s){return n(t,s)},r};Nt("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;Si(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Y.Linear.easeNone=Y.none=Y.Linear.easeIn;Si("Elastic",Os("in"),Os("out"),Os());(function(n,t){var e=1/t,i=2*e,r=2.5*e,s=function(a){return a<e?n*a*a:a<i?n*Math.pow(a-1.5/t,2)+.75:a<r?n*(a-=2.25/t)*a+.9375:n*Math.pow(a-2.625/t,2)+.984375};Si("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Si("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Si("Circ",function(n){return-(Bh(1-n*n)-1)});Si("Sine",function(n){return n===1?1:-O0(n*E0)+1});Si("Back",Rs("in"),Rs("out"),Rs());Y.SteppedEase=Y.steps=Qt.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),s=e?1:0,o=1-nt;return function(a){return((r*Gn(0,o,a)|0)+s)*i}}};ji.ease=Y["quad.out"];Nt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return oa+=n+","+n+"Params,"});var pc=function(t,e){this.id=z0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Yh,this.set=e?e.getSetter:ca},Rn=function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ki(this,+e.duration,1,1),this.data=e.data,st&&(this._ctx=st,st.data.push(this)),On||jt.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Ki(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(Qi(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Vr(this,i),!s._dp||s.parent||Kh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ge(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===nt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Xh(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Ol(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Ol(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?qi(this._tTime,s)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-nt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Pr(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-nt?0:this._rts,this.totalTime(Gn(-Math.abs(this._delay),this._tDur,s),r!==!1),Nr(this),N0(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qi(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==nt&&(this._tTime-=nt)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ge(r,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Gt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pr(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=U0);var r=Mt;return Mt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Mt=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Rl(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Rl(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(Zt(this,i),Gt(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Gt(r))},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-nt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-nt,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-nt)},t.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},t.then=function(i){var r=this;return new Promise(function(s){var o=pt(i)?i:jh,a=function(){var u=r.then;r.then=null,pt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){mn(this)},n}();se(Rn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-nt,_prom:0,_ps:!1,_rts:1});var Rt=function(n){kh(t,n);function t(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Gt(i.sortChildren),lt&&ge(i.parent||lt,Ce(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Qh(Ce(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return Sn(0,arguments,this),this},e.from=function(r,s,o){return Sn(1,arguments,this),this},e.fromTo=function(r,s,o,a){return Sn(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,bn(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new gt(r,s,Zt(this,o),1),this},e.call=function(r,s,o){return ge(this,gt.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,u,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=h,o.parent=this,new gt(r,o,Zt(this,l)),this},e.staggerFrom=function(r,s,o,a,l,u,h){return o.runBackwards=1,bn(o).immediateRender=Gt(o.immediateRender),this.staggerTo(r,s,o,a,l,u,h)},e.staggerFromTo=function(r,s,o,a,l,u,h,c){return a.startAt=o,bn(a).immediateRender=Gt(a.immediateRender),this.staggerTo(r,s,a,l,u,h,c)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,h=r<=0?0:bt(r),c=this._zTime<0!=r<0&&(this._initted||!u),f,d,m,p,g,_,x,v,y,S,A,w;if(this!==lt&&h>l&&r>=0&&(h=l),h!==this._tTime||o||c){if(a!==this._time&&u&&(h+=this._time-a,r+=this._time-a),f=h,y=this._start,v=this._ts,_=!v,c&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(f=bt(h%g),h===l?(p=this._repeat,f=u):(p=~~(h/g),p&&p===h/g&&(f=u,p--),f>u&&(f=u)),S=qi(this._tTime,g),!a&&this._tTime&&S!==p&&this._tTime-S*g-this._dur<=0&&(S=p),A&&p&1&&(f=u-f,w=1),p!==S&&!this._lock){var C=A&&S&1,b=C===(A&&p&1);if(p<S&&(C=!C),a=C?0:h%u?u:h,this._lock=1,this.render(a||(w?0:bt(p*g)),s,!u)._lock=0,this._tTime=h,!s&&this.parent&&qt(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,b&&(this._lock=2,a=C?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;fc(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Y0(this,bt(a),bt(f)),x&&(h-=f-(f=x._start))),this._tTime=h,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!p&&(qt(this,"onStart"),this._tTime!==h))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!_){x=0,m&&(h+=this._zTime=-nt);break}}d=m}else{d=this._last;for(var T=r<0?r:f;d;){if(m=d._prev,(d._act||T<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,o||Mt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!_){x=0,m&&(h+=this._zTime=T?-nt:nt);break}}d=m}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-nt)._zTime=f>=a?1:-1,this._ts))return this._start=y,Nr(this),this.render(r,s,o);this._onUpdate&&!s&&qt(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ge(this,1),!s&&!(r<0&&!a)&&(h||a||!l)&&(qt(this,h===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(Fe(s)||(s=Zt(this,s,r)),!(r instanceof Rn)){if(It(r))return r.forEach(function(a){return o.add(a,s)}),this;if(St(r))return this.addLabel(r,s);if(pt(r))r=gt.delayedCall(0,r);else return this}return this!==r?ge(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ee);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof gt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return St(r)?this.removeLabel(r):pt(r)?this.killTweensOf(r):(Gr(this,r),r===this._recent&&(this._recent=this._last),di(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(jt.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Zt(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=gt.delayedCall(0,s||En,o);return a.data="isPause",this._hasPause=1,ge(this,a,Zt(this,r))},e.removePause=function(r){var s=this._first;for(r=Zt(this,r);s;)s._start===r&&s.data==="isPause"&&Ge(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ze!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=ie(r),l=this._first,u=Fe(s),h;l;)l instanceof gt?L0(l._targets,a)&&(u?(!ze||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=Zt(o,r),l=s,u=l.startAt,h=l.onStart,c=l.onStartParams,f=l.immediateRender,d,m=gt.to(o,se({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||nt,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());m._dur!==g&&Ki(m,g,0,1).render(m._time,!0,!0),d=1}h&&h.apply(m,c||[])}},s));return f?m.render(0):m},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,se({startAt:{time:Zt(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),kl(this,Zt(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),kl(this,Zt(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+nt)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return di(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),di(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=ee,u,h,c;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(c=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ge(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!c&&!o._dp||c&&c.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Ki(o,o===lt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(lt._ts&&(Xh(lt,Pr(r,lt)),$h=jt.frame),jt.frame>=El){El+=Kt.autoSleep||120;var s=lt._first;if((!s||!s._ts)&&Kt.autoSleep&&jt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||jt.sleep()}}},t}(Rn);se(Rt.prototype,{_lock:0,_hasPause:0,_forcing:0});var a_=function(t,e,i,r,s,o,a){var l=new Vt(this._pt,t,e,0,1,yc,null,s),u=0,h=0,c,f,d,m,p,g,_,x;for(l.b=i,l.e=r,i+="",r+="",(_=~r.indexOf("random("))&&(r=zn(r)),o&&(x=[i,r],o(x,t,e),i=x[0],r=x[1]),f=i.match(Is)||[];c=Is.exec(r);)m=c[0],p=r.substring(u,c.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),m!==f[h++]&&(g=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:p||h===1?p:",",s:g,c:m.charAt(1)==="="?Gi(g,m)-g:parseFloat(m)-g,m:d&&d<4?Math.round:0},u=Is.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Dh.test(r)||_)&&(l.e=0),this._pt=l,l},la=function(t,e,i,r,s,o,a,l,u,h){pt(r)&&(r=r(s||0,t,o));var c=t[e],f=i!=="get"?i:pt(c)?u?t[e.indexOf("set")||!pt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](u):t[e]():c,d=pt(c)?u?f_:xc:ha,m;if(St(r)&&(~r.indexOf("random(")&&(r=zn(r)),r.charAt(1)==="="&&(m=Gi(f,r)+(Pt(f)||0),(m||m===0)&&(r=m))),!h||f!==r||bo)return!isNaN(f*r)&&r!==""?(m=new Vt(this._pt,t,e,+f||0,r-(f||0),typeof c=="boolean"?p_:vc,0,d),u&&(m.fp=u),a&&m.modifier(a,this,t),this._pt=m):(!c&&!(e in t)&&ra(e,r),a_.call(this,t,e,f,r,d,l||Kt.stringFilter,u))},l_=function(t,e,i,r,s){if(pt(t)&&(t=wn(t,s,e,i,r)),!ye(t)||t.style&&t.nodeType||It(t)||Uh(t))return St(t)?wn(t,s,e,i,r):t;var o={},a;for(a in t)o[a]=wn(t[a],s,e,i,r);return o},mc=function(t,e,i,r,s,o){var a,l,u,h;if(Ht[t]&&(a=new Ht[t]).init(s,a.rawVars?e[t]:l_(e[t],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Vt(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==Ui))for(u=i._ptLookup[i._targets.indexOf(s)],h=a._props.length;h--;)u[a._props[h]]=l;return a},ze,bo,ua=function n(t,e,i){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,h=r.runBackwards,c=r.yoyoEase,f=r.keyframes,d=r.autoRevert,m=t._dur,p=t._startAt,g=t._targets,_=t.parent,x=_&&_.data==="nested"?_.vars.targets:g,v=t._overwrite==="auto"&&!ta,y=t.timeline,S,A,w,C,b,T,O,N,F,M,E,U,P;if(y&&(!f||!s)&&(s="none"),t._ease=pi(s,ji.ease),t._yEase=c?cc(pi(c===!0?s:c,ji.ease)):0,c&&t._yoyo&&!t._repeat&&(c=t._yEase,t._yEase=t._ease,t._ease=c),t._from=!y&&!!r.runBackwards,!y||f&&!r.stagger){if(N=g[0]?fi(g[0]).harness:0,U=N&&r[N.prop],S=Tr(r,sa),p&&(p._zTime<0&&p.progress(1),e<0&&h&&a&&!d?p.render(-1,!0):p.revert(h&&m?ar:B0),p._lazy=0),o){if(Ge(t._startAt=gt.set(g,se({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!p&&Gt(l),startAt:null,delay:0,onUpdate:u&&function(){return qt(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mt||!a&&!d)&&t._startAt.revert(ar),a&&m&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(h&&m&&!p){if(e&&(a=!1),w=se({overwrite:!1,data:"isFromStart",lazy:a&&!p&&Gt(l),immediateRender:a,stagger:0,parent:_},S),U&&(w[N.prop]=U),Ge(t._startAt=gt.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mt?t._startAt.revert(ar):t._startAt.render(-1,!0)),t._zTime=e,!a)n(t._startAt,nt,nt);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Gt(l)||l&&!m,A=0;A<g.length;A++){if(b=g[A],O=b._gsap||aa(g)[A]._gsap,t._ptLookup[A]=M={},mo[O.id]&&Be.length&&Ar(),E=x===g?A:x.indexOf(b),N&&(F=new N).init(b,U||S,t,E,x)!==!1&&(t._pt=C=new Vt(t._pt,b,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(V){M[V]=C}),F.priority&&(T=1)),!N||U)for(w in S)Ht[w]&&(F=mc(w,S,t,E,b,x))?F.priority&&(T=1):M[w]=C=la.call(t,b,w,"get",S[w],E,x,0,r.stringFilter);t._op&&t._op[A]&&t.kill(b,t._op[A]),v&&t._pt&&(ze=t,lt.killTweensOf(b,M,t.globalTime(e)),P=!t.parent,ze=0),t._pt&&l&&(mo[O.id]=1)}T&&bc(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!P,f&&e<=0&&y.render(ee,!0,!0)},u_=function(t,e,i,r,s,o,a,l){var u=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,c,f,d;if(!u)for(u=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return bo=1,t.vars[e]="+=0",ua(t,a),bo=0,l?In(e+" not eligible for reset"):1;u.push(h)}for(d=u.length;d--;)c=u[d],h=c._pt||c,h.s=(r||r===0)&&!s?r:h.s+(r||0)+o*h.c,h.c=i-h.s,c.e&&(c.e=mt(i)+Pt(c.e)),c.b&&(c.b=h.s+Pt(c.b))},h_=function(t,e){var i=t[0]?fi(t[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return e;s=vi({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},c_=function(t,e,i,r){var s=e.ease||r||"power1.inOut",o,a;if(It(e))a=i[t]||(i[t]=[]),e.forEach(function(l,u){return a.push({t:u/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},wn=function(t,e,i,r,s){return pt(t)?t.call(e,i,r,s):St(t)&&~t.indexOf("random(")?zn(t):t},gc=oa+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",_c={};Nt(gc+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return _c[n]=1});var gt=function(n){kh(t,n);function t(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:bn(r))||this;var l=a.vars,u=l.duration,h=l.delay,c=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,p=l.defaults,g=l.scrollTrigger,_=l.yoyoEase,x=r.parent||lt,v=(It(i)||Uh(i)?Fe(i[0]):"length"in r)?[i]:ie(i),y,S,A,w,C,b,T,O;if(a._targets=v.length?aa(v):In("GSAP target "+i+" not found. https://gsap.com",!Kt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||f||nr(u)||nr(h)){if(r=a.vars,y=a.timeline=new Rt({data:"nested",defaults:p||{},targets:x&&x.data==="nested"?x.vars.targets:v}),y.kill(),y.parent=y._dp=Ce(a),y._start=0,f||nr(u)||nr(h)){if(w=v.length,T=f&&ec(f),ye(f))for(C in f)~gc.indexOf(C)&&(O||(O={}),O[C]=f[C]);for(S=0;S<w;S++)A=Tr(r,_c),A.stagger=0,_&&(A.yoyoEase=_),O&&vi(A,O),b=v[S],A.duration=+wn(u,Ce(a),S,b,v),A.delay=(+wn(h,Ce(a),S,b,v)||0)-a._delay,!f&&w===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),y.to(b,A,T?T(S,b,v):0),y._ease=Y.none;y.duration()?u=h=0:a.timeline=0}else if(m){bn(se(y.vars.defaults,{ease:"none"})),y._ease=pi(m.ease||r.ease||"none");var N=0,F,M,E;if(It(m))m.forEach(function(U){return y.to(v,U,">")}),y.duration();else{A={};for(C in m)C==="ease"||C==="easeEach"||c_(C,m[C],A,m.easeEach);for(C in A)for(F=A[C].sort(function(U,P){return U.t-P.t}),N=0,S=0;S<F.length;S++)M=F[S],E={ease:M.e,duration:(M.t-(S?F[S-1].t:0))/100*u},E[C]=M.v,y.to(v,E,N),N+=E.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return d===!0&&!ta&&(ze=Ce(a),lt.killTweensOf(v),ze=0),ge(x,Ce(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(c||!u&&!m&&a._start===bt(x._time)&&Gt(c)&&V0(Ce(a))&&x.data!=="nested")&&(a._tTime=-nt,a.render(Math.max(0,-h)||0)),g&&Qh(Ce(a),g),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,h=r<0,c=r>l-nt&&!h?l:r<nt?0:r,f,d,m,p,g,_,x,v,y;if(!u)$0(this,r,s,o);else if(c!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=c,v=this.timeline,this._repeat){if(p=u+this._rDelay,this._repeat<-1&&h)return this.totalTime(p*100+r,s,o);if(f=bt(c%p),c===l?(m=this._repeat,f=u):(m=~~(c/p),m&&m===bt(c/p)&&(f=u,m--),f>u&&(f=u)),_=this._yoyo&&m&1,_&&(y=this._yEase,f=u-f),g=qi(this._tTime,p),f===a&&!o&&this._initted&&m===g)return this._tTime=c,this;m!==g&&(v&&this._yEase&&fc(v,_),this.vars.repeatRefresh&&!_&&!this._lock&&this._time!==p&&this._initted&&(this._lock=o=1,this.render(bt(p*m),!0).invalidate()._lock=0))}if(!this._initted){if(Zh(this,h?r:f,o,s,c))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=c,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(f/u),this._from&&(this.ratio=x=1-x),f&&!a&&!s&&!m&&(qt(this,"onStart"),this._tTime!==c))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;v&&v.render(r<0?r:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&go(this,r,s,o),qt(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&qt(this,"onRepeat"),(c===this._tDur||!c)&&this._tTime===c&&(h&&!this._onUpdate&&go(this,r,!0,!0),(r||!u)&&(c===this._tDur&&this._ts>0||!c&&this._ts<0)&&Ge(this,1),!s&&!(h&&!a)&&(c||a||_)&&(qt(this,c===l?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){On||jt.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||ua(this,u),h=this._ease(u/this._dur),u_(this,r,s,o,a,h,u,l)?this.resetTo(r,s,o,a,1):(Vr(this,0),this.parent||qh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?mn(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ze&&ze.vars.overwrite!==!0)._first||mn(this),this.parent&&o!==this.timeline.totalDuration()&&Ki(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ie(r):a,u=this._ptLookup,h=this._pt,c,f,d,m,p,g,_;if((!s||s==="all")&&G0(a,l))return s==="all"&&(this._pt=0),mn(this);for(c=this._op=this._op||[],s!=="all"&&(St(s)&&(p={},Nt(s,function(x){return p[x]=1}),s=p),s=h_(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){f=u[_],s==="all"?(c[_]=s,m=f,d={}):(d=c[_]=c[_]||{},m=s);for(p in m)g=f&&f[p],g&&((!("kill"in g.d)||g.d.kill(p)===!0)&&Gr(this,g,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&h&&mn(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Sn(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return Sn(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return lt.killTweensOf(r,s,o)},t}(Rn);se(gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Nt("staggerTo,staggerFrom,staggerFromTo",function(n){gt[n]=function(){var t=new Rt,e=xo.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var ha=function(t,e,i){return t[e]=i},xc=function(t,e,i){return t[e](i)},f_=function(t,e,i,r){return t[e](r.fp,i)},d_=function(t,e,i){return t.setAttribute(e,i)},ca=function(t,e){return pt(t[e])?xc:ea(t[e])&&t.setAttribute?d_:ha},vc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},p_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},yc=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},fa=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},m_=function(t,e,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,i),s=o},g_=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Gr(this,e,"_pt"):e.dep||(i=1),e=r;return!i},__=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},bc=function(t){for(var e=t._pt,i,r,s,o;e;){for(i=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=i}t._pt=s},Vt=function(){function n(e,i,r,s,o,a,l,u,h){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||vc,this.d=l||this,this.set=u||ha,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=__,this.m=i,this.mt=s,this.tween=r},n}();Nt(oa+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return sa[n]=1});Qt.TweenMax=Qt.TweenLite=gt;Qt.TimelineLite=Qt.TimelineMax=Rt;lt=new Rt({sortChildren:!1,defaults:ji,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kt.stringFilter=hc;var mi=[],ur={},x_=[],Ul=0,v_=0,ks=function(t){return(ur[t]||x_).map(function(e){return e()})},So=function(){var t=Date.now(),e=[];t-Ul>2&&(ks("matchMediaInit"),mi.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=me.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&e.push(i))}),ks("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Ul=t,ks("matchMedia"))},Sc=function(){function n(e,i){this.selector=i&&vo(i),this.data=[],this._r=[],this.isReverted=!1,this.id=v_++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,r,s){pt(i)&&(s=r,r=i,i=pt);var o=this,a=function(){var u=st,h=o.selector,c;return u&&u!==o&&u.data.push(o),s&&(o.selector=vo(s)),st=o,c=r.apply(o,arguments),pt(c)&&o._r.push(c),st=u,o.selector=h,o.isReverted=!1,c};return o.last=a,i===pt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var r=st;st=null,i(this),st=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof gt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,c){return c.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Rt?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof gt)&&u.revert&&u.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=mi.length;o--;)mi[o].id===this.id&&mi.splice(o,1)},t.revert=function(i){this.kill(i||{})},n}(),y_=function(){function n(e){this.contexts=[],this.scope=e,st&&st.data.push(this)}var t=n.prototype;return t.add=function(i,r,s){ye(i)||(i={matches:i});var o=new Sc(0,s||this.scope),a=o.conditions={},l,u,h;st&&!o.selector&&(o.selector=st.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?h=1:(l=me.matchMedia(i[u]),l&&(mi.indexOf(o)<0&&mi.push(o),(a[u]=l.matches)&&(h=1),l.addListener?l.addListener(So):l.addEventListener("change",So)));return h&&r(o,function(c){return o.add(null,c)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Fr={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return ac(r)})},timeline:function(t){return new Rt(t)},getTweensOf:function(t,e){return lt.getTweensOf(t,e)},getProperty:function(t,e,i,r){St(t)&&(t=ie(t)[0]);var s=fi(t||{}).get,o=i?jh:Hh;return i==="native"&&(i=""),t&&(e?o((Ht[e]&&Ht[e].get||s)(t,e,i,r)):function(a,l,u){return o((Ht[a]&&Ht[a].get||s)(t,a,l,u))})},quickSetter:function(t,e,i){if(t=ie(t),t.length>1){var r=t.map(function(h){return $t.quickSetter(h,e,i)}),s=r.length;return function(h){for(var c=s;c--;)r[c](h)}}t=t[0]||{};var o=Ht[e],a=fi(t),l=a.harness&&(a.harness.aliases||{})[e]||e,u=o?function(h){var c=new o;Ui._pt=0,c.init(t,i?h+i:h,Ui,0,[t]),c.render(1,c),Ui._pt&&fa(1,Ui)}:a.set(t,l);return o?u:function(h){return u(t,l,i?h+i:h,a,1)}},quickTo:function(t,e,i){var r,s=$t.to(t,vi((r={},r[e]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,h){return s.resetTo(e,l,u,h)};return o.tween=s,o},isTweening:function(t){return lt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=pi(t.ease,ji.ease)),zl(ji,t||{})},config:function(t){return zl(Kt,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Ht[a]&&!Qt[a]&&In(e+" effect requires "+a+" plugin.")}),Es[e]=function(a,l,u){return i(ie(a),se(l||{},s),u)},o&&(Rt.prototype[e]=function(a,l,u){return this.add(Es[e](a,ye(l)?l:(u=l)&&{},this),u)})},registerEase:function(t,e){Y[t]=pi(e)},parseEase:function(t,e){return arguments.length?pi(t,e):Y},getById:function(t){return lt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Rt(t),r,s;for(i.smoothChildTiming=Gt(t.smoothChildTiming),lt.remove(i),i._dp=0,i._time=i._tTime=lt._time,r=lt._first;r;)s=r._next,(e||!(!r._dur&&r instanceof gt&&r.vars.onComplete===r._targets[0]))&&ge(i,r,r._start-r._delay),r=s;return ge(lt,i,0),i},context:function(t,e){return t?new Sc(t,e):st},matchMedia:function(t){return new y_(t)},matchMediaRefresh:function(){return mi.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||So()},addEventListener:function(t,e){var i=ur[t]||(ur[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=ur[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:Z0,wrapYoyo:J0,distribute:ec,random:nc,snap:ic,normalize:Q0,getUnit:Pt,clamp:H0,splitColor:lc,toArray:ie,selector:vo,mapRange:sc,pipe:q0,unitize:K0,interpolate:t_,shuffle:tc},install:Vh,effects:Es,ticker:jt,updateRoot:Rt.updateRoot,plugins:Ht,globalTimeline:lt,core:{PropTween:Vt,globals:Wh,Tween:gt,Timeline:Rt,Animation:Rn,getCache:fi,_removeLinkedListItem:Gr,reverting:function(){return Mt},context:function(t){return t&&st&&(st.data.push(t),t._ctx=st),st},suppressOverwrites:function(t){return ta=t}}};Nt("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Fr[n]=gt[n]});jt.add(Rt.updateRoot);Ui=Fr.to({},{duration:0});var b_=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},S_=function(t,e){var i=t._targets,r,s,o;for(r in e)for(s=i.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=b_(o,r)),o&&o.modifier&&o.modifier(e[r],t,i[s],r))},Bs=function(t,e){return{name:t,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(St(s)&&(l={},Nt(s,function(h){return l[h]=1}),s=l),e){l={};for(u in s)l[u]=e(s[u]);s=l}S_(a,s)}}}},$t=Fr.registerPlugin({name:"attr",init:function(t,e,i,r,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)Mt?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Bs("roundProps",yo),Bs("modifiers"),Bs("snap",ic))||Fr;gt.version=Rt.version=$t.version="3.12.5";Nh=1;ia()&&Qi();Y.Power0;Y.Power1;Y.Power2;Y.Power3;Y.Power4;Y.Linear;Y.Quad;Y.Cubic;Y.Quart;Y.Quint;Y.Strong;Y.Elastic;Y.Back;Y.SteppedEase;Y.Bounce;Y.Sine;Y.Expo;Y.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ll,Oe,Ni,da,ui,Dl,pa,w_=function(){return typeof window<"u"},Me={},ni=180/Math.PI,Vi=Math.PI/180,Pi=Math.atan2,Gl=1e8,ma=/([A-Z])/g,C_=/(left|right|width|margin|padding|x)/i,A_=/[\s,\(]\S/,_e={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},T_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},P_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},F_=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},wc=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Cc=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},M_=function(t,e,i){return t.style[e]=i},I_=function(t,e,i){return t.style.setProperty(e,i)},E_=function(t,e,i){return t._gsap[e]=i},z_=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},O_=function(t,e,i,r,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},R_=function(t,e,i,r,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},ht="transform",Wt=ht+"Origin",k_=function n(t,e){var i=this,r=this.target,s=r.style,o=r._gsap;if(t in Me&&s){if(this.tfm=this.tfm||{},t!=="transform")t=_e[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=Ae(r,a)}):this.tfm[t]=o.x?o[t]:Ae(r,t),t===Wt&&(this.tfm.zOrigin=o.zOrigin);else return _e.transform.split(",").forEach(function(a){return n.call(i,a,e)});if(this.props.indexOf(ht)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Wt,e,"")),t=ht}(s||e)&&this.props.push(t,e,s[t])},Ac=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},B_=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(ma,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=pa(),(!s||!s.isStart)&&!i[ht]&&(Ac(i),r.zOrigin&&i[Wt]&&(i[Wt]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Tc=function(t,e){var i={target:t,props:[],revert:B_,save:k_};return t._gsap||$t.core.getCache(t),e&&e.split(",").forEach(function(r){return i.save(r)}),i},Pc,Co=function(t,e){var i=Oe.createElementNS?Oe.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Oe.createElement(t);return i&&i.style?i:Oe.createElement(t)},xe=function n(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(ma,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&n(t,Zi(e)||e,1)||""},Nl="O,Moz,ms,Ms,Webkit".split(","),Zi=function(t,e,i){var r=e||ui,s=r.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Nl[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Nl[o]:"")+t},Ao=function(){w_()&&window.document&&(Ll=window,Oe=Ll.document,Ni=Oe.documentElement,ui=Co("div")||{style:{}},Co("div"),ht=Zi(ht),Wt=ht+"Origin",ui.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Pc=!!Zi("perspective"),pa=$t.core.reverting,da=1)},Us=function n(t){var e=Co("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Ni.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Ni.removeChild(e),this.style.cssText=s,o},Vl=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Fc=function(t){var e;try{e=t.getBBox()}catch{e=Us.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Us||(e=Us.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Vl(t,["x","cx","x1"])||0,y:+Vl(t,["y","cy","y1"])||0,width:0,height:0}:e},Mc=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Fc(t))},yi=function(t,e){if(e){var i=t.style,r;e in Me&&e!==Wt&&(e=ht),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(ma,"-$1").toLowerCase())):i.removeAttribute(e)}},Re=function(t,e,i,r,s,o){var a=new Vt(t._pt,e,i,0,1,o?Cc:wc);return t._pt=a,a.b=r,a.e=s,t._props.push(i),a},Wl={deg:1,rad:1,turn:1},U_={grid:1,flex:1},Ne=function n(t,e,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ui.style,l=C_.test(e),u=t.tagName.toLowerCase()==="svg",h=(u?"client":"offset")+(l?"Width":"Height"),c=100,f=r==="px",d=r==="%",m,p,g,_;if(r===o||!s||Wl[r]||Wl[o])return s;if(o!=="px"&&!f&&(s=n(t,e,i,"px")),_=t.getCTM&&Mc(t),(d||o==="%")&&(Me[e]||~e.indexOf("adius")))return m=_?t.getBBox()[l?"width":"height"]:t[h],mt(d?s/m*c:s/100*m);if(a[l?"width":"height"]=c+(f?o:r),p=~e.indexOf("adius")||r==="em"&&t.appendChild&&!u?t:t.parentNode,_&&(p=(t.ownerSVGElement||{}).parentNode),(!p||p===Oe||!p.appendChild)&&(p=Oe.body),g=p._gsap,g&&d&&g.width&&l&&g.time===jt.time&&!g.uncache)return mt(s/g.width*c);if(d&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=c+r,m=t[h],x?t.style[e]=x:yi(t,e)}else(d||o==="%")&&!U_[xe(p,"display")]&&(a.position=xe(t,"position")),p===t&&(a.position="static"),p.appendChild(ui),m=ui[h],p.removeChild(ui),a.position="absolute";return l&&d&&(g=fi(p),g.time=jt.time,g.width=p[h]),mt(f?m*s/c:m&&s?c/m*s:0)},Ae=function(t,e,i,r){var s;return da||Ao(),e in _e&&e!=="transform"&&(e=_e[e],~e.indexOf(",")&&(e=e.split(",")[0])),Me[e]&&e!=="transform"?(s=Bn(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ir(xe(t,Wt))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Mr[e]&&Mr[e](t,e,i)||xe(t,e)||Yh(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ne(t,e,s,i)+i:s},L_=function(t,e,i,r){if(!i||i==="none"){var s=Zi(e,t,1),o=s&&xe(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=xe(t,"borderTopColor"))}var a=new Vt(this._pt,t.style,e,0,1,yc),l=0,u=0,h,c,f,d,m,p,g,_,x,v,y,S;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(p=t.style[e],t.style[e]=r,r=xe(t,e)||r,p?t.style[e]=p:yi(t,e)),h=[i,r],hc(h),i=h[0],r=h[1],f=i.match(Bi)||[],S=r.match(Bi)||[],S.length){for(;c=Bi.exec(r);)g=c[0],x=r.substring(l,c.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),g!==(p=f[u++]||"")&&(d=parseFloat(p)||0,y=p.substr((d+"").length),g.charAt(1)==="="&&(g=Gi(d,g)+y),_=parseFloat(g),v=g.substr((_+"").length),l=Bi.lastIndex-v.length,v||(v=v||Kt.units[e]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(d=Ne(t,e,p,v)||0),a._pt={_next:a._pt,p:x||u===1?x:",",s:d,c:_-d,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?Cc:wc;return Dh.test(r)&&(a.e=0),this._pt=a,a},$l={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},D_=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=$l[i]||i,e[1]=$l[r]||r,e.join(" ")},G_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,s=e.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Me[a]&&(l=1,a=a==="transformOrigin"?Wt:ht),yi(i,a);l&&(yi(i,ht),o&&(o.svg&&i.removeAttribute("transform"),Bn(i,1),o.uncache=1,Ac(r)))}},Mr={clearProps:function(t,e,i,r,s){if(s.data!=="isFromStart"){var o=t._pt=new Vt(t._pt,e,i,0,0,G_);return o.u=r,o.pr=-10,o.tween=s,t._props.push(i),1}}},kn=[1,0,0,1,0,0],Ic={},Ec=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Yl=function(t){var e=xe(t,ht);return Ec(e)?kn:e.substr(7).match(Lh).map(mt)},ga=function(t,e){var i=t._gsap||fi(t),r=t.style,s=Yl(t),o,a,l,u;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?kn:s):(s===kn&&!t.offsetParent&&t!==Ni&&!i.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(u=1,a=t.nextElementSibling,Ni.appendChild(t)),s=Yl(t),l?r.display=l:yi(t,"display"),u&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ni.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},To=function(t,e,i,r,s,o){var a=t._gsap,l=s||ga(t,!0),u=a.xOrigin||0,h=a.yOrigin||0,c=a.xOffset||0,f=a.yOffset||0,d=l[0],m=l[1],p=l[2],g=l[3],_=l[4],x=l[5],v=e.split(" "),y=parseFloat(v[0])||0,S=parseFloat(v[1])||0,A,w,C,b;i?l!==kn&&(w=d*g-m*p)&&(C=y*(g/w)+S*(-p/w)+(p*x-g*_)/w,b=y*(-m/w)+S*(d/w)-(d*x-m*_)/w,y=C,S=b):(A=Fc(t),y=A.x+(~v[0].indexOf("%")?y/100*A.width:y),S=A.y+(~(v[1]||v[0]).indexOf("%")?S/100*A.height:S)),r||r!==!1&&a.smooth?(_=y-u,x=S-h,a.xOffset=c+(_*d+x*p)-_,a.yOffset=f+(_*m+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!i,t.style[Wt]="0px 0px",o&&(Re(o,a,"xOrigin",u,y),Re(o,a,"yOrigin",h,S),Re(o,a,"xOffset",c,a.xOffset),Re(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+S)},Bn=function(t,e){var i=t._gsap||new pc(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),u=xe(t,Wt)||"0",h,c,f,d,m,p,g,_,x,v,y,S,A,w,C,b,T,O,N,F,M,E,U,P,V,I,z,ft,L,oe,zt,Yt;return h=c=f=p=g=_=x=v=y=0,d=m=1,i.svg=!!(t.getCTM&&Mc(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ht]!=="none"?l[ht]:"")),r.scale=r.rotate=r.translate="none"),w=ga(t,i.svg),i.svg&&(i.uncache?(V=t.getBBox(),u=i.xOrigin-V.x+"px "+(i.yOrigin-V.y)+"px",P=""):P=!e&&t.getAttribute("data-svg-origin"),To(t,P||u,!!P||i.originIsAbsolute,i.smooth!==!1,w)),S=i.xOrigin||0,A=i.yOrigin||0,w!==kn&&(O=w[0],N=w[1],F=w[2],M=w[3],h=E=w[4],c=U=w[5],w.length===6?(d=Math.sqrt(O*O+N*N),m=Math.sqrt(M*M+F*F),p=O||N?Pi(N,O)*ni:0,x=F||M?Pi(F,M)*ni+p:0,x&&(m*=Math.abs(Math.cos(x*Vi))),i.svg&&(h-=S-(S*O+A*F),c-=A-(S*N+A*M))):(Yt=w[6],oe=w[7],z=w[8],ft=w[9],L=w[10],zt=w[11],h=w[12],c=w[13],f=w[14],C=Pi(Yt,L),g=C*ni,C&&(b=Math.cos(-C),T=Math.sin(-C),P=E*b+z*T,V=U*b+ft*T,I=Yt*b+L*T,z=E*-T+z*b,ft=U*-T+ft*b,L=Yt*-T+L*b,zt=oe*-T+zt*b,E=P,U=V,Yt=I),C=Pi(-F,L),_=C*ni,C&&(b=Math.cos(-C),T=Math.sin(-C),P=O*b-z*T,V=N*b-ft*T,I=F*b-L*T,zt=M*T+zt*b,O=P,N=V,F=I),C=Pi(N,O),p=C*ni,C&&(b=Math.cos(C),T=Math.sin(C),P=O*b+N*T,V=E*b+U*T,N=N*b-O*T,U=U*b-E*T,O=P,E=V),g&&Math.abs(g)+Math.abs(p)>359.9&&(g=p=0,_=180-_),d=mt(Math.sqrt(O*O+N*N+F*F)),m=mt(Math.sqrt(U*U+Yt*Yt)),C=Pi(E,U),x=Math.abs(C)>2e-4?C*ni:0,y=zt?1/(zt<0?-zt:zt):0),i.svg&&(P=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Ec(xe(t,ht)),P&&t.setAttribute("transform",P))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=p<=0?180:-180,p+=p<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),e=e||i.uncache,i.x=h-((i.xPercent=h&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=c-((i.yPercent=c&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-c)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=mt(d),i.scaleY=mt(m),i.rotation=mt(p)+a,i.rotationX=mt(g)+a,i.rotationY=mt(_)+a,i.skewX=x+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!e&&i.zOrigin||0)&&(r[Wt]=Ir(u)),i.xOffset=i.yOffset=0,i.force3D=Kt.force3D,i.renderTransform=i.svg?V_:Pc?zc:N_,i.uncache=0,i},Ir=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ls=function(t,e,i){var r=Pt(e);return mt(parseFloat(e)+parseFloat(Ne(t,"x",i+"px",r)))+r},N_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,zc(t,e)},Qe="0deg",hn="0px",Ze=") ",zc=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,h=i.rotationY,c=i.rotationX,f=i.skewX,d=i.skewY,m=i.scaleX,p=i.scaleY,g=i.transformPerspective,_=i.force3D,x=i.target,v=i.zOrigin,y="",S=_==="auto"&&t&&t!==1||_===!0;if(v&&(c!==Qe||h!==Qe)){var A=parseFloat(h)*Vi,w=Math.sin(A),C=Math.cos(A),b;A=parseFloat(c)*Vi,b=Math.cos(A),o=Ls(x,o,w*b*-v),a=Ls(x,a,-Math.sin(A)*-v),l=Ls(x,l,C*b*-v+v)}g!==hn&&(y+="perspective("+g+Ze),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(S||o!==hn||a!==hn||l!==hn)&&(y+=l!==hn||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ze),u!==Qe&&(y+="rotate("+u+Ze),h!==Qe&&(y+="rotateY("+h+Ze),c!==Qe&&(y+="rotateX("+c+Ze),(f!==Qe||d!==Qe)&&(y+="skew("+f+", "+d+Ze),(m!==1||p!==1)&&(y+="scale("+m+", "+p+Ze),x.style[ht]=y||"translate(0, 0)"},V_=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,h=i.skewY,c=i.scaleX,f=i.scaleY,d=i.target,m=i.xOrigin,p=i.yOrigin,g=i.xOffset,_=i.yOffset,x=i.forceCSS,v=parseFloat(o),y=parseFloat(a),S,A,w,C,b;l=parseFloat(l),u=parseFloat(u),h=parseFloat(h),h&&(h=parseFloat(h),u+=h,l+=h),l||u?(l*=Vi,u*=Vi,S=Math.cos(l)*c,A=Math.sin(l)*c,w=Math.sin(l-u)*-f,C=Math.cos(l-u)*f,u&&(h*=Vi,b=Math.tan(u-h),b=Math.sqrt(1+b*b),w*=b,C*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),S*=b,A*=b)),S=mt(S),A=mt(A),w=mt(w),C=mt(C)):(S=c,C=f,A=w=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Ne(d,"x",o,"px"),y=Ne(d,"y",a,"px")),(m||p||g||_)&&(v=mt(v+m-(m*S+p*w)+g),y=mt(y+p-(m*A+p*C)+_)),(r||s)&&(b=d.getBBox(),v=mt(v+r/100*b.width),y=mt(y+s/100*b.height)),b="matrix("+S+","+A+","+w+","+C+","+v+","+y+")",d.setAttribute("transform",b),x&&(d.style[ht]=b)},W_=function(t,e,i,r,s){var o=360,a=St(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ni:1),u=l-r,h=r+u+"deg",c,f;return a&&(c=s.split("_")[1],c==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),c==="cw"&&u<0?u=(u+o*Gl)%o-~~(u/o)*o:c==="ccw"&&u>0&&(u=(u-o*Gl)%o-~~(u/o)*o)),t._pt=f=new Vt(t._pt,e,i,r,u,T_),f.e=h,f.u="deg",t._props.push(i),f},Xl=function(t,e){for(var i in e)t[i]=e[i];return t},$_=function(t,e,i){var r=Xl({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,h,c,f,d,m;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[ht]=e,a=Bn(i,1),yi(i,ht),i.setAttribute("transform",u)):(u=getComputedStyle(i)[ht],o[ht]=e,a=Bn(i,1),o[ht]=u);for(l in Me)u=r[l],h=a[l],u!==h&&s.indexOf(l)<0&&(d=Pt(u),m=Pt(h),c=d!==m?Ne(i,l,u,m):parseFloat(u),f=parseFloat(h),t._pt=new Vt(t._pt,a,l,c,f-c,wo),t._pt.u=m||0,t._props.push(l));Xl(a,r)};Nt("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",r="Bottom",s="Left",o=(t<3?[e,i,r,s]:[e+s,e+i,r+i,r+s]).map(function(a){return t<2?n+a:"border"+a+n});Mr[t>1?"border"+n:n]=function(a,l,u,h,c){var f,d;if(arguments.length<4)return f=o.map(function(m){return Ae(a,m,u)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(m,p){return d[m]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(l,d,c)}});var Oc={name:"css",register:Ao,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,s){var o=this._props,a=t.style,l=i.vars.startAt,u,h,c,f,d,m,p,g,_,x,v,y,S,A,w,C;da||Ao(),this.styles=this.styles||Tc(t),C=this.styles.props,this.tween=i;for(p in e)if(p!=="autoRound"&&(h=e[p],!(Ht[p]&&mc(p,e,i,r,t,s)))){if(d=typeof h,m=Mr[p],d==="function"&&(h=h.call(i,r,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=zn(h)),m)m(this,t,p,h,i)&&(w=1);else if(p.substr(0,2)==="--")u=(getComputedStyle(t).getPropertyValue(p)+"").trim(),h+="",Ue.lastIndex=0,Ue.test(u)||(g=Pt(u),_=Pt(h)),_?g!==_&&(u=Ne(t,p,u,_)+_):g&&(h+=g),this.add(a,"setProperty",u,h,r,s,0,0,p),o.push(p),C.push(p,0,a[p]);else if(d!=="undefined"){if(l&&p in l?(u=typeof l[p]=="function"?l[p].call(i,r,t,s):l[p],St(u)&&~u.indexOf("random(")&&(u=zn(u)),Pt(u+"")||u==="auto"||(u+=Kt.units[p]||Pt(Ae(t,p))||""),(u+"").charAt(1)==="="&&(u=Ae(t,p))):u=Ae(t,p),f=parseFloat(u),x=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),c=parseFloat(h),p in _e&&(p==="autoAlpha"&&(f===1&&Ae(t,"visibility")==="hidden"&&c&&(f=0),C.push("visibility",0,a.visibility),Re(this,a,"visibility",f?"inherit":"hidden",c?"inherit":"hidden",!c)),p!=="scale"&&p!=="transform"&&(p=_e[p],~p.indexOf(",")&&(p=p.split(",")[0]))),v=p in Me,v){if(this.styles.save(p),y||(S=t._gsap,S.renderTransform&&!e.parseTransform||Bn(t,e.parseTransform),A=e.smoothOrigin!==!1&&S.smooth,y=this._pt=new Vt(this._pt,a,ht,0,1,S.renderTransform,S,0,-1),y.dep=1),p==="scale")this._pt=new Vt(this._pt,S,"scaleY",S.scaleY,(x?Gi(S.scaleY,x+c):c)-S.scaleY||0,wo),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){C.push(Wt,0,a[Wt]),h=D_(h),S.svg?To(t,h,0,A,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==S.zOrigin&&Re(this,S,"zOrigin",S.zOrigin,_),Re(this,a,p,Ir(u),Ir(h)));continue}else if(p==="svgOrigin"){To(t,h,1,A,0,this);continue}else if(p in Ic){W_(this,S,p,f,x?Gi(f,x+h):h);continue}else if(p==="smoothOrigin"){Re(this,S,"smooth",S.smooth,h);continue}else if(p==="force3D"){S[p]=h;continue}else if(p==="transform"){$_(this,h,t);continue}}else p in a||(p=Zi(p)||p);if(v||(c||c===0)&&(f||f===0)&&!A_.test(h)&&p in a)g=(u+"").substr((f+"").length),c||(c=0),_=Pt(h)||(p in Kt.units?Kt.units[p]:g),g!==_&&(f=Ne(t,p,u,_)),this._pt=new Vt(this._pt,v?S:a,p,f,(x?Gi(f,x+c):c)-f,!v&&(_==="px"||p==="zIndex")&&e.autoRound!==!1?F_:wo),this._pt.u=_||0,g!==_&&_!=="%"&&(this._pt.b=u,this._pt.r=P_);else if(p in a)L_.call(this,t,p,u,x?x+h:h);else if(p in t)this.add(t,p,u||t[p],x?x+h:h,r,s);else if(p!=="parseTransform"){ra(p,h);continue}v||(p in a?C.push(p,0,a[p]):C.push(p,1,u||t[p])),o.push(p)}}w&&bc(this)},render:function(t,e){if(e.tween._time||!pa())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Ae,aliases:_e,getSetter:function(t,e,i){var r=_e[e];return r&&r.indexOf(",")<0&&(e=r),e in Me&&e!==Wt&&(t._gsap.x||Ae(t,"x"))?i&&Dl===i?e==="scale"?z_:E_:(Dl=i||{})&&(e==="scale"?O_:R_):t.style&&!ea(t.style[e])?M_:~e.indexOf("-")?I_:ca(t,e)},core:{_removeProperty:yi,_getMatrix:ga}};$t.utils.checkPrefix=Zi;$t.core.getStyleSaver=Tc;(function(n,t,e,i){var r=Nt(n+","+t+","+e,function(s){Me[s]=1});Nt(t,function(s){Kt.units[s]="deg",Ic[s]=1}),_e[r[13]]=n+","+t,Nt(i,function(s){var o=s.split(":");_e[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Nt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Kt.units[n]="px"});$t.registerPlugin(Oc);var Z=$t.registerPlugin(Oc)||$t;Z.core.Tween;class _a extends H{constructor(){super();G(this,"label","modal");G(this,"background");G(this,"blurFilter");G(this,"isOpen",!1);this.blurFilter=new Rh,this.background=new ue().rect(0,0,window.innerWidth,window.innerHeight).fill({color:"#000217",alpha:.2}),this.addChild(this.background),this.background.alpha=0,this.visible=!1,this.zIndex=10}open(){this.isOpen||(this.isOpen=!this.isOpen,this.visible=!0,Z.to(this.background,{alpha:1,duration:.2}),this.blurFilter.blur=0,this.blurFilter.quality=20,this.parent.gameScene.filters=[this.blurFilter],this.parent.gameScene.eventMode="none",Z.to(this.blurFilter,{blur:50,duration:.2}))}close(){this.isOpen&&(this.parent.gameScene.eventMode="static",this.isOpen=!this.isOpen,this.visible=!1,Z.to(this.blurFilter,{blur:0,duration:.2,onComplete:()=>{this.parent.gameScene.filters=[],this.removeChild(this.background)}}))}}var re=(n=>(n.PRIMARY="primary",n.SECONDARY="secondary",n.ICON="icon",n))(re||{});let tt=1;const Y_=window.innerHeight<window.innerWidth?window.innerHeight:window.innerWidth;tt=Y_/970;tt>1&&(tt=1);const Ve=45*tt,gi=970*tt-Ve*2,wt=99*tt,ke=6*tt,Hl=120*tt,hi=166*tt,X_=845*tt,H_=180*tt,Rc=46*tt,j_=340*tt,Ds=80*tt,q_=64*tt,jl=300*tt,ql=736*tt,K_=831*tt,Q_=255*tt,Z_=128*tt,J_=230*tt,tx=48*tt,Kl=90*tt,ex=90*tt,Ql=410*tt,Zl=382*tt,Jl=54*tt,ix=307*tt,nx=950*tt-Ve,Le=tt;class We extends H{constructor(e,i,r){super();G(this,"background");G(this,"text");G(this,"variant");if(this.eventMode="static",this.cursor="pointer",this.interactive=!0,this.on("pointerdown",i),this.variant=e,e===re.ICON&&(r!=null&&r.textureName)){const s=rt.from(D.EMPTY);s.width=hi,s.height=hi;const o=rt.from(r==null?void 0:r.textureName);o.label="icon",o.width=Hl,o.height=Hl,o.anchor.set(.5),o.x=hi/2,o.y=hi/2,this.addChild(s,o)}if((e===re.PRIMARY||e===re.SECONDARY)&&(r!=null&&r.text)){this.background=rt.from(`button-${e}`),this.background.width=X_,this.background.height=H_;const s=!!(r!=null&&r.textureName);if(this.text=new ne({text:r.text,style:{fill:"white",fontSize:q_,fontFamily:"Golos Bold"}}),this.text.anchor.set(.5),this.text.x=this.background.width/2+(s?Ds/2:0),this.text.y=this.background.height/2,this.addChild(this.background,this.text),this.pivot.x=.5*this.width,s){const o=rt.from(r.textureName);o.width=Ds,o.height=Ds,o.anchor.set(1,.5),o.y=this.background.height/2,o.x=this.text.x-(this.text.width/2+10),this.addChild(o)}}this.pivot.y=.5*this.height,r!=null&&r.fromInvisibility&&(this.alpha=0,Z.to(this,{alpha:1,duration:.2}))}changeIcon(e){const i=this.children.find(r=>r.label==="icon");i.texture=D.from(e)}disable(){}enable(){this.eventMode="static"}}let kc;function rx(n){return kc=n,n}function Un(){return kc}class Po{static setParamValue(t,e){if(t.setValueAtTime){const i=Un().context;t.setValueAtTime(e,i.audioContext.currentTime)}else t.value=e;return e}}class sx extends Et{constructor(){super(...arguments),this.speed=1,this.muted=!1,this.volume=1,this.paused=!1}refresh(){this.emit("refresh")}refreshPaused(){this.emit("refreshPaused")}get filters(){return console.warn("HTML Audio does not support filters"),null}set filters(t){console.warn("HTML Audio does not support filters")}get audioContext(){return console.warn("HTML Audio does not support audioContext"),null}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this.paused}destroy(){this.removeAllListeners()}}let ox=0;const Fo=class extends Et{constructor(n){super(),this.id=ox++,this.init(n)}set(n,t){if(this[n]===void 0)throw new Error(`Property with name ${n} does not exist.`);switch(n){case"speed":this.speed=t;break;case"volume":this.volume=t;break;case"paused":this.paused=t;break;case"loop":this.loop=t;break;case"muted":this.muted=t;break}return this}get progress(){const{currentTime:n}=this._source;return n/this._duration}get paused(){return this._paused}set paused(n){this._paused=n,this.refreshPaused()}_onPlay(){this._playing=!0}_onPause(){this._playing=!1}init(n){this._playing=!1,this._duration=n.source.duration;const t=this._source=n.source.cloneNode(!1);t.src=n.parent.url,t.onplay=this._onPlay.bind(this),t.onpause=this._onPause.bind(this),n.context.on("refresh",this.refresh,this),n.context.on("refreshPaused",this.refreshPaused,this),this._media=n}_internalStop(){this._source&&this._playing&&(this._source.onended=null,this._source.pause())}stop(){this._internalStop(),this._source&&this.emit("stop")}get speed(){return this._speed}set speed(n){this._speed=n,this.refresh()}get volume(){return this._volume}set volume(n){this._volume=n,this.refresh()}get loop(){return this._loop}set loop(n){this._loop=n,this.refresh()}get muted(){return this._muted}set muted(n){this._muted=n,this.refresh()}get filters(){return console.warn("HTML Audio does not support filters"),null}set filters(n){console.warn("HTML Audio does not support filters")}refresh(){const n=this._media.context,t=this._media.parent;this._source.loop=this._loop||t.loop;const e=n.volume*(n.muted?0:1),i=t.volume*(t.muted?0:1),r=this._volume*(this._muted?0:1);this._source.volume=r*e*i,this._source.playbackRate=this._speed*n.speed*t.speed}refreshPaused(){const n=this._media.context,t=this._media.parent,e=this._paused||t.paused||n.paused;e!==this._pausedReal&&(this._pausedReal=e,e?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._source.currentTime,end:this._end,volume:this._volume,speed:this._speed,loop:this._loop})),this.emit("pause",e))}play(n){const{start:t,end:e,speed:i,loop:r,volume:s,muted:o}=n;e&&console.assert(e>t,"End time is before start time"),this._speed=i,this._volume=s,this._loop=!!r,this._muted=o,this.refresh(),this.loop&&e!==null&&(console.warn('Looping not support when specifying an "end" time'),this.loop=!1),this._start=t,this._end=e||this._duration,this._start=Math.max(0,this._start-Fo.PADDING),this._end=Math.min(this._end+Fo.PADDING,this._duration),this._source.onloadedmetadata=()=>{this._source&&(this._source.currentTime=t,this._source.onloadedmetadata=null,this.emit("progress",t/this._duration,this._duration),Lt.shared.add(this._onUpdate,this))},this._source.onended=this._onComplete.bind(this),this._source.play(),this.emit("start")}_onUpdate(){this.emit("progress",this.progress,this._duration),this._source.currentTime>=this._end&&!this._source.loop&&this._onComplete()}_onComplete(){Lt.shared.remove(this._onUpdate,this),this._internalStop(),this.emit("progress",1,this._duration),this.emit("end",this)}destroy(){Lt.shared.remove(this._onUpdate,this),this.removeAllListeners();const n=this._source;n&&(n.onended=null,n.onplay=null,n.onpause=null,this._internalStop()),this._source=null,this._speed=1,this._volume=1,this._loop=!1,this._end=null,this._start=0,this._duration=0,this._playing=!1,this._pausedReal=!1,this._paused=!1,this._muted=!1,this._media&&(this._media.context.off("refresh",this.refresh,this),this._media.context.off("refreshPaused",this.refreshPaused,this),this._media=null)}toString(){return`[HTMLAudioInstance id=${this.id}]`}};let Bc=Fo;Bc.PADDING=.1;class ax extends Et{init(t){this.parent=t,this._source=t.options.source||new Audio,t.url&&(this._source.src=t.url)}create(){return new Bc(this)}get isPlayable(){return!!this._source&&this._source.readyState===4}get duration(){return this._source.duration}get context(){return this.parent.context}get filters(){return null}set filters(t){console.warn("HTML Audio does not support filters")}destroy(){this.removeAllListeners(),this.parent=null,this._source&&(this._source.src="",this._source.load(),this._source=null)}get source(){return this._source}load(t){const e=this._source,i=this.parent;if(e.readyState===4){i.isLoaded=!0;const l=i.autoPlayStart();t&&setTimeout(()=>{t(null,i,l)},0);return}if(!i.url){t(new Error("sound.url or sound.source must be set"));return}e.src=i.url;const r=()=>{a(),i.isLoaded=!0;const l=i.autoPlayStart();t&&t(null,i,l)},s=()=>{a(),t&&t(new Error("Sound loading has been aborted"))},o=()=>{a();const l=`Failed to load audio element (code: ${e.error.code})`;t?t(new Error(l)):console.error(l)},a=()=>{e.removeEventListener("canplaythrough",r),e.removeEventListener("load",r),e.removeEventListener("abort",s),e.removeEventListener("error",o)};e.addEventListener("canplaythrough",r,!1),e.addEventListener("load",r,!1),e.addEventListener("abort",s,!1),e.addEventListener("error",o,!1),e.load()}}class lx{constructor(t,e){this.parent=t,Object.assign(this,e),this.duration=this.end-this.start,console.assert(this.duration>0,"End time must be after start time")}play(t){return this.parent.play({complete:t,speed:this.speed||this.parent.speed,end:this.end,start:this.start,loop:this.loop})}destroy(){this.parent=null}}const Er=["ogg","oga","opus","m4a","mp3","mpeg","wav","aiff","wma","mid","caf"],ux=["audio/mpeg","audio/ogg"],zr={};function hx(n){const t={m4a:"audio/mp4",oga:"audio/ogg",opus:'audio/ogg; codecs="opus"',caf:'audio/x-caf; codecs="opus"'},e=document.createElement("audio"),i={},r=/^no$/;Er.forEach(s=>{const o=e.canPlayType(`audio/${s}`).replace(r,""),a=t[s]?e.canPlayType(t[s]).replace(r,""):"";i[s]=!!o||!!a}),Object.assign(zr,i)}hx();let cx=0;class fx extends Et{constructor(t){super(),this.id=cx++,this._media=null,this._paused=!1,this._muted=!1,this._elapsed=0,this.init(t)}set(t,e){if(this[t]===void 0)throw new Error(`Property with name ${t} does not exist.`);switch(t){case"speed":this.speed=e;break;case"volume":this.volume=e;break;case"muted":this.muted=e;break;case"loop":this.loop=e;break;case"paused":this.paused=e;break}return this}stop(){this._source&&(this._internalStop(),this.emit("stop"))}get speed(){return this._speed}set speed(t){this._speed=t,this.refresh(),this._update(!0)}get volume(){return this._volume}set volume(t){this._volume=t,this.refresh()}get muted(){return this._muted}set muted(t){this._muted=t,this.refresh()}get loop(){return this._loop}set loop(t){this._loop=t,this.refresh()}get filters(){return this._filters}set filters(t){var e;this._filters&&((e=this._filters)==null||e.filter(i=>i).forEach(i=>i.disconnect()),this._filters=null,this._source.connect(this._gain)),this._filters=t!=null&&t.length?t.slice(0):null,this.refresh()}refresh(){if(!this._source)return;const t=this._media.context,e=this._media.parent;this._source.loop=this._loop||e.loop;const i=t.volume*(t.muted?0:1),r=e.volume*(e.muted?0:1),s=this._volume*(this._muted?0:1);Po.setParamValue(this._gain.gain,s*r*i),Po.setParamValue(this._source.playbackRate,this._speed*e.speed*t.speed),this.applyFilters()}applyFilters(){var t;if((t=this._filters)!=null&&t.length){this._source.disconnect();let e=this._source;this._filters.forEach(i=>{e.connect(i.destination),e=i}),e.connect(this._gain)}}refreshPaused(){const t=this._media.context,e=this._media.parent,i=this._paused||e.paused||t.paused;i!==this._pausedReal&&(this._pausedReal=i,i?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._elapsed%this._duration,end:this._end,speed:this._speed,loop:this._loop,volume:this._volume})),this.emit("pause",i))}play(t){const{start:e,end:i,speed:r,loop:s,volume:o,muted:a,filters:l}=t;i&&console.assert(i>e,"End time is before start time"),this._paused=!1;const{source:u,gain:h}=this._media.nodes.cloneBufferSource();this._source=u,this._gain=h,this._speed=r,this._volume=o,this._loop=!!s,this._muted=a,this._filters=l,this.refresh();const c=this._source.buffer.duration;this._duration=c,this._end=i,this._lastUpdate=this._now(),this._elapsed=e,this._source.onended=this._onComplete.bind(this),this._loop?(this._source.loopEnd=i,this._source.loopStart=e,this._source.start(0,e)):i?this._source.start(0,e,i-e):this._source.start(0,e),this.emit("start"),this._update(!0),this.enableTicker(!0)}enableTicker(t){Lt.shared.remove(this._updateListener,this),t&&Lt.shared.add(this._updateListener,this)}get progress(){return this._progress}get paused(){return this._paused}set paused(t){this._paused=t,this.refreshPaused()}destroy(){var t;this.removeAllListeners(),this._internalStop(),this._gain&&(this._gain.disconnect(),this._gain=null),this._media&&(this._media.context.events.off("refresh",this.refresh,this),this._media.context.events.off("refreshPaused",this.refreshPaused,this),this._media=null),(t=this._filters)==null||t.forEach(e=>e.disconnect()),this._filters=null,this._end=null,this._speed=1,this._volume=1,this._loop=!1,this._elapsed=0,this._duration=0,this._paused=!1,this._muted=!1,this._pausedReal=!1}toString(){return`[WebAudioInstance id=${this.id}]`}_now(){return this._media.context.audioContext.currentTime}_updateListener(){this._update()}_update(t=!1){if(this._source){const e=this._now(),i=e-this._lastUpdate;if(i>0||t){const r=this._source.playbackRate.value;this._elapsed+=i*r,this._lastUpdate=e;const s=this._duration;let o;if(this._source.loopStart){const a=this._source.loopEnd-this._source.loopStart;o=(this._source.loopStart+this._elapsed%a)/s}else o=this._elapsed%s/s;this._progress=o,this.emit("progress",this._progress,s)}}}init(t){this._media=t,t.context.events.on("refresh",this.refresh,this),t.context.events.on("refreshPaused",this.refreshPaused,this)}_internalStop(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.stop(0),this._source.disconnect();try{this._source.buffer=null}catch(t){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",t)}this._source=null}}_onComplete(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.disconnect();try{this._source.buffer=null}catch(t){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",t)}}this._source=null,this._progress=1,this.emit("progress",1,this._duration),this.emit("end",this)}}class Uc{constructor(t,e){this._output=e,this._input=t}get destination(){return this._input}get filters(){return this._filters}set filters(t){if(this._filters&&(this._filters.forEach(e=>{e&&e.disconnect()}),this._filters=null,this._input.connect(this._output)),t&&t.length){this._filters=t.slice(0),this._input.disconnect();let e=null;t.forEach(i=>{e===null?this._input.connect(i.destination):e.connect(i.destination),e=i}),e.connect(this._output)}}destroy(){this.filters=null,this._input=null,this._output=null}}const Lc=class extends Uc{constructor(n){const t=n.audioContext,e=t.createBufferSource(),i=t.createGain(),r=t.createAnalyser();e.connect(r),r.connect(i),i.connect(n.destination),super(r,i),this.context=n,this.bufferSource=e,this.gain=i,this.analyser=r}get script(){return this._script||(this._script=this.context.audioContext.createScriptProcessor(Lc.BUFFER_SIZE),this._script.connect(this.context.destination)),this._script}destroy(){super.destroy(),this.bufferSource.disconnect(),this._script&&this._script.disconnect(),this.gain.disconnect(),this.analyser.disconnect(),this.bufferSource=null,this._script=null,this.gain=null,this.analyser=null,this.context=null}cloneBufferSource(){const n=this.bufferSource,t=this.context.audioContext.createBufferSource();t.buffer=n.buffer,Po.setParamValue(t.playbackRate,n.playbackRate.value),t.loop=n.loop;const e=this.context.audioContext.createGain();return t.connect(e),e.connect(this.destination),{source:t,gain:e}}get bufferSize(){return this.script.bufferSize}};let Dc=Lc;Dc.BUFFER_SIZE=0;class dx{init(t){this.parent=t,this._nodes=new Dc(this.context),this._source=this._nodes.bufferSource,this.source=t.options.source}destroy(){this.parent=null,this._nodes.destroy(),this._nodes=null;try{this._source.buffer=null}catch(t){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",t)}this._source=null,this.source=null}create(){return new fx(this)}get context(){return this.parent.context}get isPlayable(){return!!this._source&&!!this._source.buffer}get filters(){return this._nodes.filters}set filters(t){this._nodes.filters=t}get duration(){return console.assert(this.isPlayable,"Sound not yet playable, no duration"),this._source.buffer.duration}get buffer(){return this._source.buffer}set buffer(t){this._source.buffer=t}get nodes(){return this._nodes}load(t){this.source?this._decode(this.source,t):this.parent.url?this._loadUrl(t):t?t(new Error("sound.url or sound.source must be set")):console.error("sound.url or sound.source must be set")}async _loadUrl(t){const e=this.parent.url,i=await ct.get().fetch(e);this._decode(await i.arrayBuffer(),t)}_decode(t,e){const i=(r,s)=>{if(r)e&&e(r);else{this.parent.isLoaded=!0,this.buffer=s;const o=this.parent.autoPlayStart();e&&e(null,this.parent,o)}};t instanceof AudioBuffer?i(null,t):this.parent.context.decode(t,i)}}const Ii=class{static from(n){let t={};typeof n=="string"?t.url=n:n instanceof ArrayBuffer||n instanceof AudioBuffer||n instanceof HTMLAudioElement?t.source=n:Array.isArray(n)?t.url=n:t=n,t={autoPlay:!1,singleInstance:!1,url:null,source:null,preload:!1,volume:1,speed:1,complete:null,loaded:null,loop:!1,...t},Object.freeze(t);const e=Un().useLegacy?new ax:new dx;return new Ii(e,t)}constructor(n,t){this.media=n,this.options=t,this._instances=[],this._sprites={},this.media.init(this);const e=t.complete;this._autoPlayOptions=e?{complete:e}:null,this.isLoaded=!1,this._preloadQueue=null,this.isPlaying=!1,this.autoPlay=t.autoPlay,this.singleInstance=t.singleInstance,this.preload=t.preload||this.autoPlay,this.url=Array.isArray(t.url)?this.preferUrl(t.url):t.url,this.speed=t.speed,this.volume=t.volume,this.loop=t.loop,t.sprites&&this.addSprites(t.sprites),this.preload&&this._preload(t.loaded)}preferUrl(n){const[t]=n.map(e=>({url:e,ext:At.extname(e).slice(1)})).filter(({ext:e})=>zr[e]).sort((e,i)=>Er.indexOf(e.ext)-Er.indexOf(i.ext));if(!t)throw new Error("No supported file type found");return t.url}get context(){return Un().context}pause(){return this.isPlaying=!1,this.paused=!0,this}resume(){return this.isPlaying=this._instances.length>0,this.paused=!1,this}get paused(){return this._paused}set paused(n){this._paused=n,this.refreshPaused()}get speed(){return this._speed}set speed(n){this._speed=n,this.refresh()}get filters(){return this.media.filters}set filters(n){this.media.filters=n}addSprites(n,t){if(typeof n=="object"){const i={};for(const r in n)i[r]=this.addSprites(r,n[r]);return i}console.assert(!this._sprites[n],`Alias ${n} is already taken`);const e=new lx(this,t);return this._sprites[n]=e,e}destroy(){this._removeInstances(),this.removeSprites(),this.media.destroy(),this.media=null,this._sprites=null,this._instances=null}removeSprites(n){if(n){const t=this._sprites[n];t!==void 0&&(t.destroy(),delete this._sprites[n])}else for(const t in this._sprites)this.removeSprites(t);return this}get isPlayable(){return this.isLoaded&&this.media&&this.media.isPlayable}stop(){if(!this.isPlayable)return this.autoPlay=!1,this._autoPlayOptions=null,this;this.isPlaying=!1;for(let n=this._instances.length-1;n>=0;n--)this._instances[n].stop();return this}play(n,t){let e;if(typeof n=="string"?e={sprite:n,loop:this.loop,complete:t}:typeof n=="function"?(e={},e.complete=n):e=n,e={complete:null,loaded:null,sprite:null,end:null,start:0,volume:1,speed:1,muted:!1,loop:!1,...e||{}},e.sprite){const r=e.sprite;console.assert(!!this._sprites[r],`Alias ${r} is not available`);const s=this._sprites[r];e.start=s.start+(e.start||0),e.end=s.end,e.speed=s.speed||1,e.loop=s.loop||e.loop,delete e.sprite}if(e.offset&&(e.start=e.offset),!this.isLoaded)return this._preloadQueue?new Promise(r=>{this._preloadQueue.push(()=>{r(this.play(e))})}):(this._preloadQueue=[],this.autoPlay=!0,this._autoPlayOptions=e,new Promise((r,s)=>{this._preload((o,a,l)=>{this._preloadQueue.forEach(u=>u()),this._preloadQueue=null,o?s(o):(e.loaded&&e.loaded(o,a,l),r(l))})}));(this.singleInstance||e.singleInstance)&&this._removeInstances();const i=this._createInstance();return this._instances.push(i),this.isPlaying=!0,i.once("end",()=>{e.complete&&e.complete(this),this._onComplete(i)}),i.once("stop",()=>{this._onComplete(i)}),i.play(e),i}refresh(){const n=this._instances.length;for(let t=0;t<n;t++)this._instances[t].refresh()}refreshPaused(){const n=this._instances.length;for(let t=0;t<n;t++)this._instances[t].refreshPaused()}get volume(){return this._volume}set volume(n){this._volume=n,this.refresh()}get muted(){return this._muted}set muted(n){this._muted=n,this.refresh()}get loop(){return this._loop}set loop(n){this._loop=n,this.refresh()}_preload(n){this.media.load(n)}get instances(){return this._instances}get sprites(){return this._sprites}get duration(){return this.media.duration}autoPlayStart(){let n;return this.autoPlay&&(n=this.play(this._autoPlayOptions)),n}_removeInstances(){for(let n=this._instances.length-1;n>=0;n--)this._poolInstance(this._instances[n]);this._instances.length=0}_onComplete(n){if(this._instances){const t=this._instances.indexOf(n);t>-1&&this._instances.splice(t,1),this.isPlaying=this._instances.length>0}this._poolInstance(n)}_createInstance(){if(Ii._pool.length>0){const n=Ii._pool.pop();return n.init(this.media),n}return this.media.create()}_poolInstance(n){n.destroy(),Ii._pool.indexOf(n)<0&&Ii._pool.push(n)}};let Or=Ii;Or._pool=[];class Ln extends Uc{constructor(){const t=window,e=new Ln.AudioContext,i=e.createDynamicsCompressor(),r=e.createAnalyser();r.connect(i),i.connect(e.destination),super(r,i),this.autoPause=!0,this._ctx=e,this._offlineCtx=new Ln.OfflineAudioContext(1,2,t.OfflineAudioContext?Math.max(8e3,Math.min(96e3,e.sampleRate)):44100),this.compressor=i,this.analyser=r,this.events=new Et,this.volume=1,this.speed=1,this.muted=!1,this.paused=!1,this._locked=e.state==="suspended"&&("ontouchstart"in globalThis||"onclick"in globalThis),this._locked&&(this._unlock(),this._unlock=this._unlock.bind(this),document.addEventListener("mousedown",this._unlock,!0),document.addEventListener("touchstart",this._unlock,!0),document.addEventListener("touchend",this._unlock,!0)),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),globalThis.addEventListener("focus",this.onFocus),globalThis.addEventListener("blur",this.onBlur)}onFocus(){if(!this.autoPause)return;const t=this._ctx.state;(t==="suspended"||t==="interrupted"||!this._locked)&&(this.paused=this._pausedOnBlur,this.refreshPaused())}onBlur(){this.autoPause&&(this._locked||(this._pausedOnBlur=this._paused,this.paused=!0,this.refreshPaused()))}_unlock(){this._locked&&(this.playEmptySound(),this._ctx.state==="running"&&(document.removeEventListener("mousedown",this._unlock,!0),document.removeEventListener("touchend",this._unlock,!0),document.removeEventListener("touchstart",this._unlock,!0),this._locked=!1))}playEmptySound(){const t=this._ctx.createBufferSource();t.buffer=this._ctx.createBuffer(1,1,22050),t.connect(this._ctx.destination),t.start(0,0,0),t.context.state==="suspended"&&t.context.resume()}static get AudioContext(){const t=window;return t.AudioContext||t.webkitAudioContext||null}static get OfflineAudioContext(){const t=window;return t.OfflineAudioContext||t.webkitOfflineAudioContext||null}destroy(){super.destroy();const t=this._ctx;typeof t.close<"u"&&t.close(),globalThis.removeEventListener("focus",this.onFocus),globalThis.removeEventListener("blur",this.onBlur),this.events.removeAllListeners(),this.analyser.disconnect(),this.compressor.disconnect(),this.analyser=null,this.compressor=null,this.events=null,this._offlineCtx=null,this._ctx=null}get audioContext(){return this._ctx}get offlineContext(){return this._offlineCtx}set paused(t){t&&this._ctx.state==="running"?this._ctx.suspend():!t&&this._ctx.state==="suspended"&&this._ctx.resume(),this._paused=t}get paused(){return this._paused}refresh(){this.events.emit("refresh")}refreshPaused(){this.events.emit("refreshPaused")}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this._paused}decode(t,e){const i=s=>{e(new Error((s==null?void 0:s.message)||"Unable to decode file"))},r=this._offlineCtx.decodeAudioData(t,s=>{e(null,s)},i);r&&r.catch(i)}}class px{constructor(){this.init()}init(){return this.supported&&(this._webAudioContext=new Ln),this._htmlAudioContext=new sx,this._sounds={},this.useLegacy=!this.supported,this}get context(){return this._context}get filtersAll(){return this.useLegacy?[]:this._context.filters}set filtersAll(t){this.useLegacy||(this._context.filters=t)}get supported(){return Ln.AudioContext!==null}add(t,e){if(typeof t=="object"){const s={};for(const o in t){const a=this._getOptions(t[o],e);s[o]=this.add(o,a)}return s}if(console.assert(!this._sounds[t],`Sound with alias ${t} already exists.`),e instanceof Or)return this._sounds[t]=e,e;const i=this._getOptions(e),r=Or.from(i);return this._sounds[t]=r,r}_getOptions(t,e){let i;return typeof t=="string"?i={url:t}:Array.isArray(t)?i={url:t}:t instanceof ArrayBuffer||t instanceof AudioBuffer||t instanceof HTMLAudioElement?i={source:t}:i=t,i={...i,...e||{}},i}get useLegacy(){return this._useLegacy}set useLegacy(t){this._useLegacy=t,this._context=!t&&this.supported?this._webAudioContext:this._htmlAudioContext}get disableAutoPause(){return!this._webAudioContext.autoPause}set disableAutoPause(t){this._webAudioContext.autoPause=!t}remove(t){return this.exists(t,!0),this._sounds[t].destroy(),delete this._sounds[t],this}get volumeAll(){return this._context.volume}set volumeAll(t){this._context.volume=t,this._context.refresh()}get speedAll(){return this._context.speed}set speedAll(t){this._context.speed=t,this._context.refresh()}togglePauseAll(){return this._context.togglePause()}pauseAll(){return this._context.paused=!0,this._context.refreshPaused(),this}resumeAll(){return this._context.paused=!1,this._context.refreshPaused(),this}toggleMuteAll(){return this._context.toggleMute()}muteAll(){return this._context.muted=!0,this._context.refresh(),this}unmuteAll(){return this._context.muted=!1,this._context.refresh(),this}removeAll(){for(const t in this._sounds)this._sounds[t].destroy(),delete this._sounds[t];return this}stopAll(){for(const t in this._sounds)this._sounds[t].stop();return this}exists(t,e=!1){const i=!!this._sounds[t];return e&&console.assert(i,`No sound matching alias '${t}'.`),i}isPlaying(){for(const t in this._sounds)if(this._sounds[t].isPlaying)return!0;return!1}find(t){return this.exists(t,!0),this._sounds[t]}play(t,e){return this.find(t).play(e)}stop(t){return this.find(t).stop()}pause(t){return this.find(t).pause()}resume(t){return this.find(t).resume()}volume(t,e){const i=this.find(t);return e!==void 0&&(i.volume=e),i.volume}speed(t,e){const i=this.find(t);return e!==void 0&&(i.speed=e),i.speed}duration(t){return this.find(t).duration}close(){return this.removeAll(),this._sounds=null,this._webAudioContext&&(this._webAudioContext.destroy(),this._webAudioContext=null),this._htmlAudioContext&&(this._htmlAudioContext.destroy(),this._htmlAudioContext=null),this._context=null,this}}const tu=n=>{var i;const t=n.src;let e=(i=n==null?void 0:n.alias)==null?void 0:i[0];return(!e||n.src===e)&&(e=At.basename(t,At.extname(t))),e},mx={extension:B.Asset,detection:{test:async()=>!0,add:async n=>[...n,...Er.filter(t=>zr[t])],remove:async n=>n.filter(t=>n.includes(t))},loader:{name:"sound",extension:{type:[B.LoadParser],priority:Ie.High},test(n){const t=At.extname(n).slice(1);return!!zr[t]||ux.some(e=>n.startsWith(`data:${e}`))},async load(n,t){const e=await new Promise((i,r)=>Or.from({...t.data,url:n,preload:!0,loaded(s,o){var a,l;s?r(s):i(o),(l=(a=t.data)==null?void 0:a.loaded)==null||l.call(a,s,o)}}));return Un().add(tu(t),e),e},async unload(n,t){Un().remove(tu(t))}}};Ft.add(mx);const Ji=rx(new px),gx=n=>{window.localStorage.setItem("best-score",`${n}`)},xa=()=>{const n=localStorage.getItem("best-score");return n?parseInt(n):0},_x=n=>{localStorage.setItem("soundIsEnabled",`${n}`)},xx=()=>`${localStorage.getItem("soundIsEnabled")??!0}`=="true",Gc=n=>{localStorage.setItem("current-score",`${n}`)},vx=()=>{const n=localStorage.getItem("current-score");return n?parseInt(n):0},yx=()=>!!localStorage.getItem("best-score");var q=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,K=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`,bx=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uGamma;
uniform float uContrast;
uniform float uSaturation;
uniform float uBrightness;
uniform vec4 uColor;

void main()
{
    vec4 c = texture(uTexture, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / uGamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, uSaturation), uContrast);
        rgb.r *= uColor.r;
        rgb.g *= uColor.g;
        rgb.b *= uColor.b;
        c.rgb = rgb * uBrightness;

        c.rgb *= c.a;
    }

    finalColor = c * uColor.a;
}
`,Sx=`struct AdjustmentUniforms {
  uGamma: f32,
  uContrast: f32,
  uSaturation: f32,
  uBrightness: f32,
  uColor: vec4<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> adjustmentUniforms : AdjustmentUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  var sample = textureSample(uTexture, uSampler, uv);
  let color = adjustmentUniforms.uColor;

  if (sample.a > 0.0) 
  {
    sample = vec4<f32>(sample.rgb / sample.a, sample.a);
    var rgb: vec3<f32> = pow(sample.rgb, vec3<f32>(1. / adjustmentUniforms.uGamma));
    rgb = mix(vec3<f32>(.5), mix(vec3<f32>(dot(vec3<f32>(.2125, .7154, .0721), rgb)), rgb, adjustmentUniforms.uSaturation), adjustmentUniforms.uContrast);
    rgb.r *= color.r;
    rgb.g *= color.g;
    rgb.b *= color.b;
    sample = vec4<f32>(rgb.rgb * adjustmentUniforms.uBrightness, sample.a);
    sample = vec4<f32>(sample.rgb * sample.a, sample.a);
  }

  return sample * color.a;
}`,wx=Object.defineProperty,Cx=(n,t,e)=>t in n?wx(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Nc=(n,t,e)=>(Cx(n,typeof t!="symbol"?t+"":t,e),e);const Ax=class Vc extends X{constructor(t){t={...Vc.DEFAULT_OPTIONS,...t};const e=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:Sx,entryPoint:"mainFragment"}}),i=$.from({vertex:q,fragment:bx,name:"adjustment-filter"});super({gpuProgram:e,glProgram:i,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:"f32"},uContrast:{value:t.contrast,type:"f32"},uSaturation:{value:t.saturation,type:"f32"},uBrightness:{value:t.brightness,type:"f32"},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:"vec4<f32>"}}}}),Nc(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(t){this.uniforms.uGamma=t}get contrast(){return this.uniforms.uContrast}set contrast(t){this.uniforms.uContrast=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}get brightness(){return this.uniforms.uBrightness}set brightness(t){this.uniforms.uBrightness=t}get red(){return this.uniforms.uColor[0]}set red(t){this.uniforms.uColor[0]=t}get green(){return this.uniforms.uColor[1]}set green(t){this.uniforms.uColor[1]=t}get blue(){return this.uniforms.uColor[2]}set blue(t){this.uniforms.uColor[2]=t}get alpha(){return this.uniforms.uColor[3]}set alpha(t){this.uniforms.uColor[3]=t}};Nc(Ax,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var Tx=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    finalColor = color;
}`,Px=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4<f32>(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));
  // Average
  color *= 0.25;

  return color;
}`,Fx=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

uniform vec4 uInputClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample top right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Average
    color *= 0.25;

    finalColor = color;
}
`,Mx=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Average
  color *= 0.25;
    
  return color;
}`,Ix=Object.defineProperty,Ex=(n,t,e)=>t in n?Ix(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ri=(n,t,e)=>(Ex(n,typeof t!="symbol"?t+"":t,e),e);const Wc=class $c extends X{constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e))&&(k("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),e={strength:e},t[1]!==void 0&&(e.quality=t[1]),t[2]!==void 0&&(e.clamp=t[2])),e={...$c.DEFAULT_OPTIONS,...e};const i=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:e!=null&&e.clamp?Mx:Px,entryPoint:"mainFragment"}}),r=$.from({vertex:q,fragment:e!=null&&e.clamp?Fx:Tx,name:"kawase-blur-filter"});super({gpuProgram:i,glProgram:r,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ri(this,"uniforms"),ri(this,"_pixelSize",{x:0,y:0}),ri(this,"_clamp"),ri(this,"_kernels",[]),ri(this,"_blur"),ri(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=e.pixelSize??{x:1,y:1},Array.isArray(e.strength)?this.kernels=e.strength:typeof e.strength=="number"&&(this._blur=e.strength,this.quality=e.quality??3),this._clamp=!!e.clamp}apply(t,e,i,r){const s=this.pixelSizeX/e.source.width,o=this.pixelSizeY/e.source.height;let a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,e,i,r);else{const l=Dt.getSameSizeTexture(e);let u=e,h=l,c;const f=this._quality-1;for(let d=0;d<f;d++)a=this._kernels[d]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,u,h,!0),c=u,u=h,h=c;a=this._kernels[f]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,u,i,r),Dt.returnTexture(l)}}get strength(){return this._blur}set strength(t){this._blur=t,this._generateKernels()}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(t){if(typeof t=="number"){this.pixelSizeX=this.pixelSizeY=t;return}if(Array.isArray(t)){this.pixelSizeX=t[0],this.pixelSizeY=t[1];return}this._pixelSize=t}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(t){this.pixelSize.x=t}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(t){this.pixelSize.y=t}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,e)=>t+e+.5,0))}_generateKernels(){const t=this._blur,e=this._quality,i=[t];if(t>0){let r=t;const s=t/e;for(let o=1;o<e;o++)r-=s,i.push(r)}this._kernels=i,this._updatePadding()}};ri(Wc,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let Yc=Wc;var zx=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uBloomScale;
uniform float uBrightness;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    color.rgb *= uBrightness;
    vec4 bloomColor = vec4(texture(uMapTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= uBloomScale;
    finalColor = color + bloomColor;
}
`,Ox=`struct AdvancedBloomUniforms {
  uBloomScale: f32,
  uBrightness: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> advancedBloomUniforms : AdvancedBloomUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color = textureSample(uTexture, uSampler, uv);
  color = vec4<f32>(color.rgb * advancedBloomUniforms.uBrightness, color.a);

  var bloomColor = vec4<f32>(textureSample(uMapTexture, uSampler, uv).rgb, 0.0);
  bloomColor = vec4<f32>(bloomColor.rgb * advancedBloomUniforms.uBloomScale, bloomColor.a);
  
  return color + bloomColor;
}
`,Rx=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uThreshold;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > uThreshold) {
        finalColor = color;
    } else {
        finalColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,kx=`struct ExtractBrightnessUniforms {
  uThreshold: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> extractBrightnessUniforms : ExtractBrightnessUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // A simple & fast algorithm for getting brightness.
  // It's inaccurate, but good enough for this feature.
  let max: f32 = max(max(color.r, color.g), color.b);
  let min: f32 = min(min(color.r, color.g), color.b);
  let brightness: f32 = (max + min) * 0.5;

  return select(vec4<f32>(0.), color, brightness > extractBrightnessUniforms.uThreshold);
}
`,Bx=Object.defineProperty,Ux=(n,t,e)=>t in n?Bx(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Xc=(n,t,e)=>(Ux(n,typeof t!="symbol"?t+"":t,e),e);const Hc=class jc extends X{constructor(t){t={...jc.DEFAULT_OPTIONS,...t};const e=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:kx,entryPoint:"mainFragment"}}),i=$.from({vertex:q,fragment:Rx,name:"extract-brightness-filter"});super({gpuProgram:e,glProgram:i,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:"f32"}}}}),Xc(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(t){this.uniforms.uThreshold=t}};Xc(Hc,"DEFAULT_OPTIONS",{threshold:.5});let Lx=Hc;var Dx=Object.defineProperty,Gx=(n,t,e)=>t in n?Dx(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ei=(n,t,e)=>(Gx(n,typeof t!="symbol"?t+"":t,e),e);const Nx=class qc extends X{constructor(t){t={...qc.DEFAULT_OPTIONS,...t};const e=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:Ox,entryPoint:"mainFragment"}}),i=$.from({vertex:q,fragment:zx,name:"advanced-bloom-filter"});super({gpuProgram:e,glProgram:i,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:"f32"},uBrightness:{value:t.brightness,type:"f32"}},uMapTexture:D.WHITE}}),Ei(this,"uniforms"),Ei(this,"bloomScale",1),Ei(this,"brightness",1),Ei(this,"_extractFilter"),Ei(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new Lx({threshold:t.threshold}),this._blurFilter=new Yc({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(t,e,i,r){const s=Dt.getSameSizeTexture(e);this._extractFilter.apply(t,e,s,!0);const o=Dt.getSameSizeTexture(e);this._blurFilter.apply(t,s,o,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=o.source,t.applyFilter(this,e,i,r),Dt.returnTexture(o),Dt.returnTexture(s)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}};Ei(Nx,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});var Vx=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSize;
uniform vec3 uColor;
uniform float uReplaceColor;

uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor(coord / size) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod(coord, size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, 4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the grid position
    vec2 pixCoord = pixelate(coord, vec2(uSize));
    pixCoord = unmapCoord(pixCoord);

    // sample the color at grid position
    vec4 color = texture(uTexture, pixCoord);

    // brightness of the color as it's perceived by the human eye
    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;

    // determine the character to use
    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(uSize));

    finalColor = (uReplaceColor > 0.5 ? vec4(uColor, 1.) : color) * character( n, vec2(-1.0) + modd * 2.0);
}
`,Wx=`struct AsciiUniforms {
    uSize: f32,
    uColor: vec3<f32>,
    uReplaceColor: f32,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> asciiUniforms : AsciiUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let pixelSize: f32 = asciiUniforms.uSize;
    let coord: vec2<f32> = mapCoord(uv);

    // get the rounded color..
    var pixCoord: vec2<f32> = pixelate(coord, vec2<f32>(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    var color = textureSample(uTexture, uSampler, pixCoord);

    // determine the character to use
    let gray: f32 = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;
    
    var n: f32 = 65536.0; // .
    if (gray > 0.2) {
        n = 65600.0;    // :
    }
    if (gray > 0.3) {
        n = 332772.0;   // *
    }
    if (gray > 0.4) {
        n = 15255086.0; // o
    }
    if (gray > 0.5) {
        n = 23385164.0; // &
    }
    if (gray > 0.6) {
        n = 15252014.0; // 8
    }
    if (gray > 0.7) {
        n = 13199452.0; // @
    }
    if (gray > 0.8) {
        n = 11512810.0; // #
    }

    // get the mod..
    let modd: vec2<f32> = getMod(coord, vec2<f32>(pixelSize));
    return select(color, vec4<f32>(asciiUniforms.uColor, 1.), asciiUniforms.uReplaceColor > 0.5) * character(n, vec2<f32>(-1.0) + modd * 2.0);
}

fn pixelate(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return floor( coord / size ) * size;
}

fn getMod(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return moduloVec2( coord , size) / size;
}

fn character(n: f32, p: vec2<f32>) -> f32
{
    var q: vec2<f32> = floor(p*vec2<f32>(4.0, 4.0) + 2.5);

    if (clamp(q.x, 0.0, 4.0) == q.x)
    {
        if (clamp(q.y, 0.0, 4.0) == q.y)
        {
        if (i32(modulo(n/exp2(q.x + 5.0*q.y), 2.0)) == 1)
        {
            return 1.0;
        }
        }
    }

    return 0.0;
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn moduloVec2(x: vec2<f32>, y: vec2<f32>) -> vec2<f32>
{
  return x - y * floor(x/y);
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord *= gfu.uInputSize.xy;
    mappedCoord += gfu.uOutputFrame.xy;
    return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord -= gfu.uOutputFrame.xy;
    mappedCoord /= gfu.uInputSize.xy;
    return mappedCoord;
}`,$x=Object.defineProperty,Yx=(n,t,e)=>t in n?$x(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Mo=(n,t,e)=>(Yx(n,typeof t!="symbol"?t+"":t,e),e);const Xx=class Kc extends X{constructor(...t){let e=t[0]??{};typeof e=="number"&&(k("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),e={size:e});const i=(e==null?void 0:e.color)&&e.replaceColor!==!1;e={...Kc.DEFAULT_OPTIONS,...e};const r=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:Wx,entryPoint:"mainFragment"}}),s=$.from({vertex:q,fragment:Vx,name:"ascii-filter"});super({gpuProgram:r,glProgram:s,resources:{asciiUniforms:{uSize:{value:e.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(i),type:"f32"}}}}),Mo(this,"uniforms"),Mo(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new j,this.color=e.color??16777215}get size(){return this.uniforms.uSize}set size(t){this.uniforms.uSize=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(t){this.uniforms.uReplaceColor=t?1:0}};Mo(Xx,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var Hx=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTransform;
uniform vec3 uLightColor;
uniform float uLightAlpha;
uniform vec3 uShadowColor;
uniform float uShadowAlpha;

uniform vec4 uInputSize;

void main(void) {
    vec2 transform = vec2(1.0 / uInputSize) * vec2(uTransform.x, uTransform.y);
    vec4 color = texture(uTexture, vTextureCoord);
    float light = texture(uTexture, vTextureCoord - transform).a;
    float shadow = texture(uTexture, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, uLightColor, clamp((color.a - light) * uLightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, uShadowColor, clamp((color.a - shadow) * uShadowAlpha, 0.0, 1.0));
    finalColor = vec4(color.rgb * color.a, color.a);
}
`,jx=`struct BevelUniforms {
  uLightColor: vec3<f32>,
  uLightAlpha: f32,
  uShadowColor: vec3<f32>,
  uShadowAlpha: f32,
  uTransform: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bevelUniforms : BevelUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let transform = vec2<f32>(1.0 / gfu.uInputSize.xy) * vec2<f32>(bevelUniforms.uTransform.x, bevelUniforms.uTransform.y);
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightSample: f32 = textureSample(uTexture, uSampler, uv - transform).a;
  let shadowSample: f32 = textureSample(uTexture, uSampler, uv + transform).a;

  let light = vec4<f32>(bevelUniforms.uLightColor, bevelUniforms.uLightAlpha);
  let shadow = vec4<f32>(bevelUniforms.uShadowColor, bevelUniforms.uShadowAlpha);

  color = vec4<f32>(mix(color.rgb, light.rgb, clamp((color.a - lightSample) * light.a, 0.0, 1.0)), color.a);
  color = vec4<f32>(mix(color.rgb, shadow.rgb, clamp((color.a - shadowSample) * shadow.a, 0.0, 1.0)), color.a);
  
  return vec4<f32>(color.rgb * color.a, color.a);
}`,qx=Object.defineProperty,Kx=(n,t,e)=>t in n?qx(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,zi=(n,t,e)=>(Kx(n,typeof t!="symbol"?t+"":t,e),e);const Qx=class Qc extends X{constructor(t){t={...Qc.DEFAULT_OPTIONS,...t};const e=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:jx,entryPoint:"mainFragment"}}),i=$.from({vertex:q,fragment:Hx,name:"bevel-filter"});super({gpuProgram:e,glProgram:i,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:t.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:t.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),zi(this,"uniforms"),zi(this,"_thickness"),zi(this,"_rotation"),zi(this,"_lightColor"),zi(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new j,this._shadowColor=new j,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/Wi}set rotation(t){this._rotation=t*Wi,this._updateTransform()}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(t){this._lightColor.setValue(t);const[e,i,r]=this._lightColor.toArray();this.uniforms.uLightColor[0]=e,this.uniforms.uLightColor[1]=i,this.uniforms.uLightColor[2]=r}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(t){this.uniforms.uLightAlpha=t}get shadowColor(){return this._shadowColor.value}set shadowColor(t){this._shadowColor.setValue(t);const[e,i,r]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=e,this.uniforms.uShadowColor[1]=i,this.uniforms.uShadowColor[2]=r}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(t){this.uniforms.uShadowAlpha=t}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};zi(Qx,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var Zx=Object.defineProperty,Jx=(n,t,e)=>t in n?Zx(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,hr=(n,t,e)=>(Jx(n,typeof t!="symbol"?t+"":t,e),e);const tv=class Zc extends Xg{constructor(...t){let e=t[0]??{};if(typeof e=="number"||Array.isArray(e)||"x"in e&&"y"in e){k("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let i=e;Array.isArray(i)&&(i={x:i[0],y:i[1]}),e={strength:i},t[1]!==void 0&&(e.quality=t[1]),t[2]!==void 0&&(e.resolution=t[2]),t[3]!==void 0&&(e.kernelSize=t[3])}e={...Zc.DEFAULT_OPTIONS,...e},super(),hr(this,"_blurXFilter"),hr(this,"_blurYFilter"),hr(this,"_strength"),this._strength={x:2,y:2},e.strength&&(typeof e.strength=="number"?(this._strength.x=e.strength,this._strength.y=e.strength):(this._strength.x=e.strength.x,this._strength.y=e.strength.y)),this._blurXFilter=new yn({...e,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new yn({...e,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,e)}apply(t,e,i,r){const s=Dt.getSameSizeTexture(e);t.applyFilter(this,e,i,r),this._blurXFilter.apply(t,e,s,!0),this._blurYFilter.apply(t,s,i,!1),Dt.returnTexture(s)}get strength(){return this._strength}set strength(t){this._strength=typeof t=="number"?{x:t,y:t}:t,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(t){this.strength.x=t,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(t){this.strength.y=t,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return k("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(t){k("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=t}get blurX(){return k("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(t){k("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=t}get blurY(){return k("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(t){k("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=t}};hr(tv,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var ev=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

void main()
{
    vec2 coord = vTextureCoord * uInputSize.xy;
    coord -= uCenter * uDimensions.xy;
    float distance = length(coord);

    if (distance < uRadius) {
        float percent = distance / uRadius;
        if (uStrength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, uRadius / distance, percent), uStrength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + uStrength * 0.75) * uRadius / distance, 1.0 - percent);
        }
    }

    coord += uCenter * uDimensions.xy;
    coord /= uInputSize.xy;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);

    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    finalColor = color;
}
`,iv=`struct BulgePinchUniforms {
  uDimensions: vec2<f32>,
  uCenter: vec2<f32>,
  uRadius: f32,
  uStrength: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bulgePinchUniforms : BulgePinchUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let dimensions: vec2<f32> = bulgePinchUniforms.uDimensions;
  let center: vec2<f32> = bulgePinchUniforms.uCenter;
  let radius: f32 = bulgePinchUniforms.uRadius;
  let strength: f32 = bulgePinchUniforms.uStrength;
  var coord: vec2<f32> = (uv * gfu.uInputSize.xy) - center * dimensions.xy;

  let distance: f32 = length(coord);

  if (distance < radius) {
      let percent: f32 = distance / radius;
      if (strength > 0.0) {
          coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
      } else {
          coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
      }
  }
    coord += (center * dimensions.xy);
    coord /= gfu.uInputSize.xy;

    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);
    var color: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    if (coord.x != clampedCoord.x && coord.y != clampedCoord.y) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    return color;
}

fn compareVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
  if (x.x == y.x && x.y == y.y)
  {
    return true;
  }

  return false;
}`,nv=Object.defineProperty,rv=(n,t,e)=>t in n?nv(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Jc=(n,t,e)=>(rv(n,typeof t!="symbol"?t+"":t,e),e);const sv=class tf extends X{constructor(t){t={...tf.DEFAULT_OPTIONS,...t};const e=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:iv,entryPoint:"mainFragment"}}),i=$.from({vertex:q,fragment:ev,name:"bulge-pinch-filter"});super({gpuProgram:e,glProgram:i,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:t.center,type:"vec2<f32>"},uRadius:{value:t.radius,type:"f32"},uStrength:{value:t.strength,type:"f32"}}}}),Jc(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(t,e,i,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,t.applyFilter(this,e,i,r)}get center(){return this.uniforms.uCenter}set center(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}};Jc(sv,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var ov=`precision highp float;
in vec2 vTextureCoord;
in vec2 vFilterCoord;
out vec4 finalColor;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform sampler2D uTexture;
uniform vec4 uOptions;
uniform vec2 uCounts;
uniform vec3 uColors[MAX_STOPS];
uniform vec4 uStops[MAX_STOPS];

const float PI = 3.1415926538;
const float PI_2 = PI*2.;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(pos, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    int uType = int(uOptions[0]);
    float uAngle = uOptions[1];
    float uAlpha = uOptions[2];
    float uReplace = uOptions[3];

    int uNumStops = int(uCounts[0]);
    float uMaxColors = uCounts[1];

    // current/original color
    vec4 currentColor = texture(uTexture, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        finalColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, int(uType), radians(uAngle));

    // check gradient bounds
    float offsetMin = uStops[0][0];
    float offsetMax = 0.0;

    int numStops = int(uNumStops);

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == numStops-1){ // last index
            offsetMax = uStops[i][0];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        finalColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0.) {
        float stepSize = 1./uMaxColors;
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uStops[i][0]) {
            from = ColorStop(uStops[i][0], uColors[i], uStops[i][1]);
            to = ColorStop(uStops[i+1][0], uColors[i+1], uStops[i+1][1]);
        }

        if (i == numStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    if (uReplace < 0.5) {
        // mix resulting color with current color
        finalColor = gradientColor + currentColor*(1.-gradientColor.a);
    } else {
        // replace with gradient color
        finalColor = gradientColor;
    }
}
`,av=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterCoord = vTextureCoord * uInputSize.xy / uOutputFrame.zw;
}
`,eu=`struct BaseUniforms {
  uOptions: vec4<f32>,
  uCounts: vec2<f32>,
};

struct StopsUniforms {
  uColors: array<vec3<f32>, MAX_STOPS>,
  uStops: array<vec4<f32>, MAX_STOPS>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> baseUniforms : BaseUniforms;
@group(1) @binding(1) var<uniform> stopsUniforms : StopsUniforms;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn filterCoord( vTextureCoord:vec2<f32> ) -> vec2<f32>
{
    return vTextureCoord * gfu.uInputSize.xy / gfu.uOutputFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  let vTextureCoord: vec2<f32> = filterTextureCoord(aPosition);
  return VSOutput(
   filterVertexPosition(aPosition),
   vTextureCoord,
   filterCoord(vTextureCoord),
  );
}

struct ColorStop {
  offset: f32,
  color: vec3<f32>,
  alpha: f32,
};

fn rotate2d(angle: f32) -> mat2x2<f32>{
  return mat2x2(cos(angle), -sin(angle),
  sin(angle), cos(angle));
}

fn projectLinearPosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = vec2<f32>(0.5);
  var result: vec2<f32> = pos - center;
  result = rotate2d(angle) * result;
  result = result + center;
  return clamp(result.x, 0.0, 1.0);
}

fn projectRadialPosition(pos: vec2<f32>) -> f32 {
  var r: f32 = distance(pos, vec2<f32>(0.5));
  return clamp(2.0 * r, 0.0, 1.0);
}

fn projectAnglePosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = pos - vec2<f32>(0.5, 0.5);
  var polarAngle: f32 = atan2(-center.y, center.x);
  return ((polarAngle + angle) % PI_2) / PI_2;
}

fn projectPosition(pos: vec2<f32>, gradientType: i32, angle: f32) -> f32 {
  if (gradientType == TYPE_LINEAR) {
      return projectLinearPosition(pos, angle);
  } else if (gradientType == TYPE_RADIAL) {
      return projectRadialPosition(pos);
  } else if (gradientType == TYPE_CONIC) {
      return projectAnglePosition(pos, angle);
  }

  return pos.y;
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
) -> @location(0) vec4<f32> {
  let uType: i32 = i32(baseUniforms.uOptions[0]);
  let uAngle: f32 = baseUniforms.uOptions[1];
  let uAlpha: f32 = baseUniforms.uOptions[2];
  let uReplace: f32 = baseUniforms.uOptions[3];

  let uNumStops: i32 = i32(baseUniforms.uCounts[0]);
  let uMaxColors: f32 = baseUniforms.uCounts[1];

  // current/original color
  var currentColor: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // skip calculations if gradient alpha is 0
  if (uAlpha == 0.0) { return currentColor; }

  // project position
  var y: f32 = projectPosition(coord, uType, radians(uAngle));

  // check gradient bounds
  var offsetMin: f32 = stopsUniforms.uStops[0][0];
  var offsetMax: f32 = 0.0;

  let numStops: i32 = uNumStops;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (i == numStops - 1) { // last index
          offsetMax = stopsUniforms.uStops[i][0];
      }
  }

  if (y  < offsetMin || y > offsetMax) { return currentColor; }

  // limit colors
  if (uMaxColors > 0.0) {
      var stepSize: f32 = 1.0 / uMaxColors;
      var stepNumber: f32 = floor(y / stepSize);
      y = stepSize * (stepNumber + 0.5); // offset by 0.5 to use color from middle of segment
  }

  // find color stops
  var stopFrom: ColorStop;
  var stopTo: ColorStop;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (y >= stopsUniforms.uStops[i][0]) {
          stopFrom = ColorStop(stopsUniforms.uStops[i][0], stopsUniforms.uColors[i], stopsUniforms.uStops[i][1]);
          stopTo = ColorStop(stopsUniforms.uStops[i + 1][0], stopsUniforms.uColors[i + 1], stopsUniforms.uStops[i + 1][1]);
      }

      if (i == numStops - 1) { // last index
          break;
      }
  }

  // mix colors from stops
  var colorFrom: vec4<f32> = vec4<f32>(stopFrom.color * stopFrom.alpha, stopFrom.alpha);
  var colorTo: vec4<f32> = vec4<f32>(stopTo.color * stopTo.alpha, stopTo.alpha);

  var segmentHeight: f32 = stopTo.offset - stopFrom.offset;
  var relativePos: f32 = y - stopFrom.offset; // position from 0 to [segmentHeight]
  var relativePercent: f32 = relativePos / segmentHeight; // position in percent between [from.offset] and [to.offset].

  var gradientAlpha: f32 = uAlpha * currentColor.a;
  var gradientColor: vec4<f32> = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

  if (uReplace < 0.5) {
      // mix resulting color with current color
      return gradientColor + currentColor * (1.0 - gradientColor.a);
  } else {
      // replace with gradient color
      return gradientColor;
  }
}

const PI: f32 = 3.14159265358979323846264;
const PI_2: f32 = PI * 2.0;

const TYPE_LINEAR: i32 = 0;
const TYPE_RADIAL: i32 = 1;
const TYPE_CONIC: i32 = 2;
const MAX_STOPS: i32 = 32;`,wi=wi||{};wi.stringify=function(){var n={"visit_linear-gradient":function(t){return n.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return n.visit_gradient(t)},"visit_radial-gradient":function(t){return n.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return n.visit_gradient(t)},visit_gradient:function(t){var e=n.visit(t.orientation);return e&&(e+=", "),t.type+"("+e+n.visit(t.colorStops)+")"},visit_shape:function(t){var e=t.value,i=n.visit(t.at),r=n.visit(t.style);return r&&(e+=" "+r),i&&(e+=" at "+i),e},"visit_default-radial":function(t){var e="",i=n.visit(t.at);return i&&(e+=i),e},"visit_extent-keyword":function(t){var e=t.value,i=n.visit(t.at);return i&&(e+=" at "+i),e},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return n.visit(t.value.x)+" "+n.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return n.visit_color(t.value,t)},visit_hex:function(t){return n.visit_color("#"+t.value,t)},visit_rgb:function(t){return n.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return n.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,e){var i=t,r=n.visit(e.length);return r&&(i+=" "+r),i},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var e="",i=t.length;return t.forEach(function(r,s){e+=n.visit(r),s<i-1&&(e+=", ")}),e},visit:function(t){if(!t)return"";var e="";if(t instanceof Array)return n.visit_array(t,e);if(t.type){var i=n["visit_"+t.type];if(i)return i(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return n.visit(t)}}();var wi=wi||{};wi.parse=function(){var n={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function e(P){var V=new Error(t+": "+P);throw V.source=t,V}function i(){var P=r();return t.length>0&&e("Invalid input not EOF"),P}function r(){return v(s)}function s(){return o("linear-gradient",n.linearGradient,l)||o("repeating-linear-gradient",n.repeatingLinearGradient,l)||o("radial-gradient",n.radialGradient,c)||o("repeating-radial-gradient",n.repeatingRadialGradient,c)}function o(P,V,I){return a(V,function(z){var ft=I();return ft&&(E(n.comma)||e("Missing comma before color stops")),{type:P,orientation:ft,colorStops:v(y)}})}function a(P,V){var I=E(P);if(I){E(n.startCall)||e("Missing (");var z=V(I);return E(n.endCall)||e("Missing )"),z}}function l(){return u()||h()}function u(){return M("directional",n.sideOrCorner,1)}function h(){return M("angular",n.angleValue,1)}function c(){var P,V=f(),I;return V&&(P=[],P.push(V),I=t,E(n.comma)&&(V=f(),V?P.push(V):t=I)),P}function f(){var P=d()||m();if(P)P.at=g();else{var V=p();if(V){P=V;var I=g();I&&(P.at=I)}else{var z=_();z&&(P={type:"default-radial",at:z})}}return P}function d(){var P=M("shape",/^(circle)/i,0);return P&&(P.style=F()||p()),P}function m(){var P=M("shape",/^(ellipse)/i,0);return P&&(P.style=O()||p()),P}function p(){return M("extent-keyword",n.extentKeywords,1)}function g(){if(M("position",/^at/,0)){var P=_();return P||e("Missing positioning value"),P}}function _(){var P=x();if(P.x||P.y)return{type:"position",value:P}}function x(){return{x:O(),y:O()}}function v(P){var V=P(),I=[];if(V)for(I.push(V);E(n.comma);)V=P(),V?I.push(V):e("One extra comma");return I}function y(){var P=S();return P||e("Expected color definition"),P.length=O(),P}function S(){return w()||b()||C()||A()}function A(){return M("literal",n.literalColor,0)}function w(){return M("hex",n.hexColor,1)}function C(){return a(n.rgbColor,function(){return{type:"rgb",value:v(T)}})}function b(){return a(n.rgbaColor,function(){return{type:"rgba",value:v(T)}})}function T(){return E(n.number)[1]}function O(){return M("%",n.percentageValue,1)||N()||F()}function N(){return M("position-keyword",n.positionKeywords,1)}function F(){return M("px",n.pixelValue,1)||M("em",n.emValue,1)}function M(P,V,I){var z=E(V);if(z)return{type:P,value:z[I]}}function E(P){var V,I;return I=/^[\n\r\t\s]+/.exec(t),I&&U(I[0].length),V=P.exec(t),V&&U(V[0].length),V}function U(P){t=t.substr(P)}return function(P){return t=P.toString(),i()}}();var lv=wi.parse;wi.stringify;function uv(n){const t=lv(_v(n));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const e=t[0],i=hv(e.type),r=cv(e.colorStops),s=mv(e.orientation);return{type:i,stops:r,angle:s}}function hv(n){const t={"linear-gradient":0,"radial-gradient":1};if(!(n in t))throw new Error(`Unsupported gradient type "${n}"`);return t[n]}function cv(n){const t=dv(n),e=[],i=new j;for(let r=0;r<n.length;r++){const s=fv(n[r]),o=i.setValue(s).toArray();e.push({offset:t[r],color:o.slice(0,3),alpha:o[3]})}return e}function fv(n){switch(n.type){case"hex":return`#${n.value}`;case"literal":return n.value;default:return`${n.type}(${n.value.join(",")})`}}function dv(n){const t=[];for(let s=0;s<n.length;s++){const o=n[s];let a=-1;o.type==="literal"&&o.length&&"type"in o.length&&o.length.type==="%"&&"value"in o.length&&(a=parseFloat(o.length.value)/100),t.push(a)}const i=s=>{for(let o=s;o<t.length;o++)if(t[o]!==-1)return{indexDelta:o-s,offset:t[o]};return{indexDelta:t.length-1-s,offset:1}};let r=0;for(let s=0;s<t.length;s++){const o=t[s];if(o!==-1)r=o;else if(s===0)t[s]=0;else if(s+1===t.length)t[s]=1;else{const a=i(s),u=(a.offset-r)/(1+a.indexDelta);for(let h=0;h<=a.indexDelta;h++)t[s+h]=r+(h+1)*u;s+=a.indexDelta,r=t[s]}}return t.map(pv)}function pv(n){return n.toString().length>6?parseFloat(n.toString().substring(0,6)):n}function mv(n){if(typeof n>"u")return 0;if("type"in n&&"value"in n)switch(n.type){case"angular":return parseFloat(n.value);case"directional":return gv(n.value)}return 0}function gv(n){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(n in t))throw new Error(`Unsupported directional value "${n}"`);return t[n]}function _v(n){let t=n.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var xv=Object.defineProperty,vv=(n,t,e)=>t in n?xv(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,_i=(n,t,e)=>(vv(n,typeof t!="symbol"?t+"":t,e),e);const Gs=90;function yv(n){return[...n].sort((t,e)=>t.offset-e.offset)}const Dn=class cr extends X{constructor(t){if(t&&"css"in t?t={...uv(t.css||""),alpha:t.alpha??cr.defaults.alpha,maxColors:t.maxColors??cr.defaults.maxColors}:t={...cr.defaults,...t},!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const e=W.from({vertex:{source:eu,entryPoint:"mainVertex"},fragment:{source:eu,entryPoint:"mainFragment"}}),i=$.from({vertex:av,fragment:ov,name:"color-gradient-filter"}),r=32;super({gpuProgram:e,glProgram:i,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??Gs,t.alpha,t.replace?1:0],type:"vec4<f32>"},uCounts:{value:[t.stops.length,t.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(r*3),type:"vec3<f32>",size:r},uStops:{value:new Float32Array(r*4),type:"vec4<f32>",size:r}}}}),_i(this,"baseUniforms"),_i(this,"stopsUniforms"),_i(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(t){const e=yv(t),i=new j;let r,s,o;for(let a=0;a<e.length;a++){i.setValue(e[a].color);const l=a*3;[r,s,o]=i.toArray(),this.stopsUniforms.uColors[l]=r,this.stopsUniforms.uColors[l+1]=s,this.stopsUniforms.uColors[l+2]=o,this.stopsUniforms.uStops[a*4]=e[a].offset,this.stopsUniforms.uStops[a*4+1]=e[a].alpha}this.baseUniforms.uCounts[0]=e.length,this._stops=e}get type(){return this.baseUniforms.uOptions[0]}set type(t){this.baseUniforms.uOptions[0]=t}get angle(){return this.baseUniforms.uOptions[1]+Gs}set angle(t){this.baseUniforms.uOptions[1]=t-Gs}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(t){this.baseUniforms.uOptions[2]=t}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(t){this.baseUniforms.uCounts[1]=t}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(t){this.baseUniforms.uOptions[3]=t?1:0}};_i(Dn,"LINEAR",0);_i(Dn,"RADIAL",1);_i(Dn,"CONIC",2);_i(Dn,"defaults",{type:Dn.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var bv=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uMix;
uniform float uSize;
uniform float uSliceSize;
uniform float uSlicePixelSize;
uniform float uSliceInnerSize;

void main() {
    vec4 color = texture(uTexture, vTextureCoord.xy);
    vec4 adjusted;

    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = uSize - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = uSlicePixelSize * 0.5 + color.r * uSliceInnerSize;
        float s0 = xOffset + (zSlice0 * uSliceSize);
        float s1 = xOffset + (zSlice1 * uSliceSize);
        float yOffset = uSliceSize * 0.5 + color.g * (1.0 - uSliceSize);
        vec4 slice0Color = texture(uMapTexture, vec2(s0,yOffset));
        vec4 slice1Color = texture(uMapTexture, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }

    finalColor = vec4(mix(color, adjusted, uMix).rgb, color.a);

}`,Sv=`struct ColorMapUniforms {
  uMix: f32,
  uSize: f32,
  uSliceSize: f32,
  uSlicePixelSize: f32,
  uSliceInnerSize: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorMapUniforms : ColorMapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color:vec4<f32> = textureSample(uTexture, uSampler, uv);

  var adjusted: vec4<f32>;

  var altColor: vec4<f32> = vec4<f32>(color.rgb / color.a, color.a);
  let innerWidth: f32 = colorMapUniforms.uSize - 1.0;
  let zSlice0: f32 = min(floor(color.b * innerWidth), innerWidth);
  let zSlice1: f32 = min(zSlice0 + 1.0, innerWidth);
  let xOffset: f32 = colorMapUniforms.uSlicePixelSize * 0.5 + color.r * colorMapUniforms.uSliceInnerSize;
  let s0: f32 = xOffset + (zSlice0 * colorMapUniforms.uSliceSize);
  let s1: f32 = xOffset + (zSlice1 * colorMapUniforms.uSliceSize);
  let yOffset: f32 = colorMapUniforms.uSliceSize * 0.5 + color.g * (1.0 - colorMapUniforms.uSliceSize);
  let slice0Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s0,yOffset));
  let slice1Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s1,yOffset));
  let zOffset: f32 = fract(color.b * innerWidth);
  adjusted = mix(slice0Color, slice1Color, zOffset);
  altColor = vec4<f32>(color.rgb * color.a, color.a);

  let realColor: vec4<f32> = select(color, altColor, color.a > 0.0);

  return vec4<f32>(mix(realColor, adjusted, colorMapUniforms.uMix).rgb, realColor.a);
}`,wv=Object.defineProperty,Cv=(n,t,e)=>t in n?wv(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,we=(n,t,e)=>(Cv(n,typeof t!="symbol"?t+"":t,e),e);const Av=class ef extends X{constructor(...t){let e=t[0]??{};if((e instanceof D||e instanceof he)&&(k("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),e={colorMap:e},t[1]!==void 0&&(e.nearest=t[1]),t[2]!==void 0&&(e.mix=t[2])),e={...ef.DEFAULT_OPTIONS,...e},!e.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const i=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:Sv,entryPoint:"mainFragment"}}),r=$.from({vertex:q,fragment:bv,name:"color-map-filter"});super({gpuProgram:i,glProgram:r,resources:{colorMapUniforms:{uMix:{value:e.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:e.colorMap.source,uMapSampler:e.colorMap.source.style}}),we(this,"uniforms"),we(this,"_size",0),we(this,"_sliceSize",0),we(this,"_slicePixelSize",0),we(this,"_sliceInnerSize",0),we(this,"_nearest",!1),we(this,"_scaleMode","linear"),we(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,e)}get mix(){return this.uniforms.uMix}set mix(t){this.uniforms.uMix=t}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(t){if(!t||t===this.colorMap)return;const e=t instanceof D?t.source:t;e.style.scaleMode=this._scaleMode,e.autoGenerateMipmaps=!1,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=e,this._colorMap=t}get nearest(){return this._nearest}set nearest(t){this._nearest=t,this._scaleMode=t?"nearest":"linear";const e=this._colorMap;e&&e.source&&(e.source.scaleMode=this._scaleMode,e.source.autoGenerateMipmaps=!1,e.source.style.update(),e.source.update())}updateColorMap(){const t=this._colorMap;t!=null&&t.source&&(t.source.update(),this.colorMap=t)}destroy(){var t;(t=this._colorMap)==null||t.destroy(),super.destroy()}};we(Av,"DEFAULT_OPTIONS",{colorMap:D.WHITE,nearest:!1,mix:1});var Tv=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,Pv=`struct ColorOverlayUniforms {
    uColor: vec3<f32>,
    uAlpha: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorOverlayUniforms : ColorOverlayUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let c = textureSample(uTexture, uSampler, uv);
    return vec4<f32>(mix(c.rgb, colorOverlayUniforms.uColor.rgb, c.a * colorOverlayUniforms.uAlpha), c.a);
}
`,Fv=Object.defineProperty,Mv=(n,t,e)=>t in n?Fv(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Io=(n,t,e)=>(Mv(n,typeof t!="symbol"?t+"":t,e),e);const Iv=class nf extends X{constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e)||e instanceof Float32Array)&&(k("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),e={color:e},t[1]!==void 0&&(e.alpha=t[1])),e={...nf.DEFAULT_OPTIONS,...e};const i=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:Pv,entryPoint:"mainFragment"}}),r=$.from({vertex:q,fragment:Tv,name:"color-overlay-filter"});super({gpuProgram:i,glProgram:r,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"}}}}),Io(this,"uniforms"),Io(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new j,this.color=e.color??0}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Io(Iv,"DEFAULT_OPTIONS",{color:0,alpha:1});var Ev=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uOriginalColor;
uniform vec3 uTargetColor;
uniform float uTolerance;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    vec3 colorDiff = uOriginalColor - (c.rgb / max(c.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, uTolerance);
    finalColor = vec4(mix(c.rgb, (uTargetColor + colorDiff) * c.a, doReplace), c.a);
}
`,zv=`struct ColorReplaceUniforms {
  uOriginalColor: vec3<f32>,
  uTargetColor: vec3<f32>,
  uTolerance: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorReplaceUniforms : ColorReplaceUniforms;

@fragment
fn mainFragment(
   @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sample: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let colorDiff: vec3<f32> = colorReplaceUniforms.uOriginalColor - (sample.rgb / max(sample.a, 0.0000000001));
  let colorDistance: f32 = length(colorDiff);
  let doReplace: f32 = step(colorDistance, colorReplaceUniforms.uTolerance);

  return vec4<f32>(mix(sample.rgb, (colorReplaceUniforms.uTargetColor + colorDiff) * sample.a, doReplace), sample.a);
}`,Ov=Object.defineProperty,Rv=(n,t,e)=>t in n?Ov(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,fr=(n,t,e)=>(Rv(n,typeof t!="symbol"?t+"":t,e),e);const kv=class rf extends X{constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e)||e instanceof Float32Array)&&(k("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),e={originalColor:e},t[1]!==void 0&&(e.targetColor=t[1]),t[2]!==void 0&&(e.tolerance=t[2])),e={...rf.DEFAULT_OPTIONS,...e};const i=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:zv,entryPoint:"mainFragment"}}),r=$.from({vertex:q,fragment:Ev,name:"color-replace-filter"});super({gpuProgram:i,glProgram:r,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:e.tolerance,type:"f32"}}}}),fr(this,"uniforms"),fr(this,"_originalColor"),fr(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new j,this._targetColor=new j,this.originalColor=e.originalColor??16711680,this.targetColor=e.targetColor??0,Object.assign(this,e)}get originalColor(){return this._originalColor.value}set originalColor(t){this._originalColor.setValue(t);const[e,i,r]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=e,this.uniforms.uOriginalColor[1]=i,this.uniforms.uOriginalColor[2]=r}get targetColor(){return this._targetColor.value}set targetColor(t){this._targetColor.setValue(t);const[e,i,r]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=e,this.uniforms.uTargetColor[1]=i,this.uniforms.uTargetColor[2]=r}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set newColor(t){k("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=t}get newColor(){return k("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(t){k("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return k("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};fr(kv,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var Bv=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
uniform mat3 uMatrix;

void main(void)
{
    vec4 c11 = texture(uTexture, vTextureCoord - uTexelSize); // top left
    vec4 c12 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y - uTexelSize.y)); // top center
    vec4 c13 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y - uTexelSize.y)); // top right

    vec4 c21 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y)); // mid left
    vec4 c22 = texture(uTexture, vTextureCoord); // mid center
    vec4 c23 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y)); // mid right

    vec4 c31 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y + uTexelSize.y)); // bottom left
    vec4 c32 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y + uTexelSize.y)); // bottom center
    vec4 c33 = texture(uTexture, vTextureCoord + uTexelSize); // bottom right

    finalColor =
        c11 * uMatrix[0][0] + c12 * uMatrix[0][1] + c13 * uMatrix[0][2] +
        c21 * uMatrix[1][0] + c22 * uMatrix[1][1] + c23 * uMatrix[1][2] +
        c31 * uMatrix[2][0] + c32 * uMatrix[2][1] + c33 * uMatrix[2][2];

    finalColor.a = c22.a;
}`,Uv=`struct ConvolutionUniforms {
    uMatrix: mat3x3<f32>,
    uTexelSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> convolutionUniforms : ConvolutionUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let texelSize = convolutionUniforms.uTexelSize;
    let matrix = convolutionUniforms.uMatrix;

    let c11: vec4<f32> = textureSample(uTexture, uSampler, uv - texelSize); // top left
    let c12: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y - texelSize.y)); // top center
    let c13: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y - texelSize.y)); // top right

    let c21: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y)); // mid left
    let c22: vec4<f32> = textureSample(uTexture, uSampler, uv); // mid center
    let c23: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y)); // mid right

    let c31: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y + texelSize.y)); // bottom left
    let c32: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y + texelSize.y)); // bottom center
    let c33: vec4<f32> = textureSample(uTexture, uSampler, uv + texelSize); // bottom right

    var finalColor: vec4<f32> = vec4<f32>(
        c11 * matrix[0][0] + c12 * matrix[0][1] + c13 * matrix[0][2] +
        c21 * matrix[1][0] + c22 * matrix[1][1] + c23 * matrix[1][2] +
        c31 * matrix[2][0] + c32 * matrix[2][1] + c33 * matrix[2][2]
    );

    finalColor.a = c22.a;

    return finalColor;
}`,Lv=Object.defineProperty,Dv=(n,t,e)=>t in n?Lv(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,sf=(n,t,e)=>(Dv(n,typeof t!="symbol"?t+"":t,e),e);const Gv=class of extends X{constructor(...t){let e=t[0]??{};Array.isArray(e)&&(k("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),e={matrix:e},t[1]!==void 0&&(e.width=t[1]),t[2]!==void 0&&(e.height=t[2])),e={...of.DEFAULT_OPTIONS,...e};const i=e.width??200,r=e.height??200,s=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:Uv,entryPoint:"mainFragment"}}),o=$.from({vertex:q,fragment:Bv,name:"convolution-filter"});super({gpuProgram:s,glProgram:o,resources:{convolutionUniforms:{uMatrix:{value:e.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/i,y:1/r},type:"vec2<f32>"}}}}),sf(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=i,this.height=r}get matrix(){return this.uniforms.uMatrix}set matrix(t){t.forEach((e,i)=>{this.uniforms.uMatrix[i]=e})}get width(){return 1/this.uniforms.uTexelSize.x}set width(t){this.uniforms.uTexelSize.x=1/t}get height(){return 1/this.uniforms.uTexelSize.y}set height(t){this.uniforms.uTexelSize.y=1/t}};sf(Gv,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var Nv=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uLine;
uniform vec2 uNoise;
uniform vec3 uVignette;
uniform float uSeed;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float vignette(vec3 co, vec2 coord)
{
    float outter = SQRT_2 - uVignette[0] * SQRT_2;
    vec2 dir = vec2(0.5) - coord;
    dir.y *= uDimensions.y / uDimensions.x;
    float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
    return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

float noise(vec2 coord)
{
    vec2 pixelCoord = coord * uInputSize.xy;
    pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
    pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
    return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

vec3 interlaceLines(vec3 co, vec2 coord)
{
    vec3 color = co;

    float curvature = uLine[0];
    float lineWidth = uLine[1];
    float lineContrast = uLine[2];
    float verticalLine = uLine[3];

    vec2 dir = vec2(coord * uInputSize.xy / uDimensions - 0.5);

    float _c = curvature > 0. ? curvature : 1.;
    float k = curvature > 0. ? (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
    vec2 uv = dir * k;
    float v = verticalLine > 0.5 ? uv.x * uDimensions.x : uv.y * uDimensions.y;
    v *= min(1.0, 2.0 / lineWidth ) / _c;
    float j = 1. + cos(v * 1.2 - uTime) * 0.5 * lineContrast;
    color *= j;

    float segment = verticalLine > 0.5 ? mod((dir.x + .5) * uDimensions.x, 4.) : mod((dir.y + .5) * uDimensions.y, 4.);
    color *= 0.99 + ceil(segment) * 0.015;

    return color;
}

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);
    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
    {
        float n = noise(vTextureCoord);
        finalColor += vec4(n, n, n, finalColor.a);
    }

    if (uVignette[0] > 0.)
    {
        float v = vignette(finalColor.rgb, coord);
        finalColor *= vec4(v, v, v, finalColor.a);
    }

    if (uLine[1] > 0.0)
    {
        finalColor = vec4(interlaceLines(finalColor.rgb, vTextureCoord), finalColor.a);  
    }
}
`,Vv=`struct CRTUniforms {
    uLine: vec4<f32>,
    uNoise: vec2<f32>,
    uVignette: vec3<f32>,
    uSeed: f32,
    uTime: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> crtUniforms : CRTUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let coord: vec2<f32> = uv * gfu.uInputSize.xy / crtUniforms.uDimensions;

  let uNoise = crtUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  if (crtUniforms.uVignette[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  if (crtUniforms.uLine[1] > 0.0)
  {
    color = vec4<f32>(vec3<f32>(interlaceLines(color.rgb, uv)), color.a);  
  }

  return color;
}

const SQRT_2: f32 = 1.414213;

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignette = crtUniforms.uVignette;
  let uDimensions = crtUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignette[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(0.5) - coord;
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = crtUniforms.uNoise;
  let uSeed = crtUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

fn interlaceLines(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;

  let uDimensions = crtUniforms.uDimensions;

  let curvature: f32 = crtUniforms.uLine[0];
  let lineWidth: f32 = crtUniforms.uLine[1];
  let lineContrast: f32 = crtUniforms.uLine[2];
  let verticalLine: f32 = crtUniforms.uLine[3];

  let dir: vec2<f32> = vec2<f32>(coord * gfu.uInputSize.xy / uDimensions - 0.5);

  let _c: f32 = select(1., curvature, curvature > 0.);
  let k: f32 = select(1., (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c), curvature > 0.);
  let uv: vec2<f32> = dir * k;
  let v: f32 = select(uv.y * uDimensions.y, uv.x * uDimensions.x, verticalLine > 0.5) * min(1.0, 2.0 / lineWidth ) / _c;
  let j: f32 = 1. + cos(v * 1.2 - crtUniforms.uTime) * 0.5 * lineContrast;
  color *= j;

  let segment: f32 = select(modulo((dir.y + .5) * uDimensions.y, 4.), modulo((dir.x + .5) * uDimensions.x, 4.), verticalLine > 0.5);
  color *= 0.99 + ceil(segment) * 0.015;

  return color;
}`,Wv=Object.defineProperty,$v=(n,t,e)=>t in n?Wv(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,dr=(n,t,e)=>($v(n,typeof t!="symbol"?t+"":t,e),e);const Yv=class af extends X{constructor(t){t={...af.DEFAULT_OPTIONS,...t};const e=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:Vv,entryPoint:"mainFragment"}}),i=$.from({vertex:q,fragment:Nv,name:"crt-filter"});super({gpuProgram:e,glProgram:i,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),dr(this,"uniforms"),dr(this,"seed"),dr(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(t,e,i,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,t.applyFilter(this,e,i,r)}get curvature(){return this.uniforms.uLine[0]}set curvature(t){this.uniforms.uLine[0]=t}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(t){this.uniforms.uLine[1]=t}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(t){this.uniforms.uLine[2]=t}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(t){this.uniforms.uLine[3]=t?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(t){this.uniforms.uVignette[0]=t}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(t){this.uniforms.uVignette[1]=t}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(t){this.uniforms.uVignette[2]=t}};dr(Yv,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var Xv=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAngle;
uniform float uScale;
uniform bool uGrayScale;

uniform vec4 uInputSize;

float pattern()
{
    float s = sin(uAngle), c = cos(uAngle);
    vec2 tex = vTextureCoord * uInputSize.xy;
    vec2 point = vec2(
        c * tex.x - s * tex.y,
        s * tex.x + c * tex.y
    ) * uScale;
    return (sin(point.x) * sin(point.y)) * 4.0;
    }

    void main()
    {
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 colorRGB = vec3(color);

    if (uGrayScale)
    {
        colorRGB = vec3(color.r + color.g + color.b) / 3.0;
    }

    finalColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);
}
`,Hv=`struct DotUniforms {
  uScale:f32,
  uAngle:f32,
  uGrayScale:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dotUniforms : DotUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let gray: vec3<f32> = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)));
  // dotUniforms.uGrayScale == 1 doesn't ever pass so it is converted to a float and compared to 0.5 instead 
  let finalColor: vec3<f32> = select(color.rgb, gray, f32(dotUniforms.uGrayScale) >= 0.5);

  return vec4<f32>(finalColor * 10.0 - 5.0 + pattern(uv), color.a);
}

fn pattern(uv: vec2<f32>) -> f32
{
  let s: f32 = sin(dotUniforms.uAngle);
  let c: f32 = cos(dotUniforms.uAngle);
  
  let tex: vec2<f32> = uv * gfu.uInputSize.xy;
  
  let p: vec2<f32> = vec2<f32>(
      c * tex.x - s * tex.y,
      s * tex.x + c * tex.y
  ) * dotUniforms.uScale;

  return (sin(p.x) * sin(p.y)) * 4.0;
}`,jv=Object.defineProperty,qv=(n,t,e)=>t in n?jv(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Kv=(n,t,e)=>(qv(n,t+"",e),e);const Qv=class lf extends X{constructor(...t){let e=t[0]??{};typeof e=="number"&&(k("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),e={scale:e},t[1]!==void 0&&(e.angle=t[1]),t[2]!==void 0&&(e.grayscale=t[2])),e={...lf.DEFAULT_OPTIONS,...e};const i={uScale:{value:e.scale,type:"f32"},uAngle:{value:e.angle,type:"f32"},uGrayScale:{value:e.grayscale?1:0,type:"f32"}},r=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:Hv,entryPoint:"mainFragment"}}),s=$.from({vertex:q,fragment:Xv,name:"dot-filter"});super({gpuProgram:r,glProgram:s,resources:{dotUniforms:i}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(t){this.resources.dotUniforms.uniforms.uScale=t}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(t){this.resources.dotUniforms.uniforms.uAngle=t}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(t){this.resources.dotUniforms.uniforms.uGrayScale=t?1:0}};Kv(Qv,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var Zv=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uOffset;

uniform vec4 uInputSize;

void main(void){
    vec4 sample = texture(uTexture, vTextureCoord - uOffset * uInputSize.zw);

    // Premultiply alpha
    sample.rgb = uColor.rgb * sample.a;

    // alpha user alpha
    sample *= uAlpha;

    finalColor = sample;
}`,Jv=`struct DropShadowUniforms {
  uAlpha: f32,
  uColor: vec3<f32>,
  uOffset: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dropShadowUniforms : DropShadowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv - dropShadowUniforms.uOffset * gfu.uInputSize.zw);

  // Premultiply alpha
  color = vec4<f32>(vec3<f32>(dropShadowUniforms.uColor.rgb * color.a), color.a);
  // alpha user alpha
  color *= dropShadowUniforms.uAlpha;

  return color;
}`,ty=Object.defineProperty,ey=(n,t,e)=>t in n?ty(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Oi=(n,t,e)=>(ey(n,typeof t!="symbol"?t+"":t,e),e);const uf=class hf extends X{constructor(t){t={...hf.DEFAULT_OPTIONS,...t};const e=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:Jv,entryPoint:"mainFragment"}}),i=$.from({vertex:q,fragment:Zv,name:"drop-shadow-filter"});super({gpuProgram:e,glProgram:i,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},resolution:t.resolution}),Oi(this,"uniforms"),Oi(this,"shadowOnly",!1),Oi(this,"_color"),Oi(this,"_blurFilter"),Oi(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new j,this.color=t.color??0,this._blurFilter=new Yc({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new X({gpuProgram:W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:$.from({vertex:q,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,t)}apply(t,e,i,r){const s=Dt.getSameSizeTexture(e);t.applyFilter(this,e,s,!0),this._blurFilter.apply(t,s,i,r),this.shadowOnly||t.applyFilter(this._basePass,e,i,!1),Dt.returnTexture(s)}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t,this._updatePadding()}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}_updatePadding(){const t=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=t+this.blur*2+this.quality*4}};Oi(uf,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});let Tt=uf;var iy=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uSeed;
uniform vec2 uDimensions;
uniform float uAspect;
uniform float uFillMode;
uniform float uOffset;
uniform float uDirection;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float sinDir = sin(uDirection);
    float cosDir = cos(uDirection);

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * uAspect;
    float ny = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture(uDisplacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * uAspect);

    int fillMode = int(uFillMode);

    if (fillMode == CLAMP) {
        coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
        if( coord.x > uInputClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = uInputClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < uInputClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -uInputClamp.z;
            }
        }

        if( coord.y > uInputClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = uInputClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < uInputClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -uInputClamp.w;
            }
        }
    }

    finalColor.r = texture(uTexture, coord + uRed * (1.0 - uSeed * 0.4) / uInputSize.xy).r;
    finalColor.g = texture(uTexture, coord + uGreen * (1.0 - uSeed * 0.3) / uInputSize.xy).g;
    finalColor.b = texture(uTexture, coord + uBlue * (1.0 - uSeed * 0.2) / uInputSize.xy).b;
    finalColor.a = texture(uTexture, coord).a;
}
`,ny=`struct GlitchUniforms {
  uSeed: f32,
  uDimensions: vec2<f32>,
  uAspect: f32,
  uFillMode: f32,
  uOffset: f32,
  uDirection: f32,
  uRed: vec2<f32>,
  uGreen: vec2<f32>,
  uBlue: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glitchUniforms : GlitchUniforms;
@group(1) @binding(1) var uDisplacementMap: texture_2d<f32>; 
@group(1) @binding(2) var uDisplacementSampler: sampler; 

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uSeed: f32 = glitchUniforms.uSeed;
  let uDimensions: vec2<f32> = glitchUniforms.uDimensions;
  let uAspect: f32 = glitchUniforms.uAspect;
  let uOffset: f32 = glitchUniforms.uOffset;
  let uDirection: f32 = glitchUniforms.uDirection;
  let uRed: vec2<f32> = glitchUniforms.uRed;
  let uGreen: vec2<f32> = glitchUniforms.uGreen;
  let uBlue: vec2<f32> = glitchUniforms.uBlue;

  let uInputSize: vec4<f32> = gfu.uInputSize;
  let uInputClamp: vec4<f32> = gfu.uInputClamp;

  var discarded: bool = false;
  var coord: vec2<f32> = (uv * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
      discarded = true;
    }

    let sinDir: f32 = sin(uDirection);
    let cosDir: f32 = cos(uDirection);

    let cx: f32 = coord.x - 0.5;
    let cy: f32 = (coord.y - 0.5) * uAspect;
    var ny: f32 = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    ny = select(select(ny, -ny, ny < 0.0), 2.0 - ny, ny > 1.0);

    let dc: vec4<f32> = textureSample(uDisplacementMap, uDisplacementSampler, vec2<f32>(0.5, ny));

    let displacement: f32 = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = uv + vec2<f32>(cosDir * displacement, sinDir * displacement * uAspect);

    let fillMode: i32 = i32(glitchUniforms.uFillMode);

    if (fillMode == CLAMP) {
      coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
      if (coord.x > uInputClamp.z) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x - uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = uInputClamp.z * 2.0 - coord.x;
        }
      } else if (coord.x < uInputClamp.x) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x + uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = coord.x * -uInputClamp.z;
        }
      }

      if (coord.y > uInputClamp.w) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y - uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = uInputClamp.w * 2.0 - coord.y;
        }
      } else if (coord.y < uInputClamp.y) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y + uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = coord.y * -uInputClamp.w;
        }
      }
    }

    let seedR: f32 = 1.0 - uSeed * 0.4;
    let seedG: f32 = 1.0 - uSeed * 0.3;
    let seedB: f32 = 1.0 - uSeed * 0.2;

    let offsetR: vec2<f32> = vec2(uRed.x * seedR / uInputSize.x, uRed.y * seedR / uInputSize.y);
    let offsetG: vec2<f32> = vec2(uGreen.x * seedG / uInputSize.x, uGreen.y * seedG / uInputSize.y);
    let offsetB: vec2<f32> = vec2(uBlue.x * seedB / uInputSize.x, uBlue.y * seedB / uInputSize.y);

    let r = textureSample(uTexture, uSampler, coord + offsetR).r;
    let g = textureSample(uTexture, uSampler, coord + offsetG).g;
    let b = textureSample(uTexture, uSampler, coord + offsetB).b;
    let a = textureSample(uTexture, uSampler, coord).a;

    return select(vec4<f32>(r, g, b, a), vec4<f32>(0.0,0.0,0.0,0.0), discarded);
}

const TRANSPARENT: i32 = 0;
const ORIGINAL: i32 = 1;
const LOOP: i32 = 2;
const CLAMP: i32 = 3;
const MIRROR: i32 = 4;`,ry=Object.defineProperty,sy=(n,t,e)=>t in n?ry(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,pe=(n,t,e)=>(sy(n,typeof t!="symbol"?t+"":t,e),e);const oy=class cf extends X{constructor(t){t={...cf.defaults,...t};const e=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:ny,entryPoint:"mainFragment"}}),i=$.from({vertex:q,fragment:iy,name:"glitch-filter"}),r=document.createElement("canvas");r.width=4,r.height=t.sampleSize??512;const s=new D({source:new bi({resource:r})});super({gpuProgram:e,glProgram:i,resources:{glitchUniforms:{uSeed:{value:(t==null?void 0:t.seed)??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:(t==null?void 0:t.fillMode)??0,type:"f32"},uOffset:{value:(t==null?void 0:t.offset)??100,type:"f32"},uDirection:{value:(t==null?void 0:t.direction)??0,type:"f32"},uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}},uDisplacementMap:s.source,uDisplacementSampler:s.source.style}}),pe(this,"uniforms"),pe(this,"average",!1),pe(this,"minSize",8),pe(this,"sampleSize",512),pe(this,"_canvas"),pe(this,"texture"),pe(this,"_slices",0),pe(this,"_sizes",new Float32Array(1)),pe(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=r,this.texture=s,Object.assign(this,t)}apply(t,e,i,r){const{width:s,height:o}=e.frame;this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,t.applyFilter(this,e,i,r)}_randomizeSizes(){const t=this._sizes,e=this._slices-1,i=this.sampleSize,r=Math.min(this.minSize/i,.9/this._slices);if(this.average){const s=this._slices;let o=1;for(let a=0;a<e;a++){const l=o/(s-a),u=Math.max(l*(1-Math.random()*.6),r);t[a]=u,o-=u}t[e]=o}else{let s=1;const o=Math.sqrt(1/this._slices);for(let a=0;a<e;a++){const l=Math.max(o*s*Math.random(),r);t[a]=l,s-=l}t[e]=s}this.shuffle()}shuffle(){const t=this._sizes,e=this._slices-1;for(let i=e;i>0;i--){const r=Math.random()*i>>0,s=t[i];t[i]=t[r],t[r]=s}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,e=this.texture,i=this._canvas.getContext("2d");i.clearRect(0,0,8,t);let r,s=0;for(let o=0;o<this._slices;o++){r=Math.floor(this._offsets[o]*256);const a=this._sizes[o]*t,l=r>0?r:0,u=r<0?-r:0;i.fillStyle=`rgba(${l}, ${u}, 0, 1)`,i.fillRect(0,s>>0,t,a+1>>0),s+=a}e.source.update()}set sizes(t){const e=Math.min(this._slices,t.length);for(let i=0;i<e;i++)this._sizes[i]=t[i]}get sizes(){return this._sizes}set offsets(t){const e=Math.min(this._slices,t.length);for(let i=0;i<e;i++)this._offsets[i]=t[i]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this._sizes=new Float32Array(t),this._offsets=new Float32Array(t),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}get fillMode(){return this.uniforms.uFillMode}set fillMode(t){this.uniforms.uFillMode=t}get direction(){return this.uniforms.uDirection/Wi}set direction(t){this.uniforms.uDirection=t*Wi}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}destroy(){var t;(t=this.texture)==null||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};pe(oy,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var ay=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`,ly=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`,uy=Object.defineProperty,hy=(n,t,e)=>t in n?uy(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Eo=(n,t,e)=>(hy(n,typeof t!="symbol"?t+"":t,e),e);const cy=class ff extends X{constructor(t){t={...ff.DEFAULT_OPTIONS,...t};const e=t.distance??10,i=t.quality??.1,r=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:ly,entryPoint:"mainFragment"}}),s=$.from({vertex:q,fragment:ay.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/i/e).toFixed(7)}`).replace(/__DIST__/gi,`${e.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:r,glProgram:s,resources:{glowUniforms:{uDistance:{value:e,type:"f32"},uStrength:{value:[t.innerStrength,t.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uQuality:{value:i,type:"f32"},uKnockout:{value:(t==null?void 0:t.knockout)??!1?1:0,type:"f32"}}},padding:e}),Eo(this,"uniforms"),Eo(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new j,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(t){this.uniforms.uDistance=this.padding=t}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(t){this.uniforms.uStrength[0]=t}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(t){this.uniforms.uStrength[1]=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this.uniforms.uQuality}set quality(t){this.uniforms.uQuality=t}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};Eo(cy,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var fy=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform float uParallel;
uniform vec2 uLight;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRay;

uniform vec4 uInputSize;

\${PERLIN}

void main(void) {
    vec2 uDimensions = uDimensions;
    bool uParallel = uParallel > 0.5;
    vec2 uLight = uLight;
    float uAspect = uAspect;

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    float d;

    if (uParallel) {
        float _cos = uLight.x;
        float _sin = uLight.y;
        d = (_cos * coord.x) + (_sin * coord.y * uAspect);
    } else {
        float dx = coord.x - uLight.x / uDimensions.x;
        float dy = (coord.y - uLight.y / uDimensions.y) * uAspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    float uTime = uTime;
    vec3 uRay = uRay;

    float gain = uRay[0];
    float lacunarity = uRay[1];
    float alpha = uRay[2];

    vec3 dir = vec3(d, d, 0.0);
    float noise = turb(dir + vec3(uTime, 0.0, 62.1 + uTime) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(vec3(noise), 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    finalColor = texture(uTexture, vTextureCoord) + mist;
}
`,dy=`struct GodrayUniforms {
  uLight: vec2<f32>,
  uParallel: f32,
  uAspect: f32,
  uTime: f32,
  uRay: vec3<f32>,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> godrayUniforms : GodrayUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = godrayUniforms.uDimensions;
  let uParallel: bool = godrayUniforms.uParallel > 0.5;
  let uLight: vec2<f32> = godrayUniforms.uLight;
  let uAspect: f32 = godrayUniforms.uAspect;

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / uDimensions;

  var d: f32;

  if (uParallel) {
    let _cos: f32 = uLight.x;
    let _sin: f32 = uLight.y;
    d = (_cos * coord.x) + (_sin * coord.y * uAspect);
  } else {
    let dx: f32 = coord.x - uLight.x / uDimensions.x;
    let dy: f32 = (coord.y - uLight.y / uDimensions.y) * uAspect;
    let dis: f32 = sqrt(dx * dx + dy * dy) + 0.00001;
    d = dy / dis;
  }

  let uTime: f32 = godrayUniforms.uTime;
  let uRay: vec3<f32> = godrayUniforms.uRay;
  
  let gain = uRay[0];
  let lacunarity = uRay[1];
  let alpha = uRay[2];

  let dir: vec3<f32> = vec3<f32>(d, d, 0.0);
  var noise: f32 = turb(dir + vec3<f32>(uTime, 0.0, 62.1 + uTime) * 0.05, vec3<f32>(480.0, 320.0, 480.0), lacunarity, gain);
  noise = mix(noise, 0.0, 0.3);
  //fade vertically.
  var mist: vec4<f32> = vec4<f32>(vec3<f32>(noise), 1.0) * (1.0 - coord.y);
  mist.a = 1.0;
  // apply user alpha
  mist *= alpha;
  return textureSample(uTexture, uSampler, uv) + mist;
}

\${PERLIN}`,py=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,my=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

fn moduloVec3(x: vec3<f32>, y: vec3<f32>) -> vec3<f32>
{
  return x - y * floor(x/y);
}
fn mod289Vec3(x: vec3<f32>) -> vec3<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn mod289Vec4(x: vec4<f32>) -> vec4<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn permute4(x: vec4<f32>) -> vec4<f32>
{
    return mod289Vec4(((x * 34.0) + 1.0) * x);
}
fn taylorInvSqrt(r: vec4<f32>) -> vec4<f32>
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
fn fade3(t: vec3<f32>) -> vec3<f32>
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
fn fade2(t: vec2<f32>) -> vec2<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }

fn perlinNoise2(P: vec2<f32>) -> f32 {
  var Pi: vec4<f32> = floor(P.xyxy) + vec4<f32>(0., 0., 1., 1.);
  let Pf = fract(P.xyxy) - vec4<f32>(0., 0., 1., 1.);
  Pi = Pi % vec4<f32>(289.); // To avoid truncation effects in permutation
  let ix = Pi.xzxz;
  let iy = Pi.yyww;
  let fx = Pf.xzxz;
  let fy = Pf.yyww;
  let i = permute4(permute4(ix) + iy);
  var gx: vec4<f32> = 2. * fract(i * 0.0243902439) - 1.; // 1/41 = 0.024...
  let gy = abs(gx) - 0.5;
  let tx = floor(gx + 0.5);
  gx = gx - tx;
  var g00: vec2<f32> = vec2<f32>(gx.x, gy.x);
  var g10: vec2<f32> = vec2<f32>(gx.y, gy.y);
  var g01: vec2<f32> = vec2<f32>(gx.z, gy.z);
  var g11: vec2<f32> = vec2<f32>(gx.w, gy.w);
  let norm = 1.79284291400159 - 0.85373472095314 *
      vec4<f32>(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 = g00 * norm.x;
  g01 = g01 * norm.y;
  g10 = g10 * norm.z;
  g11 = g11 * norm.w;
  let n00 = dot(g00, vec2<f32>(fx.x, fy.x));
  let n10 = dot(g10, vec2<f32>(fx.y, fy.y));
  let n01 = dot(g01, vec2<f32>(fx.z, fy.z));
  let n11 = dot(g11, vec2<f32>(fx.w, fy.w));
  let fade_xy = fade2(Pf.xy);
  let n_x = mix(vec2<f32>(n00, n01), vec2<f32>(n10, n11), vec2<f32>(fade_xy.x));
  let n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

// Classic Perlin noise, periodic variant
fn perlinNoise3(P: vec3<f32>, rep: vec3<f32>) -> f32
{
    var Pi0: vec3<f32> = moduloVec3(floor(P), rep); // Integer part, modulo period
    var Pi1: vec3<f32> = moduloVec3(Pi0 + vec3<f32>(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289Vec3(Pi0);
    Pi1 = mod289Vec3(Pi1);
    let Pf0: vec3<f32> = fract(P); // Fractional part for interpolation
    let Pf1: vec3<f32> = Pf0 - vec3<f32>(1.0); // Fractional part - 1.0
    let ix: vec4<f32> = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    let iy: vec4<f32> = vec4<f32>(Pi0.yy, Pi1.yy);
    let iz0: vec4<f32> = Pi0.zzzz;
    let iz1: vec4<f32> = Pi1.zzzz;
    let ixy: vec4<f32> = permute4(permute4(ix) + iy);
    let ixy0: vec4<f32> = permute4(ixy + iz0);
    let ixy1: vec4<f32> = permute4(ixy + iz1);
    var gx0: vec4<f32> = ixy0 * (1.0 / 7.0);
    var gy0: vec4<f32> = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    let gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);
    let sz0: vec4<f32> = step(gz0, vec4<f32>(0.0));
    gx0 -= sz0 * (step(vec4<f32>(0.0), gx0) - 0.5);
    gy0 -= sz0 * (step(vec4<f32>(0.0), gy0) - 0.5);
    var gx1: vec4<f32> = ixy1 * (1.0 / 7.0);
    var gy1: vec4<f32> = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    let gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);
    let sz1: vec4<f32> = step(gz1, vec4<f32>(0.0));
    gx1 -= sz1 * (step(vec4<f32>(0.0), gx1) - 0.5);
    gy1 -= sz1 * (step(vec4<f32>(0.0), gy1) - 0.5);
    var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);
    var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);
    var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);
    var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);
    var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);
    var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);
    var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);
    var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);
    let norm0: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    let norm1: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    let n000: f32 = dot(g000, Pf0);
    let n100: f32 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));
    let n010: f32 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));
    let n110: f32 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));
    let n001: f32 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));
    let n101: f32 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));
    let n011: f32 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));
    let n111: f32 = dot(g111, Pf1);
    let fade_xyz: vec3<f32> = fade3(Pf0);
    let n_z: vec4<f32> = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), fade_xyz.z);
    let n_yz: vec2<f32> = mix(n_z.xy, n_z.zw, fade_xyz.y);
    let n_xyz: f32 = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
fn turb(P: vec3<f32>, rep: vec3<f32>, lacunarity: f32, gain: f32) -> f32
{
    var sum: f32 = 0.0;
    var sc: f32 = 1.0;
    var totalgain: f32 = 1.0;
    for (var i = 0.0; i < 6.0; i += 1)
    {
        sum += totalgain * perlinNoise3(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}`,gy=Object.defineProperty,_y=(n,t,e)=>t in n?gy(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ri=(n,t,e)=>(_y(n,typeof t!="symbol"?t+"":t,e),e);const xy=class df extends X{constructor(t){t={...df.DEFAULT_OPTIONS,...t};const e=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:dy.replace("${PERLIN}",my),entryPoint:"mainFragment"}}),i=$.from({vertex:q,fragment:fy.replace("${PERLIN}",py),name:"god-ray-filter"});super({gpuProgram:e,glProgram:i,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:t.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Ri(this,"uniforms"),Ri(this,"time",0),Ri(this,"_angleLight",[0,0]),Ri(this,"_angle",0),Ri(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(t,e,i,r){const s=e.frame.width,o=e.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,this.uniforms.uTime=this.time,t.applyFilter(this,e,i,r)}get angle(){return this._angle}set angle(t){this._angle=t;const e=t*Wi;this._angleLight[0]=Math.cos(e),this._angleLight[1]=Math.sin(e)}get parallel(){return this.uniforms.uParallel>.5}set parallel(t){this.uniforms.uParallel=t?1:0}get center(){return this._center}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._center=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get gain(){return this.uniforms.uRay[0]}set gain(t){this.uniforms.uRay[0]=t}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(t){this.uniforms.uRay[1]=t}get alpha(){return this.uniforms.uRay[2]}set alpha(t){this.uniforms.uRay[2]=t}};Ri(xy,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var vy=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uHsl;
uniform float uAlpha;
uniform float uColorize;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 resultRGB = color.rgb;

    float hue = uHsl[0];
    float saturation = uHsl[1];
    float lightness = uHsl[2];

    // colorize
    if (uColorize > 0.5) {
        resultRGB = vec3(getWeightedAverage(resultRGB), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    finalColor = mix(color, vec4(resultRGB, color.a), uAlpha);
}
`,yy=`struct HslUniforms {
  uHsl:vec3<f32>,
  uColorize:f32,
  uAlpha:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> hslUniforms : HslUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
    var resultRGB: vec3<f32> = color.rgb;

    let hue: f32 = hslUniforms.uHsl[0];
    let saturation: f32 = hslUniforms.uHsl[1];
    let lightness: f32 = hslUniforms.uHsl[2];

    // colorize
    if (hslUniforms.uColorize > 0.5) {
        resultRGB = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    let average: f32 = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3<f32>(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    return mix(color, vec4<f32>(resultRGB, color.a), hslUniforms.uAlpha);
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const k: vec3<f32> = vec3(0.57735, 0.57735, 0.57735);

fn hueShift(color: vec3<f32>, angle: f32) -> vec3<f32> 
{
    let cosAngle: f32 = cos(angle);
    return vec3<f32>(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}`,by=Object.defineProperty,Sy=(n,t,e)=>t in n?by(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,zo=(n,t,e)=>(Sy(n,typeof t!="symbol"?t+"":t,e),e);const wy=class pf extends X{constructor(t){t={...pf.DEFAULT_OPTIONS,...t};const e=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:yy,entryPoint:"mainFragment"}}),i=$.from({vertex:q,fragment:vy,name:"hsl-adjustment-filter"});super({gpuProgram:e,glProgram:i,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:t.colorize?1:0,type:"f32"},uAlpha:{value:t.alpha,type:"f32"}}}}),zo(this,"uniforms"),zo(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,this.hue=t.hue}get hue(){return this._hue}set hue(t){this._hue=t,this.resources.hslUniforms.uniforms.uHsl[0]=t*(Math.PI/180)}get saturation(){return this.resources.hslUniforms.uniforms.uHsl[1]}set saturation(t){this.resources.hslUniforms.uniforms.uHsl[1]=t}get lightness(){return this.resources.hslUniforms.uniforms.uHsl[2]}set lightness(t){this.resources.hslUniforms.uniforms.uHsl[2]=t}get colorize(){return this.resources.hslUniforms.uniforms.uColorize===1}set colorize(t){this.resources.hslUniforms.uniforms.uColorize=t?1:0}get alpha(){return this.resources.hslUniforms.uniforms.uAlpha}set alpha(t){this.resources.hslUniforms.uniforms.uAlpha=t}};zo(wy,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var Cy=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    vec2 velocity = uVelocity / uInputSize.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture(uTexture, vTextureCoord + bias);
    }
    finalColor = color / float(uKernelSize);
}
`,Ay=`struct MotionBlurUniforms {
  uVelocity: vec2<f32>,
  uKernelSize: f32,
  uOffset: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> motionBlurUniforms : MotionBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uVelocity = motionBlurUniforms.uVelocity;
  let uKernelSize = motionBlurUniforms.uKernelSize;
  let uOffset = motionBlurUniforms.uOffset;

  let velocity: vec2<f32> = uVelocity / gfu.uInputSize.xy;
  let offset: f32 = -uOffset / length(uVelocity) - 0.5;
  let k: i32 = i32(min(uKernelSize - 1, MAX_KERNEL_SIZE - 1));

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  for(var i: i32 = 0; i < k; i += 1) {
    let bias: vec2<f32> = velocity * (f32(i) / f32(k) + offset);
    color += textureSample(uTexture, uSampler, uv + bias);
  }
  
  return select(color / f32(uKernelSize), textureSample(uTexture, uSampler, uv), uKernelSize == 0);
}

const MAX_KERNEL_SIZE: f32 = 2048;`,Ty=Object.defineProperty,Py=(n,t,e)=>t in n?Ty(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Oo=(n,t,e)=>(Py(n,typeof t!="symbol"?t+"":t,e),e);const Fy=class mf extends X{constructor(...t){let e=t[0]??{};if(Array.isArray(e)||"x"in e&&"y"in e||e instanceof Ot){k("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const s="x"in e?e.x:e[0],o="y"in e?e.y:e[1];e={velocity:{x:s,y:o}},t[1]!==void 0&&(e.kernelSize=t[1]),t[2]!==void 0&&(e.offset=t[2])}e={...mf.DEFAULT_OPTIONS,...e};const i=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:Ay,entryPoint:"mainFragment"}}),r=$.from({vertex:q,fragment:Cy,name:"motion-blur-filter"});super({gpuProgram:i,glProgram:r,resources:{motionBlurUniforms:{uVelocity:{value:e.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(e.kernelSize??5),type:"i32"},uOffset:{value:e.offset,type:"f32"}}}}),Oo(this,"uniforms"),Oo(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,e)}get velocity(){return this.uniforms.uVelocity}set velocity(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uVelocity=t,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(t){this.velocity.x=t,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(t){this.velocity.y=t,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};Oo(Fy,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var My=`in vec2 vTextureCoord;
out vec4 finalColor;

const int MAX_COLORS = \${MAX_COLORS};

uniform sampler2D uTexture;
uniform vec3 uOriginalColors[MAX_COLORS];
uniform vec3 uTargetColors[MAX_COLORS];
uniform float uTolerance;

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);

    float alpha = finalColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = finalColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < uTolerance)
      {
        vec3 targetColor = uTargetColors[i];
        finalColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`,Iy=`struct MultiColorReplaceUniforms {
  uOriginalColors: array<vec3<f32>, MAX_COLORS>,
  uTargetColors: array<vec3<f32>, MAX_COLORS>,
  uTolerance:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> multiColorReplaceUniforms : MultiColorReplaceUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOriginalColors = multiColorReplaceUniforms.uOriginalColors;
  let uTargetColors = multiColorReplaceUniforms.uTargetColors;
  let uTolerance = multiColorReplaceUniforms.uTolerance;

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let alpha: f32 = color.a;

  if (alpha > 0.0001)
  {
    var modColor: vec3<f32> = vec3<f32>(color.rgb) / alpha;

    for(var i: i32 = 0; i < MAX_COLORS; i += 1)
    {
      let origColor: vec3<f32> = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      let colorDiff: vec3<f32> = origColor - modColor;
      
      if (length(colorDiff) < uTolerance)
      {
        let targetColor: vec3<f32> = uTargetColors[i];
        color = vec4((targetColor + colorDiff) * alpha, alpha);
        return color;
      }
    }
  }

  return color;
}

const MAX_COLORS: i32 = \${MAX_COLORS};`,Ey=Object.defineProperty,zy=(n,t,e)=>t in n?Ey(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,pr=(n,t,e)=>(zy(n,typeof t!="symbol"?t+"":t,e),e);const Oy=class gf extends X{constructor(...t){let e=t[0]??{};Array.isArray(e)&&(k("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),e={replacements:e},t[1]&&(e.tolerance=t[1]),t[2]&&(e.maxColors=t[2])),e={...gf.DEFAULT_OPTIONS,...e};const i=e.maxColors??e.replacements.length,r=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:Iy.replace(/\$\{MAX_COLORS\}/g,i.toFixed(0)),entryPoint:"mainFragment"}}),s=$.from({vertex:q,fragment:My.replace(/\$\{MAX_COLORS\}/g,i.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:r,glProgram:s,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*i),type:"vec3<f32>",size:i},uTargetColors:{value:new Float32Array(3*i),type:"vec3<f32>",size:i},uTolerance:{value:e.tolerance,type:"f32"}}}}),pr(this,"uniforms"),pr(this,"_replacements",[]),pr(this,"_maxColors"),this._maxColors=i,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=e.replacements}set replacements(t){const e=this.uniforms.uOriginalColors,i=this.uniforms.uTargetColors,r=t.length,s=new j;if(r>this._maxColors)throw new Error(`Length of replacements (${r}) exceeds the maximum colors length (${this._maxColors})`);e[r*3]=-1;let o,a,l;for(let u=0;u<r;u++){const h=t[u];s.setValue(h[0]),[o,a,l]=s.toArray(),e[u*3]=o,e[u*3+1]=a,e[u*3+2]=l,s.setValue(h[1]),[o,a,l]=s.toArray(),i[u*3]=o,i[u*3+1]=a,i[u*3+2]=l}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set epsilon(t){k("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return k("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};pr(Oy,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var Ry=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSepia;
uniform vec2 uNoise;
uniform vec3 uScratch;
uniform vec3 uVignetting;
uniform float uSeed;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    finalColor = texture(uTexture, vTextureCoord);
    vec3 color = finalColor.rgb;

    if (uSepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + uSepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions.xy;

    float vignette = uVignetting[0];
    float vignetteAlpha = uVignetting[1];
    float vignetteBlur = uVignetting[2];

    if (vignette > 0.0)
    {
        float outter = SQRT_2 - vignette * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= uDimensions.y / uDimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignetteBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignetteAlpha);
    }

    float scratch = uScratch[0];
    float scratchDensity = uScratch[1];
    float scratchWidth = uScratch[2];

    if (scratchDensity > uSeed && scratch != 0.0)
    {
        float phase = uSeed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(uSeed * dist, abs(s - uSeed * dist)));
        if (d < uSeed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / uDimensions.x * (0.75 + uSeed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    float noise = uNoise[0];
    float noiseSize = uNoise[1];

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + uSeed * 512.0, 1024.0 - uSeed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * uSeed) - 0.5;
        color += _noise * noise;
    }

    finalColor.rgb = color;
}`,ky=`struct OldFilmUniforms {
    uSepia: f32,
    uNoise: vec2<f32>,
    uScratch: vec3<f32>,
    uVignetting: vec3<f32>,
    uSeed: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> oldFilmUniforms : OldFilmUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  if (oldFilmUniforms.uSepia > 0.)
  {
    color = vec4<f32>(sepia(color.rgb), color.a);
  }

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / oldFilmUniforms.uDimensions;

  if (oldFilmUniforms.uVignetting[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  let uScratch = oldFilmUniforms.uScratch; 

  if (uScratch[1] > oldFilmUniforms.uSeed && uScratch[0] != 0.)
  {
    color = vec4<f32>(scratch(color.rgb, coord), color.a);
  }

  let uNoise = oldFilmUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  return color;
}

const SQRT_2: f32 = 1.414213;
const SEPIA_RGB: vec3<f32> = vec3<f32>(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn overlay(src: vec3<f32>, dst: vec3<f32>) -> vec3<f32>
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)

    return vec3<f32>(
      select((1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (2.0 * src.x * dst.x), (dst.x <= 0.5)), 
      select((1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (2.0 * src.y * dst.y), (dst.y <= 0.5)),
      select((1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)), (2.0 * src.z * dst.z), (dst.z <= 0.5))
    );
}

fn sepia(co: vec3<f32>) -> vec3<f32>
{
  let gray: f32 = (co.x + co.y + co.z) / 3.0;
  let grayscale: vec3<f32> = vec3<f32>(gray);
  let color = overlay(SEPIA_RGB, grayscale);
  return grayscale + oldFilmUniforms.uSepia * (color - grayscale);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignetting = oldFilmUniforms.uVignetting;
  let uDimensions = oldFilmUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignetting[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(vec2<f32>(0.5) - coord);
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignetting[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignetting[1]);
}

fn scratch(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;
  let uScratch = oldFilmUniforms.uScratch;
  let uSeed = oldFilmUniforms.uSeed;
  let uDimensions = oldFilmUniforms.uDimensions;

  let phase: f32 = uSeed * 256.0;
  let s: f32 = modulo(floor(phase), 2.0);
  let dist: f32 = 1.0 / uScratch[1];
  let d: f32 = distance(coord, vec2<f32>(uSeed * dist, abs(s - uSeed * dist)));

  if (d < uSeed * 0.6 + 0.4)
  {
    let period: f32 = uScratch[1] * 10.0;

    let xx: f32 = coord.x * period + phase;
    let aa: f32 = abs(modulo(xx, 0.5) * 4.0);
    let bb: f32 = modulo(floor(xx / 0.5), 2.0);
    let yy: f32 = (1.0 - bb) * aa + bb * (2.0 - aa);

    let kk: f32 = 2.0 * period;
    let dw: f32 = uScratch[2] / uDimensions.x * (0.75 + uSeed);
    let dh: f32 = dw * kk;

    var tine: f32 = (yy - (2.0 - dh));

    if (tine > 0.0) {
        let _sign: f32 = sign(uScratch[0]);

        tine = s * tine / period + uScratch[0] + 0.1;
        tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

        color *= tine;
    }
  }

  return color;
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = oldFilmUniforms.uNoise;
  let uSeed = oldFilmUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}`,By=Object.defineProperty,Uy=(n,t,e)=>t in n?By(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ro=(n,t,e)=>(Uy(n,typeof t!="symbol"?t+"":t,e),e);const Ly=class _f extends X{constructor(t){t={..._f.DEFAULT_OPTIONS,...t};const e=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:ky,entryPoint:"mainFragment"}}),i=$.from({vertex:q,fragment:Ry,name:"old-film-filter"});super({gpuProgram:e,glProgram:i,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Ro(this,"uniforms"),Ro(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(t,e,i,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uSeed=this.seed,t.applyFilter(this,e,i,r)}get sepia(){return this.uniforms.uSepia}set sepia(t){this.uniforms.uSepia=t}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get scratch(){return this.uniforms.uScratch[0]}set scratch(t){this.uniforms.uScratch[0]=t}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(t){this.uniforms.uScratch[1]=t}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(t){this.uniforms.uScratch[2]=t}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(t){this.uniforms.uVignetting[0]=t}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(t){this.uniforms.uVignetting[1]=t}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(t){this.uniforms.uVignetting[2]=t}};Ro(Ly,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var Dy=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uThickness;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uKnockout;

uniform vec4 uInputClamp;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${ANGLE_STEP};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture(uTexture, clamp(displacedPos, uInputClamp.xy, uInputClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture(uTexture, vTextureCoord);
    vec4 contentColor = sourceColor * float(uKnockout < 0.5);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    finalColor = contentColor + outlineColor;
}
`,Gy=`struct OutlineUniforms {
  uThickness:vec2<f32>,
  uColor:vec3<f32>,
  uAlpha:f32,
  uAngleStep:f32,
  uKnockout:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> outlineUniforms : OutlineUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sourceColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let contentColor: vec4<f32> = sourceColor * (1. - outlineUniforms.uKnockout);
  
  let outlineAlpha: f32 = outlineUniforms.uAlpha * outlineMaxAlphaAtPos(uv) * (1. - sourceColor.a);
  let outlineColor: vec4<f32> = vec4<f32>(vec3<f32>(outlineUniforms.uColor) * outlineAlpha, outlineAlpha);
  
  return contentColor + outlineColor;
}

fn outlineMaxAlphaAtPos(uv: vec2<f32>) -> f32 {
  let thickness = outlineUniforms.uThickness;

  if (thickness.x == 0. || thickness.y == 0.) {
    return 0.;
  }
  
  let angleStep = outlineUniforms.uAngleStep;

  var displacedColor: vec4<f32>;
  var displacedPos: vec2<f32>;

  var maxAlpha: f32 = 0.;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.; angle <= DOUBLE_PI; angle += angleStep)
  {
    displaced.x = uv.x + thickness.x * cos(angle);
    displaced.y = uv.y + thickness.y * sin(angle);
    curColor = textureSample(uTexture, uSampler, clamp(displaced, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
    maxAlpha = max(maxAlpha, curColor.a);
  }

  return maxAlpha;
}

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,Ny=Object.defineProperty,Vy=(n,t,e)=>t in n?Ny(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ci=(n,t,e)=>(Vy(n,typeof t!="symbol"?t+"":t,e),e);const va=class si extends X{constructor(...t){let e=t[0]??{};typeof e=="number"&&(k("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),e={thickness:e},t[1]!==void 0&&(e.color=t[1]),t[2]!==void 0&&(e.quality=t[2]),t[3]!==void 0&&(e.alpha=t[3]),t[4]!==void 0&&(e.knockout=t[4])),e={...si.DEFAULT_OPTIONS,...e};const i=e.quality??.1,r=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:Gy,entryPoint:"mainFragment"}}),s=$.from({vertex:q,fragment:Dy.replace(/\$\{ANGLE_STEP\}/,si.getAngleStep(i).toFixed(7)),name:"outline-filter"});super({gpuProgram:r,glProgram:s,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:e.knockout?1:0,type:"f32"}}}}),ci(this,"uniforms"),ci(this,"_thickness"),ci(this,"_quality"),ci(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=si.getAngleStep(i),this._color=new j,this.color=e.color??0,Object.assign(this,e)}apply(t,e,i,r){this.uniforms.uThickness[0]=this.thickness/e.source.width,this.uniforms.uThickness[1]=this.thickness/e.source.height,t.applyFilter(this,e,i,r)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*si.MAX_SAMPLES,si.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(t){this._thickness=this.padding=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=si.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};ci(va,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});ci(va,"MIN_SAMPLES",1);ci(va,"MAX_SAMPLES",100);var Wy=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    float aspect = uInputSize.y / uInputSize.x;
    vec2 center = uCenter.xy / uInputSize.xy;
    float gradient = uRadius / uInputSize.x * 0.3;
    float radius = uRadius / uInputSize.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            finalColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture(uTexture, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    finalColor = color / float(uKernelSize);
}
`,$y=`struct RadialBlurUniforms {
  uRadian: f32,
  uCenter: vec2<f32>,
  uKernelSize: f32,
  uRadius: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> radialBlurUniforms : RadialBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uRadian = radialBlurUniforms.uRadian;
  let uCenter = radialBlurUniforms.uCenter;
  let uKernelSize = radialBlurUniforms.uKernelSize;
  let uRadius = radialBlurUniforms.uRadius;
  
  var returnColorOnly = false;

  if (uKernelSize == 0)
  {
    returnColorOnly = true;
  }

  let aspect: f32 = gfu.uInputSize.y / gfu.uInputSize.x;
  let center: vec2<f32> = uCenter.xy / gfu.uInputSize.xy;
  let gradient: f32 = uRadius / gfu.uInputSize.x * 0.3;
  let radius: f32 = uRadius / gfu.uInputSize.x - gradient * 0.5;
  let k: i32 = i32(uKernelSize - 1);

  var coord: vec2<f32> = uv;
  let dir: vec2<f32> = vec2<f32>(center - coord);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * aspect));

  var radianStep: f32 = uRadian;
  
  if (radius >= 0.0 && dist > radius)
  {
    let delta: f32 = dist - radius;
    let gap: f32 = gradient;
    let scale: f32 = 1.0 - abs(delta / gap);
    if (scale <= 0.0) {
      returnColorOnly = true;
    }
    radianStep *= scale;
  }

  radianStep /= f32(k);

  let s: f32 = sin(radianStep);
  let c: f32 = cos(radianStep);
  let rotationMatrix: mat2x2<f32> = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let baseColor = vec4<f32>(color);

  let minK: i32 = min(i32(uKernelSize) - 1, MAX_KERNEL_SIZE - 1);

  for(var i: i32 = 0; i < minK; i += 1) 
  {
    coord -= center;
    coord.y *= aspect;
    coord = rotationMatrix * coord;
    coord.y /= aspect;
    coord += center;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, coord);
    // switch to pre-multiplied alpha to correctly blur transparent images
    // sample.rgb *= sample.a;
    color += sample;
  }

  return select(color / f32(uKernelSize), baseColor, returnColorOnly);
}

const MAX_KERNEL_SIZE: i32 = 2048;`,Yy=Object.defineProperty,Xy=(n,t,e)=>t in n?Yy(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,mr=(n,t,e)=>(Xy(n,typeof t!="symbol"?t+"":t,e),e);const Hy=class xf extends X{constructor(...t){let e=t[0]??{};if(typeof e=="number"){if(k("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),e={angle:e},t[1]){const s="x"in t[1]?t[1].x:t[1][0],o="y"in t[1]?t[1].y:t[1][1];e.center={x:s,y:o}}t[2]&&(e.kernelSize=t[2]),t[3]&&(e.radius=t[3])}e={...xf.DEFAULT_OPTIONS,...e};const i=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:$y,entryPoint:"mainFragment"}}),r=$.from({vertex:q,fragment:Wy,name:"radial-blur-filter"});super({gpuProgram:i,glProgram:r,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uKernelSize:{value:e.kernelSize,type:"i32"},uRadius:{value:e.radius,type:"f32"}}}}),mr(this,"uniforms"),mr(this,"_angle"),mr(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,e)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t<0||t===1/0?-1:t}};mr(Hy,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var jy=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uMirror;
uniform float uBoundary;
uniform vec2 uAmplitude;
uniform vec2 uWavelength;
uniform vec2 uAlpha;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
    vec2 coord = pixelCoord / uDimensions;

    if (coord.y < uBoundary) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    float k = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
    float areaY = uBoundary * uDimensions.y / uInputSize.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = uMirror > 0.5 ? v : vTextureCoord.y;

    float _amplitude = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / uInputSize.x;
    float _waveLength = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / uInputSize.y;
    float _alpha = (uAlpha.y - uAlpha.x) * k + uAlpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - uTime) * _amplitude;
    x = clamp(x, uInputClamp.x, uInputClamp.z);

    vec4 color = texture(uTexture, vec2(x, y));

    finalColor = color * _alpha;
}
`,qy=`struct ReflectionUniforms {
  uMirror: f32,
  uBoundary: f32,
  uAmplitude: vec2<f32>,
  uWavelength: vec2<f32>,
  uAlpha: vec2<f32>,
  uTime: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> reflectionUniforms : ReflectionUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = reflectionUniforms.uDimensions;
  let uBoundary: f32 = reflectionUniforms.uBoundary;
  let uMirror: bool = reflectionUniforms.uMirror > 0.5;
  let uAmplitude: vec2<f32> = reflectionUniforms.uAmplitude;
  let uWavelength: vec2<f32> = reflectionUniforms.uWavelength;
  let uAlpha: vec2<f32> = reflectionUniforms.uAlpha;
  let uTime: f32 = reflectionUniforms.uTime;

  let pixelCoord: vec2<f32> = uv * gfu.uInputSize.xy;
  let coord: vec2<f32> = pixelCoord /uDimensions;
  var returnColorOnly: bool = false;

  if (coord.y < uBoundary) {
    returnColorOnly = true;
  }

  let k: f32 = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
  let areaY: f32 = uBoundary * uDimensions.y / gfu.uInputSize.y;
  let v: f32 = areaY + areaY - uv.y;
  let y: f32 = select(uv.y, v, uMirror);

  let amplitude: f32 = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / gfu.uInputSize.x;
  let waveLength: f32 = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / gfu.uInputSize.y;
  let alpha: f32 = select((uAlpha.y - uAlpha.x) * k + uAlpha.x, 1., returnColorOnly);

  var x: f32 = uv.x + cos(v * 6.28 / waveLength - uTime) * amplitude;
  x = clamp(x, gfu.uInputClamp.x, gfu.uInputClamp.z);
  
  return textureSample(uTexture, uSampler, select(vec2<f32>(x, y), uv, returnColorOnly)) * alpha;
}

fn rand(co: vec2<f32>) -> f32 
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}`,Ky=Object.defineProperty,Qy=(n,t,e)=>t in n?Ky(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ko=(n,t,e)=>(Qy(n,typeof t!="symbol"?t+"":t,e),e);const Zy=class vf extends X{constructor(t){t={...vf.DEFAULT_OPTIONS,...t};const e=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:qy,entryPoint:"mainFragment"}}),i=$.from({vertex:q,fragment:jy,name:"reflection-filter"});super({gpuProgram:e,glProgram:i,resources:{reflectionUniforms:{uMirror:{value:t.mirror?1:0,type:"f32"},uBoundary:{value:t.boundary,type:"f32"},uAmplitude:{value:t.amplitude,type:"vec2<f32>"},uWavelength:{value:t.waveLength,type:"vec2<f32>"},uAlpha:{value:t.alpha,type:"vec2<f32>"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ko(this,"uniforms"),ko(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(t,e,i,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uTime=this.time,t.applyFilter(this,e,i,r)}get mirror(){return this.uniforms.uMirror>.5}set mirror(t){this.uniforms.uMirror=t?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(t){this.uniforms.uBoundary=t}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(t){this.uniforms.uAmplitude[0]=t[0],this.uniforms.uAmplitude[1]=t[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(t){this.uniforms.uAmplitude[0]=t}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(t){this.uniforms.uAmplitude[1]=t}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(t){this.uniforms.uWavelength[0]=t[0],this.uniforms.uWavelength[1]=t[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(t){this.uniforms.uWavelength[0]=t}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(t){this.uniforms.uWavelength[1]=t}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(t){this.uniforms.uAlpha[0]=t[0],this.uniforms.uAlpha[1]=t[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(t){this.uniforms.uAlpha[0]=t}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(t){this.uniforms.uAlpha[1]=t}};ko(Zy,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var Jy=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

void main(void)
{
   float r = texture(uTexture, vTextureCoord + uRed/uInputSize.xy).r;
   float g = texture(uTexture, vTextureCoord + uGreen/uInputSize.xy).g;
   float b = texture(uTexture, vTextureCoord + uBlue/uInputSize.xy).b;
   float a = texture(uTexture, vTextureCoord).a;
   finalColor = vec4(r, g, b, a);
}
`,t2=`struct RgbSplitUniforms {
    uRed: vec2<f32>,
    uGreen: vec2<f32>,
    uBlue: vec3<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> rgbSplitUniforms : RgbSplitUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let r = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uRed.x / gfu.uInputSize.x, rgbSplitUniforms.uRed.y / gfu.uInputSize.y)).r;
    let g = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uGreen.x / gfu.uInputSize.x, rgbSplitUniforms.uGreen.y / gfu.uInputSize.y)).g;
    let b = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uBlue.x / gfu.uInputSize.x, rgbSplitUniforms.uBlue.y / gfu.uInputSize.y)).b;
    let a = textureSample(uTexture, uSampler, uv).a;
    return vec4<f32>(r, g, b, a);
}
`,e2=Object.defineProperty,i2=(n,t,e)=>t in n?e2(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,yf=(n,t,e)=>(i2(n,typeof t!="symbol"?t+"":t,e),e);const n2=class bf extends X{constructor(...t){let e=t[0]??{};(Array.isArray(e)||"x"in e&&"y"in e)&&(k("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),e={red:e},t[1]!==void 0&&(e.green=t[1]),t[2]!==void 0&&(e.blue=t[2])),e={...bf.DEFAULT_OPTIONS,...e};const i=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:t2,entryPoint:"mainFragment"}}),r=$.from({vertex:q,fragment:Jy,name:"rgb-split-filter"});super({gpuProgram:i,glProgram:r,resources:{rgbSplitUniforms:{uRed:{value:e.red,type:"vec2<f32>"},uGreen:{value:e.green,type:"vec2<f32>"},uBlue:{value:e.blue,type:"vec2<f32>"}}}}),yf(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,e)}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get redX(){return this.red.x}set redX(t){this.red.x=t}get redY(){return this.red.y}set redY(t){this.red.y=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get greenX(){return this.green.x}set greenX(t){this.green.x=t}get greenY(){return this.green.y}set greenY(t){this.green.y=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}get blueX(){return this.blue.x}set blueX(t){this.blue.x=t}get blueY(){return this.blue.y}set blueY(t){this.blue.y=t}};yf(n2,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var r2=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uCenter;
uniform float uTime;
uniform float uSpeed;
uniform vec4 uWave;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159;

void main()
{
    float uAmplitude = uWave[0];
    float uWavelength = uWave[1];
    float uBrightness = uWave[2];
    float uRadius = uWave[3];

    float halfWavelength = uWavelength * 0.5 / uInputSize.x;
    float maxRadius = uRadius / uInputSize.x;
    float currentRadius = uTime * uSpeed / uInputSize.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            finalColor = texture(uTexture, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - uCenter / uInputSize.xy);
    dir.y *= uInputSize.y / uInputSize.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );

    vec2 offset = diffUV * powDiff / uInputSize.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // finalColor = texture(uTexture, vTextureCoord + offset);

    color.rgb *= 1.0 + (uBrightness - 1.0) * p * fade;

    finalColor = color;
}
`,s2=`
struct ShockWaveUniforms {
    uTime: f32,
    uOffset: vec2<f32>,
    uSpeed: f32,
    uWave: vec4<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> shockwaveUniforms : ShockWaveUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {

    let uTime = shockwaveUniforms.uTime;
    let uOffset = shockwaveUniforms.uOffset;
    let uSpeed = shockwaveUniforms.uSpeed;
    let uAmplitude = shockwaveUniforms.uWave[0];
    let uWavelength = shockwaveUniforms.uWave[1];
    let uBrightness = shockwaveUniforms.uWave[2];
    let uRadius = shockwaveUniforms.uWave[3];
    let halfWavelength: f32 = uWavelength * 0.5 / gfu.uInputSize.x;
    let maxRadius: f32 = uRadius / gfu.uInputSize.x;
    let currentRadius: f32 = uTime * uSpeed / gfu.uInputSize.x;
    var fade: f32 = 1.0;
    var returnColorOnly: bool = false;
    
    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            returnColorOnly = true;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }
    var dir: vec2<f32> = vec2<f32>(uv - uOffset / gfu.uInputSize.xy);
    dir.y *= gfu.uInputSize.y / gfu.uInputSize.x;

    let dist:f32 = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        returnColorOnly = true;
    }

    let diffUV: vec2<f32> = normalize(dir);
    let diff: f32 = (dist - currentRadius) / halfWavelength;
    let p: f32 = 1.0 - pow(abs(diff), 2.0);
    let powDiff: f32 = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );
    let offset: vec2<f32> = diffUV * powDiff / gfu.uInputSize.xy;
    // Do clamp :
    let coord: vec2<f32> = uv + offset;
    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);

    var clampedColor: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    
    if (boolVec2(coord, clampedCoord)) 
    {
        clampedColor *= max(0.0, 1.0 - length(coord - clampedCoord));
    }
    // No clamp :
    var finalColor = clampedColor;

    return select(finalColor, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn boolVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
    if (x.x == y.x && x.y == y.y)
    {
        return true;
    }
    
    return false;
}

const PI: f32 = 3.14159265358979323846264;
`,o2=Object.defineProperty,a2=(n,t,e)=>t in n?o2(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Bo=(n,t,e)=>(a2(n,typeof t!="symbol"?t+"":t,e),e);const l2=class Sf extends X{constructor(...t){let e=t[0]??{};(Array.isArray(e)||"x"in e&&"y"in e)&&(k("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),e={center:e,...t[1]},t[2]!==void 0&&(e.time=t[2])),e={...Sf.DEFAULT_OPTIONS,...e};const i=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:s2,entryPoint:"mainFragment"}}),r=$.from({vertex:q,fragment:r2,name:"shockwave-filter"});super({gpuProgram:i,glProgram:r,resources:{shockwaveUniforms:{uTime:{value:e.time,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uSpeed:{value:e.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),Bo(this,"uniforms"),Bo(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,e)}apply(t,e,i,r){this.uniforms.uTime=this.time,t.applyFilter(this,e,i,r)}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get speed(){return this.uniforms.uSpeed}set speed(t){this.uniforms.uSpeed=t}get amplitude(){return this.uniforms.uWave[0]}set amplitude(t){this.uniforms.uWave[0]=t}get wavelength(){return this.uniforms.uWave[1]}set wavelength(t){this.uniforms.uWave[1]=t}get brightness(){return this.uniforms.uWave[2]}set brightness(t){this.uniforms.uWave[2]=t}get radius(){return this.uniforms.uWave[3]}set radius(t){this.uniforms.uWave[3]=t}};Bo(l2,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var u2=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

void main() {
    vec4 diffuseColor = texture(uTexture, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * uInputSize.xy) / uDimensions;
    vec4 light = texture(uMapTexture, lightCoord);
    vec3 ambient = uColor.rgb * uAlpha;
    vec3 intensity = ambient + light.rgb;
    vec3 color = diffuseColor.rgb * intensity;
    finalColor = vec4(color, diffuseColor.a);
}
`,h2=`struct SimpleLightmapUniforms {
  uColor: vec3<f32>,
  uAlpha: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> simpleLightmapUniforms : SimpleLightmapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
) -> @location(0) vec4<f32> {
  let uColor = simpleLightmapUniforms.uColor;
  let uAlpha = simpleLightmapUniforms.uAlpha;
  let uDimensions = simpleLightmapUniforms.uDimensions;

  let diffuseColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightCoord: vec2<f32> = (uv * gfu.uInputSize.xy) / simpleLightmapUniforms.uDimensions;
  let light: vec4<f32> = textureSample(uMapTexture, uMapSampler, lightCoord);
  let ambient: vec3<f32> = uColor * uAlpha;
  let intensity: vec3<f32> = ambient + light.rgb;
  let finalColor: vec3<f32> = diffuseColor.rgb * intensity;
  return vec4<f32>(finalColor, diffuseColor.a);
}`,c2=Object.defineProperty,f2=(n,t,e)=>t in n?c2(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,gr=(n,t,e)=>(f2(n,typeof t!="symbol"?t+"":t,e),e);const d2=class wf extends X{constructor(...t){let e=t[0]??{};if(e instanceof D&&(k("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),e={lightMap:e},t[1]!==void 0&&(e.color=t[1]),t[2]!==void 0&&(e.alpha=t[2])),e={...wf.DEFAULT_OPTIONS,...e},!e.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const i=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:h2,entryPoint:"mainFragment"}}),r=$.from({vertex:q,fragment:u2,name:"simple-lightmap-filter"});super({gpuProgram:i,glProgram:r,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:e.lightMap.source,uMapSampler:e.lightMap.source.style}}),gr(this,"uniforms"),gr(this,"_color"),gr(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new j,this.color=e.color??0,Object.assign(this,e)}apply(t,e,i,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,t.applyFilter(this,e,i,r)}get lightMap(){return this._lightMap}set lightMap(t){this._lightMap=t,this.resources.uMapTexture=t.source,this.resources.uMapSampler=t.source.style}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};gr(d2,"DEFAULT_OPTIONS",{lightMap:D.WHITE,color:0,alpha:1});var p2=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uBlur;
uniform vec2 uStart;
uniform vec2 uEnd;
uniform vec2 uDelta;
uniform vec2 uTexSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float blur = uBlur[0];
    float gradientBlur = uBlur[1];

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(uStart.y - uEnd.y, uEnd.x - uStart.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * uTexSize - uStart, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture(uTexture, vTextureCoord + uDelta / uTexSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    finalColor = color;
}
`,m2=`struct TiltShiftUniforms {
  uBlur: vec2<f32>,
  uStart: vec2<f32>,
  uEnd: vec2<f32>,
  uDelta: vec2<f32>,
  uTexSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> tiltShiftUniforms : TiltShiftUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uBlur = tiltShiftUniforms.uBlur[0];
  let uBlurGradient = tiltShiftUniforms.uBlur[1];
  let uStart = tiltShiftUniforms.uStart;
  let uEnd = tiltShiftUniforms.uEnd;
  let uDelta = tiltShiftUniforms.uDelta;
  let uTexSize = tiltShiftUniforms.uTexSize;

  var color: vec4<f32> = vec4<f32>(0.0);
  var total: f32 = 0.0;

  let offset: f32 = random(position, vec3<f32>(12.9898, 78.233, 151.7182), 0.0);
  let normal: vec2<f32> = normalize(vec2<f32>(uStart.y - uEnd.y, uEnd.x - uStart.x));
  let radius: f32 = smoothstep(0.0, 1.0, abs(dot(uv * uTexSize - uStart, normal)) / uBlurGradient) * uBlur;

  for (var t: f32 = -30.0; t <= 30.0; t += 1.0)
  {
    var percent: f32 = (t + offset - 0.5) / 30.0;
    var weight: f32 = 1.0 - abs(percent);
    var sample: vec4<f32> = textureSample(uTexture, uSampler, uv + uDelta / uTexSize * percent * radius);
    sample = vec4<f32>(sample.xyz * sample.a, sample.a); // multiply sample.rgb with sample.a
    color += sample * weight;
    total += weight;
  }

  color /= total;
  color = vec4<f32>(color.xyz / (color.a + 0.00001), color.a); // divide color.rgb by color.a + 0.00001

  return color;
}


fn random(position: vec4<f32>, scale: vec3<f32>, seed: f32) -> f32
{
  return fract(sin(dot(position.xyz + seed, scale)) * 43758.5453 + seed);
}`,g2=Object.defineProperty,_2=(n,t,e)=>t in n?g2(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Uo=(n,t,e)=>(_2(n,typeof t!="symbol"?t+"":t,e),e);const x2=class Cf extends X{constructor(t){t={...Cf.DEFAULT_OPTIONS,...t};const e=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:m2,entryPoint:"mainFragment"}}),i=$.from({vertex:q,fragment:p2,name:"tilt-shift-axis-filter"});super({gpuProgram:e,glProgram:i,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur??100,t.gradientBlur??600]),type:"vec2<f32>"},uStart:{value:t.start,type:"vec2<f32>"},uEnd:{value:t.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([30,30]),type:"vec2<f32>"},uTexSize:{value:new Float32Array([window.innerWidth,window.innerHeight]),type:"vec2<f32>"}}}}),Uo(this,"uniforms"),Uo(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis,this.updateDelta()}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const t=this.uniforms.uEnd,e=this.uniforms.uStart,i=t.x-e.x,r=t.y-e.y,s=Math.sqrt(i*i+r*r),o=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=o?-r/s:i/s,this.uniforms.uDelta[1]=o?i/s:r/s}};Uo(x2,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600,start:{x:0,y:window.innerHeight/2},end:{x:600,y:window.innerHeight/2}});var v2=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTwist;
uniform vec2 uOffset;
uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= uOffset;

    float dist = length(coord);
    float uRadius = uTwist[0];
    float uAngle = uTwist[1];

    if (dist < uRadius)
    {
        float ratioDist = (uRadius - dist) / uRadius;
        float angleMod = ratioDist * ratioDist * uAngle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += uOffset;

    return coord;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    coord = twist(coord);
    coord = unmapCoord(coord);
    finalColor = texture(uTexture, coord);
}
`,y2=`struct TwistUniforms {
  uTwist:vec2<f32>,
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> twistUniforms : TwistUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  return textureSample(uTexture, uSampler, unmapCoord(twist(mapCoord(uv))));
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord *= gfu.uInputSize.xy;
  mappedCoord += gfu.uOutputFrame.xy;
  return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord -= gfu.uOutputFrame.xy;
  mappedCoord /= gfu.uInputSize.xy;
  return mappedCoord;
}

fn twist(coord: vec2<f32>) -> vec2<f32>
{
  var twistedCoord: vec2<f32> = coord;
  let uRadius = twistUniforms.uTwist[0];
  let uAngle = twistUniforms.uTwist[1];
  let uOffset = twistUniforms.uOffset;

  twistedCoord -= uOffset;
  
  let dist = length(twistedCoord);

  if (dist < uRadius)
  {
    let ratioDist: f32 = (uRadius - dist) / uRadius;
    let angleMod: f32 = ratioDist * ratioDist * uAngle;
    let s: f32 = sin(angleMod);
    let c: f32 = cos(angleMod);
    twistedCoord = vec2<f32>(twistedCoord.x * c - twistedCoord.y * s, twistedCoord.x * s + twistedCoord.y * c);
  }

  twistedCoord += uOffset;
  return twistedCoord;
}
`,b2=Object.defineProperty,S2=(n,t,e)=>t in n?b2(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Af=(n,t,e)=>(S2(n,typeof t!="symbol"?t+"":t,e),e);const w2=class Tf extends X{constructor(t){t={...Tf.DEFAULT_OPTIONS,...t};const e=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:y2,entryPoint:"mainFragment"}}),i=$.from({vertex:q,fragment:v2,name:"twist-filter"});super({gpuProgram:e,glProgram:i,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:"vec2<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},...t}),Af(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(t){this.uniforms.uTwist[0]=t}get angle(){return this.uniforms.uTwist[1]}set angle(t){this.uniforms.uTwist[1]=t}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t}};Af(w2,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var C2=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uStrength;
uniform vec2 uCenter;
uniform vec2 uRadii;

uniform vec4 uInputSize;

const float MAX_KERNEL_SIZE = \${MAX_KERNEL_SIZE};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {
    float minGradient = uRadii[0] * 0.3;
    float innerRadius = (uRadii[0] + minGradient * 0.5) / uInputSize.x;

    float gradient = uRadii[1] * 0.3;
    float radius = (uRadii[1] - gradient * 0.5) / uInputSize.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / uInputSize.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * uInputSize.y / uInputSize.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / uInputSize.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture(uTexture, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture(uTexture, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,A2=`struct ZoomBlurUniforms {
    uStrength:f32,
    uCenter:vec2<f32>,
    uRadii:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> zoomBlurUniforms : ZoomBlurUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uStrength = zoomBlurUniforms.uStrength;
  let uCenter = zoomBlurUniforms.uCenter;
  let uRadii = zoomBlurUniforms.uRadii;

  let minGradient: f32 = uRadii[0] * 0.3;
  let innerRadius: f32 = (uRadii[0] + minGradient * 0.5) / gfu.uInputSize.x;

  let gradient: f32 = uRadii[1] * 0.3;
  let radius: f32 = (uRadii[1] - gradient * 0.5) / gfu.uInputSize.x;

  let MAX_KERNEL_SIZE: f32 = \${MAX_KERNEL_SIZE};

  var countLimit: f32 = MAX_KERNEL_SIZE;

  var dir: vec2<f32> = vec2<f32>(uCenter / gfu.uInputSize.xy - uv);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * gfu.uInputSize.y / gfu.uInputSize.x));

  var strength: f32 = uStrength;

  var delta: f32 = 0.0;
  var gap: f32;

  if (dist < innerRadius) {
      delta = innerRadius - dist;
      gap = minGradient;
  } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
      delta = dist - radius;
      gap = gradient;
  }

  var returnColorOnly: bool = false;

  if (delta > 0.0) {
    let normalCount: f32 = gap / gfu.uInputSize.x;
    delta = (normalCount - delta) / normalCount;
    countLimit *= delta;
    strength *= delta;
    
    if (countLimit < 1.0)
    {
      returnColorOnly = true;;
    }
  }

  // randomize the lookup values to hide the fixed number of samples
  let offset: f32 = rand(uv, 0.0);

  var total: f32 = 0.0;
  var color: vec4<f32> = vec4<f32>(0.);

  dir *= strength;

  for (var t = 0.0; t < MAX_KERNEL_SIZE; t += 1.0) {
    let percent: f32 = (t + offset) / MAX_KERNEL_SIZE;
    let weight: f32 = 4.0 * (percent - percent * percent);
    let p: vec2<f32> = uv + dir * percent;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, p);
    
    if (t < countLimit)
    {
      color += sample * weight;
      total += weight;
    }
  }

  color /= total;

  return select(color, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
fn rand(co: vec2<f32>, seed: f32) -> f32
{
  let a: f32 = 12.9898;
  let b: f32 = 78.233;
  let c: f32 = 43758.5453;
  let dt: f32 = dot(co + seed, vec2<f32>(a, b));
  let sn: f32 = modulo(dt, 3.14159);
  return fract(sin(sn) * c + seed);
}`,T2=Object.defineProperty,P2=(n,t,e)=>t in n?T2(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Pf=(n,t,e)=>(P2(n,typeof t!="symbol"?t+"":t,e),e);const F2=class Ff extends X{constructor(t){t={...Ff.DEFAULT_OPTIONS,...t};const e=t.maxKernelSize??32,i=W.from({vertex:{source:K,entryPoint:"mainVertex"},fragment:{source:A2.replace("${MAX_KERNEL_SIZE}",e.toFixed(1)),entryPoint:"mainFragment"}}),r=$.from({vertex:q,fragment:C2.replace("${MAX_KERNEL_SIZE}",e.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:i,glProgram:r,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Pf(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(t){this.uniforms.uRadii[0]=t}get radius(){return this.uniforms.uRadii[1]}set radius(t){this.uniforms.uRadii[1]=t<0||t===1/0?-1:t}};Pf(F2,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});class M2 extends We{constructor(){const e=xx();console.log("sound",e);super(re.ICON,()=>this.toggleVolume(),{textureName:e?li.VOLUME_ON:li.VOLUME_OFF});G(this,"isEnable");this.isEnable=e,this.filters=[new Tt({color:"004EF8",blur:2,quality:2,resolution:(window==null?void 0:window.devicePixelRatio)??1,offset:{x:0,y:4},pixelSize:3})],e||Ji.muteAll()}toggleVolume(){const e=this.isEnable?li.VOLUME_OFF:li.VOLUME_ON;_x(!this.isEnable),this.isEnable=!this.isEnable,Ji.toggleMuteAll(),this.changeIcon(e)}}const I2=n=>{const t=new We(re.ICON,n,{textureName:"icon-pause"});return t.filters=[new Tt({color:"004EF8",blur:2,quality:2,resolution:(window==null?void 0:window.devicePixelRatio)??1,offset:{x:0,y:4},pixelSize:3})],t},E2={bundles:[{name:"assets",assets:{grid:{alias:"grid",src:b0},cellDark:{alias:"cell-dark",src:r0},cellLight:{alias:"cell-light",src:s0},blockPink:{alias:"block-pink",src:o0},blockGreen:{alias:"block-green",src:u0},blockViolet:{alias:"block-violet",src:l0},blockYellow:{alias:"block-yellow",src:a0},blockBlue:{alias:"block-blue",src:h0},blockOrange:{alias:"block-orange",src:c0},crown:{alias:"crown",src:f0},pause:{alias:"pause",src:d0},volumeOff:{alias:li.VOLUME_OFF,src:p0},volumeOn:{alias:li.VOLUME_ON,src:m0},gameLogo:{alias:"game-logo",src:S0},leaderboardLogo:{alias:"leaderboard-logo",src:w0},buttonPrimary:{alias:"button-primary",src:g0},buttonSecondary:{alias:"button-secondary",src:_0},golosBold:{alias:"golos-bold",src:A0},robotoFlex:{alias:"roboto-flex",src:T0},touchAnimation:{alias:"touch-animation",src:x0},figurePlaced:{alias:"figure-placed",src:P0},matchCombo:{alias:"match-combo",src:F0},match:{alias:"match",src:M0},themeMusic:{alias:"theme-music",src:I0},iconPlay:{alias:"icon-play",src:v0},iconPause:{alias:"icon-pause",src:y0},lightning:{alias:"lightning",src:C0}}}]};var Lo={},Ye={};Object.defineProperty(Ye,"__esModule",{value:!0});Ye.Collector=void 0;class z2{constructor(t){this.emit=(...e)=>{t.emitCollecting(this,e)}}}Ye.Collector=z2;var Wr={};Object.defineProperty(Wr,"__esModule",{value:!0});Wr.CollectorArray=void 0;const O2=Ye;class R2 extends O2.Collector{constructor(){super(...arguments),this.result=[]}handleResult(t){return this.result.push(t),!0}getResult(){return this.result}reset(){this.result.length=0}}Wr.CollectorArray=R2;var $r={};Object.defineProperty($r,"__esModule",{value:!0});$r.CollectorLast=void 0;const k2=Ye;class B2 extends k2.Collector{handleResult(t){return this.result=t,!0}getResult(){return this.result}reset(){delete this.result}}$r.CollectorLast=B2;var Yr={};Object.defineProperty(Yr,"__esModule",{value:!0});Yr.CollectorUntil0=void 0;const U2=Ye;class L2 extends U2.Collector{constructor(){super(...arguments),this.result=!1}handleResult(t){return this.result=t,this.result}getResult(){return this.result}reset(){this.result=!1}}Yr.CollectorUntil0=L2;var Xr={};Object.defineProperty(Xr,"__esModule",{value:!0});Xr.CollectorWhile0=void 0;const D2=Ye;class G2 extends D2.Collector{constructor(){super(...arguments),this.result=!1}handleResult(t){return this.result=t,!this.result}getResult(){return this.result}reset(){this.result=!1}}Xr.CollectorWhile0=G2;var Hr={},jr={};Object.defineProperty(jr,"__esModule",{value:!0});jr.SignalConnectionImpl=void 0;class N2{constructor(t,e){this.link=t,this.parentCleanup=e}disconnect(){return this.link!==null?(this.link.unlink(),this.link=null,this.parentCleanup(),this.parentCleanup=null,!0):!1}set enabled(t){this.link&&this.link.setEnabled(t)}get enabled(){return this.link!==null&&this.link.isEnabled()}}jr.SignalConnectionImpl=N2;var qr={};Object.defineProperty(qr,"__esModule",{value:!0});qr.SignalLink=void 0;class ya{constructor(t=null,e=null,i=0){this.enabled=!0,this.newLink=!1,this.callback=null,this.prev=t??this,this.next=e??this,this.order=i}isEnabled(){return this.enabled&&!this.newLink}setEnabled(t){this.enabled=t}unlink(){this.callback=null,this.next.prev=this.prev,this.prev.next=this.next}insert(t,e){let i=this.prev;for(;i!==this&&!(i.order<=e);)i=i.prev;const r=new ya(i,i.next,e);return r.callback=t,i.next=r,r.next.prev=r,r}}qr.SignalLink=ya;Object.defineProperty(Hr,"__esModule",{value:!0});Hr.Signal=void 0;const V2=jr,W2=qr;class $2{constructor(){this.head=new W2.SignalLink,this.hasNewLinks=!1,this.emitDepth=0,this.connectionsCount=0}getConnectionsCount(){return this.connectionsCount}hasConnections(){return this.connectionsCount>0}connect(t,e=0){this.connectionsCount++;const i=this.head.insert(t,e);return this.emitDepth>0&&(this.hasNewLinks=!0,i.newLink=!0),new V2.SignalConnectionImpl(i,()=>this.decrementConnectionCount())}decrementConnectionCount(){this.connectionsCount--}disconnect(t){for(let e=this.head.next;e!==this.head;e=e.next)if(e.callback===t)return this.decrementConnectionCount(),e.unlink(),!0;return!1}disconnectAll(){for(;this.head.next!==this.head;)this.head.next.unlink();this.connectionsCount=0}emit(...t){this.emitDepth++;for(let e=this.head.next;e!==this.head;e=e.next)e.isEnabled()&&e.callback&&e.callback.apply(null,t);this.emitDepth--,this.unsetNewLink()}emitCollecting(t,e){this.emitDepth++;for(let i=this.head.next;i!==this.head;i=i.next)if(i.isEnabled()&&i.callback){const r=i.callback.apply(null,e);if(!t.handleResult(r))break}this.emitDepth--,this.unsetNewLink()}unsetNewLink(){if(this.hasNewLinks&&this.emitDepth===0){for(let t=this.head.next;t!==this.head;t=t.next)t.newLink=!1;this.hasNewLinks=!1}}}Hr.Signal=$2;var Kr={};Object.defineProperty(Kr,"__esModule",{value:!0});Kr.SignalConnections=void 0;class Y2{constructor(){this.list=[]}add(t){this.list.push(t)}disconnectAll(){for(const t of this.list)t.disconnect();this.list=[]}getCount(){return this.list.length}isEmpty(){return this.list.length===0}}Kr.SignalConnections=Y2;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.SignalConnections=n.Signal=n.CollectorWhile0=n.CollectorUntil0=n.CollectorLast=n.CollectorArray=n.Collector=void 0;var t=Ye;Object.defineProperty(n,"Collector",{enumerable:!0,get:function(){return t.Collector}});var e=Wr;Object.defineProperty(n,"CollectorArray",{enumerable:!0,get:function(){return e.CollectorArray}});var i=$r;Object.defineProperty(n,"CollectorLast",{enumerable:!0,get:function(){return i.CollectorLast}});var r=Yr;Object.defineProperty(n,"CollectorUntil0",{enumerable:!0,get:function(){return r.CollectorUntil0}});var s=Xr;Object.defineProperty(n,"CollectorWhile0",{enumerable:!0,get:function(){return s.CollectorWhile0}});var o=Hr;Object.defineProperty(n,"Signal",{enumerable:!0,get:function(){return o.Signal}});var a=Kr;Object.defineProperty(n,"SignalConnections",{enumerable:!0,get:function(){return a.SignalConnections}})})(Lo);var X2=Object.defineProperty,H2=(n,t,e)=>t in n?X2(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,rr=(n,t,e)=>(H2(n,typeof t!="symbol"?t+"":t,e),e);class j2 extends H{constructor(t){var e;super(),rr(this,"options"),rr(this,"view"),rr(this,"_type"),rr(this,"children",[]),t&&this.init(t),(e=t==null?void 0:t.items)==null||e.forEach(i=>this.addChild(i)),this.on("added",()=>this.arrangeChildren()),this.on("childAdded",()=>this.arrangeChildren())}init(t){this.options=t,t!=null&&t.type&&(this.type=t.type),t!=null&&t.children&&t.children.forEach(e=>this.addChild(e))}set type(t){this._type=t,this.arrangeChildren()}get type(){return this._type}set elementsMargin(t){if(!this.options)throw new Error("List has not been initiated!");this.options.elementsMargin=t,this.arrangeChildren()}get elementsMargin(){var t;return((t=this.options)==null?void 0:t.elementsMargin)??0}set padding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.padding=t,this.options.vertPadding=t,this.options.horPadding=t,this.options.leftPadding=t,this.options.rightPadding=t,this.options.topPadding=t,this.options.bottomPadding=t,this.arrangeChildren()}get padding(){var t;return((t=this.options)==null?void 0:t.padding)??0}set vertPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.vertPadding=t,this.options.topPadding=t,this.options.bottomPadding=t,this.arrangeChildren()}get vertPadding(){var t;return((t=this.options)==null?void 0:t.vertPadding)??this.padding??0}set horPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.horPadding=t,this.options.leftPadding=t,this.options.rightPadding=t,this.arrangeChildren()}get horPadding(){var t;return((t=this.options)==null?void 0:t.horPadding)??this.padding??0}set leftPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.leftPadding=t,this.arrangeChildren()}get leftPadding(){var t;return((t=this.options)==null?void 0:t.leftPadding)??this.horPadding}set rightPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.rightPadding=t,this.arrangeChildren()}get rightPadding(){var t;return((t=this.options)==null?void 0:t.rightPadding)??this.horPadding}set topPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.topPadding=t,this.arrangeChildren()}get topPadding(){var t;return((t=this.options)==null?void 0:t.topPadding)??this.vertPadding}set bottomPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.bottomPadding=t,this.arrangeChildren()}get bottomPadding(){var t;return((t=this.options)==null?void 0:t.bottomPadding)??this.vertPadding}arrangeChildren(){var o,a;let t=0,e=this.leftPadding,i=this.topPadding;const r=((o=this.options)==null?void 0:o.elementsMargin)??0;let s=(a=this.parent)==null?void 0:a.width;this.rightPadding&&(s-=this.rightPadding),this.children.forEach((l,u)=>{switch(this.type){case"vertical":l.y=i,l.x=e,i+=r+l.height;break;case"horizontal":l.x=e,l.y=i,e+=r+l.width;break;default:l.x=e,l.y=i,l.x+l.width>s&&u>0&&(i+=r+t,e=this.leftPadding,l.x=e,l.y=i,t=0),t=Math.max(t,l.height),e+=r+l.width;break}})}removeItem(t){const e=this.children[t];e&&(this.removeChild(e),this.arrangeChildren())}}var q2=Object.defineProperty,K2=(n,t,e)=>t in n?q2(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,cn=(n,t,e)=>(K2(n,typeof t!="symbol"?t+"":t,e),e);class Q2{constructor(t={}){cn(this,"x"),cn(this,"ax"),cn(this,"dx"),cn(this,"tx"),cn(this,"_options"),this.x=0,this.ax=0,this.dx=0,this.tx=0,this._options=t,this._options.max=t.max||160,this._options.damp=t.damp||.8,this._options.springiness=t.springiness||.1}update(){this.ax=(this.tx-this.x)*this._options.springiness,this.dx+=this.ax,this.dx*=this._options.damp,this.dx<-this._options.max?this.dx=-this._options.max:this.dx>this._options.max&&(this.dx=this._options.max),this.x+=this.dx}reset(){this.x=0,this.ax=0,this.dx=0,this.tx=0}get max(){return this._options.max}set max(t){this._options.max=t}get damp(){return this._options.damp}set damp(t){this._options.damp=t}get springiness(){return this._options.springiness}set springiness(t){this._options.springiness=t}}var Z2=Object.defineProperty,J2=(n,t,e)=>t in n?Z2(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Fi=(n,t,e)=>(J2(n,typeof t!="symbol"?t+"":t,e),e);class t1{constructor(){Fi(this,"done"),Fi(this,"to"),Fi(this,"_spring"),Fi(this,"_pos"),Fi(this,"_speed"),Fi(this,"_correctSpeed"),this._spring=new Q2,this._pos=0,this.to=0}start(t,e,i){this._speed=t,this._pos=e,this.to=i,this.done=!1,this._spring.x=this._pos,this._spring.tx=this.to;const r=this.to-this._pos,s=Math.abs(r)/r,o=Math.abs(this._speed)/this._speed;s!==o?this._correctSpeed=!0:this._correctSpeed=!1}update(){if(this._correctSpeed)this._speed*=.6,Math.abs(this._speed)<2&&(this._correctSpeed=!1),this._pos+=this._speed,this._spring.x=this._pos;else{const t=this.to-this._pos;Math.abs(t)<.05?(this._pos=this.to,this.done=!0):(this._spring.tx=this.to,this._spring.update(),this._pos=this._spring.x)}return this._pos}cancel(){}}var e1=Object.defineProperty,i1=(n,t,e)=>t in n?e1(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,kt=(n,t,e)=>(i1(n,typeof t!="symbol"?t+"":t,e),e);class iu{constructor(t={}){kt(this,"position",0),kt(this,"constrain",!0),kt(this,"min",0),kt(this,"max",0),kt(this,"maxSpeed",400),kt(this,"_ease"),kt(this,"_offset",0),kt(this,"_prev",0),kt(this,"_speed",0),kt(this,"_hasStopped"),kt(this,"_targetSpeed",0),kt(this,"_speedChecker",0),kt(this,"_grab",0),kt(this,"_activeEase"),this.constrain=t.constrain??!0,this.maxSpeed=t.maxSpeed??400,this._ease=t.ease??new t1}set value(t){this._speed=0,this.position=t}get value(){return this.position}grab(t){this._grab=t,this._offset=this.position-t,this._speedChecker=0,this._targetSpeed=this._speed=0,this._hasStopped=!1}hold(t){this._speedChecker++,this.position=t+this._offset,this._speedChecker>1&&(this._targetSpeed=this.position-this._prev),this._speed+=(this._targetSpeed-this._speed)/2,this._speed>this.maxSpeed?this._speed=this.maxSpeed:this._speed<-this.maxSpeed&&(this._speed=-this.maxSpeed),this._prev=this.position,this.constrain&&(this._activeEase=null,this.position>this.min?this.position-=(this.position-this.min)/1.5:this.position<this.max&&(this.position+=(this.max-this.position)/1.5))}slide(t=!1){this._hasStopped||(this.constrain?this._updateConstrain(t):this._updateDefault())}get moveAmount(){return-(this.position-this._offset-this._grab)}_updateDefault(){this._speed*=.9,this.position+=this._speed,(this._speed<0?this._speed*-1:this._speed)<.01&&(this._hasStopped=!0)}_updateConstrain(t=!1){const e=this.max;t?(this.value>0&&(this.value=0),this.value>0&&(this.value=0),this.value<this.max&&(this.value=this.max),this.value<this.max&&(this.value=this.max)):this.position>this.min||this.position<e||this._activeEase?(this._activeEase||(this._activeEase=this._ease,this.position>this.min?this._activeEase.start(this._speed,this.position,this.min):this._activeEase.start(this._speed,this.position,e)),this.position=this._activeEase.update(),this._activeEase.done&&(this.position=this._activeEase.to,this._speed=0,this._activeEase=null)):this._updateDefault()}}var n1=Object.defineProperty,r1=(n,t,e)=>t in n?n1(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ee=(n,t,e)=>(r1(n,typeof t!="symbol"?t+"":t,e),e);class s1{constructor(t){Ee(this,"xAxis"),Ee(this,"yAxis"),Ee(this,"_isDown"),Ee(this,"_globalPosition"),Ee(this,"_frame"),Ee(this,"_bounds"),Ee(this,"_dirty"),Ee(this,"disableEasing",!1),this.xAxis=new iu({ease:t.xEase,maxSpeed:t.maxSpeed,constrain:t.constrain}),this.yAxis=new iu({ease:t.yEase,maxSpeed:t.maxSpeed,constrain:t.constrain}),this.disableEasing=t.disableEasing??!1,this._frame=new dt,this._bounds=new dt,this._globalPosition=new Ct}pointerDown(t){this._globalPosition=t,this.xAxis.grab(t.x),this.yAxis.grab(t.y),this._isDown=!0}pointerUp(){this._isDown=!1}pointerMove(t){this._globalPosition=t}update(){this._dirty&&(this._dirty=!1,this.xAxis.min=this._bounds.left,this.xAxis.min=this._bounds.right-this._frame.width,this.xAxis.min=this._bounds.top,this.xAxis.min=this._bounds.bottom-this._frame.height),this._isDown?(this.xAxis.hold(this._globalPosition.x),this.yAxis.hold(this._globalPosition.y)):(this.xAxis.slide(this.disableEasing),this.yAxis.slide(this.disableEasing))}resize(t,e){this._frame.x=0,this._frame.width=t,this._frame.y=0,this._frame.height=e,this._dirty=!0}setBounds(t,e,i,r){this._bounds.x=t,this._bounds.width=e-t,this._bounds.y=i,this._bounds.height=r-i,this._dirty=!0}get x(){return this.xAxis.value}get y(){return this.yAxis.value}}var o1=Object.defineProperty,a1=(n,t,e)=>t in n?o1(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,it=(n,t,e)=>(a1(n,typeof t!="symbol"?t+"":t,e),e);class l1 extends H{constructor(t){super(),it(this,"background"),it(this,"borderMask"),it(this,"lastWidth"),it(this,"lastHeight"),it(this,"__width",0),it(this,"__height",0),it(this,"_dimensionChanged",!1),it(this,"list"),it(this,"_trackpad"),it(this,"isDragging",0),it(this,"interactiveStorage",[]),it(this,"visibleItems",[]),it(this,"pressedChild"),it(this,"ticker",Lt.shared),it(this,"options"),it(this,"stopRenderHiddenItemsTimeout"),it(this,"onMouseScrollBinding",this.onMouseScroll.bind(this)),it(this,"dragStarTouchPoint"),it(this,"isOver",!1),it(this,"proximityRange"),it(this,"proximityStatusCache",[]),it(this,"lastScrollX"),it(this,"lastScrollY"),it(this,"proximityCheckFrameCounter",0),it(this,"onProximityChange",new Lo.Signal),it(this,"onScroll",new Lo.Signal),t&&this.init(t),this.ticker.add(this.update,this)}init(t){this.options=t,this.setBackground(t.background),this.__width=t.width|this.background.width,this.__height=t.height|this.background.height,this.proximityRange=t.proximityRange??0,this.list||(this.list=new j2,super.addChild(this.list)),this.list.init({type:t.type,elementsMargin:t.elementsMargin,padding:t.padding,vertPadding:t.vertPadding,horPadding:t.horPadding,topPadding:t.topPadding,bottomPadding:t.bottomPadding,leftPadding:t.leftPadding,rightPadding:t.rightPadding}),this.addItems(t.items),this.hasBounds&&(this.addMask(),this.makeScrollable()),this._trackpad.xAxis.value=0,this._trackpad.yAxis.value=0,this.options.globalScroll=t.globalScroll??!0,this.options.shiftScroll=t.shiftScroll??!1,this.resize()}get hasBounds(){return!!this.__width||!!this.__height}addItems(t){t!=null&&t.length&&t.forEach(e=>this.addItem(e))}removeItems(){this.proximityStatusCache.length=0,this.list.removeChildren()}addItem(...t){if(t.length>1)t.forEach(e=>this.addItem(e));else{const e=t[0];(!e.width||!e.height)&&console.error("ScrollBox item should have size"),e.eventMode="static",this.list.addChild(e),this.proximityStatusCache.push(!1),this.options.disableDynamicRendering||(e.renderable=this.isItemVisible(e))}return this.resize(),t[0]}removeItem(t){this.list.removeItem(t),this.proximityStatusCache.splice(t,1),this.resize()}isItemVisible(t,e=0){const i=this.options.type==="vertical"||!this.options.type;let r=!1;const s=this.list;if(i){const o=t.y+s.y;o+t.height>=-e&&o<=this.options.height+e&&(r=!0)}else{const o=t.x+s.x;o+t.width>=-e&&o<=this.options.width+e&&(r=!0)}return r}get items(){var t;return((t=this.list)==null?void 0:t.children)??[]}setBackground(t){this.background&&this.removeChild(this.background),this.options.background=t,this.background=new ue,this.addChildAt(this.background,0),this.resize()}addMask(){this.borderMask||(this.borderMask=new ue,super.addChild(this.borderMask),this.mask=this.borderMask),this.resize()}makeScrollable(){this._trackpad||(this._trackpad=new s1({disableEasing:this.options.disableEasing})),this.on("pointerdown",t=>{this.renderAllItems(),this.isDragging=1,this.dragStarTouchPoint=this.worldTransform.applyInverse(t.global),this._trackpad.pointerDown(this.dragStarTouchPoint);const e=this.list.worldTransform.applyInverse(t.global);this.visibleItems.forEach(i=>{i.x<e.x&&i.x+i.width>e.x&&i.y<e.y&&i.y+i.height>e.y&&(this.pressedChild=i)})}),this.on("pointerup",()=>{this.isDragging=0,this._trackpad.pointerUp(),this.restoreItemsInteractivity(),this.pressedChild=null,this.stopRenderHiddenItems()}),this.on("pointerover",()=>{this.isOver=!0}),this.on("pointerout",()=>{this.isOver=!1}),this.on("pointerupoutside",()=>{this.isDragging=0,this._trackpad.pointerUp(),this.restoreItemsInteractivity(),this.pressedChild=null,this.stopRenderHiddenItems()}),this.on("globalpointermove",t=>{if(!this.isDragging)return;const e=this.worldTransform.applyInverse(t.global);if(this.dragStarTouchPoint){const i=this.options.dragTrashHold??10;if(this.options.type==="horizontal"){const r=e.x-this.dragStarTouchPoint.x;Math.abs(r)>i&&(this.isDragging=2)}else{const r=e.y-this.dragStarTouchPoint.y;Math.abs(r)>i&&(this.isDragging=2)}}this.dragStarTouchPoint&&this.isDragging!==2||(this._trackpad.pointerMove(e),this.pressedChild&&(this.revertClick(this.pressedChild),this.pressedChild=null))}),document.addEventListener("wheel",this.onMouseScrollBinding,!0)}setInteractive(t){this.eventMode=t?"static":"auto"}get listHeight(){return this.list.height+this.list.topPadding+this.list.bottomPadding}get listWidth(){return this.list.width+this.list.leftPadding+this.list.rightPadding}resize(t=!1){if(this.hasBounds){if(this.renderAllItems(),this.borderMask&&(t||this._dimensionChanged||this.lastWidth!==this.listWidth||this.lastHeight!==this.listHeight)){this.options.width||(this.__width+=this.listWidth),this.options.height||(this.__height+=this.listHeight),this.borderMask.clear().roundRect(0,0,this.__width,this.__height,this.options.radius|0).fill(16711935).stroke(0),this.borderMask.eventMode="none";const e=this.options.background;this.background.clear().roundRect(0,0,this.__width,this.__height,this.options.radius|0).fill({color:e??0,alpha:e?1:1e-7}),this.options.type==="horizontal"?this.setInteractive(this.listWidth>this.__width):this.setInteractive(this.listHeight>this.__height),this.lastWidth=this.listWidth,this.lastHeight=this.listHeight}if(this._trackpad){const e=this.borderMask.width-this.list.width-this.list.leftPadding-this.list.rightPadding,i=this.borderMask.height-this.list.height-this.list.topPadding-this.list.bottomPadding;this.options.type==="vertical"?this._trackpad.yAxis.max=-Math.abs(i):this.options.type==="horizontal"?this._trackpad.xAxis.max=-Math.abs(e):(this._trackpad.yAxis.max=-Math.abs(i),this._trackpad.xAxis.max=-Math.abs(e))}this._dimensionChanged?(this.list.arrangeChildren(),this.stopRenderHiddenItems(),this._dimensionChanged=!1):this.updateVisibleItems(),this.lastScrollX=null,this.lastScrollY=null}}onMouseScroll(t){var o;const e=this.options.type!=="horizontal",i=e?this.scrollY:this.scrollX;if(!this.isOver&&!this.options.globalScroll)return;this.renderAllItems();const r=this.options.shiftScroll?typeof t.deltaX<"u"||typeof t.deltaY<"u":typeof t.deltaX<"u";if(this.options.type==="horizontal"&&r){const a=this.options.shiftScroll?t.deltaX:t.deltaY,l=this.list.x-a;if(this.listWidth<this.__width)this._trackpad.xAxis.value=0;else{const u=this.__width-this.listWidth,h=0;this._trackpad.xAxis.value=Math.min(h,Math.max(u,l))}}else if(typeof t.deltaY<"u"){const a=this.list.y-t.deltaY;if(this.listHeight<this.__height)this._trackpad.yAxis.value=0;else{const l=this.__height-this.listHeight,u=0;this._trackpad.yAxis.value=Math.min(u,Math.max(l,a))}}this.stopRenderHiddenItems();const s=e?this.scrollY:this.scrollX;s!==i&&((o=this.onScroll)==null||o.emit(s))}scrollBottom(){this.interactive?this.scrollTo(this.list.children.length-1):this.scrollTop()}scrollTop(){this.renderAllItems(),this._trackpad.xAxis.value=0,this._trackpad.yAxis.value=0,this.stopRenderHiddenItems()}renderAllItems(){clearTimeout(this.stopRenderHiddenItemsTimeout),this.stopRenderHiddenItemsTimeout=null,!this.options.disableDynamicRendering&&this.items.forEach(t=>{t.renderable=!0})}stopRenderHiddenItems(){this.options.disableDynamicRendering||(this.stopRenderHiddenItemsTimeout&&(clearTimeout(this.stopRenderHiddenItemsTimeout),this.stopRenderHiddenItemsTimeout=null),this.stopRenderHiddenItemsTimeout=setTimeout(()=>this.updateVisibleItems(),2e3))}updateVisibleItems(){this.visibleItems.length=0,this.items.forEach(t=>{t.renderable=this.isItemVisible(t),this.visibleItems.push(t)})}scrollTo(t){if(!this.interactive)return;const e=this.list.children[t];e&&(this.renderAllItems(),this._trackpad.xAxis.value=this.options.type==="horizontal"?this.__width-e.x-e.width-this.list.rightPadding:0,this._trackpad.yAxis.value=!this.options.type||this.options.type==="vertical"?this.__height-e.y-e.height-this.list.bottomPadding:0,this.stopRenderHiddenItems())}scrollToPosition({x:t,y:e}){t===void 0&&e===void 0||(this.renderAllItems(),t!==void 0&&(this.scrollX=-t),e!==void 0&&(this.scrollY=-e),this.stopRenderHiddenItems())}get height(){return this.__height}set height(t){this.__height=t,this._dimensionChanged=!0,this.resize(),this.scrollTop()}get width(){return this.__width}set width(t){this.__width=t,this._dimensionChanged=!0,this.resize(),this.scrollTop()}get scrollX(){return this._trackpad.xAxis.value}set scrollX(t){this._trackpad.xAxis.value=t}get scrollY(){return this._trackpad.yAxis.value}set scrollY(t){this._trackpad.yAxis.value=t}update(){if(!this.list)return;this._trackpad.update();const t=this.options.type==="horizontal"?"x":"y";this.list[t]!==this._trackpad[t]&&(this.list[t]=this._trackpad[t]),!this.options.disableProximityCheck&&(this._trackpad.x!==this.lastScrollX||this._trackpad.y!==this.lastScrollY)&&(this.proximityCheckFrameCounter++,this.proximityCheckFrameCounter>=(this.options.proximityDebounce??10)&&(this.items.forEach((e,i)=>{const r=this.isItemVisible(e,this.proximityRange),s=this.proximityStatusCache[i];r!==s&&(this.proximityStatusCache[i]=r,this.onProximityChange.emit({item:e,index:i,inRange:r}))}),this.lastScrollX=this._trackpad.x,this.lastScrollY=this._trackpad.y,this.proximityCheckFrameCounter=0))}destroy(t){this.ticker.remove(this.update,this),document.removeEventListener("wheel",this.onMouseScrollBinding,!0),this.background.destroy(),this.list.destroy(),super.destroy(t)}restoreItemsInteractivity(){this.interactiveStorage.forEach(t=>{t.item.eventMode=t.eventMode}),this.interactiveStorage.length=0}revertClick(t){t.eventMode!=="auto"&&(Vd.any?t.emit("pointerupoutside",null):t.emit("mouseupoutside",null),this.interactiveStorage.push({item:t,eventMode:t.eventMode}),t.eventMode="auto"),t instanceof H&&t.children&&t.children.forEach(e=>this.revertClick(e))}get scrollHeight(){return this.list.height}get scrollWidth(){return this.list.width}}const u1=[{name:"Alice",place:1,score:1500,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"You",place:2,score:1450,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!0},{name:"Charlie",place:3,score:1400,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"David",place:4,score:1350,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:5,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:6,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:7,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:8,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:9,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:10,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:11,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:12,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:13,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:14,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:15,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:16,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:17,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:18,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:19,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:20,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:21,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:22,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:23,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:24,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:25,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:26,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:27,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:28,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:29,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1},{name:"Eve",place:30,score:1300,avatar:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",isYou:!1}];class h1 extends H{constructor(e){super();G(this,"style",{fontFamily:"Golos Semibold",fontSize:40*Le,fill:"white"});G(this,"placeText",null);G(this,"avatarSprite",null);this.addedBackground(e.isYou),this.addedPlaceText(e.place),this.addedScore(e.score),this.addedAvatar(e.avatar),this.addedUsername(e.name)}addedScore(e){const i=new ne({text:this.formattedText(e),style:this.style});i.y=this.height/2,i.x=this.width-10,i.anchor.set(1,.5),this.addChild(i)}addedUsername(e){const i=new ne({text:e,style:this.style});i.anchor.set(0,.5),i.y=this.height/2,i.x+=this.width*.2+this.height,this.addChild(i)}addedAvatar(e){ai.load(e).then(i=>{const r=rt.from(i);r.height=this.height-20,r.width=this.height-20,r.y=this.height/2-r.height/2,r.x=this.width*.2;const s=new ue().circle(r.height/2,r.width/2,r.height/2).fill("black");r.mask=s,s.x=r.x,s.y=r.y,this.avatarSprite=r,this.addChild(s,r)})}addedPlaceText(e){this.placeText=new ne({text:this.formattedText(e,!0),style:this.style}),this.placeText.y=this.height/2,this.placeText.x+=10,this.placeText.anchor.set(0,.5),this.addChild(this.placeText)}addedBackground(e){const i=e?new De(50,0,50,100).addColorStop(0,"rgba(9, 209, 108, 0.58)").addColorStop(1,"rgba(6, 157, 103, 0.58)"):"rgba(79, 85, 152, 0.64)",r=new ue().roundRect(0,0,921*Le,160*Le,22).fill(i);this.addChild(r)}formattedText(e,i=!1){const r=e.toString().padStart(4,"0");return i?`#${r}`:`${r}`}}const nu=(n,t)=>{const e=new De(50,0,50,100);return e.addColorStop(0,15668876).addColorStop(1,16771681),{text:t,style:{fill:{fill:e},fontFamily:"Roboto Flex",fontSize:n,align:"center",fontStyle:"italic",padding:5}}},Mf=(n,t,e,i)=>{const r=new De(50,0,50,100);return r.addColorStop(0,4104959).addColorStop(.3156,1403577).addColorStop(.4338,55551).addColorStop(.4802,16777215).addColorStop(.6215,16777215),{text:t,style:{fill:{fill:r},fontFamily:e,fontSize:n,...i}}};class c1 extends H{constructor(t,e,i){super(),this.zIndex=100;const r=nu(Kl,"КОМБО"),s=new ne(r),o=nu(Kl,`X${t-1}`),a=new ne(o);s.anchor.set(.5),a.anchor.set(.5),s.x=e,s.y=i,a.x=e,a.y=i+s.height/1.5;const l={quality:1,resolution:(window==null?void 0:window.devicePixelRatio)??1,pixelSize:1,blur:0,color:"EF198C"},u=[new Tt({color:"FF85E9",blur:2,resolution:(window==null?void 0:window.devicePixelRatio)??1,offset:{x:0,y:4},pixelSize:3}),new Tt({alpha:.5,offset:{x:0,y:10},...l}),new Tt({alpha:.4,offset:{x:0,y:15},...l}),new Tt({alpha:.3,offset:{x:0,y:20},...l}),new Tt({alpha:.2,offset:{x:0,y:25},...l}),new Tt({alpha:.1,offset:{x:0,y:30},...l})];a.filters=u,s.filters=u,Z.to(s,{y:"-=50",duration:2,alpha:0,onComplete:()=>{this.removeChild(s)}}),Z.to(a,{y:"-=50",duration:2,alpha:0,onComplete:()=>{this.removeChild(a)}}),this.addChild(s,a)}}class f1 extends ne{constructor(t,e,i){const r=Mf(ex,`+${t}`,"Roboto Flex",{fontStyle:"italic",padding:5});super(r);const s={color:"1371C8",blur:0,resolution:(window==null?void 0:window.devicePixelRatio)??1,pixelSize:1};this.filters=[new Tt({color:"004EF8",blur:2,resolution:(window==null?void 0:window.devicePixelRatio)??1,offset:{x:0,y:4},pixelSize:3}),new Tt({color:"000000",blur:0,resolution:(window==null?void 0:window.devicePixelRatio)??1,offset:{x:0,y:4},pixelSize:1}),new Tt({alpha:.5,offset:{x:0,y:10},...s}),new Tt({alpha:.4,offset:{x:0,y:15},...s}),new Tt({alpha:.3,offset:{x:0,y:20},...s}),new Tt({alpha:.2,offset:{x:0,y:25},...s}),new Tt({alpha:.1,offset:{x:0,y:30},...s})],this.anchor.set(.5),this.x=e,this.y=i,this.zIndex=100,Z.to(this,{y:"-=50",duration:2,alpha:0,onComplete:()=>{this.parent.removeChild(this)}})}}class If extends H{constructor(){super();G(this,"text");const e=rt.from("crown");e.width=Jl,e.height=Jl,e.anchor.set(.5),e.y=hi/2,e.x=hi/2,this.text=new ne({text:xa(),style:{fontFamily:"Golos Bold",fontSize:tx,fill:"#FEFEFE"}}),this.text.anchor.set(1,.5),this.text.x=e.x+e.width+this.text.width,this.text.y=hi/2,this.addChild(e,this.text)}changeValue(e){this.text.text=e}}class Ef extends ne{constructor(t=!1){const e=Mf(t?J_:Z_,"0","Golos Bold");super(e),this.anchor.set(.5),this.filters=[new Tt({color:"004EF8",blur:2,quality:3,resolution:(window==null?void 0:window.devicePixelRatio)??1,offset:{x:0,y:4},pixelSize:3})]}changeValue(t,e=!1){if(e){this.text=t,this.animateScore(+this.text,!0);return}this.text=+this.text+t,Gc(+this.text)}animateScore(t,e=!1){let i=e?0:+this.text;const r=this;Z.to({val:i},{val:t,duration:1,ease:"power1.out",onUpdate:function(){i=Math.round(this.targets()[0].val),r.text=i}})}}const zf=[[1,1],[1,1]],d1=[[1,1,1]],p1=[[1],[1],[1]],m1=[[1,1,1],[1,1,1],[1,1,1]],Of=[[1,1,1,1]],Rf=[[1],[1],[1],[1]],g1=[[1,1,1,1,1]],_1=[[1],[1],[1],[1],[1]],x1=[[1,0],[1,1,1]],v1=[[0,0,1],[1,1,1]],y1=[[1,1,1],[1,0,0]],b1=[[1,1,1],[0,0,1]],S1=[[1,1],[0,1],[0,1]],w1=[[0,1],[0,1],[1,1]],C1=[[1,0],[1,0],[1,1]],A1=[[1,1],[1,0],[1,0]],T1=[[1,1],[1,1],[1,1]],P1=[[1,1,1],[1,1,1]],F1=[[1,0,0],[0,1,0],[0,0,1]],M1=[[0,0,1],[0,1,0],[1,0,0]],I1=[[1,0],[0,1]],E1=[[0,1],[1,0]],z1=[[1,1,1],[1,0,0],[1,0,0]],O1=[[1,1,1],[0,0,1],[0,0,1]],R1=[[0,0,1],[0,0,1],[1,1,1]],k1=[[1,0,0],[1,0,0],[1,1,1]],B1=[[0,1,1],[1,1,0]],U1=[[1,1,0],[0,1,1]],L1=[[1,0],[1,1],[0,1]],D1=[[0,1],[1,1],[1,0]],G1=[[0,1,0],[1,1,1]],N1=[[1,1,1],[0,1,0]],V1=[[1,0],[1,1],[1,0]],W1=[[0,1],[1,1],[0,1]],ru=[zf,m1,d1,p1,Of,Rf,g1,_1,T1,P1,G1,N1,V1,W1,B1,U1,L1,D1,z1,O1,R1,k1,I1,E1,F1,M1,x1,v1,y1,b1,S1,w1,C1,A1],su=["block-pink","block-green","block-violet","block-yellow","block-blue","block-orange"],kf=n=>{const t=window.location.href,e=new URL(t);return new URLSearchParams(e.search).get(n)},$1=()=>kf("tutorial_on")==="true",Y1=()=>kf("from_market")==="true",ou=()=>{"vibrate"in navigator&&window.navigator.vibrate(100)},au=(n,t)=>(n=Math.ceil(n),t=Math.floor(t),Math.floor(Math.random()*(t-n+1))+n);var Bt=(n=>(n.GAMEOVER="GAMEOVER",n.GAMEPLAY="GAMEPLAY",n.TUTORIAL="TUTORIAL",n.PAUSE="PAUSE",n.START_SCREEN="START_SCREEN",n))(Bt||{});class Do extends H{constructor(e,i){super();G(this,"isInstalled",!1);G(this,"structure");G(this,"originPosition");G(this,"textureName",this.getRandomBlockTextureName());G(this,"order");this.order=e,this.cursor="pointer",this.structure=i??this.getRandomStructure();const r=this.initShape();this.eventMode="static",this.addChild(...r),this.hitArea=new dt(-wt,-wt,this.width+wt*2,this.height+wt*2),this.scale.set(.5),this.pivot.y=.5*this.height/this.scale.y,this.pivot.x=.5*this.width/this.scale.x}onDragStart(e){this.alpha=1;const i=this.parent.parent;this.scale.set(1),this.parent.toLocal(e.global,void 0,this.position),this.y*=1.7,this.pivot.y+=this.height>=500?this.height/2:this.height/2+wt,i.dragTarget=this,i.on("pointermove",i.onDragMove),i.gameState===Bt.TUTORIAL&&i.toggleDarkenTutorial("enable")}toDisable(){this.eventMode="none",this.alpha!==.5&&Z.to(this,{alpha:.5,duration:.2,ease:"power1.inOut"})}toEnable(){this.eventMode="static",this.alpha!==1&&Z.to(this,{alpha:1,duration:.2,ease:"power1.inOut"})}resetPosition(){this.pivot.y=.5*this.height/this.scale.y,this.pivot.x=.5*this.width/this.scale.x,this.x=this.originPosition.x,this.y=this.originPosition.y,this.scale.set(.5)}getRandomStructure(){return ru[au(0,ru.length-1)]}getRandomBlockTextureName(){return su[au(0,su.length-1)]}initShape(){const e=[];for(const[i,r]of this.structure.entries())for(const[s,o]of r.entries()){if(!o)continue;const a=rt.from(this.textureName);a.width=wt,a.height=wt,a.x+=(wt+ke)*s,a.y+=(wt+ke)*i,e.push(a)}return e}}class X1 extends H{constructor(e,i,r){super();G(this,"boardPosition");G(this,"isInstalledBlock",!1);G(this,"hasGhostBlock",!1);G(this,"tutorialLock",!1);G(this,"originBlockColor",null);G(this,"background");this.boardPosition={x:e,y:i};const s=this.getColorCell(),o=`${s} ${e}_${i}`;this.background=rt.from(s),this.addChild(this.background),r&&this.addChild(r),this.width=wt,this.height=wt,this.x=e*wt+ke*e+ke*4+Ve,this.y=i*wt+ke*i+ke*4+window.innerHeight/2-gi/2,this.label=o}setBlock(e,i,r){var a;const s=this.getBlock();s&&this.removeChild(s);const o=rt.from(e);if(this.addChild(o),i)this.hasGhostBlock=!0,o.alpha=.5,(a=this.parent.ghostPosition)==null||a.sprites.push(o);else{if(this.isInstalledBlock=!0,this.originBlockColor=e,!r)return;o.anchor.set(.5),o.y+=o.height/2,o.x+=o.width/2,o.scale.set(0),Z.to(o.scale,{x:1,y:1})}}hasBlock(e){return e?(this.isInstalledBlock||this.hasGhostBlock)&&!!this.getBlock():this.isInstalledBlock}resetColor(){if(!this.originBlockColor)return;const e=this.getBlock();e&&(e.texture=D.from(this.originBlockColor))}changeColorBlock(e){if(!this.isInstalledBlock)return;const i=this.getBlock();i&&(i.texture=D.from(e))}clearCell(){this.isInstalledBlock=!1;const e=this.getBlock();if(!e)return;const{x:i,y:r}=e.getGlobalPosition();this.parent.parent.addChild(e),e.width=wt,e.height=wt,e.position.set(i,r),e.anchor.set(.5),e.zIndex=10;const s=Z.utils.random(["-","+"]);Z.timeline().to(e,{duration:Z.utils.random(.4,.6),rotation:`${s}=${Z.utils.random(2,10)}`,x:`${s}=${Z.utils.random(20,60)}`,y:`-=${Z.utils.random(30,70)}`,ease:"power1.out"}).to(e,{duration:Z.utils.random(.6,1),y:window.innerHeight+e.height,rotation:`${s}${Z.utils.random(1,4)}`,ease:"power1.in",onComplete:()=>{this.parent.parent.removeChild(e)}})}getBlock(){return this.children[1]}getColorCell(){const{x:e,y:i}=this.boardPosition;return(e+i)%2==0?"cell-dark":"cell-light"}}class H1 extends H{constructor(){super();G(this,"matrix");G(this,"size");G(this,"ghostPosition",null);G(this,"gridBorder");G(this,"lastSetShapePosition",null);this.sortableChildren=!0,this.zIndex=2,this.gridBorder=rt.from("grid"),this.gridBorder.x=Ve,this.gridBorder.y=window.innerHeight/2-gi/2,this.gridBorder.width=gi,this.gridBorder.height=gi,this.addChild(this.gridBorder)}initMatrix(e){this.size=e.length;const i=new Array(this.size);for(let r=0;r<this.size;r++){i[r]=new Array(this.size);for(let s=0;s<this.size;s++){const o=this.matrix?this.matrix[r][s]:new X1(s,r);i[r][s]=o,this.matrix||this.addChild(o),e[r][s]&&o.setBlock("block-green",!1,!0),o.tutorialLock=e[r][s]===null,o.zIndex=0,(e[r][s]===0||e[r][s]===1)&&(o.zIndex=2)}}this.matrix=i}validSet(e,i){const{x:r,y:s}=i;for(const[o,a]of e.structure.entries())for(const[l,u]of a.entries()){if(!u)continue;let h;try{h=this.matrix[s+o][r+l]}catch{return!1}if(!h||h!=null&&h.isInstalledBlock||h!=null&&h.tutorialLock)return!1}return!0}canBeSet(e){if(!e.length)return!0;const i=this.matrix.length;let r=[...e];for(let s=0;s<i;s++)for(let o=0;o<i;o++)for(const a of e)this.validSet(a,{x:o,y:s})&&(a.toEnable(),r=r.filter(l=>l.uid!==a.uid));return r.forEach(s=>s.toDisable()),e.length!==r.length}isMatrixEmpty(){const e=this.matrix.length;for(let i=0;i<e;i++)if(this.matrix[i].filter(r=>r.isInstalledBlock).length)return!1;return!0}checkMatrix(e=!1){const i=this.matrix.length,r={vertical:[],horizontal:[]};for(let l=0;l<i;l++){let u=!0;for(let h=0;h<i;h++)if(!this.matrix[l][h].hasBlock(e)){u=!1;break}u&&(e||ou(),this.matrix[l].forEach(h=>{(h.isInstalledBlock||h.hasGhostBlock)&&r.horizontal.push(h)}))}for(let l=0;l<i;l++){let u=!0;for(let h=0;h<i;h++)if(!this.matrix[h][l].hasBlock(e)){u=!1;break}if(u){e||ou();for(let h=0;h<i;h++){const c=this.matrix[h][l];(c.isInstalledBlock||c.hasGhostBlock)&&r.vertical.push(c)}}}if(e)return r;for(const l of r.horizontal)l.clearCell();for(const l of r.vertical)l.clearCell();const s=Math.floor((r.vertical.length+r.horizontal.length)/2),{hasCombo:o,multipliedScore:a}=this.parent.updateCurrentScore(s);if(s&&!o&&Ji.play("match"),this.lastSetShapePosition){const{x:l,y:u}=this.lastSetShapePosition,h=new c1(this.parent.scoreSystem.combo,l,u);if(o&&(this.parent.addChild(h),Ji.play("match-combo")),a){const c=new f1(a,l+ +o*h.width*1.2,u);this.parent.addChild(c)}}this.parent.update()}showGhostDestruction(e){var r;const i=this.checkMatrix(!0);if(i)for(const s of[...i.horizontal,...i.vertical])s.changeColorBlock(e),(r=this.ghostPosition)==null||r.repaintedBlocks.push(s)}showGhostShape(e,i){var a,l,u;if(!this.validSet(e,i)){((a=this.ghostPosition)==null?void 0:a.position.x)!==i.x&&((l=this.ghostPosition)==null?void 0:l.position.y)!==i.y&&this.resetGhost();return}if(JSON.stringify((u=this.ghostPosition)==null?void 0:u.position)===JSON.stringify(i))return;this.resetGhost(i);const{x:s,y:o}=i;for(const[h,c]of e.structure.entries())for(const[f,d]of c.entries()){if(!d)continue;this.matrix[o+h][s+f].setBlock(e.textureName,!0)}this.showGhostDestruction(e.textureName)}resetGhost(e){var i,r;if((r=(i=this.ghostPosition)==null?void 0:i.sprites)!=null&&r.length){for(const s of this.ghostPosition.sprites)try{s.parent.hasGhostBlock=!1,s.parent.removeChild(s)}catch{}if(this.ghostPosition)for(const s of this.ghostPosition.repaintedBlocks)s.resetColor()}e?this.ghostPosition={position:e,sprites:[],repaintedBlocks:[]}:this.ghostPosition=null}setShape(e){var a;const i=(a=this.ghostPosition)==null?void 0:a.position;if(!i)return;e.isInstalled=!0;const{x:r,y:s}=i;this.lastSetShapePosition=this.matrix[s][r].position;let o=0;for(const[l,u]of e.structure.entries())for(const[h,c]of u.entries()){if(!c)continue;this.matrix[s+l][r+h].setBlock(e.textureName,!1),o+=1}this.parent.header.updateCurrentScore(o)}}const j1=[Of,Rf,zf];class q1 extends H{constructor(){super();const t=rt.from(D.EMPTY);t.width=gi,t.height=ke*55,this.zIndex=2,this.addChild(t)}addShape(t,e){const i=new Do(t,e);i.on("pointerdown",i.onDragStart,i),i.x=t===0?i.width/2+Ve*2:t===1?this.width/2+Ve:this.width-i.width/2,i.y=ke*60/2,i.originPosition={x:i.x,y:i.y},i.scale.set(0),this.addChild(i),Z.to(i.scale,{x:.5,y:.5,duration:.2,ease:"power1.inOut"})}getShapes(){return this.children.filter(t=>t instanceof Do&&!t.isInstalled)}generateShape(){if(this.getShapes().length)return;const t=this.parent.gameState;if(this.y=this.parent.grid.getBounds().maxY,t===Bt.TUTORIAL&&this.parent.tutorialLevel!==null){const e=j1[this.parent.tutorialLevel];this.addShape(1,e);return}for(let e=0;e<3;e++)this.addShape(e)}}class K1 extends H{constructor(){super();const t=rt.from("leaderboard-logo");t.width=nx,t.height=ix,t.anchor.set(.5,1),t.x=window.innerWidth/2,t.y+=t.height*1.2;const e=new We(re.SECONDARY,()=>this.parent.closeLeaderboard(),{text:"В МЕНЮ"});e.y=window.innerHeight-e.height,e.x=window.innerWidth/2;const i=new l1({width:window.innerWidth-Ve,height:window.innerHeight-e.height*2-t.height*1.2,items:u1.map(r=>new h1(r)),elementsMargin:15});i.y=t.y+10,i.x=window.innerWidth/2,i.pivot.x=i.width/2,this.addChild(t,e,i)}}const Q1=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],Z1=[[null,null,1,1,1,1,null,null],[null,null,1,1,1,1,null,null],[null,null,1,1,1,1,null,null],[null,null,0,0,0,0,null,null],[null,null,1,1,1,1,null,null],[null,null,1,1,1,1,null,null],[null,null,1,1,1,1,null,null],[null,null,1,1,1,1,null,null]],J1=[[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[1,1,1,0,1,1,1,1],[1,1,1,0,1,1,1,1],[1,1,1,0,1,1,1,1],[1,1,1,0,1,1,1,1],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null]],tb=[[null,null,null,1,1,null,null,null],[null,null,null,1,1,null,null,null],[null,null,null,1,1,null,null,null],[1,1,1,0,0,1,1,1],[1,1,1,0,0,1,1,1],[null,null,null,1,1,null,null,null],[null,null,null,1,1,null,null,null],[null,null,null,1,1,null,null,null]],eb=[Z1,J1,tb];class ib extends rt{constructor(e,i){const r=D.from("lightning");super({texture:r,anchor:.5,alpha:0,width:Zl,height:Ql,x:e,y:i});G(this,"currentAnimation");this.startPulse()}startFastPulse(){var e;this.resetScale(),(e=this.currentAnimation)==null||e.kill(),this.currentAnimation=Z.to(this,{alpha:1,duration:.5,onComplete:()=>{Z.to(this.scale,{yoyo:!0,repeat:3,duration:.2,x:"-=0.05",y:"-=0.05",ease:"power1.inOut",onComplete:()=>{this.startPulse()}})}})}startPulse(){var e;this.resetScale(),(e=this.currentAnimation)==null||e.kill(),this.currentAnimation=Z.to(this,{alpha:1,duration:.5,onComplete:()=>{Z.to(this.scale,{yoyo:!0,repeat:-1,duration:.5,x:"-=0.05",y:"-=0.05",ease:"power1.inOut"})}})}resetScale(){this.width=Zl,this.height=Ql}}class nb extends H{constructor(){super({sortableChildren:!0});G(this,"PauseButton");G(this,"volumeToggle");G(this,"currentScore");G(this,"bestScore");G(this,"indicatorCombo",null);const e=rt.from(D.EMPTY);e.width=gi,e.height=Q_,this.x+=Ve,this.bestScore=new If,this.PauseButton=I2(()=>this.openPause()),this.PauseButton.x=e.width-this.PauseButton.width,this.PauseButton.y=e.height/2+20,this.volumeToggle=new M2,this.volumeToggle.y=e.height/2+20,this.currentScore=new Ef,this.currentScore.y=e.height/2+20,this.currentScore.x=e.width/2,this.currentScore.zIndex=1,this.addChild(e,this.bestScore,this.PauseButton,this.volumeToggle,this.currentScore)}toggleCombo(e){e==="enable"&&!this.indicatorCombo&&(this.indicatorCombo=new ib(this.currentScore.x,this.currentScore.y),this.indicatorCombo.zIndex=0,this.addChild(this.indicatorCombo)),e==="disable"&&this.indicatorCombo&&Z.to(this.indicatorCombo,{alpha:0,duration:.5,onComplete:()=>{this.removeChild(this.indicatorCombo),this.indicatorCombo=null}})}updateCurrentScore(e){this.parent.gameState!==Bt.TUTORIAL&&this.currentScore.changeValue(e)}getCurrentScore(){return parseInt(this.currentScore.text)??0}openPause(){this.parent.parent.openPause()}}const lu={movesLeft:3,remainsDestroy:3,combo:1};class rb extends H{constructor(){super();G(this,"label","game-scene");G(this,"grid");G(this,"rowShape");G(this,"header");G(this,"_gameState");G(this,"_tutorialLevel",null);G(this,"darkMask");G(this,"isFirstPlay",!yx()||$1());G(this,"dragTarget",null);G(this,"scoreSystem",lu);this.grid=new H1,this.rowShape=new q1,this.header=new nb;const e=.7,i="#000217",r=new ue().rect(0,0,window.innerWidth,window.innerHeight).fill({color:i,alpha:e});r.alpha=0,r.zIndex=1,r.visible=!1;const{minX:s,minY:o}=this.grid.gridBorder.getBounds(),a=new ue().rect(s,o,this.grid.gridBorder.width,this.grid.gridBorder.height).fill({color:i,alpha:e});a.alpha=0,a.zIndex=1,this.addChild(r),this.grid.addChild(a),this.darkMask={grid:a,gameScene:r};const l=rt.from(D.EMPTY);l.width=window.innerWidth,l.height=window.innerHeight,this.sortableChildren=!0,this.addChild(l,this.grid,this.rowShape,this.header),Gc(0),this.isFirstPlay?this.gameState=Bt.TUTORIAL:this.gameState=Bt.GAMEPLAY,this.eventMode="static",this.on("pointerup",this.onDragEnd),this.on("pointerupoutside",this.onDragEnd),this.rowShape.generateShape()}get gameState(){return this._gameState}set gameState(e){this._gameState=e,e===Bt.TUTORIAL&&(this.tutorialLevel=0),e===Bt.GAMEPLAY&&(this.isFirstPlay&&(this.isFirstPlay=!1),this.grid.initMatrix(Q1),this.tutorialLevel=null)}get tutorialLevel(){return this._tutorialLevel}set tutorialLevel(e){this._tutorialLevel=e,this._tutorialLevel!==null&&this.grid.initMatrix(eb[this._tutorialLevel])}onDragMove(e){if(!this.dragTarget)return;this.dragTarget.parent.toLocal(e.global,void 0,this.dragTarget.position),this.dragTarget.position.y*=1.7;const{x:i,y:r}=this.dragTarget.getGlobalPosition(),s=Math.round((i-this.dragTarget.width*.5)/wt-.7),o=Math.round((r-(window.innerHeight/2-gi/2)-this.dragTarget.pivot.y)/wt-.5),[a,l]=this.resolvingCoordinates(s,o);this.grid.showGhostShape(this.dragTarget,{x:a,y:l})}update(){this.grid.isMatrixEmpty()&&this._gameState===Bt.TUTORIAL&&(this.tutorialLevel!==null&&this.tutorialLevel+1<=2?this.tutorialLevel+=1:(this.toggleDarkenTutorial("disable"),this.gameState=Bt.GAMEPLAY)),console.log(this.scoreSystem),this.rowShape.generateShape();const e=this.rowShape.getShapes();!this.grid.canBeSet(e)&&this.gameState!==Bt.GAMEOVER&&(this.gameState=Bt.GAMEOVER,setTimeout(()=>{const r=xa(),s=this.header.getCurrentScore();r<s&&gx(s),this.parent.setGameover()},1e3))}async onDragEnd(){this.dragTarget&&(this.off("pointermove",this.onDragMove),this.dragTarget.alpha=1,this.grid.setShape(this.dragTarget),this.grid.ghostPosition={...this.grid.ghostPosition,repaintedBlocks:[]},this.grid.resetGhost(),this.dragTarget.isInstalled?(this.grid.checkMatrix(),this.rowShape.removeChild(this.dragTarget),this.dragTarget=null,Ji.play("figure-placed")):this.dragTarget.resetPosition(),this.gameState===Bt.TUTORIAL&&this.toggleDarkenTutorial("disable"))}toggleDarkenTutorial(e){const{gameScene:i,grid:r}=this.darkMask,s=.5,o=e==="enable"?1:0;i.visible=e==="enable",Z.to(r,{alpha:o,duration:s}),Z.to(i,{alpha:o,duration:s})}updateCurrentScore(e){var s;let i=!1;e&&(this.scoreSystem={...this.scoreSystem,movesLeft:3},this.scoreSystem.remainsDestroy>0&&(this.scoreSystem={...this.scoreSystem,remainsDestroy:this.scoreSystem.remainsDestroy-1}),this.scoreSystem.remainsDestroy===0&&(this.scoreSystem={...this.scoreSystem,combo:this.scoreSystem.combo+1},i=!0,this.shakeScreen(.2,15),this.gameState!==Bt.TUTORIAL&&this.header.toggleCombo("enable"),(s=this.header.indicatorCombo)==null||s.startFastPulse())),!e&&this.scoreSystem.combo===1&&(this.scoreSystem={...this.scoreSystem,remainsDestroy:3}),this.scoreSystem.combo!==1&&!e&&(this.scoreSystem={...this.scoreSystem,movesLeft:this.scoreSystem.movesLeft-1}),this.scoreSystem.movesLeft===0&&(this.scoreSystem=lu,this.header.toggleCombo("disable"));const r=this.scoreSystem.combo*e*10;return r&&this.header.updateCurrentScore(r),{multipliedScore:r,hasCombo:i}}shakeScreen(e,i){Z.timeline().to(this,{x:i,duration:e/4,ease:"power1.inOut"}).to(this,{x:-i,duration:e/4,ease:"power1.inOut"}).to(this,{y:i,duration:e/4,ease:"power1.inOut"}).to(this,{y:-i,duration:e/4,ease:"power1.inOut"}).to(this,{x:0,y:0,duration:.1})}resolvingCoordinates(e,i){let r=e,s=i;return r>this.grid.size-1&&(r=this.grid.size-1),s>this.grid.size-1&&(s=this.grid.size-1),r<0&&(r=0),s<0&&(s=0),[r,s]}}class sb extends _a{constructor(){super();G(this,"playButton");const e=vx(),i=xa(),r=new ue().roundRect(window.innerWidth/2,window.innerHeight/2,K_,ql,18).fill({color:"#13013E",alpha:.35});r.pivot.y=r.height*.5,r.pivot.x=r.width*.5;const s=new Ef(!0);s.changeValue(e,!0),s.x=window.innerWidth/2,s.y=window.innerHeight/2-s.height/2-10;const o=new ne({text:e===i?"НОВЫЙ РЕКОРД!":"ИГРА ОКОНЧЕНА",style:{fontFamily:"Golos Bold",fill:"white",fontSize:64*Le}});o.anchor.set(.5,1),o.y=window.innerHeight/2-r.height/2-o.height,o.x=window.innerWidth/2;const a=new ne({text:"Лучший счет",style:{fontFamily:"Golos Bold",fill:"white",fontSize:64*Le}});a.anchor.set(.5),a.y=window.innerHeight/2+20,a.x=window.innerWidth/2;const l=new If;l.changeValue(i),l.x=r.width/2-l.width/2,l.y=window.innerHeight/2+l.height/2+10,this.playButton=new We(re.PRIMARY,()=>this.parent.resetGame(),{text:"ПРОДОЛЖИТЬ",fromInvisibility:!0,textureName:"icon-play"}),this.playButton.y=window.innerHeight/2+ql/2+this.playButton.height,this.playButton.x=window.innerWidth/2,this.addChild(this.playButton,r,s,o,l,a)}}const Bf={height:window.innerHeight,width:window.innerWidth,roundPixels:!0,backgroundAlpha:0,hello:!0,resolution:(window==null?void 0:window.devicePixelRatio)??1},ob=(n,t=!1)=>{const e=i=>{if(!(i instanceof H))return;const{width:r,height:s}=Bf;if(i.x=r/2,i.y=s/2,t&&i instanceof rt){i.anchor.set(.5);return}if(t&&i instanceof H){i.pivot.y=.5*i.height/i.scale.y,i.pivot.x=.5*i.width/i.scale.x;return}};n.forEach(e)};class ab extends _a{constructor(){super();G(this,"playButton");G(this,"resetButton");G(this,"pauseIcon");this.resetButton=new We(re.SECONDARY,()=>this.parent.resetGame(),{text:"НАЧАТЬ СНАЧАЛА",fromInvisibility:!0}),this.resetButton.y=window.innerHeight-j_,this.resetButton.x=window.innerWidth/2,this.playButton=new We(re.PRIMARY,()=>this.close(),{text:"ПРОДОЛЖИТЬ",textureName:"icon-play",fromInvisibility:!0}),this.playButton.y=this.resetButton.y-this.resetButton.height-Rc,this.playButton.x=window.innerWidth/2,this.pauseIcon=rt.from("pause"),this.pauseIcon.width=jl,this.pauseIcon.height=jl,this.pauseIcon.anchor.set(.5,1),ob([this.pauseIcon]),this.addChild(this.playButton,this.resetButton,this.pauseIcon)}}class uu extends _a{constructor(){super();const t=rt.from("game-logo");t.height=354*Le,t.width=850*Le,t.anchor.set(.5,1),t.x=window.innerWidth/2,t.y=window.innerHeight/2-t.height/2;const e=new ne({text:`Набирай очки
и получай подарки!`,style:{fontFamily:"Golos Bold",fontSize:64*Le,align:"center",fill:"white",fontWeight:"600"}});e.anchor.set(.5),e.y=window.innerHeight/2,e.x=window.innerWidth/2;const i=new We(re.PRIMARY,()=>this.close(),{text:"ИГРАТЬ",fromInvisibility:!0,textureName:"icon-play"});i.y=e.y+i.height*2,i.x=window.innerWidth/2;const r=new We(re.SECONDARY,()=>this.goToLeaderBoard(),{text:"ЛИГИ",fromInvisibility:!0});r.y=i.y+Rc+r.height,r.x=window.innerWidth/2,this.addChild(t,e,i,r)}goToLeaderBoard(){this.close(),this.parent.openLeaderboard()}}class lb extends H{constructor(){super();G(this,"gameScene");G(this,"leaderboard");G(this,"currentModal",null);G(this,"wasOpenedFromMarket",Y1());const e=new rt(D.EMPTY);this.sortableChildren=!0,e.width=window.innerWidth,e.height=window.innerHeight,this.addChild(e),Ji.play("theme-music",{loop:!0}),this.resetGame(),this.wasOpenedFromMarket&&(this.currentModal=new uu,this.addChild(this.currentModal),this.currentModal.open())}resetGame(){var e;this.currentModal instanceof uu||(e=this.currentModal)==null||e.close(),this.removeChild(this.gameScene),this.gameScene=new rb,this.addChild(this.gameScene)}openPause(){this.currentModal=new ab,this.addChild(this.currentModal),this.currentModal.open()}setGameover(){this.currentModal=new sb,this.addChild(this.currentModal),this.currentModal.open()}openLeaderboard(){this.removeChild(this.gameScene),this.leaderboard=new K1,this.addChild(this.leaderboard)}closeLeaderboard(){var e;this.removeChild(this.leaderboard),this.leaderboard=null,this.resetGame(),(e=this.currentModal)==null||e.open()}}const ub={"1.png":{frame:{x:1,y:1,w:128,h:128},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:128,h:128},sourceSize:{w:128,h:128}},"10.png":{frame:{x:131,y:1,w:512,h:512},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:512,h:512},sourceSize:{w:512,h:512}},"11.png":{frame:{x:645,y:1,w:512,h:512},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:512,h:512},sourceSize:{w:512,h:512}},"2.png":{frame:{x:1159,y:1,w:224,h:224},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:224,h:224},sourceSize:{w:224,h:224}},"3.png":{frame:{x:1,y:515,w:328,h:328},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:328,h:328},sourceSize:{w:328,h:328}},"4.png":{frame:{x:331,y:515,w:360,h:360},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:360,h:360},sourceSize:{w:360,h:360}},"5.png":{frame:{x:693,y:515,w:400,h:400},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:400,h:400},sourceSize:{w:400,h:400}},"6.png":{frame:{x:1,y:917,w:456,h:456},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:456,h:456},sourceSize:{w:456,h:456}},"7.png":{frame:{x:1385,y:1,w:512,h:512},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:512,h:512},sourceSize:{w:512,h:512}},"8.png":{frame:{x:1095,y:515,w:512,h:512},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:512,h:512},sourceSize:{w:512,h:512}},"9.png":{frame:{x:459,y:1029,w:512,h:512},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:512,h:512},sourceSize:{w:512,h:512}}},hb={touch:["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png"]},cb={app:"http://www.codeandweb.com/texturepacker",version:"1.0",image:"touch-animation.png",format:"RGBA8888",size:{w:1898,h:1542},scale:"1"},fb={frames:ub,animations:hb,meta:cb};class db extends wr{constructor(t){super(t.animations.touch),this.animationSpeed=1,this.scale.set(.1),this.anchor.set(.5),this.loop=!1,this.eventMode="none",this.onComplete=()=>{Z.to(this,{alpha:0,duration:.3,onComplete:()=>{this.destroy()}})}}playByClick(t,e){this.x=t,this.y=e,this.play()}}const pb=async()=>{const n=new nh;await n.init(Bf),await ai.init({manifest:E2}),await ai.loadBundle("assets"),globalThis.__PIXI_APP__=n;const t=new lb,e=new js(D.from("touch-animation"),fb);return await e.parse(),n.stage.hitArea=n.screen,n.stage.interactive=!0,n.stage.on("pointerdown",i=>{if(i.target instanceof Do)return;const r=new db(e);n.stage.addChild(r),r.playByClick(i.x,i.y)}),n.stage.addChild(t),n};var Uf={exports:{}};(function(n){(function(){function t(p,g){document.addEventListener?p.addEventListener("scroll",g,!1):p.attachEvent("scroll",g)}function e(p){document.body?p():document.addEventListener?document.addEventListener("DOMContentLoaded",function g(){document.removeEventListener("DOMContentLoaded",g),p()}):document.attachEvent("onreadystatechange",function g(){(document.readyState=="interactive"||document.readyState=="complete")&&(document.detachEvent("onreadystatechange",g),p())})}function i(p){this.g=document.createElement("div"),this.g.setAttribute("aria-hidden","true"),this.g.appendChild(document.createTextNode(p)),this.h=document.createElement("span"),this.i=document.createElement("span"),this.m=document.createElement("span"),this.j=document.createElement("span"),this.l=-1,this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.h.appendChild(this.m),this.i.appendChild(this.j),this.g.appendChild(this.h),this.g.appendChild(this.i)}function r(p,g){p.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+g+";"}function s(p){var g=p.g.offsetWidth,_=g+100;return p.j.style.width=_+"px",p.i.scrollLeft=_,p.h.scrollLeft=p.h.scrollWidth+100,p.l!==g?(p.l=g,!0):!1}function o(p,g){function _(){var v=x;s(v)&&v.g.parentNode!==null&&g(v.l)}var x=p;t(p.h,_),t(p.i,_),s(p)}function a(p,g,_){g=g||{},_=_||window,this.family=p,this.style=g.style||"normal",this.weight=g.weight||"normal",this.stretch=g.stretch||"normal",this.context=_}var l=null,u=null,h=null,c=null;function f(p){return u===null&&(d(p)&&/Apple/.test(window.navigator.vendor)?(p=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),u=!!p&&603>parseInt(p[1],10)):u=!1),u}function d(p){return c===null&&(c=!!p.document.fonts),c}function m(p,g){var _=p.style,x=p.weight;if(h===null){var v=document.createElement("div");try{v.style.font="condensed 100px sans-serif"}catch{}h=v.style.font!==""}return[_,x,h?p.stretch:"","100px",g].join(" ")}a.prototype.load=function(p,g){var _=this,x=p||"BESbswy",v=0,y=g||3e3,S=new Date().getTime();return new Promise(function(A,w){if(d(_.context)&&!f(_.context)){var C=new Promise(function(T,O){function N(){new Date().getTime()-S>=y?O(Error(""+y+"ms timeout exceeded")):_.context.document.fonts.load(m(_,'"'+_.family+'"'),x).then(function(F){1<=F.length?T():setTimeout(N,25)},O)}N()}),b=new Promise(function(T,O){v=setTimeout(function(){O(Error(""+y+"ms timeout exceeded"))},y)});Promise.race([b,C]).then(function(){clearTimeout(v),A(_)},w)}else e(function(){function T(){var L;(L=E!=-1&&U!=-1||E!=-1&&P!=-1||U!=-1&&P!=-1)&&((L=E!=U&&E!=P&&U!=P)||(l===null&&(L=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),l=!!L&&(536>parseInt(L[1],10)||parseInt(L[1],10)===536&&11>=parseInt(L[2],10))),L=l&&(E==V&&U==V&&P==V||E==I&&U==I&&P==I||E==z&&U==z&&P==z)),L=!L),L&&(ft.parentNode!==null&&ft.parentNode.removeChild(ft),clearTimeout(v),A(_))}function O(){if(new Date().getTime()-S>=y)ft.parentNode!==null&&ft.parentNode.removeChild(ft),w(Error(""+y+"ms timeout exceeded"));else{var L=_.context.document.hidden;(L===!0||L===void 0)&&(E=N.g.offsetWidth,U=F.g.offsetWidth,P=M.g.offsetWidth,T()),v=setTimeout(O,50)}}var N=new i(x),F=new i(x),M=new i(x),E=-1,U=-1,P=-1,V=-1,I=-1,z=-1,ft=document.createElement("div");ft.dir="ltr",r(N,m(_,"sans-serif")),r(F,m(_,"serif")),r(M,m(_,"monospace")),ft.appendChild(N.g),ft.appendChild(F.g),ft.appendChild(M.g),_.context.document.body.appendChild(ft),V=N.g.offsetWidth,I=F.g.offsetWidth,z=M.g.offsetWidth,O(),o(N,function(L){E=L,T()}),r(N,m(_,'"'+_.family+'",sans-serif')),o(F,function(L){U=L,T()}),r(F,m(_,'"'+_.family+'",serif')),o(M,function(L){P=L,T()}),r(M,m(_,'"'+_.family+'",monospace'))})})},n.exports=a})()})(Uf);var mb=Uf.exports;const gb=Rr(mb),_b=new gb("Roboto Flex");Promise.all([_b.load()]).finally(async()=>{var t,e;const n=await pb();(t=document.getElementById("loading-screen"))==null||t.remove(),(e=document.getElementById("app"))==null||e.appendChild(n.canvas)});export{Q as $,th as A,Ut as B,H as C,ct as D,B as E,X as F,W as G,ve as H,Ua as I,rt as J,Qd as K,lp as L,J as M,_t as N,dt as O,Ct as P,Tp as Q,Cn as R,op as S,Lt as T,Yu as U,Ga as V,Pd as W,as as X,j as Y,Su as Z,k as _,yr as a,Ep as a0,Zp as a1,Yi as a2,Hi as a3,Vm as a4,uo as a5,dh as a6,al as a7,wl as a8,jm as a9,ue as aa,at as ab,id as ac,lo as ad,bl as ae,xr as af,mh as ag,Et as b,$ as c,Wo as d,Ft as e,Wp as f,oh as g,ol as h,Vd as i,Xp as j,Fn as k,or as l,Vo as m,Qu as n,zu as o,he as p,yl as q,pd as r,D as s,ed as t,qp as u,em as v,xt as w,Te as x,yu as y,Dt as z};
