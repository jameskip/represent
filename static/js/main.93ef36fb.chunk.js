(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{63:function(e,t,a){e.exports=a(86)},68:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),i=(a(68),a(119)),l=a(57),s=a(122),u=a(58),m=a(19),p=a(34),f=a(24),d=a(36),h=a(88),g=a(11),E=a(110),b=a(111),v=a(112),y=a(47),w=a.n(y),j=a(121),x=Object(h.a)(function(e){return{root:{flexGrow:1,position:"fixed",width:"100%",zIndex:1100},bar:{background:"linear-gradient(45deg, ".concat(e.palette.primary.main," 30%, ").concat(e.palette.secondary.main," 90%)"),width:"100%"},menuButton:{marginRight:e.spacing(2)},title:{marginRight:e.spacing(2)},search:Object(d.a)({position:"relative",right:".5rem",borderRadius:e.shape.borderRadius,backgroundColor:Object(g.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(g.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(d.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}}),k=function(e){var t=x();return r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{className:t.bar,position:"static"},r.a.createElement(b.a,null,r.a.createElement(v.a,{variant:"h6",className:t.title},"Represent."),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(w.a,null)),r.a.createElement(j.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"Search"},onChange:function(t){t.persist(),e.changeFunction(t)}})))))},O=a(25),N=a.n(O),S=a(33),I=a(113),Q=a(118),_=a(114),A=a(117),R=a(115),T=a(120),C=a(116),D=a(50),B=a.n(D),F=Object(h.a)(function(e){return{card:{minWidth:275,justifyContent:"center",alignContent:"center",flexGrow:1},title:{fontSize:14},pos:{marginBottom:12},links:{justifyContent:"center",alignItems:"center",textDecoration:"none",color:e.palette.primary.main},avatar:{justifyContent:"center",alignSelf:"center",marginBottom:12},party:{fontSize:14,float:"left"}}}),z=function(e){var t=F(),a=e.member;return r.a.createElement(I.a,{item:!0,xs:!0},r.a.createElement(_.a,{className:t.card},r.a.createElement(R.a,null,r.a.createElement(v.a,{className:t.party,color:"textSecondary",gutterBottom:!0},a.state,"  ","R"===a.party?r.a.createElement("span",{style:{color:"red",fontWeight:"bold"}},a.party):r.a.createElement("span",{style:{color:"blue",fontWeight:"bold"}},a.party)),r.a.createElement(p.b,{className:t.links,to:"/profile"},r.a.createElement(I.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(C.a,{className:t.avatar},r.a.createElement(B.a,null))),r.a.createElement(v.a,{variant:"h5",component:"h2"},a.first_name," ",a.last_name)),r.a.createElement(v.a,{className:t.pos,color:"textSecondary"},a.title)),r.a.createElement(A.a,{className:t.links},r.a.createElement(T.a,{rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/".concat(a.twitter_account),size:"small"},"Twitter"),r.a.createElement(T.a,{rel:"noopener noreferrer",target:"_blank",href:"https://facebook.com/".concat(a.facebook_account),size:"small"},"Facebook"),r.a.createElement(T.a,{rel:"noopener noreferrer",target:"_blank",href:"https://youtube.com/".concat(a.youtube_account),size:"small"},"YouTube"),r.a.createElement(T.a,{rel:"noopener noreferrer",target:"_blank",href:a.url,size:"small"},"Website"))))},P=Object(h.a)(function(e){return{root:{padding:e.spacing(3,2),flexGrow:1,position:"relative",top:60},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}),L=function(e){var t=Object(n.useState)(),a=Object(f.a)(t,2),o=a[0],c=a[1],i=P(),l={headers:{"X-API-Key":"JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx"},mode:"cors"};Object(n.useEffect)(function(){!function(){var e=Object(S.a)(N.a.mark(function e(){var t,a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=9;break}return e.next=3,fetch("https://api.propublica.org/congress/v1/117/house/members.json",l);case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.next=9,c({house:a.results[0].members});case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()});return r.a.createElement("div",{className:i.root},r.a.createElement(v.a,{variant:"h2",gutterBottom:!0},"House"),!o&&r.a.createElement(Q.a,null),r.a.createElement(I.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},o&&function(t){console.log("HOUSE RENDERED");var a=t.house.filter(function(t){var a=t.first_name,n=t.last_name;return"".concat(a," ").concat(n).toLowerCase().includes(e.nameQuery)}).map(function(e,t){return r.a.createElement(z,{key:e.id,member:e})});return 0===a.length?r.a.createElement("div",null,"No representatives found."):a}(o)))},W=Object(h.a)(function(e){return{root:{padding:e.spacing(3,2),flexGrow:1,position:"relative",top:60},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}),G=function(e){var t=Object(n.useState)(),a=Object(f.a)(t,2),o=a[0],c=a[1],i=W(),l={headers:{"X-API-Key":"JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx"},mode:"cors"};Object(n.useEffect)(function(){!function(){var e=Object(S.a)(N.a.mark(function e(){var t,a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=9;break}return e.next=3,fetch("https://api.propublica.org/congress/v1/117/senate/members.json",l);case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.next=9,c({senate:a.results[0].members});case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()});return r.a.createElement("div",{className:i.root},r.a.createElement(v.a,{variant:"h2",gutterBottom:!0},"Senate"),!o&&r.a.createElement(Q.a,null),r.a.createElement(I.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},o&&function(t){console.log("SENATE RENDERED");var a=t.senate.filter(function(t){var a=t.first_name,n=t.last_name;return"".concat(a," ").concat(n).toLowerCase().includes(e.nameQuery)}).map(function(e,t){return r.a.createElement(z,{key:e.id,member:e})});return 0===a.length?r.a.createElement("div",null,"No representatives found."):a}(o)))},H=function(e,t){var a;return function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];clearTimeout(a),a=setTimeout(function(){clearTimeout(a),e.apply(void 0,r)},t)}},J=function(e){var t=Object(n.useState)(""),a=Object(f.a)(t,2),o=a[0],c=a[1],i=H(function(e){e.stopPropagation(),c(e.target.value)},200);return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{nameQuery:o,changeFunction:i}),r.a.createElement(G,{nameQuery:o}),r.a.createElement(L,{nameQuery:o}))},K=a(59),V=Object(h.a)(function(e){return{root:{padding:e.spacing(3,2),flexGrow:1,position:"relative",top:60}}}),X=function(e){var t=V();return r.a.createElement("div",null,r.a.createElement(K.a,{className:t.root},r.a.createElement(v.a,{variant:"h5",component:"h3"},"This is a sheet of paper."),r.a.createElement(v.a,{component:"p"},"Paper can be used to build surface or other elements for your application.")))},U=function(e){e.component;var t=Object(u.a)(e,["component"]);return r.a.createElement(m.a,Object.assign({},t,{render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,e))}}))},Y=function(e){return r.a.createElement(p.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",render:U}),r.a.createElement(m.a,{path:"/profile",component:X})))},$=(a(85),Object(l.a)({palette:{primary:{main:"#0d47a1"},secondary:{main:"#d50000"},background:{default:"#F6F8FA"}}})),q=function(){return r.a.createElement(s.a,{theme:$},r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null),r.a.createElement(Y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[63,1,2]]]);
//# sourceMappingURL=main.93ef36fb.chunk.js.map