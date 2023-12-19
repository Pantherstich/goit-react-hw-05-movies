"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[691],{672:(n,t,e)=>{e.d(t,{Z:()=>g});var a,o,r,c=e(766),i=e(867);const s=i.ZP.ul(a||(a=(0,c.Z)(["\n  justify-self: center;\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n"]))),d=i.ZP.li(o||(o=(0,c.Z)(["\n  border-radius: 20px;\n  padding: 4px;\n  list-style-type: none;\n  width: 15%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.85);\n\n  transition: transform 300ms ease-in-out;\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.85);\n    transform: scale(1.05);\n  }\n"]))),l=i.ZP.img(r||(r=(0,c.Z)(["\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  border-radius: 16px 16px 0 0;\n"])));var p=e(689),u=e(87),h=e(184);const g=n=>{let{movies:t}=n;const e=(0,p.TH)();return(0,h.jsx)(s,{children:t.map((n=>{var t;const a=null!==(t=n.name)&&void 0!==t?t:n.title;return(0,h.jsxs)(d,{children:[(0,h.jsx)(u.rU,{to:"/movies/".concat(n.id),state:e,children:(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(l,{src:n.poster_path?"".concat("https://image.tmdb.org/t/p/w300").concat(n.poster_path):"https://cdn.pixabay.com/photo/2018/11/03/15/51/here-3792307_1280.png"})})},n.id),a," "]},n.id)}))})}},691:(n,t,e)=>{e.r(t),e.d(t,{default:()=>m});var a,o,r,c=e(766),i=e(867);const s=i.ZP.form(a||(a=(0,c.Z)(["\n  margin: 0 auto 24px auto;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border: 1px solid #000000;\n  border-radius: 8px;\n  overflow: hidden;\n"]))),d=i.ZP.input(o||(o=(0,c.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &:placeholder {\n    /* font: inherit; */\n    font-size: 18px;\n  }\n"]))),l=i.ZP.button(r||(r=(0,c.Z)(["\n  display: inline-block;\n  padding: 8px 40px;\n  font-size: 18px;\n  border: none;\n  /* width: 48px; */\n  /* height: 48px; */\n  border-left: 1px solid #000000;\n  /* opacity: 0.6; */\n  cursor: pointer;\n  /* outline: none; */\n  background-color: #e3a300d3;\n  color: #000000;\n  &:hover {\n    color: #e3a300d3;\n    background-color: #000000;\n  }\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n"])));var p=e(672),u=e(791),h=e(689),g=e(87),x=e(390),f=e(184);const m=()=>{const[n,t]=(0,u.useState)([]),{movieId:e}=(0,h.UO)(),[a,o]=(0,g.lr)(),r=a.get("query")||"",[c,i]=(0,u.useState)("");return(0,u.useEffect)((()=>{}),[e]),(0,u.useEffect)((()=>{r&&(0,x.on)(r).then((n=>{n.results.length>0&&t(n.results)}))}),[r]),(0,f.jsxs)("main",{children:[(0,f.jsxs)(s,{onSubmit:n=>{n.preventDefault(),o({query:c}),c.trim()},children:[(0,f.jsx)(d,{type:"text",autoComplete:"off",autoFocus:!0,value:c,onChange:n=>{i(n.currentTarget.value)}}),(0,f.jsx)(l,{type:"submit",children:"Search"})]}),(0,f.jsx)(p.Z,{movies:n})]})}},390:(n,t,e)=>{e.d(t,{Y5:()=>s,k1:()=>c,oO:()=>l,on:()=>i,y:()=>d});var a=e(294);const o="4ee590f8afe314c87c8a374d8548e25b",r="https://api.themoviedb.org/3";async function c(){try{return(await a.Z.get("".concat(r,"/trending/all/day?api_key=").concat(o,"&language=en-US"))).data}catch(n){throw n}}async function i(n){try{return(await a.Z.get("".concat(r,"/search/movie?query=").concat(n,"&include_adult=false&api_key=").concat(o,"&language=en-US&page=1"))).data}catch(t){throw t}}async function s(n){try{return(await a.Z.get("".concat(r,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"))).data}catch(t){throw t}}async function d(n){try{return(await a.Z.get("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"))).data}catch(t){throw t}}async function l(n){try{return(await a.Z.get("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))).data}catch(t){throw t}}}}]);
//# sourceMappingURL=691.9f5782e1.chunk.js.map