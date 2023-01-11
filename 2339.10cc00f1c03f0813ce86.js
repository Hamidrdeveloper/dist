"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2339,4534],{23:function(e,t,a){a.d(t,{Z:function(){return u}});var l=a(38056),n=(a(95171),a(34234)),r=a(27378),i=(a(2774),a(20903));class u{constructor(){this.entity="/custom-tariffs",this.title=[l.ZP.t("CustomTariff.Title"),l.ZP.t("CustomTariff.Title",{count:2})],this.apiService=new n.Vx(this.entity,this.title[0]),this.UpsertComponent=(0,r.lazy)((()=>a.e(4534).then(a.bind(a,74534)))),this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin${i.AW.replace("*","")}`}],this.detailColumns=[{key:"number",label:"Number"},{key:"value",label:l.ZP.t("Global.Value")}],this.tableColumns=[{key:"number",title:l.ZP.t("CustomTariff.Field.Number"),dataIndex:"number",className:"hasTile",width:140},{key:"value",title:l.ZP.t("CustomTariff.Field.Value"),dataIndex:"value",className:"hasTile"}]}}},74534:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});a(95171);var l=a(34234),n=a(27378),r=a(56552),i=a(33996),u=a(3288),s=a(35062),m=a(10374),c=a(97851),o=a(25724),d=a(60071);a(2774);function f({onSubmit:e,isPending:t,initialValues:a}){const{t:l}=(0,d.$)(),[r]=u.Z.useForm();return(0,n.useEffect)((()=>{a&&r.setFieldsValue(a)}),[a]),n.createElement(u.Z,{form:r,layout:"vertical",onFinish:e,initialValues:{translate:[{locale:void 0,name:""}]},name:"custom-tariff-form"},n.createElement(s.Z,{gutter:[16,0]},n.createElement(m.Z,{xs:12},n.createElement(u.Z.Item,{name:"number",rules:[{required:!0}],label:l("CustomTariff.Field.Number")},n.createElement(c.Z,{placeholder:l("Global.InputPlaceholder",{title:l("CustomTariff.Field.Number")})}))),n.createElement(m.Z,{xs:12},n.createElement(u.Z.Item,{name:"value",rules:[{required:!0}],label:l("CustomTariff.Field.Value")},n.createElement(o.Z,{min:0,step:.01,placeholder:l("Global.InputPlaceholder",{title:l("CustomTariff.Field.Value")})})))),n.createElement(i.Ow,{isPending:t}))}var b=a(23);var h=({onCallback:e,closeModal:t,singleData:a})=>{const i=new b.Z,{mutate:u,isLoading:s}=(0,r.useMutation)((({id:e,values:t})=>e?i.apiService.updateOne(e,t):i.apiService.createOne(t)));return n.createElement(f,{initialValues:a,onSubmit:n=>{const r=Object.assign(Object.assign({},n),{translate:(0,l.mj)(n.translate)});u({id:a?a.id:void 0,values:r},{onSuccess:a=>{null==e||e(a),null==t||t()}})},isPending:s})}},2774:function(e,t,a){a(95171)},2339:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var l=a(27378),n=a(96740),r=a(33996),i=a(23);a(2774);function u(){const e=new i.Z;return l.createElement(r.Xg,{module:e},l.createElement(r.Xg.Breadcrumb,null),l.createElement(r.Xg.Panel,null,l.createElement(r.s_.Header,{hasNew:!0,hasSearch:!0,hasDelete:!0}),l.createElement(r.s_.ListView,{module:e})))}var s=a(38056),m=a(53988),c=a(3487),o=a(74534),d=a(20903);var f=()=>{const e=(0,n.s0)(),{customTariff_id:t}=(0,n.UO)(),[a,u]=(0,l.useState)({}),[f,b]=(0,l.useState)(!1),h=new i.Z,p=h.title[0],E=`${d.AW.replace("*","")}`,Z=[...h.breadcrumbItems,{path:"",breadcrumbName:t?`${s.ZP.t("Global.Update")} ${p} - ${t}`:`${s.ZP.t("Global.New")} ${p}`}];(0,l.useEffect)((()=>{t&&(b(!0),h.apiService.getOne(+t).then((e=>{u(e)})).finally((()=>{b(!1)})))}),[]);return l.createElement(r.Xg,{module:h},l.createElement(r.Xg.Breadcrumb,{routes:Z}),l.createElement(r.Xg.Panel,null,l.createElement(c.j,null,l.createElement("div",{className:"header"},l.createElement(m.Z,{onClose:()=>e(`/admin${E}`),items:Z})),f?l.createElement(r.aN,null):l.createElement(o.default,{singleData:a,onCallback:()=>{e(-1)}}))))};function b(){return l.createElement(n.Z5,null,l.createElement(n.AW,{path:"",element:l.createElement(u,null)}),l.createElement(n.AW,{path:"/upsert",element:l.createElement(f,null)}),l.createElement(n.AW,{path:"/upsert/:customTariff_id",element:l.createElement(f,null)}))}},3487:function(e,t,a){a.d(t,{j:function(){return l}});const l=a(26761).ZP.div`
  padding: 32px;
  .header {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px dashed #ededed;
  }
`},20903:function(e){e.exports=JSON.parse('{"AW":"/settsdings/cussddstom-tariffs/*"}')}}]);