"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[7853],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),u=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,d=e.defaultValue,k=e.values,y=e.groupId,h=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=k?k:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.l)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),A=N.tabGroupChoices,I=N.setTabGroupChoices,T=(0,a.useState)(b),_=T[0],w=T[1],P=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var S=A[y];null!=S&&S!==_&&f.some((function(e){return e.value===S}))&&w(S)}var C=function(e){var t=e.currentTarget,n=P.indexOf(t),r=f[n].value;r!==_&&(E(t),w(r),null!=y&&I(y,String(r)))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=P.indexOf(e.currentTarget)+1;n=null!=(r=P[a])?r:P[0];break;case"ArrowLeft":var i,l=P.indexOf(e.currentTarget)-1;n=null!=(i=P[l])?i:P[P.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},h)},f.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return P.push(e)},onKeyDown:O,onFocus:C,onClick:C},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(g.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function d(e){var t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},8540:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=n(5488),o=n(5162),s=["components"],u={id:"client",title:"Client Static Hosting"},p=void 0,c={unversionedId:"guide/deployments/client",id:"guide/deployments/client",title:"Client Static Hosting",description:"It is possible to deploy each client and server separately in Frourio.",source:"@site/docs/guide/deployments/client.mdx",sourceDirName:"guide/deployments",slug:"/guide/deployments/client",permalink:"/docs/guide/deployments/client",draft:!1,editUrl:"https://github.com/frouriojs/frourio.com/edit/master/docs/guide/deployments/client.mdx",tags:[],version:"current",frontMatter:{id:"client",title:"Client Static Hosting"},sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/docs/guide/deployments/ci"},next:{title:"API Server Hosting",permalink:"/docs/guide/deployments/server"}},m={},d=[{value:"GitHub Pages",id:"github-pages",level:2},{value:"Step 1. add GitHub Actions Workflow",id:"github-pages-1",level:3},{value:"Step 2. add Secrets to Repository",id:"github-pages-2",level:3},{value:"Vercel",id:"vercel",level:2},{value:"Netlify",id:"netlify",level:2}],k={toc:d};function y(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It is possible to deploy each client and server separately in Frourio."),(0,i.kt)(l.Z,{defaultValue:"npm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("p",null,"The client is built with the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install\nnpm run build:client\n")),(0,i.kt)("p",null,"It is your choice whether you want to start it with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run start:client")," or refer to it as ",(0,i.kt)("inlineCode",{parentName:"p"},"out/"),".")),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("p",null,"The client is built with the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn install\nyarn run build:client\n")),(0,i.kt)("p",null,"It is your choice whether you want to start it with ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn run start:client")," or refer to it as ",(0,i.kt)("inlineCode",{parentName:"p"},"out/"),"."))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Below are some examples of typical static hosting services.\nOf course, you can deploy to services not listed here (including your own server), just give it a try!"),(0,i.kt)("h2",{id:"github-pages"},"GitHub Pages"),(0,i.kt)("h3",{id:"github-pages-1"},"Step 1. add GitHub Actions Workflow"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you selected ",(0,i.kt)("strong",{parentName:"p"},"GitHub Pages")," as the ",(0,i.kt)("strong",{parentName:"p"},"Static hosting service")," when you created the app, please ",(0,i.kt)("a",{parentName:"p",href:"#step-2-add-secrets-to-repository"},"SKIP to Step 2"),"!")),(0,i.kt)("p",null,"If you did not select ",(0,i.kt)("strong",{parentName:"p"},"GitHub Pages")," when you created the app, please refer to the following workflow to add a deployment workflow."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("strong",null,".github/workflows/deploy-client.yml")),(0,i.kt)(l.Z,{defaultValue:"npm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title=".github/workflows/deploy-client.yml"',title:'".github/workflows/deploy-client.yml"'},"name: Deploy client\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  deploy:\n    name: Deploy\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v1\n        with:\n          node-version: 14\n      - run: |\n          if test -n '${{ secrets.GH_PAGES_BASE_PATH }}'; then\n            CLIENT_BASE_PATH='${{ secrets.GH_PAGES_BASE_PATH }}'\n          else\n            CLIENT_BASE_PATH=\"/$(echo '${{ github.repository }}' | awk -F '/' '{print $2}')\"\n          fi\n          echo \"CLIENT_BASE_PATH=$CLIENT_BASE_PATH\" >> $GITHUB_ENV\n      - uses: actions/cache@v2\n        id: client-npm-cache\n        with:\n          path: 'node_modules'\n          key: client-npm-${{ hashFiles('package-lock.json') }}\n      - uses: actions/cache@v2\n        id: server-npm-cache\n        with:\n          path: 'server/node_modules'\n          key: server-npm-${{ hashFiles('server/package-lock.json') }}\n      - run: npm install\n        if: steps.client-npm-cache.outputs.cache-hit != 'true'\n      - run: npm install --prefix server\n        if: steps.server-npm-cache.outputs.cache-hit != 'true'\n      - run: npm run build:client\n        env:\n          API_ORIGIN: ${{ secrets.API_ORIGIN }}\n          API_BASE_PATH: ${{ secrets.API_BASE_PATH }}\n      - uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          publish_dir: ./out\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title=".github/workflows/deploy-client.yml"',title:'".github/workflows/deploy-client.yml"'},"name: Deploy client\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  deploy:\n    name: Deploy\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v1\n        with:\n          node-version: 14\n      - run: |\n          if test -n '${{ secrets.GH_PAGES_BASE_PATH }}'; then\n            CLIENT_BASE_PATH='${{ secrets.GH_PAGES_BASE_PATH }}'\n          else\n            CLIENT_BASE_PATH=\"/$(echo '${{ github.repository }}' | awk -F '/' '{print $2}')\"\n          fi\n          echo \"CLIENT_BASE_PATH=$CLIENT_BASE_PATH\" >> $GITHUB_ENV\n      - uses: actions/cache@v2\n        id: client-yarn-cache\n        with:\n          path: 'node_modules'\n          key: client-yarn-${{ hashFiles('yarn.lock') }}\n      - uses: actions/cache@v2\n        id: server-yarn-cache\n        with:\n          path: 'server/node_modules'\n          key: server-yarn-${{ hashFiles('server/yarn.lock') }}\n      - run: yarn install\n        if: steps.client-yarn-cache.outputs.cache-hit != 'true'\n      - run: yarn install --cwd server\n        if: steps.server-yarn-cache.outputs.cache-hit != 'true'\n      - run: yarn run build:client\n        env:\n          API_ORIGIN: ${{ secrets.API_ORIGIN }}\n          API_BASE_PATH: ${{ secrets.API_BASE_PATH }}\n      - uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          publish_dir: ./out\n"))))),(0,i.kt)("h3",{id:"github-pages-2"},"Step 2. add Secrets to Repository"),(0,i.kt)("p",null,"Add following secrets to your GitHub repository."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"API_ORIGIN")),": API origin.",(0,i.kt)("br",{parentName:"li"}),"e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"https://api.my-frourio-app.example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"API_BASE_PATH")),": API basepath.",(0,i.kt)("br",{parentName:"li"}),"e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"/api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"GH_PAGES_BASE_PATH"))," (Optional): Client hosting basepath.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If omitted, GitHub repository name will be used. This is because GitHub hosts Pages at ",(0,i.kt)("inlineCode",{parentName:"li"},"github-username.github.io/repository-name")," with default settings."),(0,i.kt)("li",{parentName:"ul"},"You can also use custom domain. When doing so, it is needed to use that basename. Set this ",(0,i.kt)("inlineCode",{parentName:"li"},"/")," to host your client from root routing.")))),(0,i.kt)("h2",{id:"vercel"},"Vercel"),(0,i.kt)(l.Z,{defaultValue:"npm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Visit ",(0,i.kt)("a",{parentName:"li",href:"https://vercel.com"},"vercel.com")," and create new project."),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"BUILD COMMAND"))," to ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run build:client"),"."),(0,i.kt)("li",{parentName:"ol"},"Add environment variables ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"API_BASE_PATH"))," and ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"API_ORIGIN")),"."))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Visit ",(0,i.kt)("a",{parentName:"li",href:"https://vercel.com"},"vercel.com")," and create new project."),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"BUILD COMMAND"))," to ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn run build:client"),"."),(0,i.kt)("li",{parentName:"ol"},"Add environment variables ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"API_BASE_PATH"))," and ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"API_ORIGIN")),".")))),(0,i.kt)("h2",{id:"netlify"},"Netlify"),(0,i.kt)(l.Z,{defaultValue:"npm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Visit ",(0,i.kt)("a",{parentName:"li",href:"https://app.netlify.com"},"app.netlify.com")," and create new project."),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Site Settings")," > ",(0,i.kt)("strong",{parentName:"li"},"Build & Deploy"),(0,i.kt)("br",{parentName:"li"}),"a. Set ",(0,i.kt)("strong",{parentName:"li"},"Repository")," to your remote repository",(0,i.kt)("br",{parentName:"li"}),"b. Set ",(0,i.kt)("strong",{parentName:"li"},"Build command")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run build:client"),(0,i.kt)("br",{parentName:"li"}),"c. Set ",(0,i.kt)("strong",{parentName:"li"},"Publish directory")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"out/")),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Site Settings")," > ",(0,i.kt)("strong",{parentName:"li"},"Build & Deploy")," > ",(0,i.kt)("strong",{parentName:"li"},"Environment"),(0,i.kt)("br",{parentName:"li"}),"Add environment variables ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"API_ORIGIN"))," and ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"API_BASE_PATH"))))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Visit ",(0,i.kt)("a",{parentName:"li",href:"https://app.netlify.com"},"app.netlify.com")," and create new project."),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Site Settings")," > ",(0,i.kt)("strong",{parentName:"li"},"Build & Deploy"),(0,i.kt)("br",{parentName:"li"}),"a. Set ",(0,i.kt)("strong",{parentName:"li"},"Repository")," to your remote repository",(0,i.kt)("br",{parentName:"li"}),"b. Set ",(0,i.kt)("strong",{parentName:"li"},"Build command")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn run build:client"),(0,i.kt)("br",{parentName:"li"}),"c. Set ",(0,i.kt)("strong",{parentName:"li"},"Publish directory")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"out/")),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Site Settings")," > ",(0,i.kt)("strong",{parentName:"li"},"Build & Deploy")," > ",(0,i.kt)("strong",{parentName:"li"},"Environment"),(0,i.kt)("br",{parentName:"li"}),"Add environment variables ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"API_ORIGIN"))," and ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"API_BASE_PATH")))))))}y.isMDXComponent=!0}}]);