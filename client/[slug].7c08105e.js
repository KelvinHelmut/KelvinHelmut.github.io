import{S as t,i as s,s as a,b as e,c as n,t as o,q as i,d as r,g as l,h as c,j as u,k as h,l as p,a as d,n as f,w as m,r as g}from"./client.9cea1a3a.js";function v(t){let s,a,v,j,x,w,y=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),v=n("h1"),j=o(y),x=e(),w=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=l(t),v=c(t,"H1",{});var s=u(v);j=h(s,y),s.forEach(r),x=l(t),w=c(t,"DIV",{class:!0}),u(w).forEach(r),this.h()},h(){p(w,"class","content svelte-gnxal1")},m(t,s){d(t,a,s),d(t,v,s),f(v,j),d(t,x,s),d(t,w,s),w.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&y!==(y=t[0].title+"")&&m(j,y),1&a&&E!==(E=t[0].html+"")&&(w.innerHTML=E)},i:g,o:g,d(t){t&&r(a),t&&r(v),t&&r(x),t&&r(w)}}}async function j({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function x(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,x,v,a,{post:0})}}export{j as preload};
