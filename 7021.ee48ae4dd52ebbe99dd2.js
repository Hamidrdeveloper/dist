"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7021],{19830:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(50189),a=n(27378),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M348 676.1C250 619.4 184 513.4 184 392c0-181.1 146.9-328 328-328s328 146.9 328 328c0 121.4-66 227.4-164 284.1V792c0 17.7-14.3 32-32 32H380c-17.7 0-32-14.3-32-32V676.1zM392 888h240c4.4 0 8 3.6 8 8v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32v-32c0-4.4 3.6-8 8-8z"}}]},name:"bulb",theme:"filled"},c=n(92788),i=function(e,t){return a.createElement(c.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:r}))};i.displayName="BulbFilled";var o=a.forwardRef(i)},19504:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(50189),a=n(27378),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zM512 824c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}}]},name:"mobile",theme:"filled"},c=n(92788),i=function(e,t){return a.createElement(c.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:r}))};i.displayName="MobileFilled";var o=a.forwardRef(i)},59512:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var l=n(27378),a=n(96740),r=n(33996),c=n(59222);n(66625);function i(){const e=new c.Z;return l.createElement(r.Xg,{module:e},l.createElement(r.Xg.Breadcrumb,null),l.createElement(r.Xg.Panel,null,l.createElement(r.s_.Header,{hasNew:!0}),l.createElement(r.s_.ListView,{module:e})))}var o=n(38056),d=n(53988),u=n(3487),m=n(29096),s=n(92416),f=n(34234);n(9378);var p=()=>{const e=(0,a.s0)(),{availability_id:t}=(0,a.UO)(),[n,i]=(0,l.useState)({}),[p,b]=(0,l.useState)(!1),h=new c.Z,g=h.title[0],E=`${s.AW.replace("*","")}`,v=[...h.breadcrumbItems,{path:"",breadcrumbName:t?`${o.ZP.t("Global.Update")} ${g} - ${t}`:`${o.ZP.t("Global.New")} ${g}`}];(0,l.useEffect)((()=>{if(!t)return;const e=[o.ZP.t("ShippingProfile.Title"),o.ZP.t("ShippingProfile.Title",{count:2})],n=new f.Vx("http://88.198.95.174:2020/ClubAdmin/GetChantContent",e[0]);b(!0);const l={id:+t,clubId:1,adminId:12};n.createOne(l).then((e=>{i(e)})).finally((()=>b(!1)))}),[]);return l.createElement(r.Xg,{module:h},l.createElement(r.Xg.Breadcrumb,{routes:v}),l.createElement(r.Xg.Panel,null,l.createElement(u.j,null,l.createElement("div",{className:"header"},l.createElement(d.Z,{onClose:()=>e(`/admin${E}`),items:v})),p?l.createElement(r.aN,null):l.createElement(m.default,{onUpdate:e=>{const n=[o.ZP.t("ShippingProfile.Title"),o.ZP.t("ShippingProfile.Title",{count:2})],l=new f.Vx("http://88.198.95.174:2020/ClubAdmin/GetChantContent",n[0]);let a;console.log("========data============================"),console.log(e),console.log("=========data==========================="),a=e?{id:e,clubId:1,adminId:12}:{id:+t,clubId:1,adminId:12},l.createOne(a).then((e=>{i(e)}))},singleData:n,onCallback:()=>{e(-1)}}))))};var b=function(){return l.createElement(a.Z5,null,l.createElement(a.AW,{path:"",element:l.createElement(i,null)}),l.createElement(a.AW,{path:"/upsert",element:l.createElement(p,null)}),l.createElement(a.AW,{path:"/upsert/:availability_id",element:l.createElement(p,null)}))}},3487:function(e,t,n){n.d(t,{j:function(){return l}});const l=n(26761).ZP.div`
  padding: 32px;
  .header {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px dashed #ededed;
  }
`}}]);