(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{173:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(197),l=(n(100),n(35),n(28),n(65),n(27),n(26),n(46),n(94),n(95),n(97),n(5)),c=n.n(l),i=n(179),u=n.n(i),p=n(233),s=n(235),f=n(236),m=n(234),y=n(218),g=n(176);function E(){return(E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function h(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=t[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(t){var e,n=t.data,r=t.location,o=Object(y.a)(r),l=d(r.pathname.split("/"),3)[2],c=(e=n,Object(m.a)(e).filter(function(t){return t.node.frontmatter.tags.includes(l)})),i=c.length,v=c.slice((o-1)*g.CONTENT_PER_PAGE,o*g.CONTENT_PER_PAGE);return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,null,a.a.createElement(u.a,null,a.a.createElement("title",null,"".concat(g.PREFIX).concat(l.toUpperCase())),a.a.createElement("meta",{name:"og:title",content:"".concat(g.PREFIX).concat(l.toUpperCase())})),0===v.length?a.a.createElement("div",null,"No posts."):null,v.map(function(t){var e=t.node.frontmatter,n=e.images,r=e.tags,o=e.path,l=h(e,["images","tags","path"]);return a.a.createElement(s.a,E({key:o,path:o,tags:r,images:n},l))})),a.a.createElement(f.a,{prefix:"/tags/".concat(l,"/"),postCount:i,location:r}))};v.propTypes={data:c.a.shape({}).isRequired,location:c.a.shape({}).isRequired};var b=v;n.d(e,"pageQuery",function(){return O});e.default=function(t){return a.a.createElement(o.a,t,a.a.createElement(b,t))};var O="253846513"}}]);
//# sourceMappingURL=component---src-templates-tagged-list-jsx-3a6ddd7d6f24fc5c2856.js.map