"use strict";(self.webpackChunkmovies_app=self.webpackChunkmovies_app||[]).push([[12],{1687:function(t,e,n){n.d(e,{s:function(){return r},u:function(){return a}});var r="https://image.tmdb.org/t/p/w500",a="https://image.tmdb.org/t/p/original"},457:function(t,e,n){n.d(e,{i:function(){return i}});var r=n(9432),a=n(1687),c=n.p+"static/media/no-image-main.f8657734ad32c56a1871.jpeg",s=n(184),u=function(t){var e=t.data,n="movies"===t.path?"movies":"tv-shows";return(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"group w-[320px]  mt-4",children:(0,s.jsxs)("a",{href:"/".concat(n,"/").concat(e.id),children:[(0,s.jsx)("img",{className:"object-cover",src:e.backdrop_path?a.u+"".concat(e.backdrop_path):c,alt:e.original_title}),(0,s.jsx)("h4",{className:"text-white text-xl group-hover:text-purple-500 mt-2",children:e.title?e.title:e.name})]})})})},i=(n(5257),function(t){var e=t.slides,n=t.title,a=t.path;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{className:"text-white text-4xl mt-8",children:n}),(0,s.jsx)(r.tq,{spaceBetween:e.length,slidesPerView:4,children:e.map((function(t){return(0,s.jsx)(r.o5,{children:(0,s.jsx)(u,{data:t,path:a})},t.id)}))})]})})},7415:function(t,e,n){n.r(e);var r=n(2791),a=n(9434),c=n(6251),s=n(941),u=n(457),i=n(184);e.default=function(){var t=(0,a.I0)();(0,r.useEffect)((function(){t((0,c.SU)()),t((0,c.Yx)()),t((0,s.O1)()),t((0,s.s$)())}),[t]);var e=(0,a.v9)((function(t){return t.movies.popularMoviesReducer})),n=(0,a.v9)((function(t){return t.movies.topMoviesReducer})),o=(0,a.v9)((function(t){return t.tv.popularTvShowReducer})),p=(0,a.v9)((function(t){return t.tv.topTvShowReducer}));return(0,i.jsxs)("div",{className:"mx-20 pb-10",children:[(0,i.jsx)(u.i,{slides:e,title:"Popular Movies",path:"movies"}),(0,i.jsx)(u.i,{slides:n,title:"Top Rated Movies",path:"movies"}),(0,i.jsx)(u.i,{slides:o,title:"Popular TV Shows",path:"tv-shows"}),(0,i.jsx)(u.i,{slides:p,title:"Top Rated TV Shows",path:"tv-shows"})]})}},6251:function(t,e,n){n.d(e,{Fn:function(){return v},SU:function(){return i},Y5:function(){return f},Yx:function(){return o},oO:function(){return h},uV:function(){return l},wr:function(){return p}});var r=n(4165),a=n(5861),c=n(1912),s=n(5699),u="98e87da0e762537a8cb63c18dd13caee",i=function(){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e((0,s.wX)()),t.prev=1,t.next=4,c.Z.post("https://api.themoviedb.org/3/movie/popular?api_key=".concat(u,"&language=en-US"));case 4:n=t.sent,e((0,s.pU)(n.data.results)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e((0,s.ah)(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},o=function(){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e((0,s.CR)()),t.prev=1,t.next=4,c.Z.post("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(u,"&language=en-US"));case 4:n=t.sent,e((0,s.N0)(n.data.results)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e((0,s.MB)(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},p=function(){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e((0,s.gV)()),t.prev=1,t.next=4,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 4:n=t.sent,e((0,s._O)(n.data.results)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e((0,s.IM)(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},v=function(t){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n((0,s.YV)()),e.prev=1,e.next=4,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(t));case 4:a=e.sent,n((0,s.QP)(a.data.results)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n((0,s.zj)(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},f=function(t){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n((0,s.FE)()),e.prev=1,e.next=4,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 4:a=e.sent,n((0,s.j2)(a.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n((0,s.pr)(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},h=function(t){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n((0,s.F5)()),e.prev=1,e.next=4,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=").concat(u,"&language=en-US"));case 4:a=e.sent,n((0,s.e1)(a.data.results)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n((0,s.ck)(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},l=function(t){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n((0,s.HD)()),e.prev=1,e.next=4,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 4:a=e.sent,n((0,s.ZC)(a.data.cast)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n((0,s.cl)(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}},941:function(t,e,n){n.d(e,{$V:function(){return h},CQ:function(){return p},GS:function(){return l},O1:function(){return i},Uc:function(){return f},eO:function(){return v},s$:function(){return o}});var r=n(4165),a=n(5861),c=n(1912),s=n(9e3),u="98e87da0e762537a8cb63c18dd13caee",i=function(){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e((0,s.Af)()),t.prev=1,t.next=4,c.Z.post("https://api.themoviedb.org/3/tv/popular?api_key=".concat(u,"&language=en-US"));case 4:n=t.sent,e((0,s.iI)(n.data.results)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e((0,s.mj)(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},o=function(){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e((0,s.iK)()),t.prev=1,t.next=4,c.Z.post("https://api.themoviedb.org/3/tv/top_rated?api_key=".concat(u,"&language=en-US"));case 4:n=t.sent,e((0,s.hz)(n.data.results)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e((0,s.BG)(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},p=function(){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e((0,s.Jf)()),t.prev=1,t.next=4,c.Z.get("https://api.themoviedb.org/3/trending/tv/day?api_key=".concat(u));case 4:n=t.sent,e((0,s.aJ)(n.data.results)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e((0,s.wo)(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},v=function(t){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n((0,s.RI)()),e.prev=1,e.next=4,c.Z.get("https://api.themoviedb.org/3/search/tv?api_key=".concat(u,"&query=").concat(t));case 4:a=e.sent,n((0,s.XQ)(a.data.results)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n((0,s.Yg)(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},f=function(t){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n((0,s.nt)()),e.prev=1,e.next=4,c.Z.get("https://api.themoviedb.org/3/tv/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 4:a=e.sent,n((0,s.C1)(a.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n((0,s.gQ)(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},h=function(t){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n((0,s.Tw)()),e.prev=1,e.next=4,c.Z.get("https://api.themoviedb.org/3/tv/".concat(t,"/videos?api_key=").concat(u,"&language=en-US"));case 4:a=e.sent,n((0,s.xj)(a.data.results)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n((0,s.R_)(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},l=function(t){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n((0,s.kC)()),e.prev=1,e.next=4,c.Z.get("https://api.themoviedb.org/3/tv/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 4:a=e.sent,n((0,s.gv)(a.data.cast)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n((0,s.ge)(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=Main.33c3ce88.chunk.js.map