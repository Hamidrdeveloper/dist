"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9405,1829],{8391:function(e,t,l){l.d(t,{Z:function(){return i}});var a=l(38056),n=(l(95171),l(34234)),r=l(27378),u=(l(53422),l(11577));class i{constructor(){this.entity="/customer-steps",this.title=[a.ZP.t("CustomerStep.Title_other"),a.ZP.t("CustomerStep.Title_other",{count:2})],this.apiService=new n.Vx(this.entity,this.title[0]),this.UpsertComponent=(0,r.lazy)((()=>l.e(1829).then(l.bind(l,71829)))),this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin${u.AW.replace("*","")}`}],this.detailColumns=[{key:"id",label:a.ZP.t("Global.ID")},{key:"name",label:a.ZP.t("Global.Name")},{key:"frontline",label:a.ZP.t("CustomerStep.Field.Frontline")},{key:"voucher_level",label:a.ZP.t("CustomerStep.Field.VoucherLevel")},{key:"id_account_minus_value",label:a.ZP.t("CustomerStep.Field.AccountMinusValue")}],this.tableColumns=[{key:"name",className:"hasTile",title:a.ZP.t("Global.Name"),dataIndex:"name"},{key:"frontline",className:"hasTile",title:a.ZP.t("CustomerStep.Field.Frontline"),dataIndex:"frontline"},{key:"voucher_level",className:"hasTile",title:a.ZP.t("CustomerStep.Field.VoucherLevel"),dataIndex:"voucher_level"},{key:"id_account_minus_value",className:"hasTile",title:a.ZP.t("CustomerStep.Field.AccountMinusValue"),dataIndex:"id_account_minus_value"}]}}},71829:function(e,t,l){l.r(t),l.d(t,{default:function(){return h}});l(95171);var a=l(34234),n=l(27378),r=l(56552),u=l(33996),i=l(3288),c=l(35062),s=l(10374),o=l(25724),m=l(60071);l(53422);function d({onSubmit:e,isPending:t,initialValues:l}){const{t:a}=(0,m.$)(),[r]=i.Z.useForm();return(0,n.useEffect)((()=>{l&&r.setFieldsValue(l)}),[l]),n.createElement(i.Z,{form:r,layout:"vertical",onFinish:e,initialValues:{translate:[{locale:void 0,name:""}]}},n.createElement(c.Z,{align:"middle",gutter:[16,0]},n.createElement(s.Z,{span:24},n.createElement(i.Z.Item,{required:!0},n.createElement(u.Es,null))),n.createElement(s.Z,{xs:12},n.createElement(i.Z.Item,{label:a("CustomerStep.Field.VoucherLevel"),name:"voucher_level"},n.createElement(o.Z,{placeholder:a("Global.InputPlaceholder",{title:a("CustomerStep.Field.VoucherLevel")})}))),n.createElement(s.Z,{xs:12},n.createElement(i.Z.Item,{label:a("CustomerStep.Field.AccountMinusValue"),name:"id_account_minus_value"},n.createElement(o.Z,{placeholder:a("Global.InputPlaceholder",{title:a("CustomerStep.Field.AccountMinusValue")})})))),n.createElement(u.Ow,{isPending:t}))}var p=l(8391);var h=({onCallback:e,closeModal:t,singleData:l})=>{const u=new p.Z,{mutate:i,isLoading:c}=(0,r.useMutation)((({id:e,values:t})=>e?u.apiService.updateOne(e,t):u.apiService.createOne(t)));return n.createElement(d,{initialValues:l,onSubmit:n=>{const{voucher_level:r,id_account_minus_value:u,translate:c}=n,s={voucher_level:r,id_account_minus_value:u,translate:(0,a.mj)(c)};i({id:l?l.id:void 0,values:s},{onSuccess:l=>{null==e||e(l),null==t||t()}})},isPending:c})}},69405:function(e,t,l){l.r(t),l.d(t,{default:function(){return h}});var a=l(27378),n=l(96740),r=l(33996),u=l(8391);l(53422);function i(){const e=new u.Z;return a.createElement(r.Xg,{module:e},a.createElement(r.Xg.Breadcrumb,null),a.createElement(r.Xg.Panel,null,a.createElement(r.s_.Header,{hasSearch:!0}),a.createElement(r.s_.ListView,{module:e})))}var c=l(38056),s=l(53988),o=l(3487),m=l(71829),d=l(11577);var p=()=>{const e=(0,n.s0)(),{id:t}=(0,n.UO)(),[l,i]=(0,a.useState)({}),[p,h]=(0,a.useState)(!1),v=new u.Z,b=v.title[0],E=`${d.AW.replace("*","")}`,Z=[...v.breadcrumbItems,{path:"",breadcrumbName:t?`${c.ZP.t("Global.Update")} ${b} - ${t}`:`${c.ZP.t("Global.New")} ${b}`}];(0,a.useEffect)((()=>{t&&(h(!0),v.apiService.getOne(+t).then((e=>{i(e)})).finally((()=>h(!1))))}),[]);return a.createElement(r.Xg,{module:v},a.createElement(r.Xg.Breadcrumb,{routes:Z}),a.createElement(r.Xg.Panel,null,a.createElement(o.j,null,a.createElement("div",{className:"header"},a.createElement(s.Z,{onClose:()=>e(`/admin${E}`),items:Z})),p?a.createElement(r.aN,null):a.createElement(m.default,{singleData:l,onCallback:()=>{e(-1)}}))))};function h(){return a.createElement(n.Z5,null,a.createElement(n.AW,{path:"",element:a.createElement(i,null)}),a.createElement(n.AW,{path:"/upsert",element:a.createElement(p,null)}),a.createElement(n.AW,{path:"/upsert/:id",element:a.createElement(p,null)}))}},3487:function(e,t,l){l.d(t,{j:function(){return a}});const a=l(26761).ZP.div`
  padding: 32px;
  .header {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px dashed #ededed;
  }
`},11577:function(e){e.exports=JSON.parse('{"AW":"/customsdsaersteps/*"}')}}]);