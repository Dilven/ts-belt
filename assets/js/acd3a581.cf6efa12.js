"use strict";(self.webpackChunkts_belt_docs=self.webpackChunkts_belt_docs||[]).push([[474],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=l,h=d["".concat(u,".").concat(f)]||d[f]||c[f]||r;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7211:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>d,default:()=>y,frontMatter:()=>c,metadata:()=>f,toc:()=>h});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),o=["components"],i=[{value:"allPass",id:"allpass",children:[],level:3},{value:"always",id:"always",children:[],level:3},{value:"anyPass",id:"anypass",children:[],level:3},{value:"both",id:"both",children:[],level:3},{value:"defaultTo",id:"defaultto",children:[],level:3},{value:"either",id:"either",children:[],level:3},{value:"equals",id:"equals",children:[],level:3},{value:"falsy",id:"falsy",children:[],level:3},{value:"identity",id:"identity",children:[],level:3},{value:"ifElse",id:"ifelse",children:[],level:3},{value:"ignore",id:"ignore",children:[],level:3},{value:"truthy",id:"truthy",children:[],level:3},{value:"unless",id:"unless",children:[],level:3},{value:"when",id:"when",children:[],level:3}],u={toc:i};function s(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"allpass"},"allPass"),(0,r.kt)("p",null,"Determines whether all the provided predicates return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," for the given value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function allPass<A>(value: A, fns: ReadonlyArray<(_1: A) => boolean>): boolean\nfunction allPass<A>(fns: ReadonlyArray<(_1: A) => boolean>): (value: A) => boolean\n")),(0,r.kt)("h3",{id:"always"},"always"),(0,r.kt)("p",null,"Returns a function that always returns the provided value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function always<A>(value: A): () => A\n")),(0,r.kt)("h3",{id:"anypass"},"anyPass"),(0,r.kt)("p",null,"Determines whether at least one of the provided predicate returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," for the given value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function anyPass<A>(value: A, fns: ReadonlyArray<(_1: A) => boolean>): boolean\nfunction anyPass<A>(fns: ReadonlyArray<(_1: A) => boolean>): (value: A) => boolean\n")),(0,r.kt)("h3",{id:"both"},"both"),(0,r.kt)("p",null,"Calls the two provided functions and returns ",(0,r.kt)("inlineCode",{parentName:"p"},"&&")," of the results \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"fn0(value) && fn1(value)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function both<A>(value: A, fn0: (_1: A) => boolean, fn1: (_1: A) => boolean): boolean\nfunction both<A>(fn0: (_1: A) => boolean, fn1: (_1: A) => boolean): (value: A) => boolean\n")),(0,r.kt)("h3",{id:"defaultto"},"defaultTo"),(0,r.kt)("p",null,"Returns a default value if ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," is nullable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function defaultTo<T>(defaultValue: NonNullable<T>, value: T | null | undefined): NonNullable<T>\nfunction defaultTo<T>(value: T | null | undefined): (defaultValue: NonNullable<T>) => NonNullable<T>\n")),(0,r.kt)("h3",{id:"either"},"either"),(0,r.kt)("p",null,"Calls the two provided functions and returns ",(0,r.kt)("inlineCode",{parentName:"p"},"||")," of the results \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"fn0(value) || fn1(value)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function either<A>(value: A, fn0: (_1: A) => boolean, fn1: (_1: A) => boolean): boolean\nfunction either<A>(fn0: (_1: A) => boolean, fn1: (_1: A) => boolean): (value: A) => boolean\n")),(0,r.kt)("h3",{id:"equals"},"equals"),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if provided values are equal, otherwise, returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function equals(fst: any, snd: any): boolean\nfunction equals(snd: any): (fst: any) => boolean\n")),(0,r.kt)("h3",{id:"falsy"},"falsy"),(0,r.kt)("p",null,"Always returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function falsy(): boolean\n")),(0,r.kt)("h3",{id:"identity"},"identity"),(0,r.kt)("p",null,"Always returns the provided value, useful as a placeholder function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function identity<A>(value: A): A\n")),(0,r.kt)("h3",{id:"ifelse"},"ifElse"),(0,r.kt)("p",null,"Tests the given value by passing it to the predicate, if the predicate is satisfied, the function returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"truthyFn"),", otherwise, returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"falsyFn"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function ifElse<A, B>(\n    value: A,\n    predicateFn: (_1: A) => boolean,\n    truthyFn: (_1: A) => B,\n    falsyFn: (_1: A) => B\n): B\nfunction ifElse<A, B>(\n    predicateFn: (_1: A) => boolean,\n    truthyFn: (_1: A) => B,\n    falsyFn: (_1: A) => B\n): (value: A) => B\n")),(0,r.kt)("h3",{id:"ignore"},"ignore"),(0,r.kt)("p",null,"Always returns ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", useful as a placeholder function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function ignore(): void\n")),(0,r.kt)("h3",{id:"truthy"},"truthy"),(0,r.kt)("p",null,"Always returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function truthy(): boolean\n")),(0,r.kt)("h3",{id:"unless"},"unless"),(0,r.kt)("p",null,"Tests the given value by passing it to the predicate, if the predicate is satisfied, the function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),", otherwise, returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"falsyFn"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function unless<A>(value: A, predicateFn: (_1: A) => boolean, falsyFn: (_1: A) => A): A\nfunction unless<A>(predicateFn: (_1: A) => boolean, falsyFn: (_1: A) => A): (value: A) => A\n")),(0,r.kt)("h3",{id:"when"},"when"),(0,r.kt)("p",null,"Tests the given value by passing it to the predicate, if the predicate is satisfied, the function returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"truthyFn"),", otherwise, returns ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function when<A>(value: A, predicateFn: (_1: A) => boolean, truthyFn: (_1: A) => A): A\nfunction when<A>(predicateFn: (_1: A) => boolean, truthyFn: (_1: A) => A): (value: A) => A\n")))}s.isMDXComponent=!0;var p=["components"],c={id:"function",title:"Function"},d=void 0,f={unversionedId:"function",id:"function",isDocsHomePage:!1,title:"Function",description:"export const toc = functiontoc",source:"@site/api/function.mdx",sourceDirName:".",slug:"/function",permalink:"/ts-belt/api/function",tags:[],version:"current",frontMatter:{id:"function",title:"Function"},sidebar:"sidebar",previous:{title:"Boolean",permalink:"/ts-belt/api/boolean"},next:{title:"Guards",permalink:"/ts-belt/api/guards"}},h=i,v={toc:h};function y(e){var n=e.components,t=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"Function"}))}y.isMDXComponent=!0}}]);