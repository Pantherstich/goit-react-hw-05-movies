"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{672:(n,t,a)=>{a.d(t,{Z:()=>h});var e,c,r,o=a(766),i=a(867);const s=i.ZP.ul(e||(e=(0,o.Z)(["\n  justify-self: center;\n  display: flex;\n  gap: 16px;\n  /* flex-direction: column; */\n  flex-wrap: wrap;\n"]))),p=i.ZP.li(c||(c=(0,o.Z)(["\n  /* padding: 0; */\n  /* margin: 0px; */\n  border-radius: 16px;\n  padding: 4px;\n\n  list-style-type: none;\n  width: 15%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  /* padding: 8px; */\n  box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.85);\n\n  transition: transform 300ms ease-in-out;\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.85);\n    transform: scale(1.05);\n  }\n"]))),d=i.ZP.img(r||(r=(0,o.Z)(["\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  border-radius: 16px;\n  box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.85);\n"])));var l=a(689),g=a(87),u=a(184);const h=n=>{let{movies:t}=n;const a=(0,l.TH)();return(0,u.jsx)(s,{children:t.map((n=>{var t;const e=null!==(t=n.name)&&void 0!==t?t:n.title;return(0,u.jsxs)(p,{children:[(0,u.jsx)(g.rU,{to:"/movies/".concat(n.id),state:a,children:(0,u.jsx)(u.Fragment,{children:n.poster_path?(0,u.jsx)(d,{src:"".concat("https://image.tmdb.org/t/p/w300").concat(n.poster_path),alt:"poster"}):"https://cdn.pixabay.com/photo/2018/11/03/15/51/here-3792307_1280.png"})},n.id),e," "]},n.id)}))})}},485:(n,t,a)=>{a.r(t),a.d(t,{default:()=>d});var e,c=a(766);const r=a(867).ZP.h2(e||(e=(0,c.Z)(["\n  margin-bottom: 20px;\n  text-align: center;\n"])));var o=a(672),i=a(791),s=a(390),p=a(184);const d=()=>{const[n,t]=(0,i.useState)([]);return(0,i.useEffect)((()=>{(0,s.k1)().then((n=>{n.results.length>0&&t(n.results)}))}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)(r,{children:"Popular today:"}),(0,p.jsx)(o.Z,{movies:n})]})}},390:(n,t,a)=>{a.d(t,{Y5:()=>s,k1:()=>o,oO:()=>d,on:()=>i,y:()=>p});var e=a(294);const c="4ee590f8afe314c87c8a374d8548e25b",r="https://api.themoviedb.org/3";async function o(){try{return(await e.Z.get("".concat(r,"/trending/all/day?api_key=").concat(c,"&language=en-US"))).data}catch(n){throw n}}async function i(n){try{return(await e.Z.get("".concat(r,"/search/movie?query=").concat(n,"&include_adult=false&api_key=").concat(c,"&language=en-US&page=1"))).data}catch(t){throw t}}async function s(n){try{return(await e.Z.get("".concat(r,"/movie/").concat(n,"?api_key=").concat(c,"&language=en-US"))).data}catch(t){throw t}}async function p(n){try{return(await e.Z.get("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US"))).data}catch(t){throw t}}async function d(n){try{return(await e.Z.get("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))).data}catch(t){throw t}}}}]);
//# sourceMappingURL=485.754fdf31.chunk.js.map