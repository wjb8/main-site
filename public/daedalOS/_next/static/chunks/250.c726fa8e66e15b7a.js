"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[250,2482],{2001:(e,t,a)=>{a.d(t,{A:()=>m});var i=a(14232),n=a(81855),r=a(16361),o=a(60109);let s={height:"inherit",opacity:1,scale:1,width:"inherit"},l={opacity:0,scale:.95},u={...l,height:"inherit",width:"inherit"},c={...u,scale:1},d={opacity:1,scale:1},p={opacity:0,scale:.7},h=()=>({height:(0,o.Bv)()-r.D5,width:(0,o.e8)()}),m=(e,t=!1)=>{let{processes:{[e]:a}={}}=(0,n.N)(),{closing:o,componentWindow:m,maximized:w,minimized:f,taskbarEntry:y}=a||{},[g,b]=(0,i.useState)(Object.create(null)),[E,S]=(0,i.useState)(Object.create(null));return(0,i.useLayoutEffect)(()=>{if(!m||o)return;let{x:e=0,y:t=0}=m.getBoundingClientRect();b({...d,...h(),x:0-e,y:0-t})},[o,m,w]),(0,i.useLayoutEffect)(()=>{if(!y||!m||o)return;let{height:e=0,width:t=0,x:a=0,y:i=0}=y.getBoundingClientRect(),{height:n=0,width:r=0,x:s=0,y:l=0}=m.getBoundingClientRect(),u=Math.round(a-s-r/2+t/2),c=Math.round(i-l-n/2+e/2);(0!==u||0!==c)&&S({...p,x:u,y:c})},[o,m,f,y]),(0,i.useEffect)(()=>{let e=()=>{w&&b(e=>({...e,...h()}))};return window.addEventListener("resize",e,{passive:!0}),()=>window.removeEventListener("resize",e)},[w]),{animate:(f?"minimize":"")||(!o&&w?"maximize":"")||"active",exit:"exit",initial:"initial",transition:{duration:r.f9.WINDOW},variants:{active:s,exit:l,initial:t?c:u,maximize:g,minimize:E}}}},26451:(e,t,a)=>{a.d(t,{p:()=>s});var i=a(79052),n=a(14232),r=a(65231),o=a(16361);let s=()=>{let{createPath:e,updateFolder:t}=(0,r.f)();return{createSnapshot:(0,n.useCallback)(async(a,n,r,s=!0,l=o.Sb)=>{let u="";try{if((u=await e(a,l,n,void 0,s))&&r)try{let t="function"==typeof r?await r():r;t&&await e(`${(0,i.join)(l,u)}${o.V9}`,o.jv,t,void 0,s)}catch{}t((0,i.dirname)(l)),t(l,u)}catch{}return u},[e,t])}}},34901:(e,t,a)=>{a.d(t,{Ay:()=>s,EX:()=>n,Ho:()=>i,WB:()=>r,lH:()=>o});let i={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},n={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},r=30,o=166,s={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${r}px`,minWidth:`${o}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}}},41422:(e,t,a)=>{a.d(t,{A:()=>o});var i=a(14232),n=a(81855),r=a(55295);let o=e=>{let{stackOrder:t=[]}=(0,r.w)(),{processes:a}=(0,n.N)();return(0,i.useMemo)(()=>t.find(t=>t!==e&&!a?.[t]?.minimized),[e,a,t])||""}},55137:(e,t,a)=>{a.d(t,{A:()=>s});var i=a(14232),n=a(81855),r=a(55295),o=a(16361);let s=(e,t,a)=>{let{foregroundId:s,prependToStack:l,setForegroundId:u,stackOrder:c=[]}=(0,r.w)(),{processes:{[e]:d}}=(0,n.N)(),{closing:p=!1,componentWindow:h=a,minimized:m=!1,taskbarEntry:w,url:f}=d||{},y=(0,i.useMemo)(()=>c.length+(m?1:-c.indexOf(e))+1,[e,m,c]),g=(0,i.useCallback)(a=>{let{relatedTarget:i}=a,n=i===w,r=i&&w?.previousSibling?.contains(i),s=i&&h?.contains(i);u(i=>i!==e||n||s?i:(r?h?.focus(o.VD):t?.onBlurCapture?.(a),r?i:""))},[t,h,e,u,w]),b=(0,i.useCallback)(a=>{let{relatedTarget:i}=a||{};h?.contains(document.activeElement)?(l(e),u(e)):i&&document.activeElement!==w||(h?.focus(o.VD),t?.onFocusCapture?.(a))},[t,h,e,l,u,w]);return(0,i.useLayoutEffect)(()=>{e===s&&b()},[s,e,b]),(0,i.useLayoutEffect)(()=>{!h||p||m||u(e)},[p,h,e,m,u,f]),(0,i.useMemo)(()=>({onBlurCapture:g,onClickCapture:b,onFocusCapture:b,zIndex:y,...o.W8}),[b,g,y])}},74789:(e,t,a)=>{a.d(t,{Gn:()=>o,Ve:()=>u,WZ:()=>c,Xc:()=>l,r_:()=>s});var i=a(34901),n=a(16361),r=a(60109);let o=(e,t,a=[],i=0)=>{let[o]=e.split(n.QB),s=`${o}${n.QB}`,l=a.find(e=>e.startsWith(s))||"",{componentWindow:u}=t?.[l]||{},{x:c=0,y:d=0,width:p=0,height:h=0}=u?.getBoundingClientRect()||{};return!(c+i+p>(0,r.e8)()||d+i+h>(0,r.Bv)())&&(c||d)?{x:c+i,y:d+i}:void 0},s=({height:e,width:t})=>{let[a,i]=[(0,r.Bv)(),(0,r.e8)()];return{x:Math.floor(i/2-(0,r.kl)(t)/2),y:Math.floor((a-n.D5)/2-(0,r.kl)(e)/2)}},l={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},u=(e,t,a=!1)=>{let{position:i,size:n}=e||{},{x:o=0,y:s=0}=i||{},{height:u=0,width:c=0}=n||{};return a?o+l.RIGHT>t.x||o+(0,r.kl)(c)-l.LEFT<0||s+l.BOTTOM>t.y||s+l.TOP<0:o<0||s<0||o+(0,r.kl)(c)>t.x||s+(0,r.kl)(u)>t.y},c=(e,t)=>{let a=Number(e.height),o=Number(e.width),[s,l]=[(0,r.Bv)(),(0,r.e8)()],u=s-n.D5,c=Math.max(i.WB,Math.min(a,u)),d=Math.max(i.lH,Math.min(o,l));if(!t)return{height:c,width:d};let p=a===c,h=o===d;return p||h?p?h?{height:c,width:d}:{height:Math.round(c/(o/d)),width:d}:{height:c,width:Math.round(d/(a/c))}:a>o?{height:c,width:Math.round(d/(u/c))}:{height:Math.round(c/(l/d)),width:d}}},78011:(e,t,a)=>{a.d(t,{A:()=>m});var i=a(79052),n=a(14232),r=a(49697),o=a(84966),s=a(54188),l=a(65231),u=a(81855),c=a(55295),d=a(16361),p=a(60109),h=a(29804);let m=({callback:e,directory:t=d.Bn,id:a,onDragLeave:m,onDragOver:w,updatePositions:f})=>{let{url:y}=(0,u.N)(),g=(0,h.w)(),{iconPositions:b,sortOrders:E,setIconPositions:S}=(0,c.w)(),{exists:v,mkdirRecursive:k,updateFolder:T,writeFile:x}=(0,l.f)(),_=(0,n.useCallback)(async(e,t,n)=>{if(a)if(t){let r=(0,i.join)(d.Bn,e);if(await k(d.Bn),await x(r,t,!0))return n===s.z.UPDATE_URL&&y(a,r),T(d.Bn,e),(0,i.basename)(r)}else n===s.z.UPDATE_URL&&y(a,e);return""},[a,k,T,y,x]),{openTransferDialog:D}=(0,r.A)();return{onDragLeave:m,onDragOver:(0,n.useCallback)(e=>{w?.(e),(0,p.CH)(e)},[w]),onDrop:(0,n.useCallback)(n=>{if(d.jj.has((0,p.uQ)(t)))return;if(n.target instanceof HTMLElement){if(n.target.closest(".focus-within")?.contains(n.target))return;if(f){let{files:e,text:a}=(0,o.bn)(n);if(0===e.length&&""===a)return;(async()=>{let r={x:n.clientX,y:n.clientY},o=[];if(a){try{o=JSON.parse(a)}catch{}if(!Array.isArray(o))return;let[e]=o;if(!e||e.startsWith(t)&&(0,i.basename)(e)===(0,i.relative)(t,e))return;o=o.map(e=>(0,i.basename)(e))}else o=e instanceof FileList?[...e].map(e=>e.name):[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);o=await (0,p.$I)(o,t,b,v),(0,p.$Y)(t,n.target,b,E,r,o,S,v)})()}}let r="string"==typeof a;r&&!f&&t===d.Bn&&g.current[a]?.componentWindow?.focus(d.VD),(0,o.nX)(n,e||_,t,D,r)},[e,t,v,b,a,D,g,S,E,f,_])}}},80250:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var i=a(37876),n=a(79052),r=a(14232),o=a(817);let s=(0,a(77232).Ay)(o.m.div).withConfig({componentId:"sc-8db3d236-0"})(["inset:0;pointer-events:none;position:absolute;z-index:",";div:first-child{pointer-events:",";}"],({$zIndex:e})=>e,({$minimized:e})=>e?"none":"auto");var l=a(92482),u=a(78011),c=a(90194),d=a(65231),p=a(81855),h=a(91372),m=a(55295),w=a(16361),f=a(60109),y=a(26451),g=a(82909).Buffer;let b=`${w.Sb}/webampSkinData.json`,E=e=>{let{onClose:t,onMinimize:a}=(0,c.A)(e),{setWindowStates:i,windowStates:{[e]:o}={}}=(0,m.w)(),{position:s}=o||{},{argument:E,linkElement:S,processes:{[e]:v},title:k}=(0,p.N)(),{closing:T,componentWindow:x}=v||{},_=(0,r.useRef)(void 0),{createPath:D,deletePath:C,exists:N,readFile:O,updateFolder:A}=(0,d.f)(),{onDrop:W}=(0,u.A)({id:e}),L=(0,r.useRef)(0),I=(0,r.useRef)(0),P=(0,r.useRef)([]),{createSnapshot:M}=(0,y.p)(),R=(0,r.useCallback)(e=>{e?.(),t(),window.setTimeout(()=>{P.current.forEach(e=>e()),_.current?.close()},w.UW.WINDOW),window.clearInterval(L.current),window.clearInterval(I.current)},[t]),z=(0,r.useCallback)((t,{initialSkin:r,initialTracks:o})=>{let u=async()=>{let e=prompt("Enter an Internet location to open here:\nFor example: https://server.com/playlist.m3u");if(e){let t=(0,f.uQ)(e);return w.hL.has(t)?(0,l.tracksFromPlaylist)(await (await fetch(e,w.c9)).text(),t):[{duration:0,url:e}]}return[]},c=new window.Webamp({...l.Cg,handleAddUrlEvent:u,handleLoadListEvent:u,handleSaveListEvent:e=>{D("playlist.m3u",w.Bn,g.from((0,l.createM3uPlaylist)(e))).then(e=>A(w.Bn,e))},initialSkin:r,initialTracks:o}),d=()=>{let a=(0,l.b3)();if(a){let i=a.querySelector(l.bz);[i,a.querySelector(l.yK)].forEach(e=>{e?.addEventListener("drop",W),e?.addEventListener("dragover",f.CH)}),v&&(x||S(e,"componentWindow",t),i&&S(e,"peekElement",i),E(e,"play",()=>c.play()),E(e,"pause",()=>c.pause()),c._actionEmitter.on("PLAY",()=>E(e,"paused",!1)),c._actionEmitter.on("PAUSE",()=>E(e,"paused",!0)),c._actionEmitter.on("STOP",()=>E(e,"paused",!0)),c._actionEmitter.on("IS_STOPPED",()=>E(e,"paused",!0))),r||v.url?.endsWith(".wsz")||N(b).then(async e=>{e&&(0,l.u7)(c,JSON.parse((await O(b)).toString()))}),t.append(a)}};P.current.push(c.onWillClose(R),c.onMinimize(()=>a()),c.onTrackDidChange(t=>{let{milkdrop:a,windows:i}=c.store.getState();if(i?.genWindows?.milkdrop?.open&&a?.butterchurn&&(0,l.eu)(c),window.clearInterval(L.current),t?.url){let a=(0,l.d7)(t.url);if(a){let t=async()=>{let{display:{closed:t=!1}={},playlist:{currentTrack:i=-1}={},tracks:n}=c.store.getState()||{};if(t)window.clearInterval(L.current);else if(n[i]){let t=await a?.();t&&(c.store.dispatch({type:"SET_MEDIA_TAGS",...n[i],...t}),k(e,`${t.artist} - ${t.title}`))}};t(),L.current=window.setInterval(t,30*w.iC)}else{let{playlist:{currentTrack:t=-1}={},tracks:a}=c.store.getState()||{},{artist:i="",title:n=""}=a?.[t]||{};(n||i)&&k(e,n&&i?`${i} - ${n}`:n||i)}}else k(e,h.A.Webamp.title)}),c._actionEmitter.on("SET_SKIN_DATA",({data:e})=>M("webampSkinData.json",g.from(JSON.stringify(e)),async()=>{let{skinUrl:e}=c.options.availableSkins?.find(e=>e.skinUrl)||{};return e?g.from(await (await fetch(`https://r2.webampskins.org/screenshots/${(0,n.basename)(e,".wsz")}.png`)).arrayBuffer()):void 0})),c._actionEmitter.on("LOAD_DEFAULT_SKIN",()=>{C(b)}),c._actionEmitter.on("UPDATE_WINDOW_POSITIONS",()=>{window.clearInterval(I.current),I.current=window.setTimeout(()=>{let t=(0,l.b3)()?.querySelector(l.bz),{x:a=0,y:n=0}=t?.getBoundingClientRect()||{};i(t=>({...t,[e]:{position:{x:a,y:n}}}))},w.UW.WINDOW)})),r&&(0,l.QP)(c,r.url),c.renderWhenReady(t).then(()=>{(0,l.Lz)(c),(0,l.OM)(c),(0,l.G9)(c),(0,l.Zl)(c,s),d(),o&&c.play()}),window.WebampGlobal=c,_.current=c},[E,x,D,M,C,N,e,S,W,a,R,s,v,O,i,k,A]);return(0,r.useEffect)(()=>{T&&R()},[T,R]),{initWebamp:z,webampCI:_.current}};var S=a(55137),v=a(2001);let k=({id:e})=>{let t=(0,r.useRef)(null),{readFile:a}=(0,d.f)(),{processes:{[e]:{libs:o=[],minimized:u=!1,url:c=""}={}}={},url:h}=(0,p.N)(),[m,y]=(0,r.useState)(c),{initWebamp:g,webampCI:b}=E(e),k=(0,v.A)(e,!0),T=(0,r.useMemo)(()=>({onBlurCapture:()=>b&&(0,l.Ol)(b),onFocusCapture:()=>b&&(0,l.hN)(b,"main")}),[b]),{zIndex:x,..._}=(0,S.A)(e,T),D=(0,r.useCallback)(async()=>{if(c){let e=(0,f.uQ)(c);if(w.hL.has(e)){let t=await (0,l.tracksFromPlaylist)((await a(c)).toString(),e,(0,n.basename)(c,(0,n.extname)(c)));return t.length>0?{initialTracks:t}:{}}if(".mp3"===e)return{initialTracks:[await (0,l.p3)(await a(c),(0,n.basename)(c))]};if(".wsz"===e)return{initialSkin:{url:(0,f.Zd)(await a(c))}}}return{}},[a,c]),C=(0,r.useCallback)(async()=>{if(b){let{initialTracks:e,initialSkin:t}=await D();e?b.setTracksToPlay(e):t&&((0,l.QP)(b,t.url),b.setSkinFromUrl(t.url))}},[D,b]),N=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{t.current&&!b&&(0,f.aY)(o).then(async()=>{window.Webamp&&!N.current&&(N.current=!0,g(t.current,await D()))})},[D,g,o,b]),(0,r.useEffect)(()=>{c!==m?(C(),y(c)):c&&(h(e,""),y(""))},[e,C,m,h,c]),(0,i.jsx)(s,{ref:t,$minimized:u,$zIndex:x,..._,...k})}},90194:(e,t,a)=>{a.d(t,{A:()=>u});var i=a(14232),n=a(41422),r=a(81855),o=a(55295),s=a(29804),l=a(16361);let u=e=>{let t=(0,n.A)(e),{setForegroundId:a,removeFromStack:u}=(0,o.w)(),{closeWithTransition:c,maximize:d,minimize:p}=(0,r.N)(),h=(0,s.w)(),m=(0,i.useCallback)(i=>{p(e),i||a(t)},[e,p,t,a]),w=(0,i.useCallback)(()=>{let t=()=>{d(e),a(e),h.current[e]?.componentWindow?.focus(l.VD)},[i]=h.current[e]?.componentWindow?.getAnimations()||[];i?.finished?i.finished.then(t):t()},[e,d,h,a]);return{onClose:(0,i.useCallback)(()=>{u(e),c(e),a(t)},[c,e,t,u,a]),onMaximize:w,onMinimize:m}}},92482:(e,t,a)=>{a.d(t,{Cg:()=>c,G9:()=>T,Lz:()=>w,OM:()=>f,Ol:()=>C,QP:()=>m,Zl:()=>_,b3:()=>x,bz:()=>p,createM3uPlaylist:()=>O,d7:()=>I,eu:()=>S,hN:()=>D,p3:()=>N,tracksFromPlaylist:()=>A,u7:()=>y,yK:()=>h});var i=a(74789),n=a(16361),r=a(60109);let o=new Set(["Flexi - alien fish pond","Geiss - Spiral Artifact"]),s=`${n.yZ}/Documents/Winamp Skins`,l=["localhost",n.sx.author.url.replace("https://","")].includes(window.location.hostname),u=e=>`
  query {
    skins(filter: APPROVED, first: 1, offset: ${e}) {
      nodes {
        download_url
      }
    }
  }
`,c={availableSkins:[{name:"Aqua X",url:`${s}/Aqua_X.wsz`},{name:"Nucleo NLog v2G",url:`${s}/Nucleo_NLog_v102.wsz`},...l?[{defaultName:"Random (Winamp Skin Museum)",loading:!1,get name(){if(this.loading)return this.defaultName;return this.loading=!0,fetch("https://api.webamp.org/graphql",{body:JSON.stringify({query:u(Math.floor(1e3*Math.random()))}),headers:{"Content-Type":"application/json"},method:"POST"}).then(async e=>{let{data:t}=await e.json()||{};this.skinUrl=t?.skins?.nodes?.[0]?.download_url,this.loading=!1}),this.defaultName},skinUrl:"",get url(){return this.skinUrl||`${s}/base-2.91.wsz`}}]:[],{name:"SpyAMP Professional Edition v5",url:`${s}/SpyAMP_Professional_Edition_v5.wsz`}]},d={height:116,width:275},p="#main-window",h="#playlist-window",m=(e,t="")=>e.skinIsLoaded().then(()=>{t&&(0,r.E)(t)}),w=e=>e.store.dispatch({type:"CLOSE_WINDOW",windowId:"equalizer"}),f=e=>e.store.dispatch({open:!1,type:"ENABLE_MILKDROP"}),y=(e,t)=>e.store.dispatch({data:t,type:"SET_SKIN_DATA"}),g=(e,t)=>e.store.dispatch({butterchurn:t,type:"GOT_BUTTERCHURN"}),b=(e,t)=>e.store.dispatch({presets:t,type:"GOT_BUTTERCHURN_PRESETS"}),E=e=>{let{presetHistory:t=[],presets:a=[]}=e.store.getState()?.milkdrop||{},i=Math.floor(Math.random()*a.length),n=a[i];return!n.name||o.has(n.name)||t.slice(-5).includes(i)?E(e):i},S=e=>{let t=E(e);e.store.dispatch({addToHistory:!0,index:t,type:"PRESET_REQUESTED"}),e.store.dispatch({index:t,type:"SELECT_PRESET_AT_INDEX"})},v=0,k=e=>{window.clearInterval(v),v=window.setInterval(()=>{e||window.clearInterval(v),S(e)},2e4)},T=e=>{let t=e.store.subscribe(()=>{let{milkdrop:i,windows:n}=e.store.getState();n?.genWindows?.milkdrop?.open&&!i?.butterchurn&&(0,r.aY)(["/Program Files/Webamp/butterchurn.min.js"]).then(()=>{if(!window.butterchurn?.default)return;g(e,window.butterchurn.default);let{playlist:i,main:r}=n.genWindows||{},{x:o=0,y:s=0}=(i?.open?i?.position:r?.position)||{};e.store.dispatch({positions:{milkdrop:{x:o,y:s+d.height}},type:"UPDATE_WINDOW_POSITIONS"}),t(),e.store.subscribe(()=>{let e=[...document.body.children].find(e=>e.classList?.contains("webamp-desktop"));if(e){let t=document.querySelector("main");t&&([...t.children].forEach(e=>{e.classList?.contains("webamp-desktop")&&e.remove()}),t.append(e))}}),a.e(2756,"high").then(a.t.bind(a,2354,23)).then(({default:t})=>{b(e,Object.entries(t).map(([e,t])=>({name:e,preset:t}))),S(e),k(e)})})})},x=()=>document.querySelector("#webamp"),_=(e,t)=>{let{height:a,width:n}=d,{x:r,y:o}=t||(0,i.r_)({height:2*a,width:n});e.store.dispatch({positions:{main:{x:r,y:o},milkdrop:{x:0-n,y:0-a},playlist:{x:r,y:a+o}},type:"UPDATE_WINDOW_POSITIONS"})},D=(e,t)=>e.store.dispatch({type:"SET_FOCUSED_WINDOW",window:t}),C=e=>e.store.dispatch({type:"SET_FOCUSED_WINDOW",window:""}),N=async(e,t)=>{let{parseBuffer:i}=await Promise.all([a.e(6447,"high"),a.e(2033,"high"),a.e(4147,"high")]).then(a.bind(a,62033)),{common:{album:o="",artist:s="",title:l=t},format:{duration:u=0}}=await i(e,{mimeType:n.fq,size:e.length},{duration:!0,skipCovers:!0,skipPostHeaders:!0});return{blob:(0,r.vJ)(e,"audio/mpeg"),duration:Math.floor(u),metaData:{album:o,artist:s,title:l}}},O=e=>{let t=e.map(e=>{let t=e.url?`
${e.url.toString()}`:"",a=e.defaultName;return e.metaData?.artist?e.metaData?.title?a=`${e.metaData.artist} - ${e.metaData.title}`:a&&(a=`${e.metaData.artist} - ${a}`):e.metaData?.title&&(a=e.metaData.title),t?`#EXTINF:${e.duration??-1},${a||""}${t}`:""});return`${["#EXTM3U",...t.filter(Boolean)].join("\n")}
`},A=async(e,t,i)=>{let{ASX:n,M3U:r,PLS:o}=await a.e(1126,"high").then(a.t.bind(a,11126,23));return(({".asx":n,".m3u":r,".pls":o})[t]?.parse(e).filter(Boolean).slice(0,1e3)??[]).map(({artist:e="",file:t="",length:a=0,title:n=""})=>{let[r,o]=[e.trim(),n.trim()];return{duration:Math.max(a,0),metaData:{album:o||i,artist:r,title:o},url:t}})},W=(e="")=>e.replace(/<!\[CDATA\[|\]\]>/g,""),L={"somafm.com":e=>async()=>{let{pathname:t}=new URL(e),[a]=t.replace("/","").split("-"),i=await (await fetch(`https://somafm.com/songs/${a}.xml`,{cache:"no-cache",credentials:"omit",keepalive:!1,mode:"cors",referrerPolicy:"no-referrer",window:null})).text(),n=new DOMParser().parseFromString(i,"application/xml").querySelector("song"),r=n?.querySelector("artist")?.innerHTML,o=n?.querySelector("title")?.innerHTML;return{artist:W(r),title:W(o)}}},I=e=>{let{host:t}=new URL(e),[,a,i]=t.split(".");return L[`${a}.${i}`]?.(e)}}}]);