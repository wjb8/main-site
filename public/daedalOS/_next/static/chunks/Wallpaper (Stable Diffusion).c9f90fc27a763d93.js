(()=>{var e={70636:(e,t,r)=>{"use strict";var o=r(7567);globalThis.addEventListener("message",({data:e})=>{if("init"===e)globalThis.tvmjsGlobalEnv=globalThis.tvmjsGlobalEnv||{},globalThis.tvmjsGlobalEnv.logger=(e,t)=>{globalThis.postMessage({message:t,type:e})},globalThis.importScripts(...o.libs);else if(!(e instanceof DOMRect)){let{canvas:t,config:r}=e;(0,o.runStableDiffusion)(r,t,!0).then(()=>globalThis.tvmjsGlobalEnv.logger("",""))}},{passive:!0})}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}},s=!0;try{e[o](l,l.exports,r),s=!1}finally{s&&delete t[o]}return l.exports}r.m=e,r.x=()=>{var e=r.O(void 0,[2909,7567],()=>r(70636));return r.O(e)},(()=>{var e=[];r.O=(t,o,a,l)=>{if(o){l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[o,a,l];return}for(var i=1/0,s=0;s<e.length;s++){for(var[o,a,l]=e[s],n=!0,f=0;f<o.length;f++)(!1&l||i>=l)&&Object.keys(r.O).every(e=>r.O[e](o[f]))?o.splice(f--,1):(n=!1,l<i&&(i=l));if(n){e.splice(s--,1);var c=a();void 0!==c&&(t=c)}}return t}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(o,a){if(1&a&&(o=this(o)),8&a||"object"==typeof o&&o&&(4&a&&o.__esModule||16&a&&"function"==typeof o.then))return o;var l=Object.create(null);r.r(l);var s={};e=e||[null,t({}),t([]),t(t)];for(var i=2&a&&o;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach(e=>s[e]=()=>o[e]);return s.default=()=>o,r.d(l,s),l}})(),r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.f={},r.e=(e,t)=>Promise.all(Object.keys(r.f).reduce((o,a)=>(r.f[a](e,o,t),o),[])),r.u=e=>"static/chunks/"+(2962===e?"Resize Image Worker":e)+"."+({1071:"e55331dbb69d578a",1894:"ce3cfee751872641",2909:"e5f9a13d80fe273f",2962:"5686429b281dc561",3148:"c88d12f5cd85f063",7109:"85e59deb7c28e5d0",7567:"32cd1b11ec588a78",7596:"cb952ec11451dda3",9742:"d43a2a6d9faca159"})[e]+".js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=1808,(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:e=>e},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("nextjs#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="/_next/",(()=>{r.b=self.location+"/../../../";var e={1808:1,8535:1};r.f.i=(t,o)=>{e[t]||importScripts(r.tu(r.p+r.u(t)))};var t=self.webpackChunk_N_E=self.webpackChunk_N_E||[],o=t.push.bind(t);t.push=t=>{var[a,l,s]=t;for(var i in l)r.o(l,i)&&(r.m[i]=l[i]);for(s&&s(r);a.length;)e[a.pop()]=1;o(t)}})(),(()=>{var e=r.x;r.x=()=>Promise.all([r.e(2909),r.e(7567)]).then(e)})(),_N_E=r.x()})();