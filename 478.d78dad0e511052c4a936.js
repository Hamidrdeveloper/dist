"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[478],{40478:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(27378),l=n(96740),r=n(33996),c=n(60071),o=(n(25857),n(27579));function m(){const{t:e}=(0,c.$)(),t=new o.Z;return a.createElement(r.Xg,{module:t},a.createElement(r.Xg.Breadcrumb,null),a.createElement(r.Xg.Panel,null,a.createElement(r.s_.Header,{hasNew:!0}),a.createElement(r.s_.ListView,{updateLink:"upsert",hasUpdate:!0,tableScroll:{x:992,y:475},module:t})))}var u=n(38056),s=n(53988),d=n(3487),i=n(60102),p=n(96180);n(34234);var E=()=>{const e=(0,l.s0)(),t=(0,l.TH)();console.log("=============location======================="),console.log(t),console.log("=============location=======================");const{paymentMethod_id:n}=(0,l.UO)(),[c,m]=(0,a.useState)({}),[E,b]=(0,a.useState)(!1),g=new o.Z,h=g.title[0],f=`${p.AW.replace("*","")}`,$=[...g.breadcrumbItems,{path:"",breadcrumbName:n?`${u.ZP.t("Global.Update")} ${h} - ${n}`:`${u.ZP.t("Global.New")} ${h}`}];(0,a.useEffect)((()=>{const e=Object.assign(Object.assign({},t.state.data),{file:t.state.data.logoUrl});m(e)}),[]);return a.createElement(r.Xg,{module:g},a.createElement(r.Xg.Breadcrumb,{routes:$}),a.createElement(r.Xg.Panel,null,a.createElement(d.j,null,a.createElement("div",{className:"header"},a.createElement(s.Z,{onClose:()=>e(`/admin${f}`),items:$})),E?a.createElement(r.aN,null):a.createElement(i.default,{singleData:c,onCallback:()=>{e(-1)}}))))};function b(){return a.createElement(l.Z5,null,a.createElement(l.AW,{path:"",element:a.createElement(m,null)}),a.createElement(l.AW,{path:"/upsert",element:a.createElement(E,null)}),a.createElement(l.AW,{path:"/upsert/:paymentMethod_id",element:a.createElement(E,null)}))}},3487:function(e,t,n){n.d(t,{j:function(){return a}});const a=n(26761).ZP.div`
  padding: 32px;
  .header {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px dashed #ededed;
  }
`}}]);