"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3124],{13124:function(e,t,l){l.r(t),l.d(t,{default:function(){return p}});var a=l(27378),n=l(96740),r=l(38056),u=l(33996),c=l(9211);l(29663);function m(){const e=new c.Z;return a.createElement(u.Xg,{module:e},a.createElement(u.Xg.Breadcrumb,null),a.createElement(u.Xg.Panel,null,a.createElement(u.s_.Header,{hasSearch:!0}),a.createElement(u.s_.ListView,{hasActive:!0,hasDefault:!0,module:e,tableScroll:{x:1450,y:475},togglers:[{url:"eeu-status",title:r.ZP.t("Global.IsEeu"),dataIndex:"is_eeu"}]})))}var s=l(53988),d=l(3487),o=l(13598),i=l(4716);var E=()=>{const e=(0,n.s0)(),{country_id:t}=(0,n.UO)(),[l,m]=(0,a.useState)({}),[E,p]=(0,a.useState)(!0),b=new c.Z,h=b.title[0],f=`${i.AW.replace("*","")}`,g=[...b.breadcrumbItems,{path:"",breadcrumbName:t?`${r.ZP.t("Global.Update")} ${h} - ${t}`:`${r.ZP.t("Global.New")} ${h}`}];(0,a.useEffect)((()=>{t?(p(!0),b.apiService.getOne(+t).then((e=>{m(e)})).finally((()=>{p(!1)}))):p(!1)}),[]);return a.createElement(u.Xg,{module:b},a.createElement(u.Xg.Breadcrumb,{routes:g}),a.createElement(u.Xg.Panel,null,a.createElement(d.j,null,a.createElement("div",{className:"header"},a.createElement(s.Z,{onClose:()=>e(`/admin${f}`),items:g})),E?a.createElement(u.aN,null):a.createElement(o.default,{singleData:l,onCallback:()=>{e(-1)}}))))};function p(){return a.createElement(n.Z5,null,a.createElement(n.AW,{path:"",element:a.createElement(m,null)}),a.createElement(n.AW,{path:"/upsert",element:a.createElement(E,null)}),a.createElement(n.AW,{path:"/upsert/:country_id",element:a.createElement(E,null)}))}},3487:function(e,t,l){l.d(t,{j:function(){return a}});const a=l(26761).ZP.div`
  padding: 32px;
  .header {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px dashed #ededed;
  }
`}}]);