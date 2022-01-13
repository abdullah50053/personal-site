"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[711],{1711:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var r=n(2791),a=n(1523),i=n(6842),s=n(184),c=function(e){var t=e.data;return(0,s.jsx)("article",{className:"degree-container",children:(0,s.jsxs)("header",{children:[(0,s.jsx)("h4",{className:"degree",children:t.degree}),(0,s.jsxs)("p",{className:"school",children:[(0,s.jsx)("a",{href:t.link,target:"blank",children:t.school}),", ",t.year]})]})})},o=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"education"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,s.jsx)(c,{data:e},e.school)}))]})};o.defaultProps={data:[]};var l=o,u=function(e){var t=e.data;return(0,s.jsxs)("article",{className:"jobs-container",children:[(0,s.jsxs)("header",{children:[(0,s.jsxs)("h4",{children:[(0,s.jsx)("a",{href:t.link,target:"blank",children:t.company})," - ",t.position]}),(0,s.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,s.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,s.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"experience",children:[(0,s.jsx)("div",{className:"link-to",id:"experience"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,s.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d;function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=n(9611);function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function b(e,t){if(t&&("object"===h(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b(this,n)}}var v=n(4942),j=n(1413),x=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,s.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},k=function(e){var t=e.data,n=e.categories,r=t.category,a=t.competency,i=t.title,c={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},o=(0,j.Z)((0,j.Z)({},c),{},{width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")});return(0,s.jsxs)("div",{className:"skillbar clearfix",children:[(0,s.jsx)("div",{className:"skillbar-title",style:c,children:(0,s.jsx)("span",{children:i})}),(0,s.jsx)("div",{className:"skillbar-bar",style:o}),(0,s.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};k.defaultProps={categories:[]};var S=k,N=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,y.Z)(e,t)}(i,e);var t,n,r,a=g(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return(0,j.Z)((0,j.Z)({},n),{},(0,v.Z)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,j.Z)((0,j.Z)({},e),{},(0,v.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=i,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,s.jsx)(S,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,s.jsx)(x,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,s.jsxs)("div",{className:"skills",children:[(0,s.jsx)("div",{className:"link-to",id:"skills"}),(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h3",{children:"Skills"}),(0,s.jsx)("p",{children:" Here is a mostly honest overview of my skills."})]}),(0,s.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,s.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&f(t.prototype,n),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.Component);N.defaultProps={skills:[],categories:[]};var w=N,C=function(e){var t=e.data,n=e.last;return(0,s.jsxs)("li",{className:"course-container",children:[(0,s.jsxs)("a",{href:t.link,target:"blank",children:[(0,s.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,s.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,s.jsx)("div",{className:"course-dot",children:(0,s.jsx)("p",{className:"course-name",children:" \u2022"})})]})};C.defaultProps={last:!1};var O=C,D=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,s.jsx)(O,{data:t,last:n===e.length-1},t.title)}))},P=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"courses",children:[(0,s.jsx)("div",{className:"link-to",id:"courses"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Courses"})}),(0,s.jsx)("ul",{className:"course-list",children:D(t)})]})};P.defaultProps={data:[]};var A=P,T=[{title:" Computer Science I",number:"CS1336",link:"https://catalog.utdallas.edu/2018/undergraduate/courses/cs1336",university:"UT Dallas"},{title:" Computer Science II",number:"CS2336",link:"https://catalog.utdallas.edu/2018/undergraduate/courses/cs2336",university:"UT Dallas"},{title:" Computer Architechture",number:"CS2340",link:"https://catalog.utdallas.edu/2020/undergraduate/courses/cs2340",university:"UT Dallas"},{title:" Linear Algebra",number:"MATH2418",link:"https://catalog.utdallas.edu/2020/undergraduate/courses/math2418",university:"UT Dallas"},{title:" Discrete Math I",number:"CS2305",link:"https://catalog.utdallas.edu/2020/undergraduate/courses/cs2305",university:"UT Dallas"},{title:" Discrete Math II",number:"CS3305",link:"https://catalog.utdallas.edu/2020/undergraduate/courses/cs3305",university:"UT Dallas"},{title:" Probability and Statistics for CS",number:"CS3341",link:"https://catalog.utdallas.edu/2020/undergraduate/courses/cs3341",university:"UT Dallas"},{title:" Data Structures and Algorithms",number:"CS3345",link:"https://catalog.utdallas.edu/2020/undergraduate/courses/cs3345",university:"UT Dallas"},{title:" Software Engineering",number:"CS3354",link:"https://catalog.utdallas.edu/2020/undergraduate/courses/cs3354",university:"UT Dallas"},{title:" Systems Programming in UNIX",number:"CS3341",link:"https://catalog.utdallas.edu/2020/undergraduate/courses/cs3341",university:"UT Dallas"}],Z=[{school:"University of Texas at Dallas",degree:"B.S. Computer Science",link:"https://www.utdallas.edu/",year:2024}],L=[{company:"DiscoverSTEM",position:"Innovation Facilitator",link:"https://discoverstem.info",daterange:"January 2021 - Present",points:["Mentored innovation teams to devise unique, patentable innovations.","Nine patents currenly being filed.","Maintained technologies and gave specialized technical training to Assistant Innovation Facilitators at the DiscoverSTEM Innovation Lab.","Documented the entire process of innovation for mentors and innovators, from educating students on what innovation is up to the presentation of the final innovation."]}],E=n(907);var I=n(181);var R,U=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:4,category:["Web Development","Javascript"]},{title:"Firebase",competency:4,category:["Web Development","Databases"]},{title:"Typescript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:3,category:["Languages"]},{title:"C++",competency:4,category:["Languages"]},{title:"RobotC",competency:3,category:["Languages"]},{title:"Java",competency:4,category:["Languages"]},{title:"C",competency:3,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"Git",competency:4,category:["Applications"]},{title:"Figma",competency:4,category:["Applications"]},{title:"Adobe Xd",competency:3,category:["Applications"]},{title:"AutoDesk Inventor",competency:4,category:["Applications"]},{title:"AutoDesk Fusion 360",competency:4,category:["Applications"]},{title:"FL Studio",competency:2,category:["Applications"]},{title:"MIPS",competency:2,category:["Languages"]}].map((function(e){return(0,j.Z)((0,j.Z)({},e),{},{category:e.category.sort()})})),M=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],J=(R=new Set(U.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,E.Z)(e)}(R)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(R)||(0,I.Z)(R)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:M[t]}})),B=["Education","Experience","Skills","Courses"],F=function(){return(0,s.jsx)(i.Z,{title:"Resume",description:"Abdullah Hasani's Resume.",children:(0,s.jsxs)("article",{className:"post",id:"resume",children:[(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h2",{"data-testid":"heading",children:(0,s.jsx)(a.rU,{to:"resume",children:"Resume"})}),(0,s.jsx)("div",{className:"link-container",children:B.map((function(e){return(0,s.jsx)("h4",{children:(0,s.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,s.jsx)(l,{data:Z}),(0,s.jsx)(p,{data:L}),(0,s.jsx)(w,{skills:U,categories:J}),(0,s.jsx)(A,{data:T})]})})}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=711.6502c756.chunk.js.map