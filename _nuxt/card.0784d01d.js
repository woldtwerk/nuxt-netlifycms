const e={id:"card",label:"Card",fields:[{name:"title",label:"Title",widget:"string"},{name:"content",label:"Content",widget:"text"}],pattern:/^::card{.*="(.*)"}$\s^(.*?)$\s^::$/ms,fromBlock:function(t){return console.log(t),{title:t[1],content:t[2]}},toBlock:function(t){return`
::card{title="${t.title}"}
${t.content}
::`},toPreview:function(t){return`
<card>
  <card-title>${t.title}</card-title>
  ${t.content}
</card>
`}},n=Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"}));export{n as _};
