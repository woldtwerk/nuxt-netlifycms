import{w as D,f as T,j as R,i as V,a as p,k as b,l as $,m as j,p as h,T as S,r as s,q as P,s as k,t as O,v as g,h as m,F as E,x as C,y as L,d as r,_ as a,z as w,A as x,B as z,C as M,b as N,D as B}from"./entry.772d1043.js";import"./ContentList.e3eed659.js";import"./ContentSlot.43dde66c.js";import"./DocumentDrivenEmpty.6f9bde9d.js";import"./DocumentDrivenNotFound.83c7a6cd.js";import"./Markdown.0f856dc3.js";import"./ProseCode.9a1022e1.js";const q=t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const o=D(e?`/navigation/${T(e)}.json`:"/navigation");return $fetch(o,{method:"GET",responseType:"json",params:{_params:R(e||{}),previewToken:V("previewToken").value}})};const c={},F=p({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const o=b();return()=>{var l,_,d;const n=(_=(l=$(t.name)?t.name.value:t.name)!=null?l:o.meta.layout)!=null?_:"default",u=n&&n in c,i=(d=o.meta.layoutTransition)!=null?d:j;return h(S,u&&i,{default:()=>h(c[n],u,e.slots).default()}).default()}}}),W=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),G=p({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const n=s(null),u=P();return k(i=>{if(!u.isHydrating)return o("error",i),n.value=i,!1}),()=>{var i,l;return n.value?(i=e.error)==null?void 0:i.call(e,{error:n}):(l=e.default)==null?void 0:l.call(e)}}}),H=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"})),U=p({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e}){const o=s(!1);return O(()=>{o.value=!0}),n=>{var _;if(o.value)return(_=e.default)==null?void 0:_.call(e);const u=e.fallback||e.placeholder;if(u)return u();const i=n.fallback||n.placeholder||"",l=n.fallbackTag||n.placeholderTag||"span";return g(l,null,i)}}}),f=new WeakMap;function X(t){if(f.has(t))return f.get(t);const e={...t};return e.render?e.render=(o,...n)=>{var u,i;return o.mounted$?m(E,(u=o.$attrs)!=null?u:o._.attrs,t.render(o,...n)):m("div",(i=o.$attrs)!=null?i:o._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(o,n)=>{var i;const u=s(!1);return O(()=>{u.value=!0}),Promise.resolve(((i=t.setup)==null?void 0:i.call(t,o,n))||{}).then(l=>typeof l!="function"?{...l,mounted$:u}:(..._)=>u.value?m(E,n.attrs,l(..._)):m("div",n.attrs))},f.set(t,e),e}const Y=Object.freeze(Object.defineProperty({__proto__:null,default:U,createClientOnly:X},Symbol.toStringTag,{value:"Module"})),Z=p({name:"ServerPlaceholder",render(){return g("div")}}),J=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),K=p({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t){const e=Q({duration:t.duration,throttle:t.throttle}),o=P();return o.hook("page:start",e.start),o.hook("page:finish",e.finish),C(()=>e.clear),()=>m("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${e.progress.value}%`,height:`${t.height}px`,opacity:e.isLoading.value?1:0,background:t.color,backgroundSize:`${100/e.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}})}});function Q(t){const e=s(0),o=s(!1),n=L(()=>1e4/t.duration);let u=null,i=null;function l(){d(),e.value=0,o.value=!0,t.throttle?i=setTimeout(v,t.throttle):v()}function _(){e.value=100,I()}function d(){clearInterval(u),clearTimeout(i),u=null,i=null}function y(A){e.value=Math.min(100,e.value+A)}function I(){d(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function v(){u=setInterval(()=>{y(n.value)},100)}return{progress:e,isLoading:o,start:l,finish:_,clear:d}}const tt=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));r(()=>a(()=>import("./entry.772d1043.js").then(t=>t.$),[],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ContentList.e3eed659.js"),["ContentList.e3eed659.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>rt),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.772d1043.js").then(t=>t.Z),[],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.772d1043.js").then(t=>t.Y),[],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.772d1043.js").then(t=>t.X),[],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ContentSlot.43dde66c.js"),["ContentSlot.43dde66c.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./DocumentDrivenEmpty.6f9bde9d.js"),["DocumentDrivenEmpty.6f9bde9d.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./DocumentDrivenNotFound.83c7a6cd.js"),["DocumentDrivenNotFound.83c7a6cd.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./Markdown.0f856dc3.js"),["Markdown.0f856dc3.js","ContentSlot.43dde66c.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseA.ebbea601.js"),["ProseA.ebbea601.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseBlockquote.5cbad39f.js"),["ProseBlockquote.5cbad39f.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseCode.9a1022e1.js"),["ProseCode.9a1022e1.js","ProseCode.e63e49c6.css","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseCodeInline.be468b6b.js"),["ProseCodeInline.be468b6b.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseEm.014baa68.js"),["ProseEm.014baa68.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH1.56c7a75b.js"),["ProseH1.56c7a75b.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH2.e355b505.js"),["ProseH2.e355b505.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH3.090339bd.js"),["ProseH3.090339bd.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH4.264ed9d6.js"),["ProseH4.264ed9d6.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH5.3143078e.js"),["ProseH5.3143078e.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH6.9ae2be5a.js"),["ProseH6.9ae2be5a.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseHr.c8f40bd6.js"),["ProseHr.c8f40bd6.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseImg.a2a6fcab.js"),["ProseImg.a2a6fcab.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseLi.78425b59.js"),["ProseLi.78425b59.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseOl.9a383f55.js"),["ProseOl.9a383f55.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseP.6dbb82cf.js"),["ProseP.6dbb82cf.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseStrong.2d995878.js"),["ProseStrong.2d995878.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTable.7cf099bd.js"),["ProseTable.7cf099bd.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTbody.186b145a.js"),["ProseTbody.186b145a.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTd.5a107b1b.js"),["ProseTd.5a107b1b.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTh.f4097db2.js"),["ProseTh.f4097db2.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseThead.0a839f1e.js"),["ProseThead.0a839f1e.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTr.170b6721.js"),["ProseTr.170b6721.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseUl.8ec344a3.js"),["ProseUl.8ec344a3.js","entry.772d1043.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./welcome.d8945229.js"),["welcome.d8945229.js","entry.772d1043.js","ContentList.e3eed659.js","ContentSlot.43dde66c.js","DocumentDrivenEmpty.6f9bde9d.js","DocumentDrivenNotFound.83c7a6cd.js","Markdown.0f856dc3.js","ProseCode.9a1022e1.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>W),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>H),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>J),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.772d1043.js").then(t=>t.W),[],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));const et=p({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=w(t),o=L(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!o.value&&x("dd-navigation").value){const{navigation:u}=z();return{navigation:u}}const{data:n}=await M(`content-navigation-${T(o.value)}`,()=>q(o.value));return{navigation:n}},render(t){const e=N(),{navigation:o}=t,n=l=>m(B,{to:l._path},()=>l.title),u=(l,_)=>m("ul",_?{"data-level":_}:null,l.map(d=>d.children?m("li",null,[n(d),u(d.children,_+1)]):m("li",null,n(d)))),i=l=>u(l,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):i(o)}}),rt=Object.freeze(Object.defineProperty({__proto__:null,default:et},Symbol.toStringTag,{value:"Module"}));export{et as default};
