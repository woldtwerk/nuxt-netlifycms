import{a as o,L as l,P as n,t as i,o as d,v as s}from"./entry.ee05edaf.js";const c={name:"blog",label:"Blog",folder:"blog",create:!0,slug:"{{year}}-{{month}}-{{day}}-{{slug}}",fields:[{label:"Layout",name:"layout",widget:"hidden",default:"blog"},{label:"Title",name:"title",widget:"string"},{label:"Publish Date",name:"date",widget:"datetime"},{label:"Featured Image",name:"thumbnail",widget:"image"},{label:"Rating (scale of 1-5)",name:"rating",widget:"number"},{label:"Body",name:"body",widget:"markdown"}]},r=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"})),b=o({__name:"admin",setup(u){const a=l();return n({script:[{src:"https://unpkg.com/react@^16/umd/react.production.min.js",body:!0},{src:"https://unpkg.com/react-dom@^16/umd/react-dom.production.min.js",body:!0},{src:"https://unpkg.com/netlify-cms-app/dist/netlify-cms-app.js",body:!0}]}),i(()=>{const t="";NetlifyCmsApp.init({config:{...a.public.githubRepository?{backend:{name:"github",repo:a.public.githubRepository,branch:"content",base_url:"https://netlify-cms-github-auth.woldtwerk.de",auth_endpoint:"auth"}}:{backend:{name:"git-gateway"},local_backend:!0},load_config_file:!1,locale:"de",media_folder:`${t}_uploads/media`,public_folder:"/img",collections:[...Object.values(Object.assign({"/assets/collections/blog.ts":r})).map(e=>e.default).map(e=>(e.folder=`${t}${e.folder}`,e))]}})}),(t,e)=>(d(),s("div"))}});export{b as default};
