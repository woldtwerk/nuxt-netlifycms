const l={id:"collapsible-note",label:"Collapsible Note",fields:[{name:"summary",label:"Summary",widget:"string"},{name:"details",label:"Details",widget:"markdown"}],pattern:/^<details>$\s*?<summary>(.*?)<\/summary>\n\n(.*?)\n^<\/details>$/ms,fromBlock:function(e){return console.log(e),{summary:e[1],details:e[2]}},toBlock:function(e){return`
<details>
  <summary>${e.summary}</summary>
  ${e.details}
</details>
`},toPreview:function(e){return`
<details>
  <summary>${e.summary}</summary>
  ${e.details}
</details>
`}},t=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"}));export{t as _};
