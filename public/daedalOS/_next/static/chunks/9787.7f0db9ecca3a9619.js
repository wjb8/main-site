"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9787],{35144:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(37876),s=t(14232),a=t(77232),i=t(43010),l=t(78011),o=t(81855);let d=a.Ay.div.withConfig({componentId:"sc-5da8521e-0"})([""]),c=(0,s.memo)(({id:e,useHook:n,StyledComponent:t,children:a})=>{let{processes:{[e]:{url:c=""}={}}}=(0,o.N)(),u=(0,s.useRef)(null),[w,f]=(0,s.useState)(!0),h=(0,s.useMemo)(()=>({contain:"strict",visibility:w?"hidden":"visible"}),[w]);return n({containerRef:u,id:e,loading:w,setLoading:f,url:c}),(0,r.jsxs)(r.Fragment,{children:[w&&(0,r.jsx)(i.A,{}),(0,r.jsx)(t||d,{ref:u,style:h,...(0,l.A)({id:e}),children:a})]})})},43010:(e,n,t)=>{t.d(n,{A:()=>r});let r=t(77232).Ay.div.withConfig({componentId:"sc-29e5eb62-0"})(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}'])},54820:(e,n,t)=>{t.d(n,{$:()=>i,v:()=>a});let r="DEFAULT",s="__setter__",a=e=>e.forEach(e=>{if(e in window)try{delete window[e]}finally{Object.assign(window,{[e]:void 0})}}),i=(e,n,t)=>{if(setTimeout(()=>{window.sharedGlobals&&e in window.sharedGlobals&&(window.sharedGlobals[e][s]=r)},t),window.sharedGlobals=window.sharedGlobals||{},e in window.sharedGlobals)window.sharedGlobals[e][s]=n;else{let t=window[e];window.sharedGlobals[e]={[r]:t,[s]:n},Object.defineProperty(window,e,{get(){if(window.sharedGlobals&&e in window.sharedGlobals){let{stack:n=""}=Error(),t=Object.keys(window.sharedGlobals[e]).filter(e=>![r,s].includes(e)).find(e=>new RegExp(e).test(n));return window.sharedGlobals[e][t||r]}return t},set(n){window.sharedGlobals&&e in window.sharedGlobals&&(window.sharedGlobals[e][window.sharedGlobals[e][s]]=n)}})}}},59787:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var r=t(37876);let s=t(77232).Ay.div.withConfig({componentId:"sc-8b072f9d-0"})(["canvas{height:100%;object-fit:contain;width:100%;}"]);var a=t(79052),i=t(14232);let l="/Program Files/DX-Ball/dx-ball.sav",o=["DXBall","audioName","i","source","game","soundon","saveron","myFonts","font","animframe","color","FontList","lFile","canvas","ctx","file","c","descender","_0x56c3xc","temp","cl","user","paus","paused","naudio","nflash","audio","balls","bricks","bullets","bang","flash","records","lightning","shadow","chcur","highscore","saver","y","x","mouse","paddle","bonus","requestAnimFrame","curX","j","height","xp","yp","_0x56c3x8","vm"];var d=t(65231),c=t(81855),u=t(16361),w=t(60109),f=t(54820);let h=({id:e,setLoading:n})=>{let{readFile:t,writeFile:r,updateFolder:s}=(0,d.f)(),{processes:{[e]:h}}=(0,c.N)(),{closing:b,libs:m=[]}=h||{},p=(0,i.useRef)(""),g=(0,i.useRef)(!0);(0,i.useEffect)(()=>{t(l).then(e=>{p.current=e.toString()}).catch(()=>{p.current=""})},[t]),(0,i.useEffect)(()=>{g.current&&(g.current=!1,(0,w.aY)(m,void 0,!0).then(()=>{window.DXBall?.init(()=>n(!1),(e,n)=>(p.current=`${p.current?`${p.current}\r`:""}#&${n}&${e}`.split("\r").map(e=>e.split("&")).sort(([,e],[,n])=>Number(n)-Number(e)).map(([,e,n],t)=>`${t}&${e}&${n}`).join("\r"),r(l,p.current,!0),s((0,a.dirname)(l),(0,a.basename)(l)),`${p.current}\r`))}))},[m,n,s,r]),(0,i.useEffect)(()=>()=>{!g.current&&b&&(window.DXBall.close(),setTimeout(()=>(0,f.v)(o),u.UW.WINDOW))},[b])};var b=t(35144);let m=({id:e})=>(0,r.jsx)(b.A,{StyledComponent:s,id:e,useHook:h,children:(0,r.jsx)("canvas",{id:"dx-ball",onContextMenuCapture:w.CH})})},78011:(e,n,t)=>{t.d(n,{A:()=>h});var r=t(79052),s=t(14232),a=t(49697),i=t(84966),l=t(54188),o=t(65231),d=t(81855),c=t(55295),u=t(16361),w=t(60109),f=t(29804);let h=({callback:e,directory:n=u.Bn,id:t,onDragLeave:h,onDragOver:b,updatePositions:m})=>{let{url:p}=(0,d.N)(),g=(0,f.w)(),{iconPositions:v,sortOrders:y,setIconPositions:x}=(0,c.w)(),{exists:A,mkdirRecursive:G,updateFolder:j,writeFile:C}=(0,o.f)(),E=(0,s.useCallback)(async(e,n,s)=>{if(t)if(n){let a=(0,r.join)(u.Bn,e);if(await G(u.Bn),await C(a,n,!0))return s===l.z.UPDATE_URL&&p(t,a),j(u.Bn,e),(0,r.basename)(a)}else s===l.z.UPDATE_URL&&p(t,e);return""},[t,G,j,p,C]),{openTransferDialog:_}=(0,a.A)();return{onDragLeave:h,onDragOver:(0,s.useCallback)(e=>{b?.(e),(0,w.CH)(e)},[b]),onDrop:(0,s.useCallback)(s=>{if(u.jj.has((0,w.uQ)(n)))return;if(s.target instanceof HTMLElement){if(s.target.closest(".focus-within")?.contains(s.target))return;if(m){let{files:e,text:t}=(0,i.bn)(s);if(0===e.length&&""===t)return;(async()=>{let a={x:s.clientX,y:s.clientY},i=[];if(t){try{i=JSON.parse(t)}catch{}if(!Array.isArray(i))return;let[e]=i;if(!e||e.startsWith(n)&&(0,r.basename)(e)===(0,r.relative)(n,e))return;i=i.map(e=>(0,r.basename)(e))}else i=e instanceof FileList?[...e].map(e=>e.name):[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);i=await (0,w.$I)(i,n,v,A),(0,w.$Y)(n,s.target,v,y,a,i,x,A)})()}}let a="string"==typeof t;a&&!m&&n===u.Bn&&g.current[t]?.componentWindow?.focus(u.VD),(0,i.nX)(s,e||E,n,_,a)},[e,n,A,v,t,_,g,x,y,m,E])}}}}]);