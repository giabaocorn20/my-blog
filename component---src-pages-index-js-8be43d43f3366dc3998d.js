"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678,610],{1046:function(e,t,n){n.d(t,{w_:function(){return s}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(a),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return r.createElement(u,i({attr:i({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,a=e.attr,l=e.size,c=e.title,s=o(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(a)}},5391:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(7294),a=n(5697),l=n.n(a),i=n(2396),o=n(8725),c=n(262),s=n(1597),u=n(1804),d=n.n(u),m=n(9211),p=n(5985),f=n(8970),x=n(9308),g=function(){return r.createElement(s.StaticQuery,{query:"266133262",render:function(e){return r.createElement(m.Z,{sx:{display:"flex",alignItems:"center","@media (max-width: 600px)":{flexDirection:"column",alignItems:"flex-start"}}},r.createElement(x.Z,{variant:"overline",sx:{whiteSpace:"nowrap",color:"text.secondary",textDecoration:"none","&:hover":{textDecoration:"underline"}},component:s.Link,to:"/tags"},"Story Topics"),r.createElement(f.Z,{value:0,"aria-label":"tags",variant:"scrollable",scrollButtons:!0,sx:{width:"100%",alignItems:"center","& .MuiTabs-indicator":{display:"none"},"& .MuiTabs-flexContainer":{gap:".5rem"}}},e.allMdx.group.map((function(e){return r.createElement(p.Z,{key:e.fieldValue,label:e.fieldValue,component:s.Link,to:"/tag/"+d()(e.fieldValue)+"/",clickable:!0})}))))}})},y=n(3529),h=n(2746),v=n(7935),b=n(4320);h.default.propTypes={children:l().node,index:l().number.isRequired,value:l().number.isRequired};var E=function(e){var t,n=e.data,a=e.location,l=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=n.allMdx.nodes,u=r.useState(0),d=u[0];u[1];return 0===s.length?r.createElement(o.Z,{location:a,title:l},r.createElement(c.Z,{title:"Portfolio"}),r.createElement("p",null,'No blog posts found. Add markdown posts to "content/posts" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):r.createElement(y.default,{location:a,pageTitle:"Jason Nguyen",pageSeo:"Portfolio",tabIndex:0},r.createElement(g,null),r.createElement(h.default,{value:d,index:0,key:"all"},s.map((function(e){return r.createElement(b.ZP,{item:!0,xs:12,key:e.id,sx:{"&:last-child":{"& > hr":{display:"none"}}}},r.createElement(i.Z,{data:e}),r.createElement(v.Z,{sx:{pt:4,"@media (max-width: 600px)":{pt:"1.5rem"}}}))}))),n.allMdx.group.map((function(e,t){return r.createElement(h.default,{value:d,index:t+1,key:e.fieldValue},s.map((function(t){return t.frontmatter.category===e.fieldValue?r.createElement(b.ZP,{item:!0,xs:12,key:t.id,sx:{"&:last-child":{"& > hr":{display:"none"}}}},r.createElement(i.Z,{data:t}),r.createElement(v.Z,{sx:{pt:4,"@media (max-width: 600px)":{pt:"1.5rem"}}})):null})))})))}},2746:function(e,t,n){n.r(t);var r=n(3366),a=n(7294),l=n(4320),i=["children","value","index"];t.default=function(e){var t=e.children,n=e.value,o=e.index,c=(0,r.Z)(e,i);return a.createElement("div",Object.assign({role:"tabpanel",hidden:n!==o,id:"simple-tabpanel-"+o,"aria-labelledby":"simple-tab-"+o},c),n===o&&a.createElement(l.ZP,{container:!0,sx:{gap:"2rem","@media (max-width: 600px)":{gap:"1.5rem"}}},t))}},3529:function(e,t,n){n.r(t);var r=n(7294),a=n(8725),l=n(262),i=n(9211),o=n(581),c=n(1521),s=n(1719),u=n(339);t.default=function(e){var t=e.children,n=e.location,d=e.pageTitle,m=e.pageSeo,p=e.tabIndex;return r.createElement(a.Z,{location:n,title:r.createElement(i.Z,{sx:{display:"flex",alignItems:"center",padding:"0.5rem"}},r.createElement(o.Z,{size:"small",sx:{mr:1,backgroundColor:"action.selected",color:"text.primary"}},r.createElement(c.WRS,{fontSize:20})),d)},r.createElement(l.Z,{title:m}),r.createElement(i.Z,{sx:{flexGrow:1,overflow:"hidden"}},"    ",r.createElement(u.Z,{maxWidth:"string",disableGutters:!0,sx:{maxWidth:"692px",display:"flex",flexDirection:"column",gap:"2rem","@media (max-width: 600px)":{gap:"1.5rem",px:"1.5rem"}}},r.createElement(s.Z,{currentPath:n.pathname,activeTabIndex:p,sx:{padding:"1rem"}}),t)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-8be43d43f3366dc3998d.js.map