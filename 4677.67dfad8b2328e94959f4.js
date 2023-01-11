"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4677],{96520:function(e,t,a){var n=a(34234),l=a(39338),r=a(27378),i=a(62500),o=(a(84916),a(35552));t.Z=function({value:e,isMulti:t,onChange:a}){const[m]=(0,l.KO)(o.ci);return r.createElement(i.ZP,{value:e,isMulti:t,options:m,onChange:e=>null==a?void 0:a(e),classNamePrefix:"react-select",getOptionLabel:e=>e.name,getOptionValue:e=>String(e.id),theme:e=>(0,n.$p)(e)})}},84916:function(e,t,a){a(2010),a(27378)},94677:function(e,t,a){a.r(t),a.d(t,{default:function(){return de}});var n=a(27378),l=a(96740),r=a(38056),i=a(33996),o=a(60071),m=a(35062),c=a(10374),s=a(56552),d=a(26761),u=a(31675),E=a(9172),p=a(49989),b=a(48955),f=a(34234),g=a(39338),v=a(62500),h=(a(84916),a(35552)),Z=a(96398),w=(a(95171),a(3288)),y=a(2133),P=a(86317),F=a(50836),_=a(97851),S=a(72961);var C={MainContainer:d.ZP.div`
  .formContainer {
    border-radius: 3px;

    & .ant-form-item-label {
      white-space: normal;
    }
  }

  & .message-content {
    margin-top: 16px;
    padding: 22px;
  }

  & .content {
    margin-bottom: 12px;
  }
`,FormContainer:d.ZP.div`
  margin-bottom: 50px;
  background-color: rgb(251, 251, 251);

  .customBoxShadow {
    box-shadow: 0 0 10px #eaece4;

    & .ant-input {
      border: 1px solid #f2f4eb;
      outline: none;
    }

    & .ant-select-selector {
      border: none;
      outline: none;
    }

    & .ant-select-selection-item {
      font-weight: 400;
    }

    .ant-form-item {
      margin-bottom: 0;
      padding: 12px;
      :nth-child(even) {
        background-color: #f4f6f9;
      }
      :nth-child(odd) {
        background-color: #e5e7e9;
      }
    }
  }
`};var x=function({onChange:e}){const[t]=(0,g.KO)(h.R2);return n.createElement(E.Z,{style:{width:250},showSearch:!0,placeholder:r.ZP.t("Global.SelectVariable"),onChange:t=>(t=>null==e?void 0:e(t))(t)},t.map(((e,t)=>n.createElement(E.Z.Option,{key:`variable-${t}`,value:e.name},e.label))))};const{TabPane:N}=F.Z;var O=({form:e})=>{const{t:t}=(0,o.$)(),{Item:a}=w.Z,[l,r]=(0,n.useState)("1"),[s,d]=(0,n.useState)(0),u=(t,a)=>{var n;const l=String(null!==(n=e.getFieldValue(["translate",a]))&&void 0!==n?n:"");"html"===a?e.setFieldsValue({translate:{[a]:(l.length>0?l.substring(0,l.length-4):"")+`{{${t}}}`+(l.length>0?l.substring(l.length-4):"")}}):e.setFieldsValue({translate:{[a]:l.substring(0,s)+`{{${t}}}`+l.substring(s,l.length)}})};return n.createElement(C.MainContainer,null,n.createElement(C.FormContainer,null,n.createElement(m.Z,null,n.createElement(c.Z,{span:24,className:"customBoxShadow formContainer"},n.createElement(a,{rules:[{required:!0}],labelCol:{span:24},wrapperCol:{span:24},name:["translate","locale"],label:t("Email.Field.SelectLanguage")},n.createElement(P.S,null))),n.createElement(c.Z,{span:24,className:"customBoxShadow formContainer"},n.createElement(a,{rules:[{required:!0}],labelCol:{span:24},wrapperCol:{span:24},name:["translate","title"],label:t("Email.Field.Subject")},n.createElement(_.Z.TextArea,{rows:4,placeholder:t("Email.Field.EnterEmailSubject")})))),n.createElement("div",{className:"message-content"},n.createElement(m.Z,{gutter:[16,16],className:"content"},n.createElement(c.Z,{span:24},n.createElement(F.Z,{className:"settings-tab",type:"card",onTabClick:e=>{r(e)},defaultActiveKey:"1"},n.createElement(N,{tab:t("Email.Field.PlainText"),key:"1"},n.createElement(m.Z,null,n.createElement(c.Z,{span:6,style:{paddingBottom:16}},n.createElement(x,{onChange:e=>u(e,"plain_text")})),n.createElement(c.Z,{span:24},n.createElement(a,{wrapperCol:{span:24},name:["translate","plain_text"],rules:[{required:"1"===l}]},n.createElement(_.Z.TextArea,{rows:22,onClick:e=>{d(e.target.selectionStart)},placeholder:t("Email.Field.EnterEmailContentHere")}))))),n.createElement(N,{forceRender:!0,tab:t("Email.Field.TextInHtmlFormat"),key:"2"},n.createElement(S.Z,{className:"content"},n.createElement(x,{onChange:e=>u(e,"html")})),n.createElement(m.Z,null,n.createElement(c.Z,{span:24},n.createElement(a,{wrapperCol:{span:24},name:["translate","html"],rules:[{required:"2"===l}]},n.createElement(i.H4,null)))))))))))},T=a(2010),A=a(96520);var $={FormContainer:d.ZP.div`
  .ant-form-item {
    margin-bottom: 0;
    padding: 12px;
    :nth-child(even) {
      background-color: #f4f6f9;
    }
    :nth-child(odd) {
      background-color: #e5e7e9;
    }
  }
`};var k=({ownerType:e,onChangeOwner:t})=>{const{t:a}=(0,o.$)(),{Item:l}=w.Z;return n.createElement(C.MainContainer,null,n.createElement($.FormContainer,null,n.createElement(m.Z,{gutter:[4,0],wrap:!1},n.createElement(c.Z,{span:12,className:"customBoxShadow formContainer"},n.createElement(l,{label:a("Email.Field.Owner")},n.createElement(E.Z,{value:e,onChange:t,placeholder:a("Global.SelectPlaceholder",{title:a("Email.Field.Owner")})},n.createElement(E.Z.Option,{value:0},a("Global.All")),n.createElement(E.Z.Option,{value:1},a("Global.Me")),n.createElement(E.Z.Option,{value:2},a("Email.Template.Form.AnyOtherUser")))),n.createElement(l,{rules:[{required:2===e}],name:"user",label:a("User.Title")},n.createElement(T.o,{disabled:2!==e})),n.createElement(l,{name:"name",label:a("Email.Field.Name"),rules:[{required:!0}]},n.createElement(_.Z,{placeholder:a("Email.Field.EnterName")})),n.createElement(l,{name:"template_type",label:a("Email.Field.TemplateType"),rules:[{required:!0}]},n.createElement(E.Z,{placeholder:a("Email.Field.SelectTemplateType")},n.createElement(E.Z.Option,{value:"online_store"},a("Global.OnlineStore")),n.createElement(E.Z.Option,{value:"reset_password_email"},a("Email.Field.ResetPasswordEmail"))))),n.createElement(c.Z,{span:12,className:"customBoxShadow formContainer"},n.createElement(l,{name:"type",label:a("Email.Field.Content"),rules:[{required:!0}]},n.createElement(E.Z,{placeholder:"type"},n.createElement(E.Z.Option,{value:"html"},a("Global.HTML")),n.createElement(E.Z.Option,{value:"plain_text"},a("Global.PlainText")))),n.createElement(l,{name:"reply_to",label:a("Email.Field.ReplyTo")},n.createElement(_.Z,{placeholder:a("Email.Field.EnterWhoToReplyOwner")})),n.createElement(l,{name:"documentType",label:a("Email.Field.DocumentType")},n.createElement(A.Z,{isMulti:!0}))))))},M=a(18878);var G={MainContainer:d.ZP.div`
  & .sub-steps {
    margin-bottom: 16px;
  }
  & .btn-primary {
    margin-top: 20px;
  }

  & .settings-tab {
    overflow: initial !important;
  }
`};var B=({singleData:e,onCallback:t})=>{const[a]=w.Z.useForm(),{t:l}=(0,o.$)(),{profile:r}=(0,n.useContext)(Z.V),[d,u]=(0,n.useState)(0),{mutate:E,isLoading:p}=(0,s.useMutation)((({values:t})=>(null==e?void 0:e.id)?(0,M.QB)((null==e?void 0:e.id)||0,t):(0,M.Mn)(t)));(0,n.useEffect)((()=>{if(e&&e.data){const t={};null===e.owner_id?t.owner_id=0:e.owner_id===r.id?t.owner_id=1:(t.owner_id=2,t.user=e.owner),u(t.owner_id),a.setFieldsValue(Object.assign(Object.assign({},t),{name:e.name,type:e.type,file_path:e.file_path,reply_to:e.data.reply_to,documentType:e.documentType,template_type:e.data.template_type,translate:{plain_text:e.translate[0].plain_text,html:e.translate[0].html,title:e.translate[0].title,locale:e.translate[0].locale}}))}}),[e]);return n.createElement(G.MainContainer,null,n.createElement(w.Z,{colon:!1,form:a,labelAlign:"left",onFinish:e=>{var a;const n={owner_id:0===d?null:1===d?r.id:e.user.id,updated_by:1,created_by:1,name:e.name,type:e.type,file_id:e.file_id,document_type_ids:e.documentType?e.documentType.map((e=>e.id)):void 0,data:{reply_to:e.reply_to,template_type:e.template_type},translate:[{html:e.translate.html,title:e.translate.title,plain_text:e.translate.plain_text,locale:null!==(a=e.translate.locale.locale)&&void 0!==a?a:e.translate.locale}]};E({values:n},{onSuccess:t})},name:"email-template-form",labelCol:{span:4},wrapperCol:{span:24}},n.createElement(y.Z,{orientation:"left"},l("Email.Template.Title")),n.createElement(m.Z,null,n.createElement(c.Z,{span:24},n.createElement(k,{ownerType:d,onChangeOwner:u}))),n.createElement(y.Z,{orientation:"left"},l("Email.Template.MessageTitle")),n.createElement(m.Z,null,n.createElement(c.Z,{span:24},n.createElement(O,{form:a}))),n.createElement(m.Z,{justify:"end",className:"btn-primary"},n.createElement(i.Ow,{isPending:p}))))};var V=function({value:e,isMulti:t=!1,hasNew:a=!0,disabled:l=!1,menuPlacement:r="bottom",onChange:i}){const[o,m]=(0,g.KO)(h.ji),[c,s]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement(v.ZP,{isClearable:!0,isMulti:t,options:null!=o?o:[],isLoading:!o||void 0,isDisabled:l,onChange:e=>null==i?void 0:i(e),menuPlacement:r,getOptionLabel:e=>{var t,a,n;return null!==(t=null==e?void 0:e.name)&&void 0!==t?t:null===(n=null===(a=null==e?void 0:e.translate)||void 0===a?void 0:a.find((t=>t.id===e.id)))||void 0===n?void 0:n.name},getOptionValue:e=>String(null==e?void 0:e.id),theme:e=>(0,f.$p)(e),components:{Menu:e=>(0,p.S)({hasNew:a,props:e,onClick:()=>s(!0)}),IndicatorSeparator:()=>n.createElement("span",{style:{width:0}})},classNamePrefix:"react-select",value:"number"==typeof e?o.find((t=>t.id===e)):e}),n.createElement(b.Z,{isVisible:c,setVisible:s,title:"EmailTemplates.Title"},n.createElement(B,{onCallback:()=>{m({type:"refetch"})}})))};var q=({automatic:e,onChange:t})=>{var a,l;const{t:r}=(0,o.$)(),[i,s]=(0,n.useState)(null===(a=e.noticeTemplate)||void 0===a?void 0:a.id),d={reset_password_email:r("Email.Field.ResetPasswordEmail"),"order-invoice-pdf-attachment":r("Email.Field.OrderInvoicePdfAttachment"),send_welcome_user_registration_email:r("Email.Field.WelcomeUserRegistration"),"two-factor-authentication-email":r("Email.Field.TwoFactorAuthenticationEmail"),order_sale_paid_email:r("Email.Field.OrderSalePaidEmail"),order_sale_partly_paid_email:r("Email.Field.OrderSalePartlyPaidEmail"),order_sale_over_paid_email:r("Email.Field.OrderSaleOverPaidEmail"),approved_partner:r("Email.Field.ApprovedPartner"),un_approved_partner:r("Email.Field.UnApprovedPartner")},p=a=>{s(a),t({notice_template_id:a,id:e.id})};return n.createElement(m.Z,{align:"middle",gutter:32},n.createElement(c.Z,{xs:8},n.createElement("label",{htmlFor:"name"},null!==(l=d[e.slug])&&void 0!==l?l:(0,u.fl)((0,u.Am)((0,u.zD)(e.slug))))),n.createElement(c.Z,{xs:16},n.createElement(n.Suspense,{fallback:n.createElement(E.Z,{disabled:!0,loading:!0})},n.createElement(V,{value:null!=i?i:void 0,onChange:e=>{var t;return p(null===(t=e)||void 0===t?void 0:t.id)}}))))};var L=({data:e})=>{const{mutate:t}=(0,s.useMutation)((e=>(0,M.a5)(e)));return n.createElement(j,null,n.createElement(m.Z,{gutter:32},e.map((e=>n.createElement(c.Z,{xs:24,xl:12,className:"automatic"},n.createElement("div",{className:"single",key:e.id},n.createElement(q,{automatic:e,onChange:t})))))))};const j=d.ZP.div`
  padding: 32px;
  min-height: 600px;

  & .automatic {
    & .single {
      padding: 8px;

      :nth-child(even) {
        background-color: #f4f6f9;
      }
      :nth-child(odd) {
        background-color: #e5e7e9;
      }
    }
  }
`;function D(){const[e,t]=(0,n.useState)([]),[a,l]=(0,n.useState)(!1),{t:m}=(0,o.$)(),c=[{breadcrumbName:r.ZP.t("Email.Title",{count:1}),path:"/admin/email/*"},{breadcrumbName:r.ZP.t("Email.Field.Automatics"),path:"/admin/email/*"}];return(0,n.useEffect)((()=>{l(!0),(0,M.WB)().then((e=>{t(e)})).finally((()=>l(!1)))}),[]),n.createElement("div",null,n.createElement(i.Xg.Breadcrumb,{routes:c}),n.createElement(i.Xg.Panel,null,a?n.createElement(i.aN,{title:m("Email.Automatic.Loader")}):n.createElement(L,{data:e})))}var I=a(48158);var X={FormContainer:(0,d.ZP)(w.Z)`
  margin-bottom: 50px;
  padding: 20px;

  background-color: rgb(251, 251, 251);

  .customBoxShadow {
    box-shadow: 0 0 10px #eaece4;

    & .ant-input {
      border: 1px solid #f2f4eb;
      outline: none;

      & #news-letter-form_password {
        outline: none;
        border: none;
      }
    }

    & .ant-select-selector {
      border: none;
      outline: none;
    }

    & .ant-select-selection-item {
      font-weight: 400;
    }

    .ant-form-item {
      margin-bottom: 0;
      padding: 12px;

      .ant-form-item-no-colon {
        display: contents;
      }
      :nth-child(even) {
        background-color: #f4f6f9;
      }
      :nth-child(odd) {
        background-color: #e5e7e9;
      }
    }
  }
`};var U=({onSubmit:e,isPending:t,initialValues:a})=>{const[l]=w.Z.useForm(),{t:r}=(0,o.$)(),{Item:s}=w.Z;return(0,n.useEffect)((()=>{a&&l.setFieldsValue(Object.assign(Object.assign({},a),{bcc:String(a.bcc),send_email_after_new_order:String(a.send_email_after_new_order)}))}),[a]),n.createElement(C.MainContainer,null,n.createElement(X.FormContainer,{colon:!1,form:l,onFinish:e,name:"info-service-form",labelCol:{span:8},wrapperCol:{span:16},labelAlign:"left"},n.createElement(m.Z,{wrap:!1,gutter:16,justify:"space-around"},n.createElement(c.Z,{span:11,className:"customBoxShadow formContainer"},n.createElement(s,{name:"bcc",label:r("Email.Field.AllOutgoing")},n.createElement(E.Z,null,n.createElement(E.Z.Option,{value:"true"},r("Global.Active")),n.createElement(E.Z.Option,{value:"false"},r("Global.InActive")))),n.createElement(s,{name:"bcc_email",label:r("Email.Field.EmailAddressForBlindCopy"),rules:[{required:!0}]},n.createElement(_.Z,null)),n.createElement(s,{name:"bcc_for_news_letter",valuePropName:"checked"},n.createElement(I.Z,null,r("Email.Field.DeActiveBlindCopies")))),n.createElement(c.Z,{span:11,className:"customBoxShadow formContainer"},n.createElement(s,{name:"send_email_after_new_order",label:r("Email.Field.SendNotificationToEmailAddressWhenNewOrderIsReceived")},n.createElement(E.Z,null,n.createElement(E.Z.Option,{value:"true"},r("Global.Yes")),n.createElement(E.Z.Option,{value:"false"},r("Global.No")))),n.createElement(s,{name:"email_address_for_new_order_email",label:r("Email.Field.EmailAddress"),rules:[{required:!0}]},n.createElement(_.Z,null)))),n.createElement(i.Ow,{isPending:t})))};var W=({singleData:e})=>{const{mutate:t,isLoading:a}=(0,s.useMutation)((({values:e})=>(0,M.fG)(e)));return n.createElement(U,{isPending:a,initialValues:e,onSubmit:e=>{const{bcc:a,send_email_after_new_order:n}=e,l={partner_id:null,slug:"bcc-setting",data:Object.assign(Object.assign({},e),{bcc:"true"===a,send_email_after_new_order:"true"===n})};t({values:l})}})};function H(){const[e,t]=(0,n.useState)(),[a,l]=(0,n.useState)(!1),{t:m}=(0,o.$)(),c=[{breadcrumbName:r.ZP.t("Email.Title",{count:1}),path:"/admin/email/*"},{breadcrumbName:r.ZP.t("Email.Field.InfoService"),path:"/admin/email/*"}];return(0,n.useEffect)((()=>{l(!0),(0,M.vJ)().then((e=>{t(e)})).finally((()=>l(!1)))}),[]),n.createElement("div",null,n.createElement(i.Xg.Breadcrumb,{routes:c}),n.createElement(i.Xg.Panel,null,a?n.createElement(i.aN,{title:m("Email.InfoService.Loader")}):n.createElement(W,{singleData:e})))}var R=a(82615);var K=({onSubmit:e,isPending:t,initialValues:a})=>{const[l]=w.Z.useForm(),{t:r}=(0,o.$)(),{Item:s}=w.Z;return(0,n.useEffect)((()=>{a&&l.setFieldsValue(a)}),[a]),n.createElement(C.MainContainer,null,n.createElement(X.FormContainer,{form:l,colon:!1,onFinish:e,name:"login-detail-form",labelCol:{span:8},wrapperCol:{span:16},labelAlign:"left"},n.createElement(m.Z,{gutter:16,justify:"space-around"},n.createElement(c.Z,{span:11,className:"customBoxShadow formContainer"},n.createElement(s,{rules:[{required:!0}],name:["data","mode"],valuePropName:"checked"},n.createElement(I.Z,null,r("Email.Field.TestMode"))),n.createElement(s,{rules:[{required:!0}],name:"name",label:r("Email.Field.NameOfSender")},n.createElement(_.Z,null)),n.createElement(s,{rules:[{required:!0}],name:"email",label:r("Email.Field.EmailAddress")},n.createElement(_.Z,null)),n.createElement(s,{name:"outgoing_server",rules:[{required:!0}],label:r("Email.Field.OutGoingMailServer/SmtpServer")},n.createElement(_.Z,null))),n.createElement(c.Z,{span:11,className:"customBoxShadow formContainer"},n.createElement(s,{rules:[{required:!0}],name:"username",label:r("Email.Field.UserName")},n.createElement(_.Z,null)),n.createElement(s,{rules:[{required:!0}],name:"password",label:r("Email.Field.Password")},n.createElement(_.Z,{type:"password"})),n.createElement(s,{rules:[{required:!0}],name:"port",label:r("Email.Field.PortStandardPort25")},n.createElement(_.Z,null)),n.createElement(s,{rules:[{required:!0}],name:"host",label:r("Email.Field.Host")},n.createElement(_.Z,null)),n.createElement(s,{rules:[{required:!0}],name:"encryption",label:r("Email.Field.Encryption")},n.createElement(R.ZP.Group,null,n.createElement(R.ZP,{value:"sal"},r("Email.Field.Sal")),n.createElement(R.ZP,{value:"tls"},r("Email.Field.Tls")),n.createElement(R.ZP,{value:"noEncryption"},r("Email.Field.NoEncryption")))))),n.createElement(i.Ow,{isPending:t})))};var z=({singleData:e})=>{const{mutate:t,isLoading:a}=(0,s.useMutation)((({values:e})=>(0,M.d8)(e)));return n.createElement(K,{isPending:a,initialValues:e,onSubmit:e=>{const a={partner_id:null,slug:"email-authorization",data:Object.assign(Object.assign({},e),{mode:String(e.mode)})};t({values:a})}})};function Q(){const[e,t]=(0,n.useState)(),[a,l]=(0,n.useState)(!1),{t:m}=(0,o.$)(),c=[{breadcrumbName:r.ZP.t("Email.Title",{count:2}),path:"/admin/email/*"},{breadcrumbName:r.ZP.t("Email.Field.LoginDetail"),path:"/admin/email/*"}];return(0,n.useEffect)((()=>{l(!0),(0,M.lv)().then((e=>{t(e)})).finally((()=>l(!1)))}),[]),n.createElement("div",null,n.createElement(i.Xg.Breadcrumb,{routes:c}),n.createElement(i.Xg.Panel,null,a?n.createElement(i.aN,{title:m("Email.LoginDetail.Loader")}):n.createElement(z,{singleData:e})))}var J=({onSubmit:e,isPending:t,initialValues:a})=>{const[l]=w.Z.useForm(),{t:r}=(0,o.$)(),{Item:s}=w.Z;return(0,n.useEffect)((()=>{a&&l.setFieldsValue(a)}),[a]),n.createElement(C.MainContainer,null,n.createElement(X.FormContainer,{form:l,onFinish:e,name:"news-letter-form",labelCol:{span:8},colon:!1,wrapperCol:{span:16},labelAlign:"left"},n.createElement(m.Z,{wrap:!1,gutter:16,justify:"space-around"},n.createElement(c.Z,{span:11,className:"customBoxShadow formContainer"},n.createElement(s,{name:["data","mode"],valuePropName:"checked"},n.createElement(I.Z,null,r("Email.Field.TestMode"))),n.createElement(s,{name:"name",label:r("Email.Field.NameOfSender")},n.createElement(_.Z,null)),n.createElement(s,{name:"email",label:r("Email.Field.EmailAddress")},n.createElement(_.Z,null)),n.createElement(s,{name:"outgoing_server",label:r("Email.Field.OutGoingMailServer/SmtpServer")},n.createElement(_.Z,null)),n.createElement(s,{name:"username",label:r("Email.Field.UserName")},n.createElement(_.Z,null))),n.createElement(c.Z,{span:11,className:"customBoxShadow formContainer"},n.createElement(s,{name:"password",label:r("Email.Field.Password")},n.createElement(_.Z,{type:"password"})),n.createElement(s,{name:"host",label:r("Email.Field.Host")},n.createElement(_.Z,null)),n.createElement(s,{name:"port",label:r("Email.Field.PortStandardPort25")},n.createElement(_.Z,null)),n.createElement(s,{name:"encryption",label:r("Email.Field.Encryption")},n.createElement(R.ZP.Group,null,n.createElement(R.ZP,{value:"sal"},r("Email.Field.Sal")),n.createElement(R.ZP,{value:"tls"},r("Email.Field.Tls")),n.createElement(R.ZP,{value:"noEncryption"},r("Email.Field.NoEncryption")))))),n.createElement(i.Ow,{isPending:t})))};var Y=({singleData:e})=>{const{mutate:t,isLoading:a}=(0,s.useMutation)((({values:e})=>(0,M.EN)(e)));return n.createElement(J,{isPending:a,initialValues:e,onSubmit:e=>{const a={data:Object.assign(Object.assign({},e),{mode:String(e.mode)}),partner_id:null,slug:"newsletter-authorization"};t({values:a})}})};function ee(){const[e,t]=(0,n.useState)(),[a,l]=(0,n.useState)(!1),{t:r}=(0,o.$)(),m=[{breadcrumbName:r("Email.Title",{count:2}),path:"/admin/email/*"},{breadcrumbName:r("Email.Field.NewsLetter"),path:"/admin/email/*"}];return(0,n.useEffect)((()=>{l(!0),(0,M.iE)().then((e=>t(e))).finally((()=>l(!1)))}),[]),n.createElement("div",null,n.createElement(i.Xg.Breadcrumb,{routes:m}),n.createElement(i.Xg.Panel,null,a?n.createElement(i.aN,{title:r("Email.NewsLetter.Loader")}):n.createElement(Y,{singleData:e})))}var te="emasdsdil/*";class ae{constructor(){this.entity="/notice-template",this.title=[r.ZP.t("Email.Title"),r.ZP.t("Email.Title",{count:2})],this.apiService=new f.Vx(this.entity,this.title[0]),this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin${te}`}],this.detailColumns=[{key:"id",label:r.ZP.t("Global.ID")},{key:"name",label:r.ZP.t("Email.Field.Name")}],this.tableColumns=[{width:250,key:"name",dataIndex:"name",title:r.ZP.t("Global.Name")},{width:180,key:"type",dataIndex:"type",title:r.ZP.t("Global.Type")}]}}function ne(){const e=new ae;return n.createElement(i.Xg,{module:e},n.createElement(i.Xg.Breadcrumb,null),n.createElement(i.Xg.Panel,null,n.createElement(i.s_.Header,{hasNew:!0,hasSearch:!0,newLink:"/admin/email/template/upsert",noListView:!0,noDescription:!0}),n.createElement(i.s_.ListView,{module:e,updateLink:"/admin/email/template/upsert"})))}var le=a(53988),re=a(3487);var ie=()=>{const e=(0,l.s0)(),{template_id:t}=(0,l.UO)(),[a,o]=(0,n.useState)({}),[m,c]=(0,n.useState)(!1),s=new ae,d=s.title[0],u=[...s.breadcrumbItems,{path:"",breadcrumbName:t?`${r.ZP.t("Global.Update")} ${d} - ${t}`:`${r.ZP.t("Global.New")} ${d}`}];(0,n.useEffect)((()=>{t&&(c(!0),(0,M.cP)(Number(t)).then((e=>{o(e)})).finally((()=>{c(!1)})))}),[]);const E=()=>{e(-1)};return n.createElement(i.Xg,{module:s},n.createElement(i.Xg.Breadcrumb,{routes:u}),n.createElement(i.Xg.Panel,null,n.createElement(re.j,null,n.createElement("div",{className:"header"},n.createElement(le.Z,{onClose:E,items:u})),m?n.createElement(i.aN,null):n.createElement(B,{singleData:a,onCallback:E}))))};var oe={MainContainer:d.ZP.div`
  padding: 18px;
  & .row {
    margin-bottom: 50px;
    & .first-col,
    & .second-col {
      padding: 12px;
      border-radius: 4px;
      box-shadow: 0 0 10px #eaece4;

      & .ant-form-item {
        padding: 12px;
        & .ant-input {
          height: 262px;
        }
      }
    }
  }
`};var me=({onSubmit:e,initialValues:t,isPending:a})=>{const[l]=w.Z.useForm(),{t:r}=(0,o.$)(),{Item:s}=w.Z;return(0,n.useEffect)((()=>{t&&l.setFieldsValue(t)}),[]),n.createElement(oe.MainContainer,null,n.createElement(w.Z,{form:l,onFinish:e,name:"signature-form",labelCol:{span:8},initialValues:{locale:"en"},wrapperCol:{span:24},labelAlign:"left"},n.createElement(m.Z,{gutter:16,className:"row"},n.createElement(c.Z,{span:12,className:"first-col",flex:2},n.createElement(s,{name:"plain",labelCol:{span:24},label:r("Email.Field.PlainTextSignature")},n.createElement(i.H4,{placeholder:r("Email.Field.SomethingAboutProductOrAnything")}))),n.createElement(c.Z,{span:12,className:"second-col"},n.createElement(s,{labelCol:{span:24},name:"html",label:r("Email.Field.HtmlSignature")},n.createElement(i.H4,null)))),n.createElement(i.Ow,{isPending:a})))};var ce=({singleData:e})=>{const{mutate:t,isLoading:a}=(0,s.useMutation)((({values:e})=>(0,M.tb)(e)));return n.createElement(me,{isPending:a,initialValues:e,onSubmit:e=>{const a={partner_id:null,slug:"mail-signatures",data:[{locale:"en",html:e.html,plain:e.plain}]};t({values:a})}})};function se(){const[e,t]=(0,n.useState)(),[a,l]=(0,n.useState)(!1),{t:m}=(0,o.$)(),c=[{breadcrumbName:r.ZP.t("Email.Title",{count:1}),path:"/admin/email/*"},{breadcrumbName:r.ZP.t("Email.Field.Signature"),path:"/admin/email/*"}];return(0,n.useEffect)((()=>{l(!0),(0,M.o$)().then((e=>{t(e)})).finally((()=>l(!1)))}),[]),n.createElement("div",null,n.createElement(i.Xg.Breadcrumb,{routes:c}),n.createElement(i.Xg.Panel,null,a?n.createElement(i.aN,{title:m("Email.Signature.Loader")}):n.createElement(ce,{singleData:e})))}function de(){return n.createElement(l.Z5,null,n.createElement(l.AW,{path:"info-service",element:n.createElement(H,null)}),n.createElement(l.AW,{path:"news-letter",element:n.createElement(ee,null)}),n.createElement(l.AW,{path:"automatic",element:n.createElement(D,null)}),n.createElement(l.AW,{path:"login-detail",element:n.createElement(Q,null)}),n.createElement(l.AW,{path:"signature",element:n.createElement(se,null)}),n.createElement(l.AW,{path:"template",element:n.createElement(ne,null)}),n.createElement(l.AW,{path:"template/upsert",element:n.createElement(ie,null)}),n.createElement(l.AW,{path:"template/upsert/:template_id",element:n.createElement(ie,null)}))}},18878:function(e,t,a){a.d(t,{WB:function(){return c},a5:function(){return s},lv:function(){return d},d8:function(){return u},iE:function(){return E},EN:function(){return p},vJ:function(){return b},fG:function(){return f},o$:function(){return g},tb:function(){return v},t4:function(){return Z},cP:function(){return w},Qj:function(){return y},NT:function(){return P},QB:function(){return F},Mn:function(){return _}});var n=a(38056),l=a(6110),r=a(14206),i=a.n(r),o=(a(84916),function(e,t,a,n){function l(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,r){function i(e){try{m(n.next(e))}catch(e){r(e)}}function o(e){try{m(n.throw(e))}catch(e){r(e)}}function m(e){e.done?a(e.value):l(e.value).then(i,o)}m((n=n.apply(e,t||[])).next())}))});const m="notice",c=()=>o(void 0,void 0,void 0,(function*(){try{return(yield i().get(`/${m}`)).data.data}catch(e){throw new Error(e)}})),s=({id:e,notice_template_id:t})=>o(void 0,void 0,void 0,(function*(){try{const a=yield i().put(`/${m}/${e}`,{notice_template_id:t});return l.ZP.success(n.ZP.t("Global.UpdatedSuccessfully",{title:n.ZP.t("Email.Field.Automatics")})),a.data.data}catch(e){throw new Error(e)}})),d=()=>o(void 0,void 0,void 0,(function*(){try{return(yield i().get("/settings/email-authorization")).data.data}catch(e){throw new Error(e)}})),u=e=>o(void 0,void 0,void 0,(function*(){try{const t=yield i().post("/settings",e);return l.ZP.success(n.ZP.t("Global.UpdatedSuccessfully",{title:n.ZP.t("Email.Field.LoginDetail")})),t.data.data}catch(e){throw new Error(e)}})),E=()=>o(void 0,void 0,void 0,(function*(){try{return(yield i().get("/settings/newsletter-authorization")).data.data}catch(e){throw new Error(e)}})),p=e=>o(void 0,void 0,void 0,(function*(){try{const t=yield i().post("/settings",e);return l.ZP.success(n.ZP.t("Global.UpdatedSuccessfully",{title:n.ZP.t("Email.Field.NewsLetter")})),t.data.data}catch(e){throw new Error(e)}})),b=()=>o(void 0,void 0,void 0,(function*(){try{return(yield i().get("/settings/bcc-setting")).data.data}catch(e){throw new Error(e)}})),f=e=>o(void 0,void 0,void 0,(function*(){try{const t=yield i().post("settings",e);return l.ZP.success(n.ZP.t("Global.UpdatedSuccessfully",{title:n.ZP.t("Email.Field.InfoService")})),t.data.data}catch(e){throw new Error(e)}})),g=()=>o(void 0,void 0,void 0,(function*(){try{return(yield i().get("/settings/mail-signatures")).data.data[0]}catch(e){throw new Error(e)}})),v=e=>o(void 0,void 0,void 0,(function*(){try{const t=yield i().post("/settings",e);return l.ZP.success(n.ZP.t("Global.UpdatedSuccessfully",{title:n.ZP.t("Email.Field.Signature")})),t.data.data}catch(e){throw new Error(e)}})),h="/notice-template",Z=e=>o(void 0,void 0,void 0,(function*(){try{const t=yield i().get(`${h}`,{params:e});return t.data.data.map((e=>Object.assign(Object.assign({},e),{data:e.data})))}catch(e){throw new Error(e)}})),w=e=>o(void 0,void 0,void 0,(function*(){try{return(yield i().get(`${h}/${e}`)).data}catch(e){throw new Error(e)}})),y=()=>o(void 0,void 0,void 0,(function*(){try{return(yield i().get("/document-types",{params:{per_page:100}})).data.data}catch(e){throw new Error(e)}})),P=()=>o(void 0,void 0,void 0,(function*(){try{return(yield i().get("/templates/variables")).data.data}catch(e){throw new Error(e)}})),F=(e,t)=>o(void 0,void 0,void 0,(function*(){try{const a=yield i().put(`${h}/${e}`,t);return l.ZP.success(n.ZP.t("Global.UpdatedSuccessfully",{title:n.ZP.t("Email.Field.Template")})),a.data.data}catch(e){throw new Error(e)}})),_=e=>o(void 0,void 0,void 0,(function*(){try{const t=yield i().post(`${h}`,e);return l.ZP.success(n.ZP.t("Global.CreatedSuccessfully",{title:n.ZP.t("Email.Field.Template")})),t.data.data}catch(e){throw new Error(e)}}))},35552:function(e,t,a){a.d(t,{ci:function(){return m},R2:function(){return s},ji:function(){return u}});var n=a(39338),l=a(59748),r=(a(84916),a(18878)),i=function(e,t,a,n){function l(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,r){function i(e){try{m(n.next(e))}catch(e){r(e)}}function o(e){try{m(n.throw(e))}catch(e){r(e)}}function m(e){e.done?a(e.value):l(e.value).then(i,o)}m((n=n.apply(e,t||[])).next())}))};const o=(0,n.cn)([]),m=(0,l.el)((e=>({queryKey:["documentTypes",e(o)],queryFn:()=>i(void 0,void 0,void 0,(function*(){return yield(0,r.Qj)()}))}))),c=(0,n.cn)([]),s=(0,l.el)((e=>({queryKey:["variables",e(c)],queryFn:()=>i(void 0,void 0,void 0,(function*(){return yield(0,r.NT)()}))}))),d=(0,n.cn)([]),u=(0,l.el)((e=>({queryKey:["templates",e(d)],queryFn:()=>i(void 0,void 0,void 0,(function*(){return yield(0,r.t4)({per_page:100})}))})))},3487:function(e,t,a){a.d(t,{j:function(){return n}});const n=a(26761).ZP.div`
  padding: 32px;
  .header {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px dashed #ededed;
  }
`}}]);