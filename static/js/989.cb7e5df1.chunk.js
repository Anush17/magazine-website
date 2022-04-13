"use strict";(self.webpackChunkmagazine_website=self.webpackChunkmagazine_website||[]).push([[989],{2399:function(e,t,n){n.d(t,{Z:function(){return i}});var s=n(1178),a=n(1523),r=n(184),c=function(e){var t=e.item,n=t.id,c=t.title,i=t.link,l=t.type,o=t.date,u=t.thumbnail,m=t.caption,d=t.hashtags;return(0,r.jsxs)("div",{className:"rounded overflow-hidden",children:[(0,r.jsx)(a.rU,{to:{pathname:"".concat(i,"/").concat(n),state:t},children:(0,r.jsx)("img",{className:"w-full object-cover",src:u,alt:c})}),(0,r.jsxs)("div",{className:"p-3",children:[(0,r.jsxs)("p",{className:"py-2 text-xs",children:[l," - ",o]}),(0,r.jsx)(a.rU,{to:{pathname:"".concat(i,"/").concat(n),state:t},children:(0,r.jsx)("p",{className:"font-bold text-base mb-1",children:c})}),(0,r.jsx)("p",{className:"text-gray-700 text-sm",children:m})]}),(0,r.jsx)("div",{className:"px-4 pt-2",children:(0,s.Z)(d,(function(e,t){return(0,r.jsxs)("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1\r text-sm font-semibold text-gray-700 mr-2 mb-2",children:["#",e]},t)}))})]})},i=function(e){var t=e.items;return(0,r.jsx)("div",{className:"grid gap-8 mx-4 justify-items-center",style:{gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))"},children:(0,s.Z)(t,(function(e){return(0,r.jsx)(c,{item:e},e.id)}))})}},1162:function(e,t,n){var s=n(2020),a=n(184);t.Z=function(){var e=(0,s.$)().t;return(0,a.jsx)("section",{className:"pb-12 pt-20 mx-auto px-4 md:px-0",children:(0,a.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,a.jsxs)("div",{className:"space-y-4 text-center",children:[(0,a.jsx)("h1",{className:"text-3xl text-red-500 font-semibold",children:e("newsletter.title")}),(0,a.jsx)("p",{className:"text-gray-800 leading-relaxed",children:e("newsletter.desc")})]}),(0,a.jsxs)("div",{className:"mt-5",children:[(0,a.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},className:"max-w-xl mx-auto flex items-center justify-center rounded-md\r border border-gray-200 p-0.5",children:[(0,a.jsx)("input",{type:"email",placeholder:"Enter your email",className:"text-gray-500 w-full p-2.5 outline-none"}),(0,a.jsx)("button",{className:"p-2.5 rounded-md text-white bg-red-500 outline-none shadow-md focus:shadow-none sm:px-5",children:e("newsletter.subscribe")})]}),(0,a.jsxs)("p",{className:"mt-3 mx-auto text-center max-w-lg text-sm text-gray-800",children:[e("newsletter.notSpam"),(0,a.jsxs)("a",{className:"underline",href:"javascript:void(0)",children:[" ",e("menu.privacy")," "]})]})]})]})})}},5989:function(e,t,n){n.r(t);var s=n(6515),a=n(4890),r=n(2791),c=n(2020),i=n(1162),l=n(2399),o=n(821),u=n(184);t.default=function(){(0,c.$)().t;var e=(0,r.useState)([]),t=(0,a.Z)(e,2),n=t[0],m=t[1],d=(0,r.useState)(!1),x=(0,a.Z)(d,2),p=(x[0],x[1]);return(0,r.useEffect)((function(){!function(){var e=!0;e&&(p(!0),o.Z.getSportNews().then((function(t){var n=t.data.map((function(e){return(0,s.Z)((0,s.Z)({},e),{},{key:e.id})}));e&&m(n)})).catch((function(e){return console.log(e)})).finally((function(){return p(!1)})))}()}),[]),(0,u.jsxs)("div",{className:"pb-14 max-w-layout",children:[(0,u.jsx)(i.Z,{}),(0,u.jsx)(l.Z,{items:n})]})}},821:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(4569),a=n.n(s)().create({baseURL:"https://magazine-website-server.herokuapp.com",headers:{"Content-type":"application/json"}}),r={getNews:function(e){return a.get("/news",{params:e})},getSingleNews:function(e){return a.get("/news/".concat(e))},getSportNews:function(e){return a.get("/sport",{params:e})},getTechnologies:function(e){return a.get("/technologies",{params:e})},getFaqs:function(e){return a.get("/faqs",{params:e})},getPrivacy:function(e){return a.get("/privacy",{params:e})},getMarquee:function(e){return a.get("/marquee",{params:e})}}}}]);
//# sourceMappingURL=989.cb7e5df1.chunk.js.map