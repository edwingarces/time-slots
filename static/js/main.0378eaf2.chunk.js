(this["webpackJsonptime-slots"]=this["webpackJsonptime-slots"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s(8),a=s.n(i),o=(s(13),s(2)),r=s(3),n=s(4),l=s(0),u=function(e){var t=e.message,s=e.className;return Object(l.jsx)("div",{className:"App__Message ".concat(s),children:Object(l.jsx)("p",{children:t})})},m=function(e,t){return e.findIndex((function(e){return e.id===t}))},b=function(e){return e.filter((function(e){return e.available})).length},j=function(e){var t=e.timeSlots,s=e.users,c=e.onSelect;return Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Horario"}),Object(l.jsx)("th",{children:"Motociclista"}),Object(l.jsx)("th",{children:"Usuario"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e,t){return Object(l.jsxs)("tr",{className:"Table__Row".concat(b(e.motorcyclists)>0?" available":" full"),onClick:function(){return c(t)},children:[Object(l.jsx)("td",{children:e.time}),Object(l.jsx)("td",{children:"".concat(8-b(e.motorcyclists)," Asignados")}),Object(l.jsx)("td",{children:e.users.map((function(e){return"".concat((t=s,c=e,t.filter((function(e){return e.id===c}))[0]).name,", ");var t,c}))})]},t)}))})]})},d=[{id:1,available:!0,name:"Motociclista 1"},{id:2,available:!0,name:"Motociclista 2"},{id:3,available:!0,name:"Motociclista 3"},{id:4,available:!0,name:"Motociclista 4"},{id:5,available:!0,name:"Motociclista 5"},{id:6,available:!0,name:"Motociclista 6"},{id:7,available:!0,name:"Motociclista 7"},{id:8,available:!0,name:"Motociclista 8"}],O=[{time:"08:00",motorcyclists:d,users:[]},{time:"08:30",motorcyclists:d,users:[]},{time:"09:00",motorcyclists:d,users:[]},{time:"09:30",motorcyclists:d,users:[]},{time:"10:00",motorcyclists:d,users:[]},{time:"10:30",motorcyclists:d,users:[]},{time:"11:00",motorcyclists:d,users:[]},{time:"11:30",motorcyclists:d,users:[]},{time:"12:00",motorcyclists:d,users:[]},{time:"12:30",motorcyclists:d,users:[]},{time:"13:00",motorcyclists:d,users:[]},{time:"13:30",motorcyclists:d,users:[]},{time:"14:00",motorcyclists:d,users:[]},{time:"14:30",motorcyclists:d,users:[]},{time:"15:00",motorcyclists:d,users:[]},{time:"15:30",motorcyclists:d,users:[]},{time:"16:00",motorcyclists:d,users:[]},{time:"16:30",motorcyclists:d,users:[]},{time:"17:00",motorcyclists:d,users:[]},{time:"17:30",motorcyclists:d,users:[]},{time:"18:00",motorcyclists:d,users:[]},{time:"18:30",motorcyclists:d,users:[]},{time:"19:00",motorcyclists:d,users:[]},{time:"19:30",motorcyclists:d,users:[]},{time:"20:00",motorcyclists:d,users:[]}],y=[{id:1,name:"Usuario 1"},{id:2,name:"Usuario 2"},{id:3,name:"Usuario 3"},{id:4,name:"Usuario 4"},{id:5,name:"Usuario 5"},{id:6,name:"Usuario 6"},{id:7,name:"Usuario 7"},{id:8,name:"Usuario 8"}],f={message:"Bienvenido",type:"success"},h=function(){var e=Object(c.useState)(O),t=Object(n.a)(e,2),s=t[0],i=t[1],a=y,b=Object(c.useState)(1),d=Object(n.a)(b,2),h=d[0],v=d[1],p=Object(c.useState)("08:00"),g=Object(n.a)(p,2),x=g[0],S=g[1],M=Object(c.useState)(s[0].motorcyclists),_=Object(n.a)(M,2),N=_[0],U=_[1],A=Object(c.useState)(f),T=Object(n.a)(A,2),C=T[0],F=T[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){F(Object(o.a)(Object(o.a)({},C),{},{type:"out"}))}),2e3);return function(){clearTimeout(e)}}),[]),Object(c.useEffect)((function(){var e;return"out"!==C.type&&(e=setTimeout((function(){F(Object(o.a)(Object(o.a)({},C),{},{type:"out"}))}),2e3)),function(){clearTimeout(e)}}),[C]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"App__Header",children:[Object(l.jsx)("h1",{children:"Tramos horarios"}),Object(l.jsx)("h2",{children:"Seleccione un usuario"}),Object(l.jsx)("select",{name:"users",id:"users",value:h,onChange:function(e){var t=e.target.value;v(parseInt(t,10)),F({message:"Cambio de usuario",type:"success"})},children:a.map((function(e,t){var s=e.id,c=e.name;return 0!==s?Object(l.jsx)("option",{value:s,children:c},t):null}))})]}),Object(l.jsxs)("div",{className:"App__AssignmentSection",children:[Object(l.jsx)(j,{timeSlots:s,users:a,onSelect:function(e){var t=Object(r.a)(s);S(t[e].time),U(t[e].motorcyclists);var c=t[e].motorcyclists.filter((function(e){return e.available})),a=t[e].users.filter((function(e){return e===h})),n=c.length&&!a.length;c.length<8&&a.length?(!function(e){var t=Object(r.a)(s),c=Object(r.a)(t[e].motorcyclists),a=c.filter((function(e){return!e.available})).pop(),n=m(c,null===a||void 0===a?void 0:a.id),l=t[e].users.filter((function(e){return e!==h}));c[n]=Object(o.a)(Object(o.a)({},c[n]),{},{available:!0}),t[e]=Object(o.a)(Object(o.a)({},t[e]),{},{motorcyclists:c,users:l}),i(t),U(c)}(e),F({message:"Se liber\xf3 un motociclista",type:"success"})):n?(!function(e){var t=Object(r.a)(s),c=Object(r.a)(t[e].motorcyclists),a=c.filter((function(e){return e.available})).pop(),n=m(c,null===a||void 0===a?void 0:a.id),l=Object(r.a)(t[e].users);l.push(h),c[n]=Object(o.a)(Object(o.a)({},c[n]),{},{available:!1}),t[e]=Object(o.a)(Object(o.a)({},t[e]),{},{motorcyclists:c,users:l}),i(t),U(c)}(e),F({message:"Se asign\xf3 un motociclista",type:"success"})):c.length||F({message:"No hay m\xe1s motociclistas disponibles",type:"danger"})}}),N?Object(l.jsxs)("div",{className:"App__Motorcyclists",children:[Object(l.jsx)("h4",{children:"Motociclistas de las ".concat(x)}),N.map((function(e,t){var s=e.name,c=e.available;return Object(l.jsxs)("p",{children:[s,c?" Libre":" Asignado"]},t)}))]}):null]}),Object(l.jsx)(u,{message:C.message,className:C.type})]})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;s(e),c(e),i(e),a(e),o(e)}))};a.a.render(Object(l.jsx)(h,{}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.0378eaf2.chunk.js.map