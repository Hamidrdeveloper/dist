"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2718],{30311:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(38056),l=(n(95171),n(34234)),i=n(27378),r=(n(11121),n(93359));class s{constructor(){this.entity="/packing-types",this.title=[a.ZP.t("PackingType.Title"),a.ZP.t("PackingType.Title",{count:2})],this.apiService=new l.Vx(this.entity,this.title[0]),this.UpsertComponent=(0,i.lazy)((()=>Promise.resolve().then(n.bind(n,50678)))),this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin${r.AW.replace("*","")}`}],this.detailColumns=[{key:"name",label:a.ZP.t("Global.Name")}],this.tableColumns=[{key:"name",title:a.ZP.t("Global.Name"),dataIndex:"name",className:"hasTile"}]}}},50678:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});n(95171);var a=n(34234),l=n(27378),i=n(56552),r=n(33996),s=n(3288),c=n(35062);n(11121);function u({onSubmit:e,isPending:t,initialValues:n}){const[a]=s.Z.useForm();return(0,l.useEffect)((()=>{n&&a.setFieldsValue(n)}),[n]),l.createElement(s.Z,{form:a,layout:"vertical",name:"packing-type-form",initialValues:{translate:[{locale:void 0,name:""}]},onFinish:e},l.createElement(s.Z.Item,{required:!0},l.createElement(r.Es,null)),l.createElement(s.Z.Item,null,l.createElement(c.Z,{className:"submit",justify:"end"},l.createElement(r.Ow,{isPending:t}))))}var m=n(30311);var o=({onCallback:e,closeModal:t,singleData:n})=>{const r=new m.Z,{mutate:s,isLoading:c}=(0,i.useMutation)((({id:e,values:t})=>e?r.apiService.updateOne(e,t):r.apiService.createOne(t)));return l.createElement(u,{initialValues:n,onSubmit:l=>{const i=Object.assign(Object.assign({},l),{translate:(0,a.mj)(l.translate)});s({id:n?n.id:void 0,values:i},{onSuccess:n=>{null==e||e(n),null==t||t()}})},isPending:c})}},11121:function(e,t,n){n(95171)},22718:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(27378),l=n(96740),i=n(33996),r=(n(11121),n(30311));function s(){const e=new r.Z;return a.createElement(i.Xg,{module:e},a.createElement(i.Xg.Breadcrumb,null),a.createElement(i.Xg.Panel,null,a.createElement(i.s_.Header,{hasNew:!0,hasSearch:!0}),a.createElement(i.s_.ListView,{module:e})))}var c=n(38056),u=n(53988),m=n(3487),o=n(50678),d=n(93359);var p=()=>{const e=(0,l.s0)(),{packingType_id:t}=(0,l.UO)(),[n,s]=(0,a.useState)({}),[p,b]=(0,a.useState)(!1),E=new r.Z,h=E.title[0],f=`${d.AW.replace("*","")}`,g=[...E.breadcrumbItems,{path:"",breadcrumbName:t?`${c.ZP.t("Global.Update")} ${h} - ${t}`:`${c.ZP.t("Global.New")} ${h}`}];(0,a.useEffect)((()=>{t&&(b(!0),E.apiService.getOne(+t).then((e=>{s(e)})).finally((()=>{b(!1)})))}),[]);return a.createElement(i.Xg,{module:E},a.createElement(i.Xg.Breadcrumb,{routes:g}),a.createElement(i.Xg.Panel,null,a.createElement(m.j,null,a.createElement("div",{className:"header"},a.createElement(u.Z,{onClose:()=>e(`/admin${f}`),items:g})),p?a.createElement(i.aN,null):a.createElement(o.default,{singleData:n,onCallback:()=>{e(-1)}}))))};function b(){return a.createElement(l.Z5,null,a.createElement(l.AW,{path:"",element:a.createElement(s,null)}),a.createElement(l.AW,{path:"/upsert",element:a.createElement(p,null)}),a.createElement(l.AW,{path:"/upsert/:packingType_id",element:a.createElement(p,null)}))}},3487:function(e,t,n){n.d(t,{j:function(){return a}});const a=n(26761).ZP.div`
  padding: 32px;
  .header {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px dashed #ededed;
  }
`},93359:function(e){e.exports=JSON.parse('{"AW":"/producsddsasdts/packing-types/*"}')}}]);