"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7662],{87662:(a,e,i)=>{i.r(e),i.d(e,{convert:()=>s});var n=i(79052),m=i(60109);let s=async(a,e,i)=>{let s=[];await (0,m.aY)(["/Program Files/imagemagick/wasm-imagemagick.umd-es5.min.js"],!1,!0);let{call:t}=window["wasm-imagemagick"]||{};return t&&await Promise.all(a.map(async([a,r])=>{let c=(0,n.basename)(a),l=`${(0,n.basename)(a,(0,n.extname)(a))}.${e}`,{outputFiles:[o]=[],stderr:w,stdout:u}=await t([{content:r,name:c}],["convert",c,"-verbose",l]),b=[...u,...w].join("\n");b&&i?.(b),s.push([(0,n.join)((0,n.dirname)(a),l),await (0,m.Z6)(o?.blob)])})),s}}}]);