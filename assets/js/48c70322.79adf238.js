"use strict";(self.webpackChunkts_belt_docs=self.webpackChunkts_belt_docs||[]).push([[643],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>s});var r=t(7294);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,u=function(e,n){if(null==e)return{};var t,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(u[t]=e[t]);return u}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,u=e.mdxType,a=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(t),s=u,b=d["".concat(o,".").concat(s)]||d[s]||c[s]||a;return t?r.createElement(b,l(l({ref:n},m),{},{components:t})):r.createElement(b,l({ref:n},m))}));function s(e,n){var t=arguments,u=n&&n.mdxType;if("string"==typeof e||u){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:u,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6160:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>s,toc:()=>b});var r=t(7462),u=t(3366),a=(t(7294),t(3905)),l=["components"],i=[{value:"add",id:"add",children:[],level:3},{value:"divide",id:"divide",children:[],level:3},{value:"divideWithModulo",id:"dividewithmodulo",children:[],level:3},{value:"modulo",id:"modulo",children:[],level:3},{value:"multiply",id:"multiply",children:[],level:3},{value:"pred",id:"pred",children:[],level:3},{value:"subtract",id:"subtract",children:[],level:3},{value:"succ",id:"succ",children:[],level:3}],o={toc:i};function p(e){var n=e.components,t=(0,u.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"add"},"add"),(0,a.kt)("p",null,"Returns the sum of two numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function add(a: number, b: number): number\nfunction add(b: number): (a: number) => number\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"N.add(10, 20) // \u2192 30\npipe(5, N.add(10)) // \u2192 15\n")),(0,a.kt)("h3",{id:"divide"},"divide"),(0,a.kt)("p",null,"Divides two numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function divide(a: number, b: number): number\nfunction divide(b: number): (a: number) => number\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"N.divide(20, 5) // \u2192 4\npipe(40, N.divide(4)) // \u2192 10\n")),(0,a.kt)("h3",{id:"dividewithmodulo"},"divideWithModulo"),(0,a.kt)("p",null,"Returns the quotient and remainder of a number division."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function divideWithModulo(a: number, b: number): [number, number]\nfunction divideWithModulo(b: number): (a: number) => [number, number]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"N.divideWithModulo(20, 5) // \u2192 [4, 0]\npipe(30, N.divideWithModulo(4)) // \u2192 [7.5, 2]\n")),(0,a.kt)("h3",{id:"modulo"},"modulo"),(0,a.kt)("p",null,"Returns the remainder of a number division."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function modulo(a: number, b: number): number\nfunction modulo(b: number): (a: number) => number\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"N.modulo(20, 6) // \u2192 2\npipe(30, N.modulo(4)) // \u2192 2\n")),(0,a.kt)("h3",{id:"multiply"},"multiply"),(0,a.kt)("p",null,"Multiplies two numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function multiply(a: number, b: number): number\nfunction multiply(b: number): (a: number) => number\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"N.multiply(3, 6) // \u2192 18\npipe(8, N.multiply(4)) // \u2192 32\n")),(0,a.kt)("h3",{id:"pred"},"pred"),(0,a.kt)("p",null,"Subtracts ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," from the given number."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function pred(n: number): number\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"N.pred(6) // \u2192 5\npipe(5, N.pred) // \u2192 4\n")),(0,a.kt)("h3",{id:"subtract"},"subtract"),(0,a.kt)("p",null,"Returns the difference of two numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function subtract(a: number, b: number): number\nfunction subtract(b: number): (a: number) => number\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"N.subtract(20, 10) // \u2192 10\npipe(15, N.subtract(10)) // \u2192 5\n")),(0,a.kt)("h3",{id:"succ"},"succ"),(0,a.kt)("p",null,"Adds ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," to the given number."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function succ(n: number): number\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"N.succ(0) // \u2192 1\nA.makeWithIndex(4, N.succ) // \u2192 [1, 2, 3, 4]\npipe(5, N.succ) // \u2192 6\n")))}p.isMDXComponent=!0;var m=["components"],c={id:"number",title:"Number"},d=void 0,s={unversionedId:"number",id:"number",isDocsHomePage:!1,title:"Number",description:"Utility functions for Number.",source:"@site/api/number.mdx",sourceDirName:".",slug:"/number",permalink:"/ts-belt/api/number",tags:[],version:"current",frontMatter:{id:"number",title:"Number"},sidebar:"sidebar",previous:{title:"Guards",permalink:"/ts-belt/api/guards"},next:{title:"Object (Dict)",permalink:"/ts-belt/api/object"}},b=i,f={toc:b};function k(e){var n=e.components,t=(0,u.Z)(e,m);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Utility functions for ",(0,a.kt)("inlineCode",{parentName:"p"},"Number"),"."),(0,a.kt)(p,{mdxType:"Number"}))}k.isMDXComponent=!0}}]);