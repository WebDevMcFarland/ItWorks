(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7867:function(e,n,t){Promise.resolve().then(t.bind(t,5220))},5220:function(e,n,t){"use strict";t.r(n),t.d(n,{WavyBackground:function(){return o}});var r=t(7437),i=t(3167),a=t(1367);function s(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.m6)((0,i.W)(n))}var c=t(2265),l=t(3181);let o=e=>{let n,t,i,a,o,u,f,{children:h,className:d,containerClassName:v,colors:w,waveWidth:g,backgroundFill:b,blur:m=10,speed:x="fast",waveOpacity:k=.5,...p}=e,y=(0,l.zz)(),A=(0,c.useRef)(null),N=()=>{switch(x){case"slow":default:return .001;case"fast":return .002}},_=()=>{n=(u=A.current.getContext("2d")).canvas.width=window.innerWidth,t=u.canvas.height=window.innerHeight,u.filter="blur(".concat(m,"px)"),i=0,window.onresize=function(){n=u.canvas.width=window.innerWidth,t=u.canvas.height=window.innerHeight,u.filter="blur(".concat(m,"px)")},W()},z=null!=w?w:["#38bdf8","#818cf8","#c084fc","#e879f9","#22d3ee"],E=e=>{for(i+=N(),a=0;a<e;a++){for(u.beginPath(),u.lineWidth=g||50,u.strokeStyle=z[a%z.length],o=0;o<n;o+=5){var r=100*y(o/800,.3*a,i);u.lineTo(o,r+.5*t)}u.stroke(),u.closePath()}},W=()=>{u.fillStyle=b||"black",u.globalAlpha=k||.5,u.fillRect(0,0,n,t),E(5),f=requestAnimationFrame(W)};(0,c.useEffect)(()=>(_(),()=>{cancelAnimationFrame(f)}),[]);let[j,C]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{C(navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"))},[]),(0,r.jsxs)("div",{className:s("h-screen flex flex-col items-center justify-center",v),children:[(0,r.jsx)("canvas",{className:"absolute inset-0 z-0",ref:A,id:"canvas",style:{...j?{filter:"blur(".concat(m,"px)")}:{}}}),(0,r.jsx)("div",{className:s("relative z-10",d),...p,children:h})]})}}},function(e){e.O(0,[226,971,69,744],function(){return e(e.s=7867)}),_N_E=e.O()}]);