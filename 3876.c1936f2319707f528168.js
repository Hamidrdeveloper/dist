"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3876],{33876:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(27378),l=n(96740),r=n(33996),c=n(52318);n(64030);function u(){const e=new c.Z;return a.createElement(r.Xg,{module:e},a.createElement(r.Xg.Breadcrumb,null),a.createElement(r.Xg.Panel,null,a.createElement(r.s_.Header,{hasSearch:!0}),a.createElement(r.s_.ListView,{hasActive:!0,hasDefault:!0,tableScroll:{x:992,y:475},module:e})))}var m=n(38056),d=n(53988),s=n(3487),o=n(75724),i=n(76247);var E=()=>{const e=(0,l.s0)(),{currency_id:t}=(0,l.UO)(),[n,u]=(0,a.useState)({}),[E,p]=(0,a.useState)(!1),b=new c.Z,h=b.title[0],f=`${i.AW.replace("*","")}`,g=[...b.breadcrumbItems,{path:"",breadcrumbName:t?`${m.ZP.t("Global.Update")} ${h} - ${t}`:`${m.ZP.t("Global.New")} ${h}`}];(0,a.useEffect)((()=>{t&&(p(!0),b.apiService.getOne(+t).then((e=>{u(e)})).finally((()=>{p(!1)})))}),[]);return a.createElement(r.Xg,{module:b},a.createElement(r.Xg.Breadcrumb,{routes:g}),a.createElement(r.Xg.Panel,null,a.createElement(s.j,null,a.createElement("div",{className:"header"},a.createElement(d.Z,{onClose:()=>e(`/admin${f}`),items:g})),E?a.createElement(r.aN,null):a.createElement(o.default,{singleData:n,onCallback:()=>{e(-1)}}))))};function p(){return a.createElement(l.Z5,null,a.createElement(l.AW,{path:"",element:a.createElement(u,null)}),a.createElement(l.AW,{path:"/upsert",element:a.createElement(E,null)}),a.createElement(l.AW,{path:"/upsert/:currency_id",element:a.createElement(E,null)}))}},3487:function(e,t,n){n.d(t,{j:function(){return a}});const a=n(26761).ZP.div`
  padding: 32px;
  .header {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px dashed #ededed;
  }
`}}]);