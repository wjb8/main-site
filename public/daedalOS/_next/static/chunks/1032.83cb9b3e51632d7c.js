"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1032],{35144:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(37876),i=n(14232),o=n(77232),a=n(43010),s=n(78011),l=n(81855);let c=o.Ay.div.withConfig({componentId:"sc-5da8521e-0"})([""]),d=(0,i.memo)(({id:e,useHook:t,StyledComponent:n,children:o})=>{let{processes:{[e]:{url:d=""}={}}}=(0,l.N)(),u=(0,i.useRef)(null),[f,m]=(0,i.useState)(!0),h=(0,i.useMemo)(()=>({contain:"strict",visibility:f?"hidden":"visible"}),[f]);return t({containerRef:u,id:e,loading:f,setLoading:m,url:d}),(0,r.jsxs)(r.Fragment,{children:[f&&(0,r.jsx)(a.A,{}),(0,r.jsx)(n||c,{ref:u,style:h,...(0,s.A)({id:e}),children:o})]})})},41032:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(37876);let i=n(77232).Ay.div.withConfig({componentId:"sc-2afc900f-0"})(["height:",";width:100%;"],({theme:e})=>`calc(100% - ${e.sizes.titleBar.height}px)`);var o=n(14232),a=n(68667),s=n(81855),l=n(60109),c=n(84906),d=n(16361);let u=({containerRef:e,id:t,setLoading:n,loading:r})=>{let{processes:{[t]:{libs:i=[]}={}}={}}=(0,s.N)(),u=(0,a.A)(),f=(0,c.A)(t,e,void 0,"canvas { height: calc(100% + 12px) !important; width: 100% !important; }",!0),[m,h]=(0,o.useState)();(0,o.useEffect)(()=>{if(r){let e=f?.();if(!e)return;let r=e?.document.querySelector("canvas");r.addEventListener("contextmenu",l.CH),e.Module={canvas:r,postRun:()=>{n(!1),h(e),u(e.FS,t)},windowElement:e.document.body};let{height:o,width:a}=e.document.body.getBoundingClientRect()||{};o&&a&&(r.style.height=`${o}px`,r.style.width=`${a}px`,setTimeout(()=>(0,l.aY)(i,void 0,void 0,void 0,e),d.UW.WINDOW))}},[f,t,i,r,u,n]),(0,o.useEffect)(()=>()=>{if(m?.Module)try{m.Module.SDL2?.audioContext.close()}catch{}},[m?.Module])};var f=n(35144);let m=({id:e})=>(0,r.jsx)(f.A,{StyledComponent:i,id:e,useHook:u})},43010:(e,t,n)=>{n.d(t,{A:()=>r});let r=n(77232).Ay.div.withConfig({componentId:"sc-29e5eb62-0"})(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}'])},68667:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(14232),i=n(65231);let o=()=>{let{mountEmscriptenFs:e,unMapFs:t,updateFolder:n}=(0,i.f)(),o=(0,r.useRef)("");return(0,r.useEffect)(()=>()=>{if(o.current){let e=o.current;o.current="",t(e,!0).then(()=>n("/",void 0,e)).catch(()=>{})}},[t,n]),(0,r.useCallback)(async(t,r)=>{if(!t)return;let i="";try{i=await e(t,r)}catch{}i&&(n("/",i),o.current=i)},[e,n])}},78011:(e,t,n)=>{n.d(t,{A:()=>h});var r=n(79052),i=n(14232),o=n(49697),a=n(84966),s=n(54188),l=n(65231),c=n(81855),d=n(55295),u=n(16361),f=n(60109),m=n(29804);let h=({callback:e,directory:t=u.Bn,id:n,onDragLeave:h,onDragOver:y,updatePositions:p})=>{let{url:v}=(0,c.N)(),g=(0,m.w)(),{iconPositions:w,sortOrders:b,setIconPositions:E}=(0,d.w)(),{exists:A,mkdirRecursive:C,updateFolder:x,writeFile:L}=(0,l.f)(),k=(0,i.useCallback)(async(e,t,i)=>{if(n)if(t){let o=(0,r.join)(u.Bn,e);if(await C(u.Bn),await L(o,t,!0))return i===s.z.UPDATE_URL&&v(n,o),x(u.Bn,e),(0,r.basename)(o)}else i===s.z.UPDATE_URL&&v(n,e);return""},[n,C,x,v,L]),{openTransferDialog:D}=(0,o.A)();return{onDragLeave:h,onDragOver:(0,i.useCallback)(e=>{y?.(e),(0,f.CH)(e)},[y]),onDrop:(0,i.useCallback)(i=>{if(u.jj.has((0,f.uQ)(t)))return;if(i.target instanceof HTMLElement){if(i.target.closest(".focus-within")?.contains(i.target))return;if(p){let{files:e,text:n}=(0,a.bn)(i);if(0===e.length&&""===n)return;(async()=>{let o={x:i.clientX,y:i.clientY},a=[];if(n){try{a=JSON.parse(n)}catch{}if(!Array.isArray(a))return;let[e]=a;if(!e||e.startsWith(t)&&(0,r.basename)(e)===(0,r.relative)(t,e))return;a=a.map(e=>(0,r.basename)(e))}else a=e instanceof FileList?[...e].map(e=>e.name):[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);a=await (0,f.$I)(a,t,w,A),(0,f.$Y)(t,i.target,w,b,o,a,E,A)})()}}let o="string"==typeof n;o&&!p&&t===u.Bn&&g.current[n]?.componentWindow?.focus(u.VD),(0,a.nX)(i,e||k,t,D,o)},[e,t,A,w,n,D,g,E,b,p,k])}}},84906:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(14232),i=n(78011),o=n(16361),a=n(81855),s=n(55295);let l=e=>{let t=e.HTMLCanvasElement.prototype.getContext;e.HTMLCanvasElement.prototype.getContext=function(e,n){return("webgl"===e||"webgl2"===e)&&(n=Object.assign(n||{},{preserveDrawingBuffer:!0})),t.call(this,e,n)}},c=e=>{let t=e.createElement("canvas");return t.id="canvas",t.style.width="100%",t.style.height="100%",t.tabIndex=-1,e.body.append(t),t},d=(e,t,n)=>{let r=document.createElement("iframe");r.title=e,r.style.backgroundColor="transparent",r.style.border="0",r.style.width="100%",r.style.height="100%",t.append(r);let i=r.contentDocument;i.open(),i.write(`
    <!DOCTYPE html>
    ${n?`<head><style>${n}</style></head>`:"<head />"}
    <body />
    `),i.close();let o=r.contentWindow;return o.document.documentElement.style.height="100%",o.document.documentElement.style.width="100%",o.document.body.style.height="100%",o.document.body.style.width="100%",o.document.body.style.margin="0",o.document.body.style.overflow="hidden",r},u=(e,t,n,u,f=!1)=>{let[m,h]=(0,r.useState)(),[y,p]=(0,r.useState)(),{onDragOver:v,onDrop:g}=(0,i.A)({id:e}),{processes:{[e]:{maximized:w}={}}={}}=(0,a.N)(),{foregroundId:b,setForegroundId:E}=(0,s.w)(),A=(0,r.useCallback)(()=>{let t;if(!m)return;m.querySelector("iframe")?.remove();let n=d(e,m,u),r=n.contentWindow;l(r),f&&(t=c(n.contentDocument));let i=()=>{f&&t?t.focus(o.VD):r.focus(),E(e)};return r.addEventListener("click",i),r.addEventListener("focus",i),r.addEventListener("blur",()=>E("")),r.addEventListener("dragover",v),r.addEventListener("drop",g),p(r),r},[m,e,v,g,E,u,f]);return(0,r.useLayoutEffect)(()=>{y&&b===e&&requestAnimationFrame(()=>{n?n(y):f?y.document.querySelector("canvas")?.focus(o.VD):y.focus()})},[y,n,b,e,w,f]),(0,r.useEffect)(()=>{if(!m){let e=()=>{requestAnimationFrame(()=>{t.current?h(t.current):e()})};e()}},[m,t]),(0,r.useMemo)(()=>m?A:void 0,[m,A])}}}]);