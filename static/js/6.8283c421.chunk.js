(this["webpackJsonpmy-pokedex"]=this["webpackJsonpmy-pokedex"]||[]).push([[6],{168:function(e,t,a){"use strict";t.a=a.p+"static/media/pokeball_open.2ba4c674.png"},169:function(e,t,a){"use strict";var n=a(156),o=(a(0),a(83)),i=a(37),r=a(30),c=a(148),s=Object(c.a)((function(e){return Object(r.a)(Object(r.a)({},e.globalClasses),{},{errorPictureContainer:{display:"flex",justifyContent:"center","& img":Object(i.a)({width:"60vw"},e.breakpoints.up("md"),{width:"20vw"})},errorMessageContainer:{textAlign:"center",marginTop:"12px",fontWeight:"bold"}})})),l=a(5);t.a=function(){var e=s();return Object(l.jsxs)(n.a,{container:!0,className:e.container,"data-testid":"error-message",children:[Object(l.jsx)(n.a,{item:!0,xs:12,className:e.errorPictureContainer,children:Object(l.jsx)("img",{src:o.a,alt:"Error","data-testid":"error-image"})}),Object(l.jsx)(n.a,{item:!0,xs:12,className:e.errorMessageContainer,"data-testid":"error-message-text",children:"Oops... Something happened, please try again..."})]})}},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0);function o(e){var t=e.controlled,a=e.default,o=(e.name,e.state,n.useRef(void 0!==t).current),i=n.useState(a),r=i[0],c=i[1];return[o?t:r,n.useCallback((function(e){o||c(e)}),[])]}},175:function(e,t,a){"use strict";var n=a(60),o=a(0);t.a=function(e){var t=e.defaultPage,a=e.defaultOffset,i=e.limit,r=Object(o.useState)(t),c=Object(n.a)(r,2),s=c[0],l=c[1],d=Object(o.useState)(a),u=Object(n.a)(d,2),m=u[0],p=u[1];return[s,m,function(e,t){l(t),p(1===t?0:(t-1)*i+1)}]}},178:function(e,t,a){"use strict";var n=a(156),o=a(189),i=(a(0),a(33)),r=a(30),c=a(148),s="12px",l=Object(c.a)((function(e){return Object(r.a)(Object(r.a)({},e.globalClasses),{},{itemContainer:{boxShadow:e.shadows[5],borderRadius:"8px",margin:s,padding:s,minHeight:function(e){return e.isMyPokemon?"240px":"none"}},pokemonNickname:{color:"grey",textTransform:"capitalize",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",fontWeight:"bold",marginBottom:"6px"},pokemonName:{color:"black",textTransform:"capitalize",display:"flex",alignItems:"center",textAlign:"center",justifyContent:"center",fontWeight:"bold"},ownedCount:{color:"grey",textTransform:"capitalize",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"6px"},pokemonImageContainer:{display:"flex",justifyContent:"center","& img":{width:function(e){return e.isMyPokemon?"55%":"100%"}},marginBottom:"6px"},releaseButtonContainer:{marginTop:"12px",display:"flex",justifyContent:"center",alignContent:"flex-end"},releaseButton:{width:"100%",color:"white","& img":{width:"18px",marginLeft:"12px"},"&:hover":{fontWeight:"bold"}}})})),d=a(168),u=a(5);t.a=function(e){var t=e.isMyPokemon,a=e.name,r=e.image,c=e.ownedCount,s=e.nickname,m=e.onReleaseClick,p=l({isMyPokemon:t});return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(n.a,{component:i.b,to:t?"my-pokemon/".concat(s):"pokemons/".concat(a),item:!0,xs:t?12:5,sm:5,md:t?3:2,container:!0,className:p.itemContainer,justifyContent:"center",onClick:function(e){("SPAN"===e.target.tagName||"BUTTON"===e.target.tagName)&&e.preventDefault()},"data-testid":"pokemon-item-link",children:[Object(u.jsx)(n.a,{item:!0,xs:12,className:p.pokemonImageContainer,children:Object(u.jsx)("img",{src:r,alt:a,"data-testid":"pokemon-item-image"})}),t&&Object(u.jsx)(n.a,{item:!0,xs:12,className:p.pokemonNickname,"data-testid":"pokemon-item-nickname",children:s}),Object(u.jsx)(n.a,{item:!0,xs:12,className:p.pokemonName,"data-testid":"pokemon-item-name",children:a}),!t&&Object(u.jsxs)(n.a,{item:!0,xs:12,className:p.ownedCount,"data-testid":"pokemon-item-owned-count",children:["Owned: ",c]}),t&&Object(u.jsx)(n.a,{item:!0,xs:12,className:p.releaseButtonContainer,children:Object(u.jsxs)(o.a,{id:"releaseButton",className:"".concat(p.releaseButton," ").concat(p.danger),onClick:function(){m(s)},"data-testid":"pokemon-item-release-button",children:["Release Me"," ",Object(u.jsx)("img",{src:d.a,alt:"PokeballOpen"})]})})]})})}},191:function(e,t,a){"use strict";var n=a(6),o=a(3),i=a(0),r=(a(4),a(13)),c=a(61),s=a(38),l=a(15),d=a(125),u=a(170),m=Object(u.a)(i.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),p=Object(u.a)(i.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),b=Object(u.a)(i.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),g=Object(u.a)(i.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),f=a(50),h=i.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.color,u=void 0===l?"standard":l,h=e.component,j=e.disabled,x=void 0!==j&&j,O=e.page,v=e.selected,y=void 0!==v&&v,C=e.shape,k=void 0===C?"round":C,N=e.size,w=void 0===N?"medium":N,P=e.type,B=void 0===P?"page":P,$=e.variant,z=void 0===$?"text":$,M=Object(n.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),L=("rtl"===Object(s.a)().direction?{previous:g,next:b,last:m,first:p}:{previous:b,next:g,first:m,last:p})[B];return"start-ellipsis"===B||"end-ellipsis"===B?i.createElement("div",{ref:t,className:Object(r.a)(a.root,a.ellipsis,x&&a.disabled,"medium"!==w&&a["size".concat(Object(f.a)(w))])},"\u2026"):i.createElement(d.a,Object(o.a)({ref:t,component:h,disabled:x,focusVisibleClassName:a.focusVisible,className:Object(r.a)(a.root,a.page,a[z],a[k],c,"standard"!==u&&a["".concat(z).concat(Object(f.a)(u))],x&&a.disabled,y&&a.selected,"medium"!==w&&a["size".concat(Object(f.a)(w))])},M),"page"===B&&O,L?i.createElement(L,{className:a.icon}):null)}));t.a=Object(l.a)((function(e){return{root:Object(o.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(c.a)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(c.a)(e.palette.primary.main,.5)),backgroundColor:Object(c.a)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(c.a)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(c.a)(e.palette.secondary.main,.5)),backgroundColor:Object(c.a)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(c.a)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(h)},193:function(e,t,a){"use strict";var n=a(3),o=a(6),i=a(0),r=(a(4),a(13)),c=a(15),s=a(44),l=a(62),d=a(174);var u=a(191);function m(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var p=i.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,c=e.className,p=e.color,b=void 0===p?"standard":p,g=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),f=void 0===g?m:g,h=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),j=void 0===h?function(e){return i.createElement(u.a,e)}:h,x=e.shape,O=void 0===x?"round":x,v=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),y=void 0===v?"medium":v,C=e.variant,k=void 0===C?"text":C,N=Object(o.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,i=e.componentName,r=void 0===i?"usePagination":i,c=e.count,u=void 0===c?1:c,m=e.defaultPage,p=void 0===m?1:m,b=e.disabled,g=void 0!==b&&b,f=e.hideNextButton,h=void 0!==f&&f,j=e.hidePrevButton,x=void 0!==j&&j,O=e.onChange,v=e.page,y=e.showFirstButton,C=void 0!==y&&y,k=e.showLastButton,N=void 0!==k&&k,w=e.siblingCount,P=void 0===w?1:w,B=Object(o.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),$=Object(d.a)({controlled:v,default:p,name:r,state:"page"}),z=Object(l.a)($,2),M=z[0],L=z[1],R=function(e,t){v||L(t),O&&O(e,t)},S=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},T=S(1,Math.min(a,u)),I=S(Math.max(u-a+1,a+1),u),E=Math.max(Math.min(M-P,u-a-2*P-1),a+2),V=Math.min(Math.max(M+P,a+2*P+2),I[0]-2),A=[].concat(Object(s.a)(C?["first"]:[]),Object(s.a)(x?[]:["previous"]),Object(s.a)(T),Object(s.a)(E>a+2?["start-ellipsis"]:a+1<u-a?[a+1]:[]),Object(s.a)(S(E,V)),Object(s.a)(V<u-a-1?["end-ellipsis"]:u-a>a?[u-a]:[]),Object(s.a)(I),Object(s.a)(h?[]:["next"]),Object(s.a)(N?["last"]:[])),W=function(e){switch(e){case"first":return 1;case"previous":return M-1;case"next":return M+1;case"last":return u;default:return null}},F=A.map((function(e){return"number"===typeof e?{onClick:function(t){R(t,e)},type:"page",page:e,selected:e===M,disabled:g,"aria-current":e===M?"true":void 0}:{onClick:function(t){R(t,W(e))},type:e,page:W(e),selected:!1,disabled:g||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?M>=u:M<=1)}}));return Object(n.a)({items:F},B)}(Object(n.a)({},e,{componentName:"Pagination"})).items;return i.createElement("nav",Object(n.a)({"aria-label":"pagination navigation",className:Object(r.a)(a.root,c),ref:t},N),i.createElement("ul",{className:a.ul},w.map((function(e,t){return i.createElement("li",{key:t},j(Object(n.a)({},e,{color:b,"aria-label":f(e.type,e.page,e.selected),shape:O,size:y,variant:k})))}))))}));t.a=Object(c.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(p)},219:function(e,t,a){"use strict";a.r(t);var n,o=a(60),i=a(217),r=a(156),c=a(0),s=a(84),l=a(173),d=a(216),u=Object(d.a)(n||(n=Object(l.a)(["\n\tquery pokemons($limit: Int!, $offset: Int!) {\n\t\tpokemons(limit: $limit, offset: $offset) {\n\t\t\tcount\n\t\t\tnext\n\t\t\tprevious\n\t\t\tstatus\n\t\t\tmessage\n\t\t\tresults {\n\t\t\t\tname\n\t\t\t\timage\n\t\t\t}\n\t\t}\n\t}\n"]))),m=a(30),p=a(148),b=Object(p.a)((function(e){return Object(m.a)({},e.globalClasses)})),g=a(193),f=function(e,t){return e.filter((function(e){return e.name===t})).length},h=a(169),j=a(178),x=a(82),O=a(175),v=a(5);t.default=function(){var e=b(),t=Object(O.a)({defaultPage:1,defaultOffset:0,limit:20}),a=Object(o.a)(t,3),n=a[0],l=a[1],d=a[2],m=Object(c.useContext)(x.a).myPokemons,p=Object(i.a)(u,{variables:{limit:20,offset:l}}),y=p.loading,C=p.error,k=p.data;return C?Object(v.jsx)(h.a,{}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(s.a,{open:y,color:"#D579C8",backgroundColor:"white"}),Object(v.jsxs)(r.a,{container:!0,className:e.container,justifyContent:"space-evenly","data-testid":"pokemon-list-container",children:[!!k&&k.pokemons.results.map((function(e,t){return Object(v.jsx)(j.a,{name:e.name,image:e.image,ownedCount:f(m,e.name)},t)})),Object(v.jsx)(r.a,{item:!0,xs:12,className:e.paginationContainer,children:!!k&&Object(v.jsx)(g.a,{page:n,size:"small",count:Math.ceil(k.pokemons.count/20),onChange:d,variant:"outlined",shape:"rounded","data-testid":"pagination"})})]})]})}}}]);
//# sourceMappingURL=6.8283c421.chunk.js.map