"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[714],{1127:function(e,t,n){n.d(t,{N:function(){return c}});var r=n(5861),i=n(7757),s=n.n(i),a=n(1243),c=function(){var e=(0,r.Z)(s().mark((function e(t,n,r){var i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("https://api.themoviedb.org/3/".concat(t),{method:"get",params:{api_key:"a81c1605085a06fbd0d7cd3eb503f28e",query:n,page:r}});case 2:return i=e.sent,e.abrupt("return",i.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},8714:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(9439),i=n(2791),s=n(7689),a=n(1127),c=n(1087),o=n(2007),l=n.n(o),d="Additional_title__pAZ5n",u="Additional_item__E1ZMR",h="Additional_link__Z2zZg",f=n(184),m=[{href:"cast",text:"Cast"},{href:"reviews",text:"Reviews"}];m.propTypes={location:l().shape({pathname:l().string.isRequired,search:l().string.isRequired,key:l().string.isRequired,hash:l().string,state:l().bool}).isRequired};var _=function(e){var t=e.location;return(0,f.jsxs)("div",{children:[(0,f.jsx)("h4",{className:d,children:"Addititonal information"}),(0,f.jsx)("ul",{children:m.map((function(e){var n=e.href,r=e.text;return(0,f.jsx)("li",{className:u,children:(0,f.jsx)(c.rU,{to:n,state:{from:t},className:h,children:r})},n)}))}),(0,f.jsx)("hr",{})]})},v=n(3728),x="InfoMovie_cardFilm__VOC91",p="InfoMovie_title__7-N3R",j="InfoMovie_img__QfNMG",k="InfoMovie_score__KbE3a",g=function(e){var t=e.movie,n=t.title,r=t.name,i=t.overview,s=t.genres,a=t.release_date,c=t.first_air_date,o=t.poster_path,l=t.vote_average,d=Math.round(10*l),u="https://image.tmdb.org/t/p/w500".concat(o);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:x,children:[o?(0,f.jsx)("img",{src:u,alt:n||r,width:"200",className:j}):(0,f.jsx)(v.$kb,{size:120,className:j}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h2",{className:p,children:[n||r," (",(c||a).slice(0,4),")"]}),(0,f.jsxs)("p",{className:k,children:["User Score: ",d,"%"]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:i}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:s.map((function(e){return e.name})).join(", ")})]})]}),(0,f.jsx)("hr",{})]})},N=n(9126),b="GoBackButton_container__prr-a",w="GoBackButton_link__5eNxG",M=function(e){var t=e.backLinkHref;return(0,f.jsx)("div",{className:b,children:(0,f.jsxs)(c.rU,{to:t,className:w,children:[(0,f.jsx)(N.i1r,{size:20}),"Go back"]})})},R=n(9570),Z=function(){var e,t,n=(0,i.useState)(null),c=(0,r.Z)(n,2),o=c[0],l=c[1],d=(0,s.UO)().movieId,u=null!==(e=null===(t=(0,s.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";if((0,i.useEffect)((function(){(0,a.N)("movie/".concat(d)).then((function(e){l(e)})).catch(console.log)}),[d]),o)return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(M,{backLinkHref:u}),(0,f.jsx)(g,{movie:o}),(0,f.jsx)(_,{location:u}),(0,f.jsx)(i.Suspense,{fallback:(0,f.jsx)(R.a,{}),children:(0,f.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=714.a3355e0b.chunk.js.map