"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[1184],{5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),s="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),s=n(6010),o=n(2389),i=n(7392),l=n(7094),u=n(2466),p="tabList__CuJ",d="tabItem_LNqP";function f(e){var t,n,o=e.lazy,f=e.block,c=e.defaultValue,m=e.values,y=e.groupId,k=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),w=N.tabGroupChoices,x=N.setTabGroupChoices,T=(0,a.useState)(b),$=T[0],I=T[1],E=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var A=w[y];null!=A&&A!==$&&v.some((function(e){return e.value===A}))&&I(A)}var C=function(e){var t=e.currentTarget,n=E.indexOf(t),r=v[n].value;r!==$&&(j(t),I(r),null!=y&&x(y,String(r)))},R=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;n=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var s,o=E.indexOf(e.currentTarget)-1;n=null!=(s=E[o])?s:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":f},k)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:$===t?0:-1,"aria-selected":$===t,key:t,ref:function(e){return E.push(e)},onKeyDown:R,onFocus:C,onClick:C},o,{className:(0,s.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":$===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===$}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==$})}))))}function c(e){var t=(0,o.Z)();return a.createElement(f,(0,r.Z)({key:String(t)},e))}},709:function(e,t,n){var r=n(7294),a=n(5488),s=n(5162),o=n(9537);t.Z=function(e){var t=e.deps,n=e.devDeps,l=e.before,u=e.after,p=function(e){return[].concat(null!=l?l:[],t?[e+" "+i(e)+" "+t.join(" ")]:[],n?[e+" "+i(e)+" -D "+n.join(" ")]:[],null!=u?u:[])};return r.createElement(a.Z,{groupId:"node-package-manager",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}]},r.createElement(s.Z,{value:"npm"},r.createElement(o.Z,{language:"sh"},p("npm").join("\n"))),r.createElement(s.Z,{value:"yarn"},r.createElement(o.Z,{language:"sh"},p("yarn").join("\n"))))};var i=function(e){switch(e){case"npm":return"install";case"yarn":return"add"}}},3824:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return f},toc:function(){return m}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=n(5488),i=n(5162),l=n(709),u=["components"],p={id:"authentication",title:"Authentication"},d=void 0,f={unversionedId:"guide/authentication",id:"guide/authentication",title:"Authentication",description:"Use AdditionalRequest to share data between hooks and controller.",source:"@site/docs/guide/authentication.mdx",sourceDirName:"guide",slug:"/guide/authentication",permalink:"/docs/guide/authentication",draft:!1,editUrl:"https://github.com/frouriojs/frourio.com/edit/master/docs/guide/authentication.mdx",tags:[],version:"current",frontMatter:{id:"authentication",title:"Authentication"},sidebar:"docs",previous:{title:"Custom Entrypoint",permalink:"/docs/guide/entrypoint"},next:{title:"CORS / Helmet",permalink:"/docs/guide/cors-helmet"}},c={},m=[{value:"Examples",id:"examples",level:2}],y={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,u);return(0,s.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Use ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/additionalRequest"},"AdditionalRequest")," to share data between hooks and controller.")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)(o.Z,{defaultValue:"fastify-jwt",values:[{label:"@fastify/jwt",value:"fastify-jwt"},{label:"@fastify/auth",value:"fastify-auth"},{label:"express-jwt",value:"express-jwt"},{label:"express-passport",value:"express-passport"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"fastify-jwt",mdxType:"TabItem"},(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-jwt"},"fastify/fastify","-","jwt: JWT utils for Fastify"))),(0,s.kt)(l.Z,{before:["cd server"],deps:["@fastify/jwt"],mdxType:"PackageInstallTabs"}),(0,s.kt)("h3",null,"Register the plugin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/service/app.ts"',title:'"$/service/app.ts"'},"import Fastify, { FastifyServerFactory } from 'fastify';\nimport fastifyJwt from '@fastify/jwt';\nimport { API_JWT_SECRET, API_BASE_PATH } from '$/service/envValues';\nimport server from './$server';\n\nexport const init = (serverFactory?: FastifyServerFactory) => {\n  const app = Fastify({ serverFactory });\n  app.register(fastifyJwt, { secret: API_JWT_SECRET });\n  server(app, { basePath: API_BASE_PATH });\n  return app;\n};\n")),(0,s.kt)("h3",null,"Issue tokens"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/api/token/controller.ts"',title:'"$/api/token/controller.ts"'},"import { defineController } from './$relay';\nimport { validateUser } from '$/service/user';\n\nexport default defineController((fastify) => ({\n  post: ({ body }) =>\n    validateUser(body.id, body.pass)\n      ? { status: 201, body: { token: fastify.jwt.sign({ id: body.id }) } }\n      : { status: 401 },\n}));\n")),(0,s.kt)("h3",null,"Verify tokens"),(0,s.kt)("p",null,"Although ",(0,s.kt)("inlineCode",{parentName:"p"},"@fastify/jwt")," extends ",(0,s.kt)("inlineCode",{parentName:"p"},"FastifyRequest"),", it is not reflected to the controller, so you need to prepare it yourself in order to reference it in the controller."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},(0,s.kt)("a",{parentName:"em",href:"/docs/reference/additionalRequest#relaying-of-type-extended-by-plugins"},"Relaying of type extended by plugins"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/api/user/hooks.ts"',title:'"$/api/user/hooks.ts"'},"import { defineHooks } from './$relay';\n\nexport type AdditionalRequest = {\n  user: {\n    id: string;\n  };\n};\n\nexport default defineHooks(() => ({\n  onRequest: (request, reply) => request.jwtVerify().catch((err) => reply.send(err)),\n}));\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/api/user/controller.ts"',title:'"$/api/user/controller.ts"'},"import { defineController } from './$relay';\nimport { getUserNameById } from '$/service/user';\n\nexport default defineController(() => ({\n  get: async ({ user }) => ({ status: 200, body: await getUserNameById(user.id) }),\n  //            ^^^^ extended by AdditionalRequest\n}));\n"))),(0,s.kt)(i.Z,{value:"fastify-auth",mdxType:"TabItem"},(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-auth"},"fastify/fastify","-","auth: Run multiple auth functions in Fastify"))),(0,s.kt)(l.Z,{before:["cd server"],deps:["@fastify/auth"],mdxType:"PackageInstallTabs"}),(0,s.kt)("h3",null,"Register the plugin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/service/app.ts"',title:'"$/service/app.ts"'},"import Fastify, { FastifyServerFactory } from 'fastify';\nimport fastifyAuth from '@fastify/auth';\nimport { API_JWT_SECRET, API_BASE_PATH } from '$/service/envValues';\nimport server from './$server';\n\nexport const init = (serverFactory?: FastifyServerFactory) => {\n  const app = Fastify({ serverFactory });\n  app.register(fastifyAuth);\n  server(app, { basePath: API_BASE_PATH });\n  return app;\n};\n")),(0,s.kt)("h3",null,"Verify tokens"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/api/user/hooks.ts"',title:'"$/api/user/hooks.ts"'},"import { defineHooks } from './$relay';\nimport { getUserIdByToken } from '$/service/user';\n\nexport type AdditionalRequest = {\n  user: {\n    id: string;\n  };\n};\n\nexport default defineHooks((fastify) => ({\n  preHandler: fastify.auth([\n    (req, _, done) => {\n      const user = typeof req.headers.token === 'string' && getUserIdByToken(req.headers.token);\n\n      if (user) {\n        // eslint-disable-next-line\n        // @ts-expect-error\n        req.user = user;\n        done();\n      } else {\n        done(new Error('Unauthorized'));\n      }\n    },\n  ]),\n}));\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/api/user/controller.ts"',title:'"$/api/user/controller.ts"'},"import { defineController } from './$relay';\nimport { getUserNameById } from '$/service/user';\n\nexport default defineController(() => ({\n  // user was added by AdditionalRequest of ./hooks.ts\n  get: async ({ user }) => ({ status: 200, body: await getUserNameById(user.id) }),\n}));\n"))),(0,s.kt)(i.Z,{value:"express-jwt",mdxType:"TabItem"},(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/auth0/express-jwt"},"auth0/express","-","jwt: connect/express middleware that validates a JsonWebToken ","(","JWT",")"," and set the req",".","user with the attributes"))),(0,s.kt)(l.Z,{before:["cd server"],deps:["express-jwt"],devDeps:["@types/express-jwt","@types/jsonwebtoken"],mdxType:"PackageInstallTabs"}),(0,s.kt)("h3",null,"Issue tokens"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/api/token/controller.ts"',title:'"$/api/token/controller.ts"'},"import jwt from 'jsonwebtoken';\nimport { defineController } from './$relay';\nimport { validateUser } from '$/service/user';\n\nexport default defineController(() => ({\n  post: ({ body }) =>\n    validateUser(body.id, body.pass)\n      ? { status: 201, body: { token: jwt.sign({ id: body.id }, process.env.JWT_SECRET) } }\n      : { status: 401 },\n}));\n")),(0,s.kt)("h3",null,"Verify tokens"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/api/user/hooks.ts"',title:'"$/api/user/hooks.ts"'},"import jwt from 'express-jwt';\nimport { defineHooks } from './$relay';\n\nexport type AdditionalRequest = {\n  user: {\n    id: string;\n  };\n};\n\nexport default defineHooks(() => ({\n  onRequest: jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] }),\n}));\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/api/user/controller.ts"',title:'"$/api/user/controller.ts"'},"import { defineController } from './$relay';\nimport { getUserNameById } from '$/service/user';\n\nexport default defineController(() => ({\n  // user was added by AdditionalRequest of ./hooks.ts\n  get: async ({ user }) => ({ status: 200, body: await getUserNameById(user.id) }),\n}));\n"))),(0,s.kt)(i.Z,{value:"express-passport",mdxType:"TabItem"},(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/jaredhanson/passport"},"jaredhanson/passport: Simple, unobtrusive authentication for Node",".","js",".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.passportjs.org/packages/passport-trusted-header/"},"passport-trusted-header"))),(0,s.kt)(l.Z,{before:["cd server"],deps:["passport","passport-trusted-header"],devDeps:["@types/passport"],mdxType:"PackageInstallTabs"}),(0,s.kt)("h3",null,"Verify tokens"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/api/user/hooks.ts"',title:'"$/api/user/hooks.ts"'},"import passport from 'passport';\nimport { defineHooks } from './$relay';\nimport { getUserIdByToken } from '$/service/user';\n\nexport type AdditionalRequest = {\n  user: {\n    id: string;\n  };\n};\n\npassport.use(\n  // eslint-disable-next-line\n  new (require('passport-trusted-header').Strategy)(\n    { headers: ['token'] },\n    // eslint-disable-next-line\n    (headers: { token: string }, done: Function) => {\n      done(null, getUserIdByToken(headers.token));\n    }\n  )\n);\n\nexport default defineHooks(() => ({\n  onRequest: [passport.initialize(), passport.authenticate('trusted-header', { session: false })],\n}));\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="$/api/user/controller.ts"',title:'"$/api/user/controller.ts"'},"import { defineController } from './$relay';\nimport { getUserNameById } from '$/service/user';\n\nexport default defineController(() => ({\n  // user was added by AdditionalRequest of ./hooks.ts\n  get: async ({ user }) => ({ status: 200, body: await getUserNameById(user.id) }),\n}));\n")))))}k.isMDXComponent=!0}}]);