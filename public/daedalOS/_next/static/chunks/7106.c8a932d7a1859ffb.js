"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5313,7106],{25313:(e,t,r)=>{r.d(t,{UNKNOWN_ICON:()=>i});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB0ElEQVR42u2ZVWLbQBiEp/K6DOpb+LF4ip47oCuULpAYH3uAlcbMNOZpm0lsizWz+/3CgEc9aiuFHz9/YYVIcjAAkODcYYDoTyPQHZse7m0E49tLkid/8rz4BuD7RgFIYpW+fvmMXStJEvz+/RuvXr1KG41mVhT5RiECRMUYsUuF0Nv18+fPcXp6ktbrjSzPhRBCDxxUpVKpG+Ls7DSt1eprhwjYWwAdJQD9EGftELV2iCiHCAQMAvT04sVznJ+fpdVqNcuj1hOBJj0wCvECFxcXaeWhIuEUYFADAGZCXF5dpg/3DxmA99YIZVmGRXr58lVqi1CMER8+fOh+pkUS5XIZd7d3ylEIViI5M7wCITqa1wOAtDVPKD1A45andC1ES/N6DZCuzKsIWZr3RoikMK4jZGleD2BsntDOA74tT0gIOZrXEfJmXiti24KleBi1M09SThBIU/P6mZiW5qEXMW3NUzuMGrc8NYRssSE0hFyZVxFyLVgdIcOW51oIWZqHfj9ga15+rOLb8lIRg47m9RoQ/R+eeb0GaGleR8i15XWEqL5VFIIJ87V5u70nvrm+AUF0/8nx4ZlxgOj+9KeTk+Oz8/rrYnIYBAoWeNSj9qwWS/T9vUU9j2EAAAAASUVORK5CYII="},27106:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var i=r(37876),s=r(14232),l=r(84788),n=r(39798),o=r(79052),u=r(14113),a=r(64148),c=r(81855);let d=e=>{let{contextMenu:t}=(0,a.b)(),{open:r}=(0,c.N)();return(0,s.useMemo)(()=>t?.(()=>[{SvgIcon:u.BG,action:()=>r("FileExplorer",{url:(0,o.dirname)(e)},""),label:"Open file location"}]),[t,r,e])};var p=r(54239),h=r(25313),A=r(96438),m=r(65231),g=r(55295),f=r(42670),v=r(16361),b=r(60109),j=r(50980),x=r(97246);let I={icon:h.UNKNOWN_ICON},E=({active:e,details:t,openApp:r,searchTerm:l,setActiveItem:n,url:a})=>{let{fs:c,readFile:h,stat:E}=(0,m.f)(),{updateRecentFiles:N}=(0,g.w)(),[S,C]=(0,s.useState)(),[O,w]=(0,s.useState)(I),R=(0,s.useMemo)(()=>(0,b.uQ)(O?.url||a),[O?.url,a]),M=(0,s.useMemo)(()=>(0,o.basename)(a,v.b3),[a]),D=(0,s.useMemo)(()=>{let e=M;try{e=e.replace(RegExp(`(${l})`,"i"),"<span>$1</span>")}catch{}return e},[M,l]),U=(0,s.useMemo)(()=>!!O?.url&&(0,b.t$)(O.url),[O?.url]),V=U?a:a||O?.url,y=(0,s.useMemo)(()=>S&&!S.isDirectory()?`Last modified: ${new Date((0,p.nR)(V,S)).toLocaleString(v.Xn,{dateStyle:"short",timeStyle:"short"})}`:"",[V,S]),[F,z]=(0,s.useState)(!1),W=(0,s.useRef)(null),Y=(0,j.K)(W,".list"),K=(0,s.useMemo)(()=>!!O?.pid&&a===O.url&&(0,b.uQ)(a)===v.b3,[O?.pid,O?.url,a]),k=(0,s.useMemo)(()=>S?.isDirectory()||!R&&!U,[R,U,S]),B=(0,s.useMemo)(()=>!!O?.url&&O.url.startsWith("nostr:"),[O?.url]),{onContextMenuCapture:L}=d(O?.url),Z=(0,s.useRef)(void 0);return(0,s.useEffect)(()=>{let e=t||F;!S&&e&&E(a).then(C),Z.current?Y||(Z.current.abort(),Z.current=void 0):(e||Y)&&O===I&&(Z.current=new AbortController,(0,A.cK)(c,a,Z.current.signal).then(e=>{e&&w(e),Z.current=void 0}))},[t,c,F,O,Y,E,S,a]),(0,s.useEffect)(()=>()=>{try{Z.current?.abort()}catch{}},[]),(0,i.jsxs)("li",{ref:W,"aria-label":M,className:e?"active-item":void 0,onMouseOver:()=>!t&&z(!0),title:y?`${V}

${y}`:V,children:[(0,i.jsxs)("figure",{className:t?void 0:"simple",onClick:async()=>{r(O?.pid,K?void 0:{url:(0,o.extname)(V)===v.b3&&(0,p.DB)(await h(V))?.url||V}),V&&O?.pid&&N(V,O?.pid)},onContextMenuCapture:U||B||K||k?void 0:L,children:[(0,i.jsx)(f.A,{displaySize:t?32:16,imgSize:t?32:16,src:O?.icon}),(0,i.jsx)(x.A,{alt:D,icon:O?.icon,imgSize:t?32:16,showShortcutIcon:!1,subIcons:O?.subIcons,view:"icon"}),(0,i.jsxs)("figcaption",{children:[(0,i.jsx)("h1",{dangerouslySetInnerHTML:{__html:D}}),t&&S&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:(0,A.$A)(S,R,U,K,B)}),!U&&!K&&!k&&(0,i.jsx)("h2",{children:y})]})]})]}),!e&&(0,i.jsx)("div",{className:"select",onClick:()=>n(a),children:(0,i.jsx)(u.UU,{})})]})},N=r(77232).Ay.figcaption.withConfig({componentId:"sc-7d9c1628-0"})(["font-size:13px;font-weight:600;padding-bottom:8px;padding-left:12px;padding-top:7px;&.disabled{pointer-events:none;user-select:none;}&:hover{background-color:rgb(60 60 60 / 95%);}"]),S=({activeTab:e,activeItem:t,details:r,openApp:o,results:u,searchTerm:a,setActiveItem:c,changeTab:d,title:p})=>{let h=(0,s.useMemo)(()=>1===u.length&&u[0].ref===n.NO_RESULTS,[u]);return 0===u.length?(0,i.jsx)(i.Fragment,{}):(0,i.jsxs)("figure",{children:[(0,i.jsx)(N,{className:e===p||"Best match"===p?"disabled":void 0,onClick:()=>d?.(p),children:p}),(0,i.jsx)("ol",{children:h?(0,i.jsxs)("li",{className:"no-results",children:[(0,i.jsx)(l.Search,{}),"No results found for '",a,"'"]}):u.map(({ref:e})=>(0,i.jsx)(E,{active:t===e,details:r,openApp:o,searchTerm:a,setActiveItem:c,url:e},e))})]})}},96438:(e,t,r)=>{r.d(t,{$A:()=>a,V0:()=>u,cK:()=>o});var i=r(79052),s=r(54239),l=r(16361),n=r(60109);let o=async(e,t,r)=>{if(!e)return;let{subIcons:o,icon:u,pid:a=l.hr[0],url:c}=await new Promise(r=>{e.lstat(t,(i,l)=>{let o=!i&&!!l&&l.isDirectory(),u=(0,n.uQ)(t);u&&!o?(0,s.O6)(e,t,u,e=>r(e)):(0,s.qz)(e,e.getRootFS(),t,o,!1,e=>r(e),!1)})});if(r?.aborted)return;let d=(0,n.t$)(c);return{icon:await (0,s.$j)(e,(0,i.join)(d?l.zP:l.jv,`${d?new URL(c).pathname.replace("/",""):c}${l.V9}`))||u,pid:a,subIcons:o?.includes(l.N9)?o:[],url:c||t}},u=(e,t)=>{let r=0===e.value.length,i=()=>{Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"value")?.set?.call(e,t),e.dispatchEvent(new Event("input",{bubbles:!0}))};i(),requestAnimationFrame(()=>r&&1===t.length&&2===e.value.length&&i())},a=(e,t,r,i,l)=>l?"Nostr URI":i?"App":r?"YouTube Video":e?.isDirectory()||!t?"File folder":(0,s.ti)(t)}}]);