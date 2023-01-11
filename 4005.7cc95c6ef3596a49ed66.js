"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4005],{18007:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(27378),l=n(96740),a=n(25885),o=(n(11483),n(33996)),i=n(26761),c=(n(95171),n(3288)),d=n(35062),s=n(10374),u=n(97851),m=n(48158),p=n(60071),b=n(38056),f=n(34234),h=n(6110),g=function(e,t,n,r){function l(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function i(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):l(e.value).then(o,i)}c((r=r.apply(e,t||[])).next())}))};const D=new f.Vx("/settings",b.ZP.t("DPD.Title"));var P=function(e,t,n,r){function l(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function i(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):l(e.value).then(o,i)}c((r=r.apply(e,t||[])).next())}))};const E=()=>P(void 0,void 0,void 0,(function*(){return yield g(void 0,void 0,void 0,(function*(){try{return yield D.request({url:"/settings/DPD",method:"GET"})}catch(e){throw new Error(e)}}))})),w=e=>P(void 0,void 0,void 0,(function*(){return yield(e=>g(void 0,void 0,void 0,(function*(){try{const t=yield D.request({url:"/settings/DPD",body:e,method:"PUT"});return h.ZP.success(b.ZP.t("Global.UpdatedSuccessfully",{title:b.ZP.t("ShopSettings.Tab.DPD")})),t}catch(e){throw new Error(e)}})))({data:e,id:16,slug:"dpd",partner_id:null,template_setting_id:10})})),v=({initialValues:e,onDone:t})=>{const{t:n}=(0,p.$)(),[l]=c.Z.useForm(),[a,i]=(0,r.useState)(!1);(0,r.useEffect)((()=>{e&&l.setFieldsValue(Object.assign(Object.assign({},e),{password:""}))}),[e]);return r.createElement(Z,null,r.createElement(c.Z,{form:l,layout:"vertical",name:"dpdSetting-form",onFinish:n=>(e=>{i(!0),w(e).then((()=>{i(!1),t()})).catch((()=>i(!1)))})(Object.assign(Object.assign({},n),{password:n.password||(null==e?void 0:e.password)}))},r.createElement(d.Z,{gutter:[16,0]},r.createElement(s.Z,{span:12},r.createElement(c.Z.Item,{name:"customer_number",rules:[{required:!0}],label:n("DPD.Field.CustomerNumber")},r.createElement(u.Z,{placeholder:n("Global.InputPlaceholder",{title:n("DPD.Field.CustomerNumber")})}))),r.createElement(s.Z,{span:12},r.createElement(c.Z.Item,{label:n("DPD.Field.DelisId"),name:"delis_id",rules:[{required:!0}]},r.createElement(u.Z,{placeholder:n("Global.InputPlaceholder",{title:n("DPD.Field.DelisId")})}))),r.createElement(s.Z,{span:12},r.createElement(c.Z.Item,{label:n("DPD.Field.MessageLanguage"),name:"message_language",rules:[{required:!0}]},r.createElement(u.Z,{placeholder:n("Global.InputPlaceholder",{title:n("DPD.Field.MessageLanguage")})}))),r.createElement(s.Z,{span:12},r.createElement(c.Z.Item,{label:n("DPD.Field.Password"),name:"password"},r.createElement(u.Z,{type:"password",placeholder:n("Global.InputPlaceholder",{title:n("DPD.Field.Password")})}))),r.createElement(s.Z,{span:12},r.createElement(c.Z.Item,{name:"saturday_delivery",valuePropName:"checked"},r.createElement(m.Z,null,n("DPD.Field.SaturdayDelivery")))),r.createElement(s.Z,{span:12},r.createElement(c.Z.Item,{name:"staging",valuePropName:"checked"},r.createElement(m.Z,null,n("DPD.Field.Staging"))))),r.createElement(o.Ow,{isPending:a})))},Z=i.ZP.div`
  margin-bottom: 200px;
`;var x=JSON.parse('{"AW":"/shisddsdpping/DPD/*"}');class y{constructor(){this.title=[b.ZP.t("DPD.Title"),b.ZP.t("DPD.Title",{count:2})],this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin${x.AW.replace("*","")}`}]}}function k(){const e=new y,[t,n]=(0,r.useState)(null);return r.createElement(o.Xg,{module:e},r.createElement(o.Xg.Breadcrumb,null),r.createElement(o.Xg.Panel,null,r.createElement(a.Z,{data:[t,n],service:E},r.createElement(F,null,r.createElement(v,{initialValues:null!=t?t:void 0,onDone:()=>n(null)})))))}const F=i.ZP.div`
  padding: 16px;

  & .first-col,
  & .second-col {
    & .row {
      border-radius: 4px;
      padding: 16px;
      position: relative;
      & .action {
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
      }
      & .select {
        width: 100%;
        & .ant-select-selector {
          border: 1px solid #f2f4eb;
          outline: none;
        }
      }
      & .picker {
        width: 100%;
      }
      & .ant-picker {
        border-radius: 4px;
        border: none;
      }
      & .info-box {
        background-color: white;
        border: 1px solid #f2f4eb;
        border-radius: 4px;
        height: 33px;
        padding: 5px;
        width: 100%;
      }
      & .success-btn {
        color: #57af52;
        font-size: 14px;
        border-color: #99e694;
        font-weight: 400;
        background-color: #b9eab6;
      }
    }
  }

  & .first-col {
    & .row {
      &:nth-child(odd) {
        background: #fbfbfb;
      }
      &:nth-child(even) {
        background: #f2f2f2;
      }
    }
  }

  & .second-col {
    & .row {
      &:nth-child(even) {
        background: #fbfbfb;
      }
      &:nth-child(odd) {
        background: #f2f2f2;
      }
    }
  }

  & .btn-row {
    margin: 35px;
    & .submit-btn {
      background-color: #2d5fa5;
      border-radius: 4px;
      color: white;
      width: 130px;
    }
  }
`;function I(){return r.createElement(l.Z5,null,r.createElement(l.AW,{path:"",element:r.createElement(k,null)}))}}}]);