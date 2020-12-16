(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(3),o=(n(0),n(89));const a={id:"troubleshooting",title:"Troubleshooting",slug:"/troubleshooting"},i={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Native Bottom Sheet. These issues may or may not be related to React Native Bottom Sheet itself.",source:"@site/docs/troubleshooting.md",slug:"/troubleshooting",permalink:"/react-native-bottom-sheet/troubleshooting",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/troubleshooting.md",version:"current",sidebar:"packages",previous:{title:"Custom Background",permalink:"/react-native-bottom-sheet/custom-background"},next:{title:"FAQ",permalink:"/react-native-bottom-sheet/faq"}},l=[{value:"Pressables / Touchables are not working on Android",id:"pressables--touchables-are-not-working-on-android",children:[]},{value:"Adding horizontal FlatList or ScrollView is not working properly on Android",id:"adding-horizontal-flatlist-or-scrollview-is-not-working-properly-on-android",children:[]}],s={rightToc:l};function c({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Native Bottom Sheet. These issues may or may not be related to React Native Bottom Sheet itself."),Object(o.b)("h2",{id:"pressables--touchables-are-not-working-on-android"},"Pressables / Touchables are not working on Android"),Object(o.b)("p",null,"Due to wrapping the content and handle with ",Object(o.b)("inlineCode",{parentName:"p"},"TapGestureHandler")," & ",Object(o.b)("inlineCode",{parentName:"p"},"PanGestureHandler"),", any gesture interaction would not function as expected."),Object(o.b)("p",null,"To resolve this issue, please use touchables that this library provide."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import {\n  TouchableOpacity,\n  TouchableHighlight,\n  TouchableWithoutFeedback,\n} from '@gorhom/bottom-sheet';\n")),Object(o.b)("h2",{id:"adding-horizontal-flatlist-or-scrollview-is-not-working-properly-on-android"},"Adding horizontal FlatList or ScrollView is not working properly on Android"),Object(o.b)("p",null,"Due to wrapping the content and handle with ",Object(o.b)("inlineCode",{parentName:"p"},"TapGestureHandler")," & ",Object(o.b)("inlineCode",{parentName:"p"},"PanGestureHandler"),", any gesture interaction would not function as expected."),Object(o.b)("p",null,"To resolve this issue, please use ",Object(o.b)("inlineCode",{parentName:"p"},"ScrollView")," & ",Object(o.b)("inlineCode",{parentName:"p"},"FlatList")," from ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," provide instead ",Object(o.b)("inlineCode",{parentName:"p"},"react-native"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import {\n  ScrollView,\n  FlatList\n} from 'react-native-gesture-handler';\n")))}c.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);