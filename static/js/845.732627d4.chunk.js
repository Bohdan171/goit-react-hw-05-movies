"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[845],{845:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,i,o,c,a,s,u=e(885),p=e(791),l=e(731),d=e(739),f=e(392),h=e(168),v=e(444),x=(0,v.ZP)(l.OL)(r||(r=(0,h.Z)(["\n  color: black;\n  font-size: 20px;\n  font-weight: 500;\n  margin-botton: 15px;\n\n  &:focus,\n  &:hover {\n    color: red;\n  }\n"]))),m=v.ZP.div(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n  margin-bottom: 15px;\n  margin-top: 15px;\n  border-bottom: 1px solid black;\n"]))),g=v.ZP.div(o||(o=(0,h.Z)(["\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n"]))),j=v.ZP.img(c||(c=(0,h.Z)(["\n  width: 300px;\n"]))),w=v.ZP.span(a||(a=(0,h.Z)(["\n  margin-left: 10px;\n"]))),y=v.ZP.ul(s||(s=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n  border-bottom: 1px solid black;\n  font-size: 18px;\n  padding-bottom: 15px;\n"]))),b=e(184),k=function(){var n,t,e=(0,p.useState)([]),r=(0,u.Z)(e,2),i=r[0],o=r[1],c=(0,d.TH)(),a=null!==(n=null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",s=(0,d.UO)().movieId;(0,p.useEffect)((function(){""!==s&&(0,f.Kc)(s).then((function(n){o(n)})).catch((function(n){return console.log(n)}))}),[s]);var h,v,k=i.title,Z=i.name,_=i.poster_path,P=i.genres,U=i.overview,S=i.vote_average;return 0===i.length?(0,b.jsx)("p",{children:"We don't have any information for this movie."}):(0,b.jsxs)("main",{children:[(0,b.jsxs)(x,{to:a,children:[(0,b.jsx)("span",{children:"\ud83e\udc14"}),"Go back"]}),(0,b.jsxs)(m,{children:[(0,b.jsx)(j,{src:void 0!==_||null!==_?"https://image.tmdb.org/t/p/w500".concat(_):"https://mysteriouswritings.com/wp-content/uploads/2017/02/movie.jpg",alt:""}),(0,b.jsxs)(g,{children:[(0,b.jsx)("h1",{children:k||Z}),(0,b.jsxs)("p",{children:["User Score:",(0,b.jsx)(w,{children:S})]}),(0,b.jsx)("h2",{children:"Overview"}),(0,b.jsx)("p",{children:U}),(0,b.jsx)("h2",{children:"Genre"}),(0,b.jsx)("p",{children:P?P.map((function(n){return n.name+" "})):" "})]})]}),(0,b.jsx)("h2",{children:"Additional information"}),(0,b.jsxs)(y,{children:[(0,b.jsx)("li",{children:(0,b.jsx)(l.rU,{to:"cast",state:{from:null===c||void 0===c||null===(h=c.state)||void 0===h?void 0:h.from},children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(l.rU,{to:"reviews",state:{from:null===c||void 0===c||null===(v=c.state)||void 0===v?void 0:v.from},children:"Reviews"})})]}),(0,b.jsx)(p.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading..."}),children:(0,b.jsx)(d.j3,{})})]})}},392:function(n,t,e){function r(n,t,e,r,i,o,c){try{var a=n[o](c),s=a.value}catch(u){return void e(u)}a.done?t(s):Promise.resolve(s).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var c=n.apply(t,e);function a(n){r(c,i,o,a,s,"next",n)}function s(n){r(c,i,o,a,s,"throw",n)}a(void 0)}))}}e.d(t,{PI:function(){return h},Kc:function(){return d},Zn:function(){return s},Bt:function(){return x},Up:function(){return p}});var o=e(757),c=e.n(o),a="024bf82d4805f650033dc69997860333";function s(){return u.apply(this,arguments)}function u(){return(u=i(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(a),n.next=3,fetch(t);case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=i(c().mark((function n(t){var e,r,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&language=en-US&page=1&include_adult=false&query=").concat(t),n.next=3,fetch(e);case 3:return r=n.sent,n.next=6,r.json();case 6:return i=n.sent,n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=i(c().mark((function n(t){var e,r,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(a,"&language=en-US"),n.next=3,fetch(e);case 3:return r=n.sent,n.next=6,r.json();case 6:return i=n.sent,n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=i(c().mark((function n(t){var e,r,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(a,"&language=en-US"),n.next=3,fetch(e);case 3:return r=n.sent,n.next=6,r.json();case 6:return i=n.sent,n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=i(c().mark((function n(t){var e,r,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(a,"&language=en-US&page=1"),n.next=3,fetch(e);case 3:return r=n.sent,n.next=6,r.json();case 6:return i=n.sent,n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=845.732627d4.chunk.js.map