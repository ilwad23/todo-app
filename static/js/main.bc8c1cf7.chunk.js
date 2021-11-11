(this["webpackJsonptodo-app-main-react"]=this["webpackJsonptodo-app-main-react"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/icon-sun.b3182f3b.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-moon.e66b8c62.svg"},,,function(e,t,a){e.exports=a.p+"static/media/icon-cross.fe68d57f.svg"},,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(8),r=a.n(c),l=Object(o.createContext)(),i=function(e){var t=e.reducer,a=e.initialState,c=e.children;return n.a.createElement(l.Provider,{value:Object(o.useReducer)(t,a)},c)},s=function(){return Object(o.useContext)(l)},m=a(10),u=a(1),d=a(5),p=a.n(d),E=a(6),v=a.n(E),f=localStorage.getItem("todo-theme"),O=JSON.parse(localStorage.getItem("todos"));f||localStorage.setItem("todo-theme","sun");var _={theme:"sun"===f,themeIcon:"sun"===f?p.a:v.a,option:"all",value:"",todos:O||[]},N=function(e,t){switch(t.type){case"CLEAR-COMPLETED-TODOS":var a=e.todos.filter((function(e){return!e.completed}));return localStorage.setItem("todos",JSON.stringify(a)),Object(u.a)(Object(u.a)({},e),{},{todos:a});case"CANCEL-TODO":var o=e.todos.filter((function(e){return e.id!==t.id}));return localStorage.setItem("todos",JSON.stringify(o)),Object(u.a)(Object(u.a)({},e),{},{todos:o});case"TODO-COMPLETED":var n=e.todos.map((function(a,o){return a.id===t.id?(a.completed=!e.completed,a):a}));return localStorage.setItem("todos",JSON.stringify(n)),Object(u.a)(Object(u.a)({},e),{},{todos:n});case"ADD-TODO":var c=Object(m.a)(e.todos),r=e.value;return e.value&&"Enter"===t.event.key&&(t.event.preventDefault(),c.push({id:Math.random(),message:e.value,completed:!1}),r=""),localStorage.setItem("todos",JSON.stringify(c)),Object(u.a)(Object(u.a)({},e),{},{todos:c,value:r});case"SET-VALUE":return Object(u.a)(Object(u.a)({},e),{},{value:t.value});case"SET-OPTION":return Object(u.a)(Object(u.a)({},e),{},{option:t.option});case"SET-THEME":var l=!1===!e.theme?"moon":"sun";return localStorage.setItem("todo-theme",l),Object(u.a)(Object(u.a)({},e),{},{themeIcon:e.theme?v.a:p.a,theme:!e.theme});default:return e}},h=a(9),T=a.n(h);var g=function(e){var t=e.todo,a=s()[1];return n.a.createElement("div",{className:"todo",onClick:function(){return a({type:"TODO-COMPLETED",id:t.id})}},n.a.createElement("div",{className:"todo__left"},n.a.createElement("div",{className:"todo__circleContiner"},n.a.createElement("div",{className:"todo__circle ".concat(t.completed?"todo__circle--completed":"todo__circle--uncompleted")})),n.a.createElement("div",{className:"todo__text ".concat(t.completed?"todo__text--completed":"todo__text--uncompleted")},t.message)),n.a.createElement("img",{className:"todo__cross",src:T.a,alt:"cancel",onClick:function(){return a({type:"CANCEL-TODO",id:t.id})}}))},b=a(2);var S=function(){var e=s(),t=Object(b.a)(e,2),a=t[0],o=t[1];return n.a.createElement("div",{className:"tool"},n.a.createElement("div",{className:"tool__top"},n.a.createElement("span",{className:"tool__top--num"},a.todos.filter((function(e){return!e.completed})).length),n.a.createElement("p",null,"items left")),n.a.createElement("div",{className:"tool__bottom"},n.a.createElement("div",{className:"tool__filter"},n.a.createElement("p",{className:"all"===a.option?"tool__filter--option":"",onClick:function(){return o({type:"SET-OPTION",option:"all"})}},"All"),n.a.createElement("p",{className:"active"===a.option?"tool__filter--option":"",onClick:function(){return o({type:"SET-OPTION",option:"active"})}},"Active"),n.a.createElement("p",{className:"completed"===a.option?"tool__filter--option":"",onClick:function(){return o({type:"SET-OPTION",option:"completed"})}},"completed"))),n.a.createElement("p",{className:"tool__clear tool__top",onClick:function(){return o({type:"CLEAR-COMPLETED-TODOS"})}},"Clear Completed"))};var C=function(){var e=s(),t=Object(b.a)(e,2),a=t[0],o=t[1];return n.a.createElement("div",{className:"input"},n.a.createElement("div",{className:"input__circleContiner"},n.a.createElement("div",{className:"input__circle"})),n.a.createElement("input",{className:"input__field",value:a.value,onChange:function(e){return o({type:"SET-VALUE",value:e.target.value})},type:"text",placeholder:"Create a new\xa0todo...",onKeyPress:function(e){return o({type:"ADD-TODO",event:e})}}))};var j=function(){var e=s(),t=Object(b.a)(e,2),a=t[0],o=t[1];return n.a.createElement("div",{className:"header"},n.a.createElement("h1",{className:"header__logo"},"Todo"),n.a.createElement("img",{onClick:function(){return o({type:"SET-THEME"})},src:a.themeIcon,alt:"dark-light theme"}))};a(16);var y=function(){var e=s()[0],t=function(e){return e.todos.filter((function(t){if("completed"===e.option){if(t.completed)return t}else{if("active"!==e.option)return t;if(!t.completed)return t}}))}(e).map((function(t,a){return n.a.createElement(g,{key:a,todo:t,setTodos:e.setTodos})}));return n.a.createElement("div",{className:"container ".concat(e.theme?"container--dark":"container--light")},n.a.createElement("div",{className:"container__within"},n.a.createElement(j,null),n.a.createElement(C,null),e.todos.length>0&&n.a.createElement("div",{className:"listOfTodos"},t,n.a.createElement(S,null))))};r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i,{initialState:_,reducer:N},n.a.createElement(y,null))),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.bc8c1cf7.chunk.js.map