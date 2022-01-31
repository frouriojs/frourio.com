"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[1155],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5946:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],l={id:"lifecycle",title:"Hooks types and lifecycle"},c=void 0,s={unversionedId:"hooks/lifecycle",id:"hooks/lifecycle",title:"Hooks types and lifecycle",description:"Fastify-like Hooks are redefined in frourio for both Fastify and Express.",source:"@site/docs/hooks/lifecycle.md",sourceDirName:"hooks",slug:"/hooks/lifecycle",permalink:"/docs/hooks/lifecycle",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/hooks/lifecycle.md",tags:[],version:"current",frontMatter:{id:"lifecycle",title:"Hooks types and lifecycle"},sidebar:"someSidebar",previous:{title:"Posting FormData",permalink:"/docs/controller/posting-formdata"},next:{title:"Minimum Hooks",permalink:"/docs/hooks/minimum-hooks"}},u=[],p={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Fastify-like Hooks are redefined in frourio for both Fastify and Express."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onRequest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preParsing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preValidation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preHandler"))),(0,i.kt)("p",null,"They will be hooked along the following lifecycle."),(0,i.kt)("p",null,"Proceed by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"done")," (Fastify) / ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," (Express), which can be taken as the third argument.",(0,i.kt)("br",{parentName:"p"}),"\n","*"," Except Fastify when using async / await"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Incoming Request\n  \u2502\n  \u2514\u2500\u25b6 Routing\n        \u2502\n  404 \u25c0\u2500\u2534\u2500\u25b6 onRequest Hook\n              \u2502\n    4**/5** \u25c0\u2500\u2534\u2500\u25b6 preParsing Hook\n                    \u2502\n          4**/5** \u25c0\u2500\u2534\u2500\u25b6 Parsing\n                          \u2502\n                4**/5** \u25c0\u2500\u2534\u2500\u25b6 preValidation Hook\n                                \u2502\n                      4**/5** \u25c0\u2500\u2534\u2500\u25b6 Validation\n                                      \u2502\n                                400 \u25c0\u2500\u2534\u2500\u25b6 preHandler Hook\n                                            \u2502\n                                  4**/5** \u25c0\u2500\u2534\u2500\u25b6 User Handler\n                                                  \u2502\n                                        4**/5** \u25c0\u2500\u2534\u2500\u25b6 Outgoing Response\n")))}f.isMDXComponent=!0}}]);