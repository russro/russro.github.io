(this.webpackJsonpescher=this.webpackJsonpescher||[]).push([[64,169],{318:function(t,e,o){"use strict";o.r(e);var i,a,r,n,s,c=o(8),l=o(14),p=o(3),d=o(10),b=o(13),h=o(28),u=o(21),v=o(22),m=o(1),f=(o(49),o(57)),g=o(11),y=o.n(g),j=o(47),O=o.n(j),x=o(27),w=o(0),k=o(33),S=o(6),z=o(48),I=o(18),B=o(43),C=o(24),H=o(39),D=o(122),N=o(861),E=Object(k.observer)((a=function(t){Object(u.a)(o,t);var e=Object(v.a)(o);function o(){var t;Object(d.a)(this,o);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a)),Object(p.a)(t,"scrollPosition",r,Object(h.a)(t)),Object(p.a)(t,"currentChapterBackgrounds",n,Object(h.a)(t)),Object(p.a)(t,"chapterNumberHovered",s,Object(h.a)(t)),t}return Object(b.a)(o,[{key:"componentDidMount",value:function(){this.loadScrollerData()}},{key:"componentDidUpdate",value:function(){this.loadScrollerData()}},{key:"mouseEnter",value:function(){0!==H.a.currentSlideIdx&&(this.chapterNumberHovered=!0)}},{key:"mouseLeave",value:function(){0!==H.a.currentSlideIdx&&(this.chapterNumberHovered=!1)}},{key:"loadScrollerData",value:function(){var t;if(this.props.scrollerData&&this.props.chapter&&(null===(t=H.a.currentChapter)||void 0===t?void 0:t.uid)===this.props.chapter.uid){var e=Object.assign([],this.props.scrollerData);B.a.setScrollerData(e)}}},{key:"subchapterClick",value:function(t){var e;if(x.a.useScrollbarForNavigation){var o=null===(e=this.props.scrollerRefs)||void 0===e?void 0:e.get(t);this.props.scrollerRefs&&o&&o.scrollIntoView({block:"start",inline:"center",behavior:"smooth"})}}},{key:"toPreviousSlide",value:function(){var t=H.a.currentSlideIdx,e=I.a.chapters&&I.a.chapters[t-1]&&I.a.chapters[t-1].uid;e&&C.b.push("/".concat(x.a.contentUnitUrl,"/").concat(e))}},{key:"render",value:function(){var t=this,e=this.props.classes,o=[];if(!this.props.chapter)return null;for(var i=0,a=function(a){var r=t.props.chapter.subchaptersIds[a],n=I.a.subchapters.get(r);if(n){if(t.props.scrollerData){var s,p=x.a.noCover?a:a+1;i=100*Math.max(Math.min(null!==(s=t.props.scrollerData[p])&&void 0!==s?s:0,1),0)}var d=I.a.getSubcontentIfExists(n.subcontentId);(null===d||void 0===d?void 0:d.shouldRender)&&o.push(Object(c.jsxs)("div",{className:O()(e["bar-item"],Object(l.a)({},e["bar-item-active"],r===B.a.activeSectionId)),onClick:function(){return t.subchapterClick(r)},style:{cursor:x.a.useScrollbarForNavigation?"pointer":""},children:[Object(c.jsx)("div",{className:O()(B.a.sideBarIsShown?e["section-title"]:e["section-title-hidden"],Object(l.a)({},e["section-title-active"],r===B.a.activeSectionId)),style:{opacity:B.a.sideBarIsShown?1:0},children:n.title}),Object(c.jsx)("div",{"data-at":"sidebarItem",className:O()(e["bar-base"],Object(l.a)({},e["bar-base-active"],r===B.a.activeSectionId))}),Object(c.jsx)("div",{className:e.filler,style:{height:"".concat(i,"%"),backgroundColor:t.props.chapter.color}})]},n.id))}},r=0;r<this.props.chapter.subchaptersIds.length;r++)a(r);var n=H.a.currentChapter,s=null,p="";return(null===n||void 0===n?void 0:n.idx)&&(p="0".concat(n.idx),s=Object(c.jsx)("div",{className:O()(Object(l.a)({},e.invisible,!B.a.sideBarIsShown),e["navigation-button-container"]),onMouseLeave:this.mouseLeave,onMouseEnter:this.mouseEnter,children:Object(c.jsx)("div",{className:O()(e["chapter-number"],Object(l.a)({},e["invisible-on-hover"],this.chapterNumberHovered)),style:{backgroundColor:n.color},children:p})})),Object(c.jsx)(S.Fragment,{children:Object(c.jsxs)("div",{className:O()(e["scroll-sidebar"],Object(l.a)({},e.invisible,B.a.vertiefungExpanded),Object(l.a)({},e["sidebar-is-shown"],B.a.sideBarIsShown)),children:[!B.a.vertiefungExpanded&&B.a.sideBarIsShown&&Object(c.jsx)("div",{className:e["left-dark-overlay"]}),s,o,z.a.desktop&&Object(c.jsx)("div",{className:O()(Object(l.a)({},e["current-section-title"],B.a.sideBarIsShown)),style:{opacity:B.a.sideBarIsShown?1:0},children:this.currentSectionTitle})]})})}},{key:"currentSectionTitle",get:function(){var t,e="";if(!B.a.activeSectionId)return e;var o=null===(t=I.a.subchapters)||void 0===t?void 0:t.get(B.a.activeSectionId);o&&(e=o.title.replace(/\s*<br\s*\/>\s*/gm," "));return e}}]),o}(D.ScrollPageChild),r=Object(m.a)(a.prototype,"scrollPosition",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),n=Object(m.a)(a.prototype,"currentChapterBackgrounds",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),s=Object(m.a)(a.prototype,"chapterNumberHovered",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(m.a)(a.prototype,"mouseEnter",[y.a,w.action],Object.getOwnPropertyDescriptor(a.prototype,"mouseEnter"),a.prototype),Object(m.a)(a.prototype,"mouseLeave",[y.a,w.action],Object.getOwnPropertyDescriptor(a.prototype,"mouseLeave"),a.prototype),Object(m.a)(a.prototype,"loadScrollerData",[y.a],Object.getOwnPropertyDescriptor(a.prototype,"loadScrollerData"),a.prototype),Object(m.a)(a.prototype,"subchapterClick",[y.a],Object.getOwnPropertyDescriptor(a.prototype,"subchapterClick"),a.prototype),Object(m.a)(a.prototype,"currentSectionTitle",[w.computed],Object.getOwnPropertyDescriptor(a.prototype,"currentSectionTitle"),a.prototype),i=a))||i;e.default=Object(f.a)(N.ScrollSidebarStyles,{name:"ScrollSidebar"})(E)},861:function(t,e,o){"use strict";o.r(e),o.d(e,"ScrollSidebarStyles",(function(){return s}));var i=o(14),a=o(135),r=o(56),n=o(12),s=function(t){var e,o,s;return Object(r.a)({"bar-item":{display:"flex",flexDirection:"column",flex:"1 1",position:"relative",marginBottom:"10px",zIndex:5,width:"100%"},"bar-base":(e={backgroundColor:t.palette.white(.7),position:"absolute",height:"100%",right:0},Object(i.a)(e,"@media ".concat(n.a),{width:"3px"}),Object(i.a)(e,"@media ".concat(n.b),{width:"2px"}),e),"text-container":Object(i.a)({color:t.palette.sideElements.desktop.fontColor(.7),hyphens:"auto",display:"flex",flexDirection:"column",justifyContent:"center",lineHeight:1.24,letterSpacing:"0.34px",textAlign:"center",transform:"rotate(180deg)",width:"100%",height:"100%",position:"absolute",fontSize:"0.85rem","-ms-writing-mode":"tb-lr"},"@media ".concat(n.b),{color:t.palette.sideElements.phone.fontColor(.7)}),"@keyframes glow-grow":{"0%":{opacity:0,transform:"scale(1)"},"80%":{opacity:1},"100%":{transform:"scale(1.5)",opacity:0}},text:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontFamily:t.fonts.primary.sansSerif},"current-section-title":{fontFamily:t.fonts.primary.sansSerif,fontSize:"0.85rem",position:"absolute",top:t.constants.sizes.desktop.topBarHeight,left:0,bottom:t.constants.sizes.desktop.bottomBarHeight,width:t.constants.sizes.desktop.sideBarWidth,"-ms-writing-mode":"tb-lr",transform:"rotate(180deg)",display:"flex",alignItems:"center",justifyContent:"flex-end",paddingBottom:"2rem",zIndex:2,transition:"opacity 0.6s 0.5s",writingMode:"vertical-lr"},"current-section-text":Object(i.a)({color:t.palette.sideElements.desktop.fontColor(1)},"@media ".concat(n.b),{color:t.palette.sideElements.phone.fontColor(1)}),"left-dark-overlay":Object(i.a)({position:"absolute",left:"-1px",width:"100px",height:"calc(100% - ".concat(t.constants.sizes.desktop.topBarHeight,"px)"),top:t.constants.sizes.desktop.topBarHeight,opacity:.35,zIndex:1,backgroundImage:"linear-gradient(to right, ".concat(t.palette.black(),", ").concat(t.palette.black(0),")")},"@media ".concat(n.b),{display:"none"}),"scroll-sidebar":(o={height:0,color:t.palette.sideElements.desktop.fontColor(1),display:"flex",flexDirection:"column",justifyContent:"space-between",zIndex:600,opacity:1,transform:"translate(0, 0)",transition:"all 0.6s",willChange:"transform",position:"sticky","-webkit-backface-visibility":"hidden",top:0,left:0},Object(i.a)(o,"@media ".concat(n.a),{paddingTop:t.constants.sizes.desktop.topBarHeight,paddingBottom:t.constants.sizes.desktop.bottomBarHeight,width:t.constants.sizes.desktop.sideBarWidth}),Object(i.a)(o,"@media ".concat(n.b),{color:t.palette.sideElements.phone.fontColor(1),width:t.constants.sizes.phone.sideBarWidth,paddingTop:t.constants.sizes.phone.topBarHeight}),o),"sidebar-is-shown":{height:a.a.height},filler:(s={position:"absolute",top:0,right:0,zIndex:1},Object(i.a)(s,"@media ".concat(n.a),{width:"3px"}),Object(i.a)(s,"@media ".concat(n.b),{width:"2px"}),Object(i.a)(s,"& $circle-end",{}),s),"circle-end":{},invisible:{opacity:0,transform:"translate(-200vw, 0)",transition:"all 0.6s"},"chapter-number":Object(i.a)({width:t.constants.sizes.desktop.topBarHeight,height:t.constants.sizes.desktop.topBarHeight,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:t.fonts.primary.serif,fontSize:"0.9rem",lineHeight:1.12,letterSpacing:"-0.66px",textAlign:"center",color:t.palette.black(),position:"relative"},"@media ".concat(n.b),{width:25,height:25,fontFamily:t.fonts.primary.serif,fontSize:"13px",fontWeight:"bold",lineHeight:1.31,letterSpacing:.39,color:t.palette.black(),position:"relative"}),"navigation-button-container":Object(i.a)({display:"none",width:t.constants.sizes.desktop.topBarHeight,height:t.constants.sizes.desktop.topBarHeight,position:"relative",zIndex:5,cursor:"pointer",opacity:1,transition:"opacity 0.3s"},"@media ".concat(n.b),{width:25,height:25,position:"relative",top:t.constants.sizes.phone.topBarHeight,left:t.constants.sizes.phone.topBarHeight-10}),"invisible-on-hover":{},"navigation-button":{position:"absolute",top:0,left:0,display:"none"},"navigation-button-invisible":{opacity:0,transition:"opacity 0.4s cubic-bezier(0.5, 1, 0.89, 1)"},"section-title-hidden":{height:0},"section-title":{display:"none",writingMode:"vertical-lr"},"bar-base-active":{},"section-title-active":{},"bar-item-active":{}})}}}]);