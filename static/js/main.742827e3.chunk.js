(this["webpackJsonpimg-search-engine"]=this["webpackJsonpimg-search-engine"]||[]).push([[0],{19:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(6),a=c.n(n),r=c(3),i=(c(19),c(4)),j=c.n(i),l=c(0),o=function(e){var t=e.changeResult,c=e.photo,n=e.clientId,a=Object(s.useState)([]),i=Object(r.a)(a,2),o=i[0],b=i[1],d=Object(s.useState)(2),u=Object(r.a)(d,2),h=u[0],p=u[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"result",children:o.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"card img-fluid",children:Object(l.jsx)("img",{src:e.urls.thumb,alt:"pic"})})})}))}),Object(l.jsxs)("div",{className:"mx-auto",children:[Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"submit",onClick:function(){return function(e){t();var s="https://api.unsplash.com/search/photos?page="+h+"&per_page=8&orientation=landscape&query="+c+"&client_id="+n;j.a.get(s).then((function(e){b(e.data.results)})),p(h+1)}()},class:"btn btn-dark",id:"load-button",children:"Load more"})]})]})};function b(){var e=Object(s.useState)("start"),t=Object(r.a)(e,2),c=t[0],n=t[1];var a=Object(s.useState)(""),i=Object(r.a)(a,2),b=i[0],d=i[1],u="SCd8Kl1yM02DpS8zAd-voT40LZUaZJz3VqJDnn1TnPI",h=Object(s.useState)([]),p=Object(r.a)(h,2),O=p[0],m=p[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"App ",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("h1",{className:"text-center",children:"Image Search Engine"}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("input",{onChange:function(e){d(e.target.value)},className:"form-control input-lg shadow-sm bg-body rounded ",type:"text",name:"photo",placeholder:"Search for photos"}),Object(l.jsx)("span",{className:"input-group-btn input-space",children:Object(l.jsx)("button",{onClick:function(){!function(e){console.log(b);var t="https://api.unsplash.com/search/photos?page=1&per_page=8&orientation=landscape&query="+b+"&client_id="+u;j.a.get(t).then((function(e){m(e.data.results)}))}(),n("load")},type:"submit",className:"btn btn-dark",children:Object(l.jsx)("i",{className:"fa fa-search"})})})]}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:"load"===c&&Object(l.jsxs)("h3",{class:"search_term",children:['Search results for "',b,'" :']})}),Object(l.jsx)("div",{className:"result",children:O.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"card img-fluid",children:Object(l.jsx)("img",{src:e.urls.thumb,alt:"pic"})})})}))}),Object(l.jsx)("div",{className:"align-center",children:"load"===c&&Object(l.jsx)(o,{changeResult:function(){m([])},photo:b,clientId:u})})]})})})}var d=document.getElementById("root");a.a.render(Object(l.jsx)(s.StrictMode,{children:Object(l.jsx)(b,{})}),d)}},[[39,1,2]]]);
//# sourceMappingURL=main.742827e3.chunk.js.map