"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4231],{2435:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(14232),i=a(81855),s=a(91372),l=a(16361);let o=e=>{let{title:t}=(0,i.N)(),[a]=(0,n.useMemo)(()=>e.split(l.QB),[e]),{title:o}=s.A[a]||{};return{appendFileToTitle:(0,n.useCallback)((a,n)=>{let i=a?` - ${a}${n?` ${l.g6}`:""}`:"";t(e,`${o}${i}`)},[e,o,t]),prependFileToTitle:(0,n.useCallback)((a,n,i)=>{let s=a?`${n?`${l.g6} `:""}${a}${i?" ":" - "}`:"";t(e,`${s}${o}`)},[e,o,t])}}},43010:(e,t,a)=>{a.d(t,{A:()=>n});let n=a(77232).Ay.div.withConfig({componentId:"sc-29e5eb62-0"})(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}'])},44231:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(37876),i=a(79052),s=a(14232);let l=a(77232).Ay.div.withConfig({componentId:"sc-1924a15a-0"})(["iframe{opacity:",";transition:opacity 0.25s ease-in;}.loading{&::before{color:#fff;font-weight:500;mix-blend-mode:normal;text-shadow:1px 2px 3px rgb(0 0 0 / 50%);}}"],({$loaded:e})=>e?"100%":"0%");var o=a(43010),r=a(78011),c=a(2435),f=a(65231),d=a(81855),p=a(55295),u=a(16361),w=a(60109);let m=({id:e})=>{let{closeWithTransition:t,processes:{[e]:{libs:[a=""]=[],url:m=""}={}}={}}=(0,d.N)(),{createPath:g,exists:h,readFile:b,updateFolder:y,writeFile:k}=(0,f.f)(),{foregroundId:$,setForegroundId:A,setWallpaper:x}=(0,p.w)(),v=(0,s.useRef)(null),[C,E]=(0,s.useState)(!1),[_,j]=(0,s.useState)(),{prependFileToTitle:B}=(0,c.A)(e),H=(0,s.useCallback)(e=>t=>{let a=(0,i.join)(u.rO,"wallpaper.png");t.toBlob(async t=>{await k(a,await (0,w.Z6)(t),!0),x(a,e)})},[x,k]),{onDragOver:T,onDrop:D}=(0,r.A)({id:e});return(0,s.useEffect)(()=>{B("Untitled")},[B]),(0,s.useEffect)(()=>{$!==e&&v.current?.contentWindow?.addEventListener("click",()=>A(e),u.w3)},[$,e,A]),(0,s.useEffect)(()=>{let{contentWindow:a}=v.current||{};if(C&&a&&!_){let n=a.systemHooks.showOpenFileDialog,s=a.file_new;j(a),a.file_new=()=>{B("Untitled"),s()},a.systemHooks.setWallpaperTiled=H("tile"),a.systemHooks.setWallpaperCentered=H("center"),a.systemHooks.showOpenFileDialog=async e=>{let{file:t}=await n(e);return B(t.name),{file:t}},a.close=()=>t(e),a.storage_quota_exceeded=()=>{},a.systemHooks.showSaveFileDialog=async({defaultFileName:e,getBlob:t})=>y(u.Bn,await g(`${e}.png`,u.Bn,await (0,w.Z6)(await t("image/png")))),a.systemHooks.writeBlobToHandle=async(e,t)=>{await h(e)&&(await k(e,await (0,w.Z6)(t),!0),y((0,i.dirname)(e),(0,i.basename)(e)))},a.addEventListener("dragover",T),a.addEventListener("drop",D)}},[t,g,h,e,_,C,T,D,B,H,y,k]),(0,s.useEffect)(()=>{_&&m&&b(m).then(e=>{let t=_.onunhandledrejection;_.onunhandledrejection=e=>{t?.(e),e?.reason?.message==="either options.data or options.file or options.filePath must be passed"&&B("Untitled")},_.open_from_file(new File([e],m),m),B((0,i.basename)(m))})},[_,B,b,m]),(0,n.jsxs)(l,{$loaded:C,children:[!C&&(0,n.jsx)(o.A,{className:"loading"}),(0,n.jsx)("iframe",{ref:v,height:"100%",id:`jspaint-${e}`,onLoad:()=>E(!0),src:a,title:e,width:"100%",...u.aI})]})}},78011:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(79052),i=a(14232),s=a(49697),l=a(84966),o=a(54188),r=a(65231),c=a(81855),f=a(55295),d=a(16361),p=a(60109),u=a(29804);let w=({callback:e,directory:t=d.Bn,id:a,onDragLeave:w,onDragOver:m,updatePositions:g})=>{let{url:h}=(0,c.N)(),b=(0,u.w)(),{iconPositions:y,sortOrders:k,setIconPositions:$}=(0,f.w)(),{exists:A,mkdirRecursive:x,updateFolder:v,writeFile:C}=(0,r.f)(),E=(0,i.useCallback)(async(e,t,i)=>{if(a)if(t){let s=(0,n.join)(d.Bn,e);if(await x(d.Bn),await C(s,t,!0))return i===o.z.UPDATE_URL&&h(a,s),v(d.Bn,e),(0,n.basename)(s)}else i===o.z.UPDATE_URL&&h(a,e);return""},[a,x,v,h,C]),{openTransferDialog:_}=(0,s.A)();return{onDragLeave:w,onDragOver:(0,i.useCallback)(e=>{m?.(e),(0,p.CH)(e)},[m]),onDrop:(0,i.useCallback)(i=>{if(d.jj.has((0,p.uQ)(t)))return;if(i.target instanceof HTMLElement){if(i.target.closest(".focus-within")?.contains(i.target))return;if(g){let{files:e,text:a}=(0,l.bn)(i);if(0===e.length&&""===a)return;(async()=>{let s={x:i.clientX,y:i.clientY},l=[];if(a){try{l=JSON.parse(a)}catch{}if(!Array.isArray(l))return;let[e]=l;if(!e||e.startsWith(t)&&(0,n.basename)(e)===(0,n.relative)(t,e))return;l=l.map(e=>(0,n.basename)(e))}else l=e instanceof FileList?[...e].map(e=>e.name):[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);l=await (0,p.$I)(l,t,y,A),(0,p.$Y)(t,i.target,y,k,s,l,$,A)})()}}let s="string"==typeof a;s&&!g&&t===d.Bn&&b.current[a]?.componentWindow?.focus(d.VD),(0,l.nX)(i,e||E,t,_,s)},[e,t,A,y,a,_,b,$,k,g,E])}}}}]);