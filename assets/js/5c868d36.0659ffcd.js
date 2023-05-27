"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,f=p["".concat(l,".").concat(g)]||p[g]||u[g]||s;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:1},i="Storage providers",o={unversionedId:"tutorial-basics/create-a-page",id:"tutorial-basics/create-a-page",title:"Storage providers",description:"---",source:"@site/docs/tutorial-basics/create-a-page.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-page",permalink:"/cli_doc/docs/tutorial-basics/create-a-page",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/create-a-page.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Basics",permalink:"/cli_doc/docs/category/tutorial---basics"},next:{title:"Create a Document",permalink:"/cli_doc/docs/tutorial-basics/create-a-document"}},l={},c=[{value:"Abstract",id:"abstract",level:2},{value:"List storage providers",id:"list-storage-providers",level:2},{value:"Get SP informations",id:"get-sp-informations",level:2},{value:"Get a secondary storage price",id:"get-a-secondary-storage-price",level:2},{value:"Get a storage price",id:"get-a-storage-price",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"storage-providers"},"Storage providers"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"The storage providers (SP) are storage service infrastructures that organizations or individuals provide and the corresponding roles they play. They use Greenfield as the ledger and the single source of truth. Each SP can and will respond to users' requests to write (upload) and read (download) data, and serve as the gatekeeper for user rights and authentications."),(0,r.kt)("p",null,"The SP module is responsible for managing and keeping storage providers in the network. This includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Metadata: Basic information, such as address, tokens, and status, about each SP."),(0,r.kt)("li",{parentName:"ul"},"Deposit: Aspiring SPs must stake tokens to guarantee their capacity to offer storage services."),(0,r.kt)("li",{parentName:"ul"},"Slash: Stored data on an SP is occasionally challenged. If the challenge succeeds, the SP is penalized by losing some of its staked tokens."),(0,r.kt)("li",{parentName:"ul"},"Reputation: We are implementing a reputation system to assess the quality of each SP's service. Users can select an SP based on its reputation score to store their data."),(0,r.kt)("li",{parentName:"ul"},"Exit: SPs can leave voluntarily as long as they adhere to specific rules and recover their staked tokens. Greenfield may also force an SP to exit if it lacks sufficient staked tokens or its reputation score falls below the minimum requirements for an SP.")),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"greenfield-cli sp\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Options:\n  -h, --help       display help for command\n\nCommands:\n  ls               list all storage providers\n  secondary        secondary storage price, including update time and store\n                   price\n  info <address>   info with the sp chain address\n  price <address>  price with the sp chain address\n  help [command]   display help for command\n")),(0,r.kt)("h2",{id:"list-storage-providers"},"List storage providers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"greenfield-cli sp ls\n")),(0,r.kt)("p",null,"Response example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[\n  {\n    operatorAddress: '0x22804504786F44289D4156E7317142e25B92c00e',\n    fundingAddress: '0xd641C35f947Eb60676f0e0793691bB174256C651',\n    sealAddress: '0xE4F1Ac4B9312724D2819347c5c91252b650C4AEb',\n    approvalAddress: '0xaF07AdBb21029adf12FB6E4515Ed8dA0A7e252a2',\n    gcAddress: '0xfF755134416a0Ebc4A614f951163a2Ecf48C069b',\n    totalDeposit: '1000000000000000000000',\n    status: 0,\n    endpoint: 'https://gnfd-testnet-sp-2.bnbchain.org',\n    description: {\n      moniker: 'Zenon',\n      identity: '',\n      website: 'https://gnfd-testnet-sp-2.bnbchain.org',\n      securityContact: '',\n      details: 'Zenon'\n    }\n  },\n  {\n    operatorAddress: '0x3CFC8b2095DA8F0722412Dc16f8A067942d2c697',\n    fundingAddress: '0xE44c4e725598CCa7Da3c506869d658a84e599983',\n    sealAddress: '0x43416fd2Dd08Bc6F2004B9a5fA53686B7F541d58',\n    approvalAddress: '0x0DC08D602aaAAAA7e2fD604f9f96DdD2cD67FE51',\n    gcAddress: '0xD27faC13b0C38f57ce1840Fc55e7B8b66dEBB342',\n    totalDeposit: '1000000000000000000000',\n    status: 0,\n    endpoint: 'https://gnfd-testnet-sp-6.bnbchain.org',\n    description: {\n      moniker: 'Gadgetron',\n      identity: '',\n      website: 'https://gnfd-testnet-sp-6.bnbchain.org',\n      securityContact: '',\n      details: 'Gadgetron'\n    }\n  }\n]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"get-sp-informations"},"Get SP informations"),(0,r.kt)("p",null,"info with the sp chain address"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"greenfield-cli sp info <address>\n")),(0,r.kt)("p",null,"Response example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  operatorAddress: '0xB573F5c174f33aF0CA033c8A287061C1538fb130',\n  fundingAddress: '0x4B956d53E466a53d5FdE86781F1f547B44a19260',\n  sealAddress: '0x674d969927AbA4eE9Cd05e5079655BB099D83d85',\n  approvalAddress: '0x648848d33938Ab930Da70cC71eda2Bd0175f7150',\n  gcAddress: '0xc5f1910AF4771720395f33f2FBBe782233215b4B',\n  totalDeposit: '1000000000000000000000',\n  status: 0,\n  endpoint: 'https://gnfd-testnet-sp-7.bnbchain.org',\n  description:\n    {\n    moniker: 'Titan',\n    identity: '',\n    website: 'https://gnfd-testnet-sp-7.bnbchain.org',\n    securityContact: '',\n    details: 'Titan'\n  }\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"get-a-secondary-storage-price"},"Get a secondary storage price"),(0,r.kt)("p",null,"secondary storage price, including update time and store price"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"greenfield-cli sp secondary\n")),(0,r.kt)("p",null,"Response example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  updateTimeSec: Long { low: 1685085151, high: 0, unsigned: false },\n  storePrice: '27690000000000000'\n}\n\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"get-a-storage-price"},"Get a storage price"),(0,r.kt)("p",null,"price with the sp chain address"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"greenfield-cli sp price <address>\n")),(0,r.kt)("p",null,"Response example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  spAddress: '0xbaEbB9A16b57919ba7240A72B848777732B16638',\n  updateTimeSec: Long { low: 1685003140, high: 0, unsigned: false },\n  readPrice: '87000000000000000',\n  freeReadQuota: Long { low: 1073741824, high: 0, unsigned: true },\n  storePrice: '48000000000000000'\n}\n")))}u.isMDXComponent=!0}}]);