"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9868],{97487:(e,t,r)=>{r.d(t,{decodeImageToBuffer:()=>p,getFirstAniImage:()=>f,getLargestIcon:()=>m});var a=r(16361),n=r(82909).Buffer;function s(e,t=[]){let{length:r}=t,a=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)].concat(t);return[r>>24&255,r>>16&255,r>>8&255,255&r].concat(a,function(e){let t=[],r=0;for(let e=0;e<256;++e)r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=e)?0xedb88320^r>>>1:r>>>1)?0xedb88320^r>>>1:r>>>1)?0xedb88320^r>>>1:r>>>1)?0xedb88320^r>>>1:r>>>1)?0xedb88320^r>>>1:r>>>1)?0xedb88320^r>>>1:r>>>1)?0xedb88320^r>>>1:r>>>1)?0xedb88320^r>>>1:r>>>1,t[e]=r;for(let a of(r=-1,e))r=r>>>8^t[(r^a)&255];return[(r^=-1)>>24&255,r>>16&255,r>>8&255,255&r]}(a))}let i=e=>n.from(new Uint8Array(function(e){if(e.length<22||113!==e[0]||111!==e[1]||105!==e[2]||102!==e[3])return;let t=e[4]<<24|e[5]<<16|e[6]<<8|e[7],r=e[12],a=e[13];if(3!==r&&4!==r&&1!==a)return;let n=e.length-8,i=[],c=Array.from({length:64}).fill(0),u=255,h=14;for(;h<n;){let t=e[h],r=t>>6;if(255===t){let t=e[h+1],r=e[h+2],a=e[h+3],n=e[h+4];h+=5,u=t<<24|r<<16|a<<8|n,c[(3*t+5*r+7*a+11*n)%64]=u,i.push(u)}else if(254===t){let t=e[h+1],r=e[h+2],a=e[h+3],n=255&u;h+=4,u=t<<24|r<<16|a<<8|n,c[(3*t+5*r+7*a+11*n)%64]=u,i.push(u)}else if(0===r){if(0===e[h]&&0===e[h+1]&&0===e[h+2]&&0===e[h+3]&&0===e[h+4]&&0===e[h+5]&&0===e[h+6]&&1===e[h+7])break;h+=1,u=c[t],i.push(u)}else if(1===r){let e=(u>>24&255)+((t>>4&3)-2)&255,r=(u>>16&255)+((t>>2&3)-2)&255,a=(u>>8&255)+((3&t)-2)&255,n=255&u;h+=1,u=e<<24|r<<16|a<<8|n,c[(3*e+5*r+7*a+11*n)%64]=u,i.push(u)}else if(2===r){let r=e[h+1],a=(63&t)-32&255,n=(r>>4&15)-8+a&255,s=(15&r)-8+a&255,l=(u>>24&255)+n&255,o=(u>>16&255)+a&255,d=(u>>8&255)+s&255,f=255&u;h+=2,u=l<<24|o<<16|d<<8|f,c[(3*l+5*o+7*d+11*f)%64]=u,i.push(u)}else{for(let e=(63&t)+1;e>0;--e)i.push(u);h+=1}}return function(e,t,r){let a=[],n=[120,1],i=1+t*r,c=65535^i;for(let s=0;e.length!=s;s+=t){let u=s+t;n.push(+(u===e.length),255&i,i>>8&255,255&c,c>>8&255),a.push(1),n.push(0);for(let t=s;u!==t;++t){let s=e[t];a.push(s>>24&255),n.push(s>>24&255),a.push(s>>16&255),n.push(s>>16&255),a.push(s>>8&255),n.push(s>>8&255),4===r&&(a.push(255&s),n.push(255&s))}}let u=e.length/t;return[137,80,78,71,13,10,26,10].concat(s("IHDR",[t>>24&255,t>>16&255,t>>8&255,255&t,u>>24&255,u>>16&255,u>>8&255,255&u,8,3===r?2:6,0,0,0]),s("IDAT",n.concat(function(e){let t=0,r=0;for(let a of e)r=(r+(t=(t+a)%65521))%65521;return[r>>8,255&r,t>>8,255&t]}(a))),s("IEND"))}(i,t,r)}(new Uint8Array(e))));var c=r(60109),u=r(82909).Buffer;let h=async e=>{let t=document.createElement("img");return document.createElement("picture").append(Object.assign(document.createElement("source"),{srcset:"data:,x",type:e}),t),await new Promise(e=>{requestAnimationFrame(e)}),"string"==typeof t.currentSrc&&t.currentSrc.length>0},l=async e=>await h("image/jxl")?e:new Promise(t=>{let r=new Worker("System/JXL.js/jxl_dec.js",{name:"JXL.js"});r.postMessage({image:e,jxlSrc:"image.jxl"}),r.addEventListener("message",e=>{t((0,c.Jf)(e?.data?.imgData)),r.terminate()})}),o=async e=>await h("image/heic")?e:new Promise(t=>{let a=new Worker(r.tu(new URL(r.p+r.u(5296),r.b)),{name:"libheif"});a.postMessage(e),a.addEventListener("message",({data:e})=>{t((0,c.Jf)(e)),a.terminate()})}),d=async e=>{let t=await (0,c.iI)(),{parseAni:n}=await r.e(5162,"high").then(r.bind(r,35162)),s=[];try{({images:s}=n(e))}catch{return e}return await Promise.all(s.map(e=>new Promise(r=>{let n=new Image,s=(0,c.Zd)(u.from(e));t.setOptions({transparent:""}),n.addEventListener("load",()=>{t.addFrame(n),(0,c.E)(s),r()},a.w3),n.src=s}))),new Promise(e=>{t.on("finished",r=>{(0,c.Z6)(r).then(e),t.freeWorkers.forEach(e=>e?.terminate())}).render()})},f=async e=>{let t,{parseAni:a}=await r.e(5162,"high").then(r.bind(r,35162));try{return{images:[t]}=a(e),u.from(t)}catch{}},m=async(e,t)=>{try{let{default:a}=await r.e(5473,"high").then(r.t.bind(r,85473,23)),[n]=a(e).filter(({width:e})=>e<=t).sort((e,t)=>t.width-e.width),s=document.createElement("canvas"),i=s.getContext("2d",{desynchronized:!0});return s.width=n.width,s.height=n.height,i?.putImageData(n,0,0),s.toDataURL()}catch{return""}},g=async(e,t)=>new Promise(r=>{let n=new Image;n.addEventListener("load",()=>r(!0),a.w3),n.addEventListener("error",()=>r(!1),a.w3),n.src=(0,c.Zd)(t,(0,c.hH)("",e))}),p=async(e,t)=>{switch(e){case".jxl":return l(t);case".qoi":return i(t);case".ani":try{return await d(t)}catch{return f(t)}case".cur":return await g(e,t)?t:f(t);default:if(a.U7.has(e))return o(t);if(a.lp.has(e))return u.from((await r.e(1081,"high").then(r.t.bind(r,71081,23))).bufferToURI(t).replace("data:image/png;base64,",""),"base64")}return t}}}]);