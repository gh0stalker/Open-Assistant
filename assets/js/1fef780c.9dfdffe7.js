"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[1801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),y=p(n),u=i,k=y["".concat(s,".").concat(u)]||y[u]||m[u]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[y]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53760:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const l={},o="Post Message Emoji",r={type:"api",id:"post-message-emoji",unversionedId:"post-message-emoji",title:"Post Message Emoji",description:"",slug:"/post-message-emoji",frontMatter:{},api:{tags:["messages"],description:"Toggle, add or remove message emoji.",operationId:"post_message_emoji_api_v1_messages__message_id__emoji_post",parameters:[{required:!0,schema:{title:"Message Id",type:"string",format:"uuid"},name:"message_id",in:"path"}],requestBody:{content:{"application/json":{schema:{title:"MessageEmojiRequest",required:["user","emoji"],type:"object",properties:{user:{title:"User",required:["id","display_name","auth_method"],type:"object",properties:{id:{title:"Id",type:"string"},display_name:{title:"Display Name",type:"string"},auth_method:{title:"Auth Method",enum:["discord","google","local","system"],type:"string"}}},op:{default:"toggle",title:"EmojiOp",enum:["toggle","add","remove"],type:"string",description:"An enumeration."},emoji:{title:"EmojiCode",enum:["+1","-1","red_flag","100","rofl","clap","diamond","heart_eyes","disappointed","poop","skull","_skip_reply","_skip_ranking","_skip_labeling"],type:"string",description:"An enumeration."}}}}},required:!0},responses:{202:{description:"Successful Response",content:{"application/json":{schema:{}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{"api-key":[]},{"api-key":[]}],method:"post",path:"/api/v1/messages/{message_id}/emoji",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},jsonRequestBodyExample:{user:{id:"string",display_name:"string",auth_method:"discord"},op:"toggle",emoji:"+1"},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Post Message Emoji",description:{content:"Toggle, add or remove message emoji.",type:"text/plain"},url:{path:["api","v1","messages",":message_id","emoji"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<uuid>",key:"message_id"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "user": {\n        "id": "<string>",\n        "display_name": "<string>",\n        "auth_method": "<string>"\n    },\n    "emoji": "<string>",\n    "op": "toggle"\n}'},auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/backend-openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/post-message-emoji",previous:{title:"Undelete Message",permalink:"/Open-Assistant/api/undelete-message"},next:{title:"Get Message By Frontend Id",permalink:"/Open-Assistant/api/get-message-by-frontend-id"}},s=[],p={toc:s},d="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"post-message-emoji"},"Post Message Emoji"),(0,i.kt)("p",null,"Toggle, add or remove message emoji."),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"message_id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"user"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"display_name"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Display Name"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"auth_method"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Auth Method"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"discord"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"google"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"local"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"system"),"]")))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"op"),(0,i.kt)("span",{style:{opacity:"0.6"}}," EmojiOp"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"toggle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"remove"),"]")),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"An enumeration.")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"emoji"),(0,i.kt)("span",{style:{opacity:"0.6"}}," EmojiCode"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"+1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"red_flag"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"rofl"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"clap"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"diamond"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"heart_eyes"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"disappointed"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"poop"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"skull"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_skip_reply"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_skip_ranking"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_skip_labeling"),"]")),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"An enumeration.")))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"202")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Successful Response"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("span",{style:{opacity:"0.6"}}," undefined")))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"422")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Validation Error"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"detail"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"loc"),(0,i.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"msg"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Message"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Error Type")))))))))))))))}y.isMDXComponent=!0}}]);