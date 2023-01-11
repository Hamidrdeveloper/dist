"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1254],{44527:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(38056),n=(a(95171),a(34234)),r=(a(15339),a(91183));class i{constructor(){this.entity="/career-steps",this.title=[l.ZP.t("CareerStep.Title_other"),l.ZP.t("CareerStep.Title_other",{count:2})],this.apiService=new n.Vx(this.entity,this.title[0]),this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin/${r.AW.replace("*","")}`}],this.detailColumns=[{key:"id",label:l.ZP.t("Global.ID")},{key:"slug",label:l.ZP.t("CareerStep.Slug")},{key:"min_point",label:l.ZP.t("CareerStep.MinPoint")},{key:"is_generation",label:l.ZP.t("CareerStep.Generation")},{key:"voucher_level",label:l.ZP.t("CareerStep.VoucherLevel")},{key:"id_account_minus_value",label:l.ZP.t("CareerStep.AccountMinusValue")},{key:"name",label:l.ZP.t("Global.Name")},{key:"discount_percentage",label:l.ZP.t("CareerStep.BonusValue")},{key:"frontline",label:l.ZP.t("CareerStep.FrontLine")}],this.tableColumns=[{key:"name",className:"hasTile",title:l.ZP.t("Global.Name"),dataIndex:"name"},{key:"slug",className:"hasTile",title:l.ZP.t("CareerStep.Slug"),dataIndex:"slug"},{key:"min_point",className:"hasTile",title:l.ZP.t("CareerStep.MinPoint"),dataIndex:"min_point"},{key:"is_generation",className:"hasTile",title:l.ZP.t("CareerStep.Generation"),dataIndex:"is_generation"},{key:"voucher_level",className:"hasTile",title:l.ZP.t("CareerStep.VoucherLevel"),dataIndex:"voucher_level"},{key:"discount_percentage",className:"hasTile",title:l.ZP.t("CareerStep.BonusValue"),dataIndex:"discount_percentage"},{key:"frontline",className:"hasTile",title:l.ZP.t("CareerStep.FrontLine"),dataIndex:"frontline"}]}}},15339:function(e,t,a){a(95171)},91254:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var l=a(27378),n=a(96740),r=a(33996),i=a(44527);a(15339);function c(){const e=new i.Z;return l.createElement(r.Xg,{module:e},l.createElement(r.Xg.Breadcrumb,null),l.createElement(r.Xg.Panel,null,l.createElement(r.s_.Header,{hasSearch:!0}),l.createElement(r.s_.ListView,{module:e})))}var o=a(38056),s=a(53988),u=a(3487),d=(a(95171),a(34234)),m=a(56552),p=a(3288),b=a(48158),h=a(10374),g=a(35062),Z=a(25724),E=a(97851),v=a(60071),S=a(26761);var x={MainContainer:S.ZP.div`
  .bottom-align {
    align-self: end;
  }
`,FieldSet:S.ZP.fieldset`
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  padding: 20px 25px 35px;
  margin-bottom: 40px;
  margin-top: 10px;

  legend {
    color: #235b81;
    width: auto;
    padding: 0 10px;
    font-weight: bold;
    margin-bottom: 0;
    margin-left: 15px;
    border-bottom: 0;
  }

  .checkbox-legend {
    .ant-checkbox-wrapper {
      color: #235b81;
    }

    margin-bottom: 0;
  }

  .space {
    display: flex;
    gap: 8px;

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    .ant-select {
      width: 150px;
    }

    .ant-input-group {
      display: flex;
      flex: 1;

      &.gap {
        gap: 8px;

        & input {
          border-radius: 4px;
        }
      }
    }
  }
`};function P({onSubmit:e,isPending:t,initialValues:a}){const{t:n}=(0,v.$)(),[i]=p.Z.useForm();return(0,l.useEffect)((()=>{a&&i.setFieldsValue(a)}),[a]),l.createElement(x.MainContainer,null,l.createElement(p.Z,{form:i,layout:"vertical",onFinish:e,initialValues:{translate:[{locale:void 0,name:""}]}},l.createElement(x.FieldSet,null,l.createElement("legend",null,l.createElement(p.Z.Item,{className:"checkbox-legend",name:"is_generation",valuePropName:"checked"},l.createElement(b.Z,{disabled:!0},n("CareerStep.Generation")))),l.createElement(h.Z,{span:24},l.createElement(p.Z.Item,{required:!0},l.createElement(r.Es,null))),l.createElement(g.Z,{align:"middle",gutter:[16,0]},l.createElement(h.Z,{xs:12},l.createElement(p.Z.Item,{label:n("CareerStep.MinPoint"),name:"min_point",rules:[{required:!1}]},l.createElement(Z.Z,{disabled:!0,min:0,placeholder:n("Global.InputPlaceholder",{title:n("CareerStep.MinPoint")})}))),l.createElement(h.Z,{xs:12},l.createElement(p.Z.Item,{label:n("CareerStep.BonusValue"),name:"discount_percentage",rules:[{required:!1}]},l.createElement(E.Z,{disabled:!0,placeholder:n("Global.InputPlaceholder",{title:n("CareerStep.BonusValue")})}))),l.createElement(h.Z,{xs:12},l.createElement(p.Z.Item,{label:n("CareerStep.VoucherLevel"),name:"voucher_level",rules:[{required:!0}]},l.createElement(E.Z,{placeholder:n("Global.InputPlaceholder",{title:n("CareerStep.VoucherLevel")})}))),l.createElement(h.Z,{xs:12},l.createElement(p.Z.Item,{label:n("CareerStep.AccountMinusValue"),name:"id_account_minus_value",rules:[{required:!0}]},l.createElement(E.Z,{placeholder:n("Global.InputPlaceholder",{title:n("CareerStep.AccountMinusValue")})})))),l.createElement(r.Ow,{isPending:t}))))}var _=({onCallback:e,closeModal:t,singleData:a})=>{const n=new i.Z,{mutate:r,isLoading:c}=(0,m.useMutation)((({id:e,values:t})=>n.apiService.updateOne(e,t)));return l.createElement(P,{initialValues:a,onSubmit:l=>{const{voucher_level:n,id_account_minus_value:i,translate:c}=l,o={voucher_level:n,id_account_minus_value:i,translate:(0,d.mj)(c)};r({id:a?a.id:void 0,values:o},{onSuccess:a=>{null==e||e(a),null==t||t()}})},isPending:c})},C=a(91183);var f=()=>{const e=(0,n.s0)(),{careerstep_id:t}=(0,n.UO)(),[a,c]=(0,l.useState)({}),[d,m]=(0,l.useState)(!1),p=new i.Z,b=p.title[0],h=`${C.AW.replace("*","")}`,g=[...p.breadcrumbItems,{path:"",breadcrumbName:t?`${o.ZP.t("Global.Update")} ${b} - ${t}`:`${o.ZP.t("Global.New")} ${b}`}];(0,l.useEffect)((()=>{t&&(m(!0),p.apiService.getOne(+t).then((e=>{c(e)})).finally((()=>m(!1))))}),[]);return l.createElement(r.Xg,{module:p},l.createElement(r.Xg.Breadcrumb,{routes:g}),l.createElement(r.Xg.Panel,null,l.createElement(u.j,null,l.createElement("div",{className:"header"},l.createElement(s.Z,{onClose:()=>e(`/admin/${h}`),items:g})),d?l.createElement(r.aN,null):l.createElement(_,{singleData:a,onCallback:()=>{e(-1)}}))))};function k(){return l.createElement(n.Z5,null,l.createElement(n.AW,{path:"",element:l.createElement(c,null)}),l.createElement(n.AW,{path:"/upsert/:careerstep_id",element:l.createElement(f,null)}))}},3487:function(e,t,a){a.d(t,{j:function(){return l}});const l=a(26761).ZP.div`
  padding: 32px;
  .header {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px dashed #ededed;
  }
`},91183:function(e){e.exports=JSON.parse('{"AW":"careerstsdsdeps/*"}')}}]);