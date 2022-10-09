import{w as D,j as c,k as R,l as V,a as p,m as b,p as $,q as j,s as h,T as S,v as s,x as P,y as k,z as O,b as g,h as m,F as E,A as C,B as L,d as r,_ as a,C as w,D as x,E as z,G as M,f as N,H as B}from"./entry.9e74ea60.js";import"./ContentList.1df9427a.js";import"./ContentSlot.79a5732a.js";import"./DocumentDrivenEmpty.f27721b4.js";import"./DocumentDrivenNotFound.b32a6d39.js";import"./Markdown.ea2ac2a5.js";import"./ProseCode.fb968261.js";const q=t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const o=D(e?`/navigation/${c(e)}.json`:"/navigation");return $fetch(o,{method:"GET",responseType:"json",params:{_params:R(e||{}),previewToken:V("previewToken").value}})};const T={},F=p({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const o=b();return()=>{var _,l,d;const n=(l=(_=$(t.name)?t.name.value:t.name)!=null?_:o.meta.layout)!=null?l:"default",u=n&&n in T,i=(d=o.meta.layoutTransition)!=null?d:j;return h(S,u&&i,{default:()=>h(T[n],u,e.slots).default()}).default()}}}),G=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),H=p({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const n=s(null),u=P();return k(i=>{if(!u.isHydrating)return o("error",i),n.value=i,!1}),()=>{var i,_;return n.value?(i=e.error)==null?void 0:i.call(e,{error:n}):(_=e.default)==null?void 0:_.call(e)}}}),W=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),U=p({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e}){const o=s(!1);return O(()=>{o.value=!0}),n=>{var l;if(o.value)return(l=e.default)==null?void 0:l.call(e);const u=e.fallback||e.placeholder;if(u)return u();const i=n.fallback||n.placeholder||"",_=n.fallbackTag||n.placeholderTag||"span";return g(_,null,i)}}}),f=new WeakMap;function X(t){if(f.has(t))return f.get(t);const e={...t};return e.render?e.render=(o,...n)=>{var u,i;return o.mounted$?m(E,(u=o.$attrs)!=null?u:o._.attrs,t.render(o,...n)):m("div",(i=o.$attrs)!=null?i:o._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(o,n)=>{var i;const u=s(!1);return O(()=>{u.value=!0}),Promise.resolve(((i=t.setup)==null?void 0:i.call(t,o,n))||{}).then(_=>typeof _!="function"?{..._,mounted$:u}:(...l)=>u.value?m(E,n.attrs,_(...l)):m("div",n.attrs))},f.set(t,e),e}const Y=Object.freeze(Object.defineProperty({__proto__:null,default:U,createClientOnly:X},Symbol.toStringTag,{value:"Module"})),Z=p({name:"ServerPlaceholder",render(){return g("div")}}),J=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),K=p({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t){const e=Q({duration:t.duration,throttle:t.throttle}),o=P();return o.hook("page:start",e.start),o.hook("page:finish",e.finish),C(()=>e.clear),()=>m("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${e.progress.value}%`,height:`${t.height}px`,opacity:e.isLoading.value?1:0,background:t.color,backgroundSize:`${100/e.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}})}});function Q(t){const e=s(0),o=s(!1),n=L(()=>1e4/t.duration);let u=null,i=null;function _(){d(),e.value=0,o.value=!0,t.throttle?i=setTimeout(v,t.throttle):v()}function l(){e.value=100,y()}function d(){clearInterval(u),clearTimeout(i),u=null,i=null}function I(A){e.value=Math.min(100,e.value+A)}function y(){d(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function v(){u=setInterval(()=>{I(n.value)},100)}return{progress:e,isLoading:o,start:_,finish:l,clear:d}}const tt=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));r(()=>a(()=>import("./Card.a5d2dc23.js"),["Card.a5d2dc23.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./card.0784d01d.js").then(t=>t._),[],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./collapsible-note.6ddb20ec.js").then(t=>t._),[],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.9e74ea60.js").then(t=>t.$),[],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ContentList.1df9427a.js"),["ContentList.1df9427a.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>rt),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.9e74ea60.js").then(t=>t.Z),[],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.9e74ea60.js").then(t=>t.Y),[],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.9e74ea60.js").then(t=>t.X),[],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ContentSlot.79a5732a.js"),["ContentSlot.79a5732a.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./DocumentDrivenEmpty.f27721b4.js"),["DocumentDrivenEmpty.f27721b4.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./DocumentDrivenNotFound.b32a6d39.js"),["DocumentDrivenNotFound.b32a6d39.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./Markdown.ea2ac2a5.js"),["Markdown.ea2ac2a5.js","ContentSlot.79a5732a.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseA.02db1dba.js"),["ProseA.02db1dba.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseBlockquote.6990340a.js"),["ProseBlockquote.6990340a.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseCode.fb968261.js"),["ProseCode.fb968261.js","ProseCode.e63e49c6.css","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseCodeInline.53ceec86.js"),["ProseCodeInline.53ceec86.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseEm.3a1cf367.js"),["ProseEm.3a1cf367.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH1.9afe2ea5.js"),["ProseH1.9afe2ea5.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH2.63115fe0.js"),["ProseH2.63115fe0.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH3.852973ce.js"),["ProseH3.852973ce.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH4.d57cd85f.js"),["ProseH4.d57cd85f.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH5.10380f0a.js"),["ProseH5.10380f0a.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH6.16fca76e.js"),["ProseH6.16fca76e.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseHr.667f7b32.js"),["ProseHr.667f7b32.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseImg.ccbe801f.js"),["ProseImg.ccbe801f.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseLi.fe3681f3.js"),["ProseLi.fe3681f3.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseOl.c2c0292a.js"),["ProseOl.c2c0292a.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseP.ba53f5a7.js"),["ProseP.ba53f5a7.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseStrong.3651bcd3.js"),["ProseStrong.3651bcd3.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTable.9da37aa8.js"),["ProseTable.9da37aa8.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTbody.328d1838.js"),["ProseTbody.328d1838.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTd.71b1d999.js"),["ProseTd.71b1d999.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTh.93a934d3.js"),["ProseTh.93a934d3.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseThead.2b0eabaa.js"),["ProseThead.2b0eabaa.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTr.2169294a.js"),["ProseTr.2169294a.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseUl.dd25ebdb.js"),["ProseUl.dd25ebdb.js","entry.9e74ea60.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./welcome.1c02bdbb.js"),["welcome.1c02bdbb.js","entry.9e74ea60.js","ContentList.1df9427a.js","ContentSlot.79a5732a.js","DocumentDrivenEmpty.f27721b4.js","DocumentDrivenNotFound.b32a6d39.js","Markdown.ea2ac2a5.js","ProseCode.fb968261.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>G),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>W),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>J),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.9e74ea60.js").then(t=>t.W),[],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));const et=p({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=w(t),o=L(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!o.value&&x("dd-navigation").value){const{navigation:u}=z();return{navigation:u}}const{data:n}=await M(`content-navigation-${c(o.value)}`,()=>q(o.value));return{navigation:n}},render(t){const e=N(),{navigation:o}=t,n=_=>m(B,{to:_._path},()=>_.title),u=(_,l)=>m("ul",l?{"data-level":l}:null,_.map(d=>d.children?m("li",null,[n(d),u(d.children,l+1)]):m("li",null,n(d)))),i=_=>u(_,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):i(o)}}),rt=Object.freeze(Object.defineProperty({__proto__:null,default:et},Symbol.toStringTag,{value:"Module"}));export{et as default};