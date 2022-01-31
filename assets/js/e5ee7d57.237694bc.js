"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[6049],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(3117),a=t(7294),o=t(2389),l=t(4726),u=t(6010),s="tabItem_LplD";function i(e){var n,t,o,i=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,l.lx)(y,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),k=g.tabGroupChoices,w=g.setTabGroupChoices,T=(0,a.useState)(b),E=T[0],O=T[1],I=[],_=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=k[d];null!=j&&j!==E&&y.some((function(e){return e.value===j}))&&O(j)}var x=function(e){var n=e.currentTarget,t=I.indexOf(n),r=y[t].value;r!==E&&(_(n),O(r),null!=d&&w(d,r))},N=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;t=I[r]||I[0];break;case"ArrowLeft":var a=I.indexOf(e.currentTarget)-1;t=I[a]||I[I.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},f)},y.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return I.push(e)},onKeyDown:N,onFocus:x,onClick:x},o,{className:(0,u.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function c(e){var n=(0,o.Z)();return a.createElement(i,(0,r.Z)({key:String(n)},e))}},3123:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),l=t(9877),u=t(8215),s=["components"],i={id:"ci",title:"Continuous Integration"},c=void 0,p={unversionedId:"deployments/ci",id:"deployments/ci",title:"Continuous Integration",description:"Here are the five commands you need to run for Frourio testing!",source:"@site/docs/deployments/ci.mdx",sourceDirName:"deployments",slug:"/deployments/ci",permalink:"/docs/deployments/ci",editUrl:"https://github.com/frouriojs/frourio.com/edit/master/docs/deployments/ci.mdx",tags:[],version:"current",frontMatter:{id:"ci",title:"Continuous Integration"},sidebar:"someSidebar",previous:{title:"TypeORM",permalink:"/docs/orm/typeorm"},next:{title:"Client Static Hosting",permalink:"/docs/deployments/client"}},m=[{value:"GitHub Actions Workflow",id:"github-actions-workflow",children:[],level:2}],d={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here are the five commands you need to run for Frourio testing!\nYou can run them wherever you like."),(0,o.kt)(l.Z,{defaultValue:"npm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install\nnpm install --prefix server\nnpm run lint\nnpm run typecheck\nnpm test\n"))),(0,o.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn install\nyarn install --cwd server\nyarn lint\nyarn typecheck\nyarn test\n")))),(0,o.kt)("h2",{id:"github-actions-workflow"},"GitHub Actions Workflow"),(0,o.kt)("p",null,"For reference, the following workflow will be generated in ",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows/test.yml")," if you select GItHub Actions in CI config when you create a project."),(0,o.kt)("p",null,"Since the workflow will vary depending on your configuration, we recommend that you use create-frourio-app to generate a workflow that fits your configuration."),(0,o.kt)(l.Z,{defaultValue:"npm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title=".github/workflows/test.yml"',title:'".github/workflows/test.yml"'},"name: Test\n\non: push\n\njobs:\n  test:\n    name: Test\n    runs-on: ubuntu-latest\n    env:\n      API_SERVER_PORT: 8080\n      API_ORIGIN: http://localhost:8080\n      API_BASE_PATH: /api\n    steps:\n      - uses: actions/checkout@v2\n      - name: setup Node.js\n        uses: actions/setup-node@v1\n        with:\n          node-version: 14\n      - uses: actions/cache@v2\n        id: client-npm-cache\n        with:\n          path: \"node_modules\"\n          key: client-npm-${{ hashFiles('package-lock.json') }}\n      - uses: actions/cache@v2\n        id: server-npm-cache\n        with:\n          path: \"server/node_modules\"\n          key: server-npm-${{ hashFiles('server/package-lock.json') }}\n      - run: npm install\n        if: steps.client-npm-cache.outputs.cache-hit != 'true'\n      - run: npm install --prefix server\n        if: steps.server-npm-cache.outputs.cache-hit != 'true'\n      - run: npm run lint\n      - run: |\n          sudo systemctl start mysql.service\n          echo \"DATABASE_URL=mysql://root:root@localhost:3306/test\" > server/prisma/.env\n      - run: npm run typecheck\n      - run: |\n          npm run migrate:dev\n          npm test\n        env:\n          API_JWT_SECRET: test_secret\n"))),(0,o.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title=".github/workflows/test.yml"',title:'".github/workflows/test.yml"'},"name: Test\n\non: push\n\njobs:\n  test:\n    name: Test\n    runs-on: ubuntu-latest\n    env:\n      API_SERVER_PORT: 8080\n      API_ORIGIN: http://localhost:8080\n      API_BASE_PATH: /api\n    steps:\n      - uses: actions/checkout@v2\n      - name: setup Node.js\n        uses: actions/setup-node@v1\n        with:\n          node-version: 14\n      - uses: actions/cache@v2\n        id: client-yarn-cache\n        with:\n          path: \"node_modules\"\n          key: client-yarn-${{ hashFiles('yarn.lock') }}\n      - uses: actions/cache@v2\n        id: server-yarn-cache\n        with:\n          path: \"server/node_modules\"\n          key: server-yarn-${{ hashFiles('server/yarn.lock') }}\n      - run: yarn install\n        if: steps.client-yarn-cache.outputs.cache-hit != 'true'\n      - run: yarn install --cwd server\n        if: steps.server-yarn-cache.outputs.cache-hit != 'true'\n      - run: yarn run lint\n      - run: |\n          sudo systemctl start mysql.service\n          echo \"DATABASE_URL=mysql://root:root@localhost:3306/test\" > server/prisma/.env\n      - run: yarn run typecheck\n      - run: |\n          yarn run migrate:dev\n          yarn test\n        env:\n          API_JWT_SECRET: test_secret\n")))))}f.isMDXComponent=!0}}]);