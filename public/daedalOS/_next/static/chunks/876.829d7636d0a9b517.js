"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[876],{30876:(e,i,n)=>{n.d(i,{addEntryToZippable:()=>c,addFileToZip:()=>p,createZippable:()=>d,isFileInZip:()=>w,unarchive:()=>o,unzip:()=>l,zipAsync:()=>h});var t=n(79052),a=n(60109),r=n(16361),s=n(82909).Buffer;let d=(e,i)=>e.split("/").reduceRight((e,i)=>({[i]:e}),[i,r.X8]),c=(e,i)=>{let[[n,t]]=Object.entries(i);return e[n]=n in e?c(e[n],i[n]):t,e},l=e=>new Promise((i,t)=>{n.e(1071,"high").then(n.bind(n,21071)).then(({unzip:n})=>n(e,(e,n)=>e?t(e):i(n)))}),h=(e,i=r.X8)=>new Promise((t,a)=>{n.e(1071,"high").then(n.bind(n,21071)).then(({zip:n})=>n(e,i,(e,i)=>e?a(e):t(i)))}),p=async(e,i,n,t)=>s.from(await h(c(e.length>0&&await l(e)||{},d(n,await t(i))))),w=(e,i)=>new Promise((t,a)=>{n.e(1071,"high").then(n.bind(n,21071)).then(({unzip:n})=>n(e,(e,n)=>e?a(e):t(Object.keys(n).includes(i))))}),o=async(e,i)=>{if(window.SevenZip||await (0,a.aY)(["System/7zip/7zz.es6.js"]),!window.SevenZip)return{};let n=await window.SevenZip(),r=(0,t.basename)(e),d=(0,t.join)("/",(0,t.basename)(e,(0,t.extname)(e)));n.FS.mkdir(d),n.FS.chdir(d);let c=n.FS.open(r,"w+");n.FS.write(c,i,0,i.length),n.FS.close(c),n.callMain(["-y","x",r]);let l=n.FS.readdir(d),h=e=>(i,a)=>{if([".","..",r].includes(a))return i;let c=(0,t.join)(e,a),l=c.replace(d,"");try{n.FS.chmod(c,511)}catch{}return Object.assign(i,n.FS.isDir(n.FS.stat(c).mode)?{[(0,t.join)(l,"/")]:s.from(""),...n.FS.readdir(c).reduce(h(c),{})}:{[l]:n.FS.readFile(c,{flags:"r"})}),i};return l.reduce(h(d),{})}}}]);