"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[386],{2435:(e,t,r)=>{r.d(t,{A:()=>l});var i=r(14232),o=r(81855),n=r(91372),a=r(16361);let l=e=>{let{title:t}=(0,o.N)(),[r]=(0,i.useMemo)(()=>e.split(a.QB),[e]),{title:l}=n.A[r]||{};return{appendFileToTitle:(0,i.useCallback)((r,i)=>{let o=r?` - ${r}${i?` ${a.g6}`:""}`:"";t(e,`${l}${o}`)},[e,l,t]),prependFileToTitle:(0,i.useCallback)((r,i,o)=>{let n=r?`${i?`${a.g6} `:""}${r}${o?" ":" - "}`:"";t(e,`${n}${l}`)},[e,l,t])}}},20386:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var i=r(37876);let o=r(77232).Ay.div.withConfig({componentId:"sc-87f6532d-0"})(['display:flex;height:100%;width:100%;.video-js{height:100%;width:100%;.vjs-big-play-button{display:none;}.vjs-control-bar{background-color:rgb(240 240 240);padding:0 1px;z-index:9999;&:not(.no-interaction){display:flex !important;opacity:100% !important;}.no-interaction{display:none !important;opacity:0% !important;pointer-events:none !important;}}&.vjs-youtube,&.vjs-fullscreen.vjs-user-inactive{.vjs-control-bar{opacity:0% !important;}}.vjs-button{color:rgb(116 116 116);height:28px;position:relative;width:28px;z-index:0;&::after{background-color:rgb(225 225 225);border:1px solid rgb(173 173 173);content:"";height:calc(100% - 4px);left:0;margin:2px 0 0 2px;position:absolute;top:1px;width:calc(100% - 4px);z-index:-1;}&:hover{&::after{background-color:rgb(229 241 251);border-color:rgb(0 120 215);}}&:active{&::after{background-color:rgb(204 228 247);border-color:rgb(0 84 153);}}}.vjs-current-time,.vjs-duration{display:block;}.vjs-current-time{padding-left:8px;padding-right:2px;}.vjs-duration{padding-left:2px;padding-right:8px;}.vjs-current-time-display,.vjs-duration-display{color:#000;font-family:sans-serif;font-size:11px;}.vjs-picture-in-picture-control{margin:0 -2px;}.vjs-load-progress{border-radius:5px;div{background:linear-gradient( 180deg,rgb(189 189 189) 0%,rgb(219 219 219) 100% );border-radius:5px;}}.vjs-play-progress{background:linear-gradient( 180deg,rgb(44 137 224) 0%,rgb(40 125 204) 100% );border-radius:5px;&::before{color:rgb(237 237 237);text-shadow:1px 2px 3px rgb(160 160 160);-webkit-text-stroke:1px rgb(164 164 164 / 80%);top:1px;}}.vjs-progress-holder{border-radius:5px;font-size:1.7em !important;height:9px;}.vjs-volume-control{background-color:rgb(240 240 240);border-radius:5px 5px 0 0;left:-28px !important;position:relative;.vjs-volume-bar{height:5.5em;margin:1.5em auto;}.vjs-volume-level{background:linear-gradient( 180deg,rgb(247 76 100) 0%,rgb(125 210 125) 50% );border-radius:5px;color:rgb(237 237 237);font-size:1.5em;text-shadow:1px 2px 3px rgb(160 160 160);-webkit-text-stroke:1px rgb(164 164 164 / 80%);}}.vjs-volume-panel{width:28px !important;}.vjs-fullscreen-control,.vjs-play-control{.vjs-icon-placeholder{&::before{font-size:2.4em;top:-5px;}}&.vjs-ended{.vjs-icon-placeholder{&::before{font-size:2.3em;top:-3px;}}}}.vjs-poster{background-size:contain;}video{background-image:url("/System/Icons/48x48/vlc.webp");background-position:center calc(50% - 15px);background-repeat:no-repeat;padding-bottom:',"px;}}canvas{height:calc(100% - ","px);object-fit:contain;position:absolute;visibility:hidden;width:100%;}"],30,30);var n=r(79052),a=r(14232),l=r(16361);let s="video/youtube",c={1:4,2:2,3:1,4:.5},d={autoplay:!0,controlBar:{children:["playToggle","currentTimeDisplay","progressControl","durationDisplay","volumePanel","pictureInPictureToggle","fullscreenToggle"],volumePanel:{inline:!1}},inactivityTimeout:l.iC,preload:"auto",youtube:{enablePrivacyEnhancedMode:!0,ytControls:2}},u=[360,640],p=[480,854],g={auto:u,hd1080:[1080,1920],hd1440:[1440,2560],hd2160:[2160,3840],hd720:[720,1280],highres:p,large:p,medium:u,small:[240,426],tiny:[144,256]};var h=r(2435),b=r(67718),m=r(65231),v=r(81855),f=r(60109),x=r(54239);let y=({containerRef:e,id:t,loading:r,setLoading:i,url:o})=>{let{addFile:p,createPath:y,readFile:w,updateFolder:k}=(0,m.f)(),{argument:j,linkElement:T,processes:{[t]:{closing:B=!1,componentWindow:A,libs:E=[]}={}},url:C}=(0,v.N)(),{updateWindowSize:M}=(0,b.A)(t),[z,R]=(0,a.useState)(),[L,$]=(0,a.useState)(),{prependFileToTitle:N}=(0,h.A)(t),P=(0,a.useCallback)(()=>{let{src:e=[]}=z?.getMedia()||{};if(Array.isArray(e)&&e.length>0){let[{src:t,url:r}]=e;t.startsWith("blob:")&&(r!==o||B)&&(0,f.E)(t)}},[B,z,o]),_=(0,a.useMemo)(()=>(0,f.t$)(o),[o]),D=(0,a.useCallback)(async()=>{P();let e=_?s:(0,f.hH)(o)||l.dU;e.startsWith("audio")&&(e=l.dU);let t=_?void 0:await w(o),r=_?o:(0,f.Zd)(t,(0,f.nr)()?e:void 0);return{buffer:t,src:r,type:e,url:o}},[P,_,w,o]),H=(0,a.useRef)(!1),S=(0,a.useRef)(!1),I=(0,a.useRef)(void 0),W=(0,a.useRef)(""),F=(0,a.useCallback)((r,i)=>{r||I.current?.exit?.();let o=e.current?.querySelector("video"),n=e.current?.querySelector("canvas");o&&(o.style.visibility=r?"hidden":"visible"),n&&(n.style.visibility=r?"visible":"hidden"),i&&(i.reset(),r?(i.controlBar.playToggle.hide(),i.controlBar.pictureInPictureToggle.hide(),i.controlBar.fullscreenToggle.hide()):(i.controlBar.playToggle.show(),i.controlBar.pictureInPictureToggle.show(),i.controlBar.fullscreenToggle.show()),j(t,"play",!r&&(()=>i.play())),j(t,"pause",!r&&(()=>i.pause()))),T(t,"peekElement",r?n:_?e.current:o)},[j,e,t,_,T]),O=(0,a.useCallback)(()=>{if(S.current)return;S.current=!0;let[r,a]=e.current?.childNodes??[],s=window.videojs(r,d,()=>{s.on(_?"play":"canplay",()=>{if(H.current)return;H.current=!0;let{ytPlayer:e}=s.tech_||{};e&&$(e);let[t,r]=e?g[e.getPlaybackQuality()]||u:[s.videoHeight(),s.videoWidth()],[i,o]=[(0,f.Bv)(),(0,f.e8)()];if(t&&r){let n=t+30*!e;n>i||r>o?M(Math.floor(n/r*o),Math.min(r,o)):M(n,r)}});let d=()=>{try{s.isFullscreen()?s.exitFullscreen():s.requestFullscreen()}catch{}},h=()=>{let{playToggle:e}=s.controlBar,r=()=>{let i=()=>e.off("click",r);if(s.currentSrc())return void i();p(l.Bn,async(e,r)=>{i();let o=await y(e,l.Bn,r);return C(t,(0,n.join)(l.Bn,o)),k(l.Bn,o),o},"audio/*,video/*,.mkv",!1)};e.on("click",r)},b=async({target:e,type:t}={})=>{let r=e?.player.error();if(W.current!==o&&"error"===t&&[MediaError.MEDIA_ERR_DECODE,MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED].includes(r?.code)){F(!0,e?.player),await (0,f.aY)(["/Program Files/codecbox.js/codecbox_init.js"],!1,!0);let{buffer:t}=await D();I.current=window.initCodecBox?.({canvas:a,file:new File([t],(0,n.basename)(o)),onDecoding:t=>{Number.isNaN(t)||(e?.player?.tech_?.stopTrackingCurrentTime(),e?.player?.tech_?.setCurrentTime(t))},onError:()=>{W.current=o,F(!1,e?.player),r&&e?.player?.error(r)},onPlay:({duration:t})=>{e?.player?.duration(t),e?.player?.trigger("play"),e?.player?.trigger("playing"),requestAnimationFrame(()=>{let{height:e,width:t}=a;M(e+30,t)})}})}else h()};s.on("error",b),s.on("volumechange",()=>I.current?.volume?.(s.muted()?0:s.volume())),o||h(),r.addEventListener("dblclick",d),e.current?.addEventListener("mousewheel",e=>{s.volume(s.volume()+(e.deltaY>0?-.1:.1))},{passive:!0}),e.current?.closest("section")?.addEventListener("keydown",({key:e,altKey:t,ctrlKey:r})=>{if(t)c[e]?M(s.videoHeight()/c[e],s.videoWidth()/c[e]):"Enter"===e&&d();else if(!r)switch(e){case" ":s.paused()?s.play():s.pause();break;case"ArrowUp":s.volume(s.volume()+.1);break;case"ArrowDown":s.volume(s.volume()-.1);break;case"ArrowLeft":s.currentTime(s.currentTime()-10);break;case"ArrowRight":s.currentTime(s.currentTime()+10)}}),R(s),i(!1),_||T(t,"peekElement",r),s.on("pause",()=>j(t,"paused",!0)),s.on("play",()=>j(t,"paused",!1))})},[p,j,F,e,y,D,t,_,T,i,C,k,M,o]),U=(0,a.useCallback)(t=>{let r=e.current?.querySelector(".vjs-control-bar");r instanceof HTMLElement&&(t===s?r.classList.add("no-interaction"):r.classList.remove("no-interaction"))},[e]),Q=(0,a.useCallback)(async()=>{if(F(!1,z),z&&o)try{let{buffer:r,...i}=await D();H.current=!1,z.poster(""),z.src(i),U(i.type),N(_?L?.videoTitle||"YouTube":(0,n.basename)(o));let[a]=e.current?.childNodes??[];if(T(t,"peekElement",_?A:a),j(t,"peekImage",""),r){let e=(0,f.uQ)(i.url);(".mp3"===e||l.Rx.has(e))&&(0,x.Hi)(i.url,r).then(e=>{if(e){let r=(0,f.Zd)(e);z.poster(r),j(t,"peekImage",r)}})}}catch{}},[j,F,A,e,D,t,_,T,U,z,N,o,L]);(0,a.useEffect)(()=>{if(r&&!z){let e=()=>{let e="function"==typeof window.videojs;return e&&O(),e};e()||(0,f.aY)(E).then(e)}return()=>{B&&(I.current?.exit?.(),P(),z?.dispose())}},[P,B,E,O,r,z]),(0,a.useEffect)(()=>{!r&&!B&&z&&o&&Q()},[B,Q,r,z,o])};var w=r(35144);let k=({id:e})=>(0,i.jsxs)(w.A,{StyledComponent:o,id:e,useHook:y,children:[(0,i.jsx)("video",{className:"video-js vjs-big-play-centered",id:e,autoPlay:!0}),(0,i.jsx)("canvas",{id:`${e}_canvas`})]})},34901:(e,t,r)=>{r.d(t,{Ay:()=>l,EX:()=>o,Ho:()=>i,WB:()=>n,lH:()=>a});let i={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},o={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},n=30,a=166,l={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${n}px`,minWidth:`${a}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}}},35144:(e,t,r)=>{r.d(t,{A:()=>d});var i=r(37876),o=r(14232),n=r(77232),a=r(43010),l=r(78011),s=r(81855);let c=n.Ay.div.withConfig({componentId:"sc-5da8521e-0"})([""]),d=(0,o.memo)(({id:e,useHook:t,StyledComponent:r,children:n})=>{let{processes:{[e]:{url:d=""}={}}}=(0,s.N)(),u=(0,o.useRef)(null),[p,g]=(0,o.useState)(!0),h=(0,o.useMemo)(()=>({contain:"strict",visibility:p?"hidden":"visible"}),[p]);return t({containerRef:u,id:e,loading:p,setLoading:g,url:d}),(0,i.jsxs)(i.Fragment,{children:[p&&(0,i.jsx)(a.A,{}),(0,i.jsx)(r||c,{ref:u,style:h,...(0,l.A)({id:e}),children:n})]})})},43010:(e,t,r)=>{r.d(t,{A:()=>i});let i=r(77232).Ay.div.withConfig({componentId:"sc-29e5eb62-0"})(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}'])},67718:(e,t,r)=>{r.d(t,{A:()=>s});var i=r(77232),o=r(14232),n=r(74789),a=r(81855),l=r(55295);let s=e=>{let{setWindowStates:t}=(0,l.w)(),{processes:{[e]:{lockAspectRatio:r=!1,maximized:s=!1}={}}={}}=(0,a.N)(),{sizes:{titleBar:c}}=(0,i.DP)();return{updateWindowSize:(0,o.useCallback)((i,o)=>t(t=>({...t,[e]:{...t?.[e],maximized:s,size:(0,n.WZ)({height:i+c.height,width:o},r)}})),[e,r,s,t,c.height])}}},74789:(e,t,r)=>{r.d(t,{Gn:()=>a,Ve:()=>c,WZ:()=>d,Xc:()=>s,r_:()=>l});var i=r(34901),o=r(16361),n=r(60109);let a=(e,t,r=[],i=0)=>{let[a]=e.split(o.QB),l=`${a}${o.QB}`,s=r.find(e=>e.startsWith(l))||"",{componentWindow:c}=t?.[s]||{},{x:d=0,y:u=0,width:p=0,height:g=0}=c?.getBoundingClientRect()||{};return!(d+i+p>(0,n.e8)()||u+i+g>(0,n.Bv)())&&(d||u)?{x:d+i,y:u+i}:void 0},l=({height:e,width:t})=>{let[r,i]=[(0,n.Bv)(),(0,n.e8)()];return{x:Math.floor(i/2-(0,n.kl)(t)/2),y:Math.floor((r-o.D5)/2-(0,n.kl)(e)/2)}},s={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},c=(e,t,r=!1)=>{let{position:i,size:o}=e||{},{x:a=0,y:l=0}=i||{},{height:c=0,width:d=0}=o||{};return r?a+s.RIGHT>t.x||a+(0,n.kl)(d)-s.LEFT<0||l+s.BOTTOM>t.y||l+s.TOP<0:a<0||l<0||a+(0,n.kl)(d)>t.x||l+(0,n.kl)(c)>t.y},d=(e,t)=>{let r=Number(e.height),a=Number(e.width),[l,s]=[(0,n.Bv)(),(0,n.e8)()],c=l-o.D5,d=Math.max(i.WB,Math.min(r,c)),u=Math.max(i.lH,Math.min(a,s));if(!t)return{height:d,width:u};let p=r===d,g=a===u;return p||g?p?g?{height:d,width:u}:{height:Math.round(d/(a/u)),width:u}:{height:d,width:Math.round(u/(r/d))}:r>a?{height:d,width:Math.round(u/(c/d))}:{height:Math.round(d/(s/u)),width:u}}},78011:(e,t,r)=>{r.d(t,{A:()=>h});var i=r(79052),o=r(14232),n=r(49697),a=r(84966),l=r(54188),s=r(65231),c=r(81855),d=r(55295),u=r(16361),p=r(60109),g=r(29804);let h=({callback:e,directory:t=u.Bn,id:r,onDragLeave:h,onDragOver:b,updatePositions:m})=>{let{url:v}=(0,c.N)(),f=(0,g.w)(),{iconPositions:x,sortOrders:y,setIconPositions:w}=(0,d.w)(),{exists:k,mkdirRecursive:j,updateFolder:T,writeFile:B}=(0,s.f)(),A=(0,o.useCallback)(async(e,t,o)=>{if(r)if(t){let n=(0,i.join)(u.Bn,e);if(await j(u.Bn),await B(n,t,!0))return o===l.z.UPDATE_URL&&v(r,n),T(u.Bn,e),(0,i.basename)(n)}else o===l.z.UPDATE_URL&&v(r,e);return""},[r,j,T,v,B]),{openTransferDialog:E}=(0,n.A)();return{onDragLeave:h,onDragOver:(0,o.useCallback)(e=>{b?.(e),(0,p.CH)(e)},[b]),onDrop:(0,o.useCallback)(o=>{if(u.jj.has((0,p.uQ)(t)))return;if(o.target instanceof HTMLElement){if(o.target.closest(".focus-within")?.contains(o.target))return;if(m){let{files:e,text:r}=(0,a.bn)(o);if(0===e.length&&""===r)return;(async()=>{let n={x:o.clientX,y:o.clientY},a=[];if(r){try{a=JSON.parse(r)}catch{}if(!Array.isArray(a))return;let[e]=a;if(!e||e.startsWith(t)&&(0,i.basename)(e)===(0,i.relative)(t,e))return;a=a.map(e=>(0,i.basename)(e))}else a=e instanceof FileList?[...e].map(e=>e.name):[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);a=await (0,p.$I)(a,t,x,k),(0,p.$Y)(t,o.target,x,y,n,a,w,k)})()}}let n="string"==typeof r;n&&!m&&t===u.Bn&&f.current[r]?.componentWindow?.focus(u.VD),(0,a.nX)(o,e||A,t,E,n)},[e,t,k,x,r,E,f,w,y,m,A])}}}}]);