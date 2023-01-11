"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17],{25243:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(38056),a=(n(95171),n(34234)),l=n(27378),o=(n(18294),n(71471));class i{constructor(){this.entity="/transportation-rules",this.title=[r.ZP.t("TransportationRule.Title"),r.ZP.t("TransportationRule.Title",{count:2})],this.apiService=new a.Vx(this.entity,this.title[0]),this.UpsertComponent=(0,l.lazy)((()=>Promise.resolve().then(n.bind(n,90217)))),this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin/${o.AW.replace("*","")}`}],this.detailColumns=[{key:"id",label:r.ZP.t("Global.ID")},{key:"country_id",label:r.ZP.t("TransportationRule.Field.CountryId")},{key:"min_partner_amount",label:r.ZP.t("TransportationRule.Field.MinPartnerAmountGross")},{key:"partner_cost",label:r.ZP.t("TransportationRule.Field.PartnerCostNet")},{key:"min_customer_amount",label:r.ZP.t("TransportationRule.Field.MinCustomerAmount")},{key:"customer_cost",label:r.ZP.t("TransportationRule.Field.CustomerCost")}],this.tableColumns=[{key:"countryName",className:"hasTile",title:r.ZP.t("TransportationRule.Field.CountryName"),dataIndex:["country","name"]},{key:"min_partner_amount",className:"hasTile number",dataIndex:"min_partner_amount",title:r.ZP.t("TransportationRule.Field.MinPartnerAmountGross")},{key:"partner_cost",dataIndex:"partner_cost",className:"hasTile number",title:r.ZP.t("TransportationRule.Field.PartnerCostNet")},{key:"min_customer_amount",className:"hasTile number",dataIndex:"min_customer_amount",title:r.ZP.t("TransportationRule.Field.MinCustomerAmount")},{key:"customer_cost",dataIndex:"customer_cost",className:"hasTile number",title:r.ZP.t("TransportationRule.Field.CustomerCost")}]}}},90217:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});n(95171);var r=n(27378),a=n(56552),l=n(98809),o=n(33996),i=n(3288),s=n(35062),u=n(10374),m=n(25724),c=n(60071);n(18294);function d({onSubmit:e,isPending:t,initialValues:n}){const{t:a}=(0,c.$)(),[d]=i.Z.useForm();return(0,r.useEffect)((()=>{n&&d.setFieldsValue(n)}),[n]),r.createElement(i.Z,{form:d,layout:"vertical",onFinish:e},r.createElement(s.Z,{align:"middle",gutter:[16,0]},r.createElement(u.Z,{span:8},r.createElement(i.Z.Item,{label:a("Global.Country"),name:"country",rules:[{required:!0}]},r.createElement(l.O,null))),r.createElement(u.Z,{span:8},r.createElement(i.Z.Item,{label:a("TransportationRule.Field.MinPartnerAmountGross"),name:"min_partner_amount",rules:[{required:!0}]},r.createElement(m.Z,{precision:2,min:0,placeholder:a("Global.InputPlaceholder",{title:a("TransportationRule.Field.MinPartnerAmountGross")})}))),r.createElement(u.Z,{span:8},r.createElement(i.Z.Item,{label:a("TransportationRule.Field.MinCustomerAmount"),name:"min_customer_amount",rules:[{required:!0}]},r.createElement(m.Z,{precision:2,min:0,placeholder:a("Global.InputPlaceholder",{title:a("TransportationRule.Field.MinCustomerAmount")})}))),r.createElement(u.Z,{span:8},r.createElement(i.Z.Item,{label:a("TransportationRule.Field.PartnerCostNet"),name:"partner_cost",rules:[{required:!0}]},r.createElement(m.Z,{precision:2,min:0,placeholder:a("Global.InputPlaceholder",{title:a("TransportationRule.Field.PartnerCostNet")})}))),r.createElement(u.Z,{span:8},r.createElement(i.Z.Item,{label:a("TransportationRule.Field.CustomerCost"),name:"customer_cost",rules:[{required:!0}]},r.createElement(m.Z,{precision:2,min:0,placeholder:a("Global.InputPlaceholder",{title:a("TransportationRule.Field.CustomerCost")})})))),r.createElement(o.Ow,{isPending:t}))}var p=n(25243),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var h=({onCallback:e,closeModal:t,singleData:n})=>{const l=new p.Z,{mutate:o,isLoading:i}=(0,a.useMutation)((({id:e,values:t})=>e?l.apiService.updateOne(e,t):l.apiService.createOne(t)));return r.createElement(d,{initialValues:n,onSubmit:r=>{const{country:a}=r,l=b(r,["country"]),i=Object.assign({country_id:a.id},l);o({id:n?n.id:void 0,values:i},{onSuccess:n=>{null==e||e(n),null==t||t()}})},isPending:i})}},18294:function(e,t,n){n(98809)},70017:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(27378),a=n(96740),l=n(33996),o=(n(18294),n(25243));function i(){const e=new o.Z;return r.createElement(l.Xg,{module:e},r.createElement(l.Xg.Breadcrumb,null),r.createElement(l.Xg.Panel,null,r.createElement(l.s_.Header,{hasNew:!0,hasSearch:!0}),r.createElement(l.s_.ListView,{module:e})))}var s=n(38056),u=n(53988),m=n(3487),c=n(90217),d=n(71471);var p=()=>{const e=(0,a.s0)(),{id:t}=(0,a.UO)(),[n,i]=(0,r.useState)({}),[p,b]=(0,r.useState)(!1),h=new o.Z,E=h.title[0],Z=`${d.AW.replace("*","")}`,P=[...h.breadcrumbItems,{path:"",breadcrumbName:t?`${s.ZP.t("Global.Update")} ${E} - ${t}`:`${s.ZP.t("Global.New")} ${E}`}];(0,r.useEffect)((()=>{t&&(b(!0),h.apiService.getOne(+t).then((e=>{i(e)})).finally((()=>b(!1))))}),[]);return r.createElement(l.Xg,{module:h},r.createElement(l.Xg.Breadcrumb,{routes:P}),r.createElement(l.Xg.Panel,null,r.createElement(m.j,null,r.createElement("div",{className:"header"},r.createElement(u.Z,{onClose:()=>e(`/admin/${Z}`),items:P})),p?r.createElement(l.aN,null):r.createElement(c.default,{singleData:n,onCallback:()=>{e(-1)}}))))};function b(){return r.createElement(a.Z5,null,r.createElement(a.AW,{path:"",element:r.createElement(i,null)}),r.createElement(a.AW,{path:"/upsert",element:r.createElement(p,null)}),r.createElement(a.AW,{path:"/upsert/:id",element:r.createElement(p,null)}))}},3487:function(e,t,n){n.d(t,{j:function(){return r}});const r=n(26761).ZP.div`
  padding: 32px;
  .header {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px dashed #ededed;
  }
`},71471:function(e){e.exports=JSON.parse('{"AW":"shiasdpping/transportation-rules/*"}')}}]);