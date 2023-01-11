"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7301],{44648:function(e,t,l){l.d(t,{Z:function(){return m}});var a=l(38056),n=(l(95171),l(34234)),r=l(27378),i=(l(28230),l(6981));class m{constructor(){this.entity="/templates",this.title=[a.ZP.t("Template.Title"),a.ZP.t("Template.Title",{count:2})],this.apiService=new n.Vx(this.entity,this.title[0]),this.UpsertComponent=(0,r.lazy)((()=>Promise.resolve().then(l.bind(l,47395)))),this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin${i.AW.replace("*","")}`}],this.tableColumns=[{width:140,key:"slug",dataIndex:"slug",className:"hasTile",title:a.ZP.t("Template.Field.Slug")},{width:200,key:"title",dataIndex:"title",className:"hasTile",title:a.ZP.t("Global.Title")}],this.detailColumns=[{key:"slug",label:a.ZP.t("Template.Field.Slug")},{key:"title",label:a.ZP.t("Global.Title")}]}}},47395:function(e,t,l){l.r(t),l.d(t,{default:function(){return y}});l(95171);var a=l(34234),n=l(27378),r=l(56552),i=l(21244),m=l(99386),c=l(86317),s=l(33996),o=l(3288),u=l(97851),d=l(35062),p=l(10374),E=l(56591),b=l(60071),f=(l(28230),function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(l[a[n]]=e[a[n]])}return l});function g({onSubmit:e,isPending:t,initialValues:l}){const{t:a}=(0,b.$)(),[r]=o.Z.useForm();return(0,n.useEffect)((()=>{l&&r.setFieldsValue(l)}),[l]),n.createElement(o.Z,{form:r,layout:"vertical",onFinish:e,name:"template-form",initialValues:{translate:[{locale:void 0,title:""}]}},n.createElement(n.Suspense,{fallback:n.createElement(s.aN,null)},n.createElement(o.Z.Item,{name:"slug",label:a("Template.Field.Slug")},n.createElement(u.Z,{placeholder:a("Global.InputPlaceholder",{title:a("Template.Field.Slug")})})),n.createElement(o.Z.List,{name:"translate"},((e,{add:t,remove:l})=>n.createElement("div",{className:"form-list"},e.map(((r,b)=>{var{key:g,name:h,fieldKey:y}=r,Z=f(r,["key","name","fieldKey"]);return n.createElement("div",{className:"form-list-item",key:g},n.createElement(o.Z.Item,{label:a("Global.Title")},n.createElement(u.Z.Group,{compact:!0,style:{display:"flex",flex:1}},n.createElement(o.Z.Item,Object.assign({},Z,{noStyle:!0,name:[h,"locale"],fieldKey:[y,"locale"],rules:[{required:!0,message:`Item ${h+1} locale is required`}]}),n.createElement(c.S,{isGroup:!0})),n.createElement(o.Z.Item,Object.assign({},Z,{noStyle:!0,name:[h,"title"],fieldKey:[y,"title"],rules:[{required:!0,message:`Item ${h+1} title is required`}]}),n.createElement(u.Z,{suffix:n.createElement(s.os,{className:"icon"}),placeholder:a("Global.InputPlaceholder",{title:a("Global.Title")})})))),n.createElement(d.Z,{gutter:[16,0]},n.createElement(p.Z,{xs:12},n.createElement(o.Z.Item,{label:a("Template.Field.Body"),name:[h,"body"]},n.createElement(s.H4,null))),n.createElement(p.Z,{xs:12},n.createElement(o.Z.Item,{label:a("Template.Field.Summary"),name:[h,"summary"]},n.createElement(s.H4,null)))),n.createElement(d.Z,{justify:"end",gutter:8},b<1?n.createElement(n.Fragment,null,n.createElement(p.Z,null,n.createElement(E.Z,{ghost:!0,type:"primary",icon:n.createElement(i.Z,null),onClick:()=>t(null,0)})),e.length>1&&n.createElement(p.Z,null,n.createElement(E.Z,{ghost:!0,danger:!0,type:"primary",icon:n.createElement(m.Z,null),onClick:()=>l(h)}))):n.createElement(E.Z,{ghost:!0,danger:!0,type:"primary",icon:n.createElement(m.Z,null),onClick:()=>l(h)})))}))))),n.createElement(s.Ow,{isPending:t})))}var h=l(44648);var y=({onCallback:e,closeModal:t,singleData:l})=>{const i=new h.Z,{mutate:m,isLoading:c}=(0,r.useMutation)((({id:e,values:t})=>e?i.apiService.updateOne(e,t):i.apiService.createOne(t)));return n.createElement(g,{initialValues:l,onSubmit:n=>{const r=Object.assign(Object.assign({},n),{translate:(0,a.mj)(n.translate)});m({id:l?l.id:void 0,values:r},{onSuccess:l=>{null==e||e(l),null==t||t()}})},isPending:c})}},28230:function(e,t,l){l(95171)},27301:function(e,t,l){l.r(t),l.d(t,{default:function(){return E}});var a=l(27378),n=l(96740),r=l(33996),i=(l(28230),l(44648));function m(){const e=new i.Z;return a.createElement(r.Xg,{module:e},a.createElement(r.Xg.Breadcrumb,null),a.createElement(r.Xg.Panel,null,a.createElement(r.s_.Header,{hasSearch:!0}),a.createElement(r.s_.ListView,{tableScroll:{x:1450,y:475},module:e})))}var c=l(38056),s=l(53988),o=l(3487),u=l(47395),d=l(6981);var p=()=>{const e=(0,n.s0)(),{template_id:t}=(0,n.UO)(),[l,m]=(0,a.useState)({}),p=new i.Z,E=p.title[0],b=`${d.AW.replace("*","")}`,f=[...p.breadcrumbItems,{path:"",breadcrumbName:t?`${c.ZP.t("Global.Update")} ${E} - ${t}`:`${c.ZP.t("Global.New")} ${E}`}];(0,a.useEffect)((()=>{t&&p.apiService.getOne(+t).then((e=>{m(e)}))}),[]);return a.createElement(r.Xg,{module:p},a.createElement(r.Xg.Breadcrumb,{routes:f}),a.createElement(r.Xg.Panel,{noOverflow:!0},a.createElement(o.j,null,a.createElement("div",{className:"header"},a.createElement(s.Z,{onClose:()=>e(`/admin${b}`),items:f})),a.createElement(u.default,{singleData:l,onCallback:()=>{e(-1)}}))))};function E(){return a.createElement(n.Z5,null,a.createElement(n.AW,{path:"",element:a.createElement(m,null)}),a.createElement(n.AW,{path:"/upsert",element:a.createElement(p,null)}),a.createElement(n.AW,{path:"/upsert/:template_id",element:a.createElement(p,null)}))}},3487:function(e,t,l){l.d(t,{j:function(){return a}});const a=l(26761).ZP.div`
  padding: 32px;
  .header {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px dashed #ededed;
  }
`},6981:function(e){e.exports=JSON.parse('{"AW":"/sasdasdasdhop-settings/templates/*"}')}}]);