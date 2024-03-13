import{r as g,a as B,g as H,s as C,_ as p,u as U,b as L,j as o,c as S,d as z,l as A,$ as Ne,o as W,a0 as Ae,H as E,v as Be,I as D,a1 as Ce,M as J,A as ee,a2 as He,a3 as Ue,z as V,x as ze,T as K,P as h,S as je,V as De,e as F,f as Fe,K as _e,B as Oe,Z as Ke,a4 as te,i as Ee,h as Ve,W as We}from"./index-116ea7e4.js";import{l as oe,L as qe}from"./label-f37c3b76.js";import{C as we}from"./Checkbox-4815a413.js";import{S as Xe,O as Ge}from"./Select-ca6ed041.js";import{C as Je}from"./Container-a272153e.js";import{C as Ye}from"./Card-f0722ff5.js";import"./Menu-70835174.js";const Ze=g.createContext(),Re=Ze;function Qe(e){return B("MuiTable",e)}H("MuiTable",["root","stickyHeader"]);const et=["className","component","padding","size","stickyHeader"],tt=e=>{const{classes:t,stickyHeader:a}=e;return z({root:["root",a&&"stickyHeader"]},Qe,t)},ot=C("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>p({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":p({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),ae="table",at=g.forwardRef(function(t,a){const n=U({props:t,name:"MuiTable"}),{className:r,component:l=ae,padding:i="normal",size:c="medium",stickyHeader:s=!1}=n,d=L(n,et),u=p({},n,{component:l,padding:i,size:c,stickyHeader:s}),x=tt(u),j=g.useMemo(()=>({padding:i,size:c,stickyHeader:s}),[i,c,s]);return o.jsx(Re.Provider,{value:j,children:o.jsx(ot,p({as:l,role:l===ae?null:"table",ref:a,className:S(x.root,r),ownerState:u},d))})}),nt=at,st=g.createContext(),q=st;function rt(e){return B("MuiTableBody",e)}H("MuiTableBody",["root"]);const lt=["className","component"],it=e=>{const{classes:t}=e;return z({root:["root"]},rt,t)},ct=C("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),dt={variant:"body"},ne="tbody",pt=g.forwardRef(function(t,a){const n=U({props:t,name:"MuiTableBody"}),{className:r,component:l=ne}=n,i=L(n,lt),c=p({},n,{component:l}),s=it(c);return o.jsx(q.Provider,{value:dt,children:o.jsx(ct,p({className:S(s.root,r),as:l,ref:a,role:l===ne?null:"rowgroup",ownerState:c},i))})}),ut=pt;function gt(e){return B("MuiTableContainer",e)}H("MuiTableContainer",["root"]);const bt=["className","component"],ht=e=>{const{classes:t}=e;return z({root:["root"]},gt,t)},xt=C("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),mt=g.forwardRef(function(t,a){const n=U({props:t,name:"MuiTableContainer"}),{className:r,component:l="div"}=n,i=L(n,bt),c=p({},n,{component:l}),s=ht(c);return o.jsx(xt,p({ref:a,as:l,className:S(s.root,r),ownerState:c},i))}),ft=mt;function vt(e){return B("MuiTableCell",e)}const yt=H("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),Tt=yt,Ct=["align","className","component","padding","scope","size","sortDirection","variant"],jt=e=>{const{classes:t,variant:a,align:n,padding:r,size:l,stickyHeader:i}=e,c={root:["root",a,i&&"stickyHeader",n!=="inherit"&&`align${A(n)}`,r!=="normal"&&`padding${A(r)}`,`size${A(l)}`]};return z(c,vt,t)},wt=C("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${A(a.size)}`],a.padding!=="normal"&&t[`padding${A(a.padding)}`],a.align!=="inherit"&&t[`align${A(a.align)}`],a.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>p({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?Ne(W(e.palette.divider,1),.88):Ae(W(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${Tt.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),Rt=g.forwardRef(function(t,a){const n=U({props:t,name:"MuiTableCell"}),{align:r="inherit",className:l,component:i,padding:c,scope:s,size:d,sortDirection:u,variant:x}=n,j=L(n,Ct),m=g.useContext(Re),I=g.useContext(q),N=I&&I.variant==="head";let y;i?y=i:y=N?"th":"td";let T=s;y==="td"?T=void 0:!T&&N&&(T="col");const f=x||I&&I.variant,w=p({},n,{align:r,component:y,padding:c||(m&&m.padding?m.padding:"normal"),size:d||(m&&m.size?m.size:"medium"),sortDirection:u,stickyHeader:f==="head"&&m&&m.stickyHeader,variant:f}),b=jt(w);let v=null;return u&&(v=u==="asc"?"ascending":"descending"),o.jsx(wt,p({as:y,ref:a,className:S(b.root,l),"aria-sort":v,scope:T,ownerState:w},j))}),R=Rt,se=E(o.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),re=E(o.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),le=E(o.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),ie=E(o.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage");var ce,de,pe,ue,ge,be,he,xe;const Pt=["backIconButtonProps","count","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton"],St=g.forwardRef(function(t,a){const{backIconButtonProps:n,count:r,getItemAriaLabel:l,nextIconButtonProps:i,onPageChange:c,page:s,rowsPerPage:d,showFirstButton:u,showLastButton:x}=t,j=L(t,Pt),m=Be(),I=f=>{c(f,0)},N=f=>{c(f,s-1)},y=f=>{c(f,s+1)},T=f=>{c(f,Math.max(0,Math.ceil(r/d)-1))};return o.jsxs("div",p({ref:a},j,{children:[u&&o.jsx(D,{onClick:I,disabled:s===0,"aria-label":l("first",s),title:l("first",s),children:m.direction==="rtl"?ce||(ce=o.jsx(le,{})):de||(de=o.jsx(ie,{}))}),o.jsx(D,p({onClick:N,disabled:s===0,color:"inherit","aria-label":l("previous",s),title:l("previous",s)},n,{children:m.direction==="rtl"?pe||(pe=o.jsx(re,{})):ue||(ue=o.jsx(se,{}))})),o.jsx(D,p({onClick:y,disabled:r!==-1?s>=Math.ceil(r/d)-1:!1,color:"inherit","aria-label":l("next",s),title:l("next",s)},i,{children:m.direction==="rtl"?ge||(ge=o.jsx(se,{})):be||(be=o.jsx(re,{}))})),x&&o.jsx(D,{onClick:T,disabled:s>=Math.ceil(r/d)-1,"aria-label":l("last",s),title:l("last",s),children:m.direction==="rtl"?he||(he=o.jsx(ie,{})):xe||(xe=o.jsx(le,{}))})]}))}),kt=St;function $t(e){return B("MuiTablePagination",e)}const It=H("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]),O=It;var me;const Mt=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton"],Lt=C(R,{name:"MuiTablePagination",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({overflow:"auto",color:(e.vars||e).palette.text.primary,fontSize:e.typography.pxToRem(14),"&:last-child":{padding:0}})),Nt=C(Ce,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(e,t)=>p({[`& .${O.actions}`]:t.actions},t.toolbar)})(({theme:e})=>({minHeight:52,paddingRight:2,[`${e.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[e.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${O.actions}`]:{flexShrink:0,marginLeft:20}})),At=C("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(e,t)=>t.spacer})({flex:"1 1 100%"}),Bt=C("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(e,t)=>t.selectLabel})(({theme:e})=>p({},e.typography.body2,{flexShrink:0})),Ht=C(Xe,{name:"MuiTablePagination",slot:"Select",overridesResolver:(e,t)=>p({[`& .${O.selectIcon}`]:t.selectIcon,[`& .${O.select}`]:t.select},t.input,t.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${O.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),Ut=C(J,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(e,t)=>t.menuItem})({}),zt=C("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(e,t)=>t.displayedRows})(({theme:e})=>p({},e.typography.body2,{flexShrink:0}));function Dt({from:e,to:t,count:a}){return`${e}–${t} of ${a!==-1?a:`more than ${t}`}`}function Ft(e){return`Go to ${e} page`}const _t=e=>{const{classes:t}=e;return z({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},$t,t)},Ot=g.forwardRef(function(t,a){const n=U({props:t,name:"MuiTablePagination"}),{ActionsComponent:r=kt,backIconButtonProps:l,className:i,colSpan:c,component:s=R,count:d,getItemAriaLabel:u=Ft,labelDisplayedRows:x=Dt,labelRowsPerPage:j="Rows per page:",nextIconButtonProps:m,onPageChange:I,onRowsPerPageChange:N,page:y,rowsPerPage:T,rowsPerPageOptions:f=[10,25,50,100],SelectProps:w={},showFirstButton:b=!1,showLastButton:v=!1}=n,k=L(n,Mt),P=n,$=_t(P),Y=w.native?"option":Ut;let Z;(s===R||s==="td")&&(Z=c||1e3);const Me=ee(w.id),Q=ee(w.labelId),Le=()=>d===-1?(y+1)*T:T===-1?d:Math.min(d,(y+1)*T);return o.jsx(Lt,p({colSpan:Z,ref:a,as:s,ownerState:P,className:S($.root,i)},k,{children:o.jsxs(Nt,{className:$.toolbar,children:[o.jsx(At,{className:$.spacer}),f.length>1&&o.jsx(Bt,{className:$.selectLabel,id:Q,children:j}),f.length>1&&o.jsx(Ht,p({variant:"standard"},!w.variant&&{input:me||(me=o.jsx(He,{}))},{value:T,onChange:N,id:Me,labelId:Q},w,{classes:p({},w.classes,{root:S($.input,$.selectRoot,(w.classes||{}).root),select:S($.select,(w.classes||{}).select),icon:S($.selectIcon,(w.classes||{}).icon)}),children:f.map(M=>g.createElement(Y,p({},!Ue(Y)&&{ownerState:P},{className:$.menuItem,key:M.label?M.label:M,value:M.value?M.value:M}),M.label?M.label:M))})),o.jsx(zt,{className:$.displayedRows,children:x({from:d===0?0:y*T+1,to:Le(),count:d===-1?-1:d,page:y})}),o.jsx(r,{className:$.actions,backIconButtonProps:l,count:d,nextIconButtonProps:m,onPageChange:I,page:y,rowsPerPage:T,showFirstButton:b,showLastButton:v,getItemAriaLabel:u})]})}))}),Kt=Ot,_=[...Array(24)].map((e,t)=>({id:V.string.uuid(),avatarUrl:`/assets/images/avatars/avatar_${t+1}.jpg`,name:V.person.fullName(),company:V.company.name(),isVerified:V.datatype.boolean(),status:oe.sample(["active","banned"]),role:oe.sample(["Leader","Hr Manager","UI Designer","UX Designer","UI/UX Designer","Project Manager","Backend Developer","Full Stack Designer","Front End Developer","Full Stack Developer"])}));function Et(e){return B("MuiTableRow",e)}const Vt=H("MuiTableRow",["root","selected","hover","head","footer"]),fe=Vt,Wt=["className","component","hover","selected"],qt=e=>{const{classes:t,selected:a,hover:n,head:r,footer:l}=e;return z({root:["root",a&&"selected",n&&"hover",r&&"head",l&&"footer"]},Et,t)},Xt=C("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${fe.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${fe.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:W(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:W(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),ve="tr",Gt=g.forwardRef(function(t,a){const n=U({props:t,name:"MuiTableRow"}),{className:r,component:l=ve,hover:i=!1,selected:c=!1}=n,s=L(n,Wt),d=g.useContext(q),u=p({},n,{component:l,hover:i,selected:c,head:d&&d.variant==="head",footer:d&&d.variant==="footer"}),x=qt(u);return o.jsx(Xt,p({as:l,ref:a,className:S(x.root,r),role:l===ve?null:"row",ownerState:u},s))}),X=Gt;function Pe({query:e}){return o.jsx(X,{children:o.jsx(R,{align:"center",colSpan:6,sx:{py:3},children:o.jsxs(ze,{sx:{textAlign:"center"},children:[o.jsx(K,{variant:"h6",paragraph:!0,children:"Not found"}),o.jsxs(K,{variant:"body2",children:["No results found for  ",o.jsxs("strong",{children:['"',e,'"']}),".",o.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}Pe.propTypes={query:h.string};function Se({selected:e,name:t,avatarUrl:a,company:n,role:r,isVerified:l,status:i,handleClick:c}){const[s,d]=g.useState(null),u=j=>{d(j.currentTarget)},x=()=>{d(null)};return o.jsxs(o.Fragment,{children:[o.jsxs(X,{hover:!0,tabIndex:-1,role:"checkbox",selected:e,children:[o.jsx(R,{padding:"checkbox",children:o.jsx(we,{disableRipple:!0,checked:e,onChange:c})}),o.jsx(R,{component:"th",scope:"row",padding:"none",children:o.jsxs(je,{direction:"row",alignItems:"center",spacing:2,children:[o.jsx(De,{alt:t,src:a}),o.jsx(K,{variant:"subtitle2",noWrap:!0,children:t})]})}),o.jsx(R,{children:n}),o.jsx(R,{children:r}),o.jsx(R,{align:"center",children:l?"Yes":"No"}),o.jsx(R,{children:o.jsx(qe,{color:i==="banned"&&"error"||"success",children:i})}),o.jsx(R,{align:"right",children:o.jsx(D,{onClick:u,children:o.jsx(F,{icon:"eva:more-vertical-fill"})})})]}),o.jsxs(Fe,{open:!!s,anchorEl:s,onClose:x,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:[o.jsxs(J,{onClick:x,children:[o.jsx(F,{icon:"eva:edit-fill",sx:{mr:2}}),"Edit"]}),o.jsxs(J,{onClick:x,sx:{color:"error.main"},children:[o.jsx(F,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]})]})]})}Se.propTypes={avatarUrl:h.any,company:h.any,handleClick:h.func,isVerified:h.any,name:h.any,role:h.any,selected:h.any,status:h.string};function Jt(e){return B("MuiTableHead",e)}H("MuiTableHead",["root"]);const Yt=["className","component"],Zt=e=>{const{classes:t}=e;return z({root:["root"]},Jt,t)},Qt=C("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),eo={variant:"head"},ye="thead",to=g.forwardRef(function(t,a){const n=U({props:t,name:"MuiTableHead"}),{className:r,component:l=ye}=n,i=L(n,Yt),c=p({},n,{component:l}),s=Zt(c);return o.jsx(q.Provider,{value:eo,children:o.jsx(Qt,p({as:l,className:S(s.root,r),ref:a,role:l===ye?null:"rowgroup",ownerState:c},i))})}),oo=to,ao=E(o.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function no(e){return B("MuiTableSortLabel",e)}const so=H("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),G=so,ro=["active","children","className","direction","hideSortIcon","IconComponent"],lo=e=>{const{classes:t,direction:a,active:n}=e,r={root:["root",n&&"active"],icon:["icon",`iconDirection${A(a)}`]};return z(r,no,t)},io=C(_e,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.active&&t.active]}})(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(e.vars||e).palette.text.secondary},"&:hover":{color:(e.vars||e).palette.text.secondary,[`& .${G.icon}`]:{opacity:.5}},[`&.${G.active}`]:{color:(e.vars||e).palette.text.primary,[`& .${G.icon}`]:{opacity:1,color:(e.vars||e).palette.text.secondary}}})),co=C("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.icon,t[`iconDirection${A(a.direction)}`]]}})(({theme:e,ownerState:t})=>p({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},t.direction==="desc"&&{transform:"rotate(0deg)"},t.direction==="asc"&&{transform:"rotate(180deg)"})),po=g.forwardRef(function(t,a){const n=U({props:t,name:"MuiTableSortLabel"}),{active:r=!1,children:l,className:i,direction:c="asc",hideSortIcon:s=!1,IconComponent:d=ao}=n,u=L(n,ro),x=p({},n,{active:r,direction:c,hideSortIcon:s,IconComponent:d}),j=lo(x);return o.jsxs(io,p({className:S(j.root,i),component:"span",disableRipple:!0,ownerState:x,ref:a},u,{children:[l,s&&!r?null:o.jsx(co,{as:d,className:S(j.icon),ownerState:x})]}))}),uo=po,go={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function bo(e,t,a){return e?Math.max(0,(1+e)*t-a):0}function Te(e,t,a){return e[a]===null?1:t[a]===null||t[a]<e[a]?-1:t[a]>e[a]?1:0}function ho(e,t){return e==="desc"?(a,n)=>Te(a,n,t):(a,n)=>-Te(a,n,t)}function xo({inputData:e,comparator:t,filterName:a}){const n=e.map((r,l)=>[r,l]);return n.sort((r,l)=>{const i=t(r[0],l[0]);return i!==0?i:r[1]-l[1]}),e=n.map(r=>r[0]),a&&(e=e.filter(r=>r.name.toLowerCase().indexOf(a.toLowerCase())!==-1)),e}function ke({order:e,orderBy:t,rowCount:a,headLabel:n,numSelected:r,onRequestSort:l,onSelectAllClick:i}){const c=s=>d=>{l(d,s)};return o.jsx(oo,{children:o.jsxs(X,{children:[o.jsx(R,{padding:"checkbox",children:o.jsx(we,{indeterminate:r>0&&r<a,checked:a>0&&r===a,onChange:i})}),n.map(s=>o.jsx(R,{align:s.align||"left",sortDirection:t===s.id?e:!1,sx:{width:s.width,minWidth:s.minWidth},children:o.jsxs(uo,{hideSortIcon:!0,active:t===s.id,direction:t===s.id?e:"asc",onClick:c(s.id),children:[s.label,t===s.id?o.jsx(Oe,{sx:{...go},children:e==="desc"?"sorted descending":"sorted ascending"}):null]})},s.id))]})})}ke.propTypes={order:h.oneOf(["asc","desc"]),orderBy:h.string,rowCount:h.number,headLabel:h.array,numSelected:h.number,onRequestSort:h.func,onSelectAllClick:h.func};function $e({emptyRows:e,height:t}){return e?o.jsx(X,{sx:{...t&&{height:t*e}},children:o.jsx(R,{colSpan:9})}):null}$e.propTypes={emptyRows:h.number,height:h.number};function Ie({numSelected:e,filterName:t,onFilterName:a}){return o.jsxs(Ce,{sx:{height:96,display:"flex",justifyContent:"space-between",p:n=>n.spacing(0,1,0,3),...e>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[e>0?o.jsxs(K,{component:"div",variant:"subtitle1",children:[e," selected"]}):o.jsx(Ge,{value:t,onChange:a,placeholder:"Search user...",startAdornment:o.jsx(Ke,{position:"start",children:o.jsx(F,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),e>0?o.jsx(te,{title:"Delete",children:o.jsx(D,{children:o.jsx(F,{icon:"eva:trash-2-fill"})})}):o.jsx(te,{title:"Filter list",children:o.jsx(D,{children:o.jsx(F,{icon:"ic:round-filter-list"})})})]})}Ie.propTypes={numSelected:h.number,filterName:h.string,onFilterName:h.func};function mo(){const[e,t]=g.useState(0),[a,n]=g.useState("asc"),[r,l]=g.useState([]),[i,c]=g.useState("name"),[s,d]=g.useState(""),[u,x]=g.useState(5),j=(b,v)=>{v!==""&&(n(i===v&&a==="asc"?"desc":"asc"),c(v))},m=b=>{if(b.target.checked){const v=_.map(k=>k.name);l(v);return}l([])},I=(b,v)=>{const k=r.indexOf(v);let P=[];k===-1?P=P.concat(r,v):k===0?P=P.concat(r.slice(1)):k===r.length-1?P=P.concat(r.slice(0,-1)):k>0&&(P=P.concat(r.slice(0,k),r.slice(k+1))),l(P)},N=(b,v)=>{t(v)},y=b=>{t(0),x(parseInt(b.target.value,10))},T=b=>{t(0),d(b.target.value)},f=xo({inputData:_,comparator:ho(a,i),filterName:s}),w=!f.length&&!!s;return o.jsxs(Je,{children:[o.jsxs(je,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[o.jsx(K,{variant:"h4",children:"Users"}),o.jsx(Ee,{variant:"contained",color:"inherit",startIcon:o.jsx(F,{icon:"eva:plus-fill"}),children:"New User"})]}),o.jsxs(Ye,{children:[o.jsx(Ie,{numSelected:r.length,filterName:s,onFilterName:T}),o.jsx(Ve,{children:o.jsx(ft,{sx:{overflow:"unset"},children:o.jsxs(nt,{sx:{minWidth:800},children:[o.jsx(ke,{order:a,orderBy:i,rowCount:_.length,numSelected:r.length,onRequestSort:j,onSelectAllClick:m,headLabel:[{id:"name",label:"Name"},{id:"company",label:"Company"},{id:"role",label:"Role"},{id:"isVerified",label:"Verified",align:"center"},{id:"status",label:"Status"},{id:""}]}),o.jsxs(ut,{children:[f.slice(e*u,e*u+u).map(b=>o.jsx(Se,{name:b.name,role:b.role,status:b.status,company:b.company,avatarUrl:b.avatarUrl,isVerified:b.isVerified,selected:r.indexOf(b.name)!==-1,handleClick:v=>I(v,b.name)},b.id)),o.jsx($e,{height:77,emptyRows:bo(e,u,_.length)}),w&&o.jsx(Pe,{query:s})]})]})})}),o.jsx(Kt,{page:e,component:"div",count:_.length,rowsPerPage:u,onPageChange:N,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:y})]})]})}function Ro(){return o.jsxs(o.Fragment,{children:[o.jsx(We,{children:o.jsx("title",{children:" User | Minimal UI "})}),o.jsx(mo,{})]})}export{Ro as default};
