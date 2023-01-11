"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7674],{87674:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var l=n(27378),r=n(96740),a=n(25885),i=(n(11483),n(33996)),s=n(26761),o=(n(95171),n(3288)),c=n(35062),d=n(10374),u=n(97851),p=n(48158),m=n(60071),h=n(38056),b=n(34234),f=n(6110),E=function(e,t,n,l){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{o(l.next(e))}catch(e){a(e)}}function s(e){try{o(l.throw(e))}catch(e){a(e)}}function o(e){e.done?n(e.value):r(e.value).then(i,s)}o((l=l.apply(e,t||[])).next())}))};const Z=new b.Vx("/settings",h.ZP.t("DHL.Title"));var w=function(e,t,n,l){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{o(l.next(e))}catch(e){a(e)}}function s(e){try{o(l.throw(e))}catch(e){a(e)}}function o(e){e.done?n(e.value):r(e.value).then(i,s)}o((l=l.apply(e,t||[])).next())}))};const g=()=>w(void 0,void 0,void 0,(function*(){return yield E(void 0,void 0,void 0,(function*(){try{return yield Z.request({url:"/settings/DHL",method:"GET"})}catch(e){throw new Error(e)}}))})),D=e=>w(void 0,void 0,void 0,(function*(){return yield(e=>E(void 0,void 0,void 0,(function*(){try{const t=yield Z.request({url:"/settings/DHL",body:e,method:"PUT"});return f.ZP.success(h.ZP.t("Global.UpdatedSuccessfully",{title:h.ZP.t("DHL.Title")})),t}catch(e){throw new Error(e)}})))({data:e,id:17,slug:"dhl",partner_id:null,template_setting_id:10})})),H=({initialValues:e,onDone:t})=>{const{t:n}=(0,m.$)(),[r]=o.Z.useForm(),[a,s]=(0,l.useState)(!1);(0,l.useEffect)((()=>{e&&r.setFieldsValue(Object.assign(Object.assign({},e),{api_password:""}))}),[e]);return l.createElement(L,null,l.createElement(o.Z,{form:r,layout:"vertical",name:"dhlSetting-form",onFinish:n=>(e=>{s(!0),D(e).then((()=>{s(!1),t()})).catch((()=>s(!1)))})(Object.assign(Object.assign({},n),{api_password:n.api_password||(null==e?void 0:e.api_password)}))},l.createElement(c.Z,{gutter:[16,0]},l.createElement(d.Z,{span:12},l.createElement(o.Z.Item,{label:n("DHL.Field.User"),name:"user",rules:[{required:!0}]},l.createElement(u.Z,{placeholder:n("Global.InputPlaceholder",{title:n("DHL.Field.User")})}))),l.createElement(d.Z,{span:12},l.createElement(o.Z.Item,{label:n("DHL.Field.Version"),name:"version",rules:[{required:!0}]},l.createElement(u.Z,{placeholder:n("Global.InputPlaceholder",{title:n("DHL.Field.Version")})}))),l.createElement(d.Z,{span:12},l.createElement(o.Z.Item,{name:"api_user",rules:[{required:!0}],label:n("DHL.Field.ApiUser")},l.createElement(u.Z,{placeholder:n("Global.InputPlaceholder",{title:n("DHL.Field.ApiUser")})}))),l.createElement(d.Z,{span:12},l.createElement(o.Z.Item,{label:n("DHL.Field.ApiPassword"),name:"api_password"},l.createElement(u.Z,{type:"password",placeholder:n("Global.InputPlaceholder",{title:n("DHL.Field.ApiPassword")})}))),l.createElement(d.Z,{span:12},l.createElement(o.Z.Item,{label:n("DHL.Field.DHLBusinessTestUser"),name:"dhl_business_test_user",rules:[{required:!0}]},l.createElement(u.Z,{placeholder:n("Global.InputPlaceholder",{title:n("DHL.Field.DHLBusinessTestUser")})}))),l.createElement(d.Z,{span:12},l.createElement(o.Z.Item,{label:n("DHL.Field.DHLBusinessTestUserPassword"),name:"dhl_business_test_user_password",rules:[{required:!0}]},l.createElement(u.Z,{placeholder:n("Global.InputPlaceholder",{title:n("DHL.Field.DHLBusinessTestUserPassword")})}))),l.createElement(d.Z,{span:12},l.createElement(o.Z.Item,{label:n("DHL.Field.DHLBusinessTestEKP"),name:"dhl_business_test_ekp",rules:[{required:!0}]},l.createElement(u.Z,{placeholder:n("Global.InputPlaceholder",{title:n("DHL.Field.DHLBusinessTestEKP")})}))),l.createElement(d.Z,{span:12},l.createElement(o.Z.Item,{label:n("DHL.Field.EKP"),name:"ekp",rules:[{required:!0}]},l.createElement(u.Z,{placeholder:n("Global.InputPlaceholder",{title:n("DHL.Field.EKP")})}))),l.createElement(d.Z,{span:12},l.createElement(o.Z.Item,{label:n("DHL.Field.Signature"),name:"signature",rules:[{required:!0}]},l.createElement(u.Z,{placeholder:n("Global.InputPlaceholder",{title:n("DHL.Field.Signature")})}))),l.createElement(d.Z,{span:12},l.createElement(o.Z.Item,{name:"test_mode",valuePropName:"checked",label:" "},l.createElement(p.Z,null,n("DHL.Field.TestMode"))))),l.createElement(i.Ow,{isPending:a})))},L=s.ZP.div`
  margin-bottom: 200px;
`;var P=JSON.parse('{"AW":"/shippisddng/DsddsHL/*"}');class v{constructor(){this.title=[h.ZP.t("DHL.Title"),h.ZP.t("DHL.Title",{count:2})],this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin${P.AW.replace("*","")}`}]}}function F(){const e=new v,[t,n]=(0,l.useState)(null);return l.createElement(i.Xg,{module:e},l.createElement(i.Xg.Breadcrumb,null),l.createElement(i.Xg.Panel,null,l.createElement(a.Z,{data:[t,n],service:g},l.createElement(x,null,l.createElement(H,{initialValues:null!=t?t:void 0,onDone:()=>n(null)})))))}const x=s.ZP.div`
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
`;function I(){return l.createElement(r.Z5,null,l.createElement(r.AW,{path:"",element:l.createElement(F,null)}))}}}]);