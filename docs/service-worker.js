if(!self.define){let e,r={};const i=(i,n)=>(i=new URL(i+".js",n).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let s={};const l=e=>i(e,o),c={module:{uri:o},exports:s,require:l};r[o]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(t(...e),s)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"99f28ec3c804641d3d5c.hdr",revision:null},{url:"app.bundle.js",revision:"6ab7b01e08cf9d654493ad32cfa7c7dd"},{url:"app.bundle.js.LICENSE.txt",revision:"ffcfbba0005029f46f027982065089e6"},{url:"ffea154673ade6cc8206.glb",revision:null},{url:"index.html",revision:"2a861bd9af09359b5e0adc6930329af2"}],{})}));