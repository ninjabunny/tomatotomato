(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),o=n.n(l),c=(n(63),n(26)),u=n(48),i=n(49),m=n(56),s=n(50),f=n(57),h=(n(65),n(51)),b=n.n(h),d=n(25),v=n.n(d),w=n(53),E=n.n(w),p=n(54),k=n.n(p),g=n(55),j=n.n(g),C=[{name:"tomato"},{name:"mato"},{name:"to"},{name:"ma"}],O=function(){return C[Math.floor(4*Math.random())]},y=function(){return r.a.createElement("span",null," \xa0 ")},S=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).defaultState=function(){return[C[0]].concat(Object(c.a)(Array(3).fill(1).map(function(){return O()})))},n.state={value:0,tablue:Object(c.a)(n.defaultState())},n.handleChange=function(e,t){n.setState({value:t})},n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.value,a=t.tablue;return r.a.createElement("div",null,r.a.createElement("div",{className:"tablue"}," ",a.map(function(e,t){var n=e.name;return r.a.createElement("span",{key:"".concat(n,"-").concat(t)}," ",n," ",r.a.createElement(y,null)," ")})),r.a.createElement(b.a,{className:"navbar",value:n,onChange:this.handleChange,showLabels:!0},r.a.createElement(v.a,{label:"Reset",icon:r.a.createElement(E.a,null),onClick:function(){return e.setState({tablue:e.defaultState()})}})," ",r.a.createElement(v.a,{label:"Condense",icon:r.a.createElement(k.a,null),onClick:function(){return e.setState({tablue:a.filter(function(e,t,n){var a=e.name;return!t||a!==n[t-1].name})})}})," ",r.a.createElement(v.a,{label:"Add",icon:r.a.createElement(j.a,null),onClick:function(){return e.setState({tablue:[].concat(Object(c.a)(a),[O()])})}})," ")," ")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e,t,n){e.exports=n(165)},63:function(e,t,n){},65:function(e,t,n){}},[[58,2,1]]]);
//# sourceMappingURL=main.91aa411f.chunk.js.map