(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4IfK":function(t,e,n){"use strict";n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),e.useIsomorphicLayoutEffect=void 0;var i=n("q1tI"),r="undefined"!=typeof window?i.useLayoutEffect:i.useEffect;e.useIsomorphicLayoutEffect=r},C331:function(t,e,n){"use strict";n("2Spj"),n("HAE/"),n("pIFo");var i="bfred-it:object-fit-images",r=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,o="undefined"==typeof Image?{style:{"object-position":1}}:new Image,a="object-fit"in o.style,c="object-position"in o.style,s="background-size"in o.style,l="string"==typeof o.currentSrc,u=o.getAttribute,d=o.setAttribute,f=!1;function p(t,e,n){var i="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(e||1)+"' height='"+(n||0)+"'%3E%3C/svg%3E";u.call(t,"src")!==i&&d.call(t,"src",i)}function m(t,e){t.naturalWidth?e(t):setTimeout(m,100,t,e)}function g(t){var e=function(t){for(var e,n=getComputedStyle(t).fontFamily,i={};null!==(e=r.exec(n));)i[e[1]]=e[2];return i}(t),n=t[i];if(e["object-fit"]=e["object-fit"]||"fill",!n.img){if("fill"===e["object-fit"])return;if(!n.skipTest&&a&&!e["object-position"])return}if(!n.img){n.img=new Image(t.width,t.height),n.img.srcset=u.call(t,"data-ofi-srcset")||t.srcset,n.img.src=u.call(t,"data-ofi-src")||t.src,d.call(t,"data-ofi-src",t.src),t.srcset&&d.call(t,"data-ofi-srcset",t.srcset),p(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{!function(t){var e={get:function(e){return t[i].img[e||"src"]},set:function(e,n){return t[i].img[n||"src"]=e,d.call(t,"data-ofi-"+n,e),g(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}(t)}catch(o){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(t){if(t.srcset&&!l&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}(n.img),t.style.backgroundImage='url("'+(n.img.currentSrc||n.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=e["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(e["object-fit"])?m(n.img,(function(){n.img.naturalWidth>t.width||n.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"})):t.style.backgroundSize=e["object-fit"].replace("none","auto").replace("fill","100% 100%"),m(n.img,(function(e){p(t,e.naturalWidth,e.naturalHeight)}))}function b(t,e){var n=!f&&!t;if(e=e||{},t=t||"img",c&&!e.skipTest||!s)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][i]=t[r][i]||{skipTest:e.skipTest},g(t[r]);n&&(document.body.addEventListener("load",(function(t){"IMG"===t.target.tagName&&b(t.target,{skipTest:e.skipTest})}),!0),f=!0,t="img"),e.watchMQ&&window.addEventListener("resize",b.bind(null,t,{skipTest:e.skipTest}))}b.supportsObjectFit=a,b.supportsObjectPosition=c,function(){function t(t,e){return t[i]&&t[i].img&&("src"===e||"srcset"===e)?t[i].img:t}c||(HTMLImageElement.prototype.getAttribute=function(e){return u.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,n){return d.call(t(this,e),e,String(n))})}(),t.exports=b},"Mg+j":function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return E}));var i=n("q1tI"),r=n.n(i),o=n("Wbzz"),a=n("TJpk"),c=n.n(a),s=n("qKvR"),l=n("Tjjf"),u=Object(l.a)([{type:"max",size:"45"}])[0],d={jobtitle:{name:"1dlpdom",styles:"width:100%;background-color:#fff;h1,h3{color:#000;}h3{margin-bottom:0;}"},jobtitleContent:{name:"4pzkgp",styles:"padding:1.2rem 3rem 1.2rem 3rem;max-width:1600px;margin:0 auto;"},contentText:Object(s.b)("max-width:1600px;position:relative;column-count:2;column-gap:3rem;text-align:justify;margin:0 auto;padding:2rem 3rem;p,li{font-size:1.15rem;line-height:1.3;color:#a7a7a7;}p{margin:0 0 1em;}",u,"{font-size:0.85em;column-count:auto;column-gap:initial;text-align:justify;margin:0 auto;padding:0.7rem 1rem;}")},f=(n("91GP"),n("f3/d"),n("dRSK"),n("YmA7")),p=n("kOA+"),m=n.n(p),g=n("gKLi"),b=n("ciIH"),h=n.n(b),y=n("EgnG"),v={layout1:{out:{translateX:{next:"-100%",previous:"100%"},rotateZ:{next:function(){return y.a.random(-15,0)},previous:function(){return y.a.random(0,15)}},opacity:0,duration:1200,easing:"easeOutQuint",itemsDelay:80},in:{resetProps:{translateX:{next:"100%",previous:"-100%"},rotateZ:{next:function(){return y.a.random(0,15)},previous:function(){return y.a.random(-15,0)}},opacity:0},translateX:"0%",rotateZ:0,opacity:1,duration:700,easing:"easeOutQuint",itemsDelay:80}},layout2:{out:{translateX:{next:function(){return y.a.random(-50,50)+"%"},previous:function(){return y.a.random(-50,50)+"%"}},translateY:{next:function(){return y.a.random(-50,50)+"%"},previous:function(){return y.a.random(-50,50)+"%"}},opacity:0,duration:1200,easing:"easeOutQuint",itemsDelay:10},in:{resetProps:{translateX:{next:"100%",previous:"-100%"},rotateZ:{next:function(){return y.a.random(0,90)},previous:function(){return y.a.random(-90,0)}},opacity:0},translateX:"0%",rotateZ:0,opacity:1,duration:900,easing:"easeOutExpo",itemsDelay:30}},layout3:{out:{translateY:{next:"60%",previous:"-60%"},opacity:0,duration:700,easing:"easeOutQuint",itemsDelay:50},in:{resetProps:{translateY:{next:"-60%",previous:"60%"},opacity:0},translateY:"0%",opacity:1,duration:700,easing:"easeOutQuint",itemsDelay:50,delay:250}},layout4:{out:{scale:.5,opacity:0,duration:300,easing:"easeInBack",itemsDelay:20},in:{resetProps:{scale:.5,opacity:0},opacity:1,scale:1,duration:1e3,easing:"easeOutElastic",itemsDelay:50,delay:400}},layout5:{out:{translateX:{next:"-100%",previous:"100%"},opacity:0,duration:1200,easing:"easeOutQuint",itemsDelay:40},in:{resetProps:{translateX:{next:"100%",previous:"-100%"},rotateZ:{next:function(){return y.a.random(0,25)},previous:function(){return y.a.random(-25,0)}},opacity:0},translateX:"0%",rotateZ:0,opacity:1,duration:700,easing:"easeOutQuint",itemsDelay:40,delay:250}}},j=Object(l.a)([{type:"max",size:"45"}])[0],O={job:Object(s.b)("color:#5f6669;background:#1e2021;a{text-decoration:none;outline:none;}h1,h2,h3{color:#fff;}",j,"{a{color:#fff;}}"),arrowBack:Object(s.b)("right:0;bottom:0;position:fixed;margin:0 1.5em 1.25em 0;background:none;border:4px solid;padding:0;display:block;width:3em;height:3em;font-size:1.25em;border-radius:50%;cursor:pointer;opacity:0;transition:opacity 0.5s;z-index:1001;background:#1568dd;border-color:#1568dd;color:#fff;box-shadow:0 14px 59px -7px rgba(0,0,0,0.85);&:focus{outline:none;}&:hover{background:inherit;color:#1568dd;}",j,"{margin:0 0.25em 0.75em 0;background:#1568dd;border-color:#1568dd;}"),iconJob:{name:"cppeux",styles:"display:block;width:1.8em;height:1.8em;margin:0 auto;fill:currentColor;height:3.1em;"},slideshow:Object(s.b)("position:relative;width:100%;max-width:1600px;margin:0 auto;height:100vh;max-height:1000px;pointer-events:none;&:focus{outline:none;}",j,"{padding-top:7em;height:calc(100vh - 40px);}"),slideshowNav:Object(s.b)("position:absolute;pointer-events:none;z-index:2;font-size:5em;right:0.1em;bottom:1em;",j,"{font-size:4em;right:auto;bottom:0em;left:0em;}"),btnjob:{name:"ok68ws",styles:"display:inline-block;margin:0;padding:0;cursor:pointer;pointer-events:auto;color:#fff;border:none;background:none;font-size:1.5em;display:block;.icon{height:0.5em;}&:focus{outline:none;}&:hover{color:#1568dd;}&:nth-of-type(2){margin:0 0 0 0.5em;}"},gradient:{name:"1ttpbm1",styles:"background-image:linear-gradient( to bottom,transparent,rgba(0,0,0,0.5) );width:100%;height:100%;position:absolute;top:0;z-index:1;pointer-events:none;"},slide:Object(s.b)("width:100%;margin:0 0 1em 0;padding:3em 0;position:absolute;top:0;left:0;height:100%;margin:0;pointer-events:none;opacity:0;.slide-img-inner{position:absolute;object-fit:cover;width:100%;height:100%;transform:rotateZ(0deg);backface-visibility:hidden;will-change:tranform,opacity;background-position:50% 50%;background-size:cover;}",j,"{padding:6em 0;}"),slideCurrent:{name:"12m0k8p",styles:"pointer-events:auto;"},slideImgCaption:Object(s.b)('font-family:"Gochi Hand",cursive;position:absolute;width:100%;top:83%;text-align:center;margin:0;padding:1em;font-size:1.25em;color:#25303b;font-weight:normal;',j,"{font-size:0.75em;}"),animationContainer:{name:"18lnl7p",styles:"position:absolute;overflow:hidden;width:100%;height:100%;"},slideTitle:Object(s.b)("position:absolute;bottom:0;left:0;width:calc(100% - 11em);max-width:800px;padding:2em;color:#e8e8e8;z-index:2;pointer-events:none;opacity:0;font-weight:500;opacity:0;",j,"{width:calc(100% - 2em);margin:0 0 4em 0;padding:1.5em;}"),slideTitleMain:Object(s.b)("font-size:6em;line-height:0.8;display:inline-block;margin:0;color:#e8e8e8;",j,"{font-size:4em;}"),slideTitleSub:Object(s.b)("font-size:1.15em;line-height:1.5;margin:1em 0 0 0;padding:8px;a{border-bottom:1px solid;}",j,"{font-size:1.3em;line-height:1;}"),slideImgwrap:Object(s.b)("position:relative;width:calc(100% - 6em);height:100%;margin:0 auto;",j,"{width:calc(100% - 1em);}"),slideLayout1:{name:"nqr83j",styles:".slide-img{position:absolute;width:calc(50% - 1em);}.slide-img:first-of-type{left:0.5em;height:100%;}.slide-img:nth-of-type(n + 2){left:calc(50% + 0.5em);height:calc(50% - 0.5em);}.slide-img:nth-of-type(3){top:calc(50% + 0.5em);}"},slideLayout2:Object(s.b)(".slide-img{position:absolute;top:50%;left:50%;}.slide-img:not(:last-child){width:300px;height:300px;}.slide-img:not(:last-child) .slide-img-inner{border:5px solid #fff;}.slide-img:first-of-type{transform:translate3d(-50%,-50%,0) translate3d(-60%,-40%,0) rotate(-16deg);}.slide-img:nth-of-type(2){transform:translate3d(-50%,-50%,0) translate3d(60%,-40%,0) rotate(10deg);}.slide-img:nth-of-type(3){transform:translate3d(-50%,-50%,0) translate3d(60%,40%,0) rotate(-15deg);}.slide-img:nth-of-type(4){transform:translate3d(-50%,-50%,0) translate3d(-60%,40%,0) rotate(10deg);}.slide-img:last-child{transform:translate3d(-50%,-50%,0);width:450px;height:400px;}.slide-img:last-child .slide-img-inner{border:10px solid #fff;border-bottom-width:65px;}",j,"{.slide-img:not(:last-child){width:100px;height:100px;}.slide-img:last-child .slide-img-inner{border-bottom-width:40px;}.slide-img:last-child{width:160px;height:160px;}}"),slideLayout3:{name:"gb4wtq",styles:".slide-img{position:absolute;}.slide-img:nth-of-type(2){top:15%;left:15%;width:30%;height:50%;}.slide-img:first-of-type{top:40%;left:5%;width:80%;height:60%;}.slide-img:nth-of-type(3){top:0;left:40%;width:40%;height:60%;}.slide-img:nth-of-type(4){top:50%;left:75%;width:22.5%;height:42.5%;}"},slideLayout4:{name:"xzmas3",styles:".slide-img{position:absolute;top:50%;left:50%;width:45%;padding-bottom:45%;transform:translate3d(-50%,-50%,0);}.slide-img-inner{border-radius:50%;}.slide-img:first-of-type{transform:translate3d(0%,-40%,0) scale(0.6);}.slide-img:nth-of-type(3){transform:translate3d(-100%,-60%,0) scale(0.75);}"},slideLayout5:{name:"r63zlt",styles:'.slide-img{position:absolute;top:10%;width:40%;height:80%;}.slide-img:nth-of-type(2){left:30%;}.slide-img:nth-of-type(3){left:60%;}.slide-img-inner{-webkit-clip-path:polygon(0% 100%,30% 0%,100% 0%,70% 100%);clip-path:polygon(0% 100%,30% 0%,100% 0%,70% 100%);-webkit-clip-path:url("#polygon-clip-rhomboid");clip-path:url("/#polygon-clip-rhomboid");}'}},w=function(t){var e=t.active,n=t.title,r=t.description,o=t.layout,a=t.files,c=t.dimentions,l=t.direction,u=t.onEndAnimating,d=t.caption,f=void 0===d?null:d,p=Object(g.b)(e),m=Object(i.useRef)(),b=Object(i.useRef)(),j=Object(i.useRef)(a.map(i.createRef));Object(i.useEffect)((function(){var t;function n(t,e){var n={},r="";return[{property:"translateX",dimention:"width"},{property:"translateY",dimention:"height"},{property:"rotateZ",dimention:!1},{property:"scale",dimention:!1}].forEach((function(o){var a=o.property,c=function(e){var n,r=e.property,o=e.dimention;return void 0!==t[r]&&(n=!1!==o?"object"==typeof t[r]?function(){return"function"==typeof t[r][l]?i(t[r][l](),o):i(t[r][l],o)}:i(t[r],o):"object"==typeof t[r]?function(){return"function"==typeof t[r][l]?t[r][l]():t[r][l]}:t[r]),n}({property:a,dimention:o.dimention});if(void 0!==c)if(e){var s;switch(a){case"rotateZ":s="deg";break;case"scale":s="";break;default:s="px"}r+=(r?" ":"")+a+"("+("function"==typeof c?c():c)+s+")"}else n[a]=c})),e||void 0===n.opacity||(n.opacity=t.opacity),e?r:n}function i(t,e){return"string"==typeof t&&-1!==t.indexOf("%")?parseFloat(t)/100*c[e]:t}function r(t){b.current.style.opacity=!0===t?0:1;var e=!0===t?{opacity:1,duration:500}:{opacity:0,duration:200};Object(y.a)({targets:b.current,opacity:e.opacity,duration:e.duration,easing:"easeOutExpo"})}function a(t,e){var i=n(t,!1);return i=Object.assign({targets:e,duration:t.duration,easing:t.easing,opacity:t.opacity,delay:function(n,i){return"next"===l?i*t.itemsDelay:(e.length-1-i)*t.itemsDelay}},i)}return e&&e!==p?function(){m.current.style.opacity=1;var e=(v["layout"+o]||[]).in;if(e){var i={transform:n(e.resetProps,!0),opacity:0},c=a(e,j.current.map((function(t){return t.current.style.opacity=i.opacity,t.current.style.transform=i.transform,t.current})));t=setTimeout((function(){Object(y.a)(c)}),e.delay),r(!0)}}():e||void 0===p||e===p||function(){var t=(v["layout"+o]||[]).out;if(t){var e=a(t,j.current.map((function(t){return t.current})));e.complete=function(){m.current.style.opacity=0,u()},Object(y.a)(e),r(!1)}}(),function(){!e&&t&&clearTimeout(t)}}),[e,c,l,o,u,p,n]);var w=[O.slide];O["slideLayout"+o]&&w.push(O["slideLayout"+o]);var x=[O.slideTitle];return e&&(w.push(O.slideCurrent),x.push(O.slideCurrent)),Object(s.c)("div",{css:w,ref:m,"aria-hidden":e},Object(s.c)("div",{css:O.slideImgwrap},a.map((function(t,e){var i=t.image;return Object(s.c)("div",{key:e,className:"slide-img"},Object(s.c)("div",{ref:j.current[e],css:O.animationContainer},Object(s.c)(h.a,{className:"slide-img-inner",fluid:i.childImageSharp.fluid,style:{position:"absolute"},objectPosition:"top left",alt:n}),f&&4===e&&Object(s.c)("h4",{css:O.slideImgCaption},f)))}))),Object(s.c)("div",{css:x,ref:b},Object(s.c)("h3",{css:O.slideTitleMain},n),Object(s.c)("p",{css:O.slideTitleSub},r)))};function x(){return(x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var k=function(t){var e=t.images,n=t.children,o=Object(i.useRef)(),a=Object(g.c)(o,10),l=Object(i.useState)(0),u=l[0],d=l[1],p=Object(i.useState)(!1),b=p[0],h=p[1],y=Object(i.useState)("next"),v=y[0],j=y[1],k=e.length-1;function S(){h(!1)}var E=f.data.site.siteMetadata,z=E.basePath,P=E.menuLinks.find((function(t){return"experience"===t.name})),I=P?P.color:"#3a3d98";return Object(s.c)(r.a.Fragment,null,Object(s.c)(c.a,{link:[{href:"https://fonts.googleapis.com/css?family=Gochi+Hand",rel:"stylesheet"}]}),Object(s.c)("section",null,Object(s.c)("svg",{className:"hidden"},Object(s.c)("defs",null,Object(s.c)("symbol",{id:"icon-prev",viewBox:"0 0 100 50"},Object(s.c)("title",null,"prev"),Object(s.c)("polygon",{points:"5.4,25 18.7,38.2 22.6,34.2 16.2,27.8 94.6,27.8 94.6,22.2 16.2,22.2 22.6,15.8 18.7,11.8"})),Object(s.c)("symbol",{id:"icon-next",viewBox:"0 0 100 50"},Object(s.c)("title",null,"next"),Object(s.c)("polygon",{points:"81.3,11.8 77.4,15.8 83.8,22.2 5.4,22.2 5.4,27.8 83.8,27.8 77.4,34.2 81.3,38.2 94.6,25 "})),Object(s.c)("symbol",{id:"icon-arrowback",viewBox:"0 0 24 24"},Object(s.c)("title",null,"arrow-back"),Object(s.c)("path",{d:"M7.839 17.296a.847.847 0 0 0 1.21 0 .853.853 0 0 0 0-1.198L2.914 9.965h20.238A.843.843 0 0 0 24 9.118a.852.852 0 0 0-.847-.86H2.915l6.133-6.12a.868.868 0 0 0 0-1.21.847.847 0 0 0-1.21 0L.255 8.513a.833.833 0 0 0 0 1.197l7.585 7.586z"})),Object(s.c)("clippath",{id:"polygon-clip-rhomboid",clipPathUnits:"objectBoundingBox"},Object(s.c)("polygon",{points:"0 1, 0.3 0, 1 0, 0.7 1"})))),Object(s.c)("main",{css:O.job},Object(s.c)("header",null,Object(s.c)(m.a,{cover:!0,to:z+"/experience",css:O.arrowBack,direction:"right","data-test":"goback",bg:I,style:{opacity:1}},Object(s.c)("svg",{css:O.iconJob},Object(s.c)("use",{xlinkHref:"#icon-arrowback"})))),Object(s.c)("div",{css:O.slideshow,"data-test":"slideshow",ref:o},a&&e.map((function(t,e){return Object(s.c)(w,x({},t,{active:u===e,key:t.title,dimentions:a,direction:v,onEndAnimating:S}))})),Object(s.c)("nav",{css:O.slideshowNav},Object(s.c)("button",{onClick:function(){b||(h(!0),j("previous"),d(u>0?u-1:k))},css:O.btnjob,"aria-label":"Previous slide","data-test":"previous"},Object(s.c)("svg",{className:"icon"},Object(s.c)("use",{xlinkHref:"#icon-prev"}))),Object(s.c)("button",{onClick:function(){b||(h(!0),j("next"),d(u<k?u+1:0))},css:O.btnjob,"aria-label":"Next slide","data-test":"next"},Object(s.c)("svg",{className:"icon"},Object(s.c)("use",{xlinkHref:"#icon-next"})))),Object(s.c)("div",{css:O.gradient})),n)))},S=n("WGcH"),E=(e.default=function(t){var e=t.data.markdownRemark;return Object(i.useLayoutEffect)((function(){if(!e)return Object(o.navigate)("/404"),Object(s.c)(r.a.Fragment,null)}),[e]),e?Object(s.c)(r.a.Fragment,null,Object(s.c)(a.Helmet,null,Object(s.c)("meta",{charSet:"utf-8"}),Object(s.c)("title",null,e.frontmatter.jobTitle," on ",e.frontmatter.company)),Object(s.c)(k,{images:e.frontmatter.images},Object(s.c)("div",{css:d.jobtitle},Object(s.c)("div",{css:d.jobtitleContent,"data-test":"content"},Object(s.c)("h1",null,e.frontmatter.company),Object(s.c)("h3",null,e.frontmatter.jobTitle,", ",e.frontmatter.dateFrom," ",e.frontmatter.dateTo?" to "+e.frontmatter.dateTo:" Present"))),Object(s.c)("div",{css:d.contentText,dangerouslySetInnerHTML:{__html:e.html}})),Object(s.c)(S.a,{skills:e.frontmatter.skills,type:"static",title:"Tools used",style:{overflow:"hidden",backgroundColor:"#fff"},showLoadingAnimation:!1,description:"The list of tools used here corresponds to the Languages, Frameworks, Libraries or Apps that I used in each of the roles performed."})):Object(s.c)(r.a.Fragment,null)},"3125733338")},OTAv:function(t,e,n){"use strict";n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),e.useScrollPosition=c;var i=n("q1tI"),r=n("4IfK"),o="undefined"!=typeof window;function a(t){var e=t.element,n=t.useWindow;if(!o)return{x:0,y:0};var i=(e?e.current:document.body).getBoundingClientRect();return n?{x:window.scrollX,y:window.scrollY}:{x:i.left,y:i.top}}function c(t,e,n,c,s){var l=(0,i.useRef)(a({useWindow:c})),u=null,d=function(){var e=a({element:n,useWindow:c});t({prevPos:l.current,currPos:e}),l.current=e,u=null};(0,r.useIsomorphicLayoutEffect)((function(){if(o){var t=function(){s?null===u&&(u=setTimeout(d,s)):d()};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}}),e)}c.defaultProps={deps:[],element:!1,useWindow:!1,wait:null}},SOsw:function(t,e,n){"use strict";var i="undefined"==typeof window;e.a=i},WGcH:function(t,e,n){"use strict";n("91GP"),n("0mN4");var i=n("q1tI"),r=n.n(i),o=n("lTFH"),a=(n("rGqo"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("Btvt"),n("bHtr"),n("9eSz")),c=n.n(a),s=n("EgnG"),l=n("qKvR"),u=n("Tjjf"),d=Object(u.a)([{type:"max",size:"36"},{type:"max",size:"50"}]),f=d[0],p=d[1],m="\n  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  height: 100%;\n  border-radius: 2%;\n  background: #fff;\n  margin: 0;\n  padding: 0;\n  position: relative;\n",g="\n  width: 200px;\n  padding: 10px;\n  margin: 0;\n  transform-style: preserve-3d;\n  backface-visibility: hidden;\n  "+f+" {\n    width: 150px;\n  }\n",b={textRight:{name:"s2uf1z",styles:"text-align:right;"},elementRight:{name:"ky9fov",styles:"margin:1em 0 0 auto;"},section:Object(l.b)("width:100%;padding:0 3vmax;h2{margin:0 0 1rem;font-size:3rem;line-height:1.25;",p,"{font-size:2.4rem;}}p{padding:0;font-weight:700;max-width:60%;",p,"{font-size:1em;line-height:1.2em;max-width:500px;}}"),sectionStatic:Object(l.b)("width:100%;padding:4vmax;h2{font-size:6em;",f,"{font-size:2.5em;}}p{font-size:1em;max-width:400px;font-weight:700;position:relative;}"),noPointerEvents:{name:"1ixbp0l",styles:"pointer-events:none;"},header:{name:"153aegd",styles:"padding:0 3vmax;"},headerStatic:{name:"rqgsqp",styles:"position:relative;z-index:1;"},fixed:{name:"1b7bwed",styles:"position:fixed;"},gridLayer:{name:"8atqhb",styles:"width:100%;"},gridLayerRight:Object(l.b)("transform:perspective(3000px) translateY(-70px) rotateX(55deg) rotateZ(-45deg);transform-origin:center center;",p,"{width:calc(100% + 450px);transform:perspective(3000px) translateY(-17rem) rotateX(55deg) rotateZ(-45deg);transform-origin:center bottom;}"),gridLayerLeft:{name:"1dks6k5",styles:"transform:translateX(0) translateY(0) rotateX(45deg) rotateZ(45deg);position:fixed;z-index:2;transform-origin:top left;padding-top:10rem;padding-left:20rem;width:calc(80% + 20rem);"},gridHeight:{name:"io2hdt",styles:"width:100%;pointer-events:none;"},grid:{name:"19q5ot5",styles:"margin:0 auto;padding:0;list-style:none;display:flex;flex-direction:row;flex-wrap:wrap;transform-style:flat;transform:translate3d(0,0,0);justify-content:flex-start;"},gridItem:Object(l.b)(g,' &:hover span{opacity:1;transform:translate3d(0,-5px,0);}&::before{content:"";position:absolute;z-index:-1;top:5px;right:5px;bottom:5px;left:5px;background:rgba(0,0,0,0.4);box-shadow:0 0 14px 1px rgba(0,0,0,0.4);transform:translateZ(-1px) scale(0.9);transition:transform 0.3s,opacity 0.3s,box-shadow 0.3s;backface-visibility:hidden;border-radius:2%;}&:hover{&::before{box-shadow:0 0 20px 10px rgba(0,0,0,0.4);}}'),gridItemStatic:Object(l.b)(g),gridImgContainer:{name:"h27x57",styles:"position:relative;cursor:pointer;z-index:1;display:block;"},gridImg:Object(l.b)(m),gridImgStatic:Object(l.b)(m," &:not(:first-of-type){position:absolute;top:0;left:0;}&:nth-of-type(1){background-color:#2d2d2d;border-radius:3%;}&:nth-of-type(2){background-color:#323232;border-radius:3%;}&:nth-of-type(3){background-color:#373737;border-radius:3%;}&:nth-of-type(4){background-color:#fff;}"),gridTitle:{name:"sxv47p",styles:"font-size:1.1em;font-weight:600;position:absolute;z-index:-1;bottom:0;width:100%;text-align:center;letter-spacing:2px;text-transform:uppercase;color:#fff;opacity:0;transform:translate3d(0,-20px,0);transition:transform 0.3s,opacity 0.3s;"}};function h(t){var e=0;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t)))return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var v=function(t){var e=t.type,n=t.title,o=t.image,a=Array(4).fill(""),u=Object(i.useRef)(null),d=Object(i.useRef)(),f=Object(i.useRef)(a.map(i.createRef));return Object(i.useEffect)((function(){function t(t,n,i){void 0===i&&(i=!0);var r=t.target;if(i&&(r.style.zIndex=2),"static"===e)for(var o,a=h(f.current);!(o=a()).done;){n(o.value.current)}else n(d.current)}function n(n){t(n,(function(t){s.a.remove(t),"static"===e?Object(s.a)({targets:t,translateX:function(){return s.a.random(-60,60)},translateY:function(){return s.a.random(-60,60)},rotateZ:function(){return s.a.random(-10,10)},duration:1e3,easing:"cubicBezier(.2, 1, .2, 1)",delay:20}):Object(s.a)({targets:t,translateX:-50,translateY:-50})}))}function i(n){t(n,(function(t){s.a.remove(t),Object(s.a)({targets:t,translateX:0,translateY:0,rotateZ:0,duration:400,easing:"static"===e?"easeInOutExpo":"easeOutElastic(1, .5)",complete:function(){n.target.style.zIndex=1}})}),!1)}var r=u.current;if(r)return r.addEventListener("mouseenter",n),r.addEventListener("mouseleave",i),function(){r.removeEventListener("mouseenter",n),r.removeEventListener("mouseleave",i)}}),[e]),Object(l.c)("li",{css:"static"===e?b.gridItemStatic:b.gridItem,ref:u},Object(l.c)("div",{css:b.gridImgContainer},"static"===e?a.map((function(t,e){return Object(l.c)("div",{css:b.gridImgStatic,key:"anImg"+e,ref:f.current[e],style:0!==e?{position:"absolute",overflow:"visible"}:{overflow:"visible"}},Object(l.c)(c.a,{fluid:o.childImageSharp.fluid,alt:n}))})):Object(l.c)(r.a.Fragment,null,Object(l.c)("div",{css:b.gridImg,ref:d},Object(l.c)(c.a,{fluid:o.childImageSharp.fluid,style:{overflow:"visible"},alt:n})),Object(l.c)("span",{css:b.gridTitle},n))))},j=n("7qWy");function O(){return(O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e.a=function(t){var e=t.skills,n=t.title,a=t.description,c=t.showLoadingAnimation,s=void 0===c||c,u=(t.transitionStatus,t.type),d=void 0===u?"static":u,f=t.style,p=void 0!==f&&f,m=Object(i.useState)(!1),g=m[0],h=m[1],y=Object(i.useRef)(null),w=Object(i.useRef)(null),x=Object(i.useRef)(null);Object(o.useScrollPosition)((function(t){var e=t.currPos;"static"!==d&&g&&(y.current.style.transform="translate3d(0, "+e.y+"px, 0)")})),Object(i.useEffect)((function(){x.current=document.querySelector(".tl-wrapper"),"static"!==d&&g&&(w.current.style.height="calc("+y.current.clientHeight+"px + 45rem)")}),[d,g]);var k="static"===d?{section:b.sectionStatic,header:[b.header,b.headerStatic,b.noPointerEvents],h2:[b.textRight,b.noPointerEvents],p:[b.textRight,b.elementRight,b.noPointerEvents],div:[b.gridLayer,b.gridLayerRight]}:{section:b.section,header:[b.header,b.fixed,b.noPointerEvents],h2:b.noPointerEvents,p:b.noPointerEvents,div:[b.gridLayer,b.gridLayerLeft]};return Object(l.c)("main",O({css:b.section},p&&{style:p}),Object(l.c)("header",{css:k.header},Object(l.c)("h2",{css:k.h2},n),Object(l.c)("p",{css:k.p},a)),Object(l.c)(j.a,{wait:1e3,cb:function(){h(!0)},showLoadingAnimation:s},Object(l.c)("div",{css:k.div},Object(l.c)("ul",{css:b.grid,"data-test":"skills",ref:y},(x.current&&(x.current.style.removeProperty?x.current.style.removeProperty("transform"):x.current.style.removeAttribute("transform")),g?e.map((function(t){var e=t.title,n=t.image;return Object(l.c)(v,{type:d,title:e,key:e,image:n})})):Object(l.c)(r.a.Fragment,null))))),Object(l.c)("div",{css:b.gridHeight,ref:w}))}},YmA7:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"basePath":"","menuLinks":[{"color":"#01579B","name":"home"},{"color":"#3a3d98","name":"experience"},{"color":"#d52d43","name":"skills"},{"color":"#fff","name":"aboutMe"}]}}}}')},ciIH:function(t,e,n){"use strict";n("VRzm"),n("Btvt");var i=n("284h"),r=n("TqRt");e.__esModule=!0,e.default=void 0;var o=r(n("pVnL")),a=r(n("8OQS")),c=r(n("284h")),s=r(n("PJYZ")),l=r(n("VbXa")),u=r(n("lSNA")),d=i(n("q1tI")),f=r(n("17x9")),p=r(n("9eSz")),m=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i))||this,(0,u.default)((0,s.default)(e),"imageRef",e.props.innerRef||(0,d.createRef)()),(0,u.default)((0,s.default)(e),"placeholderRef",(0,d.createRef)()),e}(0,l.default)(e,t);var i=e.prototype;return i.componentDidMount=function(){var t=this,e=document.createElement("img");void 0!==e.style.objectFit&&void 0!==e.style.objectPosition||Promise.resolve().then((function(){return(0,c.default)(n("C331"))})).then((function(e){var n=e.default;n(t.imageRef.current.imageRef.current),n(t.placeholderRef.current)}))},i.render=function(){var t=this.props,e=t.objectFit,n=t.objectPosition,i=(0,a.default)(t,["objectFit","objectPosition"]),r={objectFit:e,objectPosition:n,fontFamily:'"object-fit: '+e+"; object-position: "+n+'"'};return d.default.createElement(p.default,(0,o.default)({ref:this.imageRef,placeholderRef:this.placeholderRef},i,{imgStyle:(0,o.default)({},i.imgStyle,{},r),placeholderStyle:(0,o.default)({},i.placeholderStyle,{},r)}))},e}(d.Component);m.propTypes={objectFit:f.default.string,objectPosition:f.default.string},m.defaultProps={objectFit:"cover",objectPosition:"50% 50%"};var g=(0,d.forwardRef)((function(t,e){return d.default.createElement(m,(0,o.default)({},t,{innerRef:e}))}));e.default=g},gKLi:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return s}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var i=n("q1tI");function r(t,e,n){void 0===n&&(n={});var r=n.maxWait,o=Object(i.useRef)(null),a=Object(i.useRef)([]),c=n.leading,s=void 0===n.trailing||n.trailing,l=Object(i.useRef)(!1),u=Object(i.useRef)(null),d=Object(i.useRef)(!1),f=Object(i.useRef)(t);f.current=t;var p=Object(i.useCallback)((function(){clearTimeout(u.current),clearTimeout(o.current),o.current=null,a.current=[],u.current=null,l.current=!1}),[]);Object(i.useEffect)((function(){return function(){d.current=!0}}),[]);var m=Object(i.useCallback)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];a.current=t,clearTimeout(u.current),l.current&&(l.current=!1),u.current||!c||l.current||(f.current.apply(f,t),l.current=!0),u.current=setTimeout((function(){var e=!0;c&&l.current&&(e=!1),p(),!d.current&&s&&e&&f.current.apply(f,t)}),e),r&&!o.current&&s&&(o.current=setTimeout((function(){var t=a.current;p(),d.current||f.current.apply(null,t)}),r))}),[r,e,p,c,s]),g=Object(i.useCallback)((function(){u.current&&(f.current.apply(null,a.current),p())}),[p]);return[m,p,g]}var o=n("SOsw");var a=function(t){var e=Object(i.useState)(null),n=e[0],a=e[1],c=Object(i.useRef)(Object.keys(t)),s=Object(i.useCallback)((function(){var e=c.current.reduce((function(e,n){return e[n]=!!window.matchMedia(t[n]).matches,e}),{});a(e)}),[t]),l=r((function(){s()}),500)[0];return Object(i.useEffect)((function(){return!o.a&&window.matchMedia&&(window.addEventListener("resize",l),s()),function(){!o.a&&window.matchMedia&&window.removeEventListener("resize",l)}}),[s,t,l]),n};var c=function(t,e){void 0===t&&(t=!1),void 0===e&&(e=500);var n=Object(i.useState)(null),a=n[0],c=n[1],s=Object(i.useCallback)((function(){c({width:!1===t?window.innerWidth:t.current.offsetWidth,height:!1===t?window.innerHeight:t.current.offsetHeight})}),[t]),l=r((function(){s()}),e)[0];return Object(i.useEffect)((function(){return o.a||(window.addEventListener("resize",l),s()),function(){!o.a&&window.removeEventListener("resize",l)}}),[l,t,s]),a};var s=function(t){var e=Object(i.useRef)();return Object(i.useEffect)((function(){e.current=t})),e.current}},lTFH:function(t,e,n){"use strict";n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useScrollPosition",{enumerable:!0,get:function(){return i.useScrollPosition}});var i=n("OTAv")}}]);
//# sourceMappingURL=component---node-modules-christiandavid-gatsby-theme-byfolio-src-templates-job-js-2630baa3a8afe7522c1d.js.map