"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||g[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:8},o="Feegrant",c={unversionedId:"tutorial-basics/feegrant",id:"tutorial-basics/feegrant",title:"Feegrant",description:"Grant allowence",source:"@site/docs/tutorial-basics/feegrant.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/feegrant",permalink:"/cli_doc/docs/tutorial-basics/feegrant",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/feegrant.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Crosschain",permalink:"/cli_doc/docs/tutorial-basics/crosschain"}},i={},s=[{value:"Grant allowence",id:"grant-allowence",level:2},{value:"Get allowences",id:"get-allowences",level:2},{value:"Get allowence",id:"get-allowence",level:2}],p={toc:s},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"feegrant"},"Feegrant"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Options:                                                                                                            \n  -h, --help                 display help for command                                                               \n\nCommands:\n  get-allowence <grantee>    get allowence\n  get-allowences <grantee>   get allowences\n  grant-allowence <grantee>  grant allowence\n  help [command]             display help for command\n\n\n\n")),(0,a.kt)("h2",{id:"grant-allowence"},"Grant allowence"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"grant allowence"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"greenfield-cli feegrant grant-allowence <gretee>\n")),(0,a.kt)("h2",{id:"get-allowences"},"Get allowences"),(0,a.kt)("p",null,"--\nget allowences"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"greenfield-cli feegrant get-allowences <grantee>\n")),(0,a.kt)("h2",{id:"get-allowence"},"Get allowence"),(0,a.kt)("p",null,"--\nget allowences"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"greenfield-cli feegrant get-allowence <grantee>\n")))}g.isMDXComponent=!0}}]);