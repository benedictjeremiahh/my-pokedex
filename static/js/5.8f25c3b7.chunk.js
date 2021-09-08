(this["webpackJsonpmy-pokedex"]=this["webpackJsonpmy-pokedex"]||[]).push([[5],{168:function(e,t,a){"use strict";t.a=a.p+"static/media/pokeball_open.2ba4c674.png"},169:function(e,t,a){"use strict";var o=a(156),n=(a(0),a(83)),i=a(37),r=a(30),l=a(148),c=Object(l.a)((function(e){return Object(r.a)(Object(r.a)({},e.globalClasses),{},{errorPictureContainer:{display:"flex",justifyContent:"center","& img":Object(i.a)({width:"60vw"},e.breakpoints.up("md"),{width:"20vw"})},errorMessageContainer:{textAlign:"center",marginTop:"12px",fontWeight:"bold"}})})),s=a(5);t.a=function(){var e=c();return Object(s.jsxs)(o.a,{container:!0,className:e.container,"data-testid":"error-message",children:[Object(s.jsx)(o.a,{item:!0,xs:12,className:e.errorPictureContainer,children:Object(s.jsx)("img",{src:n.a,alt:"Error","data-testid":"error-image"})}),Object(s.jsx)(o.a,{item:!0,xs:12,className:e.errorMessageContainer,"data-testid":"error-message-text",children:"Oops... Something happened, please try again..."})]})}},172:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var o,n=a(173),i=a(216),r=Object(i.a)(o||(o=Object(n.a)(["\n\tquery pokemon($name: String!) {\n\t\tpokemon(name: $name) {\n\t\t\tid\n\t\t\tname\n\t\t\tweight\n\t\t\theight\n\t\t\tsprites {\n\t\t\t\tfront_default\n\t\t\t}\n\t\t\tabilities {\n\t\t\t\tability {\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t\tis_hidden\n\t\t\t}\n\t\t\tmoves {\n\t\t\t\tmove {\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t\ttypes {\n\t\t\t\ttype {\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t\tmessage\n\t\t\tstatus\n\t\t}\n\t}\n"])))},176:function(e,t,a){"use strict";var o=a(60),n=a(0),i=a(82);t.a=function(){var e=Object(n.useContext)(i.a).releasePokemon,t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),d=s[0],m=s[1];return[d,function(e){l(e),m(!0)},function(t){t&&r&&e(r),m(!1),l("")},r]}},177:function(e,t,a){"use strict";var o=a(60),n=a(156),i=a(192),r=a(190),l=a(0),c=function(e){return parseFloat((Math.round(100*e)/100).toFixed(2))},s=function(e){return e.replace(/[^a-zA-Z ]/g," ")},d=a(37),m=a(30),p=a(148),b=Object(p.a)((function(e){return Object(m.a)(Object(m.a)({},e.globalClasses),{},{title:{textAlign:"center",fontSize:"24px"},pokemonItem:{width:"80vw",padding:"12px",margin:"12px 0"},pokemonDetail:{padding:"0 12px"},pokemonImage:Object(d.a)({width:"100%"},e.breakpoints.up("sm"),{width:"100%"}),paginationContainer:{padding:"24px 0",display:"flex",justifyContent:"center"},chipType:Object(m.a)({margin:"0 6px",fontWeight:"bold",textTransform:"uppercase",color:"white"},e.typeColors),horizontalDivider:{width:"100%",margin:"10px 0","&:first-of-type":{marginTop:"18px"},"&:last-of-type":{marginBottom:"18px"}},label:{color:"gray"},capitalized:{textTransform:"capitalize"},orderedList:{listStylePosition:"inside",paddingLeft:"0","& li":{lineHeight:"28px","&.moves":{display:"inline"}}},hiddenAbbility:{color:"gray"},loadAllButton:{textDecoration:"underline",cursor:"pointer"}})})),u=a(5);t.a=function(e){var t=e.pokemon,a=e.nickname,d=b(),m=Object(l.useState)(!1),p=Object(o.a)(m,2),j=p[0],h=p[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(n.a,{item:!0,xs:12,md:3,children:Object(u.jsx)("img",{className:d.pokemonImage,src:t.sprites.front_default,alt:t.name,"data-testid":"pokemon-information-image"})}),Object(u.jsxs)(n.a,{item:!0,xs:12,className:d.pokemonDetail,container:!0,justifyContent:"flex-start",alignContent:"flex-start",md:8,children:[Object(u.jsx)(n.a,{item:!0,xs:12,children:t.types.map((function(e,t){return Object(u.jsx)(i.a,{label:e.type.name,className:"".concat(d.chipType," ").concat(e.type.name),"data-testid":"pokemon-information-".concat(e.type.name)},t)}))}),!!a&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.a,{className:d.horizontalDivider}),Object(u.jsx)(n.a,{item:!0,xs:3,md:2,className:d.label,children:"Nickname"}),Object(u.jsx)(n.a,{item:!0,xs:1,md:1,className:d.label,children:":"}),Object(u.jsx)(n.a,{item:!0,xs:8,md:9,"data-testid":"pokemon-information-nickname",children:a})]}),Object(u.jsx)(r.a,{className:d.horizontalDivider}),Object(u.jsx)(n.a,{item:!0,xs:3,md:2,className:d.label,children:"Name"}),Object(u.jsx)(n.a,{item:!0,xs:1,md:1,className:d.label,children:":"}),Object(u.jsx)(n.a,{item:!0,xs:8,md:9,className:d.capitalized,"data-testid":"pokemon-information-name",children:t.name}),Object(u.jsx)(r.a,{className:d.horizontalDivider}),Object(u.jsx)(n.a,{item:!0,xs:3,md:2,className:d.label,children:"Height"}),Object(u.jsx)(n.a,{item:!0,xs:1,md:1,className:d.label,children:":"}),Object(u.jsxs)(n.a,{item:!0,xs:8,md:9,"data-testid":"pokemon-information-height",children:[c(t.height/10)," m"]}),Object(u.jsx)(r.a,{className:d.horizontalDivider}),Object(u.jsx)(n.a,{item:!0,xs:3,md:2,className:d.label,children:"Weight"}),Object(u.jsx)(n.a,{item:!0,xs:1,md:1,className:d.label,children:":"}),Object(u.jsxs)(n.a,{item:!0,xs:8,md:9,"data-testid":"pokemon-information-weight",children:[c(t.weight/10)," kg"]}),Object(u.jsx)(r.a,{className:d.horizontalDivider}),Object(u.jsx)(n.a,{item:!0,xs:3,md:2,className:d.label,children:"Abilities"}),Object(u.jsx)(n.a,{item:!0,xs:1,md:1,className:d.label,children:":"}),Object(u.jsx)(n.a,{item:!0,xs:8,md:9,"data-testid":"pokemon-information-abilities",children:t.abilities.length>0?Object(u.jsx)("ol",{className:"".concat(d.orderedList," ").concat(d.capitalized),children:t.abilities.map((function(e,t){return Object(u.jsxs)("li",{"data-testid":"pokemon-information-ability",children:[s(e.ability.name)," ",e.is_hidden?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("span",{className:d.hiddenAbbility,"data-testid":"pokemon-information-hidden-ability",children:"(hidden ability)"})}):null]},t)}))}):"-"}),Object(u.jsx)(r.a,{className:d.horizontalDivider}),Object(u.jsx)(n.a,{item:!0,xs:3,md:2,className:d.label,children:"Moves"}),Object(u.jsx)(n.a,{item:!0,xs:1,md:1,className:d.label,children:":"}),Object(u.jsx)(n.a,{item:!0,xs:8,md:9,"data-testid":"pokemon-information-moves",children:t.moves.length>0?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ol",{className:"".concat(d.orderedList," ").concat(d.capitalized),children:t.moves.filter((function(e,t){return j?!!e:t<5})).map((function(e,t){return Object(u.jsxs)("li",{className:"moves","data-testid":"pokemon-information-move",children:[0!==t&&Object(u.jsx)("b",{children:" | "}),s(e.move.name)]},t)}))}),t.moves.length>5&&Object(u.jsx)("span",{className:d.loadAllButton,onClick:function(){h(!j)},"data-testid":"pokemon-information-load-hide-moves-button",children:j?"Hide Moves":"Load All Moves"})]}):"-"}),Object(u.jsx)(r.a,{className:d.horizontalDivider})]})]})}},179:function(e,t,a){"use strict";var o=a(218),n=a(151),i=a(123),r=a(156),l=a(189),c=(a(0),a(37)),s=a(30),d=a(148),m=Object(d.a)((function(e){var t;return Object(s.a)(Object(s.a)({},e.globalClasses),{},{modal:Object(c.a)({display:"flex",alignItems:"center",justifyContent:"center"},e.breakpoints.up("md"),{width:"50vw",margin:"0 auto"}),content:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:"24px 18px",margin:"0 24px",borderRadius:"8px",outline:"none"},modalTitle:{textAlign:"center",fontSize:"24px",fontWeight:"bold","& img":{width:"20px",marginLeft:"8px"}},modalSubTitle:{textAlign:"center",fontSize:"18px",marginTop:"18px",lineHeight:"24px"},buttonConfirmation:(t={color:"white",paddingLeft:"24px",paddingRight:"24px",margin:"6px 0"},Object(c.a)(t,e.breakpoints.up("md"),{margin:"12px auto"}),Object(c.a)(t,"&:hover",{fontWeight:"bold"}),t)})})),p=a(5);t.a=function(e){var t=e.open,a=e.onConfirm,c=e.nickname,s=m(),d=function(){a(!1)};return t?Object(p.jsx)(o.a,{className:s.modal,open:t,onClose:d,closeAfterTransition:!0,BackdropComponent:n.a,BackdropProps:{timeout:500},"data-testid":"modal-release-confirmation",children:Object(p.jsx)(i.a,{in:t,children:Object(p.jsxs)(r.a,{container:!0,className:s.content,children:[Object(p.jsx)(r.a,{item:!0,xs:12,className:s.modalTitle,children:"Are you sure?"}),Object(p.jsxs)(r.a,{item:!0,xs:12,className:s.modalSubTitle,"data-testid":"modal-release-confirmation-subtitle",children:["You are about to release ",Object(p.jsx)("b",{children:c})," back to its habitat, are you sure you want to do this?"]}),Object(p.jsx)(r.a,{component:l.a,item:!0,xs:12,md:4,className:"".concat(s.buttonConfirmation," ").concat(s.danger),onClick:function(){a(!0)},"data-testid":"modal-release-confirmation-yes-confirm",children:"Yes, I am sure"}),Object(p.jsx)(r.a,{component:l.a,item:!0,xs:12,md:4,className:"".concat(s.buttonConfirmation," ").concat(s.success),onClick:d,"data-testid":"modal-release-confirmation-no-confirm",children:"No, Let me think"})]})})}):null}},190:function(e,t,a){"use strict";var o=a(3),n=a(6),i=a(0),r=(a(4),a(13)),l=a(15),c=a(61),s=i.forwardRef((function(e,t){var a=e.absolute,l=void 0!==a&&a,c=e.classes,s=e.className,d=e.component,m=void 0===d?"hr":d,p=e.flexItem,b=void 0!==p&&p,u=e.light,j=void 0!==u&&u,h=e.orientation,g=void 0===h?"horizontal":h,x=e.role,f=void 0===x?"hr"!==m?"separator":void 0:x,O=e.variant,y=void 0===O?"fullWidth":O,v=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(m,Object(o.a)({className:Object(r.a)(c.root,s,"fullWidth"!==y&&c[y],l&&c.absolute,b&&c.flexItem,j&&c.light,"vertical"===g&&c.vertical),role:f,ref:t},v))}));t.a=Object(l.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.a)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},192:function(e,t,a){"use strict";var o=a(3),n=a(6),i=a(0),r=(a(4),a(13)),l=a(170),c=Object(l.a)(i.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),s=a(15),d=a(61),m=a(42),p=a(50),b=a(125);function u(e){return"Backspace"===e.key||"Delete"===e.key}var j=i.forwardRef((function(e,t){var a=e.avatar,l=e.classes,s=e.className,d=e.clickable,j=e.color,h=void 0===j?"default":j,g=e.component,x=e.deleteIcon,f=e.disabled,O=void 0!==f&&f,y=e.icon,v=e.label,k=e.onClick,C=e.onDelete,N=e.onKeyDown,w=e.onKeyUp,S=e.size,z=void 0===S?"medium":S,T=e.variant,I=void 0===T?"default":T,L=Object(n.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),D=i.useRef(null),$=Object(m.a)(D,t),R=function(e){e.stopPropagation(),C&&C(e)},P=!(!1===d||!k)||d,A="small"===z,E=g||(P?b.a:"div"),B=E===b.a?{component:"div"}:{},W=null;if(C){var F=Object(r.a)("default"!==h&&("default"===I?l["deleteIconColor".concat(Object(p.a)(h))]:l["deleteIconOutlinedColor".concat(Object(p.a)(h))]),A&&l.deleteIconSmall);W=x&&i.isValidElement(x)?i.cloneElement(x,{className:Object(r.a)(x.props.className,l.deleteIcon,F),onClick:R}):i.createElement(c,{className:Object(r.a)(l.deleteIcon,F),onClick:R})}var M=null;a&&i.isValidElement(a)&&(M=i.cloneElement(a,{className:Object(r.a)(l.avatar,a.props.className,A&&l.avatarSmall,"default"!==h&&l["avatarColor".concat(Object(p.a)(h))])}));var H=null;return y&&i.isValidElement(y)&&(H=i.cloneElement(y,{className:Object(r.a)(l.icon,y.props.className,A&&l.iconSmall,"default"!==h&&l["iconColor".concat(Object(p.a)(h))])})),i.createElement(E,Object(o.a)({role:P||C?"button":void 0,className:Object(r.a)(l.root,s,"default"!==h&&[l["color".concat(Object(p.a)(h))],P&&l["clickableColor".concat(Object(p.a)(h))],C&&l["deletableColor".concat(Object(p.a)(h))]],"default"!==I&&[l.outlined,{primary:l.outlinedPrimary,secondary:l.outlinedSecondary}[h]],O&&l.disabled,A&&l.sizeSmall,P&&l.clickable,C&&l.deletable),"aria-disabled":!!O||void 0,tabIndex:P||C?0:void 0,onClick:k,onKeyDown:function(e){e.currentTarget===e.target&&u(e)&&e.preventDefault(),N&&N(e)},onKeyUp:function(e){e.currentTarget===e.target&&(C&&u(e)?C(e):"Escape"===e.key&&D.current&&D.current.blur()),w&&w(e)},ref:$},B,L),M||H,i.createElement("span",{className:Object(r.a)(l.label,A&&l.labelSmall)},v),W)}));t.a=Object(s.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(d.a)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(d.c)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(d.c)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(d.c)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(d.c)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(d.c)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(d.c)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.a)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.a)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.a)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(d.a)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(d.a)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(d.a)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(d.a)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(d.a)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(j)},221:function(e,t,a){"use strict";a.r(t);var o=a(60),n=a(217),i=a(156),r=a(189),l=a(0),c=a(9),s=a(84),d=a(172),m=a(37),p=a(30),b=a(148),u=Object(b.a)((function(e){return Object(p.a)(Object(p.a)({},e.globalClasses),{},{title:{textAlign:"center",fontSize:"24px"},pokemonItem:{width:"80vw",padding:"12px",margin:"12px 0"},pokemonDetail:{padding:"0 12px"},pokemonImage:Object(m.a)({width:"100%"},e.breakpoints.up("sm"),{width:"100%"}),paginationContainer:{padding:"24px 0",display:"flex",justifyContent:"center"},chipType:Object(p.a)({margin:"0 6px",fontWeight:"bold",textTransform:"uppercase",color:"white"},e.typeColors),horizontalDivider:{width:"100%",margin:"10px 0","&:first-of-type":{marginTop:"18px"},"&:last-of-type":{marginBottom:"18px"}},label:{color:"gray"},capitalized:{textTransform:"capitalize"},orderedList:{listStylePosition:"inside",paddingLeft:"0","& li":{margin:"5px 0"}},hiddenAbbility:{color:"gray"},loadAllButton:{textDecoration:"underline",cursor:"pointer"},releaseButtonContainer:{display:"flex",justifyContent:"center"},releaseButton:{fontWeight:"bold",color:"white",padding:"12px 46px",fontSize:"16px","& img":{width:"18px",marginLeft:"12px"}}})})),j=a(168),h=a(177),g=a(82),x=a(169),f=a(176),O=a(179),y=a(5);t.default=function(){var e=u(),t=Object(c.f)(),a=Object(c.h)().nickname,m=Object(l.useContext)(g.a).myPokemons,p=Object(f.a)(),b=Object(o.a)(p,3),v=b[0],k=b[1],C=b[2],N=Object(n.a)(d.a,{variables:{name:m.find((function(e){return e.nickname===a})).name}}),w=N.loading,S=N.error,z=N.data;return S?Object(y.jsx)(x.a,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(s.a,{open:w,color:"#D579C8",backgroundColor:"white"}),Object(y.jsx)(O.a,{open:v,nickname:a,onConfirm:function(e){C(e),e&&t.push("/my-pokemon")}}),!!z&&Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(i.a,{container:!0,justifyContent:"space-between",className:e.container,"data-testid":"my-pokemon-detail-container",children:[Object(y.jsx)(h.a,{pokemon:z.pokemon,nickname:a}),Object(y.jsx)(i.a,{item:!0,xs:12,className:e.releaseButtonContainer,children:Object(y.jsxs)(r.a,{className:"".concat(e.releaseButton," ").concat(e.danger),onClick:function(){k(a)},"data-testid":"my-pokemon-release-button",children:["Release Me"," ",Object(y.jsx)("img",{src:j.a,alt:"PokeballOpen"})]})})]})})]})}}}]);
//# sourceMappingURL=5.8f25c3b7.chunk.js.map